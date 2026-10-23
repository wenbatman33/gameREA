"""Captured Seth 2 client with an isolated, explicitly synthetic backend."""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, unquote
import copy, json, mimetypes, random, re, threading, time, uuid, sys

ROOT = Path(__file__).resolve().parent
MIRROR = ROOT / 'mirror' / 'play.godeezone1.com'
GAME = 'egames/22020103b31b7390f07b1551e8538589b5e51967/game/'
PORT = 18767
STATE_FILE=ROOT/'local-state.json'
SESSIONS = json.loads(STATE_FILE.read_text())if STATE_FILE.is_file()else{}
LOCK = threading.Lock()
DEVELOPMENT_MUTE = '--mute' in sys.argv

def fixtures():
    result = {}
    for path in (MIRROR / GAME / 'assets/g1005/import').glob('*/*.json'):
        value = json.loads(path.read_text())
        if isinstance(value, list) and len(value) > 5 and isinstance(value[5], list) and value[5]:
            row = value[5][0]
            if isinstance(row, list) and len(row) > 2 and isinstance(row[1], str) and re.fullmatch(r'spin[1-8]', row[1]):
                item = copy.deepcopy(row[2]);item['token'] = 'local-only'
                result[row[1]] = item
    return result

FIXTURES = fixtures()

def state():
    value = copy.deepcopy(FIXTURES['spin1']['engine']['gameState'][-1])
    value.update(action='spin', totalStake=1, freeGameCount=0, superMainGameCount=0,
                 isGoldenFg=False, isJp='', currentTimes=0, roundWinnings=0,
                 totalWinnings=0, totalViews=1, currentView=0, startFreeGame=False,
                 noWinReward=0, winSymbols=[], timesSymbols=[], newTimesSymbols=[],
                 splitList=[], posTransform=[], maleTotemLevel=0, femaleTotemLevel=0)
    value['view'] = [[1+(r*6+c)%9 for c in range(6)] for r in range(5)]
    return value

def default_settings():
    return dict(advancedSettings=dict(sounds=dict(backgroundVolume=0.5,effectVolume=0.8),notify=False,turbo=False),
                autoPlay=dict(numberOfPlays=[10,50,100,-1],stopOnWinMultiplier=False,stopOnBalance=False,stopOnFreeSpin=True,stopOnJackpot=True),
                stakeIndex=0,ratioIndex=0)

def platform(s):
    result = dict(game=dict(stakeValues=[1,2,5,10,20,50],ratioValues=[0.05,0.1,0.5,1],
                          stakeList=[],superMgRealStakeLimit=0),
                player=dict(name='LOCAL',displayName='本機假資料',id='LOCAL',uid='LOCAL',avatar='0',avatarUrl='',
                            balance=dict(currency='TWD',amount=s['balance'],gemAmount=0),
                            settings=copy.deepcopy(s.get('settings'))or default_settings()),disableRotate=False)
    if DEVELOPMENT_MUTE:
        result['player']['settings']['advancedSettings']['sounds']=dict(backgroundVolume=0,effectVolume=0)
    return result

def definition():
    return dict(winlineDefs=[dict(order=str(i),line=[]) for i in range(20)],
                winDefs=[],symbolDefs=[dict(symbol=str(i),displayName=f'symbol_{i}',isWild=False)for i in range(1,20)],
                digital=2,winOddsTypes=dict(big=20,super=50,mega=100,ultra=200,legendary=500),
                extraFgRounds=5,buyFeature=[dict(feature='freeSpin',featureIndex=0,featureRate=100)],prizeAutoNextDelay=2,autoConfirmTime=2,
                autoSpinInterval=0.3,smallPrizeDelay=0,bigPrizeDelay=1.2,
                viewDefs=dict(type='grid',view=[[str(r*6+c)for c in range(6)]for r in range(5)]))

def close_round(s, spin_id):
    pending=s['pending'].pop(spin_id,None)
    if pending:
        s['balance']=round(s['balance']+pending['win'],2)
        pending['endTime']=time.time_ns()//1_000_000
        s['history'].append(pending)

