// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-FlashSpine.ts.js
// SHA256: 3a5bc9191ffee9230d8676a3d24a724201724264e9cdec1237e8fff6616698d7
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
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
  void 0, void 0, void 0, void 0;
})(__dependency_1);
var a;
__dependency_1.cclegacy._RF.push({}, "539c1RLUZ1HfYSgRVHurL/Z", "FlashSpine", void 0);
var o = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("default", o("FlashSpine")(a = function (t) {
  function i() {
    for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
    return (e = Reflect.construct(t, [this].concat(n).slice(1), new.target || i) || this).duration = .5, e._median = 0, e._time = 0, e._material = null, e._skeleton = null, e;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var n = i.prototype;
  return n.onLoad = function () {
    this._median = this.duration / 2, this._skeleton = this.node.getComponent(__dependency_1.sp.Skeleton), this._material = this._skeleton.customMaterial, this._material.setProperty("u_rate", 1);
  }, n.update = function (t) {
    if (this._time > 0) {
      this._time -= t, this._time = this._time < 0 ? 0 : this._time;
      var e = 2 * Math.abs(this._time - this._median) / this.duration,
        i = this._skeleton._materialCache;
      for (var n in i) {
        i[n].setProperty("u_rate", e);
      }
    }
  }, n.clickFlash = function () {
    this._time = this.duration;
  }, i;
}(__dependency_1.Component)) || a);
__dependency_1.cclegacy._RF.pop();
