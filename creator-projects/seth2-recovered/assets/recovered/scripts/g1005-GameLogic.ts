// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameLogic.ts.js
// SHA256: 47f4ad6484fc9a14ff5f492ca3a99e59e0278b8b695125d3732188e635d65f25
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./framework-ExitUtils";
import * as __dependency_5 from "./main-Resource";
import * as __dependency_6 from "./main-ResourceLoader";
import * as __dependency_7 from "./main-Logic";
import * as __dependency_8 from "./framework-AutoPlayModel";
import * as __dependency_9 from "./framework-SlotFrameworkData";
import * as __dependency_10 from "./framework-SlotFrameworkEvent";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./framework-ReadyBundleModel";
import * as __dependency_13 from "./g1005-ParseResponse";
import * as __dependency_14 from "./g1005-BigwinView";
import * as __dependency_15 from "./g1005-FreeGameAlertView";
import * as __dependency_16 from "./g1005-GameData";
import * as __dependency_17 from "./g1005-GameEvent";
import * as __dependency_18 from "./g1005-GameSender";
import * as __dependency_19 from "./g1005-GameView";
import * as __dependency_20 from "./framework-DefinitionModel";
import * as __dependency_21 from "./g1005-BuyFeatureView";
import * as __dependency_22 from "./g1005-FlowIDs";
import * as __dependency_23 from "./g1005-GameConfigModel";
import * as __dependency_24 from "./framework-ReplayModel";
import * as __dependency_25 from "./g1005-TreasuresView";
import * as __dependency_26 from "./framework-type2";
var __export_0;
export { __export_0 as GameLogic };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameLogic":
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
  void 0, void 0, void 0, void 0;
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
(function (e) {
  void 0;
})(__dependency_8);
(function (e) {
  void 0;
})(__dependency_9);
(function (e) {
  void 0;
})(__dependency_10);
(function (e) {
  void 0;
})(__dependency_11);
(function (e) {
  void 0;
})(__dependency_12);
(function (e) {
  void 0;
})(__dependency_13);
(function (e) {
  void 0;
})(__dependency_14);
(function (e) {
  void 0;
})(__dependency_15);
(function (e) {
  void 0, void 0;
})(__dependency_16);
(function (e) {
  void 0;
})(__dependency_17);
(function (e) {
  void 0;
})(__dependency_18);
(function (e) {
  void 0;
})(__dependency_19);
(function (e) {
  void 0;
})(__dependency_20);
(function (e) {
  void 0;
})(__dependency_21);
(function (e) {
  void 0;
})(__dependency_22);
(function (e) {
  void 0, void 0;
})(__dependency_23);
(function (e) {
  void 0;
})(__dependency_24);
(function (e) {
  void 0;
})(__dependency_25);
(function (e) {
  void 0;
})(__dependency_26);
__dependency_1.cclegacy._RF.push({}, "eab18k4U4VBmL9CvuJA0z/Q", "GameLogic", void 0);
__publish("GameLogic", function (e) {
  function r() {
    for (var n, t = arguments.length, a = new Array(t), i = 0; i < t; i++) a[i] = arguments[i];
    return (n = Reflect.construct(e, [this].concat(a).slice(1), new.target || r) || this).loader = new __dependency_6.default(), n.earlySpinDelayingEvent = null, n.earlySpinDelayingSetTimeout = null, n.earlyIntervalId = 1, n;
  }
  (0, __dependency_0.inheritsLoose)(r, e);
  var d = r.prototype;
  return d.onLoad = function (n) {
    e.prototype.onLoad.call(this, n), this._init();
  }, d.onDestroy = function () {
    this.loader.unLoadResources(), __dependency_16.default.ins.clear(), e.prototype.onDestroy.call(this);
  }, d.start = function () {
    App.senderManager.get(__dependency_18.GameSender).init();
  }, d.reset = function () {
    __dependency_1.Tween.stopAll(), App.flowManager.killAllFlow(), App.uiManager.closeExcept([]), dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_26.ESpinStatus.IDLE
    }), this.removeAllEvents();
  }, d._init = function () {
    this.loadResources();
  }, d.loadResources = function () {
    this.loader.getLoadResources = function () {
      return [];
    }, this.loader.onLoadComplete = function (e) {
      __dependency_5.Resource.LoaderError.SUCCESS;
    }, this.loader.loadResources();
  }, d.addEvents = function () {
    var e = this;
    this.on(__dependency_10.SlotFrameworkEvent.INIT_RESPONSE, function (e) {
      e.engine.gameState.length && __dependency_13.default.parseNewInit(e);
    }), this.on(__dependency_10.SlotFrameworkEvent.SPIN_RESPONSE, function (e) {
      dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: e.engine.spinId
        }
      }), dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: __dependency_11.default.amount
        }
      }), __dependency_16.default.ins.getData().parser.lockTimesSymbols && __dependency_16.default.ins.getData().parser.lockTimesSymbols.size > 0 && __dependency_16.default.ins.getData().parser.lockTimesSymbols.clear(), __dependency_13.default.parseNewSpin(e);
    }), this.on(__dependency_10.SlotFrameworkEvent.EARLY_SPIN_RESPONSE, function (e) {
      __dependency_13.default.parseEarlySpin(e);
    }), this.on(__dependency_10.SlotFrameworkEvent.EARLY_CLOSE_RESPONSE, function (e) {
      __dependency_13.default.tempEarlyClose(e);
    }), this.on(__dependency_10.SlotFrameworkEvent.CLOSE_RESPONSE, function (e) {
      __dependency_13.default.parseCloseSpin(e);
    }), this.on(__dependency_10.SlotFrameworkEvent.REPLAY_RESPONSE, function (e) {
      __dependency_13.default.parseReplay(e);
    }), this.on(__dependency_10.SlotFrameworkEvent.REPLAY_AGAIN, function (e) {
      __dependency_13.default.parseReplayAgain(e);
    }), this.on(__dependency_10.SlotFrameworkEvent.WRAPPER_SERVICE_CLOSE, function (e) {
      var n = {
          text: App.getLanguage("disconnect", [], __dependency_3.EBundles[__dependency_3.EBundles.wrapper]),
          confirmCb: function (e) {
            t();
          },
          bbrCb: function (e) {},
          needCloseAlert: !1,
          tag: __dependency_2.ViewZOrder.TopErrorAlert,
          isDisableBlockInput: __dependency_24.default.isReplay && __dependency_1.game.isPaused()
        },
        t = function () {
          __dependency_4.ExitUtils.exit();
        };
      App.gameAlert.show(n, __dependency_2.ViewZOrder.TopErrorAlert);
    }), this.on(__dependency_10.SlotFrameworkEvent.WARN_RESPONSE, function (e) {
      var n = {
          text: e.message,
          confirmCb: function (e) {
            t();
          },
          bbrCb: function (e) {},
          needCloseAlert: !1,
          tag: __dependency_2.ViewZOrder.TopErrorAlert
        },
        t = function () {
          __dependency_4.ExitUtils.exit();
        };
      App.gameAlert.show(n, __dependency_2.ViewZOrder.TopErrorAlert);
    }), this.on(__dependency_10.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      e.view.init();
    }), this.on(__dependency_17.GameEvent.PARSER_SPIN_COMPLETED, function () {
      dispatch(__dependency_17.GameEvent.CREATE_STOP_SPIN_FLOW);
    }), this.on(__dependency_17.GameEvent.START_QUICK_STOP, function () {
      __dependency_1.Tween.stopAllByTarget(e);
    }), this.on(__dependency_17.GameEvent.PARSER_CLOSE_SPIN_COMPLETED, function () {
      __dependency_16.default.ins.getIsFGFinish() || __dependency_16.default.ins.getIsSuperMainGameFinish() || dispatch(__dependency_17.GameEvent.SPIN_CLOSED_FLOW);
    }), this.on(__dependency_17.GameEvent.QUICK_STOP_TOTAL_WINNINGS, function (e) {
      dispatch(__dependency_10.SlotFrameworkEvent.QUICK_STOP_TOTAL_WINNINGS, {
        data: e.data
      });
    }), this.on(__dependency_17.GameEvent.SPIN_START, function () {}), this.on(__dependency_17.GameEvent.SPIN_CLOSED, function () {}), this.on(__dependency_10.SlotFrameworkEvent.SELECT_AUTO_SPIN_COUNT, function (e) {
      var n = e.data,
        t = __dependency_11.default.getData().player.settings.autoPlay.numberOfPlays[n];
      __dependency_8.default.active = !0, __dependency_8.default.spinsRemaining = t, __dependency_8.default.active && dispatch(__dependency_17.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          test: null
        }
      });
    }), this.on(__dependency_10.SlotFrameworkEvent.STOP_AUTO_SPIN, function () {
      if (__dependency_8.default.active = !1, __dependency_8.default.spinsRemaining = 0, App.flowManager.killOneFlow(__dependency_22.FlowIDs.EARLY_SPIN_FLOW), __dependency_16.default.ins.isEarlyCloseFlag = !1, __dependency_16.default.ins.isEarlyFlag = !1, __dependency_16.default.ins.isSendOutEarlyFlag) null == __dependency_16.default.ins.earlyData ? Log.w("已送出預跑但還未收到資料") : (Log.w("已送出預跑且收到資料"), clearInterval(e.earlyIntervalId), e.earlyIntervalId > -1 && (e.earlyIntervalId = -1, dispatch(__dependency_17.GameEvent.CREATE_SPIN_FLOW, {
        data: {
          spinId: null,
          test: null,
          earlySpin: !0
        }
      })));else {
        Log.w("尚未送出可直接取消預跑"), __dependency_16.default.ins.delayEarlyTween && (__dependency_16.default.ins.delayEarlyTween.stop(), __dependency_16.default.ins.delayEarlyTween.removeSelf());
        var n = !1;
        e.earlyIntervalId > -1 && (n = !0, clearInterval(e.earlyIntervalId), e.earlyIntervalId = -1), __dependency_16.default.ins.isOpenEarlyFlag && (__dependency_16.default.ins.isOpenEarlyFlag = !1, __dependency_16.default.ins.isSendClose || (Log.w("還未結算:::::::::::"), n && dispatch(__dependency_10.SlotFrameworkEvent.SEND_CLOSE_REQUEST, {
          data: __dependency_16.default.ins.getData().spinId
        })));
      }
    }), this.on(__dependency_17.GameEvent.EARLY_SPIN_DELAYING, function (n) {
      e.earlySpinDelayingEvent = n;
      __dependency_16.default.ins.earlySpinDelaying = !0;
      var t = __dependency_23.default.quickStopCount,
        a = __dependency_23.default.isTurbo;
      clearTimeout(e.earlySpinDelayingSetTimeout), 1 === t || a ? (clearTimeout(e.earlySpinDelayingSetTimeout), n.complete(), __dependency_16.default.ins.earlySpinDelaying = !1) : e.earlySpinDelayingSetTimeout = setTimeout(function () {
        n.complete(), __dependency_16.default.ins.earlySpinDelaying = !1;
      }, 1875);
    }), this.on(__dependency_17.GameEvent.SET_EARLY_SPIN_DELAYING_COMPLETED, function () {
      e.earlySpinDelayingEvent && e.earlySpinDelayingEvent.complete();
    }), this.on(__dependency_17.GameEvent.AUTO_SPIN_STATUS, function () {}), this.once(__dependency_10.SlotFrameworkEvent.SWIPE_UP, function () {
      __dependency_12.default.isComplete() && (App.gameAlert.isCurrentShow(__dependency_2.ViewZOrder.TopErrorAlert) || App.gameLoading.complete());
    }), this.on(__dependency_17.GameEvent.EARLY_DATA_PARSER_TO_SPIN_DATA, function () {
      var e = __dependency_16.default.ins.earlyData;
      Log.w("EARLY_DATA_PARSER_TO_SPIN_DATA::::", e);
      var n = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var t = e.platform.player.balance.updatedAt;
        __dependency_11.default.updateBalance(n, t);
      } else __dependency_11.default.amount = e.platform.player.balance.amount;
      __dependency_13.default.parseNewEarlySpin(e), dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
        data: {
          spinId: e.engine.spinId
        }
      }), dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: __dependency_11.default.amount
        }
      }), dispatch(__dependency_17.GameEvent.PARSER_SPIN_COMPLETED);
    }), this.on(__dependency_17.GameEvent.EARLY_CLOSE_DATA_PARSER_TO_DATA, function () {
      var e = __dependency_16.default.ins.earlyCloseData;
      __dependency_16.default.ins.isEarlyCloseFlag = !1;
      var n = e.platform.player.balance.amount;
      if (e.platform.player.balance.updatedAt) {
        var t = e.platform.player.balance.updatedAt;
        __dependency_11.default.updateBalance(n, t);
      } else __dependency_11.default.amount = n;
      dispatch(__dependency_10.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
        data: {
          balance: __dependency_11.default.amount
        }
      }), dispatch(__dependency_17.GameEvent.PARSER_CLOSE_SPIN_COMPLETED), __dependency_16.default.ins.earlyCloseData = null;
    }), this.on(__dependency_17.GameEvent.WAIT_EARLY_DATA_RETRY, function (e) {
      var n = 0;
      __dependency_16.default.ins.waitEarlyDataRetryInterval = setInterval(function () {
        var t = __dependency_16.default.ins,
          a = t.isEarlyFlag,
          i = t.earlyData;
        if (++n > 333) {
          clearInterval(__dependency_16.default.ins.waitEarlyDataRetryInterval);
          var r = {
              text: "early spin" + App.getLanguage("timeoutError", [], __dependency_3.EBundles[__dependency_3.EBundles.wrapper]),
              confirmCb: function (e) {
                o();
              },
              bbrCb: function (e) {},
              needCloseAlert: !1,
              code: "front",
              tag: __dependency_2.ViewZOrder.TopErrorAlert
            },
            o = function () {
              __dependency_4.ExitUtils.exit();
            };
          App.gameAlert.show(r, __dependency_2.ViewZOrder.TopErrorAlert);
        }
        a && i && (e.complete(), clearInterval(__dependency_16.default.ins.waitEarlyDataRetryInterval));
      }, 30);
    }), this.on(__dependency_17.GameEvent.WAIT_EARLY_SPIN_RESPONSE, function () {
      null == __dependency_16.default.ins.earlyData && __dependency_16.default.ins.isOpenEarlyFlag && (e.earlyIntervalId = setInterval(function () {
        __dependency_16.default.ins.earlyData && (clearInterval(e.earlyIntervalId), dispatch(__dependency_17.GameEvent.CREATE_SPIN_FLOW, {
          data: {
            spinId: null,
            test: null,
            earlySpin: !0
          }
        }), e.earlyIntervalId = -1);
      }, 100));
    }), this.on(__dependency_17.GameEvent.KILL_WAIT_EARLY_DATA_RETRY_INTERVAL, function (e) {
      clearInterval(__dependency_16.default.ins.waitEarlyDataRetryInterval);
    }), this.on(__dependency_17.GameEvent.KILL_WAIT_EARLY_CLOSE_DATA_RETRY_INTERVAL, function (e) {
      clearInterval(__dependency_16.default.ins.waitEarlyCloseDataRetryInterval);
    }), this.on(__dependency_17.GameEvent.WAIT_EARLY_CLOSE_DATA_RETRY, function (e) {
      var n = 0;
      __dependency_16.default.ins.waitEarlyCloseDataRetryInterval = setInterval(function () {
        var t = __dependency_16.default.ins,
          a = t.isEarlyCloseFlag,
          i = t.earlyCloseData;
        if (n++, Log.d("wait close", n), n > 333) {
          clearInterval(__dependency_16.default.ins.waitEarlyCloseDataRetryInterval);
          var r = {
              text: "early close" + App.getLanguage("timeoutError", [], __dependency_3.EBundles[__dependency_3.EBundles.wrapper]),
              confirmCb: function (e) {
                o();
              },
              bbrCb: function (e) {},
              needCloseAlert: !1,
              code: "front",
              tag: __dependency_2.ViewZOrder.TopErrorAlert
            },
            o = function () {
              __dependency_4.ExitUtils.exit();
            };
          App.gameAlert.show(r, __dependency_2.ViewZOrder.TopErrorAlert);
        }
        a && i && (e.complete(), clearInterval(__dependency_16.default.ins.waitEarlyCloseDataRetryInterval));
      }, 30);
    }), this.on(__dependency_17.GameEvent.SHOW_BIGWIN, function (n) {
      var i = n.data,
        r = __dependency_16.default.ins.getData().parser.bigwinReach.level,
        o = __dependency_20.default.getData(),
        l = o.smallPrizeDelay,
        c = o.bigPrizeDelay,
        p = i.isRoundWin ? 0 : r <= 3 ? l : c;
      App.globalAudio.isMusicOn = !1, (0, __dependency_1.tween)(e).delay(p).call((0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t() {
        return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return App.globalAudio.isMusicOn = !0, t.next = 3, App.uiManager.open({
                type: __dependency_14.BigwinView,
                bundle: e.bundle,
                zIndex: __dependency_2.ViewZOrder.UI,
                name: "BIG WIN"
              });
            case 3:
              t.sent.showBigwin(n.complete, n.data);
            case 5:
            case "end":
              return t.stop();
          }
        }, t);
      }))).start();
    }), this.on(__dependency_17.GameEvent.SHOW_FG_INTRO_ALERT, function (n) {
      App.uiManager.open({
        type: __dependency_15.FreeGameAlertView,
        bundle: e.bundle,
        zIndex: __dependency_2.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (e) {
        e.showIntroAlert();
      });
    }), this.on(__dependency_17.GameEvent.SHOW_FG_SUMMARY_ALERT, function (n) {
      App.uiManager.open({
        type: __dependency_15.FreeGameAlertView,
        bundle: e.bundle,
        zIndex: __dependency_2.ViewZOrder.UI,
        name: "免費遊戲彈窗"
      }).then(function (e) {
        e.showSummaryAlert(n.complete);
      });
    }), this.on(__dependency_17.GameEvent.OPEN_FEATURE_POPUP, (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function n(t) {
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.next = 2, App.uiManager.open({
              type: __dependency_21.BuyFeatureView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "購買免費遊戲"
            });
          case 2:
            n.sent.openPopup();
          case 4:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_17.GameEvent.SHOW_TREASURE_VIEW, (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function n(t) {
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return Log.e("show treasure win:::::::::::::::"), App.globalAudio.pauseMusic(), n.next = 4, App.uiManager.open({
              type: __dependency_25.TreasuresView,
              bundle: e.bundle,
              zIndex: __dependency_2.ViewZOrder.UI,
              name: "BIG WIN"
            });
          case 4:
            n.sent.showTreasureWin(t.complete);
          case 6:
          case "end":
            return n.stop();
        }
      }, n);
    }))), this.on(__dependency_17.GameEvent.PARSER_REPLAY_COMPLETED, function (n) {
      n ? (e.view.initReplay(), e.view.playBGM(__dependency_23.EBGM.MAINGAME)) : e.view.againReplayUpdateAmount(), dispatch(__dependency_17.GameEvent.CREATE_REPLAY_FLOW);
    }), this.on(__dependency_10.SlotFrameworkEvent.REPLAY_NEXT_SPIN, function () {
      __dependency_24.default.index++;
      var e = __dependency_24.default.index,
        n = __dependency_24.default.getData().betData.theResult[e];
      __dependency_16.default.ins.setReplayCurrentView(n), dispatch(__dependency_17.GameEvent.CREATE_REPLAY_STOP_SPIN_FLOW);
    }), this.on(__dependency_17.GameEvent.REPLAY_START_QUICK_STOP, function () {
      e.view.replayQuickStop();
    }), this.on(__dependency_17.GameEvent.PROCESS_REPLAY_IN_GAME, function (n) {
      e.view.reset(), (0, __dependency_1.tween)(e).delay(.5).call((0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function n() {
        return (0, __dependency_0.regeneratorRuntime)().wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.next = 2, App.uiManager.open({
                type: __dependency_19.default,
                bundle: e.bundle,
                args: __dependency_16.EInitName.INIT_REPLAY
              });
            case 2:
            case "end":
              return n.stop();
          }
        }, n);
      }))).start();
    }), this.on(__dependency_17.GameEvent.RESET_AND_OPEN_GAME_VIEW, function (n) {
      __dependency_24.default.reset();
      var i = n.data;
      e.view.reset(), (0, __dependency_1.tween)(e).delay(.5).call((0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function n() {
        return (0, __dependency_0.regeneratorRuntime)().wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.next = 2, App.uiManager.open({
                type: __dependency_19.default,
                bundle: e.bundle,
                args: i
              });
            case 2:
            case "end":
              return n.stop();
          }
        }, n);
      }))).start();
    }), this.on(__dependency_17.GameEvent.SHAKE_NODE, function (n) {
      e.view.shakeView();
    }), this.on(__dependency_17.GameEvent.PLAY_BGM, function (n) {
      e.view.playBGM(n.data);
    }), this.on(__dependency_17.GameEvent.PLAY_BTM, function (n) {
      var t = n.data,
        a = t.url,
        i = t.loop;
      e.view.playBTM(a, i);
    }), this.on(__dependency_17.GameEvent.STOP_BTM, function (n) {
      e.view.stopBTM(n.data);
    }), this.on(__dependency_17.GameEvent.MUSIC_VOLUME_MULTIPLE, function (n) {
      e.view.multipleMusicVolume(n.data);
    }), this.on(__dependency_10.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, function (n) {
      e.view.buyFeatureSpin(n.data);
    });
  }, (0, __dependency_0.createClass)(r, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_9.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), r;
}(__dependency_7.Logic));
__dependency_1.cclegacy._RF.pop();
