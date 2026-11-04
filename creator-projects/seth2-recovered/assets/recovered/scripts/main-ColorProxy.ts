// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ColorProxy.ts.js
// SHA256: 39c2356aacd7c5bd6b2739cbe8920c9ea8f21f030eea4487e7fc536cc5686afc
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as injectColorData };
var __export_1;
export { __export_1 as ColorProxy };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "injectColorData":
      __export_0 = value;
      break;
    case "ColorProxy":
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
__publish("injectColorData", function (t) {}), __dependency_0.cclegacy._RF.push({}, "dce5fFimkxGyYeB+PcKCJ9U", "ColorProxy", void 0);
__publish("ColorProxy", function () {
  function t() {
    this.bundle = void 0, this.datas = new Map(), this.init();
  }
  var o = t.prototype;
  return o.add = function (t) {
    t.mode ? this.datas.set(t.mode, t) : this.datas.set("enum", t);
  }, o.merge = function (t, o) {
    var e = this.datas.get(t);
    return e && (o[this.bundle] = e.data), o;
  }, o.importColors = function (t) {
    for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
      var e = t[o];
      this.add(e);
    }
  }, t;
}());
__dependency_0.cclegacy._RF.pop();
