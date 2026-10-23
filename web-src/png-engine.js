/* Our editable offline result selector, packet state machine and virtual ledger.
 * Samples contain complete locally stored round chains; no upstream IO exists.
 */
(() => {
  const copy=value=>JSON.parse(JSON.stringify(value));
  const lines=text=>text.replace(/^d=/,'').split(/\r?\n/);
  function atomicStages(stages){
    return stages.flatMap(stage=>{
      const commands=stage.request.split(/\r?\n/).filter(Boolean);
      if(commands.length<2||commands.slice(0,-1).some(c=>!/^7 \d+$/.test(c)&&!/^2 4 \d+$/.test(c)))return[stage];
      let remaining=lines(stage.response);
      return commands.map((command,index)=>{
        if(index===commands.length-1)return{request:command,response:'d='+remaining.join('\r\n')};
        const echo=command.startsWith('7 ')?'83 '+command.slice(2):command;
        remaining=remaining.filter(line=>line!==echo);
        return{request:command,response:'d='+echo+'\r\n\r\n'};
      });
    });
  }
  class Engine {
    constructor(protocol,state){
      this.protocol=protocol;
      this.state=state||{balance:protocol.balance||2500000,winRate:35,nextOutcome:'auto',active:null,lastIndex:null,replies:{},rounds:0};
    }
    configure(input={}){
      const s=this.state,rate=input.winRate??s.winRate,next=input.nextOutcome??s.nextOutcome;
      if(!Number.isFinite(rate)||rate<0||rate>100||!['auto','win','lose','respin'].includes(next))throw Error('Invalid simulation settings');
      if(next==='win'&&!this.protocol.samples.some(r=>r.win>0))throw Error('No complete winning sample is available for this game');
      if(next==='respin'&&!this.protocol.samples.some(r=>r.stages.some(x=>/^7 /.test(x.request))))throw Error('No complete re-spin sample is available');
      s.winRate=rate;s.nextOutcome=next;
      return{winRate:rate,nextOutcome:next,balance:s.balance/100,pending:!!s.active,mode:'offline sampled-round simulation'};
    }
    process(command,id){
      command=command.trim();const s=this.state;
      if(id&&Object.hasOwn(s.replies,id))return s.replies[id];
      let reply;
      if(command.includes('\n')&&s.active?.sample.stages[s.active.position].request!==command){
        const replies=command.split(/\r?\n/).map(c=>c.trim()).filter(Boolean).map(c=>this.process(c).replace(/^d=/,''));
        reply='d='+replies.join('\r\n');
      }else if(/^104 /.test(command)){
        // A fresh socket can safely recover a virtual round interrupted during
        // animation. Its remaining award is credited once before reinit.
        if(s.active){s.balance+=Math.max(0,Math.round(s.active.sample.win*s.active.betScale)-s.active.credited);s.active=null;}
        reply=this.protocol.init.replace(/^(d=)?52 \d+/gm,(_,d)=>(d||'')+'52 '+s.balance);
      }else if(command==='0')reply='d=\r\n';
      else{
        const spin=command.match(/^1 (\d+) (\d+) (\d+)(?:\s|$)/);
        if(spin){
          if(s.active)throw Error('Finish the pending virtual round first');
          const values=spin.slice(1).map(Number),stake=values.reduce((a,b)=>a*b,1);
          if(values.some(v=>!Number.isSafeInteger(v)||v<=0)||!Number.isSafeInteger(stake)||stake>s.balance)throw Error('Invalid stake or insufficient virtual balance');
          const win=s.nextOutcome==='win'||s.nextOutcome==='auto'&&Math.random()*100<s.winRate;
          let choices=this.protocol.samples.map((sample,index)=>({sample,index})).filter(x=>(x.sample.win>0)===win);
          if(s.nextOutcome==='respin')choices=this.protocol.samples.map((sample,index)=>({sample,index})).filter(x=>x.sample.stages.some(stage=>/^7 /.test(stage.request)));
          if(!choices.length)choices=this.protocol.samples.map((sample,index)=>({sample,index}));
          if(choices.length>1)choices=choices.filter(x=>x.index!==s.lastIndex);
          const selected=choices[Math.floor(Math.random()*choices.length)];
          const original=selected.sample.stages[0].request.match(/^1 (\d+) (\d+) (\d+)/).slice(1).map(Number);
          const sample=copy(selected.sample);sample.stages=atomicStages(sample.stages);
          s.active={sample,index:selected.index,position:0,values,
            betScale:stake/selected.sample.sourceStake,coinScale:values[0]*values[1]/(original[0]*original[1]),
            sourcePrevious:selected.sample.balanceBefore-selected.sample.sourceStake,credited:0};
          s.balance-=stake;s.nextOutcome='auto';s.rounds++;
        }
        const active=s.active;
        if(!active)reply='d=\r\n';
        else{
          const expected=active.sample.stages[active.position];
          // Animation-step acknowledgements are local protocol messages. Some
          // browser-observed samples include them; coarse samples omit echoes.
          if(/^2 4 \d+$/.test(command)&&!/^2 4 /.test(expected.request))reply='d='+command+'\r\n\r\n';
          else{
            const matches=spin||expected.request===command||/^4 /.test(command)&&/^4 /.test(expected.request);
            if(!matches)throw Error('Unexpected command '+command+'; pending '+expected.request);
            reply=this.render(expected.response,active);
            active.position++;
            if(active.position===active.sample.stages.length){s.lastIndex=active.index;s.active=null;}
          }
        }
      }
      if(id){s.replies[id]=reply;for(const key of Object.keys(s.replies).slice(0,-20))delete s.replies[key];}
      return reply;
    }
    render(raw,active){
      const s=this.state;
      return 'd='+lines(raw).map(line=>{
        const p=line.split(' '),code=p[0];
        if(code==='1')p.splice(1,3,...active.values.map(String));
        if(code==='3'&&p.length>=4){p[2]=String(Math.round(Number(p[2])*active.coinScale));p[3]=String(Math.round(Number(p[3])*active.betScale));}
        if(code==='5'&&p.length>=2)p[1]=String(Math.round(Number(p[1])*active.coinScale));
        if(code==='6'&&p.length>=2)p[1]=String(Math.round(Number(p[1])*active.betScale));
        if(code==='52'){
          const source=Number(p[1]),credit=Math.round((source-active.sourcePrevious)*active.betScale);
          if(credit<0)throw Error('Unexpected negative settlement delta in stored sample');
          s.balance+=credit;active.credited+=credit;active.sourcePrevious=source;p[1]=String(s.balance);
        }
        return p.join(' ');
      }).join('\r\n');
    }
  }
  self.PNG_ENGINE=Engine;
})();
