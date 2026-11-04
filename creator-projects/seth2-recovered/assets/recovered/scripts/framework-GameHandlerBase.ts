// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-GameHandlerBase.ts.js
// SHA256: 0a0ab8812bd5150e3921b8cc81a9c4b73c4ec3720fdf1d14eda65abd8ccee7cb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Handler";
var __export_0;
export { __export_0 as GameHandlerBase };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameHandlerBase":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x5eaaad) {
  void 0;
})(__dependency_0);
(function (_0x30c261) {
  void 0;
})(__dependency_1);
(function (_0x23ed72) {
  void 0;
})(__dependency_2);
__dependency_1["cclegacy"]['_RF']["push"]({}, "a2568b8i0JMv5ca8wauYMiN", "GameHandlerBase", void 0x0);
__publish("GameHandlerBase", function (_0x10a3be) {
  function _0x238615() {
    return Reflect.construct(_0x10a3be, arguments, new.target || _0x238615) || this;
  }
  (0, __dependency_0["inheritsLoose"])(_0x238615, _0x10a3be);
  var _0x19781a = _0x238615["prototype"];
  return _0x19781a['onLoad'] = function () {
    _0x10a3be["prototype"]["onLoad"]["call"](this), this["addListeners"]();
  }, _0x19781a["addListeners"] = function () {}, _0x238615;
}(__dependency_2["Handler"]));
__dependency_1["cclegacy"]["_RF"]["pop"]();
