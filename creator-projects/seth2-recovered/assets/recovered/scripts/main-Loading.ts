// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Loading.ts.js
// SHA256: a17e1647e18c2ece5d7a4b7e324083f0630e4723dedfc0657707515643cf9806
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0, void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "2db47kDx9lIeLy2MbGZbrmp", "Loading", void 0), __publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.node = null, this._timeOutCb = void 0, this._content = [], this._showContentIndex = 0, this._timerId = -1, this.text = null;
  }
  var n = t.prototype;
  return n.show = function (t, e, n) {
    return void 0 === n && (n = __dependency_2.Config.LOADING_TIME_OUT), this._timeOutCb = e, Array.isArray(t) ? this._content = t : (this._content = [], this._content.push(t)), this._show(n), this;
  }, n._show = function (t) {
    var e;
    this.prefab && (this.node || (this.node = (0, __dependency_1.instantiate)(this.prefab)), this.node.removeFromParent(), App.uiManager.addView(this.node, __dependency_2.ViewZOrder.Loading), this.node.position = __dependency_1.Vec3.ZERO, this.text = null == (e = (0, __dependency_1.find)("content/text", this.node)) ? void 0 : e.getComponent(__dependency_1.Label), this._showContentIndex = 0, this.startShowContent(), this.startTimeOutTimer(t), this.node.active = !0);
  }, n.startShowContent = function () {
    var t = this;
    1 == this._content.length ? this.text.string = this._content[0] : (this.stopShowContent(), (0, __dependency_1.tween)(this.text.node).call(function () {
      t.text.string = t._content[t._showContentIndex];
    }).delay(__dependency_2.Config.LOADING_CONTENT_CHANGE_INTERVAL).call(function () {
      t._showContentIndex++, t._showContentIndex >= t._content.length && (t._showContentIndex = 0), t.startShowContent();
    }).start());
  }, n.stopShowContent = function () {
    this.text && __dependency_1.Tween.stopAllByTarget(this.text.node);
  }, n.startTimeOutTimer = function (t) {
    var e = this;
    t > 0 && (this._timerId = setTimeout(function () {
      e._timeOutCb && e._timeOutCb(), e.hide();
    }, 1e3 * t));
  }, n.stopTimeOutTimer = function () {
    this._timeOutCb = void 0, clearTimeout(this._timerId), this._timerId = -1;
  }, n.hide = function () {
    this.stopShowContent(), this.stopTimeOutTimer(), this.node && (this.node.active = !1);
  }, (0, __dependency_0.createClass)(t, [{
    key: "prefab",
    get: function () {
      return App.uiManager.getScenePrefab("Loading");
    }
  }, {
    key: "timeOutCb",
    get: function () {
      return this._timeOutCb;
    },
    set: function (t) {
      this._timeOutCb = t;
    }
  }]), t;
}()).module = "【Loading】", __dependency_1.cclegacy._RF.pop();
