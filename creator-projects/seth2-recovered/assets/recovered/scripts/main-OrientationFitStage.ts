// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-OrientationFitStage.ts.js
// SHA256: 477d4ace9725f81df60f9272dbb85d36ce360de814a3603e935588c39109c05f
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
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var u;
__dependency_1.cclegacy._RF.push({}, "7d842eSsqpFsbBEOwo3cG4x", "OrientationFitStage", void 0);
var l = __dependency_1._decorator.ccclass,
  h = (__dependency_1._decorator.property, __dependency_1._decorator.menu),
  d = __dependency_1._decorator.executeInEditMode;
__publish("default", l(u = d(u = h("自訂工具/直橫版/OrientationFitStage")(u = function (e) {
  function i() {
    for (var n, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return (n = Reflect.construct(e, [this].concat(o).slice(1), new.target || i) || this).onResize = n.onResizeEvent.bind((0, __dependency_0.assertThisInitialized)(n)), n;
  }
  (0, __dependency_0.inheritsLoose)(i, e);
  var o = i.prototype;
  return o.onEnable = function () {
    __dependency_1.view.on("design-resolution-changed", this.onResize, this), this.onResize();
  }, o.onDisable = function () {
    __dependency_1.view.on("design-resolution-changed", this.onResize, this);
  }, o.update = function (e) {}, o.onResizeEvent = function () {
    var e = this;
    this.scheduleOnce(function () {
      e.scheduleOnce(function () {
        e.syncCanvasSize();
      });
    });
  }, o.syncCanvasSize = function () {
    var e = __dependency_1.director.getScene().getChildByName("Canvas");
    this.node.getComponent(__dependency_1.UITransform).setContentSize(e.getComponent(__dependency_1.UITransform).contentSize);
  }, i;
}(__dependency_1.Component)) || u) || u) || u);
__dependency_1.cclegacy._RF.pop();
