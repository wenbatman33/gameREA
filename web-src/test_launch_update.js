// A controller may finish updating without another controllerchange event.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
(async()=>{
 let calls=0,target;const listeners=new Map();
 const serviceWorker={register:async()=>({update:async()=>{}}),ready:Promise.resolve(),addEventListener:(n,fn)=>listeners.set(n,fn),removeEventListener:n=>listeners.delete(n),controller:{postMessage:(_,ports)=>ports[0].postMessage(++calls<2?'old-build':'new-build')}};
 const p={textContent:''},link={hidden:true};
 const scope={document:{querySelector:selector=>selector==='p'?p:link},navigator:{serviceWorker},fetch:async()=>({json:async()=>({buildId:'new-build',games:[{provider:'png',slug:'test',entry:'/client/?demo=1'}]})}),MessageChannel,URL,URLSearchParams,location:{href:'https://own.test/gameREA/launch.html?provider=png&game=test',search:'?provider=png&game=test',replace:url=>target=String(url)},setTimeout,clearTimeout,setInterval:fn=>setInterval(fn,5),clearInterval};
 await vm.runInNewContext(fs.readFileSync(__dirname+'/launch.js','utf8'),scope);
 assert(calls>=2);assert.equal(target,'https://own.test/gameREA/v/png/test/client/?demo=1');assert.equal(link.hidden,true);assert.equal(listeners.size,0);
 console.log('PASS launcher waits for the matching build after a silent controller update');
})().catch(e=>{console.error(e);process.exitCode=1;});
