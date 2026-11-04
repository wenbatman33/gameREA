// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SingleReelSetting.ts.js
// SHA256: a6ed85d4e009152aa7d5c02f9756755838b7f7dce6e8f63d64030fab1c974ba8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-ReelEnum";
import * as __dependency_3 from "./main-SingleReelDampingSetting";
var __export_0;
export { __export_0 as SingleReelSetting };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingleReelSetting":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
var m, b, y, c, d, g, f, S, h, w, C, z, N, D, R, v, I, L, V, F, O, T, _, B, E, P, A, H, M, Q, U;
__dependency_1.cclegacy._RF.push({}, "1b5ad5AGgFFHJNQSQd3tRnX", "SingleReelSetting", void 0);
var W = __dependency_1._decorator.ccclass,
  j = __dependency_1._decorator.property;
__publish("SingleReelSetting", (m = W("SingleReelSetting"), b = j({
  type: (0, __dependency_1.Enum)(__dependency_2.EScrollDirection),
  displayName: "滾動方向"
}), y = j({
  type: __dependency_1.CCInteger,
  displayName: "[上面] 顯示幾個 Symbol",
  tooltip: "選向下滾動方向，必須 >=2"
}), c = j({
  displayName: "[上面] 是否顯示出來",
  tooltip: "topView"
}), d = j({
  type: __dependency_1.CCInteger,
  displayName: "[中間] 顯示幾個 Symbol",
  tooltip: "midCount"
}), g = j({
  type: __dependency_1.CCInteger,
  displayName: "[下面] 顯示幾個 Symbol",
  tooltip: "選向上滾動方向，必須 >=2"
}), f = j({
  displayName: "[下面] 是否顯示出來",
  tooltip: "downView"
}), S = j({
  type: __dependency_1.CCFloat,
  displayName: "移動一個Symbol的時間(單位:sec)",
  tooltip: "移動一個Symbol，所花的秒數"
}), h = j({
  type: __dependency_1.CCFloat,
  displayName: "最後停輪移動Symbol時間(單位:sec)",
  tooltip: "移動一個Symbol，所花的秒數"
}), w = j({
  type: __dependency_1.CCInteger,
  displayName: "要滾動幾個Symbol",
  tooltip: "至少要比 TOP+MID+DOWN 多1個"
}), C = j({
  type: __dependency_3.SingleReelDampingSetting,
  displayName: "抖動設定"
}), z = j(__dependency_1.CCString), N = j(__dependency_1.CCString), D = j({
  type: __dependency_1.CCInteger,
  displayName: "初始化 symbol 陣列(symbol ID)",
  tooltip: "initSymbolIdList"
}), R = j({
  type: __dependency_1.CCInteger,
  displayName: "Symbol 隨機ID",
  tooltip: "symbol數量，預設10"
}), m((L = (0, __dependency_0.applyDecoratedDescriptor)((I = function () {
  function t() {
    (0, __dependency_0.initializerDefineProperty)(this, "scrollDirection", L, this), (0, __dependency_0.initializerDefineProperty)(this, "topCount", V, this), (0, __dependency_0.initializerDefineProperty)(this, "topView", F, this), (0, __dependency_0.initializerDefineProperty)(this, "midCount", O, this), (0, __dependency_0.initializerDefineProperty)(this, "downCount", T, this), (0, __dependency_0.initializerDefineProperty)(this, "downView", _, this), (0, __dependency_0.initializerDefineProperty)(this, "moveOneSymbolTime", B, this), (0, __dependency_0.initializerDefineProperty)(this, "stopReelTime", E, this), (0, __dependency_0.initializerDefineProperty)(this, "step", P, this), (0, __dependency_0.initializerDefineProperty)(this, "dampingSetting", A, this), (0, __dependency_0.initializerDefineProperty)(this, "stopSoundUrl", H, this), (0, __dependency_0.initializerDefineProperty)(this, "stopSoundBundle", M, this), (0, __dependency_0.initializerDefineProperty)(this, "initSymbolIdList", Q, this), (0, __dependency_0.initializerDefineProperty)(this, "randomSymbolList", U, this);
  }
  return t.prototype.getAllCount = function () {
    return this.topCount + this.midCount + this.downCount;
  }, t;
}()).prototype, "scrollDirection", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return __dependency_2.EScrollDirection.DOWN;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "topCount", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), F = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "topView", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), O = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "midCount", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), T = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "downCount", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), _ = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "downView", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), B = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "moveOneSymbolTime", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .07;
  }
}), E = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "stopReelTime", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .075;
  }
}), P = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "step", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 6;
  }
}), A = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "dampingSetting", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.SingleReelDampingSetting();
  }
}), H = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "stopSoundUrl", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), M = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "stopSoundBundle", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "initSymbolIdList", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "randomSymbolList", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}), v = I)) || v));
__dependency_1.cclegacy._RF.pop();
