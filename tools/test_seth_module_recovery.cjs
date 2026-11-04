// Differential fixtures execute synthetic inputs only, never the original game.
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path'),vm=require('node:vm');
const {pathToFileURL}=require('node:url');
const parser=require('./seth-recovery/node_modules/@babel/parser');
const traverse=require('./seth-recovery/node_modules/@babel/traverse').default;
const {transformModule}=require('./restore_seth_modules.cjs');
function fixture(name,imports,body){return `System.register(${JSON.stringify(name)},${JSON.stringify(imports)},function(publish,context){'use strict';${body}});`;}
async function recover(sources,externals={}){
 const dir=await fs.mkdtemp(path.join(os.tmpdir(),'seth-esm-fixture-'));
 const modules=[];
 for(const [name,code] of Object.entries(sources)){
  const ast=parser.parse(code);traverse(ast,{CallExpression(p){if(p.node.callee.object?.name==='System')modules.push({scope:'fixture',name,imports:p.node.arguments[1].elements.map(e=>e.value),factory:p.get('arguments.2')});}});
 }
 for(const m of modules){let code=transformModule(m,modules).replace(/from "\.\/fixture-([^";]+)"/g,'from "./fixture-$1.mjs"');for(const name of Object.keys(externals))code=code.replaceAll('from '+JSON.stringify(name),'from '+JSON.stringify('./external-'+name.replaceAll('/','-')+'.mjs'));await fs.writeFile(path.join(dir,'fixture-'+m.name.replace(/\.ts$/,'')+'.mjs'),code);}
 for(const [name,code] of Object.entries(externals))await fs.writeFile(path.join(dir,'external-'+name.replaceAll('/','-')+'.mjs'),code);
 return {modules,load:name=>import(pathToFileURL(path.join(dir,'fixture-'+name.replace(/\.ts$/,'')+'.mjs')).href),dispose:()=>fs.rm(dir,{recursive:true,force:true})};
}
function systemFixture(sources){
 const records={};
 for(const code of Object.values(sources))vm.runInNewContext(code,{System:{register(name,deps,factory){records[name]={deps,factory,ns:{},status:0,consumers:[]};}}});
 for(const [name,r] of Object.entries(records))r.instance=r.factory((key,value)=>{if(typeof key==='object'){Object.assign(r.ns,key);}else r.ns[key]=value;for(const fn of r.consumers)fn(r.ns);return typeof key==='object'?key:value;},{meta:{url:name},import:()=>{throw Error('unused');}});
 for(const r of Object.values(records))r.deps.forEach((dep,i)=>{const d=records[dep.replace(/^\.\//,'')],setter=r.instance.setters?.[i];if(setter){d.consumers.push(setter);setter(d.ns);}});
 function load(name){const r=records[name];if(r.status===0){r.status=1;for(const d of r.deps)load(d.replace(/^\.\//,''));r.instance.execute();r.status=2;}return r.ns;}
 return {load};
}
test('live exports update consumers and imported functions retain undefined this',async()=>{
 const sources={
  'A.ts':fixture('A.ts',[],`var value=1;return {execute:function(){publish('value',value);publish('advance',function(){publish('value',++value);});publish('receiver',function(){return this;});}};`),
  'B.ts':fixture('B.ts',['./A.ts'],`var value,advance,receiver;return {setters:[function(ns){value=ns.value;advance=ns.advance;receiver=ns.receiver;}],execute:function(){publish('read',function(){return value;});publish('advance',function(){advance();});publish('receiver',function(){return receiver();});}};`)
 };
 const restored=await recover(sources);try{for(const loader of [systemFixture(sources),restored]){const b=await loader.load('B.ts');assert.equal(b.read(),1);b.advance();assert.equal(b.read(),2);assert.equal(b.receiver(),undefined);}}finally{await restored.dispose();}
});
test('cyclic imports observe undefined exports instead of ESM temporal dead zones',async()=>{
 const sources={
  'A.ts':fixture('A.ts',['./B.ts'],`var before;return {setters:[function(ns){before=ns.before;}],execute:function(){publish('answer',42);publish('observed',before);}};`),
  'B.ts':fixture('B.ts',['./A.ts'],`var answer;return {setters:[function(ns){answer=ns.answer;}],execute:function(){publish('before',answer);}};`)
 };
 const restored=await recover(sources);try{for(const loader of [systemFixture(sources),restored]){const a=await loader.load('A.ts');assert.equal(a.answer,42);assert.equal(a.observed,undefined);}}finally{await restored.dispose();}
});
test('object exports and updates remain callable and live',async()=>{
 const sources={'A.ts':fixture('A.ts',[],`return {execute:function(){publish({value:7,update:function(){publish('value',9);}});}};`)};
 const restored=await recover(sources);try{const a=await restored.load('A.ts');assert.equal(a.value,7);a.update();assert.equal(a.value,9);}finally{await restored.dispose();}
});
test('System context.meta.url uses the recovered module URL',async()=>{
 const restored=await recover({'A.ts':fixture('A.ts',[],`return {execute:function(){publish('url',context.meta.url);}};`)});try{const a=await restored.load('A.ts');assert.match(a.url,/fixture-A\.mjs$/);}finally{await restored.dispose();}
});
test('rejects imported locals mutated outside a setter rather than silently corrupting code',async()=>{
 await assert.rejects(()=>recover({'A.ts':fixture('A.ts',['cc'],`var imported;return {setters:[function(ns){imported=ns.value;}],execute:function(){imported=3;}};`)}),/Imported local assigned outside setter/);
});
test('removes dead decoder alias closure after literal decoding, refuses remaining dynamic calls',async()=>{
 const safe=await recover({'A.ts':fixture('A.ts',[],`var decoder=_0x2df2;return {execute:function(){var alias=decoder;function inner(){var nested=alias;return 'decoded';}publish('value',inner());}};`)});
 try{assert.equal((await safe.load('A.ts')).value,'decoded');}finally{await safe.dispose();}
 await assert.rejects(()=>recover({'A.ts':fixture('A.ts',[],`var decoder=_0x2df2;return {execute:function(){publish('unknown',decoder(123));}};`)}),/Unresolved decoder use/);
});
test('recovered ES5 constructors instantiate ES6 engine classes and preserve subclass prototype',async()=>{
 const sources={
  'Base.ts':fixture('Base.ts',[],`return {execute:function(){publish('Component',class Component {constructor(value){this.baseValue=value;}identify(){return this.baseValue;}});publish('inheritsLoose',function(Sub,Super){Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Object.setPrototypeOf(Sub,Super);});}};`),
  'Child.ts':fixture('Child.ts',['./Base.ts'],`var Base,inherit;return {setters:[function(ns){Base=ns.Component;inherit=ns.inheritsLoose;}],execute:function(){publish('Child',function(Parent){function Child(value){var self=Parent.call(this,value)||this;self.ownValue=value+1;return self;}inherit(Child,Parent);Child.prototype.label=function(){return Parent.prototype.identify.call(this)+':'+this.ownValue;};return Child;}(Base));}};`),
  'Grandchild.ts':fixture('Grandchild.ts',['./Base.ts','./Child.ts'],`var inherit,Child;return {setters:[function(ns){inherit=ns.inheritsLoose;},function(ns){Child=ns.Child;}],execute:function(){publish('Grandchild',function(Parent){function Grandchild(){var self=Parent.call.apply(Parent,[this].concat(Array.from(arguments)))||this;self.grand=true;return self;}inherit(Grandchild,Parent);return Grandchild;}(Child));}};`)
 };
 const restored=await recover(sources);try{const {Grandchild}=await restored.load('Grandchild.ts');const {Child}=await restored.load('Child.ts');const {Component}=await restored.load('Base.ts');const instance=new Grandchild(5);assert.equal(instance.label(),'5:6');assert.equal(instance.grand,true);assert.ok(instance instanceof Grandchild);assert.ok(instance instanceof Child);assert.ok(instance instanceof Component);}finally{await restored.dispose();}
});
test('setter-based forwarded exports remain live through a barrel module',async()=>{
 const sources={
  'A.ts':fixture('A.ts',[],`var value=2;return {execute:function(){publish('value',value);publish('update',function(){publish('value',5);});}};`),
  'B.ts':fixture('B.ts',['./A.ts'],`return {setters:[function(ns){var exports={};exports.forwarded=ns.value;exports.update=ns.update;publish(exports);} ],execute:function(){}};`)
 };
 const restored=await recover(sources);try{for(const loader of [systemFixture(sources),restored]){const b=await loader.load('B.ts');assert.equal(b.forwarded,2);b.update();assert.equal(b.forwarded,5);}}finally{await restored.dispose();}
});

test('extracts original RF UUIDs with dotted and bracket property access',async()=>{
 const sources={
 'A.ts':fixture('A.ts',[],`return {execute:function(){cc.cclegacy._RF.push({},'795ectCR+xAdoFwPWTEG66t','Example');}};`),
 'B.ts':fixture('B.ts',[],`return {execute:function(){cc['cclegacy']['_RF']["push"]({},'f51e2eQyQ9DX4AnIonRHuFB','Example');}};`)
 };
 const restored=await recover(sources);try{assert.equal(restored.modules[0].uuid,'795ectCR+xAdoFwPWTEG66t');assert.equal(restored.modules[1].uuid,'f51e2eQyQ9DX4AnIonRHuFB');}finally{await restored.dispose();}
});
test('engine debug compatibility reuses actual Editor and Web builtins, with original Web fallback',async()=>{
 for(const [editor,builtinPresent] of [[true,true],[false,false],[false,true]]){
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'seth-debug-bridge-'));
  try{
   const ast=parser.parse(fixture('debug-view-runtime-control.ts',[],`return {execute:function(){publish('DebugViewRuntimeControl',class OriginalDebug {static recovered=true;});}};`));let factoryPath;traverse(ast,{CallExpression(p){if(p.node.callee.object?.name==='System')factoryPath=p.get('arguments.2');}});
   const m={scope:'main',name:'debug-view-runtime-control.ts',imports:[],factory:factoryPath};
   const code=transformModule(m,[m]).replace(/from "cc\/env"/g,'from "./env.mjs"').replace(/from "cc"/g,'from "./cc.mjs"');
   await fs.writeFile(path.join(dir,'debug.mjs'),code);
   await fs.writeFile(path.join(dir,'env.mjs'),`export const EDITOR=${editor};`);
   await fs.writeFile(path.join(dir,'cc.mjs'),`const builtin=class EditorDebug {static builtin=true;};export const js={getClassById:()=>${builtinPresent?'builtin':'undefined'},getClassByName:()=>${builtinPresent?'builtin':'undefined'}};`);
   const {DebugViewRuntimeControl:Debug}=await import(pathToFileURL(path.join(dir,'debug.mjs')).href);
   assert.equal(builtinPresent?Debug.builtin:Debug.recovered,true);
  }finally{await fs.rm(dir,{recursive:true,force:true});}
 }
});

test('literal-null Vec3 preserves captured 3.7 numeric semantics without changing object overloads or Node.setPosition',async()=>{
 // Minimal 3.8 constructor semantics copied from the installed engine's Vec3.
 const cc=`export class Vec3 {constructor(x,y,z){if(typeof x==='object'){this.x=x.x;this.y=x.y;this.z=x.z;}else{this.x=x||0;this.y=y||0;this.z=z||0;}}}`;
 const sources={'A.ts':fixture('A.ts',['cc'],`var V;return {setters:[function(ns){V=ns.Vec3;}],execute:function(){publish('make',function(y){return new V(null,y,null);});publish('copy',function(v){return new V(v);});publish('set',function(node,y){node.setPosition(null,y,null);});}};`)};
 const restored=await recover(sources,{cc});
 function legacyVec3(x,y,z){return x&&typeof x==='object'?{x:x.x,y:x.y,z:x.z}:{x:x||0,y:y||0,z:z||0};}
 try{const a=await restored.load('A.ts');for(const y of [-515,-550,23])assert.deepEqual({...a.make(y)},legacyVec3(null,y,null));assert.deepEqual({...a.copy({x:7,y:8,z:9})},{x:7,y:8,z:9});const positions=[];a.set({setPosition(...args){positions.push(args);}},-1000);assert.deepEqual(positions,[[null,-1000,null]]);assert.equal(restored.modules[0].legacyNullVec3Rewrites.length,1);}finally{await restored.dispose();}
});

test('incoming pooled Node tweens retain 3.7 activation semantics; unrelated 3.8 tweens keep binding',()=>{
 const {restoreLegacyIncomingTweenBinding}=require('./restore_seth_modules.cjs');
 const generate=require('./seth-recovery/node_modules/@babel/generator').default;
 // Installed 3.8 ActionManager pauses inactive Node targets before their first set action.
 // An incoming set({active:true}) cannot run unless that legacy tween opts out of binding.
 const ast=parser.parse(`import * as cc from 'cc';var p={};
 p.showNormalSymbolsIn=function(node,done){cc.tween(node).set({active:true}).call(done).start();};
 p.showTurboSymbolsIn=function(node,done){(0,cc.tween)(node).set({active:true}).call(function(){cc.tween(node).call(done).start();}).start();};
 p.unrelated=function(node,done){cc.tween(node).set({active:true}).call(done).start();};`,{sourceType:'module'});
 const changes=restoreLegacyIncomingTweenBinding(ast.program);
 assert.equal(changes.length,3);assert.deepEqual(changes.map(c=>c.method),['showNormalSymbolsIn','showTurboSymbolsIn','showTurboSymbolsIn']);
 ast.program.body.shift();
 const cc={tween(target){let bind=true;const actions=[];const chain={bindNodeState(value){bind=value;return chain;},set(value){actions.push(()=>Object.assign(target,value));return chain;},call(callback){actions.push(callback);return chain;},start(){if(bind&&!target.active)return chain;actions.forEach(fn=>fn());return chain;}};return chain;}};
 const context={cc};vm.runInNewContext(generate(ast).code,context);
 for(const method of ['showNormalSymbolsIn','showTurboSymbolsIn']){let completed=0;const node={active:false};context.p[method](node,()=>completed++);assert.equal(node.active,true);assert.equal(completed,1);}
 let completed=0;const other={active:false};context.p.unrelated(other,()=>completed++);assert.equal(other.active,false);assert.equal(completed,0);
});

test('diagnostics summarize circular engine accessor objects, isolate their own errors, and gate mask probe',async()=>{
 const source=await fs.readFile(path.join(__dirname,'seth-recovery/symbol-diagnostics.js'),'utf8');
 for(const query of ['?reaDebug=1','?reaDebug=1&reaProbeMask=off','?reaProbeMask=off']){
  const messages=[],failures=[],cyclic={};cyclic.self=cyclic;
  const mask={enabled:true,enabledInHierarchy:true,type:0,inverted:false,subComp:null};
  const zero={x:0,y:0,z:0},one={x:1,y:1,z:1};
  const cc={Mask:class Mask{},Graphics:class Graphics{},UIOpacity:class UIOpacity{},UITransform:class UITransform{},Camera:class Camera{},isValid:()=>true};
  const node={name:'symbol',active:true,activeInHierarchy:true,layer:33554432,position:zero,worldPosition:zero,scale:one,worldScale:one,getSiblingIndex:()=>0,getComponent:type=>type===cc.Mask?mask:null,children:[],scene:{getComponentsInChildren:()=>[]}};
  const sprite={node,enabled:true,enabledInHierarchy:true,color:{r:255,g:255,b:255,a:255},spriteFrame:null,getRenderMaterial:()=>null,_canRender:()=>true,renderData:{isValid:()=>cyclic,vertexCount:4,indexCount:6,dataLength:4,chunk:{bufferId:1,vertexOffset:0,vb:new Float32Array(9)}}};
  const component={node,data:{getData:()=>({parser:{view1D:Array(30)}})},symbolsMap:new Map([[0,{node,symbolSprite:sprite}]]),outSymbolMap:new Map(),scheduleOnce:()=>{}};
  const context={URLSearchParams,Float32Array,location:{search:query},__dependency_1:cc,App:{pool:{getPool:()=>({size:60})}},console:{info:(...args)=>messages.push(args),error:(...args)=>failures.push(args)}};
  vm.runInNewContext(source,context);context.__recoverySymbolTrace(component,'createSymbols:exit');
  assert.equal(mask.enabled,query!=='?reaDebug=1&reaProbeMask=off');
  if(query.includes('reaDebug=1')){
   const log=messages.find(row=>row[0]==='[Seth recovery symbols]');assert.ok(log);assert.equal(JSON.parse(log[1]).sample[0].renderState.valid,true);assert.equal(failures.length,0);
   component.data.getData=()=>{throw Error('diagnostic getter fixture');};assert.doesNotThrow(()=>context.__recoverySymbolTrace(component,'test'));assert.match(failures[0][1],/diagnostic getter fixture/);
  }else assert.equal(messages.length,0);
 }
});
