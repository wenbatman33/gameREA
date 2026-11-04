"""Copy an authenticated GUI build into isolated developer/user previews; never mutates sources."""
import argparse,json,shutil
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
PROJECT=ROOT/'creator-projects/seth2-recovered'
p=argparse.ArgumentParser();p.add_argument('source',type=Path);p.add_argument('--normal-audio',action='store_true');a=p.parse_args()
source=a.source.resolve();index=source/'index.html'
if not index.is_file():p.error('Source must be an actual Creator GUI Web build with index.html.')
mode='user-verification' if a.normal_audio else 'development-muted'
target=PROJECT/'previews'/mode
if source==target:p.error('Source and target must differ.')
if target.parent.resolve()!=(PROJECT/'previews').resolve() or target.name not in ['development-muted','user-verification'] or target.is_symlink():p.error('Refusing to replace a path outside generated preview targets.')
if target.exists():shutil.rmtree(target)
shutil.copytree(source,target)
body=(target/'index.html').read_text();body=body.replace('<script src="development-mute.js"></script>','')
if not a.normal_audio:
 shutil.copyfile(ROOT/'web-src/development-mute.js',target/'development-mute.js');body=body.replace('<head>','<head>\n<script src="development-mute.js"></script>',1)
if a.normal_audio and (target/'development-mute.js').exists():(target/'development-mute.js').unlink()
(target/'index.html').write_text(body)
print(json.dumps({'source':str(source),'output':str(target),'quiet':not a.normal_audio,'playableValidated':False},ensure_ascii=False,indent=2))
