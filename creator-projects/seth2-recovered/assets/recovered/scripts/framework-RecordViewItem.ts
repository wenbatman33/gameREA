// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RecordViewItem.ts.js
// SHA256: ae7d5c54e200fb8884cad96940c4c4c4287dce7cb545350a1771a898817a0024
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-TableViewCell";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-ColorModel";
import * as __dependency_5 from "./main-CmmUtils";
import * as __dependency_6 from "./framework-WebUiView";
import * as __dependency_7 from "./main-Bundles";
import * as __dependency_8 from "./main-Config";
import * as __dependency_9 from "./framework-PlatformModel";
import * as __dependency_10 from "./framework-SocketModel";
import * as __dependency_11 from "./framework-UrlModel";
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
(function (_0x23f470) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x3dc737) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x58c6a3) {
  void 0;
})(__dependency_2);
(function (_0x40b67b) {
  void 0;
})(__dependency_3);
(function (_0x28d80a) {
  void 0;
})(__dependency_4);
(function (_0x53d840) {
  void 0;
})(__dependency_5);
(function (_0x2a7e7f) {
  void 0;
})(__dependency_6);
(function (_0x17acc2) {
  void 0;
})(__dependency_7);
(function (_0x253f03) {
  void 0;
})(__dependency_8);
(function (_0x46ec6c) {
  void 0;
})(__dependency_9);
(function (_0x940187) {
  void 0;
})(__dependency_10);
(function (_0x940913) {
  void 0;
})(__dependency_11);
var _0x2a12af, _0x4d6e88, _0x2bc236, _0xc9a43c, _0x3feaa6, _0x3ecb6b, _0xe7abf2, _0xb257b8, _0x2f3535, _0x1de8ce, _0x3c1ec3, _0x2daeb5, _0x400381, _0x200501, _0x5e8765, _0x3bd2c6, _0x35e88d, _0x3c3b54, _0x3df788, _0x3b8fef, _0x3c5c68, _0x3a6082;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "904a4eM+etBZqEOAASfkGY+", "RecordViewItem", void 0x0);
var _0x5d0d97 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]['property'], __publish("default", (_0x2a12af = (0, __dependency_3["inject"])('bg', __dependency_1["Sprite"]), _0x4d6e88 = (0, __dependency_3["inject"])("content", __dependency_1['Node']), _0x2bc236 = (0, __dependency_3["inject"])('content/feature/icon', __dependency_1['Node']), _0xc9a43c = (0, __dependency_3["inject"])("content/timeContent/time", __dependency_1["Label"]), _0x3feaa6 = (0, __dependency_3["inject"])("content/timeContent/betId", __dependency_1["Label"]), _0x3ecb6b = (0, __dependency_3["inject"])("content/gameNameContnet/gameName", __dependency_1["Label"]), _0xe7abf2 = (0, __dependency_3["inject"])('content/betContent/betNum', __dependency_1["Label"]), _0xb257b8 = (0, __dependency_3["inject"])('content/profitContent/profitNum', __dependency_1["Label"]), _0x2f3535 = (0, __dependency_3["inject"])("content/detailContent", __dependency_1['Node']), _0x1de8ce = (0, __dependency_3["inject"])('content/detailContent/detailBtn', __dependency_1['Node']), _0x5d0d97((_0x400381 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x2daeb5 = function (_0x1d33ef) {
  function _0x1835b3() {
    for (var _0x53dc69, _0x46118b = arguments["length"], _0x1ff81c = new Array(_0x46118b), _0x12c3c1 = 0x0; _0x12c3c1 < _0x46118b; _0x12c3c1++) _0x1ff81c[_0x12c3c1] = arguments[_0x12c3c1];
    return _0x53dc69 = Reflect.construct(_0x1d33ef, [this]["concat"](_0x1ff81c).slice(1), new.target || _0x1835b3) || this, (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, 'bg', _0x400381, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, "content", _0x200501, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, 'featureIcon', _0x5e8765, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, 'time', _0x3bd2c6, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, "betId", _0x35e88d, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, "gameName", _0x3c3b54, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, "betNum", _0x3df788, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, 'profitNum', _0x3b8fef, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, "detailContent", _0x3c5c68, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), (0, __dependency_0["initializerDefineProperty"])(_0x53dc69, "detailBtn", _0x3a6082, (0, __dependency_0['assertThisInitialized'])(_0x53dc69)), _0x53dc69;
  }
  (0, __dependency_0['inheritsLoose'])(_0x1835b3, _0x1d33ef);
  var _0x254c52 = _0x1835b3['prototype'];
  return _0x254c52['init'] = function () {
    this["showDetailContent"](), this["setEventTouch"]();
  }, _0x254c52["setAdapter"] = function (_0x757036) {}, _0x254c52['formatTime'] = function (_0x18c188) {
    var _0x47ee59 = new Date(_0x18c188);
    return _0x47ee59['getFullYear']() + '/' + (_0x47ee59["getMonth"]() + 0x1)["toString"]()["padStart"](0x2, '0') + '/' + _0x47ee59["getDate"]()["toString"]()['padStart'](0x2, '0') + '\x20' + _0x47ee59["getHours"]()["toString"]()["padStart"](0x2, '0') + ':' + _0x47ee59["getMinutes"]()['toString']()["padStart"](0x2, '0') + ':' + _0x47ee59["getSeconds"]()["toString"]()["padStart"](0x2, '0');
  }, _0x254c52["setEventTouch"] = function () {
    var _0x354a4b = this;
    this["detailBtn"] && __dependency_5["CmmUtils"]["addBtnClickEvent"](this["detailBtn"], function () {
      if (__dependency_9["default"]["getData"]()["betRecordUrl"]) {
        var _0xbd8d2 = new URL(__dependency_9["default"]["getData"]()["betRecordUrl"]);
        _0xbd8d2["searchParams"]["set"]('l', __dependency_11['default']["getData"]()["searchParams"]['l']), _0xbd8d2["searchParams"]['set']('t', __dependency_10["default"]['currentToken']), _0xbd8d2["searchParams"]['set']("betId", '' + _0x354a4b['betId']['string']), App["uiManager"]["open"]({
          'type': __dependency_6["WebUiView"],
          'bundle': __dependency_7["EBundles"][__dependency_7["EBundles"]["slotFramework"]],
          'zIndex': __dependency_8["ViewZOrder"]['UI'],
          'name': 'WebView',
          'args': _0xbd8d2["toString"]()
        });
      } else Log['e']();
    });
  }, _0x254c52['showDetailContent'] = function () {
    "xin-star" == __dependency_9["default"]["getData"]()['theme'] && (this['detailContent']["active"] = !0x0);
  }, _0x254c52["willRecycle"] = function () {
    this["detailBtn"] && (this['detailBtn']['getComponent'](__dependency_1["Button"])['clickEvents'] = []);
  }, _0x254c52["updateData"] = function (_0x2e02d2, _0xbd0977) {
    var _0x30771d = _0x2e02d2["endTime"],
      _0x4921d1 = _0x2e02d2["hasFree"],
      _0x13aaba = _0x2e02d2["isFeature"],
      _0x39af55 = _0x2e02d2['id'],
      _0x57efe5 = _0x2e02d2["name"],
      _0x43af69 = _0x2e02d2["profit"],
      _0xb74c42 = (_0x2e02d2["roomId"], _0x2e02d2['totalStake']),
      _0x5e4a84 = __dependency_4["default"]['getData'](),
      _0x5d6e62 = _0x5e4a84["green"],
      _0x42a663 = _0x5e4a84['red'],
      _0x5cf9cc = _0x5e4a84['record'];
    this["featureIcon"]["active"] = _0x4921d1 || _0x13aaba, this['bg']["color"] = _0xbd0977 % 0x2 == 0x0 ? _0x5cf9cc[0x5] : _0x5cf9cc[0xa], this["time"]['string'] = this['formatTime'](_0x30771d), this["betId"]["string"] = String(_0x39af55), this["gameName"]['string'] = _0x57efe5, this["betNum"]['string'] = String(_0xb74c42), this["profitNum"]["string"] = String(_0x43af69), this["featureIcon"]["getComponent"](__dependency_1["Sprite"])["color"] = _0x13aaba ? _0x5d6e62["primary"] : _0x42a663['primary'], this["profitNum"]['color'] = _0x2e02d2["profit"] > 0x0 ? _0x42a663['primary'] : _0x5d6e62["primary"];
  }, _0x1835b3;
}(__dependency_2['TableViewCell']))['prototype'], 'bg', [_0x2a12af], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x200501 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5["prototype"], "content", [_0x4d6e88], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5e8765 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5["prototype"], "featureIcon", [_0x2bc236], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3bd2c6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5['prototype'], 'time', [_0xc9a43c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x35e88d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5["prototype"], "betId", [_0x3feaa6], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3c3b54 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5["prototype"], 'gameName', [_0x3ecb6b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3df788 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5['prototype'], 'betNum', [_0xe7abf2], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3b8fef = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5["prototype"], "profitNum", [_0xb257b8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3c5c68 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5['prototype'], 'detailContent', [_0x2f3535], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3a6082 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2daeb5["prototype"], "detailBtn", [_0x1de8ce], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3c1ec3 = _0x2daeb5)) || _0x3c1ec3));
__dependency_1["cclegacy"]["_RF"]['pop']();
