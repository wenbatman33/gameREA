"""AFA captured client with a loopback-only, synthetic card-draw backend."""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, parse_qs, unquote
import json, mimetypes, random, re, threading, time, uuid

ROOT = Path(__file__).resolve().parent
PORT = 18766
TITLES = {'CA261119': '草船借箭', 'CA261141': '血戰長坂', 'CA261130': '火燒赤壁'}
PACKS = {gid: json.loads((ROOT / 'fixtures' / (gid + '.json')).read_text()) for gid in TITLES}
LOCK = threading.Lock()
SESSIONS = {}

def local_art(obj):
    if isinstance(obj, dict): return {k: local_art(v) for k, v in obj.items()}
    if isinstance(obj, list): return [local_art(v) for v in obj]
    if isinstance(obj, str) and obj.startswith('https://storge.afagaming.cc/'):
        return f'http://127.0.0.1:{PORT}/remote-assets/storge.afagaming.cc/' + urlsplit(obj).path.lstrip('/')
    return obj

LOCAL_PACKS = {gid: local_art(pack) for gid, pack in PACKS.items()}
for pack in LOCAL_PACKS.values():
    pack['PackInfo']['Config']['Rules'] = []  # Hide unsupported bonus purchases in the local client.

def table(gid):
    return dict(ArcadeID=PACKS[gid]['PackInfo']['ID'], AgentID=0, Number=1,
                TableNumber='LOCAL', PlayerLimit=10, PlayerCount=0, BurstRate=0,
                URNoDraw=0, SSRNoDraw=0, SSRAvgDraw=0, Popularity=0)

def session(token):
    default_game=next((g for g in PACKS if token.startswith('local-'+g+'-')), 'CA261119')
    return SESSIONS.setdefault(token, dict(balance=250_000_000, game=default_game, draws=0,
                                           acc_bet=0, acc_win=0, rng=random.Random(uuid.uuid4().int)))

