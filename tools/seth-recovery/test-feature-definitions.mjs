import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const root = new URL('../../creator-projects/seth2-recovered/assets/local-backend/', import.meta.url);
async function load(name) { return import('data:text/javascript;base64,' + Buffer.from(await readFile(new URL(name + '.ts', root), 'utf8')).toString('base64')); }
const feature = await load('FeatureDefinitions'), jp = await load('JackpotRules');
const board = count => { const values=Array(30).fill(1); for(let i=0;i<count;i++)values[i]=15; return Array.from({length:5},(_,i)=>values.slice(i*6,i*6+6)); };
test('displayed buy costs and scalar extra rounds match frontend indexing without shared mutation',()=>{
 const definition=feature.createFeatureDefinition();assert.deepEqual(definition.buyFeature.map(x=>[x.featureIndex,x.feature,x.featureRate]),[[0,'freeGame',200],[1,'superFreeGame',500],[2,'superMainGame',2000]]);assert.equal(definition.extraFgRounds,5);
 assert.deepEqual([0,1,2].map(index=>feature.featureCostCents(index,100)),[20000,50000,200000]);
 definition.buyFeature[0].featureRate=1;assert.equal(feature.getFeatureDefinition(0).featureRate,200);
 for(const value of [-1,3,0.5])assert.throws(()=>feature.getFeatureDefinition(value));
 for(const value of [-1,0,0.1,NaN,Infinity,Number.MAX_SAFE_INTEGER])assert.throws(()=>feature.featureCostCents(2,value));
});
test('rules07 ordinary and golden combined groups award displayed 4/5/6 count tier only once',()=>{
 for(const [count,pay]of [[4,60],[5,100],[6,2000]]){
  const normal=feature.scatterPayout(board(count),1);assert.equal(normal.winnings,pay/20);assert.equal(normal.symbolPos.length,count);assert.equal(normal.isGoldenFg,false);
  const golden=board(count);golden[0][0]=16;const mixed=feature.scatterPayout(golden,1);assert.equal(mixed.winnings,pay/20);assert.equal(mixed.symbol,16);assert.equal(mixed.isGoldenFg,true);assert.equal(mixed.symbolPos.length,count);
 }
 assert.equal(feature.scatterPayout(board(3),1),null);assert.equal(feature.scatterPayout(board(4),0.05).winnings,0.15);
 assert.throws(()=>feature.scatterPayout(board(7),1));assert.throws(()=>feature.scatterPayout([[15]],1));assert.throws(()=>feature.scatterPayout(board(4),-1));assert.throws(()=>feature.scatterPayout(board(4),0.051));assert.throws(()=>feature.scatterPayout(board(4),Number.MAX_SAFE_INTEGER/100));
});
test('fractional-cent pool contributions survive small stakes and remain equivalent to one aggregate stake',()=>{
 const config=jp.createJackpotConfig();const original=jp.createJackpotState(config);let small=original;
 for(let i=0;i<10000;i++)small=jp.contributeJackpots(small,1,config);
 const bulk=jp.contributeJackpots(original,10000,config);assert.deepEqual(small,bulk);
 assert.deepEqual(Object.values(small.poolsCents),[10030,50020,250010,1000005]);assert.deepEqual(Object.values(original.poolsCents),[10000,50000,250000,1000000]);
});
test('2/3/4/5 JP symbols award correct tier and reset only its pool; no wallet mutation',()=>{
 const config=jp.createJackpotConfig(), original=jp.contributeJackpots(jp.createJackpotState(config),100000,config);
 for(let count=2;count<=5;count++){
  const tier=jp.JACKPOT_TIERS[count-2],result=jp.settleJackpot(original,count,config);
  assert.equal(result.tier,tier);assert.equal(result.isJp,tier);assert.equal(result.count,count);assert.equal(result.awardCents,original.poolsCents[tier]);assert.equal(result.jpWinnings,result.awardCents/100);
  assert.equal(result.newState.poolsCents[tier],config.seedsCents[tier]);
  for(const other of jp.JACKPOT_TIERS)if(other!==tier)assert.equal(result.newState.poolsCents[other],original.poolsCents[other]);
  assert.deepEqual(result.newState.contributionRemainders,original.contributionRemainders);assert.notEqual(result.newState,original);
 }
 for(const count of [0,1]){const result=jp.settleJackpot(original,count,config);assert.equal(result.awardCents,0);assert.equal(result.isJp,'');assert.deepEqual(result.newState,original);}
 for(const count of [-1,6,2.5])assert.throws(()=>jp.settleJackpot(original,count,config));
});
test('single JP trigger selection has explicit configurable distribution and no fixture input',()=>{
 assert.equal(jp.generateJackpotSymbolCount(()=>{throw Error('Disabled probability must not draw');},jp.createJackpotConfig({triggerProbability:0})),0);
 for(const [value,count]of [[0,2],[.9,3],[.99,4],[.999,5]]){const values=[0,value];assert.equal(jp.generateJackpotSymbolCount(()=>values.shift(),{triggerProbability:1}),count);assert.equal(values.length,0);}
 assert.equal(jp.generateJackpotSymbolCount(()=>.5,{triggerProbability:.1}),0);
 for(const value of [-.1,1,NaN,Infinity])assert.throws(()=>jp.generateJackpotSymbolCount(()=>value,{triggerProbability:1}));
});
test('pool notification matches original GameService cash shape and cannot leak cents or invalid amounts',()=>{
 const state=jp.createJackpotState();assert.deepEqual(jp.jackpotNotify(state),{type:'jackpotUpdate',data:{'jp-mini':100,'jp-minor':500,'jp-major':2500,'jp-grand':10000}});
 for(const value of [-1,1.2,NaN,Infinity])assert.throws(()=>jp.createJackpotConfig({seedsCents:{'jp-mini':value}}));
 for(const value of [-1,10001,.5,NaN])assert.throws(()=>jp.createJackpotConfig({contributionBasisPoints:{'jp-mini':value}}));
 assert.throws(()=>jp.createJackpotConfig({triggerProbability:-.1}));assert.throws(()=>jp.createJackpotConfig({tierWeights:{'jp-mini':-1}}));assert.throws(()=>jp.createJackpotConfig({tierWeights:{'jp-mini':Number.MAX_VALUE,'jp-minor':Number.MAX_VALUE}}));
 assert.throws(()=>jp.contributeJackpots(state,-1));assert.throws(()=>jp.contributeJackpots(state,Number.MAX_SAFE_INTEGER));
 const bad=structuredClone(state);bad.poolsCents['jp-mini']=-1;assert.throws(()=>jp.jackpotNotify(bad));assert.throws(()=>jp.settleJackpot(bad,2));
});

