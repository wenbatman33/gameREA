/* Acquired Play'n GO frontend routing; no upstream fetch is permitted. */
importScripts('png-engine.js');
const pngLocks=new Map();
async function pngTransaction(ctx,work){
 const key=new URL('__png-state/'+encodeURIComponent(ctx.clientId||'default')+'/'+ctx.metadata.slug,ctx.base).href;
 const pending=(pngLocks.get(key)||Promise.resolve()).catch(()=>{}).then(async()=>{
  const cache=await caches.open('game-rea-png-virtual-state-v1');
  const saved=await cache.match(key),engine=new self.PNG_ENGINE(ctx.metadata.protocol,saved?await saved.json():null);
  const result=work(engine);
  await cache.put(key,new Response(JSON.stringify(engine.state),{headers:{'Content-Type':'application/json'}}));
  return result;
 });
 pngLocks.set(key,pending);try{return await pending;}finally{if(pngLocks.get(key)===pending)pngLocks.delete(key);}
}
self.GAME_PROVIDERS=self.GAME_PROVIDERS||{};
self.GAME_PROVIDERS.png={async handle(request,pathWithQuery,ctx){
 const m=ctx.metadata;let path=String(pathWithQuery).replace(/^\//,'');
 const localEngine=m.protocol?.samples?.some(r=>r.win>0)&&m.protocol.samples.some(r=>r.win===0);
 if(path==='_local/protocol.json')return ctx.reply(JSON.stringify({...m.protocol,engine:!!localEngine,api:ctx.virtualBase+'_local/packet'}),'application/json');
 if(path==='_local/packet'||path==='_local/configure'){
  if(!localEngine)return ctx.reply('Complete mixed round samples unavailable','text/plain',409);
  if(request.method!=='POST')return ctx.reply('POST required','text/plain',405);
  try{
   const input=await request.json();
   if(path==='_local/configure')return ctx.reply(JSON.stringify(await pngTransaction(ctx,e=>e.configure(input))),'application/json');
   if(typeof input.command!=='string'||input.command.length>4096||!/^\d+(?:\s|$)/.test(input.command)||typeof input.id!=='string'||input.id.length>100)throw Error('Invalid local protocol packet');
   return ctx.reply(await pngTransaction(ctx,e=>e.process(input.command,input.id)),'text/plain');
  }catch(error){return ctx.reply(error.message,'text/plain',422);}
 }
 let parsed=new URL(path,'https://virtual.invalid/');let match=parsed.pathname.match(/^\/o\/([^/]+)(\/.*)?$/);
 let host=match?match[1]:'released.playngonetwork.com',original=match?(match[2]||'/'):parsed.pathname;
 if(original.endsWith('/gamehub/negotiate'))return ctx.reply(JSON.stringify({negotiateVersion:1,connectionId:'LOCAL',connectionToken:'LOCAL',availableTransports:[{transport:'WebSockets',transferFormats:['Text','Binary']}]}),'application/json');
 if(request.method==='POST'&&host==='ascflyp.playngonetwork.com'){
  let body=await request.text();
  if(/(?:^|\n)103 /.test(body))return ctx.reply('d=103 "LOCAL"\r\n\r\n','text/plain');
  if(/(?:^|\n)101 /.test(body))return ctx.reply('d=103 "LOCAL!1"\r\n101 1 "DEMO" "" "ZZ" "LOCAL" ""\r\n127 "2026-10-23T00:00:00Z"\r\n\r\n','text/plain');
  return ctx.reply('d=111 "Unsupported local HTTP command"\r\n','text/plain',400);
 }
 let body,mime;
 if(original==='/games/getgamebygid/'+m.slug){body=JSON.stringify(m.lookup);mime='application/json';}
 else if(original==='/configuration/prelaunchconfiguration'){body=JSON.stringify(m.prelaunch);mime='application/json';}
 else if(original==='/configuration/v2'){
  const cfg=structuredClone(m.configuration);cfg.availableModules=(cfg.availableModules||[]).filter(x=>x.name!=='promocentre');if(ctx.quiet)cfg.defaultSound=false;
  body=JSON.stringify(cfg);mime='application/json';
 }else{
  const record=m.files[host+original];if(!record)return null;
  mime=record.mime||'application/octet-stream';
  if(!/(javascript|json|html|css|text\/)/.test(mime))return ctx.read(record);
  body=await ctx.text(record);
 }
 if(m.forceRasterFallback!==false)body=body.replace(/"has(?:Avif|Webp|Jp2)"\s*:\s*true/g,x=>x.replace(/true$/,'false'));
 const hosts=['cdn.playngonetwork.com','released.playngonetwork.com','ascflyp.playngonetwork.com','asccw.playngonetwork.com','pc-prod-eu.playngonetwork.com'];
 for(const h of hosts)for(const proto of ['https://','http://','//'])body=body.split(proto+h).join(ctx.virtualBase+'o/'+h);
 if(/html/.test(mime)){
  const base=new URL(ctx.base);const script=new URL('png-socket.js',base).href;
  const config=ctx.virtualBase+'_local/protocol.json';
  const quiet=ctx.quiet?`<script>(()=>{const A=window.AudioContext||window.webkitAudioContext;if(A){A.prototype.resume=function(){return Promise.resolve()};const B=class extends A{constructor(...a){super(...a);this.suspend()}};window.AudioContext=B;window.webkitAudioContext=B}const p=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(...a){this.muted=true;this.volume=0;return p.apply(this,a)}})()</script>`:'';
  const controls=localEngine?`<script>window.__LOCAL_SIMULATION__=${JSON.stringify({configure:ctx.virtualBase+'_local/configure',winRate:35,respin:m.slug==='firejoker'})}</script><script src="${new URL('simulation-controls.js',base).href}"></script>`:'';
  body=quiet+controls+`<script src="${script}" data-png-config="${config}"></script>`+body;
 }
 return ctx.reply(body,mime);
}};
