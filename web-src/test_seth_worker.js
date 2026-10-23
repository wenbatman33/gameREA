// Run after exporting one metadata object into /tmp/seth-export-test.json.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const {webcrypto}=require('node:crypto');
const meta=JSON.parse(fs.readFileSync(process.argv[2]||'/tmp/seth-export-test.json','utf8'));
const saved=new Map();
const cacheAPI={open:async()=>({match:async key=>saved.has(key)?saved.get(key).clone():undefined,put:async(key,value)=>saved.set(key,value.clone())})};
const scope={self:{},Response,Request,URL,crypto:webcrypto,console,Math,Date,caches:cacheAPI};vm.runInNewContext(fs.readFileSync(__dirname+'/seth-worker.js','utf8'),scope);
let provider=scope.self.GAME_PROVIDERS.seth;
const ctx={metadata:meta,virtualBase:'https://example.test/gameREA/v/seth/seth2/',clientId:'unit',quiet:true,reply:(b,m,s=200)=>new Response(b,{status:s,headers:{'Content-Type':m}}),text:async r=>fs.readFileSync(r.file,'utf8'),read:async r=>new Response(fs.readFileSync(r.file))};
function socketContract(){
 const entry=new URL(meta.entry,'https://example.test');assert.equal(entry.searchParams.get('socket_url'),'browser-local');
 const timer=[],shimWindow={__SETH_BASE__:ctx.virtualBase};let SocketClient;
 const sandbox={window:shimWindow,location:{search:entry.search},URLSearchParams,setTimeout:fn=>timer.push(fn),console,App:{wssCacertUrl:''},Log:{d(){}},fetch:async()=>new Response('{}')};
 sandbox.System={register(_name,_imports,factory){const registration=factory((name,value)=>{if(name==='default')SocketClient=value;});registration.setters[0]({createClass:(type,items)=>{for(const item of items)Object.defineProperty(type.prototype,item.key,item);}});registration.setters[1]({cclegacy:{_RF:{push(){},pop(){}}}});registration.setters[2]({MainCmd:{},SUB_CMD_SYS:{}});registration.setters[3]({Macro:{}});registration.execute();}};
 vm.createContext(sandbox);vm.runInContext(fs.readFileSync(__dirname+'/seth-socket.js','utf8'),sandbox);
 vm.runInContext(fs.readFileSync(__dirname+'/../research/atg/seth2/extracted/main-SocketIOClient.ts.js','utf8'),sandbox);
 const client=new SocketClient();let opened=false;client.onOpen=()=>opened=true;
 // Actual client has `t && ...io.connect(t)` guard: without socket_url it
 // never connects even though the browser shim is installed correctly.
 client.initSocket('');assert.equal(client.isConnected,false);assert.equal(timer.length,0);
 client.initSocket('https://'+entry.searchParams.get('socket_url'));assert.equal(timer.length,1);timer.shift()();assert.equal(opened,true);assert.equal(client.isConnected,true);
}
async function api(event,data={},session='test'){
 const request=new Request(ctx.virtualBase+'local-api/'+event,{method:'POST',body:JSON.stringify({session,data})});
 return(await provider.handle(request,'/local-api/'+event,ctx)).json();
}
(async()=>{
 socketContract();
 let r=await api('initial');assert.equal(r.platform.player.balance.amount,10000);assert.equal(r.platform.player.settings.advancedSettings.sounds.backgroundVolume,0);
 ctx.quiet=false;r=await api('initial');assert.equal(r.platform.player.settings.advancedSettings.sounds.backgroundVolume,.5);assert.equal(r.platform.player.settings.advancedSettings.sounds.effectVolume,.8);ctx.quiet=true;
 await api('configure',{winRate:100,payoutMultiplier:2});
 r=await api('spin');const id=r.engine.spinId;assert.equal(r.engine.gameState.at(-1).totalWinnings,2);
 const prefetch=await api('spin');assert.equal(prefetch.status,200);assert.equal(prefetch.platform.player.balance.amount,9998);
 r=await api('closeSpin',{spinId:id});assert.equal(r.platform.player.balance.amount,10000);r=await api('closeSpin',{spinId:id});assert.equal(r.platform.player.balance.amount,10000);
 r=await api('spin',{forceClose:prefetch.engine.spinId});assert.equal(r.platform.player.balance.amount,10001);await api('closeSpin',{spinId:r.engine.spinId});
 for(const mode of ['free','awakening','jackpot','treasure']){
  await api('configure',{winRate:0,nextFeature:mode});r=await api('spin');const stages=r.engine.gameState;assert.equal(stages.at(-1).currentView,stages.length-1);assert.equal(stages.at(-1).totalViews,stages.length);
  if(mode==='free'||mode==='awakening'){assert.equal(stages[0].startFreeGame,true);assert.equal(stages.at(-1).freeGameCount,0);}
  if(mode==='jackpot')assert.equal(stages[0].isJp,'jp-mini');
  if(mode==='treasure')assert.equal(stages[0].noWinReward,2);
  await api('closeSpin',{spinId:r.engine.spinId});
 }
 r=await api('initial',{},'buy');await api('configure',{winRate:0},'buy');r=await api('spin',{action:'buyFeature'},'buy');assert.equal(r.platform.player.balance.amount,9900);const buy=r.engine.gameState.spinId;r=await api('spin',{spinId:buy},'buy');assert.equal(r.platform.player.balance.amount,9900);await api('closeSpin',{spinId:buy},'buy');r=await api('getBetRecords',{},'buy');assert.equal(r.data[0].totalStake,100);
 const invalid=await api('spin',{stakeIndex:99});assert.equal(invalid.status,400);
 // A real hostname takes the client's domain branch instead of its IP branch.
 const manifest=await(await provider.handle(new Request('https://example.test/slotFramework/manifest.json'),'/slotFramework/manifest.json?cache=1',ctx)).json();
 assert.equal(manifest.hash,'14ee78206168302dd5e294aaa97f5c0b21de68f5');
 const framework=await provider.handle(new Request('https://example.test/slotFramework/'+manifest.hash+'/config.json'),'/slotFramework/'+manifest.hash+'/config.json',ctx);
 assert.ok(framework&&framework.ok,'Domain framework bundle must resolve');
 const html=await(await provider.handle(new Request(ctx.virtualBase+meta.entry.slice(1)),meta.entry,ctx)).text();assert.ok(html.includes('window.__SETH_BASE__="https://example.test/gameREA/v/seth/seth2/"'));assert.ok(!html.includes('127.0.0.1:18767'));
 const bootstrap=html.match(/<script>(window\.__SETH_BASE__[\s\S]*?)<\/script>/)[1];let repaired='';
 vm.runInNewContext(bootstrap,{window:{},URL,location:{href:ctx.virtualBase+'egames/example/game/?t=browser-local'},history:{replaceState:(_state,_title,url)=>repaired=url}});
 assert.equal(new URL(repaired).searchParams.get('socket_url'),'browser-local');assert.equal(new URL(repaired).origin,'https://example.test');
 r=await api('initial',{},'restart');await api('configure',{winRate:100},'restart');r=await api('spin',{},'restart');const pending=r.engine.spinId;
 vm.runInNewContext(fs.readFileSync(__dirname+'/seth-worker.js','utf8'),scope);provider=scope.self.GAME_PROVIDERS.seth;
 r=await api('closeSpin',{spinId:pending},'restart');assert.equal(r.platform.player.balance.amount,10001);
 console.log('Seth browser backend: balance, pipelining, idempotency, feature shapes, buy continuation, audio, subpath HTML and worker restart persistence passed.');
})().catch(e=>{console.error(e);process.exitCode=1;});
