// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ButtonFactory.ts.js
// SHA256: f830f4f912a2c504e37c8aeb56140e51d493f300b88d44f90fcb36b656d7733f
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-ImageButton";
var __export_0;
export { __export_0 as EButtonFactory };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EButtonFactory":
      __export_0 = value;
      break;
    case "default":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0xb879bf) {
  void 0;
})(__dependency_0);
(function (_0x475fab) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0xf41ab3) {
  void 0;
})(__dependency_2);
(function (_0x40fda8) {
  void 0;
})(__dependency_3);
(function (_0x55ebfb) {
  void 0;
})(__dependency_4);
__publish("EButtonFactory", void 0x0), __dependency_1['cclegacy']["_RF"]["push"]({}, "32f75tOIwZEZoJuTqY4XViL", "ButtonFactory", void 0x0);
var _0x40557a;
__dependency_1["_decorator"]["ccclass"], __dependency_1["_decorator"]["property"];
!function (_0x17f03e) {
  _0x17f03e["ImageButton"] = 'ImageButton', _0x17f03e['SpineButton'] = "SpineButton";
}(_0x40557a || (_0x40557a = __publish("EButtonFactory", {})));
__publish("default", function (_0x1fc1ed) {
  function _0x57fd91() {
    return Reflect.construct(_0x1fc1ed, arguments, new.target || _0x57fd91) || this;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x57fd91, _0x1fc1ed), _0x57fd91["prototype"]["createButton"] = function (_0x4ec261, _0x417462) {
    if (_0x4ec261 === _0x40557a["ImageButton"]) {
      var _0x3888d3 = App["cache"]["get"](__dependency_2["EBundles"][__dependency_2["EBundles"]['slotFramework']], "prefabs/ui/button/ImageButton")["data"],
        _0x26d4e5 = (0, __dependency_1["instantiate"])(_0x3888d3);
      return _0x26d4e5['name'] = _0x417462, _0x26d4e5["addComponent"](__dependency_4["ImageButton"]);
    }
    if (_0x4ec261 !== _0x40557a["SpineButton"]) throw new Error("无法创建该类型的按钮");
  }, _0x57fd91;
}(__dependency_3["SingletonExtends"])['instance']());
__dependency_1['cclegacy']["_RF"]["pop"]();
