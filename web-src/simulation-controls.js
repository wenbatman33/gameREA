/* Editable local simulation controls, separate from the vendor client. */
(() => {
  const config=window.__LOCAL_SIMULATION__;
  if(!config)return;
  const attach=()=>{
    const panel=document.createElement('details');
    panel.style.cssText='position:fixed;left:4px;top:4px;z-index:2147483647;background:#111e;color:#fff;font:13px/1.5 system-ui;padding:8px;border-radius:5px;max-width:280px';
    const summary=document.createElement('summary');summary.textContent='本機假後端設定';panel.append(summary);
    const note=document.createElement('p');note.textContent='由本機完整回合樣本抽樣；不是原版 RNG／RTP。';panel.append(note);
    const label=document.createElement('label');label.textContent='中獎回合比例 (%) ';
    const rate=document.createElement('input');rate.type='number';rate.min='0';rate.max='100';rate.step='1';rate.value=String(config.winRate??35);rate.style.width='65px';label.append(rate);panel.append(label,document.createElement('br'));
    const next=document.createElement('select');
    for(const[value,text]of [['auto','下一局：依比例抽樣'],['win','下一局：中獎樣本'],['lose','下一局：未中獎樣本']]){const option=document.createElement('option');option.value=value;option.textContent=text;next.append(option);}
    if(config.respin){const option=document.createElement('option');option.value='respin';option.textContent='下一局：重轉樣本';next.append(option);}
    const apply=document.createElement('button');apply.textContent='套用';apply.style.margin='8px';
    const status=document.createElement('p');status.setAttribute('role','status');status.textContent='只影響虛擬回合；進行中的動畫會先完成。';
    apply.addEventListener('click',async()=>{
      apply.disabled=true;
      try{
        const response=await fetch(config.configure,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({winRate:Number(rate.value),nextOutcome:next.value})});
        if(!response.ok)throw Error(await response.text());
        const value=await response.json();status.textContent='已套用，中獎比例 '+value.winRate+'%；虛擬餘額 '+value.balance.toFixed(2);next.value='auto';
      }catch(error){status.textContent='設定未套用：'+error.message;}
      finally{apply.disabled=false;}
    });
    panel.append(next,apply,status);document.body.append(panel);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',attach,{once:true});else attach();
})();
