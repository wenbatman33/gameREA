// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Enums.ts.js
// SHA256: b0a87d802916c97176dd55890d27e831511feaf6a7dce0c955a60c865132b235
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as ButtonSpriteType };
var __export_1;
export { __export_1 as LogLevel };
var __export_2;
export { __export_2 as ViewStatus };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ButtonSpriteType":
      __export_0 = value;
      break;
    case "LogLevel":
      __export_1 = value;
      break;
    case "ViewStatus":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
var i, r, n;
__publish({
  ButtonSpriteType: void 0,
  LogLevel: void 0,
  ViewStatus: void 0
}), __dependency_0.cclegacy._RF.push({}, "c707eh19D1BR5w4mqFeKK/+", "Enums", void 0), function (e) {
  e[e.DEBUG = 1] = "DEBUG", e[e.DUMP = 16] = "DUMP", e[e.WARN = 256] = "WARN", e[e.ERROR = 4096] = "ERROR", e[e.ALL = 4369] = "ALL";
}(i || (i = __publish("LogLevel", {}))), function (e) {
  e[e.WAITTING_CLOSE = 0] = "WAITTING_CLOSE", e[e.WATITING_HIDE = 1] = "WATITING_HIDE", e[e.WAITTING_NONE = 2] = "WAITTING_NONE";
}(r || (r = __publish("ViewStatus", {}))), function (e) {
  e.Norml = "normalSprite", e.Pressed = "pressedSprite", e.Hover = "hoverSprite", e.Disable = "disabledSprite";
}(n || (n = __publish("ButtonSpriteType", {}))), __dependency_0.cclegacy._RF.pop();
