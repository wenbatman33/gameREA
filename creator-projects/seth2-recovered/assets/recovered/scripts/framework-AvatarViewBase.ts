// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-AvatarViewBase.ts.js
// SHA256: f6c4e5ffa9ee51ea3280098651c3e4f1aab2d33bd18a048973917fca2d41fe08
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-AvatarToggleItem";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./framework-PlatformModel";
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
(function (_0x17dad6) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x10d72d) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x4a72c3) {
  void 0;
})(__dependency_2);
(function (_0xdd86a5) {
  void 0;
})(__dependency_3);
(function (_0x12d493) {
  void 0;
})(__dependency_4);
(function (_0x2c8987) {
  void 0;
})(__dependency_5);
(function (_0x336ec6) {
  void 0;
})(__dependency_6);
(function (_0xf2942e) {
  void 0;
})(__dependency_7);
var _0x5efa8a, _0x2ebd29, _0x2df924, _0x4c0a25, _0x255104, _0x4a3bdc, _0xe0b04b, _0x4767cd, _0x546f5b;
__dependency_1["cclegacy"]['_RF']["push"]({}, "74c24U0r3pJjrBOjbk1SPRY", "AvatarViewBase", void 0x0);
var _0x1a9b70 = __dependency_1['_decorator']["ccclass"];
__publish('default', (_0x5efa8a = _0x1a9b70("AvatarViewBase"), _0x2ebd29 = (0, __dependency_4["inject"])("bbr", __dependency_1["Node"]), _0x2df924 = (0, __dependency_4["inject"])("content/closeBtn", __dependency_1["Node"]), _0x4c0a25 = (0, __dependency_4["inject"])('content/ScrollView/view/content/ToggleGroup', __dependency_1["Node"]), _0x5efa8a((_0xe0b04b = (0, __dependency_0["applyDecoratedDescriptor"])((_0x4a3bdc = function (_0x3d0f24) {
  function _0x2e8082() {
    for (var _0x5e43e3, _0x44c222 = arguments["length"], _0x592204 = new Array(_0x44c222), _0x958696 = 0x0; _0x958696 < _0x44c222; _0x958696++) _0x592204[_0x958696] = arguments[_0x958696];
    return _0x5e43e3 = Reflect.construct(_0x3d0f24, [this]["concat"](_0x592204).slice(1), new.target || _0x2e8082) || this, (0, __dependency_0['initializerDefineProperty'])(_0x5e43e3, "bbr", _0xe0b04b, (0, __dependency_0["assertThisInitialized"])(_0x5e43e3)), (0, __dependency_0['initializerDefineProperty'])(_0x5e43e3, "closeBtn", _0x4767cd, (0, __dependency_0["assertThisInitialized"])(_0x5e43e3)), (0, __dependency_0['initializerDefineProperty'])(_0x5e43e3, 'toggleGroup', _0x546f5b, (0, __dependency_0["assertThisInitialized"])(_0x5e43e3)), _0x5e43e3["checkId"] = null, _0x5e43e3["avatarMap"] = new Map(), _0x5e43e3;
  }
  (0, __dependency_0['inheritsLoose'])(_0x2e8082, _0x3d0f24);
  var _0x59a0c8 = _0x2e8082["prototype"];
  return _0x59a0c8['onLoad'] = function () {
    _0x3d0f24["prototype"]["onLoad"]["call"](this), this["createAvatar"]();
  }, _0x59a0c8["start"] = function () {
    this["addEventTouch"]();
  }, _0x59a0c8["createAvatar"] = function () {
    var _0x38ea54 = this,
      _0x8839a = App["cache"]["get"](__dependency_2["EBundles"][__dependency_2["EBundles"]['slotFramework']], "prefabs/component/AvatarToggleItem")["data"];
    __dependency_7["default"]["getData"]()["avatars"]["forEach"](function (_0x2ac0ca) {
      var _0x2f2fb0 = (0, __dependency_1['instantiate'])(_0x8839a);
      _0x2f2fb0["setParent"](_0x38ea54["toggleGroup"]);
      var _0x157931 = _0x2f2fb0['addComponent'](__dependency_5["AvatarToggleItem"]);
      _0x157931['init'](_0x2ac0ca), _0x38ea54["avatarMap"]["set"]('' + _0x2ac0ca, _0x157931);
    });
  }, _0x59a0c8["addEventTouch"] = function () {
    var _0x1e8cf4 = this;
    this['bbr']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x1e8cf4['onClose']();
    }), this["closeBtn"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      _0x1e8cf4['onClose']();
    });
  }, _0x59a0c8["onClose"] = function () {
    this['enableItems'](!0x1), __dependency_7["default"]["getData"]()["player"]["avatar"] === this["checkId"] ? this['close']() : this["sendUpdateAvatar"](), dispatch(__dependency_6["SlotFrameworkEvent"]['PLAY_UI_CLOSE_CLICK_BTM']);
  }, _0x59a0c8["sendUpdateAvatar"] = function () {
    __dependency_7["default"]["getData"]()["player"]["avatar"] !== this['checkId'] && dispatch(__dependency_6["SlotFrameworkEvent"]["SEND_UPDATE_AVATAR_REQUEST"], {
      'avatarId': this["checkId"]
    });
  }, _0x59a0c8['setCheckHighlight'] = function (_0x536ee8) {
    this["avatarMap"]['get'](_0x536ee8)["node"]["getComponent"](__dependency_1["Toggle"])["isChecked"] = !0x0;
  }, _0x59a0c8["enableItems"] = function (_0x5cc251) {
    this["avatarMap"]["forEach"](function (_0x27cd64, _0x3fbd38) {
      _0x27cd64['getComponent'](__dependency_1["Toggle"])['interactable'] = _0x5cc251;
    });
  }, _0x59a0c8["init"] = function () {
    this["checkId"] = __dependency_7["default"]['getData']()["player"]["avatar"], this['setCheckHighlight'](this["checkId"]), this['enableItems'](!0x0);
  }, _0x59a0c8["addEvents"] = function () {
    var _0xd331f = this;
    _0x3d0f24["prototype"]["addEvents"]["call"](this), this['on'](__dependency_6["SlotFrameworkEvent"]["UPDATE_CHECK_AVATAR_ID"], function (_0x193e81) {
      var _0x257a6f = _0x193e81["data"];
      _0xd331f["checkId"] = '' + _0x257a6f;
    }), this['on'](__dependency_6["SlotFrameworkEvent"]["UPDATE_AVATAR_COMPLETED_RESPONSE"], function () {
      _0xd331f["close"]();
    });
  }, _0x2e8082;
}(__dependency_3["default"]))["prototype"], "bbr", [_0x2ebd29], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4767cd = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a3bdc["prototype"], "closeBtn", [_0x2df924], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x546f5b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a3bdc["prototype"], "toggleGroup", [_0x4c0a25], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x255104 = _0x4a3bdc)) || _0x255104));
__dependency_1["cclegacy"]["_RF"]['pop']();
