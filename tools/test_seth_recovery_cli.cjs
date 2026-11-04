// Real CLI regression: existing editable sources must survive an accidental rerun.
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),assets=path.join(root,'creator-projects/seth2-recovered/assets/recovered');
function snapshot(){const result={};for(const sub of ['scripts','bootstrap','vendor']){const dir=path.join(assets,sub);for(const entry of fs.readdirSync(dir,{withFileTypes:true}))if(entry.isFile()){const filename=path.join(dir,entry.name);result[path.relative(assets,filename)]=crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');}}return result;}
test('all three reconstruction CLIs reject an accidental overwrite and leave source/meta bytes unchanged',()=>{
 const before=snapshot();assert.ok(Object.keys(before).length>300);
 for(const command of [[process.execPath,'tools/restore_seth_modules.cjs'],['python3','tools/restore_seth_vendor.py'],['python3','tools/restore_seth_bootstrap.py']]){
  const result=spawnSync(command[0],command.slice(1),{cwd:root,encoding:'utf8',timeout:10000});assert.notEqual(result.status,0);assert.match(result.stderr,/--overwrite-restored-source/);assert.deepEqual(snapshot(),before);
 }
});
