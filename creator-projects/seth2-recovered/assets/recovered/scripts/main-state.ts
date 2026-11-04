// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-state.ts.js
// SHA256: 9eb06020ca797070dd1b8db627963e0c8a92f6cf152958fc2ab27131a3b49275
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as isState };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "isState":
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
__publish("isState", function (t) {
  return !!t && "id" in t && "string" == typeof t.id && "transitionTo" in t;
}), __dependency_0.cclegacy._RF.push({}, "5a98f9KRDJGqZ2exQ2xKpRI", "state", void 0), __dependency_0.cclegacy._RF.pop();
