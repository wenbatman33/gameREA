// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ReadyBundleModel.ts.js
// SHA256: b5b9754a93808f02fe05e39e1349ec7ed157166c8e44e8c18a5473354f1d09f7
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
var __export_0;
export { __export_0 as EReadyStatus };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EReadyStatus":
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
(function (_0x4e7fc5) {
  void 0;
})(__dependency_0);
(function (_0x30b85d) {
  void 0;
})(__dependency_1);
(function (_0x3c1654) {
  void 0;
})(__dependency_2);
var _0x2dbdbf;
__publish("EReadyStatus", void 0x0), __dependency_1["cclegacy"]["_RF"]["push"]({}, "7cb4a+S7OBDAJkrFJczd/g4", "ReadyBundleModel", void 0x0), function (_0x4b83ab) {
  _0x4b83ab[_0x4b83ab["init"] = 0x0] = "init", _0x4b83ab[_0x4b83ab["loading"] = 0x1] = "loading", _0x4b83ab[_0x4b83ab['complete'] = 0x2] = "complete";
}(_0x2dbdbf || (_0x2dbdbf = __publish("EReadyStatus", {})));
var _0x3f959d = function (_0x2383eb) {
  function _0x2aac44() {
    var _0x23abef;
    return (_0x23abef = Reflect.construct(_0x2383eb, [], new.target || _0x2aac44) || this)["data"] = {
      'loadCompleteMap': new Map(),
      'status': null
    }, _0x23abef;
  }
  (0, __dependency_0["inheritsLoose"])(_0x2aac44, _0x2383eb), _0x2aac44['Instance'] = function () {
    return this["_instance"] || (this["_instance"] = new _0x2aac44());
  };
  var _0x25f37a = _0x2aac44["prototype"];
  return _0x25f37a['checkComplete'] = function () {
    return Array['from'](this["data"]["loadCompleteMap"]["values"]())["every"](function (_0x2c01e4) {
      return !0x0 === _0x2c01e4;
    });
  }, _0x25f37a['init'] = function (_0x213b5d) {
    var _0x31079c = this;
    this['data']['status'] = _0x2dbdbf["init"], _0x213b5d["forEach"](function (_0x27166e) {
      _0x31079c['data']["loadCompleteMap"]["set"](_0x27166e, !0x1);
    });
  }, _0x25f37a['setComplete'] = function (_0x17a69b) {
    this["data"]["status"] = _0x2dbdbf['loading'], this["data"]["loadCompleteMap"]["set"](_0x17a69b, !0x0), this["checkComplete"]() && (this['data']["status"] = _0x2dbdbf["complete"]);
  }, _0x25f37a["isComplete"] = function () {
    return this["data"]["status"] === _0x2dbdbf["complete"];
  }, _0x25f37a["reset"] = function () {
    this["data"] = {
      'loadCompleteMap': new Map(),
      'status': null
    };
  }, _0x2aac44;
}(__dependency_2["BaseModel"]);
_0x3f959d['_instance'] = null;
__publish("default", _0x3f959d['Instance']());
__dependency_1["cclegacy"]["_RF"]['pop']();
