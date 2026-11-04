// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-HistoryItem.ts.js
// SHA256: 2eb91c564288e7e7ff1d45d1180db5835f4b2184692f4591082fc4fb7ef54eaf
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-TableViewCell";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-ColorModel";
import * as __dependency_5 from "./main-CmmUtils";
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
(function (_0x14638e) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x2af5fc) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x3073d2) {
  void 0;
})(__dependency_2);
(function (_0x56eb34) {
  void 0;
})(__dependency_3);
(function (_0x469367) {
  void 0;
})(__dependency_4);
(function (_0x3f9ddc) {
  void 0;
})(__dependency_5);
var _0x1c16e5, _0x17cf8c, _0x34401d, _0x285703, _0x571dbd, _0x4b6e60, _0x1b524e, _0x248e0f, _0x5181ae, _0x331eb1, _0x230f11, _0x2b9db7, _0x840f50, _0x12ed3f, _0x13d2e3, _0x40f79b, _0x42a4b6, _0x4ac303;
__dependency_1["cclegacy"]['_RF']["push"]({}, "4b786URc4ZDpr+/e8Bl23xz", "HistoryItem", void 0x0);
var _0x315c89 = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"], __publish("default", (_0x1c16e5 = (0, __dependency_3["inject"])('bg', __dependency_1["Sprite"]), _0x17cf8c = (0, __dependency_3["inject"])("content", __dependency_1['Node']), _0x34401d = (0, __dependency_3["inject"])('content/gameNameMask', __dependency_1['Node']), _0x285703 = (0, __dependency_3["inject"])("content/gameNameMask/label", __dependency_1["Label"]), _0x571dbd = (0, __dependency_3["inject"])('content/betContent/label', __dependency_1["Label"]), _0x4b6e60 = (0, __dependency_3["inject"])("content/totalWinContent/label", __dependency_1["Label"]), _0x1b524e = (0, __dependency_3["inject"])("content/profitContent/label", __dependency_1["Label"]), _0x248e0f = (0, __dependency_3["inject"])("content/countContent/label", __dependency_1["Label"]), _0x315c89((_0x230f11 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x331eb1 = function (_0x1483d9) {
  function _0x3c0191() {
    for (var _0x142407, _0x4bee02 = arguments['length'], _0x372282 = new Array(_0x4bee02), _0x28e616 = 0x0; _0x28e616 < _0x4bee02; _0x28e616++) _0x372282[_0x28e616] = arguments[_0x28e616];
    return _0x142407 = Reflect.construct(_0x1483d9, [this]["concat"](_0x372282).slice(1), new.target || _0x3c0191) || this, (0, __dependency_0["initializerDefineProperty"])(_0x142407, 'bg', _0x230f11, (0, __dependency_0["assertThisInitialized"])(_0x142407)), (0, __dependency_0["initializerDefineProperty"])(_0x142407, 'content', _0x2b9db7, (0, __dependency_0["assertThisInitialized"])(_0x142407)), (0, __dependency_0["initializerDefineProperty"])(_0x142407, "gameNameMask", _0x840f50, (0, __dependency_0["assertThisInitialized"])(_0x142407)), (0, __dependency_0["initializerDefineProperty"])(_0x142407, "gameNameLabel", _0x12ed3f, (0, __dependency_0["assertThisInitialized"])(_0x142407)), (0, __dependency_0["initializerDefineProperty"])(_0x142407, 'bet', _0x13d2e3, (0, __dependency_0["assertThisInitialized"])(_0x142407)), (0, __dependency_0["initializerDefineProperty"])(_0x142407, "totalWin", _0x40f79b, (0, __dependency_0["assertThisInitialized"])(_0x142407)), (0, __dependency_0["initializerDefineProperty"])(_0x142407, "profit", _0x42a4b6, (0, __dependency_0["assertThisInitialized"])(_0x142407)), (0, __dependency_0["initializerDefineProperty"])(_0x142407, "count", _0x4ac303, (0, __dependency_0["assertThisInitialized"])(_0x142407)), _0x142407;
  }
  (0, __dependency_0['inheritsLoose'])(_0x3c0191, _0x1483d9);
  var _0x3ea2db = _0x3c0191["prototype"];
  return _0x3ea2db['init'] = function () {
    this["initLabelMarquee"]();
  }, _0x3ea2db["setAdapter"] = function (_0x2c7ba9) {}, _0x3ea2db['initLabelMarquee'] = function () {
    var _0x527c88 = {
      'maskNode': this["gameNameMask"],
      'labelNode': this["gameNameLabel"]["node"],
      'delayTime': 0x2
    };
    this["scheduleOnce"](function () {
      __dependency_5["CmmUtils"]["labelMarquee"](_0x527c88);
    });
  }, _0x3ea2db["willRecycle"] = function () {}, _0x3ea2db['updateData'] = function (_0x5b1633, _0x36b0cc) {
    var _0x37fbfe = _0x5b1633["name"],
      _0x48ef5 = _0x5b1633['bet'],
      _0x279c24 = _0x5b1633["win"],
      _0x5d6669 = _0x5b1633['profit'],
      _0x39d8e5 = _0x5b1633['betCount'],
      _0x3fb724 = __dependency_4['default']["getData"](),
      _0x865a87 = _0x3fb724["green"],
      _0x581286 = _0x3fb724["red"],
      _0x42672e = _0x3fb724['record'];
    this['bg']["color"] = _0x36b0cc % 0x2 == 0x0 ? _0x42672e[0x5] : _0x42672e[0xa], this["gameNameLabel"]["string"] = _0x37fbfe, this["bet"]["string"] = '' + _0x48ef5, this["totalWin"]["string"] = '' + _0x279c24, this["profit"]["string"] = '' + _0x5d6669, this['count']["string"] = '' + _0x39d8e5, this["profit"]["color"] = _0x5b1633["profit"] > 0x0 ? _0x581286["primary"] : _0x865a87["primary"];
  }, _0x3c0191;
}(__dependency_2["TableViewCell"]))['prototype'], 'bg', [_0x1c16e5], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2b9db7 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x331eb1["prototype"], 'content', [_0x17cf8c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x840f50 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x331eb1["prototype"], 'gameNameMask', [_0x34401d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x12ed3f = (0, __dependency_0["applyDecoratedDescriptor"])(_0x331eb1['prototype'], 'gameNameLabel', [_0x285703], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x13d2e3 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x331eb1["prototype"], "bet", [_0x571dbd], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x40f79b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x331eb1["prototype"], "totalWin", [_0x4b6e60], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x42a4b6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x331eb1['prototype'], 'profit', [_0x1b524e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4ac303 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x331eb1["prototype"], "count", [_0x248e0f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5181ae = _0x331eb1)) || _0x5181ae));
__dependency_1["cclegacy"]["_RF"]["pop"]();
