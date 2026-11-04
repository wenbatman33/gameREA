// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-InfoBarController.ts.js
// SHA256: 793ff8e66437ec1094a4582a8e723b877899d49aa5f351f8ffe3c9873fcfd3dc
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UrlUtils";
import * as __dependency_3 from "./main-Config";
import * as __dependency_4 from "./main-Bundles";
import * as __dependency_5 from "./main-CmmUtils";
import * as __dependency_6 from "./main-EventComponent";
import * as __dependency_7 from "./main-Decorators";
import * as __dependency_8 from "./framework-RunScore";
import * as __dependency_9 from "./framework-SlotFrameworkEvent";
import * as __dependency_10 from "./framework-ColorModel";
import * as __dependency_11 from "./framework-DefinitionModel";
import * as __dependency_12 from "./framework-InitialModel";
import * as __dependency_13 from "./framework-PlatformModel";
import * as __dependency_14 from "./framework-ReplayModel";
import * as __dependency_15 from "./framework-type2";
import * as __dependency_16 from "./framework-CmmSlotUtils";
import * as __dependency_17 from "./framework-AvatarViewL";
import * as __dependency_18 from "./framework-AvatarViewP";
import * as __dependency_19 from "./framework-NickNameView";
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
(function (_0x13c437) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x223c54) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x1b3d0b) {
  void 0;
})(__dependency_2);
(function (_0x1c7bf8) {
  void 0;
})(__dependency_3);
(function (_0x4d07f9) {
  void 0;
})(__dependency_4);
(function (_0x2279ea) {
  void 0;
})(__dependency_5);
(function (_0x301835) {
  void 0;
})(__dependency_6);
(function (_0x23a5a3) {
  void 0;
})(__dependency_7);
(function (_0x43dc37) {
  void 0;
})(__dependency_8);
(function (_0x8297c) {
  void 0;
})(__dependency_9);
(function (_0x29a16c) {
  void 0;
})(__dependency_10);
(function (_0xd42959) {
  void 0;
})(__dependency_11);
(function (_0xf20067) {
  void 0;
})(__dependency_12);
(function (_0x44b33c) {
  void 0;
})(__dependency_13);
(function (_0x2d0427) {
  void 0;
})(__dependency_14);
(function (_0x4d4326) {
  void 0;
})(__dependency_15);
(function (_0x4204bd) {
  void 0;
})(__dependency_16);
(function (_0x21d2f6) {
  void 0;
})(__dependency_17);
(function (_0x4bade7) {
  void 0;
})(__dependency_18);
(function (_0xc0c7bc) {
  void 0;
})(__dependency_19);
var _0x26e04b, _0x5176dd, _0x304c44, _0x43afba, _0x5104fd, _0x22e18a, _0x3983cd, _0xc591cd, _0x18791b, _0xcc1765, _0x1b6a4c, _0x3d9a08, _0x4d0471, _0xdb6615, _0xb4d324, _0x5dce55, _0x56bb5b, _0x3adcc6, _0x3c36c1, _0x42f673, _0x2789a3, _0x3b1c0e, _0x154956, _0x500015, _0x1058bd, _0x510bd5, _0x134273, _0x13481d, _0x470f70;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '0c122zKefBDFJ3HqZk4tGhA', "InfoBarController", void 0x0);
__dependency_1["_decorator"]['ccclass'], __dependency_1["_decorator"]["property"], __publish('default', (_0x26e04b = (0, __dependency_7['inject'])("content/userInfo/content/spinIdBtn", __dependency_1["Node"]), _0x5176dd = (0, __dependency_7['inject'])('content/userInfo/content/spinIdBtn/spinId', __dependency_1["Label"]), _0x304c44 = (0, __dependency_7['inject'])("content/balance/bg", __dependency_1["Node"]), _0x43afba = (0, __dependency_7['inject'])("content/totalWin/bg", __dependency_1["Node"]), _0x5104fd = (0, __dependency_7['inject'])("content/userInfo/avatarBtn", __dependency_1["Node"]), _0x22e18a = (0, __dependency_7['inject'])("content/userInfo/avatarBtn/Mask/avatar", __dependency_1["Node"]), _0x3983cd = (0, __dependency_7['inject'])('content/userInfo/content/userIdBtn', __dependency_1["Node"]), _0xc591cd = (0, __dependency_7['inject'])('content/userInfo/content/userIdBtn/userIdMask', __dependency_1["Node"]), _0x18791b = (0, __dependency_7['inject'])("content/userInfo/content/userIdBtn/userIdMask/userId", __dependency_1["Label"]), _0xcc1765 = (0, __dependency_7['inject'])("content/userInfo/content/userIdBtn/icon", __dependency_1["Node"]), _0x1b6a4c = (0, __dependency_7['inject'])("content/userInfo/content/spinIdBtn/copyHint", __dependency_1["Animation"]), _0x3d9a08 = (0, __dependency_7['inject'])("content/userInfo/content/userIdBtn/isDemo", __dependency_1["Node"]), _0x4d0471 = (0, __dependency_7['inject'])('content/balance/content/balanceLabel', __dependency_1["Label"]), _0xdb6615 = (0, __dependency_7['inject'])("content/totalWin/content/totalWinLabel", __dependency_1["Label"]), _0x5dce55 = (0, __dependency_0["applyDecoratedDescriptor"])((_0xb4d324 = function (_0x3ae967) {
  function _0x5570cd() {
    for (var _0x140b04, _0x1db8b1 = arguments["length"], _0x357b9e = new Array(_0x1db8b1), _0x583f3a = 0x0; _0x583f3a < _0x1db8b1; _0x583f3a++) _0x357b9e[_0x583f3a] = arguments[_0x583f3a];
    return _0x140b04 = Reflect.construct(_0x3ae967, [this]['concat'](_0x357b9e).slice(1), new.target || _0x5570cd) || this, (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "spinIdBtn", _0x5dce55, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "spinId", _0x56bb5b, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "balanceBg", _0x3adcc6, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, 'totalWinBg', _0x3c36c1, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "avatarBtn", _0x42f673, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "avatar", _0x2789a3, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "userIdBtn", _0x3b1c0e, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "userIdMask", _0x154956, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, 'userId', _0x500015, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "editIcon", _0x1058bd, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, 'spinIdCopyHint', _0x510bd5, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, 'isDemo', _0x134273, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, 'balanceLabel', _0x13481d, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), (0, __dependency_0["initializerDefineProperty"])(_0x140b04, "totalWinLabel", _0x470f70, (0, __dependency_0["assertThisInitialized"])(_0x140b04)), _0x140b04["totalWinTween"] = null, _0x140b04;
  }
  (0, __dependency_0['inheritsLoose'])(_0x5570cd, _0x3ae967);
  var _0x411c29 = _0x5570cd['prototype'];
  return _0x411c29["onLoad"] = function () {
    _0x3ae967["prototype"]["onLoad"]["call"](this), this["setEventTouch"]();
  }, _0x411c29["start"] = function () {
    __dependency_14["default"]["isReplay"] ? this["initReplay"]() : this["init"]();
  }, _0x411c29["onDestroy"] = function () {
    _0x3ae967['prototype']['onDestroy']["call"](this);
  }, _0x411c29["init"] = function () {
    var _0x18862f = __dependency_13["default"]["getData"]()["hideUserInfo"],
      _0x125107 = void 0x0 !== _0x18862f && _0x18862f;
    this["addRunScoreComponent"](), this["showIsDemo"](), 0x0 == _0x125107 && (_0x125107 = null == __dependency_2['default']["getParam"]("hideUserInfo") ? _0x125107 : Boolean(__dependency_2['default']["getParam"]("hideUserInfo"))), 0x1 == _0x125107 && (this['userIdBtn']['active'] = !0x1, this['avatarBtn']['active'] = !0x1);
  }, _0x411c29["initReplay"] = function () {
    var _0x172709 = __dependency_14["default"]["getData"]()["betData"]["replayMeta"],
      _0x1e97d4 = _0x172709["amount"],
      _0xcaa9f3 = _0x172709["avatarUrl"],
      _0x607dc7 = _0x172709["displayName"],
      _0x38c798 = __dependency_13["default"]['getData']()["hideUserInfo"],
      _0x36b4ec = void 0x0 !== _0x38c798 && _0x38c798,
      _0x8fe44d = App["storage"]['getItem']("using_language"),
      _0x4e7b2e = __dependency_10["default"]['getData']()['white'],
      _0x36c76d = this["avatar"]["getComponent"](__dependency_1['Sprite']);
    'vn' !== _0x8fe44d || _0x607dc7 ? this["userIdBtn"]["setPosition"](-0x70, 0x0) : this["userIdBtn"]['setPosition'](-0x52, 0x0), _0x607dc7 || (_0x607dc7 = App["getLanguage"]("nicknameNotSet", null, __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]])), _0x36c76d['loadRemoteImage']({
      'url': _0xcaa9f3,
      'view': App["entryManager"]["getEntry"](__dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]])["gameView"]
    }), _0x36c76d['color'] = _0x4e7b2e['info01'], this["avatarBtn"]["getComponent"](__dependency_1['Sprite'])["color"] = new __dependency_1["Color"](0xff, 0xd6, 0x80, 0xff), this['balanceLabel']["string"] = '' + __dependency_16["CmmSlotUtils"]["formatNumber"](_0x1e97d4, !0x0), this['setUserId'](_0x607dc7), this["setEditNickIconPos"](), this["editIcon"]['active'] = !0x1, this['spinIdBtn']['active'] = !0x1, 0x0 == _0x36b4ec && (_0x36b4ec = null == __dependency_2['default']["getParam"]("hideUserInfo") ? _0x36b4ec : Boolean(__dependency_2['default']["getParam"]("hideUserInfo"))), 0x1 == _0x36b4ec && (this["userIdBtn"]["active"] = !0x1, this['avatarBtn']['active'] = !0x1);
  }, _0x411c29["setEventTouch"] = function () {
    var _0xa885ce = this;
    this["spinIdBtn"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      __dependency_5["CmmUtils"]["CopyText"](_0xa885ce['spinId']["string"]), _0xa885ce["spinIdCopyHint"]["play"](_0xa885ce["spinIdCopyHint"]["clips"][0x0]["name"]), dispatch(__dependency_9['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), __dependency_5["CmmUtils"]["addBtnClickEvent"](this["avatarBtn"], function () {
      App['uiManager']["open"]({
        'type': __dependency_16["CmmSlotUtils"]["getOrientationTarget"](__dependency_17["default"], __dependency_18["default"]),
        'bundle': __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]],
        'zIndex': __dependency_3["ViewZOrder"]['UI'],
        'name': "頭像選擇"
      })["then"](function (_0x4c3692) {
        _0x4c3692["init"]();
      }), dispatch(__dependency_9['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), __dependency_5["CmmUtils"]["addBtnClickEvent"](this['userIdBtn'], function () {
      App["uiManager"]["open"]({
        'type': __dependency_19["default"],
        'bundle': __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]],
        'zIndex': __dependency_3["ViewZOrder"]['UI'],
        'name': '修改暱稱'
      })['then'](function (_0x1d29b6) {}), dispatch(__dependency_9['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    });
  }, _0x411c29["showIsDemo"] = function () {
    __dependency_12['default']["getData"]()["engine"]["definition"]["isDemo"] && (this["isDemo"]["active"] = !0x0);
  }, _0x411c29['addRunScoreComponent'] = function () {
    this["balanceLabel"]['addComponent'](__dependency_8["RunScore"]), this["totalWinLabel"]["addComponent"](__dependency_8["RunScore"]);
  }, _0x411c29["setTipsLabelMarquee"] = function () {
    var _0x395211 = this;
    this['scheduleOnce'](function () {
      var _0x4ed902 = {
        'maskNode': _0x395211['userIdMask'],
        'labelNode': _0x395211["userId"]["node"],
        'delayTime': 0x1
      };
      _0x4ed902['labelNode']['getComponent'](__dependency_1["UITransform"])["width"] < 0x96 || __dependency_5["CmmUtils"]["labelMarquee"](_0x4ed902);
    });
  }, _0x411c29["setEditNickIconPos"] = function () {
    var _0x4e866a = this;
    this["scheduleOnce"](function () {
      var _0x26402b = Math['min'](_0x4e866a["userId"]["getComponent"](__dependency_1["UITransform"])["width"], 0x96);
      _0x4e866a["userIdMask"]["getComponent"](__dependency_1["UITransform"])["width"] = _0x26402b, _0x4e866a["editIcon"]["setPosition"](_0x4e866a["userIdMask"]["getComponent"](__dependency_1["UITransform"])["width"] + 0x14, 0x0);
    });
  }, _0x411c29["setUserId"] = function (_0x45811b) {
    this["userId"]["string"] = '' + _0x45811b, this["setTipsLabelMarquee"]();
  }, _0x411c29["setSpinId"] = function (_0x547a8d) {
    this["spinIdBtn"]["active"] = void 0x0 !== _0x547a8d && '' !== _0x547a8d, this['spinId']["string"] = _0x547a8d;
  }, _0x411c29["playBalanceAnim"] = function (_0x3167bd) {
    this["balanceLabel"]["string"] = '' + __dependency_16["CmmSlotUtils"]["formatNumber"](_0x3167bd, !0x0);
  }, _0x411c29["setTotalWin"] = function (_0x5e3976) {
    this["totalWinLabel"]["string"] = '' + __dependency_16["CmmSlotUtils"]["formatNumber"](_0x5e3976, !0x0);
  }, _0x411c29["setAvatar"] = function (_0x1e1415) {
    _0x1e1415 || (_0x1e1415 = __dependency_13["default"]["getData"]()['player']["avatarUrl"]), this['avatar']["getComponent"](__dependency_1['Sprite'])["loadRemoteImage"]({
      'url': _0x1e1415,
      'view': App['entryManager']["getEntry"](__dependency_4["EBundles"][__dependency_4["EBundles"]['slotFramework']])["gameView"]
    });
  }, _0x411c29["playTotalWinTween"] = function (_0x3f9750, _0x249e90) {
    var _0x47192e = _0x3f9750["value"],
      _0x5cfc26 = _0x3f9750["tweenTime"],
      _0x295c4e = _0x3f9750["needComplete"];
    if (_0x47192e) {
      var _0x14c3c2 = {
        'label': this["totalWinLabel"],
        'start': parseFloat(this["totalWinLabel"]['string']['replace'](/,/g, '')),
        'end': _0x47192e,
        'tweenTime': _0x5cfc26 || 1.9,
        'digital': __dependency_11["default"]["getData"]()["digital"],
        'useThousandsSeparator': !0x0,
        'callback': _0x295c4e ? _0x249e90 : null
      };
      this["totalWinTween"] = __dependency_16["CmmSlotUtils"]["tweenNum"](_0x14c3c2);
    } else this["totalWinLabel"]["string"] = __dependency_16["CmmSlotUtils"]["formatNumber"](0x0);
  }, _0x411c29['quickStopTotalWin'] = function (_0x395c0e) {
    this["totalWinTween"] && this['totalWinTween']["stop"](), this['totalWinLabel']["string"] = __dependency_16["CmmSlotUtils"]["formatNumber"](_0x395c0e);
  }, _0x411c29['setAvatarInteractable'] = function (_0x21ee1a) {
    var _0x44c7ec = __dependency_10["default"]['getData'](),
      _0x2515d1 = _0x44c7ec["background"],
      _0x51b9e9 = _0x44c7ec["white"];
    this["avatarBtn"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x21ee1a, this["avatar"]["getComponent"](__dependency_1['Sprite'])["color"] = _0x21ee1a ? _0x51b9e9["info01"] : _0x2515d1[0x50];
  }, _0x411c29["setEditNicknameInteractable"] = function (_0x37fc79) {
    this['userIdBtn']["getComponent"](__dependency_1["Button"])["interactable"] = _0x37fc79;
  }, _0x411c29["setReplayAvatar"] = function () {
    var _0x4a161c = __dependency_14["default"]["getData"]()["betData"]['replayMeta']['avatarUrl'],
      _0x1a5859 = __dependency_10["default"]["getData"]()['white'],
      _0x484dee = this["avatar"]["getComponent"](__dependency_1['Sprite']);
    _0x484dee['loadRemoteImage']({
      'url': _0x4a161c,
      'view': App['entryManager']["getEntry"](__dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]])["gameView"]
    }), _0x484dee["color"] = _0x1a5859["info01"], this['avatarBtn']["getComponent"](__dependency_1['Sprite'])["color"] = new __dependency_1["Color"](0xff, 0xd6, 0x80, 0xff);
  }, _0x411c29["addEvents"] = function () {
    var _0x215bf3 = this;
    _0x3ae967["prototype"]['addEvents']['call'](this), this['on'](__dependency_9['SlotFrameworkEvent']["CLICK_GAME_LOADING_CONFIRM_BTN"], function (_0x4bb7ca) {
      var _0x19a224 = __dependency_13["default"]["getData"]()["player"],
        _0x590a85 = _0x19a224["displayName"],
        _0x40ffa4 = _0x19a224['id'],
        _0x27954a = _0x19a224["balance"],
        _0x308fbc = __dependency_12['default']['getData'](),
        _0x401e14 = _0x308fbc["isResuming"],
        _0x1e59d1 = _0x308fbc["engine"],
        _0x2e25b3 = _0x401e14 ? _0x1e59d1["spinId"] : '',
        _0x3e9bc8 = _0x590a85;
      _0x3e9bc8 || (_0x3e9bc8 = App["getLanguage"]("nicknameEdit", null, __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]])), _0x215bf3["setUserId"](_0x40ffa4 ? '' + _0x40ffa4 : _0x3e9bc8), _0x215bf3["setSpinId"](_0x2e25b3), _0x215bf3['setEditNickIconPos'](), _0x215bf3["balanceLabel"]['string'] = __dependency_16["CmmSlotUtils"]["formatNumber"](_0x27954a["amount"], !0x0), _0x215bf3["setTotalWin"](0x0), _0x215bf3["setAvatar"]();
    }), this['on'](__dependency_9['SlotFrameworkEvent']["UPDATE_USER_SPIN_ID"], function (_0xca96e3) {
      var _0x2270e2 = _0xca96e3["data"]["spinId"];
      _0x215bf3["setSpinId"](_0x2270e2);
    }), this['on'](__dependency_9['SlotFrameworkEvent']["UPDATE_USER_BALANCE"], function (_0x3a15fe) {
      var _0x318afb = _0x3a15fe["data"]["balance"];
      _0x215bf3["playBalanceAnim"](_0x318afb);
    }), this['on'](__dependency_9['SlotFrameworkEvent']["UPDATE_TOTAL_WINNINGS"], function (_0x2c3c6e) {
      _0x215bf3["playTotalWinTween"](_0x2c3c6e["data"], _0x2c3c6e["complete"]);
    }), this['on'](__dependency_9['SlotFrameworkEvent']["QUICK_STOP_TOTAL_WINNINGS"], function (_0x52b93a) {
      _0x215bf3["quickStopTotalWin"](_0x52b93a["data"]);
    }), this['on'](__dependency_9['SlotFrameworkEvent']["UPDATE_AVATAR_COMPLETED_RESPONSE"], function () {
      var _0x3c5ee4 = __dependency_13["default"]["getData"]()['player']["avatarUrl"];
      _0x215bf3["setAvatar"](_0x3c5ee4);
    }), this['on'](__dependency_9['SlotFrameworkEvent']["UPDATE_SPIN_STATUS"], function (_0x4e5aef) {
      var _0x5d91ac = _0x4e5aef["data"],
        _0x17db9e = __dependency_15["ESpinStatus"]["SPINING"] === _0x5d91ac;
      _0x215bf3["setAvatarInteractable"](!_0x17db9e), _0x215bf3['setEditNicknameInteractable'](!_0x17db9e), __dependency_14["default"]['isReplay'] && _0x215bf3["setReplayAvatar"]();
    }), this['on'](__dependency_9['SlotFrameworkEvent']["UPDATE_DISPLAYNAME_RESPONSE"], function () {
      var _0x37a8f2 = __dependency_13["default"]["getData"]()['player']['displayName'];
      _0x215bf3["setUserId"](_0x37a8f2), _0x215bf3['setEditNickIconPos']();
    });
  }, _0x5570cd;
}(__dependency_6["default"]))["prototype"], "spinIdBtn", [_0x26e04b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x56bb5b = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324['prototype'], 'spinId', [_0x5176dd], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3adcc6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "balanceBg", [_0x304c44], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3c36c1 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "totalWinBg", [_0x43afba], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x42f673 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "avatarBtn", [_0x5104fd], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2789a3 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "avatar", [_0x22e18a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3b1c0e = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "userIdBtn", [_0x3983cd], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x154956 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "userIdMask", [_0xc591cd], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x500015 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "userId", [_0x18791b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1058bd = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "editIcon", [_0xcc1765], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x510bd5 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], 'spinIdCopyHint', [_0x1b6a4c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x134273 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324['prototype'], "isDemo", [_0x3d9a08], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x13481d = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324['prototype'], "balanceLabel", [_0x4d0471], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x470f70 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xb4d324["prototype"], "totalWinLabel", [_0xdb6615], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xb4d324));
__dependency_1["cclegacy"]["_RF"]['pop']();
