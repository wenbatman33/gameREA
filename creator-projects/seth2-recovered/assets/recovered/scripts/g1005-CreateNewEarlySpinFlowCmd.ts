// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateNewEarlySpinFlowCmd.ts.js
// SHA256: 4f408aee28a3e06b7f9b34ac15e000f5710be8b16ac2b148ed6ce623666d02db
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-StakeModel";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-FlowIDs";
import * as __dependency_7 from "./framework-SlotFrameworkEvent";
import * as __dependency_8 from "./g1005-types";
import * as __dependency_9 from "./main-Bundles";
import * as __dependency_10 from "./framework-DefinitionModel";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./framework-type2";
import * as __dependency_13 from "./framework-MathUtil";
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
__dependency_1.cclegacy._RF.push({}, "3fafbScPZpNLLTFiwsYNj/7", "CreateNewEarlySpinFlowCmd", void 0);
__publish("default", function (t) {
  function n() {
    return Reflect.construct(t, arguments, new.target || n) || this;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var o = n.prototype;
  return o.execute = function (t) {
    var e = this.createFlow(t);
    App.flowManager.registerFlow(e);
  }, o.createFlow = function (t) {
    return this.createMgFlow(t);
  }, o.createMgFlow = function (t) {
    var e = new App.flowManager.Flow(__dependency_6.FlowIDs.EARLY_SPIN_FLOW),
      a = t.data.data,
      n = (a.spinId, a.test),
      o = {
        ratioIndex: __dependency_4.default.ratioIndex,
        ratioValue: __dependency_4.default.ratioValue,
        stakeIndex: __dependency_4.default.stakeIndex,
        stakeValue: __dependency_4.default.stakeValue
      };
    if (0 === __dependency_11.default.getData().player.balance.amount && this.data.currentGameType === __dependency_8.EGameType.MAIN_GAME) return this.data.isOpenEarlyFlag = !1, e;
    if (!this.checkBalance() && this.data.currentGameType === __dependency_8.EGameType.MAIN_GAME) {
      this.data.isOpenEarlyFlag = !1;
      var s = {
          text: App.getLanguage("insufficientFund", [], __dependency_9.EBundles[__dependency_9.EBundles.wrapper]),
          confirmCb: function () {
            d();
          },
          bbrCb: function () {
            d();
          }
        },
        d = function () {
          dispatch(__dependency_7.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
            data: !0
          }), dispatch(__dependency_7.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
            data: __dependency_12.ESpinStatus.IDLE
          });
        };
      return setTimeout(function () {
        App.gameAlert.show(s);
      }, 500), dispatch(__dependency_7.SlotFrameworkEvent.STOP_AUTO_SPIN), e;
    }
    return e.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_7.SlotFrameworkEvent(__dependency_7.SlotFrameworkEvent.SEND_EARLY_SPIN_REQUEST, {
      spinId: "",
      stakeVO: o,
      test: n,
      forceClose: this.data.getData().spinId
    }, {
      autoComplete: !0
    })), e;
  }, o.checkBalance = function () {
    var t = {
        ratioIndex: __dependency_4.default.ratioIndex,
        ratioValue: __dependency_4.default.ratioValue,
        stakeIndex: __dependency_4.default.stakeIndex,
        stakeValue: __dependency_4.default.stakeValue
      },
      e = t.stakeValue,
      a = t.ratioValue,
      n = __dependency_10.default.getData().winlineDefs.length,
      i = __dependency_13.default.multiply(a, e, n);
    return __dependency_11.default.getData().player.balance.amount - i >= 0;
  }, (0, __dependency_0.createClass)(n, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }]), n;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
