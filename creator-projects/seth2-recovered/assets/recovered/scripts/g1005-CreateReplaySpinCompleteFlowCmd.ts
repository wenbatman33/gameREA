// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateReplaySpinCompleteFlowCmd.ts.js
// SHA256: 0c06115c29faa47df7e7e101401d7c35ba0e28954d4e464cd31de71d45872142
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./g1005-GameConfigModel";
import * as __dependency_6 from "./g1005-GameData";
import * as __dependency_7 from "./g1005-GameSymbolID";
import * as __dependency_8 from "./g1005-GameEvent";
import * as __dependency_9 from "./g1005-types";
import * as __dependency_10 from "./g1005-FlowIDs";
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
  void 0, void 0;
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
__dependency_1.cclegacy._RF.push({}, "57330YYsfRILrJ0/s8Fp42d", "CreateReplaySpinCompleteFlowCmd", void 0);
__publish("default", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || a) || this;
  }
  (0, __dependency_0.inheritsLoose)(a, e);
  var o = a.prototype;
  return o.execute = function () {
    this.createFlow();
  }, o.createFlow = function () {
    var e = this.data.getData().gameState,
      n = e.currentView,
      t = e.totalViews,
      a = e.startFreeGame,
      l = e.action,
      o = n + 1 === t,
      i = o && l == __dependency_9.EActionType.FREE_GAME,
      _ = o && l == __dependency_9.EActionType.SUPER_GAME;
    a && l !== __dependency_9.EActionType.SUPER_GAME ? this.showFreeGameIntroFlow() : o ? i ? this.freeGameFinishFlow() : _ ? this.superGameFinishFlow() : this.closeSpinFlow() : this.nextSpinFlow();
  }, o.showFreeGameIntroFlow = function () {
    var e = new App.flowManager.Flow(__dependency_10.FlowIDs.REPLAY_SHOW_FG_INTRO_FLOW),
      n = this.data.getData().gameState,
      t = n.totalWinnings,
      a = n.isGoldenFg,
      o = this.data.setBigWinReach(t),
      T = __dependency_5.default.getData().winAmountTime;
    if (o) {
      var w = {
        winnings: t,
        isRoundWin: !0
      };
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_SCATTER_WIN, null, {
        delay: .3
      }), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_BIGWIN, w, {
        delay: 1
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.HIDE_DARK, null, {
        autoComplete: !0
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_FG_INTRO_ALERT, null, {
        autoComplete: !0,
        delay: 1
      }));
    } else a ? e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: !0,
      tweenTime: T
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.HIDE_DARK, null, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0
    })) : e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_SCATTER_WIN, null, {
      delay: .3
    }), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: !0,
      tweenTime: T
    }, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.HIDE_DARK, null, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_FG_INTRO_ALERT, null, {
      autoComplete: !0
    }));
    App.flowManager.registerFlow(e);
  }, o.nextSpinFlow = function () {
    var e = new App.flowManager.Flow(__dependency_10.FlowIDs.REPLAY_NEXT_SPIN_FLOW),
      n = this.data.getData().parser,
      t = n.newTimesSymbols,
      a = n.view1D,
      o = this.data.getData().gameState,
      u = o.winSymbols,
      T = o.roundWinnings,
      N = o.action,
      R = (o.currentView, __dependency_5.default.getData()),
      O = R.hasTimesSymbolsDelay,
      S = R.nextSpinDelay,
      I = t.length ? O : S;
    if (null == u && (u = []), u.length) e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.REPLAY_NEXT_SPIN));else {
      if (N == __dependency_9.EActionType.FREE_GAME || N == __dependency_9.EActionType.SUPER_GAME) {
        if (this.data.setBigWinReach(T)) {
          var d = {
            winnings: T,
            isRoundWin: !0
          };
          e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_4.SlotFrameworkEvent(__dependency_8.GameEvent.SHOW_BIGWIN, d, {
            delay: .5
          }));
        }
        a.filter(function (e) {
          return e == __dependency_7.EBackendSymbolID.SCATTER || e == __dependency_7.EBackendSymbolID.GOLD_SCATTER;
        }).length >= 3 && e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_SCATTER_WIN, null, {
          delay: .8
        }), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.INCREASE_FG_REMAINING), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.HIDE_DARK, null, {
          autoComplete: !0
        }));
      }
      e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.CREATE_REPLAY_SPIN_FLOW, null, {
        autoComplete: !0,
        delay: I
      }));
    }
    App.flowManager.registerFlow(e);
  }, o.freeGameFinishFlow = function () {
    var e = new App.flowManager.Flow(__dependency_10.FlowIDs.REPLAY_SHOW_FG_SUMMARY_FLOW),
      n = this.data.getData().gameState,
      t = n.totalWinnings,
      a = n.roundWinnings,
      o = this.data.setBigWinReach(a),
      T = this.data.setBigWinReach(t),
      w = __dependency_5.default.getData().winAmountTime;
    if (o) {
      var A = {
        winnings: a,
        isRoundWin: !0
      };
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 2.5
      }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: w
      }, {
        autoComplete: !0
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_BIGWIN, A));
    }
    if (T) {
      var N = {
        winnings: t,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
        delay: 1
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.TIMES_LOCK_ALLOUT, null, {
        autoComplete: !0
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 1.8
      }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: w
      }, {
        autoComplete: !0
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_BIGWIN, N), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .3
      }));
    } else e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_FG_SUMMARY_ALERT, null, {
      delay: 1
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: w
    }, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0,
      delay: 1.8
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: !0,
      tweenTime: w
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .3
    }));
    App.flowManager.registerFlow(e);
  }, o.superGameFinishFlow = function () {
    var e = new App.flowManager.Flow(__dependency_10.FlowIDs.REPLAY_SHOW_SUPER_MG_SUMMARY_FLOW),
      n = this.data.getData().gameState,
      t = n.totalWinnings,
      a = n.roundWinnings,
      o = this.data.setBigWinReach(a),
      T = this.data.setBigWinReach(t),
      w = __dependency_5.default.getData().winAmountTime;
    if (o) {
      var A = {
        winnings: a,
        isRoundWin: !0
      };
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: 2.5
      }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: w
      }, {
        autoComplete: !0
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_BIGWIN, A));
    }
    if (T) {
      var N = {
        winnings: t,
        isRoundWin: !1,
        isFgOut: !0
      };
      e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.TIMES_LOCK_ALLOUT, null, {
        autoComplete: !0
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0,
        delay: .3
      }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
        value: 0,
        tweenTime: w
      }, {
        autoComplete: !0
      }), new __dependency_8.GameEvent(__dependency_8.GameEvent.SHOW_BIGWIN, N), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .3
      }));
    } else t > 0 ? e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: w
    }, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: t
    }, {
      autoComplete: !0,
      delay: .3
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: t,
      needComplete: t > 0,
      tweenTime: w
    }, {
      autoComplete: !(t > 0)
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .3
    })) : e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_8.GameEvent(__dependency_8.GameEvent.TIMES_LOCK_ALLOUT, null, {
      autoComplete: !0
    }), new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: w
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .3
    }));
    App.flowManager.registerFlow(e);
  }, o.closeSpinFlow = function () {
    dispatch(__dependency_8.GameEvent.CREATE_REPLAY_CLOSE_SPIN_FLOW);
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return __dependency_6.default.ins;
    }
  }]), a;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
