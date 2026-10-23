// Capture public demo responses and interaction evidence. No generated game assets.
const { chromium } = require('playwright');
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const root = __dirname;
const games = [
  {slug:'sweet-bonanza-pop', symbol:'vs10swtbnz'},
  {slug:'gates-of-olympus-2500', symbol:'vs20olympmmd'},
  {slug:'the-dog-house-slot', symbol:'vs20doghouse'},
];
(async () => {
  await fs.mkdir(path.join(root,'bodies'),{recursive:true});
  const browser = await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  try {
    for (const game of games.filter(g=>!process.env.GAME || process.env.GAME===g.slug)) {
      const context = await browser.newContext({viewport:{width:1280,height:720},locale:'en-US',serviceWorkers:'block'});
      const page = await context.newPage();
      const records=[], pending=new Set(), errors=[];
      page.on('pageerror',e=>errors.push(String(e)));
      page.on('response',response=>{
        const request=response.request();
        if (!response.url().startsWith('https://demogamesfree.pragmaticplay.net/')) return;
        const task=(async()=>{
          const record={url:response.url(),method:request.method(),requestBody:request.postData(),status:response.status(),contentType:response.headers()['content-type']||'',resourceType:request.resourceType()};
          try {
            const bytes=await response.body();
            record.sha256=crypto.createHash('sha256').update(bytes).digest('hex');
            record.bytes=bytes.length;
            await fs.writeFile(path.join(root,'bodies',record.sha256),bytes);
          } catch(e) {record.error=String(e);}
          records.push(record);
        })(); pending.add(task);task.finally(()=>pending.delete(task));
      });
      try {
        const entry='https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?'+new URLSearchParams({gameSymbol:game.symbol,websiteUrl:'https://demogamesfree.pragmaticplay.net',jurisdiction:'99',lang:'en',cur:'USD'});
        await page.goto(entry,{waitUntil:'domcontentloaded',timeout:30000});
        await page.waitForTimeout(20000);
        await page.screenshot({path:path.join(root,game.slug+'.before.png')});
        await fs.writeFile(path.join(root,game.slug+'.runtime.html'),await page.content());
        console.log(game.slug,'loaded',records.length,'canvas',await page.locator('canvas').count());
        // Splash control observed in the REA screenshot at (640, 637).
        const splash = game.slug==='sweet-bonanza-pop' ? [640,637] : game.slug==='the-dog-house-slot' ? [1000,300] : [1100,440];
        await page.mouse.click(...splash);
        await page.waitForTimeout(5000);
        await page.screenshot({path:path.join(root,game.slug+'.entered.png')});
        await fs.writeFile(path.join(root,game.slug+'.manifest.json'),JSON.stringify({game,entry,finalUrl:page.url(),errors,records},null,2));
        for(let i=0;i<5;i++) {
          if(game.slug==='sweet-bonanza-pop') await page.mouse.click(640,590);
          else await page.keyboard.press('Space');
          await page.waitForTimeout(4500);
        }
        await page.screenshot({path:path.join(root,game.slug+'.after.png')});
        await Promise.allSettled([...pending]);
        await fs.writeFile(path.join(root,game.slug+'.manifest.json'),JSON.stringify({game,entry,finalUrl:page.url(),errors,records},null,2));
        console.log(game.slug,'saved',records.length,'service calls',records.filter(r=>r.url.includes('gameService')).map(r=>r.requestBody?.slice(0,100)));
      } catch(e) {
        await fs.writeFile(path.join(root,game.slug+'.failure.json'),JSON.stringify({error:String(e),records,errors},null,2));
        console.log(game.slug,String(e));
      } finally {await context.close();}
    }
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
