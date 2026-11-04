// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WrapperLanguage.ts.js
// SHA256: 0e1999de76722c6a0673824b41148e84d8774d0262dcfba05344ed26e3cc6f87
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-LanguageDelegate";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-WrapperLanguages";
var __export_0;
export { __export_0 as WrapperLanguage };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WrapperLanguage":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
(function (e) {
  void 0, void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
var s;
__dependency_1.cclegacy._RF.push({}, "145c16Ty1VF5psCT5CUSYwT", "WrapperLanguage", void 0);
__publish("WrapperLanguage", (0, __dependency_2.injectLanguageData)(s = function (e) {
  function t() {
    for (var n, t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
    return (n = Reflect.construct(e, [this].concat(a).slice(1), new.target || t) || this).bundle = __dependency_3.EBundles[__dependency_3.EBundles.wrapper], n;
  }
  return (0, __dependency_0.inheritsLoose)(t, e), t.prototype.init = function () {
    this.importLanguages(__dependency_4);
  }, t;
}(__dependency_2.LanguageDelegate)) || s);
__dependency_1.cclegacy._RF.pop();
