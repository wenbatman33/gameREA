/* Read a privately exported Chrome HAR; retain only the three public card packs.
 * Usage: node tools/extract-afa-packs.cjs /private/capture.har
 * Never commit HAR files. Authentication data stays in process memory.
 */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
if(!process.argv[2])throw Error('Pass a private HAR path');
const har=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const root=path.resolve(__dirname,'..'),keys=new Set(),targets=new Set(['CA261119','CA261141','CA261130']),packs=new Map();
for(const e of har.log.entries){const u=new URL(e.request.url);if(u.hostname==='game.afagaming.cc'&&u.searchParams.has('token')){const t=u.searchParams.get('token');keys.add(t.repeat(Math.ceil(16/t.length)).slice(0,16));}}
let decoded=0;
for(const e of har.log.entries){const u=new URL(e.request.url);if(u.hostname!=='game.api.afagaming.cc'||e.response.status!==200)continue;
 let data;try{data=JSON.parse(e.response.content.text)}catch{continue}
 if(typeof data==='string'){const ciphertext=data;data=null;for(const key of keys){try{const d=crypto.createDecipheriv('aes-128-ecb',Buffer.from(key),null);data=JSON.parse(Buffer.concat([d.update(Buffer.from(ciphertext,'base64')),d.final()]).toString());break}catch{}}}
 if(!data)continue;decoded++;
 if(u.pathname.endsWith('/auth/login')){const t=data.Data?.AccessToken;if(typeof t==='string'&&t.length)keys.add(t.repeat(Math.ceil(16/t.length)).slice(0,16));}
 if(u.pathname.endsWith('/packs/info'))for(const p of data.Data?.Packs||[])if(targets.has(p.PackInfo?.GameID))packs.set(p.PackInfo.GameID,p);
}
fs.mkdirSync(path.join(root,'fixtures'),{recursive:true});
for(const [gid,p]of packs)fs.writeFileSync(path.join(root,'fixtures',gid+'.json'),JSON.stringify(p,null,2));
console.log(JSON.stringify({decodedResponses:decoded,retainedPublicPacks:[...packs.keys()],credentialsRetained:false}));
