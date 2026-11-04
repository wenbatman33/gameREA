"""Restore original vendor plugins, in original settings.jsList order, with provenance.

Never fetches upstream content, runs vendor code, attaches replay, or publishes.
"""
from pathlib import Path
import hashlib,json,uuid
ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'research/atg/seth2/mirror/play.godeezone1.com/egames/22020103b31b7390f07b1551e8538589b5e51967/game/src'
DEST=ROOT/'creator-projects/seth2-recovered/assets/recovered/vendor'
GUARD=r'''// Reconstructed isolation layer. This is not an original game implementation.
(function(root){
  // Editor/AssetDB/Builder own native resource protocols and lifecycle.
  // The isolation policy belongs to the generated Web game, not to Creator.
  // A clean Editor restart removes wrappers installed by older tool versions.
  if((root.process&&root.process.versions&&root.process.versions.electron)||root.Editor){
    root.__SETH_RECOVERY_NETWORK_MODE__='Creator/Electron native resource pipeline; Web guard not installed';
    return;
  }
  const requestURL = value => new URL(String(value && typeof value.url === 'string' ? value.url : value), root.location ? root.location.href : 'http://localhost/');
  const allowed = (value,method='GET') => {
    const url = requestURL(value);
    // Actual Creator editor loaders use UUID caches, through import:/native:
    // and file://<this project>/library. No arbitrary file access is enabled.
    if(/^(GET|HEAD)$/i.test(method)){
      let cachePath=null;
      if((url.protocol==='import:'||url.protocol==='native:')&&!url.host)cachePath=url.pathname.replace(/^\/+/, '');
      if(url.protocol==='file:'&&!url.host){
        const libraryPath=decodeURIComponent(new URL(__SETH_PROJECT_LIBRARY_URI__).pathname);
        const filePath=decodeURIComponent(url.pathname);
        if(filePath.startsWith(libraryPath))cachePath=filePath.slice(libraryPath.length);
      }
      if(cachePath!==null){
        const match=/^([0-9a-f]{2})\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:@[a-z0-9_-]+)?(?:\.[a-z0-9._-]+)?$/i.exec(cachePath);
        if(match&&match[1].toLowerCase()===match[2].slice(0,2).toLowerCase())return true;
      }
    }
    const page=root.location?new URL(root.location.href):null;
    if(page&&/^(http:|https:)$/.test(page.protocol)){
      if(/^(http:|https:)$/.test(url.protocol)&&url.origin===page.origin)return true;
      // WebSocket policy: exactly the page's host/port and matching transport
      // security (https -> wss, http -> ws), no implicit alternate endpoints.
      if(url.protocol===(page.protocol==='https:'?'wss:':'ws:')){
        const transport=new URL(url.href);transport.protocol=page.protocol;
        if(transport.origin===page.origin)return true;
      }
    }
    return /^(data:|blob:)$/.test(url.protocol) ||
      (/^(https?:|wss?:)$/.test(url.protocol) && ['localhost','127.0.0.1','[::1]'].includes(url.hostname));
  };
  const reject = (value,method='GET') => { if(!allowed(value,method)){const url=requestURL(value);throw new Error('[Seth recovery] Third-party connection blocked: '+url.protocol+'//'+url.host+url.pathname);} };
  const state = root.__SETH_RECOVERY_GUARD_V2__ || {installed:false};
  state.reject = reject;
  if(!state.installed){
    if(root.fetch){const fetch=root.fetch;root.fetch=function(input,init){try{state.reject(input,init&&init.method||input&&input.method||'GET');}catch(error){return Promise.reject(error);}return fetch.call(this,input,init);};}
    if(root.XMLHttpRequest){const open=root.XMLHttpRequest.prototype.open;root.XMLHttpRequest.prototype.open=function(method,url,...args){state.reject(url,method);return open.call(this,method,url,...args);};}
    for(const key of ['WebSocket','EventSource'])if(root[key]){const Native=root[key];root[key]=new Proxy(Native,{construct(Target,args,NewTarget){state.reject(args[0]);return Reflect.construct(Target,args,NewTarget);}});}
    state.installed=true;root.__SETH_RECOVERY_GUARD_V2__=state;
  }
  root.__SETH_RECOVERY_NETWORK_MODE__='same-origin or loopback APIs; restricted Creator UUID cache reads';
})(typeof window!=='undefined'?window:globalThis);
'''
def main(*,overwrite_restored_source=False):
 if DEST.exists() and any(DEST.iterdir()) and not overwrite_restored_source:raise RuntimeError('Recovered vendor sources already exist. Preserve edits; use --overwrite-restored-source only for an intentional reconstruction.')
 DEST.mkdir(parents=True,exist_ok=True)
 settings=json.loads((SOURCE/'settings.json').read_text())
 library_uri=(DEST.parents[2]/'library').as_uri()+'/'
 guard=GUARD.replace('__SETH_PROJECT_LIBRARY_URI__',json.dumps(library_uri))
 rows=[]; sections=["// Original plugins ran as browser scripts, including during Creator editor evaluation.\n(function(root){ var module=undefined, exports=undefined, require=undefined, define=undefined, process=undefined, Buffer=undefined; var self=root, window=root, global=root, globalThis=root;\n",guard]
 for index,relative in enumerate(settings['plugins']['jsList']):
  source=SOURCE/relative
  if not source.is_file():raise FileNotFoundError('Missing original vendor: '+str(source))
  raw=source.read_bytes(); digest=hashlib.sha256(raw).hexdigest()
  dest=DEST/f'{index:02d}-{source.name}'
  # Individual original files are kept as inert .txt evidence to avoid executing twice.
  original=dest.with_name(dest.name+'.source.txt');original.write_bytes(raw)
  sections.append(f'\n;\n// Original plugin {index}: {relative}\n// SHA256: {digest}\n'+raw.decode('utf8')+'\n;\n')
  rows.append({'order':index,'source':str(source.relative_to(ROOT)),'originalCopy':str(original.relative_to(ROOT)),'sha256':digest,'bytes':len(raw)})
 sections.append("\n}).call(typeof window!=='undefined'?window:globalThis, typeof window!=='undefined'?window:globalThis);\n")
 combined=DEST/'original-vendors.js';combined.write_text('\n'.join(sections))
 # Keys verified against installed Creator 3.8.8 javascript inspector.
 meta={'ver':'4.0.24','importer':'javascript','imported':True,'uuid':str(uuid.uuid5(uuid.NAMESPACE_URL,'gameREA/seth2/recovered/original-vendors')),'files':[],'subMetas':{},'userData':{'isPlugin':True,'loadPluginInEditor':True,'loadPluginInWeb':True,'loadPluginInNative':False,'loadPluginInMiniGame':False,'executionScope':'global','simulateGlobals':True}}
 Path(str(combined)+'.meta').write_text(json.dumps(meta,indent=2)+'\n')
 report={'status':'Original plugin bytes restored; Web isolated to same-origin/loopback; Editor/Electron native resource pipeline untouched; runtime verification tracked separately','originalSettings':str((SOURCE/'settings.json').relative_to(ROOT)),'localLibraryReadRoot':library_uri,'combinedPlugin':str(combined.relative_to(ROOT)),'combinedSha256':hashlib.sha256(combined.read_bytes()).hexdigest(),'plugins':rows,'audio':'No mute modification; separate development build injects silence only in development output.'}
 (ROOT/'research/creator-recovery/seth2-vendor-map.json').write_text(json.dumps(report,indent=2)+'\n')
 print(json.dumps({'plugins':len(rows),'output':str(combined.relative_to(ROOT))}))
if __name__=='__main__':
 import argparse
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('--overwrite-restored-source',action='store_true',help='Explicitly replace restored vendor sources and plugin metadata; may overwrite later edits.')
 args=parser.parse_args()
 try:main(overwrite_restored_source=args.overwrite_restored_source)
 except RuntimeError as error:parser.error(str(error))
