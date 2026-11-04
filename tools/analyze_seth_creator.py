"""Analyze an immutable source-only Creator snapshot with the real REA CLI.

Generated analysis is local evidence, not a deployment or a gameplay acceptance.
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'creator-projects/seth2-recovered/assets'
OUT = ROOT / 'research/creator-recovery'


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def analyze(rea):
    paths = sorted([
        *(ASSETS / 'recovered/scripts').glob('*.ts'),
        *(ASSETS / 'recovered/bootstrap').glob('*.ts'),
        *(ASSETS / 'local-backend').glob('*.ts'),
        ASSETS / 'recovered/vendor/original-vendors.js',
    ])
    if not paths or any(not p.is_file() for p in paths):
        raise RuntimeError('Recovery sources are incomplete.')
    identity = hashlib.sha256('\n'.join(
        f'{p.relative_to(ASSETS)}:{digest(p)}' for p in paths
    ).encode()).hexdigest()
    snapshot = OUT / 'rea-input' / f'creator-code-{identity}'
    records = []
    for source in paths:
        relative = source.relative_to(ASSETS)
        target = snapshot / relative
        if target.exists() and digest(target) != digest(source):
            raise RuntimeError(f'Immutable snapshot changed: {target}')
        if not target.exists():
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source, target)
        category = ('recovered-runtime' if relative.parts[:2] == ('recovered', 'scripts')
                    else 'original-vendor-with-compatibility-wrapper'
                    if relative.parts[:2] == ('recovered', 'vendor')
                    else 'new-local-integration')
        records.append(dict(source=str(source.relative_to(ROOT)),
                            snapshot=str(target.relative_to(ROOT)),
                            category=category, sha256=digest(source)))
    report = OUT / 'rea' / f'creator-code-{identity}-analysis.json'
    report.parent.mkdir(parents=True, exist_ok=True)
    command = [rea, 'analyze-javascript-application', str(snapshot),
               '--max-semantic-nodes', '120000', '--max-semantic-nodes-per-file', '20000',
               '--max-semantic-unknowns', '5000', '--max-heap-mb', '2048',
               '--analysis-timeout-ms', '180000', '--format', 'json']
    executed = not report.exists()
    if executed:
        partial = report.with_suffix('.partial')
        with partial.open('w') as stream, report.with_suffix('.log').open('w') as progress:
            subprocess.run(command, stdout=stream, stderr=progress, check=True)
        partial.replace(report)
    data = json.loads(report.read_text())
    summary = {key: data[key] for key in [
        'evidence_id', 'subject', 'provider', 'operation', 'parameters', 'limitations']}
    summary['statistics'] = data['normalized_result']['statistics']
    summary['scope'] = (f'Immutable source-only snapshot of {len(records)} Creator scripts; '
                        'categories distinguish recovered code and new integration. '
                        'Static analysis does not prove gameplay or original server recovery.')
    summary['invocation'] = {'requestedCommand': command, 'executedThisRun': executed,
                             'cachedEvidenceReused': not executed}
    summary['snapshotIdentity'] = identity
    summary['currentSourcesMatch'] = all(digest(ROOT / r['source']) == r['sha256'] for r in records)
    (OUT / 'creator-code-snapshot.json').write_text(json.dumps(records, indent=2) + '\n')
    for path in [report.with_name(f'creator-code-{identity}-summary.json'),
                 OUT / 'rea/seth2-creator-code-summary.json']:
        path.write_text(json.dumps(summary, indent=2) + '\n')
    print(json.dumps({k: summary[k] for k in ['evidence_id', 'statistics', 'currentSourcesMatch']}))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--rea', default=shutil.which('rea'), help='Path to installed REA executable')
    args = parser.parse_args()
    if not args.rea:
        parser.error('Pass --rea with the actual installed REA executable.')
    analyze(args.rea)
