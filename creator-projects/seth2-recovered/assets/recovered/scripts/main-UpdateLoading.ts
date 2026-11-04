// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UpdateLoading.ts.js
// SHA256: cd5ef0a217a8ac8e3d12b1e4bcb3c06ac3c05b153eee7d02d5ce6d140b9962bd
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Loading";
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
(function (t) {
  void 0;
})(__dependency_0);
(function (t) {
  void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "634b97zYMlAP5z8Buea/nWN", "UpdateLoading", void 0), __publish("default", function (t) {
  function e() {
    for (var n, e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
    return (n = Reflect.construct(t, [this].concat(i).slice(1), new.target || e) || this).module = null, n;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var i = e.prototype;
  return i.show = function (t, n, e) {
    return this.timeOutCb = void 0, this._show(999), this._content = [], "string" == typeof t && this._content.push(t), this;
  }, i.startShowContent = function () {
    this.text.string = this._content[0];
  }, i.updateProgress = function (t) {
    if (this.text) {
      if (null == t || null == t || Number.isNaN(t) || t < 0) return void this.hide();
      t >= 0 && t <= 100 && (this.text.string = App.getLanguage("loadingProgress", [t]));
    }
  }, e;
}(__dependency_2.default)).module = "【UpdateLoading】", __dependency_1.cclegacy._RF.pop();
