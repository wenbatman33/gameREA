import test from'node:test';import assert from'node:assert/strict';import{readFile}from'node:fs/promises';import{createRequire}from'node:module';import{runInNewContext}from'node:vm';
const require=createRequire(import.meta.url),parser=require('@babel/parser'),traverse=require('@babel/traverse').default,generate=require('@babel/generator').default;
const directory=new URL('../../creator-projects/seth2-recovered/assets/recovered/scripts/',import.meta.url);
async function method(file,name){let node;traverse(parser.parse(await readFile(new URL(file+'.ts',directory),'utf8'),{sourceType:'module'}),{AssignmentExpression(p){if(p.node.left.type==='MemberExpression'&&(p.node.left.property.name||p.node.left.property.value)===name)node=p.node.right;}});assert.ok(node,name);return generate(node).code;}
const times=await method('g1005-EffectsView','showTimesMoving'),clones=await method('g1005-EffectsView','showCloneTimesMoving');
function effects(source,currentTimes=3){
 class Node{constructor(){this.active=true;this.destroyed=false;}destroy(){this.destroyed=true;this.active=false;}}
 const nodes=[],events=[];
 const tween=target=>{let binding=true;const actions=[];const api={bindNodeState(value){binding=value;return api;},delay(){return api;},to(duration,values,callbacks={}){actions.push(()=>{callbacks.onStart?.();Object.assign(target,values);callbacks.onComplete?.();});return api;},call(callback){actions.push(callback);return api;},start(){if(binding&&target instanceof Node&&!target.active)return api;actions.forEach(action=>action());return api;}};return api;};
 const state={symbolPosConfig:new Map([[0,{x:0}],[1,{x:1}],[2,{x:2}]]),winBoardPosition:{x:3},currentTimesPosition:{x:4},gameState:{currentTimes,timesSymbols:[{symbolPos:0,times:2,isRare:false},{symbolPos:1,times:5,isRare:true}]}};
 const config={filePaths:{timesMovingPrefab:'current',blueTimesMovingPrefab:'blue',purpleTimesMovingPrefab:'purple',splitBlueTimesMovingPrefab:'split'},reelConfig:{totalTimesFireBallTime:1}};
 const fn=runInNewContext('('+source+')',{__dependency_1:{tween,instantiate:()=>{const node=new Node();nodes.push(node);return node;}},__dependency_3:{default:{getData:()=>config},EBTM:{TIMES_MOVING:'times-audio'}},__dependency_5:{GameEvent:new Proxy({},{get:(_,name)=>name})},App:{cache:{get:()=>({data:{}})}},dispatch:(name,payload)=>events.push({name,payload})});
 const component={node:{addChild(){}},data:{getData:()=>state,module:'g1005'}};
 return{fn,component,nodes,events};
}
test('actual current/ball flight methods activate their inactive nodes and deliver original merge callback under 3.8 binding',()=>{
 const broken=effects(times.replaceAll('.bindNodeState(false)',''));broken.fn.call(broken.component,()=>{});assert.equal(broken.events.some(event=>event.name==='MERGE_WIN_AMOUNT'),false,'Unpatched 3.8 stalls before onStart');
 const restored=effects(times);const complete=()=>{};restored.fn.call(restored.component,complete);assert.equal(restored.nodes.length,3);assert.ok(restored.nodes.every(node=>node.destroyed));const merges=restored.events.filter(event=>event.name==='MERGE_WIN_AMOUNT');assert.equal(merges.length,1);assert.equal(merges[0].payload.data,complete);
 assert.deepEqual(restored.events.filter(event=>event.name==='UPDATE_TIMES').map(event=>event.payload.data),[3,2,5]);
});
test('actual clone flights complete while unrelated component tween retains normal behavior',()=>{
 const restored=effects(clones);let done=0;restored.fn.call(restored.component,0,[1,2],()=>done++);assert.equal(done,1);assert.equal(restored.nodes.length,2);assert.ok(restored.nodes.every(node=>node.destroyed));assert.equal((clones.match(/bindNodeState\(false\)/g)||[]).length,1,'Component delay tween is unchanged');
});
const initSource=await method('g1005-GameData','setNewInitData'),nextSource=await method('g1005-GameData','setNextSpinData');
function dataHarness(index,runtime){const order=[],data={parser:{view1D:[]},newGameState:[],spinId:'progress-1'};const owner={data,currSpinIndex:index};Object.defineProperty(owner,'currSpinData',{get(){return data.newGameState[this.currSpinIndex];}});for(const name of ['setPreSpinData','parseView','parseWinOddsTypes','parseFullCombo','parseLockTimesSymbol','parseNewTimesSymbols'])owner[name]=()=>order.push(name);
 return{owner,order,init:runInNewContext('('+initSource+')',{}),next:runInNewContext('('+nextSource+')',{globalThis:{SethCreatorLocalBackend:runtime}})};}
