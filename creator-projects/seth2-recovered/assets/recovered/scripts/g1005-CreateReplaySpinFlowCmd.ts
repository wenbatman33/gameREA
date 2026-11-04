// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CreateReplaySpinFlowCmd.ts.js
// SHA256: c77e2c9231519c68cf1305e00af6870e0fe9c79de0d6ceba9e90fe0f8d1868eb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Flow";
import * as __dependency_3 from "./main-SingletonExtends";
import * as __dependency_4 from "./framework-AutoPlayModel";
import * as __dependency_5 from "./framework-SlotFrameworkData";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./g1005-GameData";
import * as __dependency_8 from "./g1005-GameEvent";
import * as __dependency_9 from "./g1005-types";
import * as __dependency_10 from "./g1005-FlowIDs";
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
__dependency_1.cclegacy._RF.push({}, "fc1d3HHsS5NCZoLEcIy7sDw", "CreateReplaySpinFlowCmd", void 0);
__publish("default", function (t) {
  function o() {
    return Reflect.construct(t, arguments, new.target || o) || this;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var a = o.prototype;
  return a.execute = function (t) {
    var e = this.createSpinFlow(t);
    App.flowManager.registerFlow(e);
  }, a.createSpinFlow = function (t) {
    var e = new App.flowManager.Flow(__dependency_10.FlowIDs.REPLAY_SPIN_FLOW);
    return this.firstSpinFlow(e, t), e;
  }, a.firstSpinFlow = function (t, e) {
    this.calculateAutoSpin(), t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_8.GameEvent(__dependency_8.GameEvent.UPDATE_WIN_AMOUNT, {
      value: 0
    }, {
      autoComplete: !0
    })), t.add(__dependency_2.FlowTrigger.CONCURRENT, new __dependency_6.SlotFrameworkEvent(__dependency_6.SlotFrameworkEvent.REPLAY_NEXT_SPIN));
  }, a.calculateAutoSpin = function () {
    if (__dependency_4.default.active && __dependency_4.default.spinsRemaining > 0) {
      if (this.data.currentGameType === __dependency_9.EGameType.FREE_GAME) return;
      __dependency_4.default.spinsRemaining--;
    }
  }, (0, __dependency_0.createClass)(o, [{
    key: "data",
    get: function () {
      return __dependency_7.default.ins;
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_5.default);
    }
  }]), o;
}(__dependency_3.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
