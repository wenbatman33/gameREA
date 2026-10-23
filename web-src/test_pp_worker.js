const fs=require('node:fs/promises');const vm=require('node:vm');const assert=require('node:assert/strict');
(async()=>{
 const exportedGames=JSON.parse(await fs.readFile(process.argv[2]||'/tmp/pp-worker-test-metadata.json','utf8'));
 const games=exportedGames.map(g=>({...g,roundSamples:undefined}));
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
 for(const game of exportedGames){
  assert.ok(game.roundSamples.length>=3,game.slug+' complete samples');
  const ctx={metadata:game,base:'https://example.test/gameREA/',virtualBase:'https://example.test/gameREA/v/pp/'+game.slug+'/',clientId:'random-'+game.slug,quiet:true,
   text:r=>fs.readFile(r.asset,'utf8'),read:async r=>new Response(await fs.readFile(r.asset)),reply:(b,m,s=200)=>new Response(b,{status:s,headers:{'Content-Type':m}})};
  let sequence=0,balance=100000;const layouts=new Set();
  const send=async(action,coin=game.defaultCoin)=>{const i=++sequence,request=new Request(ctx.virtualBase+'gs2c/ge/v5/gameService',{method:'POST',body:new URLSearchParams({action,symbol:game.symbol,c:String(coin),l:String(game.defaultLines),index:String(i),counter:String(i*2-1)})});const response=await handler(request.clone(),'/gs2c/ge/v5/gameService',ctx);assert.equal(response.status,200,game.slug+' '+action);const raw=await response.text();return{data:Object.fromEntries(raw.split('&').map(x=>{const j=x.indexOf('=');return[x.slice(0,j),x.slice(j+1)]})),raw,request};};
  await send('doInit');
  for(let round=0;round<20;round++){
   const win=round%2===0;
   const configured=await handler(new Request(ctx.virtualBase+'_local/configure',{method:'POST',body:JSON.stringify({nextOutcome:win?'win':'lose'})}),'/_local/configure',ctx);assert.equal(configured.status,200);
   let result=await send('doSpin'),data=result.data,total=Number(data.tw||0);layouts.add(data.s);
   assert.equal(Number(data.balance.replace(/,/g,'')),Math.round((balance-2)*100)/100,'debit once at round start');
   let count=0;
   while(data.na==='c'||Number(data.w||0)>0){
    assert.ok(++count<60,'bounded ordinary chain');
    const next=data.na==='c'?'doCollect':'doSpin';if(count===1)handler=boot();
    result=await send(next);data=result.data;if(next==='doSpin')total=Number(data.tw||0);
    if(next==='doCollect'){
     const duplicate=await handler(result.request.clone(),'/gs2c/ge/v5/gameService',ctx);assert.equal(await duplicate.text(),result.raw,'collect retry is idempotent');break;
    }
   }
   balance=Math.round((balance-2+total)*100)/100;
   assert.equal(Number(data.balance.replace(/,/g,'')),balance,'debit/credit ledger matches displayed settlement');
   assert.equal(total>0,win,'requested local outcome class');
  }
  await send('doInit');
  await handler(new Request(ctx.virtualBase+'_local/configure',{method:'POST',body:JSON.stringify({nextOutcome:'win'})}),'/_local/configure',ctx);
  const coin=Math.round(game.defaultCoin*150)/100,bet=coin*game.defaultLines;
  let scaled=await send('doSpin',coin),scaledData=scaled.data,award=Number(scaledData.tw||0),guard=0;
  while(scaledData.na==='c'||Number(scaledData.w||0)>0){assert.ok(++guard<60);const next=scaledData.na==='c'?'doCollect':'doSpin';scaled=await send(next,coin);scaledData=scaled.data;if(next==='doSpin')award=Number(scaledData.tw||0);if(next==='doCollect')break;}
  assert.equal(Number(scaledData.balance.replace(/,/g,'')),Math.round((100000-bet+award)*100)/100,'changed coin value retains exact settlement');
  assert.ok(layouts.size>=3,game.slug+' varied ordinary outcomes');
  console.log('PASS',game.slug,'20 mixed sampled rounds; varied layouts, own outcome control, debit/credit, retry and worker restart');
 }
 console.log('PASS restart before collect, restart after collect, duplicate-credit protection, next action and scope isolation');
 console.log('PASS',games.length,'PP games;',tested,'consecutive fixture requests; HTML/context rewrite, release/development audio, session isolation and invalid stake');
})().catch(e=>{console.error(e);process.exitCode=1;});
