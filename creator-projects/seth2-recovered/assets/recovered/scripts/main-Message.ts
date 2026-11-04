// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Message.ts.js
// SHA256: e89cf7e27f83a3e60e154c31e183ccace0f2016a257327b71644a87c1188e3ba
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as IMessage };
var __export_1;
export { __export_1 as Codec };
var __export_2;
export { __export_2 as Message };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "IMessage":
      __export_0 = value;
      break;
    case "Codec":
      __export_1 = value;
      break;
    case "Message":
      __export_2 = value;
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
__dependency_1.cclegacy._RF.push({}, "9cc72ae641Axan45m+M6GpV", "Message", void 0);
var s = __publish("IMessage", function () {
  this.buffer = void 0;
});
__publish("Codec", function (e) {
  function n() {
    return Reflect.construct(e, arguments, new.target || n) || this;
  }
  return (0, __dependency_0.inheritsLoose)(n, e), n;
}(s)), __publish("Message", function (e) {
  function n() {
    return Reflect.construct(e, arguments, new.target || n) || this;
  }
  return (0, __dependency_0.inheritsLoose)(n, e), n;
}(s));
__dependency_1.cclegacy._RF.pop();
