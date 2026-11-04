# 戰神賽特2 Creator 重建工作目錄

此目錄由 Cocos Creator 3.8.8 空白專案開始，還原原版發布包中的腳本、素材、場景與 Prefab。已通過場景修改、儲存、重開、GUI 重新建置，以及保留遮罩的可視普通回合、連消和自動遊玩驗證。這不是原作者的完整 TypeScript 專案；免費、覺醒、三種購買、四級彩金、重觸發、分裂、鎖定及中途重載已分別經原畫面驗證到結算與下一局。這是可修改的本機生成規則，原廠 RNG／RTP 未還原。

- `assets/recovered/`：從原始資源序列化資料與原圖重建的可編輯資產。
- `assets/local-backend/`：新寫的盤面生成、公開賠率計分、連消、免費、覺醒、購買、彩金與錢包，不使用回合重播。各分支驗收範圍見 `../../research/creator-recovery/features/gui-results.json`，並非所有組合皆已窮舉；機率與獎池參數為可修改的本機規則；原廠 RNG／RTP 未還原。
- 腳本中的來源路徑與 SHA-256 可追溯至研究檔；`.ts` 容器內仍可能是反編譯 JavaScript，不代表取得原始型別、註解及變數名稱。
- `extensions/cocos-mcp-server/`：使用者指定的 Cocos MCP 開源插件，僅服務 127.0.0.1:18980。
- `../../research/creator-recovery/`：REA 證據摘要、來源雜湊、模組與素材對照、編輯器驗證紀錄。
- 原版公開 `testSpin`／`closeSpin` JSON 是研究證據；不應以輪播這些資料宣稱玩法還原成功。

請在已登入的官方 Cocos Dashboard 匯入此目錄，再由 Dashboard 啟動 Creator。本次未由 Dashboard 啟動的 CLI 沒有可用的登入上下文，並曾將素材降級成泛用 importer；CLI exit 36 或 index.html 存在都不能單獨證明有效建置。編輯器版本與原始發布包的3.7.2不同，相容性須經實際建置驗證。不要讓編輯器覆寫 `research/atg/seth2/mirror/` 原始輸入。

**保留已保存的原渲染管線設定**：專案設定 → 圖形設定 → 原渲染管線（`builtin-forward.rpp`），`settings/v2/packages/engine.json` 的 `graphics.pipeline` 為 `legacy-pipeline`。官方 GUI 單因果對照已確認：同一份程式與場景，在新管線中遮罩會裁掉全部符號，原管線中則正常顯示符號、角色與動畫。沒有刪除正式 Mask，也沒有修改安裝的引擎。詳見 `../../research/creator-recovery/editor/`。

本機獨立驗證入口為 `http://127.0.0.1:18982/?gn=golden-seth&l=zh-tw&view_mode=portrait&t=creator-local`，保留正常聲音。開發使用18983的 `development-muted/`，兩個 origin 的測試錢包互相獨立。`reaDebug`、`reaTestWallet`、`reaProbeMask=off` 僅供明確診斷，正常驗證入口不使用這些選項。

本機服務停止或電腦重新啟動後，在工作區根目錄雙擊 `啟動賽特Creator.command`，或執行 `python3 tools/start_seth_creator.py`。啟動器會檢查既有服務並在背景啟動正常聲音入口，不重建、不清除錢包，也不發布。`--development` 另啟動獨立靜音入口。若連接埠被其他服務占用，會停止並提示，不會終止其他程序。

在 Creator 內按播放前，請開啟 `assets/recovered/main/mainPortrait.scene`。`assets/inspection/MaskNative388Diagnostic.scene` 是遮罩診斷場景，不是遊戲入口；工具列選「當前場景」時，選到診斷場景不會啟動完整遊戲。編輯器的 `localhost:7456` 與上述已建置驗證入口是不同服務。

開發測試必須使用獨立靜音選項；使用者驗證與發布預設有聲。沒有使用者當次「推版」指示不得推送或部署。

目前使用者入口為 B4 正常音效建置；實際聽覺驗證留給使用者。彩金彈窗金額已通過消費端計算測試及原畫面分開計數觀察，但未截到精確最終彩金數字畫面。驗收保留各版本與各案例的限制，不保證任何操作組合永不卡住。

## 2026-11-04 Creator 播放入口修正

Creator 工具列按播放通常不帶原站啟動參數；原程式在缺少 `gn` 時會載入未還原的 `g1001`。本機 bootstrap 現在會補入 `gn=golden-seth`、直向顯示及本機假後端所需預設值，保留既有的明確參數。普通驗證仍有聲；代理自行測試使用 `?reaDevelopmentMute=1`，不保存成玩家的靜音設定。

其餘遊戲已依使用者要求移除，現只保留此工程。Creator 的實際預覽埠可能是7456或7457，以編輯器按播放後開啟的網址為準。
