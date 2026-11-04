// @ts-nocheck
/** Newly written local feature mathematics. Public displayed payouts/ranges are
 * recovered; probabilities, upgrade steps, lock/split targeting and super-round
 * count are explicitly configurable local choices, NOT the original RNG/RTP.
 * Never imports captured rounds, replay fixtures, wallet or network code.
 */
import { evaluateBoard } from './OrdinaryRules';
import { scatterPayout } from './FeatureDefinitions';
export const featureDefaults = Object.freeze({
  multiplierChance: 0.018, scatterChance: 0.024, goldenScatterChance: 0.001,
  totemChance: 0.012, multiplierValues: [2,3,4,5,6,8,10,20,50,100,500],
  multiplierWeights: [30,25,20,15,10,8,5,3,1,0.2,0.02],
  upgradeChance: 0.08, lockChance: 0.35, splitChance: 0.35, retriggerChance: 0,
  lockRounds: 3, splitCopies: 2, superRounds: 3, goldenMaxRounds: 100,
  maxCascades: 100, maxStages: 12000,
});
const clone=x=>JSON.parse(JSON.stringify(x));
const cents=x=>Math.round(x*100);
const money=x=>x/100;
const timesSymbol=value=>value>=500?13:value>=100?12:value>=10?11:10;
function assert(ok,message){if(!ok)throw Error(message)}
export function featureConfig(config={}) {
  const c={...featureDefaults,...config};
  for(const key of ['multiplierChance','scatterChance','goldenScatterChance','totemChance','upgradeChance','lockChance','splitChance','retriggerChance'])assert(Number.isFinite(c[key])&&c[key]>=0&&c[key]<=1,'Invalid '+key);
  assert(c.multiplierChance+c.scatterChance+c.goldenScatterChance+c.totemChance<=1,'Symbol probabilities exceed one');
  for(const [key,min,max] of [['lockRounds',1,6],['splitCopies',1,10],['superRounds',1,100],['goldenMaxRounds',15,1000],['maxCascades',1,1000],['maxStages',1,100000]])assert(Number.isInteger(c[key])&&c[key]>=min&&c[key]<=max,'Invalid '+key);
  assert((c.goldenMaxRounds-15)%5===0,'Golden round cap must be15 plus whole five-round awards');
  assert(Array.isArray(c.multiplierValues)&&c.multiplierValues.length>0&&c.multiplierValues.every(v=>Number.isInteger(v)&&v>=2&&v<=500),'Multiplier values must be 2..500');
  assert(Array.isArray(c.multiplierWeights)&&c.multiplierWeights.length===c.multiplierValues.length&&c.multiplierWeights.every(v=>Number.isFinite(v)&&v>=0)&&c.multiplierWeights.some(v=>v>0),'Invalid multiplier weights');
  return c;
}
function weighted(values,weights,random){const sum=weights.reduce((a,b)=>a+b,0);let x=random()*sum;for(let i=0;i<weights.length;i++){x-=weights[i];if(x<0)return values[i]}return values[values.length-1]}
/** Reproduce original set(after,get(before));delete(before), bottom-up per column.
 * Locked positions are physical barriers in this explicit local model. Split
 * copies are materialized after winning-symbol removal and before gravity.
 */
