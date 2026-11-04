/** Actual local Creator backend integration, no replay fixtures or engine mocks.
 * Run: node --experimental-vm-modules --test tools/seth-recovery/test-feature-backend.mjs
 */
import {SourceTextModule, createContext} from 'node:vm';
import {readFileSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
const root=resolve('creator-projects/seth2-recovered/assets/local-backend');
const context=createContext({console,Math,Date,Map,Set,Promise,Error,JSON,Number,Array,Object,URLSearchParams});
const modules=new Map();
async function load(path){
 path=resolve(path);if(modules.has(path))return modules.get(path);
 assert.ok(path.startsWith(root+'/'),'Pure backend imports stay local');
 const module=new SourceTextModule(readFileSync(path,'utf8'),{context,identifier:path});modules.set(path,module);
 await module.link((name,ref)=>{assert.ok(name.startsWith('./'),'No engine or remote imports');return load(resolve(dirname(ref.identifier),name+'.ts'));});return module;
}
const entry=await load(resolve(root,'LocalGameBackend.ts'));await entry.evaluate();
const {LocalGameBackend}=entry.namespace;
const plain=x=>JSON.parse(JSON.stringify(x));
const rng=(seed=13)=>()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/2**32);
const features=['freeGame','superFreeGame','superMainGame'],rates=[200,500,2000];
const options=(extra={})=>({initialBalance:100000,random:rng(33),clock:()=>1000,jackpotConfig:{triggerProbability:0},featureConfig:{multiplierChance:0,scatterChance:0,goldenScatterChance:0,totemChance:0,upgradeChance:0,lockChance:0,splitChance:0,retriggerChance:0},...extra});
const purchase=(b,index,extra={})=>b.request('spin',{action:'buyFeature',featureIndex:index,featureValue:features[index],stakeIndex:0,ratioIndex:0,stakeValue:.05,ratioValue:1,...extra});
const success=r=>{assert.equal(r.status,200,r.code+': '+r.message);return r;};
function memory(){const values=new Map();return{fail:false,getItem:key=>values.get(key)||null,setItem(key,value){if(this.fail)throw Error('Storage unavailable test');values.set(key,value);}};}
for(let index=0;index<3;index++)test('purchase '+features[index]+' acknowledges object, reveals same array without second debit, settles once',()=>{
 const b=new LocalGameBackend(options({random:rng(40+index)})),before=b.state.balanceCents;
 const definition=success(b.request('initial')).engine.definition;assert.equal(definition.buyFeature[index].featureRate,rates[index]);assert.equal(definition.extraFgRounds,5);
 const ack=success(purchase(b,index)),id=ack.engine.gameState.spinId;
 assert.equal(Array.isArray(ack.engine.gameState),false);assert.equal(ack.engine.spinId,id);assert.equal(ack.cost,rates[index]);assert.equal(b.state.balanceCents,before-rates[index]*100);
 const pending=plain(b.state.pending),afterDebit=b.state.balanceCents;
 const reveal=success(b.request('spin',{spinId:id}));assert.ok(Array.isArray(reveal.engine.gameState));assert.deepEqual(plain(reveal.engine.gameState),pending.stages);assert.equal(b.state.balanceCents,afterDebit);assert.equal(b.state.sequence,1);
 assert.ok(reveal.engine.gameState.every(s=>s.spinId===id));assert.equal(reveal.engine.gameState.at(-1).totalWinnings,pending.awardCents/100);
 if(index<2){assert.equal(reveal.engine.gameState[0].startFreeGame,true);assert.ok(reveal.engine.gameState.some(s=>s.action==='freeSpin'));assert.equal(Boolean(reveal.engine.gameState[0].isGoldenFg),index===1);}else{assert.ok(reveal.engine.gameState.every(s=>s.action==='superSpin'));assert.ok(reveal.engine.gameState.some(s=>s.timesSymbols.some(ball=>ball.times===500)));}
 reveal.engine.gameState[0].view[0][0]=-1;assert.notEqual(b.state.pending.stages[0].view[0][0],-1,'Caller cannot mutate pending stages');
 const closed=success(b.request('closeSpin',{spinId:id}));assert.equal(b.state.balanceCents,afterDebit+pending.awardCents);assert.equal(b.state.pending,null);assert.equal(closed.platform.player.balance.amount,b.state.balanceCents/100);
 const settled=b.state.balanceCents;assert.deepEqual(plain(success(b.request('closeSpin',{spinId:id}))),plain(closed));assert.equal(b.state.balanceCents,settled);assert.equal(b.state.records.length,1);assert.equal(b.audit.filter(row=>row.event==='closeSpin').length,1);
});
test('pending purchased feature survives reload, initial resumes exact array without RNG or another charge',()=>{
 const storage=memory(),b=new LocalGameBackend(options({storage,random:rng(23)}));
 const ack=success(purchase(b,1)),id=ack.engine.spinId,snapshot=plain(b.state);
 const restored=new LocalGameBackend(options({storage,random:()=>{throw Error('Resume must not draw');}}));
 const initial=success(restored.request('initial'));assert.equal(initial.isResuming,true);assert.equal(initial.engine.spinId,id);assert.deepEqual(plain(initial.engine.gameState),snapshot.pending.stages);assert.equal(restored.state.balanceCents,snapshot.balanceCents);
 success(restored.request('spin',{spinId:id}));assert.deepEqual(plain(restored.state),snapshot);
 const closed=success(restored.request('closeSpin',{spinId:id}));assert.equal(closed.platform.player.balance.amount,(snapshot.balanceCents+snapshot.pending.awardCents)/100);
 const settledAgain=new LocalGameBackend(options({storage}));assert.equal(settledAgain.state.pending,null);success(settledAgain.request('closeSpin',{spinId:id}));assert.equal(settledAgain.state.balanceCents,restored.state.balanceCents);
});
test('duplicate keyed/unkeyed purchase and continuation retain one operation; conflicting requests cannot replace pending',()=>{
 const b=new LocalGameBackend(options()),ack=success(purchase(b,0,{operationId:'buy-once'})),snapshot=plain(b.state);
 assert.deepEqual(plain(success(purchase(b,0,{operationId:'buy-once'}))),plain(ack));assert.deepEqual(plain(b.state),snapshot);
 success(purchase(b,0));assert.deepEqual(plain(b.state),snapshot);
 const conflict=purchase(b,1);assert.equal(conflict.status,400);assert.equal(conflict.code,'PENDING_ROUND');assert.deepEqual(plain(b.state),snapshot);
 const unknown=b.request('spin',{spinId:'unclaimed-other'});assert.equal(unknown.status,400);assert.equal(unknown.code,'PENDING_ROUND');assert.deepEqual(plain(b.state),snapshot);
 success(b.request('spin',{spinId:ack.engine.spinId}));success(b.request('spin',{spinId:ack.engine.spinId}));assert.deepEqual(plain(b.state),snapshot);
 success(b.request('closeSpin',{spinId:ack.engine.spinId}));const final=plain(b.state);success(purchase(b,0,{operationId:'buy-once'}));assert.deepEqual(plain(b.state),final,'Cached acknowledgement cannot debit again after settlement');
});
test('feature forceClose cannot bypass purchased or naturally generated free-game operation',()=>{
 for(const scenario of ['', 'freeGame']){
  const b=new LocalGameBackend(options({scenario}));const first=scenario?success(b.request('spin')):success(purchase(b,0)),id=first.engine.spinId,snapshot=plain(b.state);
  const denied=b.request('spin',{forceClose:id});assert.equal(denied.status,400);assert.equal(denied.code,'FEATURE_PENDING');assert.deepEqual(plain(b.state),snapshot);
 }
});
for(const [index,tier]of ['mini','minor','major','grand'].entries())test('JP '+tier+' reserves exact tier pool and credits the generated total only at close',()=>{
 const b=new LocalGameBackend(options({scenario:'jackpot-'+tier,random:rng(120+index)})),before=b.state.balanceCents;
 const spin=success(b.request('spin',{stakeIndex:2,ratioIndex:0})),pending=plain(b.state.pending),summary=spin.featureSummary.jackpot;
 const seeds=[10000,50000,250000,1000000],basis=[30,20,10,5],poolAward=seeds[index]+Math.floor(400*basis[index]/10000);
 assert.equal(summary.count,index+2);assert.equal(summary.tier,'jp-'+tier);assert.equal(summary.awardCents,poolAward);assert.equal(b.state.balanceCents,before-400);assert.equal(pending.stages.at(-1).isJp,'jp-'+tier);assert.equal(pending.stages.at(-1).jpWinnings,poolAward/100);
 assert.equal(pending.stages[0].view.flat().filter(symbol=>symbol===14).length,index+2);assert.equal(b.state.jackpots.poolsCents['jp-'+tier],seeds[index]);
 for(let i=0;i<4;i++)if(i!==index)assert.equal(b.state.jackpots.poolsCents['jp-'+['mini','minor','major','grand'][i]],seeds[i]+Math.floor(400*basis[i]/10000));
 const pools=plain(b.state.jackpots),snapshot=plain(b.state);success(b.request('spin',{spinId:pending.id}));assert.deepEqual(plain(b.state),snapshot,'JP reveal cannot contribute or reset a second time');
 success(b.request('closeSpin',{spinId:pending.id}));assert.equal(b.state.balanceCents,before-400+pending.awardCents);assert.deepEqual(plain(b.state.jackpots),pools);const settled=b.state.balanceCents;
 success(b.request('closeSpin',{spinId:pending.id}));assert.equal(b.state.balanceCents,settled);assert.deepEqual(plain(b.state.jackpots),pools);
});
test('storage failures atomically preserve debit, pending, JP pools and scenario consumption',()=>{
 const storage=memory(),b=new LocalGameBackend(options({storage,scenario:'jackpot-mini'})),fresh=plain(b.state);storage.fail=true;
 const failed=b.request('spin',{operationId:'storage-retry'});assert.equal(failed.status,400);assert.match(failed.message,/Storage unavailable/);assert.deepEqual(plain(b.state),fresh);assert.equal(storage.getItem(b.storageKey),null);
 storage.fail=false;const spin=success(b.request('spin',{operationId:'storage-retry'})),pending=plain(b.state),persisted=storage.getItem(b.storageKey);assert.equal(pending.debugScenarioConsumed,true);assert.equal(pending.sequence,1);
 storage.fail=true;const failedClose=b.request('closeSpin',{spinId:spin.engine.spinId});assert.equal(failedClose.status,400);assert.deepEqual(plain(b.state),pending);assert.equal(storage.getItem(b.storageKey),persisted);
 storage.fail=false;success(b.request('closeSpin',{spinId:spin.engine.spinId}));assert.equal(b.state.balanceCents,pending.balanceCents+pending.pending.awardCents);assert.equal(b.state.records.length,1);
});
test('debug scenario is persisted once, purchase does not consume it, next paid round returns to configured randomness',()=>{
 const storage=memory(),b=new LocalGameBackend(options({storage,scenario:'jackpot-minor'}));const ack=success(purchase(b,0));assert.notEqual(b.state.debugScenarioConsumed,true);success(b.request('closeSpin',{spinId:ack.engine.spinId}));
 const first=success(b.request('spin'));assert.equal(first.featureSummary.scenario,'jackpot-minor');assert.equal(first.featureSummary.jackpot.count,3);success(b.request('closeSpin',{spinId:first.engine.spinId}));
 const restored=new LocalGameBackend(options({storage,scenario:'jackpot-minor',random:rng(31)}));const second=success(restored.request('spin'));assert.equal(second.featureSummary.scenario,null);assert.equal(second.featureSummary.jackpot.count,0);assert.equal(second.featureSummary.jackpot.awardCents,0);
});
test('invalid purchase payload and insufficient balance leave no transaction or pool mutations',()=>{
 for(const [payload,code]of [[{action:'buyFeature',featureIndex:3,featureValue:'freeGame'},'INVALID_FEATURE'],[{action:'buyFeature',featureIndex:2,featureValue:'freeGame'},'FEATURE_MISMATCH']]){
  const b=new LocalGameBackend(options()),snapshot=plain(b.state),result=b.request('spin',payload);assert.equal(result.status,400);assert.equal(result.code,code);assert.deepEqual(plain(b.state),snapshot);
 }
 const low=new LocalGameBackend(options({initialBalance:1})),snapshot=plain(low.state);assert.equal(purchase(low,0).code,'INSUFFICIENT_BALANCE');assert.deepEqual(plain(low.state),snapshot);
});

