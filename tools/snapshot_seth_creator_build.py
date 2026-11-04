"""Bind actual GUI builds to a content-addressed code/scene/options snapshot."""
import argparse,datetime,hashlib,json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def digest(path):return hashlib.sha256(path.read_bytes()).hexdigest()
p=argparse.ArgumentParser();p.add_argument('label');p.add_argument('--phase',choices=['before','after'],required=True);p.add_argument('--project',default='creator-projects/seth2-recovered');p.add_argument('--evidence-dir',default='research/creator-recovery/editor');a=p.parse_args()
PROJECT=(ROOT/a.project).resolve(); EVIDENCE=(ROOT/a.evidence_dir).resolve()
if not PROJECT.is_relative_to(ROOT/'creator-projects') or not EVIDENCE.is_relative_to(ROOT/'research'):p.error('Project/evidence must remain in this local workspace.')
EVIDENCE.mkdir(parents=True,exist_ok=True)
if not re.fullmatch(r'[a-z0-9-]+',a.label):p.error('Simple lowercase build label required.')
code=[{'path':str(x.relative_to(PROJECT)),'bytes':x.stat().st_size,'sha256':digest(x)} for x in sorted((PROJECT/'assets').rglob('*')) if x.is_file() and x.suffix in ['.js','.ts']]
aggregate=hashlib.sha256(json.dumps(code,sort_keys=True,separators=(',',':')).encode()).hexdigest()
profile=PROJECT/'profiles/v2/packages/builder.json';tasks=json.loads(profile.read_text()).get('BuildTaskManager',{}).get('taskMap',{}) if profile.exists() else {}
configs={k:t['options'] for k,t in tasks.items()};configHash=hashlib.sha256(json.dumps(configs,sort_keys=True,separators=(',',':')).encode()).hexdigest()
x={'capturedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'phase':a.phase,'projectPath':str(PROJECT),'codeCount':len(code),'codeAggregateSha256':aggregate,'code':code,'sceneSha256':{str(y.relative_to(PROJECT)):digest(y) for y in sorted((PROJECT/'assets').rglob('*.scene'))},'engineSettingsSha256':digest(PROJECT/'settings/v2/packages/engine.json') if (PROJECT/'settings/v2/packages/engine.json').exists() else None,'taskOptionsSha256':configHash,'taskOptions':configs,'playableValidated':False}
out=EVIDENCE/f'{a.label}-{a.phase}.json';out.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
if a.phase=='after':
 before=out.with_name(f'{a.label}-before.json')
 if before.exists():
  b=json.loads(before.read_text());x['codeUnchangedDuringBuild']=b['codeAggregateSha256']==aggregate;x['scenesUnchangedDuringBuild']=b['sceneSha256']==x['sceneSha256'];out.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in x.items() if k not in ['code','taskOptions']},ensure_ascii=False,indent=2))
