const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),crypto=require('crypto');
(async()=>{
const gid=process.argv[2]; const root=path.join(__dirname,gid);fs.mkdirSync(path.join(root,'bodies'),{recursive:true});
const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const c=await b.newContext({viewport:{width:1280,height:720},serviceWorkers:'block'});const page=await c.newPage();
const responses=[],errors=[],pending=[],websockets=[];let phase='load';
page.on('websocket',ws=>{const item={url:ws.url(),frames:[]};websockets.push(item);ws.on('framesent',e=>item.frames.push({direction:'sent',phase,payload:typeof e.payload==='string'?e.payload:e.payload.toString('base64')}));ws.on('framereceived',e=>item.frames.push({direction:'received',phase,payload:typeof e.payload==='string'?e.payload:e.payload.toString('base64')}));});
page.on('pageerror',e=>errors.push(String(e)));
page.on('response',r=>{const task=(async()=>{const req=r.request();const rec={url:r.url(),status:r.status(),method:req.method(),resourceType:req.resourceType(),phase,requestBody:req.postData(),contentType:r.headers()['content-type']};try {const data=await r.body(); const hash=crypto.createHash('sha256').update(data).digest('hex'); const file='bodies/'+hash;fs.writeFileSync(path.join(root,file),data);Object.assign(rec,{file,bytes:data.length,sha256:hash});}catch(e){rec.bodyError=String(e)}responses.push(rec);})();pending.push(task)});
const url='https://released.playngonetwork.com/casino/ContainerLauncher?pid=2&gid='+gid+'&lang=en_GB&practice=1&channel=desktop&demo=2';
await page.goto(url);await page.waitForTimeout(15000);await page.screenshot({path:path.join(root,'tutorial.png')});
phase='continue';await page.mouse.click(640,gid==='bookofdead'?584:gid==='reactoonz'?621:607);await page.waitForTimeout(gid==='wrappinmoregold'?12000:4000);await page.screenshot({path:path.join(root,'ready.png')});
phase='spin';await page.mouse.click(gid==='bookofdead'?907:gid==='reactoonz'?1002:1204,gid==='bookofdead'?660:gid==='reactoonz'?642:630);await page.waitForTimeout(8000);await page.screenshot({path:path.join(root,'after-space.png')});
await Promise.allSettled(pending);fs.writeFileSync(path.join(root,'network.json'),JSON.stringify({gid,url,responses,errors,websockets},null,2));fs.writeFileSync(path.join(root,'dom.html'),await page.content());await b.close();console.log(gid,responses.length,'responses',errors.length,'errors');
})();
