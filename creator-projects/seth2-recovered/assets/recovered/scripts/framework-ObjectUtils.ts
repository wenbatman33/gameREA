// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ObjectUtils.ts.js
// SHA256: e006415385ce8c71e85f2b6aac35dc78fcf566603f9a600bd07be5c7db426253
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as ObjectUtils };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ObjectUtils":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x597a73) {
  void 0, void 0;
})(__dependency_0);
(function (_0x6a98d1) {
  void 0;
})(__dependency_1);
__dependency_1["cclegacy"]["_RF"]["push"]({}, "282dfDAAWJDU6zMojlUJmiR", "ObjectUtils", void 0x0);
__publish("ObjectUtils", function () {
  function _0x255bf7() {}
  return _0x255bf7["isObject"] = function (_0x424209) {
    return '[object\x20Object]' === Object["prototype"]["toString"]['call'](_0x424209);
  }, _0x255bf7["isEmpty"] = function (_0x43b9d1) {
    return 0x0 === Object["keys"](_0x43b9d1)["length"];
  }, _0x255bf7['copyTo'] = function (_0x25f20d, _0x5ad7a0) {
    for (var _0x4e82c1 in _0x25f20d) _0x5ad7a0[_0x4e82c1] = _0x25f20d[_0x4e82c1];
  }, _0x255bf7["assign"] = function (_0x26d973, _0x76b2dd) {
    for (var _0x2ed29b = arguments["length"], _0x1723b2 = new Array(_0x2ed29b > 0x2 ? _0x2ed29b - 0x2 : 0x0), _0x52db0b = 0x2; _0x52db0b < _0x2ed29b; _0x52db0b++) _0x1723b2[_0x52db0b - 0x2] = arguments[_0x52db0b];
    return 'function' == typeof Object['assign'] ? Object['assign']["apply"](null, [_0x26d973, _0x76b2dd]['concat'](_0x1723b2)) : ([_0x76b2dd]['concat'](_0x1723b2)["filter"](function (_0x5db1e6) {
      return _0x5db1e6;
    })["map"](function (_0x2c2bbc) {
      Object["keys"](_0x2c2bbc)["map"](function (_0x5b1f0e) {
        _0x26d973[_0x5b1f0e] = _0x2c2bbc[_0x5b1f0e];
      });
    }), _0x26d973);
  }, _0x255bf7['deepExtend'] = function (_0x3d4b0, _0xdda087) {
    for (var _0x40a4bb = this, _0x2b969c = {}, _0x523311 = function (_0x9a969) {
        Object["keys"](_0x9a969)["forEach"](function (_0x455351) {
          _0x40a4bb["isObject"](_0x9a969[_0x455351]) ? _0x2b969c[_0x455351] = _0x40a4bb['deepExtend'](_0x2b969c[_0x455351] || {}, _0x9a969[_0x455351]) : _0x2b969c[_0x455351] = _0x9a969[_0x455351];
        });
      }, _0xc0c5c9 = arguments["length"], _0x1aba57 = new Array(_0xc0c5c9 > 0x2 ? _0xc0c5c9 - 0x2 : 0x0), _0x5b9583 = 0x2; _0x5b9583 < _0xc0c5c9; _0x5b9583++) _0x1aba57[_0x5b9583 - 0x2] = arguments[_0x5b9583];
    return [_0x3d4b0, _0xdda087]["concat"](_0x1aba57)["filter"](function (_0x46dba5) {
      return _0x46dba5;
    })["forEach"](function (_0x4ac178) {
      return _0x523311(_0x4ac178);
    }), _0x2b969c;
  }, _0x255bf7["clone"] = function (_0x40ecca) {
    if (null == _0x40ecca || "object" != typeof _0x40ecca) return _0x40ecca;
    if (Array["isArray"](_0x40ecca)) {
      for (var _0x3cc223, _0x51520c = [], _0xd756f4 = (0, __dependency_0['createForOfIteratorHelperLoose'])(_0x40ecca); !(_0x3cc223 = _0xd756f4())["done"];) {
        var _0x1da958 = _0x3cc223["value"];
        _0x51520c["push"](this["clone"](_0x1da958));
      }
      return _0x51520c;
    }
    if (_0x40ecca instanceof Map) {
      for (var _0x50a2e4, _0x445930 = new Map(), _0x46f411 = (0, __dependency_0['createForOfIteratorHelperLoose'])(_0x40ecca['entries']()); !(_0x50a2e4 = _0x46f411())["done"];) {
        var _0x21410d = _0x50a2e4["value"],
          _0x20b7e7 = _0x21410d[0x0],
          _0x33c513 = _0x21410d[0x1],
          _0x19877d = this["clone"](_0x20b7e7),
          _0x38c359 = this["clone"](_0x33c513);
        _0x445930["set"](_0x19877d, _0x38c359);
      }
      return _0x445930;
    }
    if (_0x40ecca instanceof Set) {
      for (var _0x1aefc9, _0x1f58d2 = new Set(), _0x5a824b = (0, __dependency_0['createForOfIteratorHelperLoose'])(_0x40ecca["values"]()); !(_0x1aefc9 = _0x5a824b())["done"];) {
        var _0x17c2b8 = _0x1aefc9['value'],
          _0x338a15 = this["clone"](_0x17c2b8);
        _0x1f58d2["add"](_0x338a15);
      }
      return _0x1f58d2;
    }
    if (_0x40ecca instanceof Date) return new Date(_0x40ecca["getTime"]());
    if (_0x40ecca instanceof RegExp) return new RegExp(_0x40ecca);
    for (var _0x40682d = Object["create"](Object["getPrototypeOf"](_0x40ecca)), _0x55d6ce = 0x0, _0x1b39b2 = Object["keys"](_0x40ecca); _0x55d6ce < _0x1b39b2["length"]; _0x55d6ce++) {
      var _0x4a52cb = _0x1b39b2[_0x55d6ce];
      _0x40682d[_0x4a52cb] = this["clone"](_0x40ecca[_0x4a52cb]);
    }
    return _0x40682d;
  }, _0x255bf7["entries"] = function (_0x124e7d) {
    if ("function" == typeof Object["entries"]) return Object["entries"]["call"](null, _0x124e7d);
    for (var _0x2831ab = Object["keys"](_0x124e7d), _0x2ce05f = _0x2831ab['length'], _0x42a3b2 = new Array(_0x2ce05f); _0x2ce05f--;) _0x42a3b2[_0x2ce05f] = [_0x2831ab[_0x2ce05f], _0x124e7d[_0x2831ab[_0x2ce05f]]];
    return _0x42a3b2;
  }, _0x255bf7["flattenObject"] = function (_0x2ff96f, _0x121b2c) {
    void 0x0 === _0x121b2c && (_0x121b2c = '');
    var _0x1de255 = {};
    for (var _0x3198be in _0x2ff96f) if (_0x2ff96f["hasOwnProperty"](_0x3198be)) {
      var _0x360a8c = _0x121b2c ? _0x121b2c + '.' + _0x3198be : _0x3198be;
      if ("object" != typeof _0x2ff96f[_0x3198be] || Array["isArray"](_0x2ff96f[_0x3198be])) _0x1de255[_0x360a8c] = _0x2ff96f[_0x3198be];else {
        var _0x5dabf0 = this["flattenObject"](_0x2ff96f[_0x3198be], _0x360a8c);
        _0x1de255 = (0, __dependency_0["extends"])({}, _0x1de255, _0x5dabf0);
      }
    }
    return _0x1de255;
  }, _0x255bf7["diffObjects"] = function (_0xf476ea, _0x5b6c0b) {
    var _0xf1457 = {};
    for (var _0x310f1c in _0xf476ea) _0xf476ea['hasOwnProperty'](_0x310f1c) && _0x5b6c0b["hasOwnProperty"](_0x310f1c) && (_0xf476ea[_0x310f1c] !== _0x5b6c0b[_0x310f1c] && (_0xf1457[_0x310f1c] = _0x5b6c0b[_0x310f1c]), void 0x0 === _0xf476ea[_0x310f1c] && (_0xf1457[_0x310f1c] = _0x5b6c0b[_0x310f1c]));
    return _0xf1457;
  }, _0x255bf7;
}());
__dependency_1["cclegacy"]["_RF"]["pop"]();
