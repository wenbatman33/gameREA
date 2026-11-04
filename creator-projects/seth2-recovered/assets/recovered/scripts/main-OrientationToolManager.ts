// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-OrientationToolManager.ts.js
// SHA256: 8843acd141b2fa5d996238e6a7eae27bd77ba605d609bf01fb18e38f5d2d66fa
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-OrientationCanvas";
import * as __dependency_3 from "./main-OrientationTool";
var __export_0;
export { __export_0 as ORIENTATION_TYPE };
var __export_1;
export { __export_1 as ORIENTATION_EVENT };
var __export_2;
export { __export_2 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ORIENTATION_TYPE":
      __export_0 = value;
      break;
    case "ORIENTATION_EVENT":
      __export_1 = value;
      break;
    case "default":
      __export_2 = value;
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
var f, h;
__dependency_1.cclegacy._RF.push({}, "b242aJ8WiFHE72hu0zB3W9W", "OrientationToolManager", void 0);
var g = __dependency_1._decorator.ccclass,
  O = (__dependency_1._decorator.property, __dependency_1._decorator.executeInEditMode),
  E = __publish("ORIENTATION_TYPE", {
    NONE: 0,
    HORIZONTAL: 1,
    VERTICAL: 2
  });
__publish("ORIENTATION_EVENT", {
  RESIZE: "ORIENTATION_EVENT_RESIZE",
  WIDGET_RESIZE: "ORIENTATION_EVENT_WIDGET_RESIZE"
}), __publish("default", g(f = O(((h = function (t) {
  function i() {
    for (var o, n = arguments.length, i = new Array(n), e = 0; e < n; e++) i[e] = arguments[e];
    return (o = Reflect.construct(t, [this].concat(i).slice(1), new.target || i) || this).orientationToolList = {}, o;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var e = i.prototype;
  return e.onLoad = function () {
    this.getAllTools();
  }, e.start = function () {}, e.onEnable = function () {
    __dependency_1.director.on("OrientationToVertical", this.toVerticall, this), __dependency_1.director.on("OrientationToHorizontal", this.toHorizontal, this);
  }, e.onDisable = function () {
    __dependency_1.director.off("OrientationToVertical", this.toVerticall, this), __dependency_1.director.off("OrientationToHorizontal", this.toHorizontal, this);
  }, e.update = function () {}, e.addToList = function (t) {
    this.orientationToolList[t.uuid] = t;
  }, e.removeFormList = function (t) {
    delete this.orientationToolList[t.uuid];
  }, i.getInstance = function () {
    if (__dependency_1.director.getScene()) {
      var t = (0, __dependency_1.find)("OrientationToolManager");
      if (null == t) {
        var o = __dependency_1.director.getScene().getChildByName("Canvas");
        if (null == o) return;
        (t = new __dependency_1.Node("OrientationToolManager")).setParent(o.parent), t.addComponent(i);
      }
      return t.getComponent(i);
    }
  }, e.toVerticall = function () {
    for (var t in this.orientationToolList) this.orientationToolList.hasOwnProperty(t) && (0, __dependency_1.isValid)(this.orientationToolList[t]) && this.orientationToolList[t].toVerticall();
  }, e.toHorizontal = function () {
    for (var t in this.orientationToolList) this.orientationToolList.hasOwnProperty(t) && (0, __dependency_1.isValid)(this.orientationToolList[t]) && this.orientationToolList[t].toHorizontal();
  }, e.getAllTools = function () {
    for (var t = __dependency_1.director.getScene().getChildByName("Canvas").parent.getComponentsInChildren(__dependency_3.default), o = 0; o < t.length; o++) t[o].isStaticNode = !0, this.orientationToolList[t[o].uuid] = t[o];
  }, e.canvasToVerticall = function () {
    var t = __dependency_1.director.getScene().getChildByName("Canvas").getComponent(__dependency_2.default);
    i.orientationState = E.VERTICAL, t.setCanvasSize();
  }, e.canvasToHorizontal = function () {
    var t = __dependency_1.director.getScene().getChildByName("Canvas").getComponent(__dependency_2.default);
    i.orientationState = E.HORIZONTAL, t.setCanvasSize();
  }, (0, __dependency_0.createClass)(i, null, [{
    key: "lockingOrientation",
    get: function () {
      return i._lockingOrientation;
    },
    set: function (t) {
      i._lockingOrientation = t, t || (i.orientationState === E.HORIZONTAL ? i.getInstance().toHorizontal() : i.orientationState === E.VERTICAL && i.getInstance().toVerticall());
    }
  }]), i;
}(__dependency_1.Component)).orientationState = E.NONE, h._lockingOrientation = !1, f = h)) || f) || f);
__dependency_1.cclegacy._RF.pop();
