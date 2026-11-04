// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-CryptoTool.ts.js
// SHA256: a50a069919fed620ead1b0669fb7495d2d6745319c0f339252bb6ba48cca3808
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-CryptoWasm";
var __export_0;
export { __export_0 as CryptoTool };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CryptoTool":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x18c6f0) {
  void 0, void 0, void 0;
})(__dependency_0);
(function (_0x6433e) {
  void 0;
})(__dependency_1);
(function (_0x124c35) {
  void 0;
})(__dependency_2);
__dependency_1["cclegacy"]["_RF"]["push"]({}, "b3eda+64XxIvJDkUSKPoNHl", "CryptoTool", void 0x0);
var _0x31ffea = __publish("CryptoTool", function () {
  function _0x431167() {}
  return _0x431167['ready'] = function () {
    return __dependency_2['CryptoWasm']['ready']();
  }, _0x431167["initKey"] = function () {
    var _0x3fa01c = (0, __dependency_0["asyncToGenerator"])((0, __dependency_0["regeneratorRuntime"])()["mark"](function _0x42c9c4(_0x34aca8) {
      return (0, __dependency_0["regeneratorRuntime"])()["wrap"](function (_0x47e55b) {
        for (;;) switch (_0x47e55b["prev"] = _0x47e55b["next"]) {
          case 0x0:
            return _0x47e55b['next'] = 0x2, __dependency_2['CryptoWasm']["ready"]();
          case 0x2:
            if (this["currentToken"] !== _0x34aca8 || !__dependency_2['CryptoWasm']["hasKey"]()) {
              _0x47e55b["next"] = 0x4;
              break;
            }
            return _0x47e55b["abrupt"]('return');
          case 0x4:
            __dependency_2['CryptoWasm']["initKey"](_0x34aca8), this["currentToken"] = _0x34aca8;
          case 0x6:
          case "end":
            return _0x47e55b["stop"]();
        }
      }, _0x42c9c4, this);
    }));
    return function (_0x1f0dc1) {
      return _0x3fa01c["apply"](this, arguments);
    };
  }(), _0x431167["clear"] = function () {
    __dependency_2['CryptoWasm']["clearKey"](), this["currentToken"] = '';
  }, _0x431167["encrypt"] = function () {
    var _0xe0c5d4 = (0, __dependency_0["asyncToGenerator"])((0, __dependency_0["regeneratorRuntime"])()["mark"](function _0x482177(_0x21a72d) {
      var _0x4d4201;
      return (0, __dependency_0["regeneratorRuntime"])()['wrap'](function (_0x1ccacb) {
        for (;;) switch (_0x1ccacb["prev"] = _0x1ccacb["next"]) {
          case 0x0:
            return _0x1ccacb["next"] = 0x2, __dependency_2['CryptoWasm']['ready']();
          case 0x2:
            return _0x4d4201 = pako["deflate"](JSON["stringify"](_0x21a72d)), _0x1ccacb["abrupt"]("return", __dependency_2['CryptoWasm']["encrypt"](_0x4d4201));
          case 0x4:
          case 'end':
            return _0x1ccacb["stop"]();
        }
      }, _0x482177);
    }));
    return function (_0x11b5a7) {
      return _0xe0c5d4["apply"](this, arguments);
    };
  }(), _0x431167["decrypt"] = function () {
    var _0x2b9d22 = (0, __dependency_0["asyncToGenerator"])((0, __dependency_0["regeneratorRuntime"])()["mark"](function _0x1e3b91(_0x4d73a1) {
      var _0x27cef6, _0xac4aaf, _0x481875;
      return (0, __dependency_0["regeneratorRuntime"])()["wrap"](function (_0x3d17e4) {
        for (;;) switch (_0x3d17e4["prev"] = _0x3d17e4["next"]) {
          case 0x0:
            return _0x3d17e4["next"] = 0x2, __dependency_2['CryptoWasm']["ready"]();
          case 0x2:
            return _0x27cef6 = _0x4d73a1 instanceof Uint8Array ? _0x4d73a1 : new Uint8Array(_0x4d73a1), _0xac4aaf = __dependency_2['CryptoWasm']["decrypt"](_0x27cef6), _0x481875 = pako["inflate"](_0xac4aaf, {
              'to': "string"
            }), _0x3d17e4["abrupt"]("return", JSON["parse"](_0x481875));
          case 0x6:
          case 'end':
            return _0x3d17e4["stop"]();
        }
      }, _0x1e3b91);
    }));
    return function (_0xd9da30) {
      return _0x2b9d22["apply"](this, arguments);
    };
  }(), (0, __dependency_0["createClass"])(_0x431167, null, [{
    'key': 'kid',
    'get': function () {
      return __dependency_2['CryptoWasm']["kid"]();
    }
  }]), _0x431167;
}());
_0x31ffea["currentToken"] = '', _0x31ffea["variant"] = "custom", __dependency_1["cclegacy"]['_RF']['pop']();
