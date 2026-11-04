// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateNewResumeFlowCmd.ts.js
// SHA256: f1375838bd42709940b30b7436bb84a920d789f847175b2d7024c0a3e34bbae5
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-SlotFrameworkData";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-type2";
import * as __dependency_7 from "./g1005-GameConfigModel";
import * as __dependency_8 from "./g1005-GameData";
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
  void 0;
})(__dependency_6);
(function (e) {
  void 0, void 0;
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
__dependency_1.cclegacy._RF.push({}, "9ce3e+jBxZD6amGmhDzG0jA", "CreateNewResumeFlowCmd", void 0);
__publish("default", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || a) || this;
  }
  (0, __dependency_0.inheritsLoose)(a, e);
  var l = a.prototype;
  return l.execute = function () {
    var e = this.createFlow();
    App.flowManager.registerFlow(e);
  }, l.createFlow = function () {
    var e = new App.flowManager.Flow(__dependency_11.FlowIDs.RESUME_FLOW);
    return dispatch(__dependency_5.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: this.data.getData().spinId
      }
    }), dispatch(__dependency_5.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_6.ESpinStatus.SPINING
    }), dispatch(__dependency_9.GameEvent.UPDATE_GAME_TYPE, {
      data: this.data.currentGameType
    }), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t = this.data.getData().gameState,
      n = t.splitList,
      a = t.winSymbols,
      l = t.totalWinnings,
      i = t.timesSymbols,
      _ = t.timesUpgrade,
      S = void 0 === _ ? [] : _,
      T = t.action,
      w = t.roundWinnings,
      I = t.femaleTotemLevel,
      c = void 0 === I ? 0 : I,
      A = t.maleTotemLevel,
      m = void 0 === A ? 0 : A,
      O = this.data.preSpinData,
      p = null == O ? void 0 : O.winSymbols.length,
      R = T == __dependency_10.EActionType.FREE_GAME,
      F = T == __dependency_10.EActionType.SUPER_GAME,
      P = R ? w : l;
    0 == R && (P = F ? w : l);
    var g = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      M = p && !a.length && i.length,
      N = this.data.setNewBigWinReach(P),
      f = __dependency_7.default.getData().winAmountTime,
      U = .5;
    (c > 0 || m > 0) && (U = 0), a && a.length && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: g
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: P
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: l,
      tweenTime: f
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_BTM, {
      url: __dependency_7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_SYMBOLS_WIN), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_FULL_COMBO), new __dependency_9.GameEvent(__dependency_9.GameEvent.REMOVE_SYMBOLS, null, {
      delay: U
    })), c > 0 && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_WOMEN_LOCK_ANIM, c)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_LOCK, {}))), null != n && n.length > 0 ? (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_MEN_SPLIT_ANIM, n[0])), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_SPLIT_FIRE_BALL, {})), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_A, {})), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SPLIT_HIDE_DARK, null, {
      autoComplete: !0
    }))) : console.log("splitSymbols 未定义或为空"), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), S && S.length && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), M && (N ? e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    })) : e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_MOVING, null, {
      delay: .8
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_BTM, {
      url: __dependency_7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: l,
      needComplete: !0,
      tweenTime: f
    }))), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.CREATE_SPIN_COMPLETE_FLOW, null, {
      autoComplete: !0
    }));
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return __dependency_8.default.ins;
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_4.default);
    }
  }]), a;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
