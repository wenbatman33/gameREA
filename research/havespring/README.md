# 有春銀幣廳五款逆向研究

觀察日期：2026-10-23。AFA 三款已接上本機一般抽卡假後端；Queenmaker 兩款仍是研究項目。

| 遊戲 | 代碼 | 狀態 |
|---|---|---|
| 草船借箭 | CA261119 | 本機一般抽卡、卡面動畫、虛擬餘額 |
| 血戰長坂 | CA261141 | 本機一般抽卡，每輪十張、整輪扣點 |
| 火燒赤壁 | CA261130 | 本機一般抽卡、卡面動畫、虛擬餘額 |
| 烈焰一路發 | flame_of_fortune / KMQM | 已取得公開客戶端及部分素材；獨立啟動觀察到 3003 連線逾時 |
| 奧林帕斯財運 | olympus_fortune / KMQM | 登入大廳已進入介紹畫面；尚無本機假後端 |

## 啟動

從專案根目錄執行 `python3 start-local.py`，開啟 http://127.0.0.1:18764 。AFA 也可單獨執行 `python3 research/havespring/offline_server.py`，開啟 http://127.0.0.1:18766 。

新開 AFA 遊戲連結會建立獨立的 25,000 虛擬餘額；重新啟動 AFA 服務會清除工作階段。遊戲只連到 loopback，客戶端 CSP 限制網路與圖片至本機。保留原始圖片、音效、Cocos 前端與動畫，未生成替代素材。

一般結果以卡包 normal 模式的 Weight 作合成抽樣，依原始碼所需的 PlayResult / CardResult / WinResult 形狀回傳。這不是原站回合重播，也沒有重建完整機率或原版 RTP。降臨、連勝、特殊 SSR 操作、獎池、購買獎勵及完整歷史紀錄尚未還原；本機隱藏不支援的購買獎勵入口。畫面中的特殊模式機率仍來自原始卡包，不代表假後端會觸發該模式。

## 已取得證據

- `games.json`：五款 iframe 來源、路徑及非敏感遊戲參數，不含 token 值。
- `public/`：Chrome 取得的大廳 entry / game-store 模組。
- `afa-public/`：151 個共用靜態檔案，包含公開 HTML；`afa-static-manifest.json` 保存來源、大小與 SHA-256。
- `fixtures/CA*.json`：從成功初始化回應解出的三款公開卡包。沒有保留登入回應或帳號資料。
- `remote-assets/`：85 個卡包實際引用的圖片，`afa-card-downloads.json` 保存來源與雜湊，85/85 下載成功。
- `queenmaker-public/`：兩款公開 CDN 客戶端與已觀察啟動素材，分別 34 與 36 個檔案；對應 `flame-downloads.json`、`olympus-downloads.json`。不代表完整遊戲素材已齊全。
- `extracted/`：從 AFA 原始 System.register bundle 分離的相關模組，方便閱讀。
- `protocol-findings.json`：初始化實測與靜態推導範圍。
- `rea-summary.json`：REA 6.7.0 分析摘要、完整報告雜湊與限制。完整圖譜留在本機且排除於 Git。
- `*-local-after.png`：本機結果；`queenmaker-*-status.png`：兩款實際研究畫面。

早期無參數 AFA 入口曾顯示「萬里取經 T080」，不是這三款。本輪改用網站提供的新啟動連結取得指定遊戲，已不再以該預設畫面作為成果。

## 協定與本機適配

AFA 三款共用 `/ca2501/` 客戶端，透過 `txGameID` 選取卡包。網站啟動 token 為一次性，重整原站入口曾回覆 4000；必須從大廳重新取得新入口。登入大廳的 iframe 曾停在載入中，獨立分頁成功載入並取得卡包資料。

成功初始化回應以 JSON 字串承載 AES-128-ECB / PKCS7；初始金鑰由啟動 token 的前 16 個 UTF-8 bytes 得出。已解碼 87 個初始化及輪詢回應，但只保留三款公開卡包。公開卡包的封面與卡面網址由 `/packs/info` 的 `PackInfo.ImageURL`、`Modes.*.Cards[].ImageURL`、`PreviewImageURL` 提供。

本機設定將 ServerHttp 改為 loopback、關閉傳輸加密，回傳原始客戶端支援的 `{Data, Err}` 物件。使用獨立的本機 token 與記憶體餘額；不沿用原站登入或帳務。刪除 HTML 中的原站活動腳本，圖片網址改為本機已下載檔案。原始檔案保留不變，由伺服器產生傳送用變體。

自動遠端教學彈窗在本機略過，避免依賴未還原的教學網站；沒有替換遊戲美術。本機曾觀察到 `regeneratorRuntime is not defined`；原始 polyfill 的 AMD wrapper 在頁面存在 AMD loader 時會僅登記而不執行。本機強制該 classic-script wrapper 執行，保留其 runtime 實作；`test_polyfills.cjs` 重現並驗證 AMD 共存情境。此受控重現不等於已證明使用者當時黑屏的所有環境因素。

## 驗證與限制

先啟動本機服務，再執行：

```sh
python3 research/havespring/test_backend.py
node research/havespring/test_polyfills.cjs
```

測試餘額守恆、整輪計價、卡片有效性、工作階段隔離、拒絕特殊模式不扣點、圖片完整性及 AMD 共存。瀏覽器驗證與截圖詳見 `verification.json`。伺服器開發重啟期間的連線錯誤不作為最終成功證據。

`tools/extract-afa-packs.cjs` 可從私人 Chrome HAR 只抽出指定三款公開卡包。HAR 包含登入網址與回應，不應提交；本輪原始 HAR 位於工作區外的私人暫存，提取後移除。

本輪未操作原站扣幣抽卡、購買、獎勵領取或手機驗證。Queenmaker 尚未有完整本機回合；缺件見 `assets/MISSING_ASSETS.md`。
