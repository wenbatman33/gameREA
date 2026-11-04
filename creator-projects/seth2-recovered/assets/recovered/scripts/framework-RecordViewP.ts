// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RecordViewP.ts.js
// SHA256: edb8f7ca39ade0d8f4dfa087ec4424a869bfe1c3b2b98310c39c7498be3362c9
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-CmmUtils";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-HistoryViewP";
import * as __dependency_7 from "./framework-RecordViewBase";
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
(function (_0x4429b8) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x3699eb) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0x5add80) {
  void 0;
})(__dependency_2);
(function (_0x7dcde) {
  void 0;
})(__dependency_3);
(function (_0x23732e) {
  void 0;
})(__dependency_4);
(function (_0x431df5) {
  void 0;
})(__dependency_5);
(function (_0x561833) {
  void 0;
})(__dependency_6);
(function (_0x36ce47) {
  void 0;
})(__dependency_7);
var _0x3ba30e, _0x297f08, _0x477ef3, _0x27f2fe, _0x26eab3, _0x42a8cb, _0x28a74a, _0x40f3d3, _0x467a95, _0x10571e, _0x1f1731;
__dependency_1['cclegacy']["_RF"]["push"]({}, "eef8bggS3ZH+JRXpkkrMgUl", "RecordViewP", void 0x0);
var _0x2a6ede = __dependency_1["_decorator"]['ccclass'];
__publish("default", (_0x3ba30e = _0x2a6ede('RecordViewP'), _0x297f08 = (0, __dependency_5["inject"])('content/topBar/featureContent/fgLabelMask', __dependency_1["Node"]), _0x477ef3 = (0, __dependency_5["inject"])('content/topBar/featureContent/fgLabelMask/fgLabel', __dependency_1["Node"]), _0x27f2fe = (0, __dependency_5["inject"])("content/topBar/featureContent/featureLabelMask", __dependency_1["Node"]), _0x26eab3 = (0, __dependency_5["inject"])("content/topBar/featureContent/featureLabelMask/featureLabel", __dependency_1["Node"]), _0x3ba30e((_0x40f3d3 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x28a74a = function (_0x41192b) {
  function _0x4d7546() {
    for (var _0x4f2f6c, _0xa4e324 = arguments["length"], _0x2e98a3 = new Array(_0xa4e324), _0x5815d9 = 0x0; _0x5815d9 < _0xa4e324; _0x5815d9++) _0x2e98a3[_0x5815d9] = arguments[_0x5815d9];
    return _0x4f2f6c = Reflect.construct(_0x41192b, [this]["concat"](_0x2e98a3).slice(1), new.target || _0x4d7546) || this, (0, __dependency_0["initializerDefineProperty"])(_0x4f2f6c, "fgLabelMask", _0x40f3d3, (0, __dependency_0["assertThisInitialized"])(_0x4f2f6c)), (0, __dependency_0["initializerDefineProperty"])(_0x4f2f6c, "fgLabel", _0x467a95, (0, __dependency_0["assertThisInitialized"])(_0x4f2f6c)), (0, __dependency_0["initializerDefineProperty"])(_0x4f2f6c, "featureLabelMask", _0x10571e, (0, __dependency_0["assertThisInitialized"])(_0x4f2f6c)), (0, __dependency_0["initializerDefineProperty"])(_0x4f2f6c, "featureLabel", _0x1f1731, (0, __dependency_0["assertThisInitialized"])(_0x4f2f6c)), _0x4f2f6c;
  }
  (0, __dependency_0["inheritsLoose"])(_0x4d7546, _0x41192b);
  var _0x328d9a = _0x4d7546["prototype"];
  return _0x328d9a["start"] = function () {
    _0x41192b["prototype"]["start"]['call'](this), this['initLabelMarquee']();
  }, _0x4d7546["getPrefabUrl"] = function () {
    return 'prefabs/view/RecordViewP';
  }, _0x328d9a["initLabelMarquee"] = function () {
    var _0x5c6590 = {
      'maskNode': this["fgLabelMask"],
      'labelNode': this["fgLabel"],
      'delayTime': 0x2
    };
    this["scheduleOnce"](function () {
      __dependency_4["CmmUtils"]["labelMarquee"](_0x5c6590);
    });
    var _0x446e79 = {
      'maskNode': this["featureLabelMask"],
      'labelNode': this["featureLabel"],
      'delayTime': 0x2
    };
    this["scheduleOnce"](function () {
      __dependency_4["CmmUtils"]["labelMarquee"](_0x446e79);
    });
  }, _0x328d9a["openHistoryView"] = function () {
    App['uiManager']["open"]({
      'type': __dependency_6['default'],
      'bundle': __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]],
      'zIndex': __dependency_2['ViewZOrder']['UI'],
      'name': "歷史紀錄"
    });
  }, (0, __dependency_0["createClass"])(_0x4d7546, [{
    'key': 'getRecordViewItemPrefabUrl',
    'get': function () {
      return this["data"]["getData"]()["filePaths"]["recordItemPPrefab"];
    }
  }]), _0x4d7546;
}(__dependency_7["default"]))["prototype"], "fgLabelMask", [_0x297f08], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x467a95 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x28a74a["prototype"], "fgLabel", [_0x477ef3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x10571e = (0, __dependency_0["applyDecoratedDescriptor"])(_0x28a74a["prototype"], "featureLabelMask", [_0x27f2fe], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1f1731 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x28a74a['prototype'], "featureLabel", [_0x26eab3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x42a8cb = _0x28a74a)) || _0x42a8cb));
__dependency_1['cclegacy']["_RF"]["pop"]();
