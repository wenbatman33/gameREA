const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.join(__dirname,'..'),worker=fs.readFileSync(path.join(__dirname,'afa-worker.js'),'utf8');
const durableCaches=new Map();let failNextPut=false;
const storage={async open(name){if(!durableCaches.has(name))durableCaches.set(name,new Map());const records=durableCaches.get(name);return{async match(key){const value=records.get(String(key));return value?new Response(value,{headers:{'Content-Type':'application/json'}}):undefined},async put(key,response){await new Promise(r=>setTimeout(r,2));if(failNextPut){failNextPut=false;throw Error('Simulated cache quota failure')}records.set(String(key),await response.text())}}}};
function boot(){const c={self:{},Map,URL,Uint32Array,Array,Object,Number,JSON,structuredClone,Response,caches:storage,crypto:{getRandomValues(a){a[0]=0;return a},randomUUID(){return'fixture-id'}},console:{...console,error(){}}};vm.createContext(c);vm.runInContext(worker,c);return c}
let c=boot();
const reply=(body,mime,status=200)=>new Response(body,{status,headers:{'Content-Type':mime}});
(async()=>{for(const gid of ['CA261119','CA261141','CA261130']){
 const pack=JSON.parse(fs.readFileSync(path.join(root,'research/havespring/fixtures',gid+'.json'),'utf8'));pack.PackInfo.Config.Rules=[];
 const ctx={base:'https://local/app/',metadata:{slug:gid,pack,files:{}},clientId:'A',virtualBase:'https://local/app/v/afa/'+gid+'/',quiet:false,reply};
 async function api(endpoint,form={},client='A'){return(await c.self.GAME_PROVIDERS.afa.handle(new Request('https://local/'+endpoint,{method:'POST',body:JSON.stringify(form)}),'api/v1/'+endpoint,{...ctx,clientId:client})).json()}
 assert.strictEqual((await api('auth/login')).Data.Balance,250000000);
 const one=await api('packs/play',{Count:1,Multiplier:1,RuleType:0});assert.strictEqual(one.Err,null);assert.strictEqual(one.Data.Result.Main.WinResults.length,1);assert.strictEqual(one.Data.Result.TotalBet,pack.PackInfo.Bet);assert.strictEqual(one.Data.Result.TotalWin,0);
 const ten=await api('packs/play',{Count:10,Multiplier:1,RuleType:0});const tenBet=pack.PackInfo.Bet*(pack.PackInfo.MathID==='divinepack'?1:10);assert.strictEqual(ten.Data.Result.TotalBet,tenBet);assert.strictEqual(ten.Data.Result.Main.WinResults.length,10);assert.strictEqual(ten.Data.Balance,250000000-pack.PackInfo.Bet-tenBet);assert.strictEqual(ten.Data.Result.AccTotalBet,pack.PackInfo.Bet+tenBet);
 assert(ten.Data.Result.Main.WinResults[0].CardInfo.ImageURL.startsWith(ctx.virtualBase+'remote-assets/storge.afagaming.cc/'));
 assert.strictEqual((await api('auth/balance',{},'B')).Data.Balance,250000000);
 assert.strictEqual((await api('packs/play',{Count:2,Multiplier:1})).Err,'UNSUPPORTED_LOCAL_MODE');assert.strictEqual((await api('packs/play',{Count:1,Multiplier:1,RuleType:1})).Err,'UNSUPPORTED_LOCAL_MODE');assert.strictEqual((await api('packs/select',{GameID:'FOREIGN'})).Err,'LOCAL_GAME_SCOPE_MISMATCH');assert.strictEqual((await api('auth/balance')).Data.Balance,ten.Data.Balance);
 // A new VM represents a service worker terminated after its idle period.
 c=boot();assert.strictEqual((await api('auth/balance')).Data.Balance,ten.Data.Balance);
 const simultaneous=await Promise.all([1,2,3].map(()=>api('packs/play',{Count:1,Multiplier:1})));
 simultaneous.forEach((r,index)=>{assert.strictEqual(r.Data.Balance,ten.Data.Balance-(index+1)*pack.PackInfo.Bet);assert.strictEqual(r.Data.Result.AccTotalBet,pack.PackInfo.Bet+tenBet+(index+1)*pack.PackInfo.Bet)});
 const settled=simultaneous[2].Data.Balance;c=boot();assert.strictEqual((await api('auth/balance')).Data.Balance,settled);
 failNextPut=true;assert.strictEqual((await api('packs/play',{Count:1,Multiplier:1})).Err,'LOCAL_STATE_STORAGE_FAILED');assert.strictEqual((await api('auth/balance')).Data.Balance,settled);
 c=boot();assert.strictEqual((await api('auth/balance')).Data.Balance,settled);assert.strictEqual((await api('auth/balance',{},'B')).Data.Balance,250000000);
 const other=await c.self.GAME_PROVIDERS.afa.handle(new Request('https://local/balance'),'api/v1/auth/balance',{...ctx,base:'https://local/other/'});assert.strictEqual((await other.json()).Data.Balance,250000000);
 const settings='ca2501/src/settings.dffed.json';ctx.metadata.files[settings]={file:settings,mime:'application/json'};ctx.text=async()=>JSON.stringify({settings:{ServerHttp:'https://remote',Encrypt:true}});const patched=await(await c.self.GAME_PROVIDERS.afa.handle(new Request('https://local/settings'),settings,ctx)).json();assert.strictEqual(patched.settings.ServerHttp,ctx.virtualBase+'api/v1');assert.strictEqual(patched.settings.Encrypt,false);
 ctx.metadata.files['ca2501/index.html']={file:'index.html',mime:'text/html'};ctx.text=async()=>'<html><head><title>AFA Gaming</title></head><body></body></html>';
 for(const quiet of [false,true]){const page=await c.self.GAME_PROVIDERS.afa.handle(new Request(ctx.virtualBase+'ca2501/'),'ca2501/',{...ctx,quiet});const html=await page.text();assert.strictEqual(html.includes('development-mute.js'),quiet);assert(!html.includes('this.suspend()'));}
 console.log(gid+': single/ten draw; worker restart persistence; serialized concurrent draws; storage failure rollback; client/scope isolation PASS');
}
})().catch(e=>{console.error(e);process.exitCode=1});