const response=(change={})=>({isResuming:true,localBackend:true,localResumeIndex:2,platform:{game:{}},engine:{spinId:'progress-1',definition:{},gameState:[0,1,2].map(currentView=>({currentView}))},...change});
test('actual GameData resumes local stage cursor while nonlocal initialization keeps its original semantics',()=>{
 const local=dataHarness(0);local.init.call(local.owner,response());assert.equal(local.owner.currSpinIndex,2);assert.equal(local.owner.data.gameState.currentView,2);
 const foreign=dataHarness(1);foreign.init.call(foreign.owner,response({localBackend:false}));assert.equal(foreign.owner.currSpinIndex,1);assert.equal(foreign.owner.data.gameState.currentView,1);
 const fresh=dataHarness(0);fresh.init.call(fresh.owner,response({isResuming:false}));assert.equal(fresh.owner.currSpinIndex,2,'Original nonresuming initialization selects last returned stage');
 assert.throws(()=>dataHarness(0).init.call(dataHarness(0).owner,response({localResumeIndex:9})),/Invalid local resume stage/);
});
test('actual GameData persists stage only after original parse methods, and optional runtime does not affect nonlocal flow',()=>{
 let h;const records=[];h=dataHarness(0,{markStage(id,index){records.push([id,index]);h.order.push('markStage');}});h.owner.data.newGameState=[{currentView:0},{currentView:1}];h.next.call(h.owner);assert.equal(h.owner.currSpinIndex,1);assert.deepEqual(records,[['progress-1',1]]);assert.equal(h.order.at(-1),'markStage');assert.ok(h.order.indexOf('parseLockTimesSymbol')<h.order.indexOf('markStage'));
 const foreign=dataHarness(0);foreign.owner.data.newGameState=[{currentView:0},{currentView:1}];assert.doesNotThrow(()=>foreign.next.call(foreign.owner));assert.equal(foreign.owner.currSpinIndex,1);
});


const setPoolSource=await method('framework-JpBarControllerBase','setJackpotValue'),animatePoolSource=await method('framework-JpBarControllerBase','dynamicEasingTime');
test('actual JP bar accepts zero pool resets and ignores nonfinite/negative/missing values without coercion',()=>{
 const names=['miniNum','minorNum','majorNum','grandNum'],keys=['jp-mini','jp-minor','jp-major','jp-grand'];
 const update=runInNewContext('('+setPoolSource+')',{}),animate=runInNewContext('('+animatePoolSource+')',{__dependency_8:{CmmSlotUtils:{formatJPNumber:value=>String(value)}}});
 function owner(){const result={tweenMap:new Map(),dynamicEasingTime:animate};for(const name of names)result[name]={string:'100'};return result;}
 const cleared=owner();update.call(cleared,{data:Object.fromEntries(keys.map(key=>[key,0]))});assert.deepEqual(names.map(name=>cleared[name].string),['0','0','0','0']);
 for(const invalid of [-1,NaN,Infinity,-Infinity,null,undefined,'0',false]){const unchanged=owner();update.call(unchanged,{data:Object.fromEntries(keys.map(key=>[key,invalid]))});assert.deepEqual(names.map(name=>unchanged[name].string),['100','100','100','100']);}
 const missing=owner();update.call(missing,{data:{'jp-mini':0}});assert.equal(missing.miniNum.string,'0');assert.equal(missing.minorNum.string,'100');
});

