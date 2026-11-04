// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ColorModel.ts.js
// SHA256: 4132bd8f631a249ed0e4a024efe7d31a176a1b90e2a5b5161434bfd6b2b87764
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
var __export_0;
export { __export_0 as EColorKeys };
var __export_1;
export { __export_1 as EUiColorKeys };
var __export_2;
export { __export_2 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EColorKeys":
      __export_0 = value;
      break;
    case "EUiColorKeys":
      __export_1 = value;
      break;
    case "default":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x25f343) {
  void 0;
})(__dependency_0);
(function (_0x50b97a) {
  void 0, void 0;
})(__dependency_1);
(function (_0x3f4559) {
  void 0;
})(__dependency_2);
var _0xda29a4;
__publish({
  'EColorKeys': void 0x0,
  'EUiColorKeys': void 0x0
}), __dependency_1["cclegacy"]["_RF"]["push"]({}, "4d216JbRNJE+pa6PdrkrN/Q", 'ColorModel', void 0x0), function (_0x3e93bf) {
  _0x3e93bf[_0x3e93bf["yellow"] = 0x0] = 'yellow', _0x3e93bf[_0x3e93bf["green"] = 0x1] = "green", _0x3e93bf[_0x3e93bf["red"] = 0x2] = "red", _0x3e93bf[_0x3e93bf['white'] = 0x3] = "white", _0x3e93bf[_0x3e93bf["record"] = 0x4] = "record", _0x3e93bf[_0x3e93bf['background'] = 0x5] = 'background', _0x3e93bf[_0x3e93bf["mainGame"] = 0x6] = "mainGame";
}(_0xda29a4 || (_0xda29a4 = __publish("EColorKeys", {})));
var _0x4b5b29 = function (_0x2df4ad) {
  function _0x3ba631() {
    var _0x325d4f;
    return (_0x325d4f = Reflect.construct(_0x2df4ad, [], new.target || _0x3ba631) || this)["data"] = {
      'mainGame': {
        'auxiliary': new __dependency_1["Color"]('#4e3487'),
        'main': new __dependency_1["Color"]("#ab84ff"),
        'mainHover': new __dependency_1["Color"]('#896acc'),
        'topbar': new __dependency_1["Color"](0x2a, 0x1a, 0x4d, 209.1)
      },
      'record': {
        0x5: new __dependency_1["Color"](0xff, 0xff, 0xff, 12.75),
        0xa: new __dependency_1["Color"](0xff, 0xff, 0xff, 0xff * 0.24)
      },
      'background': {
        0x0: new __dependency_1["Color"]("#c9c9cc"),
        0x14: new __dependency_1["Color"]("#a9a9ad"),
        0x28: new __dependency_1["Color"]("#88898e"),
        0x3c: new __dependency_1["Color"]("#68696f"),
        0x50: new __dependency_1["Color"]("#474951"),
        0x64: new __dependency_1["Color"]('#272932')
      },
      'white': {
        'info01': new __dependency_1["Color"]("#ffffff"),
        'default01': new __dependency_1["Color"](0xff, 0xff, 0xff, 38.25),
        'default02': new __dependency_1["Color"](0xff, 0xff, 0xff, 0xff * 0.24),
        'hover01': new __dependency_1["Color"](0xff, 0xff, 0xff, 76.5),
        'hover02': new __dependency_1["Color"](0xff, 0xff, 0xff, 0xff * 0.08),
        'labelDefault01': new __dependency_1["Color"](0xff, 0xff, 0xff, 0x99),
        'textAuto01': new __dependency_1["Color"]("#ffffff")
      },
      'red': {
        'primary': new __dependency_1["Color"]("#ff6433")
      },
      'green': {
        'primary': new __dependency_1["Color"]("#3ae300")
      },
      'yellow': {
        'primary': new __dependency_1["Color"]("#ffd680"),
        'secondary': new __dependency_1["Color"](0xff, 0xa8, 0x0, 76.5)
      }
    }, _0x325d4f;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x3ba631, _0x2df4ad), _0x3ba631["Instance"] = function () {
    return this["_instance"] || (this["_instance"] = new _0x3ba631());
  }, _0x3ba631["prototype"]['setData'] = function (_0x2d7f2d) {
    this['data'] = _0x2d7f2d;
  }, _0x3ba631;
}(__dependency_2["BaseModel"]);
_0x4b5b29["_instance"] = null;
__publish("default", _0x4b5b29["Instance"]());
var _0x387a36,
  _0x4e52a3 = _0x4b5b29['Instance']()['getData']();
_0x387a36 || (_0x387a36 = __publish("EUiColorKeys", {}));
var _0x3f32ca = {};
for (var _0x366d2b in _0x4e52a3) for (var _0x55bc21 in _0x4e52a3[_0x366d2b]) {
  var _0x399c6e = _0x1a1f72(_0x366d2b + '_' + _0x55bc21);
  _0x3f32ca[_0x399c6e] && console["log"]("碰撞檢測: " + _0x366d2b + '_' + _0x55bc21 + " 的哈希碰撞"), _0x3f32ca[_0x399c6e] = _0x366d2b + '_' + _0x55bc21, _0x387a36[_0x366d2b + '_' + _0x55bc21] = _0x399c6e;
}
function _0x1a1f72(_0x65d118) {
  for (var _0x44bb41 = 0x0, _0x1348cb = 0x0; _0x1348cb < _0x65d118['length']; _0x1348cb++) {
    _0x44bb41 = (_0x44bb41 << 0x5) - _0x44bb41 + _0x65d118["charCodeAt"](_0x1348cb), _0x44bb41 |= 0x0;
  }
  return _0x44bb41;
}
__dependency_1["cclegacy"]["_RF"]["pop"]();
