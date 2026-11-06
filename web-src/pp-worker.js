/* Captured original PP clients with a finite, in-browser synthetic backend. */
(() => {
  const UPSTREAM = 'https://demogamesfree.pragmaticplay.net';
  const sessions = new Map();
  const locks = new Map();
  const STATE_CACHE = 'game-rea-pp-virtual-state-v1';
  function stateKey(ctx,game) {
    return new URL('__pp-state/'+encodeURIComponent(ctx.clientId||'default')+'/'+encodeURIComponent(game.slug),ctx.base).href;
  }
  async function loadState(key) {
    if(sessions.has(key))return sessions.get(key);
    const cache=await caches.open(STATE_CACHE);
    const saved=await cache.match(key);
    let state={position:0,balance:100000,previous:100000};
    if(saved){
      const data=await saved.json();
      if(data.version===1&&Number.isInteger(data.position)&&data.position>=0&&Number.isFinite(data.balance)&&Number.isFinite(data.previous))state=data;
    }
    sessions.set(key,state);return state;
  }
  async function saveState(key,state) {
    // Commit before replying, so a new worker can resume an outstanding collect.
    const cache=await caches.open(STATE_CACHE);
    await cache.put(key,new Response(JSON.stringify({...state,version:1}),{headers:{'Content-Type':'application/json'}}));
    sessions.set(key,state);
  }
  const fields = raw => Object.fromEntries(raw.split('&').filter(x => x.includes('=')).map(x => {const i=x.indexOf('=');return [x.slice(0,i),x.slice(i+1)];}));
  const money = n => n.toLocaleString('en-US', {minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true});
  function rewrite(raw, ctx) {
    return raw.split(UPSTREAM).join(ctx.virtualBase.replace(/\/$/, ''));
  }
  function contextBuild(raw, context) {
    return raw.replace(/(win\[(?:'[^']*'\+)*'[^']*'\])=eval\(atob\(([^)]*)\)\)/g, (whole,key,parts) => {
      const encoded=Array.from(parts.matchAll(/'([^']*)'/g),m=>m[1]).join('');
      let expression;try{expression=atob(encoded);}catch{return whole;}
      return Object.hasOwn(context,expression)?key+'='+JSON.stringify(context[expression]):whole;
    });
  }
  function serial(key, work) {
    const prior=locks.get(key)||Promise.resolve();
    const next=prior.catch(()=>{}).then(work);
    locks.set(key,next);return next.finally(()=>{if(locks.get(key)===next)locks.delete(key);});
  }
  async function handle(request,pathWithQuery,ctx) {
    const game=ctx.metadata;
    const url=new URL(pathWithQuery,UPSTREAM);
    const path=url.pathname;
    const prefix=ctx.virtualBase.replace(/\/$/,'');
    if(request.method==='GET') {
      if(path==='/'||path.endsWith('/openGame.do')||path.startsWith('/play/'))return Response.redirect(prefix+game.entry,302);
      if(path.endsWith('/html5Game.do')) {
        let html=rewrite(await ctx.text(game.entryRecord),ctx).replace('if (!noga)','if (false)');
        if(ctx.quiet)html=html.replace(/<head\b[^>]*>/i,m=>m+'<script src="'+new URL(game.quietScript,ctx.base).href+'"></script>');
        if(game.roundSamples?.length){
          const settings=JSON.stringify({configure:ctx.virtualBase+'_local/configure',winRate:game.simulation?.winRate??35});
          html=html.replace(/<head\b[^>]*>/i,m=>m+'<script>window.__LOCAL_SIMULATION__='+settings+';</script><script src="'+new URL('simulation-controls.js',ctx.base).href+'"></script>');
        }
        return ctx.reply(html,'text/html; charset=utf-8');
      }
      const record=game.static[path];
      if(record) {
        const mime=record.mime||'application/octet-stream';
        if(/javascript|json|text\/|xml/i.test(mime)) {
          let body=rewrite(await ctx.text(record),ctx);
          if(path.endsWith('/build.js'))body=contextBuild(body,game.context);
          if(path.endsWith('/operator_logos/logo_info.js'))body=body.replace('var useRUM = true;','var useRUM = false;');
          return ctx.reply(body,mime);
        }
        return ctx.read(record);
      }
      // This independent sandbox has no account promotions.
      if(path.startsWith('/gs2c/promo/'))return ctx.reply('{}','application/json');
      return null;
    }
    if(request.method!=='POST')return null;
    if(path.endsWith('/_local/configure')){
      const key=stateKey(ctx,game);
      return serial(key,async()=>{
        let input;try{input=await request.json();}catch{return ctx.reply('Invalid JSON','text/plain',400);}
        const state={...await loadState(key)};
        const rate=input.winRate??state.winRate??game.simulation?.winRate??35;
        const next=input.nextOutcome??state.nextOutcome??'auto';
        if(!Number.isFinite(rate)||rate<0||rate>100||!['auto','win','lose'].includes(next))return ctx.reply('Invalid simulation settings','text/plain',400);
        Object.assign(state,{winRate:rate,nextOutcome:next});await saveState(key,state);
        return ctx.reply(JSON.stringify({winRate:rate,nextOutcome:next,balance:state.balance,mode:'local sampled-round simulation'}),'application/json');
      });
    }
    if(!path.endsWith('/gameService'))return ctx.reply('{}','application/json');
    const params=new URLSearchParams(await request.text());
    if(params.get('symbol')!==game.symbol)return ctx.reply('Unknown local game','text/plain',400);
    const action=params.get('action');
    const key=stateKey(ctx,game);
    return serial(key,async()=>{
      if(action==='doSpin'&&((game.roundSamples?.length?(!Number.isFinite(Number(params.get('c')))||Number(params.get('c'))<0.01||Number(params.get('c'))>10000||Math.abs(Number(params.get('c'))*100-Math.round(Number(params.get('c'))*100))>0.00001):Number(params.get('c'))!==game.defaultCoin)||Number(params.get('l'))!==game.defaultLines))return ctx.reply('Unsupported simulation stake','text/plain',422);
      const state={...await loadState(key)};
      // Provider counters identify transport retries, including a reply lost at
      // worker shutdown. Replaying the response must not credit/debit twice.
      const fingerprint=params.has('index')&&params.has('counter')?
        [action,params.get('index'),params.get('counter'),params.get('c'),params.get('l')].join('|'):null;
      if(fingerprint&&state.lastRequest===fingerprint&&typeof state.lastReply==='string')return ctx.reply(state.lastReply,'text/plain; charset=utf-8');
      let record;
      if(action==='doInit') {
        Object.assign(state,{position:0,activeRound:null,lastRound:null,balance:100000,previous:100000});
        record=game.fixtures.find(r=>r.action==='doInit');
      } else if(game.roundSamples?.length) {
        if(state.activeRound==null){
          if(action!=='doSpin')return ctx.reply('No pending sampled round','text/plain',409);
          const requested=state.nextOutcome||'auto';
          const winning=requested==='win'||requested==='auto'&&Math.random()*100<(state.winRate??game.simulation?.winRate??35);
          let candidates=game.roundSamples.map((round,index)=>({round,index})).filter(x=>(x.round.win>0)===winning);
          if(!candidates.length)candidates=game.roundSamples.map((round,index)=>({round,index}));
          if(candidates.length>1)candidates=candidates.filter(x=>x.index!==state.lastRound);
          const selected=candidates[Math.floor(Math.random()*candidates.length)];
          const coin=Number(params.get('c')),bet=coin*game.defaultLines;
          if(state.balance<bet)return ctx.reply('Insufficient virtual balance','text/plain',402);
          Object.assign(state,{activeRound:selected.index,position:0,previous:selected.round.balanceBefore,nextOutcome:'auto',coin,betRatio:bet/selected.round.sourceStake});
        }
        const selected=game.roundSamples[state.activeRound];
        record=selected.stages[state.position];
        if(record.action!==action)return ctx.reply('Pending animation/collect must finish before a new round','text/plain',409);
        state.position++;
        if(state.position===selected.stages.length){state.lastRound=state.activeRound;state.activeRound=null;state.position=0;}
      } else {
        const chain=game.fixtures.filter(r=>r.action!=='doInit');
        if(!chain.length)return ctx.reply('No captured round','text/plain',501);
        if(state.position>=chain.length){state.position=0;state.previous=100000;}
        record=chain[state.position];
        if(record.action!==action)return ctx.reply('Action outside recorded sequence; reload to reset.','text/plain',409);
        state.position++;
      }
      if(!record)return ctx.reply('Missing initial fixture','text/plain',501);
      const data=fields(typeof record.raw==='string'?record.raw:await ctx.text(record));
      const original=Number((data.balance||'100000').replace(/,/g,''));
      const ratio=game.roundSamples?.length&&action!=='doInit'?state.betRatio||1:1;
      state.balance=Math.round((state.balance+(original-state.previous)*ratio)*100)/100;
      state.previous=original;
      if(game.roundSamples?.length&&action==='doInit'){
        // Until bonus acquisition is implemented, do not offer a purchase that
        // the local ordinary-round engine cannot fulfill.
        data.purInit_e='0';data.purInit='[]';if(data.bls)data.bls=String(game.defaultLines);
      }
      if(game.roundSamples?.length&&action!=='doInit'){
        if(data.c!==undefined)data.c=Number(state.coin).toFixed(2);
        for(const field of ['w','tw','rs_iw','rs_win','tmb_win','tmb_res','pw','apwa'])if(data[field]!==undefined)data[field]=(Number(data[field])*ratio).toFixed(2);
        for(const field of Object.keys(data))if(/^l\d+$/.test(field)){const parts=data[field].split('~');if(parts.length>1)parts[1]=(Number(parts[1])*ratio).toFixed(2);data[field]=parts.join('~');}
        if(data.mo)data.mo=data.mo.split(',').map(n=>String(Math.round(Number(n)*ratio*100)/100)).join(',');
      }
      Object.assign(data,{balance:money(state.balance),balance_cash:money(state.balance),ntp:(state.balance-100000).toFixed(2),index:params.get('index')||'1',counter:String(Number(params.get('counter')||'1')+1),stime:String(Date.now())});
      const body=Object.entries(data).map(([k,v])=>k+'='+v).join('&');
      state.lastRequest=fingerprint;state.lastReply=body;
      await saveState(key,state);
      return ctx.reply(body,'text/plain; charset=utf-8');
    });
  }
  self.GAME_PROVIDERS=self.GAME_PROVIDERS||{};
  self.GAME_PROVIDERS.pp={handle};
})();
