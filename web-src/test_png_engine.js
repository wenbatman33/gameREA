const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const scope={self:{}};vm.runInNewContext(fs.readFileSync(__dirname+'/png-engine.js','utf8'),scope);
const catalog=JSON.parse(fs.readFileSync(process.argv[2]||'web-build/games.json','utf8'));
for(const game of catalog.games.filter(g=>g.provider==='png')){
 const protocol=game.protocol,winning=protocol.samples.filter(r=>r.win>0);
 if(!winning.length){console.log('PENDING',game.slug,'needs complete winning observations');continue;}
 // Every stored chain must survive both batched and split acknowledgements.
 for(const sample of protocol.samples){
  const probe=new scope.self.PNG_ENGINE({...protocol,samples:[sample]});
  for(const stage of sample.stages)probe.process(stage.request);
  assert.equal(probe.state.active,null,game.slug+' complete observed chain');
  assert.equal(probe.state.balance,(protocol.balance||2500000)-sample.sourceStake+sample.win);
 }
 let engine=new scope.self.PNG_ENGINE(protocol),balance=protocol.balance||2500000,seq=0;
 const send=command=>{const id='test-'+(++seq),reply=engine.process(command,id);assert.equal(engine.process(command,id),reply,'idempotent packet retry');engine=new scope.self.PNG_ENGINE(protocol,JSON.parse(JSON.stringify(engine.state)));return reply;};
 if(game.slug==='firejoker'){
  const probe=new scope.self.PNG_ENGINE(protocol);probe.configure({nextOutcome:'respin'});probe.process(protocol.samples[0].stages[0].request);
  assert(probe.state.active.sample.stages.some(x=>/^7 /.test(x.request)));
  while(probe.state.active)probe.process(probe.state.active.sample.stages[probe.state.active.position].request);
  assert.equal(probe.state.balance,2499980,'observed re-spin settles 100 stake and 80 award');
 }
 const layouts=new Set();
 for(let i=0;i<30;i++){
  const win=i%2===0;engine.configure({nextOutcome:win?'win':'lose'});
  const source=protocol.samples[0].stages[0].request.match(/^1 (\d+) (\d+) (\d+)/).slice(1).map(Number);
  if(i%3===0)source[0]*=2;
  const stake=source.reduce((a,b)=>a*b,1),previous=balance;
  const first=send('1 '+source.join(' '));layouts.add(first.replace(/^52 .*$/gm,''));
  const sample=engine.state.active?.sample; // no-win single stage settles immediately
  const selected=sample||protocol.samples[engine.state.lastIndex];
  let guard=0;
  while(engine.state.active){
   assert(++guard<80,'bounded round state machine');
   const expected=engine.state.active.sample.stages[engine.state.active.position].request;
   send(expected==='2 6'&&i%2===0?'2 4 4\r\n2 6':expected);
  }
  const credit=Math.round(selected.win*stake/selected.sourceStake);balance=previous-stake+credit;
  assert.equal(engine.state.balance,balance,game.slug+' exact debit/credit');
  assert.equal(credit>0,win,game.slug+' selected outcome');
 }
 assert(layouts.size>=3,game.slug+' varying layouts');
 engine.configure({nextOutcome:'win'});const values=winning[0].stages[0].request.match(/^1 (\d+) (\d+) (\d+)/).slice(1).map(Number),stake=values.reduce((a,b)=>a*b,1);
 send('1 '+values.join(' '));const active=engine.state.active;
 if(active){const expected=engine.state.balance+Math.max(0,Math.round(active.sample.win*active.betScale)-active.credited);send('104 0');assert.equal(engine.state.balance,expected);send('104 0');assert.equal(engine.state.balance,expected,'reconnect credits once');}
 console.log('PASS',game.slug,'30 mixed rounds, changed stake, exact settlement, retries and worker restart');
}
