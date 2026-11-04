// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RecordViewL.ts.js
// SHA256: efae11d84e875792189e32186fdd05aa6ef9f9a9cd2af5d2f0cba9eb43470a6f
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./framework-HistoryViewL";
import * as __dependency_5 from "./framework-RecordViewBase";
import * as __dependency_6 from "./main-Decorators";
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
(function (_0x491937) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x53a7f0) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0x18e832) {
  void 0;
})(__dependency_2);
(function (_0x57f171) {
  void 0;
})(__dependency_3);
(function (_0x17ea90) {
  void 0;
})(__dependency_4);
(function (_0x198601) {
  void 0;
})(__dependency_5);
(function (_0x1c1e4f) {
  void 0;
})(__dependency_6);
(function (_0x45a7f3) {
  void 0;
})(__dependency_7);
var _0x119178, _0x1482e5, _0x2d432e, _0x59cc6c, _0x48639d;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "d0e42uK22BFmKBKAvOCvVDv", 'RecordViewL', void 0x0);
var _0x5e15e2 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("default", (_0x119178 = _0x5e15e2('RecordViewL'), _0x1482e5 = (0, __dependency_6["inject"])("content/table/title/detail", __dependency_1["Node"]), _0x119178((_0x48639d = (0, __dependency_0["applyDecoratedDescriptor"])((_0x59cc6c = function (_0x4789a2) {
  function _0x4b2355() {
    for (var _0x487514, _0x10eaa3 = arguments["length"], _0x264842 = new Array(_0x10eaa3), _0x2f1661 = 0x0; _0x2f1661 < _0x10eaa3; _0x2f1661++) _0x264842[_0x2f1661] = arguments[_0x2f1661];
    return _0x487514 = Reflect.construct(_0x4789a2, [this]["concat"](_0x264842).slice(1), new.target || _0x4b2355) || this, (0, __dependency_0["initializerDefineProperty"])(_0x487514, "detail", _0x48639d, (0, __dependency_0["assertThisInitialized"])(_0x487514)), _0x487514;
  }
  (0, __dependency_0["inheritsLoose"])(_0x4b2355, _0x4789a2), _0x4b2355["getPrefabUrl"] = function () {
    return "prefabs/view/RecordViewL";
  };
  var _0x23ea53 = _0x4b2355["prototype"];
  return _0x23ea53["init"] = function () {
    _0x4789a2["prototype"]["init"]["call"](this), this["showDetail"]();
  }, _0x23ea53["showDetail"] = function () {
    "xin-star" === __dependency_7["default"]["getData"]()["theme"] && (this["detail"]['active'] = !0x0);
  }, _0x23ea53["openHistoryView"] = function () {
    App["uiManager"]['open']({
      'type': __dependency_4["default"],
      'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]['slotFramework']],
      'zIndex': __dependency_2["ViewZOrder"]['UI'],
      'name': "歷史紀錄"
    });
  }, (0, __dependency_0["createClass"])(_0x4b2355, [{
    'key': "getRecordViewItemPrefabUrl",
    'get': function () {
      return this['data']['getData']()["filePaths"]["recordItemLPrefab"];
    }
  }]), _0x4b2355;
}(__dependency_5["default"]))['prototype'], 'detail', [_0x1482e5], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2d432e = _0x59cc6c)) || _0x2d432e));
__dependency_1["cclegacy"]['_RF']["pop"]();
