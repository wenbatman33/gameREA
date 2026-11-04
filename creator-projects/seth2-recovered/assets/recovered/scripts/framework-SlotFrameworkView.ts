// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotFrameworkView.ts.js
// SHA256: 1a5a488e13a86bd9adbd08b23463d46e17f3472bb9a3f2f5bd608ca67ea238ce
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-GameViewBase";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-GameNameMap";
import * as __dependency_6 from "./framework-SlotFrameworkData";
import * as __dependency_7 from "./framework-SlotFrameworkLogic";
import * as __dependency_8 from "./framework-UrlModel";
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
(function (_0x760f0a) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x3b3e8e) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0x2e4b95) {
  void 0;
})(__dependency_2);
(function (_0x583fa9) {
  void 0;
})(__dependency_3);
(function (_0x1b79f1) {
  void 0;
})(__dependency_4);
(function (_0x2f7301) {
  void 0;
})(__dependency_5);
(function (_0x5eff51) {
  void 0;
})(__dependency_6);
(function (_0x5bbcf1) {
  void 0;
})(__dependency_7);
(function (_0x29afbd) {
  void 0;
})(__dependency_8);
var _0x46af7a, _0x4cd798, _0x24c0cf, _0x2671e2, _0x7ecb90;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '07814um1flLw5Lo3vVTUktG', "SlotFrameworkView", void 0x0);
var _0x258c39 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("default", (_0x46af7a = (0, __dependency_4["inject"])('content/bbr', __dependency_1['Node']), _0x258c39(((_0x7ecb90 = function (_0x39e658) {
  function _0x13b379() {
    for (var _0x39f3f6, _0x410f10 = arguments["length"], _0x13004c = new Array(_0x410f10), _0x467057 = 0x0; _0x467057 < _0x410f10; _0x467057++) _0x13004c[_0x467057] = arguments[_0x467057];
    return _0x39f3f6 = Reflect.construct(_0x39e658, [this]["concat"](_0x13004c).slice(1), new.target || _0x13b379) || this, (0, __dependency_0["initializerDefineProperty"])(_0x39f3f6, "bbr", _0x2671e2, (0, __dependency_0["assertThisInitialized"])(_0x39f3f6)), _0x39f3f6;
  }
  (0, __dependency_0["inheritsLoose"])(_0x13b379, _0x39e658), _0x13b379["getPrefabUrl"] = function () {
    return "prefabs/view/SlotFrameworkView";
  };
  var _0x10abe0 = _0x13b379["prototype"];
  return _0x10abe0['onLoad'] = function () {
    _0x39e658["prototype"]['onLoad']['call'](this);
  }, _0x10abe0['start'] = function () {
    this['enableBBR'](!0x0), this["init"]();
  }, _0x10abe0['onDestroy'] = function () {}, _0x10abe0['init'] = function () {
    var _0x74a70 = __dependency_8["default"]["searchParams"]['gn'];
    if (null != _0x74a70) {
      var _0x5a2c80 = __dependency_5["GameNameMap"][_0x74a70];
      App["entryManager"]["enterBundle"](_0x5a2c80);
    } else App["entryManager"]["enterBundle"](__dependency_2["EBundles"][__dependency_2["EBundles"]["g1001"]]);
  }, _0x10abe0['enableBBR'] = function (_0x598808) {
    this["bbr"]["active"] = _0x598808;
  }, _0x10abe0["addEvents"] = function () {
    _0x39e658["prototype"]['addEvents']["call"](this);
  }, (0, __dependency_0["createClass"])(_0x13b379, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_6["default"]);
    }
  }]), _0x13b379;
}(__dependency_3['default']))['logicType'] = __dependency_7["SlotFrameworkLogic"], _0x2671e2 = (0, __dependency_0['applyDecoratedDescriptor'])((_0x24c0cf = _0x7ecb90)['prototype'], "bbr", [_0x46af7a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': null
}), _0x4cd798 = _0x24c0cf)) || _0x4cd798));
__dependency_1["cclegacy"]["_RF"]['pop']();
