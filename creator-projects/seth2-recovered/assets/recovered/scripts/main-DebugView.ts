// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-DebugView.ts.js
// SHA256: b9cdf001333c18f512672065c3a2149f45935bdaeffa160091ead106bf1418a6
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./main-Enums";
import * as __dependency_5 from "./main-Singleton";
import * as __dependency_6 from "./main-Config";
var __export_0;
export { __export_0 as DebugView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DebugView":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
var S, E, L, M, A, D, y, V, z, C, m;
__dependency_1.cclegacy._RF.push({}, "c0535WAUCFLAaS7ODYfqrlE", "DebugView", void 0);
var R = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("DebugView", (S = R("DebugView"), E = (0, __dependency_3.inject)("logView", __dependency_1.Node), L = (0, __dependency_3.inject)("content", __dependency_1.Node), M = (0, __dependency_3.inject)("background", __dependency_1.Node), A = (0, __dependency_3.inject)("background", __dependency_1.Node, "logView"), S((V = (0, __dependency_0.applyDecoratedDescriptor)((y = function (e) {
  function n() {
    for (var n, t = arguments.length, r = new Array(t), g = 0; g < t; g++) r[g] = arguments[g];
    return n = Reflect.construct(e, [this].concat(r).slice(1), new.target || n) || this, (0, __dependency_0.initializerDefineProperty)(n, "logView", V, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "content", z, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "background", C, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "logViewBackground", m, (0, __dependency_0.assertThisInitialized)(n)), n.debug = null, n;
  }
  (0, __dependency_0.inheritsLoose)(n, e);
  var r = n.prototype;
  return r.onLoad = function () {
    this.bindEvent("showUI", this.onShowUI), this.bindEvent("showNode", this.onShowNode), this.bindEvent("showRes", this.onShowRes), this.bindEvent("showComponent", this.onShowComp), this.bindEvent("showDebugInfo", this.onShowDebugInfo), this.bindEvent("log", this.onLog), this.bindEvent("logic", this.onLogicManager), this.bindEvent("dataCenter", this.onDataCenter), this.bindEvent("entry", this.onEntry), this.bindEvent("proto", this.onProto), this.bindEvent("bundleMgr", this.onBundleMgr), this.bindEvent("pool", this.onPool), this.bindEvent("sender", this.onSender), this.bindEvent("handler", this.onHandler), this.bindEvent("serviceManager", this.onServiceManager), this.bindEvent("hotupdate", this.onHotUpdate), this.bindEvent("lowMemory", this.onLowMemory), this.bindEvent("releaseManager", this.onReleaseManager), this.bindEvent("adaptor", this.onAdaptor), this.bindEvent("singleton", this.onSingleton), this.doOther();
  }, r.doOther = function () {
    var e = this;
    this.logView && (this.logView.active = !1, this.initLogView()), this.onN(this.background, __dependency_1.Input.EventType.TOUCH_END, function () {
      e.node.active = !1, e.debug && (e.debug.active = !0);
    });
  }, r.bindEvent = function (e, n) {
    var t = (0, __dependency_1.find)(e, this.content);
    this.onN(t, __dependency_1.Input.EventType.TOUCH_END, n);
  }, r.initLogView = function () {
    var e = this;
    this.onN(this.logViewBackground, __dependency_1.Input.EventType.TOUCH_END, function () {
      e.logView.active = !1;
    });
    var n = (0, __dependency_1.find)("level", this.logView);
    if (n) for (var t = function (t) {
        var i = (0, __dependency_1.find)("type" + t, n);
        if (i) {
          var o = i.getComponent(__dependency_1.Toggle);
          o && (o.isChecked = App.logger.isValid(e.getLogLevel(t))), e.onN(i, "toggle", function (n) {
            n.isChecked ? App.logger.attach(e.getLogLevel(t)) : App.logger.detach(e.getLogLevel(t));
          });
        }
      }, i = 0; i < n.children.length - 1; i++) t(i);
  }, r.getLogLevel = function (e) {
    switch (e) {
      case 0:
        return __dependency_4.LogLevel.DEBUG;
      case 1:
        return __dependency_4.LogLevel.WARN;
      case 2:
        return __dependency_4.LogLevel.ERROR;
      case 3:
        return __dependency_4.LogLevel.DUMP;
      default:
        return __dependency_4.LogLevel.DEBUG;
    }
  }, r.onLogicManager = function () {
    App.logicManager.debug();
  }, r.onDataCenter = function () {
    App.dataCenter.debug();
  }, r.onEntry = function () {
    App.entryManager.debug();
  }, r.onProto = function () {
    App.protoManager.debug();
  }, r.onBundleMgr = function () {
    App.bundleManager.debug();
  }, r.onPool = function () {
    App.pool.debug();
  }, r.onLog = function () {
    this.logView.active = !0;
  }, r.onShowDebugInfo = function () {
    __dependency_1.profiler.isShowingStats() ? __dependency_1.profiler.hideStats() : __dependency_1.profiler.showStats(), App.storage.setItem(__dependency_6.Config.SHOW_DEBUG_INFO_KEY, __dependency_1.profiler.isShowingStats());
  }, r.onShowUI = function () {
    App.uiManager.debug({
      showViews: !0
    });
  }, r.onShowNode = function () {
    App.uiManager.debug({
      showChildren: !0
    });
  }, r.onShowRes = function () {
    App.cache.debug();
  }, r.onShowComp = function () {
    App.uiManager.debug({
      showComp: !0
    });
  }, r.onSender = function () {
    App.senderManager.debug();
  }, r.onHandler = function () {
    App.handlerManager.debug();
  }, r.onServiceManager = function () {
    App.serviceManager.debug();
  }, r.onHotUpdate = function () {
    App.updateManager.debug();
  }, r.onLowMemory = function () {
    App.onLowMemory();
  }, r.onReleaseManager = function () {
    App.releaseManger.debug();
  }, r.onAdaptor = function () {
    Log.d("-----------------------------適配資訊-----------------------------------------------"), Log.d("螢幕解析度: " + __dependency_1.screen.windowSize.width + " x " + __dependency_1.screen.windowSize.height), Log.d("檢視視窗可見區域解析度: " + __dependency_1.view.getVisibleSize().width + " x " + __dependency_1.view.getVisibleSize().height), Log.d("檢視中邊框尺寸: " + __dependency_1.screen.windowSize.width + " x " + __dependency_1.screen.windowSize.height), Log.d("裝置或瀏覽器畫素比例: " + __dependency_1.screen.devicePixelRatio), Log.d("返回檢視視窗可見區域畫素尺寸: " + __dependency_1.view.getVisibleSizeInPixel().width + " x " + __dependency_1.view.getVisibleSizeInPixel().height), Log.d("當前場景設計解析度: " + __dependency_1.view.getDesignResolutionSize().width + " x " + __dependency_1.view.getDesignResolutionSize().height);
    var e = __dependency_1.screen.windowSize.width / __dependency_1.screen.windowSize.height,
      n = __dependency_1.view.getDesignResolutionSize().width / __dependency_1.view.getDesignResolutionSize().height;
    Log.d("檢視寬高比:" + e), Log.d("設定解析度寬高比:" + n);
  }, r.onSingleton = function () {
    __dependency_5.default.instance.debug();
  }, n;
}(__dependency_2.default)).prototype, "logView", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "content", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "background", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "logViewBackground", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = y)) || D));
__dependency_1.cclegacy._RF.pop();