const adapter=await load(resolve(root,'InstallLocalBackend.ts'));await adapter.evaluate();
const {installLocalBackend,selectLocalScenario,selectLocalWalletKey}=adapter.namespace;
test('URL QA scenarios require exact debug flag, safe isolated wallet and allowlisted scenario',()=>{
 const valid='?reaDebug=1&reaTestWallet=feature_QA-1&reaScenario=jackpot-grand';assert.equal(selectLocalScenario(valid),'jackpot-grand');assert.match(selectLocalWalletKey(valid),/\.test\.feature_QA-1$/);
 for(const search of ['?reaScenario=jackpot-grand','?reaDebug=1&reaScenario=jackpot-grand','?reaTestWallet=feature_QA-1&reaScenario=jackpot-grand','?reaDebug=true&reaTestWallet=x&reaScenario=jackpot-grand','?reaDebug=1&reaTestWallet=../bad&reaScenario=jackpot-grand','?reaDebug=1&reaTestWallet='+ 'x'.repeat(49)+'&reaScenario=jackpot-grand','?reaDebug=1&reaTestWallet=x&reaScenario=unknown','?reaDebug=1&reaTestWallet=x&reaScenario=superMainGame'])assert.equal(selectLocalScenario(search),'',search);
 for(const scenario of ['multiplier','freeGame','free-retrigger','superFreeGame','split','lock','jackpot-mini','jackpot-minor','jackpot-major','jackpot-grand'])assert.equal(selectLocalScenario('?reaDebug=1&reaTestWallet=qa&reaScenario='+scenario),scenario);
});
test('local transport delivers JP notify through registered listener before initial callback and handles purchase object audit',async()=>{
 const order=[];let pools=null,remote=0,initialCallback=0,purchaseCallback=0;
 class Base{
  constructor(){this.init();}
  init(){this._client={initSocket(){remote++;throw Error('Remote must never open');}};}
  on(event,callback){this._client.on(event,callback);}
  addSocketListeners(){this.on('notify',notification=>{order.push('notify');assert.equal(notification.type,'jackpotUpdate');pools=notification.data;});}
  onOpen(){this.addSocketListeners();}
  socketIOMessage(){throw Error('Original network forbidden');}
  socketIOMessageWithoutCheck(){throw Error('Original network forbidden');}
 }
 const runtime=installLocalBackend(Base,options({storage:memory(),search:'?reaDebug=1&reaTestWallet=notify_QA'}));assert.equal(runtime.created,false);const service=new Base();await service.connect();
 await service.socketIOMessage('initial',{},response=>{order.push('initial-callback');initialCallback++;assert.equal(response.status,200);assert.equal(response.platform.jackpotOn,true);assert.ok(pools);assert.equal(pools['jp-mini'],100);});
 assert.deepEqual(order,['notify','initial-callback']);assert.equal(initialCallback,1);assert.equal(remote,0);
 const ack=await service.socketIOMessage('spin',{action:'buyFeature',featureIndex:0,featureValue:'freeGame'},response=>{purchaseCallback++;assert.equal(Array.isArray(response.engine.gameState),false);assert.ok(response.engine.gameState.spinId);});
 assert.equal(purchaseCallback,1);assert.equal(ack.status,200);const ackRecord=runtime.requests.at(-1);assert.equal(ackRecord.purchaseAcknowledgement,true);assert.equal(ackRecord.stageCount,0);assert.equal(ackRecord.generated,true);assert.equal(ackRecord.cost,200);
 const afterDebit=runtime.getBackend().state.balanceCents;
 const revealed=await service.socketIOMessage('spin',{spinId:ack.engine.spinId});assert.equal(revealed.status,200);assert.ok(Array.isArray(revealed.engine.gameState));assert.equal(runtime.getBackend().state.balanceCents,afterDebit);assert.equal(runtime.requests.at(-1).generated,false);
 assert.equal(runtime.storageKey,'seth2.creator.local-backend.v1.test.notify_QA');assert.equal(remote,0);
});

