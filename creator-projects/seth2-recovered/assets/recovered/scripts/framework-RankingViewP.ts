// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RankingViewP.ts.js
// SHA256: 816e913a5f7a70c747285de4fa8533ac07dc185852cfd7b7855d62b9d53c3a71
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
(function (_0x41b2a7) {
  void 0, void 0;
})(__dependency_0);
(function (_0x327120) {
  void 0, void 0;
})(__dependency_1);
(function (_0x141eff) {
  void 0;
})(__dependency_2);
var _0x5d156d;
__dependency_1["cclegacy"]["_RF"]['push']({}, "51bfcZrRUZFu6G1OsBeWk3M", "RankingViewP", void 0x0);
var _0x53db5e = __dependency_1['_decorator']["ccclass"];
__publish('default', _0x53db5e('RankingViewP')(_0x5d156d = function (_0x4cf4fa) {
  function _0x456c1a() {
    return Reflect.construct(_0x4cf4fa, arguments, new.target || _0x456c1a) || this;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x456c1a, _0x4cf4fa), _0x456c1a['prototype']['start'] = function () {
    _0x4cf4fa["prototype"]["start"]['call'](this);
  }, _0x456c1a["getPrefabUrl"] = function () {
    return "prefabs/view/RankingViewP";
  }, (0, __dependency_0["createClass"])(_0x456c1a, [{
    'key': "getRankingItemPrefabUrl",
    'get': function () {
      return this["data"]["getData"]()['filePaths']['rankingItemPPrefab'];
    }
  }]), _0x456c1a;
}(__dependency_2['default'])) || _0x5d156d);
__dependency_1["cclegacy"]["_RF"]["pop"]();
