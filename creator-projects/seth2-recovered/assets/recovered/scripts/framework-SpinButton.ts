// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SpinButton.ts.js
// SHA256: 509d795a5192b68774c7f1be99b80609f509fe2886edd9510a7e38e31e4281ee
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-AutoPlayModel";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./framework-type2";
var __export_0;
export { __export_0 as AutoPlayOption };
var __export_1;
export { __export_1 as SpinButton };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "AutoPlayOption":
      __export_0 = value;
      break;
    case "SpinButton":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x1c810e) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x5e259e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x3c062f) {
  void 0;
})(__dependency_2);
(function (_0x2dafca) {
  void 0;
})(__dependency_3);
(function (_0x49b443) {
  void 0;
})(__dependency_4);
(function (_0x515688) {
  void 0;
})(__dependency_5);
(function (_0x142162) {
  void 0;
})(__dependency_6);
(function (_0x4dd8cc) {
  void 0;
})(__dependency_7);
var _0x7a64dc, _0x1245bf, _0x41cede, _0x3ac6de, _0x33306e, _0x2d1270, _0x2ef8bf, _0x23a462, _0x5db391, _0x5a8708, _0x28f918;
__publish("AutoPlayOption", void 0x0), __dependency_1['cclegacy']["_RF"]["push"]({}, "7f25dXUMy5Drp+CtXSwPjLU", "SpinButton", void 0x0);
var _0x1a2d4e,
  _0x241987,
  _0x506f5a = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"];
