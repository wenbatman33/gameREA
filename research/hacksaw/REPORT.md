# Hacksaw Gaming：三款官方試玩逆向調查

調查日期：2026-10-23（Asia/Taipei）。工具：REA CLI 6.7.0、Chrome 155，使用 REA 擁有並清理的暫存瀏覽器。這是本機網路結果，未確認出口 IP，因此不能推論所有台灣 IP 的可用性。

| 遊戲 | 官方 ID | 公開版本 | REA Evidence ID | 結果 |
|---|---|---|---|---|
| Le Bandit | 1309 | 1.26.1 | ev_873ec91fd1c7f4f94a45d64605d5d6b42abe5e478b78c5489a4015bd7b3945ef | 外殼載入，錢包連線錯誤 |
| Wanted Dead Or a Wild | 1067 | 1.75.0 | ev_b338a4b96a009ceb1ccd388f1c1b9d50307550fd30bf7c98608fb93c781947ca | 外殼載入，錢包連線錯誤 |
| Chaos Crew | 1059 | 1.67.1 | ev_a9e6ab752f9d54573e9f955bfcd9c8540ca753836abd08108935c3bd512fbfa6 | 外殼載入，錢包連線錯誤 |

官方入口：https://www.hacksawgaming.com/games 。三款皆由官方目錄的 Try it 啟動。REA 明確執行選遊戲、接受網站 Cookie、官方確認入口與等待載入動作。最後三款截圖已逐一目視檢查，皆顯示「Connection lost to wallet - please try again.」。`*.png` 是原始截圖，並非重繪素材。

## 已觀察的啟動鏈

官方 `dist/bundle.min.js` → `launcher/hacksaw-launcher.min.js` → `launcher/configs/demo.json` → `{gameId}/version.json` → `{gameId}/{version}/index.html` → `casino/hacksaw-casino.min.js`、`ui/hacksaw-ui.min.js`、`main.js`。這些公開資源在瀏覽器回傳 200。啟動參數使用官方程式內的 `partner=demo`、`mode=demo`（轉成 2）、`currency=EUR`、固定公開 Demo token。

`demo.config.json` 宣告遊戲資源位於 `https://static-live.hacksawgaming.com/`，Demo API 位於 `https://rgs-demo.hacksawgaming.com/api`。

## 實際阻礙

三款各自呼叫 `/api/play/partnerSettings` 及 `/api/play/authenticate`，在瀏覽器發生 `net::ERR_FAILED`。Console 明確表示 CORS preflight 回應缺少 `Access-Control-Allow-Origin`。REA 沒有記錄 API 請求的回應 HTTP status，因此不能把它寫成 403 或聲稱地區封鎖。未修改 CORS、未替換真實服務回應，亦未嘗試繞過地區或安全限制。

實際 authenticate 請求包含 seq、partner、gameId、gameVersion、currency、languageCode、mode、branding、channel、userAgent、token，逐款保存於 `initial-requests.json`。尚未取得成功認證或任何旋轉請求／回應，不能宣稱已還原遊戲結果或真實機率。

## 靜態分析與 Mock 可行性

REA 對官方 launcher 進行有界靜態分析，Evidence `ev_3a461221571845ba3043013673d82c530e9b13d2d091ba7a6145dee5635c3116`，保存於 `launcher.static.evidence.json`。這是 inert syntax 分析，不能代表執行覆蓋。

已下載三款實際網路觀察到的公開啟動資源（每款 18 檔，約 4.3–4.5 MB），並保存 SHA-256 與來源 URL。`main.js` 顯示 Haxe/Heaps 風格執行碼與 `assets/desc.json` 素材載入。直接讀取這個程式明列的公開 manifest 後，得到 Le Bandit 352 個素材項目（約 102 MB）、Wanted 607 項（約 186 MB）、Chaos Crew 283 項（約 84 MB）；這些素材大多尚未下載。清單包含 PNG、JPG、KTX2、atlas、字型及影音。沒有生成 SVG 或 Graphics placeholder。

靜態 casino 程式可識別 `/play/bet`、`/play/balance` 等 API，並消費 accountBalance、sessionUuid 等認證欄位；這只能作為假伺服器設計候選，並不足以建立三款成功啟動與旋轉所需的完整回應契約。依素材規則，尚未繼續撰寫遊戲實作。下一個可驗證里程碑需要完整公開素材包及可用的成功 Demo session/network capture，或另行授權針對本機資料格式設計模擬遊戲。

## 檔案

- `summary.json`：機器可讀索引、來源 URL、完整 REA IDs、下載數量與素材缺口。
- `*.evidence.json`：完整 REA runtime 證據及限制；`*.scenario.json`：可重跑明確步驟。
- 各遊戲目錄的 `public/`：僅公開下載資源；`resource-inventory.json`：URL、檔案大小、SHA-256。
- `assets-desc.json`、`asset-manifest.inventory.json`：官方素材 manifest 與攤平清單。
- `assets/MISSING_ASSETS.md`：依專案規則記錄尚缺素材與所需資料。
