// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UrlUtils.ts.js
// SHA256: f4799e309bef4e34825f67a56bc5d5dbdfe539e5f8babed15a647829ab0a1a8c
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-env";
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
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
__dependency_0.cclegacy._RF.push({}, "968b8vP7BtFM6aNpdaUJsj5", "UrlUtils", void 0), __publish("default", function () {
  function e() {}
  return e.getParam = function (e, n) {
    if (void 0 === n && (n = window.location.href), !__dependency_0.sys.isNative) return new URL(n).searchParams.get(e);
  }, e.hasParam = function (e, n) {
    if (void 0 === n && (n = window.location.href), !__dependency_0.sys.isNative) return "" !== n && new URL(n).searchParams.has(e);
  }, e.getSearchString = function () {
    if (!__dependency_0.sys.isNative) return new URL(window.location.href).searchParams.toString();
  }, e.getUrlProtocol = function () {
    if (!__dependency_0.sys.isNative) return new URL(window.location.href).protocol;
  }, e.getBaseUrl = function () {
    if (!__dependency_0.sys.isNative) return new URL(window.location.href).origin;
  }, e.getTokenFromUrl = function () {
    return new window.URL(window.location.href).searchParams.get("t");
  }, e.getHostname = function () {
    return new URL(window.location.href).hostname;
  }, e.GetBaseUrl = function () {
    return "localhost" === new URL(window.location.href).hostname ? __dependency_1.ENV.local.baseUrl : e.getBaseUrl();
  }, e.GetAvatarUrl = function (n) {
    if (n) {
      if (n.includes("http")) {
        var t = n.split(".");
        t.includes("png") || t.includes("jpg") || (n += ".png");
      } else n = e.GetBaseUrl() + "/avatars/" + n + ".png";
      return n;
    }
  }, e.getViewModeParam = function () {
    var n = e.getParam("gn") + "_view_mode",
      t = localStorage.getItem(n);
    return null != t ? null != window.viewMode ? window.viewMode : (window.viewMode = t, t) : e.getParam("view_mode") ? e.getParam("view_mode") : "landscape";
  }, e;
}()).viewMode = null, __dependency_0.cclegacy._RF.pop();
