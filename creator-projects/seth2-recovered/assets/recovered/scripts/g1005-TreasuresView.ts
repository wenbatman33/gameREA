// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-TreasuresView.ts.js
// SHA256: eb8ad2b4310fe0b453230f687bdd661c879ed189e8fe27079017a0de35040420
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UIView";
import * as __dependency_3 from "./g1005-GameEvent";
import * as __dependency_4 from "./g1005-GameConfigModel";
import * as __dependency_5 from "./framework-CmmSlotUtils";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./g1005-GameData";
import * as __dependency_8 from "./framework-SlotFrameworkEvent";
import * as __dependency_9 from "./framework-MathUtil";
import * as __dependency_10 from "./main-UrlUtils";
var __export_0;
export { __export_0 as TreasuresView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TreasuresView":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0, void 0;
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
  void 0;
})(__dependency_8);
(function (t) {
  void 0;
})(__dependency_9);
(function (t) {
  void 0;
})(__dependency_10);
var P, A, C, b, I, E, M, U, v, L, D, R, G, k, V;
__dependency_1.cclegacy._RF.push({}, "8aa14oMcU9NkqZLu7MuIsrF", "TreasuresView", void 0);
var H,
  z = __dependency_1._decorator.ccclass,
  F = __dependency_1._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SHOW_BIGWIN = 1] = "SHOW_BIGWIN", t[t.SHOW_BUGWIN_NUMBER = 2] = "SHOW_BUGWIN_NUMBER", t[t.SHOW_BUGWIN_NUMBER_END = 3] = "SHOW_BUGWIN_NUMBER_END", t[t.BIGWIN_COMPLETED = 4] = "BIGWIN_COMPLETED";
}(H || (H = {}));
__publish("TreasuresView", (P = z("TreasuresView"), A = (0, __dependency_6.inject)("alert", __dependency_1.Node), C = F(__dependency_1.Node), b = (0, __dependency_6.inject)("alert/effectBg", __dependency_1.sp.Skeleton), I = (0, __dependency_6.inject)("alert/totalWin", __dependency_1.Label), E = (0, __dependency_6.inject)("alert/fireworks", __dependency_1.sp.Skeleton), M = (0, __dependency_6.inject)("alert/coinSprays", __dependency_1.Node), P((L = (0, __dependency_0.applyDecoratedDescriptor)((v = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "alert", L, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "bbr", D, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "effectBg", R, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "totalWin", G, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "fireworks", k, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "coinSprays", V, (0, __dependency_0.assertThisInitialized)(e)), e.bigwinFontFileNames = ["w_big", "w_super", "w_mega", "w_ultra", "w_legend"], e.complete = null, e.completedCB = null, e.tweenNumTween = null, e.bigwinVO = null, e.playBigFontLoop = null, e.showWinStatus = H.NONE, e.playPrizeLoopBtmSchedule = null, e.playPrizeVoiceBtmSchedule = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t), e.getPrefabUrl = function () {
    return "prefabs/" + __dependency_10.default.getViewModeParam() + "/TreasuresView";
  };
  var s = e.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    this.stopAllMusicAndSchedule(), t.prototype.onDestroy.call(this);
  }, s.init = function () {
    this.enabledKeyDown = !0;
  }, s.show = function (e) {
    t.prototype.show.call(this);
  }, s.onClose = function () {
    this.unscheduleAllCallbacks(), __dependency_1.Tween.stopAllByTarget(this), this.closeNodes(), this.stopAllMusicAndSchedule(), App.globalAudio.isMusicOn = !0, App.globalAudio.resumeMusic();
    var t = this.data.getData().gameState.noWinReward;
    dispatch(__dependency_3.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: t
    }), dispatch(__dependency_3.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: t
    }), this.close();
  }, s.stopAllMusicAndSchedule = function () {
    dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.JP_POPUP_IN_2
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.JP_POPUP_LOOP_2
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.ULTRA_IN
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.LEGEND_IN
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.S_PRIZE_LOOP
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.L_PRIZE_LOOP
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.FIREWORKS
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.BIG_VOCAL
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.SUPER_VOCAL
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.MEGA_VOCAL
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.ULTRA_VOCAL
    }), dispatch(__dependency_3.GameEvent.STOP_BTM, {
      data: __dependency_4.EBTM.LEGENDARY_VOCAL
    }), this.unschedule(this.playPrizeLoopBtmSchedule), this.unschedule(this.playPrizeVoiceBtmSchedule);
  }, s.closeNodes = function () {
    this.bbr && (this.bbr.active = !1), this.effectBg.node.active = !1, this.totalWin.node.active = !1, this.fireworks.node.active = !1, this.coinSprays.active = !1, this.coinSprays.children.forEach(function (t) {
      t.active = !1;
    }), this.alert.targetOff(this);
  }, s.playAnimation = function (t) {
    App.globalAudio.pauseMusic(), this.playWin(t);
  }, s.playWin = function (t) {
    var e = this,
      i = __dependency_4.default.getData().bigwinAutoCloseTime;
    this.effectBg.node.active = !0, this.effectBg.clearTracks(), this.effectBg.setToSetupPose(), dispatch(__dependency_3.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.JP_POPUP_IN_2,
        loop: !1
      }
    }), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setCompleteListener(null), e.effectBg.setAnimation(0, "open", !1), (0, __dependency_1.tween)(e).delay(.5).call(function () {
        dispatch(__dependency_3.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_4.EBTM.JP_POPUP_LOOP_2,
            loop: !0
          }
        }), e.playCoinSprayAndRunScore();
      }).start(), e.effectBg.setCompleteListener(function () {
        e.effectBg.setCompleteListener(null), e.effectBg.setAnimation(0, "loop", !0);
      });
    }), this.scheduleOnce(this.showWinResult, i + t);
  }, s.playCoinSprayAndRunScore = function () {
    var t = this,
      e = this.data.getData().gameState.noWinReward,
      i = this.data.getData().definition.digital;
    dispatch(__dependency_8.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: e,
        tweenTime: 8
      }
    }), dispatch(__dependency_3.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: e,
        tweenTime: 8
      }
    }), this.showCoinSpray();
    var n = {
      label: this.totalWin,
      start: 0,
      end: e,
      tweenTime: 8,
      digital: i,
      useThousandsSeparator: !0
    };
    this.showWinStatus = H.SHOW_BUGWIN_NUMBER, this.totalWin.node.active = !0, this.tweenNumTween = __dependency_5.CmmSlotUtils.tweenNum(n), this.alert.once(__dependency_1.NodeEventType.TOUCH_END, function () {
      t.showWinResult();
    }, this);
  }, s.addClickAlertCompleteCb = function () {
    this.unschedule(this.addClickAlertCompleteCb), this.alert.once(__dependency_1.NodeEventType.TOUCH_END, this.completedCB);
    var t = __dependency_4.default.getData().bigwinAutoCloseTime;
    this.scheduleOnce(this.completedCB, t);
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
          var t = __dependency_9.default.getRandomNumber(3, 6);
          i.node.active = !0, i.setAnimation(0, "radom_0" + t, !1), i.setCompleteListener(function () {
            var t = __dependency_9.default.getRandomNumber(3, 6);
            i.setAnimation(0, "radom_0" + t, !1);
          });
        }, 2.8 + .5 * (n - 2));
      }, n = 0; n < e.length; n++) i();
  }, s.showWinResult = function () {
    var t = this.data.getData().gameState.noWinReward;
    __dependency_1.Tween.stopAllByTarget(this), this.tweenNumTween && this.tweenNumTween.stop(), this.totalWin.string = __dependency_5.CmmSlotUtils.formatNumber(t), this.playBounceTween(this.totalWin.node), this.unschedule(this.playBigFontLoop), dispatch(__dependency_3.GameEvent.QUICK_STOP_TOTAL_WINNINGS, {
      data: t
    }), dispatch(__dependency_3.GameEvent.QUICK_STOP_WIN_AMOUNT, {
      data: t
    }), this.unschedule(this.showWinResult), this.addClickAlertCompleteCb();
  }, s.showTreasureWin = function (t) {
    var e = this;
    this.totalWin.string = "0.00", this.showWinStatus = H.SHOW_BIGWIN, this.completedCB = function () {
      e.showWinStatus = H.BIGWIN_COMPLETED, t(), e.onClose(), e.unschedule(e.playBigFontLoop);
    }, App.globalAudio.pauseMusic(), App.globalAudio.isMusicOn = !1, (0, __dependency_1.tween)(this).delay(1).call(function () {
      e.bbr.active = !0, (0, __dependency_1.tween)(e).delay(1).call(function () {
        e.playAnimation(8);
      }).start();
    }).start();
  }, s.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === __dependency_1.KeyCode.SPACE) switch (this.showWinStatus) {
      case H.SHOW_BUGWIN_NUMBER:
        this.showWinStatus = H.SHOW_BUGWIN_NUMBER_END;
        break;
      case H.SHOW_BUGWIN_NUMBER_END:
        this.showWinStatus = H.BIGWIN_COMPLETED, this.scheduleOnce(this.completedCB, .5);
    }
  }, s.addEvents = function () {}, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_7.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "alert", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = (0, __dependency_0.applyDecoratedDescriptor)(v.prototype, "bbr", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = (0, __dependency_0.applyDecoratedDescriptor)(v.prototype, "effectBg", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = (0, __dependency_0.applyDecoratedDescriptor)(v.prototype, "totalWin", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = (0, __dependency_0.applyDecoratedDescriptor)(v.prototype, "fireworks", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(v.prototype, "coinSprays", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = v)) || U));
__dependency_1.cclegacy._RF.pop();
