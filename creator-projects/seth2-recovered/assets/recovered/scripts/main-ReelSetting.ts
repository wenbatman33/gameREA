// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReelSetting.ts.js
// SHA256: 64f75c8c3da0333fa3f7de086eb05131e932c8e172f68637c596fdd0ac73cbad
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SymbolSetting";
import * as __dependency_3 from "./main-ReelExpect";
var __export_0;
export { __export_0 as ReelSetting };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelSetting":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
var c, u, b, y, f, m, g, d, S, h, R, w, v;
__dependency_1.cclegacy._RF.push({}, "dcd3bPThA5GIplTOB+CyXHI", "ReelSetting", void 0);
var x = __dependency_1._decorator.ccclass,
  z = __dependency_1._decorator.property;
__publish("ReelSetting", (c = x("ReelSetting"), u = z({
  type: __dependency_2.SymbolSetting,
  displayName: "Symbol 設定"
}), b = z({
  type: __dependency_1.CCFloat,
  displayName: "快停滾輪加速"
}), y = z({
  type: __dependency_1.Prefab,
  tooltip: "index 代表 symbolID"
}), f = z({
  type: __dependency_1.Node,
  visible: !1
}), m = z({
  type: __dependency_3.ReelExpect,
  displayName: "瞇牌動畫設定"
}), c((S = (0, __dependency_0.applyDecoratedDescriptor)((d = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "symbolSetting", S, this), (0, __dependency_0.initializerDefineProperty)(this, "speedUp", h, this), (0, __dependency_0.initializerDefineProperty)(this, "symbolPrefabList", R, this), (0, __dependency_0.initializerDefineProperty)(this, "symbolNode", w, this), (0, __dependency_0.initializerDefineProperty)(this, "expectSetting", v, this);
}).prototype, "symbolSetting", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_2.SymbolSetting();
  }
}), h = (0, __dependency_0.applyDecoratedDescriptor)(d.prototype, "speedUp", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .66;
  }
}), R = (0, __dependency_0.applyDecoratedDescriptor)(d.prototype, "symbolPrefabList", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), w = (0, __dependency_0.applyDecoratedDescriptor)(d.prototype, "symbolNode", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = (0, __dependency_0.applyDecoratedDescriptor)(d.prototype, "expectSetting", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.ReelExpect();
  }
}), g = d)) || g));
__dependency_1.cclegacy._RF.pop();
