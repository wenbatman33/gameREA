// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WrapperEntry.ts.js
// SHA256: 41930312c0a4bdbb36fbc05e6abdbecfb5bfa9a533b436cf268c662b2e5a0148
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmEntry";
import * as __dependency_4 from "./main-Entry";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./main-Macros";
import * as __dependency_7 from "./main-WrapperData";
import * as __dependency_8 from "./main-WrapperLanguage";
import * as __dependency_9 from "./main-WrapperView";
(function (t) {
  void 0, void 0;
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
var l;
__dependency_1.cclegacy._RF.push({}, "bf4f5bJmlxJ8KeUii64qhtC", "WrapperEntry", void 0);
(0, __dependency_5.registerEntry)("WrapperEntry", __dependency_6.Macro.BUNDLE_RESOURCES, __dependency_9.default)(l = function (t) {
  function a() {
    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || a) || this).language = new __dependency_8.WrapperLanguage(), e.isMain = !0, e.delegate = new __dependency_3.CmmEntry(), e;
  }
  (0, __dependency_0.inheritsLoose)(a, t);
  var u = a.prototype;
  return u.addNetHandler = function () {}, u.removeNetHandler = function () {}, u.loadResources = function (e) {
    e();
  }, u.openGameView = function (e) {
    App.entryManager.enterBundle(__dependency_2.EBundles[__dependency_2.EBundles.slotFramework]);
  }, u.initData = function () {}, u.pauseMessageQueue = function () {}, u.resumeMessageQueue = function () {}, u.onEnter = function (e) {
    t.prototype.onEnter.call(this, e), Log.d("--------------onEnterLogin--------------");
  }, u.onEnterGameView = function (e) {
    t.prototype.onEnterGameView.call(this, e), App.uiManager.closeExcept([__dependency_9.default]);
  }, u.onUnloadBundle = function () {
    this.removeNetHandler(), this.unloadResources();
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_7.default);
    }
  }]), a;
}(__dependency_4.Entry));
__dependency_1.cclegacy._RF.pop();
