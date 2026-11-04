"""Record actual Creator compilation and scene graph diagnostics; never marks playable from import alone."""
import argparse,json,hashlib
from urllib.parse import urlparse,unquote
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
PROJECT=ROOT/'creator-projects/seth2-recovered'
def inspect():
    result={'project':str(PROJECT),'scope':'Editor import/serialization only; gameplay and build require separate proof','compiler':{},'scenes':[]}
    for target in ['editor','preview']:
        path=PROJECT/f'temp/programming/packer-driver/targets/{target}/main-record.json'
        if not path.exists():continue
        modules=json.loads(path.read_text()).get('modules',{})
        errors=[];stale=[]
        for name,module in modules.items():
            if module.get('erroneous'):
                cid=module.get('chunkId','')
                cp=path.parent/'chunks'/cid[:2]/(cid+'.js')
                entry={'module':name,'compiledDiagnostic':cp.read_text() if cp.exists() else 'chunk missing'}
                actual=Path(unquote(urlparse(name).path)) if name.startswith('file:') else None
                (stale if actual is not None and not actual.exists() else errors).append(entry)
        result['compiler'][target]={'moduleCount':len(modules),'erroneousCount':len(errors),'errors':errors,'obsoleteSourceErrorCount':len(stale),'obsoleteSourceErrors':stale}
    for p in sorted((PROJECT/'assets/recovered').rglob('*.scene')):
        data=json.loads(p.read_text());nodes=[(i,x) for i,x in enumerate(data) if isinstance(x,dict) and x.get('__type__') in ['cc.Node','cc.Scene']]
        ids={};duplicates=[]
        for i,node in nodes:
            uid=node.get('_id')
            if uid and uid in ids:duplicates.append([ids[uid],i,uid])
            if uid:ids[uid]=i
        result['scenes'].append({'path':str(p.relative_to(PROJECT)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'objects':len(data),'nodes':len(nodes),'nodesWithoutStableId':[i for i,n in nodes if not n.get('_id')],'duplicateIds':duplicates})
    return result
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--output',default='research/creator-recovery/editor/import-diagnostics.json');a=p.parse_args()
    x=inspect();out=ROOT/a.output;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'output':str(out),'compiler':{k:{'moduleCount':v['moduleCount'],'erroneousCount':v['erroneousCount']} for k,v in x['compiler'].items()},'scenes':x['scenes']},ensure_ascii=False,indent=2))
