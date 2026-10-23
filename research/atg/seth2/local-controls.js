// Diagnostic HTML controls for the synthetic backend; no game art is generated.
(() => {
  const session = new URLSearchParams(location.search).get('t');
  const panel = document.createElement('details');
  panel.style.cssText = 'position:fixed;top:0;left:0;z-index:99999;max-width:100vw;background:#17212b;color:white;padding:6px;font:13px system-ui';
  panel.innerHTML = `<summary>本機假資料 · 模擬設定</summary>
    <form style="display:grid;gap:8px;padding:10px 0">
      <label>中獎機率（%） <input name="winRate" type="number" min="0" max="100" value="30" required style="width:70px"></label>
      <label>中獎時獎金／下注 <input name="payoutMultiplier" type="number" min="0.1" max="100" step="0.1" value="2" required style="width:70px"> 倍</label>
      <label>下一局測試 <select name="nextFeature"><option value="normal">一般回合</option><option value="free">免費遊戲15次</option><option value="awakening">覺醒（含鎖定／分裂樣本）</option><option value="jackpot">JP MINI（合成測試）</option><option value="treasure">寶箱（合成測試）</option></select></label>
      <button type="submit">套用至這個本機工作階段</button>
      <output style="max-width:290px;white-space:normal"></output>
      <small style="max-width:290px;white-space:normal">僅控制假後端。中獎機率不是 RTP；一般回合預期派彩率＝中獎機率×獎金倍數，覺醒測試樣本另計。特殊模式為合成流程，尚待逐項驗證。</small>
    </form>`;
  document.body.append(panel);
  const form = panel.querySelector('form');
  async function configure(data) {
    const response = await fetch('/local-api/configure', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({session,data})});
    const result = await response.json();
    form.querySelector('output').textContent = result.status === 200
      ? `已套用：中獎機率 ${result.winRate}%，派彩 ${result.payoutMultiplier} 倍；下一局 ${result.nextFeature}。`
      : result.message;
    return result;
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const data = new FormData(form);
    try {await configure({winRate:Number(data.get('winRate')),payoutMultiplier:Number(data.get('payoutMultiplier')),nextFeature:data.get('nextFeature')});}
    catch(error) {form.querySelector('output').textContent = '設定未成功：' + error.message;}
  });
  configure({}).then(result => {
    form.elements.winRate.value = result.winRate;
    form.elements.payoutMultiplier.value = result.payoutMultiplier;
    form.elements.nextFeature.value = result.nextFeature;
  }).catch(()=>{});
})();
