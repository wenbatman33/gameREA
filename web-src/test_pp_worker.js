const fs=require('node:fs/promises');const vm=require('node:vm');const assert=require('node:assert/strict');
(async()=>{
 const games=JSON.parse(await fs.readFile(process.argv[2]||'/tmp/pp-worker-test-metadata.json','utf8'));
 const stores=new Map();
 const caches={open:async name=>{
  if(!stores.has(name))stores.set(name,new Map());const map=stores.get(name);
  return {match:async key=>map.has(String(key))?new Response(map.get(String(key))):undefined,put:async(key,response)=>map.set(String(key),await response.text())};
 }};
 const source=await fs.readFile(__dirname+'/pp-worker.js','utf8');
 const boot=()=>{const context={self:{},URL,URLSearchParams,Response,atob,console,caches};vm.createContext(context);vm.runInContext(source,context);return context.self.GAME_PROVIDERS.pp.handle;};
 let handler=boot();
 let tested=0;
 for(const game of games){
  const ctx={metadata:game,base:'https://example.test/gameREA/',virtualBase:'https://example.test/gameREA/v/pp/'+game.slug+'/',clientId:'test-'+game.slug,quiet:false,
   text:r=>fs.readFile(r.asset,'utf8'),read:async r=>new Response(await fs.readFile(r.asset),{headers:{'Content-Type':r.mime}}),reply:(body,mime,status=200)=>new Response(body,{status,headers:{'Content-Type':mime}})};
  let page=await handler(new Request('https://example.test'+game.entry),game.entry,ctx);const html=await page.text();assert(!html.includes('https://demogamesfree.pragmaticplay.net'));assert(!html.includes('development-mute.js'));
  const quiet=await handler(new Request('https://example.test'+game.entry),game.entry,{...ctx,quiet:true});assert((await quiet.text()).includes('development-mute.js'));
  const init=game.fixtures.find(r=>r.action==='doInit'),chain=game.fixtures.filter(r=>r.action!=='doInit');
  const send=async(action,clientId=ctx.clientId,extra={})=>handler(new Request('https://example.test/gs2c/ge/v3/gameService',{method:'POST',body:new URLSearchParams({action,symbol:game.symbol,c:String(game.defaultCoin),l:String(game.defaultLines),...extra})}),'/gs2c/ge/v3/gameService',{...ctx,clientId});
  assert.equal((await send('doInit')).status,200);
  for(let i=0;i<3;i++)for(const record of chain){const response=await send(record.action);assert.equal(response.status,200,game.slug+' '+record.action);assert(!(await response.text()).includes('frozen='));tested++;}
  const isolated=await(await send('doInit','independent')).text();assert(isolated.includes('balance=100,000.00'));
  assert.equal((await send('doSpin',ctx.clientId,{c:'999'})).status,422);
  const buildPath=Object.keys(game.static).find(p=>p.endsWith('/build.js'));
  const build=await(await handler(new Request('https://example.test'+buildPath),buildPath,ctx)).text();assert(!/win\[(?:'[^']*'\+)*'[^']*'\]=eval\(atob\(/.test(build),game.slug+' context cached expressions');
 }
 // Terminate/recreate the entire provider realm after a winning spin, then
 // finish its pending collect and repeat that exact transport request.
 const game=games.find(g=>g.fixtures.some(r=>r.action==='doCollect'));
 const ctx={metadata:game,base:'https://example.test/gameREA/',virtualBase:'https://example.test/gameREA/v/pp/'+game.slug+'/',clientId:'restart-session',quiet:true,
  text:r=>fs.readFile(r.asset,'utf8'),read:async r=>new Response(await fs.readFile(r.asset)),reply:(body,mime,status=200)=>new Response(body,{status,headers:{'Content-Type':mime}})};
 let index=0;
 const request=(action,explicitIndex)=>{const i=explicitIndex??++index;return new Request('https://example.test/gs2c/ge/v5/gameService',{method:'POST',body:new URLSearchParams({symbol:game.symbol,action,index:String(i),counter:String(i*2-1),c:String(game.defaultCoin),l:String(game.defaultLines)})});};
 const route='/gs2c/ge/v5/gameService';
 await handler(request('doInit'),route,ctx);
 const chain=game.fixtures.filter(r=>r.action!=='doInit'),collectIndex=chain.findIndex(r=>r.action==='doCollect');
 for(const record of chain.slice(0,collectIndex))assert.equal((await handler(request(record.action),route,ctx)).status,200);
 handler=boot(); // memory Maps are gone; only CacheStorage remains.
 const collectRequest=request('doCollect');
 const response=await handler(collectRequest.clone(),route,ctx);assert.equal(response.status,200);
 const credited=await response.text();
 handler=boot();
 const duplicate=await handler(collectRequest.clone(),route,ctx);assert.equal(duplicate.status,200);assert.equal(await duplicate.text(),credited,'retry after restart credits exactly once');
 const next=chain[collectIndex+1]||chain[0];assert.equal((await handler(request(next.action),route,ctx)).status,200,'next action continues after restored collect');
 const otherBase={...ctx,base:'https://example.test/other-site/'};assert.equal((await handler(request('doCollect'),route,otherBase)).status,409,'base namespaces cannot borrow pending state');
 console.log('PASS restart before collect, restart after collect, duplicate-credit protection, next action and scope isolation');
 console.log('PASS',games.length,'PP games;',tested,'consecutive fixture requests; HTML/context rewrite, release/development audio, session isolation and invalid stake');
})().catch(e=>{console.error(e);process.exitCode=1;});
