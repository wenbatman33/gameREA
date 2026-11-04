// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateReplayStopSpinFlowCmd.ts.js
// SHA256: 8961301496891d35be781d690d8a04ea5fc98d94f70999370600d94b77fbfd82
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./g1005-GameConfigModel";
import * as __dependency_6 from "./g1005-GameData";
import * as __dependency_7 from "./g1005-GameEvent";
import * as __dependency_8 from "./g1005-types";
import * as __dependency_9 from "./g1005-FlowIDs";
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
(function (t) {
  void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0;
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
  void 0, void 0;
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
__dependency_1.cclegacy._RF.push({}, "33bc1aT7X5DL4Rwi+S7PC6B", "CreateReplayStopSpinFlowCmd", void 0);
__publish("default", function (t) {
  function n() {
    return Reflect.construct(t, arguments, new.target || n) || this;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var o = n.prototype;
  return o.execute = function () {
    var t = this.createFlow();
    App.flowManager.registerFlow(t);
  }, o.createFlow = function () {
    var t,
      e = new App.flowManager.Flow(__dependency_9.FlowIDs.REPLAY_STOP_SPIN_FLOW),
      a = this.data.preData,
      n = this.data.getData().parser.newTimesSymbols,
      o = this.data.getData().gameState,
      S = o.currentView,
      _ = o.action,
      E = o.currentTimes;
    null == a.gameState.winSymbols && (a.gameState.winSymbols = []);
    var u = null == (t = a.gameState) ? void 0 : t.winSymbols.length;
    if (_ == __dependency_8.EActionType.FREE_GAME) {
      if (dispatch(__dependency_7.GameEvent.UPDATE_FG_REMAINING), dispatch(__dependency_7.GameEvent.UPDATE_FG_TOTAL_TIMES, {
        data: E
      }), this.data.getData().gameState.action == __dependency_8.EActionType.FREE_GAME && this.data.preData.gameState.winSymbols && 0 == this.data.preData.gameState.winSymbols.length) {
        if (this.data.preData.gameState.freeGameCount != this.data.getData().gameState.freeGameCount) for (var T = this.data.preData.gameState.timesSymbols.slice(), w = 0; w < T.length; w++) {
          var g = T[w];
          1 == g.lock && dispatch(__dependency_7.GameEvent.TIMES_LOCK_OUT, g.symbolPos);
        }
        this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0;
      }
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_4.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    if (_ == __dependency_8.EActionType.SUPER_GAME) {
      if (this.data.getData().gameState.action == __dependency_8.EActionType.SUPER_GAME && this.data.preData.gameState.winSymbols && 0 == this.data.preData.gameState.winSymbols.length) {
        if (this.data.preData.gameState.superMainGameCount != this.data.getData().gameState.superMainGameCount) for (var p = this.data.preData.gameState.timesSymbols.slice(), c = 0; c < p.length; c++) {
          var O = p[c];
          1 == O.lock && dispatch(__dependency_7.GameEvent.TIMES_LOCK_OUT, O.symbolPos);
        }
        this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0;
      }
      e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_4.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    return n.length && this.showCharacterFireFlow(e), 0 !== S && u ? this.newSymBolsInFlow(e) : (this.data.getData().parser.isHaveLockSymbol && dispatch(__dependency_7.GameEvent.SHOW_TIMES_STAGE), __dependency_5.default.canQuickStop = !0, this.allSymbolsInFlow(e)), this.ShowWinFlow(e), e;
  }, o.showCharacterFireFlow = function (t) {
    t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_CHARACTER_FIRE, null, {
      autoComplete: !0
    }));
  }, o.allSymbolsInFlow = function (t) {
    t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_OUT_ANIM), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_IN_ANIM));
  }, o.newSymBolsInFlow = function (t) {
    var e = this.data.getData().parser.newTimesSymbols.length ? .3 : 0;
    t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, null, {
      delay: e
    }));
  }, o.ShowWinFlow = function (t) {
    var e,
      a = this.data.getData().gameState,
      n = a.winSymbols,
      o = a.totalWinnings,
      _ = a.timesSymbols,
      d = a.timesUpgrade,
      E = void 0 === d ? [] : d,
      u = a.action,
      T = a.roundWinnings,
      w = a.splitList,
      g = a.femaleTotemLevel,
      p = void 0 === g ? 0 : g,
      c = a.maleTotemLevel,
      O = void 0 === c ? 0 : c,
      h = null == (e = this.data.preData.gameState) ? void 0 : e.winSymbols.length,
      R = "freeSpin" == u,
      I = u == __dependency_8.EActionType.SUPER_GAME,
      A = R ? T : o;
    0 == R && (A = I ? T : o);
    var C = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      N = h && !n.length && _.length,
      F = this.data.setBigWinReach(A),
      M = __dependency_5.default.getData().winAmountTime,
      L = .5;
    (p > 0 || O > 0) && (L = 0), n && n.length && (t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: C
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.UPDATE_WIN_AMOUNT, {
      value: A
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      tweenTime: M
    }, {
      autoComplete: !0
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_WIN), new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_FULL_COMBO), new __dependency_7.GameEvent(__dependency_7.GameEvent.REMOVE_SYMBOLS, null, {
      delay: L
    })), p > 0 && (t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_WOMEN_LOCK_ANIM, p)), this.data.getData().parser.lockTimesSymbols.size > 0 && t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_LOCK, {}))), null != w && w.length > 0 ? (t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_MEN_SPLIT_ANIM, w[0])), t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SPLIT_FIRE_BALL, {})), t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_A, {})), t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), E && E.length && t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), N && (F ? t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    })) : t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: o,
      needComplete: !0,
      tweenTime: M
    }, {
      autoComplete: !0
    }))), t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, (0, __dependency_0.createClass)(n, [{
    key: "data",
    get: function () {
      return __dependency_6.default.ins;
    }
  }]), n;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
