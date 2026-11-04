// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-LoadUtils.ts.js
// SHA256: 133109e0a20e6117638cda54a73b79bec7e4369fdd8b845afca5d1322d0cf28a
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as LoadUtils };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LoadUtils":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x38f5e9) {
  void 0;
})(__dependency_0);
__dependency_0["cclegacy"]["_RF"]["push"]({}, "8c5cbVFIvRKYaV9Jau2YnXq", 'LoadUtils', void 0x0);
__publish('LoadUtils', function () {
  function _0x4fa7c1() {}
  return _0x4fa7c1['getDirSp'] = function (_0x8fb91f, _0x52d095, _0x1a94b2) {
    var _0x1b68d2 = App["cache"]['get'](_0x8fb91f, _0x52d095)['data']['find'](function (_0x333f1d) {
      return _0x333f1d["name"] === _0x1a94b2;
    });
    if (!_0x1b68d2) throw new Error("NOT FIND 所需SpriteFrame " + _0x1a94b2);
    return _0x1b68d2;
  }, _0x4fa7c1["getDirSkeleton"] = function (_0xbc26bd, _0xf72dc3, _0x5b35a4) {
    var _0x41375e = App["cache"]['get'](_0xbc26bd, _0xf72dc3)['data']["find"](function (_0x39a0ac) {
      return _0x39a0ac["name"] === _0x5b35a4;
    });
    if (!_0x41375e) throw new Error("NOT FIND 所需SpriteFrame " + _0x5b35a4);
    return _0x41375e;
  }, _0x4fa7c1["getDirPrefab"] = function (_0x19b24e, _0x5ab767, _0x4e78a6) {
    var _0x215e71 = App["cache"]["get"](_0x19b24e, _0x5ab767)["data"]["find"](function (_0x4dea93) {
      return _0x4dea93["name"] === _0x4e78a6;
    });
    if (!_0x215e71) throw new Error('NOT\x20FIND\x20所需Prefab\x20' + _0x4e78a6);
    return _0x215e71;
  }, _0x4fa7c1["getDirAtlas"] = function (_0x44b478, _0x1ed0cf, _0x1e714) {
    var _0x922fb = App['cache']["get"](_0x44b478, _0x1ed0cf)["data"]["getSpriteFrame"](_0x1e714);
    if (!_0x922fb) throw new Error('Not\x20Find\x20所需圖片\x20' + _0x1e714);
    return _0x922fb;
  }, _0x4fa7c1;
}());
__dependency_0["cclegacy"]["_RF"]["pop"]();
