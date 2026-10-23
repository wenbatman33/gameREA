"""Acquire bounded, account-free DEMO command chains, without launch tokens."""
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlencode, urlsplit
import concurrent.futures, json, re

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / 'round-samples'
CONTEXT = json.loads((ROOT / 'serialization-context.json').read_text())
UA = CONTEXT['win["navigator"]["userAgent"]']

def fields(text):
    return dict(part.split('=', 1) for part in text.split('&') if '=' in part)

def capture(path):
    manifest = json.loads(path.read_text())
    slug = manifest['game']['slug']
    with urlopen(Request(manifest['entry'], headers={'User-Agent': UA}), timeout=30) as response:
        html = response.read()
    config = json.loads(re.search(rb"gameConfig: '(.*?)',", html)[1])
    assert config['demoMode'] == '1', 'Only public practice mode is permitted'
    host = urlsplit(config['gameService']).hostname
    assert host and host.endswith('.pragmaticplay.net')
    records = []
    action, coin, lines = 'doInit', None, None
    completed = 0
    for index in range(1, 101):
        params = dict(action=action, symbol=manifest['game']['symbol'], index=index,
                      counter=index * 2 - 1, repeat=0, mgckey=config['mgckey'])
        if coin is not None:
            params.update(c=coin, l=lines, sInfo='n', bl=0)
        request = Request(config['gameService'], data=urlencode(params).encode(),
            headers={'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': UA})
        with urlopen(request, timeout=30) as response:
            raw = response.read().decode()
        data = fields(raw)
        if 'frozen' in data or 'error' in data:
            raise ValueError(slug + ': provider rejected public practice request')
        records.append({'action': action, 'raw': raw})
        if action == 'doInit':
            coin, lines = data.get('c', data.get('defc', '0.1')), data.get('l', '20')
        elif action == 'doCollect' or data.get('na') == 's' and float(data.get('w', '0')) == 0:
            completed += 1
        if completed >= 24 and data.get('na') == 's' and not any(k in data for k in ['fs', 'fsmax']):
            break
        action = 'doCollect' if data.get('na') == 'c' else 'doSpin'
    OUTPUT.mkdir(exist_ok=True)
    target = OUTPUT / (slug + '.json')
    target.write_text(json.dumps({'slug': slug, 'currency': 'DEMO', 'noAccount': True,
        'source': 'bounded public practice API observations', 'defaultCoin': float(coin),
        'defaultLines': int(lines), 'transactions': records}, ensure_ascii=False, indent=2) + '\n')
    print(slug, len(records), 'responses;', completed, 'terminal responses observed', flush=True)

if __name__ == '__main__':
    paths = list(ROOT.glob('*.manifest.json')) + list((ROOT / 'new-games').glob('*.manifest.json'))
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(capture, paths))
