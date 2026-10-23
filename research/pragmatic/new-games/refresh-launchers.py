from pathlib import Path
from urllib.request import Request,urlopen
import json,re,hashlib
root=Path(__file__).resolve().parent
context=json.loads((root.parent/'serialization-context.json').read_text());ua=context['win["navigator"]["userAgent"]']
for p in root.glob('*.manifest.json'):
 d=json.loads(p.read_text());r=urlopen(Request(d['entry'],headers={'User-Agent':ua}),timeout=30);b=r.read();sha=hashlib.sha256(b).hexdigest();(root/'bodies'/sha).write_bytes(b);d['records']=[x for x in d['records']if'/html5Game.do'not in x['url']];d['records'].insert(0,dict(url=r.url,method='GET',status=200,contentType='text/html',sha256=sha,bytes=len(b)));d['finalUrl']=r.url;d['launcherContext']=context
 p.write_text(json.dumps(d,indent=2));(root/(d['game']['slug']+'.launcher.html')).write_bytes(b)
 c=json.loads(re.search(rb"gameConfig: '(.*?)',",b)[1]);(root/d['game']['slug']/'config.json').write_text(json.dumps(c,indent=2));print(d['game']['slug'],'launcher refreshed matching UA',flush=True)