class Handler(BaseHTTPRequestHandler):
    def send_body(self, body, kind='application/json; charset=utf-8', status=200):
        self.send_response(status)
        self.send_header('Content-Type', kind)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        # Client traffic is restricted to this local origin, including the unchanged engine.
        self.send_header('Content-Security-Policy', "connect-src 'self' blob:; img-src 'self' data: blob:; media-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:")
        self.end_headers(); self.wfile.write(body)
    def json(self, data, error=None):
        self.send_body(json.dumps({'Data': data, 'Err': error}, ensure_ascii=False).encode())
    def do_GET(self):
        u = urlsplit(self.path)
        if u.path == '/help':
            self.send_body(b'''<!doctype html><meta charset="utf-8"><h2>Local demo</h2><p>Synthetic ordinary card draws with virtual balance. Bonus purchase and special modes are unavailable.</p><button onclick="parent.postMessage({type:'close'},location.origin)">Continue</button>''', 'text/html; charset=utf-8');return
        if u.path == '/':
            links = ''.join(f'<li><a href="/play/{g}">{n}</a></li>' for g,n in TITLES.items())
            self.send_body(('<!doctype html><meta charset="utf-8"><title>AFA 本機研究版</title><h1>AFA 本機研究版</h1><p>原版客戶端與素材；一般抽卡使用合成結果及本機虛擬餘額。特殊獎勵尚未還原。</p><ul>'+links+'</ul>').encode(), 'text/html; charset=utf-8'); return
        if u.path.startswith('/play/'):
            gid=u.path.rsplit('/',1)[-1]
            if gid not in PACKS: self.send_error(404); return
            token='local-'+gid+'-'+uuid.uuid4().hex
            with LOCK: session(token)['game']=gid
            self.send_response(302);self.send_header('Location', f'/ca2501/?lang=zh-cht&platform=37&token={token}&txGameID={gid}&wt=3');self.end_headers();return
        if u.path.startswith('/api/v1/'):
            self.api(u.path, {k:v[0] for k,v in parse_qs(u.query).items()});return
        path=unquote(u.path)
        if path.startswith('/ca2501/'):
            rel=path.removeprefix('/ca2501/') or 'index.html';base=ROOT/'afa-public'
        elif path.startswith('/remote-assets/'):
            rel=path.removeprefix('/remote-assets/');base=ROOT/'remote-assets'
        else:self.send_error(404);return
        file=(base/rel).resolve()
        if not file.is_relative_to(base.resolve()) or not file.is_file():
            with (ROOT/'missing-requests.jsonl').open('a') as f:f.write(json.dumps({'path':path})+'\n')
            self.send_error(404);return
        body=file.read_bytes()
        if rel=='src/settings.dffed.json':
            settings=json.loads(body);settings['settings']['ServerHttp']=f'http://127.0.0.1:{PORT}/api/v1';settings['settings']['Encrypt']=False
            body=json.dumps(settings).encode()
        elif rel=='src/polyfills.bundle.5adbf.js':
            # A classic script must execute even if another browser script defines AMD.
            text=body.decode()
            wrapper='!function(t){"function"==typeof define&&define.amd?define(t):t()}'
            assert text.startswith(wrapper)
            body=text.replace(wrapper,'!function(t){t()}',1).encode()
        elif rel=='assets/main/index.f8304.js':
            text=body.decode()
            # Skip the automatic remote tutorial iframe, which is not required for drawing.
            begin=text.index('System.register("chunks:///_virtual/GameInfoPopup.ts"')
            end=text.find('System.register(',begin+16)
            part=text[begin:end]
            needle='{key:"_tryToOpen",value:function(){'
            assert part.count(needle)==1
            part=part.replace(needle,needle+'return;')
            text=text[:begin]+part+text[end:]
            body=text.encode()
        elif rel=='index.html':
            text=body.decode();text=re.sub(r'<script\s+async\s+src="https://txlobby[^\"]+"\s*></script>', '', text)
            text=text.replace('<title>AFA Gaming</title>','<title>AFA 本機研究版</title>')
            # A plain label identifies the simulated backend without creating game art.
            text=text.replace('<body>','<body><div style="position:fixed;top:0;left:0;z-index:9999;color:white;background:#17212b;padding:3px 8px;font:12px sans-serif">本機假資料 · 一般抽卡試作</div>')
            body=text.encode()
        self.send_body(body, mimetypes.guess_type(file.name)[0] or 'application/octet-stream')
    def do_POST(self):
        try:
            form=json.loads(self.rfile.read(int(self.headers.get('Content-Length','0'))) or '{}')
            if not isinstance(form,dict):raise ValueError('Expected plain local JSON')
        except (ValueError,TypeError):self.send_error(400);return
        self.api(urlsplit(self.path).path,form)
    def api(self,path,form):
        token=self.headers.get('Authorization','Bearer local').removeprefix('Bearer ')
        with LOCK:
            s=session(token);gid=s['game'];data=None;err=None
            if path=='/api/v1/auth/login':
                data=dict(AccessToken='local-demo',NickName='LOCAL DEMO',Currency='COP',CurrencySymbol='$',Balance=s['balance'],RuleURL=f'http://127.0.0.1:{PORT}/help',Setting={},JackpotState={level:dict(Count=0,CollectCount=target) for level,target in [('UR',10),('SSR',50),('SR',200),('R',500),('N',999)]})
            elif path in ['/api/v1/auth/balance','/api/v1/auth/me']:data=dict(Balance=s['balance'],KickAt=None)
            elif path=='/api/v1/packs/query':data=dict(Packs=list(PACKS))
            elif path=='/api/v1/packs/info':data=dict(Packs=[LOCAL_PACKS[g] for g in form.get('GameIDs',list(PACKS)) if g in PACKS])
            elif path=='/api/v1/table/arcade/query':
                gid=next((g for g,p in PACKS.items() if p['PackInfo']['ID']==form.get('PackID')),gid)
                data=dict(Count=1,Arcades=[table(gid)],Pagination=dict(Page=1,PageSize=1,TotalCount=1,TotalPages=1,HasNextPage=False,HasPrevPage=False))
            elif path=='/api/v1/packs/select':
                if form.get('GameID') in PACKS:s['game']=form['GameID']
                data=dict(GameID=s['game'],ArcadeID=table(s['game'])['ArcadeID'])
            elif path=='/api/v1/table/records':data=dict(Records=[],NextSameLevelCount=0)
            elif path in ['/api/v1/player/history','/api/v1/player/history/detail']:data=dict(Records=[],Pagination=dict(Page=1,PageSize=20,TotalCount=0,TotalPages=0))
            elif path=='/api/v1/packs/play':
                pack=PACKS[gid];count=form.get('Count',1);mult=form.get('Multiplier',1) or 1
                if not isinstance(count,int) or count not in [1,3,5,10,15,20,30,50,100] or not isinstance(mult,int) or mult not in pack['PackInfo']['Config']['Multipliers'] or form.get('RuleType',0)!=0:
                    err='UNSUPPORTED_LOCAL_MODE'
                else:
                    bet=pack['PackInfo']['Bet']*mult*(1 if pack['PackInfo']['MathID']=='divinepack' else count)
                    if bet>s['balance']:err='1004'
                    else:
                        cards=pack['Modes']['normal']['Cards'];results=[]
                        for _ in range(count):
                            # Synthetic ordinary draws only; this does not reconstruct bonus state or RTP.
                            card=s['rng'].choices(cards,weights=[c['Weight'] for c in cards],k=1)[0]
                            results.append(dict(Type=1,CardInfo=card,Win=card['WinAmount']))
                        win=sum(r['Win'] for r in results)*mult;s['balance']+=win-bet;s['draws']+=count;s['acc_bet']+=bet;s['acc_win']+=win
                        data=dict(Balance=s['balance'],TransactionID='LOCAL-'+uuid.uuid4().hex,Result=dict(AccTotalBet=s['acc_bet'],AccTotalWin=s['acc_win'],TotalBet=bet,TotalWin=win,PackID=pack['PackInfo']['ID'],Main=dict(TotalBet=bet,TotalWin=win,WinResults=results,Multiplier=mult,IsDivineTriggered=False)))
            else:self.send_error(404);return
            with (ROOT/'local-api.jsonl').open('a')as f:f.write(json.dumps(dict(path=path,game=s['game'],balance=s['balance'],draws=s['draws'],error=err,query={k:v for k,v in form.items() if k in ['GameIDs','PackID','GameID','Count','Multiplier','RuleType']}))+'\n')
            self.json(local_art(data),err)
    def log_message(self,*args):pass

if __name__=='__main__':
    print(f'AFA 本機研究版：http://127.0.0.1:{PORT}',flush=True)
    ThreadingHTTPServer(('127.0.0.1',PORT),Handler).serve_forever()
