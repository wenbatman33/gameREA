// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Handler.ts.js
// SHA256: 0d699ebfad939e221ad444163a7c72e64c8888ed8639a28e3f1e98e457532d5b
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventProcessor";
import * as __dependency_3 from "./main-Macros";
var __export_0;
export { __export_0 as Handler };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Handler":
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
  void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "5e9ffPDWfxKL7ScegSeKBG6", "Handler", void 0), __publish("Handler", function (e) {
  function o() {
    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || o) || this)._module = __dependency_3.Macro.UNKNOWN, t;
  }
  (0, __dependency_0.inheritsLoose)(o, e);
  var r = o.prototype;
  return r.onS = function (e, t, n, o) {
    void 0 === o && (o = !0);
    var r = this.service;
    r && r.addListener && r.addListener(e, n, t, o, this);
  }, r.offS = function (e) {
    var t = this.service;
    t && t.removeListeners && t.removeListeners(this, e);
  }, r.onDestroy = function () {
    this.offS(), e.prototype.onDestroy.call(this);
  }, r.debug = function () {
    Log.d(this.module);
  }, r.destory = function () {
    this.onDestroy();
  }, r.init = function () {
    this.onLoad();
  }, (0, __dependency_0.createClass)(o, [{
    key: "module",
    get: function () {
      return this._module;
    },
    set: function (e) {
      this._module = e;
    }
  }]), o;
}(__dependency_2.EventProcessor)).module = __dependency_3.Macro.UNKNOWN, __dependency_1.cclegacy._RF.pop();
