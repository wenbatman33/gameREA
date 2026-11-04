// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateNewStopSpinFlowCmd.ts.js
// SHA256: 0b37c8f25a32853f05ef7729fd4a1cec83fe236506eb743941003b81c39ee5f3
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
__dependency_1.cclegacy._RF.push({}, "4a9c9MYrNlMJ5WLUGil7VwC", "CreateNewStopSpinFlowCmd", void 0);
__publish("default", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || a) || this;
  }
  (0, __dependency_0.inheritsLoose)(a, e);
  var o = a.prototype;
  return o.execute = function () {
    var e = this.createFlow();
    App.flowManager.registerFlow(e);
  }, o.createFlow = function () {
    var e = new App.flowManager.Flow(__dependency_9.FlowIDs.STOP_SPIN_FLOW),
      t = this.data.preSpinData,
      n = this.data.getData().parser.newTimesSymbols,
      a = this.data.currSpinData,
      o = a.currentView,
      i = a.action,
      s = a.currentTimes;
    null == t.winSymbols && (t.winSymbols = []);
    var _ = t.winSymbols.length;
    return this.data.isOpenEarlyFlag && this.createEarlySpinFlow(), "freeSpin" == i && (dispatch(__dependency_7.GameEvent.UPDATE_FG_REMAINING), dispatch(__dependency_7.GameEvent.UPDATE_FG_TOTAL_TIMES, {
      data: s
    })), n.length && this.showCharacterFireFlow(e), 0 !== o && _ ? this.newSymBolsInFlow(e) : (this.data.getData().parser.isHaveLockSymbol && dispatch(__dependency_7.GameEvent.SHOW_TIMES_STAGE), o > 0 ? (__dependency_5.default.canQuickStop = !0, e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_OUT_ANIM))) : __dependency_5.default.canQuickStop = !0, this.allSymbolsInFlow(e)), this.ShowWinFlow(e), e;
  }, o.showCharacterFireFlow = function (e) {
    e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_CHARACTER_FIRE, null, {
      autoComplete: !0
    }));
  }, o.allSymbolsInFlow = function (e) {
    e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_IN_ANIM));
  }, o.newSymBolsInFlow = function (e) {
    var t = this.data.getData().parser.newTimesSymbols.length ? .3 : 0;
    e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, null, {
      delay: t
    }));
  }, o.ShowWinFlow = function (e) {
    var t = this.data.getData().gameState,
      n = t.winSymbols,
      a = t.totalWinnings,
      o = t.timesSymbols,
      _ = t.timesUpgrade,
      d = void 0 === _ ? [] : _,
      u = t.action,
      w = t.roundWinnings,
      T = t.splitList,
      I = t.maleTotemLevel,
      O = void 0 === I ? 0 : I,
      c = t.femaleTotemLevel,
      p = void 0 === c ? 0 : c,
      m = this.data.preSpinData,
      A = null == m ? void 0 : m.winSymbols.length,
      F = u == __dependency_8.EActionType.FREE_GAME,
      R = u == __dependency_8.EActionType.SUPER_GAME,
      h = F ? w : a;
    0 == F && (h = R ? w : a);
    var N = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      M = A && !n.length && o.length,
      g = this.data.setNewBigWinReach(h),
      C = __dependency_5.default.getData().winAmountTime,
      L = .5;
    (p > 0 || O > 0) && (L = 0), n && n.length && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: N
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.UPDATE_WIN_AMOUNT, {
      value: h
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: C
    }, {
      autoComplete: !0
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_WIN), new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_FULL_COMBO), new __dependency_7.GameEvent(__dependency_7.GameEvent.REMOVE_SYMBOLS, null, {
      delay: L
    })), p > 0 && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_WOMEN_LOCK_ANIM, p)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_LOCK, {}))), null != T && T.length > 0 ? (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_MEN_SPLIT_ANIM, T[0])), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SPLIT_FIRE_BALL, {})), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_A, {})), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), d && d.length && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), M && (g ? e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    })) : e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      needComplete: !0,
      tweenTime: C
    }))), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.CREATE_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, o.createEarlySpinFlow = function () {
    var e = {
      data: {
        spinId: this.data.getData().gameState.spinId,
        test: null
      }
    };
    dispatch(__dependency_7.GameEvent.CREATE_EARLY_SPIN_FLOW, {
      data: e
    });
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return __dependency_6.default.ins;
    }
  }]), a;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
