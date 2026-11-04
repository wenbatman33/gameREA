// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CommonLanguage.ts.js
// SHA256: bd4a5663fe7e09c35dd97eec9283679c7fa17ec6a4fb5e95eabbfe67c1a9ecac
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-LanguageZH";
import * as __dependency_3 from "./main-LanguageEN";
import * as __dependency_4 from "./main-LanguageCN";
import * as __dependency_5 from "./main-LanguageVN";
import * as __dependency_6 from "./main-Macros";
import * as __dependency_7 from "./main-LanguageDelegate";
import * as __dependency_8 from "./main-Bundles";
import * as __dependency_9 from "./main-LanguageTH";
import * as __dependency_10 from "./main-LanguageTR";
var __export_0;
export { __export_0 as CommonLanguage };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CommonLanguage":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (n) {
  void 0, void 0;
})(__dependency_0);
(function (n) {
  void 0;
})(__dependency_1);
(function (n) {
  void 0;
})(__dependency_2);
(function (n) {
  void 0;
})(__dependency_3);
(function (n) {
  void 0;
})(__dependency_4);
(function (n) {
  void 0;
})(__dependency_5);
(function (n) {
  void 0;
})(__dependency_6);
(function (n) {
  void 0;
})(__dependency_7);
(function (n) {
  void 0;
})(__dependency_8);
(function (n) {
  void 0;
})(__dependency_9);
(function (n) {
  void 0;
})(__dependency_10);
__dependency_1.cclegacy._RF.push({}, "495989qswZParhGpu1PcGUI", "CommonLanguage", void 0);
__publish("CommonLanguage", function (n) {
  function t() {
    for (var a, e = arguments.length, t = new Array(e), u = 0; u < e; u++) t[u] = arguments[u];
    return (a = Reflect.construct(n, [this].concat(t).slice(1), new.target || t) || this).bundle = __dependency_6.Macro.BUNDLE_RESOURCES, a;
  }
  (0, __dependency_0.inheritsLoose)(t, n);
  var i = t.prototype;
  return i.init = function () {
    this.mergeBundles(), this.add(__dependency_3.LanguageEN), this.add(__dependency_2.LanguageZH), this.add(__dependency_4.LanguageCN), this.add(__dependency_5.LanguageVN), this.add(__dependency_9.LanguageTH), this.add(__dependency_10.LanguageTR);
  }, i.mergeBundles = function () {
    __dependency_3.LanguageEN.data.bundles = (0, __dependency_0.extends)({}, __dependency_8.Bundles.bundles), __dependency_2.LanguageZH.data.bundles = (0, __dependency_0.extends)({}, __dependency_8.Bundles.bundles), __dependency_4.LanguageCN.data.bundles = (0, __dependency_0.extends)({}, __dependency_8.Bundles.bundles), __dependency_5.LanguageVN.data.bundles = (0, __dependency_0.extends)({}, __dependency_8.Bundles.bundles), __dependency_9.LanguageTH.data.bundles = (0, __dependency_0.extends)({}, __dependency_8.Bundles.bundles), __dependency_10.LanguageTR.data.bundles = (0, __dependency_0.extends)({}, __dependency_8.Bundles.bundles);
  }, t;
}(__dependency_7.LanguageDelegate));
__dependency_1.cclegacy._RF.pop();
