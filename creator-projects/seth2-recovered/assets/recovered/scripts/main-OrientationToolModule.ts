// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-OrientationToolModule.ts.js
// SHA256: c608d00cc6946f7c614a0e2d38fd7d8a046ed4a9ae280dd94ed8f038a6209039
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as NodeModule };
var __export_1;
export { __export_1 as AnimationModule };
var __export_2;
export { __export_2 as I18nSpineModuleItem };
var __export_3;
export { __export_3 as SpineModule };
var __export_4;
export { __export_4 as I18nSpriteModuleItem };
var __export_5;
export { __export_5 as SpriteModule };
var __export_6;
export { __export_6 as MaskModule };
var __export_7;
export { __export_7 as I18nLabelModuleItem };
var __export_8;
export { __export_8 as LabelModule };
var __export_9;
export { __export_9 as PolygonModule };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "NodeModule":
      __export_0 = value;
      break;
    case "AnimationModule":
      __export_1 = value;
      break;
    case "I18nSpineModuleItem":
      __export_2 = value;
      break;
    case "SpineModule":
      __export_3 = value;
      break;
    case "I18nSpriteModuleItem":
      __export_4 = value;
      break;
    case "SpriteModule":
      __export_5 = value;
      break;
    case "MaskModule":
      __export_6 = value;
      break;
    case "I18nLabelModuleItem":
      __export_7 = value;
      break;
    case "LabelModule":
      __export_8 = value;
      break;
    case "PolygonModule":
      __export_9 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (i) {
  void 0, void 0;
})(__dependency_0);
(function (i) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var g, d, z, w, M, I, S, N, F, k, D, C, v, x, A, B, L, T, H, P, X, _, R, O, V, W, j, q, E, G, J, K, Q, U, Y, Z, $, ii, ei, ti, ni, ri, ai, oi, li, ui, si, pi, ci, bi, fi, hi, mi, yi, gi, di, zi, wi, Mi, Ii, Si, Ni, Fi, ki, Di, Ci, vi, xi, Ai, Bi, Li, Ti, Hi, Pi, Xi, _i, Ri, Oi, Vi, Wi, ji, qi, Ei, Gi, Ji, Ki, Qi, Ui, Yi, Zi, $i, ie, ee, te, ne, re, ae, oe, le, ue, se, pe;
__dependency_1.cclegacy._RF.push({}, "4327frzwhpNLbeR7wPfFx3S", "OrientationToolModule", void 0);
var ce = __dependency_1._decorator.ccclass,
  be = __dependency_1._decorator.property;
__publish("NodeModule", (g = ce("NodeModule"), d = be(__dependency_1.CCBoolean), z = be(__dependency_1.Vec3), w = be(__dependency_1.CCFloat), M = be(__dependency_1.Vec3), I = be(__dependency_1.Vec3), S = be(__dependency_1.Size), N = be(__dependency_1.CCBoolean), F = be({
  readonly: !0,
  displayName: "是否已記憶設定"
}), g((C = (0, __dependency_0.applyDecoratedDescriptor)((D = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "nodeActive", C, this), (0, __dependency_0.initializerDefineProperty)(this, "position", v, this), (0, __dependency_0.initializerDefineProperty)(this, "rotation", x, this), (0, __dependency_0.initializerDefineProperty)(this, "rotation3D", A, this), (0, __dependency_0.initializerDefineProperty)(this, "scale", B, this), (0, __dependency_0.initializerDefineProperty)(this, "size", L, this), (0, __dependency_0.initializerDefineProperty)(this, "richTextSyncMaxWidth", T, this), (0, __dependency_0.initializerDefineProperty)(this, "isInit", H, this);
}).prototype, "nodeActive", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), v = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "position", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_1.Vec3(0, 0);
  }
}), x = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "rotation", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), A = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "rotation3D", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_1.Vec3(0, 0, 0);
  }
}), B = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "scale", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_1.Vec3(0, 0, 0);
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "size", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_1.Size(0, 0);
  }
}), T = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "richTextSyncMaxWidth", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), H = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "isInit", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), k = D)) || k)), __publish("AnimationModule", (P = ce("AnimationModule"), X = be(__dependency_1.AnimationClip), _ = be(__dependency_1.CCBoolean), P((V = (0, __dependency_0.applyDecoratedDescriptor)((O = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "defalutClip", V, this), (0, __dependency_0.initializerDefineProperty)(this, "isInit", W, this);
}).prototype, "defalutClip", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = (0, __dependency_0.applyDecoratedDescriptor)(O.prototype, "isInit", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), R = O)) || R)), __publish("I18nSpineModuleItem", (j = ce("I18nSpineModuleItem"), q = be(__dependency_1.sp.SkeletonData), j((J = (0, __dependency_0.applyDecoratedDescriptor)((G = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "skeletonData", J, this);
}).prototype, "skeletonData", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = G)) || E)), __publish("SpineModule", (K = ce("SpineModule"), Q = be({
  type: __dependency_1.sp.SkeletonData,
  displayName: "預設的 SkeletonData"
}), U = be({
  displayName: "預設 Animation name"
}), Y = be(__dependency_1.CCBoolean), K((ii = (0, __dependency_0.applyDecoratedDescriptor)(($ = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "skeletonData", ii, this), (0, __dependency_0.initializerDefineProperty)(this, "animationName", ei, this), (0, __dependency_0.initializerDefineProperty)(this, "isInit", ti, this);
}).prototype, "skeletonData", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ei = (0, __dependency_0.applyDecoratedDescriptor)($.prototype, "animationName", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), ti = (0, __dependency_0.applyDecoratedDescriptor)($.prototype, "isInit", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Z = $)) || Z)), __publish("I18nSpriteModuleItem", (ni = ce("I18nSpriteModuleItem"), ri = be(__dependency_1.SpriteFrame), ai = be(__dependency_1.Material), ni((ui = (0, __dependency_0.applyDecoratedDescriptor)((li = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "spriteFrame", ui, this), (0, __dependency_0.initializerDefineProperty)(this, "material", si, this);
}).prototype, "spriteFrame", [ri], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), si = (0, __dependency_0.applyDecoratedDescriptor)(li.prototype, "material", [ai], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), oi = li)) || oi)), __publish("SpriteModule", (pi = ce("SpriteModule"), ci = be({
  type: __dependency_1.SpriteFrame,
  displayName: "預設 SpriteFrame"
}), bi = be({
  type: __dependency_1.Material,
  displayName: "預設 Material"
}), fi = be(__dependency_1.CCBoolean), pi((yi = (0, __dependency_0.applyDecoratedDescriptor)((mi = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "spriteFrame", yi, this), (0, __dependency_0.initializerDefineProperty)(this, "material", gi, this), (0, __dependency_0.initializerDefineProperty)(this, "isInit", di, this);
}).prototype, "spriteFrame", [ci], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), gi = (0, __dependency_0.applyDecoratedDescriptor)(mi.prototype, "material", [bi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), di = (0, __dependency_0.applyDecoratedDescriptor)(mi.prototype, "isInit", [fi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), hi = mi)) || hi)), __publish("MaskModule", (zi = ce("MaskModule"), wi = be({
  type: __dependency_1.CCInteger,
  range: [0, 1, 0],
  step: .1,
  slide: !0
}), Mi = be(__dependency_1.SpriteFrame), Ii = be(__dependency_1.CCBoolean), zi((Fi = (0, __dependency_0.applyDecoratedDescriptor)((Ni = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "alphaThreshold", Fi, this), (0, __dependency_0.initializerDefineProperty)(this, "spriteFrame", ki, this), (0, __dependency_0.initializerDefineProperty)(this, "isInit", Di, this);
}).prototype, "alphaThreshold", [wi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), ki = (0, __dependency_0.applyDecoratedDescriptor)(Ni.prototype, "spriteFrame", [Mi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Di = (0, __dependency_0.applyDecoratedDescriptor)(Ni.prototype, "isInit", [Ii], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Si = Ni)) || Si)), __publish("I18nLabelModuleItem", (Ci = ce("I18nLabelModuleItem"), vi = be(__dependency_1.CCFloat), xi = be(__dependency_1.CCFloat), Ai = be(__dependency_1.CCFloat), Bi = be(__dependency_1.Font), Li = be(__dependency_1.CCBoolean), Ti = be(__dependency_1.CCString), Ci((Xi = (0, __dependency_0.applyDecoratedDescriptor)((Pi = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "fontSize", Xi, this), (0, __dependency_0.initializerDefineProperty)(this, "lineHeight", _i, this), (0, __dependency_0.initializerDefineProperty)(this, "spacingX", Ri, this), (0, __dependency_0.initializerDefineProperty)(this, "font", Oi, this), (0, __dependency_0.initializerDefineProperty)(this, "isBold", Vi, this), (0, __dependency_0.initializerDefineProperty)(this, "key", Wi, this);
}).prototype, "fontSize", [vi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), _i = (0, __dependency_0.applyDecoratedDescriptor)(Pi.prototype, "lineHeight", [xi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), Ri = (0, __dependency_0.applyDecoratedDescriptor)(Pi.prototype, "spacingX", [Ai], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), Oi = (0, __dependency_0.applyDecoratedDescriptor)(Pi.prototype, "font", [Bi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Vi = (0, __dependency_0.applyDecoratedDescriptor)(Pi.prototype, "isBold", [Li], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Wi = (0, __dependency_0.applyDecoratedDescriptor)(Pi.prototype, "key", [Ti], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), Hi = Pi)) || Hi)), __publish("LabelModule", (ji = ce("LabelModule"), qi = be({
  type: __dependency_1.CCFloat,
  displayName: "預設字體大小"
}), Ei = be({
  type: __dependency_1.CCFloat,
  displayName: "預設行高"
}), Gi = be({
  type: __dependency_1.CCFloat,
  displayName: "預設 Spacing X"
}), Ji = be({
  type: __dependency_1.Font,
  displayName: "預設字體"
}), Ki = be({
  displayName: "預設是否使用粗體"
}), Qi = be(__dependency_1.CCBoolean), ji((Zi = (0, __dependency_0.applyDecoratedDescriptor)((Yi = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "fontSize", Zi, this), (0, __dependency_0.initializerDefineProperty)(this, "lineHeight", $i, this), (0, __dependency_0.initializerDefineProperty)(this, "spacingX", ie, this), (0, __dependency_0.initializerDefineProperty)(this, "font", ee, this), (0, __dependency_0.initializerDefineProperty)(this, "isBold", te, this), (0, __dependency_0.initializerDefineProperty)(this, "isInit", ne, this);
}).prototype, "fontSize", [qi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), $i = (0, __dependency_0.applyDecoratedDescriptor)(Yi.prototype, "lineHeight", [Ei], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), ie = (0, __dependency_0.applyDecoratedDescriptor)(Yi.prototype, "spacingX", [Gi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), ee = (0, __dependency_0.applyDecoratedDescriptor)(Yi.prototype, "font", [Ji], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), te = (0, __dependency_0.applyDecoratedDescriptor)(Yi.prototype, "isBold", [Ki], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), ne = (0, __dependency_0.applyDecoratedDescriptor)(Yi.prototype, "isInit", [Qi], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ui = Yi)) || Ui)), __publish("PolygonModule", (re = ce("PolygonModule"), ae = be({
  type: [__dependency_1.Vec2]
}), oe = be(__dependency_1.CCBoolean), re((se = (0, __dependency_0.applyDecoratedDescriptor)((ue = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "points", se, this), (0, __dependency_0.initializerDefineProperty)(this, "isInit", pe, this);
}).prototype, "points", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), pe = (0, __dependency_0.applyDecoratedDescriptor)(ue.prototype, "isInit", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), le = ue)) || le));
__dependency_1.cclegacy._RF.pop();
