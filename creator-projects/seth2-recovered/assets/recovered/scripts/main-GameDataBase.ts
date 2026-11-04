// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-GameDataBase.ts.js
// SHA256: 1571a62b4cc84ac7c7f0a19f68c489dfe3d15cb1f87a0b40699bb41d322f01b5
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
import * as __dependency_3 from "./main-CmmGameData";
var __export_0;
export { __export_0 as GameDataBase };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameDataBase":
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
  void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "59e54Kr71xFKJqo32ioELaM", "GameDataBase", void 0), __publish("GameDataBase", function (t) {
  function n() {
    for (var a, n = arguments.length, e = new Array(n), o = 0; o < n; o++) e[o] = arguments[o];
    return (a = Reflect.construct(t, [this].concat(e).slice(1), new.target || n) || this).module = "", a.data = void 0, a;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var e = n.prototype;
  return e.setData = function (t) {
    this.data = t;
  }, e.getData = function () {
    return this.data;
  }, e.init = function () {
    this.addEvents();
  }, e.onDestory = function () {}, e.clear = function () {}, e.debug = function () {
    Log.d("" + this.module);
  }, n;
}(__dependency_3.CmmGameData)).module = __dependency_2.Macro.UNKNOWN, __dependency_1.cclegacy._RF.pop();
