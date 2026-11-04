// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-InfoBarPController.ts.js
// SHA256: 3d8fc3ffbd44006cfeae14e4bdff28a80d703ccaae9ee7686f1d005aa191dfa6
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UrlUtils";
import * as __dependency_3 from "./main-Config";
import * as __dependency_4 from "./main-Bundles";
import * as __dependency_5 from "./main-CmmUtils";
import * as __dependency_6 from "./main-EventComponent";
import * as __dependency_7 from "./main-Decorators";
import * as __dependency_8 from "./framework-RunScore";
import * as __dependency_9 from "./framework-SlotFrameworkData";
import * as __dependency_10 from "./framework-StakeModel";
import * as __dependency_11 from "./framework-SlotFrameworkEvent";
import * as __dependency_12 from "./framework-ColorModel";
import * as __dependency_13 from "./framework-DefinitionModel";
import * as __dependency_14 from "./framework-InitialModel";
import * as __dependency_15 from "./framework-PlatformModel";
import * as __dependency_16 from "./framework-ReplayModel";
import * as __dependency_17 from "./framework-type2";
import * as __dependency_18 from "./framework-CmmSlotUtils";
import * as __dependency_19 from "./framework-AvatarViewL";
import * as __dependency_20 from "./framework-AvatarViewP";
import * as __dependency_21 from "./framework-NickNameView";
import * as __dependency_22 from "./framework-StakeBarView";
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
(function (_0x386567) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x340e01) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x1890aa) {
  void 0;
})(__dependency_2);
(function (_0x5e1649) {
  void 0;
})(__dependency_3);
(function (_0x19f467) {
  void 0;
})(__dependency_4);
(function (_0x190d2a) {
  void 0;
})(__dependency_5);
(function (_0x5e42c0) {
  void 0;
})(__dependency_6);
(function (_0x188c3f) {
  void 0;
})(__dependency_7);
(function (_0x4712e9) {
  void 0;
})(__dependency_8);
(function (_0x44f7fc) {
  void 0;
})(__dependency_9);
(function (_0x5a60e6) {
  void 0;
})(__dependency_10);
(function (_0x5a2dd1) {
  void 0;
})(__dependency_11);
(function (_0x1287d3) {
  void 0;
})(__dependency_12);
(function (_0x5d1403) {
  void 0;
})(__dependency_13);
(function (_0x4f5e28) {
  void 0;
})(__dependency_14);
(function (_0x29e2af) {
  void 0;
})(__dependency_15);
(function (_0x8c1524) {
  void 0;
})(__dependency_16);
(function (_0x45dc37) {
  void 0;
})(__dependency_17);
(function (_0x32b4a7) {
  void 0;
})(__dependency_18);
(function (_0x25bdc5) {
  void 0;
})(__dependency_19);
(function (_0x14c3b1) {
  void 0;
})(__dependency_20);
(function (_0x3825b4) {
  void 0;
})(__dependency_21);
(function (_0x206871) {
  void 0;
})(__dependency_22);
var _0x152a2d, _0x108015, _0x7b7c64, _0x5ce9d0, _0x159c4b, _0x5f38a3, _0x2efb41, _0x2e35e7, _0x515e3a, _0x41616a, _0x48a7dc, _0x4c47bf, _0x4b8ecc, _0x44c937, _0x3b11f8, _0x12bf59, _0x388b91, _0x4f7c17, _0x1a09e8, _0x573390, _0xfdf8ea, _0x11bc0a, _0x347ae1, _0x1a924f, _0x27be75, _0x3cd8d7, _0x526df9, _0x22f0c9, _0x18f5ef;
__dependency_1['cclegacy']["_RF"]['push']({}, "d6ba7tmYnRE8YwGv1JATXQ5", "InfoBarPController", void 0x0);
__publish("default", (_0x152a2d = (0, __dependency_7["inject"])("content/userInfo/content/spinIdBtn", __dependency_1["Node"]), _0x108015 = (0, __dependency_7["inject"])("content/userInfo/content/spinIdBtn/spinId", __dependency_1["Label"]), _0x7b7c64 = (0, __dependency_7["inject"])("content/betAmount", __dependency_1["Node"]), _0x5ce9d0 = (0, __dependency_7["inject"])("content/betAmount/betLabel", __dependency_1["Label"]), _0x159c4b = (0, __dependency_7["inject"])('content/userInfo/avatarBtn', __dependency_1["Node"]), _0x5f38a3 = (0, __dependency_7["inject"])('content/userInfo/avatarBtn/Mask/avatar', __dependency_1["Node"]), _0x2efb41 = (0, __dependency_7["inject"])("content/userInfo/content/userIdBtn", __dependency_1["Node"]), _0x2e35e7 = (0, __dependency_7["inject"])("content/userInfo/content/userIdBtn/userIdMask", __dependency_1["Node"]), _0x515e3a = (0, __dependency_7["inject"])("content/userInfo/content/userIdBtn/userIdMask/userId", __dependency_1["Label"]), _0x41616a = (0, __dependency_7["inject"])("content/userInfo/content/userIdBtn/icon", __dependency_1["Node"]), _0x48a7dc = (0, __dependency_7["inject"])('content/userInfo/content/spinIdBtn/copyHint', __dependency_1["Animation"]), _0x4c47bf = (0, __dependency_7["inject"])("content/userInfo/content/isDemo", __dependency_1["Node"]), _0x4b8ecc = (0, __dependency_7["inject"])('content/balance/content/balanceLabel', __dependency_1["Label"]), _0x44c937 = (0, __dependency_7["inject"])("content/totalWin/content/totalWinLabel", __dependency_1["Label"]), _0x12bf59 = (0, __dependency_0['applyDecoratedDescriptor'])((_0x3b11f8 = function (_0x333df2) {
  function _0x5cc05b() {
    for (var _0x4f5c47, _0x55129f = arguments['length'], _0x10a986 = new Array(_0x55129f), _0x44f5f8 = 0x0; _0x44f5f8 < _0x55129f; _0x44f5f8++) _0x10a986[_0x44f5f8] = arguments[_0x44f5f8];
    return _0x4f5c47 = Reflect.construct(_0x333df2, [this]["concat"](_0x10a986).slice(1), new.target || _0x5cc05b) || this, (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "spinIdBtn", _0x12bf59, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, 'spinId', _0x388b91, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "betAmount", _0x4f7c17, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, 'betAmountLabel', _0x1a09e8, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "avatarBtn", _0x573390, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "avatar", _0xfdf8ea, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "userIdBtn", _0x11bc0a, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "userIdMask", _0x347ae1, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "userName", _0x1a924f, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "editIcon", _0x27be75, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "spinIdCopyHint", _0x3cd8d7, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "isDemo", _0x526df9, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "balanceLabel", _0x22f0c9, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), (0, __dependency_0['initializerDefineProperty'])(_0x4f5c47, "totalWinLabel", _0x18f5ef, (0, __dependency_0['assertThisInitialized'])(_0x4f5c47)), _0x4f5c47["totalWinTween"] = null, _0x4f5c47;
  }
  (0, __dependency_0['inheritsLoose'])(_0x5cc05b, _0x333df2);
  var _0x4dec53 = _0x5cc05b["prototype"];
  return _0x4dec53["onLoad"] = function () {
    _0x333df2["prototype"]['onLoad']['call'](this), this['setEventTouch']();
  }, _0x4dec53["start"] = function () {
    this["init"]();
  }, _0x4dec53["init"] = function () {
    this["addRunScoreComponent"](), this["showIsDemo"](), this["initStake"]();
    var _0x3fc0a3 = __dependency_15["default"]["getData"]()['hideUserInfo'],
      _0x267689 = void 0x0 !== _0x3fc0a3 && _0x3fc0a3;
    0x0 == _0x267689 && (_0x267689 = null == __dependency_2["default"]["getParam"]('hideUserInfo') ? _0x267689 : Boolean(__dependency_2["default"]["getParam"]("hideUserInfo"))), 0x1 == _0x267689 && (this["userIdBtn"]['active'] = !0x1, this["avatarBtn"]["active"] = !0x1);
  }, _0x4dec53['setStakeLabel'] = function (_0x55cb32) {
    var _0x1ca4d2 = _0x55cb32["toString"](),
      _0x21eb60 = _0x1ca4d2["split"]('.')[0x0],
      _0x479eb3 = _0x1ca4d2['split']('.')[0x1],
      _0x217b8e = __dependency_13["default"]["getData"]()["digital"];
    null != _0x479eb3 ? (_0x479eb3 = _0x479eb3["substring"](0x0, _0x217b8e), _0x1ca4d2 = _0x217b8e > 0x0 ? _0x21eb60 + '.' + _0x479eb3 : _0x21eb60) : _0x1ca4d2 = _0x55cb32 >= 0x2710 ? __dependency_5['CmmUtils']['formatNumStr'](_0x55cb32) : '' + _0x55cb32, this['betAmountLabel']["string"] = _0x1ca4d2;
  }, _0x4dec53["setEventTouch"] = function () {
    var _0x2db024 = this;
    this["spinIdBtn"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      __dependency_5['CmmUtils']["CopyText"](_0x2db024["spinId"]["string"]), _0x2db024['spinIdCopyHint']["play"](_0x2db024['spinIdCopyHint']['clips'][0x0]['name']), dispatch(__dependency_11['SlotFrameworkEvent']['PLAY_CLICK_BTM']);
    }), __dependency_5['CmmUtils']["addBtnClickEvent"](this["avatarBtn"], function () {
      App["uiManager"]['open']({
        'type': __dependency_18["CmmSlotUtils"]['getOrientationTarget'](__dependency_19['default'], __dependency_20["default"]),
        'bundle': __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]],
        'zIndex': __dependency_3["ViewZOrder"]['UI'],
        'name': '頭像選擇'
      })["then"](function (_0x303c95) {
        _0x303c95["init"]();
      }), dispatch(__dependency_11['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), __dependency_5['CmmUtils']["addBtnClickEvent"](this["userIdBtn"], function () {
      App["uiManager"]["open"]({
        'type': __dependency_21['default'],
        'bundle': __dependency_4["EBundles"][__dependency_4["EBundles"]['slotFramework']],
        'zIndex': __dependency_3["ViewZOrder"]['UI'],
        'name': "修改暱稱"
      }), dispatch(__dependency_11['SlotFrameworkEvent']['PLAY_CLICK_BTM']);
    }), __dependency_5['CmmUtils']["addBtnClickEvent"](this["betAmount"], function () {
      _0x2db024['slotData']['spinStatus'] === __dependency_17["ESpinStatus"]['IDLE'] && (App["uiManager"]['open']({
        'type': __dependency_22["StakeBarView"],
        'bundle': __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]],
        'zIndex': __dependency_3["ViewZOrder"]['UI'],
        'name': "下注Bar"
      })["then"](function (_0x3c6050) {
        _0x3c6050['init']();
      }), dispatch(__dependency_11['SlotFrameworkEvent']["PLAY_CLICK_BTM"]));
    });
  }, _0x4dec53["showIsDemo"] = function () {
    var _0x530258, _0x215953;
    (null != (_0x530258 = null == (_0x215953 = __dependency_14["default"]['getData']()) ? void 0x0 : _0x215953['engine']["definition"]['isDemo']) ? _0x530258 : __dependency_13["default"]["getData"]()['isDemo']) && (this["isDemo"]["active"] = !0x0);
  }, _0x4dec53["addRunScoreComponent"] = function () {
    this["balanceLabel"]['addComponent'](__dependency_8["RunScore"]), this["totalWinLabel"]["addComponent"](__dependency_8["RunScore"]);
  }, _0x4dec53["setTipsLabelMarquee"] = function () {
    var _0x16153d = this;
    this['scheduleOnce'](function () {
      var _0x15ff87 = {
        'maskNode': _0x16153d["userIdMask"],
        'labelNode': _0x16153d["userName"]["node"],
        'delayTime': 0x1
      };
      _0x15ff87["labelNode"]['getComponent'](__dependency_1["UITransform"])["width"] < 0x96 || __dependency_5['CmmUtils']['labelMarquee'](_0x15ff87);
    });
  }, _0x4dec53["setEditNickIconPos"] = function () {
    var _0x237971 = this;
    this["scheduleOnce"](function () {
      var _0x2d4b8d = Math["min"](_0x237971['userName']["getComponent"](__dependency_1["UITransform"])["width"], 0x96);
      _0x237971["userIdMask"]["getComponent"](__dependency_1["UITransform"])['width'] = _0x2d4b8d, _0x237971["editIcon"]["setPosition"](_0x237971['userIdMask']["getComponent"](__dependency_1["UITransform"])["width"] + 0x14, 0x0);
    });
  }, _0x4dec53["setUserId"] = function (_0x3ba7c) {
    this["userName"]["string"] = '' + _0x3ba7c, this['setTipsLabelMarquee']();
  }, _0x4dec53["setSpinId"] = function (_0xba5d59) {
    this['spinIdBtn']["active"] = void 0x0 !== _0xba5d59 && '' !== _0xba5d59, this['spinId']["string"] = _0xba5d59;
  }, _0x4dec53["playBalanceAnim"] = function (_0x79bed) {
    this["balanceLabel"]["string"] = '' + __dependency_18["CmmSlotUtils"]['formatNumber'](_0x79bed, !0x0);
  }, _0x4dec53['setTotalWin'] = function (_0x50d2c0) {
    this["totalWinLabel"]['string'] = '' + __dependency_18["CmmSlotUtils"]["formatNumber"](_0x50d2c0, !0x0);
  }, _0x4dec53["setAvatar"] = function (_0x51a70b) {
    _0x51a70b || (_0x51a70b = __dependency_15["default"]["getData"]()['player']["avatarUrl"]), this['avatar']["getComponent"](__dependency_1["Sprite"])["loadRemoteImage"]({
      'url': _0x51a70b,
      'view': App["entryManager"]["getEntry"](__dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]])["gameView"]
    });
  }, _0x4dec53["playTotalWinTween"] = function (_0x147602, _0x5b9560) {
    var _0x2fe130 = _0x147602["value"],
      _0x230104 = _0x147602["accValue"],
      _0x4c1357 = _0x147602["tweenTime"],
      _0x2c9508 = _0x147602["needComplete"],
      _0x39c5a1 = 'playTotalWinTween';
    if (__dependency_1["Tween"]["stopAllByTag"](__dependency_5['CmmUtils']["hashCode"](_0x39c5a1)), _0x2fe130) {
      var _0x18ba70 = {
        'label': this["totalWinLabel"],
        'start': parseFloat(this["totalWinLabel"]['string']["replace"](/,/g, '')),
        'end': _0x2fe130,
        'tweenTime': _0x4c1357 || 1.9,
        'digital': __dependency_13["default"]['getData']()['digital'],
        'useThousandsSeparator': !0x0,
        'tag': __dependency_5['CmmUtils']["hashCode"](_0x39c5a1),
        'callback': _0x2c9508 ? _0x5b9560 : null
      };
      this["totalWinTween"] = __dependency_18["CmmSlotUtils"]["tweenNum"](_0x18ba70);
    } else if (_0x230104) {
      var _0x3ddcb6 = {
        'label': this["totalWinLabel"],
        'start': parseFloat(this['totalWinLabel']["string"]["replace"](/,/g, '')),
        'end': Number(this["totalWinLabel"]["string"]['replace'](/,/g, '')) + _0x230104,
        'tweenTime': _0x4c1357 || 1.9,
        'digital': __dependency_13["default"]["getData"]()['digital'],
        'useThousandsSeparator': !0x0,
        'tag': __dependency_5['CmmUtils']["hashCode"](_0x39c5a1),
        'callback': _0x2c9508 ? _0x5b9560 : null
      };
      this["totalWinTween"] = __dependency_18["CmmSlotUtils"]["tweenNum"](_0x3ddcb6);
    } else this['totalWinTween'] && this["totalWinTween"]["stop"](), this["totalWinLabel"]['string'] = __dependency_18["CmmSlotUtils"]['formatNumber'](0x0), _0x2c9508 && _0x5b9560 && _0x5b9560();
  }, _0x4dec53["quickStopTotalWin"] = function (_0x2d4b3d) {
    this['totalWinTween'] && this['totalWinTween']["stop"](), this["totalWinLabel"]["string"] = __dependency_18["CmmSlotUtils"]['formatNumber'](_0x2d4b3d);
  }, _0x4dec53["setAvatarInteractable"] = function (_0x17094a) {
    var _0x434b52 = __dependency_12["default"]["getData"](),
      _0x40f9db = _0x434b52["background"],
      _0x404430 = _0x434b52["white"];
    this["avatarBtn"]["getComponent"](__dependency_1['Button'])["interactable"] = _0x17094a, this["avatar"]['getComponent'](__dependency_1["Sprite"])['color'] = _0x17094a ? _0x404430["info01"] : _0x40f9db[0x50];
  }, _0x4dec53["setBetAmountInteractable"] = function (_0x243854) {
    this["betAmount"]["getComponent"](__dependency_1['Button'])["interactable"] = _0x243854;
  }, _0x4dec53["setEditNicknameInteractable"] = function (_0x1967fe) {
    this["userIdBtn"]["getComponent"](__dependency_1['Button'])['interactable'] = _0x1967fe;
  }, _0x4dec53["initStake"] = function () {
    var _0x25ff02 = __dependency_10["default"]["stakeIndex"],
      _0x22ba25 = __dependency_10["default"]['ratioIndex'],
      _0x31bd84 = __dependency_10["default"]['getStakeVO']({
        'stakeIndex': _0x25ff02,
        'ratioIndex': _0x22ba25
      });
    __dependency_10["default"]["updateStake"](_0x31bd84), this['setStakeLabel'](__dependency_10["default"]["totalStake"]);
  }, _0x4dec53['addEvents'] = function () {
    var _0xb474e6 = this;
    _0x333df2["prototype"]['addEvents']["call"](this), this['on'](__dependency_11['SlotFrameworkEvent']["CLICK_GAME_LOADING_CONFIRM_BTN"], function (_0x4e5439) {
      var _0x1a650f = __dependency_15["default"]['getData']()["player"],
        _0x25c82d = _0x1a650f["displayName"],
        _0x221652 = _0x1a650f['id'],
        _0x13152c = _0x1a650f['balance'],
        _0x28ce02 = __dependency_14["default"]["getData"]()['isResuming'] ? __dependency_14["default"]["getData"]()['engine']["spinId"] : '',
        _0x20180d = _0x25c82d;
      _0x20180d || (_0x20180d = App["getLanguage"]('nicknameEdit', null, __dependency_4["EBundles"][__dependency_4["EBundles"]['slotFramework']])), _0xb474e6['setUserId'](_0x221652 ? '' + _0x221652 : _0x20180d), _0xb474e6["setSpinId"](_0x28ce02), _0xb474e6["setEditNickIconPos"](), _0xb474e6["balanceLabel"]["string"] = __dependency_18["CmmSlotUtils"]["formatNumber"](_0x13152c["amount"], !0x0), _0xb474e6["setTotalWin"](0x0), _0xb474e6['setAvatar']();
    }), this['on'](__dependency_11['SlotFrameworkEvent']["SET_DISPLAY_NAME"], function (_0x40b0a1) {
      var _0x448e00 = __dependency_15["default"]["getData"]()["player"]['displayName'],
        _0x3bdd90 = App["getLanguage"]('nicknameEdit', null, __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]]);
      __dependency_16["default"]["isReplay"] && (_0x3bdd90 = App["getLanguage"]("nicknameNotSet", null, __dependency_4["EBundles"][__dependency_4["EBundles"]['slotFramework']])), _0xb474e6["setUserId"](null != _0x448e00 ? _0x448e00 : _0x3bdd90);
    }), this['on'](__dependency_11['SlotFrameworkEvent']['UPDATE_USER_SPIN_ID'], function (_0x1477b6) {
      var _0x4aaf9a = _0x1477b6['data']["spinId"];
      _0xb474e6["setSpinId"](_0x4aaf9a);
    }), this['on'](__dependency_11['SlotFrameworkEvent']["UPDATE_USER_BALANCE"], function (_0x2e5f35) {
      var _0x3eafd4 = _0x2e5f35["data"]['balance'];
      _0xb474e6["playBalanceAnim"](_0x3eafd4);
    }), this['on'](__dependency_11['SlotFrameworkEvent']["UPDATE_TOTAL_WINNINGS"], function (_0x1cccec) {
      _0xb474e6['playTotalWinTween'](_0x1cccec["data"], _0x1cccec['complete']);
    }), this['on'](__dependency_11['SlotFrameworkEvent']['QUICK_STOP_TOTAL_WINNINGS'], function (_0xc0b184) {
      _0xb474e6["quickStopTotalWin"](_0xc0b184["data"]);
    }), this['on'](__dependency_11['SlotFrameworkEvent']["UPDATE_AVATAR_COMPLETED_RESPONSE"], function () {
      var _0x109907 = __dependency_15["default"]['getData']()['player']["avatarUrl"];
      _0xb474e6["setAvatar"](_0x109907);
    }), this['on'](__dependency_11['SlotFrameworkEvent']["UPDATE_SPIN_STATUS"], function (_0x5bd0c9) {
      var _0x3eae52 = _0x5bd0c9['data'],
        _0x217155 = __dependency_17["ESpinStatus"]["SPINING"] === _0x3eae52;
      _0xb474e6["setAvatarInteractable"](!_0x217155), _0xb474e6["setEditNicknameInteractable"](!_0x217155);
    }), this['on'](__dependency_11['SlotFrameworkEvent']['SET_BET_AMOUNT_INTERACTABLE'], function (_0x1e8738) {
      var _0x50805b = _0x1e8738["data"];
      _0xb474e6['setBetAmountInteractable'](_0x50805b);
    }), this['on'](__dependency_11['SlotFrameworkEvent']["UPDATE_DISPLAYNAME_RESPONSE"], function () {
      var _0x1c1467 = __dependency_15["default"]['getData']()["player"]["displayName"];
      _0x1c1467 || (_0x1c1467 = App['getLanguage']("nicknameNotSet", null, __dependency_4["EBundles"][__dependency_4["EBundles"]["slotFramework"]])), _0xb474e6["setUserId"](_0x1c1467), _0xb474e6["setEditNickIconPos"]();
    }), this['on'](__dependency_11['SlotFrameworkEvent']["UPDATE_STAKE"], function (_0x372b38) {
      var _0x192196 = __dependency_10["default"]["getData"]()["totalStake"];
      _0xb474e6["setStakeLabel"](_0x192196);
    });
  }, (0, __dependency_0['createClass'])(_0x5cc05b, [{
    'key': 'slotData',
    'get': function () {
      return App["dataCenter"]["get"](__dependency_9["default"]);
    }
  }]), _0x5cc05b;
}(__dependency_6["default"]))['prototype'], "spinIdBtn", [_0x152a2d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x388b91 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], "spinId", [_0x108015], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4f7c17 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], "betAmount", [_0x7b7c64], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1a09e8 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8['prototype'], 'betAmountLabel', [_0x5ce9d0], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x573390 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8['prototype'], 'avatarBtn', [_0x159c4b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xfdf8ea = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], "avatar", [_0x5f38a3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x11bc0a = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], 'userIdBtn', [_0x2efb41], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x347ae1 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], "userIdMask", [_0x2e35e7], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1a924f = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], "userName", [_0x515e3a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x27be75 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8['prototype'], "editIcon", [_0x41616a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3cd8d7 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8['prototype'], "spinIdCopyHint", [_0x48a7dc], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x526df9 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], "isDemo", [_0x4c47bf], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x22f0c9 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], "balanceLabel", [_0x4b8ecc], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x18f5ef = (0, __dependency_0['applyDecoratedDescriptor'])(_0x3b11f8["prototype"], 'totalWinLabel', [_0x44c937], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3b11f8));
__dependency_1['cclegacy']["_RF"]["pop"]();
