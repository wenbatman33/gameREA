import test from 'node:test';import assert from 'node:assert/strict';import{readFile}from'node:fs/promises';import{createRequire}from'node:module';import{runInNewContext}from'node:vm';
const require=createRequire(import.meta.url),parser=require('@babel/parser'),traverse=require('@babel/traverse').default,generate=require('@babel/generator').default;
const directory=new URL('../../creator-projects/seth2-recovered/assets/',import.meta.url);
const helper=await import('data:text/javascript;base64,'+Buffer.from(await readFile(new URL('local-backend/LocalJackpotContinuation.ts',directory),'utf8')).toString('base64'));
async function extract(file,predicate){const ast=parser.parse(await readFile(new URL('recovered/scripts/'+file+'.ts',directory),'utf8'),{sourceType:'module'});let result;traverse(ast,{AssignmentExpression(path){if(predicate(path.node))result=path.node.right;},CallExpression(path){if(predicate(path.node))result=path.node.arguments[1];}});assert.ok(result,file+' source consumer found');return generate(result).code;}
const createSource=await extract('g1005-CreateNewSpinCompleteFlowCmd',n=>n.type==='AssignmentExpression'&&n.left.type==='MemberExpression'&&n.left.property.name==='createFlow');
const symbolSource=await extract('g1005-SymbolView',n=>n.type==='CallExpression'&&n.arguments[0]?.type==='MemberExpression'&&n.arguments[0].property.name==='SHOW_JP_WIN');
const popupSource=await extract('g1005-JackpotView',n=>n.type==='CallExpression'&&n.arguments[0]?.type==='MemberExpression'&&n.arguments[0].property.name==='SHOW_JP');
const events={SHOW_JP_WIN:'GameEvent:SHOW_JP_WIN',SHOW_JP:'GameEvent:SHOW_JP'};let sequence=0;
function stage(change={}){const flat=Array(30).fill(1);flat[24]=14;flat[25]=14;return{spinId:'consumer-test-'+(++sequence),currentView:0,totalViews:2,view:Array.from({length:5},(_,r)=>flat.slice(r*6,r*6+6)),winSymbols:[],isJp:'jp-mini',localJpBeforeContinuation:true,action:'spin',startFreeGame:false,...change};}
function harness(data){const branches=[],dispatched=[],callbacks={};
 const owner={playJpWin:callback=>{callbacks.symbol=callback;},showJp:callback=>{callbacks.popup=callback;}};
 const listeners={[events.SHOW_JP_WIN]:runInNewContext('('+symbolSource+')',{t:owner}),[events.SHOW_JP]:runInNewContext('('+popupSource+')',{t:owner})};
 const dispatch=(name,payload)=>{dispatched.push(name);assert.equal(payload.name,name);assert.equal(payload.data,null);listeners[name](payload);};
 const create=runInNewContext('('+createSource+')',{continueAfterLocalJackpot:helper.continueAfterLocalJackpot,dispatch,__dependency_9:{GameEvent:events},__dependency_10:{EActionType:{FREE_GAME:'freeSpin',SUPER_GAME:'superSpin'}}});
 const command={data:{currSpinData:data}};for(const name of ['showFreeGameIntroFlow','freeGameFinishFlow','superMainGameFinishFlow','closeSpinFlow','nextSpinFlow'])command[name]=()=>branches.push(name);
 return{branches,dispatched,callbacks,run:()=>create.call(command),command};
}
test('real createFlow + original JP listeners wait for symbol and popup completion before FG intro/next/summary',()=>{
 for(const [change,expected]of [[{startFreeGame:true},'showFreeGameIntroFlow'],[{action:'freeSpin'},'nextSpinFlow'],[{action:'superSpin'},'nextSpinFlow'],[{action:'freeSpin',currentView:1},'freeGameFinishFlow'],[{action:'superSpin',currentView:1},'superMainGameFinishFlow']]){
  const data=stage(change),h=harness(data);h.run();assert.deepEqual(h.dispatched,[events.SHOW_JP_WIN]);assert.deepEqual(h.branches,[]);h.run();assert.equal(h.dispatched.length,1,'Repeated execute cannot restart JP');
  h.callbacks.symbol();assert.deepEqual(h.dispatched,[events.SHOW_JP_WIN,events.SHOW_JP]);assert.deepEqual(h.branches,[]);h.callbacks.symbol();assert.equal(h.dispatched.length,2);
  h.callbacks.popup();assert.deepEqual(h.branches,[expected]);h.callbacks.popup();h.command.data.currSpinData=structuredClone(data);h.run();assert.deepEqual(h.branches,[expected],'Duplicate callbacks and same-stage clone cannot repeat original continuation');
 }
});
test('ordinary terminal uses original closeSpin route; nonlocal feature routes remain untouched',()=>{
 for(const [change,expected]of [[{currentView:1},'closeSpinFlow'],[{localJpBeforeContinuation:false,startFreeGame:true},'showFreeGameIntroFlow'],[{localJpBeforeContinuation:false,action:'freeSpin',currentView:1},'freeGameFinishFlow'],[{localJpBeforeContinuation:false,action:'superSpin',currentView:1},'superMainGameFinishFlow']]){const h=harness(stage(change));h.run();assert.deepEqual(h.branches,[expected]);assert.deepEqual(h.dispatched,[]);}
});
test('marked local stage must have exact tier/actual JP symbols and terminal wins contract',()=>{
 for(const change of [{isJp:'jp-grand'},{winSymbols:[{symbol:1}]},{spinId:''},{currentView:0.5},{view:Array.from({length:5},()=>Array(6).fill(1))}]){const h=harness(stage(change));assert.throws(()=>h.run(),/Local JP continuation requires/);assert.equal(h.dispatched.length,0);assert.equal(h.branches.length,0);}
});

