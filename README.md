# 戰神賽特2 逆向研究

目前只保留戰神賽特2。其餘遊戲的復刻工程、匯出器、研究素材與首頁入口已移除。

## Cocos Creator 工程

使用 Cocos Creator **3.8.8** 開啟 `creator-projects/seth2-recovered`，選擇 `assets/recovered/main/mainPortrait.scene` 再按播放。不要選擇 Mask 診斷場景。

Creator 預覽現在會自動補入賽特2的啟動參數，避免缺少 `gn` 時錯誤載入不存在的 `g1001`。使用者預設正常聲音；代理測試另加 `reaDevelopmentMute=1`。

還原程式與原始圖片在 `assets/recovered`，自行實作的假後端在 `assets/local-backend`。工程說明與玩法限制見 [Creator README](creator-projects/seth2-recovered/README.md)。這不是原伺服器程式，也不代表已還原原版 RNG、RTP 或所有特殊流程。

已有 GUI 建置時，可執行 `python3 tools/start_seth_creator.py`，或雙擊 `啟動賽特Creator.command`，啟動正常音量的本機預覽。新 clone 不包含 Creator 快取與建置，需先由 Creator 建置。

## GitHub Pages 瀏覽器研究版

[網頁入口](https://wenbatman33.github.io/gameREA/) 僅列出賽特2。這是原始客戶端搭配瀏覽器模擬後端的另一個研究入口，與 Creator 工程的建置分開；不宣稱與 Creator 玩法完成度相同。

```sh
python3 build_static.py --output web-build
python3 test_static.py web-build
```

開發測試另外使用 `python3 build_static.py --output .static-preview/development-muted --mute`，發布預設正常聲音。GitHub Actions 建置後發布 Pages，遊戲使用相對路徑，不要求訪客連到 localhost。

發布、部署及遠端寫入仍須使用者當次明確指示。
