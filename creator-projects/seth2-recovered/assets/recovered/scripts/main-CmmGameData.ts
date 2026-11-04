// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CmmGameData.ts.js
// SHA256: 5edce3a9d86cc18765d6daaf8d77d76b9d671523dcdc0fb72b276d02e302561c
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Macros";
var __export_0;
export { __export_0 as CmmGameData };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CmmGameData":
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
__dependency_1.cclegacy._RF.push({}, "d55efPk0fFLs4iHgadE7nfW", "CmmGameData", void 0), __publish("CmmGameData", function (t) {
  function e() {
    for (var n, e = arguments.length, o = new Array(e), u = 0; u < e; u++) o[u] = arguments[u];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this).module = "", n;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var o = e.prototype;
  return o.init = function () {}, o.destory = function () {}, o.clear = function () {}, o.debug = function () {
    Log.d("" + this.module);
  }, e;
}(__dependency_2.default)).module = __dependency_3.Macro.UNKNOWN, __dependency_1.cclegacy._RF.pop();
