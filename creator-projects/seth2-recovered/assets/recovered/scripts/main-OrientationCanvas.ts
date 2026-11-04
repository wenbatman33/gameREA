// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-OrientationCanvas.ts.js
// SHA256: 2b8d5fa0e972da025982c0b4b0938972ecde8b060a47cbb07fd52a9f4e7cca95
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-OrientationToolManager";
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
  void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_2);
var d;
__dependency_1.cclegacy._RF.push({}, "8cf72h3f2JJHLQwAWa9DhBz", "OrientationCanvas", void 0);
var f = __dependency_1._decorator.ccclass,
  I = (__dependency_1._decorator.property, __dependency_1._decorator.menu);
__publish("default", f(d = I("自訂工具/直橫版/OrientationCanvas")(d = function (t) {
  function o() {
    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || o) || this).orientationToolManager = null, n.isChanging = !1, n.onResize = n.canvasResize.bind((0, __dependency_0.assertThisInitialized)(n)), n;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var a = o.prototype;
  return a.onLoad = function () {
    this.orientationToolManager = __dependency_2.default.getInstance();
  }, a.start = function () {
    this.orientationToolManager && this.initOrientation(), window.addEventListener("resize", this.onResize);
  }, a.onDestroy = function () {
    __dependency_2.default.orientationState = __dependency_2.ORIENTATION_TYPE.NONE, window.removeEventListener("resize", this.onResize);
  }, a.initOrientation = function () {
    for (var t in __dependency_1.sys.isMobile ? 180 === this.orientationAngle || 0 === this.orientationAngle ? __dependency_2.default.orientationState = __dependency_2.ORIENTATION_TYPE.VERTICAL : __dependency_2.default.orientationState = __dependency_2.ORIENTATION_TYPE.HORIZONTAL : window.innerWidth >= window.innerHeight ? __dependency_2.default.orientationState = __dependency_2.ORIENTATION_TYPE.HORIZONTAL : __dependency_2.default.orientationState = __dependency_2.ORIENTATION_TYPE.VERTICAL, this.setCanvasSize(), this.orientationToolManager.orientationToolList) __dependency_2.default.orientationState === __dependency_2.ORIENTATION_TYPE.HORIZONTAL ? this.orientationToolManager.orientationToolList[t].toHorizontal() : this.orientationToolManager.orientationToolList[t].toVerticall();
  }, a.setCanvasSize = function () {
    var t = __dependency_1.director.getScene().getChildByName("Canvas"),
      n = t.getComponent(__dependency_1.UITransform).contentSize,
      i = n.width,
      e = n.height,
      o = n.x,
      a = n.y;
    if (__dependency_2.default.orientationState === __dependency_2.ORIENTATION_TYPE.HORIZONTAL) {
      if (__dependency_1.view.setOrientation(__dependency_1.macro.ORIENTATION_LANDSCAPE), i < e) {
        var r = [e, i];
        i = r[0], e = r[1];
        var u = [a, o];
        o = u[0], a = u[1];
      }
    } else if (__dependency_1.view.setOrientation(__dependency_1.macro.ORIENTATION_PORTRAIT), e < i) {
      var T = [e, i];
      i = T[0], e = T[1];
      var R = [a, o];
      o = R[0], a = R[1];
    }
    t.getComponent(__dependency_1.UITransform).setContentSize(i, e), t.setPosition(o, a);
    var d = __dependency_2.default.orientationState === __dependency_2.ORIENTATION_TYPE.HORIZONTAL ? 1280 : 720,
      f = __dependency_2.default.orientationState === __dependency_2.ORIENTATION_TYPE.HORIZONTAL ? 720 : 1280;
    __dependency_1.view.setDesignResolutionSize(d, f, __dependency_1.ResolutionPolicy.SHOW_ALL);
    var I = __dependency_1.view.getDesignResolutionSize().height > __dependency_1.view.getDesignResolutionSize().width,
      S = __dependency_1.view.getDesignResolutionSize().width > __dependency_1.view.getDesignResolutionSize().height,
      L = null;
    I && S ? L = __dependency_1.ResolutionPolicy.SHOW_ALL : I && !S ? L = __dependency_1.ResolutionPolicy.FIXED_WIDTH : !I && S && (L = __dependency_1.ResolutionPolicy.FIXED_HEIGHT), __dependency_1.view.setResolutionPolicy(L), this.isChanging = !1;
  }, a.canvasResize = function () {
    var t = this;
    this.scheduleOnce(function () {
      if (__dependency_1.sys.isMobile) {
        if (t.isChanging || __dependency_2.default.lockingOrientation) return;
        for (var n in t.isChanging = !0, t.switchCanvas(), t.orientationToolManager.orientationToolList) t.orientationToolManager.orientationToolList[n].canvasResize();
        __dependency_1.director.emit(__dependency_2.ORIENTATION_EVENT.RESIZE);
      }
      __dependency_1.director.emit(__dependency_2.ORIENTATION_EVENT.WIDGET_RESIZE), t.node.getComponentsInChildren(__dependency_1.Widget).forEach(function (t) {
        t.enabled && t.updateAlignment();
      });
    });
  }, a.switchCanvas = function () {
    window.innerWidth >= window.innerHeight ? __dependency_2.default.orientationState = __dependency_2.ORIENTATION_TYPE.HORIZONTAL : __dependency_2.default.orientationState = __dependency_2.ORIENTATION_TYPE.VERTICAL, this.setCanvasSize();
  }, (0, __dependency_0.createClass)(o, [{
    key: "orientationAngle",
    get: function () {
      var t, n;
      return (null == (t = screen) || null == (n = t.orientation) ? void 0 : n.angle) || window.orientation;
    }
  }]), o;
}(__dependency_1.Component)) || d) || d);
__dependency_1.cclegacy._RF.pop();
