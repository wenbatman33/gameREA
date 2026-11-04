// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SlotPrefabLineAnimation.ts.js
// SHA256: 3a3ea7deda36a3d0594cbc3034edd9cd30decce97d8718cf88d0c58f0c0d49b0
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-TweenMaxNode";
var __export_0;
export { __export_0 as SlotPrefabLineAnimation };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotPrefabLineAnimation":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
var p, c, f, d, b, h, m;
__dependency_1.cclegacy._RF.push({}, "936d0MC6btPnKbzZd9ugiIG", "SlotPrefabLineAnimation", void 0);
var g = __dependency_1._decorator.ccclass,
  y = __dependency_1._decorator.property;
__publish("SlotPrefabLineAnimation", (p = g("SlotPrefabLineAnimation"), c = y(__dependency_1.Node), f = y(__dependency_1.Prefab), p((h = (0, __dependency_0.applyDecoratedDescriptor)((b = function () {
  function t() {
    (0, __dependency_0.initializerDefineProperty)(this, "parentNode", h, this), (0, __dependency_0.initializerDefineProperty)(this, "prefab", m, this);
  }
  var e = t.prototype;
  return e.getNode = function () {
    var t = null;
    return this.prefab && (t = (0, __dependency_1.instantiate)(this.prefab)).setParent(this.parentNode), t;
  }, e.startAnimation = function (t) {
    var e = this,
      n = this.getNode();
    n.setPosition(new __dependency_1.Vec3(t.path[0].x, t.path[0].y));
    var i = n.addComponent(__dependency_2.TweenMaxNode);
    gsap.to(i, {
      delay: t.delay || 0,
      duration: t.duration,
      ease: "none",
      motionPath: {
        path: t.path,
        autoRotate: !0,
        alignOrigin: [.5, .5],
        curviness: t.curviness || 0
      },
      onComplete: function () {
        e.stopAnimation(n), t.onComplete && t.onComplete();
      }
    });
  }, e.stopAnimation = function (t) {
    gsap.killTweensOf(t), t.destroy();
  }, t;
}()).prototype, "parentNode", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(b.prototype, "prefab", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), d = b)) || d));
__dependency_1.cclegacy._RF.pop();
