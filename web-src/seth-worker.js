/* Seth 2: original runtime, explicitly synthetic browser-only outcomes. */
(() => {
  const clone = value => JSON.parse(JSON.stringify(value));
  const money = value => Math.round(value * 100) / 100;
  const sessions = new Map();
  // A service worker may stop during long win/bonus animations. Keep pending
  // virtual rounds in origin-local storage, never in a remote account backend.
  let apiQueue=Promise.resolve();
  async function sessionFor(key,ctx){
    const storageURL=new URL('__seth_state__/'+encodeURIComponent(key),ctx.base||ctx.virtualBase).href;
    let cache=null;
    if(typeof caches!=='undefined'){
      cache=await caches.open('game-lab-seth-virtual-state-v1');
      if(!sessions.has(key)){const saved=await cache.match(storageURL);if(saved)try{sessions.set(key,await saved.json());}catch{/* Start a fresh virtual session if local data is corrupt. */}}
    }
    if(!sessions.has(key))sessions.set(key,{balance:10000,round:0,pending:{},history:[],winRate:30,payoutMultiplier:2,nextFeature:'normal',settings:settings()});
    return{state:sessions.get(key),save:async()=>{if(cache)await cache.put(storageURL,new Response(JSON.stringify(sessions.get(key)),{headers:{'Content-Type':'application/json'}}));}};
  }
  const GAME = '/egames/22020103b31b7390f07b1551e8538589b5e51967/game/';
  const FRAME = '/slotFramework/14ee78206168302dd5e294aaa97f5c0b21de68f5/';
  const settings = () => ({advancedSettings:{sounds:{backgroundVolume:0.5,effectVolume:0.8},notify:false,turbo:false},autoPlay:{numberOfPlays:[10,50,100,-1],stopOnWinMultiplier:false,stopOnBalance:false,stopOnFreeSpin:true,stopOnJackpot:true},stakeIndex:0,ratioIndex:0});
  function fresh(meta) {
    const value = clone(meta.fixtures.spin1.engine.gameState.at(-1));
    Object.assign(value,{action:'spin',totalStake:1,freeGameCount:0,superMainGameCount:0,isGoldenFg:false,isJp:'',currentTimes:0,roundWinnings:0,totalWinnings:0,totalViews:1,currentView:0,startFreeGame:false,noWinReward:0,winSymbols:[],timesSymbols:[],newTimesSymbols:[],splitList:[],posTransform:[],maleTotemLevel:0,femaleTotemLevel:0});
    const bag=Array.from({length:30},(_,i)=>1+i%9);for(let i=29;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}value.view=Array.from({length:5},(_,r)=>bag.slice(r*6,r*6+6));
    return value;
  }
  function platform(s,quiet) {
    const configured=clone(s.settings);
    if(quiet)configured.advancedSettings.sounds={backgroundVolume:0,effectVolume:0};
    return {game:{stakeValues:[1,2,5,10,20,50],ratioValues:[0.05,0.1,0.5,1],stakeList:[],superMgRealStakeLimit:0},player:{name:'LOCAL',displayName:'瀏覽器假資料',id:'LOCAL',uid:'LOCAL',avatar:'0',avatarUrl:'',balance:{currency:'TWD',amount:s.balance,gemAmount:0},settings:configured},disableRotate:false};
  }
  function definition(){return {winlineDefs:Array.from({length:20},(_,i)=>({order:String(i),line:[]})),winDefs:[],symbolDefs:Array.from({length:19},(_,i)=>({symbol:String(i+1),displayName:'symbol_'+(i+1),isWild:false})),digital:2,winOddsTypes:{big:20,super:50,mega:100,ultra:200,legendary:500},extraFgRounds:5,buyFeature:[{feature:'freeSpin',featureIndex:0,featureRate:100}],prizeAutoNextDelay:2,autoConfirmTime:2,autoSpinInterval:0.3,smallPrizeDelay:0,bigPrizeDelay:1.2,viewDefs:{type:'grid',view:Array.from({length:5},(_,r)=>Array.from({length:6},(_,c)=>String(r*6+c)))}};}
  function close(s,id){const p=s.pending[id];if(p){delete s.pending[id];s.balance=money(s.balance+p.win);p.endTime=Date.now();s.history.push(p);}}
  function ordinary(meta,bet,hit,mult){const first=fresh(meta);first.totalStake=bet;if(!hit)return[first];const amount=money(bet*mult);const positions=Array.from({length:30},(_,i)=>i);for(let i=29;i>0;i--){const j=Math.floor(Math.random()*(i+1));[positions[i],positions[j]]=[positions[j],positions[i]];}const winners=positions.slice(0,8);first.view=first.view.map(row=>row.map(v=>v===6?7:v));for(const p of winners)first.view[Math.floor(p/6)][p%6]=6;Object.assign(first,{winSymbols:[{symbol:6,winnings:amount,symbolPos:winners}],roundWinnings:amount,totalWinnings:amount,totalViews:2});const last=fresh(meta);Object.assign(last,{totalStake:bet,roundWinnings:amount,totalWinnings:amount,totalViews:2,currentView:1});return[first,last];}
  function bonus(meta,bet,golden,rate,mult){
    const intro=fresh(meta);Object.assign(intro,{totalStake:bet,startFreeGame:true,freeGameCount:15,isGoldenFg:golden});for(let p=0;p<4;p++)intro.view[Math.floor(p/6)][p%6]=golden&&p===3?16:15;
    const stages=[intro];let remaining=14;
    if(golden){const sample=clone(meta.fixtures.spin4.engine.gameState),factor=bet/sample[0].totalStake;let previous=null;
      function scale(v){if(Array.isArray(v))v.forEach(scale);else if(v&&typeof v==='object')for(const[k,x]of Object.entries(v)){if(['totalStake','roundWinnings','totalWinnings','winnings','noWinReward'].includes(k)&&typeof x==='number')v[k]=money(x*factor);else scale(x);}}
      for(const item of sample){scale(item);if(previous&&!previous.winSymbols.length)remaining--;Object.assign(item,{action:'freeSpin',isGoldenFg:true,freeGameCount:remaining,superMainGameCount:0,startFreeGame:false});previous=item;}stages.push(...sample);remaining--;
    }
    let total=stages.at(-1).totalWinnings;
    for(let count=remaining;count>=0;count--){const items=ordinary(meta,bet,Math.random()<rate/100,mult),win=items.at(-1).totalWinnings;for(const item of items)Object.assign(item,{action:'freeSpin',isGoldenFg:golden,freeGameCount:count,totalWinnings:money(total+item.totalWinnings)});stages.push(...items);total=money(total+win);}
    stages.forEach((item,i)=>Object.assign(item,{currentView:i,totalViews:stages.length}));return stages;
  }
  function respond(meta,s,name,data,token,quiet){
    const result={status:200,message:'BROWSER SYNTHETIC',eventName:name,token,platform:platform(s,quiet)};
    if(name==='initial'){
      Object.keys(s.pending).slice(0,-1).forEach(id=>close(s,id));const p=Object.values(s.pending).at(-1);
      Object.assign(result,{engine:{definition:definition(),gameState:p?clone(p.stages):[fresh(meta)],spinId:p?p.id:''},isResuming:!!p,pools:Object.fromEntries(['mini','minor','major','grand'].map(n=>['jp-'+n,0])),posters:[],slotTable:{number:1,roomId:'LOCAL'},platform:platform(s,quiet)});
    }else if(name==='spin'){
      if(data.forceClose)close(s,data.forceClose);
      if(s.pending[data.spinId]){const p=s.pending[data.spinId];return{...result,engine:{gameState:clone(p.stages),spinId:p.id},platform:platform(s,quiet)};}
      const si=data.stakeIndex??0,ri=data.ratioIndex??0;
      if(!Number.isInteger(si)||!Number.isInteger(ri)||si<0||si>5||ri<0||ri>3)return{status:400,message:'Invalid browser stake',token};
      const bet=[1,2,5,10,20,50][si]*[0.05,0.1,0.5,1][ri]*20,buy=data.action==='buyFeature',cost=bet*(buy?100:1),feature=buy?'free':s.nextFeature;
      if(cost>s.balance)return{status:400,message:'瀏覽器虛擬餘額不足',token};s.balance=money(s.balance-cost);s.round++;s.nextFeature='normal';let stages;
      if(['free','awakening'].includes(feature))stages=bonus(meta,bet,feature==='awakening',s.winRate,s.payoutMultiplier);
      else if(['jackpot','treasure'].includes(feature)){const item=fresh(meta);Object.assign(item,{totalStake:bet,roundWinnings:money(bet*s.payoutMultiplier),totalWinnings:money(bet*s.payoutMultiplier)});if(feature==='jackpot'){item.isJp='jp-mini';item.view[0][0]=14;item.view[0][1]=14;}else item.noWinReward=item.totalWinnings;stages=[item];}
      else stages=ordinary(meta,bet,Math.random()<s.winRate/100,s.payoutMultiplier);
      const id='LOCAL-'+crypto.randomUUID();s.pending[id]={id,win:stages.at(-1).totalWinnings,bet:cost,stages:clone(stages),feature};Object.assign(result,{engine:{gameState:buy?{spinId:id}:stages,spinId:id},platform:platform(s,quiet)});
    }else if(name==='closeSpin'){close(s,data.spinId);Object.assign(result,{engine:{gameState:{}},win:0,platform:platform(s,quiet)});}
    else if(name==='configure'){
      const rate=data.winRate??s.winRate,mult=data.payoutMultiplier??s.payoutMultiplier,feature=data.nextFeature??s.nextFeature;
      if(!Number.isFinite(rate)||rate<0||rate>100||!Number.isFinite(mult)||mult<0.1||mult>100||!['normal','free','awakening','jackpot','treasure'].includes(feature))return{status:400,message:'Invalid browser configuration',token};
      Object.assign(s,{winRate:rate,payoutMultiplier:mult,nextFeature:feature});Object.assign(result,{winRate:rate,payoutMultiplier:mult,nextFeature:feature,pendingCount:Object.keys(s.pending).length,balance:s.balance});
    }else if(name==='updateSettings'&&data.type==='game'){
      const changed=data.data||{};for(const k of ['stakeIndex','ratioIndex'])if(k in changed)s.settings[k]=changed[k];for(const k of ['turbo','notify','sounds'])if(k in changed&&(k!=='sounds'||!quiet))s.settings.advancedSettings[k]=changed[k];for(const k of ['backgroundVolume','effectVolume'])if(k in changed&&!quiet)s.settings.advancedSettings.sounds[k]=changed[k];
    }else if(['getSlotTables','getSlotTableDetail'].includes(name))Object.assign(result,{number:1,roomId:'LOCAL',status:'available',bet:0,win:0,tables:[],slotTables:[],total:0,page:1});
    else if(name==='getBetRecords'){const limit=Number.isInteger(data.rows)?Math.max(1,Math.min(100,data.rows)):16;const rows=[...s.history].reverse().filter(h=>!data.lt||h.endTime<data.lt).map(h=>({id:h.id,name:'戰神賽特2（瀏覽器）',roomId:'LOCAL',totalStake:h.bet,win:h.win,profit:money(h.win-h.bet),endTime:h.endTime,hasFree:['free','awakening'].includes(h.feature),isFeature:['free','awakening'].includes(h.feature)}));Object.assign(result,{data:rows.slice(0,limit),total:rows.length});}
    else if(name==='getUserReport'){const bet=money(s.history.reduce((n,h)=>n+h.bet,0)),win=money(s.history.reduce((n,h)=>n+h.win,0));result.content={list:s.history.length?[{name:'戰神賽特2（瀏覽器）',bet,win,profit:money(win-bet),betCount:s.history.length}]:[]};}
    return result;
  }
  self.GAME_PROVIDERS=self.GAME_PROVIDERS||{};
  self.GAME_PROVIDERS.seth={async handle(request,pathWithQuery,ctx){
    const meta=Array.isArray(ctx.metadata)?ctx.metadata.find(x=>x.provider==='seth'&&x.slug==='seth2'):ctx.metadata;
    if(!meta)return null;const url=new URL(pathWithQuery,'https://browser.invalid'),path=decodeURIComponent(url.pathname);
    if(path.startsWith('/local-api/')){
      if(request.method!=='POST')return ctx.reply('Method not allowed','text/plain',405);
      let payload;try{payload=await request.json();}catch{return ctx.reply('{}','application/json',400);}
      const token=String(payload.session||'browser-local'),key=String(ctx.clientId||'browser')+':'+token;
      const operation=apiQueue.catch(()=>{}).then(async()=>{
        const local=await sessionFor(key,ctx);
        const result=respond(meta,local.state,path.slice('/local-api/'.length),payload.data||{},token,!!ctx.quiet);
        await local.save();return ctx.reply(JSON.stringify(result),'application/json');
      });
      apiQueue=operation;return operation;
    }
    if(path==='/local-controls.js')return ctx.reply(meta.controls,'application/javascript');
    if(path.endsWith('/error.html'))return ctx.reply('<!doctype html><meta charset="utf-8"><h1>瀏覽器模擬流程中斷</h1><p>請回到入口重新開啟；僅使用虛擬點數。</p><a href="'+ctx.virtualBase+'">重新開啟</a>','text/html');
    if(path==='/')return Response.redirect(ctx.virtualBase+meta.entry.replace(/^\//,''),302);
    let mapped=path;if(path.startsWith(GAME+'assets/slotFramework/'))mapped=FRAME+path.slice((GAME+'assets/slotFramework/').length);if(path.replace(/\/$/,'')===GAME.replace(/\/$/,''))mapped=GAME+'index.html';
    const record=meta.assets[mapped];if(!record)return null;
    if(!/\.(js|json|css|html)$/.test(mapped))return ctx.read(record);
    let text=await ctx.text(record);const base=ctx.virtualBase.replace(/\/$/,'');
    text=text.replaceAll('https://play.godeezone1.com',base).replaceAll('http://127.0.0.1:18767',base);
    if(mapped===GAME+'index.html'){
      // Repair bookmarks from the first static export too. The original
      // UrlModel leaves socket_url empty without the query marker, so its
      // SocketIOClient never calls io.connect and GameEntry waits 30 seconds.
      const config='<script>window.__SETH_BASE__='+JSON.stringify(ctx.virtualBase)+';(()=>{const u=new URL(location.href);if(!u.searchParams.get("socket_url")){u.searchParams.set("socket_url","browser-local");history.replaceState(null,"",u.href);}})();</script><script src="'+ctx.virtualBase+'local-controls.js"></script>';
      text=text.replace('<body>','<body>'+config).replace('<title>ATG Games</title>','<title>戰神賽特2 瀏覽器模擬版</title>');
    }
    return ctx.reply(text,record.mime||'text/plain');
  }};
})();
