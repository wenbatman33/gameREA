# 待補素材與啟動證據

三款 Demo 皆在認證 API 的 CORS preflight 階段失敗，尚未到旋轉畫面。已保留公開啟動 JS/CSS/少量 PNG，未產生替代圖形。

- Le Bandit：官方 manifest 共 352 個檔案，約 102 MB。
- Wanted Dead Or a Wild：607 個檔案，約 186 MB。
- Chaos Crew：283 個檔案，約 84 MB。

具體名稱、路徑、格式、原始大小請見各遊戲 `asset-manifest.inventory.json`；包括符號 atlas、背景、動畫、字型和音效／影音。下一步優先使用官方已有且使用者有權使用的實際圖檔，避免另畫風格不一致素材。

假伺服器尚缺成功 authenticate、遊戲設定／meta、spin/bet 回應及各動畫事件對應關係。沒有這些資料，無法驗證與原遊戲一致的行為。

若改作原創模擬版，可由使用者提供圖檔，或明確指示生成 PNG 素材；也可另選 Kenney.nl、itch.io 或 OpenGameArt 上授權合適的素材。原圖未補齊前，不用 Phaser Graphics、Canvas 手繪或 SVG 代替。
