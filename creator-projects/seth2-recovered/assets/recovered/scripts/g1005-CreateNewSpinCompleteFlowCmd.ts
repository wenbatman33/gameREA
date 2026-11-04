// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateNewSpinCompleteFlowCmd.ts.js
// SHA256: fb1c9b4d2c44acbeb58f4778560857a5fd298e471433bd7b46595bd46f0d0c32
import { continueAfterLocalJackpot } from "../../local-backend/LocalJackpotContinuation";
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-StakeModel";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./g1005-GameConfigModel";
import * as __dependency_7 from "./g1005-GameData";
import * as __dependency_8 from "./g1005-GameSymbolID";
import * as __dependency_9 from "./g1005-GameEvent";
import * as __dependency_10 from "./g1005-types";
import * as __dependency_11 from "./g1005-FlowIDs";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0;
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
  void 0, void 0;
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
__dependency_1.cclegacy._RF.push({}, "697faiNcK1JOrV7PVrRi3Nn", "CreateNewSpinCompleteFlowCmd", void 0);
__publish("default", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || a) || this;
  }
  (0, __dependency_0.inheritsLoose)(a, e);
  var o = a.prototype;
  return o.execute = function () {
    this.createFlow();
  }, o.createFlow = function () {
    var e = this.data.currSpinData,
      t = e.currentView,
      n = e.totalViews,
      a = e.startFreeGame,
      l = e.action,
      o = t + 1 === n,
      i = o && l == __dependency_10.EActionType.FREE_GAME,
      u = o && l == __dependency_10.EActionType.SUPER_GAME;
    const __continueOriginal = () => {
      a && l !== __dependency_10.EActionType.SUPER_GAME ? this.showFreeGameIntroFlow() : o ? i ? this.freeGameFinishFlow() : u ? this.superMainGameFinishFlow() : this.closeSpinFlow() : this.nextSpinFlow();
    };
    if (continueAfterLocalJackpot(e, o && !a && !i && !u, dispatch, __dependency_9.GameEvent, __continueOriginal)) return;
    __continueOriginal();
  }, o.showFreeGameIntroFlow = function () {
    var e = new App.flowManager.Flow(__dependency_11.FlowIDs.SHOW_FG_INTRO_FLOW),
      t = this.data.currSpinData.totalWinnings,
      n = this.data.setNewBigWinReach(t),
      a = __dependency_6.default.getData().winAmountTime;
    if (console.error("bigreach::::::::" + n), console.error("totalWinnings::::::::" + t), n) {
      var o = {
        winnings: t,
        isRoundWin: !0
      };
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .3
      }), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_BIGWIN, o, {
        delay: 1
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.HIDE_DARK, null, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_FG_INTRO_ALERT, null, {
        autoComplete: !0,
        delay: 1
      }));
    } else e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_BTM, {
      url: __dependency_6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: !0,
      tweenTime: a
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.HIDE_DARK, null, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.nextSpinFlow = function () {
    var e = new App.flowManager.Flow(__dependency_11.FlowIDs.NEXT_SPIN_FLOW),
      t = this.data.getData().parser,
      n = t.newTimesSymbols,
      a = t.view1D,
      o = this.data.currSpinData,
      w = o.spinId,
      s = o.winSymbols,
      r = o.roundWinnings,
      A = o.action,
      O = __dependency_6.default.getData(),
      p = O.hasTimesSymbolsDelay,
      C = O.nextSpinDelay,
      I = n.length ? p : C;
    if (null == s && (s = []), s.length) {
      __dependency_4.default.ratioIndex, __dependency_4.default.ratioValue, __dependency_4.default.stakeIndex, __dependency_4.default.stakeValue;
      e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.CREATE_SPIN_FLOW, {
        spinId: w,
        test: null,
        next: !0
      }, {
        autoComplete: !0,
        delay: I
      }));
    } else {
      if (A == __dependency_10.EActionType.FREE_GAME || A == __dependency_10.EActionType.SUPER_GAME) {
        if (this.data.setNewBigWinReach(r)) {
          var d = {
            winnings: r,
            isRoundWin: !0
          };
          e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_5.SlotFrameworkEvent(__dependency_9.GameEvent.SHOW_BIGWIN, d, {
            delay: .5
          }));
        }
        (/* Local backend already applies golden/ordinary scatter qualification and free-round caps. */o.localRules === true ? Number.isInteger(o.localExtraFreeRounds) && o.localExtraFreeRounds > 0 : a.filter(function (e) {
          return e == __dependency_8.EBackendSymbolID.SCATTER || e == __dependency_8.EBackendSymbolID.GOLD_SCATTER;
        }).length >= 3) && e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_SCATTER_WIN, null, {
          delay: .8
        }), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.INCREASE_FG_REMAINING), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.HIDE_DARK, null, {
          autoComplete: !0
        }));
      }
      e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.CREATE_SPIN_FLOW, {
        spinId: w,
        test: null,
        next: !0
      }, {
        autoComplete: !0,
        delay: I
      }));
    }
    App.flowManager.registerFlow(e);
  }, o.freeGameFinishFlow = function () {
    var e = new App.flowManager.Flow(__dependency_11.FlowIDs.SHOW_FG_SUMMARY_FLOW),
      t = this.data.currSpinData,
      n = t.totalWinnings,
      a = t.roundWinnings,
      o = this.data.getData().spinId,
      i = this.data.setNewBigWinReach(a),
      s = this.data.setNewBigWinReach(n),
      E = __dependency_6.default.getData().winAmountTime;
    if (i) {
      var S = {
        winnings: a,
        isRoundWin: !0
      };
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 2.5
      }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: E
      }, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_BIGWIN, S));
    }
    if (s) {
      var r = {
        winnings: n,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
        delay: 1
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.TIMES_LOCK_ALLOUT, null, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 1.8
      }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: E
      }, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_BIGWIN, r), new __dependency_9.GameEvent(__dependency_9.GameEvent.SPIN_CLOSED_FLOW, null, {
        autoComplete: !0
      }));
    } else e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
      delay: 1
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: E
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0,
      delay: 1.8
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_BTM, {
      url: __dependency_6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: !0,
      tweenTime: E
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.superMainGameFinishFlow = function () {
    var e = new App.flowManager.Flow(__dependency_11.FlowIDs.SHOW_SUPER_MG_SUMMARY_FLOW),
      t = this.data.currSpinData,
      n = t.totalWinnings,
      a = t.roundWinnings,
      o = this.data.getData().spinId,
      i = this.data.setNewBigWinReach(a),
      s = this.data.setNewBigWinReach(n),
      E = __dependency_6.default.getData().winAmountTime;
    if (i) {
      var S = {
        winnings: a,
        isRoundWin: !0
      };
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 2.5
      }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: E
      }, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_BIGWIN, S));
    }
    if (s) {
      var r = {
        winnings: n,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.TIMES_LOCK_ALLOUT, null, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: .3
      }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: E
      }, {
        autoComplete: !0
      }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_BIGWIN, r), new __dependency_9.GameEvent(__dependency_9.GameEvent.SPIN_CLOSED_FLOW, null, {
        autoComplete: !0
      }));
    } else n > 0 ? e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: E
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: n
    }, {
      autoComplete: !0,
      delay: .3
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_BTM, {
      url: __dependency_6.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n,
      needComplete: !0,
      tweenTime: E
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    })) : e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.SEND_CLOSE_REQUEST, o, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: n
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.closeSpinFlow = function () {
    dispatch(__dependency_9.GameEvent.CREATE_CLOSE_SPIN_FLOW);
  }, o.resetEarlyData = function () {
    this.data.isEarlyFlag = !1, this.data.earlyData = null, this.data.isEarlyCloseFlag = !1, this.data.earlyCloseData = null;
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return __dependency_7.default.ins;
    }
  }]), a;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
