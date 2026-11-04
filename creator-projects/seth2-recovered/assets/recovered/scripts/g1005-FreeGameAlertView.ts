// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-FreeGameAlertView.ts.js
// SHA256: be57e248644e25c5621935a50a2a364c2625caeefbded480fb16a119a142fcbc
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UIView";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-MisaButton";
import * as __dependency_5 from "./framework-CmmSlotUtils";
import * as __dependency_6 from "./framework-LoadUtils";
import * as __dependency_7 from "./g1005-GameConfigModel";
import * as __dependency_8 from "./g1005-GameData";
import * as __dependency_9 from "./g1005-GameEvent";
import * as __dependency_10 from "./g1005-types";
import * as __dependency_11 from "./framework-AutoPlayModel";
import * as __dependency_12 from "./framework-ReplayModel";
import * as __dependency_13 from "./main-UrlUtils";
import * as __dependency_14 from "./framework-SlotFrameworkEvent";
var __export_0;
export { __export_0 as FreeGameAlertView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FreeGameAlertView":
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
  void 0;
})(__dependency_4);
(function (t) {
  void 0;
})(__dependency_5);
(function (t) {
  void 0;
})(__dependency_6);
(function (t) {
  void 0, void 0, void 0;
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
(function (t) {
  void 0;
})(__dependency_11);
(function (t) {
  void 0;
})(__dependency_12);
(function (t) {
  void 0;
})(__dependency_13);
(function (t) {
  void 0;
})(__dependency_14);
var C, y, L, O, w, v, P, H, U, k, z, V, W, Y, K, j, x;
__dependency_1.cclegacy._RF.push({}, "712f8jQeR9Au6MJMUW95ZtA", "FreeGameAlertView", void 0);
var J,
  Q = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property;
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.START_FREE_GAME = 1] = "START_FREE_GAME", t[t.START_FREE_GAME_END = 2] = "START_FREE_GAME_END", t[t.FINISH_FREE_GAME = 3] = "FINISH_FREE_GAME", t[t.FINISH_FREE_GAME_END = 4] = "FINISH_FREE_GAME_END";
}(J || (J = {}));
__publish("FreeGameAlertView", (C = Q("FreeGameAlertView"), y = (0, __dependency_3.inject)("alert", __dependency_1.Node), L = (0, __dependency_3.inject)("alert/bbr", __dependency_1.Node), O = (0, __dependency_3.inject)("alert/effectBg", __dependency_1.sp.Skeleton), w = (0, __dependency_3.inject)("alert/fgFontSprite", __dependency_1.Sprite), v = (0, __dependency_3.inject)("alert/fgTimes", __dependency_1.Label), P = (0, __dependency_3.inject)("alert/startBtn", __dependency_1.Node), H = (0, __dependency_3.inject)("alert/finishBtn", __dependency_1.Node), C((z = (0, __dependency_0.applyDecoratedDescriptor)((k = function (t) {
  function e() {
    for (var e, i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "alert", z, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "bbr", V, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "effectBg", W, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "fgFontSprite", Y, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "fgTimes", K, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "startBtn", j, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "finishBtn", x, (0, __dependency_0.assertThisInitialized)(e)), e.finishFGCallback = null, e.freeGameAlertStatus = J.NONE, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var o = e.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + __dependency_13.default.getViewModeParam() + "/FGAlertView";
  }, o.init = function () {
    this.enabledKeyDown = !0, this.setStartCloseBtnLocalize();
  }, o.goToFreeGame = function () {
    var t = this,
      e = null;
    if (dispatch(__dependency_14.SlotFrameworkEvent.HIDE_SPIN_BAR), this.data.getData().newGameState && this.data.getData().newGameState.length && this.data.getData().newGameState.length > 0) {
      e = this.data.getData().spinId;
      dispatch(__dependency_9.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = __dependency_10.EGameType.FREE_GAME, dispatch(__dependency_9.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(__dependency_9.GameEvent.PLAY_BGM, {
            data: t.data.getData().gameState.isGoldenFg ? __dependency_7.EBGM.GOLDFREEGAME : __dependency_7.EBGM.FREEGAME
          }), __dependency_12.default.isReplay ? t.scheduleOnce(function () {
            dispatch(__dependency_9.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                test: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(__dependency_9.GameEvent.CREATE_SPIN_FLOW, {
              data: {
                spinId: e,
                next: !0,
                test: null
              }
            });
          }, 1);
        }
      });
    } else {
      e = this.data.getData().gameState.spinId;
      dispatch(__dependency_9.GameEvent.SHOW_TRANSITION_IN, {
        data: function () {
          t.data.currentGameType = __dependency_10.EGameType.FREE_GAME, dispatch(__dependency_9.GameEvent.CHANGE_GAME_STYLE, {
            data: !1
          }), dispatch(__dependency_9.GameEvent.PLAY_BGM, {
            data: t.data.getData().gameState.isGoldenFg ? __dependency_7.EBGM.GOLDFREEGAME : __dependency_7.EBGM.FREEGAME
          }), __dependency_12.default.isReplay ? t.scheduleOnce(function () {
            dispatch(__dependency_9.GameEvent.CREATE_REPLAY_SPIN_FLOW, {
              data: {
                spinId: e,
                test: null
              }
            });
          }, 1) : t.scheduleOnce(function () {
            dispatch(__dependency_9.GameEvent.CREATE_SPIN_FLOW, {
              data: {
                spinId: e,
                test: null
              }
            });
          }, 1);
        }
      });
    }
  }, o.goToMainGame = function () {
    var t = this;
    dispatch(__dependency_9.GameEvent.SHOW_TRANSITION_OUT, {
      data: function () {
        t.data.currentGameType = __dependency_10.EGameType.MAIN_GAME, dispatch(__dependency_9.GameEvent.CHANGE_GAME_STYLE, {
          data: !0
        }), dispatch(__dependency_9.GameEvent.PLAY_BGM, {
          data: __dependency_7.EBGM.MAINGAME
        }), dispatch(__dependency_14.SlotFrameworkEvent.SHOW_SPIN_BAR);
      }
    });
  }, o.startFreeGame = function () {
    this.startBtn.active = !1, this.alert.active = !1, this.goToFreeGame(), this.data.originTurbo = __dependency_7.default.isTurbo, __dependency_7.default.setIsTurbo(!1, !1), this.unschedule(this.startFreeGame), this.bbr.targetOff(this), this.close();
  }, o.finishFreeGame = function () {
    this.finishBtn.active = !1, this.alert.active = !1, __dependency_7.default.stopOnFg && (__dependency_11.default.active = !1), this.goToMainGame(), __dependency_7.default.setIsTurbo(this.data.originTurbo ? this.data.originTurbo : __dependency_7.default.isTurbo, !1), this.unschedule(this.finishFreeGame), this.bbr.targetOff(this), this.close();
  }, o.playBounceTween = function (t, e) {
    (0, __dependency_1.tween)(t).delay(.2).to(.1, {
      scale: new __dependency_1.Vec3(.9, .9, .9)
    }).to(.2, {
      scale: new __dependency_1.Vec3(.6, .6, .6)
    }, {
      onComplete: function () {
        e && e();
      }
    }).start();
  }, o.setStartCloseBtnLocalize = function () {
    var t = __dependency_7.default.getData().filePaths.localeSpriteFrame;
    this.startBtn.getComponent(__dependency_4.default).customNormalSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_01_normal"), this.startBtn.getComponent(__dependency_4.default).customPressedSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_01_pressed"), this.startBtn.getComponent(__dependency_4.default).customHoverSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_01_pressed"), this.startBtn.getComponent(__dependency_4.default).customDisabledSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_01_disabled"), this.finishBtn.getComponent(__dependency_4.default).customNormalSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_02_normal"), this.finishBtn.getComponent(__dependency_4.default).customPressedSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_02_pressed"), this.finishBtn.getComponent(__dependency_4.default).customHoverSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_02_pressed"), this.finishBtn.getComponent(__dependency_4.default).customDisabledSprite = __dependency_6.LoadUtils.getDirSp(this.bundle, t, "t_font_02_disabled");
  }, o.showIntroAlert = function () {
    var t = this,
      e = this.data.getData().gameState,
      i = __dependency_7.default.getData().autoCloseTime;
    dispatch(__dependency_9.GameEvent.MUSIC_VOLUME_MULTIPLE, {
      data: .5
    }), this.alert.active = !0, this.finishBtn.active = !1, this.fgTimes.string = e.freeGameCount.toString(), this.fgTimes.node.position.set(0, 225, 0), this.fgFontSprite.spriteFrame = e.isGoldenFg ? this.data.getLocaleSpriteFrame("t_font_03_1") : this.data.getLocaleSpriteFrame("t_font_03"), "portrait" == __dependency_13.default.getViewModeParam() && e.isGoldenFg && this.fgTimes.node.position.set(0, 240, 0), this.fgFontSprite.node.position.set(0, 22, 0), this.playBounceTween(this.fgFontSprite.node), this.effectBg.skeletonData = this.data.getGameAlertSpine("f_spins_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      dispatch(__dependency_9.GameEvent.MUSIC_VOLUME_MULTIPLE, {
        data: 2
      }), t.effectBg.setAnimation(0, "loop", !0), t.startBtn.active = !0, i && t.scheduleOnce(t.startFreeGame, i), t.bbr.once(__dependency_1.NodeEventType.TOUCH_END, t.startFreeGame, t), t.startBtn.once(__dependency_1.NodeEventType.TOUCH_END, t.startFreeGame, t), t.effectBg.setCompleteListener(null);
    }), this.schedule(function () {
      t.freeGameAlertStatus = J.START_FREE_GAME;
    }, .5), dispatch(__dependency_9.GameEvent.PLAY_BTM, {
      data: {
        url: e.isGoldenFg ? __dependency_7.EBTM.GOLDFREEGAME_IN : __dependency_7.EBTM.FREEGAME_IN
      }
    });
  }, o.showSummaryAlert = function (t) {
    var e = this,
      i = this.data.getData().gameState,
      a = i.totalWinnings,
      n = i.isGoldenFg,
      s = __dependency_7.default.getData().autoCloseTime;
    this.alert.active = !0, this.startBtn.active = !1, this.fgTimes.string = __dependency_5.CmmSlotUtils.formatNumber(a), this.fgTimes.node.position.set(0, 32, 0), App.globalAudio.pauseMusic(), this.fgFontSprite.spriteFrame = this.data.getLocaleSpriteFrame("t_font_04"), this.fgFontSprite.node.position.set(0, 148, 0), this.playBounceTween(this.fgFontSprite.node), this.effectBg.skeletonData = this.data.getGameAlertSpine("f_total_bg"), this.effectBg.setAnimation(0, "in", !1), this.effectBg.setCompleteListener(function () {
      e.effectBg.setAnimation(0, "loop", !0), e.finishBtn.active = !0, e.finishFGCallback = function () {
        e.finishFreeGame(), e.unschedule(e.finishFGCallback), t();
      }, s && e.scheduleOnce(e.finishFGCallback, s), e.bbr.once(__dependency_1.NodeEventType.TOUCH_END, e.finishFGCallback, e), e.finishBtn.once(__dependency_1.NodeEventType.TOUCH_END, e.finishFGCallback, e), e.effectBg.setCompleteListener(null);
    }), (0, __dependency_1.tween)(this.node).delay(2).call(function () {
      App.globalAudio.resumeMusic();
    }).start(), this.schedule(function () {
      e.freeGameAlertStatus = J.FINISH_FREE_GAME;
    }, .5), dispatch(__dependency_9.GameEvent.PLAY_BTM, {
      data: {
        url: n ? __dependency_7.EBTM.GOLDFREEGAME_OUT : __dependency_7.EBTM.FREEGAME_OUT
      }
    });
  }, o.onKeyDown = function (e) {
    if (t.prototype.onKeyDown.call(this, e), e.keyCode === __dependency_1.KeyCode.SPACE) switch (this.freeGameAlertStatus) {
      case J.START_FREE_GAME:
        this.startFreeGame(), this.freeGameAlertStatus = J.START_FREE_GAME_END;
        break;
      case J.FINISH_FREE_GAME:
        null != this.finishFGCallback && (this.finishFGCallback(), this.freeGameAlertStatus = J.FINISH_FREE_GAME_END);
    }
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_8.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "alert", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(k.prototype, "bbr", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), W = (0, __dependency_0.applyDecoratedDescriptor)(k.prototype, "effectBg", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = (0, __dependency_0.applyDecoratedDescriptor)(k.prototype, "fgFontSprite", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = (0, __dependency_0.applyDecoratedDescriptor)(k.prototype, "fgTimes", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(k.prototype, "startBtn", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), x = (0, __dependency_0.applyDecoratedDescriptor)(k.prototype, "finishBtn", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = k)) || U));
__dependency_1.cclegacy._RF.pop();
