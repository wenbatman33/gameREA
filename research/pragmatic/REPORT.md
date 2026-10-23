# Pragmatic Play 本機還原研究

## 結果

三款已可透過本機伺服器遊玩，保留原始 Demo 程式與圖片資源，以已錄製的回合序列模擬後端。這是有限回合樣本重播，不是原始碼還原或原版 RNG／RTP 模型。

| 遊戲 | Symbol | 本機入口 |
| --- | --- | --- |
| Sweet Bonanza POP | vs10swtbnz | http://127.0.0.1:18765/play/sweet-bonanza-pop |
| Gates of Olympus 2500 | vs20olympmmd | http://127.0.0.1:18765/play/gates-of-olympus-2500 |
| The Dog House | vs20doghouse | http://127.0.0.1:18765/play/the-dog-house-slot |

啟動：`python3 research/pragmatic/offline_server.py`，或從專案根目錄執行 `python3 start-local.py` 同時啟動整體入口。

## 已觀察的協定

- 官方遊戲頁嵌入 `demogamesfree.pragmaticplay.net/gs2c/openGame.do`，以 gameSymbol 指定遊戲，302 轉至 html5Game.do。
- 公開 launcher 載入 bootstrap.js、build.js、resources.json、game.json 與 game/ 分包，圖片部分包在 JSON 內再解碼；沒有用程式繪製替代素材。
- Sweet／Gates 使用 POST `/gs2c/ge/v5/gameService`；Dog House 使用 v3。表單包含 action、symbol、index、counter、mgckey 等欄位。
- doInit 取得初始盤面、賠付設定與餘額。doSpin 回應盤面及連消狀態，na=c 時客戶端呼叫 doCollect。
- 已擷取連消與領獎的完整回合鏈。連消不重複扣注；本機依樣本餘額差更新虛擬餘額，回應同步更新 index/counter/stime/ntp。

## 實作邊界

- 本機伺服器只讀取 bodies/ 中已擷取內容，不向外部服務轉發請求。網址改寫為本機完整 URL，保持原版 bootstrap 的 URL 解析方式。
- 重複播放完整樣本序列。甜點樣本含未中獎與連消中獎；Gates 與 Dog House 會重複已錄製的中獎回合，不能用於判斷遊戲機率或回報。
- PP 僅支援預設下注：Sweet c=.20、l=10；Gates／Dog c=.10、l=20，總下注都是 2.00。變更下注會收到 422；重新整理可重設。
- 免費遊戲、購買獎勵、特殊下注、所有設定頁與歷史紀錄沒有完整還原。超出樣本的操作可能無法使用。
- 外層官方頁首次大範圍捕獲有逾時與不完整事件，原始失敗證據保留；之後改用實際取得的 Demo URL 進行較小 REA 捕獲。

## REA 證據

- Sweet direct capture: ev_045ab032eaa78dfc770eb73b70918e1462f72135c64312a1a9d1b06c1c5187d1
- Gates direct capture: ev_df890787ed96065a6930dd97162dd34f79c11d866e575c74c821ab346bedba0f
- Dog House direct capture: ev_4b827914c864d17cf00bf54a8ab8c903a745ebbb44ab9325c91668c55fa1f613
- 三份 bootstrap 靜態分析：ev_36b1245b3fe8bfba349838c2abe89b0795784f4aee31478b62b095d64eee1435，見 rea-bootstrap-analysis.json。此靜態範圍不涵蓋完整 build 的所有語義。
- REA 證據保留各自 completeness/limitations；獨立 Playwright 輔助捕獲保存原始 response bytes 與 SHA256，見 *.manifest.json、bodies/。
- 本機瀏覽器驗證見 local-verification.json 與 *.local-after.png；測試以路由封鎖所有外部 HTTP，確認可旋轉與領獎。

## 一般瀏覽器載入修正

在使用者內建瀏覽器與 Chrome 重現載入中段停住，錯誤為 ServerInterface.ParseConfigFile 讀取 configFile.text 失敗。確認原版 wasabiCode 欄位排列使用記錄當時的瀏覽器／hostname 上下文。保留原版欄位還原演算法，在提供 build.js 時重建其兩個私有快取字串，資料來源見 serialization-context.json。原始 body bytes 不修改，也沒有改變 navigator 或實際網路目的地。三款在內建瀏覽器均已越過載入階段；Dog House 在 Chrome 也完成載入。
