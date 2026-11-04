// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-JackpotView.ts.js
// SHA256: 12a3072419b3e8d861c4243c00047ebdae3f94ae36e2facae28fa474c10190b2
import { jackpotPresentationAmounts } from "../../local-backend/LocalJackpotContinuation";
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-AutoPlayModel";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-CmmSlotUtils";
import * as __dependency_7 from "./framework-MathUtil";
import * as __dependency_8 from "./g1005-GameConfigModel";
import * as __dependency_9 from "./g1005-GameData";
import * as __dependency_10 from "./g1005-GameEvent";
import * as __dependency_11 from "./framework-ReplayModel";
var __export_0;
export { __export_0 as EJackpotType };
var __export_1;
export { __export_1 as JackpotView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EJackpotType":
      __export_0 = value;
      break;
    case "JackpotView":
      __export_1 = value;
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
(function (t) {
  void 0, void 0;
})(__dependency_8);
(function (t) {
  void 0;
})(__dependency_9);
(function (t) {
  void 0;
})(__dependency_10);
(function (t) {
  void 0;
})(__dependency_11);
var w, y, J, b, I, S, k, B, D, R, L, j, U;
__publish("EJackpotType", void 0), __dependency_1.cclegacy._RF.push({}, "61ffdcAZypFEYvcmXsQ9P+i", "JackpotView", void 0);
var E,
  F = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property;
!function (t) {
  t.MINI = "jp-mini", t.MINOR = "jp-minor", t.MAJOR = "jp-major", t.GRAND = "jp-grand";
}(E || (E = __publish("EJackpotType", {})));
__publish("JackpotView", (w = F("JackpotView"), y = (0, __dependency_3.inject)("alert", __dependency_1.Node), J = (0, __dependency_3.inject)("alert/effectBg", __dependency_1.sp.Skeleton), b = (0, __dependency_3.inject)("alert/effectFont", __dependency_1.sp.Skeleton), I = (0, __dependency_3.inject)("alert/totalWin", __dependency_1.Label), S = (0, __dependency_3.inject)("alert/coinSprays", __dependency_1.Node), w((D = (0, __dependency_0.applyDecoratedDescriptor)((B = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "alert", D, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "effectBg", R, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "effectFont", L, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "totalWin", j, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "coinSprays", U, (0, __dependency_0.assertThisInitialized)(e)), e.jackpotFileNames = ["jp_mini", "jp_minor", "jp_major", "jp_grand"], e.jackpotTypes = [E.MINI, E.MINOR, E.MAJOR, E.GRAND], e.jackpotNamesMap = new Map(), e.completedCB = null, e.tweenNumTween = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {
    for (var t = 0; t < this.jackpotFileNames.length; t++) this.jackpotNamesMap.set(this.jackpotTypes[t], this.jackpotFileNames[t]);
    this.closeNodes();
  }, s.showJp = function (t) {
    const __jpAmounts = jackpotPresentationAmounts(this.data.getData().gameState);
    var e = this,
      i = this.data.getData().definition.digital,
      n = this.data.getData().gameState,
      a = __jpAmounts.popup,
      o = n.isJp,
      s = +__dependency_6.CmmSlotUtils.formatJPNumber(a, !1, !1, i),
      c = {
        label: this.totalWin,
        start: 0,
        end: s,
        tweenTime: 10,
        digital: i,
        useThousandsSeparator: !0
      };
    this.completedCB = function () {
      t(), e.closeAlert();
    }, this.alert.active = !0, this.playAnimation(o, 10), this.scheduleOnce(function () {
      e.totalWin.node.active = !0, e.tweenNumTween = __dependency_6.CmmSlotUtils.tweenJPNum(c), e.alert.once(__dependency_1.NodeEventType.TOUCH_END, e.showJpResult, e), dispatch(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: +__dependency_6.CmmSlotUtils.formatJPNumber(__jpAmounts.trophy, false, false, i),
          tweenTime: 10
        }
      }), dispatch(__dependency_10.GameEvent.UPDATE_WIN_AMOUNT, {
        data: {
          value: +__dependency_6.CmmSlotUtils.formatJPNumber(__jpAmounts.reel, false, false, i),
          tweenTime: 10
        }
      });
    }, 2);
  }, s.closeAlert = function () {
    this.closeNodes(), this.unscheduleAllCallbacks(), __dependency_1.Tween.stopAllByTarget(this.totalWin.node), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_POPUP_LOOP_1
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_POPUP_LOOP_2
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_POPUP_IN_1
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_POPUP_IN_2
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_MINI_VOCAL
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_MINOR_VOCAL
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_MAJOR_VOCAL
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.JP_GRAND_VOCAL
    }), App.globalAudio.resumeMusic(), this.alert.targetOff(__dependency_1.NodeEventType.TOUCH_END);
  }, s.closeNodes = function () {
    this.alert.active = !1, this.effectBg.node.active = !1, this.effectFont.node.active = !1, this.totalWin.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this), __dependency_8.default.stopOnJpPrize && (__dependency_4.default.active = !1);
  }, s.playAnimation = function (t, e) {
    var i = this,
      n = __dependency_8.default.getData().bigwinAutoCloseTime,
      a = this.jackpotNamesMap.get(t),
      o = t == E.GRAND ? a + "_bg" : "jp_major_minor_mini_bg",
      s = t == E.MINI || t == E.MINOR ? __dependency_8.EBTM.JP_POPUP_IN_1 : __dependency_8.EBTM.JP_POPUP_IN_2,
      c = t == E.MINI || t == E.MINOR ? __dependency_8.EBTM.JP_POPUP_LOOP_1 : __dependency_8.EBTM.JP_POPUP_LOOP_2,
      l = this.getJpVocal(t);
    App.globalAudio.pauseMusic(), this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.effectFont.skeletonData = this.data.getGameAlertSpine(a), this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      i.effectFont.setAnimation(0, "loop", !0);
    }), this.effectBg.skeletonData = this.data.getGameAlertSpine(o), this.effectBg.setAnimation(0, "loop", !0), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: l
      }
    }), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: s
      }
    }), this.scheduleOnce(function () {
      i.showCoinSpray(), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
        data: {
          url: c,
          loop: !0
        }
      });
    }, 2), n && this.scheduleOnce(this.showJpResult, n + 2 + e), this.scheduleOnce(this.addClickAlertCompleteCb, 2 + e);
  }, s.playBounceTween = function (t, e) {
    (0, __dependency_1.tween)(t).to(.1, {
      scale: new __dependency_1.Vec3(1.8, 1.8, 1.8)
    }).delay(.01).to(.1, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, s.showCoinSpray = function () {
    var t = this,
      e = this.coinSprays.getComponentsInChildren(__dependency_1.sp.Skeleton);
    this.coinSprays.active = !0;
    for (var i = function () {
        var i = e[n];
        0 == n ? (i.node.active = !0, i.setAnimation(0, "coin_01", !1)) : 1 == n ? t.scheduleOnce(function () {
          i.node.active = !0, i.setAnimation(0, "coin_02", !1);
        }, 1.3) : t.scheduleOnce(function () {
          var t = __dependency_7.default.getRandomNumber(3, 6);
          i.node.active = !0, i.setAnimation(0, "radom_0" + t, !1), i.setCompleteListener(function () {
            var t = __dependency_7.default.getRandomNumber(3, 6);
            i.setAnimation(0, "radom_0" + t, !1);
          });
        }, 2.8 + .5 * (n - 2));
      }, n = 0; n < e.length; n++) i();
  }, s.showJpResult = function () {
    const __jpAmounts = jackpotPresentationAmounts(this.data.getData().gameState);
    var t = __jpAmounts.popup,
      e = this.data.getData().definition.digital,
      i = __dependency_6.CmmSlotUtils.formatJPNumber(t, !0, !0, e),
      n = +__dependency_6.CmmSlotUtils.formatJPNumber(t, !1, !1, e);
    this.unschedule(this.completedCB), this.unschedule(this.showJpResult), this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = i, this.playBounceTween(this.totalWin.node), this.addClickAlertCompleteCb(), dispatch(__dependency_10.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: +__dependency_6.CmmSlotUtils.formatJPNumber(__jpAmounts.trophy, false, false, e)
    }), dispatch(__dependency_10.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: +__dependency_6.CmmSlotUtils.formatJPNumber(__jpAmounts.reel, false, false, e)
    });
  }, s.addClickAlertCompleteCb = function () {
    if (__dependency_11.default.isReplay) {
      var t = __dependency_8.default.getData().bigwinAutoCloseTime;
      this.scheduleOnce(this.completedCB, t), this.alert.once(__dependency_1.NodeEventType.TOUCH_END, this.completedCB), this.unschedule(this.addClickAlertCompleteCb);
    } else this.alert.once(__dependency_1.NodeEventType.TOUCH_END, this.completedCB), this.unschedule(this.addClickAlertCompleteCb);
  }, s.getJpVocal = function (t) {
    switch (t) {
      case E.MINI:
        return __dependency_8.EBTM.JP_MINI_VOCAL;
      case E.MINOR:
        return __dependency_8.EBTM.JP_MINOR_VOCAL;
      case E.MAJOR:
        return __dependency_8.EBTM.JP_MAJOR_VOCAL;
      case E.GRAND:
        return __dependency_8.EBTM.JP_GRAND_VOCAL;
    }
  }, s.reset = function () {}, s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(__dependency_10.GameEvent.SHOW_JP, function (e) {
      t.showJp(e.complete);
    });
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_9.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "alert", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = (0, __dependency_0.applyDecoratedDescriptor)(B.prototype, "effectBg", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(B.prototype, "effectFont", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(B.prototype, "totalWin", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = (0, __dependency_0.applyDecoratedDescriptor)(B.prototype, "coinSprays", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = B)) || k));
__dependency_1.cclegacy._RF.pop();
