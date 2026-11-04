// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-NewSpinClosedCmd.ts.js
// SHA256: 8d43414e5154339631122ccb774738d109b819377e2b16130dc9dbd047bae7a1
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-AutoPlayModel";
import * as __dependency_5 from "./framework-SlotFrameworkData";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./framework-PlatformModel";
import * as __dependency_8 from "./framework-type2";
import * as __dependency_9 from "./g1005-GameConfigModel";
import * as __dependency_10 from "./g1005-GameData";
import * as __dependency_11 from "./g1005-GameEvent";
import * as __dependency_12 from "./g1005-types";
import * as __dependency_13 from "./g1005-FlowIDs";
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
  void 0, void 0;
})(__dependency_12);
(function (t) {
  void 0;
})(__dependency_13);
__dependency_1.cclegacy._RF.push({}, "b7266ebgdVCMpdqbAbDprdB", "NewSpinClosedCmd", void 0);
__publish("default", function (t) {
  function n() {
    return Reflect.construct(t, arguments, new.target || n) || this;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var s = n.prototype;
  return s.execute = function () {
    dispatch(__dependency_11.GameEvent.SPIN_CLOSED), __dependency_9.default.quickStopCount = 0;
    var t = this.createFlow();
    App.flowManager.registerFlow(t);
  }, s.createFlow = function () {
    var t = new App.flowManager.Flow(__dependency_13.FlowIDs.SPIN_CLOSED_FLOW),
      e = this.data.getData().parser.newTimesSymbols,
      a = __dependency_9.default.getData(),
      n = a.hasTimesSymbolsDelay,
      s = a.nextSpinDelay,
      o = e.length ? n : s,
      p = this.data.getData().gameState,
      m = p.currentView,
      A = p.totalViews,
      g = p.action;
    this.data.getData().isResuming = !1, this.calculateAutoSpin(), m === A - 1 && this.data.currentGameType === __dependency_12.EGameType.FREE_GAME ? dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_8.ESpinStatus.SPINING
    }) : m === A - 1 && g == __dependency_12.EActionType.SUPER_GAME ? dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_8.ESpinStatus.IDLE
    }) : dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
      data: __dependency_4.default.active ? __dependency_8.ESpinStatus.SPINING : __dependency_8.ESpinStatus.IDLE
    });
    var I = __dependency_7.default.amount;
    return t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_11.GameEvent(__dependency_6.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      balance: I
    }, {
      autoComplete: !0
    })), __dependency_4.default.active && (__dependency_4.default.spinsRemaining > 0 || -1 === __dependency_4.default.spinsRemaining) ? this.data.isOpenEarlyFlag ? null == this.data.earlyData ? t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_11.GameEvent(__dependency_11.GameEvent.WAIT_EARLY_SPIN_RESPONSE, null, {
      autoComplete: !0
    })) : t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_11.GameEvent(__dependency_11.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      test: null,
      earlySpin: !0
    }, {
      autoComplete: !0,
      delay: o
    })) : t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_11.GameEvent(__dependency_11.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      test: null
    }, {
      autoComplete: !0,
      delay: o
    })) : this.data.earlyData && this.data.isSendOutEarlyFlag && t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_11.GameEvent(__dependency_11.GameEvent.CREATE_SPIN_FLOW, {
      spinId: null,
      test: null,
      earlySpin: !0
    }, {
      autoComplete: !0,
      delay: o
    })), t;
  }, s.calculateAutoSpin = function () {
    0 === __dependency_4.default.spinsRemaining && (__dependency_4.default.active = !1, dispatch(__dependency_6.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    })), __dependency_4.default.spinsRemaining <= -1 && (__dependency_4.default.spinsRemaining = -1), __dependency_4.default.active ? dispatch(__dependency_6.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !1
    }) : (dispatch(__dependency_6.SlotFrameworkEvent.SHOW_AUTO_SPIN, {
      data: !0
    }), __dependency_4.default.spinsRemaining = 0);
  }, (0, __dependency_0.createClass)(n, [{
    key: "data",
    get: function () {
      return __dependency_10.default.ins;
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_5.default);
    }
  }]), n;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
