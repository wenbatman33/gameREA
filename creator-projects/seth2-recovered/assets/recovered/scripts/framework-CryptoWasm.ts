// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-CryptoWasm.ts.js
// SHA256: 852de26817956410ab85c3ce956defea7ad75d0b134e4d9091c3d67c3d79a9f0
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-CryptoCoreWasm";
var __export_0;
export { __export_0 as CryptoWasm };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CryptoWasm":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x13ce1e) {
  void 0, void 0, void 0;
})(__dependency_0);
(function (_0xd85f6d) {
  void 0;
})(__dependency_1);
(function (_0x5dfcb2) {
  void 0;
})(__dependency_2);
__dependency_1["cclegacy"]["_RF"]["push"]({}, "116331SgJZCIJvUzjcpma0B", 'CryptoWasm', void 0x0);
var _0x1c278b = {
    0x1: "wasm memory grow failed",
    0x2: "session key not initialized",
    0x3: "frame too short",
    0x4: "kid mismatch",
    0x5: "bad argument"
  },
  _0x4e4550 = __publish('CryptoWasm', function () {
    function _0x580170() {}
    return _0x580170["ready"] = function () {
      var _0x54e92 = this;
      return this["exp"] ? Promise["resolve"]() : (this["loading"] || (this["loading"] = this["load"]()['catch'](function (_0x39ec49) {
        throw _0x54e92['loading'] = null, _0x39ec49;
      })), this["loading"]);
    }, _0x580170["load"] = function () {
      var _0x2e242c = (0, __dependency_0["asyncToGenerator"])((0, __dependency_0['regeneratorRuntime'])()["mark"](function _0x5318df() {
        var _0x434b13,
          _0x2ca3b3,
          _0x496338,
          _0x24715d,
          _0x392360 = this;
        return (0, __dependency_0['regeneratorRuntime'])()["wrap"](function (_0x372476) {
          for (;;) switch (_0x372476["prev"] = _0x372476["next"]) {
            case 0x0:
              if ("undefined" != typeof WebAssembly) {
                _0x372476["next"] = 0x2;
                break;
              }
              throw new Error("[CryptoWasm] WebAssembly is not available on this platform");
            case 0x2:
              return _0x434b13 = this['base64ToBytes'](__dependency_2["CRYPTO_CORE_WASM_B64"]), _0x2ca3b3 = {
                'env': {
                  'random_bytes': function (_0x470294, _0x28ca2a) {
                    var _0x5ace2d = new Uint8Array(_0x392360['e']['memory']["buffer"], _0x470294, _0x28ca2a);
                    crypto["getRandomValues"](_0x5ace2d);
                  }
                }
              }, _0x372476['next'] = 0x6, WebAssembly['instantiate'](_0x434b13, _0x2ca3b3);
            case 0x6:
              _0x496338 = _0x372476["sent"], _0x24715d = _0x496338['instance'], this["exp"] = _0x24715d["exports"];
            case 0x9:
            case 'end':
              return _0x372476['stop']();
          }
        }, _0x5318df, this);
      }));
      return function () {
        return _0x2e242c['apply'](this, arguments);
      };
    }(), _0x580170["kid"] = function () {
      return this['e']["kid"]();
    }, _0x580170['hasKey'] = function () {
      return 0x1 === this['e']["has_key"]();
    }, _0x580170["initKey"] = function (_0xd26c3) {
      var _0xf0ab51 = this["encoder"]["encode"](_0xd26c3);
      this['writeIn'](_0xf0ab51), 0x1 !== this['e']["init_key"](_0xf0ab51["length"]) && this["throwLastError"]("init_key");
    }, _0x580170['clearKey'] = function () {
      this['exp'] && this["exp"]['clear_key']();
    }, _0x580170["encrypt"] = function (_0x50e96e) {
      this["writeIn"](_0x50e96e);
      var _0x269c9c = this['e']["encrypt"](_0x50e96e['length']);
      return -0x1 === _0x269c9c && this["throwLastError"]('encrypt'), this["readOut"](_0x269c9c);
    }, _0x580170["decrypt"] = function (_0x1a5928) {
      this["writeIn"](_0x1a5928);
      var _0x4bced6 = this['e']['decrypt'](_0x1a5928["length"]);
      return -0x1 === _0x4bced6 && this['throwLastError']("decrypt"), this['readOut'](_0x4bced6);
    }, _0x580170["writeIn"] = function (_0x41fef7) {
      var _0x676ed3 = this['e']["in_buf"](_0x41fef7['length']);
      0x0 === _0x676ed3 && this["throwLastError"]('in_buf'), new Uint8Array(this['e']["memory"]['buffer'], _0x676ed3, _0x41fef7['length'])["set"](_0x41fef7);
    }, _0x580170['readOut'] = function (_0x4b9819) {
      return new Uint8Array(this['e']["memory"]["buffer"], this['e']["out_ptr"](), _0x4b9819)['slice']();
    }, _0x580170["throwLastError"] = function (_0x2a79bf) {
      var _0x7bfddc,
        _0x1ab874 = this['e']["last_error"]();
      throw new Error("[CryptoWasm] " + _0x2a79bf + '\x20failed:\x20' + (null != (_0x7bfddc = _0x1c278b[_0x1ab874]) ? _0x7bfddc : "unknown") + '\x20(' + _0x1ab874 + ')');
    }, _0x580170["base64ToBytes"] = function (_0x195d03) {
      for (var _0x5119cb = atob(_0x195d03), _0x55c6dc = new Uint8Array(_0x5119cb["length"]), _0x1935a8 = 0x0; _0x1935a8 < _0x5119cb['length']; _0x1935a8++) _0x55c6dc[_0x1935a8] = _0x5119cb["charCodeAt"](_0x1935a8);
      return _0x55c6dc;
    }, (0, __dependency_0["createClass"])(_0x580170, null, [{
      'key': "isReady",
      'get': function () {
        return null !== this["exp"];
      }
    }, {
      'key': 'e',
      'get': function () {
        if (!this["exp"]) throw new Error("[CryptoWasm] not ready, call ready() first");
        return this["exp"];
      }
    }]), _0x580170;
  }());
_0x4e4550["exp"] = null, _0x4e4550["loading"] = null, _0x4e4550['encoder'] = new TextEncoder(), __dependency_1["cclegacy"]['_RF']["pop"]();
