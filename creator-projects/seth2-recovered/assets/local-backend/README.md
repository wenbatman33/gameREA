# 自行重寫的 Creator 本機後端

這個目錄是新的本機後端實作，與 `assets/recovered/scripts` 的原前端還原程式分開。不是原伺服器原始碼，也不讀取 `testSpin`、`testCloseSpin`、擷取封包、有限回合樣本或原網站 API。

## 規則與來源界線

- `DisplayedPaytable.ts` 由 `assets/local-rules/displayed-paytable.json` 轉成 Creator 可用常數；保留來源 SHA256。該表依原規則圖片人工核對，普通符號 1–9、8–9/10–11/12–30 個賠率及下注除以20的算式有公開顯示依據。
- `OrdinaryRules.ts` 由 `tools/seth-recovery/ordinary-rules.mjs` 同步。自行生成 6×5 盤面、計分、同時消除得獎符號、重力保留未消除符號，再隨機補牌，直到沒有得獎或超限拒絕整局。
- 權重預設九個普通符號等權重。它是可修改的本機設定，不是原 RNG、不代表原 RTP，也未調校特定目標 RTP。
- 原始 `initial` 回應尚未完整取得。`definition` 的下注選項、展示獎級門檻、時間、設定初值是依前端欄位讀取建立的自有契約。`winlineDefs` 的20項只滿足下注乘數契約，不宣稱還原原賠線；這款普通玩法按全盤符號數計分。

## 介面與結算

`installLocalBackend(GameServiceBase, options)` 在 App 初始化前安裝，由獨立 bootstrap 引用。安裝本身不讀 App 或 Storage；首次建立服務時保留原 `init` 的模型／重連管理生命週期，隨後以本機 client 替換從未連線的網路 client。`connect` 仍進入原 `onOpen`、ServiceManager與WRAPPER_SERVICE_CONNECTED流程，回應仍交原 GameSender、ParseResponse、GameData與動畫流程處理。

- `initial`：回傳原前端所需 `engine.definition/gameState/spinId`、`isResuming`、`platform` 與聲音設定。待結算局會續接同一局，不會再次扣款。
- `spin`：先生成整個連消鏈並驗證完成，再以整數分扣注。獎金暫存在 pending，`requestId`／`operationId` 重送回傳同一操作結果。
- `closeSpin`：只將相符 pending 的總獎金入帳一次；重複與重新載入後重送仍不重複領取。
- 普通 turbo 的 `forceClose: 舊spinId`：原子結清舊局再扣新局，並以舊局ID記住操作，重送不多開一局。
- `updateSettings`：保留本機聲音、turbo與下注索引設定。一般驗證預設有聲；`quiet`只覆蓋該執行個體輸出的聲音設定，不把靜音寫回玩家設定。

純本機持久狀態以 localStorage 實作，方便之後替換成真正服務。它目前是單一頁面服務實例的假點數錢包，未驗證多分頁並行交易，也不是正式金流或安全後端。

## 明確未完成

免費遊戲、覺醒、倍率符號、購買功能、Jackpot與replay均未實作。生成器只產生普通符號；功能請求明確回 `UNSUPPORTED_FEATURE`，不讀樣本冒充。查詢記錄只提供新生成普通局的本機紀錄，原站完整報表／桌台功能未還原。

實際 Creator 畫面的初始化、普通回合／連消動畫、closeSpin及聲音仍需獨立預覽驗證。純後端契約測試不能代替遊戲 UI 的驗收。

## 驗證

工作區根目錄執行：

```sh
node --experimental-vm-modules tools/seth-recovery/test-local-backend.mjs
```

測試執行實際 `local-backend/*.ts` 內容；包括1000個新生成回合逐stage重算獎金與重力、餘額守恆、斷線 pending、重送冪等、forceClose、無效請求不扣款、存檔失敗原子性、開發靜音不污染設定，以及原服務連線生命週期不建立網路 socket。

## 明確選擇的開發測試錢包

僅同時帶 `reaDebug=1&reaTestWallet=render-attempt4` 時，transport 在首次建立後端時選用 `seth2.creator.local-backend.v1.test.render-attempt4`。slug 限 1–48 字元，第一字為英數，其餘英數、底線或連字號。不含 debug、值不為 1 或 slug 不合法，一律使用原正常錢包 key。只指定不同 storage namespace，不刪除、重設或搬移正常錢包；同 slug 重開仍恢復 pending，不同 slug 相互獨立。這是全新假點數測試，不取代既有 pending 的恢復驗收。聲音規則不變，代理測試需另帶開發靜音參數。
