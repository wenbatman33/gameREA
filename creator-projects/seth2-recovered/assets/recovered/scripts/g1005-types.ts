// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-types.ts.js
// SHA256: 0e7d5485f8c65df3c3c88856ba0c53451d5bb8769f135a9f4a305d1986df79f5
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EActionType };
var __export_1;
export { __export_1 as EFeatureType };
var __export_2;
export { __export_2 as EGameType };
var __export_3;
export { __export_3 as EPool };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EActionType":
      __export_0 = value;
      break;
    case "EFeatureType":
      __export_1 = value;
      break;
    case "EGameType":
      __export_2 = value;
      break;
    case "EPool":
      __export_3 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
var n, t, i, o;
__publish({
  EActionType: void 0,
  EFeatureType: void 0,
  EGameType: void 0,
  EPool: void 0
}), __dependency_0.cclegacy._RF.push({}, "591d7zNLMlNN42kISbf19kO", "types", void 0), function (e) {
  e.SYMBOL_POOL = "symbolPool";
}(n || (n = __publish("EPool", {}))), function (e) {
  e.MAIN_GAME = "mainGame", e.FREE_GAME = "freeGame";
}(t || (t = __publish("EGameType", {}))), function (e) {
  e.FREE_GAME = "freeGame", e.GOLD_FREE_GAME = "superFreeGame", e.SUPER_MAIN_GAME = "superMainGame";
}(i || (i = __publish("EFeatureType", {}))), function (e) {
  e.SPIN = "spin", e.FREE_GAME = "freeSpin", e.SUPER_GAME = "superSpin";
}(o || (o = __publish("EActionType", {}))), __dependency_0.cclegacy._RF.pop();
