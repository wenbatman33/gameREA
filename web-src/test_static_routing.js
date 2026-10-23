/* Read-only static package/SW contract checks. Does not copy runtime assets. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const ROOT=path.resolve(__dirname,'..'),OUTPUT=path.resolve(process.argv[2]||path.join(ROOT,'.static-preview/gameREA'));
const catalog=JSON.parse(fs.readFileSync(path.join(OUTPUT,'games.json'),'utf8'));
const scopeURL='https://static.example/gameREA/';
const listeners={},calls=[],clients=new Map();
let activeCatalog={quiet:false,games:[{provider:'alpha',slug:'one',entry:'/index.html'},{provider:'beta',slug:'two',entry:'/index.html'}]};
const fakeFetch=async input=>{
 const url=typeof input==='string'?input:input.url||input.href;calls.push(url);
 if(url===scopeURL+'games.json')return new Response(JSON.stringify(activeCatalog),{headers:{'Content-Type':'application/json'}});
 return new Response('FETCH '+url,{headers:{'Content-Type':'application/octet-stream'}});
};
const sandbox={self:{registration:{scope:scopeURL},PROVIDER_SCRIPTS:[],clients:{get:async id=>clients.get(id),claim:async()=>{}},addEventListener:(name,callback)=>listeners[name]=callback,skipWaiting:async()=>{}},importScripts:()=>{},fetch:fakeFetch,Response,Request,URL,console:{warn(){},error(){}},setTimeout,clearTimeout};
vm.createContext(sandbox);vm.runInContext(fs.readFileSync(path.join(ROOT,'web-src/sw.js'),'utf8'),sandbox);
function stub(provider){return{handle:async(request,route,ctx)=>{
 if(route==='/null')return null;
 if(route==='/throw')throw new Error('deliberate contract test');
 if(route==='/read-asset')return ctx.read({asset:'assets/test-asset',mime:'image/webp'});
 if(route==='/read-file')return ctx.read({file:'assets/test-file',mime:'application/javascript'});
 if(route==='/read-text')return ctx.reply(await ctx.text({asset:'assets/text'}),'text/plain');
 return ctx.reply(JSON.stringify({provider,route,clientId:ctx.clientId,virtualBase:ctx.virtualBase,quiet:ctx.quiet}),'application/json');
}};}
sandbox.self.GAME_PROVIDERS.alpha=stub('alpha');sandbox.self.GAME_PROVIDERS.beta=stub('beta');
async function request(relative,clientId=''){
 let response;listeners.fetch({request:new Request(new URL(relative,scopeURL)),clientId,resultingClientId:'new-document',respondWith:value=>response=Promise.resolve(value)});return response;
}
let passed=0;function check(label,fn){return Promise.resolve().then(fn).then(()=>{passed++;console.log('PASS '+label);});}
function allFiles(folder){let list=[];for(const entry of fs.readdirSync(folder,{withFileTypes:true})){const item=path.join(folder,entry.name);if(entry.isDirectory())list.push(...allFiles(item));else if(entry.isFile())list.push(item);}return list;}
(async()=>{
 await check('project-subpath virtual routes preserve query',async()=>{const value=await(await request('v/alpha/one/client/index.html?lang=zh')).json();assert.equal(value.route,'/client/index.html?lang=zh');assert.equal(value.virtualBase,scopeURL+'v/alpha/one/');assert.equal(value.quiet,false);});
 clients.set('client-a',{url:scopeURL+'v/alpha/one/client/index.html'});clients.set('client-b',{url:scopeURL+'v/beta/two/game/'});
 await check('controlled clients route same-origin absolute API paths with isolation',async()=>{const a=await(await request('/api/spin?x=1','client-a')).json(),b=await(await request('/api/spin?x=1','client-b')).json();assert.equal(a.provider,'alpha');assert.equal(b.provider,'beta');assert.equal(a.clientId,'client-a');assert.equal(b.clientId,'client-b');assert.equal(a.route,'/api/spin?x=1');});
 await check('launcher, home, catalog and packaged assets bypass game adapters',async()=>{for(const name of ['launch.html?game=one','index.html','assets/some-hash','games.json','launch.js']){const response=await request(name,'client-a');if(name==='games.json')assert.ok((await response.json()).games);else assert.ok((await response.text()).startsWith('FETCH '+scopeURL+name));}});
 await check('both asset record forms retain MIME',async()=>{const a=await request('v/alpha/one/read-asset'),b=await request('v/alpha/one/read-file');assert.equal(a.headers.get('Content-Type'),'image/webp');assert.equal(b.headers.get('Content-Type'),'application/javascript');assert.ok((await a.text()).includes(scopeURL+'assets/test-asset'));assert.ok((await b.text()).includes(scopeURL+'assets/test-file'));const text=await(await request('v/alpha/one/read-text')).text();assert.ok(text.includes(scopeURL+'assets/text'));});
 await check('unknown games and unmapped resources return 404',async()=>{assert.equal((await request('v/alpha/absent/file')).status,404);assert.equal((await request('v/alpha/one/null')).status,404);});
 await check('adapter failures return readable 503',async()=>{const response=await request('v/alpha/one/throw');assert.equal(response.status,503);assert.equal((await response.json()).error,'DEMO_REQUEST_FAILED');});
 await check('uncontrolled outside-scope URL remains a network request',async()=>{assert.ok((await(await request('/ordinary-website')).text()).startsWith('FETCH https://static.example/ordinary-website'));});
 await check('exactly 20 unique provider/game identities',()=>{assert.equal(catalog.games.length,20);assert.equal(new Set(catalog.games.map(g=>g.provider+':'+g.slug)).size,20);});
 await check('every referenced packaged asset exists; package below 1 GiB',()=>{
  const refs=new Set();
  function scan(value){if(typeof value==='string'&&/^assets\/[a-f\d]{64}$/.test(value))refs.add(value);else if(Array.isArray(value))value.forEach(scan);else if(value&&typeof value==='object')Object.values(value).forEach(scan);}
  scan(catalog);assert.ok(refs.size>100);
  for(const relative of refs){const file=path.resolve(OUTPUT,relative);assert.ok(file.startsWith(OUTPUT+path.sep));assert.ok(fs.statSync(file).isFile(),'Missing '+relative);}
  const files=allFiles(OUTPUT),bytes=files.reduce((sum,file)=>sum+fs.statSync(file).size,0);assert.ok(bytes<1024**3,'Package is '+bytes+' bytes');assert.ok(!files.some(file=>/local-state(?:\.json|\.tmp)$/.test(file)));
  console.log('  '+refs.size+' referenced unique assets; '+bytes+' package bytes.');
 });
 await check('metadata uses local test tokens and no identifiable private launch credentials',()=>{
  function scan(value,label='catalog'){
   if(Array.isArray(value)){value.forEach((v,i)=>scan(v,label+'['+i+']'));return;}
   if(value&&typeof value==='object'){for(const[k,v]of Object.entries(value)){if(/^(?:token|access_token|refresh_token|password|secret|authorization)$/i.test(k)&&typeof v==='string'&&v)assert.ok(/^browser-local(?:-|$)/.test(v),'Unexpected credential at '+label+'.'+k);scan(v,label+'.'+k);}return;}
   if(typeof value==='string'){
    assert.ok(!/local-state\.(json|tmp)/.test(value),'Personal state reference at '+label);
    assert.ok(!/\beyJ[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\b/.test(value),'JWT-like credential at '+label);
   }
  }
  scan(catalog);
  for(const game of catalog.games){const entry=new URL(game.entry,'https://test.invalid/');for(const key of ['t','token','access_token']){const value=entry.searchParams.get(key);if(value)assert.ok(value.startsWith('browser-local'),'Nonlocal launch token in '+game.slug);}
   const demo=entry.searchParams.get('mgckey');if(demo)assert.match(demo,/^stylename@generic~SESSION@[a-f\d-]{36}$/i,'Unexpected PP public-demo launch context');
  }
 });
 await check('release normal audio and development mute are separate build options',async()=>{
  const build=fs.readFileSync(path.join(ROOT,'build_static.py'),'utf8');assert.match(build,/def build\([^\n]*quiet=False\)/);assert.match(build,/add_argument\('--mute',action='store_true'\)/);assert.match(build,/quiet=quiet,games=games/);assert.equal(typeof catalog.quiet,'boolean');
  const seth=fs.readFileSync(path.join(ROOT,'web-src/seth-worker.js'),'utf8');assert.match(seth,/backgroundVolume:0\.5,effectVolume:0\.8/);assert.match(seth,/if\(quiet\)configured\.advancedSettings\.sounds=\{backgroundVolume:0,effectVolume:0\}/);
  activeCatalog.quiet=true;vm.runInContext('manifest=null',sandbox);
  const quietResponse=await(await request('v/alpha/one/index.html')).json();assert.equal(quietResponse.quiet,true);
  activeCatalog.quiet=false;vm.runInContext('manifest=null',sandbox);
  const releaseResponse=await(await request('v/alpha/one/index.html')).json();assert.equal(releaseResponse.quiet,false);
  console.log('  Existing preview quiet='+catalog.quiet+'; release build defaults quiet=false.');
 });
 console.log(passed+' static checks passed. Credential pattern checks do not prove provenance of arbitrary opaque strings.');
})().catch(error=>{console.error(error);process.exitCode=1;});