export function featureGravity(flat,removed,balls,splitList,draw){
  const map=new Map(flat.map((symbol,pos)=>[pos,{symbol,sourcePos:pos,ball:balls.get(pos)?{...balls.get(pos)}:null}]));
  for(const pos of removed)map.delete(pos);
  for(const split of splitList)for(const target of split.to){const source=map.get(split.from);assert(source?.ball,'Split requires surviving multiplier');assert(!map.has(target),'Split target must have been removed');map.set(target,{symbol:source.symbol,sourcePos:'split:'+split.from+':'+target,ball:{...source.ball,symbolPos:target}})}
  const next=Array(30),nextBalls=new Map(),posTransform=[],refillPositions=[];
  for(let col=0;col<6;col++){
    const locked=[];for(let row=0;row<5;row++)if(map.get(row*6+col)?.ball?.lock>0)locked.push(row);
    const bounds=[-1,...locked,5];
    for(let part=1;part<bounds.length;part++){
      const top=bounds[part-1]+1,bottom=bounds[part]-1;let dest=bottom;
      for(let row=bottom;row>=top;row--){const beforePos=row*6+col,item=map.get(beforePos);if(!item)continue;const afterPos=dest--*6+col;next[afterPos]=item.symbol;if(item.ball)nextBalls.set(afterPos,{...item.ball,symbolPos:afterPos});if(beforePos!==afterPos)posTransform.push({beforePos,afterPos})}
      for(;dest>=top;dest--){const pos=dest*6+col,item=draw(pos);next[pos]=item.symbol;if(item.ball)nextBalls.set(pos,item.ball);refillPositions.push(pos)}
    }
    for(const row of locked){const pos=row*6+col,item=map.get(pos);next[pos]=item.symbol;nextBalls.set(pos,{...item.ball,symbolPos:pos})}
  }
  return {flat:next,balls:nextBalls,posTransform,refillPositions};
}
function specialWins(flat,totalBet){const wins=[];for(const id of [17,18]){const positions=flat.flatMap((s,i)=>s===id?[i]:[]);if(positions.length>=3)wins.push({symbol:id,symbolPos:positions,symbolCount:positions.length,payValue:5,winnings:money(cents(totalBet*5/20))})}return wins}
function scatterPay(flat,totalBet){const payout=scatterPayout(Array.from({length:5},(_,row)=>flat.slice(row*6,row*6+6)),totalBet);return payout?cents(payout.winnings):0}
export function generateFeatureRound({totalBet=1,random=Math.random,weights=Array(9).fill(1),mode='ordinary',config={},jackpotPools={}}={}) {
  assert(Number.isFinite(totalBet)&&totalBet>0&&cents(totalBet)>0,'Positive bet required');
  assert(['ordinary','freeGame','superFreeGame','superMainGame'].includes(mode),'Unknown feature mode');
  assert(Array.isArray(weights)&&weights.length===9&&weights.every(v=>Number.isFinite(v)&&v>=0)&&weights.some(v=>v>0),'Nine nonnegative normal weights required');
  const c=featureConfig(config);const rng=()=>{const x=random();assert(Number.isFinite(x)&&x>=0&&x<1,'RNG must return [0,1)');return x};
  const scenario=c.scenario==='free-retrigger'?'retrigger':c.scenario||'';assert(!scenario||['multiplier','freeGame','superFreeGame','superMainGame','split','lock','retrigger','jackpot-mini','jackpot-minor','jackpot-major','jackpot-grand'].includes(scenario),'Unknown local scenario');
  if(['freeGame','superFreeGame','superMainGame'].includes(scenario))mode=scenario;
  if(['split','lock'].includes(scenario))mode='superFreeGame';
  if(scenario==='retrigger')mode='freeGame';
  const jpCount=c.jackpotSymbolCount||0;assert([0,2,3,4,5].includes(jpCount),'JP count must be0or2..5');
  const stages=[];let totalCents=0,cumulativeTimes=0,played=0,awarded=0,retriggered=0,locked=new Map(),firstRound=true;
  const summary={jpStageIndex:-1,originalRngRestored:false,originalRtpRestored:false,mode,scenario:scenario||null,method:'new generated public-paytable rules with explicit local distributions',localAssumptions:['multiplier buckets and probabilities','upgrade steps','split targets and copies','lock duration and fixed-cell gravity','golden free-round cap','super-main round count','feature payout cent rounding'],config:clone(c),rounds:[],jackpotPools:clone(jackpotPools)};
  function ball(pos,value){const times=value??weighted(c.multiplierValues,c.multiplierWeights,rng);return {symbol:timesSymbol(times),symbolPos:pos,times,isRare:times>=100,lock:0}}
  function draw(pos,golden){const x=rng();let cursor=c.multiplierChance;if(x<cursor){const b=ball(pos);return{symbol:b.symbol,ball:b}}cursor+=c.scatterChance;if(x<cursor)return{symbol:15};cursor+=c.goldenScatterChance;if(x<cursor)return{symbol:16};cursor+=golden?c.totemChance:0;if(x<cursor)return{symbol:rng()<0.5?17:18};return{symbol:weighted([1,2,3,4,5,6,7,8,9],weights,rng)}}
  function push(stage){assert(stages.length<c.maxStages,'Feature stage limit; reject complete operation');stages.push(stage)}
  function defaults(flat,balls,action,remaining,golden){return{view:Array.from({length:5},(_,row)=>flat.slice(row*6,row*6+6)),winSymbols:[],timesSymbols:Array.from(balls.values(),clone),newTimesSymbols:[],timesUpgrade:[],posTransform:[],splitList:[],currentTimes:action==='freeSpin'?cumulativeTimes:0,totalTimes:0,freeGameCount:action==='freeSpin'?remaining:0,superMainGameCount:action==='superSpin'?remaining:0,startFreeGame:false,isGoldenFg:golden,maleTotemLevel:0,femaleTotemLevel:0,isJp:'',noWinReward:0,totalStake:totalBet,roundWinnings:0,totalWinnings:money(totalCents),action,featureRound:played}}
  function subround(action,remaining,golden,force={}){
    const scatterLimit=action==='freeSpin'&&awarded>=(golden?c.goldenMaxRounds:100)?2:6;
    const flat=[],balls=new Map();let scatterCount=0;for(let pos=0;pos<30;pos++){const saved=locked.get(pos);if(saved){flat[pos]=saved.symbol;balls.set(pos,{...saved})}else{let item=draw(pos,golden);if(item.symbol===15||item.symbol===16){if(scatterCount>=scatterLimit)item={symbol:weighted([1,2,3,4,5,6,7,8,9],weights,rng)};else scatterCount++}flat[pos]=item.symbol;if(item.ball)balls.set(pos,item.ball)}}
    // Debug conditions construct symbols, never substitute captured responses.
    if(force.winning){for(let pos=0;pos<8;pos++){flat[pos]=1;balls.delete(pos)}}
    if(force.multiplier||force.superBall){const pos=29,b=ball(pos,force.superBall?500:2);flat[pos]=b.symbol;balls.set(pos,b)}
    if(force.totem){for(const pos of [8,9,10]){flat[pos]=force.totem;balls.delete(pos)}}
    if(force.scatter){for(let pos=0;pos<30;pos++)if(flat[pos]===15||flat[pos]===16)flat[pos]=weighted([1,2,3,4,5,6,7,8,9],weights,rng);for(let pos=0;pos<force.scatter;pos++){flat[pos]=golden?16:15;balls.delete(pos)}}
    const containsJackpot=firstRound&&jpCount>0;
    if(containsJackpot){for(let pos=24;pos<24+jpCount;pos++){flat[pos]=14;balls.delete(pos)}}firstRound=false;
    let board=flat,currentBalls=balls,baseCents=0,roundCents=0,priorPositions=new Set(locked.keys()),last;
    for(let cascade=0;cascade<=c.maxCascades;cascade++){
      const evaluated=evaluateBoard(Array.from({length:5},(_,row)=>board.slice(row*6,row*6+6)),totalBet);
      const wins=[...evaluated.wins,...(golden||action==='superSpin'?specialWins(board,totalBet):[])];
      const stage=defaults(board,currentBalls,action,remaining,golden);stage.winSymbols=wins;stage.newTimesSymbols=stage.timesSymbols.filter(b=>!priorPositions.has(b.symbolPos));
      const payout=wins.reduce((sum,w)=>sum+cents(w.winnings),0);baseCents+=payout;roundCents+=payout;totalCents+=payout;stage.roundWinnings=money(roundCents);stage.totalWinnings=money(totalCents);
      if(!wins.length){
        const sumTimes=Array.from(currentBalls.values()).reduce((sum,b)=>sum+b.times,0);
        // Displayed rules02 + original stop-flow require a multiplier on this board.
        const factor=baseCents>0&&sumTimes>0?Math.max(1,(action==='freeSpin'?cumulativeTimes:0)+sumTimes):1;
        const extra=baseCents*(factor-1);totalCents+=extra;roundCents+=extra;
        if(baseCents>0&&action==='freeSpin')cumulativeTimes+=sumTimes;
        const scPay=scatterPay(board,totalBet);totalCents+=scPay;roundCents+=scPay;
        stage.roundWinnings=money(roundCents);stage.totalWinnings=money(totalCents);stage.totalTimes=factor;stage.baseWinnings=money(baseCents);stage.scatterWinnings=money(scPay);if(containsJackpot){stage.isJp='jp-'+({2:'mini',3:'minor',4:'major',5:'grand'})[jpCount];summary.jpStageIndex=stages.length}push(stage);last=stage;
        summary.rounds.push({index:played,action,baseWinnings:money(baseCents),multiplier:factor,roundWinnings:money(roundCents),cumulativeTimes,scatters:board.filter(s=>s===15||s===16).length,goldenScatters:board.filter(s=>s===16).length});
        locked=new Map(Array.from(currentBalls).filter(([_,b])=>b.lock>1).map(([pos,b])=>[pos,{...b,lock:b.lock-1}]));
        break;
      }
      assert(cascade<c.maxCascades,'Cascade limit; reject complete feature operation');
      const removed=new Set(wins.flatMap(w=>w.symbolPos));const hasFemale=wins.some(w=>w.symbol===18),hasMale=wins.some(w=>w.symbol===17);
      if(hasFemale&&currentBalls.size&&(scenario==='lock'||rng()<c.lockChance)){stage.femaleTotemLevel=Math.ceil(c.lockRounds/2);for(const b of currentBalls.values())b.lock=Math.max(b.lock,c.lockRounds);stage.timesSymbols=Array.from(currentBalls.values(),clone)}
      if(hasMale&&currentBalls.size&&(scenario==='split'||rng()<c.splitChance)){
        const source=Array.from(currentBalls.keys())[0],targets=Array.from(removed).slice(0,c.splitCopies);if(targets.length){stage.splitList=[{from:source,to:targets}];stage.maleTotemLevel=Math.min(3,targets.length)}
      }
      let remainingScatters=board.filter((symbol,pos)=>(symbol===15||symbol===16)&&!removed.has(pos)).length;
      const next=featureGravity(board,removed,currentBalls,stage.splitList,pos=>{let item=draw(pos,golden);if(item.symbol===15||item.symbol===16){if(remainingScatters>=scatterLimit)item={symbol:weighted([1,2,3,4,5,6,7,8,9],weights,rng)};else remainingScatters++}return item});stage.posTransform=next.posTransform;
      for(const [pos,b]of currentBalls){if(b.times<500&&rng()<c.upgradeChance){const target=stage.posTransform.find(t=>t.beforePos===pos)?.afterPos??pos;const after=next.balls.get(target);if(after){const value=Math.min(500,b.times*2);stage.timesUpgrade.push({symbolPos:pos,beforeSymbol:b.symbol,beforeTimes:b.times,afterSymbol:timesSymbol(value),afterTimes:value});after.times=value;after.symbol=timesSymbol(value);next.flat[target]=after.symbol}}}
      priorPositions=new Set(next.balls.keys());
      // Only survivors / copies are old. Refilled multipliers must be announced.
      for(const pos of next.refillPositions)priorPositions.delete(pos);
      push(stage);board=next.flat;currentBalls=next.balls;
    }
    assert(last,'Feature subround did not finish');return last;
  }
  function freeSeries(golden,trigger){
    awarded=15;let remaining=15;const cap=golden?c.goldenMaxRounds:100;
    if(trigger){let board;
      for(let attempt=0;attempt<1000;attempt++){
        const candidate=Array.from({length:30},()=>weighted([1,2,3,4,5,6,7,8,9],weights,rng));
        const positions=Array.from({length:30},(_,i)=>i);for(let i=0;i<4;i++){const j=i+Math.floor(rng()*(30-i));[positions[i],positions[j]]=[positions[j],positions[i]];candidate[positions[i]]=i===3&&golden?16:15}
        if(evaluateBoard(Array.from({length:5},(_,row)=>candidate.slice(row*6,row*6+6)),totalBet).wins.length===0){board=candidate;break}
      }
      assert(board,'Free trigger initialization limit; reject complete operation');
      const stage=defaults(board,new Map(),'spin',0,golden);stage.startFreeGame=true;stage.freeGameCount=15;const amount=scatterPay(board,totalBet);totalCents+=amount;stage.roundWinnings=money(amount);stage.totalWinnings=money(totalCents);push(stage)}
    while(remaining>0){played++;const last=subround('freeSpin',remaining,golden,{scatter:awarded<cap&&((scenario==='retrigger'&&played===1)||rng()<c.retriggerChance)?3:0,winning:played===1&&['split','lock'].includes(scenario),multiplier:played===1&&['split','lock'].includes(scenario),totem:played===1&&scenario==='split'?17:played===1&&scenario==='lock'?18:0});remaining--;
      const count=last.view.flat().filter(s=>golden?s===16:s===15||s===16).length;const qualifying=golden?count>=3&&count<=4:count>=3&&count<=6;
      if(qualifying&&awarded<cap){const add=Math.min(5,cap-awarded);remaining+=add;awarded+=add;retriggered+=add;last.localExtraFreeRounds=add}
      last.remainingAfterRound=remaining;
    }
  }
  if(mode==='freeGame'||mode==='superFreeGame')freeSeries(mode==='superFreeGame',true);
  else if(mode==='superMainGame')for(let n=0;n<c.superRounds;n++){played++;subround('superSpin',c.superRounds-n,true,{superBall:n===0,winning:n===0})}
  else{
    played++;const last=subround('spin',0,false,{winning:scenario==='multiplier',multiplier:scenario==='multiplier'});
    const symbols=last.view.flat(),scatters=symbols.filter(s=>s===15||s===16).length;
    if(scatters>=4&&scatters<=6){last.startFreeGame=true;last.freeGameCount=15;last.isGoldenFg=symbols.includes(16);freeSeries(last.isGoldenFg,false)}
  }
  stages.forEach((stage,index)=>{stage.currentView=index;stage.totalViews=stages.length});
  if(jpCount){summary.jpSymbolCount=jpCount;summary.jpTier=({2:'mini',3:'minor',4:'major',5:'grand'})[jpCount]}else summary.jpSymbolCount=0;
  assert(Number.isSafeInteger(totalCents),'Feature award exceeds safe cent range');
  summary.playedRounds=played;summary.freeRoundsAwarded=awarded;summary.retriggeredRounds=retriggered;summary.totalMultiplier=cumulativeTimes;summary.remainingLockedSymbols=clone(Array.from(locked.values()));
  return {stages,totalWinnings:money(totalCents),featureSummary:summary,originalRngRestored:false,originalRtpRestored:false};
}
