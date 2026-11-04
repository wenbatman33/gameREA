import test from 'node:test';
import assert from 'node:assert/strict';
import {evaluateBoard,generateNormalRound} from './seth-recovery/ordinary-rules.mjs';
const boardWith=(symbol,count)=>{const values=Array.from({length:30},(_,i)=>10+i%9);for(let i=0;i<count;i++)values[i]=symbol;return Array.from({length:5},(_,r)=>values.slice(r*6,r*6+6));};
test('displayed Eye 12+ example: stake 1 / 20 * 1000 = 50',()=>assert.equal(evaluateBoard(boardWith(1,12),1).winnings,50));
test('pay tiers use 8,10,12 boundaries; less than 8 does not win',()=>{
 for(const [count,amount]of[[7,0],[8,10],[9,10],[10,25],[11,25],[12,50],[30,50]])assert.equal(evaluateBoard(boardWith(1,count),1).winnings,amount);
});
test('Ruby documented tiers and changed stake scale independently of fixture packets',()=>{
 assert.equal(evaluateBoard(boardWith(6,8),1).winnings,.8);
 assert.equal(evaluateBoard(boardWith(6,10),2).winnings,2.4);
 assert.equal(evaluateBoard(boardWith(6,12),1).winnings,8);
});
test('1000 generated rounds produce varied boards and settle every cascade before terminal board',()=>{
 let state=128;const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/2**32;};
 const layouts=new Set();let winning=0;
 for(let i=0;i<1000;i++){
  const r=generateNormalRound({random});layouts.add(JSON.stringify(r.stages[0].view));
  assert.equal(r.stages.at(-1).winSymbols.length,0);
  assert.equal(Math.round(r.stages.reduce((s,x)=>s+x.roundWinnings,0)*100)/100,r.totalWinnings);
  assert.equal(r.originalRngRestored,false);if(r.totalWinnings>0)winning++;
 }
 assert.ok(layouts.size>990);assert.ok(winning>0&&winning<1000);
});
test('invalid input and endlessly winning RNG fail explicitly instead of stalling',()=>{
 assert.throws(()=>evaluateBoard([],1));assert.throws(()=>generateNormalRound({random:()=>1}));
 assert.throws(()=>generateNormalRound({random:()=>0,maxCascades:3}),/Cascade limit/);
});
