// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-UrlUtils2.ts.js
// SHA256: f49544eacb7ac6d04e9de0cd7ccdc5338f21cd946c45d0ed2ca4fb17a462127c
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./framework-UrlModel";
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
(function (_0x274878) {
  void 0, void 0;
})(__dependency_0);
(function (_0x2f816) {
  void 0;
})(__dependency_1);
__dependency_0["cclegacy"]["_RF"]["push"]({}, 'dc9242KCylKNaq6Yhlr3KQP', "UrlUtils", void 0x0);
__publish("default", function () {
  function _0x397d1f() {}
  return _0x397d1f["getParam"] = function (_0x347097) {
    if (!__dependency_0['sys']["isNative"]) return new URL(window['location']['href'])["searchParams"]['get'](_0x347097);
  }, _0x397d1f["getUrlParam"] = function (_0x46e123, _0x24560e) {
    if (!__dependency_0['sys']["isNative"]) return new URL(_0x46e123)["searchParams"]['get'](_0x24560e);
  }, _0x397d1f['hasParam'] = function (_0x5af892, _0xcc7eec) {
    if (void 0x0 === _0xcc7eec && (_0xcc7eec = window["location"]["href"]), !__dependency_0['sys']["isNative"]) return new URL(_0xcc7eec)["searchParams"]["has"](_0x5af892);
  }, _0x397d1f["getSearchString"] = function () {
    if (!__dependency_0['sys']["isNative"]) return new URL(window['location']["href"])['searchParams']['toString']();
  }, _0x397d1f["getUrlProtocol"] = function () {
    if (!__dependency_0['sys']["isNative"]) return new URL(window["location"]["href"])["protocol"];
  }, _0x397d1f["getBaseUrl"] = function () {
    if (!__dependency_0['sys']['isNative']) return new URL(window["location"]["href"])["origin"];
  }, _0x397d1f["getTokenFromUrl"] = function () {
    return new window["URL"](window['location']["href"])["searchParams"]["get"]('t');
  }, _0x397d1f["getHostname"] = function () {
    return new URL(window["location"]["href"])['hostname'];
  }, _0x397d1f['GetAvatarUrl'] = function (_0x76f3ce) {
    if (_0x76f3ce) {
      if (_0x76f3ce["includes"]("http")) {
        var _0x16f4cb = _0x76f3ce["split"]('.');
        _0x16f4cb['includes']("png") || _0x16f4cb["includes"]("jpg") || (_0x76f3ce += ".png");
      } else _0x76f3ce = __dependency_1["default"]["base_url"] + '/avatars/' + _0x76f3ce + ".png";
      return _0x76f3ce;
    }
  }, _0x397d1f;
}());
__dependency_0["cclegacy"]["_RF"]["pop"]();
