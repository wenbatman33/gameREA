"""Download real external texture references declared in acquired packages."""
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urljoin,urlsplit
from concurrent.futures import ThreadPoolExecutor
import re,json,hashlib
root=Path(__file__).resolve().parent
for p in root.glob('*.manifest.json'):
 d=json.loads(p.read_text());urls=set();known={x['url'].split('?')[0]for x in d['records']}
 for record in d['records']:
  if record['method']=='GET'and '/game/'in record['url']and'.json'in record['url']:
   raw=(root/'bodies'/record['sha256']).read_text()
   for image in re.findall(r'res/[a-zA-Z0-9_.-]+\.(?:png|jpg|webp|jpeg)',raw):
    url=urljoin(record['url'],image)
    if url.split('?')[0]not in known:urls.add(url)
 def get(u):
  try:
   with urlopen(Request(u,headers={'User-Agent':'Mozilla/5.0'}),timeout=45)as response:
    raw=response.read();sha=hashlib.sha256(raw).hexdigest();(root/'bodies'/sha).write_bytes(raw)
    return dict(url=u,method='GET',status=response.status,contentType=response.headers.get('Content-Type',''),sha256=sha,bytes=len(raw),source='actual image referenced by acquired package')
  except Exception as e:return dict(url=u,error=str(e))
 result=list(ThreadPoolExecutor(max_workers=10).map(get,urls));d['records']+=[x for x in result if'sha256'in x];d['errors']+=[x for x in result if'error'in x];p.write_text(json.dumps(d,indent=2));print(d['game']['slug'],len(urls),'images',sum('error'in x for x in result),'errors',flush=True)
