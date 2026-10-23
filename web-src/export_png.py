"""Export eight acquired Play'n GO clients without runtime upstream dependencies."""
import base64,json,re
from round_samples import png_rounds
from pathlib import Path
from urllib.parse import urlsplit
GAMES=['reactoonz','bookofdead','wrappinmoregold','legacyofdead','firejoker','riseofolympus','moonprincess','gemix']
NAMES={'reactoonz':'Reactoonz','bookofdead':'Book of Dead','wrappinmoregold':'Wrappin’ More Gold','legacyofdead':'Legacy of Dead','firejoker':'Fire Joker','riseofolympus':'Rise of Olympus','moonprincess':'Moon Princess','gemix':'Gemix'}
def _clean(text):
 return re.sub(r'(?m)^91 .*\r?\n','',text)
def _packet(frame):
 b=base64.b64decode(frame['payload']);start=b.find(b'd=')
 if start<0:return ''
 return _clean(b[start:-1].decode())
def export(root:Path,out:Path,put_asset):
 root=Path(root);source=root/'research'/'playngo';result=[]
 shared=[]
 for old in GAMES[:3]:
  p=source/old
  for row in json.loads((p/'network.json').read_text())['responses']:
   if row.get('method')=='GET'and row.get('file')and row.get('phase'):shared.append((p,row))
 for slug in GAMES:
  files={};configuration=None;prelaunch=None;lookup=None
  def add(folder,row):
   nonlocal configuration,prelaunch,lookup
   u=urlsplit(row['url']);path=u.netloc+u.path
   file=Path(folder)/row['file']
   if not file.is_file():return
   # First acquired URL wins; newer game's own build is inserted first.
   if path not in files:files[path]={'file':put_asset(file),'mime':row.get('contentType')or'application/octet-stream'}
   if u.path=='/configuration/v2':configuration=json.loads(file.read_text())
   if u.path=='/configuration/prelaunchconfiguration':prelaunch=json.loads(file.read_text())
   if u.path=='/games/getgamebygid/'+slug:lookup=json.loads(file.read_text())
  if slug in GAMES[:3]:
   folder=source/slug;cap=json.loads((folder/'network.json').read_text())
   for row in cap['responses']:
    if row.get('method')=='GET'and row.get('file')and row.get('phase'):add(folder,row)
   frames=next(w['frames']for w in cap['websockets']if'gamehub'in w['url'])
   init=next(_packet(f)for f in frames if f['direction']=='received'and f['phase']=='load'and len(f['payload'])>40)
   rounds=[[_packet(f)]for f in frames if f['direction']=='received'and f['phase']=='spin'and len(f['payload'])>40]
  else:
   folder=source/'new-games'/slug;cap=json.loads((folder/'protocol-sequences.json').read_text())
   for row in json.loads((folder/'assets.json').read_text())['files']:add(folder,row)
   configuration=json.loads((folder/'configuration.json').read_text());prelaunch=json.loads((folder/'prelaunch.json').read_text());lookup=json.loads((folder/'lookup.json').read_text())
   init=_clean(cap['init']);rounds=[[x['response']for x in r]for r in cap['rounds']]
  for p,r in shared:
   # Do not let another game's dynamic configuration replace this game's own.
   if urlsplit(r['url']).path.startswith(('/configuration','/games/getgamebygid','/casino/ContainerLauncher')):continue
   add(p,r)
  complete=next((r for r in rounds if len(r)==1 and re.search(r'(?m)^3 [01] 0 0 ',r[0])),rounds[0])
  text=complete[0]
  # A preceding captured collect can belong to an earlier winning round.
  first=re.search(r'(?m)^(?:d=)?1 \d+ \d+ \d+',text)
  if first and first.start()>0:text='d='+text[first.start():].removeprefix('d=')
  complete=[text]+complete[1:]
  result.append(dict(provider='png',slug=slug,title=NAMES[slug],
   entry=f'o/released.playngonetwork.com/casino/ContainerLauncher?pid=2&gid={slug}&lang=en_GB&practice=1&channel=desktop&demo=2',
   forceRasterFallback=slug not in GAMES[:3],files=files,configuration=configuration,prelaunch=prelaunch,lookup=lookup,
   protocol=dict(init=init,rounds=[complete],balance=2500000,samples=png_rounds(root,slug)),
   scope='observed nonwinning base-round fixture with local virtual balance; bonuses/math not restored'))
 return result
