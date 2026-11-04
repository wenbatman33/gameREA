// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReelExpect.ts.js
// SHA256: 20d47e29b6091ec28cf38fa9e03e1cec9784e4bcfb3b666b79a475d0da01f5f6
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-ReelExpectItem";
var __export_0;
export { __export_0 as ReelExpect };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelExpect":
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
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
var p, c, s, u, m, f, y, b, d, h, g, C, R;
__dependency_1.cclegacy._RF.push({}, "66ec0JsGf1CTJWS0KL7rAsB", "ReelExpect", void 0);
var w = __dependency_1._decorator.ccclass,
  x = __dependency_1._decorator.property;
__publish("ReelExpect", (p = w("ReelExpect"), c = x({
  type: __dependency_1.CCInteger,
  displayName: "期待動畫要經過幾個 Symbol"
}), s = x({
  type: __dependency_1.CCFloat,
  displayName: "期待動畫滾輪速度調整"
}), u = x({
  type: __dependency_1.CCFloat,
  displayName: "期待動畫滾輪加速度時間"
}), m = x({
  type: __dependency_2.default,
  displayName: "期待動畫條件陣列"
}), f = x({
  type: __dependency_2.default,
  displayName: "全盤瞇牌動畫條件陣列"
}), p((d = (0, __dependency_0.applyDecoratedDescriptor)((b = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "step", d, this), (0, __dependency_0.initializerDefineProperty)(this, "speedUp", h, this), (0, __dependency_0.initializerDefineProperty)(this, "incrementTime", g, this), (0, __dependency_0.initializerDefineProperty)(this, "itemList", C, this), (0, __dependency_0.initializerDefineProperty)(this, "fullComboItem", R, this);
}).prototype, "step", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 20;
  }
}), h = (0, __dependency_0.applyDecoratedDescriptor)(b.prototype, "speedUp", [s], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 2.3;
  }
}), g = (0, __dependency_0.applyDecoratedDescriptor)(b.prototype, "incrementTime", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), C = (0, __dependency_0.applyDecoratedDescriptor)(b.prototype, "itemList", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), R = (0, __dependency_0.applyDecoratedDescriptor)(b.prototype, "fullComboItem", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_2.default();
  }
}), y = b)) || y));
__dependency_1.cclegacy._RF.pop();
