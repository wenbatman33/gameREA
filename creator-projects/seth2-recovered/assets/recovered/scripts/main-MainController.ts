// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-MainController.ts.js
// SHA256: ae00ec2ca9d6741d9f1dca5156e0416d0b03f63dc0ffb5b72bf87db72c780c1b
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-DebugView";
import * as __dependency_4 from "./main-EventComponent";
import * as __dependency_5 from "./main-AdapterEvent";
import * as __dependency_6 from "./main-WrapperData";
import * as __dependency_7 from "./main-UrlUtils";
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
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
(function (e) {
  void 0;
})(__dependency_5);
(function (e) {
  void 0;
})(__dependency_6);
(function (e) {
  void 0;
})(__dependency_7);
var D, L, m, A, V, _, M, O, S, C;
__dependency_1.cclegacy._RF.push({}, "8c7cfOZmplNMbf54sZ3NMG6", "MainController", void 0);
var z = __dependency_1._decorator.ccclass,
  T = __dependency_1._decorator.property,
  R = __dependency_1._decorator.menu;
__publish("default", (D = R("Quick公共元件/MainController"), L = T(__dependency_1.Asset), m = T({
  type: (0, __dependency_1.Enum)(__dependency_5.EOrientationType)
}), z(A = D((_ = (0, __dependency_0.applyDecoratedDescriptor)((V = function (e) {
  function t() {
    for (var t, i = arguments.length, r = new Array(i), u = 0; u < i; u++) r[u] = arguments[u];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || t) || this, (0, __dependency_0.initializerDefineProperty)(t, "wssCacert", _, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "width", M, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "height", O, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "orientation", S, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "isLockDirection", C, (0, __dependency_0.assertThisInitialized)(t)), t.debugView = null, t.viewMode = null, t;
  }
  (0, __dependency_0.inheritsLoose)(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    var t = this;
    this.viewMode = __dependency_7.default.getViewModeParam(), e.prototype.onLoad.call(this), App.onLoad(this.node), this.wssCacert;
    var i = (0, __dependency_1.find)("debug", this.node);
    if (this.debugView = (0, __dependency_1.find)("debugView", this.node), i && this.debugView) if (App.storage.getItem(__dependency_2.Config.SHOW_DEBUG_INFO_KEY, !1) ? __dependency_1.profiler.showStats() : __dependency_1.profiler.hideStats(), __dependency_2.Config.isShowDebugButton) {
      i.active = !0;
      var n = this.debugView.addComponent(__dependency_3.DebugView);
      n && (n.debug = i), this.debugView.active = !1, i.on(__dependency_1.Input.EventType.TOUCH_END, function () {
        i && (i.active = !1), t.debugView && (t.debugView.active = !0);
      }), this.onN(i, __dependency_1.Input.EventType.TOUCH_END, function () {
        i && (i.active = !1), t.debugView && (t.debugView.active = !0);
      });
    } else i.destroy(), this.debugView.destroy();
    this.onG(__dependency_1.Game.EVENT_HIDE, this.onEnterBackground), this.onG(__dependency_1.Game.EVENT_SHOW, this.onEnterForgeground), this.onG(__dependency_1.Game.EVENT_LOW_MEMORY, this.onLowMemory), this.orientation == __dependency_5.EOrientationType.PORTRAIT ? __dependency_1.view.setDesignResolutionSize(720, 1280, __dependency_1.ResolutionPolicy.SHOW_ALL) : __dependency_1.view.setDesignResolutionSize(1280, 720, __dependency_1.ResolutionPolicy.SHOW_ALL);
  }, r.start = function () {
    /closeSwipe/i.test(navigator.userAgent) && App.waitLoading.show();
  }, r.update = function (e) {
    App.update(this.node);
  }, r.onDestroy = function () {
    App.onDestroy(this.node), e.prototype.onDestroy.call(this);
  }, r.onEnterBackground = function () {
    App.onEnterBackground();
  }, r.onEnterForgeground = function () {
    App.onEnterForgeground();
  }, r.onLowMemory = function () {
    App.onLowMemory();
  }, r.setOrientation = function () {
    App.dataCenter.get(__dependency_6.default).orientation = this.orientation;
  }, r.setDesignResolutionSize = function (e, t) {
    __dependency_1.view.setDesignResolutionSize(e, t, __dependency_1.ResolutionPolicy.SHOW_ALL);
  }, t;
}(__dependency_4.default)).prototype, "wssCacert", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = (0, __dependency_0.applyDecoratedDescriptor)(V.prototype, "width", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1280;
  }
}), O = (0, __dependency_0.applyDecoratedDescriptor)(V.prototype, "height", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 720;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(V.prototype, "orientation", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), C = (0, __dependency_0.applyDecoratedDescriptor)(V.prototype, "isLockDirection", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), A = V)) || A) || A));
__dependency_1.cclegacy._RF.pop();
