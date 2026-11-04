// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Application.ts.js
// SHA256: 08e3d706fea14afd335f5c24e50cdbfeb9a520088349932cd2dd2e53c10747c3
import "../bootstrap/local-runtime";
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Alert";
import * as __dependency_3 from "./main-GameAlert";
import * as __dependency_4 from "./main-GlobalAudio";
import * as __dependency_5 from "./main-Loading";
import * as __dependency_6 from "./main-Tips";
import * as __dependency_7 from "./main-UILoading";
import * as __dependency_8 from "./main-UIReconnect";
import * as __dependency_9 from "./main-UpdateLoading";
import * as __dependency_10 from "./main-Config";
import * as __dependency_11 from "./main-Bundles";
import * as __dependency_12 from "./main-StageData";
import * as __dependency_13 from "./main-CmmEntry";
import * as __dependency_14 from "./main-CommonLanguage";
import * as __dependency_15 from "./main-CmmUtils";
import * as __dependency_16 from "./main-Framework";
import * as __dependency_17 from "./main-CommandManager";
import * as __dependency_18 from "./main-FlowManager";
import * as __dependency_19 from "./main-Enums";
import * as __dependency_20 from "./main-Singleton";
import * as __dependency_21 from "./main-ColorManager";
import * as __dependency_22 from "./main-Macros";
import * as __dependency_23 from "./main-WrapperData";
import * as __dependency_24 from "./main-UrlUtils";
import * as __dependency_25 from "./main-AdapterEvent";
import * as __dependency_26 from "./main-WaitLoading";
var __export_0;
export { __export_0 as Application };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Application":
      __export_0 = value;
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
  void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
(function (t) {
  void 0;
})(__dependency_5);
(function (t) {
  void 0;
})(__dependency_6);
(function (t) {
  void 0;
})(__dependency_7);
(function (t) {
  void 0;
})(__dependency_8);
(function (t) {
  void 0;
})(__dependency_9);
(function (t) {
  void 0;
})(__dependency_10);
(function (t) {
  void 0;
})(__dependency_11);
(function (t) {
  void 0;
})(__dependency_12);
(function (t) {
  void 0;
})(__dependency_13);
(function (t) {
  void 0;
})(__dependency_14);
(function (t) {
  void 0;
})(__dependency_15);
(function (t) {
  void 0;
})(__dependency_16);
(function (t) {
  void 0;
})(__dependency_17);
(function (t) {
  void 0;
})(__dependency_18);
(function (t) {
  void 0;
})(__dependency_19);
(function (t) {
  void 0;
})(__dependency_20);
(function (t) {
  void 0;
})(__dependency_21);
(function (t) {
  void 0;
})(__dependency_22);
(function (t) {
  void 0;
})(__dependency_23);
(function (t) {
  void 0;
})(__dependency_24);
(function (t) {
  void 0;
})(__dependency_25);
(function (t) {
  void 0;
})(__dependency_26);
__dependency_1.cclegacy._RF.push({}, "342b5hltVBEl6IfNcT0LCMW", "Application", void 0);
var D = new (__publish("Application", function (t) {
    function o() {
      for (var n, e = arguments.length, o = new Array(e), a = 0; a < e; a++) o[a] = arguments[a];
      return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || o) || this)._enterBackgroundTime = 0, n._wssCacertUrl = "", n._globalAudio = null, n;
    }
    (0, __dependency_0.inheritsLoose)(o, t);
    var M = o.prototype;
    return M.getColor = function (t, n) {
      n || (n = __dependency_22.Macro.BUNDLE_RESOURCES);
      var e = [];
      return e.push("" + __dependency_22.Macro.USING_COLOR_KEY + n + "." + t), this.colorManager.get(e);
    }, M.init = function () {
      t.prototype.init.call(this), __dependency_1.macro.ENABLE_MULTI_TOUCH = !1, this.updateManager.hotUpdateUrl = __dependency_10.Config.HOT_UPDATE_URL, this.updateManager.isAutoVersion = __dependency_10.Config.USE_AUTO_VERSION, this.updateManager.isSkipCheckUpdate = __dependency_10.Config.isSkipCheckUpdate, this.entryManager.delegate = new __dependency_13.CmmEntry(), this.language.addDelegate(new __dependency_14.CommonLanguage());
      var n = __dependency_24.default.getViewModeParam(),
        e = __dependency_25.EOrientationType.LANDSCAPE;
      n && ("landscape" == n ? e = __dependency_25.EOrientationType.LANDSCAPE : "portrait" == n && (e = __dependency_25.EOrientationType.PORTRAIT)), this.dataCenter.get(__dependency_23.default).orientation = e;
    }, M.onLoad = function (t) {
      App.uiManager.onLoad(t), App.serviceManager.onLoad(), App.entryManager.onLoad(t), App.releaseManger.onLoad(t), gsap.registerPlugin(MotionPathPlugin);
    }, M.update = function (t) {
      App.serviceManager.update(), App.asset.remote.update();
    }, M.onDestroy = function (t) {
      App.serviceManager.onDestroy(), App.entryManager.onDestroy(t), App.releaseManger.onDestroy(t);
    }, M.onEnterBackground = function () {
      this._enterBackgroundTime = Date.timeNow(), Log.d("[MainController]", "onEnterBackground " + this._enterBackgroundTime), App.globalAudio.onEnterBackground(), App.serviceManager.onEnterBackground();
    }, M.onEnterForgeground = function () {
      var t = Date.timeNow(),
        n = t - this._enterBackgroundTime;
      Log.d("[MainController]", "onEnterForgeground " + t + " background total time : " + n), App.globalAudio.onEnterForgeground(n), App.serviceManager.onEnterForgeground(n);
    }, (0, __dependency_0.createClass)(o, [{
      key: "isLazyRelease",
      get: function () {
        return !0;
      }
    }, {
      key: "Bundles",
      get: function () {
        return __dependency_11.EBundles;
      }
    }, {
      key: "isAutoReleaseUnuseResources",
      get: function () {
        return !0;
      }
    }, {
      key: "autoReleaseUnuseResourcesTimeout",
      get: function () {
        return 300;
      }
    }, {
      key: "utils",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_15.CmmUtils);
      }
    }, {
      key: "uiReconnect",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_8.UIReconnect);
      }
    }, {
      key: "tips",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_6.default);
      }
    }, {
      key: "uiLoading",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_7.default);
      }
    }, {
      key: "alert",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_2.default);
      }
    }, {
      key: "gameAlert",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_3.default);
      }
    }, {
      key: "loading",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_5.default);
      }
    }, {
      key: "updateLoading",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_9.default);
      }
    }, {
      key: "waitLoading",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_26.default);
      }
    }, {
      key: "stageData",
      get: function () {
        return this.dataCenter.get(__dependency_12.StageData);
      }
    }, {
      key: "flowManager",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_18.FlowManager);
      }
    }, {
      key: "commandManager",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_17.default);
      }
    }, {
      key: "colorManager",
      get: function () {
        return __dependency_20.default.instance.get(__dependency_21.ColorManager);
      }
    }, {
      key: "wssCacertUrl",
      get: function () {
        return this._wssCacertUrl;
      },
      set: function (t) {
        this._wssCacertUrl = t;
      }
    }, {
      key: "globalAudio",
      get: function () {
        return this._globalAudio || (this._globalAudio = this.uiManager.canvas.getComponent(__dependency_4.default)), this._globalAudio;
      }
    }]), o;
  }(__dependency_16.Framewok)))(),
  T = __dependency_19.LogLevel.ERROR;
D.logger.level = T, window.App = D, D.init(), __dependency_1.cclegacy._RF.pop();
