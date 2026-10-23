"""Turn locally owned observations into complete, independently selectable rounds."""
from pathlib import Path
import json
import re

def pp_rounds(root, slug, stake):
    path = Path(root) / 'research/pragmatic/round-samples' / (slug + '.json')
    if not path.is_file():
        return []
    source = json.loads(path.read_text())
    assert source['noAccount'] and source['currency'] == 'DEMO'
    result, active, before, previous = [], [], None, 100000.0

    def fields(raw):
        return dict(x.split('=', 1) for x in raw.split('&') if '=' in x)

    def finish():
        if not active:
            return
        last = fields(active[-1]['raw'])
        if last.get('na') != 's' or float(last.get('w', '0')) != 0:
            return
        if any(any(k.startswith('fs') for k in fields(stage['raw'])) for stage in active):
            return
        win = round(previous - before + stake, 2)
        if win >= 0:
            result.append({'stages': list(active), 'balanceBefore': before,
                'sourceStake': stake, 'win': win})

    for stage in source['transactions']:
        data = fields(stage['raw'])
        current = float(data.get('balance', str(previous)).replace(',', ''))
        if stage['action'] == 'doInit':
            previous = current
            continue
        if stage['action'] == 'doSpin' and abs(previous - current - stake) < 0.005:
            finish()
            active, before = [], previous
        if before is not None:
            active.append(stage)
        previous = current
    finish()
    assert len(result) >= 3, slug + ': insufficient complete ordinary samples'
    return result

def png_rounds(root, slug):
    root = Path(root)
    samples = []
    acquired = root / 'research/playngo/round-samples' / (slug + '.json')
    if acquired.is_file():
        value = json.loads(acquired.read_text())
        assert value['noAccount'] and value['currency'] == 'DEMO'
        samples.extend(value['rounds'])
    observed = root / 'research/playngo/observed-rounds' / (slug + '.json')
    if observed.is_file():
        value = json.loads(observed.read_text())
        assert value['noAccount'] and value['currency'] == 'DEMO'
        previous, stages = 2500000, []

        def finish():
            nonlocal previous
            if not stages:
                return
            ending = re.search(r'(?m)^(?:d=)?52 (\d+)', stages[-1]['response'])
            header = re.match(r'^1 (\d+) (\d+) (\d+)', stages[0]['request'])
            if ending and header:
                values = list(map(int, header.groups()))
                stake = values[0] * values[1] * values[2]
                after = int(ending[1])
                win = after - previous + stake
                if win >= 0:
                    samples.append({'stages': list(stages), 'balanceBefore': previous,
                        'balanceAfter': after, 'sourceStake': stake, 'win': win})
                previous = after

        for stage in value['transactions']:
            if stage['request'].startswith('104 '):
                found = re.search(r'(?m)^52 (\d+)', stage['response'])
                if found:
                    previous = int(found[1])
            if stage['request'].startswith('1 '):
                finish()
                stages = []
            if stages or stage['request'].startswith('1 '):
                if stage['request'] != '0':
                    stages.append(stage)
        finish()
    return samples
