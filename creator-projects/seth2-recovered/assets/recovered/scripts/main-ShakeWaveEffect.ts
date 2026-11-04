// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ShakeWaveEffect.ts.js
// SHA256: 102bd75b3009ea7db7aef3f323b004cc7f2e319511f44d809ef5ec54d2758f2d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as ShakeWaveEffect };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ShakeWaveEffect":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
var l, h, p, u, d, f, g, v, y, b, _;
__dependency_1.cclegacy._RF.push({}, "815abevjXdMcKbpdHxGHTMY", "ShakeWaveEffect", void 0);
var m = __dependency_1._decorator.ccclass,
  S = __dependency_1._decorator.property;
__publish("ShakeWaveEffect", (l = m("ShakeWaveEffect"), h = S({
  displayName: "抖動速度"
}), p = S({
  displayName: "抖動強度"
}), u = S({
  displayName: "水平方向"
}), d = S({
  displayName: "垂直方向"
}), l((v = (0, __dependency_0.applyDecoratedDescriptor)((g = function (t) {
  function e() {
    for (var e, r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "speedFactor", v, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "strengthFactor", y, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "isHorizontal", b, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "isVertical", _, (0, __dependency_0.assertThisInitialized)(e)), e._trans = void 0, e._pass = void 0, e._speedHandle = void 0, e._strengthHandler = void 0, e.waveStrength = 0, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var n = e.prototype;
  return n.onLoad = function () {
    this._pass = this.node.getComponent(__dependency_1.Sprite).material.passes[0], this._speedHandle = this._pass.getHandle("speedFactor"), this._strengthHandler = this._pass.getHandle("strengthFactor"), this.waveStrength = 0, this._pass.setUniform(this._strengthHandler, this.strengthFactor);
  }, n.startWaveEffect = function (t) {
    this.waveStrength = 0;
  }, n.update = function (t) {
    this.waveStrength < this.strengthFactor && (this.waveStrength += .1 * t, this.waveStrength > this.strengthFactor && (this.waveStrength = .5));
  }, e;
}(__dependency_1.Component)).prototype, "speedFactor", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), y = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "strengthFactor", [p], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), b = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "isHorizontal", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), _ = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "isVertical", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), f = g)) || f));
__dependency_1.cclegacy._RF.pop();
