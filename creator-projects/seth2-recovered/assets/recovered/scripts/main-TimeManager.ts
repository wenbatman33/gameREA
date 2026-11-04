// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-TimeManager.ts.js
// SHA256: 6a695747183b2462713727c236fc7242251f31b4aa0cab79c7d77ddba8c011ef
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as TimeManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TimeManager":
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
  void 0, void 0, void 0, void 0;
})(__dependency_1);
var o, s;
__dependency_1.cclegacy._RF.push({}, "4af39EhMgVE8a/ZyuQvROdb", "TimeManager", void 0);
var l = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("TimeManager", l("TimeManager")(((s = function (e) {
  function n() {
    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || n) || this)._originalTick = null, t._timeScale = 1, t._resetSpeed = 1, t;
  }
  (0, __dependency_0.inheritsLoose)(n, e);
  var r = n.prototype;
  return r.onLoad = function () {
    n._instance = this, this._originalTick = __dependency_1.director.tick.bind(__dependency_1.director);
    var e = this;
    __dependency_1.director.tick = function (t) {
      e._originalTick(t * e._timeScale);
    };
  }, r.setTimeScale = function (e) {
    e < 0 && (e = 0), this._timeScale = e, console.log("[TimeManager] 當前速度已設定為: " + e + "x");
  }, r.reset = function () {
    this.setTimeScale(this._resetSpeed);
  }, r.onDestroy = function () {
    this._originalTick && (__dependency_1.director.tick = this._originalTick);
  }, (0, __dependency_0.createClass)(n, [{
    key: "resetSpeed",
    set: function (e) {
      this._resetSpeed = e;
    }
  }], [{
    key: "instance",
    get: function () {
      return this._instance;
    }
  }]), n;
}(__dependency_1.Component))._instance = void 0, o = s)) || o);
__dependency_1.cclegacy._RF.pop();
