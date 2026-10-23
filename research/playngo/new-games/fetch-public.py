"""Download only public practice client resources declared by official manifests."""
import concurrent.futures, hashlib, json, pathlib, re, urllib.parse, urllib.request
ROOT=pathlib.Path(__file__).resolve().parent
FIELDS={'url','src','image','script','resource'}
EXT=re.compile(r'\.(?:json|js|css|png|jpg|jpeg|webp|ogg|mp3|woff2?|ttf)(?:\?|$)',re.I)
ALLOWED={'cdn.playngonetwork.com','released.playngonetwork.com','asccw.playngonetwork.com'}
def expand(s):
 for k,v in {'channel':'desktop','CHANNEL':'desktop','Brand':'common','brand':'common','language':'en_GB','LANGUAGE':'en_GB','lang':'en_GB'}.items():s=s.replace('${'+k+'}',v)
 return s

def run(folder):
 cfg=json.loads((folder/'configuration.json').read_text());mods=json.loads(cfg['gameModules']);base=cfg['resourceRoot'];lookup=json.loads((folder/'lookup.json').read_text())
 bodies=folder/'bodies';bodies.mkdir(exist_ok=True);rows={};queue={};seen=set();failed=[]
 def add(url):
  url=expand(url)
  if '${'in url or urllib.parse.urlsplit(url).hostname not in ALLOWED or not EXT.search(url):return
  if url not in seen:queue[url]=None
 def walk(obj,context):
  if isinstance(obj,dict):
   embedded=obj.get('data')
   for k,v in obj.items():
    if k=='data'and isinstance(embedded,(dict,list)):
     walk(v,urllib.parse.urljoin(context,expand(obj.get('url',''))));continue
    if k in FIELDS and isinstance(v,str):
     if k=='url'and isinstance(embedded,(dict,list)):continue
     for part in v.split(','):add(urllib.parse.urljoin(context,expand(part)))
    elif isinstance(v,(dict,list)):walk(v,context)
  elif isinstance(obj,list):
   for v in obj:walk(v,context)
 def save(url,b,ctype):
  sha=hashlib.sha256(b).hexdigest();(bodies/sha).write_bytes(b);rows[url]={'url':url,'file':'bodies/'+sha,'contentType':ctype,'bytes':len(b),'status':200}
  if 'json'in ctype or url.split('?')[0].endswith('.json'):
   try:walk(json.loads(b),url)
   except (ValueError,UnicodeError):pass
  if 'css'in ctype:
   for u in re.findall(r'url\([\'"]?([^\)\'\"]+)',b.decode(errors='replace')):add(urllib.parse.urljoin(url,u))
 def fetch(url):
  try:
   with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=35)as r:return url,r.read(),r.headers.get('Content-Type','application/octet-stream'),None
  except Exception as e:return url,None,None,str(e)
 for label in ['configuration','prelaunch','lookup']:
  pass
 seeds={'bundle.js':base+'games/'+folder.name+'/'+folder.name+'_desktop.bundle.js'}
 for name,m in mods.items():
  if m.get('resource'):seeds[{'bundleconfig':'bundleconfig','featurepreview':'featurepreview','game':'game','ui':'ui','mysteryjackpot':'mysteryjackpot'}[name]+'.json']=urllib.parse.urljoin(base,expand(m['resource']))
 for name,url in seeds.items():
  p=folder/name
  if p.exists():seen.add(url);save(url,p.read_bytes(),'application/javascript'if name.endswith('.js')else'application/json')
  else:add(url)
 # Runtime bootstrap and the same officially declared modules.
 launcher='https://released.playngonetwork.com/casino/ContainerLauncher?pid=2&gid='+folder.name+'&lang=en_GB&practice=1&channel=desktop&demo=2'
 with urllib.request.urlopen(launcher,timeout=30)as r:b=r.read()
 save(launcher,b,'text/html; charset=utf-8')
 for u in re.findall(r'<script[^>]+src=[\'"]([^\'"]+)',b.decode()):add(urllib.parse.urljoin(launcher,u))
 for m in cfg.get('availableModules',[]):
  if m['name']=='promocentre':continue
  add(m.get('script',''))
  for u in m.get('resources',[]):add(u)
 for u in cfg.get('helpStylesheetUrls',[]):add(u)
 loops=0
 while queue and loops<12:
  pending=list(queue);queue.clear();seen.update(pending);loops+=1
  with concurrent.futures.ThreadPoolExecutor(max_workers=10)as ex:
   for url,b,ctype,error in ex.map(fetch,pending):
    if error:failed.append({'url':url,'error':error})
    else:save(url,b,ctype)
  print(folder.name,'pass',loops,'files',len(rows),'queued',len(queue),'failed',len(failed),flush=True)
 (folder/'assets.json').write_text(json.dumps({'files':list(rows.values()),'failed':failed},indent=2))
 return len(rows)
if __name__=='__main__':
 import sys
 for slug in sys.argv[1:]or['legacyofdead','firejoker','riseofolympus','moonprincess','gemix']:run(ROOT/slug)
