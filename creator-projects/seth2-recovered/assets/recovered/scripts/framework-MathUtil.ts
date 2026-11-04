// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-MathUtil.ts.js
// SHA256: cab2fdec3329068059f6a72ef136bf48e81c40a3fdcb1f2c16b64ddd5cf1cd61
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
(function (_0x36b7f8) {
  void 0;
})(__dependency_0);
__dependency_0["cclegacy"]["_RF"]["push"]({}, "04532WpIehNHqJS+2zmVzca", "MathUtil", void 0x0);
__publish("default", function () {
  function _0x111dec() {}
  return _0x111dec["getRandomNumber"] = function (_0x52836d, _0x3782f2) {
    return void 0x0 === _0x52836d && (_0x52836d = 0x0), void 0x0 === _0x3782f2 && (_0x3782f2 = 0x1), Math['floor'](Math["random"]() * (_0x3782f2 - _0x52836d + 0x1)) + _0x52836d;
  }, _0x111dec["getRandomWithSeed"] = function (_0x1840b6, _0x1db602) {
    return Math["ceil"]((0x2455 * _0x1840b6 + 0xc091) % 0x38f40 / 0x38f40 * _0x1db602);
  }, _0x111dec['getAngle'] = function (_0x122439, _0x2d1657) {
    return Math["atan"]((_0x2d1657['y'] - _0x122439['y']) / (_0x2d1657['x'] - _0x122439['x']));
  }, _0x111dec["getDistance"] = function (_0x94f50e, _0x3bc6fd) {
    return Math["sqrt"](Math['pow'](_0x3bc6fd['x'] - _0x94f50e['x'], 0x2) + Math["pow"](_0x3bc6fd['y'] - _0x94f50e['y'], 0x2));
  }, _0x111dec["angleToRadian"] = function (_0x3aac57) {
    return _0x3aac57 * Math['PI'] / 0xb4;
  }, _0x111dec["zeroPad"] = function (_0x3c85c5, _0x2eee8f) {
    void 0x0 === _0x2eee8f && (_0x2eee8f = 0x2);
    var _0x5d5a93 = _0x3c85c5['toString']();
    return _0x5d5a93["length"] < _0x2eee8f ? _0x5d5a93['padStart'](_0x2eee8f, '0') : _0x5d5a93;
  }, _0x111dec["flattenArray"] = function (_0x3a7a20) {
    return _0x3a7a20['reduce'](function (_0x421f94, _0x4b1b97) {
      return _0x421f94["concat"](_0x4b1b97);
    }, []);
  }, _0x111dec["unflattenArray"] = function (_0x440817, _0x5ae4b8) {
    for (var _0x37c354 = [], _0x5aced7 = 0x0; _0x5aced7 < _0x440817["length"]; _0x5aced7 += _0x5ae4b8) _0x37c354["push"](_0x440817["slice"](_0x5aced7, _0x5aced7 + _0x5ae4b8));
    return _0x37c354;
  }, _0x111dec["transposeArray"] = function (_0x2d1267) {
    return _0x2d1267 && 0x0 !== _0x2d1267["length"] && 0x0 !== _0x2d1267[0x0]["length"] ? _0x2d1267[0x0]["map"](function (_0x21238c, _0x38afe9) {
      return _0x2d1267["map"](function (_0x1c2de7) {
        return _0x1c2de7[_0x38afe9];
      });
    }) : [];
  }, _0x111dec['add'] = function (_0x2ccbbd, _0x2c0f83) {
    return _0x49f3af['add'](_0x2ccbbd, _0x2c0f83);
  }, _0x111dec['subtract'] = function (_0x1c717f, _0x47d661) {
    return _0x49f3af["subtract"](_0x1c717f, _0x47d661);
  }, _0x111dec["multiply"] = function () {
    return _0x49f3af['multiply']["apply"](_0x49f3af, arguments);
  }, _0x111dec["divide"] = function (_0x334aed, _0x115285) {
    return _0x49f3af["divide"](_0x334aed, _0x115285);
  }, _0x111dec;
}());
var _0x49f3af = function () {
  function _0x5d83fb() {}
  return _0x5d83fb["isInteger"] = function (_0x3a56dc) {
    return Math["floor"](_0x3a56dc) === _0x3a56dc;
  }, _0x5d83fb['toInteger'] = function (_0x547488) {
    var _0x4514bc = {
      'times': 0x1,
      'num': 0x0
    };
    if (this["isInteger"](_0x547488)) return _0x4514bc["num"] = _0x547488, _0x4514bc;
    var _0x50735a = _0x547488 + '',
      _0x50518e = _0x50735a['indexOf']('.'),
      _0x377ccb = _0x50735a['slice'](_0x50518e + 0x1)["length"],
      _0x502af9 = Math["pow"](0xa, _0x377ccb),
      _0x56f4f5 = Number(_0x547488["toString"]()["replace"]('.', ''));
    return _0x4514bc["times"] = _0x502af9, _0x4514bc["num"] = _0x56f4f5, _0x4514bc;
  }, _0x5d83fb["operation"] = function (_0x383ce5, _0x2d9669, _0xb2c380) {
    var _0xba7fff = this["toInteger"](_0x383ce5),
      _0x5bd040 = this["toInteger"](_0x2d9669),
      _0x54201c = _0xba7fff["num"],
      _0x3c87cf = _0x5bd040["num"],
      _0x2dde37 = _0xba7fff['times'],
      _0x4cb4bf = _0x5bd040["times"],
      _0x19169e = _0x2dde37 > _0x4cb4bf ? _0x2dde37 : _0x4cb4bf;
    switch (_0xb2c380) {
      case 'add':
        return (_0x2dde37 === _0x4cb4bf ? _0x54201c + _0x3c87cf : _0x2dde37 > _0x4cb4bf ? _0x54201c + _0x3c87cf * (_0x2dde37 / _0x4cb4bf) : _0x54201c * (_0x4cb4bf / _0x2dde37) + _0x3c87cf) / _0x19169e;
      case 'subtract':
        return (_0x2dde37 === _0x4cb4bf ? _0x54201c - _0x3c87cf : _0x2dde37 > _0x4cb4bf ? _0x54201c - _0x3c87cf * (_0x2dde37 / _0x4cb4bf) : _0x54201c * (_0x4cb4bf / _0x2dde37) - _0x3c87cf) / _0x19169e;
      case "multiply":
        return _0x54201c * _0x3c87cf / (_0x2dde37 * _0x4cb4bf);
      case "divide":
        return _0x54201c / _0x3c87cf * (_0x4cb4bf / _0x2dde37);
    }
  }, _0x5d83fb["add"] = function (_0x347900, _0x2bd30c) {
    return this['operation'](_0x347900, _0x2bd30c, "add");
  }, _0x5d83fb["subtract"] = function (_0x25d056, _0x27a99d) {
    return this["operation"](_0x25d056, _0x27a99d, "subtract");
  }, _0x5d83fb['multiply'] = function () {
    for (var _0x4cbb3e = this, _0x56fa16 = arguments["length"], _0x1235e1 = new Array(_0x56fa16), _0x419ac8 = 0x0; _0x419ac8 < _0x56fa16; _0x419ac8++) _0x1235e1[_0x419ac8] = arguments[_0x419ac8];
    return _0x1235e1['reduce'](function (_0x222843, _0x253f41) {
      return _0x4cbb3e["operation"](_0x222843, _0x253f41, "multiply");
    });
  }, _0x5d83fb["divide"] = function (_0x250f28, _0x551d89) {
    return this["operation"](_0x250f28, _0x551d89, "divide");
  }, _0x5d83fb;
}();
__dependency_0["cclegacy"]["_RF"]["pop"]();
