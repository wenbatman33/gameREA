// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-DataCenter.ts.js
// SHA256: d33f5de493a11672f5492eff01026c5196ca36695b60cca2f819edcf24b2a2ce
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingletonT";
var __export_0;
export { __export_0 as DataCenter };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DataCenter":
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
__dependency_1.cclegacy._RF.push({}, "39dddWDYJJE9aqb6DTOKM/X", "DataCenter", void 0), __publish("DataCenter", function (t) {
  function e() {
    for (var n, e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
    return (n = Reflect.construct(t, [this].concat(r).slice(1), new.target || e) || this).module = null, n;
  }
  return (0, __dependency_0.inheritsLoose)(e, t), e;
}(__dependency_2.SingletonT)).module = "【資料中心】", __dependency_1.cclegacy._RF.pop();
