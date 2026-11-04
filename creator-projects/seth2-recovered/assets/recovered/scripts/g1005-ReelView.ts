// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-ReelView.ts.js
// SHA256: e62fa289accd092d0b58b8d85974d989f5e22d4344e0e2f7d906ea497b1e6de8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-CmmSlotUtils";
import * as __dependency_5 from "./framework-MathUtil";
import * as __dependency_6 from "./g1005-GameConfigModel";
import * as __dependency_7 from "./g1005-GameData";
import * as __dependency_8 from "./g1005-GameEvent";
import * as __dependency_9 from "./g1005-types";
var __export_0;
export { __export_0 as WIN_BOARD_ANIME_NAME };
var __export_1;
export { __export_1 as ReelView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WIN_BOARD_ANIME_NAME":
      __export_0 = value;
      break;
    case "ReelView":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
  void 0, void 0;
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
var N, I, v, B, S, D, G, W, L, R, C, M, O, P, z, U, k, x, Y, q, V, j, H, Q, J, K, X, Z, $, tt;
__publish("WIN_BOARD_ANIME_NAME", void 0), __dependency_1.cclegacy._RF.push({}, "762716NSQRJn7FWkS+bGv0A", "ReelView", void 0), function (t) {
  t.MG_IDLE = "mg_idle", t.FG_IDLE = "fg_idle", t.MG_WIN = "mg_win", t.FG_WIN = "fg_win", t.GOLDENFG_IDLE = "golden_idle", t.GOLDENFG_WIN = "golden_win";
}(tt || (tt = __publish("WIN_BOARD_ANIME_NAME", {})));
var nt = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("ReelView", (N = nt("ReelView"), I = (0, __dependency_3.inject)("bgEffect", __dependency_1.sp.Skeleton), v = (0, __dependency_3.inject)("bgContent/bgLeft", __dependency_1.Sprite), B = (0, __dependency_3.inject)("bgContent/bgRight", __dependency_1.Sprite), S = (0, __dependency_3.inject)("winboard/bg", __dependency_1.Sprite), D = (0, __dependency_3.inject)("winboard/spine", __dependency_1.sp.Skeleton), G = (0, __dependency_3.inject)("winboard/winnings/winAmount", __dependency_1.Label), W = (0, __dependency_3.inject)("winboard/winnings/cross", __dependency_1.Label), L = (0, __dependency_3.inject)("winboard/winnings/times", __dependency_1.Label), R = (0, __dependency_3.inject)("fgRemaining", __dependency_1.Node), C = (0, __dependency_3.inject)("fgRemaining/remaining", __dependency_1.Label), M = (0, __dependency_3.inject)("winboard/fontNode/font", __dependency_1.Sprite), O = (0, __dependency_3.inject)("winboard/fontNode", __dependency_1.UIOpacity), P = (0, __dependency_3.inject)("reelLogo", __dependency_1.Sprite), N((k = (0, __dependency_0.applyDecoratedDescriptor)((U = function (t) {
  function n() {
    for (var n, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || n) || this, (0, __dependency_0.initializerDefineProperty)(n, "bgEffect", k, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "bgLeft", x, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "bgRight", Y, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "winboardBg", q, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "spine", V, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "winAmount", j, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "cross", H, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "times", Q, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "fgRemaining", J, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "remaining", K, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "winBoardFont", X, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "fontNodeOpacity", Z, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "reelLogo", $, (0, __dependency_0.assertThisInitialized)(n)), n.curWinBoardFontIndex = 0, n.curTimes = 0, n.fontNodeOpacityTween = null, n.winAmountTween = null, n.increaseCounts = 0, n.originBgY = 0, n.isMg = !0, n;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    __dependency_6.default.useProEffect || (this.bgEffect.node.active = !1), this.winAmount.node.active = !1, this.winBoardFont.node.parent.active = !0, this.originBgY = this.bgLeft.node.y;
  }, r.setBgSprite = function (t) {
    var n = this.data.getData().gameState.isGoldenFg,
      i = t ? "mg_reel" : n ? "nfg_reel" : "fg_reel";
    this.isMg = t;
    var e = t ? "mg_winboard" : n ? "nfg_winboard_wing" : "fg_winboard",
      o = this.data.getCommonSpriteFrame(i),
      a = this.data.getCommonSpriteFrame(e);
    this.bgLeft.spriteFrame = this.bgRight.spriteFrame = o, this.winboardBg.spriteFrame = a, this.bgLeft.node.y = t ? this.originBgY : n ? this.originBgY + 22 : this.originBgY, this.bgRight.node.y = t ? this.originBgY : n ? this.originBgY + 22 : this.originBgY;
    var r = t ? "mg_atg" : n ? "nfg_atg" : "fg_atg",
      s = this.data.getCommonSpriteFrame(r);
    this.reelLogo.spriteFrame = s;
    var u = t ? tt.MG_IDLE : n ? tt.GOLDENFG_IDLE : tt.FG_IDLE;
    this.spine && (this.spine.clearTracks(), this.spine.setToSetupPose(), this.spine.setAnimation(0, u, !0));
  }, r.setFgElements = function (t) {
    var n = this.data.getData().gameState.freeGameCount;
    this.fgRemaining.active = !t, this.remaining.string = null == n ? void 0 : n.toString(), __dependency_6.default.useProEffect && (this.bgEffect.node.active = !t);
  }, r.updateWinAmount = function (t) {
    var n = t.value,
      i = t.tweenTime,
      e = this.data.getData().definition.digital,
      o = __dependency_6.default.getData().winAmountTime,
      a = {
        label: this.winAmount,
        start: parseFloat(this.winAmount.string.replace(/,/g, "")),
        end: n,
        tweenTime: i || o,
        digital: e,
        useThousandsSeparator: !0,
        callback: function () {}
      };
    n ? (this.winAmountTween = __dependency_4.CmmSlotUtils.tweenNum(a), this.winAmount.node.active = !0, this.winBoardFont.node.active = !1) : (this.winAmount.string = "0", this.winAmount.node.active = !1, this.winBoardFont.node.active = !0);
  }, r.quickStopWinAmount = function (t) {
    this.winAmountTween && this.winAmountTween.stop(), this.winAmount.string = __dependency_4.CmmSlotUtils.formatNumber(t);
  }, r.updateFgRemaining = function () {
    var t = this.data.getData().gameState.freeGameCount;
    Number(this.remaining.string) != t && this.playBounceTween(this.remaining.node), this.remaining.string = t.toString();
  }, r.IncreaseFgRemaining = function (t) {
    var n = this,
      i = this.data.getData().definition.extraFgRounds,
      e = this.remaining.color;
    this.increaseCounts++;
    var o = 1 + .05 * this.increaseCounts,
      a = 1 - .02 * this.increaseCounts;
    (0, __dependency_1.tween)(this.remaining.node).to(.1, {
      scale: new __dependency_1.Vec3(o, o, 1)
    }, {
      onComplete: function () {
        n.remaining.string = (Number(n.remaining.string) + 1).toString();
      },
      easing: "quintIn"
    }).to(.05, {
      scale: new __dependency_1.Vec3(a, a, 1)
    }, {
      easing: "quintIn"
    }).call(function () {
      n.increaseCounts == i ? (n.increaseCounts = 0, n.scheduleOnce(function () {
        t();
      }, 1), (0, __dependency_1.tween)(n.remaining.node).to(.1, {
        scale: new __dependency_1.Vec3(1, 1, 1)
      }, {
        easing: "quintIn"
      }).start()) : n.increaseCounts < i && n.IncreaseFgRemaining(t);
    }).start(), (0, __dependency_1.tween)(e).to(.1, {
      a: 130
    }, {
      easing: "quintIn"
    }).to(.05, {
      a: 255
    }, {
      easing: "quintIn"
    }).start();
  }, r.playWinBoardAnime = function (t) {
    var n = this,
      i = this.data.getData().gameState.isGoldenFg,
      e = t ? tt.MG_WIN : i ? tt.GOLDENFG_WIN : tt.FG_WIN;
    this.spine && (this.spine.clearTracks(), this.spine.setToSetupPose(), this.spine.setAnimation(0, e, !1), this.spine.setCompleteListener(function () {
      var e = t ? tt.MG_IDLE : i ? tt.GOLDENFG_IDLE : tt.FG_IDLE;
      n.spine.setCompleteListener(function () {}), n.spine.clearTracks(), n.spine.setToSetupPose(), n.spine.setAnimation(0, e, !0);
    }));
  }, r.playWinBoardFontTween = function (t) {
    var n = this,
      i = this.data.getData().gameState.isGoldenFg,
      e = t ? [7, 6, 1, 3, 4] : i ? [8, 7, 3, 4] : [5, 2, 3, 4];
    this.unschedule(this.fontNodeOpacityTween), this.fontNodeOpacityTween = null, this.curWinBoardFontIndex = 0, this.setWinBoardFont(e[this.curWinBoardFontIndex]), this.fontNodeOpacityTween = function () {
      (0, __dependency_1.tween)(n.fontNodeOpacity).to(1, {
        opacity: 0
      }, {
        easing: "fade",
        onComplete: function () {
          n.curWinBoardFontIndex == e.length - 1 ? n.curWinBoardFontIndex = 0 : n.curWinBoardFontIndex++, n.setWinBoardFont(e[n.curWinBoardFontIndex]);
        }
      }).to(1, {
        opacity: 255
      }, {
        easing: "fade"
      }).start();
    }, this.schedule(this.fontNodeOpacityTween, 5, __dependency_1.macro.REPEAT_FOREVER, 3);
  }, r.setWinBoardFont = function (t) {
    var n = "mg_font_winboard_0" + __dependency_5.default.zeroPad(t, 1);
    this.winBoardFont.spriteFrame = this.data.getLocaleSpriteFrame(n);
  }, r.expandWinnings = function () {
    this.times.string = "", this.curTimes = 0, this.times.color.set(255, 255, 255, 255), this.cross.color.set(255, 255, 255, 255), this.cross.node.active = !0, this.times.node.active = !0;
  }, r.mergeWinnings = function (t) {
    var n = this,
      i = this.data.getData().gameState,
      e = i.totalWinnings,
      o = i.roundWinnings,
      a = i.action,
      r = "freeSpin" == a,
      s = a == __dependency_9.EActionType.SUPER_GAME,
      u = r ? o : e;
    0 == r && (u = s ? o : e), (0, __dependency_1.tween)(this.winAmount.node).delay(.5).to(.5, {
      position: new __dependency_1.Vec3(0, 3, 0)
    }, {
      onComplete: function () {
        n.winAmount.string = __dependency_4.CmmSlotUtils.formatNumber(u), n.playBounceTween(n.winAmount.node, t), dispatch(__dependency_8.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_6.EBTM.SCORE
          }
        }), r && dispatch(__dependency_8.GameEvent.UPDATE_FG_TOTAL_TIMES, {
          data: n.curTimes
        });
      }
    }).start(), (0, __dependency_1.tween)(this).delay(.95).call(function () {
      n.playWinBoardAnime(n.isMg);
    }).start(), (0, __dependency_1.tween)(this.times.node).delay(.5).to(.5, {
      position: new __dependency_1.Vec3(0, 17, 0)
    }, {
      onStart: function () {
        n.playFadeOut(n.times);
      }
    }).start(), (0, __dependency_1.tween)(this.cross.node).delay(.5).to(.5, {
      position: new __dependency_1.Vec3(0, 12, 0)
    }, {
      onStart: function () {
        n.playFadeOut(n.cross);
      }
    }).start();
  }, r.playBounceTween = function (t, n) {
    (0, __dependency_1.tween)(t).to(.1, {
      scale: new __dependency_1.Vec3(1.5, 1.5, 1.5)
    }).delay(.01).to(.1, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    }, {
      onComplete: function () {
        n && n();
      }
    }).start();
  }, r.playFadeOut = function (t) {
    (0, __dependency_1.tween)(t.color).to(.5, {
      a: 0
    }, {
      onComplete: function () {
        t.node.active = !1;
      }
    }).start();
  }, r.updateTimes = function (t) {
    this.curTimes += t, this.times.string = this.curTimes.toString(), this.times.forceDoLayout();
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, function (n) {
      t.updateWinAmount(n.data);
    }), this.on(__dependency_8.GameEvent.QUICK_STOP_WIN_AMOUNT, function (n) {
      t.quickStopWinAmount(n.data);
    }), this.on(__dependency_8.GameEvent.CHANGE_GAME_STYLE, function (n) {
      t.setBgSprite(n.data), t.setFgElements(n.data), t.playWinBoardFontTween(n.data);
    }), this.on(__dependency_8.GameEvent.UPDATE_FG_REMAINING, function (n) {
      t.updateFgRemaining();
    }), this.on(__dependency_8.GameEvent.INCREASE_FG_REMAINING, function (n) {
      t.IncreaseFgRemaining(n.complete);
    }), this.on(__dependency_8.GameEvent.EXPAND_WIN_AMOUNT, function (n) {
      t.expandWinnings();
    }), this.on(__dependency_8.GameEvent.UPDATE_TIMES, function (n) {
      t.playBounceTween(t.times.node), t.updateTimes(n.data);
    }), this.on(__dependency_8.GameEvent.MERGE_WIN_AMOUNT, function (n) {
      t.mergeWinnings(n.data);
    });
  }, (0, __dependency_0.createClass)(n, [{
    key: "data",
    get: function () {
      return __dependency_7.default.ins;
    }
  }]), n;
}(__dependency_2.default)).prototype, "bgEffect", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "bgLeft", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "bgRight", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "winboardBg", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "spine", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "winAmount", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), H = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "cross", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Q = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "times", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "fgRemaining", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "remaining", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "winBoardFont", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Z = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "fontNodeOpacity", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), $ = (0, __dependency_0.applyDecoratedDescriptor)(U.prototype, "reelLogo", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = U)) || z));
__dependency_1.cclegacy._RF.pop();
