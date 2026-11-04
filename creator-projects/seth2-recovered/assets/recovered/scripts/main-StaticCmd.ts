// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-StaticCmd.ts.js
// SHA256: c520969ce670b80383d8f5869b01ce29347ca74c8ca764455a0932631699b317
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-StaticConfig";
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
(function (t) {
  void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0;
})(__dependency_1);
__dependency_0.cclegacy._RF.push({}, "fe94ax4zHxIAKBHy5c0OFVK", "StaticCmd", void 0);
__publish("default", function () {
  function t() {}
  return t.getInitial = function () {
    return __dependency_1.initial;
  }, t.getSpin = function () {
    return __dependency_1.spin;
  }, t;
}());
__dependency_0.cclegacy._RF.pop();
