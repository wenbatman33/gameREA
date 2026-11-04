// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Entry.ts.js
// SHA256: 566e378aaf6c8c6d9068f97e9ab94331abb83cd64bae14de4a46c4066a130ba6
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-ResourceLoader";
var __export_0;
export { __export_0 as Entry };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Entry":
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
__dependency_1.cclegacy._RF.push({}, "5aaf2lBMtdMrrl2N8Y5zFqB", "Entry", void 0), __publish("Entry", function () {
  function e() {
    this.gameViewType = null, this.isMain = !1, this.bundle = "", this.language = null, this.color = null, this.loader = null, this.node = null, this.isRunning = !1, this._gameView = null, this.loader = new __dependency_2.default();
  }
  var i = e.prototype;
  return i.onLoad = function (e) {
    this.node = e, this.isRunning = !0;
  }, i.onDestroy = function () {
    this.isRunning = !1;
  }, i.onEnter = function (e) {
    var n = this;
    App.language.addDelegate(this.language), App.colorManager.addProxy(this.color), this.initData(), this.addNetHandler(), this.pauseMessageQueue(), this.loadResources(function () {
      n.openGameView(e);
    });
  }, i.onEnterGameView = function (e) {
    this._gameView = e;
    var n = App.uiManager.getViewType(e);
    if (n && n.logicType) {
      n.logicType.module = e.bundle;
      var i = App.logicManager.get(n.logicType, !0);
      i && e.setLogic(i);
    }
  }, i.onShowGameView = function (e) {}, i.onDestroyGameView = function (e) {
    this._gameView = null;
  }, i.onUnloadBundle = function () {
    App.uiManager.closeBundleView(this.bundle), App.language.removeDelegate(this.language), App.colorManager.removeProxy(this.color), this.removeNetHandler(), this.unloadResources();
  }, i.unloadResources = function () {
    this.loader.unLoadResources();
  }, i.openGameView = function (e) {
    App.uiManager.open({
      type: this.gameViewType,
      bundle: this.bundle,
      args: e
    });
  }, i.closeGameView = function () {
    App.uiManager.close(this.gameViewType);
  }, i.call = function (e, n) {}, (0, __dependency_0.createClass)(e, [{
    key: "gameView",
    get: function () {
      return this._gameView;
    },
    set: function (e) {
      this._gameView = e;
    }
  }]), e;
}()).bundle = "", __dependency_1.cclegacy._RF.pop();
