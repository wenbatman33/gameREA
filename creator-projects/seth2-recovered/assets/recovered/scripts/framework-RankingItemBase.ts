// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RankingItemBase.ts.js
// SHA256: 753e267f9c51c1417dea12482bc1480d73adaf6b8e662d873054a91eed659457
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-TableViewCell";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-ColorModel";
import * as __dependency_5 from "./main-CmmUtils";
import * as __dependency_6 from "./main-Bundles";
import * as __dependency_7 from "./framework-LoadUtils";
import * as __dependency_8 from "./framework-SlotFrameworkData";
import * as __dependency_9 from "./framework-SlotFrameworkEvent";
import * as __dependency_10 from "./framework-NoTouchingView";
import * as __dependency_11 from "./main-Config";
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
(function (_0x58703b) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x57e4aa) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x18b72c) {
  void 0;
})(__dependency_2);
(function (_0x36052a) {
  void 0;
})(__dependency_3);
(function (_0x21436e) {
  void 0;
})(__dependency_4);
(function (_0x4e184e) {
  void 0;
})(__dependency_5);
(function (_0x38702f) {
  void 0;
})(__dependency_6);
(function (_0x26ef6b) {
  void 0;
})(__dependency_7);
(function (_0x275386) {
  void 0;
})(__dependency_8);
(function (_0x3c4b82) {
  void 0;
})(__dependency_9);
(function (_0xab1ff8) {
  void 0;
})(__dependency_10);
(function (_0x44f50f) {
  void 0;
})(__dependency_11);
var _0x560e94, _0x13d76b, _0x43763b, _0x1dacb2, _0x250ba3, _0x52e924, _0x43582b, _0x3780f1, _0x5d270d, _0x19a70d, _0x393c4c, _0x418fa0, _0x1fb0e2, _0x5e1daf, _0x32b8cd, _0x39ef45, _0x365c98, _0x40e7f1, _0xd2e0a6, _0x791786, _0x2b0c98, _0x364675;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "543f21JtyhLeas2dybnAY+3", "RankingItemBase", void 0x0);
var _0x537789 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("default", (_0x560e94 = (0, __dependency_3["inject"])('bg', __dependency_1["Sprite"]), _0x13d76b = (0, __dependency_3["inject"])("top3Bg", __dependency_1["Node"]), _0x43763b = (0, __dependency_3["inject"])('content', __dependency_1["Node"]), _0x1dacb2 = (0, __dependency_3["inject"])('line', __dependency_1["Node"]), _0x250ba3 = (0, __dependency_3["inject"])('content/rankMask/label', __dependency_1["Label"]), _0x52e924 = (0, __dependency_3["inject"])("content/rankMask/icon", __dependency_1["Sprite"]), _0x43582b = (0, __dependency_3["inject"])("content/winContent/label", __dependency_1["Label"]), _0x3780f1 = (0, __dependency_3["inject"])("content/betContent/label", __dependency_1["Label"]), _0x5d270d = (0, __dependency_3["inject"])("content/infoMask/label", __dependency_1["Label"]), _0x19a70d = (0, __dependency_3["inject"])('content/replayContent/replayBtn', __dependency_1["Node"]), _0x537789((_0x1fb0e2 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x418fa0 = function (_0x296179) {
  function _0x231983() {
    for (var _0x14251a, _0x1693f6 = arguments["length"], _0x5521dd = new Array(_0x1693f6), _0xe59187 = 0x0; _0xe59187 < _0x1693f6; _0xe59187++) _0x5521dd[_0xe59187] = arguments[_0xe59187];
    return _0x14251a = Reflect.construct(_0x296179, [this]["concat"](_0x5521dd).slice(1), new.target || _0x231983) || this, (0, __dependency_0["initializerDefineProperty"])(_0x14251a, 'bg', _0x1fb0e2, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, "top3Bg", _0x5e1daf, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, "content", _0x32b8cd, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, "line", _0x39ef45, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, "rankLabel", _0x365c98, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, 'rankIcon', _0x40e7f1, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, "winLabel", _0xd2e0a6, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, "betLabel", _0x791786, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, 'infoLabel', _0x2b0c98, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), (0, __dependency_0["initializerDefineProperty"])(_0x14251a, "replayBtn", _0x364675, (0, __dependency_0["assertThisInitialized"])(_0x14251a)), _0x14251a["gameStates"] = null, _0x14251a;
  }
  (0, __dependency_0["inheritsLoose"])(_0x231983, _0x296179);
  var _0x2139fe = _0x231983["prototype"];
  return _0x2139fe['init'] = function () {}, _0x2139fe['setAdapter'] = function (_0x5d7473) {}, _0x2139fe["initStyle"] = function (_0x3e25c0) {
    var _0x165bba = _0x3e25c0 <= 0x3;
    if (this["top3Bg"]['active'] = _0x165bba, this['bg']["node"]["active"] = !_0x165bba, _0x165bba) {
      var _0xc44d26 = __dependency_7["LoadUtils"]["getDirSp"](__dependency_6['EBundles'][__dependency_6['EBundles']['slotFramework']], this["slotData"]['getData']()["filePaths"]["rankingDir"], "icon-crown" + _0x3e25c0);
      this["rankIcon"]["spriteFrame"] = _0xc44d26;
    }
    this['rankIcon']['node']['active'] = _0x165bba, this["winLabel"]["isBold"] = _0x165bba, this["betLabel"]['isBold'] = _0x165bba, this["line"]['active'] = !_0x165bba;
  }, _0x2139fe["willRecycle"] = function () {
    this["replayBtn"]["getComponent"](__dependency_1["Button"])["clickEvents"] = [];
  }, _0x2139fe["updateData"] = function (_0x58f0a2, _0x404b86, _0x4386dd) {
    var _0x10b167 = _0x404b86["rank"],
      _0x306c2e = _0x404b86['win'],
      _0x53020f = _0x404b86["bet"],
      _0x5cae1a = _0x404b86["username"],
      _0x1c65bb = _0x404b86["roomNumber"],
      _0x2aed4f = _0x404b86["betId"],
      _0xef2ca8 = __dependency_4['default']['getData'](),
      _0x3c4fc9 = _0xef2ca8["green"],
      _0x357071 = _0xef2ca8["red"],
      _0xaa4362 = _0xef2ca8["record"],
      _0x13d6b1 = App["getLanguage"]("rankingPlayerId", [], __dependency_6['EBundles'][__dependency_6['EBundles']["slotFramework"]]),
      _0x575f90 = App["getLanguage"]("rankingMachine", [], __dependency_6['EBundles'][__dependency_6['EBundles']["slotFramework"]]);
    this['initStyle'](_0x10b167), this['bg']['color'] = _0x4386dd % 0x2 == 0x0 ? _0xaa4362[0x5] : _0xaa4362[0xa], this['rankLabel']["string"] = '' + _0x10b167, this["winLabel"]["string"] = '' + _0x306c2e, this["betLabel"]["string"] = '' + _0x53020f, this['infoLabel']["string"] = _0x13d6b1 + '：' + _0x5cae1a + '\x0a' + _0x575f90 + '：' + _0x1c65bb, __dependency_5['CmmUtils']["addBtnClickEvent"](this["replayBtn"], function () {
      var _0x378037 = {
        'text': App["getLanguage"]("tipMsgWatchReplay", [], __dependency_6['EBundles'][__dependency_6['EBundles']["slotFramework"]]),
        'confirmCb': function () {
          App["uiManager"]["open"]({
            'type': __dependency_10["default"],
            'bundle': __dependency_6['EBundles'][__dependency_6['EBundles']['slotFramework']],
            'zIndex': __dependency_11["ViewZOrder"]["UILoading"],
            'name': '禁止觸碰'
          }), dispatch(__dependency_9['SlotFrameworkEvent']['SEND_GET_RANKING_REPLAY_REQUEST'], {
            'rankKey': _0x58f0a2,
            'betId': _0x2aed4f
          });
        },
        'bbrCb': function () {},
        'cancelCb': function () {}
      };
      App['gameAlert']["show"](_0x378037);
    }), this["winLabel"]["color"] = _0x404b86["win"] > 0x0 ? _0x357071['primary'] : _0x3c4fc9['primary'];
  }, (0, __dependency_0['createClass'])(_0x231983, [{
    'key': "slotData",
    'get': function () {
      return App["dataCenter"]['get'](__dependency_8["default"]);
    }
  }]), _0x231983;
}(__dependency_2['TableViewCell']))['prototype'], 'bg', [_0x560e94], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5e1daf = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0['prototype'], "top3Bg", [_0x13d76b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x32b8cd = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0["prototype"], "content", [_0x43763b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x39ef45 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0['prototype'], 'line', [_0x1dacb2], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x365c98 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0["prototype"], "rankLabel", [_0x250ba3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x40e7f1 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0["prototype"], "rankIcon", [_0x52e924], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xd2e0a6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0['prototype'], "winLabel", [_0x43582b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x791786 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0["prototype"], "betLabel", [_0x3780f1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2b0c98 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0["prototype"], "infoLabel", [_0x5d270d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x364675 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x418fa0["prototype"], "replayBtn", [_0x19a70d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x393c4c = _0x418fa0)) || _0x393c4c));
__dependency_1["cclegacy"]["_RF"]["pop"]();
