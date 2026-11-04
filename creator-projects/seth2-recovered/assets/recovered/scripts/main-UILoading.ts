// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UILoading.ts.js
// SHA256: 60f21bbfcf6722aeaa06374142eb610491305df2590465e5e17d832a8c457255
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0, void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "12c4eqKidlCLJ2tu1NcSFWA", "UILoading", void 0), __publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.node = null, this.delay = 0, this.content = null, this.text = null, this._uiName = null, this._contentOpacity = null, this._timerId = -1;
  }
  var e = t.prototype;
  return e.show = function (t, i) {
    this.delay = null == t || null == t || t < 0 ? __dependency_2.Config.LOAD_VIEW_DELAY : t, this._uiName = i || "", this._show();
  }, e._show = function () {
    var t;
    this.node || (this.node = (0, __dependency_1.instantiate)(this.prefab)), this.node.removeFromParent(), App.uiManager.addView(this.node, __dependency_2.ViewZOrder.UILoading), this.node.position = __dependency_1.Vec3.ZERO, this.content = (0, __dependency_1.find)("content", this.node), __dependency_1.Tween.stopAllByTarget(this.contentOpacity), this.text = null == (t = (0, __dependency_1.find)("text", this.content)) ? void 0 : t.getComponent(__dependency_1.Label), this.text.string = "0%", this.contentOpacity.opacity = 0, this.delay > 0 && (0, __dependency_1.tween)(this.contentOpacity).delay(this.delay).set({
      opacity: 255
    }).start(), this.startTimeOutTimer(__dependency_2.Config.LOAD_VIEW_TIME_OUT), this.node.active = !0;
  }, e.startTimeOutTimer = function (t) {
    var i = this;
    this.stopTimeOutTimer(), t && (this._timerId = setTimeout(function () {
      App.tips.show("加载界面" + (i._uiName ? i._uiName : "") + "超时，请重试"), i.hide();
    }, 1e3 * t));
  }, e.stopTimeOutTimer = function () {
    clearTimeout(this._timerId), this._timerId = -1;
  }, e.hide = function () {
    this.stopTimeOutTimer(), this.node && (__dependency_1.Tween.stopAllByTarget(this.content), this.node.active = !1);
  }, e.updateProgress = function (t) {
    if (this.text) {
      if (null == t || null == t || Number.isNaN(t)) return void this.hide();
      t >= 0 && t <= 100 && (this.text.string = t + "%");
    }
  }, (0, __dependency_0.createClass)(t, [{
    key: "prefab",
    get: function () {
      return App.uiManager.getScenePrefab("UILoading");
    }
  }, {
    key: "contentOpacity",
    get: function () {
      return this._contentOpacity ? this._contentOpacity : this.content.getComponent(__dependency_1.UIOpacity);
    }
  }]), t;
}()).module = "【UILoading】", __dependency_1.cclegacy._RF.pop();
