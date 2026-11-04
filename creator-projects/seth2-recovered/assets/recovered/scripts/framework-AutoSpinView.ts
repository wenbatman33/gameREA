// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-AutoSpinView.ts.js
// SHA256: a5bc361de69e8ce0fb1ca1ede88296809fa9f262e78f72c1ce1e2e300981048e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./main-WrapperData";
import * as __dependency_6 from "./framework-ImageButton";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-SlotFrameworkEvent";
import * as __dependency_9 from "./framework-PlatformModel";
import * as __dependency_10 from "./framework-LoadUtils";
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
(function (_0x5c828e) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0xd18f37) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x4d9a3c) {
  void 0;
})(__dependency_2);
(function (_0x52b2c9) {
  void 0;
})(__dependency_3);
(function (_0x6a475f) {
  void 0;
})(__dependency_4);
(function (_0x40f6a2) {
  void 0;
})(__dependency_5);
(function (_0x2bc904) {
  void 0;
})(__dependency_6);
(function (_0x5958e3) {
  void 0;
})(__dependency_7);
(function (_0x2b26a8) {
  void 0;
})(__dependency_8);
(function (_0x428734) {
  void 0;
})(__dependency_9);
(function (_0x455491) {
  void 0;
})(__dependency_10);
var _0x42caba, _0x382347, _0x4f04b6, _0x1323a6, _0x2ea96f, _0x2f4fc9, _0x2f32d2;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '8882e4o6XVAGLvxtZW6DE2O', "AutoSpinView", void 0x0);
var _0x597564 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish('default', (_0x42caba = _0x597564("AutoSpinView"), _0x382347 = (0, __dependency_4['inject'])("bbr", __dependency_1['Node']), _0x4f04b6 = (0, __dependency_4['inject'])('content/buttons', __dependency_1['Node']), _0x42caba((_0x2f4fc9 = (0, __dependency_0['applyDecoratedDescriptor'])((_0x2ea96f = function (_0x397575) {
  function _0x31c373() {
    for (var _0x3517cd, _0x182dab = arguments['length'], _0x562a51 = new Array(_0x182dab), _0x2b5dc9 = 0x0; _0x2b5dc9 < _0x182dab; _0x2b5dc9++) _0x562a51[_0x2b5dc9] = arguments[_0x2b5dc9];
    return _0x3517cd = Reflect.construct(_0x397575, [this]['concat'](_0x562a51).slice(1), new.target || _0x31c373) || this, (0, __dependency_0["initializerDefineProperty"])(_0x3517cd, 'bbr', _0x2f4fc9, (0, __dependency_0['assertThisInitialized'])(_0x3517cd)), (0, __dependency_0["initializerDefineProperty"])(_0x3517cd, 'buttons', _0x2f32d2, (0, __dependency_0['assertThisInitialized'])(_0x3517cd)), _0x3517cd['buttonMap'] = new Map(), _0x3517cd;
  }
  (0, __dependency_0["inheritsLoose"])(_0x31c373, _0x397575);
  var _0x1a28b5 = _0x31c373["prototype"];
  return _0x1a28b5['onLoad'] = function () {
    _0x397575["prototype"]["onLoad"]["call"](this), this["setEventTouch"]();
  }, _0x1a28b5["start"] = function () {
    this['init']();
  }, _0x1a28b5["onDestroy"] = function () {}, _0x31c373["getPrefabUrl"] = function () {
    return "prefabs/view/AutoSpinView";
  }, _0x1a28b5["init"] = function () {
    var _0x435c8f = this;
    __dependency_9['default']["getData"]()["player"]["settings"]['autoPlay']["numberOfPlays"]['forEach'](function (_0x37e547, _0x3fe047) {
      _0x435c8f["createCountBtn"](_0x37e547, _0x3fe047);
    });
  }, _0x1a28b5["createCountBtn"] = function (_0x372ea0, _0x2dc8fc) {
    var _0x4bc4b2 = this,
      _0x4cc083 = this["data"]["getData"]()["filePaths"]["commonSpDir"],
      _0x37fcf7 = App["cache"]["get"](__dependency_2['EBundles'][__dependency_2['EBundles']["slotFramework"]], 'prefabs/ui/button/ImageButton')['data'],
      _0x323795 = (0, __dependency_1["instantiate"])(_0x37fcf7),
      _0x47b66e = _0x323795["addComponent"](__dependency_6['ImageButton']),
      _0x6de605 = App["dataCenter"]['get'](__dependency_5["default"])['colorConfig'],
      _0x40f0b1 = _0x6de605['btn_bg_normal'],
      _0x28c001 = _0x6de605["btn_bg_hover"],
      _0x3acc14 = _0x6de605["btn_bg_pressed"],
      _0x477023 = _0x6de605["btn_bg_disable"],
      _0x50e8a9 = _0x6de605["btn_label_normal"],
      _0x139879 = {
        'bgSprite': __dependency_10["LoadUtils"]["getDirSp"](__dependency_2['EBundles'][__dependency_2['EBundles']["slotFramework"]], _0x4cc083, "bg_s"),
        'normal': _0x40f0b1,
        'pressed': _0x3acc14,
        'hover': _0x28c001,
        'disabled': _0x477023,
        'contentSize': {
          'width': 0x58,
          'height': 0x28
        }
      };
    if (_0x323795['name'] = '' + _0x372ea0, _0x323795["setParent"](this["buttons"]), _0x47b66e["init"](), _0x47b66e["setButton"](__dependency_1['Button']["Transition"]["COLOR"], _0x139879), this['buttonMap']['set'](_0x2dc8fc, _0x47b66e), _0x47b66e["addClickEvent"](function () {
      var _0x56e46f = _0x4bc4b2["data"]["checkBalanceAndAlert"]();
      _0x4bc4b2['close'](), _0x56e46f && (dispatch(__dependency_8["SlotFrameworkEvent"]["SELECT_AUTO_SPIN_COUNT"], {
        'data': _0x2dc8fc
      }), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }), -0x1 !== _0x372ea0) _0x47b66e["setLabel"]('' + _0x372ea0, {
      'active': !0x0,
      'fontSize': 0x14,
      'color': _0x50e8a9,
      'isBold': !0x0
    });else {
      var _0xbae578 = __dependency_10["LoadUtils"]['getDirSp'](__dependency_2['EBundles'][__dependency_2['EBundles']['slotFramework']], _0x4cc083, 'unlimited');
      _0x47b66e['setFont'](_0xbae578, {
        'position': (0, __dependency_1['v3'])(0x0, 0x0, 0x0)
      });
    }
  }, _0x1a28b5["onClose"] = function () {
    this['close']();
  }, _0x1a28b5['setEventTouch'] = function () {
    var _0x4b2732 = this;
    this['bbr']['on'](__dependency_1['NodeEventType']['TOUCH_END'], function () {
      _0x4b2732["onClose"]();
    });
  }, (0, __dependency_0["createClass"])(_0x31c373, [{
    'key': "data",
    'get': function () {
      return App['dataCenter']["get"](__dependency_7['default']);
    }
  }]), _0x31c373;
}(__dependency_3['default']))["prototype"], "bbr", [_0x382347], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2f32d2 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x2ea96f['prototype'], "buttons", [_0x4f04b6], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1323a6 = _0x2ea96f)) || _0x1323a6));
__dependency_1["cclegacy"]['_RF']["pop"]();