!function (_0x5449c9) {
  _0x5449c9["HOVER"] = 'hover', _0x5449c9['RELEASED'] = "released", _0x5449c9["NORMAL"] = "normal", _0x5449c9['PRESSED'] = "pressed", _0x5449c9["DISABLED"] = "disabled";
}(_0x1a2d4e || (_0x1a2d4e = {})), function (_0x190353) {
  _0x190353[_0x190353['INFINITY'] = -0x1] = "INFINITY", _0x190353[_0x190353["ADVANCED"] = 0x0] = "ADVANCED";
}(_0x241987 || (_0x241987 = __publish('AutoPlayOption', {})));
__publish("SpinButton", (_0x7a64dc = _0x506f5a("SpinButton"), _0x1245bf = (0, __dependency_4["inject"])('Button', __dependency_1["Node"]), _0x41cede = (0, __dependency_4["inject"])('Button/text', __dependency_1["Node"]), _0x3ac6de = (0, __dependency_4["inject"])('spine', __dependency_1["Node"]), _0x33306e = (0, __dependency_4["inject"])("arrow", __dependency_1["Node"]), _0x7a64dc((_0x23a462 = (0, __dependency_0['applyDecoratedDescriptor'])((_0x2ef8bf = function (_0x3a897f) {
  function _0x1e8ca3() {
    for (var _0x548de4, _0x294c4e = arguments["length"], _0x188df2 = new Array(_0x294c4e), _0x4d6575 = 0x0; _0x4d6575 < _0x294c4e; _0x4d6575++) _0x188df2[_0x4d6575] = arguments[_0x4d6575];
    return _0x548de4 = Reflect.construct(_0x3a897f, [this]["concat"](_0x188df2).slice(1), new.target || _0x1e8ca3) || this, (0, __dependency_0["initializerDefineProperty"])(_0x548de4, "button", _0x23a462, (0, __dependency_0["assertThisInitialized"])(_0x548de4)), (0, __dependency_0["initializerDefineProperty"])(_0x548de4, "text", _0x5db391, (0, __dependency_0["assertThisInitialized"])(_0x548de4)), (0, __dependency_0["initializerDefineProperty"])(_0x548de4, "spine", _0x5a8708, (0, __dependency_0["assertThisInitialized"])(_0x548de4)), (0, __dependency_0["initializerDefineProperty"])(_0x548de4, "arrow", _0x28f918, (0, __dependency_0["assertThisInitialized"])(_0x548de4)), _0x548de4["BASE_SPEED"] = 0x64, _0x548de4["HIGH_SPEED"] = 0x1f4, _0x548de4["arrowSpriteMap"] = new Map(), _0x548de4["speed"] = _0x548de4["BASE_SPEED"], _0x548de4["arrowAngle"] = 0x0, _0x548de4["timeout"] = void 0x0, _0x548de4;
  }
  (0, __dependency_0["inheritsLoose"])(_0x1e8ca3, _0x3a897f);
  var _0xca315a = _0x1e8ca3["prototype"];
  return _0xca315a['onLoad'] = function () {
    _0x3a897f['prototype']["onLoad"]['call'](this);
  }, _0xca315a["start"] = function () {}, _0xca315a["onDestroy"] = function () {
    _0x3a897f["prototype"]["onDestroy"]["call"](this);
  }, _0xca315a["update"] = function (_0xc0f277) {
    this["arrow"]["angle"] = this['arrowAngle'] -= this["speed"] * _0xc0f277, this["arrowAngle"] < -0x168 && (this["arrowAngle"] = 0x0);
  }, _0xca315a["setEventTouch"] = function () {
    var _0x307389 = this;
    this['button']['on'](__dependency_1["NodeEventType"]['TOUCH_START'], function () {
      _0x307389["button"]["getComponent"](__dependency_1["Button"])["interactable"] && (_0x307389["setArrowSprite"](__dependency_7["EBtnStatus"]["PRESSED"]), _0x307389['setAnimation'](_0x1a2d4e["PRESSED"]));
    }), this["button"]['on'](__dependency_1["NodeEventType"]["TOUCH_CANCEL"], function () {
      _0x307389['button']["getComponent"](__dependency_1["Button"])["interactable"] && (_0x307389["setArrowSprite"](__dependency_7["EBtnStatus"]["NORMAL"]), _0x307389["setAnimation"](_0x1a2d4e['NORMAL'], !0x0));
    }), this['button']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x307389["button"]['getComponent'](__dependency_1["Button"])['interactable'] && (_0x307389["setArrowSprite"](__dependency_7["EBtnStatus"]['NORMAL']), _0x307389["setAnimation"](_0x1a2d4e["NORMAL"], !0x0));
    }), this['button']['on'](__dependency_1["NodeEventType"]["MOUSE_ENTER"], function () {
      _0x307389["button"]["getComponent"](__dependency_1["Button"])["interactable"] && (_0x307389['setArrowSprite'](__dependency_7["EBtnStatus"]["HOVER"]), _0x307389["setAnimation"](_0x1a2d4e["HOVER"]));
    }), this['button']['on'](__dependency_1["NodeEventType"]["MOUSE_LEAVE"], function () {
      _0x307389["button"]["getComponent"](__dependency_1["Button"])["interactable"] && (_0x307389["setArrowSprite"](__dependency_7["EBtnStatus"]["NORMAL"]), _0x307389["setAnimation"](_0x1a2d4e["NORMAL"], !0x0));
    });
  }, _0xca315a["setAnimation"] = function (_0x49b0a0, _0x49a623, _0x345f66) {
    void 0x0 === _0x49a623 && (_0x49a623 = !0x1);
    var _0x2125be = this["spine"]["getComponent"](__dependency_1['sp']["Skeleton"]);
    _0x2125be['setAnimation'](0x0, _0x49b0a0, _0x49a623), _0x2125be["setCompleteListener"](function () {
      _0x345f66 && _0x345f66();
    });
  }, _0xca315a["playSpineReleasedAnim"] = function () {
    var _0x45da3d = this;
    this['setAnimation'](_0x1a2d4e["RELEASED"], !0x1, function () {
      _0x45da3d["setAnimation"](_0x1a2d4e['NORMAL']);
    });
  }, _0xca315a["setButton"] = function (_0x59fa0a, _0x1cc495) {
    var _0x584360 = this["button"]["getComponent"](__dependency_1["Button"]);
    if (_0x584360["normalSprite"] = null, _0x584360['pressedSprite'] = null, _0x584360["hoverSprite"] = null, _0x584360["disabledSprite"] = null, _0x1cc495) {
      var _0x11b6df = this["button"]["getComponent"](__dependency_1["Sprite"]),
        _0x1b8899 = this["button"]["getComponent"](__dependency_1['UITransform']);
      if (this["button"]) switch (_0x584360["transition"] = _0x59fa0a, _0x59fa0a) {
        case __dependency_1["Button"]["Transition"]['NONE']:
          break;
        case __dependency_1["Button"]["Transition"]["COLOR"]:
          var _0x548744 = _0x1cc495,
            _0x165a28 = _0x548744["normal"],
            _0x438791 = _0x548744['pressed'],
            _0x47dd6c = _0x548744["hover"],
            _0x201d8a = _0x548744["disabled"],
            _0x190c0f = _0x548744["bgSprite"];
          _0x584360["normalColor"] = new __dependency_1["Color"](_0x165a28), _0x584360["pressedColor"] = new __dependency_1["Color"](_0x438791), _0x584360["hoverColor"] = new __dependency_1["Color"](_0x47dd6c), _0x584360["disabledColor"] = new __dependency_1["Color"](_0x201d8a), _0x11b6df["spriteFrame"] = _0x190c0f, _0x1b8899["setContentSize"](_0x190c0f["width"], _0x190c0f["height"]);
          break;
        case __dependency_1["Button"]["Transition"]["SPRITE"]:
          var _0x115377 = _0x1cc495,
            _0x18cfe7 = _0x115377["normal"],
            _0x13b017 = _0x115377["pressed"],
            _0x11374f = _0x115377["hover"],
            _0x2421df = _0x115377["disabled"];
          _0x584360["normalSprite"] = _0x18cfe7, _0x584360["pressedSprite"] = _0x13b017, _0x584360["hoverSprite"] = _0x11374f, _0x584360["disabledSprite"] = _0x2421df, _0x1b8899["setContentSize"](_0x18cfe7['originalSize']["width"], _0x18cfe7["originalSize"]["height"]);
          break;
        case __dependency_1["Button"]["Transition"]["SCALE"]:
          var _0x2b4629 = _0x1cc495,
            _0x332fa4 = _0x2b4629["zoomScale"],
            _0x44764c = _0x2b4629["duration"];
          _0x584360['zoomScale'] = _0x332fa4, _0x584360["duration"] = _0x44764c;
      } else Log['e']("Button not found");
    }
  }, _0xca315a["setArrow"] = function (_0x2a2842) {
    if (_0x2a2842) {
      var _0x264a38 = this['arrow']['getComponent'](__dependency_1['UITransform']),
        _0x40e917 = _0x2a2842["normal"],
        _0x669f66 = _0x2a2842["pressed"],
        _0x520f97 = _0x2a2842["hover"],
        _0x1cf00b = _0x2a2842["disabled"];
      this["arrowSpriteMap"]["set"](__dependency_7["EBtnStatus"]['NORMAL'], _0x40e917), this["arrowSpriteMap"]["set"](__dependency_7["EBtnStatus"]["PRESSED"], _0x669f66), this["arrowSpriteMap"]["set"](__dependency_7["EBtnStatus"]["HOVER"], _0x520f97), this["arrowSpriteMap"]["set"](__dependency_7["EBtnStatus"]["DISABLED"], _0x1cf00b), this["setArrowSprite"](__dependency_7["EBtnStatus"]["NORMAL"]), this["setAnimation"](_0x1a2d4e["NORMAL"]), _0x264a38["setContentSize"](_0x40e917["originalSize"]['width'], _0x40e917["originalSize"]["height"]);
    }
  }, _0xca315a["setArrowSprite"] = function (_0x304de4) {
    this["arrow"]["getComponent"](__dependency_1["Sprite"])["spriteFrame"] = this['arrowSpriteMap']["get"](_0x304de4);
  }, _0xca315a["speedUp"] = function () {
    var _0x10a6d1 = this;
    this["timeout"] && clearTimeout(this['timeout']), this["speed"] = this["HIGH_SPEED"], this['timeout'] = setTimeout(function () {
      _0x10a6d1['speed'] = _0x10a6d1["BASE_SPEED"];
    }, 0x320);
  }, _0xca315a["init"] = function () {
    this['setEventTouch']();
  }, _0xca315a['setData'] = function (_0x2be047, _0x396d07, _0x2e5a77, _0x1debdf, _0x7c8d9) {
    void 0x0 === _0x7c8d9 && (_0x7c8d9 = 0x1);
    var _0x150955 = this["spine"]["getComponent"](__dependency_1['sp']["Skeleton"]);
    this["spine"]['setScale']((0, __dependency_1['v3'])(_0x7c8d9, _0x7c8d9, 0x0)), _0x150955["skeletonData"] = _0x2be047, _0x150955["setAnimation"](0x0, _0x1a2d4e["NORMAL"], !0x1), this["setButton"](__dependency_1["Button"]["Transition"]["SPRITE"], _0x396d07), this["setArrow"](_0x2e5a77), this["setArtFont"](_0x1debdf);
  }, _0xca315a["setArtFont"] = function (_0x213c4b) {
    if (_0x213c4b) {
      var _0x28b796 = _0x213c4b["font"],
        _0x279955 = _0x213c4b["fontSize"],
        _0x4e8b65 = _0x213c4b['fontPos'],
        _0x5b825b = _0x213c4b["fontSpacingX"],
        _0x2a0673 = this["text"]["getComponent"](__dependency_1["Label"]);
      _0x2a0673["font"] = _0x28b796, _0x2a0673["fontSize"] = _0x279955, _0x2a0673["lineHeight"] = _0x279955, _0x5b825b && (_0x2a0673["spacingX"] = _0x5b825b), this["text"]["setPosition"](_0x4e8b65);
    }
  }, _0xca315a["setColor"] = function (_0x1190dd) {
    this['button']["getComponent"](__dependency_1["Sprite"])["color"] = new __dependency_1["Color"](_0x1190dd);
  }, _0xca315a["setLabel"] = function (_0x45cfae, _0x3f4c2d) {
    var _0x10bbc3 = this["text"]['getComponent'](__dependency_1["Label"]);
    _0x10bbc3['string'] = _0x45cfae, void 0x0 !== (null == _0x3f4c2d ? void 0x0 : _0x3f4c2d["fontSize"]) && (_0x10bbc3['fontSize'] = _0x3f4c2d["fontSize"]), void 0x0 !== (null == _0x3f4c2d ? void 0x0 : _0x3f4c2d["fontSize"]) && (_0x10bbc3["lineHeight"] = _0x3f4c2d["fontSize"]), void 0x0 !== (null == _0x3f4c2d ? void 0x0 : _0x3f4c2d["fontSize"]) && (_0x10bbc3["fontSize"] = _0x3f4c2d["fontSize"], _0x10bbc3["lineHeight"] = _0x3f4c2d['fontSize'], this['text']["getComponent"](__dependency_1['UITransform'])["height"] = _0x3f4c2d['fontSize']), void 0x0 !== (null == _0x3f4c2d ? void 0x0 : _0x3f4c2d["active"]) && (this["text"]["active"] = _0x3f4c2d["active"]);
  }, _0xca315a['reset'] = function () {}, _0xca315a["show"] = function () {
    this["node"]["active"] = !0x0;
  }, _0xca315a["hide"] = function () {
    this["node"]['active'] = !0x1;
  }, _0xca315a["labelActive"] = function (_0x346fb7) {
    this["text"]["active"] = _0x346fb7;
  }, _0xca315a['setInteractable'] = function (_0x59f62d) {
    var _0x3b3ed0 = _0x59f62d ? _0x1a2d4e["NORMAL"] : _0x1a2d4e['DISABLED'];
    this["button"]['getComponent'](__dependency_1["Button"])["interactable"] = _0x59f62d, this["setArrowSprite"](_0x59f62d ? __dependency_7["EBtnStatus"]["NORMAL"] : __dependency_7["EBtnStatus"]['DISABLED']), this["setAnimation"](_0x3b3ed0, _0x59f62d);
  }, _0xca315a["addClickEvent"] = function (_0x23b6ae) {
    __dependency_2['CmmUtils']["addBtnClickEvent"](this["button"], function () {
      _0x23b6ae && _0x23b6ae();
    });
  }, _0xca315a['syncArrowAngle'] = function (_0x5afb1c) {
    this["arrowAngle"] = _0x5afb1c, this["arrow"]["angle"] = _0x5afb1c;
  }, _0xca315a['addEvents'] = function () {
    var _0x1c5a29 = this;
    _0x3a897f["prototype"]["addEvents"]['call'](this), this['on'](__dependency_6["SlotFrameworkEvent"]['SET_AUTO_SPIN_COUNT'], function (_0x373f8d) {
      var _0x55d5af = _0x373f8d["data"];
      if (_0x55d5af > _0x241987["INFINITY"]) {
        var _0x1cd51c = _0x55d5af;
        _0x1cd51c = -0x1 === _0x1cd51c ? 0x0 : _0x1cd51c, _0x1c5a29['setLabel']('' + _0x1cd51c, {
          'active': !0x0
        });
      } else _0x1c5a29['setLabel']('∞', {
        'active': !0x0
      });
      __dependency_5['default']["active"] || _0x1c5a29['setLabel']('', {
        'active': !0x1
      });
    }), this['on'](__dependency_6["SlotFrameworkEvent"]["PLAY_SPIN_BTN_RELEASED_ANIM"], function () {
      _0x1c5a29["playSpineReleasedAnim"](), _0x1c5a29['speedUp']();
    });
  }, _0x1e8ca3;
}(__dependency_3["default"]))["prototype"], 'button', [_0x1245bf], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5db391 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x2ef8bf["prototype"], "text", [_0x41cede], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5a8708 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x2ef8bf["prototype"], "spine", [_0x3ac6de], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x28f918 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x2ef8bf['prototype'], "arrow", [_0x33306e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2d1270 = _0x2ef8bf)) || _0x2d1270));
__dependency_1['cclegacy']["_RF"]["pop"]();
