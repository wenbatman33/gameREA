// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WaitLoading.ts.js
// SHA256: b35d17c5ffd94c0c9db9bae5d7b2b5d6ce0f681b89af19dc8573020c50f7684a
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
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
  void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "4318dP9CP9JZbUPX3+mNgLm", "WaitLoading", void 0), __publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.node = null, this.intervalId = -1;
  }
  var i = t.prototype;
  return i.show = function () {
    var t = this;
    return this._show(), this.intervalId = setInterval(function () {
      null != App.gameLoading && null != App.gameLoading.node && App.gameLoading.node.active && (App.waitLoading.hide(), clearInterval(t.intervalId));
    }, .3), this;
  }, i._show = function () {
    this.prefab && (this.node || (this.node = (0, __dependency_1.instantiate)(this.prefab)), this.node.removeFromParent(), App.uiManager.addView(this.node, __dependency_2.ViewZOrder.WaitLoading), this.node.position = __dependency_1.Vec3.ZERO, this.node.active = !0);
  }, i.hide = function () {
    this.node && (this.node.active = !1);
  }, i.isActive = function () {
    return !!this.node && this.node.active;
  }, (0, __dependency_0.createClass)(t, [{
    key: "prefab",
    get: function () {
      return App.uiManager.getScenePrefab("WaitLoading");
    }
  }]), t;
}()).module = "【WaitLoading】", __dependency_1.cclegacy._RF.pop();
