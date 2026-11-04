const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto'),path=require('node:path');
const root=path.resolve(__dirname,'..'),report=JSON.parse(fs.readFileSync(path.join(root,'research/creator-recovery/seth2-vendor-map.json')));
test('restored vendor copies retain captured source SHA256 and settings order',()=>{
 const settings=JSON.parse(fs.readFileSync(path.join(root,report.originalSettings)));
 assert.equal(report.plugins.length,settings.plugins.jsList.length);
 report.plugins.forEach((p,i)=>{assert.equal(p.order,i);assert.ok(p.source.endsWith(settings.plugins.jsList[i]));for(const f of [p.source,p.originalCopy])assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex'),p.sha256);});
});
test('isolation blocks original remote APIs and retains loopback requests',async()=>{
 const source=fs.readFileSync(path.join(root,report.combinedPlugin),'utf8').split('// Original plugin 0:')[0] + '\n}).call(window,window);';
 const calls=[];
 class XHR{open(method,url){calls.push(['xhr',url]);}}
 class Socket{static OPEN=1;constructor(url){calls.push(['socket',url]);}}
 const window={location:{href:'http://127.0.0.1:18769/'},fetch:async url=>{calls.push(['fetch',url]);return {ok:true};},XMLHttpRequest:XHR,WebSocket:Socket};
 vm.runInNewContext(source,{window,URL,Proxy,Reflect,Promise,Error});
 assert.equal((await window.fetch('/local-api')).ok,true);
 await assert.rejects(window.fetch('https://play.godeezone1.com/api/spin'),/Third-party connection blocked/);
 new window.WebSocket('ws://localhost:19000/local');assert.equal(window.WebSocket.OPEN,1);
 assert.throws(()=>new window.WebSocket('wss://upstream.example/game'),/Third-party connection blocked/);
 const xhr=new window.XMLHttpRequest();xhr.open('POST','http://127.0.0.1:18769/game/spin');
 assert.throws(()=>xhr.open('POST','http://192.168.187.150/hotupdate'),/Third-party connection blocked/);
 assert.equal(calls.length,3);
});
test('Request-like inputs use url and diagnostics expose the blocked path without credentials',async()=>{
 const source=fs.readFileSync(path.join(root,report.combinedPlugin),'utf8').split('// Original plugin 0:')[0] + '\n}).call(window,window);';
 const calls=[];const window={location:{href:'http://localhost:18769/'},fetch:async value=>{calls.push(value);return {ok:true};}};
 vm.runInNewContext(source,{window,URL,Proxy,Reflect,Promise,Error});
 const local={url:'http://127.0.0.1:18769/api/spin'};assert.equal((await window.fetch(local)).ok,true);assert.equal(calls[0],local);
 await assert.rejects(window.fetch({url:'https://user:password@upstream.example/api/spin?token=secret#hidden'}),error=>{assert.match(error.message,/https:\/\/upstream\.example\/api\/spin$/);assert.doesNotMatch(error.message,/password|secret|token|hidden/);return true;});
 await assert.rejects(window.fetch('file:///unapproved/project/library/asset.json'),/file:\/\/\/unapproved\/project\/library\/asset.json$/);
});
test('Creator import/native UUID caches permit reads without opening remote hosts or arbitrary file paths',async()=>{
 const source=fs.readFileSync(path.join(root,report.combinedPlugin),'utf8').split('// Original plugin 0:')[0] + '\n}).call(window,window);';
 const calls=[];const window={location:{href:'packages://scene/static/template/3d-webview.html'},fetch:async value=>{calls.push(value);return {ok:true};}};
 const context=vm.createContext({window,URL,Proxy,Reflect,Promise,Error});vm.runInContext(source,context);
 const asset='d032ac98-05e1-4090-88bb-eb640dcb5fc1';
 for(const url of [`import:////d0/${asset}@b47c0.json`,`native:////d0/${asset}.png`])assert.equal((await window.fetch(url)).ok,true);
 for(const url of [`import://evil/d0/${asset}.json`,`import:////aa/${asset}.json`,'import:////../../etc/passwd','native:////etc/passwd','file:///etc/passwd',`https://evil.test/d0/${asset}.json`])await assert.rejects(window.fetch(url),/Third-party connection blocked/);
 await assert.rejects(window.fetch(`import:////d0/${asset}.json`,{method:'POST'}),/Third-party connection blocked/);
 const first=window.fetch;vm.runInContext(source,context);assert.equal(window.fetch,first);assert.equal((await window.fetch(`import:////d0/${asset}.json`)).ok,true);assert.equal(calls.length,3);
});
test('file resources are limited to this project library UUID cache and read methods',async()=>{
 const source=fs.readFileSync(path.join(root,report.combinedPlugin),'utf8').split('// Original plugin 0:')[0] + '\n}).call(window,window);';
 const window={location:{href:'packages://scene/static/template/3d-webview.html'},fetch:async()=>({ok:true})};vm.runInNewContext(source,{window,URL,Proxy,Reflect,Promise,Error});
 const id='6bba4629-1f43-48a0-896a-fe3b7c1122e7';const own=report.localLibraryReadRoot+`6b/${id}@f9941.json`;
 assert.equal((await window.fetch(own)).ok,true);
 await assert.rejects(window.fetch(own,{method:'POST'}),/Third-party connection blocked/);
 for(const url of [own.replace('/library/','/assets/'),own.replace('/library/','/library-other/'),report.localLibraryReadRoot+`00/${id}.json`,'file:///etc/passwd',`file://upstream.example/6b/${id}.json`,new URL('../private.json',report.localLibraryReadRoot).href])await assert.rejects(window.fetch(url),/Third-party connection blocked/);
});
test('self-hosted HTTPS assets and APIs use same origin, with an explicit corresponding WSS policy',async()=>{
 const source=fs.readFileSync(path.join(root,report.combinedPlugin),'utf8').split('// Original plugin 0:')[0] + '\n}).call(window,window);';
 const calls=[];class Socket{constructor(url){calls.push(['socket',url]);}}
 const window={location:{href:'https://games.example.test:8443/seth2/index.html'},fetch:async url=>{calls.push(['fetch',url]);return {ok:true};},WebSocket:Socket};
 vm.runInNewContext(source,{window,URL,Proxy,Reflect,Promise,Error});
 assert.equal((await window.fetch('./assets/game.png')).ok,true);assert.equal((await window.fetch('https://games.example.test:8443/local-api/spin',{method:'POST'})).ok,true);
 new window.WebSocket('wss://games.example.test:8443/game');
 for(const remote of ['https://play.godeezone1.com/api/spin','https://games.example.test:9443/api/spin','http://games.example.test:8443/assets/game.png'])await assert.rejects(window.fetch(remote),/Third-party connection blocked/);
 for(const remote of ['wss://play.godeezone1.com/game','wss://games.example.test:9443/game','ws://games.example.test:8443/game'])assert.throws(()=>new window.WebSocket(remote),/Third-party connection blocked/);
 assert.equal(calls.length,3);
 window.location.href='http://games.example.test/seth2/index.html';
 assert.equal((await window.fetch('/assets/game.png')).ok,true);new window.WebSocket('ws://games.example.test/game');
 assert.throws(()=>new window.WebSocket('wss://games.example.test/game'),/Third-party connection blocked/);assert.equal(calls.length,5);
});
test('Editor and Electron asset pipelines keep their original native networking functions',async()=>{
 const source=fs.readFileSync(path.join(root,report.combinedPlugin),'utf8').split('// Original plugin 0:')[0] + '\n}).call(window,window);';
 for(const marker of [{process:{versions:{electron:'30.5.1',node:'20.18.0'}}},{Editor:{Message:{}}}]){
  const calls=[];const originalFetch=async value=>{calls.push(['fetch',value]);return {ok:true};};
  class XHR{open(method,url){calls.push(['xhr',url]);}}
  class Socket{constructor(url){calls.push(['socket',url]);}}
  const originalOpen=XHR.prototype.open;
  const window={...marker,location:{href:'packages://scene/static/template/3d-webview.html'},fetch:originalFetch,XMLHttpRequest:XHR,WebSocket:Socket};
  vm.runInNewContext(source,{window,URL,Proxy,Reflect,Promise,Error});
  assert.equal(window.fetch,originalFetch);assert.equal(XHR.prototype.open,originalOpen);assert.equal(window.WebSocket,Socket);assert.equal(window.__SETH_RECOVERY_GUARD_V2__,undefined);
  assert.match(window.__SETH_RECOVERY_NETWORK_MODE__,/Web guard not installed/);
  assert.equal((await window.fetch('packages://engine/editor/internal.json')).ok,true);const xhr=new XHR();xhr.open('GET','file:///editor-owned-cache/atlas/source.png');assert.equal(calls.length,2);
 }
});
