/** Execute actual Creator plain-ECMAScript TS sources without a Creator engine. */
import {SourceTextModule,createContext}from'node:vm';
import{readFileSync}from'node:fs';
import{resolve,dirname}from'node:path';
import assert from'node:assert/strict';
const root=resolve('creator-projects/seth2-recovered/assets/local-backend');
const context=createContext({console,Math,Date,Map,Set,Promise,Error,JSON,Number,Array,Object,URLSearchParams});
const modules=new Map();
async function load(path){
 path=resolve(path);if(modules.has(path))return modules.get(path);
 assert.ok(path.startsWith(root+'/'),'Backend imports must stay inside owned local directory');
 const module=new SourceTextModule(readFileSync(path,'utf8'),{context,identifier:path});modules.set(path,module);
 await module.link((name,ref)=>{assert.ok(name.startsWith('./'),'No engine/remote/Node dependency in pure adapter');return load(resolve(dirname(ref.identifier),name+'.ts'));});return module;
}
const entry=await load(resolve(root,'InstallLocalBackend.ts'));await entry.evaluate();
const{installLocalBackend,selectLocalWalletKey}=entry.namespace;const{LocalGameBackend}=modules.get(resolve(root,'LocalGameBackend.ts')).namespace;
const{evaluateBoard}=modules.get(resolve(root,'OrdinaryRules.ts')).namespace;
const plain=x=>JSON.parse(JSON.stringify(x));
const memory=()=>{const data=new Map();return{getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)}};
const rng=(seed=13)=>()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/2**32);
let passed=0;async function test(name,fn){await fn();passed++;console.log('PASS '+name)}
await test('initial uses original consumer shape, normal audio, no fixture and no unbet award',()=>{
 const b=new LocalGameBackend({features:false,random:rng()});const r=b.request('initial');assert.equal(r.status,200);assert.equal(r.engine.definition.winlineDefs.length,20);assert.equal(r.engine.gameState.length,1);assert.equal(r.engine.gameState[0].totalWinnings,0);assert.equal(r.platform.player.balance.amount,10000);assert.equal(r.platform.player.settings.advancedSettings.sounds.backgroundVolume,1);assert.equal(r.engine.definition.localReconstruction.originalRngRestored,false);
 const quiet=new LocalGameBackend({features:false,quiet:true,random:rng()}).request('initial');assert.equal(quiet.platform.player.settings.advancedSettings.sounds.backgroundVolume,0);assert.equal(r.platform.player.settings.advancedSettings.sounds.effectVolume,1);
});
await test('1000 newly generated varied rounds recompute every payout and balance exactly',()=>{
 const b=new LocalGameBackend({features:false,random:rng(97),initialBalance:100000});let expected=100000,winRounds=0;const boards=new Set();
 for(let i=0;i<1000;i++){
  const r=b.request('spin',{requestId:'round-'+i,stakeIndex:0,ratioIndex:0});assert.equal(r.status,200);expected-=1;assert.equal(r.platform.player.balance.amount,expected);const stages=r.engine.gameState;boards.add(JSON.stringify(stages[0].view));let sum=0;
  for(const[s,stage]of stages.entries()){
   assert.equal(stage.currentView,s);assert.equal(stage.totalViews,stages.length);assert.equal(stage.action,'spin');assert.equal(stage.timesSymbols.length,0);
   if(s>0){const previous=stages[s-1];const removed=new Set(previous.winSymbols.flatMap(w=>Array.from(w.symbolPos)));for(let col=0;col<6;col++){const retained=previous.view.flatMap((row,rowIndex)=>removed.has(rowIndex*6+col)?[]:[row[col]]);assert.deepEqual(Array.from(stage.view).slice(5-retained.length).map(row=>row[col]),Array.from(retained));}}
   const removed=new Set(Array.from(stage.winSymbols).flatMap(win=>Array.from(win.symbolPos)));
   const symbolMap=new Map(Array.from(stage.view).flatMap((row,rowIndex)=>Array.from(row).map((symbol,col)=>[rowIndex*6+col,{sourceId:rowIndex*6+col,symbol}])));
   for(const position of removed)symbolMap.delete(position);
   const byColumn=new Map();
   for(const transform of stage.posTransform){
    assert.notEqual(transform.beforePos,transform.afterPos);assert.equal(transform.beforePos%6,transform.afterPos%6);assert.ok(transform.afterPos>transform.beforePos);assert.ok(symbolMap.has(transform.beforePos));assert.equal(symbolMap.has(transform.afterPos),false,'would overwrite an unmoved symbol');
    const prior=byColumn.get(transform.beforePos%6);if(prior!=null)assert.ok(transform.beforePos<prior,'source movement must be bottom-up');byColumn.set(transform.beforePos%6,transform.beforePos);
    symbolMap.set(transform.afterPos,symbolMap.get(transform.beforePos));symbolMap.delete(transform.beforePos);
   }
   const expectedNew=[];
   for(let col=0;col<6;col++){
    const survivors=[];for(let row=0;row<5;row++)if(!removed.has(row*6+col))survivors.push(row*6+col);
    for(let row=0;row<5-survivors.length;row++)expectedNew.push(row*6+col);
    for(let offset=0;offset<survivors.length;offset++){const target=(5-survivors.length+offset)*6+col;assert.equal(symbolMap.get(target)?.sourceId,survivors[offset]);}
   }
   const actualNew=Array.from({length:30},(_,pos)=>pos).filter(pos=>!symbolMap.has(pos));assert.deepEqual(actualNew,[...expectedNew].sort((a,b)=>a-b));
   if(s+1<stages.length){const next=stages[s+1].view;for(const[pos,survivor]of symbolMap)assert.equal(next[Math.floor(pos/6)][pos%6],survivor.symbol);for(const pos of actualNew)symbolMap.set(pos,{sourceId:'new:'+pos,symbol:next[Math.floor(pos/6)][pos%6]});assert.equal(symbolMap.size,30);}
   const evaluated=evaluateBoard(stage.view,stage.totalStake);assert.equal(stage.roundWinnings,evaluated.winnings);sum=Math.round((sum+evaluated.winnings)*100)/100;assert.equal(stage.totalWinnings,sum);assert.deepEqual(plain(stage.winSymbols),plain(evaluated.wins));
  }
  assert.equal(stages.at(-1).winSymbols.length,0);if(sum>0)winRounds++;
  const closed=b.request('closeSpin',{spinId:r.engine.spinId});assert.equal(closed.status,200);expected=Math.round((expected+sum)*100)/100;assert.equal(closed.platform.player.balance.amount,expected);
 }
 assert.ok(boards.size>990);assert.ok(winRounds>0);console.log(JSON.stringify({generatedRounds:1000,uniqueInitialBoards:boards.size,winningRounds:winRounds,finalBalance:expected}));
});
await test('pending round survives reload and duplicate requests never debit twice',()=>{
 const storage=memory();const b=new LocalGameBackend({features:false,storage,random:rng(22)});const first=b.request('spin',{requestId:'retry'});const after=b.state.balanceCents;
 assert.deepEqual(plain(b.request('spin',{requestId:'retry'})),plain(first));assert.equal(b.state.balanceCents,after);
 const restored=new LocalGameBackend({features:false,storage,random:rng(999)});const initial=restored.request('initial');assert.equal(initial.isResuming,true);assert.deepEqual(plain(initial.engine.gameState),plain(first.engine.gameState));assert.equal(restored.state.balanceCents,after);
 const closed=restored.request('closeSpin',{spinId:first.engine.spinId});const final=restored.state.balanceCents;assert.deepEqual(plain(restored.request('closeSpin',{spinId:first.engine.spinId})),plain(closed));assert.equal(restored.state.balanceCents,final);
 const again=new LocalGameBackend({features:false,storage});assert.deepEqual(plain(again.request('closeSpin',{spinId:first.engine.spinId})),plain(closed));assert.equal(again.state.balanceCents,final);
});
await test('ordinary turbo forceClose atomically settles old round and generates next exactly once',()=>{
 const b=new LocalGameBackend({features:false,random:rng(31)});const first=b.request('spin',{requestId:'first'});const old=b.state.pending;const before=b.state.balanceCents;const next=b.request('spin',{forceClose:old.id});assert.equal(next.status,200);assert.notEqual(next.engine.spinId,old.id);assert.equal(b.state.balanceCents,before+old.awardCents-100);
 const after=b.state.balanceCents;assert.deepEqual(plain(b.request('spin',{forceClose:old.id})),plain(next));assert.equal(b.state.balanceCents,after);assert.equal(b.request('closeSpin',{spinId:old.id}).settled,true);assert.equal(b.state.balanceCents,after);assert.equal(b.state.pending.id,next.engine.spinId);
});
await test('invalid stake, insufficient funds, unknown settlement and unsupported features are atomic',()=>{
 const b=new LocalGameBackend({features:false,initialBalance:0.5,random:rng()});const original=plain(b.state);
 for(const[event,payload]of[['spin',{}],['spin',{stakeIndex:-1}],['spin',{test:{type:0}}],['buyFeature',{}],['freeSpin',{}],['closeSpin',{spinId:'unknown'}]]){assert.equal(b.request(event,payload).status,400);assert.deepEqual(plain(b.state),original)}
 const b2=new LocalGameBackend({features:false,random:rng()});assert.equal(b2.request('spin',{stakeIndex:0,stakeValue:999}).code,'STAKE_MISMATCH');assert.equal(b2.state.balanceCents,1000000);
});
await test('actual recovered buyFeature payload on spin transport is explicitly unsupported',()=>{
 const b=new LocalGameBackend({features:false,random:rng(47)});const before=plain(b.state);
 const payload={request:'spin',action:'buyFeature',clientType:'web',featureIndex:0,featureValue:'freeGame',stakeIndex:0,stakeValue:0.05,ratioIndex:0,ratioValue:1,updateStake:true,pools:{'jp-mini':0,'jp-minor':0,'jp-major':0,'jp-grand':0}};
 const r=b.request('spin',payload);assert.equal(r.status,400);assert.equal(r.code,'UNSUPPORTED_FEATURE');assert.equal(r.unsupported,true);assert.deepEqual(plain(b.state),before);
 for(const action of ['freeSpin','superSpin','superFreeGame']){assert.equal(b.request('spin',{action}).code,'UNSUPPORTED_FEATURE');assert.deepEqual(plain(b.state),before)}
 const normal=b.request('spin',{request:'spin',stakeIndex:0,stakeValue:0.05,ratioIndex:0,ratioValue:1,updateStake:true});assert.equal(normal.status,200);b.request('closeSpin',{spinId:normal.engine.spinId});assert.equal(b.request('spin',{action:'spin'}).status,200);
});
await test('cascade limit or storage failure rejects without debit or hidden truncation',()=>{
 const b=new LocalGameBackend({features:false,random:()=>0,maxCascades:1});const before=plain(b.state);const r=b.request('spin');assert.equal(r.status,400);assert.match(r.message,/Cascade limit/);assert.deepEqual(plain(b.state),before);
 const storage={getItem:()=>null,setItem(){throw Error('disk full')}};const disk=new LocalGameBackend({features:false,storage,random:rng()});const old=plain(disk.state);assert.equal(disk.request('spin').status,400);assert.deepEqual(plain(disk.state),old);
});
await test('settings persist independently from development-only audio override',()=>{
 const storage=memory(),b=new LocalGameBackend({features:false,storage,random:rng()});b.request('updateSettings',{type:'game',data:{turbo:true}});b.request('updateSettings',{type:'sounds',data:{backgroundVolume:0.5}});
 const normal=new LocalGameBackend({features:false,storage,random:rng()}).request('initial');assert.equal(normal.platform.player.settings.advancedSettings.turbo,true);assert.equal(normal.platform.player.settings.advancedSettings.sounds.backgroundVolume,0.5);
 const quiet=new LocalGameBackend({features:false,storage,quiet:true,random:rng()}).request('initial');assert.equal(quiet.platform.player.settings.advancedSettings.sounds.backgroundVolume,0);assert.equal(new LocalGameBackend({features:false,storage,random:rng()}).request('initial').platform.player.settings.advancedSettings.sounds.backgroundVolume,0.5);
});
await test('explicit debug test-wallet namespaces preserve pending and leave normal wallet untouched',()=>{
 const normalKey='seth2.creator.local-backend.v1',storage=memory();
 function open(search){class Base{};const runtime=installLocalBackend(Base,{features:false,storage,search,random:rng(53)});assert.equal(runtime.created,false);return runtime.getBackend()}
 const normal=open('');const original=normal.request('spin',{requestId:'normal-pending'});const normalSaved=storage.getItem(normalKey);
 const first=open('?reaDebug=1&reaTestWallet=render-attempt4');assert.equal(first.state.balanceCents,1000000);const result=first.request('spin',{requestId:'test-pending'});
 const restored=open('?reaDebug=1&reaTestWallet=render-attempt4');assert.equal(restored.request('initial').isResuming,true);assert.deepEqual(plain(restored.state.pending),plain(first.state.pending));assert.deepEqual(plain(restored.request('spin',{requestId:'test-pending'})),plain(result));
 const separate=open('?reaDebug=1&reaTestWallet=render-attempt5');assert.equal(separate.state.balanceCents,1000000);assert.equal(separate.state.pending,null);separate.request('spin');
 for(const search of ['?reaTestWallet=render-attempt4','?reaDebug=0&reaTestWallet=render-attempt4','?reaDebug=true&reaTestWallet=render-attempt4','?reaDebug=1&reaTestWallet=../bad','?reaDebug=1&reaTestWallet=','?reaDebug=1&reaTestWallet='+ 'x'.repeat(49)]){assert.equal(selectLocalWalletKey(search),normalKey);const unchanged=open(search);assert.equal(unchanged.request('initial').isResuming,true);assert.deepEqual(plain(unchanged.state.pending),plain(normal.state.pending));}
 assert.equal(storage.getItem(normalKey),normalSaved);assert.equal(open('').state.pending.id,original.engine.spinId);assert.equal(selectLocalWalletKey('?reaDebug=1&reaTestWallet=unit_A-4','custom'),'custom.test.unit_A-4');
});
await test('transport installs before App exists and uses original init/open lifecycle without any socket',async()=>{
 let initialized=0,opened=0,remote=0;
 class Base{constructor(){this.init()}init(){initialized++;this._client={initSocket(){remote++;throw Error('remote socket forbidden')}}}onOpen(){opened++;assert.equal(this.isConnected,true)}get isConnected(){return this._client.isConnected}socketIOMessage(){throw Error('original network forbidden')}socketIOMessageWithoutCheck(){throw Error('original network forbidden')}sendHeartbeat(){throw Error('original heartbeat forbidden')}}
 const runtime=installLocalBackend(Base,{features:false,storage:memory(),random:rng()});assert.equal(runtime.created,false);const instance=new Base();assert.equal(initialized,1);assert.equal(instance.isConnected,false);await instance.connect();assert.equal(opened,1);assert.equal(remote,0);assert.equal(instance.isConnected,true);
 let called=false;await instance.socketIOMessage('initial',{},r=>{called=true;assert.equal(r.status,200)});assert.equal(called,true);const spin=await instance.socketIOMessage('spin',{});const close=await instance.socketIOMessageWithoutCheck('closeSpin',{spinId:spin.engine.spinId});assert.equal(close.settled,true);assert.equal(remote,0);assert.equal(runtime.connections,1);assert.equal(runtime.requests.length,3);assert.equal(installLocalBackend(Base),runtime);
});
console.log(JSON.stringify({passed,source:'Actual Creator local-backend/*.ts sources, pure contracts; real UI integration requires editor preview'}));
