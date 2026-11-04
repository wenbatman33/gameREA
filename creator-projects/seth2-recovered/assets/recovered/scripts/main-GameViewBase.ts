// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-GameViewBase.ts.js
// SHA256: 92558f56ce9e2e74eea75d579e9f9eb638f4787821b71cf407b8940f9a5cd1d0
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UIView";
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
  void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
var s, c;
__dependency_1.cclegacy._RF.push({}, "66ed7mLgh5JN7pytAnnmoAG", "GameViewBase", void 0);
var a = __dependency_1._decorator.ccclass,
  l = (__dependency_1._decorator.property, __dependency_1._decorator.menu);
__publish("default", a(s = l("Quick公共元件/GameView")(((c = function (e) {
  function o() {
    for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || o) || this)._logic = null, t;
  }
  (0, __dependency_0.inheritsLoose)(o, e);
  var i = o.prototype;
  return i.setLogic = function (e) {
    this._logic = e, e && e.onLoad(this);
  }, i.onLoad = function () {
    e.prototype.onLoad.call(this), this.onEnterGameView();
  }, i.show = function (t) {
    e.prototype.show.call(this, t), App.entryManager.onShowGameView(this.bundle, this);
  }, i.onEnterGameView = function () {
    App.entryManager.onEnterGameView(this.bundle, this);
  }, i.enterBundle = function (e, t) {
    App.entryManager.enterBundle(e, t);
  }, i.backBundle = function (e) {
    App.entryManager.backBundle(e);
  }, i.onDestroy = function () {
    this.audioHelper && this.audioHelper.stopAllEffects(), this.logic && App.logicManager.destory(this.logic.bundle), App.entryManager.onDestroyGameView(this.bundle, this), e.prototype.onDestroy.call(this);
  }, i.update = function (e) {
    this.logic && this.logic.update(e);
  }, i.reset = function () {
    this.logic && this.logic.reset(this);
  }, (0, __dependency_0.createClass)(o, [{
    key: "logic",
    get: function () {
      return this._logic;
    }
  }]), o;
}(__dependency_2.default)).logicType = null, s = c)) || s) || s);
__dependency_1.cclegacy._RF.pop();
