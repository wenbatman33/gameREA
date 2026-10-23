const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const catalog=JSON.parse(fs.readFileSync(process.argv[2]||'.static-preview/gameREA/games.json','utf8'));
const stores=new Map(),caches={open:async name=>{if(!stores.has(name))stores.set(name,new Map());const map=stores.get(name);return{match:async key=>map.has(key)?new Response(map.get(key)):undefined,put:async(key,res)=>map.set(key,await res.text())};}};
function boot(){const scope={self:{},URL,Response,structuredClone,caches};vm.createContext(scope);scope.importScripts=name=>vm.runInContext(fs.readFileSync(__dirname+'/'+name,'utf8'),scope);vm.runInContext(fs.readFileSync(__dirname+'/png-worker.js','utf8'),scope);return scope.self.GAME_PROVIDERS.png.handle;}
(async()=>{
 let handler=boot();
 for(const game of catalog.games.filter(g=>g.provider==='png'&&g.protocol.samples.some(r=>r.win>0))){
  const ctx={metadata:game,base:'https://offline.test/gameREA/',virtualBase:'https://offline.test/gameREA/v/png/'+game.slug+'/',clientId:'verify-'+game.slug,reply:(b,m,status=200)=>new Response(b,{status,headers:{'Content-Type':m}})};
  const send=async(path,body)=>handler(new Request(ctx.virtualBase+path,{method:'POST',body:JSON.stringify(body)}),'/'+path,ctx);
  const configure=await send('_local/configure',{nextOutcome:'win'});assert.equal(configure.status,200);
  const header=game.protocol.samples[0].stages[0].request,packet={command:header,id:'connection:1'};
  const response=await send('_local/packet',packet);assert.equal(response.status,200);const first=await response.text();
  handler=boot();const duplicate=await send('_local/packet',packet);assert.equal(await duplicate.text(),first,'packet retry survives worker restart');
  const stateResponse=await send('_local/configure',{});const state=await stateResponse.json();assert(state.pending);
  // An invalid packet must not mutate or settle an active round.
  assert.equal((await send('_local/packet',{command:'999',id:'connection:2'})).status,422);
  const after=await(await send('_local/configure',{})).json();assert.equal(after.balance,state.balance);assert(after.pending);
  const recovered=await send('_local/packet',{command:'104 0',id:'connection:3'});assert.equal(recovered.status,200);
  const settled=await(await send('_local/configure',{})).json();assert(!settled.pending);assert(settled.balance>=state.balance);
  const isolated=await handler(new Request(ctx.virtualBase+'_local/configure',{method:'POST',body:'{}'}),'/_local/configure',{...ctx,clientId:'another'});assert.equal((await isolated.json()).balance,25000);
  console.log('PASS',game.slug,'local HTTP endpoint, durable retry, rejected-command rollback, reconnect and session isolation');
 }
})().catch(e=>{console.error(e);process.exitCode=1;});
