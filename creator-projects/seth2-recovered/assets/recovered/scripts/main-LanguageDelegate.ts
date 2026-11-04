// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-LanguageDelegate.ts.js
// SHA256: 9d0531e14eeccab5a161f497911ee9663bd6bbdaa8fc808fba28789718e6d178
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as injectLanguageData };
var __export_1;
export { __export_1 as LanguageDelegate };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "injectLanguageData":
      __export_0 = value;
      break;
    case "LanguageDelegate":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0;
})(__dependency_0);
(function (t) {
  void 0;
})(__dependency_1);
__publish("injectLanguageData", function (t) {}), __dependency_1.cclegacy._RF.push({}, "de77dZMRVZDYY4iKST+8vLn", "LanguageDelegate", void 0);
__publish("LanguageDelegate", function () {
  function t() {
    this.bundle = void 0, this.datas = new Map(), this._arrLanguages = [], this.init();
  }
  var a = t.prototype;
  return a.add = function (t) {
    this.datas.set(t.language, t), this._arrLanguages.push(t.language);
  }, a.merge = function (t, e) {
    var a = this.datas.get(t);
    return a && (e[this.bundle] = a.data), e;
  }, a.importLanguages = function (t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
      var a = t[e];
      this.add(a);
    }
  }, (0, __dependency_0.createClass)(t, [{
    key: "supportLanguages",
    get: function () {
      return this._arrLanguages.slice();
    }
  }]), t;
}());
__dependency_1.cclegacy._RF.pop();