test('new local JP notify is consumed by the actual recovered GameService listener',async()=>{
 // Isolate the original listener function, not the full game or any live transport.
 const {createRequire}=await import('node:module'),require=createRequire(import.meta.url);
 const parser=require('@babel/parser'),traverse=require('@babel/traverse').default,generate=require('@babel/generator').default;
 const {runInNewContext}=await import('node:vm');
 const original=await readFile(new URL('../../creator-projects/seth2-recovered/assets/recovered/scripts/g1005-GameService.ts',import.meta.url),'utf8');
 let listener;
 traverse(parser.parse(original,{sourceType:'module'}),{AssignmentExpression(path){const n=path.node;if(n.left.type==='MemberExpression'&&n.left.property.name==='addSocketListeners')listener=n.right;}});
 assert.ok(listener,'Original addSocketListeners exists');
 const callbacks=new Map(),events=[],service={slotData:{tempJpPools:{}},on:(name,fn)=>callbacks.set(name,fn)};
 const add=runInNewContext('('+generate(listener).code+')',{__dependency_2:{ENotifyTypes:{BALANCE:'balance',JACKPOT_UPDATE:'jackpotUpdate'}},__dependency_4:{SlotFrameworkEvent:{NOTIFY_JACKPOT_RESPONSE:'jp-response'}},dispatch:(...args)=>events.push(args)});
 add.call(service);const notification=jp.jackpotNotify(jp.createJackpotState());callbacks.get('notify')(notification);
 assert.deepEqual(JSON.parse(JSON.stringify(service.slotData.tempJpPools)),notification.data);assert.equal(events.length,1);assert.equal(events[0][0],'jp-response');assert.equal(events[0][1].data,notification);
});
