"""Acquire ONLY public provider demoMode=1 client and virtual fixture responses."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode,urlsplit,parse_qs
from concurrent.futures import ThreadPoolExecutor,as_completed
import hashlib,json,re,time
ROOT=Path(__file__).resolve().parent
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/155.0.0.0 Safari/537.36'
(ROOT/'bodies').mkdir(exist_ok=True)
def fetch(url,body=None):
 req=Request(url,data=body,headers={'User-Agent':UA,'Content-Type':'application/x-www-form-urlencoded'})
 with urlopen(req,timeout=35)as r:return r.read(),r.headers.get('Content-Type',''),r.status

def record(url,body=None):
 b,ct,status=fetch(url,body);sha=hashlib.sha256(b).hexdigest();(ROOT/'bodies'/sha).write_bytes(b)
 return dict(url=url,method='POST'if body else'GET',requestBody=body.decode()if body else None,status=status,contentType=ct,sha256=sha,bytes=len(b)),b

def game(p):
 slug=p.name;cfg=json.loads((p/'config.json').read_text());assert cfg.get('demoMode')=='1'
 probe=json.loads((ROOT/(slug+'.probe.json')).read_text());symbol=parse_qs(urlsplit(probe['finalUrl']).query)['symbol'][0]
 base=cfg['datapath']+'desktop/';s=(p/'bootstrap.js').read_text();urls={base+'bootstrap.js'}
 for v in ['SCRIPTS_SIZE','CLIENT_SIZES','GUI_SIZE','GUI_RESOURCES_SIZE','GAME_SIZE','RESOURCES_SIZE','OTHER_SIZE','MODULES_SIZES']:
  for value in re.findall(r'UHT_'+v+r"='([^']*)'",s):
   for part in value.split(','):
    part=part.split(':')[0]
    if part:urls.add(base+(part if v=='SCRIPTS_SIZE'else('client/'if v=='CLIENT_SIZES'else'game/')+part.replace('?key=','.json?key=')))
 recs=[];errors=[]
 launcher=(ROOT/(slug+'.launcher.html')).read_bytes();sha=hashlib.sha256(launcher).hexdigest();(ROOT/'bodies'/sha).write_bytes(launcher)
 recs.append(dict(url=probe['finalUrl'],method='GET',status=200,contentType='text/html',sha256=sha,bytes=len(launcher)))
 with ThreadPoolExecutor(max_workers=8)as ex:
  tasks={ex.submit(record,u):u for u in urls}
  for f in as_completed(tasks):
   try:r,b=f.result();recs.append(r)
   except Exception as e:errors.append(dict(url=tasks[f],error=str(e)))
 common=re.findall(r"UHT_REVISION=\{common:'([^']+)'",s)[-1]
 data=dict(action='doInit',symbol=symbol,cver=common,index=1,counter=1,repeat=0,mgckey=cfg['mgckey'])
 try:
  r,b=record(cfg['gameService'],urlencode(data).encode());recs.append(r);(p/'doInit.txt').write_bytes(b)
  fields=dict(x.split('=',1)for x in b.decode().split('&')if'='in x)
  # Only virtual demo balance; never authenticated account traffic.
  if 'balance'in fields and 's'in fields:
   coin=fields.get('c','0.10');lines=fields.get('l','20');action='doSpin'
   for i in range(2,32):
    data.update(action=action,index=i,counter=i*2-1)
    if action=='doSpin':data.update(c=coin,l=lines)
    r,b=record(cfg['gameService'],urlencode(data).encode());recs.append(r)
    fields=dict(x.split('=',1)for x in b.decode().split('&')if'='in x)
    action='doCollect'if fields.get('na')=='c'else'doSpin'
    if i>=12 and action=='doSpin' and fields.get('na')=='s':break
 except Exception as e:errors.append(dict(stage='fixture',error=str(e)))
 out=dict(game=dict(slug=slug,symbol=symbol),entry=probe['entry'],finalUrl=probe['finalUrl'],errors=errors,records=recs,verification='HTTP acquisition only; browser playability unverified')
 (ROOT/(slug+'.manifest.json')).write_text(json.dumps(out,indent=2));print(slug,len(recs),'records',len(errors),'errors',flush=True)
for p in sorted(ROOT.iterdir()):
 if p.is_dir()and(p/'config.json').exists():game(p)