test('JP can coexist with all purchased features on one actual JP terminal, with one award across cumulative stages',()=>{
 const forcedMini={triggerProbability:1,tierWeights:{'jp-mini':1,'jp-minor':0,'jp-major':0,'jp-grand':0}};
 for(let index=0;index<3;index++){
  const b=new LocalGameBackend(options({jackpotConfig:forcedMini,random:rng(250+index)})),before=b.state.balanceCents;
  const ack=success(purchase(b,index)),reveal=success(b.request('spin',{spinId:ack.engine.spinId})),stages=reveal.engine.gameState,pending=plain(b.state.pending);
  const matching=stages.map((stage,i)=>[stage,i]).filter(([stage])=>stage.isJp);assert.equal(matching.length,1);const [jpStage,jpIndex]=matching[0];
  assert.equal(jpStage.isJp,'jp-mini');assert.equal(jpStage.view.flat().filter(symbol=>symbol===14).length,2);assert.equal(jpStage.winSymbols.length,0);assert.equal(jpStage.localJpBeforeContinuation,true);assert.equal(jpStage.action,index===2?'superSpin':'freeSpin');
  assert.ok(jpStage.roundWinnings>=jpStage.jpWinnings);for(const stage of stages.slice(jpIndex))assert.ok(stage.totalWinnings>=jpStage.jpWinnings);
  const sumTerminalCents=stages.filter(stage=>stage.winSymbols.length===0).reduce((sum,stage)=>sum+Math.round(stage.roundWinnings*100),0);assert.equal(sumTerminalCents,pending.awardCents,'Only the JP terminal round includes pool award; cumulative totals are not re-added');assert.equal(stages.at(-1).totalWinnings,pending.awardCents/100);
  success(b.request('closeSpin',{spinId:pending.id}));assert.equal(b.state.balanceCents,before-rates[index]*100+pending.awardCents);const settled=b.state.balanceCents;success(b.request('closeSpin',{spinId:pending.id}));assert.equal(b.state.balanceCents,settled);
 }
});

