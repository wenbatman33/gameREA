// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ParticleWinLine.ts.js
// SHA256: d6a9e43f95b895fa4d7cb181168651748c81003e544aabf1b883847f2c88e00e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SlotPrefabLineAnimation";
var __export_0;
export { __export_0 as ParticleWinLine };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ParticleWinLine":
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
  void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
var f, s, c, b, p, h, g, m, y, L, v, P, A, D, w;
__dependency_1.cclegacy._RF.push({}, "5c30ci4WAhBrbFCRHI9SgRg", "ParticleWinLine", void 0);
var z = __dependency_1._decorator.ccclass,
  d = __dependency_1._decorator.property,
  C = __dependency_1._decorator.menu;
__publish("ParticleWinLine", (f = z("ParticleWinLine"), s = C("Greensock/gsap/particle-win-line"), c = d(__dependency_2.SlotPrefabLineAnimation), b = d(__dependency_2.SlotPrefabLineAnimation), f(p = s((g = (0, __dependency_0.applyDecoratedDescriptor)((h = function (e) {
  function i() {
    for (var i, t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o];
    return i = Reflect.construct(e, [this].concat(a).slice(1), new.target || i) || this, (0, __dependency_0.initializerDefineProperty)(i, "leftPrefabLineAnimation", g, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "rightPrefabLineAnimation", m, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "leftGenerateNumber", y, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "rightGenerateNumber", L, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "leftCurviness", v, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "rightCurviness", P, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "generateDelay", A, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "leftDuration", D, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "rightDuration", w, (0, __dependency_0.assertThisInitialized)(i)), i;
  }
  (0, __dependency_0.inheritsLoose)(i, e);
  var a = i.prototype;
  return a.setLeftLine = function (e) {
    if (this.leftPrefabLineAnimation) for (var i = 0; i < this.leftGenerateNumber; i++) this.leftPrefabLineAnimation.startAnimation({
      delay: i * this.generateDelay,
      path: e,
      duration: this.leftDuration,
      curviness: this.leftCurviness
    });
  }, a.setRightLine = function (e) {
    if (this.rightPrefabLineAnimation) for (var i = 0; i < this.rightGenerateNumber; i++) this.rightPrefabLineAnimation.startAnimation({
      delay: i * this.generateDelay,
      path: e,
      duration: this.rightDuration,
      curviness: this.rightCurviness
    });
  }, i;
}(__dependency_1.Component)).prototype, "leftPrefabLineAnimation", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "rightPrefabLineAnimation", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "leftGenerateNumber", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "rightGenerateNumber", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), v = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "leftCurviness", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .25;
  }
}), P = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "rightCurviness", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .25;
  }
}), A = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "generateDelay", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .02;
  }
}), D = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "leftDuration", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 3;
  }
}), w = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "rightDuration", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 3;
  }
}), p = h)) || p) || p));
__dependency_1.cclegacy._RF.pop();
