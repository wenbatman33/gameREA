// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ReplayModel.ts.js
// SHA256: ff9eb1abe5366eb3ef3c371b4fed3524cc70cd3efbc06eab7ae01bfa485f98e1
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
var __export_0;
export { __export_0 as EReplayMode };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EReplayMode":
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
(function (_0x1146dd) {
  void 0;
})(__dependency_0);
(function (_0x29f68a) {
  void 0;
})(__dependency_1);
(function (_0x47436e) {
  void 0;
})(__dependency_2);
var _0x124266;
__publish("EReplayMode", void 0x0), __dependency_1["cclegacy"]["_RF"]["push"]({}, "a01a6z9NUBAkIC8zaboQmla", "ReplayModel", void 0x0), function (_0xd62e1e) {
  _0xd62e1e['NONE'] = "none", _0xd62e1e["URL_REPLAY"] = "url_replay", _0xd62e1e["RANKING_REPLAY"] = "ranking_replay";
}(_0x124266 || (_0x124266 = __publish("EReplayMode", {})));
var _0x31c6b5 = function (_0x5e6795) {
  function _0x311cbe() {
    var _0x3d35c6;
    return (_0x3d35c6 = Reflect.construct(_0x5e6795, [], new.target || _0x311cbe) || this)["index"] = 0x0, _0x3d35c6["isReplay"] = !0x1, _0x3d35c6['replayMode'] = _0x124266["NONE"], _0x3d35c6;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x311cbe, _0x5e6795), _0x311cbe["Instance"] = function () {
    return this["_instance"] || (this["_instance"] = new _0x311cbe());
  }, _0x311cbe["prototype"]["reset"] = function () {
    this['index'] = 0x0;
  }, _0x311cbe;
}(__dependency_2["BaseModel"]);
_0x31c6b5['_instance'] = null;
__publish('default', _0x31c6b5["Instance"]());
__dependency_1["cclegacy"]['_RF']["pop"]();
