// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Framework.ts.js
// SHA256: 8630d30088e8ff96b088623442c27c055774dc649d60d60537b0252fde80417a
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Dispatcher";
import * as __dependency_3 from "./main-UIManager";
import * as __dependency_4 from "./main-LocalStorage";
import * as __dependency_5 from "./main-AssetManager";
import * as __dependency_6 from "./main-CacheManager";
import * as __dependency_7 from "./main-NodePoolManager";
import * as __dependency_8 from "./main-UpdateManager";
import * as __dependency_9 from "./main-BundleManager";
import * as __dependency_10 from "./main-CocosExtention";
import * as __dependency_11 from "./main-Language";
import * as __dependency_12 from "./main-Macros";
import * as __dependency_13 from "./main-ProtoManager";
import * as __dependency_14 from "./main-EntryManager";
import * as __dependency_15 from "./main-DataCenter";
import * as __dependency_16 from "./main-LogicManager";
import * as __dependency_17 from "./main-Logger";
import * as __dependency_18 from "./main-ServiceManager";
import * as __dependency_19 from "./main-ReleaseManager";
import * as __dependency_20 from "./main-HttpClient";
import * as __dependency_21 from "./main-Singleton";
import * as __dependency_22 from "./main-LayoutManager";
import * as __dependency_23 from "./main-SenderManager";
import * as __dependency_24 from "./main-HandlerManager";
import * as __dependency_25 from "./main-Utils";
import * as __dependency_26 from "./main-CanvasHelper";
import * as __dependency_27 from "./main-Platform";
var __export_0;
export { __export_0 as Framewok };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Framewok":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
(function (e) {
  void 0;
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
(function (e) {
  void 0;
})(__dependency_8);
(function (e) {
  void 0;
})(__dependency_9);
(function (e) {
  void 0;
})(__dependency_10);
(function (e) {
  void 0;
})(__dependency_11);
(function (e) {
  void 0;
})(__dependency_12);
(function (e) {
  void 0;
})(__dependency_13);
(function (e) {
  void 0;
})(__dependency_14);
(function (e) {
  void 0;
})(__dependency_15);
(function (e) {
  void 0;
})(__dependency_16);
(function (e) {
  void 0;
})(__dependency_17);
(function (e) {
  void 0;
})(__dependency_18);
(function (e) {
  void 0;
})(__dependency_19);
(function (e) {
  void 0;
})(__dependency_20);
(function (e) {
  void 0;
})(__dependency_21);
(function (e) {
  void 0;
})(__dependency_22);
(function (e) {
  void 0;
})(__dependency_23);
(function (e) {
  void 0;
})(__dependency_24);
(function (e) {
  void 0;
})(__dependency_25);
(function (e) {
  void 0;
})(__dependency_26);
(function (e) {
  void 0;
})(__dependency_27);
__dependency_1.cclegacy._RF.push({}, "1fa052sIW5GVb6Iw0KrOz1L", "Framework", void 0);
__publish("Framewok", function () {
  function e() {
    this.gameView = null;
  }
  var t = e.prototype;
  return t.getGameView = function () {
    return this.gameView;
  }, t.getLanguage = function (e, n, t) {
    t || (t = __dependency_12.Macro.BUNDLE_RESOURCES), n || (n = []);
    var a = [];
    return a.push("" + __dependency_12.Macro.USING_LAN_KEY + t + "." + e), a.push.apply(a, n), this.language.get(a);
  }, t.init = function () {
    (0, __dependency_10.CocosExtentionInit)();
  }, t.onLowMemory = function () {
    this.releaseManger.onLowMemory();
  }, (0, __dependency_0.createClass)(e, [{
    key: "isLazyRelease",
    get: function () {
      return !1;
    }
  }, {
    key: "releaseManger",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_19.ReleaseManager);
    }
  }, {
    key: "serviceManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_18.ServiceManager);
    }
  }, {
    key: "senderManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_23.SenderManager);
    }
  }, {
    key: "handlerManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_24.HandlerManager);
    }
  }, {
    key: "logger",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_17.LoggerImpl);
    }
  }, {
    key: "logicManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_16.LogicManager);
    }
  }, {
    key: "dataCenter",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_15.DataCenter);
    }
  }, {
    key: "entryManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_14.EntryManager);
    }
  }, {
    key: "utils",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_25.Utils);
    }
  }, {
    key: "protoManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_13.ProtoManager);
    }
  }, {
    key: "bundleManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_9.BundleManager);
    }
  }, {
    key: "updateManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_8.UpdateManager);
    }
  }, {
    key: "retainMemory",
    get: function () {
      return this.uiManager.retainMemory;
    }
  }, {
    key: "language",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_11.Language);
    }
  }, {
    key: "dispatcher",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_2.Dispatcher);
    }
  }, {
    key: "uiManager",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_3.UIManager);
    }
  }, {
    key: "localStorage",
    get: function () {
      return this.storage;
    }
  }, {
    key: "storage",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_4.LocalStorage);
    }
  }, {
    key: "assetManager",
    get: function () {
      return this.asset;
    }
  }, {
    key: "asset",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_5._AssetManager);
    }
  }, {
    key: "cacheManager",
    get: function () {
      return this.cache;
    }
  }, {
    key: "cache",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_6.CacheManager);
    }
  }, {
    key: "nodePoolManager",
    get: function () {
      return this.pool;
    }
  }, {
    key: "pool",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_7.NodePoolManager);
    }
  }, {
    key: "http",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_20.HttpClient);
    }
  }, {
    key: "tips",
    get: function () {
      return null;
    }
  }, {
    key: "uiLoading",
    get: function () {
      return null;
    }
  }, {
    key: "wssCacertUrl",
    get: function () {
      return "";
    }
  }, {
    key: "layout",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_22.LayoutManager);
    }
  }, {
    key: "canvasHelper",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_26.CanvasHelper);
    }
  }, {
    key: "platform",
    get: function () {
      return __dependency_21.default.instance.get(__dependency_27.Platform);
    }
  }]), e;
}());
__dependency_1.cclegacy._RF.pop();
