// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-BackgroundView.ts.js
// SHA256: b5762eed26d6e93ff879f1a0de0a34ed11b4753b8a717248f9a48eaf2ae46954
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-LoadUtils";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./g1005-GameConfigModel";
import * as __dependency_6 from "./g1005-GameData";
import * as __dependency_7 from "./g1005-GameEvent";
var __export_0;
export { __export_0 as BackgroundView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BackgroundView":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
(function (t) {
  void 0;
})(__dependency_5);
(function (t) {
  void 0;
})(__dependency_6);
(function (t) {
  void 0;
})(__dependency_7);
var h, m, v, y, S, D, _, w, L, k, B, E, G;
__dependency_1.cclegacy._RF.push({}, "6795agvgLRK8LTboHzv4BmT", "BackgroundView", void 0);
var T = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("BackgroundView", (h = T("BackgroundView"), m = (0, __dependency_4.inject)("bgContent/bgLeft", __dependency_1.Sprite), v = (0, __dependency_4.inject)("bgContent/bgRight", __dependency_1.Sprite), y = (0, __dependency_4.inject)("bgDown", __dependency_1.Sprite), S = (0, __dependency_4.inject)("bgSpine", __dependency_1.sp.Skeleton), D = (0, __dependency_4.inject)("bgTopSpine", __dependency_1.sp.Skeleton), h((L = (0, __dependency_0.applyDecoratedDescriptor)((w = function (t) {
  function e() {
    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "bgLeft", L, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "bgRight", k, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "bgDown", B, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "bgSpine", E, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "bgTopSpine", G, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    this.init();
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, a.init = function () {
    __dependency_5.default.useProEffect || (this.bgSpine.node.active = !1, this.bgTopSpine.node.active = !1);
  }, a.setBg = function (t) {
    var e = __dependency_5.default.getData().filePaths.common,
      n = t ? "mg_board" : "fg_board",
      i = t ? "mg_bg" : this.data.getData().gameState.isGoldenFg ? "nfg_bg" : "fg_bg";
    this.bgLeft.spriteFrame = this.bgRight.spriteFrame = __dependency_2.LoadUtils.getDirSp(__dependency_6.default.module, e, i), this.bgDown && (this.bgDown.spriteFrame = __dependency_2.LoadUtils.getDirSp(__dependency_6.default.module, e, n));
  }, a.setBgAnimation = function (t) {
    var e = t ? "background_M" : "background_FG",
      n = t ? "background_M_top" : "background_FG_top";
    __dependency_5.default.useProEffect && (this.bgSpine.setAnimation(0, e, !0), this.bgTopSpine.setAnimation(0, n, !0));
  }, a.reset = function () {}, a.setData = function (t) {}, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, a.addEvents = function () {
    var t = this;
    this.on(__dependency_7.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setBgAnimation(e.data), t.setBg(e.data);
    });
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_6.default.ins;
    }
  }]), e;
}(__dependency_3.default)).prototype, "bgLeft", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "bgRight", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "bgDown", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "bgSpine", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "bgTopSpine", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = w)) || _));
__dependency_1.cclegacy._RF.pop();
