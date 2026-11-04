// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-GameSenderBase.ts.js
// SHA256: aaa4c722bf3a6642128b047476111942bb89392629d1c0a3013957cefb82c2d7
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Sender";
import * as __dependency_4 from "./framework-SlotFrameworkData";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-SocketModel";
import * as __dependency_7 from "./framework-ExitUtils";
var __export_0;
export { __export_0 as GameSenderBase };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSenderBase":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x154886) {
  void 0, void 0;
})(__dependency_0);
(function (_0x11cbe3) {
  void 0;
})(__dependency_1);
(function (_0xeb8606) {
  void 0;
})(__dependency_2);
(function (_0x1bca5c) {
  void 0;
})(__dependency_3);
(function (_0x2b6ca3) {
  void 0;
})(__dependency_4);
(function (_0x5f318c) {
  void 0;
})(__dependency_5);
(function (_0x2c89d5) {
  void 0;
})(__dependency_6);
(function (_0x2c8c39) {
  void 0;
})(__dependency_7);
__dependency_1["cclegacy"]["_RF"]['push']({}, "9fb09Dzg1JASoHq8QB6A+3Y", "GameSenderBase", void 0x0);
__publish("GameSenderBase", function (_0x1a9aee) {
  function _0x1b066e() {
    return Reflect.construct(_0x1a9aee, arguments, new.target || _0x1b066e) || this;
  }
  (0, __dependency_0["inheritsLoose"])(_0x1b066e, _0x1a9aee);
  var _0x415cf5 = _0x1b066e['prototype'];
  return _0x415cf5["setToken"] = function (_0x3c2d47) {
    _0x3c2d47["token"] && (__dependency_6["default"]['currentToken'] = _0x3c2d47["token"]);
  }, _0x415cf5["debugLog"] = function (_0x1ffc68) {}, _0x415cf5["showAlert"] = function (_0x413cd6, _0x539d3b) {
    var _0x5c08fc = {
        'text': _0x413cd6,
        'confirmCb': function () {
          _0xd37f8(), dispatch(__dependency_5["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
        },
        'bbrCb': function () {
          dispatch(__dependency_5["SlotFrameworkEvent"]['PLAY_CLICK_BTM']);
        },
        'needCloseAlert': null == _0x539d3b ? void 0x0 : _0x539d3b["needCloseAlert"],
        'titleisHidden': null == _0x539d3b ? void 0x0 : _0x539d3b["titleisHidden"],
        'confirmisHidden': null == _0x539d3b ? void 0x0 : _0x539d3b["confirmisHidden"],
        'expandisHidden': null == _0x539d3b ? void 0x0 : _0x539d3b["expandisHidden"],
        'tag': __dependency_2["ViewZOrder"]['TopErrorAlert'],
        'code': null == _0x539d3b ? void 0x0 : _0x539d3b['code']
      },
      _0xd37f8 = function () {
        (null == _0x539d3b ? void 0x0 : _0x539d3b['callback']) && _0x539d3b["callback"](), __dependency_7['ExitUtils']["exit"]();
      };
    App['gameAlert']["show"](_0x5c08fc, __dependency_2["ViewZOrder"]["TopErrorAlert"]);
  }, (0, __dependency_0["createClass"])(_0x1b066e, [{
    'key': "slotData",
    'get': function () {
      return App["dataCenter"]['get'](__dependency_4['default']);
    }
  }]), _0x1b066e;
}(__dependency_3["Sender"]));
__dependency_1["cclegacy"]['_RF']["pop"]();
