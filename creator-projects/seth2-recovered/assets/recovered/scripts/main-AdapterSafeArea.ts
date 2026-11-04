// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-AdapterSafeArea.ts.js
// SHA256: 6f8b292b9d12324f74f8452efe85a030659d9170dfa0ad6502d9f92c1a7e94f4
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Adapter";
import * as __dependency_3 from "./main-AdapterView";
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
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
var u, p, f, c, g, A, b, d, w, m, I, y;
__dependency_1.cclegacy._RF.push({}, "07550mrXINByYEGIQGf/ueP", "AdapterSafeArea", void 0);
var P = __dependency_1._decorator.ccclass,
  T = __dependency_1._decorator.property,
  x = __dependency_1._decorator.executeInEditMode,
  M = __dependency_1._decorator.menu;
__publish("default", (u = x(!0), p = M("Quick適配元件/AdapterSafeArea"), f = T({
  tooltip: "是否包含安全區域和螢幕上邊界之間的縫隙"
}), c = T({
  tooltip: "是否包含安全區域和螢幕下邊界之間的縫隙"
}), g = T({
  tooltip: "是否包含安全區域和螢幕左邊界之間的縫隙"
}), A = T({
  tooltip: "是否包含安全區域和螢幕右邊界之間的縫隙"
}), P(b = u(b = p((w = (0, __dependency_0.applyDecoratedDescriptor)((d = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "withInsertTop", w, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "withInsertBottom", m, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "withInsertLeft", I, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "withInsertRight", y, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  return (0, __dependency_0.inheritsLoose)(e, t), e.prototype.onChangeSize = function () {
    var t = this.getComponent(__dependency_1.Widget);
    t && t.enabled && (t.isAlignTop && this.withInsertTop && (t.isAbsoluteTop = !0, t.top = -__dependency_3.default.screenPxToDesignPx(__dependency_3.default.safeArea.safeAreaMarginTop), this.height += Math.abs(t.top)), t.isAlignBottom && this.withInsertBottom && (t.isAbsoluteBottom = !0, t.bottom = -__dependency_3.default.screenPxToDesignPx(__dependency_3.default.safeArea.safeAreaMarginBottom), this.height += Math.abs(t.bottom)), t.isAlignLeft && this.withInsertLeft && (t.isAbsoluteLeft = !0, t.left = -__dependency_3.default.screenPxToDesignPx(__dependency_3.default.safeArea.safeAreaMarginLeft), this.width += Math.abs(t.left)), t.isAlignRight && this.withInsertRight && (t.isAbsoluteRight = !0, t.right = -__dependency_3.default.screenPxToDesignPx(__dependency_3.default.safeArea.safeAreaMarginRight), this.width += Math.abs(t.right)), t.updateAlignment());
  }, e;
}(__dependency_2.Adapter)).prototype, "withInsertTop", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(d.prototype, "withInsertBottom", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), I = (0, __dependency_0.applyDecoratedDescriptor)(d.prototype, "withInsertLeft", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), y = (0, __dependency_0.applyDecoratedDescriptor)(d.prototype, "withInsertRight", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), b = d)) || b) || b) || b));
__dependency_1.cclegacy._RF.pop();
