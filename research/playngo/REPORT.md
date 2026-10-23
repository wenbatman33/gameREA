# Play’n GO 三款 Demo 逆向研究

本機研究版已實作：保留官方公開 Demo 前端與實際圖檔，將載入網址改接本機，重播啟動回應，並模擬 SignalR MessagePack 遊戲協定。沒有以色塊、SVG 或 Graphics 生成遊戲素材。

這是可旋轉的協定／資源還原試驗。每款目前重複一局已錄得的「未中獎」盤面，依下注更新虛擬餘額；尚未還原完整隨機數、賠率、免費遊戲、累積獎金或購買功能。因此不可將本版本當作原版機率／RTP 模擬器。

## 開啟方式

在專案根目錄執行：

```sh
python3 research/playngo/offline-server.py 8766
```

開啟 [本機遊戲選單](http://127.0.0.1:8766/)，進入遊戲後按 CONTINUE。Wrappin’ More Gold 要等待約 12 秒開場動畫，再按右下角旋轉。重新整理會重設虛擬餘額。

| 遊戲 | ID | 公開版本 | 官方來源 |
|---|---:|---|---|
| Reactoonz | 333 | 9.4.1-reactoonz.450 | [官方頁](https://www.playngo.com/games/reactoonz) |
| Rich Wilde and the Book of Dead | 310 | 10.8.1-bookofdead.916 | [官方頁](https://www.playngo.com/games/rich-wilde-and-the-book-of-dead) |
| Wrappin’ More Gold | 1001 | 1.4.2-wrappinmoregold.289 | [官方頁](https://www.playngo.com/games/wrappin%27-more-gold) |

## 實際觀察與逆向成果

- 三款官方 ContainerLauncher 使用 `pid=2&practice=1&channel=desktop&demo=2`，在此機器都能完整載入及旋轉。未驗證此機器的出口 IP 位置，因此這不證明所有台灣網路皆可連線。
- 啟動流程為 getgamebygid → prelaunchconfiguration → `ascflyp.playngonetwork.com` 的兩次文字 POST → configuration/v2 → 各款 JavaScript bundle → `/gamehub` WebSocket → 素材與前端。
- HTTP POST 的命令 103 建立 Demo session，101 登入虛擬 DEMO 使用者。
- 遊戲實際使用 SignalR MessagePack WebSocket，而非單純 HTTP JSON。客戶端傳 `ProcessPacket`，服務端傳 `Commands`。外層為 SignalR 長度前綴與 MessagePack，內層為 `d=` 起始的文字行協定。
- 觀察到命令 104 初始化設定、命令 1 旋轉、命令 52 更新餘額。預設餘額 2,500,000 個最小貨幣單位，即 25,000.00 DEMO。預設一局扣 100，即 1.00。
- 本機 server 只讀取已保存的 bodies 與 WebSocket fixture，不向上游送出請求。它會將外部資源 URL 改寫成 localhost；未捕獲的資源回 404。
- 本機設定移除 promocentre 附加模組，以免無登入的促銷 401 與額外 WebSocket 干擾；遊戲本體保留。兩款新載入的 Wrappin 字型亦保存為實際 ttf。

## 驗證

`verify-offline.cjs` 以乾淨 Chrome context 開啟本機版本，封鎖所有非 localhost HTTP 請求，依實際畫面按 CONTINUE 與旋轉兩次，保存前後 PNG、錯誤、HTTP 失敗與 WebSocket 計數。成果位於每個遊戲子目錄中的 `offline-verification.json`、`offline-ready.png`、`offline-after-spin.png` 與 `offline-after-second-spin.png`。

已目視檢查三款本機連續兩局畫面，餘額均為 25000.00 → 24999.00 → 24998.00；所有外部 HTTP 請求均遭封鎖，最終驗證為零錯誤、零 HTTP 失敗、零外連嘗試。第二局的驗證結果另存 JSON 與 PNG；未驗證免費遊戲、其他下注、音效切換、歷史紀錄及長時間自動遊玩。

## REA 證據

REA CLI 固定版本 6.7.0，使用 `capture-browser-scenario` 在自有暫時 Chrome profile 宣告導航與等待動作，保存 DOM、可存取性樹、網路及畫面。REA 的 canvas 操作 selector 無座標，因此後續實際 CONTINUE／旋轉以 Playwright 補充；兩者證據分開保存。

| 證據檔 | Evidence ID |
|---|---|
| reactoonz-evidence.json | ev_29874053cdf635f2fc91916f08cb742eccfb59e8ec482798fae82cd1a6442af2 |
| bookofdead-evidence.json | ev_c22414f837b79888bdae165fd3aecc83e5eadf9a5fc73b8c6c35c9c4d658f307 |
| wrappinmoregold-evidence.json | ev_054058dd09101d247410c5c6d9793f9762dfd48b058d52f0fb2f8fa784d8dc04 |
| static-analysis.json | ev_076e42fd8b69134724b431f1575b6e4a117bfd55387955ff2160090c13474107 |

靜態分析辨識 775 個 JavaScript module、31 個 endpoint 節點及 3,622 個圖邊；完整 JSON 約 147 MB，精簡摘要為 `static-summary.json`。這些是靜態語法推導，不等同每個 module 都實際執行。REA 初次 capture 的 events 標示 incomplete，因部分回應 body 讀取不可得；後續 Playwright 另保存實際取得的完整資源。官方圖片與 bundle 僅供本機研究；未公開發布。

## 檔案

- `manifest.json`：三款一致的名稱、slug、來源、版本、入口、素材量與證據索引。
- `<slug>/network.json`：實際 HTTP 及 WebSocket 捕獲；每個回應引用 SHA-256 bodies 檔案。
- `<slug>/bodies/`：實際下載的程式、PNG/JPG/AVIF、音效、字型、JSON 與 atlas。
- `capture-demo.cjs`：可重跑的公開 Demo 捕獲腳本。
- `offline-server.py`：僅綁定 127.0.0.1 的本機協定／資源重播 server。
- `verify-offline.cjs`：封鎖外連的實際兩局驗證。
