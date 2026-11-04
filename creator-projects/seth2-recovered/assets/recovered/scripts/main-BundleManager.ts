// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-BundleManager.ts.js
// SHA256: 0f0fb92745b5e54d6f6c765dab15ae728a6cb1814730efb4b5e46ceb6c322710
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
import * as __dependency_3 from "./main-Bundles";
var __export_0;
export { __export_0 as BundleManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BundleManager":
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
  void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "2e004QPo4RDaquC+p8l+fiE", "BundleManager", void 0), __publish("BundleManager", function () {
  function e() {
    this.module = null;
  }
  var t = e.prototype;
  return t.isEngineBundle = function (e) {
    return e == __dependency_1.AssetManager.BuiltinBundleName.MAIN || e == __dependency_1.AssetManager.BuiltinBundleName.RESOURCES || e == __dependency_1.AssetManager.BuiltinBundleName.START_SCENE || e == __dependency_1.AssetManager.BuiltinBundleName.INTERNAL;
  }, t.removeLoadedBundle = function (e) {
    var n = this,
      o = [];
    __dependency_1.assetManager.bundles.forEach(function (e, t) {
      n.isEngineBundle(t) || o.push(t);
    });
    for (var t = o.length; t--;) {
      var a = o[t];
      if (-1 == e.indexOf(a)) {
        App.releaseManger.isExistBunble(a) || App.entryManager.onUnloadBundle(a);
        var u = this.getBundle(a);
        u && (App.cache.removeBundle(a), App.releaseManger.removeBundle(u));
      }
    }
  }, t.getBundle = function (e) {
    return e ? "string" == typeof e ? __dependency_1.assetManager.getBundle(e) : e : null;
  }, t.getBundleName = function (e) {
    return e ? "string" == typeof e ? e : e.name : (Log.e("輸入引數錯誤 : " + e), __dependency_2.Macro.UNKNOWN);
  }, t.enterBundle = function (e) {
    e ? App.updateManager.dowonLoad(e) : Log.e("無效的入口資訊");
  }, t.loadBundle = function (e) {
    var n, o;
    if (this.getBundle(e.bundle)) return Log.d(e.bundle + "已经加载在缓存中，直接使用"), App.releaseManger.onLoadBundle(e.bundle), void e.handler.onLoadBundleComplete(e);
    (e.handler.onStartLoadBundle(e), Log.d("loadBundle : " + e.bundle), null != (n = window) && n.updatingLoadingMsg) && (null == (o = window) || o.updatingLoadingMsg("" + e.bundle));
    this._loadBundle(e.bundle, function (n, o) {
      n ? (Log.e("load bundle : " + e.bundle + " fail !!!"), e.handler.onLoadBundleError(e, n)) : (App.releaseManger.onLoadBundle(e.bundle), Log.d("load bundle : " + e.bundle + " success !!!"), e.handler.onLoadBundleComplete(e));
    });
  }, t._loadBundle = function () {
    var e = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function e(n, t) {
      var a, u, d, i, s, c, g;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (a = this.getHostType(window.location.hostname), n != __dependency_3.EBundles[__dependency_3.EBundles.slotFramework]) {
              e.next = 26;
              break;
            }
            if ("domain" != a) {
              e.next = 23;
              break;
            }
            return e.prev = 3, d = location.protocol + "//" + location.host + "/" + __dependency_3.EBundles[__dependency_3.EBundles.slotFramework] + "/manifest.json?" + new Date().getTime(), e.next = 7, fetch(d);
          case 7:
            return u = e.sent, e.next = 10, u.text();
          case 10:
            i = e.sent, s = JSON.parse(i), c = s.hash, g = location.protocol + "//" + location.host + "/" + __dependency_3.EBundles[__dependency_3.EBundles.slotFramework] + "/" + c, Log.e("slotFramework bundle url ::::", d), __dependency_1.assetManager.loadBundle(g, t), e.next = 21;
            break;
          case 18:
            e.prev = 18, e.t0 = e.catch(3), Log.e("load bundle " + __dependency_3.EBundles[__dependency_3.EBundles.slotFramework] + " error:::", u, e.t0);
          case 21:
            e.next = 24;
            break;
          case 23:
            __dependency_1.assetManager.loadBundle(n, t);
          case 24:
            e.next = 27;
            break;
          case 26:
            __dependency_1.assetManager.loadBundle(n, t);
          case 27:
          case "end":
            return e.stop();
        }
      }, e, this, [[3, 18]]);
    }));
    return function (n, o) {
      return e.apply(this, arguments);
    };
  }(), t.getHostType = function (e) {
    return "localhost" === e ? "localhost" : /^\d/.test(e) ? "ip" : "domain";
  }, t.debug = function () {
    Log.d("-------Bundle管理器狀態資訊-------");
    var e = [];
    __dependency_1.assetManager.bundles.forEach(function (n, o) {
      e.push(n.name);
    }), Log.d("當前所有載入完成的bundle : " + e.toString());
  }, e;
}()).module = "【Bundle管理器】", __dependency_1.cclegacy._RF.pop();
