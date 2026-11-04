// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Singleton.ts.js
// SHA256: 0c312e491613fe9c60c7ec2f149c2b19606c6def89a67e2576660302c9a44894
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingletonT";
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
(function (n) {
  void 0, void 0;
})(__dependency_0);
(function (n) {
  void 0;
})(__dependency_1);
(function (n) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "6524eDwP+pOxIVce9Jvkz7a", "Singleton", void 0), __publish("default", function (n) {
  function i() {
    for (var t, e = arguments.length, i = new Array(e), c = 0; c < e; c++) i[c] = arguments[c];
    return (t = Reflect.construct(n, [this].concat(i).slice(1), new.target || i) || this).module = "【單列管理器】", t;
  }
  return (0, __dependency_0.inheritsLoose)(i, n), (0, __dependency_0.createClass)(i, null, [{
    key: "instance",
    get: function () {
      return this._instance || (this._instance = new i());
    }
  }]), i;
}(__dependency_2.SingletonT))._instance = null, __dependency_1.cclegacy._RF.pop();
