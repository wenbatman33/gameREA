// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-Symbol.ts.js
// SHA256: ab020763f85a6b40ece475e48fdbca630848a61d805d1901df9193384a49f62d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./g1005-GameConfigModel";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-GameSymbolID";
import * as __dependency_7 from "./g1005-GameEvent";
import * as __dependency_8 from "./g1005-types";
var __export_0;
export { __export_0 as Symbol };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Symbol":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
  void 0, void 0;
})(__dependency_6);
(function (t) {
  void 0;
})(__dependency_7);
(function (t) {
  void 0;
})(__dependency_8);
var L, k, I, D, E, B, O, M, P, C, w, R, z, W, F, G, N, x, Y, K, U, H, V, J, j, X, q, Q, Z;
__dependency_1.cclegacy._RF.push({}, "8b5c9+5tJdDm7rTkzFhpnhS", "Symbol", void 0);
var $ = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("Symbol", (L = $("Symbol"), k = (0, __dependency_3.inject)("frame", __dependency_1.sp.Skeleton), I = (0, __dependency_3.inject)("symbolSprite", __dependency_1.Sprite), D = (0, __dependency_3.inject)("symbolSpriteBlur", __dependency_1.Sprite), E = (0, __dependency_3.inject)("upgrade", __dependency_1.sp.Skeleton), B = (0, __dependency_3.inject)("symbolOut", __dependency_1.sp.Skeleton), O = (0, __dependency_3.inject)("times", __dependency_1.Label), M = (0, __dependency_3.inject)("timesSplitA/times_A", __dependency_1.Label), P = (0, __dependency_3.inject)("timesSplitA/symbolSprite_A", __dependency_1.Sprite), C = (0, __dependency_3.inject)("symbolAnimation", __dependency_1.sp.Skeleton), w = (0, __dependency_3.inject)("timesSplitA", __dependency_1.sp.Skeleton), R = (0, __dependency_3.inject)("timesSplitB", __dependency_1.sp.Skeleton), z = (0, __dependency_3.inject)("timesLock", __dependency_1.sp.Skeleton), W = (0, __dependency_3.inject)("timesStage", __dependency_1.sp.Skeleton), L((N = (0, __dependency_0.applyDecoratedDescriptor)((G = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "frameSpine", N, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "symbolSprite", x, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "symbolSpriteBlur", Y, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "upgradeAnimation", K, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "symbolOutSpine", U, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "times", H, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "times_A", V, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "symbolSprite_A", J, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "symbolAnimation", j, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "timesSplitASpine", X, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "timesSplitBSpine", q, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "timesLockSpine", Q, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "timesStageSpine", Z, (0, __dependency_0.assertThisInitialized)(e)), e.symbolID = null, e.posId = null, e.isRare = null, e.lockLv = "", e.isTimeSymbol = !1, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var a = e.prototype;
  return a.onLoad = function () {}, a.start = function () {
    this.node.layer = __dependency_1.Layers.Enum.UI_2D;
  }, a.onDestroy = function () {}, a.update = function (t) {}, a.setSymbolSprite = function (t) {
    var e = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0"),
      i = this.data.getSymbolSpriteFrame(e);
    this.symbolSprite.spriteFrame = i, this.symbolSprite.node.active = !0;
  }, a.setSymbolSpriteSplit = function (t) {
    var e = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0"),
      i = this.data.getSymbolSpriteFrame(e);
    this.symbolSprite_A.spriteFrame = i, this.symbolSprite_A.node.active = !1;
  }, a.setIsRare = function () {
    var t = this,
      e = this.data.getData().gameState.timesSymbols,
      i = void 0 === e ? [] : e;
    if (i && i.length > 0) {
      var n = i.find(function (e) {
        return e.isRare && e.symbolPos == t.posId;
      });
      this.isRare = !!n;
    } else this.isRare = !1;
  }, a.setTimesText = function (t) {
    this.times.node.active = !0, this.times.string = t ? t + "x" : "", this.times_A && (this.times_A.node.active = !0, this.times_A.string = t ? t + "x" : "");
  }, a.setTimesTextSplit = function (t) {
    this.times.node.active = !1, this.times.string = t ? t + "x" : "", this.times_A.node.active = !0, this.times_A.string = t ? t + "x" : "", 0 == this.times_A.node.parent.active && (this.times_A.node.parent.active = !0);
  }, a.reset = function () {
    this.isRare = !1, __dependency_1.Tween.stopAllByTarget(this), this.symbolAnimation.node.active = !1, this.frameSpine.node.active = !1, this.symbolOutSpine.node.active = !1, this.symbolSpriteBlur.node.active = !1, this.symbolSprite.node.active = !0, this.timesSplitASpine.node.active = !1, this.timesSplitBSpine.node.active = !1, this.timesLockSpine.node.active = !1, this.timesStageSpine.node.active = !1, this.symbolAnimation && this.symbolAnimation.setCompleteListener(null), this.symbolOutSpine && this.symbolOutSpine.setCompleteListener(null), this.timesLockSpine && this.timesLockSpine.setCompleteListener(null);
  }, a.setData = function (t) {
    var e = t.symbolId,
      i = t.posId,
      n = t.isTimesSymbol,
      s = [__dependency_6.EBackendSymbolID.ORANGE_GEM, __dependency_6.EBackendSymbolID.RED_GEM, __dependency_6.EBackendSymbolID.PURPLE_GEM, __dependency_6.EBackendSymbolID.BLUE_GEM, __dependency_6.EBackendSymbolID.GREEN_GEM].includes(e) ? 1.15 : 1;
    this.isTimeSymbol = n, this.symbolSprite.node.setScale(s, s), this.symbolAnimation.node.setScale(s, s), this.symbolSpriteBlur.node.setScale(s, s), this.symbolSprite_A.node.setScale(s, s), this.name = "" + i, this.posId = i, this.symbolID = e, this.isRare = !1, n && this.setIsRare(), this.setSymbolSprite(e), this.setSymbolSpriteSplit(e), this.setSymbolBlur(e), this.times.node.active = !1, this.times_A.node.active = !1;
  }, a.recycleSymbol = function () {
    this.hide(), this.reset(), App.pool.getPool(__dependency_8.EPool.SYMBOL_POOL).put(this.node);
  }, a.playLoopAnim = function () {
    var t = this;
    __dependency_4.default.useProEffect && this.scheduleOnce(function () {
      t.playAnim(t.symbolID, __dependency_6.ESymbolAnimType.LOOP, !0);
    }, 0);
  }, a.playWinAnim = function (t) {
    var e = this.data.getData().gameState,
      i = e.femaleTotemLevel,
      n = void 0 === i ? 0 : i,
      s = e.maleTotemLevel,
      o = void 0 === s ? 0 : s;
    this.playAnim(this.symbolID, __dependency_6.ESymbolAnimType.WIN, !1);
    var a = 1;
    n > 0 && (a = this.getWomenTotemWinDelay(n)), o > 0 && (a = this.getManTotemWinDelay(o)), this.scheduleOnce(function () {
      t && t();
    }, a), this.frameSpine.node.active = !0, this.frameSpine.setAnimation(0, "win", !0);
  }, a.playScatterInAnim = function () {
    var t = this;
    this.playAnim(this.symbolID, __dependency_6.ESymbolAnimType.IN, !1, function () {
      t.playAnim(t.symbolID, __dependency_6.ESymbolAnimType.LOOP, !0);
    }), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.SCATTER_IN
      }
    });
  }, a.playScatterInBtm = function () {
    dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.SCATTER_IN
      }
    });
  }, a.playScatterInBtmFast = function () {
    dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.SCATTER_IN_X2
      }
    });
  }, a.playJackpotInAnim = function () {
    var t = this;
    this.playAnim(this.symbolID, __dependency_6.ESymbolAnimType.IN, !1, function () {
      t.playAnim(t.symbolID, __dependency_6.ESymbolAnimType.LOOP, !0);
    });
  }, a.playScatterWinAnim = function (t) {
    var e = this;
    this.playAnim(this.symbolID, __dependency_6.ESymbolAnimType.WIN, !1, function () {
      e.playAnim(e.symbolID, __dependency_6.ESymbolAnimType.LOOP, !0), t && t();
    });
  }, a.getWomenTotemWinDelay = function (t) {
    var e = 0;
    switch (t) {
      case 1:
        e = 1.265;
        break;
      case 2:
        e = 1.629;
        break;
      case 3:
        e = 2.227;
    }
    return e;
  }, a.getManTotemWinDelay = function (t) {
    var e = 0;
    switch (t) {
      case 1:
        e = 1.264;
        break;
      case 2:
        e = 1.631;
        break;
      case 3:
        e = 2.232;
    }
    return e;
  }, a.playTotemWinAnim = function (t, e, i) {
    var n = this;
    __dependency_1.Tween.stopAllByTarget(this);
    this.symbolID == __dependency_6.EBackendSymbolID.WOMEN_TOTEM ? (0, __dependency_1.tween)(this).delay(0).call(function () {
      n.symbolAnimation.node.active = !0, n.symbolSprite.node.active = !1, n.symbolSprite_A.node.active = !1, n.frameSpine.node.active = !1, n.symbolOutSpine.node.active = !1;
      var i = n.isRare ? n.symbolID.toString().padStart(2, "0") + "_01" : "" + n.symbolID.toString().padStart(2, "0");
      n.symbolAnimation.skeletonData = n.data.getSymbolAnimSpine(i), n.symbolAnimation.clearTracks(), n.symbolAnimation.setToSetupPose(), n.symbolAnimation.setCompleteListener(null), n.symbolAnimation.setEventListener(null), n.symbolAnimation.setAnimation(0, "lv" + e + "_2", !1), n.symbolAnimation.node.active = !0, n.symbolAnimation.setEventListener(function (e, i) {
        n.symbolAnimation.setEventListener(null), t && t();
      }), n.symbolAnimation.setCompleteListener(function () {
        n.recycleSymbol();
      });
    }).start() : this.symbolID == __dependency_6.EBackendSymbolID.MEN_TOTEM ? (0, __dependency_1.tween)(this).delay(0).call(function () {
      n.symbolAnimation.node.active = !0, n.symbolSprite.node.active = !1, n.symbolSprite_A.node.active = !1, n.frameSpine.node.active = !1, n.symbolOutSpine.node.active = !1;
      var i = n.isRare ? n.symbolID.toString().padStart(2, "0") + "_01" : "" + n.symbolID.toString().padStart(2, "0");
      n.symbolAnimation.skeletonData = n.data.getSymbolAnimSpine(i), n.symbolAnimation.clearTracks(), n.symbolAnimation.setToSetupPose(), n.symbolAnimation.setCompleteListener(null), n.symbolAnimation.setAnimation(0, "lv" + e, !1), n.symbolAnimation.setEventListener(function (e, i) {
        n.symbolAnimation.setEventListener(null), t && t();
      }), n.symbolAnimation.setCompleteListener(function () {
        n.symbolAnimation.setCompleteListener(null), n.recycleSymbol();
      });
    }).start() : this.playAnim(this.symbolID, "lv" + e, !1, t);
  }, a.playTotemHitAnim = function () {
    this.playAnim(this.symbolID, __dependency_6.ESymbolAnimType.HIT, !1);
  }, a.playJpWinAnim = function (t) {
    var e = this;
    this.playAnim(this.symbolID, __dependency_6.ESymbolAnimType.WIN, !1, function () {
      e.playAnim(e.symbolID, __dependency_6.ESymbolAnimType.LOOP, !0), t && t();
    });
  }, a.playOutAnim = function () {
    var t = this;
    this.symbolID == __dependency_6.EBackendSymbolID.WOMEN_TOTEM || this.symbolID == __dependency_6.EBackendSymbolID.MEN_TOTEM || (0, __dependency_1.tween)(this).delay(.13).call(function () {
      t.symbolAnimation.node.active = !1, t.symbolSprite.node.active = !1, t.symbolSprite_A.node.active = !1, t.frameSpine.node.active = !1, t.symbolOutSpine.node.active = !0, t.symbolOutSpine.clearTracks(), t.symbolOutSpine.setToSetupPose(), t.symbolOutSpine.setCompleteListener(null), t.symbolOutSpine.setAnimation(0, "out", !1), t.symbolOutSpine.setCompleteListener(function () {
        t.recycleSymbol();
      });
    }).start();
  }, a.showSplitA_Anim = function (t) {
    var e = this;
    this.frameSpine.node.active = !1, this.symbolAnimation.node.active = !1, this.timesSplitASpine.clearTracks(), this.timesSplitASpine.setToSetupPose(), this.timesSplitASpine.node.active = !0, this.symbolSprite_A.node.active = !0, this.times.node.active = !1, this.times_A.node.active = !0, this.timesSplitASpine.setEventListener(null), this.timesSplitASpine.setAnimation(0, "split_A", !1), this.timesSplitASpine.setEventListener(function (i, n) {
      e.timesSplitASpine.setEventListener(null), "split_B" == n.data.name && dispatch(__dependency_7.GameEvent.SHOW_TIMES_B, {
        complete: t
      });
    }), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.TIMES_SPLIT_A
      }
    });
  }, a.showSplitB_Anim = function (t) {
    var e = this;
    this.closeTimesSymbol(), this.frameSpine.node.active = !1, this.symbolAnimation.node.active = !1, this.timesSplitBSpine.node.active = !0, this.timesSplitBSpine.clearTracks(), this.timesSplitBSpine.setToSetupPose(), this.timesSplitBSpine.setEventListener(function (t, e) {}), this.timesSplitBSpine.setAnimation(0, "split_B", !1), this.timesSplitBSpine.setCompleteListener(function () {
      e.timesSplitBSpine.setCompleteListener(null), t && t();
    }), (0, __dependency_1.tween)(this).delay(.5).call(function () {
      e.initTimesSymbol(e.posId), e.showTimesSymbol();
    }).start(), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.TIMES_SPLIT_B
      }
    });
  }, a.showTimesStage_Anim = function (t, e, i) {
    var n = this;
    void 0 === i && (i = !1);
    var s = "lv1",
      o = 1;
    switch (t) {
      case 1:
      case 0:
      case 2:
        o = 1, s = "lv1", 0 == this.isRare && (s += "_normal");
        break;
      case 3:
      case 4:
        o = 2, s = "lv2", 0 == this.isRare && (s += "_normal");
        break;
      case 5:
      case 6:
      case 7:
        o = 3, s = "lv3", 0 == this.isRare && (s += "_normal");
    }
    this.timesLockSpine.clearTracks(), this.timesLockSpine.setToSetupPose(), i && dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.TIMES_LOCK
      }
    }), this.timesLockSpine.setAnimation(0, "lock_0" + o, !1), this.timesLockSpine.setCompleteListener(function (t) {
      n.timesLockSpine.setCompleteListener(null), e && e(), n.timesLockSpine.setAnimation(0, "loop_0" + o, !0), n.frameSpine.node.active = !1, n.timesStageSpine.clearTracks(), n.timesStageSpine.setToSetupPose(), n.timesStageSpine.node.active = !0, n.timesStageSpine.setAnimation(0, s, !0), n.lockLv = s, n.timesStageSpine.setCompleteListener(function () {
        n.timesStageSpine.setCompleteListener(null), e && e();
      });
    });
  }, a.showTimesLockBTM = function (t) {
    var e;
    switch (t) {
      case 0:
      case 1:
      case 2:
        e = __dependency_4.EBTM.TIMES_LOCK_LV1;
        break;
      case 3:
      case 4:
        e = __dependency_4.EBTM.TIMES_LOCK_LV2;
        break;
      case 5:
      case 6:
        e = __dependency_4.EBTM.TIMES_LOCK_LV3;
        break;
      default:
        e = __dependency_4.EBTM.TIMES_LOCK_LV1;
    }
    dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: e
      }
    });
  }, a.showTimesLock_Anim = function (t, e) {
    this.frameSpine.node.active = !1, this.timesLockSpine.clearTracks(), this.timesLockSpine.setToSetupPose(), this.timesLockSpine.node.active = !0, dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.TIMES_LOCK
      }
    }), this.showTimesStage_Anim(t, e);
  }, a.initTimesSymbol = function (t) {
    var e = this.data.getData().gameState.timesSymbols;
    if (e.length && null != e) {
      var i = e.find(function (e) {
        return e.symbolPos == t;
      });
      if (null != i) {
        var n = i.symbol,
          s = i.times;
        this.setSymbolSprite(n), this.setTimesText(s);
      }
    }
  }, a.openTimesSymbol = function (t) {
    var e = this.data.getData().parser.newTimesSymbols;
    if (e.length) {
      var i = e.find(function (e) {
        return e.symbolPos == t;
      });
      if (null != i) {
        var n = i.symbol,
          s = i.times,
          o = i.symbolPos;
        if (this.setSymbolSprite(n), this.setTimesText(s), null != this.data.getData().gameState.splitList && this.data.getData().gameState.splitList.length > 0) {
          for (var a = this.data.getData().gameState.splitList.slice(), l = !1, m = 0; m < a.length; m++) {
            if (a[m].to.slice().indexOf(o) > -1) {
              l = !0;
              break;
            }
          }
          l && this.setTimesTextSplit(s);
        }
      }
    }
  }, a.playTimesSymbolsUpgrade = function (t) {
    var e = this,
      i = t.afterSymbol,
      n = t.afterTimes,
      s = this.data.getData().gameState.splitList;
    this.data.getData().gameState.isGoldenFg;
    this.times.node.active = !1, this.times_A.node.active = !1, this.times_A.node.parent.active = !1, this.timesSplitBSpine.node.active = !1, this.timesSplitASpine.node.active = !1, this.symbolID = i, this.unscheduleAllCallbacks(), this.upgradeAnimation.node.active = !0, this.upgradeAnimation.clearTracks(), this.upgradeAnimation.setToSetupPose(), this.upgradeAnimation.setCompleteListener(null), this.upgradeAnimation.setAnimation(0, "transition", !1), this.upgradeAnimation.setCompleteListener(function () {
      e.upgradeAnimation.node.active = !1;
    }), this.scheduleOnce(function () {
      null != s && s.length > 0 ? e.setTimesTextSplit(n) : e.setTimesText(n);
    }, .5), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.TIMES_SYMBOL_UPGRADE
      }
    });
  }, a.closeTimesSymbol = function () {
    this.times.node.active = !1, this.symbolSprite.node.active = !1, this.times_A.node.active = !1, this.symbolSprite_A.node.active = !1;
  }, a.showTimesSymbol = function () {
    this.times.node.active = !0, this.symbolSprite.node.active = !0, this.symbolSprite_A.node.active = !1, this.times_A.node.active = !1;
  }, a.closeTimesLabel = function () {
    this.times.node.active = !1, this.times_A.node.active = !1;
  }, a.cloneLockAnime = function () {
    if (this.data.getData().parser.lockTimesSymbols.has(this.posId)) {
      var t,
        e = "lv1";
      switch (this.data.getData().parser.lockTimesSymbols.get(this.posId).lock) {
        case 1:
        case 0:
        case 2:
          t = 1, e = "lv1", 0 == this.isRare && (e += "_normal");
          break;
        case 3:
        case 4:
          t = 2, e = "lv2", 0 == this.isRare && (e += "_normal");
          break;
        case 5:
        case 6:
          t = 3, e = "lv3", 0 == this.isRare && (e += "_normal");
      }
      this.timesLockSpine.setAnimation(0, "loop_0" + t, !0), this.timesStageSpine.clearTracks(), this.timesStageSpine.setToSetupPose(), this.timesStageSpine.node.active = !0, this.timesStageSpine.setAnimation(0, e, !0);
    }
  }, a.playTimesSymbolsFunction = function () {
    var t = this.isRare ? this.symbolID.toString().padStart(2, "0") + "_01" : "" + this.symbolID.toString().padStart(2, "0"),
      e = this.data.getSymbolSpriteFrame(t);
    this.symbolSprite.node.active = !1, this.symbolSprite_A.node.active = !1, this.symbolSprite.spriteFrame = e, this.symbolSprite_A.spriteFrame = e, this.symbolAnimation.node.active = !0, this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(t), this.symbolAnimation.setAnimation(0, "function", !1);
  }, a.setSymbolBlur = function (t) {
    var e = this.isRare ? t.toString().padStart(2, "0") + "_01_blur" : t.toString().padStart(2, "0") + "_blur",
      i = this.data.getSymbolSpriteFrameBlur(e),
      n = this.symbolSprite.node.getComponent(__dependency_1.UITransform),
      s = n.width,
      o = n.height;
    this.symbolSpriteBlur.getComponent(__dependency_1.UITransform).setContentSize(s, o), this.symbolSpriteBlur.spriteFrame = i;
  }, a.setSymbolBlurActive = function (t) {}, a.playAnim = function (t, e, i, n) {
    var s = this.isRare ? t.toString().padStart(2, "0") + "_01" : "" + t.toString().padStart(2, "0");
    this.symbolAnimation.node.active = !0, this.symbolSprite.node.active = !1, this.symbolAnimation.skeletonData = this.data.getSymbolAnimSpine(s), this.symbolAnimation.clearTracks(), this.symbolAnimation.setToSetupPose(), this.symbolAnimation.setAnimation(0, e, !1), this.symbolAnimation.setEventListener(null), this.symbolAnimation.setEventListener(function (t) {}), this.symbolAnimation.setCompleteListener(null), this.symbolAnimation.setCompleteListener(function (t) {
      n && !t.loop && n();
    });
  }, a.show = function () {
    this.node.active = !0;
  }, a.hide = function () {
    this.node.active = !1;
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "frameSpine", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "symbolSprite", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "symbolSpriteBlur", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "upgradeAnimation", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "symbolOutSpine", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "times", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "times_A", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "symbolSprite_A", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "symbolAnimation", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "timesSplitASpine", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "timesSplitBSpine", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "timesLockSpine", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = (0, __dependency_0.applyDecoratedDescriptor)(G.prototype, "timesStageSpine", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = G)) || F));
__dependency_1.cclegacy._RF.pop();
