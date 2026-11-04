// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-DebugUtils.ts.js
// SHA256: 6298f8b422445c98386ee5f04328cd6b13ca1a41fa503a0ecdb006e2cca720bc
import * as __dependency_0 from "cc";
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
(function (_0x141361) {
  void 0;
})(__dependency_0);
__dependency_0['cclegacy']["_RF"]["push"]({}, 'd545a3dF9BMcZokVI2bty4x', "DebugUtils", void 0x0);
__publish("default", function () {
  function _0x1b1b82() {}
  return _0x1b1b82["calculateDifferences"] = function (_0x148337) {
    var _0x46fd51 = [],
      _0x40e721 = void 0x0,
      _0x394804 = void 0x0;
    _0x148337['forEach'](function (_0x25cb75, _0xc043bf) {
      if (void 0x0 !== _0x40e721) {
        var _0x54be04 = {
          'key': _0x394804 + " -> " + _0xc043bf,
          'value': _0x25cb75 - _0x40e721
        };
        _0x46fd51["push"](_0x54be04);
      }
      _0x40e721 = _0x25cb75, _0x394804 = _0xc043bf;
    }), console["log"]("keys: ", _0x148337["keys"]()), console["warn"]("差值計算: ", _0x46fd51, _0x46fd51['map'](function (_0x734fd3) {
      return _0x734fd3["value"];
    }));
  }, _0x1b1b82;
}());
__dependency_0['cclegacy']["_RF"]['pop']();
