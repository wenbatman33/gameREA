// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-NickNameView.ts.js
// SHA256: 86f4d5e3dfeb0f7f06efd3f3971a6a429e29e97ad34c5b22265eb4522a9f2e71
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmUtils";
import * as __dependency_4 from "./main-UIView";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./framework-ColorModel";
import * as __dependency_8 from "./framework-PlatformModel";
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
(function (_0x986d58) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x10bd20) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x4d2d8b) {
  void 0;
})(__dependency_2);
(function (_0x2f811a) {
  void 0;
})(__dependency_3);
(function (_0x249c00) {
  void 0;
})(__dependency_4);
(function (_0x1fdf0a) {
  void 0;
})(__dependency_5);
(function (_0x54cb11) {
  void 0;
})(__dependency_6);
(function (_0x51a5f7) {
  void 0;
})(__dependency_7);
(function (_0x2c40e4) {
  void 0;
})(__dependency_8);
var _0x5de1dc, _0x356517, _0x5cec1a, _0x3e70c3, _0x5e30c1, _0x2f3012, _0x86a7c7, _0x25227a, _0x118246, _0x104702, _0x353fcb, _0x2a0658, _0x537132;
__dependency_1['cclegacy']['_RF']["push"]({}, "7ebe9Om/2VG2I5BpzlSWoPk", "NickNameView", void 0x0);
var _0x22bd8c = __dependency_1["_decorator"]["ccclass"];
__publish("default", (_0x5de1dc = _0x22bd8c("NickNameView"), _0x356517 = (0, __dependency_5['inject'])('bbr', __dependency_1["Node"]), _0x5cec1a = (0, __dependency_5['inject'])("content/inputEditBox", __dependency_1["Node"]), _0x3e70c3 = (0, __dependency_5['inject'])('content/tip', __dependency_1["Label"]), _0x5e30c1 = (0, __dependency_5['inject'])('content/btnContent/cancelBtn', __dependency_1["Node"]), _0x2f3012 = (0, __dependency_5['inject'])("content/btnContent/confirmBtn", __dependency_1["Node"]), _0x5de1dc((_0x118246 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x25227a = function (_0x5c69dd) {
  function _0x2787da() {
    for (var _0x562e34, _0x16f967 = arguments["length"], _0x42b375 = new Array(_0x16f967), _0x5a53f0 = 0x0; _0x5a53f0 < _0x16f967; _0x5a53f0++) _0x42b375[_0x5a53f0] = arguments[_0x5a53f0];
    return _0x562e34 = Reflect.construct(_0x5c69dd, [this]["concat"](_0x42b375).slice(1), new.target || _0x2787da) || this, (0, __dependency_0["initializerDefineProperty"])(_0x562e34, "bbr", _0x118246, (0, __dependency_0["assertThisInitialized"])(_0x562e34)), (0, __dependency_0["initializerDefineProperty"])(_0x562e34, "inputEditBox", _0x104702, (0, __dependency_0["assertThisInitialized"])(_0x562e34)), (0, __dependency_0["initializerDefineProperty"])(_0x562e34, 'tip', _0x353fcb, (0, __dependency_0["assertThisInitialized"])(_0x562e34)), (0, __dependency_0["initializerDefineProperty"])(_0x562e34, "cancelBtn", _0x2a0658, (0, __dependency_0["assertThisInitialized"])(_0x562e34)), (0, __dependency_0["initializerDefineProperty"])(_0x562e34, "confirmBtn", _0x537132, (0, __dependency_0["assertThisInitialized"])(_0x562e34)), _0x562e34['MAX_NAME_LENGTH'] = 0x6, _0x562e34["MIN_NAME_LENGTH"] = 0x1, _0x562e34['listenerUpdateAlertFlag'] = !0x1, _0x562e34;
  }
  (0, __dependency_0['inheritsLoose'])(_0x2787da, _0x5c69dd), _0x2787da["getPrefabUrl"] = function () {
    return "prefabs/view/NickNameView";
  };
  var _0x12d368 = _0x2787da["prototype"];
  return _0x12d368["onLoad"] = function () {
    _0x5c69dd["prototype"]['onLoad']["call"](this);
  }, _0x12d368['start'] = function () {
    this["init"]();
  }, _0x12d368['update'] = function () {
    this["listenerUpdateAlertFlag"] && null !== App["gameAlert"]["currentShow"]() && (this["inputEditBox"]['getComponent'](__dependency_1["EditBox"])["isFocused"]() && this['inputEditBox']["getComponent"](__dependency_1["EditBox"])["blur"](), this["listenerUpdateAlertFlag"] = !0x1);
  }, _0x12d368["init"] = function () {
    this["setNickname"](), this["addEventTouch"]();
  }, _0x12d368["onClose"] = function () {
    this["close"](), dispatch(__dependency_6["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
  }, _0x12d368["setNickname"] = function () {
    var _0x1eb3e1 = __dependency_8["default"]["getData"]()["player"]["displayName"];
    this["inputEditBox"]['getComponent'](__dependency_1["EditBox"])['string'] = _0x1eb3e1 || '';
  }, _0x12d368["setTip"] = function (_0x5a475b, _0x14abd4) {
    var _0x218e76 = __dependency_7["default"]["getData"](),
      _0x451309 = _0x218e76["green"],
      _0xe8bf34 = _0x218e76["red"];
    this['tip']['string'] = _0x5a475b, this["tip"]["color"] = _0x14abd4 ? _0xe8bf34["primary"] : _0x451309["primary"];
  }, _0x12d368["validateNickname"] = function (_0x3e27d2) {
    if (_0x3e27d2["length"] < this["MIN_NAME_LENGTH"]) return this["setTip"](App["getLanguage"]("nicknameMinLength", ['' + this["MIN_NAME_LENGTH"]], __dependency_2['EBundles'][__dependency_2['EBundles']["slotFramework"]]), !0x0), !0x1;
    var _0x2b1ff1 = /[^A-Za-z0-9가-힣à-ỵ_\u3040-\u309F\u30A0-\u30FF\u0110-\u01B0\u4e00-\u9fff\u3105-\u3129]/g,
      _0x5f77ea = /[ˇˋˊ˙]/g;
    return _0x2b1ff1["test"](_0x3e27d2) || _0x5f77ea["test"](_0x3e27d2) ? (this["setTip"](App["getLanguage"]("nicknameSpecialChars", null, __dependency_2['EBundles'][__dependency_2['EBundles']['slotFramework']]), !0x0), _0x3e27d2 = _0x3e27d2['replace'](_0x2b1ff1, '')["replace"](_0x5f77ea, ''), !0x1) : _0x3e27d2["length"] !== this["MAX_NAME_LENGTH"] || (this['setTip'](App["getLanguage"]("nicknameMaxLength", ['' + this["MAX_NAME_LENGTH"]], __dependency_2['EBundles'][__dependency_2['EBundles']["slotFramework"]]), !0x1), !0x0);
  }, _0x12d368["addEventTouch"] = function () {
    var _0x86fade = this;
    this["bbr"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_3["CmmUtils"]["debounce"](function () {
      _0x86fade['onClose']();
    })), this["cancelBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_3["CmmUtils"]['debounce'](function () {
      _0x86fade['onClose']();
    })), __dependency_3["CmmUtils"]['addBtnClickEvent'](this['confirmBtn'], __dependency_3["CmmUtils"]["debounce"](function () {
      var _0x3ab05c = _0x86fade['inputEditBox']['getComponent'](__dependency_1["EditBox"])["string"];
      _0x86fade["validateNickname"](_0x3ab05c) && _0x86fade["sendDisplayName"](_0x3ab05c), dispatch(__dependency_6["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    })), this["inputEditBox"]['on'](__dependency_1["EditBox"]["EventType"]["EDITING_DID_BEGAN"], function () {
      _0x86fade['listenerUpdateAlertFlag'] = !0x0;
      var _0x2f894f = _0x86fade["inputEditBox"]['getComponent'](__dependency_1["EditBox"])['string'];
      _0x86fade["validateNickname"](_0x2f894f);
    }), this['inputEditBox']['on'](__dependency_1["EditBox"]["EventType"]["EDITING_DID_ENDED"], function () {
      _0x86fade["listenerUpdateAlertFlag"] = !0x1;
    }), this['inputEditBox']['on'](__dependency_1["EditBox"]['EventType']["TEXT_CHANGED"], function () {
      var _0x2aadc1 = _0x86fade["inputEditBox"]["getComponent"](__dependency_1["EditBox"])["string"];
      _0x86fade["setConfirmBtnInteractable"](!0x0), _0x86fade['setTip']('', !0x0), _0x86fade["validateNickname"](_0x2aadc1) ? _0x86fade["setConfirmBtnInteractable"](!0x0) : _0x86fade["setConfirmBtnInteractable"](!0x1);
    });
  }, _0x12d368["setConfirmBtnInteractable"] = function (_0x256bf7) {
    this['confirmBtn']["getComponent"](__dependency_1['Button'])["interactable"] = _0x256bf7;
  }, _0x12d368["sendDisplayName"] = function (_0x16a533) {
    __dependency_8["default"]["getData"]()['player']["displayName"] !== _0x16a533 ? dispatch(__dependency_6["SlotFrameworkEvent"]["SEND_UPDATE_DISPLAYNAME_REQUEST"], _0x16a533) : this["close"]();
  }, _0x12d368["addEvents"] = function () {
    var _0x44553f = this;
    _0x5c69dd["prototype"]["addEvents"]['call'](this), this['on'](__dependency_6["SlotFrameworkEvent"]["UPDATE_DISPLAYNAME_RESPONSE"], function () {
      _0x44553f["close"]();
    }), this['on'](__dependency_6["SlotFrameworkEvent"]["SET_DISPLAYNAME_TIP"], function (_0x34c705) {
      _0x44553f['setTip']('' + _0x34c705, !0x0), _0x44553f["setConfirmBtnInteractable"](!0x1);
    });
  }, _0x2787da;
}(__dependency_4["default"]))['prototype'], "bbr", [_0x356517], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x104702 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x25227a['prototype'], "inputEditBox", [_0x5cec1a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x353fcb = (0, __dependency_0["applyDecoratedDescriptor"])(_0x25227a["prototype"], "tip", [_0x3e70c3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2a0658 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x25227a["prototype"], "cancelBtn", [_0x5e30c1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x537132 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x25227a["prototype"], 'confirmBtn', [_0x2f3012], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x86a7c7 = _0x25227a)) || _0x86a7c7));
__dependency_1['cclegacy']["_RF"]['pop']();
