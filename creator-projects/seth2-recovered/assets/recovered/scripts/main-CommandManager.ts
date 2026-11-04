// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CommandManager.ts.js
// SHA256: 317cdc14095f34207d4a470cc3cea0c3e84773157c90723a2cf266c9350f6ea4
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventProcessor";
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
  void 0;
})(__dependency_0);
(function (n) {
  void 0;
})(__dependency_1);
(function (n) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "24e04JAXKRMNLoiugTF7LV6", "CommandManager", void 0), __publish("default", function (n) {
  function t() {
    for (var o, t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
    return (o = Reflect.construct(n, [this].concat(e).slice(1), new.target || t) || this).module = null, o.commandMap = new Map(), o;
  }
  (0, __dependency_0.inheritsLoose)(t, n);
  var e = t.prototype;
  return e.addCommand = function (n, o) {
    this.commandMap.has(n) || (this.on(n, function (n) {
      o.execute(n);
    }), this.commandMap.set(n, o));
  }, e.removeCommand = function (n) {
    this.off(n), this.commandMap.delete(n);
  }, e.debug = function () {
    Log.d("-------command命令資訊-------"), this.commandMap.forEach(function (n, o) {
      Log.d(o);
    });
  }, t;
}(__dependency_2.EventProcessor)).module = "【command 命令管理】", __dependency_1.cclegacy._RF.pop();
