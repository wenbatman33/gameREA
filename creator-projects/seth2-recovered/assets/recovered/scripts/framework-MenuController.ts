// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-MenuController.ts.js
// SHA256: 6b920b979fb5cfa65bdbb1ce2a3b948fb7c8dfe09cfe987b9f6c23af7f63dccb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-CmmUtils";
import * as __dependency_5 from "./main-EventComponent";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-SlotFrameworkEvent";
import * as __dependency_9 from "./framework-DefinitionModel";
import * as __dependency_10 from "./framework-InitialModel";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./framework-CmmSlotUtils";
import * as __dependency_13 from "./framework-GameRulesView";
import * as __dependency_14 from "./framework-GameRulesViewP";
import * as __dependency_15 from "./framework-RankingViewL";
import * as __dependency_16 from "./framework-RankingViewP";
import * as __dependency_17 from "./framework-RecordViewL";
import * as __dependency_18 from "./framework-RecordViewP";
import * as __dependency_19 from "./framework-SettingView";
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
(function (_0x35bb1f) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x2212fb) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x1706e3) {
  void 0;
})(__dependency_2);
(function (_0x5b32c7) {
  void 0;
})(__dependency_3);
(function (_0x44b981) {
  void 0;
})(__dependency_4);
(function (_0x154aec) {
  void 0;
})(__dependency_5);
(function (_0x409da2) {
  void 0;
})(__dependency_6);
(function (_0x2c536f) {
  void 0;
})(__dependency_7);
(function (_0x14ce41) {
  void 0;
})(__dependency_8);
(function (_0x58ed56) {
  void 0;
})(__dependency_9);
(function (_0x5967bb) {
  void 0;
})(__dependency_10);
(function (_0x4d33f9) {
  void 0;
})(__dependency_11);
(function (_0x34c9da) {
  void 0;
})(__dependency_12);
(function (_0xc32dd9) {
  void 0;
})(__dependency_13);
(function (_0x5ac38e) {
  void 0;
})(__dependency_14);
(function (_0x5dff9c) {
  void 0;
})(__dependency_15);
(function (_0x498f4b) {
  void 0;
})(__dependency_16);
(function (_0x1e68db) {
  void 0;
})(__dependency_17);
(function (_0x3e927e) {
  void 0;
})(__dependency_18);
(function (_0x29e854) {
  void 0;
})(__dependency_19);
var _0x27dac4, _0x7a98d, _0x1ffa6f, _0x40f133, _0x4180b7, _0x274f10, _0x2b430a, _0x4e8c22, _0x1800a9, _0xcd9d56, _0x59e27b, _0x4a301d, _0x8b3b41, _0x9617e2, _0x1b0d22, _0xcc02bb, _0x50e561;
__dependency_1['cclegacy']["_RF"]["push"]({}, '102d1FVVGRDrYLJ53fDffdO', "MenuController", void 0x0);
var _0x2419eb = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']["property"], __publish('default', (_0x27dac4 = _0x2419eb('MenuController'), _0x7a98d = (0, __dependency_6["inject"])("content", __dependency_1["Node"]), _0x1ffa6f = (0, __dependency_6["inject"])("content/layout/ruleBtn", __dependency_1["Node"]), _0x40f133 = (0, __dependency_6["inject"])("content/layout/recordBtn", __dependency_1["Node"]), _0x4180b7 = (0, __dependency_6["inject"])("content/layout/rankingBtn", __dependency_1["Node"]), _0x274f10 = (0, __dependency_6["inject"])("content/layout/settingBtn", __dependency_1["Node"]), _0x2b430a = (0, __dependency_6["inject"])("content/layout/exitBtn", __dependency_1["Node"]), _0x4e8c22 = (0, __dependency_6["inject"])("bbr", __dependency_1["Node"]), _0x27dac4((_0x59e27b = (0, __dependency_0["applyDecoratedDescriptor"])((_0xcd9d56 = function (_0x1c6755) {
  function _0x4af463() {
    for (var _0x7e88f5, _0x50e9ab = arguments["length"], _0xf45b5a = new Array(_0x50e9ab), _0x373a5e = 0x0; _0x373a5e < _0x50e9ab; _0x373a5e++) _0xf45b5a[_0x373a5e] = arguments[_0x373a5e];
    return _0x7e88f5 = Reflect.construct(_0x1c6755, [this]["concat"](_0xf45b5a).slice(1), new.target || _0x4af463) || this, (0, __dependency_0["initializerDefineProperty"])(_0x7e88f5, 'content', _0x59e27b, (0, __dependency_0["assertThisInitialized"])(_0x7e88f5)), (0, __dependency_0["initializerDefineProperty"])(_0x7e88f5, "ruleBtn", _0x4a301d, (0, __dependency_0["assertThisInitialized"])(_0x7e88f5)), (0, __dependency_0["initializerDefineProperty"])(_0x7e88f5, "recordBtn", _0x8b3b41, (0, __dependency_0["assertThisInitialized"])(_0x7e88f5)), (0, __dependency_0["initializerDefineProperty"])(_0x7e88f5, "rankingBtn", _0x9617e2, (0, __dependency_0["assertThisInitialized"])(_0x7e88f5)), (0, __dependency_0["initializerDefineProperty"])(_0x7e88f5, "settingBtn", _0x1b0d22, (0, __dependency_0["assertThisInitialized"])(_0x7e88f5)), (0, __dependency_0["initializerDefineProperty"])(_0x7e88f5, "exitBtn", _0xcc02bb, (0, __dependency_0["assertThisInitialized"])(_0x7e88f5)), (0, __dependency_0["initializerDefineProperty"])(_0x7e88f5, "bbr", _0x50e561, (0, __dependency_0["assertThisInitialized"])(_0x7e88f5)), _0x7e88f5["isShow"] = !0x1, _0x7e88f5['ruleAssets'] = null, _0x7e88f5["restPos"] = null, _0x7e88f5;
  }
  (0, __dependency_0["inheritsLoose"])(_0x4af463, _0x1c6755);
  var _0x44b07f = _0x4af463["prototype"];
  return _0x44b07f["onLoad"] = function () {
    _0x1c6755["prototype"]["onLoad"]["call"](this), this["restPos"] = this['content']["position"]['clone'](), this['setEventTouch']();
  }, _0x44b07f["start"] = function () {
    this["init"]();
  }, _0x44b07f["onDestroy"] = function () {
    _0x1c6755["prototype"]['onDestroy']["call"](this);
  }, _0x44b07f['init'] = function () {
    this["isShow"] = !0x1, this["content"]["active"] = !0x1, this["initRankListBtn"]();
  }, _0x44b07f["showMenu"] = function () {
    var _0x3b030c = this;
    __dependency_1["Tween"]['stopAllByTarget'](this["content"]);
    var _0x5c765a = this["content"]["getComponent"](__dependency_1["UITransform"]),
      _0x41013b = this["restPos"]['clone'](),
      _0x98f304 = (0, __dependency_1['v3'])(_0x41013b['x'] + _0x5c765a["width"], _0x41013b['y']),
      _0x14ebdd = this["content"]["getComponent"](__dependency_1["UIOpacity"]);
    this["bbr"]["getComponent"](__dependency_1["Button"])["interactable"] = !0x1, _0x14ebdd["opacity"] = 0x0, this["content"]["active"] = !0x0, dispatch(__dependency_8["SlotFrameworkEvent"]["VIEW_SHOW_MENU"]), (0, __dependency_1['tween'])(this["content"])["delay"](0.1)["set"]({
      'position': _0x98f304
    })['to'](0.2, {
      'position': _0x41013b
    }, {
      'onStart': function () {
        _0x3b030c["scheduleOnce"](function () {
          _0x3b030c["bbr"]["active"] = !0x0;
        }, 0.05), _0x14ebdd['opacity'] = 0xff, _0x3b030c['bbr']["getComponent"](__dependency_1["Button"])["interactable"] = !0x1;
      },
      'onComplete': function () {
        _0x3b030c["scheduleOnce"](function () {
          _0x3b030c["bbr"]['getComponent'](__dependency_1["Button"])["interactable"] = !0x0;
        }, 0.05), _0x3b030c["isShow"] = !0x0;
      }
    })["start"]();
  }, _0x44b07f['hideMenu'] = function () {
    var _0x26db24 = this;
    __dependency_1["Tween"]["stopAllByTarget"](this["content"]);
    var _0x47972b = this["restPos"]['clone'](),
      _0x102771 = this['content']['getComponent'](__dependency_1["UITransform"]),
      _0x358618 = (0, __dependency_1['v3'])(_0x47972b['x'] + _0x102771["width"], _0x47972b['y']),
      _0x407d0c = this["content"]["getComponent"](__dependency_1["UIOpacity"]);
    dispatch(__dependency_8["SlotFrameworkEvent"]["VIEW_HIDE_MENU"]), (0, __dependency_1['tween'])(this["content"])['to'](0.2, {
      'position': _0x358618
    }, {
      'onStart': function () {
        _0x26db24["bbr"]['getComponent'](__dependency_1["Button"])["interactable"] = !0x1;
      },
      'onComplete': function () {
        _0x26db24["scheduleOnce"](function () {
          _0x26db24["bbr"]["getComponent"](__dependency_1["Button"])["interactable"] = !0x0;
        }, 0.05), _0x26db24["content"]['position'] = _0x26db24['restPos']["clone"](), _0x26db24['content']["active"] = !0x1, _0x407d0c["opacity"] = 0x0, _0x26db24["bbr"]["active"] = !0x1, _0x26db24["isShow"] = !0x1;
      }
    })["start"]();
  }, _0x44b07f['closeMenu'] = function () {
    dispatch(__dependency_8["SlotFrameworkEvent"]["VIEW_HIDE_MENU"]), __dependency_1["Tween"]["stopAllByTarget"](this['content']);
    var _0x285c80 = this["content"]["getComponent"](__dependency_1["UIOpacity"]);
    this['content']["position"] = this["restPos"]["clone"](), this["content"]["active"] = !0x1, _0x285c80["opacity"] = 0x0, this["bbr"]["active"] = !0x1, this["isShow"] = !0x1;
  }, _0x44b07f["setEventTouch"] = function () {
    var _0x284d1d = this;
    this['ruleBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      var _0x2b1166 = __dependency_12['CmmSlotUtils']["getOrientationTarget"](__dependency_13["default"], __dependency_14["default"]);
      _0x284d1d["hideMenu"](), App["uiManager"]['open']({
        'type': _0x2b1166,
        'bundle': __dependency_3['EBundles'][__dependency_3['EBundles']['slotFramework']],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "遊戲說明",
        'args': _0x284d1d['ruleAssets']
      }), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }), this['recordBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      var _0x26b303 = __dependency_12['CmmSlotUtils']["getOrientationTarget"](__dependency_17["default"], __dependency_18["default"]);
      _0x284d1d["hideMenu"](), App["uiManager"]["open"]({
        'type': _0x26b303,
        'bundle': __dependency_3['EBundles'][__dependency_3['EBundles']["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "押注紀錄"
      }), dispatch(__dependency_8["SlotFrameworkEvent"]['PLAY_CLICK_BTM']);
    }), this["rankingBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      var _0x195b17 = __dependency_12['CmmSlotUtils']["getOrientationTarget"](__dependency_15["default"], __dependency_16['default']);
      _0x284d1d["hideMenu"](), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]), App["uiManager"]["open"]({
        'type': _0x195b17,
        'bundle': __dependency_3['EBundles'][__dependency_3['EBundles']["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "排行榜"
      });
    }), this['settingBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x284d1d["hideMenu"](), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]), App["uiManager"]['open']({
        'type': __dependency_19["default"],
        'bundle': __dependency_3['EBundles'][__dependency_3['EBundles']["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "設定頁"
      });
    }), __dependency_4["CmmUtils"]['addBtnClickEvent'](this["exitBtn"], function () {
      dispatch(__dependency_8["SlotFrameworkEvent"]["SHOW_EXIT_ALERT"]), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["bbr"], function () {
      _0x284d1d["hideMenu"](), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
    }), this['on'](__dependency_8["SlotFrameworkEvent"]["VIEW_CLOSE_MENU"], function () {
      _0x284d1d["closeMenu"]();
    });
  }, _0x44b07f["checkDisableRecordBtn"] = function () {
    var _0x1da5e4, _0x1e3df0;
    (null != (_0x1da5e4 = null == (_0x1e3df0 = __dependency_10["default"]["getData"]()) ? void 0x0 : _0x1e3df0["engine"]["definition"]["isDemo"]) ? _0x1da5e4 : __dependency_9["default"]["getData"]()['isDemo']) && "xin-star" == __dependency_11["default"]["getData"]()["theme"] && (this["recordBtn"]['active'] = !0x1);
  }, _0x44b07f["checkDisableExitBtn"] = function () {
    "xin-star" == __dependency_11["default"]['getData']()["theme"] && (this["exitBtn"]["active"] = !0x1);
  }, _0x44b07f['initRankListBtn'] = function () {
    if (this["slotData"]['getData']()["isForceHideRankBtn"]) this["rankingBtn"]["active"] = !0x1;else {
      var _0x5ca577 = __dependency_11["default"]["getData"]()['slotRankOn'];
      this["rankingBtn"]["active"] = _0x5ca577;
    }
  }, _0x44b07f["setRuleAssets"] = function (_0x76153a) {
    this['ruleAssets'] = _0x76153a;
  }, _0x44b07f["addEvents"] = function () {
    var _0x3b5fae = this;
    _0x1c6755['prototype']['addEvents']["call"](this), this['on'](__dependency_8["SlotFrameworkEvent"]["SHOW_MENU"], function () {
      _0x3b5fae["isShow"] = !_0x3b5fae["isShow"], _0x3b5fae["checkDisableRecordBtn"](), _0x3b5fae["checkDisableExitBtn"](), _0x3b5fae["isShow"] ? _0x3b5fae['showMenu']() : _0x3b5fae["hideMenu"]();
    });
  }, (0, __dependency_0["createClass"])(_0x4af463, [{
    'key': "slotData",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_7["default"]);
    }
  }]), _0x4af463;
}(__dependency_5["default"]))["prototype"], 'content', [_0x7a98d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4a301d = (0, __dependency_0["applyDecoratedDescriptor"])(_0xcd9d56['prototype'], "ruleBtn", [_0x1ffa6f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x8b3b41 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xcd9d56["prototype"], "recordBtn", [_0x40f133], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x9617e2 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xcd9d56["prototype"], "rankingBtn", [_0x4180b7], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1b0d22 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xcd9d56["prototype"], "settingBtn", [_0x274f10], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xcc02bb = (0, __dependency_0["applyDecoratedDescriptor"])(_0xcd9d56["prototype"], "exitBtn", [_0x2b430a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x50e561 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xcd9d56["prototype"], "bbr", [_0x4e8c22], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1800a9 = _0xcd9d56)) || _0x1800a9));
__dependency_1['cclegacy']["_RF"]["pop"]();
