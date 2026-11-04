// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-LogicManager.ts.js
// SHA256: 3c324a4b2d1bf9271640a77740929246c7340cb4614a614707e840c85caebfb9
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingletonT";
var __export_0;
export { __export_0 as LogicManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LogicManager":
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
__dependency_1.cclegacy._RF.push({}, "ed32aE8EBlBeKkWhJ7/xI6h", "LogicManager", void 0), __publish("LogicManager", function (t) {
  function n() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(o).slice(1), new.target || n) || this).module = null, e;
  }
  return (0, __dependency_0.inheritsLoose)(n, t), n.prototype.get = function (e, n) {
    return void 0 === n && (n = !1), t.prototype.get.call(this, e, n);
  }, n;
}(__dependency_2.SingletonT)).module = "【邏輯管理器】", __dependency_1.cclegacy._RF.pop();
