// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotFrameworkLogic.ts.js
// SHA256: d9f69f11fadbbbb3d798a060d42bf1349504bf3161eeaee125032907ce89638d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-Logic";
import * as __dependency_4 from "./framework-SlotFrameworkData";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-ExitUtils";
var __export_0;
export { __export_0 as SlotFrameworkLogic };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotFrameworkLogic":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x255c77) {
  void 0, void 0;
})(__dependency_0);
(function (_0x3e15a6) {
  void 0;
})(__dependency_1);
(function (_0x218e06) {
  void 0;
})(__dependency_2);
(function (_0x4a194b) {
  void 0;
})(__dependency_3);
(function (_0xb5b074) {
  void 0;
})(__dependency_4);
(function (_0x4e1252) {
  void 0;
})(__dependency_5);
(function (_0x591d8e) {
  void 0;
})(__dependency_6);
__dependency_1["cclegacy"]['_RF']["push"]({}, "72eefcIarNEOpWPZGbhpHam", "SlotFrameworkLogic", void 0x0);
__publish("SlotFrameworkLogic", function (_0x1e9824) {
  function _0x5e944d() {
    return Reflect.construct(_0x1e9824, arguments, new.target || _0x5e944d) || this;
  }
  (0, __dependency_0["inheritsLoose"])(_0x5e944d, _0x1e9824);
  var _0x340bb9 = _0x5e944d["prototype"];
  return _0x340bb9["onLoad"] = function (_0x4adeed) {
    _0x1e9824["prototype"]["onLoad"]["call"](this, _0x4adeed), this["_init"]();
  }, _0x340bb9["onDestroy"] = function () {}, _0x340bb9['reset'] = function () {}, _0x340bb9["_init"] = function () {}, _0x340bb9['showExitAlert'] = function () {
    if ("disable" !== __dependency_6["ExitUtils"]["getGoBackUrl"]()) {
      var _0x2099e6 = {
          'text': App["getLanguage"]("exitGame", [], __dependency_2["EBundles"][__dependency_2["EBundles"]["wrapper"]]),
          'confirmCb': function (_0x5f4a3f) {
            _0x58fbcf(), dispatch(__dependency_5["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
          },
          'cancelCb': function (_0x56c797) {
            dispatch(__dependency_5["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
          },
          'bbrCb': function (_0x4f3c4e) {
            dispatch(__dependency_5["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
          }
        },
        _0x58fbcf = function () {
          __dependency_6["ExitUtils"]["exit"]();
        };
      App["gameAlert"]["show"](_0x2099e6);
    }
  }, _0x340bb9["addEvents"] = function () {
    this['on'](__dependency_5["SlotFrameworkEvent"]["SHOW_EXIT_ALERT"], this['showExitAlert']);
  }, (0, __dependency_0['createClass'])(_0x5e944d, [{
    'key': 'data',
    'get': function () {
      return App['dataCenter']["get"](__dependency_4['default']);
    }
  }, {
    'key': "view",
    'get': function () {
      return this["gameView"];
    }
  }]), _0x5e944d;
}(__dependency_3["Logic"]));
__dependency_1["cclegacy"]["_RF"]["pop"]();
