const {chromium}=require('playwright');
const fs=require('node:fs/promises');
const path=require('node:path');
(async()=>{
  const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  const results=[];
  try {
    for(const [slug,splash,spin] of [
      ['sweet-bonanza-pop',[640,637],[640,590]],
      ['gates-of-olympus-2500',[1100,440],[990,650]],
      ['the-dog-house-slot',[1000,300],[990,650]],
    ].filter(g=>!process.env.GAME||g[0]===process.env.GAME)) {
      const context=await browser.newContext({viewport:{width:1280,height:720},serviceWorkers:'block'});
      const page=await context.newPage();
      const result={slug,externalBlocked:[],failures:[],api:[],errors:[]};
      await context.route('**/*',route=>{
        const u=new URL(route.request().url());
        if(u.hostname==='127.0.0.1'||['data:','blob:'].includes(u.protocol)) return route.continue();
        result.externalBlocked.push(route.request().url());return route.abort();
      });
      page.on('pageerror',e=>result.errors.push(String(e)));
      page.on('response',r=>{
        if(r.status()>=400) result.failures.push({url:r.url(),status:r.status()});
        if(r.url().includes('/gameService')) result.api.push({request:r.request().postData(),status:r.status()});
      });
      await page.goto('http://127.0.0.1:18765/play/'+slug,{waitUntil:'domcontentloaded',timeout:20000});
      await page.waitForTimeout(4000);
      await page.screenshot({path:path.join(__dirname,slug+'.local-before.png')});
      await page.mouse.click(...splash);
      await page.waitForTimeout(1800);
      for(let i=0;i<8;i++) {
        if(spin) await page.mouse.click(...spin);else await page.keyboard.press('Space');
        await page.waitForTimeout(3000);
      }
      await page.screenshot({path:path.join(__dirname,slug+'.local-after.png')});
      results.push(result);
      console.log(slug,'API',result.api.map(x=>x.request.match(/action=([^&]+)/)?.[1]+':'+x.status),'failures',result.failures.length);
      await context.close();
    }
  } finally {await browser.close();}
  const file=path.join(__dirname,'local-verification.json');
  let merged=results;
  if(process.env.GAME) {
    try {merged=[...JSON.parse(await fs.readFile(file,'utf8')).filter(r=>r.slug!==process.env.GAME),...results];}catch{}
  }
  await fs.writeFile(file,JSON.stringify(merged,null,2));
  if(results.some(r=>r.failures.length||r.errors.length||r.api.filter(a=>a.request.includes('action=doSpin')&&a.status===200).length<2))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
