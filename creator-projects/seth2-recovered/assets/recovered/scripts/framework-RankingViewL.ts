// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RankingViewL.ts.js
// SHA256: 8c75d0c245c5ac2d74b8d77e1c51a4e3abea29754701334f165ae3842a37e80b
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-RankingViewBase";
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
(function (_0x45cb78) {
  void 0, void 0;
})(__dependency_0);
(function (_0x3b2374) {
  void 0, void 0;
})(__dependency_1);
(function (_0x4998ad) {
  void 0;
})(__dependency_2);
var _0x2cc297;
__dependency_1['cclegacy']["_RF"]["push"]({}, 'ada01Nv43ZGnbgMB9EbEiZ+', "RankingViewL", void 0x0);
var _0x2c2985 = __dependency_1["_decorator"]["ccclass"];
__publish("default", _0x2c2985('RankingViewL')(_0x2cc297 = function (_0x6e5c3a) {
  function _0xe3da5d() {
    return Reflect.construct(_0x6e5c3a, arguments, new.target || _0xe3da5d) || this;
  }
  return (0, __dependency_0["inheritsLoose"])(_0xe3da5d, _0x6e5c3a), _0xe3da5d["prototype"]["start"] = function () {
    _0x6e5c3a['prototype']["start"]['call'](this);
  }, _0xe3da5d['getPrefabUrl'] = function () {
    return "prefabs/view/RankingViewL";
  }, (0, __dependency_0['createClass'])(_0xe3da5d, [{
    'key': "getRankingItemPrefabUrl",
    'get': function () {
      return this["data"]["getData"]()['filePaths']["rankingItemLPrefab"];
    }
  }]), _0xe3da5d;
}(__dependency_2["default"])) || _0x2cc297);
__dependency_1['cclegacy']['_RF']["pop"]();
