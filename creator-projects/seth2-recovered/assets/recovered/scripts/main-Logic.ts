// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Logic.ts.js
// SHA256: 80c306321d1abebe6ec195e9b68b6f1a049998847632189cf7ef3c9b62afb3f8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventProcessor";
import * as __dependency_3 from "./main-Macros";
var __export_0;
export { __export_0 as Logic };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Logic":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "4b9a0iaVZFD/KeijOJgJv2B", "Logic", void 0), __publish("Logic", function (t) {
  function n() {
    for (var e, o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || n) || this).module = __dependency_3.Macro.UNKNOWN, e.gameView = null, e;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var s = n.prototype;
  return s.reset = function (t) {}, s.onLoad = function (e) {
    this.gameView = e, t.prototype.onLoad.call(this, e);
  }, s.update = function (t) {}, s.destory = function () {
    this.onDestroy();
  }, s.debug = function () {
    Log.d(this.module + " : " + __dependency_1.js.getClassName(this));
  }, (0, __dependency_0.createClass)(n, [{
    key: "bundle",
    get: function () {
      return this.module;
    }
  }]), n;
}(__dependency_2.EventProcessor)).module = __dependency_3.Macro.UNKNOWN, __dependency_1.cclegacy._RF.pop();
