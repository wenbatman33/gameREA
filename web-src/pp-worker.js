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
        return ctx.reply(html,'text/html; charset=utf-8');
      }
      const record=game.static[path];
      if(record) {
        const mime=record.mime||'application/octet-stream';
        if(/javascript|json|text\/|xml/i.test(mime)) {
          let body=rewrite(await ctx.text(record),ctx);
          if(path.endsWith('/build.js'))body=contextBuild(body,game.context);
          return ctx.reply(body,mime);
        }
        return ctx.read(record);
      }
      // This independent sandbox has no account promotions.
      if(path.startsWith('/gs2c/promo/'))return ctx.reply('{}','application/json');
      return null;
    }
    if(request.method!=='POST')return null;
    if(!path.endsWith('/gameService'))return ctx.reply('{}','application/json');
    const params=new URLSearchParams(await request.text());
    if(params.get('symbol')!==game.symbol)return ctx.reply('Unknown local game','text/plain',400);
    const action=params.get('action');
    const key=stateKey(ctx,game);
    return serial(key,async()=>{
      if(action==='doSpin'&&(Number(params.get('c'))!==game.defaultCoin||Number(params.get('l'))!==game.defaultLines))return ctx.reply('This recorded demo supports only the default stake. Reload to reset.','text/plain',422);
      const state={...await loadState(key)};
      // Provider counters identify transport retries, including a reply lost at
      // worker shutdown. Replaying the response must not credit/debit twice.
      const fingerprint=params.has('index')&&params.has('counter')?
        [action,params.get('index'),params.get('counter'),params.get('c'),params.get('l')].join('|'):null;
      if(fingerprint&&state.lastRequest===fingerprint&&typeof state.lastReply==='string')return ctx.reply(state.lastReply,'text/plain; charset=utf-8');
      let record;
      if(action==='doInit') {
        Object.assign(state,{position:0,balance:100000,previous:100000});
        record=game.fixtures.find(r=>r.action==='doInit');
      } else {
        const chain=game.fixtures.filter(r=>r.action!=='doInit');
        if(!chain.length)return ctx.reply('No captured round','text/plain',501);
        if(state.position>=chain.length){state.position=0;state.previous=100000;}
        record=chain[state.position];
        if(record.action!==action)return ctx.reply('Action outside recorded sequence; reload to reset.','text/plain',409);
        state.position++;
      }
      if(!record)return ctx.reply('Missing initial fixture','text/plain',501);
      const data=fields(await ctx.text(record));
      const original=Number((data.balance||'100000').replace(/,/g,''));
      state.balance=Math.round((state.balance+original-state.previous)*100)/100;
      state.previous=original;
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