const showJpSource=await extract('g1005-JackpotView',n=>n.type==='AssignmentExpression'&&n.left.type==='MemberExpression'&&n.left.property.name==='showJp');
const resultJpSource=await extract('g1005-JackpotView',n=>n.type==='AssignmentExpression'&&n.left.type==='MemberExpression'&&n.left.property.name==='showJpResult');
test('actual JP popup and result separate pool prize, trophy cumulative and round award without changing nonlocal displays',()=>{
 for(const [data,popup,trophy,reel]of [
  [{localRules:true,action:'superSpin',jpWinnings:2502,totalWinnings:15002,roundWinnings:15002},2502,15002,15002],
  [{localRules:true,action:'freeSpin',jpWinnings:100.6,totalWinnings:103.6,roundWinnings:101.6},100.6,103.6,101.6],
  [{localRules:true,action:'spin',jpWinnings:100,totalWinnings:105,roundWinnings:105},100,105,105],
  [{localRules:false,totalWinnings:15002},15002,15002,15002]]){
  const events=[],tweens=[];const constants={UPDATE_TOTAL_WINNINGS:'trophy',UPDATE_WIN_AMOUNT:'reel',QUICK_STOP_TOTAL_WINNINGS:'trophyStop',QUICK_STOP_WIN_AMOUNT:'reelStop'};
  const context={jackpotPresentationAmounts:helper.jackpotPresentationAmounts,__dependency_1:{NodeEventType:{TOUCH_END:'touch'}},__dependency_5:{SlotFrameworkEvent:constants},__dependency_10:{GameEvent:constants},__dependency_6:{CmmSlotUtils:{formatJPNumber:value=>String(value),tweenJPNum:options=>{tweens.push(options);return{stop(){}};}}},dispatch:(name,payload)=>events.push([name,payload.data])};
  const owner={data:{getData:()=>({definition:{digital:2},gameState:{...data,isJp:'jp-major'}})},totalWin:{string:'',node:{active:false}},alert:{active:false,once(){}},scheduleOnce:f=>f(),unschedule(){},playAnimation(){},playBounceTween(){},addClickAlertCompleteCb(){},closeAlert(){}};
  runInNewContext('('+showJpSource+')',context).call(owner,()=>{});assert.equal(tweens[0].end,popup);assert.deepEqual(structuredClone(events),[['trophy',{value:trophy,tweenTime:10}],['reel',{value:reel,tweenTime:10}]]);
  events.length=0;runInNewContext('('+resultJpSource+')',context).call(owner);assert.equal(owner.totalWin.string,String(popup));assert.deepEqual(events,[['trophyStop',trophy],['reelStop',reel]]);
 }
 for(const stage of [{localRules:true,jpWinnings:Infinity,totalWinnings:2,roundWinnings:2},{localRules:true,jpWinnings:3,totalWinnings:2,roundWinnings:2},{localRules:true,jpWinnings:0,totalWinnings:2,roundWinnings:-1}])assert.throws(()=>helper.jackpotPresentationAmounts(stage),/Invalid|inconsistent/);
});
