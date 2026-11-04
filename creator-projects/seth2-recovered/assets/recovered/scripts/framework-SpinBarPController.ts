// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SpinBarPController.ts.js
// SHA256: 8a3e2d8e1eed6cb9f0e70e8891785eff91eacc5359b2d902c689fcccdf9b32f8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-CmmUtils";
import * as __dependency_5 from "./main-EventComponent";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./main-WrapperData";
import * as __dependency_8 from "./framework-SpineButton";
import * as __dependency_9 from "./framework-AutoPlayModel";
import * as __dependency_10 from "./framework-SlotFrameworkData";
import * as __dependency_11 from "./framework-StakeModel";
import * as __dependency_12 from "./framework-SlotFrameworkEvent";
import * as __dependency_13 from "./framework-PlatformModel";
import * as __dependency_14 from "./framework-type2";
import * as __dependency_15 from "./framework-CmmSlotUtils";
import * as __dependency_16 from "./framework-ObjectUtils";
import * as __dependency_17 from "./framework-AutoSpinView";
import * as __dependency_18 from "./framework-GameRulesView";
import * as __dependency_19 from "./framework-GameRulesViewP";
import * as __dependency_20 from "./framework-RankingViewL";
import * as __dependency_21 from "./framework-RankingViewP";
import * as __dependency_22 from "./framework-RecordViewL";
import * as __dependency_23 from "./framework-RecordViewP";
import * as __dependency_24 from "./framework-SettingView";
import * as __dependency_25 from "./framework-SlotTableViewP";
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
(function (_0x5df005) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x48d476) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x428f02) {
  void 0;
})(__dependency_2);
(function (_0x283a05) {
  void 0;
})(__dependency_3);
(function (_0x1438f4) {
  void 0;
})(__dependency_4);
(function (_0x399781) {
  void 0;
})(__dependency_5);
(function (_0x31da68) {
  void 0;
})(__dependency_6);
(function (_0x2788bc) {
  void 0;
})(__dependency_7);
(function (_0x4ca6eb) {
  void 0;
})(__dependency_8);
(function (_0x52b310) {
  void 0;
})(__dependency_9);
(function (_0x341adf) {
  void 0;
})(__dependency_10);
(function (_0x4d5085) {
  void 0;
})(__dependency_11);
(function (_0x5a2f2c) {
  void 0;
})(__dependency_12);
(function (_0x2dbc3e) {
  void 0;
})(__dependency_13);
(function (_0x13ef33) {
  void 0;
})(__dependency_14);
(function (_0xdb84aa) {
  void 0;
})(__dependency_15);
(function (_0x2e79e0) {
  void 0;
})(__dependency_16);
(function (_0x382164) {
  void 0;
})(__dependency_17);
(function (_0x374aae) {
  void 0;
})(__dependency_18);
(function (_0x3caa45) {
  void 0;
})(__dependency_19);
(function (_0x21cc09) {
  void 0;
})(__dependency_20);
(function (_0xfb3c3) {
  void 0;
})(__dependency_21);
(function (_0x41b800) {
  void 0;
})(__dependency_22);
(function (_0x4691e4) {
  void 0;
})(__dependency_23);
(function (_0x21920c) {
  void 0;
})(__dependency_24);
(function (_0x51a85b) {
  void 0;
})(__dependency_25);
var _0x176e05, _0x212e2b, _0x17b57e, _0x11dddd, _0x5a9770, _0x49e133, _0x4defed, _0x37d27b, _0x40df3c, _0x19f322, _0x37c9e5, _0x588f89, _0x10bb4d, _0x29b20f, _0x5087de, _0x17ae6c, _0xf9ab6e, _0x178bad, _0x33e362, _0x31f366, _0x1846a3, _0x1c71a3, _0x13bf20, _0x59abe0, _0x15e591, _0xc320be, _0x67ff93, _0x45e102, _0x178a5a, _0x352395, _0x9acc9b, _0x183a17, _0x295336, _0x5f0a50, _0x5c65a9, _0x3549c6, _0x7587ae, _0x8eb20e, _0x54b5c3;
__dependency_1["cclegacy"]['_RF']["push"]({}, "3fcf5MW9qZPwIwO+yx1gNbO", "SpinBarPController", void 0x0);
__dependency_1["_decorator"]["ccclass"], __dependency_1["_decorator"]["property"], __publish("default", (_0x176e05 = (0, __dependency_6["inject"])("spinContent", __dependency_1["Node"]), _0x212e2b = (0, __dependency_6["inject"])('spinContent/bg', __dependency_1["Node"]), _0x17b57e = (0, __dependency_6["inject"])("spinContent/menuBtn", __dependency_1["Node"]), _0x11dddd = (0, __dependency_6["inject"])("spinContent/turboToggle", __dependency_1["Node"]), _0x5a9770 = (0, __dependency_6["inject"])("spinContent/SpinButton", __dependency_1["Node"]), _0x49e133 = (0, __dependency_6["inject"])("spinContent/SpineButton", __dependency_1["Node"]), _0x4defed = (0, __dependency_6["inject"])('spinContent/autoSpinGroup/startAutoBtn', __dependency_1["Node"]), _0x37d27b = (0, __dependency_6["inject"])("spinContent/autoSpinGroup/stopAutoBtn", __dependency_1["Node"]), _0x40df3c = (0, __dependency_6["inject"])("spinContent/autoSpinGroup", __dependency_1["Node"]), _0x19f322 = (0, __dependency_6["inject"])('spinContent/slotTableBtn', __dependency_1["Node"]), _0x37c9e5 = (0, __dependency_6["inject"])("spinContent/plusBtn", __dependency_1["Node"]), _0x588f89 = (0, __dependency_6["inject"])("spinContent/minusBtn", __dependency_1["Node"]), _0x10bb4d = (0, __dependency_6["inject"])('menuContent', __dependency_1["Node"]), _0x29b20f = (0, __dependency_6["inject"])("menuContent/btnBack", __dependency_1["Node"]), _0x5087de = (0, __dependency_6["inject"])("menuContent/layout/btnInfo", __dependency_1["Node"]), _0x17ae6c = (0, __dependency_6["inject"])('menuContent/layout/btnRecord', __dependency_1["Node"]), _0xf9ab6e = (0, __dependency_6["inject"])("menuContent/layout/rankingBtn", __dependency_1["Node"]), _0x178bad = (0, __dependency_6["inject"])("menuContent/layout/btnSetting", __dependency_1["Node"]), _0x33e362 = (0, __dependency_6["inject"])("menuContent/layout/btnExit", __dependency_1["Node"]), _0x1846a3 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x31f366 = function (_0x5b85c9) {
  function _0x217201() {
    for (var _0x3570b2, _0x138a89 = arguments['length'], _0x7f4fa = new Array(_0x138a89), _0x3e40f9 = 0x0; _0x3e40f9 < _0x138a89; _0x3e40f9++) _0x7f4fa[_0x3e40f9] = arguments[_0x3e40f9];
    return _0x3570b2 = Reflect.construct(_0x5b85c9, [this]["concat"](_0x7f4fa).slice(1), new.target || _0x217201) || this, (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "spinContent", _0x1846a3, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, 'bg', _0x1c71a3, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, 'menuBtn', _0x13bf20, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, 'turboToggle', _0x59abe0, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "spinButton", _0x15e591, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "spineButton", _0xc320be, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "startAutoBtn", _0x67ff93, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "stopAutoBtn", _0x45e102, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "autoSpinGroup", _0x178a5a, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "slotTableBtn", _0x352395, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "plusBtn", _0x9acc9b, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "minusBtn", _0x183a17, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, 'menuContent', _0x295336, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "btnBack", _0x5f0a50, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "ruleBtn", _0x5c65a9, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "recordBtn", _0x3549c6, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "rankingBtn", _0x7587ae, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "settingBtn", _0x8eb20e, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), (0, __dependency_0["initializerDefineProperty"])(_0x3570b2, "exitBtn", _0x54b5c3, (0, __dependency_0["assertThisInitialized"])(_0x3570b2)), _0x3570b2["quickStopBtn"] = null, _0x3570b2['tmpSpinFunc'] = null, _0x3570b2["tmpStopSpinFunc"] = null, _0x3570b2["spinStatus"] = __dependency_14["ESpinStatus"]['IDLE'], _0x3570b2["isOpenMenu"] = !0x1, _0x3570b2['ruleAssets'] = null, _0x3570b2["frameCounter"] = 0x0, _0x3570b2["LONG_PRESS_THRESHOLD"] = 0x1f4, _0x3570b2["keyStatesMap"] = new Map(), _0x3570b2["debounceFunction"] = null, _0x3570b2['menuBackBtnCoolFlag'] = !0x1, _0x3570b2;
  }
  (0, __dependency_0["inheritsLoose"])(_0x217201, _0x5b85c9);
  var _0x2268e8 = _0x217201['prototype'];
  return _0x2268e8["onLoad"] = function () {
    _0x5b85c9['prototype']['onLoad']['call'](this);
  }, _0x2268e8["start"] = function () {
    this["init"](), this["setEventTouch"]();
  }, _0x2268e8['update'] = function (_0x4fe5e3) {
    if (this["frameCounter"]++, this["frameCounter"] >= 0x7) {
      if (this["keyStatesMap"]['get'](__dependency_1["KeyCode"]["ARROW_LEFT"])["isLongPress"]) {
        this['frameCounter'] = 0x0, Log['d']('++'), __dependency_11["default"]["stakeMapIndex"] -= 0x1, __dependency_11["default"]['stakeMapIndex'] <= 0x0 && (__dependency_11["default"]["stakeMapIndex"] = 0x0);
        var _0x913af7 = __dependency_11["default"]["totalStakeMap"]['get'](__dependency_11["default"]['stakeMapIndex']);
        __dependency_11["default"]["updateStake"](_0x913af7), dispatch(__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE"], {
          'data': _0x913af7["totalStake"]
        }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
      }
      if (this["keyStatesMap"]["get"](__dependency_1["KeyCode"]['ARROW_RIGHT'])["isLongPress"]) {
        this["frameCounter"] = 0x0, Log['d']('--'), __dependency_11["default"]["stakeMapIndex"] += 0x1, __dependency_11["default"]["stakeMapIndex"] >= __dependency_11["default"]["totalStakeMap"]["size"] && (__dependency_11["default"]["stakeMapIndex"] = __dependency_11["default"]["totalStakeMap"]["size"] - 0x1);
        var _0x2e6e68 = __dependency_11["default"]['totalStakeMap']['get'](__dependency_11["default"]["stakeMapIndex"]);
        __dependency_11["default"]["updateStake"](_0x2e6e68), dispatch(__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE"], {
          'data': _0x2e6e68["totalStake"]
        }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
      }
    }
  }, _0x2268e8["init"] = function () {
    this['initKeyState'](__dependency_1["KeyCode"]["ARROW_LEFT"]), this["initKeyState"](__dependency_1["KeyCode"]["ARROW_RIGHT"]), this['addEventInput'](), this["initAutoBtn"](), this["initSlotTableBtn"](), this['initRankListBtn'](), this["setAllInteractable"](!0x0), this["spinContent"]["active"] = !0x0, this["menuContent"]["active"] = !0x1, this["closeMenuNode"](this["menuContent"]);
  }, _0x2268e8['setEventTouch'] = function () {
    var _0x48014b = this;
    __dependency_4["CmmUtils"]["addBtnClickEvent"](this["menuBtn"], function () {
      _0x48014b['menuBackBtnCoolFlag'] || (_0x48014b['showSubMenu'](), dispatch(__dependency_12['SlotFrameworkEvent']['PLAY_CLICK_BTM']), _0x48014b["menuBackBtnCool"]());
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this['btnBack'], function () {
      _0x48014b["menuBackBtnCoolFlag"] || (_0x48014b["closeSubMenu"](), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]), _0x48014b["menuBackBtnCool"]());
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["plusBtn"], function () {
      _0x48014b['handleClickOncePlus']();
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this['minusBtn'], function () {
      _0x48014b['handleClickOnceMinus']();
    }), this["onI"](__dependency_1["Input"]['EventType']['KEY_DOWN'], function (_0x3a26a7) {
      var _0x49e312 = _0x3a26a7["keyCode"];
      if (_0x49e312 === __dependency_1["KeyCode"]["ARROW_LEFT"] || _0x49e312 === __dependency_1["KeyCode"]["ARROW_RIGHT"]) {
        var _0x1765a0 = _0x48014b["keyStatesMap"]["get"](__dependency_1["KeyCode"]['ARROW_RIGHT'])['isPressed'],
          _0x3f168c = _0x48014b["keyStatesMap"]["get"](__dependency_1["KeyCode"]["ARROW_LEFT"])["isPressed"];
        if (_0x1765a0 || _0x3f168c) return;
        if (_0x48014b["spinStatus"] === __dependency_14["ESpinStatus"]["SPINING"] || !App["uiManager"]["IsOnlyGameViewOpen"]("GameView") || null !== App['gameAlert']["currentPanel"] || _0x48014b["isOpenMenu"]) return;
        _0x48014b["setAllInteractable"](!0x1), _0x48014b["initKeyState"](_0x49e312);
        for (var _0x518ff2, _0x38aa49 = _0x48014b["keyStatesMap"]["get"](_0x49e312), _0xa79412 = (0, __dependency_0['createForOfIteratorHelperLoose'])(_0x48014b["keyStatesMap"]["values"]()); !(_0x518ff2 = _0xa79412())["done"];) {
          if (_0x518ff2["value"]["isPressed"]) return;
        }
        _0x38aa49["isPressed"] || (_0x38aa49["isPressed"] = !0x0, _0x38aa49['timer'] = setTimeout(function () {
          _0x38aa49["isLongPress"] = !0x0;
        }, _0x48014b["LONG_PRESS_THRESHOLD"]));
      }
    }), this["onI"](__dependency_1["Input"]['EventType']["KEY_UP"], function (_0x50ad83) {
      var _0xdc5299 = _0x50ad83["keyCode"];
      if (_0xdc5299 === __dependency_1["KeyCode"]["ARROW_LEFT"] || _0xdc5299 === __dependency_1["KeyCode"]["ARROW_RIGHT"]) {
        _0x48014b["initKeyState"](_0xdc5299);
        var _0x50eaa0 = _0x48014b["keyStatesMap"]["get"](_0xdc5299);
        _0x50eaa0["isPressed"] && (_0x50eaa0["isLongPress"] ? (_0x50eaa0["isLongPress"] = !0x1, _0x48014b["sendSetting"](), _0x48014b['setAllInteractable'](!0x0), _0x48014b['keyStatesMap']["forEach"](function (_0x41838f, _0x5721a5) {
          return _0x41838f["isPressed"] = !0x1;
        })) : (clearTimeout(_0x50eaa0["timer"]), _0xdc5299 === __dependency_1["KeyCode"]["ARROW_LEFT"] ? _0x48014b["handleClickOnceMinus"]() : _0xdc5299 === __dependency_1["KeyCode"]["ARROW_RIGHT"] && _0x48014b["handleClickOncePlus"]()), _0x50eaa0["timer"] = null);
      }
    }), this["startAutoBtn"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      _0x48014b["startAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] && (App["uiManager"]["open"]({
        'type': __dependency_17["default"],
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "自動投注"
      }), dispatch(__dependency_12['SlotFrameworkEvent']['PLAY_CLICK_BTM']));
    }), this["stopAutoBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x48014b["stopAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] && (__dependency_9["default"]["active"] = !0x1, _0x48014b["showStartAutoActive"](!0x0), dispatch(__dependency_12['SlotFrameworkEvent']['STOP_AUTO_SPIN']), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]));
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["ruleBtn"], function () {
      var _0x250df4 = __dependency_15["CmmSlotUtils"]["getOrientationTarget"](__dependency_18["default"], __dependency_19['default']);
      App['uiManager']["open"]({
        'type': _0x250df4,
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "遊戲說明",
        'args': _0x48014b['ruleAssets']
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this['recordBtn'], function () {
      var _0x38814e = __dependency_15["CmmSlotUtils"]["getOrientationTarget"](__dependency_22['default'], __dependency_23["default"]);
      App['uiManager']["open"]({
        'type': _0x38814e,
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "押注紀錄"
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["rankingBtn"], function () {
      var _0x2d7b81 = __dependency_15["CmmSlotUtils"]["getOrientationTarget"](__dependency_20["default"], __dependency_21['default']);
      App["uiManager"]["open"]({
        'type': _0x2d7b81,
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "排行榜"
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]['addBtnClickEvent'](this["settingBtn"], function () {
      App["uiManager"]['open']({
        'type': __dependency_24['default'],
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "設定頁"
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["exitBtn"], function () {
      dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]), dispatch(__dependency_12['SlotFrameworkEvent']['SHOW_EXIT_ALERT']);
    });
  }, _0x2268e8['initKeyState'] = function (_0x8b5332) {
    this['keyStatesMap']['has'](_0x8b5332) || this["keyStatesMap"]["set"](_0x8b5332, {
      'isPressed': !0x1,
      'isLongPress': !0x1,
      'timer': null
    });
  }, _0x2268e8['getStakeKeyIndex'] = function () {
    for (var _0x2199fd, _0x4a4b99 = __dependency_11["default"]["getData"]()["totalStakeMap"], _0x409fd3 = __dependency_11["default"]['getData']()['stakeIndex'], _0x12d7c9 = __dependency_11["default"]['getData']()["ratioIndex"], _0x59b2be = (0, __dependency_0['createForOfIteratorHelperLoose'])(_0x4a4b99); !(_0x2199fd = _0x59b2be())["done"];) {
      var _0x4c638c = _0x2199fd["value"],
        _0x2d2a41 = _0x4c638c[0x0],
        _0x4d1d56 = _0x4c638c[0x1];
      if (_0x4d1d56["stakeIndex"] === _0x409fd3 && _0x4d1d56['ratioIndex'] === _0x12d7c9) return _0x2d2a41;
    }
    return -0x1;
  }, _0x2268e8['handleClickOnceMinus'] = function () {
    var _0x141628 = this;
    __dependency_11["default"]['stakeMapIndex'] = this['getStakeKeyIndex'](), __dependency_11["default"]["stakeMapIndex"] -= 0x1, __dependency_11["default"]["stakeMapIndex"] <= 0x0 && (__dependency_11["default"]['stakeMapIndex'] = 0x0);
    var _0x3825e1 = __dependency_11["default"]["totalStakeMap"]["get"](__dependency_11["default"]["stakeMapIndex"]);
    if (!_0x3825e1) return Log['e']('stakeVO\x20is\x20undefined');
    __dependency_11["default"]["updateStake"](_0x3825e1), dispatch(__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE"], {
      'data': _0x3825e1["totalStake"]
    }), this["debounceFunction"] || (this["debounceFunction"] = __dependency_4["CmmUtils"]['debounce'](function () {
      _0x141628['sendSetting'](), _0x141628["setAllInteractable"](!0x0), _0x141628["keyStatesMap"]['forEach'](function (_0x107041, _0x5c5927) {
        return _0x107041["isPressed"] = !0x1;
      });
    }, 0x15e)), this['debounceFunction'](), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
  }, _0x2268e8["handleClickOncePlus"] = function () {
    var _0x3ec282 = this;
    __dependency_11["default"]["stakeMapIndex"] = this['getStakeKeyIndex'](), __dependency_11["default"]["stakeMapIndex"] += 0x1, __dependency_11["default"]["stakeMapIndex"] >= __dependency_11["default"]["totalStakeMap"]["size"] && (__dependency_11["default"]["stakeMapIndex"] = __dependency_11["default"]["totalStakeMap"]['size'] - 0x1);
    var _0x18bccf = __dependency_11["default"]['totalStakeMap']['get'](__dependency_11["default"]["stakeMapIndex"]);
    if (!_0x18bccf) return Log['e']("stakeVO is undefined");
    __dependency_11["default"]["updateStake"](_0x18bccf), dispatch(__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE"], {
      'data': _0x18bccf['totalStake']
    }), this["debounceFunction"] || (this["debounceFunction"] = __dependency_4["CmmUtils"]['debounce'](function () {
      _0x3ec282['sendSetting'](), _0x3ec282["setAllInteractable"](!0x0), _0x3ec282["keyStatesMap"]["forEach"](function (_0x396240, _0x4ec0b1) {
        return _0x396240["isPressed"] = !0x1;
      });
    }, 0x15e)), this["debounceFunction"](), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
  }, _0x2268e8["setRuleAssets"] = function (_0x4c6809) {
    this['ruleAssets'] = _0x4c6809;
  }, _0x2268e8['showSubMenu'] = function () {
    this["openMenuNode"](this["menuContent"]), this["closeMenuNode"](this["spinContent"]);
  }, _0x2268e8["closeSubMenu"] = function () {
    this["openMenuNode"](this["spinContent"]), this["closeMenuNode"](this["menuContent"]);
  }, _0x2268e8["openMenuNode"] = function (_0x14662b) {
    _0x14662b["active"] = !0x0, _0x14662b["setPosition"](null, -0x203, null), _0x14662b["getComponent"](__dependency_1["UIOpacity"])["opacity"] = 0x0, (0, __dependency_1["tween"])(_0x14662b["getComponent"](__dependency_1["UIOpacity"]))['to'](0.5, {
      'opacity': 0xff
    }, {
      'easing': "fade"
    })["start"](), (0, __dependency_1["tween"])(_0x14662b)['to'](0.3, {
      'position': /* Captured Creator 3.7 Vec3(null,y,z) uses numeric x=0; select that same overload in 3.8. */new __dependency_1['Vec3'](0, -0x203, null)
    })["start"]();
  }, _0x2268e8["closeMenuNode"] = function (_0xd1ebcd) {
    (0, __dependency_1["tween"])(_0xd1ebcd)['to'](0.1, {
      'position': /* Captured Creator 3.7 Vec3(null,y,z) uses numeric x=0; select that same overload in 3.8. */new __dependency_1['Vec3'](0, -0x226, null)
    }, {
      'easing': "fade"
    })["start"](), (0, __dependency_1["tween"])(_0xd1ebcd['getComponent'](__dependency_1["UIOpacity"]))['to'](0.1, {
      'opacity': 0x0
    })['call'](function () {
      _0xd1ebcd['active'] = !0x1, _0xd1ebcd['setPosition'](null, -0x3e8, null);
    })["start"]();
  }, _0x2268e8["sendSetting"] = function () {
    var _0x2f9445 = __dependency_11["default"]["getData"](),
      _0x32fde3 = {
        'type': "game",
        'data': {
          'stakeIndex': _0x2f9445["stakeIndex"],
          'ratioIndex': _0x2f9445["ratioIndex"]
        }
      };
    dispatch(__dependency_12['SlotFrameworkEvent']['SEND_SETTING_REQUEST'], _0x32fde3);
  }, _0x2268e8["showStartAutoActive"] = function (_0x338b96) {
    this["startAutoBtn"]["active"] = _0x338b96, this['stopAutoBtn']["active"] = !_0x338b96;
  }, _0x2268e8['initAutoBtn'] = function () {
    this["showStartAutoActive"](!0x0);
  }, _0x2268e8["setQuickStopData"] = function (_0x2844a0, _0x4f0982, _0x13c6e6, _0x8a6a1) {
    this["quickStopBtn"]["setData"](_0x2844a0, _0x4f0982, _0x13c6e6, _0x8a6a1);
  }, _0x2268e8["initSlotTableBtn"] = function () {
    var _0x1c87b0,
      _0x578d88 = Object['prototype']["hasOwnProperty"]["call"](__dependency_13["default"]["getData"](), "table");
    (this["slotTableBtn"]["active"] = _0x578d88, _0x578d88) && (this['slotTableBtn']['getComponentInChildren'](__dependency_1["Label"])["string"] = null == (_0x1c87b0 = __dependency_13["default"]["getData"]()["table"]["number"]) ? void 0x0 : _0x1c87b0['toString']()["padStart"](0x3, '0'), __dependency_4["CmmUtils"]['addBtnClickEvent'](this['slotTableBtn'], function () {
      App["uiManager"]['open']({
        'type': __dependency_25['default'],
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "機台選擇"
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }));
  }, _0x2268e8["setMenuBtnInteractable"] = function (_0x2a12aa) {
    this["ruleBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x2a12aa, this["recordBtn"]['getComponent'](__dependency_1["Button"])["interactable"] = _0x2a12aa, this["rankingBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x2a12aa, this['settingBtn']["getComponent"](__dependency_1["Button"])["interactable"] = _0x2a12aa, this["exitBtn"]['getComponent'](__dependency_1["Button"])['interactable'] = _0x2a12aa;
  }, _0x2268e8["menuBackBtnCool"] = function () {
    var _0x4bf03d = this;
    this["menuBackBtnCoolFlag"] = !0x0, this["scheduleOnce"](function () {
      _0x4bf03d['menuBackBtnCoolFlag'] = !0x1;
    }, 0.5);
  }, _0x2268e8["show"] = function () {
    this["node"]['active'] = !0x0, this["node"]["setPosition"](null, 0x0, null);
  }, _0x2268e8["hide"] = function () {
    this['node']["setPosition"](null, -0x1f4, null);
  }, _0x2268e8["setTableNumber"] = function (_0x23bf57) {
    this["slotTableBtn"]["getComponentInChildren"](__dependency_1["Label"])["string"] = _0x23bf57["toString"]()["padStart"](0x3, '0');
  }, _0x2268e8["addSpinEventTouch"] = function (_0x39358b, _0x5ec699) {
    this["tmpSpinFunc"] = _0x5ec699;
  }, _0x2268e8["addQuickStopEventTouch"] = function (_0x55de30) {
    this['tmpStopSpinFunc'] = _0x55de30;
  }, _0x2268e8["addEventInput"] = function () {
    var _0x501f38 = this,
      _0x26eb06 = this["spineButton"]["getComponent"](__dependency_8["SpineButton"]);
    this["onI"](__dependency_1["Input"]["EventType"]["KEY_DOWN"], function (_0x17699c) {
      if (_0x17699c["keyCode"] === __dependency_1["KeyCode"]['SPACE']) {
        var _0x103a64 = _0x26eb06["button"]["interactable"],
          _0x28e5f4 = App["uiManager"]["IsOnlyGameViewOpen"]('GameView'),
          _0x2a9a67 = null === App['gameAlert']["currentPanel"],
          _0x229f03 = !_0x501f38["isOpenMenu"],
          _0x1bc0f8 = _0x501f38['slotData']["spinStatus"] === __dependency_14["ESpinStatus"]["SPINING"];
        _0x103a64 && _0x28e5f4 && _0x2a9a67 && _0x229f03 ? _0x501f38["tmpSpinFunc"] && _0x501f38['tmpSpinFunc']() : _0x1bc0f8 && _0x501f38["tmpStopSpinFunc"] && _0x501f38["tmpStopSpinFunc"]();
      }
    }), _0x26eb06["button"]["node"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      var _0x38c138 = _0x501f38["keyStatesMap"]["get"](__dependency_1["KeyCode"]["ARROW_RIGHT"])["isPressed"],
        _0x29ea0e = _0x501f38["keyStatesMap"]["get"](__dependency_1["KeyCode"]["ARROW_LEFT"])["isPressed"];
      _0x38c138 || _0x29ea0e || (_0x501f38['spinStatus'] === __dependency_14["ESpinStatus"]['IDLE'] && App["uiManager"]['IsOnlyGameViewOpen']("GameView") && null === App["gameAlert"]["currentPanel"] && 0x0 == _0x501f38["isOpenMenu"] ? _0x501f38['tmpSpinFunc'] && _0x501f38['tmpSpinFunc']() : _0x501f38['slotData']['spinStatus'] === __dependency_14["ESpinStatus"]["SPINING"] && _0x501f38["tmpStopSpinFunc"] && _0x501f38["tmpStopSpinFunc"]());
    });
  }, _0x2268e8["setSpinBtnData"] = function (_0x68513c, _0xb814c1, _0x1bcaec, _0x90948) {
    var _0x428ab1 = this['spineButton']['getComponent'](__dependency_8["SpineButton"]);
    _0x428ab1['init'](), _0x428ab1["setData"](_0x68513c, _0x1bcaec, _0x90948), this["quickStopBtn"] && this["setQuickStopData"](_0x68513c, _0xb814c1, _0x1bcaec, _0x90948);
  }, _0x2268e8["setAllInteractable"] = function (_0xdc591d) {
    var _0x333afb;
    this["turboToggle"]['getComponent'](__dependency_1['Toggle'])["interactable"] = _0xdc591d, null == (_0x333afb = this["spineButton"]['getComponent'](__dependency_8["SpineButton"])) || _0x333afb["setInteractable"](_0xdc591d), this["startAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0xdc591d, this["stopAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0xdc591d, this["menuBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0xdc591d, this["plusBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0xdc591d, this["minusBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0xdc591d, __dependency_9["default"]["active"] && (this["stopAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = !0x0), this["setSlotTableInteractable"](_0xdc591d), dispatch(__dependency_12['SlotFrameworkEvent']["SET_BET_AMOUNT_INTERACTABLE"], {
      'data': _0xdc591d
    });
  }, _0x2268e8["setSlotTableInteractable"] = function (_0x2e0be8) {
    this["slotTableBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x2e0be8;
  }, _0x2268e8["spinBarActive"] = function (_0x5c1095) {
    this["node"]["active"] = _0x5c1095;
  }, _0x2268e8['addEvents'] = function () {
    var _0x1bd4f7 = this;
    _0x5b85c9["prototype"]["addEvents"]["call"](this), this['on'](__dependency_12['SlotFrameworkEvent']["SHOW_AUTO_SPIN"], function (_0x4481e0) {
      var _0x129412 = _0x4481e0["data"];
      _0x1bd4f7["showStartAutoActive"](_0x129412);
    }), this['on'](__dependency_12['SlotFrameworkEvent']["UPDATE_SPIN_STATUS"], function (_0x232f5d) {
      var _0x5cb992 = _0x232f5d["data"];
      _0x1bd4f7["spinStatus"] = _0x5cb992;
      var _0x10b9cd = __dependency_14["ESpinStatus"]["SPINING"] === _0x5cb992;
      _0x1bd4f7['setAllInteractable'](!_0x10b9cd), _0x1bd4f7["setMenuBtnInteractable"](!_0x10b9cd);
    }), this['on'](__dependency_12['SlotFrameworkEvent']["SET_AUTO_SPIN_COUNT"], function (_0x286885) {
      var _0x7aca9f = _0x286885["data"];
      _0x7aca9f >= 0x0 && _0x1bd4f7['showStartAutoActive'](!0x1), 0x0 === _0x7aca9f && _0x1bd4f7['showStartAutoActive'](!0x0), -0x1 == _0x7aca9f && _0x1bd4f7["showStartAutoActive"](!0x1);
    }), this['on'](__dependency_12['SlotFrameworkEvent']['VIEW_SHOW_MENU'], function () {
      _0x1bd4f7['isOpenMenu'] = !0x0;
    }), this['on'](__dependency_12['SlotFrameworkEvent']["VIEW_HIDE_MENU"], function () {
      _0x1bd4f7["isOpenMenu"] = !0x1;
    }), this['on'](__dependency_12['SlotFrameworkEvent']["SHOW_SPIN_BAR"], function () {
      _0x1bd4f7["show"]();
    }), this['on'](__dependency_12['SlotFrameworkEvent']["HIDE_SPIN_BAR"], function () {
      _0x1bd4f7["hide"]();
    });
  }, _0x2268e8["initTurbo"] = function (_0x590dff) {
    var _0x4b8c79 = this['turboToggle']["getComponentsInChildren"](__dependency_1["Sprite"]),
      _0x1d8110 = App["dataCenter"]["get"](__dependency_7['default'])["colorConfig"]["main"];
    _0x4b8c79['forEach'](function (_0x205acb) {
      _0x205acb["color"] = new __dependency_1['Color'](_0x1d8110);
    }), this["turboToggle"]["getComponent"](__dependency_1['Toggle'])["isChecked"] = _0x590dff, this["turboToggle"]["off"](__dependency_1["NodeEventType"]["TOUCH_END"]);
  }, _0x2268e8["addTurboEventTouch"] = function (_0x27957d) {
    var _0x3ac77c = this;
    this['turboToggle']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_4["CmmUtils"]["throttle"](function () {
      if (_0x3ac77c["turboToggle"]["getComponent"](__dependency_1['Toggle'])["interactable"]) {
        var _0x366bfe = __dependency_16["ObjectUtils"]["clone"](_0x27957d["isTurbo"]);
        _0x27957d["setIsTurbo"](!_0x366bfe), _0x3ac77c["scheduleOnce"](function () {
          _0x3ac77c["turboToggle"]["getComponent"](__dependency_1['Toggle'])['isChecked'] = _0x27957d["isTurbo"], dispatch(__dependency_12['SlotFrameworkEvent']['PLAY_CLICK_BTM']);
        }, 0x0);
      }
    }));
  }, _0x2268e8["initRankListBtn"] = function () {
    if (this["slotData"]["getData"]()["isForceHideRankBtn"]) this["rankingBtn"]["active"] = !0x1;else {
      var _0x67959b = __dependency_13["default"]["getData"]()["slotRankOn"];
      this["rankingBtn"]["active"] = _0x67959b;
    }
  }, (0, __dependency_0["createClass"])(_0x217201, [{
    'key': "slotData",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_10['default']);
    }
  }]), _0x217201;
}(__dependency_5["default"]))["prototype"], "spinContent", [_0x176e05], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1c71a3 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], 'bg', [_0x212e2b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x13bf20 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "menuBtn", [_0x17b57e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x59abe0 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], 'turboToggle', [_0x11dddd], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x15e591 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "spinButton", [_0x5a9770], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xc320be = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "spineButton", [_0x49e133], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x67ff93 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], 'startAutoBtn', [_0x4defed], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x45e102 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "stopAutoBtn", [_0x37d27b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x178a5a = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], 'autoSpinGroup', [_0x40df3c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x352395 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366['prototype'], 'slotTableBtn', [_0x19f322], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x9acc9b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "plusBtn", [_0x37c9e5], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x183a17 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "minusBtn", [_0x588f89], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x295336 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "menuContent", [_0x10bb4d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5f0a50 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "btnBack", [_0x29b20f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5c65a9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366['prototype'], 'ruleBtn', [_0x5087de], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3549c6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], 'recordBtn', [_0x17ae6c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x7587ae = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], 'rankingBtn', [_0xf9ab6e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x8eb20e = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366['prototype'], 'settingBtn', [_0x178bad], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x54b5c3 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x31f366["prototype"], "exitBtn", [_0x33e362], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x31f366));
__dependency_1["cclegacy"]["_RF"]['pop']();
