"""Bounded public DEMO observations, saved locally for an offline simulator.

Command 2/4 is an animation acknowledgement; the browser trace established
that its response is an echo. Result completion and collection are acquired
from the public practice session, never from an authenticated player account.
"""
from pathlib import Path
from urllib.request import Request, urlopen
import concurrent.futures, json, re

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = Path(__file__).with_name('round-samples')
CATALOG = json.loads((ROOT / '.static-preview/gameREA/games.json').read_text())
GAMES = [g for g in CATALOG['games'] if g['provider'] == 'png']

def capture(game):
    slug = game['slug']
    gid = game['lookup']['gameId']
    sequence, token = 0, '0'
    transactions = 0

    def post(command):
        nonlocal sequence, token, transactions
        sequence += 1
        transactions += 1
        if transactions > 180:
            raise ValueError(slug + ': bounded observation limit')
        body = f'd={sequence}\r\n{token}\r\n{command}\r\n'
        request = Request('https://ascflyp.playngonetwork.com/', data=body.encode(),
            headers={'Content-Type': 'text/plain', 'User-Agent': 'Mozilla/5.0'})
        with urlopen(request, timeout=25) as response:
            text = response.read().decode()
        if text.startswith('d=103'):
            token = text.split('"')[1]
        return re.sub(r'(?m)^91 .*\r?\n', '', text)

    def balance(text):
        match = re.search(r'(?m)^(?:d=)?52 (\d+)', text)
        return int(match[1]) if match else None

    post(f'103 12 "en_GB" {gid} "Mozilla%2F5.0" "{slug}" "desktop"')
    post('101 "" "" "" "" "" ""')
    init = post(f'104 {gid} 0 %22%3croot%3e%3csettings%3e%3cDenominations%3e%3cdenom+Value%3d%220.01%22+%2f%3e%3c%2fDenominations%3e%3c%2fsettings%3e%3c%2froot%3e%22')
    previous = balance(init)
    assert previous == 2500000, 'Public practice balance required'
    header = re.search(r'(?:d=)?1 (\d+) (\d+) (\d+)', game['protocol']['rounds'][0][0])
    assert header
    stake_values = list(map(int, header.groups()))
    stake = stake_values[0] * stake_values[1] * stake_values[2]
    command = '1 ' + ' '.join(map(str, stake_values)) + ' 1'
    rounds, unresolved = [], []
    for _ in range(24):
        text = post(command)
        stages = [{'request': command, 'response': text}]
        for _ in range(24):
            current = balance(text)
            if current is not None:
                break
            if re.search(r'(?m)^(?:d=)?3 ', text):
                follow = '4 0'
            elif re.search(r'(?m)^(?:d=)?2 ', text):
                follow = '2 6'
            else:
                unresolved.append(text[:300])
                break
            text = post(follow)
            stages.append({'request': follow, 'response': text})
        current = balance(text)
        if current is None:
            unresolved.append('Incomplete or unsupported feature chain')
            break
        win = current - previous + stake
        if win < 0:
            unresolved.append('Unexpected account delta; excluded')
            break
        rounds.append({'stages': stages, 'balanceBefore': previous,
            'balanceAfter': current, 'sourceStake': stake, 'win': win})
        previous = current
    OUTPUT.mkdir(exist_ok=True)
    value = {'slug': slug, 'noAccount': True, 'currency': 'DEMO',
        'source': 'bounded public practice command observations; animation ack echo derived from browser trace',
        'init': init, 'rounds': rounds, 'unresolved': unresolved}
    (OUTPUT / (slug + '.json')).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')
    print(slug, len(rounds), 'complete rounds;', sum(r['win'] > 0 for r in rounds), 'winning;',
        len(unresolved), 'unresolved; ordinary browser validation still required', flush=True)

if __name__ == '__main__':
    import sys
    selected = [g for g in GAMES if not sys.argv[1:] or g['slug'] in sys.argv[1:]]
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        list(pool.map(capture, selected))
