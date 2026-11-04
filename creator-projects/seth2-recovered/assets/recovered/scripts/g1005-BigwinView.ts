// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-BigwinView.ts.js
// SHA256: e39eba258e83b33efab7dc9907fb55151ef3e7f9e9156d4a13db72c775a3acb9
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UIView";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-AutoPlayModel";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-CmmSlotUtils";
import * as __dependency_7 from "./framework-MathUtil";
import * as __dependency_8 from "./g1005-GameConfigModel";
import * as __dependency_9 from "./g1005-GameData";
import * as __dependency_10 from "./g1005-GameEvent";
import * as __dependency_11 from "./g1005-types";
import * as __dependency_12 from "./framework-ReplayModel";
import * as __dependency_13 from "./main-UrlUtils";
var __export_0;
export { __export_0 as BigwinView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BigwinView":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
(function (t) {
  void 0;
})(__dependency_12);
(function (t) {
  void 0;
})(__dependency_13);
var b, P, I, M, R, v, U, D, F, G, k, V, z, H, K;
__dependency_1.cclegacy._RF.push({}, "409bbCJvUxLQqyrF/gEVeMJ", "BigwinView", void 0);
var Y,
  Z = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", t[t.SHOW_BUGWIN_NUMBER = 2] = "SHOW_BUGWIN_NUMBER", t[t.SHOW_BUGWIN_NUMBER_END = 3] = "SHOW_BUGWIN_NUMBER_END", t[t.BIGWIN_COMPLETED = 4] = "BIGWIN_COMPLETED";
}(Y || (Y = {}));
__publish("BigwinView", (b = Z("BigwinView"), P = (0, __dependency_3.inject)("alert", __dependency_1.Node), I = (0, __dependency_3.inject)("alert/effectBg", __dependency_1.sp.Skeleton), M = (0, __dependency_3.inject)("alert/effectFont", __dependency_1.sp.Skeleton), R = (0, __dependency_3.inject)("alert/totalWin", __dependency_1.Label), v = (0, __dependency_3.inject)("alert/fireworks", __dependency_1.sp.Skeleton), U = (0, __dependency_3.inject)("alert/coinSprays", __dependency_1.Node), b((G = (0, __dependency_0.applyDecoratedDescriptor)((F = function (t) {
  function e() {
    for (var e, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "alert", G, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "effectBg", k, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "effectFont", V, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "totalWin", z, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "fireworks", H, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "coinSprays", K, (0, __dependency_0.assertThisInitialized)(e)), e.bigwinFontFileNames = ["w_big", "w_super", "w_mega", "w_ultra", "w_legend"], e.completedCB = null, e.tweenNumTween = null, e.bigwinVO = null, e.playBigFontLoop = null, e.showWinStatus = Y.NONE, e.playPrizeLoopBtmSchedule = null, e.playPrizeVoiceBtmSchedule = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    this.stopAllMusicAndSchedule(), t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + __dependency_13.default.getViewModeParam() + "/BigwinView";
  }, o.init = function () {
    this.enabledKeyDown = !0;
  }, o.show = function (e) {
    t.prototype.show.call(this), this.closeNodes();
  }, o.onClose = function () {
    this.unscheduleAllCallbacks(), __dependency_1.Tween.stopAllByTarget(this), this.closeNodes(), this.stopAllMusicAndSchedule(), App.globalAudio.resumeMusic(), this.close();
  }, o.stopAllMusicAndSchedule = function () {
    dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.WIN_LOOP
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.SMALL_PRIZE_IN
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.ULTRA_IN
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.LEGEND_IN
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.S_PRIZE_LOOP
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.L_PRIZE_LOOP
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.FIREWORKS
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.BIG_VOCAL
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.SUPER_VOCAL
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.MEGA_VOCAL
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.ULTRA_VOCAL
    }), dispatch(__dependency_10.GameEvent.STOP_BTM, {
      data: __dependency_8.EBTM.LEGENDARY_VOCAL
    }), this.unschedule(this.playPrizeLoopBtmSchedule), this.unschedule(this.playPrizeVoiceBtmSchedule);
  }, o.closeNodes = function () {
    this.effectBg.node.active = !1, this.effectFont.node.active = !1, this.totalWin.node.active = !1, this.fireworks.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this), __dependency_8.default.stopOnBigwinPrize && (__dependency_4.default.active = !1);
  }, o.playAnimation = function (t, e) {
    var i = this,
      n = 0 != t,
      a = t >= 4,
      s = this.bigwinVO.isRoundWin,
      o = 0;
    App.globalAudio.pauseMusic(), n && !s ? a ? (this.showFireworks(), 4 == t ? (dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_8.EBTM.ULTRA_IN
      }
    }), o = 2) : 5 == t && (dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_8.EBTM.LEGEND_IN
      }
    }), o = 2.5), this.scheduleOnce(function () {
      i.playBigwin(t - 1, e);
    }, o)) : this.playBigwin(t - 1, e) : (this.playWin(e), this.showCoinSpray(), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_8.EBTM.WIN_LOOP,
        loop: !0
      }
    }));
  }, o.playWin = function (t) {
    var e = this,
      i = __dependency_8.default.getData().bigwinAutoCloseTime;
    this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.effectFont.skeletonData = this.data.getGameAlertSpine("w_win"), this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      e.effectFont.setAnimation(0, "loop", !1), e.playBigFontLoop = function () {
        e.effectFont.setAnimation(0, "loop", !1);
      }, e.schedule(e.playBigFontLoop, 2.5, __dependency_1.macro.REPEAT_FOREVER, 0), e.effectFont.setCompleteListener(null);
    }), this.effectBg.skeletonData = this.data.getGameAlertSpine("w_win_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setAnimation(0, "loop", !0);
    }), this.scheduleOnce(this.showWinResult, i + t);
  }, o.playBigwin = function (t, e) {
    var i = this,
      n = __dependency_8.default.getData().bigwinAutoCloseTime,
      a = this.bigwinFontFileNames[t],
      s = (this.data.getData().parser.bigwinReach.level, this.bigwinVO.isFgOut),
      o = 2.5;
    3 == t ? o = 2.3 : 4 == t && (o = 2), this.effectBg.node.active = !0, this.effectFont.node.active = !0, this.effectFont.skeletonData = this.data.getGameAlertSpine(a), this.effectFont.setAnimation(0, "in", !1), this.effectFont.setCompleteListener(function () {
      i.effectFont.setAnimation(0, "loop", !1), i.playBigFontLoop = function () {
        i.effectFont.setAnimation(0, "loop", !1);
      }, i.schedule(i.playBigFontLoop, 2.5, __dependency_1.macro.REPEAT_FOREVER, 0), i.effectFont.setCompleteListener(null);
    }), this.effectBg.skeletonData = this.data.getGameAlertSpine(a + "_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      i.effectBg.setAnimation(0, "loop", !0);
    }), t < 3 && dispatch(__dependency_10.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_8.EBTM.SMALL_PRIZE_IN
      }
    }), this.playWinBtm(t), this.playPrizeLoopBtmSchedule = function () {
      var e = t < 3 ? __dependency_8.EBTM.S_PRIZE_LOOP : __dependency_8.EBTM.L_PRIZE_LOOP;
      i.showCoinSpray(), dispatch(__dependency_10.GameEvent.PLAY_BTM, {
        data: {
          url: e,
          loop: !0
        }
      });
    }, this.scheduleOnce(this.playPrizeLoopBtmSchedule, o), n && !s && this.scheduleOnce(this.showWinResult, n + o + e), __dependency_12.default.isReplay ? s ? this.scheduleOnce(this.showWinResult, n + o + e) : this.scheduleOnce(this.addClickAlertCompleteCb, e + o) : s ? this.scheduleOnce(function () {
      i.alert.once(__dependency_1.NodeEventType.TOUCH_END, function () {
        return i.showWinResult();
      }, n + o + e);
    }, n + o + e) : this.scheduleOnce(this.addClickAlertCompleteCb, e + o);
  }, o.addClickAlertCompleteCb = function () {
    this.alert.once(__dependency_1.NodeEventType.TOUCH_END, this.completedCB);
    var t = __dependency_8.default.getData().bigwinAutoCloseTime;
    this.scheduleOnce(this.completedCB, t), this.unschedule(this.addClickAlertCompleteCb);
  }, o.playWinBtm = function (t) {
    var e,
      i = 0;
    switch (t) {
      case 0:
        e = __dependency_8.EBTM.BIG_VOCAL, i = 1.2;
        break;
      case 1:
        e = __dependency_8.EBTM.SUPER_VOCAL, i = .8;
        break;
      case 2:
        e = __dependency_8.EBTM.MEGA_VOCAL, i = .9;
        break;
      case 3:
        e = __dependency_8.EBTM.ULTRA_VOCAL, i = .9;
        break;
      case 4:
        e = __dependency_8.EBTM.LEGENDARY_VOCAL, i = 0;
    }
    this.playPrizeVoiceBtmSchedule = function () {
      dispatch(__dependency_10.GameEvent.PLAY_BTM, {
        data: {
          url: e
        }
      });
    }, this.scheduleOnce(this.playPrizeVoiceBtmSchedule, i);
  }, o.playBounceTween = function (t, e) {
    (0, __dependency_1.tween)(t).to(.1, {
      scale: new __dependency_1.Vec3(1.8, 1.8, 1.8)
    }).delay(.01).to(.1, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, o.showFireworks = function () {
    this.fireworks.node.active = !0, this.fireworks.setAnimation(0, "fireworks", !0), this.fireworks.timeScale = 1.5;
  }, o.showCoinSpray = function () {
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
  }, o.showWinResult = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = e.totalWinnings,
      n = e.roundWinnings,
      a = this.data.currentGameType == __dependency_11.EGameType.MAIN_GAME,
      s = (this.data.getData().parser.bigwinReach.level, this.bigwinVO.isFgOut);
    this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = __dependency_6.CmmSlotUtils.formatNumber(this.bigwinVO.winnings), this.playBounceTween(this.totalWin.node), this.unschedule(this.playBigFontLoop), dispatch(__dependency_10.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: i
    }), dispatch(__dependency_10.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: a ? i : n
    }), this.unschedule(this.showWinResult), this.showWinStatus = Y.SHOW_BUGWIN_NUMBER_END, this.bigwinVO.isRoundWin ? this.scheduleOnce(this.completedCB, 1) : s ? __dependency_12.default.isReplay ? (this.stopAllMusicAndSchedule(), this.completedCB()) : this.scheduleOnce(function () {
      t.alert.once(__dependency_1.NodeEventType.TOUCH_END, function () {
        t.stopAllMusicAndSchedule(), t.completedCB();
      });
    }, 1) : this.addClickAlertCompleteCb();
  }, o.showBigwin = function (t, e) {
    var i = this,
      n = this.data.getData().gameState,
      a = n.totalWinnings,
      s = n.roundWinnings,
      o = this.data.currentGameType == __dependency_11.EGameType.MAIN_GAME,
      l = this.data.getData().definition.digital,
      c = this.data.getData().parser.bigwinReach.level,
      h = e.winnings,
      u = e.isRoundWin,
      d = 5 + 3 * c,
      p = c >= 4 && !u ? 4.5 : 2.7,
      f = {
        label: this.totalWin,
        start: 0,
        end: h,
        tweenTime: d,
        digital: l,
        useThousandsSeparator: !0
      };
    (u || 0 == c) && (p = 0), this.bigwinVO = e, this.showWinStatus = Y.SHOW_BIGWIN, this.completedCB = function () {
      i.unscheduleAllCallbacks(), i.showWinStatus = Y.BIGWIN_COMPLETED, i.tweenNumTween && i.tweenNumTween.stop(), dispatch(__dependency_10.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: a
      }), dispatch(__dependency_10.GameEvent.QUICK_STOP_WIN_AMOUNT, {
        data: o ? a : s
      }), t(), i.onClose(), i.unschedule(i.playBigFontLoop);
    }, this.playAnimation(c, d), this.scheduleOnce(function () {
      i.showWinStatus = Y.SHOW_BUGWIN_NUMBER, i.totalWin.node.active = !0, i.tweenNumTween = __dependency_6.CmmSlotUtils.tweenNum(f), i.alert.once(__dependency_1.NodeEventType.TOUCH_END, function () {
        i.showWinResult();
      }, i), dispatch(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        data: {
          value: a,
          tweenTime: d
        }
      }), dispatch(__dependency_10.GameEvent.UPDATE_WIN_AMOUNT, {
        data: {
          value: h,
          tweenTime: d
        }
      });
    }, p);
  }, o.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === __dependency_1.KeyCode.SPACE) switch (this.showWinStatus) {
      case Y.SHOW_BUGWIN_NUMBER:
        this.showWinResult(), this.showWinStatus = Y.SHOW_BUGWIN_NUMBER_END;
        break;
      case Y.SHOW_BUGWIN_NUMBER_END:
        this.showWinStatus = Y.BIGWIN_COMPLETED, this.unscheduleAllCallbacks(), this.scheduleOnce(this.completedCB, .5);
    }
  }, o.addEvents = function () {}, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_9.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "alert", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "effectBg", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "effectFont", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "totalWin", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "fireworks", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "coinSprays", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = F)) || D));
__dependency_1.cclegacy._RF.pop();
