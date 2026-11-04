// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateNewSpinFlowCmd.ts.js
// SHA256: 07c98ec9463089d867020d0584f542148b734016c3b8b1ffd32ac78fdb9fb0a3
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./framework-ObjectUtils";
import * as __dependency_4 from "./main-Flow";
import * as __dependency_5 from "./main-SingletonExtends";
import * as __dependency_6 from "./framework-AutoPlayModel";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-StakeModel";
import * as __dependency_9 from "./framework-SlotFrameworkEvent";
import * as __dependency_10 from "./framework-DefinitionModel";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./framework-SettingsModel";
import * as __dependency_13 from "./framework-type2";
import * as __dependency_14 from "./g1005-GameConfigModel";
import * as __dependency_15 from "./g1005-GameData";
import * as __dependency_16 from "./g1005-GameEvent";
import * as __dependency_17 from "./g1005-types";
import * as __dependency_18 from "./g1005-FlowIDs";
import * as __dependency_19 from "./framework-MathUtil";
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
  void 0;
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
(function (t) {
  void 0;
})(__dependency_15);
(function (t) {
  void 0;
})(__dependency_16);
(function (t) {
  void 0, void 0;
})(__dependency_17);
(function (t) {
  void 0;
})(__dependency_18);
(function (t) {
  void 0;
})(__dependency_19);
__dependency_1.cclegacy._RF.push({}, "1310bvF0/5ICKOvJZ6tki4I", "CreateNewSpinFlowCmd", void 0);
__publish("default", function (t) {
  function n() {
    return Reflect.construct(t, arguments, new.target || n) || this;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var l = n.prototype;
  return l.execute = function (t) {
    dispatch(__dependency_16.GameEvent.SPIN_START), this.data.isSendOutEarlyFlag = !1, this.data.isSendClose = !1;
    var a = this.createSpinFlow(t);
    App.flowManager.registerFlow(a);
  }, l.createSpinFlow = function (t) {
    var a = new App.flowManager.Flow(__dependency_18.FlowIDs.SPIN_FLOW);
    return App.uiManager.IsOnlyGameViewOpen("GameView") ? (dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_13.ESpinStatus.SPINING
    }), t.data.next ? this.nextSpinFlow(a, t) : this.firstSpinFlow(a, t), a) : (Log.e("spin前提不能有其他UI在畫面上，所以不執行 SpinFlow"), a);
  }, l.firstSpinFlow = function (t, a) {
    var e = a.data,
      n = e.spinId,
      s = e.test,
      l = __dependency_14.default.getData().winAmountTime,
      u = {
        ratioIndex: __dependency_8.default.ratioIndex,
        ratioValue: __dependency_8.default.ratioValue,
        stakeIndex: __dependency_8.default.stakeIndex,
        stakeValue: __dependency_8.default.stakeValue
      };
    if (0 === __dependency_11.default.getData().player.balance.amount && this.data.currentGameType === __dependency_17.EGameType.MAIN_GAME && !this.data.getData().isResuming) {
      var r = {
          text: App.getLanguage("insufficientFundError", [], __dependency_2.EBundles[__dependency_2.EBundles.wrapper]),
          confirmCb: function () {
            c();
          },
          bbrCb: function () {
            c();
          }
        },
        c = function () {
          dispatch(__dependency_9.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: __dependency_13.ESpinStatus.IDLE
          });
        };
      return this.data.isOpenEarlyFlag = !1, this.data.isSendOutEarlyFlag = !1, App.gameAlert.show(r), void dispatch(__dependency_9.SlotFrameworkEvent.STOP_AUTO_SPIN);
    }
    if (!this.checkBalance() && this.data.currentGameType === __dependency_17.EGameType.MAIN_GAME && !this.data.getData().isResuming) {
      var f = {
          text: App.getLanguage("insufficientFund", [], __dependency_2.EBundles[__dependency_2.EBundles.wrapper]),
          confirmCb: function () {
            m();
          },
          bbrCb: function () {
            m();
          }
        },
        m = function () {
          dispatch(__dependency_9.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(__dependency_9.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: __dependency_13.ESpinStatus.IDLE
          });
        };
      return this.data.isSendOutEarlyFlag = !1, this.data.isOpenEarlyFlag = !1, App.gameAlert.show(f), void dispatch(__dependency_9.SlotFrameworkEvent.STOP_AUTO_SPIN);
    }
    this.data.currentGameType === __dependency_17.EGameType.MAIN_GAME && (__dependency_11.default.amount = null != n && "" != n ? this.getAfterBuyFeatureBalance() : this.getAfterBettingBalance()), n || t.add(__dependency_4.FlowTrigger.CONCURRENT, new __dependency_9.SlotFrameworkEvent(__dependency_9.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      value: 0,
      tweenTime: l
    }, {
      autoComplete: !0
    })), this.calculateAutoSpin(), t.add(__dependency_4.FlowTrigger.CONCURRENT, new __dependency_16.GameEvent(__dependency_16.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    }), new __dependency_16.GameEvent(__dependency_9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
      autoComplete: !0
    }));
    var g = __dependency_11.default.amount;
    t.add(__dependency_4.FlowTrigger.CONCURRENT, new __dependency_16.GameEvent(__dependency_9.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      balance: g
    }, {
      autoComplete: !0
    })), this.data.isOpenEarlyFlag ? t.add(__dependency_4.FlowTrigger.AFTER_PREVIOUS, new __dependency_16.GameEvent(__dependency_16.GameEvent.SHOW_SYMBOLS_OUT_ANIM), __dependency_4.FlowTrigger.AFTER_PREVIOUS, new __dependency_16.GameEvent(__dependency_16.GameEvent.EARLY_DATA_PARSER_TO_SPIN_DATA, null, {
      autoComplete: !0
    })) : t.add(__dependency_4.FlowTrigger.AFTER_PREVIOUS, new __dependency_16.GameEvent(__dependency_16.GameEvent.SHOW_SYMBOLS_OUT_ANIM), __dependency_4.FlowTrigger.CONCURRENT, new __dependency_16.GameEvent(__dependency_9.SlotFrameworkEvent.SEND_SPIN_REQUEST, {
      spinId: n,
      stakeVO: u,
      test: s,
      updateStake: this.needUpdateStake()
    }, {
      autoComplete: !0
    }));
  }, l.nextSpinFlow = function (t, a) {
    if (this.data.setNextSpinData(), this.data.currSpinData.action == __dependency_17.EActionType.FREE_GAME && this.data.preSpinData.winSymbols && 0 == this.data.preSpinData.winSymbols.length) {
      if (this.data.preSpinData.freeGameCount != this.data.getData().gameState.freeGameCount) for (var e = this.data.preSpinData.timesSymbols.slice(), n = 0; n < e.length; n++) {
        var i = e[n];
        i.lock && 1 == i.lock && dispatch(__dependency_16.GameEvent.TIMES_LOCK_OUT, i.symbolPos);
      }
      this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0, t.add(__dependency_4.FlowTrigger.CONCURRENT, new __dependency_16.GameEvent(__dependency_16.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0
      }), new __dependency_16.GameEvent(__dependency_9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    if (this.data.currSpinData.action == __dependency_17.EActionType.SUPER_GAME && this.data.preSpinData.winSymbols && 0 == this.data.preSpinData.winSymbols.length) {
      if (this.data.preSpinData.superMainGameCount != this.data.getData().gameState.superMainGameCount) for (var s = this.data.preSpinData.timesSymbols.slice(), l = 0; l < s.length; l++) {
        var u = s[l];
        u.lock && 1 == u.lock && dispatch(__dependency_16.GameEvent.TIMES_LOCK_OUT, u.symbolPos);
      }
      this.data.getData().parser.isHaveLockSymbol = this.data.getData().parser.lockTimesSymbols.size > 0, t.add(__dependency_4.FlowTrigger.CONCURRENT, new __dependency_16.GameEvent(__dependency_16.GameEvent.UPDATE_WIN_AMOUNT, {
        value: 0
      }, {
        autoComplete: !0
      }), new __dependency_16.GameEvent(__dependency_9.SlotFrameworkEvent.PLAY_SPIN_BTN_RELEASED_ANIM, null, {
        autoComplete: !0
      }));
    }
    t.add(__dependency_4.FlowTrigger.AFTER_PREVIOUS, new __dependency_16.GameEvent(__dependency_16.GameEvent.CREATE_STOP_SPIN_FLOW, null, {
      autoComplete: !0
    }));
  }, l.checkBalance = function () {
    var t = {
        ratioIndex: __dependency_8.default.ratioIndex,
        ratioValue: __dependency_8.default.ratioValue,
        stakeIndex: __dependency_8.default.stakeIndex,
        stakeValue: __dependency_8.default.stakeValue
      },
      a = t.stakeValue,
      e = t.ratioValue,
      n = __dependency_10.default.getData().winlineDefs.length,
      i = __dependency_19.default.multiply(e, a, n);
    return __dependency_11.default.getData().player.balance.amount - i >= 0;
  }, l.needUpdateStake = function () {
    var t = {
        stakeIndex: __dependency_12.default.stakeIndex,
        ratioIndex: __dependency_12.default.ratioIndex
      },
      a = {
        stakeIndex: __dependency_8.default.stakeIndex,
        ratioIndex: __dependency_8.default.ratioIndex
      },
      e = __dependency_3.ObjectUtils.diffObjects(t, a);
    return Object.keys(e).length > 0;
  }, l.calculateAutoSpin = function () {
    if (__dependency_6.default.active && __dependency_6.default.spinsRemaining > 0) {
      if (this.data.currentGameType === __dependency_17.EGameType.FREE_GAME) return;
      __dependency_6.default.spinsRemaining--;
    }
  }, l.getAfterBettingBalance = function () {
    var t = {
        ratioIndex: __dependency_8.default.ratioIndex,
        ratioValue: __dependency_8.default.ratioValue,
        stakeIndex: __dependency_8.default.stakeIndex,
        stakeValue: __dependency_8.default.stakeValue
      },
      a = t.stakeValue,
      e = t.ratioValue,
      n = __dependency_10.default.getData().winlineDefs.length,
      i = __dependency_19.default.multiply(e, a, n);
    return __dependency_11.default.getData().player.balance.amount - i;
  }, l.getAfterBuyFeatureBalance = function () {
    var t = {
        ratioIndex: __dependency_8.default.ratioIndex,
        ratioValue: __dependency_8.default.ratioValue,
        stakeIndex: __dependency_8.default.stakeIndex,
        stakeValue: __dependency_8.default.stakeValue
      },
      a = t.stakeValue,
      e = t.ratioValue,
      n = __dependency_10.default.getData().winlineDefs.length,
      i = this.data.getData().definition.buyFeature,
      s = __dependency_19.default.multiply(e, a, n) * i[this.data.getData().currentBuyFeatureIndex].featureRate;
    return __dependency_11.default.getData().player.balance.amount - s;
  }, (0, __dependency_0.createClass)(n, [{
    key: "data",
    get: function () {
      return __dependency_15.default.ins;
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_7.default);
    }
  }]), n;
}(__dependency_5.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
