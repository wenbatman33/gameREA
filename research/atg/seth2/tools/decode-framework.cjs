// Execute only the isolated string table, decoder and rotation in a bounded VM.
// The game, System.register factories and browser bootstrap are never executed.
const fs = require('node:fs');
const vm = require('node:vm');
const parser = require('/Users/batman_work/.npm/_npx/a1722018f28f9df2/node_modules/@babel/parser');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const frameworkRoot = path.join(root, 'mirror/play.godeezone1.com/slotFramework');
const input = path.join(frameworkRoot, fs.readdirSync(frameworkRoot).find(x => fs.existsSync(path.join(frameworkRoot, x, 'index.js'))), 'index.js');
const source = fs.readFileSync(input, 'utf8');
const ast = parser.parse(source);
const declarations = ast.program.body.filter(n => n.type === 'FunctionDeclaration' && ['_0x2df2', '_0x3143'].includes(n.id.name));
if (declarations.length !== 2) throw Error('Unexpected decoder structure');
const rotation = ast.program.body[1];
if (rotation.type !== 'ExpressionStatement' || rotation.end > 1500) throw Error('Unexpected rotation structure');
const sandbox = vm.createContext({}, {codeGeneration: {strings: false, wasm: false}});
vm.runInContext(declarations.map(n => source.slice(n.start, n.end)).join('\n') + '\n' + source.slice(rotation.start, rotation.end), sandbox, {timeout: 1000});
const aliases = new Set(['_0x2df2']);
for (let change = true; change;) {
  change = false;
  for (const m of source.matchAll(/(_0x[\da-f]+)\s*=\s*(_0x[\da-f]+)\b/g)) {
    if (aliases.has(m[2]) && !aliases.has(m[1])) { aliases.add(m[1]); change = true; }
  }
}
const decoded = source.replace(/(_0x[\da-f]+)\((0x[\da-f]+)\)/g, (all, fn, value) => aliases.has(fn) ? JSON.stringify(sandbox._0x2df2(Number(value))) : all);
fs.writeFileSync(path.join(root, 'framework-decoded.js'), decoded);
let count = 0;
const matches = [...decoded.matchAll(/System\[(?:"register"|'register')\]\(["']chunks:\/\/\/_virtual\/([^"'/]+)["']/g)];
fs.mkdirSync(path.join(root, 'extracted'), {recursive: true});
for (let i = 0; i < matches.length; i++) {
  fs.writeFileSync(path.join(root, 'extracted', 'framework-' + matches[i][1] + '.js'), decoded.slice(matches[i].index, matches[i+1]?.index ?? decoded.length)); count++;
}
console.log(JSON.stringify({aliases: aliases.size, modules: count, outputBytes: decoded.length}));
