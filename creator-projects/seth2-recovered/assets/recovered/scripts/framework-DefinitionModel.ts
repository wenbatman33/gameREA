// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-DefinitionModel.ts.js
// SHA256: 36a0e3ce805c7faa52e7b743e53c75b2bbf99d30efcb07f31efdb4afcf23c090
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
(function (_0xa4ec3d) {
  void 0, void 0;
})(__dependency_0);
(function (_0x3267c3) {
  void 0;
})(__dependency_1);
(function (_0x15aeb4) {
  void 0;
})(__dependency_2);
__dependency_1['cclegacy']['_RF']["push"]({}, "f51e2eQyQ9DX4AnIonRHuFB", "DefinitionModel", void 0x0);
var _0x168f03 = function (_0x1b2bb7) {
  function _0x4d52a3() {
    return Reflect.construct(_0x1b2bb7, [], new.target || _0x4d52a3) || this;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x4d52a3, _0x1b2bb7), _0x4d52a3['Instance'] = function () {
    return this["_instance"] || (this["_instance"] = new _0x4d52a3());
  }, _0x4d52a3["prototype"]["setData"] = function (_0x2f3f90) {
    var _0x563e00, _0x205981;
    _0x1b2bb7["prototype"]["setData"]["call"](this, _0x2f3f90), this['data'] = (0, __dependency_0["extends"])({}, this['data'], {
      'smallPrizeDelay': null != (_0x563e00 = this["data"]["smallPrizeDelay"]) ? _0x563e00 : 0x0,
      'bigPrizeDelay': null != (_0x205981 = this["data"]["bigPrizeDelay"]) ? _0x205981 : 1.2
    });
  }, _0x4d52a3;
}(__dependency_2["BaseModel"]);
_0x168f03['_instance'] = null;
__publish('default', _0x168f03['Instance']());
__dependency_1['cclegacy']["_RF"]["pop"]();
