// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SingleReelDampingSetting.ts.js
// SHA256: 739417b2e9702cc1662e666b67b8b2c352943c33af93d464732b3cd2b2eb09eb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as SingleReelDampingSetting };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingleReelDampingSetting":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (i) {
  void 0, void 0;
})(__dependency_0);
(function (i) {
  void 0, void 0, void 0;
})(__dependency_1);
var l, p, o, s, u, m, c, g, f, y, b, D, d, h, w, S, z;
__dependency_1.cclegacy._RF.push({}, "04bc5brFN9Fp7t9rUtQWdat", "SingleReelDampingSetting", void 0);
var N = __dependency_1._decorator.ccclass,
  R = __dependency_1._decorator.property;
__publish("SingleReelDampingSetting", (l = N("SingleReelDampingSetting"), p = R({
  displayName: "滾動開始的抖動",
  tooltip: "downView"
}), o = R({
  type: __dependency_1.CCFloat,
  displayName: "滾動開始的抖動時間(單位:sec)",
  tooltip: "midCount"
}), s = R({
  type: __dependency_1.CCFloat,
  displayName: "滾動開始的抖動幅度",
  tooltip: "一個Symbol高的比例"
}), u = R({
  type: __dependency_1.CCFloat,
  displayName: "延遲滾動開始的抖動秒數"
}), m = R({
  displayName: "滾動最後的抖動",
  tooltip: "downView"
}), c = R({
  type: __dependency_1.CCFloat,
  displayName: "滾動最後的抖動時間(單位:sec)",
  tooltip: "midCount"
}), g = R({
  type: __dependency_1.CCFloat,
  displayName: "滾動最後的抖動幅度",
  tooltip: "一個Symbol高的比例"
}), l((b = (0, __dependency_0.applyDecoratedDescriptor)((y = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "firstDamping", b, this), (0, __dependency_0.initializerDefineProperty)(this, "firstDampingTime", D, this), (0, __dependency_0.initializerDefineProperty)(this, "firstDampingAmplitude", d, this), (0, __dependency_0.initializerDefineProperty)(this, "firstDampingDelay", h, this), (0, __dependency_0.initializerDefineProperty)(this, "lastDamping", w, this), (0, __dependency_0.initializerDefineProperty)(this, "lastDampingTime", S, this), (0, __dependency_0.initializerDefineProperty)(this, "lastDampingAmplitude", z, this);
}).prototype, "firstDamping", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), D = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "firstDampingTime", [o], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .08;
  }
}), d = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "firstDampingAmplitude", [s], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), h = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "firstDampingDelay", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .1;
  }
}), w = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "lastDamping", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "lastDampingTime", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .08;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "lastDampingAmplitude", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), f = y)) || f));
__dependency_1.cclegacy._RF.pop();
