// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReelExpectItem.ts.js
// SHA256: 4d24a418e56ed3257be7363d5405bb644fa1ea5645ef7012814db7e78e7270e8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
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
  void 0, void 0, void 0, void 0;
})(__dependency_1);
var s, u, a, p, c, b, m, y, f, h, d, g, S, x, C;
__dependency_1.cclegacy._RF.push({}, "d9d02M0iWREfI8QL5fIfu/h", "ReelExpectItem", void 0);
var W = __dependency_1._decorator.ccclass,
  L = __dependency_1._decorator.property;
__publish("default", (s = W("ReelExpectItem"), u = L({
  type: __dependency_1.CCInteger,
  displayName: "Symbol ID List"
}), a = L({
  type: __dependency_1.CCInteger,
  visible: !1
}), p = L({
  type: __dependency_1.CCInteger,
  displayName: "超過幾次"
}), c = L({
  type: __dependency_1.CCInteger,
  displayName: "符合條件 滾輪 index"
}), b = L({
  type: __dependency_1.CCInteger,
  displayName: "中獎期待動畫滾輪隨機symbol id陣列",
  tooltip: "長度通常為expectSetting的step"
}), m = L({
  type: __dependency_1.CCInteger,
  displayName: "沒中獎期待動畫滾輪隨機symbol id陣列沒中獎(輪帶)",
  tooltip: "長度通常為expectSetting的step"
}), s((h = (0, __dependency_0.applyDecoratedDescriptor)((f = function () {
  function t() {
    (0, __dependency_0.initializerDefineProperty)(this, "symbolList", h, this), (0, __dependency_0.initializerDefineProperty)(this, "count", d, this), (0, __dependency_0.initializerDefineProperty)(this, "overCount", g, this), (0, __dependency_0.initializerDefineProperty)(this, "reelIdList", S, this), (0, __dependency_0.initializerDefineProperty)(this, "winningExpectRandomSymbolList", x, this), (0, __dependency_0.initializerDefineProperty)(this, "noWinExpectRandomSymbolList", C, this), this._fullComboWinSymbols = [];
  }
  var e = t.prototype;
  return e.setFullComboExpectWinSymbols = function (t) {
    this._fullComboWinSymbols.push(t);
  }, e.clearFullComboWinSymbols = function () {
    this._fullComboWinSymbols = [];
  }, e.getFullComboExpectWinSymbols = function () {
    var t = (0, __dependency_1.randomRangeInt)(0, this._fullComboWinSymbols.length);
    return null != this._fullComboWinSymbols[t] ? this._fullComboWinSymbols[t] : [];
  }, t;
}()).prototype, "symbolList", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), d = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "count", [a], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), g = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "overCount", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 2;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "reelIdList", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), x = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "winningExpectRandomSymbolList", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), C = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "noWinExpectRandomSymbolList", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), y = f)) || y));
__dependency_1.cclegacy._RF.pop();
