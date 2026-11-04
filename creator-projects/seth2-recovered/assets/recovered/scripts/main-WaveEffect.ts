// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WaveEffect.ts.js
// SHA256: 9a1ece901b81fe875e2538a67ad33925eb804a4f33b0003bb79b6913c70910d4
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as WaveEffect };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WaveEffect":
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
var w, h, u, f, d, y, P, g, m, _, b;
__dependency_1.cclegacy._RF.push({}, "78635vcYy5ELqS6GWiYgK4W", "WaveEffect", void 0);
var S = __dependency_1._decorator.ccclass,
  z = __dependency_1._decorator.property;
__publish("WaveEffect", (w = S("WaveEffect"), h = z({
  displayName: "波的距離"
}), u = z({
  displayName: "波的移動速度"
}), f = z({
  displayName: "波的強度"
}), d = z({
  displayName: "波的開始位置"
}), w((g = (0, __dependency_0.applyDecoratedDescriptor)((P = function (e) {
  function t() {
    for (var t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || t) || this, (0, __dependency_0.initializerDefineProperty)(t, "waveDistance", g, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveSpeed", m, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveStrength", _, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "wavePosition", b, (0, __dependency_0.assertThisInitialized)(t)), t._trans = void 0, t._pass = void 0, t._handle = void 0, t.waveProp = new __dependency_1.Vec4(), t;
  }
  (0, __dependency_0.inheritsLoose)(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    this._trans = this.node.getComponent(__dependency_1.UITransform), this.waveProp.w = 200, this.waveProp.z = this.waveStrength, this._pass = this.node.getComponent(__dependency_1.Sprite).material.passes[0], this._handle = this._pass.getHandle("waveFactor");
  }, r.startWaveEffect = function (e) {
    e && (this.wavePosition = e);
    var t = this._trans.contentSize,
      i = t.x,
      a = t.y,
      n = new __dependency_1.Vec4();
    n.x = (.5 * i + this.wavePosition.x) / i, n.y = 1 - (.5 * a + this.wavePosition.y) / a, n.w = 0, this.waveProp.set(n.x, n.y, this.waveProp.z, n.w);
  }, r.update = function (e) {
    this.waveProp.w < 200 && (this.waveProp.w += e * this.waveSpeed, this.waveProp.w > this.waveDistance && (this.waveProp.w = 200), this._pass.setUniform(this._handle, this.waveProp));
  }, t;
}(__dependency_1.Component)).prototype, "waveDistance", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(P.prototype, "waveSpeed", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), _ = (0, __dependency_0.applyDecoratedDescriptor)(P.prototype, "waveStrength", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), b = (0, __dependency_0.applyDecoratedDescriptor)(P.prototype, "wavePosition", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return (0, __dependency_1.v3)(0, 0, 0);
  }
}), y = P)) || y));
__dependency_1.cclegacy._RF.pop();