const {selectLocalJackpot}=adapter.namespace;
test('independent JP URL override requires exact debug flag, valid wallet and exact tier',()=>{
 for(const tier of ['mini','minor','major','grand'])assert.equal(selectLocalJackpot('?reaDebug=1&reaTestWallet=jp_QA&reaJackpot='+tier),'jackpot-'+tier);
 for(const search of ['?reaJackpot=mini','?reaDebug=1&reaJackpot=mini','?reaTestWallet=qa&reaJackpot=mini','?reaDebug=true&reaTestWallet=qa&reaJackpot=mini','?reaDebug=0&reaTestWallet=qa&reaJackpot=mini','?reaDebug=1&reaTestWallet=../bad&reaJackpot=mini','?reaDebug=1&reaTestWallet='+ 'x'.repeat(49)+'&reaJackpot=mini','?reaDebug=1&reaTestWallet=qa&reaJackpot=MINI','?reaDebug=1&reaTestWallet=qa&reaJackpot=jackpot-mini','?reaDebug=1&reaTestWallet=qa&reaJackpot=unknown'])assert.equal(selectLocalJackpot(search),'',search);
});
test('transport passes isolated JP URL selection into backend without consuming it on installation',()=>{
 class Base{}const runtime=installLocalBackend(Base,options({search:'?reaDebug=1&reaTestWallet=jp_wire&reaJackpot=major'}));assert.equal(runtime.created,false);const b=runtime.getBackend();assert.equal(b.options.jackpotScenario,'jackpot-major');assert.notEqual(b.state.debugJackpotConsumed,true);const ack=success(purchase(b,1));assert.equal(b.state.pending.featureSummary.jackpot.tier,'jp-major');assert.equal(b.state.pending.purchase,true);assert.equal(b.state.debugJackpotConsumed,true);assert.ok(ack.engine.gameState.spinId);
});
test('JP QA is independent of ordinary QA and is consumed by purchase once, persisted across reload',()=>{
 const storage=memory(),settings=options({storage,scenario:'freeGame',jackpotScenario:'jackpot-minor',random:rng(502)}),b=new LocalGameBackend(settings);
 const ack=success(purchase(b,0));assert.equal(b.state.debugJackpotConsumed,true);assert.notEqual(b.state.debugScenarioConsumed,true);assert.equal(b.state.pending.featureSummary.jackpot.count,3);
 const restored=new LocalGameBackend(options({storage,scenario:'freeGame',jackpotScenario:'jackpot-minor',random:rng(503)}));const before=plain(restored.state);const initial=success(restored.request('initial'));assert.equal(initial.isResuming,true);assert.equal(initial.engine.gameState.filter(stage=>stage.isJp).length,1);success(restored.request('spin',{spinId:ack.engine.spinId}));assert.deepEqual(plain(restored.state),before);success(restored.request('closeSpin',{spinId:ack.engine.spinId}));
 const next=success(restored.request('spin'));assert.equal(next.featureSummary.scenario,'freeGame');assert.equal(next.featureSummary.jackpot.count,0);assert.equal(next.featureSummary.jackpot.awardCents,0);assert.equal(restored.state.debugScenarioConsumed,true);success(restored.request('closeSpin',{spinId:next.engine.spinId}));
 const third=success(new LocalGameBackend(options({storage,scenario:'freeGame',jackpotScenario:'jackpot-minor',random:rng(504)})).request('spin'));assert.equal(third.featureSummary.scenario,null);assert.equal(third.featureSummary.jackpot.count,0);
});
test('invalid request, insufficient funds and failed storage cannot consume independent JP QA',()=>{
 const b=new LocalGameBackend(options({jackpotScenario:'jackpot-grand'})),before=plain(b.state);assert.equal(purchase(b,0,{featureValue:'invalid'}).status,400);assert.deepEqual(plain(b.state),before);assert.notEqual(b.state.debugJackpotConsumed,true);
 const low=new LocalGameBackend(options({initialBalance:1,jackpotScenario:'jackpot-grand'}));assert.equal(purchase(low,1).code,'INSUFFICIENT_BALANCE');assert.notEqual(low.state.debugJackpotConsumed,true);
 const storage=memory(),stored=new LocalGameBackend(options({storage,jackpotScenario:'jackpot-grand',random:rng(510)})),snapshot=plain(stored.state);storage.fail=true;const failed=purchase(stored,2);assert.equal(failed.status,400);assert.match(failed.message,/Storage unavailable/);assert.deepEqual(plain(stored.state),snapshot);assert.notEqual(stored.state.debugJackpotConsumed,true);assert.equal(storage.getItem(stored.storageKey),null);
 storage.fail=false;success(purchase(stored,2));assert.equal(stored.state.debugJackpotConsumed,true);assert.equal(stored.state.pending.featureSummary.jackpot.tier,'jp-grand');
});
test('pre-upgrade feature wallet receives presentation marker without rewriting results or charging on resume',()=>{
 const storage=memory(),first=new LocalGameBackend(options({storage,random:rng(611)}));
 success(purchase(first,1));const old=plain(first.state);
 for(const stage of old.pending.stages)delete stage.localRules;
 old.pending.currentView=1;storage.setItem(first.storageKey,JSON.stringify(old));const saved=storage.getItem(first.storageKey);
 const restored=new LocalGameBackend(options({storage,random:()=>{throw Error('Resume cannot draw')}}));
 for(const response of [success(restored.request('initial')),success(restored.request('spin',{spinId:old.pending.id}))]){
  assert.ok(response.engine.gameState.every(stage=>stage.localRules===true));
  const original=plain(response.engine.gameState);for(const stage of original)delete stage.localRules;
  assert.deepEqual(original,old.pending.stages);assert.equal(response.platform.player.balance.amount,old.balanceCents/100);
 }
 assert.equal(restored.request('initial').localResumeIndex,1);assert.deepEqual(plain(restored.state),old);assert.equal(storage.getItem(first.storageKey),saved);
 success(restored.request('closeSpin',{spinId:old.pending.id}));assert.equal(restored.state.balanceCents,old.balanceCents+old.pending.awardCents);
});
