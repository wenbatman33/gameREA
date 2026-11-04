// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateReplayCloseSpinFlowCmd.ts.js
// SHA256: 37fe332b742986b9ecd1d0516a77de504fb81b195e19daee4f3039cc5463b9dc
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
(function (n) {
  void 0, void 0;
})(__dependency_0);
(function (n) {
  void 0;
})(__dependency_1);
(function (n) {
  void 0;
})(__dependency_2);
(function (n) {
  void 0;
})(__dependency_3);
(function (n) {
  void 0;
})(__dependency_4);
(function (n) {
  void 0;
})(__dependency_5);
(function (n) {
  void 0;
})(__dependency_6);
(function (n) {
  void 0;
})(__dependency_7);
__dependency_1.cclegacy._RF.push({}, "e9a76CSiX5GWY3GBKUBZ63M", "CreateReplayCloseSpinFlowCmd", void 0);
__publish("default", function (n) {
  function a() {
    return Reflect.construct(n, arguments, new.target || a) || this;
  }
  (0, __dependency_0.inheritsLoose)(a, n);
  var i = a.prototype;
  return i.execute = function () {
    var n = this.createFlow();
    App.flowManager.registerFlow(n);
  }, i.createFlow = function () {
    var n = new App.flowManager.Flow(__dependency_7.FlowIDs.REPLAY_CLOSE_SPIN_FLOW),
      e = this.data.getData().gameState,
      t = e.totalWinnings,
      a = e.isJp,
      i = e.noWinReward,
      r = this.data.setBigWinReach(t);
    if (a.length && n.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_JP_WIN), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_JP), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .3
    })), r && !a.length) {
      var E = {
        winnings: t,
        isRoundWin: !1
      };
      null != i && i > 0 ? n.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_TREASURE_VIEW, null), new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .5
      })) : n.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_BIGWIN, E), __dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
        delay: .3
      }));
    }
    return i && i > 0 && n.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_6.GameEvent(__dependency_6.GameEvent.SHOW_TREASURE_VIEW, null)), r || a.length || n.add(__dependency_2.FlowTrigger.AFTER_PREVIOUS, new __dependency_4.SlotFrameworkEvent(__dependency_4.SlotFrameworkEvent.SHOW_REPLAY_END, null, {
      delay: .5
    })), n;
  }, (0, __dependency_0.createClass)(a, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }]), a;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
