// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-HandlerManager.ts.js
// SHA256: 9e262ebd048233778aabcc899c30636c05f33e2ac63a68297d73250558f89854
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingletonT";
var __export_0;
export { __export_0 as HandlerManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HandlerManager":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (n) {
  void 0;
})(__dependency_0);
(function (n) {
  void 0;
})(__dependency_1);
(function (n) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "11e9a84A9hCHpeO57mkvw5P", "HandlerManager", void 0), __publish("HandlerManager", function (n) {
  function t() {
    for (var e, t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
    return (e = Reflect.construct(n, [this].concat(r).slice(1), new.target || t) || this).module = null, e;
  }
  return (0, __dependency_0.inheritsLoose)(t, n), t;
}(__dependency_2.SingletonT)).module = "【Handler管理器】", __dependency_1.cclegacy._RF.pop();
