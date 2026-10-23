# 遊戲逆向研究室

已用 REA 6.7.0 調查五家供應商共十四款遊戲。PP、Play’n GO 共六款可在本機旋轉，AFA 三款可用假後端一般抽卡；Hacksaw 三款與 Queenmaker 兩款尚未提供本機可玩版本。

## 開始遊玩

從 GitHub 取得並啟動：

```sh
git clone https://github.com/wenbatman33/gameREA.git
cd gameREA
python3 start-local.py
```

打開 http://127.0.0.1:18764 。只需 Python 標準函式庫與支援 WebGL 的瀏覽器；啟動後不需連接原廠服務。關閉啟動終端機會停止由該指令啟動的服務。若本機伺服器已由研究程序啟動，入口會沿用它們。

| 供應商 | 遊戲 | 結果 |
| --- | --- | --- |
| Pragmatic Play | Sweet Bonanza POP | 本機可旋轉、連消及領獎 |
| Pragmatic Play | Gates of Olympus 2500 | 本機可旋轉、連消及領獎 |
| Pragmatic Play | The Dog House | 本機可旋轉及領獎 |
| Play’n GO | Reactoonz | 本機可旋轉，固定未中獎盤面 |
| Play’n GO | Rich Wilde and the Book of Dead | 本機可旋轉，固定未中獎盤面 |
| Play’n GO | Wrappin’ More Gold | 本機可旋轉，固定未中獎盤面 |
| Hacksaw Gaming | Le Bandit | Demo 驗證失敗，未進入可玩畫面 |
| Hacksaw Gaming | Wanted Dead Or a Wild | Demo 驗證失敗，未進入可玩畫面 |
| Hacksaw Gaming | Chaos Crew | Demo 驗證失敗，未進入可玩畫面 |

點擊遊戲介紹畫面中的箭頭／CONTINUE，再點旋轉按鈕。PP 請保持預設下注（總注 2.00）；其他下注尚不支援。重新整理遊戲會重設本機虛擬餘額。

## 這次還原了什麼

保留公開 Demo 的實際前端程式、圖片、音效等已觀察資源，還原載入路徑並接到本機假後端。沒有用 SVG、Phaser Graphics、Canvas 手繪或色塊建立替代遊戲素材。

PP 重播有限的完整回合序列，動態更新 index／counter／時間與虛擬餘額，連消不會重複扣注。Play’n GO 的本機伺服器處理初始化 HTTP 與 SignalR MessagePack WebSocket，回傳捕獲的固定未中獎盤面，依下注扣點。

這些是可操作的有限研究試作，並非原始碼、原版機率、RTP、全部獎勵模式的完整重建。PP 畫面中的購買功能、特殊下注及免費遊戲尚未驗證；Play’n GO 尚未重建中獎與獎勵邏輯。

## 驗證

六款均以瀏覽器封鎖外部 HTTP 的方式測試。PP 共 32 次本機 gameService 回應全部成功，包含旋轉／連消／領獎，零 HTTP 失敗與零 JavaScript 錯誤。Play’n GO 三款各驗證連續兩局，畫面餘額 25000 → 24999 → 24998，零外部 HTTP 嘗試、HTTP 失敗與 JavaScript 錯誤。每款保存實測截圖。

完整機器可讀結果：`research/verification-summary.json`。各報告：

- `research/pragmatic/REPORT.md`
- `research/playngo/REPORT.md`
- `research/hacksaw/REPORT.md`

Hacksaw 僅成功載入啟動外殼與部分公開程式；三款官方 API 均在 CORS preflight 失敗，未取得成功驗證、初始化或旋轉回應，也沒有完整遊戲素材。這次觀察不能證明台灣所有網路都被封鎖。依素材規則未自行繪製替代品，缺件詳見 `research/hacksaw/assets/MISSING_ASSETS.md`。

原始三款 PG 的 HTML 保持不變，仍待補足原版素材及可分析的完整資源；詳見 `assets/MISSING_ASSETS.md`。

## 檔案與重現

- `start-local.py`：本機九款研究選單及伺服器啟動器，綁定 127.0.0.1:18764。
- `research/pragmatic/offline_server.py`：PP 本機假後端，127.0.0.1:18765。
- `research/playngo/offline-server.py`：Play’n GO 本機假後端，127.0.0.1:8766。
- `research/*/`：REA scenario／完整 evidence、公開靜態程式、素材 bytes 與 SHA256、獨立瀏覽器捕獲及驗證結果。

原始下載素材與程式保留各供應商的版權。GitHub Pages 僅提供靜態選單；遊戲的 Python 假後端仍需在本機執行。

## PP 載入相容性修正

原始擷取的序列化欄位對照使用擷取當時的 User-Agent 與 hostname；直接在一般瀏覽器重播會把欄位放到錯誤位置，造成進度條卡住及 configFile.text 未定義。伺服器現在只將 build.js 中兩個私有快取字串還原為記錄時的上下文，保留原始解析器與素材，不改動瀏覽器 navigator、實際網址或網路目的地。設定在 research/pragmatic/serialization-context.json。已在內建瀏覽器確認三款都能進入介紹畫面，並在 Chrome 確認 Dog House 完成載入。

## GitHub 內容範圍

Git 保留本機啟動器、假後端、遊玩所需的原始 bytes、索引、報告與驗證截圖。原始 PG HTML／追蹤腳本及舊分析目錄未提交，避免包含原站連線憑證。大型重複 REA evidence 與 140MB 靜態分析輸出留在本機，列於 .gitignore；報告保留其識別碼與限制。沒有將第三方素材重新授權為本專案的開源素材。

只啟動遊戲不需要 Node.js。若要重新執行可選的捕獲／驗證腳本，使用 npm ci 安裝 Playwright；腳本目前以 macOS 的 Google Chrome 路徑為預設。

## 有春銀幣廳新增五款

- AFA 草船借箭、血戰長坂、火燒赤壁：原版 Cocos 客戶端及已下載的實際素材，接至 127.0.0.1:18766 的合成一般抽卡後端。初始本機虛擬餘額 25,000；血戰長坂每輪十張，按一輪扣點。
- Queenmaker 烈焰一路發、奧林帕斯財運：已保存公開客戶端、入口鏈與部分素材，仍待初始化協定與完整遊戲資源。尚未提供本機試玩。

AFA 不會連回原站帳務；特殊降臨／連勝模式、SSR 特殊操作、購買獎勵與原版 RTP 尚未還原。其一般抽卡結果由假後端產生，不是原站回合重播。新開本機遊戲連結會建立獨立虛擬餘額；重新啟動 AFA 服務會重設所有本機工作階段。

詳細報告：`research/havespring/README.md`。驗證假後端：`python3 research/havespring/test_backend.py`（先啟動服務）。

## GitHub Pages 首頁

根目錄 `index.html` 是網頁選單，`.nojekyll` 關閉 README 的 Jekyll 建置流程。修改選單後執行 `python3 build-home.py` 重新產生靜態首頁。首頁圖片採相對路徑，可部署於 `/gameREA/`。GitHub Pages 無法執行 Python；網頁中的本機遊戲連結需先執行 `python3 start-local.py`。
