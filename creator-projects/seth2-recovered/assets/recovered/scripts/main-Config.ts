// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Config.ts.js
// SHA256: 6df00f0fbc1e82e640a0d886d6708e6e950d330e6b8f646460d854d6bca031e3
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as Config };
var __export_1;
export { __export_1 as EEnv };
var __export_2;
export { __export_2 as NetPriority };
var __export_3;
export { __export_3 as ViewZOrder };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Config":
      __export_0 = value;
      break;
    case "EEnv":
      __export_1 = value;
      break;
    case "NetPriority":
      __export_2 = value;
      break;
    case "ViewZOrder":
      __export_3 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (o) {
  void 0;
})(__dependency_0);
var t, _, E, e, r, n;
__publish({
  Config: void 0,
  EEnv: void 0,
  NetPriority: void 0,
  ViewZOrder: void 0
}), __dependency_0.cclegacy._RF.push({}, "4227bYQTFFOYb3+qzJ9yRmP", "Config", void 0), (_ = t || (t = __publish("Config", {}))).isShowDebugButton = !1, _.SHOW_DEBUG_INFO_KEY = "SHOW_DEBUG_INFO_KEY", _.audioPath = {
  dialog: "common/audio/dlg_open",
  button: "common/audio/btn_click"
}, _.isSkipCheckUpdate = !1, _.HOT_UPDATE_URL = "http://192.168.187.150/hotupdate", _.USE_AUTO_VERSION = !0, _.LOADING_TIME_OUT = 30, _.LOADING_CONTENT_CHANGE_INTERVAL = 3, _.LOAD_VIEW_TIME_OUT = 20, _.LOAD_VIEW_DELAY = .1, _.RECONNECT_TIME_OUT = 30, _.MAX_INBACKGROUND_TIME = 3900, _.MIN_INBACKGROUND_TIME = 3600, _.RECONNECT_ALERT_TAG = 100, _.TOKEN_EXPIRED_TIME = 3, (e = E || (E = __publish("ViewZOrder", {}))).zero = 0, e.Horn = 10, e.UI = 100, e.Alert = 297, e.NoTouch = 298, e.ReplayUI = 299, e.Tips = 300, e.Loading = 600, e.UILoading = 700, e.WaitLoading = 750, e.TopErrorAlert = 800, function (o) {
  o[o.Game = 0] = "Game", o[o.Chat = 1] = "Chat", o[o.Lobby = 2] = "Lobby", o[o.Wrapper = 3] = "Wrapper";
}(r || (r = __publish("NetPriority", {}))), function (o) {
  o.LOCAL = "local", o.DEV = "dev", o.PROD = "prod";
}(n || (n = __publish("EEnv", {}))), __dependency_0.cclegacy._RF.pop();
