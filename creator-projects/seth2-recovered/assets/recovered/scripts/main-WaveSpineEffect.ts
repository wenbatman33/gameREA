// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WaveSpineEffect.ts.js
// SHA256: c6ab57599e2c6dc7b63c4be695fa918fcfb759206fc8eeab5168b48a04a06006
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as WaveSpineEffect };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WaveSpineEffect":
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
var u, w, f, h, d, y, m, P, b, g, S;
__dependency_1.cclegacy._RF.push({}, "da8b4a+r7dFqpLwugndcZIG", "WaveSpineEffect", void 0);
var _ = __dependency_1._decorator.ccclass,
  z = __dependency_1._decorator.property;
__publish("WaveSpineEffect", (u = _("WaveSpineEffect"), w = z({
  displayName: "波的距離"
}), f = z({
  displayName: "波的移動速度"
}), h = z({
  displayName: "波的強度"
}), d = z({
  displayName: "波的開始位置"
}), u((P = (0, __dependency_0.applyDecoratedDescriptor)((m = function (e) {
  function t() {
    for (var t, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || t) || this, (0, __dependency_0.initializerDefineProperty)(t, "waveDistance", P, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveSpeed", b, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "waveStrength", g, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "wavePosition", S, (0, __dependency_0.assertThisInitialized)(t)), t._trans = void 0, t._pass = void 0, t._handle = void 0, t.waveProp = new __dependency_1.Vec4(), t._material = null, t;
  }
  (0, __dependency_0.inheritsLoose)(t, e);
  var r = t.prototype;
  return r.onLoad = function () {
    this._trans = this.node.getComponent(__dependency_1.UITransform), this.waveProp.w = 200, this.waveProp.z = this.waveStrength;
    var e = this.node.getComponent(__dependency_1.sp.Skeleton);
    this._material = e.customMaterial;
  }, r.start = function () {
    this.startWaveEffect((0, __dependency_1.v3)(0, 0, 0));
  }, r.startWaveEffect = function (e) {
    e && (this.wavePosition = e);
    var t = this._trans.contentSize,
      i = t.x,
      a = t.y,
      n = new __dependency_1.Vec4();
    n.x = (.5 * i + this.wavePosition.x) / i, n.y = 1 - (.5 * a + this.wavePosition.y) / a, n.w = .3, this.waveProp.set(n.x, n.y, this.waveProp.z, n.w);
  }, r.update = function (e) {
    this.waveProp.w < 1 && (this.waveProp.w > this.waveDistance && (this.waveProp.w = 0), this._material.setProperty("waveFactor", this.waveProp));
  }, t;
}(__dependency_1.Component)).prototype, "waveDistance", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .4;
  }
}), b = (0, __dependency_0.applyDecoratedDescriptor)(m.prototype, "waveSpeed", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 1;
  }
}), g = (0, __dependency_0.applyDecoratedDescriptor)(m.prototype, "waveStrength", [h], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .5;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(m.prototype, "wavePosition", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return (0, __dependency_1.v3)(0, 0, 0);
  }
}), y = m)) || y));
__dependency_1.cclegacy._RF.pop();
