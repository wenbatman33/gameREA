// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-AdapterEvent.ts.js
// SHA256: 2794fb4cdc7f247cde2b6f545ba922b3dd65a195126dc51f1a7cfac37ce021e5
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EOrientationType };
var __export_1;
export { __export_1 as AdapterEvent };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EOrientationType":
      __export_0 = value;
      break;
    case "AdapterEvent":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0;
})(__dependency_0);
var n;
__publish("EOrientationType", void 0), __dependency_0.cclegacy._RF.push({}, "d9a7aD7569KrqVOg8LRk4nF", "AdapterEvent", void 0), __publish("AdapterEvent", function () {}).ORIENTATION = "AdapterEvent:ORIENTATION", function (t) {
  t[t.LANDSCAPE = 0] = "LANDSCAPE", t[t.PORTRAIT = 1] = "PORTRAIT";
}(n || (n = __publish("EOrientationType", {}))), __dependency_0.cclegacy._RF.pop();
