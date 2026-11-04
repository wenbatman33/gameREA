// Static dependency and global-usage audit; does not execute source modules.
const fs=require('node:fs'),path=require('node:path');
const parser=require('./seth-recovery/node_modules/@babel/parser');
const traverse=require('./seth-recovery/node_modules/@babel/traverse').default;
const {discoverModules, key}=require('./restore_seth_modules.cjs');
const root=path.resolve(__dirname,'..');
const modules=discoverModules(path.join(root,'research/atg/seth2'));
const resolve=(m,name)=>modules.find(x=>x.scope===m.scope&&x.name===path.basename(name))||modules.find(x=>x.scope==='main'&&x.name===path.basename(name))||modules.find(x=>x.scope==='shared'&&x.name===path.basename(name))||modules.find(x=>x.name===path.basename(name));
const rows=[];
for(const m of modules){
 const source=fs.readFileSync(path.join(root,'creator-projects/seth2-recovered/assets/recovered/scripts',key(m)),'utf8');
 const ast=parser.parse(source,{sourceType:'module'});
 const globals={},actualImports=[];
 for(const node of ast.program.body)if((node.type==='ImportDeclaration'||node.type==='ExportNamedDeclaration')&&node.source)actualImports.push(node.source.value);
 traverse(ast,{ReferencedIdentifier(p){if(!p.scope.getBinding(p.node.name)){const name=p.node.name;globals[name]??={references:0,eagerReferences:0};globals[name].references++;if(!p.getFunctionParent())globals[name].eagerReferences++;}}});
 const local=actualImports.filter(s=>s.startsWith('.')).map(s=>path.normalize(s)+'.ts');
 rows.push({module:key(m),dependencies:[...new Set(local.filter(s=>!s.startsWith('..')))],externalLocalDependencies:local.filter(s=>s.startsWith('..')),originalDependencies:m.imports.filter(s=>s.startsWith('.')).map(s=>key(resolve(m,s))),engineDependencies:actualImports.filter(s=>!s.startsWith('.')),globals});
}
// Tarjan SCC identifies cycles that need live-binding and initialization checks.
let index=0;const indices=new Map(),low=new Map(),stack=[],onStack=new Set(),components=[];
const graph=new Map(rows.map(r=>[r.module,r.dependencies]));
function visit(v){indices.set(v,index);low.set(v,index++);stack.push(v);onStack.add(v);for(const w of graph.get(v)){if(!graph.has(w))continue;if(!indices.has(w)){visit(w);low.set(v,Math.min(low.get(v),low.get(w)));}else if(onStack.has(w))low.set(v,Math.min(low.get(v),indices.get(w)));}if(low.get(v)===indices.get(v)){const group=[];let w;do{w=stack.pop();onStack.delete(w);group.push(w);}while(w!==v);if(group.length>1||graph.get(v).includes(v))components.push(group);}}
for(const v of graph.keys())if(!indices.has(v))visit(v);
const globalSummary={};for(const r of rows)for(const [name,usage] of Object.entries(r.globals)){globalSummary[name]??={references:0,modules:[],eagerModules:[]};globalSummary[name].references+=usage.references;globalSummary[name].modules.push(r.module);if(usage.eagerReferences)globalSummary[name].eagerModules.push(r.module);}
const report={status:'Static audit only; runtime/editor validation tracked separately',moduleCount:rows.length,externalLocalDependencies:rows.flatMap(r=>r.externalLocalDependencies.map(dependency=>({module:r.module,dependency}))),cycles:components,globals:globalSummary,modules:rows,limitations:['Preserves runtime JavaScript in a TypeScript importer container; original types and author names are not recoverable from this input.','var exports reproduce System.register undefined values in cycles; this does not prove evaluation order identical for arbitrary System factories.','Global App/Log/dispatch and third-party libraries require original initialization sequence; no replay backend is attached by this audit.']};
fs.writeFileSync(path.join(root,'research/creator-recovery/seth2-script-semantics.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({modules:rows.length,cycles:components.length,globalNames:Object.keys(globalSummary),eagerApp:globalSummary.App?.eagerModules}));
