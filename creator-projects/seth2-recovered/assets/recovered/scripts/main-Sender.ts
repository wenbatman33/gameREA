// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Sender.ts.js
// SHA256: 11ba156c2aaedefab449b2b4a44fb37216dd245270f88d066025e934bbbe126a
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventProcessor";
import * as __dependency_3 from "./main-Macros";
import * as __dependency_4 from "./main-Message";
var __export_0;
export { __export_0 as Sender };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Sender":
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
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
__dependency_1.cclegacy._RF.push({}, "88af3+km/JPIL5D0tRyJFj+", "Sender", void 0), __publish("Sender", function (e) {
  function s() {
    for (var t, s = arguments.length, n = new Array(s), i = 0; i < s; i++) n[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(n).slice(1), new.target || s) || this).module = "", t;
  }
  (0, __dependency_0.inheritsLoose)(s, e);
  var n = s.prototype;
  return n.send = function (e, t, s) {
    e instanceof __dependency_4.Message ? this.service && this.service.send && this.service.send(e) : this.service.send(e, t, s);
  }, n.sendWithoutCheck = function (e, t, s) {
    e instanceof __dependency_4.Message ? this.service && this.service.sendWithoutCheck && this.service.sendWithoutCheck(e) : this.service.sendWithoutCheck(e, t, s);
  }, n.debug = function () {
    Log.d(this.module);
  }, n.destory = function () {
    this.onDestroy();
  }, n.init = function () {
    this.onLoad();
  }, s;
}(__dependency_2.EventProcessor)).module = __dependency_3.Macro.UNKNOWN, __dependency_1.cclegacy._RF.pop();
