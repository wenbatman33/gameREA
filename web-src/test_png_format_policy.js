// Regression: forcing PNG broke already captured AVIF client resources.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const scope={self:{},URL,structuredClone,Response,Request};
vm.runInNewContext(fs.readFileSync(__dirname+'/png-worker.js','utf8'),scope);
(async()=>{
 const handler=scope.self.GAME_PROVIDERS.png.handle;
 for(const fallback of [false,true]){
  const metadata={slug:'format-test',forceRasterFallback:fallback,files:{'cdn.playngonetwork.com/config.json':{mime:'application/json'}}};
  const ctx={metadata,virtualBase:'https://our-host.test/gameREA/v/png/format-test/',base:'https://our-host.test/gameREA/',text:async()=>'{"hasAvif":true,"hasWebp":true,"hasJp2":true}',reply:(b,m)=>new Response(b,{headers:{'Content-Type':m}})};
  const result=await(await handler(new Request(ctx.virtualBase+'o/cdn.playngonetwork.com/config.json'),'/o/cdn.playngonetwork.com/config.json',ctx)).json();
  assert.equal(result.hasAvif,!fallback);assert.equal(result.hasWebp,!fallback);assert.equal(result.hasJp2,!fallback);
 }
 console.log('PASS captured AVIF policy is preserved; PNG-only acquisitions explicitly select local fallback assets');
})().catch(e=>{console.error(e);process.exitCode=1;});
