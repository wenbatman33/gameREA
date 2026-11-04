"""Emit explicit, editable local-backend bootstrap after the real adapter exists."""
from pathlib import Path
import json,uuid
ROOT=Path(__file__).resolve().parents[1]
ASSETS=ROOT/'creator-projects/seth2-recovered/assets'
def main(*,overwrite_restored_source=False):
 adapter=ASSETS/'local-backend/InstallLocalBackend.ts'
 if not adapter.is_file():raise FileNotFoundError('Local backend adapter is not ready: '+str(adapter))
 folder=ASSETS/'recovered/bootstrap';folder.mkdir(parents=True,exist_ok=True)
 path=folder/'local-runtime.ts'
 if path.exists() and not overwrite_restored_source:raise RuntimeError('Local runtime bootstrap already exists. Preserve edits; use --overwrite-restored-source only for an intentional reconstruction.')
 path.write_text('''// @ts-nocheck
// Reconstructed local runtime integration; this is not original source.
// Installed before main-Application evaluates; no sample/replay backend is used.
import { installLocalBackend } from '../../local-backend/InstallLocalBackend';
import { GameServiceBase } from '../scripts/framework-GameServiceBase';
import { Config } from '../scripts/main-Config';

// Independent local build never uses the original hot-update server.
Config.isSkipCheckUpdate = true;
Config.USE_AUTO_VERSION = false;
Config.HOT_UPDATE_URL = '';

// User verification defaults to normal sound. Agent-only development builds
// apply a separate zero-gain output shim, without changing this saved setting.
installLocalBackend(GameServiceBase, { quiet: false });
''')
 meta=Path(str(path)+'.meta')
 if not meta.exists():meta.write_text(json.dumps({'ver':'4.0.23','importer':'typescript','imported':False,'uuid':str(uuid.uuid5(uuid.NAMESPACE_URL,'gameREA/seth2/recovered/bootstrap/local-runtime')),'files':[],'subMetas':{},'userData':{}},indent=2)+'\n')
 print(json.dumps({'bootstrap':str(path.relative_to(ROOT)),'adapter':str(adapter.relative_to(ROOT)),'audio':'normal; separate development build mutes output'}))
if __name__=='__main__':
 import argparse
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('--overwrite-restored-source',action='store_true',help='Explicitly replace the editable local bootstrap source; may overwrite later edits.')
 args=parser.parse_args()
 try:main(overwrite_restored_source=args.overwrite_restored_source)
 except RuntimeError as error:parser.error(str(error))
