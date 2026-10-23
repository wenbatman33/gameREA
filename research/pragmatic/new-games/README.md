# 五款 PP 公開試玩本機研究

此目錄獨立於原三款 PP。原始前端、圖片、音訊與公開虛擬示範回應均來自官方網站嵌入的 demogamesfree.pragmaticplay.net。未使用登入帳戶、未進行真金下注，亦未發布。

| 遊戲 | Symbol | 固定預設下注 | 本機入口 |
|---|---|---|---|
| Gates of Olympus | vs20olympgate | c=.10, l=20，總額2 | http://127.0.0.1:19765/play/gates-of-olympus |
| Starlight Princess | vs20starlight | c=.10, l=20，總額2 | http://127.0.0.1:19765/play/starlight-princess |
| Big Bass Bonanza | vs10bbbonanza | c=.20, l=10，總額2 | http://127.0.0.1:19765/play/big-bass-bonanza |
| Sugar Rush | vs20sugarrush | c=.10, l=20，總額2 | http://127.0.0.1:19765/play/sugar-rush |
| Sweet Bonanza | vs20fruitsw | c=.10, l=20，總額2 | http://127.0.0.1:19765/play/sweet-bonanza |

開發靜音啟動：`python3 research/pragmatic/new-games/offline_server.py --mute`。預設不含 `--mute` 時保留原版正常音訊；靜音腳本只在開發模式於 head 最早載入，不修改素材或原始音量設定。

`*.official.html` 是官方介紹頁，包含實際 data-game-src。`*.launcher.html`、`*/bootstrap.js` 為原始公開前端。manifest 逐項記錄 SHA256、原 URL、HTTP 狀態與 API requestBody；bytes 存於 bodies/。本機另讀取上層已取得的共享 loader/logo，無外部轉發功能。

公開來源：

- https://www.pragmaticplay.com/en/games/gates-of-olympus/
- https://www.pragmaticplay.com/en/games/starlight-princess/
- https://www.pragmaticplay.com/en/games/big-bass-bonanza/
- https://www.pragmaticplay.com/en/games/sugar-rush/
- https://www.pragmaticplay.com/en/games/sweet-bonanza-slot/

已觀察：doInit 提供 reel strips、paytable、scatter/wild 定義、預設下注與盤面。doSpin 回覆連消／獎金資料，na=c 時接 doCollect。這批每款取得11或12個 API回覆，均以 na=s 結束。初次三款舊遊戲需要 sInfo=n / bl=0 才能有效旋轉，最終 manifest 已替換為成功回應。

目前是假後端有限回合序列重播，沒有還原 RNG、RTP、免費遊戲或購買獎勵。超出錄製序列的行為會受限制，不能把資源取得或 HTTP 成功視為完整逆向工程。API 契約檢查見 http-verification.json；瀏覽器驗收由主代理繼續進行。

序列化：五款 build.js 均使用現有 serialization-context.json 相同兩個私有上下文欄位（navigator.userAgent、location.hostname）。本機僅重建此兩個快取字串，未改瀏覽器本身或請求目的地。

取得工具：acquire.py 是初始下載；fill-static.py 補已知 package；fill-audio-style.py 補 style/customizations/audio；refill-fixtures.py 修正三款 demo 請求表單。這些僅用於公開 demo，會建立新的虛擬 session，不用使用者的帳號 token。


載入卡住根因與修正：原始官方 logo_info.js 經重新下載 SHA256 完全一致，並非 logo 版本不同。WidgetColorAnimator 的 wasabiCode 欄位排列依 launcher session metadata 中的瀏覽器上下文還原；最初 HTTP launcher 使用 Mozilla/5.0 或 Python urllib，而本機還原使用記錄的 HeadlessChrome155 UA，導致 animationCurve 還原成數字、Start 讀取 keys[0] 失敗。GUI000 以兩種 UA 重下載 SHA256 相同，排除素材下載 UA 改變檔案內容。refresh-launchers.py 以相同 context UA 重新取得全部五款公開 launcher，並在 manifest 記錄 launcherContext；主代理已確認 Gates 越過載入進入原版介紹頁。server 啟動會拒絕與還原 context 不符的 manifest，防止再次混用。


外置圖片依賴：部分 package 的 Texture data 不是 inline base64，而是 res/hash.png 或 .jpg。fill-images.py 掃描全部五款 package 並下載71張實際外置圖片（Gates19、Starlight17、Sugar29、Sweet4、Big Bass2）。依賴閉包測試會拒絕未被manifest與本機body涵蓋的任一引用，避免只下載JSON卻停在載入40%。
