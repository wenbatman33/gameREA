// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-LabelTextAlignFix.ts.js
// SHA256: b1796011ff710ed75bf2e33f7ef114b2c51db853e796d7db2f874120ec722c03
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as installLabelTextAlignFix };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "installLabelTextAlignFix":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0xdc16ad) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
__publish("installLabelTextAlignFix", _0x53571b), __dependency_0["cclegacy"]["_RF"]["push"]({}, 'dc380JQoaFN57mwz4Lqcvq7', 'LabelTextAlignFix', void 0x0);
var _0x55b099 = "เลือกตู้เกม",
  _0x1e7c8b = 0x140,
  _0x52d8cc = "__labelTextAlignFixInstalled",
  _0x242cd7 = new Map();
function _0x316101(_0x3209d8) {
  return function (_0x1ff9f8, _0x16c283, _0x397e92, _0x1bce75) {
    var _0x467818 = this['textAlign'];
    if ('center' !== _0x467818 && 'right' !== _0x467818) return void 0x0 === _0x1bce75 ? _0x3209d8['call'](this, _0x1ff9f8, _0x16c283, _0x397e92) : _0x3209d8["call"](this, _0x1ff9f8, _0x16c283, _0x397e92, _0x1bce75);
    var _0x6c44cb = function (_0x5027d3, _0x5525a1) {
        var _0x282183 = _0x5027d3["font"] + '\x00' + _0x5525a1,
          _0x46caaf = _0x242cd7["get"](_0x282183);
        return void 0x0 === _0x46caaf && (_0x46caaf = _0x5027d3["measureText"](_0x5525a1)['width'], _0x242cd7["size"] >= 0x100 && _0x242cd7['clear'](), _0x242cd7["set"](_0x282183, _0x46caaf)), _0x46caaf;
      }(this, _0x1ff9f8),
      _0x1dda91 = "center" === _0x467818 ? _0x16c283 - _0x6c44cb / 0x2 : _0x16c283 - _0x6c44cb;
    this['textAlign'] = "left";
    var _0x2476cb = void 0x0 === _0x1bce75 ? _0x3209d8['call'](this, _0x1ff9f8, _0x1dda91, _0x397e92) : _0x3209d8['call'](this, _0x1ff9f8, _0x1dda91, _0x397e92, _0x1bce75);
    return this['textAlign'] = _0x467818, _0x2476cb;
  };
}
function _0x53571b() {
  var _0x30b9dc,
    _0x2b3210 = window;
  if (!_0x2b3210[_0x52d8cc]) {
    var _0x1f11c2 = null == (_0x30b9dc = _0x2b3210["CanvasRenderingContext2D"]) ? void 0x0 : _0x30b9dc['prototype'];
    _0x1f11c2 && "function" == typeof _0x1f11c2["fillText"] && (!function () {
      var _0x51ea23 = document['createElement']("canvas");
      _0x51ea23['width'] = _0x1e7c8b, _0x51ea23['height'] = 0x2c;
      var _0x1b2c21 = _0x51ea23["getContext"]('2d');
      if (!_0x1b2c21) return !0x1;
      _0x1b2c21["font"] = "29px Arial", _0x1b2c21["textAlign"] = "center", _0x1b2c21["textBaseline"] = "alphabetic", _0x1b2c21['fillStyle'] = "#fff";
      var _0x355295 = _0x1b2c21["measureText"](_0x55b099)['width'];
      if (_0x355295 <= 0x0) return !0x1;
      _0x1b2c21['fillText'](_0x55b099, 0xa0, 0x21);
      for (var _0x494703 = _0x1b2c21["getImageData"](0x0, 0x0, _0x1e7c8b, 0x2c)["data"], _0xeacacd = -0x1, _0x118f72 = 0x0; _0x118f72 < _0x1e7c8b && _0xeacacd < 0x0; _0x118f72++) for (var _0x4347e3 = 0x0; _0x4347e3 < 0x2c; _0x4347e3++) if (_0x494703[0x4 * (_0x4347e3 * _0x1e7c8b + _0x118f72) + 0x3] > 0x8) {
        _0xeacacd = _0x118f72;
        break;
      }
      return !(_0xeacacd < 0x0) && _0xeacacd > 0xa0 - _0x355295 / 0x4;
    }() ? (0, __dependency_0['log'])("[LabelTextAlignFix] textAlign 正常，不安裝") : (_0x1f11c2['fillText'] = _0x316101(_0x1f11c2["fillText"]), _0x1f11c2["strokeText"] = _0x316101(_0x1f11c2["strokeText"]), _0x2b3210[_0x52d8cc] = !0x0, (0, __dependency_0["warn"])("[LabelTextAlignFix] 已安裝 textAlign 修正（iOS 泰文置中失效）")));
  }
}
_0x53571b();
var _0x19ebd0 = __dependency_0["RichText"]["prototype"];
if (_0x19ebd0["_createFontLabel"]) {
  var _0x2ebeb3 = _0x19ebd0["_createFontLabel"];
  _0x19ebd0["_createFontLabel"] = function (_0x32cf3e) {
    var _0x479829 = _0x2ebeb3['call'](this, _0x32cf3e);
    return _0x479829 && _0x479829['node'] && (_0x479829["node"]["active"] = !0x0), _0x479829;
  };
}
__dependency_0["cclegacy"]['_RF']["pop"]();
