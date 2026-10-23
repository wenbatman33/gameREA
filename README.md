# 遊戲逆向研究室

以原版前端、實際圖片及音效，搭配瀏覽器中的假後端，研究共 20 款遊戲。這些是普通回合／一般抽卡試作，並非原版機率、RTP 或全部特殊玩法的完整還原。

## 網頁試玩

發布入口：<https://wenbatman33.github.io/gameREA/>。

新版由 GitHub Actions 建置 `web-build/` 並交給 GitHub Pages。遊戲入口使用相對網址，不再要求訪客連到 `127.0.0.1`，也不需要啟動 Python。首次進入需下載遊戲原始資源，請使用支援 Service Worker、WebGL 的瀏覽器及 HTTPS。

Service Worker 回傳模擬 HTTP 資料；Play’n GO 與賽特2另以瀏覽器內的 WebSocket 相容介面回傳假資料。點數只用於這個示範版，不連接原站帳務。發布預設正常音量；開發用 `--mute` 獨立建置。

| 供應商 | 遊戲 | 範圍 |
| --- | --- | --- |
| Pragmatic Play | Sweet Bonanza POP、Gates of Olympus 2500、The Dog House、Gates of Olympus、Starlight Princess、Big Bass Bonanza、Sugar Rush、Sweet Bonanza | 有限普通旋轉、連消及領獎樣本；保持預設下注 |
| Play’n GO | Reactoonz、Book of Dead、Wrappin’ More Gold、Legacy of Dead、Fire Joker、Rise of Olympus、Moon Princess、Gemix | 初始化與普通未中獎回合，虛擬餘額扣點 |
| AFA | 草船借箭、血戰長坂、火燒赤壁 | 合成一般抽卡；特殊模式尚未還原 |
| ATG | 戰神賽特2 覺醒之力 | 普通回合、部分免費與公開覺醒樣本；可調整合成結果，不代表原版機率 |

Hacksaw 與 Queenmaker 的失敗項目只保留研究檔案，不列入遊玩首頁，也不計入這 20 款。

## 開發及驗證

建置靜音開發版並以純靜態伺服器預覽，刻意使用 `/gameREA/` 子路徑模擬 GitHub Pages：

```sh
python3 build_static.py --output .static-preview/gameREA --mute
python3 -m http.server 18768 --bind 127.0.0.1 --directory .static-preview
```

開啟 <http://127.0.0.1:18768/gameREA/>。這個 HTTP 伺服器僅提供檔案，不處理遊戲 API 或 WebSocket。

發布版預設正常音量：

```sh
python3 build_static.py --output web-build
python3 test_static.py web-build
```

建置使用 Python 標準函式庫；合約測試另需 Node.js 22。輸出只包含執行資源，約 859 MiB；研究封包、登入資料及 Python 服務不會隨 Pages artifact 發布。請勿直接將整個研究目錄當作 Pages 網站。

`web-src/` 保存匯出器、Service Worker、瀏覽器假後端及測試。`research/static-browser-verification.json` 記錄實際靜態版 UI 驗證；`research/local-20-verification.json` 記錄較早的本機後端驗證。合約測試不等於每款所有功能都已經過瀏覽器驗收。

舊版多服務開發入口仍可使用 `python3 start-local.py --mute`，但 GitHub Pages 不使用這個入口。`build-home.py` 是新靜態建置器的相容入口，不再產生 localhost 遊戲連結。

## 已知限制

PP 使用有限回合樣本，普通回合會重複；特殊下注、購買及免費遊戲尚未完整還原。Play’n GO 尚無完整中獎與獎勵邏輯。AFA 未完成 SSR 特殊操作、降臨／連勝與購買獎勵。賽特2仍有未觀察的特殊模式與重觸發流程。原版 RNG、RTP、伺服器原始碼均未取得。

瀏覽器資料只在本機儲存，沒有跨裝置帳戶；清除網站資料會重設。首次載入、瀏覽器相容性及全部特殊玩法仍需逐款測試，不能保證永遠不會卡住。

各供應商報告位於 `research/pragmatic/`、`research/playngo/`、`research/havespring/`、`research/atg/seth2/`。保留的第三方程式與素材仍屬原權利人，沒有將它們重新授權為本專案的開源素材。沒有使用生成 SVG、Phaser Graphics、Canvas 手繪或幾何 placeholder 代替遊戲素材。

發布須使用者每次明確指示；推送 `main` 會觸發 `.github/workflows/pages.yml`，驗證通過後部署 `web-build/`。Pages 的部署來源須為 GitHub Actions。