const nextFlowSource=await method('g1005-CreateNewSpinCompleteFlowCmd','nextSpinFlow'), increaseSource=await method('g1005-ReelView','IncreaseFgRemaining');
test('actual nextSpinFlow uses local awarded rounds for golden retriggers/caps, preserving nonlocal scatter flow',()=>{
 function run(symbols,extra,local=true,action='freeSpin'){
  const queued=[];class Event{constructor(name,data,options){Object.assign(this,{name,data,options});}}class Flow{add(...steps){queued.push(...steps);}}
  const events=new Proxy({},{get:(_,name)=>name});
  const fn=runInNewContext('('+nextFlowSource+')',{App:{flowManager:{Flow,registerFlow(){}}},__dependency_2:{FlowTrigger:{CONCURRENT:'parallel',AFTER_PREVIOUS:'after'}},__dependency_6:{default:{getData:()=>({hasTimesSymbolsDelay:0,nextSpinDelay:0})}},__dependency_8:{EBackendSymbolID:{SCATTER:15,GOLD_SCATTER:16}},__dependency_9:{GameEvent:Event},__dependency_10:{EActionType:{FREE_GAME:'freeSpin',SUPER_GAME:'superSpin'}},__dependency_11:{FlowIDs:{NEXT_SPIN_FLOW:'next'}}});Object.assign(Event,events);for(const name of ['SHOW_SCATTER_WIN','INCREASE_FG_REMAINING','HIDE_DARK','CREATE_SPIN_FLOW'])Event[name]=name;
  fn.call({data:{getData:()=>({parser:{newTimesSymbols:[],view1D:symbols}}),currSpinData:{spinId:'test',winSymbols:[],roundWinnings:0,action,localRules:local,localExtraFreeRounds:extra,isGoldenFg:true},setNewBigWinReach:()=>false}});return queued.filter(v=>v instanceof Event).map(v=>v.name);
 }
 for(const symbols of [[15,15,15],[16,15,15]])assert.equal(run(symbols,0).includes('SHOW_SCATTER_WIN'),false,'Golden nonqualifying scatters must not wait for a callback that cannot fire');
 assert.deepEqual(run([16,16,16],5),['SHOW_SCATTER_WIN','INCREASE_FG_REMAINING','HIDE_DARK','CREATE_SPIN_FLOW']);
 for(const extra of [0,undefined,-1,NaN,2.5])assert.equal(run([16,16,16],extra).includes('INCREASE_FG_REMAINING'),false,'No backend grant must not fabricate extra rounds');
 assert.equal(run([15,15,15],0,false).includes('SHOW_SCATTER_WIN'),true,'Original nonlocal behavior retained');
 assert.equal(run([15,15,15],0,true,'superSpin').includes('SHOW_SCATTER_WIN'),false,'Super-main scatter art alone does not grant free rounds');
 let finished=0;const increase=runInNewContext('('+increaseSource+')',{__dependency_1:{Vec3:class{constructor(x,y,z){Object.assign(this,{x,y,z});}},tween:()=>{const actions=[];const api={to(time,values,options){if(options?.onComplete)actions.push(options.onComplete);return api;},call(callback){actions.push(callback);return api;},start(){actions.forEach(f=>f());return api;}};return api;}}});
 const reel={remaining:{string:'14',node:{},color:{}},increaseCounts:0,data:{getData:()=>({definition:{extraFgRounds:5}})},scheduleOnce:callback=>callback()};reel.IncreaseFgRemaining=increase;increase.call(reel,()=>finished++);assert.equal(reel.remaining.string,'19','Actual original ReelView displays the definition five-round grant');assert.equal(finished,1);

});
