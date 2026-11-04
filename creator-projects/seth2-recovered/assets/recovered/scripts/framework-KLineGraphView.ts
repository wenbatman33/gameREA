// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-KLineGraphView.ts.js
// SHA256: 35e044c587f304b912de8429f419917a3536250cbb069331ec7ae814e9e6328a
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
(function (_0x5b1217) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x29b1cc) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x1c25d5) {
  void 0;
})(__dependency_2);
(function (_0x3c2e50) {
  void 0;
})(__dependency_3);
var _0x3de11e, _0x50c31a, _0x5d3bb9, _0x4abe7b, _0x45a9ae, _0x2741ee, _0x1750a2;
__dependency_1['cclegacy']['_RF']["push"]({}, "2edc4RzmBFPh5IV9wXeS7MI", "KLineGraphView", void 0x0);
var _0x4c4ba6 = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']["property"], __publish("default", (_0x3de11e = _0x4c4ba6("KLineGraphView"), _0x50c31a = (0, __dependency_3["inject"])("content/chartView", __dependency_1["Node"]), _0x5d3bb9 = (0, __dependency_3["inject"])("content/chartView/graphics", __dependency_1['Graphics']), _0x3de11e((_0x2741ee = (0, __dependency_0['applyDecoratedDescriptor'])((_0x45a9ae = function (_0x3de27c) {
  function _0x26faba() {
    for (var _0x5c88bc, _0x33c960 = arguments['length'], _0x3faf31 = new Array(_0x33c960), _0x2756c7 = 0x0; _0x2756c7 < _0x33c960; _0x2756c7++) _0x3faf31[_0x2756c7] = arguments[_0x2756c7];
    return _0x5c88bc = Reflect.construct(_0x3de27c, [this]["concat"](_0x3faf31).slice(1), new.target || _0x26faba) || this, (0, __dependency_0["initializerDefineProperty"])(_0x5c88bc, "chartView", _0x2741ee, (0, __dependency_0['assertThisInitialized'])(_0x5c88bc)), (0, __dependency_0["initializerDefineProperty"])(_0x5c88bc, 'graphics', _0x1750a2, (0, __dependency_0['assertThisInitialized'])(_0x5c88bc)), _0x5c88bc["kLineData"] = [], _0x5c88bc["config"] = {
      'candleWidth': 0xa,
      'candleGap': 0x5,
      'bullishColor': __dependency_1["Color"]["GREEN"],
      'bearishColor': __dependency_1["Color"]["RED"],
      'lineWidth': 0x3,
      'axisColor': __dependency_1["Color"]["WHITE"],
      'axisLineWidth': 0x3
    }, _0x5c88bc["padding"] = 0x28, _0x5c88bc;
  }
  (0, __dependency_0["inheritsLoose"])(_0x26faba, _0x3de27c), _0x26faba["getPrefabUrl"] = function () {
    return "prefabs/view/KLineGraphView";
  };
  var _0xa96332 = _0x26faba['prototype'];
  return _0xa96332["onLoad"] = function () {
    _0x3de27c["prototype"]["onLoad"]["call"](this);
  }, _0xa96332["start"] = function () {}, _0xa96332['onDestroy'] = function () {
    _0x3de27c["prototype"]['onDestroy']["call"](this);
  }, _0xa96332["show"] = function (_0x31738d) {
    _0x3de27c["prototype"]["show"]["call"](this, _0x31738d), this['init']();
  }, _0xa96332["init"] = function () {
    this["kLineData"] = [{
      'open': 0x61,
      'close': 0x66,
      'high': 0x69,
      'low': 0x5f,
      'date': "8/1"
    }, {
      'open': 0x6e,
      'close': 0x6c,
      'high': 0x73,
      'low': 0x69,
      'date': "8/2"
    }, {
      'open': 0x69,
      'close': 0x6b,
      'high': 0x6e,
      'low': 0x64,
      'date': "8/3"
    }, {
      'open': 0x73,
      'close': 0x70,
      'high': 0x78,
      'low': 0x6e,
      'date': '8/4'
    }, {
      'open': 0x67,
      'close': 0x69,
      'high': 0x6c,
      'low': 0x62,
      'date': "8/5"
    }, {
      'open': 0x62,
      'close': 0x65,
      'high': 0x68,
      'low': 0x5e,
      'date': "8/6"
    }, {
      'open': 0x78,
      'close': 0x73,
      'high': 0x7d,
      'low': 0x6e,
      'date': '8/7'
    }, {
      'open': 0x6e,
      'close': 0x66,
      'high': 0xb4,
      'low': 0xa,
      'date': '8/8'
    }, {
      'open': 0x5c,
      'close': 0x5f,
      'high': 0x62,
      'low': 0x5a,
      'date': "8/9"
    }, {
      'open': 0x6b,
      'close': 0x6e,
      'high': 0x73,
      'low': 0x69,
      'date': "8/10"
    }, {
      'open': 0x64,
      'close': 0x66,
      'high': 0x69,
      'low': 0x5f,
      'date': "8/11"
    }, {
      'open': 0x5f,
      'close': 0x61,
      'high': 0x64,
      'low': 0x5a,
      'date': '8/12'
    }, {
      'open': 0x70,
      'close': 0x6e,
      'high': 0x76,
      'low': 0x69,
      'date': "8/13"
    }, {
      'open': 0x69,
      'close': 0x6c,
      'high': 0x70,
      'low': 0x66,
      'date': '8/14'
    }, {
      'open': 0x66,
      'close': 0x64,
      'high': 0x69,
      'low': 0x5f,
      'date': "8/15"
    }, {
      'open': 0x64,
      'close': 0x62,
      'high': 0x69,
      'low': 0x5c,
      'date': "8/16"
    }, {
      'open': 0x6c,
      'close': 0x6e,
      'high': 0x73,
      'low': 0x69,
      'date': "8/17"
    }, {
      'open': 0x73,
      'close': 0x70,
      'high': 0x78,
      'low': 0x6e,
      'date': "8/18"
    }, {
      'open': 0x63,
      'close': 0x64,
      'high': 0x67,
      'low': 0x5f,
      'date': "8/19"
    }, {
      'open': 0x69,
      'close': 0x6c,
      'high': 0x6e,
      'low': 0x64,
      'date': "8/20"
    }, {
      'open': 0x5f,
      'close': 0x61,
      'high': 0x64,
      'low': 0x5a,
      'date': '8/21'
    }, {
      'open': 0x66,
      'close': 0x64,
      'high': 0x69,
      'low': 0x5f,
      'date': "8/22"
    }, {
      'open': 0x5a,
      'close': 0x5c,
      'high': 0x5f,
      'low': 0x58,
      'date': "8/23"
    }, {
      'open': 0x73,
      'close': 0x70,
      'high': 0x76,
      'low': 0x6e,
      'date': '8/24'
    }, {
      'open': 0x69,
      'close': 0x6b,
      'high': 0x70,
      'low': 0x66,
      'date': "8/25"
    }, {
      'open': 0x6e,
      'close': 0x6c,
      'high': 0x73,
      'low': 0x69,
      'date': "8/26"
    }, {
      'open': 0x64,
      'close': 0x66,
      'high': 0x69,
      'low': 0x5f,
      'date': '8/27'
    }, {
      'open': 0x61,
      'close': 0x64,
      'high': 0x67,
      'low': 0x5f,
      'date': "8/28"
    }, {
      'open': 0x73,
      'close': 0x70,
      'high': 0x76,
      'low': 0x6e,
      'date': '8/29'
    }, {
      'open': 0x0,
      'close': 0x0,
      'high': 0x0,
      'low': 0x0,
      'date': "8/30"
    }, {
      'open': 0x66,
      'close': 0x64,
      'high': 0x69,
      'low': 0x5f,
      'date': "8/31"
    }], this['drawKLineGraph']();
  }, _0xa96332["drawKLineGraph"] = function () {
    var _0x3c85d4 = this;
    this["graphics"] && 0x0 !== this['kLineData']["length"] ? (this["graphics"]["clear"](), this["drawXAxis"](), this["drawYAxis"](), this["kLineData"]['forEach'](function (_0x1e61da, _0x4ab5c9) {
      var _0x2f702b = _0x3c85d4['padding'] + _0x4ab5c9 * (_0x3c85d4['config']["candleWidth"] + _0x3c85d4["config"]["candleGap"]),
        _0x5ef865 = _0x1e61da['close'] > _0x1e61da["open"];
      _0x3c85d4['drawHighLowLine'](_0x2f702b, _0x1e61da, _0x5ef865), _0x3c85d4["drawCandle"](_0x2f702b, _0x1e61da, _0x5ef865);
    })) : console["error"]("圖形組件未設置或無數據.");
  }, _0xa96332['drawXAxis'] = function () {
    var _0x360c23 = this,
      _0x3f0f6a = this['chartView']["getComponent"](__dependency_1["UITransform"])["width"];
    this["chartView"]["getComponent"](__dependency_1["UITransform"])["height"];
    this["graphics"]['strokeColor'] = this["config"]['axisColor'], this['graphics']["lineWidth"] = this["config"]["axisLineWidth"];
    var _0x1e47f0 = this['padding'];
    this["graphics"]["moveTo"](this["padding"], _0x1e47f0), this["graphics"]["lineTo"](_0x3f0f6a - this['padding'] - 0x32, _0x1e47f0), this["graphics"]["stroke"](), this["kLineData"]["forEach"](function (_0x7f353e, _0x1ac551) {
      var _0x4a7b3f = parseInt(_0x7f353e["date"]['split']('/')[0x1], 0xa);
      if (0x1 === _0x4a7b3f || _0x4a7b3f % 0x5 == 0x0) {
        var _0x87b873 = _0x360c23['padding'] + _0x1ac551 * (_0x360c23["config"]["candleWidth"] + _0x360c23["config"]["candleGap"]) + _0x360c23["config"]["candleWidth"] / 0x2;
        _0x360c23["drawText"](_0x4a7b3f["toString"](), _0x87b873, _0x1e47f0 - 0xf);
      }
    });
  }, _0xa96332["drawYAxis"] = function () {
    var _0x299305 = this['getMaxPrice'](),
      _0x408fcf = this["getMinPrice"](),
      _0xbff56c = this["chartView"]["getComponent"](__dependency_1["UITransform"])["height"] - 0x2 * this['padding'],
      _0x3e26de = (_0x299305 - _0x408fcf) / 0x5;
    this['graphics']["strokeColor"] = this["config"]["axisColor"], this["graphics"]['lineWidth'] = this["config"]["axisLineWidth"];
    var _0x3635a8 = this['chartView']["getComponent"](__dependency_1["UITransform"])["width"] - this["padding"] - 0x32;
    this["graphics"]["moveTo"](_0x3635a8, this["padding"]), this["graphics"]["lineTo"](_0x3635a8, _0xbff56c + this["padding"]), this["graphics"]['stroke']();
    for (var _0xf9f861 = 0x0; _0xf9f861 <= 0x5; _0xf9f861++) {
      var _0x275fb5 = _0x408fcf + _0xf9f861 * _0x3e26de,
        _0x298e44 = this["padding"] + _0xf9f861 * (_0xbff56c / 0x5);
      this["graphics"]["moveTo"](_0x3635a8 - 0x5, _0x298e44), this["graphics"]["lineTo"](_0x3635a8 + 0x5, _0x298e44), this["graphics"]['stroke']();
      var _0x405866 = _0x3635a8 + 0xf;
      this["drawText"](_0x275fb5['toFixed'](0x2), _0x405866, _0x298e44 - 0x8, "left");
    }
  }, _0xa96332["drawText"] = function (_0x3ae491, _0x3ea5fd, _0x2ce722, _0x3d48f2) {
    void 0x0 === _0x3d48f2 && (_0x3d48f2 = "center");
    var _0x2ffaf4 = new __dependency_1["Node"](),
      _0x20fdec = _0x2ffaf4["addComponent"](__dependency_1["Label"]);
    switch (_0x20fdec['string'] = _0x3ae491, _0x20fdec["color"] = this["config"]["axisColor"], _0x20fdec["fontSize"] = 0x18, _0x3d48f2) {
      case "left":
        _0x2ffaf4["getComponent"](__dependency_1["UITransform"])["setAnchorPoint"](0x0, 0.5);
        break;
      case "center":
        _0x2ffaf4["getComponent"](__dependency_1["UITransform"])['setAnchorPoint'](0.5, 0.5);
        break;
      case 'right':
      default:
        _0x2ffaf4["getComponent"](__dependency_1["UITransform"])["setAnchorPoint"](0x1, 0.5);
    }
    _0x2ffaf4["setPosition"](new __dependency_1['Vec3'](_0x3ea5fd, _0x2ce722, 0x0)), this['chartView']["addChild"](_0x2ffaf4);
  }, _0xa96332["drawHighLowLine"] = function (_0x1dec5c, _0xc3a023, _0x328303) {
    this['graphics']['strokeColor'] = _0x328303 ? this["config"]["bullishColor"] : this['config']['bearishColor'], this["graphics"]["lineWidth"] = this['config']["lineWidth"];
    var _0x469fd3 = (this['chartView']["getComponent"](__dependency_1["UITransform"])["height"] - 0x2 * this["padding"]) / (this["getMaxPrice"]() - this["getMinPrice"]()),
      _0x2baa38 = this["padding"] + (_0xc3a023['low'] - this["getMinPrice"]()) * _0x469fd3,
      _0x6e59d4 = this["padding"] + (_0xc3a023["high"] - this["getMinPrice"]()) * _0x469fd3;
    this["graphics"]["moveTo"](_0x1dec5c + this["config"]["candleWidth"] / 0x2, _0x2baa38), this["graphics"]['lineTo'](_0x1dec5c + this["config"]["candleWidth"] / 0x2, _0x6e59d4), this["graphics"]["stroke"]();
  }, _0xa96332["drawCandle"] = function (_0x151f69, _0x27f51e, _0x3e8469) {
    this["graphics"]['fillColor'] = _0x3e8469 ? this['config']["bullishColor"] : this["config"]["bearishColor"];
    var _0x4d6aba = (this["chartView"]["getComponent"](__dependency_1["UITransform"])['height'] - 0x2 * this['padding']) / (this["getMaxPrice"]() - this['getMinPrice']()),
      _0x2bac9a = this["padding"] + (Math["max"](_0x27f51e['open'], _0x27f51e["close"]) - this["getMinPrice"]()) * _0x4d6aba,
      _0x4c6db6 = this["padding"] + (Math["min"](_0x27f51e['open'], _0x27f51e["close"]) - this["getMinPrice"]()) * _0x4d6aba;
    this['graphics']["rect"](_0x151f69, _0x4c6db6, this["config"]['candleWidth'], _0x2bac9a - _0x4c6db6), this["graphics"]["fill"]();
  }, _0xa96332["getMaxPrice"] = function () {
    return Math['max']["apply"](Math, this["kLineData"]["map"](function (_0x3ed3eb) {
      return _0x3ed3eb['high'];
    }));
  }, _0xa96332["getMinPrice"] = function () {
    return Math["min"]['apply'](Math, this["kLineData"]["map"](function (_0x460d53) {
      return _0x460d53['low'];
    }));
  }, _0x26faba;
}(__dependency_2['default']))["prototype"], "chartView", [_0x50c31a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1750a2 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x45a9ae["prototype"], "graphics", [_0x5d3bb9], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4abe7b = _0x45a9ae)) || _0x4abe7b));
__dependency_1['cclegacy']["_RF"]["pop"]();
