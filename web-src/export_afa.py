"""Package only AFA captured game clients, public card art and fixture packs."""
import json,mimetypes
from pathlib import Path
TITLES={'CA261119':'草船借箭','CA261141':'血戰長坂','CA261130':'火燒赤壁'}
def export(root:Path,out:Path,put_asset):
 source=Path(root)/'research'/'havespring';files={}
 for prefix,folder in [('ca2501',source/'afa-public'),('remote-assets',source/'remote-assets')]:
  for p in sorted(folder.rglob('*')):
   if p.is_file()and p.suffix.lower()not in ['.log','.jsonl']:
    files[prefix+'/'+p.relative_to(folder).as_posix()]={'file':put_asset(p),'mime':mimetypes.guess_type(p.name)[0]or'application/octet-stream'}
 result=[]
 for gid,title in TITLES.items():
  pack=json.loads((source/'fixtures'/(gid+'.json')).read_text())
  # Unsupported bonus purchases remain hidden in this ordinary-draw simulation.
  pack['PackInfo']['Config']['Rules']=[]
  result.append(dict(provider='afa',slug=gid,title=title,
   entry=f'ca2501/?lang=zh-cht&platform=37&token=browser-local-{gid}&txGameID={gid}&wt=3',
   files=files,pack=pack,scope='weighted synthetic ordinary card draws with virtual balance; bonus modes unavailable'))
 return result
