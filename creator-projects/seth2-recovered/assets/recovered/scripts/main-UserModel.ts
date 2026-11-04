// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UserModel.ts.js
// SHA256: e504c919244e35fd0f1907b1140f5cf5b20822c386f9316c010ded182f5e83cd
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
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
__dependency_1.cclegacy._RF.push({}, "6bca0ezahNCG73kgC8kMpBI", "UserModel", void 0);
var c = function (n) {
  function a() {
    var t;
    return (t = Reflect.construct(n, [], new.target || a) || this).data = {
      balance: null,
      token: null
    }, t;
  }
  return (0, __dependency_0.inheritsLoose)(a, n), a.Instance = function () {
    return this._instance || (this._instance = new a());
  }, a.prototype.reset = function () {
    this.data = {
      balance: null,
      token: null
    };
  }, (0, __dependency_0.createClass)(a, [{
    key: "balance",
    get: function () {
      return this.data.balance;
    },
    set: function (n) {
      this.data.balance = n;
    }
  }]), a;
}(__dependency_2.BaseModel);
c._instance = null;
__publish("default", c.Instance());
__dependency_1.cclegacy._RF.pop();
