"""Mirror public Cocos assets from captured configs; never sends launch credentials."""
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from concurrent.futures import ThreadPoolExecutor
import json, hashlib

ROOT = Path(__file__).resolve().parents[1]
MIRROR = ROOT / 'mirror' / 'play.godeezone1.com'
ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

def expand_uuid(value):
    value, sep, suffix = value.partition('@')
    if len(value) == 22:
        value = value[:2] + ''.join(f'{(ALPHABET.index(value[i]) << 6) | ALPHABET.index(value[i+1]):03x}' for i in range(2, 22, 2))
        value = '-'.join([value[:8], value[8:12], value[12:16], value[16:20], value[20:]])
    return value + (sep + suffix if sep else '')

def fetch(path, binary_fallback=False):
    file = MIRROR / path
    if file.is_file(): return {'path': path, 'cached': True}
    try:
        request = Request('https://play.godeezone1.com/' + path, headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(request, timeout=25) as response: body = response.read()
        file.parent.mkdir(parents=True, exist_ok=True)
        file.write_bytes(body)
        return {'path': path, 'bytes': len(body), 'sha256': hashlib.sha256(body).hexdigest()}
    except HTTPError as error:
        if error.code == 404 and binary_fallback:
            return fetch(path.removesuffix('.json') + '.cconb')
        return {'path': path, 'error': str(error)}
    except Exception as error: return {'path': path, 'error': str(error)}

configs = []
for file in MIRROR.rglob('config.json'):
    data = json.loads(file.read_text())
    if 'uuids' in data: configs.append((file.parent, data))
imports = set()
for base, config in configs:
    packed = {str(index) for ids in config.get('packs', {}).values() for index in ids}
    keys = set(config.get('packs', {}))
    keys.update(expand_uuid(value) for i, value in enumerate(config['uuids']) if str(i) not in packed)
    for key in keys:
        imports.add(str((base / config['importBase'] / key[:2] / (key + '.json')).relative_to(MIRROR)))
with ThreadPoolExecutor(12) as executor:
    rows = list(executor.map(lambda path: fetch(path, True), sorted(imports)))
(ROOT / 'import-downloads.json').write_text(json.dumps(rows, indent=2))
print(json.dumps({'phase': 'imports', 'requested': len(rows), 'failed': sum('error' in r for r in rows)}), flush=True)

natives = set()
for base, config in configs:
    for index, entry in config.get('paths', {}).items():
        kind = config['types'][entry[1]]
        key = expand_uuid(config['uuids'][int(index)])
        ext = {'cc.ImageAsset': '.png', 'cc.AudioClip': '.mp3', 'sp.SkeletonData': '.bin', 'cc.Asset': '.atlas'}.get(kind)
        if not ext: continue
        imported = base / config['importBase'] / key[:2] / (key + '.json')
        if imported.is_file():
            strings = []
            def collect(value):
                if isinstance(value, list):
                    for v in value: collect(v)
                elif isinstance(value, str) and value in ['.png', '.jpg', '.webp', '.mp3', '.ogg', '.wav', '.bin', '.skel', '.atlas', '.txt', '.pem']:
                    strings.append(value)
            collect(json.loads(imported.read_text()))
            if strings: ext = strings[-1]
        natives.add(str((base / config['nativeBase'] / key[:2] / (key + ext)).relative_to(MIRROR)))
with ThreadPoolExecutor(12) as executor:
    rows = list(executor.map(fetch, sorted(natives)))
(ROOT / 'native-downloads.json').write_text(json.dumps(rows, indent=2))
print(json.dumps({'phase': 'natives', 'requested': len(rows), 'failed': sum('error' in r for r in rows)}), flush=True)