def ordinary_stages(bet, hit, multiplier):
    first=state();first['totalStake']=bet
    if not hit:return [first]
    amount=round(bet*multiplier,2)
    for pos in range(8):first['view'][pos//6][pos%6]=6
    first.update(winSymbols=[dict(symbol=6,winnings=amount,symbolPos=list(range(8)))],roundWinnings=amount,totalWinnings=amount,totalViews=2)
    last=state();last.update(totalStake=bet,roundWinnings=amount,totalWinnings=amount,totalViews=2,currentView=1)
    return [first,last]

def bonus_stages(bet,golden,rate=30,multiplier=2):
    intro=state();intro.update(totalStake=bet,startFreeGame=True,freeGameCount=15,isGoldenFg=golden)
    for pos in range(4):intro['view'][pos//6][pos%6]=16 if golden and pos==3 else 15
    stages=[intro]
    remaining=14
    if golden:
        sample=copy.deepcopy(FIXTURES['spin4']['engine']['gameState'])
        # Preserve shipped split/lock fields, but use the FreeGame state machine.
        factor=bet/sample[0]['totalStake']
        previous=None
        for item in sample:
            def scale(value):
                if isinstance(value,dict):
                    for k,v in value.items():
                        if k in ['totalStake','roundWinnings','totalWinnings','winnings','noWinReward']and isinstance(v,(int,float)):value[k]=round(v*factor,2)
                        else:scale(v)
                elif isinstance(value,list):
                    for v in value:scale(v)
            scale(item)
            if previous is not None and not previous['winSymbols']:remaining-=1
            item.update(action='freeSpin',isGoldenFg=True,freeGameCount=remaining,superMainGameCount=0,startFreeGame=False)
            previous=item
        stages.extend(sample)
        remaining-=1
    total=stages[-1]['totalWinnings']
    for count in range(remaining,-1,-1):
        items=ordinary_stages(bet,random.random()<rate/100,multiplier)
        round_win=items[-1]['totalWinnings']
        for item in items:
            item.update(action='freeSpin',isGoldenFg=golden,freeGameCount=count,totalWinnings=round(total+item['totalWinnings'],2))
        stages.extend(items);total=round(total+round_win,2)
    for i,item in enumerate(stages):item.update(currentView=i,totalViews=len(stages))
    return stages

def respond(name, data, key):
    s = SESSIONS.setdefault(key,dict(balance=10000.0,round=0,pending={},history=[],winRate=30,payoutMultiplier=2,nextFeature='normal',settings=None))
    if s['settings']is None:s['settings']=default_settings()
    if not s.get('audioDefaultsVersion'):
        # Earlier builds stored development mute as the release default.
        sounds=s['settings']['advancedSettings']['sounds']
        if sounds==dict(backgroundVolume=0,effectVolume=0):
            s['settings']['advancedSettings']['sounds']=default_settings()['advancedSettings']['sounds']
        s['audioDefaultsVersion']=2
    reply = dict(status=200,message='LOCAL SYNTHETIC',eventName=name,token=key,platform=platform(s))
    if name == 'initial':
        for old_id in list(s['pending'])[:-1]:close_round(s,old_id)
        pending=next(reversed(s['pending'].values()),None)
        reply.update(engine=dict(definition=definition(),gameState=copy.deepcopy(pending['stages'])if pending else[state()],spinId=pending['id']if pending else''),isResuming=bool(pending),
                     pools={f'jp-{n}':0 for n in ['mini','minor','major','grand']},posters=[],slotTable=dict(number=1,roomId='LOCAL'),platform=platform(s))
    elif name == 'spin':
        if data.get('forceClose'):close_round(s,data['forceClose'])
        if data.get('spinId') in s['pending']:
            pending=s['pending'][data['spinId']]
            reply.update(engine=dict(gameState=copy.deepcopy(pending['stages']),spinId=pending['id']),platform=platform(s))
            return reply
        stake_index=data.get('stakeIndex',0);ratio_index=data.get('ratioIndex',0)
        if type(stake_index) is not int or type(ratio_index) is not int or not 0<=stake_index<6 or not 0<=ratio_index<4:
            return dict(status=400,message='Invalid local stake',token=key)
        bet=[1,2,5,10,20,50][stake_index]*[0.05,0.1,0.5,1][ratio_index]*20
        feature=s['nextFeature']
        if data.get('action')=='buyFeature':feature='free'
        cost=bet*(100 if data.get('action')=='buyFeature'else 1)
        if cost>s['balance']:return dict(status=400,message='本機虛擬餘額不足',token=key)
        s['balance']=round(s['balance']-cost,2);s['round']+=1;s['nextFeature']='normal'
        if feature in ['free','awakening']:
            stages=bonus_stages(bet,feature=='awakening',s['winRate'],s['payoutMultiplier'])
        elif feature in ['jackpot','treasure']:
            item=state();item.update(totalStake=bet,roundWinnings=round(bet*s['payoutMultiplier'],2),totalWinnings=round(bet*s['payoutMultiplier'],2))
            if feature=='jackpot':
                item['isJp']='jp-mini';item['view'][0][0]=14;item['view'][0][1]=14
            else:item['noWinReward']=item['totalWinnings']
            stages=[item]
        else:stages=ordinary_stages(bet,random.random()<s['winRate']/100,s['payoutMultiplier'])
        win=stages[-1]['totalWinnings']
        spin_id='LOCAL-'+uuid.uuid4().hex
        s['pending'][spin_id]=dict(id=spin_id,win=win,bet=cost,stages=copy.deepcopy(stages),feature=feature)
        # Buying reserves a round. The client reads gameState.spinId, then
        # requests that exact round before playing its stage array.
        reply.update(engine=dict(gameState=dict(spinId=spin_id)if data.get('action')=='buyFeature'else stages,spinId=spin_id),platform=platform(s))
    elif name == 'closeSpin':
        close_round(s,data.get('spinId'))
        reply.update(engine=dict(gameState={}),win=0,platform=platform(s))
    elif name=='configure':
        rate=data.get('winRate',s['winRate']);multiplier=data.get('payoutMultiplier',s['payoutMultiplier']);feature=data.get('nextFeature',s['nextFeature'])
        if type(rate)not in[int,float]or not 0<=rate<=100 or type(multiplier)not in[int,float]or not 0.1<=multiplier<=100 or feature not in['normal','free','awakening','jackpot','treasure']:
            return dict(status=400,message='Invalid local configuration',token=key)
        s.update(winRate=rate,payoutMultiplier=multiplier,nextFeature=feature)
        reply.update(winRate=rate,payoutMultiplier=multiplier,nextFeature=feature,pendingCount=len(s['pending']),balance=s['balance'])
    elif name=='updateSettings':
        changed=data.get('data',{})
        if data.get('type')=='game':
            for k in ['stakeIndex','ratioIndex']:
                if k in changed:s['settings'][k]=changed[k]
            for k in ['turbo','notify','sounds']:
                if k in changed and (k!='sounds'or not DEVELOPMENT_MUTE):s['settings']['advancedSettings'][k]=changed[k]
            for k in ['backgroundVolume','effectVolume']:
                if k in changed and not DEVELOPMENT_MUTE:s['settings']['advancedSettings']['sounds'][k]=changed[k]
    elif name in ['getSlotTables','getSlotTableDetail']:
        reply.update(number=1,roomId='LOCAL',status='available',bet=0,win=0,tables=[],slotTables=[],total=0,page=1)
    elif name=='getBetRecords':
        before=data.get('lt',0);limit=data.get('rows',16)
        limit=max(1,min(100,limit))if type(limit)is int else 16
        rows=[dict(id=h['id'],name='戰神賽特2（本機）',roomId='LOCAL',totalStake=h['bet'],win=h['win'],profit=round(h['win']-h['bet'],2),endTime=h['endTime'],hasFree=h.get('feature')in['free','awakening'],isFeature=h.get('feature')in['free','awakening'])for h in reversed(s['history'])if not before or h['endTime']<before]
        reply.update(data=rows[:limit],total=len(rows))
    elif name=='getUserReport':
        bet=round(sum(h['bet']for h in s['history']),2);win=round(sum(h['win']for h in s['history']),2)
        rows=[dict(name='戰神賽特2（本機）',bet=bet,win=win,profit=round(win-bet,2),betCount=len(s['history']))]if s['history']else[]
        reply.update(content=dict(list=rows))
    return reply

class Handler(BaseHTTPRequestHandler):
    def send(self,body,kind='application/json',status=200):
        self.send_response(status);self.send_header('Content-Type',kind)
        self.send_header('Cache-Control','no-store');self.send_header('Content-Length',str(len(body)))
        self.send_header('Content-Security-Policy',"connect-src 'self' blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:")
        self.end_headers();self.wfile.write(body)
    def do_POST(self):
        if not self.path.startswith('/local-api/'):self.send_error(404);return
        try:
            request=json.loads(self.rfile.read(int(self.headers.get('Content-Length',0))))
            key=request.get('session','');assert key.startswith('local-')
            name=unquote(self.path.removeprefix('/local-api/'));data=request.get('data',{})
            with LOCK:
                reply=respond(name,data,key)
                snapshot=STATE_FILE.with_suffix('.tmp')
                snapshot.write_text(json.dumps(SESSIONS,ensure_ascii=False));snapshot.replace(STATE_FILE)
                with (ROOT/'local-api.jsonl').open('a')as log:log.write(json.dumps(dict(event=name,session=key,status=reply['status'],pendingCount=len(SESSIONS[key]['pending']),data={k:v for k,v in data.items()if k not in ['token','deviceInfo']},balance=SESSIONS[key]['balance']))+'\n')
            self.send(json.dumps(reply,ensure_ascii=False).encode())
        except (ValueError,AssertionError,TypeError):self.send_error(400)
    def do_GET(self):
        path=unquote(urlsplit(self.path).path)
        if path=='/':
            self.send_response(302);self.send_header('Location','/'+GAME+'?t=local-'+uuid.uuid4().hex+'&gn=golden-seth&l=zh-tw&ct=slot&gt=slot-erase-any-times-2&socket_url=127.0.0.1:18767&view_mode=portrait&gv=261006&table=1');self.end_headers();return
        if path=='/local-controls.js':self.send((ROOT/'local-controls.js').read_bytes(),'application/javascript');return
        if path.endswith('/error.html'):
            self.send('<!doctype html><meta charset="utf-8"><h1>本機測試流程中斷</h1><p>這是本機假後端的錯誤頁。請回到入口重新開啟；不會連線原站或扣除實際金幣。</p><a href="/">重新開啟本機遊戲</a>'.encode(),'text/html; charset=utf-8');return
        file=(MIRROR/path.lstrip('/')).resolve()
        alias='/'+GAME+'assets/slotFramework/'
        if path.startswith(alias):file=MIRROR/'slotFramework/14ee78206168302dd5e294aaa97f5c0b21de68f5'/path.removeprefix(alias)
        if path.rstrip('/')=='/'+GAME.rstrip('/'):file=MIRROR/GAME/'index.html'
        if not file.is_relative_to(MIRROR.resolve())or not file.is_file():
            with (ROOT/'missing-requests.jsonl').open('a')as log:log.write(json.dumps({'path':path})+'\n')
            self.send_error(404);return
        body=file.read_bytes()
        if path.endswith('/socket.io.js'):body=(ROOT/'local-socket.js').read_bytes()
        elif file == MIRROR/'slotFramework/14ee78206168302dd5e294aaa97f5c0b21de68f5/index.js':
            text=(ROOT/'framework-decoded.js').read_text()
            original=(ROOT/'extracted/framework-CryptoTool.ts.js').read_text()
            stub='System.register("chunks:///_virtual/CryptoTool.ts",[],function(e){return{setters:[],execute:function(){e("CryptoTool",{ready:async function(){},initKey:async function(){},clear:function(){},kid:"local",encrypt:async function(v){return v},decrypt:async function(v){return v}})}}});'
            assert original in text;text=text.replace(original,stub,1);body=text.encode()
        if file.suffix in ['.js','.json','.css','.html']:
            text=body.decode().replace('https://play.godeezone1.com',f'http://127.0.0.1:{PORT}')
            if file.name=='index.html':text=text.replace('<title>ATG Games</title>','<title>戰神賽特2 本機模擬版</title>').replace('<body>','<body><script src="/local-controls.js"></script>')
            body=text.encode()
        self.send(body,mimetypes.guess_type(file.name)[0]or'application/octet-stream')
    def log_message(self,*args):pass

if __name__=='__main__':
    print(f'Local Seth 2 prototype http://127.0.0.1:{PORT}',flush=True)
    ThreadingHTTPServer(('127.0.0.1',PORT),Handler).serve_forever()
