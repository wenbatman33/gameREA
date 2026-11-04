"""Record reproducible local recovery inputs, actual REA evidence and tool versions."""
from pathlib import Path
import hashlib,json,subprocess
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'research/creator-recovery'
def digest(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def main():
    files=[]
    mirror=ROOT/'research/atg/seth2/mirror/play.godeezone1.com'
    for p in sorted(mirror.rglob('*')):
        if p.is_file():files.append(dict(path=str(p.relative_to(ROOT)),bytes=p.stat().st_size,sha256=digest(p)))
    evidence=[]
    for filename in ['seth2-original-summary.json','seth2-extracted-summary.json','seth2-creator-code-summary.json']:
        p=OUT/'rea'/filename;data=json.loads(p.read_text())
        evidence.append(dict(file=str(p.relative_to(ROOT)),sha256=digest(p),evidenceId=data['evidence_id'],operation=data['operation'],statistics=data['statistics'],parameters=data['parameters'],limitations=data['limitations']))
    snapshots=json.loads((OUT/'creator-code-snapshot.json').read_text())
    snapshot_matches=all((ROOT/r['source']).is_file() and digest(ROOT/r['source'])==r['sha256'] for r in snapshots)
    failures=[dict(file=str(p.relative_to(ROOT)),**json.loads(p.read_text())) for p in sorted((OUT/'rea').glob('creator-code-*-failure.json'))]
    report=dict(creatorCodeMatchesAnalyzedSnapshot=snapshot_matches, creatorCodeSnapshot='research/creator-recovery/creator-code-snapshot.json', status='reconstruction in progress; editor editing and GUI build proven separately; full gameplay not yet accepted',
                acceptance='research/creator-recovery/acceptance.json',reaFailedAttempts=failures,
                sourceInputs=files,reaVersion='6.7.0',reaEvidence=evidence,
                cocosCreatorVersion='3.8.8',sourceCreatorVersion='3.7.2',
                cocosMcp=dict(repository='https://github.com/DaxianLee/cocos-mcp-server',version='1.5.4',
                              upstreamCommit=subprocess.check_output(['git','-C','/tmp/seth2-cocos-mcp-server','rev-parse','HEAD'],text=True).strip(),
                              endpoint='http://127.0.0.1:18980/mcp',calls='research/creator-recovery/cocos-mcp-calls.jsonl'),
                publicationAuthorized=False,sourceMathRecovered=False,
                rules=[
                    'Do not substitute captured testSpin stages for game logic.',
                    'Recovered JavaScript in a .ts container is not original TypeScript.',
                    'Imported assets or successful scene opening alone do not establish playable reconstruction.',
                    'User validation retains normal audio; agent preview must be independently muted.'
                ])
    p=OUT/'seth2-input-evidence.json';p.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(dict(files=len(files),bytes=sum(x['bytes']for x in files),reaEvidenceIds=[x['evidenceId']for x in evidence])))
if __name__=='__main__':main()
