// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SocketModel.ts.js
// SHA256: a5f43d5301f02e80718d3924aa6532ad804cc5963148fc8abdbf7ddbcc4bab8c
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-UrlUtils2";
import * as __dependency_3 from "./main-BaseModel";
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
(function (_0x423b15) {
  void 0, void 0;
})(__dependency_0);
(function (_0x172a50) {
  void 0;
})(__dependency_1);
(function (_0x5c8d2d) {
  void 0;
})(__dependency_2);
(function (_0x1294ca) {
  void 0;
})(__dependency_3);
__dependency_1["cclegacy"]["_RF"]["push"]({}, '6b746A9Z8xPWZ/f8FryHmMi', "SocketModel", void 0x0);
var _0xc70739 = function (_0x303bd4) {
  function _0x2d5149() {
    var _0x1e4bc5;
    return (_0x1e4bc5 = Reflect.construct(_0x303bd4, [], new.target || _0x2d5149) || this)["data"] = {
      'currentToken': '',
      'preToken': '',
      'requestVO': null,
      'resendTimes': 0x0,
      'resendMaximumTimes': 0x3,
      'hasInitRes': !0x1,
      'waitInitRes': !0x1,
      'showLoading': !0x1,
      'pauseGame': !0x1,
      'reqTime': null
    }, _0x1e4bc5;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x2d5149, _0x303bd4), _0x2d5149["Instance"] = function () {
    return this["_instance"] || (this["_instance"] = new _0x2d5149());
  }, (0, __dependency_0["createClass"])(_0x2d5149, [{
    'key': 'currentToken',
    'get': function () {
      return this["data"]['currentToken'];
    },
    'set': function (_0x33a3c3) {
      var _0x258c5e = __dependency_2["default"]["getParam"]('t');
      localStorage["setItem"](_0x258c5e, _0x33a3c3), this['data']["currentToken"] = _0x33a3c3;
    }
  }]), _0x2d5149;
}(__dependency_3["BaseModel"]);
_0xc70739["_instance"] = null;
__publish("default", _0xc70739["Instance"]());
__dependency_1["cclegacy"]["_RF"]["pop"]();
