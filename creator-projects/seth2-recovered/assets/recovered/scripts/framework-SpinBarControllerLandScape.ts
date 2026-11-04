// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SpinBarControllerLandScape.ts.js
// SHA256: b8464196e12d578cf14c70c5fdd099f0a5332527f80bd7695b8ac8df62997766
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-CmmUtils";
import * as __dependency_5 from "./main-EventComponent";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./main-WrapperData";
import * as __dependency_8 from "./framework-SpinButton";
import * as __dependency_9 from "./framework-AutoPlayModel";
import * as __dependency_10 from "./framework-SlotFrameworkData";
import * as __dependency_11 from "./framework-StakeModel";
import * as __dependency_12 from "./framework-SlotFrameworkEvent";
import * as __dependency_13 from "./framework-DefinitionModel";
import * as __dependency_14 from "./framework-PlatformModel";
import * as __dependency_15 from "./framework-ReplayModel";
import * as __dependency_16 from "./framework-type2";
import * as __dependency_17 from "./framework-ObjectUtils";
import * as __dependency_18 from "./framework-AutoSpinView";
import * as __dependency_19 from "./framework-BetViewLandScape";
import * as __dependency_20 from "./framework-SlotTableViewL_v2";
import * as __dependency_21 from "./main-TimeManager";
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
(function (_0x3d24ca) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x57e471) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x50184e) {
  void 0;
})(__dependency_2);
(function (_0x200d9c) {
  void 0;
})(__dependency_3);
(function (_0xc8803d) {
  void 0;
})(__dependency_4);
(function (_0x48d8a4) {
  void 0;
})(__dependency_5);
(function (_0x12c197) {
  void 0;
})(__dependency_6);
(function (_0x5280d6) {
  void 0;
})(__dependency_7);
(function (_0x2e559b) {
  void 0;
})(__dependency_8);
(function (_0x53c5b1) {
  void 0;
})(__dependency_9);
(function (_0x554ea2) {
  void 0;
})(__dependency_10);
(function (_0x13abe8) {
  void 0;
})(__dependency_11);
(function (_0x5ccf6e) {
  void 0;
})(__dependency_12);
(function (_0x3b2e89) {
  void 0;
})(__dependency_13);
(function (_0x2bb935) {
  void 0;
})(__dependency_14);
(function (_0x51b6ed) {
  void 0;
})(__dependency_15);
(function (_0x41383f) {
  void 0;
})(__dependency_16);
(function (_0x20e264) {
  void 0;
})(__dependency_17);
(function (_0x19a157) {
  void 0;
})(__dependency_18);
(function (_0x1df6b8) {
  void 0;
})(__dependency_19);
(function (_0xbd48f3) {
  void 0;
})(__dependency_20);
(function (_0x1fd506) {
  void 0;
})(__dependency_21);
var _0x4be734, _0xd58e4, _0x2b2998, _0x15929a, _0x330179, _0x52d037, _0x8929d1, _0x2d2664, _0x387137, _0x5a83a0, _0x6d81b2, _0x5d4493, _0x3acfbb, _0x34bac1, _0x6eecb1, _0x5baec, _0xdc3ef2, _0x277687, _0x1422e1, _0xac73d, _0x1fd954, _0x155261, _0x165684, _0x4e716d, _0x3d04d4, _0x4dd2f9, _0x4c2f73, _0x1529ee, _0x99a59c, _0x6b11fc, _0x46ddd7, _0x3146e3, _0x307278, _0x1f982e, _0x2c7d9d;
__dependency_1["cclegacy"]['_RF']['push']({}, "4b168TeVbhD+5bz+ES5hrq2", "SpinBarControllerLandScape", void 0x0);
__dependency_1["_decorator"]["ccclass"], __dependency_1["_decorator"]["property"], __publish("default", (_0x4be734 = (0, __dependency_6["inject"])("buttons", __dependency_1["Node"]), _0xd58e4 = (0, __dependency_6["inject"])("buttons/menuBtn", __dependency_1["Node"]), _0x2b2998 = (0, __dependency_6["inject"])("buttons/turboToggle", __dependency_1["Node"]), _0x15929a = (0, __dependency_6["inject"])("buttons/autoSpinGroup", __dependency_1["Node"]), _0x330179 = (0, __dependency_6["inject"])("buttons/autoSpinGroup/startAutoBtn", __dependency_1["Node"]), _0x52d037 = (0, __dependency_6["inject"])("buttons/autoSpinGroup/stopAutoBtn", __dependency_1["Node"]), _0x8929d1 = (0, __dependency_6["inject"])("buttons/SpinButton", __dependency_1["Node"]), _0x2d2664 = (0, __dependency_6["inject"])("buttons/slotTable2Btn", __dependency_1["Node"]), _0x387137 = (0, __dependency_6["inject"])("stakeContent", __dependency_1["Node"]), _0x5a83a0 = (0, __dependency_6["inject"])("stakeContent/stakeBarMask", __dependency_1["Node"]), _0x6d81b2 = (0, __dependency_6["inject"])("stakeContent/stakeBarMask/Bar", __dependency_1["Node"]), _0x5d4493 = (0, __dependency_6["inject"])('stakeContent/btns/plusBtn/hitArea', __dependency_1["Node"]), _0x3acfbb = (0, __dependency_6["inject"])("stakeContent/btns/plusBtn/btn", __dependency_1["Node"]), _0x34bac1 = (0, __dependency_6["inject"])("stakeContent/btns/minusBtn/hitArea", __dependency_1["Node"]), _0x6eecb1 = (0, __dependency_6["inject"])("stakeContent/btns/minusBtn/btn", __dependency_1["Node"]), _0x5baec = (0, __dependency_6["inject"])('stakeContent/btns/openBtn', __dependency_1["Node"]), _0xdc3ef2 = (0, __dependency_6["inject"])("stakeContent/stake", __dependency_1['Label']), _0x1422e1 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x277687 = function (_0x34e57c) {
  function _0xe3b577() {
    for (var _0x253989, _0x322845 = arguments["length"], _0x2a4b19 = new Array(_0x322845), _0xf84846 = 0x0; _0xf84846 < _0x322845; _0xf84846++) _0x2a4b19[_0xf84846] = arguments[_0xf84846];
    return _0x253989 = Reflect.construct(_0x34e57c, [this]['concat'](_0x2a4b19).slice(1), new.target || _0xe3b577) || this, (0, __dependency_0["initializerDefineProperty"])(_0x253989, 'buttons', _0x1422e1, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "menuBtn", _0xac73d, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "turboToggle", _0x1fd954, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "autoSpinGroup", _0x155261, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "startAutoBtn", _0x165684, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, 'stopAutoBtn', _0x4e716d, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "spinButton", _0x3d04d4, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "slotTable2Btn", _0x4dd2f9, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, 'stakeContent', _0x4c2f73, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "stakeBarMask", _0x1529ee, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "stakeBar", _0x99a59c, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "plusHitArea", _0x6b11fc, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "plusBtn", _0x46ddd7, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "minusHitArea", _0x3146e3, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "minusBtn", _0x307278, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "btnOpen", _0x1f982e, (0, __dependency_0["assertThisInitialized"])(_0x253989)), (0, __dependency_0["initializerDefineProperty"])(_0x253989, "stake", _0x2c7d9d, (0, __dependency_0["assertThisInitialized"])(_0x253989)), _0x253989["quickStopBtn"] = null, _0x253989["stakeStepInteractable"] = void 0x0, _0x253989['stakeMapSize'] = void 0x0, _0x253989["stakeRatio"] = void 0x0, _0x253989["lastPosition"] = new __dependency_1['Vec2'](), _0x253989["deltaPos"] = new __dependency_1['Vec2'](), _0x253989["stakeChildColorMap"] = new Map(), _0x253989['frameCounter'] = 0x0, _0x253989["stakeCoolingDownFlag"] = !0x1, _0x253989["hasCoolingDownSpin"] = !0x1, _0x253989['needUpdateSpin'] = !0x1, _0x253989["tmpSpinFunc"] = null, _0x253989['tmpStopSpinFunc'] = null, _0x253989["spinStatus"] = __dependency_16["ESpinStatus"]['IDLE'], _0x253989["isOpenMenu"] = !0x1, _0x253989["currentTarget"] = null, _0x253989["isTouchMove"] = !0x1, _0x253989["currentKeyCode"] = __dependency_1["KeyCode"]["NONE"], _0x253989['timeOutId'] = -0x1, _0x253989['speedTimeOutId'] = -0x1, _0x253989["maxSpeedUp"] = 0x2, _0x253989["currentSpeed"] = 0x1, _0x253989;
  }
  (0, __dependency_0['inheritsLoose'])(_0xe3b577, _0x34e57c);
  var _0x184b83 = _0xe3b577["prototype"];
  return _0x184b83["onLoad"] = function () {
    _0x34e57c['prototype']["onLoad"]['call'](this), this["createQuickStopBtn"](), this["setEventTouch"]();
  }, _0x184b83["start"] = function () {
    __dependency_15["default"]["isReplay"] ? this["replayInit"]() : this["init"]();
  }, _0x184b83['update'] = function (_0x3df0b0) {
    if (this["frameCounter"]++, this["frameCounter"] >= 0x7 && (this["frameCounter"] = 0x0, this['stakeStepInteractable'] && this["spinStatus"] == __dependency_16["ESpinStatus"]["IDLE"])) {
      if (this["stakeCoolingDownFlag"]) return;
      if (this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"]) return;
      this["currentKeyCode"] == __dependency_1["KeyCode"]["ARROW_LEFT"] ? this["setStakeStep"](-0x1, !0x1) : this["currentKeyCode"] == __dependency_1["KeyCode"]['ARROW_RIGHT'] && this["setStakeStep"](0x1, !0x1), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }
    this["needUpdateSpin"] && (this["tmpSpinFunc"] && this["tmpSpinFunc"](), this['needUpdateSpin'] = !0x1);
  }, _0x184b83['onDestroy'] = function () {
    _0x34e57c["prototype"]['onDestroy']["call"](this);
  }, _0x184b83["init"] = function () {
    this['addEventInput'](), this["initAutoBtn"](), this["initStake"](), this["initStakeBar"](), this["initSlotTable2Btn"](), this["setAllInteractable"](!0x0), __dependency_11["default"]['getData']()["totalBetValues"] && __dependency_11["default"]["totalBetValues"]["length"] > 0x0 ? this["btnOpen"]["active"] = !0x0 : this["btnOpen"]["active"] = !0x1;
  }, _0x184b83['replayInit'] = function () {
    this['buttons']['active'] = !0x1, this["btnOpen"] && (this["btnOpen"]['active'] = !0x1), this['replayInitStake'](), this["initStakeBar"]();
  }, _0x184b83["setEventTouch"] = function () {
    var _0x248a9e = this;
    this['plusHitArea']['on'](__dependency_1["NodeEventType"]["TOUCH_START"], this["stakeTouchStart"], this), this["plusBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], this["stakeTouchStart"], this), this["plusHitArea"]['on'](__dependency_1["NodeEventType"]["TOUCH_MOVE"], this["stakeTouchMove"], this), this["plusHitArea"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], this["stakeTouchEnd"], this), this["plusBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], this["stakeTouchEnd"], this), this["plusHitArea"]['on'](__dependency_1["NodeEventType"]["TOUCH_CANCEL"], this["stakeTouchCancel"], this), this['plusBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_CANCEL"], this["stakeTouchCancel"], this), this["minusHitArea"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], this["stakeTouchStart"], this), this["minusBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], this["stakeTouchStart"], this), this['minusHitArea']['on'](__dependency_1["NodeEventType"]["TOUCH_MOVE"], this["stakeTouchMove"], this), this["minusHitArea"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], this["stakeTouchEnd"], this), this["minusBtn"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], this['stakeTouchEnd'], this), this["minusHitArea"]['on'](__dependency_1["NodeEventType"]["TOUCH_CANCEL"], this['stakeTouchCancel'], this), this["minusBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_CANCEL"], this["stakeTouchCancel"], this), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["menuBtn"], function () {
      dispatch(__dependency_12['SlotFrameworkEvent']["SHOW_MENU"]), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), this["startAutoBtn"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      _0x248a9e['startAutoBtn']["getComponent"](__dependency_1["Button"])['interactable'] && (App['uiManager']['open']({
        'type': __dependency_18["default"],
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]['slotFramework']],
        'zIndex': __dependency_2['ViewZOrder']['UI'],
        'name': '自動投注'
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]));
    }), this["stopAutoBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x248a9e["stopAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] && (__dependency_9["default"]["active"] = !0x1, _0x248a9e["showStartAutoActive"](!0x0), dispatch(__dependency_12['SlotFrameworkEvent']["STOP_AUTO_SPIN"]), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]));
    }), this['onI'](__dependency_1["Input"]["EventType"]["KEY_DOWN"], function (_0x25fcdf) {
      if (App["uiManager"]["IsOnlyGameViewOpen"]("GameView") && null === App["gameAlert"]['currentPanel'] && 0x0 == _0x248a9e["isOpenMenu"]) {
        if (_0x248a9e["currentTarget"]) return;
        if (_0x248a9e["stakeCoolingDownFlag"]) return;
        if (!_0x248a9e['stakeStepInteractable']) return;
        if (_0x248a9e["currentKeyCode"] != __dependency_1["KeyCode"]["NONE"]) return;
        if (_0x25fcdf['keyCode'] == __dependency_1["KeyCode"]["ARROW_LEFT"] || _0x25fcdf['keyCode'] == __dependency_1["KeyCode"]["ARROW_RIGHT"]) {
          var _0x508421 = _0x25fcdf["keyCode"];
          _0x248a9e["currentKeyCode"] = _0x508421;
        }
      } else _0x25fcdf["keyCode"] != __dependency_1["KeyCode"]["ARROW_LEFT"] && _0x25fcdf["keyCode"] != __dependency_1["KeyCode"]["ARROW_RIGHT"] || (_0x248a9e['currentKeyCode'] = __dependency_1["KeyCode"]["NONE"]);
    }), this["onI"](__dependency_1["Input"]["EventType"]['KEY_UP'], function (_0x38451c) {
      _0x248a9e["node"]['targetOff'](_0x248a9e), _0x248a9e["currentTarget"] || _0x248a9e['stakeCoolingDownFlag'] || _0x248a9e['stakeStepInteractable'] && _0x248a9e["currentKeyCode"] != __dependency_1["KeyCode"]["NONE"] && _0x248a9e["currentKeyCode"] == _0x38451c["keyCode"] && (_0x248a9e["stakeCoolingDownFlag"] = !0x0, _0x248a9e["sendSetting"](), _0x248a9e["timeOutId"] = setTimeout(function () {
        _0x248a9e["needUpdateSpin"] = _0x248a9e["stakeCoolingDownFlag"] && _0x248a9e["hasCoolingDownSpin"], _0x248a9e["stakeCoolingDownFlag"] = !0x1, _0x248a9e["hasCoolingDownSpin"] = !0x1, _0x248a9e['stakeStepInteractable'] = !0x0, _0x248a9e["currentKeyCode"] = __dependency_1["KeyCode"]["NONE"];
      }, 0x12c));
    }), this['on'](__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE_SETTING"], function (_0x4af633) {
      _0x248a9e["initStake"](), _0x248a9e["initStakeBar"]();
    }), this["btnOpen"] && __dependency_4["CmmUtils"]["addBtnClickEvent"](this['btnOpen'], function () {
      App["uiManager"]["open"]({
        'type': __dependency_19['default'],
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2['ViewZOrder']['UI'],
        'name': "注單紀錄",
        'args': !0x0
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    });
  }, _0x184b83["setStakeStep"] = function (_0x31c399, _0x410dd8) {
    if (void 0x0 === _0x410dd8 && (_0x410dd8 = !0x0), this["stakeStepInteractable"]) {
      var _0x5d7e7f = this["getStakeKeyIndex"]();
      if ((_0x5d7e7f = _0x5d7e7f + _0x31c399 > this["stakeMapSize"] ? this['stakeMapSize'] : _0x5d7e7f + _0x31c399) < this["stakeMapSize"] && _0x5d7e7f >= 0x0) {
        var _0x32a2ae = __dependency_11["default"]["totalStakeMap"]["get"](_0x5d7e7f);
        __dependency_11["default"]["updateStake"](_0x32a2ae), this["updateBarWidth"](_0x5d7e7f), this['setStakeLabel'](__dependency_11["default"]["totalStake"]), dispatch(__dependency_12['SlotFrameworkEvent']['UPDATE_STAKE'], {
          'data': _0x32a2ae["totalStake"]
        }), _0x410dd8 && this["sendSetting"]();
      }
      dispatch(__dependency_12['SlotFrameworkEvent']['PLAY_CLICK_BTM']);
    }
  }, _0x184b83["sendSetting"] = function () {
    var _0x3efbc5 = __dependency_11["default"]["getData"](),
      _0x4c6615 = {
        'type': "game",
        'data': {
          'stakeIndex': _0x3efbc5['stakeIndex'],
          'ratioIndex': _0x3efbc5["ratioIndex"]
        }
      };
    dispatch(__dependency_12['SlotFrameworkEvent']["SEND_SETTING_REQUEST"], _0x4c6615);
  }, _0x184b83["stakeTouchStart"] = function (_0x3ecf41) {
    var _0x2ae074 = this;
    this["stakeStepInteractable"] && null == this["currentTarget"] && this["currentKeyCode"] == __dependency_1["KeyCode"]['NONE'] && (this["stakeCoolingDownFlag"] || (this["currentTarget"] = _0x3ecf41["currentTarget"], this["isTouchMove"] = !0x1, this["lastPosition"] = _0x3ecf41["getLocation"](), this["stakeCoolingDownFlag"] = !0x0, this["timeOutId"] = setTimeout(function () {
      _0x2ae074["needUpdateSpin"] = _0x2ae074["stakeCoolingDownFlag"] && _0x2ae074["hasCoolingDownSpin"], _0x2ae074['stakeCoolingDownFlag'] = !0x1, _0x2ae074["hasCoolingDownSpin"] = !0x1, _0x2ae074["stakeStepInteractable"] = !0x0;
    }, 0x1f4)));
  }, _0x184b83["stakeTouchEnd"] = function (_0xf6d025, _0x19b46d) {
    var _0x16b859 = this;
    this['stakeStepInteractable'] && this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && (this['lastPosition'] = _0xf6d025['getLocation'](), this["currentTarget"] == _0xf6d025["currentTarget"] && (this["isTouchMove"] ? (this["sendSetting"](), this["stakeCoolingDownFlag"] = !0x0, this["isTouchMove"] = !0x1, this["currentTarget"] = null, this["timeOutId"] = setTimeout(function () {
      _0x16b859["needUpdateSpin"] = _0x16b859["stakeCoolingDownFlag"] && _0x16b859['hasCoolingDownSpin'], _0x16b859["stakeCoolingDownFlag"] = !0x1, _0x16b859["hasCoolingDownSpin"] = !0x1, _0x16b859["stakeStepInteractable"] = !0x0;
    }, 0x1f4)) : (_0xf6d025["currentTarget"] == this["plusHitArea"] || _0xf6d025["currentTarget"] == this["plusBtn"] ? this['setStakeStep'](0x1) : _0xf6d025["currentTarget"] != this["minusHitArea"] && _0xf6d025["currentTarget"] != this['minusBtn'] || this['setStakeStep'](-0x1), this["currentTarget"] = null)));
  }, _0x184b83["stakeTouchCancel"] = function (_0x17d48d) {
    var _0x3de941 = this;
    this['stakeStepInteractable'] && this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && this["currentTarget"] == _0x17d48d['currentTarget'] && (this["isTouchMove"] ? (this['sendSetting'](), this['currentTarget'] = null, this["isTouchMove"] = !0x1, this["stakeCoolingDownFlag"] = !0x0, this["timeOutId"] = setTimeout(function () {
      _0x3de941["needUpdateSpin"] = _0x3de941["stakeCoolingDownFlag"] && _0x3de941["hasCoolingDownSpin"], _0x3de941["stakeCoolingDownFlag"] = !0x1, _0x3de941["hasCoolingDownSpin"] = !0x1, _0x3de941["stakeStepInteractable"] = !0x0;
    }, 0x1f4)) : this['currentTarget'] = null);
  }, _0x184b83["stakeTouchMove"] = function (_0x334c11) {
    if (this["stakeStepInteractable"] && this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && null != this["currentTarget"]) if (this['currentTarget'] != _0x334c11["currentTarget"]) ;else {
      var _0x2e89b0 = _0x334c11['getLocation']();
      this["isTouchMove"] = !0x0, this["deltaPos"]['x'] = this["lastPosition"]['x'] - _0x2e89b0['x'], this["lastPosition"] = _0x2e89b0["clone"]();
      var _0x1ef421 = this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["width"] - this['deltaPos']['x'];
      if (_0x1ef421 < this["stakeBarMask"]["getComponent"](__dependency_1["UITransform"])["width"] && _0x1ef421 > 0x0) {
        this["stakeBar"]["getComponent"](__dependency_1["UITransform"])['width'] = _0x1ef421;
        var _0x3f7466 = this['calculateStakeMapIndex'](this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["width"]),
          _0x3da86c = __dependency_11["default"]['totalStakeMap']['get'](_0x3f7466);
        __dependency_11["default"]["updateStake"](__dependency_11["default"]['totalStakeMap']["get"](_0x3f7466)), this["setStakeLabel"](__dependency_11["default"]['totalStake']), dispatch(__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE"], {
          'data': _0x3da86c['totalStake']
        });
      }
    }
  }, _0x184b83["calculateStakeMapIndex"] = function (_0x4a49f6) {
    var _0x1c9293 = Math["floor"](_0x4a49f6 / this["stakeRatio"]);
    if (!(_0x1c9293 >= this["stakeMapSize"])) return _0x1c9293;
  }, _0x184b83["setStakeLabel"] = function (_0x5251f7) {
    var _0x31cc26 = __dependency_13['default']["getData"]()["digital"],
      _0x12fc7a = _0x5251f7['toString'](),
      _0xb15545 = _0x12fc7a['split']('.')[0x0],
      _0x4d174a = _0x12fc7a['split']('.')[0x1];
    null != _0x4d174a && (_0x4d174a = _0x4d174a["substring"](0x0, _0x31cc26), _0x12fc7a = _0x31cc26 > 0x0 ? _0xb15545 + '.' + _0x4d174a : _0xb15545), this["stake"]["string"] = _0x12fc7a;
  }, _0x184b83["updateBarWidth"] = function (_0x2fabc0) {
    _0x2fabc0 >= this["stakeMapSize"] - 0x1 ? this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["width"] = this["stakeBarMask"]['getComponent'](__dependency_1["UITransform"])["width"] : this["stakeBar"]["getComponent"](__dependency_1["UITransform"])['width'] = _0x2fabc0 <= 0x0 ? 0x0 : _0x2fabc0 * this["stakeRatio"] + 0x1;
  }, _0x184b83["initStake"] = function () {
    var _0x44de5d = this,
      _0x478fb5 = __dependency_11["default"]["stakeIndex"],
      _0x40bc9a = __dependency_11["default"]["ratioIndex"],
      _0x15c86e = __dependency_11["default"]["getStakeVO"]({
        'stakeIndex': _0x478fb5,
        'ratioIndex': _0x40bc9a
      });
    this["stakeMapSize"] = __dependency_11["default"]["totalStakeMap"]['size'], this["stakeRatio"] = this['stakeBarMask']["getComponent"](__dependency_1["UITransform"])['width'] / this["stakeMapSize"], __dependency_11["default"]["updateStake"](_0x15c86e), this["setStakeLabel"](__dependency_11["default"]["totalStake"]), dispatch(__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE"], {
      'data': _0x15c86e["totalStake"]
    });
    var _0x148578 = this["stakeContent"]['getComponentsInChildren'](__dependency_1['Label']),
      _0x2d7aaf = this["stakeContent"]['getComponentsInChildren'](__dependency_1["Sprite"]);
    []["concat"](_0x148578, _0x2d7aaf)["forEach"](function (_0x49e6de) {
      _0x44de5d["stakeChildColorMap"]["set"](_0x49e6de, {
        'light': new __dependency_1["Color"](_0x49e6de['color']),
        'dark': __dependency_4["CmmUtils"]['rgbaToDarkGray'](_0x49e6de["color"])
      });
    });
  }, _0x184b83["replayInitStake"] = function () {
    var _0x157dce = __dependency_15["default"]["getData"]()["betData"]['replayMeta'],
      _0xe54f68 = _0x157dce["stakeIndex"],
      _0xa0f1f8 = _0x157dce['ratioIndex'],
      _0x1e5264 = __dependency_11["default"]["getStakeVO"]({
        'stakeIndex': _0xe54f68,
        'ratioIndex': _0xa0f1f8
      });
    this['stakeMapSize'] = __dependency_11["default"]["totalStakeMap"]["size"], this["stakeRatio"] = this["stakeBarMask"]["getComponent"](__dependency_1["UITransform"])["width"] / this["stakeMapSize"], __dependency_11["default"]['updateStake'](_0x1e5264), this['setStakeLabel'](__dependency_11["default"]["totalStake"]), dispatch(__dependency_12['SlotFrameworkEvent']["UPDATE_STAKE"], {
      'data': _0x1e5264["totalStake"]
    });
  }, _0x184b83["setStakeColor"] = function (_0x597861) {
    this["stakeChildColorMap"]["forEach"](function (_0x54c5bd, _0x1b60bc) {
      _0x1b60bc["color"] = _0x597861 ? _0x54c5bd["light"] : _0x54c5bd["dark"];
    });
  }, _0x184b83["initStakeBar"] = function () {
    var _0x445d27 = this["getStakeKeyIndex"]();
    this["updateBarWidth"](_0x445d27);
  }, _0x184b83["getStakeKeyIndex"] = function () {
    for (var _0x566267, _0x3ac47c = __dependency_11["default"]['totalStakeMap'], _0x2b4d61 = __dependency_11["default"]['stakeIndex'], _0x44b772 = __dependency_11["default"]["ratioIndex"], _0x2967a3 = (0, __dependency_0["createForOfIteratorHelperLoose"])(_0x3ac47c); !(_0x566267 = _0x2967a3())["done"];) {
      var _0x5c925f = _0x566267['value'],
        _0x11ee18 = _0x5c925f[0x0],
        _0x4f5ca7 = _0x5c925f[0x1];
      if (_0x4f5ca7["stakeIndex"] === _0x2b4d61 && _0x4f5ca7["ratioIndex"] === _0x44b772) return _0x11ee18;
    }
    return -0x1;
  }, _0x184b83["setColor"] = function (_0xb92258) {
    var _0x554f96 = this["turboToggle"]["getComponentsInChildren"](__dependency_1["Sprite"]),
      _0x4a3ddf = this["startAutoBtn"]["getComponentsInChildren"](__dependency_1["Sprite"]),
      _0x36d4ed = this["menuBtn"]["getComponentsInChildren"](__dependency_1["Sprite"]);
    _0x554f96["forEach"](function (_0x4f9bef) {
      _0x4f9bef["color"] = new __dependency_1["Color"](_0xb92258);
    }), _0x4a3ddf["forEach"](function (_0x395cbe) {
      _0x395cbe['color'] = new __dependency_1["Color"](_0xb92258);
    }), _0x36d4ed["forEach"](function (_0x535d40) {
      _0x535d40['color'] = new __dependency_1["Color"](_0xb92258);
    });
  }, _0x184b83['showStartAutoActive'] = function (_0x57d710) {
    this["startAutoBtn"]["active"] = _0x57d710, this["stopAutoBtn"]['active'] = !_0x57d710;
  }, _0x184b83["initAutoBtn"] = function () {
    var _0x42083f = this["autoSpinGroup"]["getComponentsInChildren"](__dependency_1["Sprite"]),
      _0x154673 = App["dataCenter"]["get"](__dependency_7["default"])['colorConfig']["main"];
    _0x42083f['forEach'](function (_0x203bd9) {
      _0x203bd9["color"] = new __dependency_1["Color"](_0x154673);
    }), this['showStartAutoActive'](!0x0);
  }, _0x184b83["createQuickStopBtn"] = function () {
    var _0x5a43e7 = App["cache"]["get"](__dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]], 'prefabs/ui/button/SpinButton')['data'],
      _0x35c5df = (0, __dependency_1['instantiate'])(_0x5a43e7);
    _0x35c5df["setPosition"](this['spinButton']["getPosition"]()), _0x35c5df["name"] = 'QuickStopBtn', _0x35c5df['setParent'](this["buttons"]), this["quickStopBtn"] = _0x35c5df["getComponent"](__dependency_8["SpinButton"]);
  }, _0x184b83["setQuickStopData"] = function (_0x1ce350, _0x3df517, _0x110a3d, _0x485a40, _0x40ad71) {
    void 0x0 === _0x40ad71 && (_0x40ad71 = 0x1), this["quickStopBtn"]['setData'](_0x1ce350, _0x3df517, _0x110a3d, _0x485a40, _0x40ad71);
  }, _0x184b83['setQuickStopBtnActive'] = function (_0x4de27c) {
    this['quickStopBtn'] && (this["quickStopBtn"]['node']['active'] = _0x4de27c, this["quickStopBtn"]['syncArrowAngle'](this['spinButton']["getComponent"](__dependency_8["SpinButton"])["arrowAngle"]));
  }, _0x184b83['setQuickStopBtnArrowAngle'] = function () {
    var _0x324a88 = this["spinButton"]['getComponent'](__dependency_8["SpinButton"])["arrowAngle"];
    this['quickStopBtn'] && this["quickStopBtn"]["syncArrowAngle"](_0x324a88);
  }, _0x184b83["initSlotTable2Btn"] = function () {
    var _0x15ebb4 = App["dataCenter"]["get"](__dependency_7["default"])["colorConfig"]["main"],
      _0x34a48d = Object["prototype"]["hasOwnProperty"]['call'](__dependency_14['default']['getData'](), 'table');
    (this['slotTable2Btn']["active"] = _0x34a48d, _0x34a48d) && (this["slotTable2Btn"]["getComponentInChildren"](__dependency_1['Label'])["string"] = __dependency_14['default']["getData"]()["table"]["number"]["toString"]()["padStart"](0x3, '0'), this["setSlotTable2Color"](_0x15ebb4), __dependency_4["CmmUtils"]["addBtnClickEvent"](this['slotTable2Btn'], function () {
      App["uiManager"]['open']({
        'type': __dependency_20['default'],
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]['slotFramework']],
        'zIndex': __dependency_2['ViewZOrder']['UI'],
        'name': "機台選擇"
      }), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }));
  }, _0x184b83['setSlotTable2Color'] = function (_0x4c4909) {
    this["slotTable2Btn"]["getComponentsInChildren"](__dependency_1["Sprite"])['forEach'](function (_0x1a18c4) {
      _0x1a18c4['color'] = new __dependency_1["Color"](_0x4c4909);
    }), this["slotTable2Btn"]["getComponentInChildren"](__dependency_1['Label'])['color'] = new __dependency_1["Color"](_0x4c4909);
  }, _0x184b83["addSpinEventTouch"] = function (_0x22b5c9, _0x59b79f) {
    var _0x59eafe = this,
      _0x4f1d3c = this["spinButton"]["getComponent"](__dependency_8["SpinButton"]);
    this["tmpSpinFunc"] = _0x59b79f, _0x4f1d3c["addClickEvent"](function () {
      if (_0x59eafe["stakeCoolingDownFlag"]) return _0x59eafe["hasCoolingDownSpin"] = !0x0, void (_0x59eafe["stakeStepInteractable"] = !0x1);
      _0x59eafe["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && _0x59b79f();
    });
  }, _0x184b83['addQuickStopEventTouch'] = function (_0xf0b2ea) {
    this["tmpStopSpinFunc"] = _0xf0b2ea, this["quickStopBtn"] && this["quickStopBtn"]["addClickEvent"](_0xf0b2ea);
  }, _0x184b83['addSpeedUpTouchFunction'] = function () {
    this["quickStopBtn"] && this["quickStopBtn"]["addClickEvent"](this["speedUpTouchFunction"]["bind"](this));
  }, _0x184b83["speedUpTouchFunction"] = function (_0x4bcc31) {
    var _0xad9790 = this;
    this['spinStatus'] == __dependency_16["ESpinStatus"]["SPINING"] && (clearTimeout(this["speedTimeOutId"]), this["currentSpeed"] = _0x4bcc31 || this["maxSpeedUp"], __dependency_21["TimeManager"]["instance"]["setTimeScale"](this["currentSpeed"]), this['speedTimeOutId'] = setTimeout(function () {
      __dependency_21["TimeManager"]["instance"]["reset"](), _0xad9790["currentSpeed"] = 0x1;
    }, 0x1f4));
  }, _0x184b83["addQuickStopBtnEvent"] = function (_0x5ea33d) {
    this["quickStopBtn"] && this["quickStopBtn"]["addClickEvent"](_0x5ea33d);
  }, _0x184b83["addEventInput"] = function () {
    var _0x5c978e = this;
    this['onI'](__dependency_1["Input"]["EventType"]["KEY_UP"], function (_0x3e6d74) {}), this["onI"](__dependency_1["Input"]["EventType"]['KEY_DOWN'], function (_0x53578a) {
      if (_0x5c978e["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"]) {
        var _0x49dbee = _0x5c978e["spinButton"]["getComponent"](__dependency_8["SpinButton"]),
          _0x382380 = _0x53578a["keyCode"],
          _0x283cbc = _0x49dbee["button"]["getComponent"](__dependency_1["Button"])['interactable'];
        _0x5c978e["currentTarget"] || _0x5c978e["stakeCoolingDownFlag"] || (_0x382380 === __dependency_1["KeyCode"]["SPACE"] && _0x283cbc && App["uiManager"]["IsOnlyGameViewOpen"]("GameView") && null === App["gameAlert"]['currentPanel'] && 0x0 == _0x5c978e["isOpenMenu"] ? _0x5c978e["tmpSpinFunc"] && _0x5c978e['tmpSpinFunc']() : _0x382380 === __dependency_1["KeyCode"]["SPACE"] && _0x5c978e["slotData"]['spinStatus'] === __dependency_16["ESpinStatus"]['SPINING'] && (_0x5c978e["tmpStopSpinFunc"] && _0x5c978e["tmpStopSpinFunc"](), _0x5c978e["stakeCoolingDownFlag"] = !0x0, (0, __dependency_1["tween"])(_0x5c978e)["delay"](0.3)["call"](function () {
          _0x5c978e["stakeCoolingDownFlag"] = !0x1;
        })["start"]()));
      }
    });
  }, _0x184b83["setSpinBtnData"] = function (_0x314737, _0x2da3ab, _0xed7c1c, _0x3386f5, _0x26b7fa) {
    void 0x0 === _0x26b7fa && (_0x26b7fa = 0x1);
    var _0x3bae11 = this["spinButton"]["getComponent"](__dependency_8["SpinButton"]);
    _0x3bae11['init'](), _0x3bae11["setData"](_0x314737, _0x2da3ab, _0xed7c1c, _0x3386f5, _0x26b7fa), this['quickStopBtn'] && (this['quickStopBtn']["init"](), this["setQuickStopData"](_0x314737, _0x2da3ab, _0xed7c1c, _0x3386f5, _0x26b7fa));
  }, _0x184b83["stopRotate"] = function () {
    var _0x397c9a = this["spinButton"]["getComponent"](__dependency_8["SpinButton"]);
    _0x397c9a && (_0x397c9a["HIGH_SPEED"] = _0x397c9a["BASE_SPEED"]), this["quickStopBtn"] && (this["quickStopBtn"]['HIGH_SPEED'] = this["quickStopBtn"]["BASE_SPEED"]);
  }, _0x184b83['initTurbo'] = function (_0x2381f9) {
    var _0x138327 = this["turboToggle"]["getComponentsInChildren"](__dependency_1["Sprite"]),
      _0x3ccef9 = App["dataCenter"]["get"](__dependency_7["default"])["colorConfig"]["main"];
    _0x138327["forEach"](function (_0x24ff24) {
      _0x24ff24["color"] = new __dependency_1["Color"](_0x3ccef9);
    }), this["turboToggle"]["getComponent"](__dependency_1["Toggle"])["isChecked"] = _0x2381f9, this['turboToggle']["off"](__dependency_1["NodeEventType"]['TOUCH_END']);
  }, _0x184b83["addTurboEventTouch"] = function (_0x20b4bc) {
    var _0xfb2745 = this;
    this["turboToggle"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_4["CmmUtils"]["throttle"](function () {
      if (_0xfb2745['turboToggle']["getComponent"](__dependency_1["Toggle"])['interactable']) {
        var _0x57653c = __dependency_17['ObjectUtils']["clone"](_0x20b4bc['isTurbo']);
        _0x20b4bc["setIsTurbo"](!_0x57653c), dispatch(__dependency_12['SlotFrameworkEvent']["PLAY_CLICK_BTM"]), _0xfb2745["scheduleOnce"](function () {
          _0xfb2745["turboToggle"]["getComponent"](__dependency_1["Toggle"])["isChecked"] = _0x20b4bc["isTurbo"];
        }, 0x0);
      }
    }));
  }, _0x184b83["setAllInteractable"] = function (_0x311778) {
    this["turboToggle"]["getComponent"](__dependency_1["Toggle"])["interactable"] = _0x311778, this["stakeStepInteractable"] = _0x311778, this["spinButton"]["getComponent"](__dependency_8["SpinButton"])["setInteractable"](_0x311778), 0x0 == _0x311778 && clearTimeout(this["timeOutId"]), this["startAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x311778, this['stopAutoBtn']["getComponent"](__dependency_1["Button"])['interactable'] = _0x311778, this["menuBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x311778, __dependency_9["default"]["active"] && (this['stopAutoBtn']['getComponent'](__dependency_1["Button"])['interactable'] = !0x0);
    var _0x2722c0 = App["dataCenter"]['get'](__dependency_7["default"])["colorConfig"],
      _0x2ba37c = _0x2722c0["main"],
      _0x445492 = _0x2722c0["disable"];
    this['setColor'](_0x311778 ? _0x2ba37c : _0x445492), this['setQuickStopBtnActive'](!_0x311778), this["setQuickStopBtnArrowAngle"](), this["setStakeColor"](_0x311778), this['setSlotTableInteractable'](_0x311778), __dependency_11["default"]["getData"]()["totalBetValues"] && __dependency_11["default"]["totalBetValues"]["length"] > 0x0 ? this["btnOpen"]["active"] = _0x311778 : this['btnOpen']['active'] = !0x1;
  }, _0x184b83["setSlotTableInteractable"] = function (_0x3a98d1) {
    var _0x1731b0 = App["dataCenter"]["get"](__dependency_7["default"])["colorConfig"],
      _0x5d4958 = _0x1731b0["main"],
      _0x504d1f = _0x1731b0["disable"];
    this["slotTable2Btn"]['getComponent'](__dependency_1["Button"])["interactable"] = _0x3a98d1, this['setSlotTable2Color'](_0x3a98d1 ? _0x5d4958 : _0x504d1f);
  }, _0x184b83["spinBarActive"] = function (_0x3c7210) {
    this["node"]["active"] = _0x3c7210;
  }, _0x184b83["setBtnsInFeatureMode"] = function (_0x3f1fac) {
    var _0x2f6fe4 = App["dataCenter"]["get"](__dependency_7["default"])["colorConfig"],
      _0xd2ceab = _0x2f6fe4["main"],
      _0x1355de = _0x2f6fe4["disable"];
    0x0 == _0x3f1fac && clearTimeout(this["timeOutId"]), this["turboToggle"]["getComponent"](__dependency_1["Toggle"])["interactable"] = _0x3f1fac, this['startAutoBtn']["getComponent"](__dependency_1["Button"])["interactable"] = _0x3f1fac, this["stopAutoBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x3f1fac, this["menuBtn"]["getComponent"](__dependency_1["Button"])['interactable'] = _0x3f1fac, this["spinButton"]["getComponent"](__dependency_8["SpinButton"])["setInteractable"](_0x3f1fac), this["setColor"](_0x3f1fac ? _0xd2ceab : _0x1355de), this['setSlotTableInteractable'](_0x3f1fac), 0x0 == _0x3f1fac && (this["stakeCoolingDownFlag"] = !0x1);
  }, _0x184b83["setSpinBtnInFeatureMode"] = function (_0x461ddf) {
    this["spinButton"]["getComponent"](__dependency_8["SpinButton"])['setInteractable'](_0x461ddf);
  }, _0x184b83["addEvents"] = function () {
    var _0x211160 = this;
    _0x34e57c["prototype"]['addEvents']["call"](this), this['on'](__dependency_12['SlotFrameworkEvent']["SHOW_AUTO_SPIN"], function (_0x4825b3) {
      var _0x2be58c = _0x4825b3["data"];
      _0x211160["showStartAutoActive"](_0x2be58c);
    }), this['on'](__dependency_12['SlotFrameworkEvent']['UPDATE_SPIN_STATUS'], function (_0x1da01c) {
      var _0x170735 = _0x1da01c['data'],
        _0x2d1449 = __dependency_16["ESpinStatus"]["SPINING"] === _0x170735;
      _0x211160["spinStatus"] = _0x170735, _0x211160['setAllInteractable'](!_0x2d1449);
    }), this['on'](__dependency_12['SlotFrameworkEvent']['SET_AUTO_SPIN_COUNT'], function (_0x54d045) {
      var _0x58e3e9 = _0x54d045["data"];
      _0x58e3e9 >= 0x0 && _0x211160['showStartAutoActive'](!0x1), 0x0 === _0x58e3e9 && _0x211160["showStartAutoActive"](!0x0), -0x1 == _0x58e3e9 && _0x211160['showStartAutoActive'](!0x1);
    }), this['on'](__dependency_12['SlotFrameworkEvent']['VIEW_SHOW_MENU'], function () {
      _0x211160["isOpenMenu"] = !0x0;
    }), this['on'](__dependency_12['SlotFrameworkEvent']["VIEW_HIDE_MENU"], function () {
      _0x211160['isOpenMenu'] = !0x1;
    }), this['on'](__dependency_12['SlotFrameworkEvent']["UPDATE_EXTRA_STAKE"], function () {
      var _0x2c0ea8 = _0x211160["getStakeKeyIndex"](),
        _0x2b9e7d = __dependency_11["default"]['totalStakeMap']["get"](_0x2c0ea8);
      __dependency_11["default"]['updateStake'](_0x2b9e7d), _0x211160['setStakeLabel'](__dependency_11["default"]["totalStake"]);
    }), this['on'](__dependency_12['SlotFrameworkEvent']['SET_BTNS_IN_BUY_FEATURE'], function (_0x22ef3b) {
      _0x211160["setBtnsInFeatureMode"](_0x22ef3b);
    }), this['on'](__dependency_12['SlotFrameworkEvent']["SET_SPIN_BTN_BY_SELECT_FEATURE"], function (_0x532673) {
      _0x211160["setSpinBtnInFeatureMode"](_0x532673);
    }), this['on'](__dependency_12['SlotFrameworkEvent']["SPEED_UP"], function (_0x486300) {
      Log['e']("SpeedUPData:::::::::", _0x486300), _0x211160['speedUpTouchFunction'](_0x486300);
    });
  }, (0, __dependency_0['createClass'])(_0xe3b577, [{
    'key': 'slotData',
    'get': function () {
      return App["dataCenter"]["get"](__dependency_10['default']);
    }
  }]), _0xe3b577;
}(__dependency_5["default"]))["prototype"], "buttons", [_0x4be734], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xac73d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "menuBtn", [_0xd58e4], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1fd954 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "turboToggle", [_0x2b2998], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x155261 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "autoSpinGroup", [_0x15929a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x165684 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "startAutoBtn", [_0x330179], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4e716d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "stopAutoBtn", [_0x52d037], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3d04d4 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687['prototype'], "spinButton", [_0x8929d1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4dd2f9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "slotTable2Btn", [_0x2d2664], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4c2f73 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "stakeContent", [_0x387137], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1529ee = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "stakeBarMask", [_0x5a83a0], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x99a59c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "stakeBar", [_0x6d81b2], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x6b11fc = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], 'plusHitArea', [_0x5d4493], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x46ddd7 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "plusBtn", [_0x3acfbb], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3146e3 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687['prototype'], 'minusHitArea', [_0x34bac1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x307278 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687['prototype'], "minusBtn", [_0x6eecb1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1f982e = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "btnOpen", [_0x5baec], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2c7d9d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x277687["prototype"], "stake", [_0xdc3ef2], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x277687));
__dependency_1["cclegacy"]['_RF']["pop"]();
