// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-GameRulesViewP.ts.js
// SHA256: 537e5e9f2009ae8212385bd25ee7a9f50d8b4caa195582ba5d07c8f8c9ac9ecb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-GameRulesView";
import * as __dependency_3 from "./main-Bundles";
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
(function (_0x10cf8e) {
  void 0;
})(__dependency_0);
(function (_0x1ac81e) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x356fa1) {
  void 0;
})(__dependency_2);
(function (_0x233558) {
  void 0;
})(__dependency_3);
var _0x25eb6a;
__dependency_1["cclegacy"]['_RF']['push']({}, "ef1bbLbMRxPpaoXOjMsuQKU", "GameRulesViewP", void 0x0);
var _0x196742 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("default", _0x196742('GameRulesViewP')(_0x25eb6a = function (_0x589b3c) {
  function _0x25336b() {
    return Reflect.construct(_0x589b3c, arguments, new.target || _0x25336b) || this;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x25336b, _0x589b3c), _0x25336b["getPrefabUrl"] = function () {
    return "prefabs/view/GameRulesViewP";
  }, _0x25336b['prototype']["setRuleAssets"] = function () {
    var _0x3de6b0 = this,
      _0x3f8840 = App["cache"]["get"](this['args']['bundle'], this["args"]["background"])["data"]["find"](function (_0x5a5813) {
        return "mg_bg" === _0x5a5813['name'];
      });
    this["background"]['getComponent'](__dependency_1["Sprite"])['spriteFrame'] = _0x3f8840;
    var _0x238e60 = App["cache"]["get"](this["args"]['bundle'], this['args']["rules"])["data"]["filter"](function (_0x31220f) {
      return _0x31220f["name"]["includes"]("rule");
    });
    _0x238e60["sort"](function (_0x4dcce5, _0x3de9fe) {
      return Number(_0x4dcce5['name']['split']('_')[0x1]) - Number(_0x3de9fe["name"]["split"]('_')[0x1]);
    }), this["args"]["excludeIndexes"] && this["args"]["excludeIndexes"]["length"] > 0x0 && (_0x238e60 = _0x238e60['filter'](function (_0x29731f) {
      var _0x38a987 = Number(_0x29731f["name"]['split']('_')[0x1]);
      return !(_0x3de6b0['args']["excludeIndexes"]["indexOf"](_0x38a987) > -0x1);
    }));
    var _0x29de4b = App['cache']["get"](__dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]], "prefabs/component/ruleItem")["data"];
    _0x238e60["forEach"](function (_0x2191ea) {
      var _0x58f610 = (0, __dependency_1["instantiate"])(_0x29de4b);
      _0x58f610["getComponent"](__dependency_1["UITransform"])["setContentSize"](0x2d0, 0x500), (0, __dependency_1["find"])('rule', _0x58f610)["getComponent"](__dependency_1["Sprite"])["spriteFrame"] = _0x2191ea, _0x3de6b0["flag"] ? _0x3de6b0["content"]["addChild"](_0x58f610) : _0x3de6b0["pageView"]["addPage"](_0x58f610);
    });
  }, _0x25336b;
}(__dependency_2['default'])) || _0x25eb6a);
__dependency_1["cclegacy"]["_RF"]["pop"]();
