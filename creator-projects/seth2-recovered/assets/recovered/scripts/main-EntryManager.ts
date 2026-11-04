// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-EntryManager.ts.js
// SHA256: 792add3bc577ca15276ad65d1de472aa162af6201519275bb774cba91d8427fc
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-EntryDelegate";
import * as __dependency_2 from "./main-Macros";
var __export_0;
export { __export_0 as EntryManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EntryManager":
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
__dependency_0.cclegacy._RF.push({}, "654eacHc69Fm50EILZ/ggOz", "EntryManager", void 0), __publish("EntryManager", function () {
  function e() {
    this.module = null, this.isResident = !0, this._entrys = new Map(), this.delegate = new __dependency_1.EntryDelegate(), this.node = null;
  }
  var n = e.prototype;
  return n.register = function (e, n) {
    var t = this.getEntry(e.bundle);
    t && this._entrys.delete(e.bundle), (t = new e()).bundle = e.bundle, t.gameViewType = n, this._entrys.set(t.bundle, t), this.node && t.onLoad(this.node);
  }, n.onLoad = function (e) {
    var n = this;
    this.node = e, this._entrys.forEach(function (e, t) {
      e.isRunning || (e.onLoad(n.node), e.isMain && e.onEnter());
    });
  }, n.onDestroy = function (e) {
    this._entrys.forEach(function (e) {
      e.onDestroy();
    });
  }, n.onCheckUpdate = function () {
    this.delegate.onCheckUpdate();
  }, n.call = function (e, n) {
    var t = this.getEntry(e);
    if (t) {
      for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) r[i - 2] = arguments[i];
      t.call(n, r);
    }
  }, n.enterBundle = function (e, n) {
    var t = this.delegate.getEntryConfig(e);
    if (t) if (e == __dependency_2.Macro.BUNDLE_RESOURCES) {
      var r = this.getEntry(e);
      this.delegate.onEnterMain(r, n);
    } else t.userData = n, App.bundleManager.enterBundle(t);
  }, n.backBundle = function (e) {
    var n = App.stageData.prevWhere;
    n ? this.enterBundle(n, e) : Log.d(this.module + "已經是最後一個場景，無法返回");
  }, n.onLoadBundleComplete = function (e) {
    e.isLoaded = !0;
    var n = this.getEntry(e.bundle);
    n && n.onEnter(e.userData);
  }, n.onEnterGameView = function (e, n) {
    var t = this.getEntry(e);
    t && (this.delegate.onEnterGameView(t, n), t.onEnterGameView(n));
  }, n.onShowGameView = function (e, n) {
    var t = this.getEntry(e);
    t && (this.delegate.onShowGameView(t, n), t.onShowGameView(n));
  }, n.onUnloadBundle = function (e) {
    var n = this.getEntry(e);
    n && n.onUnloadBundle();
  }, n.onDestroyGameView = function (e, n) {
    var t = this.getEntry(e);
    t && (t.onUnloadBundle(), t.onDestroyGameView(n));
  }, n.getEntry = function (e) {
    var n = App.bundleManager.getBundleName(e),
      t = this._entrys.get(n);
    return t || null;
  }, n.debug = function () {
    Log.d("-------Bundle入口管理器-------"), this._entrys.forEach(function (e) {
      Log.d("bundle : " + e.bundle);
    });
  }, e;
}()).module = "【入口管理器】", __dependency_0.cclegacy._RF.pop();
