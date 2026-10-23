// The captured classic-script polyfill must initialize in a page with an AMD loader.
const vm=require('node:vm'),fs=require('node:fs');
(async()=>{
 const original=fs.readFileSync(__dirname+'/afa-public/src/polyfills.bundle.5adbf.js','utf8');
 const response=await fetch('http://127.0.0.1:18766/ca2501/src/polyfills.bundle.5adbf.js');
 if(!response.ok)throw Error('local polyfill unavailable');
 const served=await response.text();
 for(const [name,source]of [['original',original],['served',served]]){
  const context={define:Object.assign(function(){},{amd:{}})};
  vm.runInNewContext(source,context);
  if(name==='original'&&context.regeneratorRuntime!==undefined)throw Error('reproduction changed');
  if(name==='served'&&typeof context.regeneratorRuntime!=='object')throw Error('runtime absent');
 }
 console.log('AMD coexistence regression passed');
})().catch(e=>{console.error(e);process.exitCode=1});
