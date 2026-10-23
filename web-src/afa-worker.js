/* AFA captured original frontend + browser-local ordinary card-draw simulation. */
self.GAME_PROVIDERS=self.GAME_PROVIDERS||{};
(()=>{'use strict';
const sessions=new Map(),queues=new Map(),counts=[1,3,5,10,15,20,30,50,100];

function localArt(o,base){if(Array.isArray(o))return o.map(x=>localArt(x,base));if(o&&typeof o==='object')return Object.fromEntries(Object.entries(o).map(([k,v])=>[k,localArt(v,base)]));if(typeof o==='string'&&o.startsWith('https://storge.afagaming.cc/'))return base+'remote-assets/storge.afagaming.cc/'+new URL(o).pathname.replace(/^\//,'');return o}
function table(pack){return{ArcadeID:pack.PackInfo.ID,AgentID:0,Number:1,TableNumber:'LOCAL',PlayerLimit:10,PlayerCount:0,BurstRate:0,URNoDraw:0,SSRNoDraw:0,SSRAvgDraw:0,Popularity:0}}
// Serialize each browser client/game before reading or writing its durable fake wallet.
function serial(key,task){const previous=queues.get(key)||Promise.resolve();const run=previous.catch(()=>{}).then(task);const pending=run.then(()=>{},()=>{});queues.set(key,pending);pending.then(()=>{if(queues.get(key)===pending)queues.delete(key)});return run}
function walletLocation(ctx,gid){const scope=new URL(ctx.base||ctx.virtualBase);const client=ctx.clientId;if(!client)throw Error('A local browser client is required');return{name:'game-rea-afa-state-v1:'+scope.href,key:new URL('_local/afa-state/'+encodeURIComponent(client)+'/'+encodeURIComponent(gid),scope).href}}
async function loadWallet(location){const identity=location.name+'|'+location.key;if(sessions.has(identity))return structuredClone(sessions.get(identity));const cache=await caches.open(location.name);const saved=await cache.match(location.key);if(!saved)return{balance:250000000,draws:0,accBet:0,accWin:0};const value=await saved.json();if(value.version!==1||!['balance','draws','accBet','accWin'].every(k=>Number.isSafeInteger(value[k])&&value[k]>=0))throw Error('Invalid local fake wallet');return{balance:value.balance,draws:value.draws,accBet:value.accBet,accWin:value.accWin}}
async function saveWallet(location,state){const cache=await caches.open(location.name);await cache.put(location.key,new Response(JSON.stringify({version:1,...state}),{headers:{'Content-Type':'application/json','Cache-Control':'no-store'}}));sessions.set(location.name+'|'+location.key,structuredClone(state))}
function randomUnit(){const n=new Uint32Array(1);crypto.getRandomValues(n);return n[0]/4294967296}
function weighted(cards){const total=cards.reduce((n,c)=>n+Number(c.Weight),0);let point=randomUnit()*total;for(const card of cards){point-=Number(card.Weight);if(point<0)return card}return cards[cards.length-1]}
self.GAME_PROVIDERS.afa={async handle(request,pathWithQuery,ctx){
 const m=ctx.metadata,pack=m.pack,gid=m.slug,path=new URL(String(pathWithQuery).replace(/^\//,''),'https://virtual.invalid/');let route=decodeURIComponent(path.pathname).replace(/^\//,'');
 if(route==='help')return ctx.reply('<!doctype html><meta charset="utf-8"><h2>本機假後端</h2><p>一般抽卡使用虛擬餘額與加權抽樣；特殊獎勵尚未還原。</p><button onclick="parent.postMessage({type:\'close\'},location.origin)">繼續</button>','text/html; charset=utf-8');
 if(route.startsWith('api/v1/')){
  let location;try{location=walletLocation(ctx,gid)}catch(e){return ctx.reply(JSON.stringify({Data:null,Err:'LOCAL_CLIENT_REQUIRED'}),'application/json',400)}
  return serial(location.name+'|'+location.key,async()=>{
  const s=await loadWallet(location);
  let form={};if(request.method==='POST'){try{form=await request.json();if(!form||Array.isArray(form)||typeof form!=='object')throw Error()}catch(e){return ctx.reply(JSON.stringify({Data:null,Err:'INVALID_LOCAL_JSON'}),'application/json',400)}}else form=Object.fromEntries(path.searchParams);
  let data=null,err=null;
  switch(route){
   case'api/v1/auth/login':data={AccessToken:'browser-local-'+gid,NickName:'BROWSER LOCAL DEMO',Currency:'COP',CurrencySymbol:'$',Balance:s.balance,RuleURL:ctx.virtualBase+'help',Setting:{},JackpotState:Object.fromEntries([['UR',10],['SSR',50],['SR',200],['R',500],['N',999]].map(([k,n])=>[k,{Count:0,CollectCount:n}]))};break;
   case'api/v1/auth/balance':case'api/v1/auth/me':data={Balance:s.balance,KickAt:null};break;
   case'api/v1/packs/query':data={Packs:[gid]};break;
   case'api/v1/packs/info':data={Packs:!form.GameIDs||form.GameIDs.includes(gid)?[pack]:[]};break;
   case'api/v1/table/arcade/query':data={Count:1,Arcades:[table(pack)],Pagination:{Page:1,PageSize:1,TotalCount:1,TotalPages:1,HasNextPage:false,HasPrevPage:false}};break;
   case'api/v1/packs/select':if(form.GameID&&form.GameID!==gid)err='LOCAL_GAME_SCOPE_MISMATCH';else data={GameID:gid,ArcadeID:table(pack).ArcadeID};break;
   case'api/v1/table/records':data={Records:[],NextSameLevelCount:0};break;
   case'api/v1/player/history':case'api/v1/player/history/detail':data={Records:[],Pagination:{Page:1,PageSize:20,TotalCount:0,TotalPages:0}};break;
   case'api/v1/packs/play':{
    const count=form.Count===undefined?1:form.Count,mult=form.Multiplier||1;
    if(!Number.isInteger(count)||!counts.includes(count)||!Number.isInteger(mult)||!pack.PackInfo.Config.Multipliers.includes(mult)||(form.RuleType||0)!==0){err='UNSUPPORTED_LOCAL_MODE';break}
    const bet=pack.PackInfo.Bet*mult*(pack.PackInfo.MathID==='divinepack'?1:count);
    if(bet>s.balance){err='1004';break}
    const results=Array.from({length:count},()=>{const card=weighted(pack.Modes.normal.Cards);return{Type:1,CardInfo:card,Win:card.WinAmount}});
    const win=results.reduce((n,r)=>n+r.Win,0)*mult;s.balance+=win-bet;s.draws+=count;s.accBet+=bet;s.accWin+=win;
    data={Balance:s.balance,TransactionID:'LOCAL-'+crypto.randomUUID(),Result:{AccTotalBet:s.accBet,AccTotalWin:s.accWin,TotalBet:bet,TotalWin:win,PackID:pack.PackInfo.ID,Main:{TotalBet:bet,TotalWin:win,WinResults:results,Multiplier:mult,IsDivineTriggered:false}}};break;
   }
   default:return ctx.reply(JSON.stringify({Data:null,Err:'UNSUPPORTED_LOCAL_ENDPOINT'}),'application/json',404);
  }
  await saveWallet(location,s);
  return ctx.reply(JSON.stringify({Data:localArt(data,ctx.virtualBase),Err:err}),'application/json; charset=utf-8');
  }).catch(error=>{console.error('AFA local fake wallet storage failed',error);return ctx.reply(JSON.stringify({Data:null,Err:'LOCAL_STATE_STORAGE_FAILED'}),'application/json',503)});
 }
 if(route==='ca2501'||route==='ca2501/')route='ca2501/index.html';
 const record=m.files[route];if(!record)return null;
 const mime=record.mime||'application/octet-stream';if(!/(javascript|json|html|css|text\/)/.test(mime))return ctx.read(record);
 let body=await ctx.text(record);
 if(route==='ca2501/src/settings.dffed.json'){const config=JSON.parse(body);config.settings.ServerHttp=ctx.virtualBase+'api/v1';config.settings.Encrypt=false;body=JSON.stringify(config)}
 else if(route==='ca2501/src/polyfills.bundle.5adbf.js'){const wrapper='!function(t){"function"==typeof define&&define.amd?define(t):t()}';body=body.replace(wrapper,'!function(t){t()}')}
 else if(route==='ca2501/assets/main/index.f8304.js'){
  const begin=body.indexOf('System.register("chunks:///_virtual/GameInfoPopup.ts"');if(begin>=0){let end=body.indexOf('System.register(',begin+16);if(end<0)end=body.length;const needle='{key:"_tryToOpen",value:function(){';const part=body.slice(begin,end).replace(needle,needle+'return;');body=body.slice(0,begin)+part+body.slice(end)}
 }
 else if(route==='ca2501/index.html'){
  body=body.replace(/<script\s+async\s+src="https:\/\/txlobby[^"]+"\s*><\/script>/g,'').replace('<title>AFA Gaming</title>','<title>AFA 瀏覽器假後端研究版</title>').replace('<body>','<body><div style="position:fixed;top:0;left:0;z-index:9999;color:white;background:#17212b;padding:3px 8px;font:12px sans-serif">瀏覽器假資料 · 一般抽卡試作</div>');if(ctx.quiet)body=`<script src="${new URL('development-mute.js',ctx.base).href}"></script>`+body;
 }
 body=body.split('https://storge.afagaming.cc/').join(ctx.virtualBase+'remote-assets/storge.afagaming.cc/');
 return ctx.reply(body,mime);
}};
})();
