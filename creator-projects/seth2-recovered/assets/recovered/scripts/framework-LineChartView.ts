// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-LineChartView.ts.js
// SHA256: 267aea23cb467fa82eb9bb20fa187b6392b8fcf774761fb565ce2dd38c8b0b37
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UIView";
import * as __dependency_3 from "./main-Decorators";
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
(function (_0x2b621a) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x22c100) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x205d53) {
  void 0;
})(__dependency_2);
(function (_0x589ee1) {
  void 0;
})(__dependency_3);
var _0x4662bd, _0x247924, _0x352811, _0x3e7f73, _0x2d6944, _0xa567af, _0x3a284a;
__dependency_1["cclegacy"]["_RF"]['push']({}, "045b0bhyjVCM6NAdC9BR1nk", 'LineChartView', void 0x0);
var _0x2e0b9a = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']['property'], __publish('default', (_0x4662bd = _0x2e0b9a('LineChartView'), _0x247924 = (0, __dependency_3["inject"])("content/chartView", __dependency_1["Node"]), _0x352811 = (0, __dependency_3["inject"])("content/chartView/graphics", __dependency_1["Graphics"]), _0x4662bd((_0xa567af = (0, __dependency_0["applyDecoratedDescriptor"])((_0x2d6944 = function (_0x42924c) {
  function _0x4f04b1() {
    for (var _0x16f127, _0x2659d2 = arguments['length'], _0x56073d = new Array(_0x2659d2), _0xe63281 = 0x0; _0xe63281 < _0x2659d2; _0xe63281++) _0x56073d[_0xe63281] = arguments[_0xe63281];
    return _0x16f127 = Reflect.construct(_0x42924c, [this]["concat"](_0x56073d).slice(1), new.target || _0x4f04b1) || this, (0, __dependency_0["initializerDefineProperty"])(_0x16f127, "chartView", _0xa567af, (0, __dependency_0["assertThisInitialized"])(_0x16f127)), (0, __dependency_0["initializerDefineProperty"])(_0x16f127, 'graphics', _0x3a284a, (0, __dependency_0["assertThisInitialized"])(_0x16f127)), _0x16f127["lineChartData"] = [], _0x16f127["config"] = {
      'lineWidth': 0x5,
      'lineColor': __dependency_1["Color"]["GREEN"],
      'axisColor': __dependency_1["Color"]["WHITE"],
      'axisLineWidth': 0x3,
      'xAxisSpacing': 0xf,
      'padding': 0x28
    }, _0x16f127;
  }
  (0, __dependency_0['inheritsLoose'])(_0x4f04b1, _0x42924c), _0x4f04b1['getPrefabUrl'] = function () {
    return 'prefabs/view/LineChartView';
  };
  var _0x5bf054 = _0x4f04b1["prototype"];
  return _0x5bf054["onLoad"] = function () {
    _0x42924c["prototype"]["onLoad"]['call'](this);
  }, _0x5bf054["start"] = function () {}, _0x5bf054["onDestroy"] = function () {
    _0x42924c["prototype"]['onDestroy']["call"](this);
  }, _0x5bf054["show"] = function (_0x544851) {
    _0x42924c["prototype"]["show"]['call'](this, _0x544851), this["init"]();
  }, _0x5bf054["init"] = function () {
    this['lineChartData'] = [{
      'date': "8/1",
      'value': 0x66
    }, {
      'date': "8/2",
      'value': 0x6c
    }, {
      'date': '8/3',
      'value': 0x6b
    }, {
      'date': "8/4",
      'value': 0x70
    }, {
      'date': '8/5',
      'value': 0x69
    }, {
      'date': "8/6",
      'value': 0x65
    }, {
      'date': "8/7",
      'value': 0x73
    }, {
      'date': "8/8",
      'value': 0x66
    }, {
      'date': "8/9",
      'value': 0x5f
    }, {
      'date': "8/10",
      'value': 0x6e
    }, {
      'date': "8/11",
      'value': 0x66
    }, {
      'date': "8/12",
      'value': 0x61
    }, {
      'date': '8/13',
      'value': 0x6e
    }, {
      'date': "8/14",
      'value': 0x6c
    }, {
      'date': '8/15',
      'value': 0x64
    }, {
      'date': "8/16",
      'value': 0x62
    }, {
      'date': '8/17',
      'value': 0x6e
    }, {
      'date': "8/18",
      'value': 0x70
    }, {
      'date': '8/19',
      'value': 0x64
    }, {
      'date': "8/20",
      'value': 0x6c
    }, {
      'date': "8/21",
      'value': 0x61
    }, {
      'date': "8/22",
      'value': 0x64
    }, {
      'date': "8/23",
      'value': 0x5c
    }, {
      'date': "8/24",
      'value': 0x70
    }, {
      'date': '8/25',
      'value': 0x17
    }, {
      'date': "8/26",
      'value': 0x0
    }, {
      'date': "8/27",
      'value': 0x2e
    }, {
      'date': "8/28",
      'value': 0x64
    }, {
      'date': '8/29',
      'value': 0x34
    }, {
      'date': "8/30",
      'value': 0x0
    }, {
      'date': '8/31',
      'value': 0x32
    }], this["drawLineChart"]();
  }, _0x5bf054["drawLineChart"] = function () {
    var _0x4ac63c = this;
    this["graphics"] && 0x0 !== this['lineChartData']["length"] ? (this["graphics"]["clear"](), this['drawXAxis'](), this["drawYAxis"](), this["graphics"]["strokeColor"] = this["config"]["lineColor"], this["graphics"]["lineWidth"] = this["config"]["lineWidth"], this["lineChartData"]["forEach"](function (_0x3e65d0, _0x1851fd) {
      var _0x4a2e17 = _0x4ac63c['config']["padding"] + _0x1851fd * _0x4ac63c["config"]["xAxisSpacing"],
        _0x36186f = _0x4ac63c["getYPosition"](_0x3e65d0["value"]);
      if (0x0 === _0x1851fd) _0x4ac63c["graphics"]["moveTo"](_0x4a2e17, _0x36186f);else {
        var _0x2d8295 = _0x4ac63c["lineChartData"][_0x1851fd - 0x1],
          _0x3fa93b = _0x4ac63c["config"]["padding"] + (_0x1851fd - 0x1) * _0x4ac63c["config"]["xAxisSpacing"],
          _0x27d2b0 = _0x4ac63c["getYPosition"](_0x2d8295["value"]);
        if (Math['abs'](_0x36186f - _0x27d2b0) > 0x1e) {
          var _0x1ee242 = (_0x4a2e17 + _0x3fa93b) / 0x2,
            _0x1279d7 = (_0x36186f + _0x27d2b0) / 0x2;
          _0x4ac63c["graphics"]['lineTo'](_0x1ee242, _0x1279d7), _0x4ac63c["graphics"]["stroke"](), _0x4ac63c["graphics"]['moveTo'](_0x1ee242, _0x1279d7);
        }
        _0x4ac63c["graphics"]["lineTo"](_0x4a2e17, _0x36186f), _0x4ac63c["graphics"]["stroke"]();
      }
    })) : console['error']('圖形組件未設置或無數據.');
  }, _0x5bf054["drawXAxis"] = function () {
    var _0x534347 = this,
      _0x2bc2e4 = this['chartView']['getComponent'](__dependency_1["UITransform"])["width"],
      _0xb85d3e = this["getMinPrice"](),
      _0x1fce45 = this["getYPosition"](_0xb85d3e);
    this["graphics"]["strokeColor"] = this["config"]["axisColor"], this["graphics"]["lineWidth"] = this["config"]["axisLineWidth"], this["graphics"]["moveTo"](this['config']['padding'], _0x1fce45), this["graphics"]['lineTo'](_0x2bc2e4 - this["config"]['padding'] - 0x32, _0x1fce45), this["graphics"]['stroke'](), this["lineChartData"]["forEach"](function (_0x25fefc, _0x2b9fdb) {
      var _0x2642c6 = parseInt(_0x25fefc["date"]["split"]('/')[0x1], 0xa);
      if (0x1 === _0x2642c6 || _0x2642c6 % 0x5 == 0x0) {
        var _0x20611b = _0x534347["config"]["padding"] + _0x2b9fdb * _0x534347['config']["xAxisSpacing"];
        _0x534347["drawText"](_0x2642c6["toString"](), _0x20611b, _0x1fce45 + 0xa);
      }
    });
  }, _0x5bf054["drawYAxis"] = function () {
    var _0x11f524 = this['getMaxPrice'](),
      _0x41d1bc = this["getMinPrice"](),
      _0xea0e41 = this['chartView']['getComponent'](__dependency_1["UITransform"])["height"] - 0x2 * this["config"]['padding'],
      _0x75356f = this["chartView"]["getComponent"](__dependency_1["UITransform"])["width"] - this["config"]["padding"] - 0x32;
    this["graphics"]["strokeColor"] = this["config"]["axisColor"], this["graphics"]["lineWidth"] = this['config']["axisLineWidth"], this["graphics"]['moveTo'](_0x75356f, this["config"]["padding"]), this["graphics"]["lineTo"](_0x75356f, _0xea0e41 + this["config"]['padding']), this["graphics"]['stroke']();
    for (var _0x4e80d8 = 0x0; _0x4e80d8 <= 0x5; _0x4e80d8++) {
      var _0x25eb50 = _0x41d1bc + _0x4e80d8 * (_0x11f524 - _0x41d1bc) / 0x5,
        _0x2df3c0 = this["getYPosition"](_0x25eb50);
      this["graphics"]["moveTo"](_0x75356f - 0x5, _0x2df3c0), this['graphics']["lineTo"](_0x75356f + 0x5, _0x2df3c0), this["graphics"]["stroke"](), this["drawText"](_0x25eb50["toFixed"](0x2), _0x75356f + 0xa, _0x2df3c0 - 0x8, "left");
    }
  }, _0x5bf054["drawText"] = function (_0x7e3313, _0x2fc1b5, _0x3327cd, _0x1c878b) {
    void 0x0 === _0x1c878b && (_0x1c878b = "center");
    var _0x113a74 = new __dependency_1["Node"](),
      _0x32328f = _0x113a74["addComponent"](__dependency_1["Label"]);
    switch (_0x32328f["string"] = _0x7e3313, _0x32328f["color"] = this["config"]["axisColor"], _0x32328f["fontSize"] = 0x18, _0x1c878b) {
      case "left":
        _0x113a74["getComponent"](__dependency_1["UITransform"])["setAnchorPoint"](0x0, 0.5);
        break;
      case "center":
        _0x113a74['getComponent'](__dependency_1["UITransform"])["setAnchorPoint"](0.5, 0.5);
        break;
      case "right":
      default:
        _0x113a74['getComponent'](__dependency_1["UITransform"])["setAnchorPoint"](0x1, 0.5);
    }
    _0x113a74["setPosition"](new __dependency_1['Vec3'](_0x2fc1b5, _0x3327cd, 0x0)), this["chartView"]['addChild'](_0x113a74);
  }, _0x5bf054["getMaxPrice"] = function () {
    return Math["max"]["apply"](Math, this["lineChartData"]["map"](function (_0xb85109) {
      return _0xb85109["value"];
    }));
  }, _0x5bf054['getMinPrice'] = function () {
    return Math["min"]["apply"](Math, this["lineChartData"]["map"](function (_0x4c6a67) {
      return _0x4c6a67["value"];
    }));
  }, _0x5bf054['getYPosition'] = function (_0x3e6669) {
    var _0x288160 = this["getMaxPrice"](),
      _0x701c55 = this["getMinPrice"](),
      _0x1c8b36 = (this["chartView"]['getComponent'](__dependency_1["UITransform"])["height"] - 0x2 * this['config']["padding"]) / (_0x288160 - _0x701c55);
    return this["config"]["padding"] + (_0x3e6669 - _0x701c55) * _0x1c8b36;
  }, _0x4f04b1;
}(__dependency_2["default"]))['prototype'], 'chartView', [_0x247924], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3a284a = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2d6944["prototype"], "graphics", [_0x352811], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3e7f73 = _0x2d6944)) || _0x3e7f73));
__dependency_1["cclegacy"]["_RF"]["pop"]();
