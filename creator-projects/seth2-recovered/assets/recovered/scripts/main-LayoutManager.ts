// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-LayoutManager.ts.js
// SHA256: 0525e95890e8785c3eebf77ee1668cd085b22269f8d6ff26b15fe4fd33bc7b8c
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-LayoutDefines";
var __export_0;
export { __export_0 as LayoutManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LayoutManager":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "91f23IoCuxFko7p1sUVOjL7", "LayoutManager", void 0);
var c = new __dependency_1.Vec3(),
  u = new __dependency_1.Vec2(),
  g = new __dependency_1.Vec2();
__publish("LayoutManager", function () {
  function e() {
    this.module = null;
  }
  var i = e.prototype;
  return i.align = function (e) {
    var t,
      i = e.node,
      n = e.target,
      a = e,
      g = new __dependency_1.Vec2(),
      y = new __dependency_1.Vec2();
    n ? (t = n, this.computeInverseTransForTarget(i, t, g, y)) : t = i.parent;
    var h = this.getReadonlyNodeSize(t),
      f = t instanceof __dependency_1.Scene || !t.getComponent(__dependency_1.UITransform),
      v = f ? u : t.getComponent(__dependency_1.UITransform).anchorPoint,
      p = f;
    i.getPosition(c);
    var x = i._uiProps.uiTransformComp,
      b = c.x,
      d = c.y,
      m = x.anchorPoint,
      C = i.getScale();
    if (e.alignFlags & __dependency_2.LayoutType.HORIZONTAL) {
      var R = 0,
        S = 0,
        A = h.width;
      p ? (R = this.visibleRect.left.x, S = this.visibleRect.right.x) : S = (R = -v.x * A) + A, R += a.isAbsoluteLeft ? a.left : a.left * A, S -= a.isAbsoluteRight ? a.right : a.right * A, n && (R += g.x, R *= y.x, S += g.x, S *= y.x);
      var w = 0,
        L = m.x,
        T = C.x;
      if (T < 0 && (L = 1 - L, T = -T), a.isStretchWidth) w = S - R, 0 !== T && (x.width = w / T), b = R + L * w;else if (w = x.width * T, a.isAlignHorizontalCenter) {
        var z = a.isAbsoluteHorizontalCenter ? a.horizontalCenter : a.horizontalCenter * A,
          F = (.5 - v.x) * h.width;
        n && (z *= y.x, F += g.x, F *= y.x), b = F + (L - .5) * w + z;
      } else b = a.isAlignLeft ? R + L * w : S + (L - 1) * w;
    }
    if (a.alignFlags & __dependency_2.LayoutType.VERTICAL) {
      var I = 0,
        P = 0,
        V = h.height;
      p ? (P = this.visibleRect.bottom.y, I = this.visibleRect.top.y) : I = (P = -v.y * V) + V, P += a.isAbsoluteBottom ? a.bottom : a.bottom * V, I -= a.isAbsoluteTop ? a.top : a.top * V, n && (P += g.y, P *= y.y, I += g.y, I *= y.y);
      var H = 0,
        k = m.y,
        M = C.y;
      if (M < 0 && (k = 1 - k, M = -M), a.isStretchHeight) H = I - P, 0 !== M && (x.height = H / M), d = P + k * H;else if (H = x.height * M, a.isAlignVerticalCenter) {
        var O = a.isAbsoluteVerticalCenter ? a.verticalCenter : a.verticalCenter * V,
          _ = (.5 - v.y) * h.height;
        n && (O *= y.y, _ += g.y, _ *= y.y), d = _ + (k - .5) * H + O;
      } else d = a.isAlignBottom ? P + k * H : I + (k - 1) * H;
    }
    e.result.position.x = b, e.result.position.y = d;
  }, i.computeInverseTransForTarget = function (e, t, i, n) {
    e.parent ? g.set(e.parent.getScale().x, e.parent.getScale().y) : g.set(0, 0);
    for (var o = g.x, r = g.y, s = 0, a = 0, l = e.parent;;) {
      if (!l) return i.x = i.y = 0, void (n.x = n.y = 1);
      var c = l.getPosition();
      if (s += c.x, a += c.y, (l = l.parent) === t) break;
      l ? g.set(l.getScale().x, l.getScale().y) : g.set(0, 0);
      var u = g.x,
        y = g.y;
      s *= u, a *= y, o *= u, r *= y;
    }
    n.x = 0 !== o ? 1 / o : 1, n.y = 0 !== r ? 1 / r : 1, i.x = -s, i.y = -a;
  }, i.getReadonlyNodeSize = function (e) {
    var t = e.getComponent(__dependency_1.UITransform);
    return e instanceof __dependency_1.Scene ? this.visibleRect : t ? t.contentSize : __dependency_1.Size.ZERO;
  }, (0, __dependency_0.createClass)(e, [{
    key: "visibleRect",
    get: function () {
      return window.cc.visibleRect;
    }
  }]), e;
}()).module = "【佈局管理器】", __dependency_1.cclegacy._RF.pop();
