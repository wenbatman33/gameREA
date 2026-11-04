// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-AnimaView.ts.js
// SHA256: 19a03fc6266238593c5c93b3fd438cd3e6538bdb63a1249808ef6470060ec89e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./g1005-GameEvent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./g1005-GameConfigModel";
import * as __dependency_6 from "./framework-UrlModel";
import * as __dependency_7 from "./main-UrlUtils";
var __export_0;
export { __export_0 as AnimView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "AnimView":
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
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
(function (e) {
  void 0;
})(__dependency_5);
(function (e) {
  void 0;
})(__dependency_6);
(function (e) {
  void 0;
})(__dependency_7);
var d, A, b, M, L, V, E, k, w, C, g, h, N, G, O;
__dependency_1.cclegacy._RF.push({}, "7e2c1vt/JBK6q3E52vUQS96", "AnimaView", void 0);
var y = __dependency_1._decorator.ccclass,
  F = __dependency_1._decorator.property;
__publish("AnimView", (d = y("AnimView"), A = F(__dependency_1.Node), b = (0, __dependency_4.inject)("women", __dependency_1.sp.Skeleton), M = (0, __dependency_4.inject)("men", __dependency_1.sp.Skeleton), L = (0, __dependency_4.inject)("frame", __dependency_1.sp.Skeleton), V = (0, __dependency_4.inject)("menLevel2", __dependency_1.sp.Skeleton), E = (0, __dependency_4.inject)("bbr", __dependency_1.Node), d((C = (0, __dependency_0.applyDecoratedDescriptor)((w = function (e) {
  function n() {
    for (var n, t = arguments.length, o = new Array(t), r = 0; r < t; r++) o[r] = arguments[r];
    return n = Reflect.construct(e, [this].concat(o).slice(1), new.target || n) || this, (0, __dependency_0.initializerDefineProperty)(n, "animView", C, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "womenAnimation", g, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "menAnimation", h, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "frameAnime", N, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "menLevel2Animation", G, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "blackMask", O, (0, __dependency_0.assertThisInitialized)(n)), n;
  }
  (0, __dependency_0.inheritsLoose)(n, e);
  var o = n.prototype;
  return o.update = function (e) {}, o.addEvents = function () {
    var e = this;
    this.on(__dependency_3.GameEvent.SHOW_WOMEN_LOCK_ANIM, function (n) {
      var t = "",
        i = "",
        a = "";
      switch (n.data) {
        case 1:
          t = "lv_01", i = __dependency_5.EBTM.WOMEN_FG_CHA_LV1, a = __dependency_5.EBTM.WOMAN_FG_VOICE_LV1;
          break;
        case 2:
          t = "lv_02", i = __dependency_5.EBTM.WOMEN_FG_CHA_LV2, a = __dependency_5.EBTM.WOMAN_FG_VOICE_LV2;
          break;
        case 3:
          t = "lv_03", i = __dependency_5.EBTM.WOMEN_FG_CHA_LV3, a = __dependency_5.EBTM.WOMAN_FG_VOICE_LV3;
          break;
        default:
          return void n.complete();
      }
      (0, __dependency_1.tween)(e).delay(0).call(function () {
        e.womenAnimation.node.active = !0, e.blackMask.active = !0, "portrait" == __dependency_7.default.getViewModeParam() && (t += "_v"), e.womenAnimation.setAnimation(0, t, !1), dispatch(__dependency_3.GameEvent.PLAY_BTM, {
          data: {
            url: i
          }
        }), dispatch(__dependency_3.GameEvent.PLAY_BTM, {
          data: {
            url: a
          }
        }), e.womenAnimation.setCompleteListener(function () {
          e.womenAnimation.node.active = !1, e.blackMask.active = !1, n.complete();
        });
      }).start();
    }), this.on(__dependency_3.GameEvent.SHOW_MEN_SPLIT_ANIM, function (n) {
      console.log("number::::::::", n.data), console.log("number::::::::", n.data.to.length);
      var t = "",
        i = "",
        a = "",
        o = null;
      switch (e.frameAnime && "portrait" != __dependency_6.default.getViewModeParam() && (e.frameAnime.clearTracks(), e.frameAnime.setToSetupPose(), e.frameAnime.node.active = !0, e.frameAnime.setAnimation(0, "frame", !1)), n.data.to.length) {
        case 1:
        case 2:
          t = "lv_1", i = __dependency_5.EBTM.MEN_FG_CHB_LV1, a = __dependency_5.EBTM.MEN_FG_VOICE_LV1, o = e.menAnimation;
          break;
        case 3:
        case 4:
          t = "lv_2", i = __dependency_5.EBTM.MEN_FG_CHB_LV2, a = __dependency_5.EBTM.MEN_FG_VOICE_LV2, o = e.menLevel2Animation;
          break;
        case 5:
        case 6:
          t = "lv_3", i = __dependency_5.EBTM.MEN_FG_CHB_LV3, a = __dependency_5.EBTM.MEN_FG_VOICE_LV3, o = e.menAnimation;
          break;
        default:
          return n.data.to.length > 6 && (t = "lv_3", i = __dependency_5.EBTM.MEN_FG_CHB_LV3, a = __dependency_5.EBTM.MEN_FG_VOICE_LV3), void n.complete();
      }
      (0, __dependency_1.tween)(e).delay(0).call(function () {
        o.node.active = !0, e.blackMask.active = !0, "portrait" == __dependency_7.default.getViewModeParam() && (t += "_v"), o.setAnimation(0, t, !1), dispatch(__dependency_3.GameEvent.PLAY_BTM, {
          data: {
            url: i
          }
        }), dispatch(__dependency_3.GameEvent.PLAY_BTM, {
          data: {
            url: a
          }
        }), "lv_1" == t ? o.setEventListener(function () {
          o.setEventListener(null), e.frameAnime && (e.frameAnime.node.active = !1), o.node.active = !1, e.blackMask.active = !1, n.complete();
        }) : o.setCompleteListener(function () {
          e.frameAnime && (e.frameAnime.node.active = !1), o.setCompleteListener(null), o.node.active = !1, e.blackMask.active = !1, n.complete();
        });
      }).start();
    });
  }, n;
}(__dependency_2.default)).prototype, "animView", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), g = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "womenAnimation", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), h = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "menAnimation", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "frameAnime", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "menLevel2Animation", [V], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = (0, __dependency_0.applyDecoratedDescriptor)(w.prototype, "blackMask", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = w)) || k));
__dependency_1.cclegacy._RF.pop();
