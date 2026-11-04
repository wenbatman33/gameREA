// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CharacterView.ts.js
// SHA256: 6ba69c495f53f8020c5a8c66d4f2e1b9b49eceb272c0824eba91921afe791fb6
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./g1005-GameConfigModel";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-GameEvent";
var __export_0;
export { __export_0 as CharacterView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CharacterView":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0, void 0;
})(__dependency_4);
(function (e) {
  void 0;
})(__dependency_5);
(function (e) {
  void 0;
})(__dependency_6);
var E, w, d, b, S, g, v, y, F, C, _, A, L, T, D, N, R, z, k;
__dependency_1.cclegacy._RF.push({}, "bb595TDS4BBSrzuiYSG46Qa", "CharacterView", void 0);
var M = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("CharacterView", (E = M("CharacterView"), w = (0, __dependency_3.inject)("manElement/man", __dependency_1.sp.Skeleton), d = (0, __dependency_3.inject)("womanElement/woman", __dependency_1.sp.Skeleton), b = (0, __dependency_3.inject)("manElement/lower", __dependency_1.sp.Skeleton), S = (0, __dependency_3.inject)("manElement/upper", __dependency_1.sp.Skeleton), g = (0, __dependency_3.inject)("manElement/fire", __dependency_1.sp.Skeleton), v = (0, __dependency_3.inject)("womanElement/lower", __dependency_1.sp.Skeleton), y = (0, __dependency_3.inject)("womanElement/upper", __dependency_1.sp.Skeleton), F = (0, __dependency_3.inject)("womanElement/fire", __dependency_1.sp.Skeleton), E((A = (0, __dependency_0.applyDecoratedDescriptor)((_ = function (e) {
  function t() {
    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return t = Reflect.construct(e, [this].concat(r).slice(1), new.target || t) || this, (0, __dependency_0.initializerDefineProperty)(t, "man", A, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "woman", L, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "manLowerEffect", T, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "manUpperEffect", D, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "manFireEffect", N, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "womanLowerEffect", R, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "womanUpperEffect", z, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "womanFireEffect", k, (0, __dependency_0.assertThisInitialized)(t)), t.fgEffectNodes = [], t;
  }
  (0, __dependency_0.inheritsLoose)(t, e);
  var o = t.prototype;
  return o.onLoad = function () {
    e.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    e.prototype.onDestroy.call(this);
  }, o.init = function () {
    this.fgEffectNodes = [this.manLowerEffect.node, this.manUpperEffect.node, this.womanLowerEffect.node, this.womanUpperEffect.node], __dependency_4.default.useProEffect || (this.manLowerEffect.node.active = !1, this.womanLowerEffect.node.active = !1);
  }, o.playCharacterManFire = function (e) {
    var t = this;
    this.man.setAnimation(0, "characterB_fire", !1), this.man.timeScale = e, this.man.setCompleteListener(function () {
      t.man.timeScale = 1, t.man.setAnimation(0, "characterB_idle", !0);
    }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.NEW_CH_MAN_TRANSITION
      }
    }), this.manFireEffect.node.active = !0, this.manFireEffect.setAnimation(0, "fireball", !1), this.manFireEffect.setCompleteListener(function () {
      t.manFireEffect.node.active = !1;
    });
  }, o.playCharacterWomanFire = function (e) {
    var t = this;
    this.woman.setAnimation(0, "characterA_fire", !1), this.woman.timeScale = e, this.woman.setCompleteListener(function () {
      t.woman.timeScale = 1, t.woman.setAnimation(0, "characterA_idle", !0);
    }), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.NEW_CH_WOMAN_TRANSITION
      }
    }), this.womanFireEffect.node.active = !0, this.womanFireEffect.setAnimation(0, "fireball", !1), this.womanFireEffect.setCompleteListener(function () {
      t.womanFireEffect.node.active = !1;
    });
  }, o.showOpenFire = function () {
    var e = __dependency_4.default.getData().reelConfig.characterFireSpeed,
      t = this.data.getData().parser.newTimesSymbols,
      n = !1,
      i = !1;
    if (t.length) {
      for (var a = 0; a < t.length; a++) t[a].isRare ? n = !0 : i = !0;
      i && this.playCharacterManFire(e), n && this.playCharacterWomanFire(e);
    }
  }, o.setFgElements = function (e) {
    this.fgEffectNodes.forEach(function (t) {
      (__dependency_4.default.useProEffect || "lower" !== t.name) && (t.active = !e);
    });
  }, o.speedUpCharacterFire = function () {
    var e = this.data.getData().parser.newTimesSymbols,
      t = !1,
      n = !1;
    if (e.length) {
      for (var i = 0; i < e.length; i++) e[i].isRare ? t = !0 : n = !0;
      n && (this.man.timeScale = 1.2 * this.man.timeScale), t && (this.woman.timeScale = 1.2 * this.woman.timeScale);
    }
  }, o.reset = function () {}, o.setData = function (e) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var e = this;
    this.on(__dependency_6.GameEvent.SHOW_CHARACTER_FIRE, function (t) {
      e.showOpenFire();
    }), this.on(__dependency_6.GameEvent.SPEED_CHARACTER_FIRE_UP, function (t) {
      e.speedUpCharacterFire();
    }), this.on(__dependency_6.GameEvent.CHANGE_GAME_STYLE, function (t) {
      e.setFgElements(t.data);
    });
  }, (0, __dependency_0.createClass)(t, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }]), t;
}(__dependency_2.default)).prototype, "man", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "woman", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "manLowerEffect", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "manUpperEffect", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "manFireEffect", [g], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "womanLowerEffect", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "womanUpperEffect", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "womanFireEffect", [F], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = _)) || C));
__dependency_1.cclegacy._RF.pop();
