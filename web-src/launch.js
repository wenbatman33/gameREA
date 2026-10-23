(async () => {
  const status = document.querySelector('p');
  try {
    if (!('serviceWorker' in navigator)) throw new Error('此瀏覽器無法啟動試玩，請改用新版 Chrome、Edge 或 Safari。');
    const catalog=await (await fetch('./games.json',{cache:'no-store'})).json();
    const registration=await navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'});
    await registration.update();
    await navigator.serviceWorker.ready;
    await new Promise((resolve,reject) => {
      let polling;
      const cleanup=()=>{clearTimeout(timer);clearInterval(polling);navigator.serviceWorker.removeEventListener('controllerchange',check);};
      const timer=setTimeout(()=>{cleanup();reject(new Error('試玩環境啟動逾時，請重新整理。'));},60000);
      const check=()=>{
        if(!navigator.serviceWorker.controller)return;
        const channel=new MessageChannel();
        channel.port1.onmessage=event=>{
          channel.port1.close();
          if(event.data===catalog.buildId){cleanup();resolve();}
        };
        navigator.serviceWorker.controller.postMessage('build-id',[channel.port2]);
      };
      navigator.serviceWorker.addEventListener('controllerchange',check);
      polling=setInterval(check,500);
      check();
    });
    const params=new URLSearchParams(location.search);
    const game=catalog.games.find(g=>g.provider===params.get('provider')&&g.slug===params.get('game'));
    if (!game) throw new Error('找不到這款遊戲。');
    status.textContent='正在載入遊戲…';
    const base=new URL(`v/${game.provider}/${game.slug}/`,location.href);
    location.replace(new URL(game.entry.replace(/^\//,''),base));
  } catch(error) {
    status.textContent=error.message;
    document.querySelector('a').hidden=false;
  }
})();
