// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-AdapterView.ts.js
// SHA256: eeb66baeb9a3f730173057794238914dff8e50a9df72e224fadb6dc36ea7fe1e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Adapter";
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
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
var c, u;
__dependency_1.cclegacy._RF.push({}, "32b0fpgPcJGb4F0BalFuE1g", "AdapterView", void 0);
var A = __dependency_1._decorator.ccclass,
  h = (__dependency_1._decorator.property, __dependency_1._decorator.executeInEditMode),
  d = __dependency_1._decorator.menu;
__publish("default", A(c = h(!0)(c = d("Quick適配元件/AdapterView")(((u = function (e) {
  function i() {
    return Reflect.construct(e, arguments, new.target || i) || this;
  }
  return (0, __dependency_0.inheritsLoose)(i, e), i.prototype.onChangeSize = function () {
    i.safeArea = null, this.node && (this.width = i.safeArea.safeAreaWidth / i.safeArea.designPxToScreenPxRatio, this.height = i.safeArea.safeAreaHeight / i.safeArea.designPxToScreenPxRatio, this.node.setPosition((0, __dependency_1.v3)(i.safeArea.safeAreaXOffset / i.safeArea.designPxToScreenPxRatio, i.safeArea.safeAreaYOffset / i.safeArea.designPxToScreenPxRatio)));
  }, i.screenPxToDesignPx = function (e) {
    return e / this.safeArea.designPxToScreenPxRatio;
  }, i.designPxToScreenPx = function (e) {
    return e * this.safeArea.designPxToScreenPxRatio;
  }, (0, __dependency_0.createClass)(i, null, [{
    key: "safeArea",
    get: function () {
      if (null == this._safeArea || null == this._safeArea) {
        var e = __dependency_1.screen.windowSize.width,
          a = __dependency_1.screen.windowSize.height,
          t = __dependency_1.view.getVisibleSize().width,
          i = __dependency_1.view.getVisibleSize().height,
          s = Math.min(e / t, a / i),
          r = e - 0 - 0,
          o = a - 0 - 0;
        this._safeArea = {
          screenWidth: e,
          screenHeight: a,
          safeAreaWidth: r,
          safeAreaHeight: o,
          safeAreaMarginTop: 0,
          safeAreaMarginBottom: 0,
          safeAreaMarginLeft: 0,
          safeAreaMarginRight: 0,
          safeAreaXOffset: 0,
          safeAreaYOffset: 0,
          designPxToScreenPxRatio: s
        };
      }
      return this._safeArea;
    },
    set: function (e) {
      this._safeArea = e;
    }
  }]), i;
}(__dependency_2.Adapter))._safeArea = null, c = u)) || c) || c) || c);
__dependency_1.cclegacy._RF.pop();
