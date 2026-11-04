// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CompanyWaveEffect.ts.js
// SHA256: f851c00aff0cdf06fd0005256bd818abd294c75bae86a45baa4acebc8df0c4fe
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as CompanyWaveEffect };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CompanyWaveEffect":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var v, w, h, d, f, y, m, _, b, g, P, z, H, S, N, W, q;
__dependency_1.cclegacy._RF.push({}, "6cb62cHN4RMBZYKoc7SvcxK", "CompanyWaveEffect", void 0);
var C = __dependency_1._decorator.ccclass,
  D = __dependency_1._decorator.property;
__publish("CompanyWaveEffect", (v = C("CompanyWaveEffect"), w = D({
  displayName: "波的距離"
}), h = D({
  displayName: "波的移動速度"
}), d = D({
  displayName: "波的強度"
}), f = D({
  displayName: "波的開始位置"
}), y = D({
  displayName: "波的開始進度"
}), m = D({
  displayName: "波的頻率"
}), _ = D({
  displayName: "波的頻率"
}), v((P = (0, __dependency_0.applyDecoratedDescriptor)((g = function (e) {
  function t() {
    for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || t) || this, (0, __dependency_0.initializerDefineProperty)(t, "waveDistance", P, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveSpeed", z, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveStrength", H, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "wavePosition", S, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "startW", N, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveFrequency", W, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveAmplitude", q, (0, __dependency_0.assertThisInitialized)(t)), t._trans = void 0, t._pass = void 0, t._handle = void 0, t._frequencyHandle = void 0, t._amplitudeHandle = void 0, t.waveProp = new __dependency_1.Vec4(), t;
  }
  (0, __dependency_0.inheritsLoose)(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    this._trans = this.node.getComponent(__dependency_1.UITransform), this.waveProp.w = 200, this.waveProp.z = this.waveStrength, this._pass = this.node.getComponent(__dependency_1.Sprite).material.passes[0], this._handle = this._pass.getHandle("waveFactor"), this._frequencyHandle = this._pass.getHandle("waveFrequency"), this._amplitudeHandle = this._pass.getHandle("waveAmplitude");
  }, r.startWaveEffect = function (e) {
    e && (this.wavePosition = e);
    var t = this._trans.contentSize,
      i = t.x,
      a = t.y,
      n = new __dependency_1.Vec4();
    n.x = (.5 * i + this.wavePosition.x) / i, n.y = 1 - (.5 * a + this.wavePosition.y) / a, n.w = this.startW, this.waveProp.set(n.x, n.y, this.waveProp.z, n.w), this._pass.setUniform(this._frequencyHandle, this.waveFrequency), this._pass.setUniform(this._amplitudeHandle, this.waveAmplitude);
  }, r.update = function (e) {
    this.waveProp.w < this.waveDistance && (this.waveProp.w += e * this.waveSpeed, this.waveProp.w > this.waveDistance && (this.waveProp.w = 200), this._pass.setUniform(this._handle, this.waveProp));
  }, t;
}(__dependency_1.Component)).prototype, "waveDistance", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "waveSpeed", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), H = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "waveStrength", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "wavePosition", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return (0, __dependency_1.v3)(0, 0, 0);
  }
}), N = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "startW", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .3;
  }
}), W = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "waveFrequency", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 30;
  }
}), q = (0, __dependency_0.applyDecoratedDescriptor)(g.prototype, "waveAmplitude", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .05;
  }
}), b = g)) || b));
__dependency_1.cclegacy._RF.pop();
