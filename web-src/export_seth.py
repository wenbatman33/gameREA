"""Package only Seth's public runtime and synthetic fixtures for static hosting."""
from pathlib import Path
import copy, json, mimetypes, re

GAME = 'egames/22020103b31b7390f07b1551e8538589b5e51967/game/'
FRAMEWORK = 'slotFramework/14ee78206168302dd5e294aaa97f5c0b21de68f5/'

def export(root: Path, out: Path, put_asset):
    source = root / 'research/atg/seth2'
    mirror = source / 'mirror/play.godeezone1.com'
    staging = out / '.staging'
    staging.mkdir(parents=True, exist_ok=True)
    original = (source / 'extracted/framework-CryptoTool.ts.js').read_text()
    decoded = (source / 'framework-decoded.js').read_text()
    stub = 'System.register("chunks:///_virtual/CryptoTool.ts",[],function(e){return{setters:[],execute:function(){e("CryptoTool",{ready:async function(){},initKey:async function(){},clear:function(){},kid:"browser-local",encrypt:async function(v){return v},decrypt:async function(v){return v}})}}});'
    assert original in decoded
    patched = staging / 'seth-framework.js'
    patched.write_text(decoded.replace(original, stub, 1))
    assets = {}
    for file in sorted(mirror.rglob('*')):
        if not file.is_file():
            continue
        relative = file.relative_to(mirror).as_posix()
        if not (relative.startswith(GAME) or relative.startswith(FRAMEWORK)):
            continue
        actual = patched if relative == FRAMEWORK + 'index.js' else file
        if file.name == 'socket.io.js':
            actual = root / 'web-src/seth-socket.js'
        assets['/' + relative] = {'file': put_asset(actual), 'mime': mimetypes.guess_type(file.name)[0] or 'application/octet-stream'}
    assert '/' + GAME + 'src/settings.json' in assets, 'Missing Cocos runtime settings'
    fixtures = {}
    for file in (mirror / GAME / 'assets/g1005/import').glob('*/*.json'):
        value = json.loads(file.read_text())
        if isinstance(value, list) and len(value) > 5 and isinstance(value[5], list) and value[5]:
            row = value[5][0]
            if isinstance(row, list) and len(row) > 2 and isinstance(row[1], str) and re.fullmatch(r'spin[1-8]', row[1]):
                item = copy.deepcopy(row[2]); item['token'] = 'browser-local'
                fixtures[row[1]] = item
    assert set(fixtures) == {'spin' + str(i) for i in range(1, 9)}
    controls = (source / 'local-controls.js').read_text().replace("fetch('/local-api/configure'", "fetch(window.__SETH_BASE__+'local-api/configure'")
    return [{'provider': 'seth', 'slug': 'seth2', 'title': '戰神賽特2 覺醒之力',
             # UrlModel only sets its socket URL when this parameter is nonempty.
             # The socket shim ignores the marker; it never opens a native WS.
             'entry': '/' + GAME + '?t=browser-local&gn=golden-seth&l=zh-tw&ct=slot&gt=slot-erase-any-times-2&socket_url=browser-local&view_mode=portrait&gv=261006&table=1',
             'assets': assets, 'fixtures': fixtures, 'controls': controls,
             'scope': '原始客戶端＋瀏覽器合成後端；普通、免費與公開覺醒樣本，非完整原版機率模型。'}]
