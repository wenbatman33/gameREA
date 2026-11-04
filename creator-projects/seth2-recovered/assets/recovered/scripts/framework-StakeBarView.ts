// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-StakeBarView.ts.js
// SHA256: 4a24dd2c0eccd4316f24d49b1dd09b6c5ed8b5f0807d650a9e2e9535c1a38cc8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-SlotFrameworkData";
import * as __dependency_6 from "./framework-StakeModel";
import * as __dependency_7 from "./framework-SlotFrameworkEvent";
import * as __dependency_8 from "./framework-DefinitionModel";
import * as __dependency_9 from "./framework-type2";
var __export_0;
export { __export_0 as StakeBarView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "StakeBarView":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0xa17d07) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x5a40e0) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x2bbdb1) {
  void 0;
})(__dependency_2);
(function (_0x2b34a1) {
  void 0;
})(__dependency_3);
(function (_0x53ea5e) {
  void 0;
})(__dependency_4);
(function (_0x857f4) {
  void 0;
})(__dependency_5);
(function (_0x578648) {
  void 0;
})(__dependency_6);
(function (_0x190f8d) {
  void 0;
})(__dependency_7);
(function (_0x2fddb0) {
  void 0;
})(__dependency_8);
(function (_0x16faf2) {
  void 0;
})(__dependency_9);
var _0x3daaf8, _0x93cbd9, _0x2d753f, _0x51a381, _0x2c07d1, _0x3a37b8, _0x3792b0, _0x4e0d9a, _0x3fd00f, _0x4de7cc, _0x3ea3a6, _0x40da61, _0x327012, _0x405c1c, _0x177f9b, _0x7dce2b, _0x4c16d4, _0x3e9860, _0x1f4cfd, _0x18dac1, _0x45efea;
__dependency_1["cclegacy"]["_RF"]['push']({}, "4b7f6Br5opL85AUFnWbpxC/", "StakeBarView", void 0x0);
var _0x5a6c40 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]['property'], __publish("StakeBarView", (_0x3daaf8 = _0x5a6c40("StakeBarView"), _0x93cbd9 = (0, __dependency_4["inject"])('bbr', __dependency_1["Node"]), _0x2d753f = (0, __dependency_4["inject"])("content", __dependency_1["Node"]), _0x51a381 = (0, __dependency_4["inject"])("content/stakeBarMask", __dependency_1["Node"]), _0x2c07d1 = (0, __dependency_4["inject"])("content/stakeBarMask/Bar", __dependency_1["Node"]), _0x3a37b8 = (0, __dependency_4["inject"])("content/btns/plusBtn/hitArea", __dependency_1["Node"]), _0x3792b0 = (0, __dependency_4["inject"])('content/btns/minusBtn/hitArea', __dependency_1["Node"]), _0x4e0d9a = (0, __dependency_4["inject"])("content/stake", __dependency_1["Label"]), _0x3fd00f = (0, __dependency_4["inject"])("content/btns/plusBtn", __dependency_1["Node"]), _0x4de7cc = (0, __dependency_4["inject"])("content/btns/minusBtn", __dependency_1["Node"]), _0x3daaf8((_0x327012 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x40da61 = function (_0x2ddddb) {
  function _0x5720e6() {
    for (var _0x53d440, _0x482cc1 = arguments["length"], _0x205722 = new Array(_0x482cc1), _0x4d6ff0 = 0x0; _0x4d6ff0 < _0x482cc1; _0x4d6ff0++) _0x205722[_0x4d6ff0] = arguments[_0x4d6ff0];
    return _0x53d440 = Reflect.construct(_0x2ddddb, [this]['concat'](_0x205722).slice(1), new.target || _0x5720e6) || this, (0, __dependency_0["initializerDefineProperty"])(_0x53d440, "bbr", _0x327012, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, "content", _0x405c1c, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, "stakeBarMask", _0x177f9b, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, "stakeBar", _0x7dce2b, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, "plusHitArea", _0x4c16d4, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, 'minusHitArea', _0x3e9860, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, "stake", _0x1f4cfd, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, "plusBtn", _0x18dac1, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), (0, __dependency_0["initializerDefineProperty"])(_0x53d440, 'minusBtn', _0x45efea, (0, __dependency_0["assertThisInitialized"])(_0x53d440)), _0x53d440["stakeStepInteractable"] = void 0x0, _0x53d440["stakeMapSize"] = void 0x0, _0x53d440["stakeRatio"] = void 0x0, _0x53d440["lastPosition"] = new __dependency_1["Vec2"](), _0x53d440["plusLastPosition"] = new __dependency_1["Vec2"](), _0x53d440["deltaPos"] = new __dependency_1["Vec2"](), _0x53d440["stakeChildColorMap"] = new Map(), _0x53d440["frameCounter"] = 0x0, _0x53d440["stakeCoolingDownFlag"] = !0x1, _0x53d440["hasCoolingDownSpin"] = !0x1, _0x53d440["needUpdateSpin"] = !0x1, _0x53d440["tmpSpinFunc"] = null, _0x53d440["spinStatus"] = __dependency_9["ESpinStatus"]["IDLE"], _0x53d440['isOpenMenu'] = !0x1, _0x53d440["currentTarget"] = null, _0x53d440["plusCurrentTarget"] = null, _0x53d440["isTouchMove"] = !0x1, _0x53d440["isPlusTouchMove"] = !0x1, _0x53d440["currentKeyCode"] = __dependency_1["KeyCode"]["NONE"], _0x53d440["timeOutId"] = -0x1, _0x53d440["plusTimeOutId"] = -0x1, _0x53d440;
  }
  (0, __dependency_0["inheritsLoose"])(_0x5720e6, _0x2ddddb);
  var _0x25d5c2 = _0x5720e6['prototype'];
  return _0x25d5c2['onLoad'] = function () {
    _0x2ddddb["prototype"]["onLoad"]["call"](this);
  }, _0x25d5c2['start'] = function () {}, _0x25d5c2["update"] = function (_0x1413ee) {
    if (this["frameCounter"]++, this['frameCounter'] >= 0x7 && (this["frameCounter"] = 0x0, this["stakeStepInteractable"] && this['spinStatus'] == __dependency_9["ESpinStatus"]['IDLE'])) {
      if (this["stakeCoolingDownFlag"]) return;
      if (this["currentKeyCode"] == __dependency_1["KeyCode"]['NONE']) return;
      this["currentKeyCode"] == __dependency_1["KeyCode"]['ARROW_LEFT'] ? this["setStakeStep"](-0x1, !0x1) : this['currentKeyCode'] == __dependency_1["KeyCode"]["ARROW_RIGHT"] && this["setStakeStep"](0x1, !0x1);
    }
    this["needUpdateSpin"] && (this["tmpSpinFunc"] && this["tmpSpinFunc"](), this["needUpdateSpin"] = !0x1);
  }, _0x25d5c2["onDestroy"] = function () {
    _0x2ddddb['prototype']["onDestroy"]["call"](this);
  }, _0x5720e6['getPrefabUrl'] = function () {
    return "prefabs/view/StakeBarView";
  }, _0x25d5c2['init'] = function () {
    this["setEventTouch"](), this["initStake"](), this["initStakeBar"](), this["updateIconColor"](), this["setAllInteractable"](!0x0);
  }, _0x25d5c2["initStake"] = function () {
    var _0x2b2e6f = this,
      _0x2ae7c6 = __dependency_6["default"]["stakeIndex"],
      _0x2fa3cd = __dependency_6["default"]["ratioIndex"],
      _0x577f24 = __dependency_6["default"]["getStakeVO"]({
        'stakeIndex': _0x2ae7c6,
        'ratioIndex': _0x2fa3cd
      });
    this['stakeMapSize'] = __dependency_6["default"]["totalStakeMap"]['size'], this["stakeRatio"] = this["stakeBarMask"]['getComponent'](__dependency_1["UITransform"])["height"] / this["stakeMapSize"], __dependency_6["default"]["updateStake"](_0x577f24), this["setStakeLabel"](__dependency_6["default"]['totalStake']), dispatch(__dependency_7["SlotFrameworkEvent"]["UPDATE_STAKE"], {
      'data': _0x577f24['totalStake']
    });
    var _0x484674 = this["content"]["getComponentsInChildren"](__dependency_1["Label"]),
      _0x577c87 = this["content"]["getComponentsInChildren"](__dependency_1["Sprite"]);
    []["concat"](_0x484674, _0x577c87)["forEach"](function (_0x146dcd) {
      _0x2b2e6f["stakeChildColorMap"]["set"](_0x146dcd, {
        'light': new __dependency_1['Color'](_0x146dcd['color']),
        'dark': __dependency_2["CmmUtils"]["rgbaToDarkGray"](_0x146dcd["color"])
      });
    });
  }, _0x25d5c2["initStakeBar"] = function () {
    var _0x591c73 = this["getStakeKeyIndex"]();
    this["updateBarHeight"](_0x591c73);
  }, _0x25d5c2["getStakeKeyIndex"] = function () {
    for (var _0x4ac71f, _0x3b910d = __dependency_6["default"]["totalStakeMap"], _0x5a5c17 = __dependency_6["default"]['stakeIndex'], _0x5a86a2 = __dependency_6["default"]["ratioIndex"], _0x35831b = (0, __dependency_0['createForOfIteratorHelperLoose'])(_0x3b910d); !(_0x4ac71f = _0x35831b())["done"];) {
      var _0x3c18be = _0x4ac71f["value"],
        _0x26f69f = _0x3c18be[0x0],
        _0x4eaef9 = _0x3c18be[0x1];
      if (_0x4eaef9["stakeIndex"] === _0x5a5c17 && _0x4eaef9["ratioIndex"] === _0x5a86a2) return _0x26f69f;
    }
    return -0x1;
  }, _0x25d5c2["setEventTouch"] = function () {
    var _0x56135e = this;
    this["plusHitArea"]['on'](__dependency_1['NodeEventType']["TOUCH_START"], this["stakePlusTouchStart"], this, !0x1), this['plusHitArea']['on'](__dependency_1['NodeEventType']["TOUCH_MOVE"], this["stakePlusTouchMove"], this, !0x1), this["plusHitArea"]['on'](__dependency_1['NodeEventType']['TOUCH_END'], this["stakePlusTouchEnd"], this, !0x1), this["plusHitArea"]['on'](__dependency_1['NodeEventType']["TOUCH_CANCEL"], this['stakePlusTouchCancel'], this, !0x1), this['minusHitArea']['on'](__dependency_1['NodeEventType']["TOUCH_START"], this["stakeTouchStart"], this, !0x1), this['minusHitArea']['on'](__dependency_1['NodeEventType']["TOUCH_MOVE"], this["stakeTouchMove"], this, !0x1), this['minusHitArea']['on'](__dependency_1['NodeEventType']["TOUCH_END"], this['stakeTouchEnd'], this, !0x1), this["minusHitArea"]['on'](__dependency_1['NodeEventType']['TOUCH_CANCEL'], this["stakeTouchCancel"], this, !0x1), this["bbr"]['on'](__dependency_1['NodeEventType']['TOUCH_END'], function () {
      var _0x437609 = {
        'stakeIndex': __dependency_6["default"]["stakeIndex"],
        'ratioIndex': __dependency_6["default"]["ratioIndex"]
      };
      __dependency_6["default"]["stakeMapIndex"] = __dependency_6["default"]["getStakeVO"](_0x437609)["index"], dispatch(__dependency_7["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]), _0x56135e['close']();
    }), this["onI"](__dependency_1["Input"]["EventType"]['KEY_DOWN'], function (_0x58728b) {
      if (App["uiManager"]["IsOnlyGameViewOpen"]("GameView") && null === App['gameAlert']["currentPanel"] && 0x0 == _0x56135e["isOpenMenu"]) {
        if (_0x56135e['currentTarget']) return;
        if (_0x56135e["stakeCoolingDownFlag"]) return;
        if (!_0x56135e["stakeStepInteractable"]) return;
        if (_0x56135e["currentKeyCode"] != __dependency_1["KeyCode"]['NONE']) return;
        if (_0x58728b['keyCode'] == __dependency_1["KeyCode"]["ARROW_LEFT"] || _0x58728b['keyCode'] == __dependency_1["KeyCode"]['ARROW_RIGHT']) {
          var _0x1b539d = _0x58728b['keyCode'];
          _0x56135e["currentKeyCode"] = _0x1b539d;
        }
      }
    }), this['onI'](__dependency_1["Input"]["EventType"]['KEY_UP'], function (_0x191079) {
      _0x56135e["node"]['targetOff'](_0x56135e), _0x56135e["currentTarget"] || _0x56135e["stakeCoolingDownFlag"] || _0x56135e['stakeStepInteractable'] && _0x56135e["currentKeyCode"] != __dependency_1["KeyCode"]["NONE"] && _0x56135e['currentKeyCode'] == _0x191079['keyCode'] && (_0x56135e['stakeCoolingDownFlag'] = !0x0, _0x56135e["sendSetting"](), _0x56135e["timeOutId"] = setTimeout(function () {
        _0x56135e["needUpdateSpin"] = _0x56135e["stakeCoolingDownFlag"] && _0x56135e["hasCoolingDownSpin"], _0x56135e["stakeCoolingDownFlag"] = !0x1, _0x56135e["hasCoolingDownSpin"] = !0x1, _0x56135e["stakeStepInteractable"] = !0x0, _0x56135e["currentKeyCode"] = __dependency_1["KeyCode"]['NONE'];
      }, 0x12c));
    });
  }, _0x25d5c2['stakePlusTouchStart'] = function (_0x4d715c) {
    var _0x4b6a4a = this;
    this["stakeStepInteractable"] && null == this["plusCurrentTarget"] && null == this["currentTarget"] && this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && (this["stakeCoolingDownFlag"] || (this['plusCurrentTarget'] = _0x4d715c['currentTarget'], this['isPlusTouchMove'] = !0x1, this['plusLastPosition'] = _0x4d715c['getLocation'](), this["plusHitArea"] == _0x4d715c["currentTarget"] && this["setStakeStep"](0x1), this["stakeCoolingDownFlag"] = !0x0, this["plusTimeOutId"] = setTimeout(function () {
      _0x4b6a4a["needUpdateSpin"] = _0x4b6a4a['stakeCoolingDownFlag'] && _0x4b6a4a["hasCoolingDownSpin"], _0x4b6a4a['stakeCoolingDownFlag'] = !0x1, _0x4b6a4a['hasCoolingDownSpin'] = !0x1, _0x4b6a4a["stakeStepInteractable"] = !0x0;
    }, 0x1f4)));
  }, _0x25d5c2["stakePlusTouchMove"] = function (_0x5e3355) {
    if (this['stakeStepInteractable'] && this["currentKeyCode"] == __dependency_1["KeyCode"]['NONE'] && null != this['plusCurrentTarget'] && 0x0 != _0x5e3355['getDeltaY']()) if (this['plusCurrentTarget'] != _0x5e3355["currentTarget"]) ;else {
      this["isPlusTouchMove"] = !0x0;
      var _0x2e0800 = _0x5e3355["getLocation"]();
      this["deltaPos"]['y'] = 1.25 * (this['plusLastPosition']['y'] - _0x2e0800['y']), this["plusLastPosition"] = _0x2e0800['clone']();
      var _0x41cc63 = this["stakeBar"]['getComponent'](__dependency_1["UITransform"])["height"] - this["deltaPos"]['y'];
      if (_0x41cc63 <= this["stakeBarMask"]['getComponent'](__dependency_1["UITransform"])['height'] && _0x41cc63 > 0x0) {
        this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["height"] = _0x41cc63;
        var _0x41308c = this["calculateStakeMapIndex"](this["stakeBar"]["getComponent"](__dependency_1["UITransform"])['height']),
          _0x2133c7 = __dependency_6["default"]["totalStakeMap"]["get"](_0x41308c);
        __dependency_6["default"]["updateStake"](__dependency_6["default"]["totalStakeMap"]["get"](_0x41308c)), this["updateIconColor"](), this["setStakeLabel"](_0x2133c7["totalStake"]), dispatch(__dependency_7["SlotFrameworkEvent"]["UPDATE_STAKE"], {
          'data': _0x2133c7["totalStake"]
        });
      } else if (_0x41cc63 > this['stakeBarMask']['getComponent'](__dependency_1["UITransform"])["height"]) {
        _0x41cc63 = this["stakeBarMask"]['getComponent'](__dependency_1["UITransform"])["height"], this["stakeBar"]["getComponent"](__dependency_1["UITransform"])['height'] = _0x41cc63, this["stakeBar"]['getComponent'](__dependency_1["UITransform"])['height'] = _0x41cc63;
        var _0x3a328b = this["calculateStakeMapIndex"](this['stakeBar']["getComponent"](__dependency_1["UITransform"])['height']),
          _0x22c930 = __dependency_6["default"]['totalStakeMap']["get"](_0x3a328b);
        __dependency_6["default"]["updateStake"](__dependency_6["default"]['totalStakeMap']["get"](_0x3a328b)), dispatch(__dependency_7["SlotFrameworkEvent"]["UPDATE_STAKE"], {
          'data': _0x22c930["totalStake"]
        }), this["updateIconColor"](), this["setStakeLabel"](_0x22c930["totalStake"]);
      }
    }
  }, _0x25d5c2["stakePlusTouchEnd"] = function (_0x2a84f3) {
    var _0x129463 = this;
    this["stakeStepInteractable"] && this["currentKeyCode"] == __dependency_1["KeyCode"]['NONE'] && (this["lastPosition"] = _0x2a84f3["getLocation"](), this['plusCurrentTarget'] == _0x2a84f3["currentTarget"] && (this["isPlusTouchMove"] ? (this["sendSetting"](), this['stakeCoolingDownFlag'] = !0x0, this["isPlusTouchMove"] = !0x1, this["plusCurrentTarget"] = null, this["updateBarHeight"](this["getStakeKeyIndex"]()), this["timeOutId"] = setTimeout(function () {
      _0x129463["needUpdateSpin"] = _0x129463['stakeCoolingDownFlag'] && _0x129463['hasCoolingDownSpin'], _0x129463["stakeCoolingDownFlag"] = !0x1, _0x129463['hasCoolingDownSpin'] = !0x1, _0x129463["stakeStepInteractable"] = !0x0;
    }, 0x1f4)) : this["plusCurrentTarget"] = null));
  }, _0x25d5c2["stakePlusTouchCancel"] = function (_0x265593) {
    var _0x422fb7 = this;
    this["stakeStepInteractable"] && this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && this['plusCurrentTarget'] == _0x265593["currentTarget"] && (this["isPlusTouchMove"] ? (this["sendSetting"](), this["plusCurrentTarget"] = null, this['isTouchMove'] = !0x1, this["stakeCoolingDownFlag"] = !0x0, this["timeOutId"] = setTimeout(function () {
      _0x422fb7["needUpdateSpin"] = _0x422fb7['stakeCoolingDownFlag'] && _0x422fb7["hasCoolingDownSpin"], _0x422fb7["stakeCoolingDownFlag"] = !0x1, _0x422fb7["hasCoolingDownSpin"] = !0x1;
    }, 0x1f4)) : this["plusCurrentTarget"] = null);
  }, _0x25d5c2["stakeTouchStart"] = function (_0x3dd44e) {
    var _0x4af099 = this;
    this['stakeStepInteractable'] && null == this["currentTarget"] && null == this["plusCurrentTarget"] && this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && (this["stakeCoolingDownFlag"] || (this["currentTarget"] = _0x3dd44e["currentTarget"], this["isTouchMove"] = !0x1, this["lastPosition"] = _0x3dd44e["getLocation"](), _0x3dd44e["currentTarget"] == this["minusHitArea"] && this["setStakeStep"](-0x1), this['stakeCoolingDownFlag'] = !0x0, this["timeOutId"] = setTimeout(function () {
      _0x4af099["needUpdateSpin"] = _0x4af099["stakeCoolingDownFlag"] && _0x4af099['hasCoolingDownSpin'], _0x4af099['stakeCoolingDownFlag'] = !0x1, _0x4af099["hasCoolingDownSpin"] = !0x1, _0x4af099['stakeStepInteractable'] = !0x0;
    }, 0x1f4)));
  }, _0x25d5c2["stakeTouchEnd"] = function (_0x513309, _0x221558) {
    var _0xef53fa = this;
    this["stakeStepInteractable"] && this["currentKeyCode"] == __dependency_1["KeyCode"]['NONE'] && (this["lastPosition"] = _0x513309["getLocation"](), this["minusHitArea"] == _0x513309['currentTarget'] && (this["isTouchMove"] ? (this["sendSetting"](), this["stakeCoolingDownFlag"] = !0x0, this["isTouchMove"] = !0x1, this["currentTarget"] = null, this["updateBarHeight"](this["getStakeKeyIndex"]()), this["timeOutId"] = setTimeout(function () {
      _0xef53fa["needUpdateSpin"] = _0xef53fa['stakeCoolingDownFlag'] && _0xef53fa["hasCoolingDownSpin"], _0xef53fa["stakeCoolingDownFlag"] = !0x1, _0xef53fa["hasCoolingDownSpin"] = !0x1, _0xef53fa["stakeStepInteractable"] = !0x0;
    }, 0x1f4)) : this["currentTarget"] = null));
  }, _0x25d5c2["stakeTouchCancel"] = function (_0x59fa90) {
    var _0x362009 = this;
    this["stakeStepInteractable"] && this['currentKeyCode'] == __dependency_1["KeyCode"]["NONE"] && this["minusHitArea"] == _0x59fa90['currentTarget'] && (this["isTouchMove"] ? (this["sendSetting"](), this["currentTarget"] = null, this["isTouchMove"] = !0x1, this["stakeCoolingDownFlag"] = !0x0, this["timeOutId"] = setTimeout(function () {
      _0x362009["needUpdateSpin"] = _0x362009["stakeCoolingDownFlag"] && _0x362009["hasCoolingDownSpin"], _0x362009["stakeCoolingDownFlag"] = !0x1, _0x362009["hasCoolingDownSpin"] = !0x1, _0x362009["stakeStepInteractable"] = !0x0;
    }, 0x1f4)) : this["currentTarget"] = null);
  }, _0x25d5c2['stakeTouchMove'] = function (_0x4e8f78) {
    if (this["stakeStepInteractable"] && this["currentKeyCode"] == __dependency_1["KeyCode"]["NONE"] && null != this['currentTarget'] && 0x0 != _0x4e8f78["getDelta"]()['y']) if (this["minusHitArea"] != _0x4e8f78["currentTarget"]) ;else {
      this["isTouchMove"] = !0x0;
      var _0x528a1f = _0x4e8f78['getLocation']();
      this["deltaPos"]['y'] = 1.25 * (this["lastPosition"]['y'] - _0x528a1f['y']), this["lastPosition"] = _0x528a1f['clone']();
      var _0x5ccdc4 = this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["height"] - this["deltaPos"]['y'];
      if (_0x5ccdc4 <= this["stakeBarMask"]['getComponent'](__dependency_1["UITransform"])["height"] && _0x5ccdc4 > 0x0) {
        this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["height"] = _0x5ccdc4;
        var _0x5b4a4e = this["calculateStakeMapIndex"](this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["height"]),
          _0x40d0de = __dependency_6["default"]["totalStakeMap"]["get"](_0x5b4a4e);
        __dependency_6["default"]['updateStake'](__dependency_6["default"]["totalStakeMap"]['get'](_0x5b4a4e)), this['updateIconColor'](), this["setStakeLabel"](_0x40d0de['totalStake']), dispatch(__dependency_7["SlotFrameworkEvent"]["UPDATE_STAKE"], {
          'data': _0x40d0de["totalStake"]
        });
      } else if (_0x5ccdc4 > this["stakeBarMask"]["getComponent"](__dependency_1["UITransform"])["height"]) {
        _0x5ccdc4 = this["stakeBarMask"]["getComponent"](__dependency_1["UITransform"])["height"], this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["height"] = _0x5ccdc4;
        var _0xa77873 = this["calculateStakeMapIndex"](this["stakeBar"]['getComponent'](__dependency_1["UITransform"])['height']),
          _0x3e932b = __dependency_6["default"]["totalStakeMap"]["get"](_0xa77873);
        __dependency_6["default"]["updateStake"](__dependency_6["default"]['totalStakeMap']['get'](_0xa77873)), dispatch(__dependency_7["SlotFrameworkEvent"]['UPDATE_STAKE'], {
          'data': _0x3e932b["totalStake"]
        }), this["updateIconColor"](), this["setStakeLabel"](_0x3e932b["totalStake"]);
      }
    }
  }, _0x25d5c2["calculateStakeMapIndex"] = function (_0xc5f704) {
    if (_0xc5f704 >= this["stakeBarMask"]["getComponent"](__dependency_1["UITransform"])["height"]) return this["stakeMapSize"] - 0x1;
    var _0x222783 = Math["floor"](_0xc5f704 / this['stakeRatio']);
    return Math['max'](0x0, Math["min"](_0x222783, this["stakeMapSize"] - 0x1));
  }, _0x25d5c2["setStakeStep"] = function (_0x4c1d6f, _0x1d502b) {
    if (void 0x0 === _0x1d502b && (_0x1d502b = !0x0), this["stakeStepInteractable"] && !this["stakeCoolingDownFlag"]) {
      var _0x1f0370 = this['getStakeKeyIndex']();
      if (-0x1 !== _0x1f0370) {
        var _0x3c72b2 = _0x1f0370 + _0x4c1d6f;
        if (_0x3c72b2 >= this["stakeMapSize"] ? _0x3c72b2 = this["stakeMapSize"] - 0x1 : _0x3c72b2 < 0x0 && (_0x3c72b2 = 0x0), _0x3c72b2 !== _0x1f0370 || 0x0 === _0x4c1d6f) {
          var _0x121696 = __dependency_6["default"]["totalStakeMap"]['get'](_0x3c72b2);
          _0x121696 && (__dependency_6["default"]['updateStake'](_0x121696), this["updateBarHeight"](_0x3c72b2), this['setStakeLabel'](_0x121696["totalStake"]), this['updateIconColor'](), dispatch(__dependency_7["SlotFrameworkEvent"]["UPDATE_STAKE"], {
            'data': _0x121696["totalStake"]
          }), _0x1d502b && this['sendSetting']());
        }
      }
    }
  }, _0x25d5c2["updateBarHeight"] = function (_0xbbed5e) {
    var _0xaf824c = this["stakeBar"]["getComponent"](__dependency_1["UITransform"]),
      _0x1eac5f = this["stakeBarMask"]["getComponent"](__dependency_1["UITransform"])["height"];
    _0xbbed5e <= 0x0 ? _0xaf824c["height"] = 0x0 : _0xbbed5e >= this['stakeMapSize'] - 0x1 ? _0xaf824c["height"] = _0x1eac5f : _0xaf824c["height"] = (_0xbbed5e + 0x1) * this["stakeRatio"];
  }, _0x25d5c2["sendSetting"] = function () {
    var _0x451444 = __dependency_6["default"]['getData'](),
      _0x3e0a26 = {
        'type': "game",
        'data': {
          'stakeIndex': _0x451444['stakeIndex'],
          'ratioIndex': _0x451444["ratioIndex"]
        }
      };
    dispatch(__dependency_7["SlotFrameworkEvent"]["SEND_SETTING_REQUEST"], _0x3e0a26);
  }, _0x25d5c2["setStakeLabel"] = function (_0x19bec3) {
    var _0x2cd044 = _0x19bec3["toString"](),
      _0x5eeefa = _0x2cd044['split']('.')[0x0],
      _0x5d2612 = _0x2cd044["split"]('.')[0x1],
      _0x50ecc2 = __dependency_8['default']["getData"]()["digital"];
    null != _0x5d2612 ? (_0x5d2612 = _0x5d2612["substring"](0x0, _0x50ecc2), _0x2cd044 = _0x50ecc2 > 0x0 ? _0x5eeefa + '.' + _0x5d2612 : _0x5eeefa) : _0x2cd044 = _0x19bec3 >= 0x2710 ? __dependency_2["CmmUtils"]["formatNumStr"](_0x19bec3) : '' + _0x19bec3, this["stake"]["string"] = _0x2cd044;
  }, _0x25d5c2["setStakeColor"] = function (_0x427001) {
    this['stakeChildColorMap']["forEach"](function (_0x4f5855, _0xa05471) {
      _0xa05471["color"] = _0x427001 ? _0x4f5855["light"] : _0x4f5855["dark"];
    });
  }, _0x25d5c2['setAllInteractable'] = function (_0x259075) {
    this["stakeStepInteractable"] = _0x259075, this["setStakeColor"](_0x259075);
  }, _0x25d5c2["updateIconColor"] = function () {
    var _0x3b5059 = {
      'full': new __dependency_1['Color']("#FFFFFF"),
      'white': new __dependency_1['Color']('#FFFFFF')
    };
    this["stake"]["getComponent"](__dependency_1["Label"])['color'] = this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["height"] > 0xa0 ? _0x3b5059["white"] : _0x3b5059['full'], this["plusBtn"]["getComponent"](__dependency_1["Sprite"])["color"] = this["stakeBar"]["getComponent"](__dependency_1["UITransform"])["height"] > 0x122 ? _0x3b5059["white"] : _0x3b5059["full"], this["minusBtn"]["getComponent"](__dependency_1["Sprite"])["color"] = this["stakeBar"]["getComponent"](__dependency_1["UITransform"])['height'] > 0x28 ? _0x3b5059['white'] : _0x3b5059["full"];
  }, _0x25d5c2["reset"] = function () {}, _0x25d5c2["setData"] = function (_0x5bf98a) {}, _0x25d5c2['show'] = function () {
    this['node']['active'] = !0x0;
  }, _0x25d5c2['hide'] = function () {
    this["node"]['active'] = !0x1;
  }, _0x25d5c2["addEvents"] = function () {
    var _0x62eddb = this;
    _0x2ddddb["prototype"]['addEvents']["call"](this), this['on'](__dependency_7["SlotFrameworkEvent"]["UPDATE_SPIN_STATUS"], function (_0x24c503) {
      var _0x1a87bb = _0x24c503["data"],
        _0x593653 = __dependency_9["ESpinStatus"]['SPINING'] === _0x1a87bb;
      _0x62eddb["spinStatus"] = _0x1a87bb, _0x62eddb["setAllInteractable"](!_0x593653);
    });
  }, (0, __dependency_0["createClass"])(_0x5720e6, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_5['default']);
    }
  }]), _0x5720e6;
}(__dependency_3["default"]))["prototype"], 'bbr', [_0x93cbd9], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x405c1c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61["prototype"], "content", [_0x2d753f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x177f9b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61["prototype"], 'stakeBarMask', [_0x51a381], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x7dce2b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61["prototype"], "stakeBar", [_0x2c07d1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4c16d4 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61["prototype"], "plusHitArea", [_0x3a37b8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3e9860 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61['prototype'], "minusHitArea", [_0x3792b0], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1f4cfd = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61["prototype"], "stake", [_0x4e0d9a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x18dac1 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61["prototype"], "plusBtn", [_0x3fd00f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x45efea = (0, __dependency_0["applyDecoratedDescriptor"])(_0x40da61['prototype'], 'minusBtn', [_0x4de7cc], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3ea3a6 = _0x40da61)) || _0x3ea3a6));
__dependency_1["cclegacy"]["_RF"]["pop"]();
