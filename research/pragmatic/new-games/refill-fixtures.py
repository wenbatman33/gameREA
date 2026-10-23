from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlencode,urlsplit,parse_qs
import re,json,hashlib
root=Path(__file__).resolve().parent
for n in ['gates-of-olympus','starlight-princess','sweet-bonanza']:
 d=json.loads((root/(n+'.manifest.json')).read_text());r=urlopen(d['entry'],timeout=30);b=r.read();url=r.url;c=json.loads(re.search(rb"gameConfig: '(.*?)',",b)[1]);assert c['demoMode']=='1'
 records=[x for x in d['records']if x['method']!='POST'and'/html5Game.do'not in x['url']]
 def save(url,b,body=None):
  sha=hashlib.sha256(b).hexdigest();(root/'bodies'/sha).write_bytes(b);records.append(dict(url=url,method='POST'if body else'GET',requestBody=body,status=200,contentType='text/plain'if body else'text/html',sha256=sha,bytes=len(b)))
 save(url,b)
 common=re.findall(r"UHT_REVISION=\{common:'([^']+)'",(root/n/'bootstrap.js').read_text())[-1]
 data=dict(action='doInit',symbol=d['game']['symbol'],cver=common,index=1,counter=1,repeat=0,mgckey=c['mgckey'])
 for i in range(1,30):
  body=urlencode(data);r=urlopen(Request(c['gameService'],data=body.encode(),headers={'Content-Type':'application/x-www-form-urlencoded'}),timeout=30);b=r.read();save(c['gameService'],b,body);f=dict(x.split('=',1)for x in b.decode().split('&')if'='in x)
  if i==1:coin=f.get('c',f.get('defc','0.1'));lines=f.get('l','20');(root/n/'doInit.txt').write_bytes(b)
  if'frozen'in f:print(n,'FROZEN',flush=True);break
  if i>10 and f.get('na')=='s':break
  data=dict(action='doCollect'if f.get('na')=='c'else'doSpin',symbol=d['game']['symbol'],c=coin,l=lines,sInfo='n',bl=0,index=i+1,counter=(i+1)*2-1,repeat=0,mgckey=c['mgckey'])
 d['records']=records;d['finalUrl']=url;d['verification']='HTTP virtual demo fixtures acquired; browser playability unverified';(root/(n+'.manifest.json')).write_text(json.dumps(d,indent=2));print(n,'POST',sum(x['method']=='POST'for x in records),'na',f.get('na'),flush=True)
