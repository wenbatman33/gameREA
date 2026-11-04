// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotApplication.ts.js
// SHA256: 9d5b469d1ec21da5d5861a66daa91978a37baae1896e0df1e18669f04f77552f
import "./main-Application";
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Singleton";
import * as __dependency_3 from "./framework-GameLoading";
import * as __dependency_4 from "./framework-GameLoadingP";
import * as __dependency_5 from "./framework-CmmSlotUtils";
import * as __dependency_6 from "./framework-WebAudioDecodeFallback";
import * as __dependency_7 from "./framework-CryptoTool";
var __export_0;
export { __export_0 as SlotApplication };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotApplication":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x1f9959) {
  void 0;
})(__dependency_0);
(function (_0x3d15dc) {
  void 0, void 0;
})(__dependency_1);
(function (_0x954fc4) {
  void 0;
})(__dependency_2);
(function (_0x98a5fe) {
  void 0;
})(__dependency_3);
(function (_0x510bc7) {
  void 0;
})(__dependency_4);
(function (_0x414fc7) {
  void 0;
})(__dependency_5);
(function (_0x4e9063) {
  void 0;
})(__dependency_6);
(function (_0x1de886) {
  void 0;
})(__dependency_7);
__dependency_1["cclegacy"]['_RF']["push"]({}, "f9595wjGYxOfLEFPrqx46Ro", "SlotApplication", void 0x0), __dependency_1["sys"]["isBrowser"] && ((0, __dependency_6["installWebAudioDecodeFallback"])(), __dependency_7["CryptoTool"]["ready"]()["catch"](function (_0x46e9d9) {
  return console['error']("[SlotApplication] crypto core preload failed", _0x46e9d9);
}));
var _0x4ee6c4 = __publish("SlotApplication", function () {
    function _0x181fa6() {}
    return (0, __dependency_0["createClass"])(_0x181fa6, [{
      'key': "gameLoading",
      'get': function () {
        var _0x13f2c7 = __dependency_5["CmmSlotUtils"]["getOrientationTarget"](__dependency_3["default"], __dependency_4['default']);
        return __dependency_2["default"]["instance"]['get'](_0x13f2c7);
      }
    }]), _0x181fa6;
  }()),
  _0x1bc99d = new _0x4ee6c4();
Object["getOwnPropertyNames"](_0x4ee6c4['prototype'])["forEach"](function (_0x11cba7) {
  var _0x5c5702 = Object['getOwnPropertyDescriptor'](_0x4ee6c4["prototype"], _0x11cba7);
  if (_0x5c5702 && _0x5c5702["get"]) {
    var _0x8c0e98 = _0x5c5702["get"]["bind"](_0x1bc99d);
    void 0x0 === window["App"]['' + _0x11cba7] && (window['App']['' + _0x11cba7] = _0x8c0e98());
  }
}), __dependency_1["cclegacy"]["_RF"]["pop"]();
