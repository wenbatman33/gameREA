// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateNewCloseSpinFlowCmd.ts.js
// SHA256: 2b5fcd49efb5b96d161ea90d53d9f8bd1320f318610d0d570466c4a4958c361d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-GameEvent";
import * as __dependency_7 from "./g1005-FlowIDs";
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
__dependency_1.cclegacy._RF.push({}, "f257fIQ7PRLcIovBjtKHHvC", "CreateNewCloseSpinFlowCmd", void 0);
__publish("default", function (t) {
  function a() {
    return Reflect.construct(t, arguments, new.target || a) || this;
  }
  (0, __dependency_0.inheritsLoose)(a, t);
  var i = a.prototype;
  return i.execute = function () {
    var t = this.createFlow();
    App.flowManager.registerFlow(t);
  }, i.createFlow = function () {
    var t = new App.flowManager.Flow(__dependency_7.FlowIDs.CLOSE_SPIN_FLOW),
      e = this.data.getData().gameState,
      n = e.totalWinnings,
      a = e.isJp,
      i = e.noWinReward,
      l = this.data.setNewBigWinReach(n);
    if (a.length && t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_JP_WIN), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_JP)), i && i > 0) t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_TREASURE_VIEW, null));else if (l && !a.length) {
      var c = {
        winnings: n,
        isRoundWin: !1
      };
      t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_BIGWIN, c));
    }
    return this.data.isOpenEarlyFlag ? t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_6.GameEvent(__dependency_6.GameEvent.SPIN_CLOSED_FLOW, null, {
      autoComplete: !0
    })) : t.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SEND_CLOSE_REQUEST, this.data.getData().spinId, {
      autoComplete: !0
    })), t;
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }]), a;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
