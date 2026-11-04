// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateNewQuickStopFlowCmd.ts.js
// SHA256: c0bbce92944d817e1f201f5b873553ed2e9c6b3ff5142167c5be8f3689863b91
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
__dependency_1.cclegacy._RF.push({}, "e929cab5CJA3bK+5qj8Mh55", "CreateNewQuickStopFlowCmd", void 0);
__publish("default", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || a) || this;
  }
  (0, __dependency_0.inheritsLoose)(a, e);
  var l = a.prototype;
  return l.execute = function () {
    if (__dependency_5.default.quickStopCount++, __dependency_5.default.canQuickStop && !__dependency_5.default.isTurbo) {
      __dependency_5.default.quickStopCount++;
      var e = this.createFlow();
      App.flowManager.killFlow(__dependency_9.FlowIDs.STOP_SPIN_FLOW), App.flowManager.registerFlow(e), __dependency_5.default.canQuickStop = !1, __dependency_5.default.canQuickStopEarlySpin = !1;
    }
  }, l.createFlow = function () {
    var e = new App.flowManager.Flow(__dependency_9.FlowIDs.QUICK_STOP_FLOW),
      t = this.data.getData().parser.newTimesSymbols;
    return e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.START_QUICK_STOP)), t.length && e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.GameEvent(__dependency_7.GameEvent.SPEED_CHARACTER_FIRE_UP, null, {
      autoComplete: !0
    })), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_QUICK_IN_ANIM)), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t = this.data.getData().gameState,
      n = t.winSymbols,
      a = t.totalWinnings,
      l = t.timesSymbols,
      u = t.timesUpgrade,
      d = void 0 === u ? [] : u,
      T = t.action,
      r = t.roundWinnings,
      w = t.splitList,
      O = t.femaleTotemLevel,
      I = void 0 === O ? 0 : O,
      c = t.maleTotemLevel,
      R = void 0 === c ? 0 : c,
      A = this.data.preSpinData,
      p = null == A ? void 0 : A.winSymbols.length,
      m = T == __dependency_8.EActionType.FREE_GAME,
      F = T == __dependency_8.EActionType.SUPER_GAME,
      C = m ? r : a;
    0 == m && (C = F ? r : a);
    var N = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      P = p && !n.length && l.length,
      g = this.data.setNewBigWinReach(C),
      M = __dependency_5.default.getData().winAmountTime,
      U = .5;
    (I > 0 || R > 0) && (U = 0), n && n.length && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: N
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.UPDATE_WIN_AMOUNT, {
      value: C
    }, {
      autoComplete: !0
    }), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: a,
      tweenTime: M
    }, {
      autoComplete: !0
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_BTM, {
      url: __dependency_5.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SYMBOLS_WIN), new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_FULL_COMBO), new __dependency_7.GameEvent(__dependency_7.GameEvent.REMOVE_SYMBOLS, null, {
      delay: U
    })), I > 0 && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_WOMEN_LOCK_ANIM, I)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_LOCK, {}))), null != w && w.length > 0 ? (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_MEN_SPLIT_ANIM, w[0])), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_SPLIT_FIRE_BALL, {})), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_A, {})), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), d && d.length && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), P && (g ? e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.SHOW_TIMES_MOVING, null, {
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
      tweenTime: M
    }))), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_7.GameEvent(__dependency_7.GameEvent.CREATE_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return __dependency_6.default.ins;
    }
  }]), a;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
