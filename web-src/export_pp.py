"""Export captured PP runtime dependencies and finite virtual-demo fixtures."""
import json
from round_samples import pp_rounds
from pathlib import Path
from urllib.parse import urlsplit,parse_qs
TITLES={'sweet-bonanza-pop':'Sweet Bonanza POP','gates-of-olympus-2500':'Gates of Olympus 2500','the-dog-house-slot':'The Dog House','gates-of-olympus':'Gates of Olympus','starlight-princess':'Starlight Princess','big-bass-bonanza':'Big Bass Bonanza','sugar-rush':'Sugar Rush','sweet-bonanza':'Sweet Bonanza'}
def export(root:Path,out:Path,put_asset):
    source=root/'research/pragmatic';new=source/'new-games'
    context=json.loads((source/'serialization-context.json').read_text())
    manifests=[(source,p,json.loads(p.read_text()))for p in sorted(source.glob('*.manifest.json'))]+[(new,p,json.loads(p.read_text()))for p in sorted(new.glob('*.manifest.json'))]
    def local(folder,record):
        return next(p for p in [folder/'bodies'/record['sha256'],source/'bodies'/record['sha256']]if p.is_file())
    def packed(folder,record):
        return {'asset':put_asset(local(folder,record)),'mime':record.get('contentType')or'application/octet-stream'}
    # Common loader/operator resources are shared; do not bundle other games as fallback.
    shared={}
    for folder,p,manifest in manifests[:3]:
        for record in manifest['records']:
            path=urlsplit(record['url']).path
            if record.get('sha256')and record['status']==200 and record['method']=='GET'and'/games/vs/'not in path and not path.endswith(('html5Game.do','openGame.do')):
                shared[path]=(folder,record)
    games=[]
    for folder,p,manifest in manifests:
        if folder==new and manifest.get('launcherContext')!=context:raise ValueError(f'Launcher context mismatch: {p}')
        game=manifest['game'];static=dict(shared);fixtures=[];entry=None;init=None
        for record in manifest['records']:
            if not record.get('sha256')or record['status']!=200:continue
            path=urlsplit(record['url']).path
            if path.endswith('/html5Game.do'):
                entry=record
            elif path.endswith('/gameService'):
                action=parse_qs(record.get('requestBody')or'').get('action',[''])[0]
                if action:fixtures.append(dict(action=action,**packed(folder,record)))
                if action=='doInit':init=local(folder,record).read_text()
            elif record['method']=='GET':static[path]=(folder,record)
        if entry is None or init is None:raise ValueError(f'Missing PP initial runtime: {p}')
        fields=dict(x.split('=',1)for x in init.split('&')if'='in x)
        uri=urlsplit(entry['url'])
        stake=float(fields.get('c',fields.get('defc','0.1')))*int(fields.get('l','20'))
        games.append(dict(provider='pp',slug=game['slug'],title=TITLES.get(game['slug'],game['slug']),symbol=game['symbol'],entry=uri.path+'?'+uri.query,
            entryRecord=packed(folder,entry),static={path:packed(f,r)for path,(f,r)in static.items()},fixtures=fixtures,
            roundSamples=pp_rounds(root,game['slug'],stake),allowedCoins=[float(x)for x in fields.get('cs',str(float(fields.get('c',fields.get('defc','0.1'))))).split(',')],simulation={'winRate':35},context=context,defaultCoin=float(fields.get('c',fields.get('defc','0.1'))),defaultLines=int(fields.get('l','20')),
            quietScript=put_asset(new/'development-mute.js'),limitations='有限普通回合隨機抽樣；可控中獎比例與一般下注縮放；未還原原版機率與完整獎勵模式'))
    return games
