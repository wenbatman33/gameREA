// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GlobalModel.ts.js
// SHA256: 8144c6c52ca215fb60293f1d610056f5ea0e75f52c9695066e7d85cc46ea2ced
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as GlobalModel };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GlobalModel":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
__dependency_0.cclegacy._RF.push({}, "42f90NVoY9ILa2yvM+nUK5q", "GlobalModel", void 0);
var n = __publish("GlobalModel", function () {
  function e() {}
  return e.GetCurrSpinData = function () {
    return e.GameStates && e.GameStates.length > 0 && e.GameStates[e.currSpinIndex] || null;
  }, e;
}());
n.InitialResponse = void 0, n.GameStates = [], n.Platform = void 0, n.SpinResponse = void 0, n.currSpinIndex = 0, n.isInit = !1, __dependency_0.cclegacy._RF.pop();
