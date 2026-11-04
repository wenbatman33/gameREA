// @ts-nocheck
// New local implementation, not original server RNG.
// Source SHA256: 45b0a51e070e7d2b52339e23cdfe1e0368a45e4436e259b43a01a39852db6b79
/** Local normal-round rule reconstruction from displayed paytable. No captured spin data.
 * This is new implementation, not recovered server RNG. Free/awakening/multiplier
 * semantics are intentionally not asserted by this normal-symbol-only generator.
 */
import { displayedPaytable as table } from './DisplayedPaytable';
export const displayedPaytable=table;
const cents=n=>Math.round(n*100);
export function evaluateBoard(board,totalBet){
 if(!Array.isArray(board)||board.length!==5||board.some(r=>!Array.isArray(r)||r.length!==6))throw Error('Expected 5 rows x 6 columns');
 if(!Number.isFinite(totalBet)||totalBet<=0||cents(totalBet)<=0)throw Error('Positive stake required');
 const flat=board.flat();if(flat.some(s=>!Number.isInteger(s)||s<1||s>18))throw Error('Unknown symbol');
 const wins=[];
 for(const rule of table.symbols){
  const positions=flat.flatMap((s,i)=>s===rule.id?[i]:[]);
  const tier=rule.tiers.find(t=>positions.length>=t.minCount&&positions.length<=t.maxCount);
  if(tier)wins.push({symbol:rule.id,symbolPos:positions,symbolCount:positions.length,payValue:tier.payValue,winnings:cents(totalBet*tier.payValue/table.betDivisor)/100});
 }
 return{wins,winnings:cents(wins.reduce((sum,w)=>sum+w.winnings,0))/100};
}
export function generateNormalRound({totalBet=1,weights=Array(9).fill(1),random=Math.random,maxCascades=100}={}){
 if(weights.length!==9||weights.some(x=>!Number.isFinite(x)||x<0)||weights.reduce((a,b)=>a+b,0)<=0)throw Error('Nine nonnegative normal-symbol weights required');
 if(!Number.isInteger(maxCascades)||maxCascades<1||maxCascades>1000)throw Error('Invalid cascade limit');
 const total=weights.reduce((a,b)=>a+b,0);
 const draw=()=>{const r=random();if(!Number.isFinite(r)||r<0||r>=1)throw Error('RNG must return [0,1)');let v=r*total;for(let i=0;i<9;i++){v-=weights[i];if(v<0)return i+1;}return 9;};
 let board=Array.from({length:5},()=>Array.from({length:6},draw));
 let winnings=0;const stages=[];
 for(let cascade=0;cascade<=maxCascades;cascade++){
  const result=evaluateBoard(board,totalBet);winnings=cents(winnings+result.winnings)/100;
  stages.push({view:board.map(r=>[...r]),winSymbols:result.wins,roundWinnings:result.winnings,totalWinnings:winnings,totalStake:totalBet});
  if(result.wins.length===0)return{stages,totalWinnings:winnings,method:'new local rule engine; independent weighted normal symbols',originalRngRestored:false};
  if(cascade===maxCascades)throw Error('Cascade limit reached; reject round instead of stalling or silently truncating');
  const removed=new Set(result.wins.flatMap(w=>w.symbolPos));
  const next=Array.from({length:5},()=>Array(6));
  for(let col=0;col<6;col++){
   const kept=[];for(let row=0;row<5;row++)if(!removed.has(row*6+col))kept.push(board[row][col]);
   const values=[...Array.from({length:5-kept.length},draw),...kept];
   for(let row=0;row<5;row++)next[row][col]=values[row];
  }
  board=next;
 }
 throw Error('Unreachable');
}
