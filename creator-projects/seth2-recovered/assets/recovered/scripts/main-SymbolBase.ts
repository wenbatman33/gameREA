// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SymbolBase.ts.js
// SHA256: a8912e2508fa15a91216f62cced903546393775e9c438a992364a0707452bd95
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
var __export_0;
export { __export_0 as SymbolBase };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SymbolBase":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
var s, p, d, f, y, b, h, m, S;
__dependency_1.cclegacy._RF.push({}, "27b59vGLMJAB6ovtJxn4eHK", "SymbolBase", void 0);
var v = __dependency_1._decorator.ccclass,
  g = __dependency_1._decorator.property,
  x = __dependency_1._decorator.menu,
  I = (__dependency_1._decorator.executeInEditMode, __dependency_1._decorator.requireComponent);
__publish("SymbolBase", (s = v("SymbolBase"), p = x("Slot/Symbol/SymbolBase"), d = I(__dependency_1.UITransform), f = g(__dependency_1.CCInteger), y = g(__dependency_1.CCInteger), s(b = p(b = d((m = (0, __dependency_0.applyDecoratedDescriptor)((h = function (e) {
  function n() {
    for (var n, t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
    return n = Reflect.construct(e, [this].concat(r).slice(1), new.target || n) || this, (0, __dependency_0.initializerDefineProperty)(n, "id", m, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "zIndex", S, (0, __dependency_0.assertThisInitialized)(n)), n.isExplode = !1, n.originalParent = null, n;
  }
  (0, __dependency_0.inheritsLoose)(n, e);
  var r = n.prototype;
  return r.setSymbol = function () {
    this.isExplode = !1, this.node.zIndex = this.zIndex;
  }, r.unScheduleAllCallBack = function () {
    this.unscheduleAllCallbacks();
  }, r.changeSpeed = function (e, n) {}, r.playIdle = function () {}, n;
}(__dependency_2.default)).prototype, "id", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "zIndex", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), b = h)) || b) || b) || b));
__dependency_1.cclegacy._RF.pop();
