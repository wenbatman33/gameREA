"""Rebuild recovered source in Creator. Development output is muted; normal output is explicit."""
import argparse,datetime,json,subprocess,shutil
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
PROJECT=ROOT/'creator-projects/seth2-recovered'
CREATOR='/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/MacOS/CocosCreator'
def main():
    p=argparse.ArgumentParser();p.add_argument('--allow-cold-cli',action='store_true',help='Research only: direct binary may lack Dashboard authentication and downgrade all importers. Prefer authenticated GUI build.');p.add_argument('--normal-audio',action='store_true',help='User verification build; otherwise independent development output is muted.');p.add_argument('--platform',default='web-mobile',choices=['web-mobile','web-desktop']);a=p.parse_args()
    if not a.allow_cold_cli:
        p.error('Use the authenticated Dashboard -> Creator Build panel. Cold CLI can downgrade asset metadata; --allow-cold-cli is research-only explicit opt-in.')
    mode='user-verification' if a.normal_audio else 'development-muted'
    out=PROJECT/'build'/mode;report=ROOT/'research/creator-recovery/editor';report.mkdir(parents=True,exist_ok=True)
    stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ')
    log=report/f'build-{mode}-{stamp}.log'
    params=f'platform={a.platform};debug=true;sourceMaps=true;buildPath={out.parent};outputName={mode};startScene=ed1c7a5d-01d8-4ed0-9393-741fe7f675a0'
    command=[CREATOR,'--project',str(PROJECT),'--build',params]
    with log.open('w') as dest:
        child=subprocess.Popen(command,stdout=dest,stderr=subprocess.STDOUT,cwd=ROOT)
        code=child.wait()
    shutil.copyfile(log,report/f'build-{mode}.log')
    index=out/'index.html';audioInjected=False
    if index.exists() and not a.normal_audio:
        shutil.copyfile(ROOT/'web-src/development-mute.js',out/'development-mute.js')
        body=index.read_text();body=body.replace('<head>','<head>\n<script src="development-mute.js"></script>',1);index.write_text(body);audioInjected='development-mute.js' in body
    sceneMeta=PROJECT/'assets/recovered/main/mainPortrait.scene.meta'
    sceneImported=json.loads(sceneMeta.read_text()).get('importer')=='scene'
    scriptImports=sum(json.loads(p.read_text()).get('importer')=='typescript' for p in (PROJECT/'assets/recovered/scripts').glob('*.ts.meta'))
    result={'sceneImporterValid':sceneImported,'typescriptImporterCount':scriptImports,'command':command,'returnCode':code,'mode':mode,'output':str(out),'indexExists':index.exists(),'developmentMuteInjected':audioInjected,'builtAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceRebuilt':code==36 and index.exists() and sceneImported and scriptImports>=349,'buildReportedErrors':log.read_text(errors='replace').count('Error:'),'playableValidated':False,'log':str(log)}
    (report/f'build-{mode}-{stamp}.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    (report/f'build-{mode}.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps(result,ensure_ascii=False,indent=2))
    raise SystemExit(0 if code==36 else code)
if __name__=='__main__':main()
