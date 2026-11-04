// Recover editable ESM from inert System.register factories; never execute input.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const deps=path.join(__dirname,'seth-recovery/node_modules/');
const parser=require(deps+'@babel/parser'),traverse=require(deps+'@babel/traverse').default;
const generate=require(deps+'@babel/generator').default,t=require(deps+'@babel/types');
function discoverModules(source){
const root=path.resolve(__dirname,'..');
const sources=[];
for(const file of fs.readdirSync(path.join(source,'extracted'))){if(file.endsWith('.js'))sources.push({scope:file.split('-')[0],file:path.join(source,'extracted',file)});}
const mirror=path.join(source,'mirror/play.godeezone1.com/egames/22020103b31b7390f07b1551e8538589b5e51967/game/src/chunks/bundle.js');
sources.push({scope:'shared',file:mirror});
const modules=[];
for(const item of sources){
 const text=fs.readFileSync(item.file,'utf8'),ast=parser.parse(text);
 traverse(ast,{CallExpression(p){const c=p.node;if(!t.isMemberExpression(c.callee)||!t.isIdentifier(c.callee.object,{name:'System'})||!['register'].includes(c.callee.computed?c.callee.property.value:c.callee.property.name))return;
 if(!t.isStringLiteral(c.arguments[0])||!t.isArrayExpression(c.arguments[1]))return;
 const factory=p.get('arguments.2');if(!factory.isFunctionExpression())return;
 modules.push({...item,name:c.arguments[0].value.split('/').at(-1),imports:c.arguments[1].elements.map(x=>x.value),factory,textHash:crypto.createHash('sha256').update(text).digest('hex')});
 }});
}
return modules;
}
const key=m=>m.scope+'-'+m.name.replace(/\.ts$/,'').replace(/\.js$/,'')+'.ts';
function removeDecodedAliases(factory){
 // The decoder calls were already replaced by literals in extracted inputs.
 // Delete only alias declarators whose entire transitive use is other aliases.
 const aliases=new Set(),declarators=new Set();
 let changed=true;
 while(changed){changed=false;factory.traverse({VariableDeclarator(p){
  if(!t.isIdentifier(p.node.id)||!t.isIdentifier(p.node.init))return;
  const source=p.scope.getBinding(p.node.init.name);
  if((p.node.init.name==='_0x2df2'&&(!source||source.path.isFunctionDeclaration()))||aliases.has(source)){
   const binding=p.scope.getBinding(p.node.id.name);
   if(!aliases.has(binding)){aliases.add(binding);declarators.add(p);changed=true;}
  }
 }});}
 for(const binding of aliases){
  if(binding.constantViolations.length)throw Error('Decoder alias reassigned: '+binding.identifier.name);
  for(const ref of binding.referencePaths)if(!ref.parentPath.isVariableDeclarator()||!declarators.has(ref.parentPath)||ref.key!=='init')throw Error('Unresolved decoder use: '+binding.identifier.name);
 }
 for(const p of declarators){const declaration=p.parentPath;p.remove();if(declaration.node&&declaration.node.declarations.length===0)declaration.remove();}
 factory.scope.crawl();
 factory.traverse({ReferencedIdentifier(p){if(p.node.name==='_0x2df2')throw Error('Unresolved decoder reference in recovered factory');}});
 return aliases.size;
}
function bridgeNativeSuper(program){
 let changed=0;const constructors=new Set();
 const property=n=>n.computed?n.property.value:n.property.name;
 traverse(t.file(program),{CallExpression(p){
  let callee=p.node.callee;if(t.isSequenceExpression(callee))callee=callee.expressions.at(-1);
  if(!t.isMemberExpression(callee)||property(callee)!=='inheritsLoose')return;
  const [subclass,superclass]=p.node.arguments;
  if(!t.isIdentifier(subclass)||!t.isIdentifier(superclass))return;
  const ctor=p.scope.getBinding(subclass.name)?.path;
  if(!ctor?.isFunctionDeclaration()||constructors.has(ctor.node))return;
  constructors.add(ctor.node);
  const parentBinding=p.scope.getBinding(superclass.name);
  ctor.traverse({CallExpression(q){
   if(q.getFunctionParent()!==ctor)return;
   const n=q.node,c=n.callee; if(!t.isMemberExpression(c))return;
   let args;
   if(t.isIdentifier(c.object,{name:superclass.name})&&q.scope.getBinding(superclass.name)===parentBinding){
    if(!t.isThisExpression(n.arguments[0]))return;
    if(property(c)==='call')args=t.arrayExpression(n.arguments.slice(1));
    else if(property(c)==='apply')args=n.arguments[1]||t.arrayExpression([]);
   }else if(property(c)==='apply'&&t.isMemberExpression(c.object)&&property(c.object)==='call'&&t.isIdentifier(c.object.object,{name:superclass.name})&&q.scope.getBinding(superclass.name)===parentBinding){
    const supplied=n.arguments[1];
    if(!supplied)throw Error('Unrecognized super.call.apply arguments');
    args=t.callExpression(t.memberExpression(t.cloneNode(supplied,true),t.identifier('slice')),[t.numericLiteral(1)]);
   }
   if(args){q.replaceWith(t.callExpression(t.memberExpression(t.identifier('Reflect'),t.identifier('construct')),[t.identifier(superclass.name),args,t.logicalExpression('||',t.metaProperty(t.identifier('new'),t.identifier('target')),t.identifier(subclass.name))]));changed++;q.skip();}
  }});
 }});
 return changed;
}
function directSetterExports(setter,publishName){
 const objectExports=new Map(),result=[];let found=false,unknown=false;
 const parameter=setter.node.params[0]?.name;
 const field=n=>t.isIdentifier(n)&&!n.computed?n.name:t.isStringLiteral(n)?n.value:null;
 const member=n=>t.isMemberExpression(n)&&t.isIdentifier(n.object,{name:parameter})?(n.computed?t.isStringLiteral(n.property)?n.property.value:null:n.property.name):null;
 function expression(n){
  if(t.isSequenceExpression(n)){n.expressions.forEach(expression);return;}
  if(t.isUnaryExpression(n,{operator:'void'}))return;
  if(t.isAssignmentExpression(n)&&t.isMemberExpression(n.left)&&t.isIdentifier(n.left.object)&&objectExports.has(n.left.object.name)){
   const exported=n.left.computed?field(n.left.property):n.left.property.name, imported=member(n.right);
   if(!exported||!imported){unknown=true;return;}objectExports.get(n.left.object.name).push({exported,imported});return;
  }
  if(t.isCallExpression(n)&&t.isIdentifier(n.callee,{name:publishName})){
   found=true;
   if(t.isStringLiteral(n.arguments[0])&&member(n.arguments[1]))result.push({exported:n.arguments[0].value,imported:member(n.arguments[1])});
   else if(t.isIdentifier(n.arguments[0])&&objectExports.has(n.arguments[0].name))result.push(...objectExports.get(n.arguments[0].name));
   else unknown=true;
   return;
  }
  unknown=true;
 }
 for(const statement of setter.node.body.body){
  if(t.isVariableDeclaration(statement)){for(const d of statement.declarations){if(t.isIdentifier(d.id)&&t.isObjectExpression(d.init)&&d.init.properties.length===0)objectExports.set(d.id.name,[]);else unknown=true;}}
  else if(t.isExpressionStatement(statement))expression(statement.expression);else unknown=true;
 }
 if(!found)return null;
 if(unknown)throw Error('Setter reexport has unsupported side effects');
 return result;
}
function normalizeLegacyNullVec3(program){
 const ccNamespaces=new Set();
 for(const node of program.body)if(t.isImportDeclaration(node)&&node.source.value==='cc')for(const specifier of node.specifiers)if(t.isImportNamespaceSpecifier(specifier))ccNamespaces.add(specifier.local.name);
 const changes=[];
 traverse(t.file(program),{NewExpression(p){const node=p.node,callee=node.callee;
  if(!t.isMemberExpression(callee)||!t.isIdentifier(callee.object)||!ccNamespaces.has(callee.object.name)||(callee.computed?callee.property.value:callee.property.name)!=='Vec3'||!t.isNullLiteral(node.arguments[0]))return;
  const original=generate(node).code;node.arguments[0]=t.numericLiteral(0);
  t.addComment(node,'leading',' Captured Creator 3.7 Vec3(null,y,z) uses numeric x=0; select that same overload in 3.8. ');
  changes.push({original,reconstructed:generate(node).code,reason:'3.7 constructor checks x && typeof x===object; 3.8 checks typeof x===object and null would select copy overload.'});
 }});
 return changes;
}
function restoreLegacyIncomingTweenBinding(program){
 // Captured 3.7 Tween never binds Node activation; 3.8.7+ defaults to binding.
 // Incoming symbols are deliberately pooled inactive until the first set action.
 const namespaces=new Set(program.body.filter(n=>t.isImportDeclaration(n)&&n.source.value==='cc').flatMap(n=>n.specifiers.filter(t.isImportNamespaceSpecifier).map(s=>s.local.name)));
 const changes=[];
 traverse(t.file(program),{AssignmentExpression(p){
  const left=p.node.left,right=p.get('right');
  if(!t.isMemberExpression(left)||!right.isFunctionExpression())return;
  const method=left.computed?left.property.value:left.property.name;
  if(!['showNormalSymbolsIn','showTurboSymbolsIn'].includes(method))return;
  right.traverse({CallExpression(q){
   let callee=q.node.callee;if(t.isSequenceExpression(callee))callee=callee.expressions.at(-1);
   if(!t.isMemberExpression(callee)||!t.isIdentifier(callee.object)||!namespaces.has(callee.object.name)||(callee.computed?callee.property.value:callee.property.name)!=='tween')return;
   const original=generate(q.node).code;
   q.replaceWith(t.callExpression(t.memberExpression(t.cloneNode(q.node,true),t.identifier('bindNodeState')),[t.booleanLiteral(false)]));
   t.addComment(q.node,'leading',' Preserve captured 3.7 incoming tween behavior for pooled inactive Nodes (3.8.7+ binds activation by default). ');
   changes.push({method,original});q.skip();
  }});
 }});
 return changes;
}
function bridgeLocalJackpotContinuation(program){
 let patched=0;
 traverse(t.file(program),{AssignmentExpression(p){
  const left=p.node.left,right=p.node.right;
  if(!t.isMemberExpression(left)||(left.computed?left.property.value:left.property.name)!=='createFlow'||!t.isFunctionExpression(right))return;
  if(right.body.body.length!==2||!t.isVariableDeclaration(right.body.body[0])||!t.isExpressionStatement(right.body.body[1]))throw Error('Unexpected original spin-completion dispatch shape');
  const branch=right.body.body.pop();
  right.body.body.push(...parser.parse(`const __continueOriginal=()=>{};if(continueAfterLocalJackpot(e,o&&!a&&!i&&!u,dispatch,__dependency_9.GameEvent,__continueOriginal))return;__continueOriginal();`,{sourceType:'module',allowReturnOutsideFunction:true}).program.body);
  right.body.body[1].declarations[0].init.body.body.push(branch);patched++;
 }});
 if(patched!==1)throw Error('Expected exactly one spin-completion createFlow for local JP bridge');
 program.body.unshift(t.importDeclaration([t.importSpecifier(t.identifier('continueAfterLocalJackpot'),t.identifier('continueAfterLocalJackpot'))],t.stringLiteral('../../local-backend/LocalJackpotContinuation')));
}
function restoreLegacyEffectsTweenBinding(program){
 const namespaces=new Set(program.body.filter(n=>t.isImportDeclaration(n)&&n.source.value==='cc').flatMap(n=>n.specifiers.filter(t.isImportNamespaceSpecifier).map(s=>s.local.name)));
 const changes=[];const field=n=>n.computed?n.property.value:n.property.name;
 const bool=n=>t.isBooleanLiteral(n)?n.value:t.isUnaryExpression(n,{operator:'!'})&&t.isNumericLiteral(n.argument)?!n.argument.value:null;
 traverse(t.file(program),{AssignmentExpression(p){
  const left=p.node.left,right=p.get('right');
  if(!t.isMemberExpression(left)||!['showTimesMoving','showCloneTimesMoving'].includes(field(left))||!right.isFunctionExpression())return;
  const inactive=new Set(),onStartActive=new Set();
  right.traverse({AssignmentExpression(q){const n=q.node;if(!t.isMemberExpression(n.left)||field(n.left)!=='active'||!t.isIdentifier(n.left.object))return;const binding=q.scope.getBinding(n.left.object.name);if(!binding)return;
   if(bool(n.right)===false)inactive.add(binding);
   const fn=q.getFunctionParent();if(bool(n.right)===true&&fn?.parentPath.isObjectProperty()&&(fn.parentPath.node.key.name||fn.parentPath.node.key.value)==='onStart')onStartActive.add(binding);
  }});
  right.traverse({CallExpression(q){let callee=q.node.callee;if(t.isSequenceExpression(callee))callee=callee.expressions.at(-1);const target=q.node.arguments[0];
   if(!t.isMemberExpression(callee)||!t.isIdentifier(callee.object)||!namespaces.has(callee.object.name)||field(callee)!=='tween'||!t.isIdentifier(target))return;
   const binding=q.scope.getBinding(target.name);if(!inactive.has(binding)||!onStartActive.has(binding))return;
   changes.push({method:field(left),target:target.name});q.replaceWith(t.callExpression(t.memberExpression(t.cloneNode(q.node,true),t.identifier('bindNodeState')),[t.booleanLiteral(false)]));t.addComment(q.node,'leading',' Preserve captured 3.7 inactive flying-node tween: its own onStart activates this node. ');q.skip();
  }});
 }});
 if(changes.length!==3)throw Error('Expected exactly three inactive EffectsView flying-node tweens');
 return changes;
}
function bridgeLocalResumeProgress(program){
 let init=0,next=0;
 traverse(t.file(program),{AssignmentExpression(p){const left=p.node.left,right=p.node.right;if(!t.isMemberExpression(left)||!t.isFunctionExpression(right))return;
  const name=left.computed?left.property.value:left.property.name;
  if(name==='setNewInitData'){
   right.body.body.unshift(...parser.parse(`if(e.localBackend===true&&e.isResuming&&Number.isInteger(e.localResumeIndex)){if(e.localResumeIndex<0||e.localResumeIndex>=e.engine.gameState.length)throw new RangeError('Invalid local resume stage');this.currSpinIndex=e.localResumeIndex;}`,{sourceType:'module'}).program.body);init++;
  }
  if(name==='setNextSpinData'){
   right.body.body.push(...parser.parse(`const __localRuntime=globalThis.SethCreatorLocalBackend;if(__localRuntime&&typeof __localRuntime.markStage==='function')__localRuntime.markStage(this.data.spinId,this.currSpinData.currentView);`,{sourceType:'module'}).program.body);next++;
  }
 }});
 if(init!==1||next!==1)throw Error('Expected exactly one local resume initialization and advancement method');
}
function distinguishLocalJackpotAmounts(program){
 let changes=0;const field=n=>n.computed?n.property.value:n.property.name;
 traverse(t.file(program),{AssignmentExpression(p){const left=p.node.left,right=p.get('right');if(!t.isMemberExpression(left)||!['showJp','showJpResult'].includes(field(left))||!right.isFunctionExpression())return;
  const method=field(left);right.node.body.body.unshift(...parser.parse('const __jpAmounts=jackpotPresentationAmounts(this.data.getData().gameState);',{sourceType:'module'}).program.body);
  right.traverse({VariableDeclarator(q){const n=q.node;if(!t.isMemberExpression(n.init)||field(n.init)!=='totalWinnings')return;n.init=t.memberExpression(t.identifier('__jpAmounts'),t.identifier('popup'));changes++;},CallExpression(q){const n=q.node;if(!t.isIdentifier(n.callee,{name:'dispatch'})||!t.isMemberExpression(n.arguments[0]))return;const event=field(n.arguments[0]);let key;if(['UPDATE_TOTAL_WINNINGS','QUICK_STOP_TOTAL_WINNINGS'].includes(event))key='trophy';else if(['UPDATE_WIN_AMOUNT','QUICK_STOP_WIN_AMOUNT'].includes(event))key='reel';else return;
   const formatted=parser.parseExpression('+__dependency_6.CmmSlotUtils.formatJPNumber(__jpAmounts.'+key+',false,false,'+(method==='showJp'?'i':'e')+')');
   const data=n.arguments[1].properties.find(x=>field({property:x.key,computed:x.computed})==='data');if(method==='showJp')data.value.properties.find(x=>(x.key.name||x.key.value)==='value').value=formatted;else data.value=formatted;changes++;
  }});
 }});if(changes!==6)throw Error('Expected exactly two jackpot amount sources and four display dispatches');
 program.body.unshift(t.importDeclaration([t.importSpecifier(t.identifier('jackpotPresentationAmounts'),t.identifier('jackpotPresentationAmounts'))],t.stringLiteral('../../local-backend/LocalJackpotContinuation')));
}
function useLocalRetriggerGrant(program){
 let changes=0;const field=n=>n.computed?n.property.value:n.property.name;
 traverse(t.file(program),{AssignmentExpression(p){if(!t.isMemberExpression(p.node.left)||field(p.node.left)!=='nextSpinFlow'||!p.get('right').isFunctionExpression())return;
  p.get('right').traverse({BinaryExpression(q){const n=q.node;if(n.operator!=='>='||!t.isNumericLiteral(n.right,{value:3})||!t.isMemberExpression(n.left)||field(n.left)!=='length'||!t.isCallExpression(n.left.object)||!t.isMemberExpression(n.left.object.callee)||field(n.left.object.callee)!=='filter')return;
   const original=t.cloneNode(n,true);q.replaceWith(parser.parseExpression('o.localRules === true ? Number.isInteger(o.localExtraFreeRounds) && o.localExtraFreeRounds > 0 : '+generate(original).code));t.addComment(q.node,'leading',' Local backend already applies golden/ordinary scatter qualification and free-round caps. ');changes++;q.skip();
  }});
 }});if(changes!==1)throw Error('Expected exactly one nextSpinFlow scatter qualification');return changes;
}
function preserveZeroJackpotPoolUpdates(program){
 let changes=0;const field=n=>n.computed?n.property.value:n.property.name;
 traverse(t.file(program),{AssignmentExpression(p){const left=p.node.left,right=p.get('right');if(!t.isMemberExpression(left)||field(left)!=='setJackpotValue'||!right.isFunctionExpression())return;
  right.traverse({LogicalExpression(q){const n=q.node;if(n.operator!=='&&'||!t.isIdentifier(n.left)||!t.isCallExpression(n.right)||!t.isMemberExpression(n.right.callee)||field(n.right.callee)!=='dynamicEasingTime'||!t.isIdentifier(n.right.arguments[1],{name:n.left.name}))return;
   const value=t.cloneNode(n.left);n.left=t.logicalExpression('&&',t.callExpression(t.memberExpression(t.identifier('Number'),t.identifier('isFinite')),[t.cloneNode(value)]),t.binaryExpression('>=',t.cloneNode(value),t.numericLiteral(0)));changes++;
  }});
 }});
 if(changes!==1)throw Error('Expected exactly one jackpot pool-value guard');
 return changes;
}
function instrumentSymbolDiagnostics(program){
 traverse(t.file(program),{CallExpression(p){const node=p.node,event=node.arguments[0],callback=node.arguments[1];
  if(!t.isMemberExpression(event)||(event.computed?event.property.value:event.property.name)!=='CLICK_GAME_LOADING_CONFIRM_BTN'||!t.isFunctionExpression(callback))return;
  const creation=callback.body.body.find(statement=>t.isExpressionStatement(statement)&&t.isCallExpression(statement.expression)&&t.isMemberExpression(statement.expression.callee)&&(statement.expression.callee.computed?statement.expression.callee.property.value:statement.expression.callee.property.name)==='createSymbols');
  if(!creation)throw Error('Cannot identify SymbolView CLICK listener owner for diagnostics');
  callback.body.body.unshift(t.expressionStatement(t.callExpression(t.identifier('__recoverySymbolTrace'),[t.cloneNode(creation.expression.callee.object,true),t.stringLiteral('CLICK_GAME_LOADING_CONFIRM_BTN:received')])));
 }});
 const phases=new Set(['onLoad','start','createSymbolPool','createSymbols','showSymbolsOut','showNormalSymbolsIn']);
 traverse(t.file(program),{AssignmentExpression(p){const left=p.node.left,right=p.node.right;if(!t.isMemberExpression(left)||!t.isFunctionExpression(right))return;
  const name=left.computed?left.property.value:left.property.name;if(!phases.has(name))return;
  const trace=phase=>t.expressionStatement(t.callExpression(t.identifier('__recoverySymbolTrace'),[t.thisExpression(),t.stringLiteral(phase)]));
  right.body.body.unshift(trace(name+':enter'));right.body.body.push(trace(name+':exit'));
 }});
 const helper=parser.parse(fs.readFileSync(path.join(__dirname,'seth-recovery/symbol-diagnostics.js'),'utf8')).program.body;
 program.body.push(...helper);
}
function transformModule(m,modules,missing=[]){
 const factory=m.factory;
 m.removedDecoderAliases=removeDecodedAliases(factory);
const contextParameter=factory.node.params[1];
if(contextParameter){
 const contextBinding=factory.scope.getBinding(contextParameter.name);
 for(const ref of contextBinding?.referencePaths||[]){
  const parent=ref.parentPath;
  if(!parent.isMemberExpression()||parent.node.computed)throw Error('Unsupported System context use in '+m.name);
  const property=parent.node.property.name;
  if(property==='meta')parent.replaceWith(t.metaProperty(t.identifier('import'),t.identifier('meta')));
  else if(property==='import')parent.replaceWith(t.arrowFunctionExpression([t.identifier('specifier')],t.callExpression(t.import(),[t.identifier('specifier')])));
  else throw Error('Unsupported System context property '+property);
 }
}
const ret=factory.get('body.body').find(p=>p.isReturnStatement()),obj=ret.get('argument');
 const properties=obj.get('properties');const setters=(properties.find(p=>(p.node.key.name||p.node.key.value)==='setters')?.get('value.elements')||[]);
 const execute=properties.find(p=>(p.node.key.name||p.node.key.value)==='execute').get('value');
 const imports=[];const removed=new Set();const setterExecutions=[];const reexports=new Map();
 // Published bundles execute main before loading framework/game components.
 // Reconstructed independent modules must state eager global dependencies.
 const requiresApplication=(m.scope==='main'&&['UIColor.ts','UILabel.ts','UIRichText.ts','UISprite.ts','UIi18n.ts'].includes(m.name))||(m.scope==='framework'&&m.name==='SlotApplication.ts');
 if(requiresApplication)imports.push(t.importDeclaration([],t.stringLiteral('./main-Application')));
 if(m.scope==='main'&&m.name==='Application.ts'&&fs.existsSync(path.join(__dirname,'../creator-projects/seth2-recovered/assets/recovered/bootstrap/local-runtime.ts'))){
  imports.unshift(t.importDeclaration([],t.stringLiteral('../bootstrap/local-runtime')));
  m.localRuntimeBootstrap='../bootstrap/local-runtime';
 }
 for(let i=0;i<m.imports.length;i++){
  const name=m.imports[i];let url=name;
  if(name.startsWith('.')){
   const base=path.basename(name);const target=modules.find(x=>x.scope===m.scope&&x.name===base)||modules.find(x=>x.scope==='main'&&x.name===base)||modules.find(x=>x.scope==='shared'&&x.name===base)||modules.find(x=>x.name===base);
   if(!target){missing.push({module:key(m),import:name});continue;}url='./'+key(target).replace(/\.ts$/,'');
  }
  const ns='__dependency_'+i;imports.push(t.importDeclaration([t.importNamespaceSpecifier(t.identifier(ns))],t.stringLiteral(url)));
  const setter=setters[i];if(!setter||setter.isNullLiteral())continue;
  const param=setter.node.params[0];if(!param)continue;
  setter.traverse({AssignmentExpression(p){
   const n=p.node;if(!t.isIdentifier(n.left))return;
   const ownBinding=p.scope.getBinding(n.left.name);if(ownBinding&&ownBinding.scope!==factory.scope)return;
   let replacement;
   if(t.isMemberExpression(n.right)&&t.isIdentifier(n.right.object,{name:param.name}))replacement=t.memberExpression(t.identifier(ns),t.cloneNode(n.right.property),n.right.computed);
   else if(t.isIdentifier(n.right,{name:param.name}))replacement=t.identifier(ns);
   else throw Error('Unsupported setter RHS '+generate(n.right).code);
   const binding=factory.scope.getBinding(n.left.name);if(!binding)throw Error('Missing setter binding');
   for(const write of binding.constantViolations)if(!write.findParent(q=>q===setter))throw Error('Imported local assigned outside setter: '+n.left.name+' in '+m.name);
   for(const ref of [...binding.referencePaths])if(!ref.findParent(q=>q===setter)){
    const parent=ref.parentPath;
    const indirect=t.isMemberExpression(replacement)&&((parent.isCallExpression()&&parent.node.callee===ref.node)||(parent.isOptionalCallExpression()&&parent.node.callee===ref.node)||(parent.isTaggedTemplateExpression()&&parent.node.tag===ref.node));
    ref.replaceWith(indirect?t.sequenceExpression([t.numericLiteral(0),t.cloneNode(replacement)]):t.cloneNode(replacement));
   }
   removed.add(n.left.name);p.replaceWith(t.unaryExpression('void',t.numericLiteral(0)));
  }});
  const forwards=directSetterExports(setter,factory.node.params[0]?.name);
  if(forwards){for(const {exported,imported} of forwards){
   if(reexports.has(exported))throw Error('Duplicate direct reexport '+exported);
   reexports.set(exported,{imported,url});
  }}else setterExecutions.push({setter,ns});
 }
 const expParam=factory.node.params[0];const exported=new Set();
 if(expParam){const binding=factory.scope.getBinding(expParam.name);for(const ref of binding?.referencePaths||[]){
  if(!ref.parentPath.isCallExpression())throw Error('Noncall export reference');
  const arg=ref.parentPath.node.arguments[0];
  if(t.isStringLiteral(arg))exported.add(arg.value);
  else if(t.isObjectExpression(arg))for(const p of arg.properties)exported.add(p.key.name||p.key.value);
  else if(t.isIdentifier(arg)){
   const local=ref.scope.getBinding(arg.name);if(!local)throw Error('Unknown export object');
   for(const r of local.referencePaths){if(r.parentPath.isMemberExpression()&&r.parentPath.node.object===r.node){const prop=r.parentPath.node.property;exported.add(prop.name||prop.value);}}
  }else throw Error('Dynamic export name');
  ref.replaceWith(t.identifier('__publish'));
 }}
 const declarations=[];
 for(const p of factory.get('body.body')){
  if(p===ret||p.isReturnStatement())continue;
  if(p.isVariableDeclaration()){
   const ds=p.node.declarations.filter(d=>!removed.has(d.id.name));
   if(ds.length)declarations.push(t.variableDeclaration(p.node.kind,ds));
  }else declarations.push(t.cloneNode(p.node,true));
 }
 const exportNames=[...exported].filter(name=>!reexports.has(name));
 for(const [exported,{imported,url}] of reexports)imports.push(t.exportNamedDeclaration(null,[t.exportSpecifier(t.identifier(imported),t.identifier(exported))],t.stringLiteral(url)));
 const exportCode=exportNames.map((n,i)=>`var __export_${i}; export { __export_${i} as ${n==='default'?'default':n} };`).join('\n');
 const cases=exportNames.map((n,i)=>`case ${JSON.stringify(n)}: __export_${i}=value;break;`).join('');
 const helper=exportNames.length?parser.parse(`${exportCode}\nfunction __publish(name,value){if(typeof name==='object'){for(const key of Object.keys(name))__publish(key,name[key]);return name;}switch(name){${cases}default:throw Error('Unknown recovered export '+name);}return value;}`,{sourceType:'module'}).program.body:[];
 const program=t.program([...imports,...helper,...declarations,...setterExecutions.map(({setter,ns})=>t.expressionStatement(t.callExpression(t.cloneNode(setter.node,true),[t.identifier(ns)]))),...execute.node.body.body],[], 'module');
 m.nativeSuperBridges=bridgeNativeSuper(program);
 m.legacyNullVec3Rewrites=normalizeLegacyNullVec3(program);
 if(m.scope==='g1005'&&m.name==='JackpotView.ts')distinguishLocalJackpotAmounts(program);
 if(m.scope==='g1005'&&m.name==='CreateNewSpinCompleteFlowCmd.ts')useLocalRetriggerGrant(program);
 if(m.scope==='framework'&&m.name==='JpBarControllerBase.ts'){preserveZeroJackpotPoolUpdates(program);m.compatibility='Accept finite nonnegative JP pool values including zero; invalid pool updates are ignored without coercion';}
 if(m.scope==='g1005'&&m.name==='EffectsView.ts'){m.legacyEffectsTweenBindings=restoreLegacyEffectsTweenBinding(program);}
 if(m.scope==='g1005'&&m.name==='GameData.ts'){bridgeLocalResumeProgress(program);m.compatibility='Local initial resume cursor and optional local runtime stage progress; nonlocal initialization unchanged';}
 if(m.scope==='g1005'&&m.name==='CreateNewSpinCompleteFlowCmd.ts'){bridgeLocalJackpotContinuation(program);m.compatibility='Local marker only: real JP animation and popup callbacks precede original feature continuation; normal-close and nonlocal routes unchanged';}
 if(m.scope==='g1005'&&m.name==='SymbolView.ts'){m.legacyIncomingTweenBindings=restoreLegacyIncomingTweenBinding(program);instrumentSymbolDiagnostics(program);m.recoveryDiagnostics='Opt-in reaDebug=1 bounded console trace; original gameplay logic unchanged';}
 let output=generate(program,{comments:true,compact:false}).code;
 
 let uuid=null;
 traverse(t.file(program),{CallExpression(p){const n=p.node;const property=node=>node.computed?node.property.value:node.property.name;if(t.isMemberExpression(n.callee)&&property(n.callee)==='push'&&t.isMemberExpression(n.callee.object)&&property(n.callee.object)==='_RF'&&t.isStringLiteral(n.arguments[1]))uuid=n.arguments[1].value;}});
 m.output=key(m);m.uuid=uuid;m.exports=[...new Set([...exportNames,...reexports.keys()])];m.directReexports=[...reexports.keys()];
if(m.scope==='main'&&m.name==='debug-view-runtime-control.ts'){
 m.compatibility='Reuse the real registered Creator DebugViewRuntimeControl by original CID/name in Editor or Web; Web builds lacking that builtin retain the captured implementation';
 const outer=[],runtime=[];
 for(const node of program.body){
  if(t.isImportDeclaration(node)||t.isExportNamedDeclaration(node)||(t.isFunctionDeclaration(node)&&node.id?.name==='__publish')||(t.isVariableDeclaration(node)&&node.declarations.every(d=>t.isIdentifier(d.id)&&d.id.name.startsWith('__export_'))))outer.push(node);
  else runtime.push(node);
 }
 const builtinLookup=parser.parse(`const __creatorBuiltinDebug=js.getClassById(${JSON.stringify(uuid)})||js.getClassByName('internal.DebugViewRuntimeControl');`,{sourceType:'module'}).program.body[0];
 const editor=parser.parse(`if(__creatorBuiltinDebug||__SETH_EDITOR__){if(!__creatorBuiltinDebug)throw Error('Creator editor builtin DebugViewRuntimeControl is unavailable');__publish('DebugViewRuntimeControl',__creatorBuiltinDebug);}`,{sourceType:'module'}).program.body[0];
 editor.alternate=t.blockStatement(runtime);
 outer.unshift(t.importDeclaration([t.importSpecifier(t.identifier('__SETH_EDITOR__'),t.identifier('EDITOR'))],t.stringLiteral('cc/env')),t.importDeclaration([t.importSpecifier(t.identifier('js'),t.identifier('js'))],t.stringLiteral('cc')));
 output='// Capability bridge: reuse a real Editor/Web builtin; absent Web builtin uses the captured implementation.\n'+generate(t.program([...outer,builtinLookup,editor],[],'module'),{comments:true,compact:false}).code;

}
return output;
}
function main({overwriteRestoredSource=false}={}){
const root=path.resolve(__dirname,'..'),source=path.join(root,'research/atg/seth2');
const dest=path.join(root,'creator-projects/seth2-recovered/assets/recovered/scripts');
if(fs.existsSync(dest)&&fs.readdirSync(dest).some(file=>/\.(ts|js)$/.test(file))&&!overwriteRestoredSource)throw Error('Recovered scripts already exist. Preserve editor edits; use --overwrite-restored-source only for an intentional reconstruction.');
fs.mkdirSync(dest,{recursive:true});
const modules=discoverModules(source),missing=[];
for(const m of modules){
 const output=transformModule(m,modules,missing);
 const origin=path.relative(root,m.file);
 const previous=key(m).replace(/\.ts$/,'.js');
 const oldFile=path.join(dest,previous),oldMeta=oldFile+'.meta',newMeta=path.join(dest,key(m))+'.meta';
 if(fs.existsSync(oldMeta)&&!fs.existsSync(newMeta))fs.renameSync(oldMeta,newMeta);
 if(fs.existsSync(oldFile))fs.unlinkSync(oldFile);
 fs.writeFileSync(path.join(dest,key(m)),`// @ts-nocheck\n// Recovered runtime JavaScript; not original TypeScript.\n// Source: ${origin}\n// SHA256: ${m.textHash}\n${output}\n`);
}
const report={status:'ESM reconstruction; editor/runtime verification pending',modules:modules.map(({file,scope,name,output,uuid,exports,textHash,removedDecoderAliases,nativeSuperBridges,compatibility,directReexports,localRuntimeBootstrap,legacyNullVec3Rewrites,legacyIncomingTweenBindings,legacyEffectsTweenBindings,recoveryDiagnostics})=>({source:path.relative(root,file),scope,name,output,uuid,exports,sha256:textHash,removedDecoderAliases,nativeSuperBridges,compatibility,directReexports,localRuntimeBootstrap,legacyNullVec3Rewrites,legacyIncomingTweenBindings,legacyEffectsTweenBindings,recoveryDiagnostics})),missing};
fs.writeFileSync(path.join(root,'research/creator-recovery/seth2-script-map.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({modules:modules.length,missing:missing.length,sampleMissing:missing.slice(0,10)}));
}
module.exports={discoverModules,transformModule,key,removeDecodedAliases,restoreLegacyIncomingTweenBinding,preserveZeroJackpotPoolUpdates,useLocalRetriggerGrant};
if(require.main===module){
 try{
  const {values}=require('node:util').parseArgs({options:{'overwrite-restored-source':{type:'boolean'},help:{type:'boolean'}}});
  if(values.help)console.log('Usage: node tools/restore_seth_modules.cjs [--overwrite-restored-source]\nExisting editable sources are protected by default. The flag explicitly permits replacing later editor/code edits.');
  else main({overwriteRestoredSource:values['overwrite-restored-source']===true});
 }catch(error){console.error(error.message);process.exitCode=1;}
}
