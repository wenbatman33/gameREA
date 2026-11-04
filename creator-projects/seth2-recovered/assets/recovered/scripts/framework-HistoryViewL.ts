// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-HistoryViewL.ts.js
// SHA256: 918d20042c671cba2948ad4024ceeeb3edb7a71e416b8328744ff3cf9ca3d7f5
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./framework-HistoryViewBase";
import * as __dependency_5 from "./framework-RecordViewL";
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
(function (_0x352223) {
  void 0, void 0;
})(__dependency_0);
(function (_0x361b03) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0x145082) {
  void 0;
})(__dependency_2);
(function (_0x2da8e0) {
  void 0;
})(__dependency_3);
(function (_0x294420) {
  void 0;
})(__dependency_4);
(function (_0x4830aa) {
  void 0;
})(__dependency_5);
var _0x2d018b;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "830efS/pXZDwalsqQx1Re1r", "HistoryViewL", void 0x0);
var _0x144ce2 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("default", _0x144ce2("HistoryViewL")(_0x2d018b = function (_0x4b2f23) {
  function _0x22ed79() {
    return Reflect.construct(_0x4b2f23, arguments, new.target || _0x22ed79) || this;
  }
  return (0, __dependency_0['inheritsLoose'])(_0x22ed79, _0x4b2f23), _0x22ed79["getPrefabUrl"] = function () {
    return "prefabs/view/HistoryViewL";
  }, _0x22ed79["prototype"]['setEventTouch'] = function () {
    var _0x4702de = this;
    _0x4b2f23["prototype"]["setEventTouch"]['call'](this), this['closeBtn']['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      _0x4702de['onClose'](), App["uiManager"]["close"](__dependency_5["default"]);
    }), this['bbr']['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      _0x4702de['onClose'](), App['uiManager']["close"](__dependency_5["default"]);
    }), this["backBtn"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      _0x4702de["onClose"](), App["uiManager"]["open"]({
        'type': __dependency_5["default"],
        'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
        'zIndex': __dependency_2["ViewZOrder"]['UI'],
        'name': "押注紀錄L"
      });
    });
  }, (0, __dependency_0["createClass"])(_0x22ed79, [{
    'key': 'getHistoryViewItemPrefabUrl',
    'get': function () {
      return this['data']["getData"]()["filePaths"]["historyItemLPrefab"];
    }
  }]), _0x22ed79;
}(__dependency_4["default"])) || _0x2d018b);
__dependency_1["cclegacy"]['_RF']["pop"]();
