// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateReplayFlow.ts.js
// SHA256: 14ab3254f39c26780f2efdf9a4d2dca3d5a155f0aae0892da4c4bc146da86568
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
__dependency_1.cclegacy._RF.push({}, "9805dLZ1RFE74QEx9PF0q30", "CreateReplayFlow", void 0);
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
    var e = new App.flowManager.Flow(__dependency_11.FlowIDs.REPLAY_RESUME_FLOW);
    return dispatch(__dependency_5.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_6.ESpinStatus.SPINING
    }), dispatch(__dependency_9.GameEvent.UPDATE_GAME_TYPE, {
      data: this.data.currentGameType
    }), this.ShowWinFlow(e), e;
  }, l.ShowWinFlow = function (e) {
    var t,
      n = this.data.getData().gameState,
      a = n.winSymbols,
      l = n.totalWinnings,
      i = n.timesSymbols,
      s = n.timesUpgrade,
      _ = void 0 === s ? [] : s,
      T = n.action,
      w = n.roundWinnings,
      c = n.femaleTotemLevel,
      A = void 0 === c ? 0 : c,
      p = n.maleTotemLevel,
      m = void 0 === p ? 0 : p,
      O = null == (t = this.data.preData.gameState) ? void 0 : t.winSymbols.length,
      R = T == __dependency_10.EActionType.FREE_GAME,
      F = T == __dependency_10.EActionType.SUPER_GAME;
    dispatch(__dependency_9.GameEvent.CHANGE_GAME_STYLE, {
      data: !R
    });
    var I = R ? w : l;
    0 == R && (I = F ? w : l);
    var g = this.data.getData().parser.newTimesSymbols.length ? .8 : .3,
      f = O && !a.length && i.length,
      N = this.data.setBigWinReach(I),
      C = __dependency_7.default.getData().winAmountTime,
      M = .5;
    (A > 0 || m > 0) && (M = 0), e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_9.GameEvent("REPLAY_DELAY", null, {
      delay: .5,
      autoComplete: !0
    })), a && a.length && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_WIN_CASH, null, {
      autoComplete: !0,
      delay: g
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_BTM, {
      url: __dependency_7.EBTM.COUNTING
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.UPDATE_WIN_AMOUNT, {
      value: I
    }, {
      autoComplete: !0
    }), new __dependency_5.SlotFrameworkEvent(__dependency_5.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: l,
      tweenTime: C
    }, {
      autoComplete: !0
    }), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_SYMBOLS_WIN), new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_FULL_COMBO), new __dependency_9.GameEvent(__dependency_9.GameEvent.REMOVE_SYMBOLS, null, {
      delay: M
    })), A > 0 && (e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_WOMEN_LOCK_ANIM, A)), this.data.getData().parser.lockTimesSymbols.size > 0 && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_LOCK, {}))), e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM)), _ && _.length && e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, null, {
      autoComplete: !0
    }))), f && (N ? e.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_9.GameEvent(__dependency_9.GameEvent.SHOW_TIMES_MOVING, null, {
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
      tweenTime: C
    }))), e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_9.GameEvent(__dependency_9.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, null, {
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
