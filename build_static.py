"""Package runtime-only browser demos. Output needs only a static HTTPS host."""
from pathlib import Path
import argparse, hashlib, importlib.util, json, mimetypes, shutil, sys

ROOT=Path(__file__).resolve().parent
SOURCE=ROOT/'web-src'

def build(output, providers=('pp','png','afa','seth'), quiet=False):
    output=Path(output).resolve();output.mkdir(parents=True,exist_ok=True)
    (output/'assets').mkdir(exist_ok=True)
    copied={}
    def put_asset(path):
        path=Path(path);data=path.read_bytes();digest=hashlib.sha256(data).hexdigest()
        rel='assets/'+digest
        if digest not in copied:
            target=output/rel
            if not target.is_file():target.write_bytes(data)
            copied[digest]=len(data)
        return rel
    games=[];scripts=[]
    sys.path.insert(0,str(SOURCE))
    for provider in providers:
        spec=importlib.util.spec_from_file_location('export_'+provider,SOURCE/f'export_{provider}.py')
        module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
        rows=module.export(ROOT,output,put_asset)
        if not isinstance(rows,list):raise ValueError(f'{provider} exporter must return a list')
        for row in rows:
            row.setdefault('provider',provider)
            if not row.get('entry')or not row.get('slug'):raise ValueError('Missing game identity')
        games.extend(rows)
        scripts.append(f'{provider}-worker.js')
        shutil.copyfile(SOURCE/f'{provider}-worker.js',output/f'{provider}-worker.js')
    for name in ['launch.html','launch.js','png-socket.js','seth-socket.js','simulation-controls.js','development-mute.js']:
        source=SOURCE/name
        if source.is_file():shutil.copyfile(source,output/name)
    identity=json.dumps(dict(quiet=quiet,games=games),ensure_ascii=False,separators=(',',':'))
    source_bytes=b''.join((SOURCE/name).read_bytes()for name in scripts+['sw.js','launch.js','png-socket.js','seth-socket.js','simulation-controls.js','development-mute.js']if(SOURCE/name).is_file())
    build_id=hashlib.sha256(identity.encode()+source_bytes).hexdigest()[:20]
    sw='self.BUILD_ID='+json.dumps(build_id)+';self.PROVIDER_SCRIPTS='+json.dumps(scripts)+';\n'+(SOURCE/'sw.js').read_text()
    (output/'sw.js').write_text(sw)
    (output/'games.json').write_text(json.dumps(dict(buildId=build_id,quiet=quiet,games=games),ensure_ascii=False,separators=(',',':')))
    covers=json.loads((SOURCE/'gallery-covers.json').read_text())
    statuses={'pp':'有限回合重播 · 結果會重複','png':'固定未中獎結果 · 協定試作','afa':'一般抽卡模擬 · 特殊玩法未完成','seth':'合成回合 · 部分特殊流程'}
    cards=[]
    import html
    for game in games:
        preview=ROOT/covers[game['slug']]
        if not preview.is_file():raise FileNotFoundError(f'Missing real cover image: {preview}')
        rel=put_asset(preview)
        image=f'<img src="{rel}" alt="{html.escape(game["title"])} 原始封面或研究截圖" width="640" height="360" loading="lazy">'
        status='本機隨機抽樣 · 可控中獎比例'if game.get('roundSamples')else statuses[game['provider']]
        href=f'launch.html?provider={game["provider"]}&amp;game={game["slug"]}'
        cards.append(f'<article>{image}<small>{html.escape(game["provider"])}</small><h2>{html.escape(game["title"])}</h2><p>{html.escape(status)}</p><a href="{href}">開啟試作 ↗</a></article>')
    page='''<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>遊戲逆向研究室</title><style>*{box-sizing:border-box}body{background:#10141b;color:#f5f7fa;font:16px/1.6 system-ui;margin:0}main{max-width:1200px;margin:auto;padding:32px 24px}header p{color:#bfc9d6}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}article{background:#1b222d;border:1px solid #303d4e;border-radius:12px;padding:18px}img{width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;object-position:center 35%;background:#080b10;border-radius:6px}small{color:#a2b4ca}h2{font-size:20px}a{color:#90c7ff}footer{color:#bfc9d6;margin-top:28px}</style><main><header><h1>遊戲逆向研究室</h1><p>20 款研究試作，完整玩法尚未驗收完成。可直接在瀏覽器開啟，無需安裝或啟動本機服務。使用原版前端與有限回合樣本／模擬資料，沒有真金交易；完整特殊玩法與原版機率尚未還原。</p></header><section class="grid">'''+''.join(cards)+'''</section><footer>普通回合樣本會重複。PP 請保持預設下注；不支援的購買及特殊模式尚未驗證。</footer></main></html>'''
    (output/'index.html').write_text(page)
    shutil.rmtree(output/'.staging',ignore_errors=True)
    # Rebuilds must not keep obsolete generated assets in the deployment.
    import re
    for stale in (output/'assets').iterdir():
        if re.fullmatch(r'[0-9a-f]{64}',stale.name)and stale.name not in copied:stale.unlink()
    total=sum(copied.values())
    (output/'build-summary.json').write_text(json.dumps(dict(games=len(games),assets=len(copied),assetBytes=total,quiet=quiet),indent=2)+'\n')
    print(json.dumps(dict(output=str(output),games=len(games),assets=len(copied),assetMiB=round(total/1024**2,2),quiet=quiet)))
    return games

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--output',default='web-build');parser.add_argument('--providers',default='pp,png,afa,seth');parser.add_argument('--mute',action='store_true')
    args=parser.parse_args();build(args.output,args.providers.split(','),args.mute)
