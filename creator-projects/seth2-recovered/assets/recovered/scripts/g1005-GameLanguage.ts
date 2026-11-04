// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameLanguage.ts.js
// SHA256: be1575c9261212480036f1d1106404736011d27491466abb022c65371686750b
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-LanguageDelegate";
import * as __dependency_3 from "./g1005-GameData";
import * as __dependency_4 from "./g1005-GameLanguages";
var __export_0;
export { __export_0 as GameLanguage };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameLanguage":
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
var c;
__dependency_1.cclegacy._RF.push({}, "f1193TL7XRNTotDdk19nkad", "GameLanguage", void 0);
__publish("GameLanguage", (0, __dependency_2.injectLanguageData)(c = function (e) {
  function n() {
    for (var t, n = arguments.length, a = new Array(n), u = 0; u < n; u++) a[u] = arguments[u];
    return (t = Reflect.construct(e, [this].concat(a).slice(1), new.target || n) || this).bundle = __dependency_3.default.module, t;
  }
  return (0, __dependency_0.inheritsLoose)(n, e), n.prototype.init = function () {
    this.importLanguages(__dependency_4);
  }, n;
}(__dependency_2.LanguageDelegate)) || c);
__dependency_1.cclegacy._RF.pop();
