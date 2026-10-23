from pathlib import Path
import json,re,concurrent.futures,urllib.request,hashlib
root=Path(__file__).resolve().parent
for p in sorted(root.glob('*.manifest.json')):
 d=json.loads(p.read_text());n=d['game']['slug'];cfg=json.loads((root/n/'config.json').read_text());base=cfg['datapath']+'desktop/';s=(root/n/'bootstrap.js').read_text();urls={base+'style.css',base+'customizations.info'}
 for value in re.findall(r"UHT_SOUNDS_SIZES='([^']*)'",s):
  for part in value.split(','):
   part=part.split(':')[0]
   if part:urls.add(base+'game/'+part.replace('?key=','.json?key='))
 def f(u):
  try:
   r=urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'}),timeout=60);b=r.read();sha=hashlib.sha256(b).hexdigest();(root/'bodies'/sha).write_bytes(b)
   return dict(url=u,method='GET',status=r.status,contentType=r.headers.get('Content-Type',''),sha256=sha,bytes=len(b))
  except Exception as e:return dict(url=u,error=str(e))
 results=list(concurrent.futures.ThreadPoolExecutor(max_workers=8).map(f,urls));d['records']+=[x for x in results if'sha256'in x];d['errors']+=[x for x in results if'error'in x]
 p.write_text(json.dumps(d,indent=2));print(n,'audio/style success',sum('sha256'in x for x in results),'errors',len(d['errors']),flush=True)
