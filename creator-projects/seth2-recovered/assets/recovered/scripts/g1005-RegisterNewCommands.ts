// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-RegisterNewCommands.ts.js
// SHA256: dbf2bbbc4fcb74166fafd1b5cf6cad2c9d304f2b93ee1cad65b77327ae41a37d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingletonExtends";
import * as __dependency_3 from "./g1005-GameEvent";
import * as __dependency_4 from "./g1005-CreateReplayFlow";
import * as __dependency_5 from "./g1005-CreateReplaySpinCompleteFlowCmd";
import * as __dependency_6 from "./g1005-CreateReplayStopSpinFlowCmd";
import * as __dependency_7 from "./g1005-CreateReplaySpinFlowCmd";
import * as __dependency_8 from "./g1005-CreateReplayCloseSpinFlowCmd";
import * as __dependency_9 from "./g1005-CreateReplayQuickStopFlowCmd";
import * as __dependency_10 from "./g1005-CreateNewSpinFlowCmd";
import * as __dependency_11 from "./g1005-CreateNewStopSpinFlowCmd";
import * as __dependency_12 from "./g1005-CreateNewSpinCompleteFlowCmd";
import * as __dependency_13 from "./g1005-NewSpinClosedCmd";
import * as __dependency_14 from "./g1005-CreateNewCloseSpinFlowCmd";
import * as __dependency_15 from "./g1005-CreateNewQuickStopFlowCmd";
import * as __dependency_16 from "./g1005-CreateNewResumeFlowCmd";
import * as __dependency_17 from "./g1005-CreateNewEarlySpinFlowCmd";
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
  void 0;
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
(function (n) {
  void 0;
})(__dependency_8);
(function (n) {
  void 0;
})(__dependency_9);
(function (n) {
  void 0;
})(__dependency_10);
(function (n) {
  void 0;
})(__dependency_11);
(function (n) {
  void 0;
})(__dependency_12);
(function (n) {
  void 0;
})(__dependency_13);
(function (n) {
  void 0;
})(__dependency_14);
(function (n) {
  void 0;
})(__dependency_15);
(function (n) {
  void 0;
})(__dependency_16);
(function (n) {
  void 0;
})(__dependency_17);
__dependency_1.cclegacy._RF.push({}, "e87746s3kZH6o1yRbInRMNb", "RegisterNewCommands", void 0);
__publish("default", function (n) {
  function a() {
    return Reflect.construct(n, arguments, new.target || a) || this;
  }
  return (0, __dependency_0.inheritsLoose)(a, n), a.prototype.execute = function () {
    App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_SPIN_FLOW, __dependency_10.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_STOP_SPIN_FLOW, __dependency_11.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_SPIN_COMPLETE_FLOW, __dependency_12.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_CLOSE_SPIN_FLOW, __dependency_14.default), App.commandManager.addCommand(__dependency_3.GameEvent.SPIN_CLOSED_FLOW, __dependency_13.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_RESUME_FLOW, __dependency_16.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_QUICK_STOP_FLOW, __dependency_15.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_EARLY_SPIN_FLOW, __dependency_17.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_REPLAY_FLOW, __dependency_4.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_REPLAY_SPIN_FLOW, __dependency_7.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_REPLAY_STOP_SPIN_FLOW, __dependency_6.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_REPLAY_SPIN_COMPLETE_FLOW, __dependency_5.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_REPLAY_CLOSE_SPIN_FLOW, __dependency_8.default), App.commandManager.addCommand(__dependency_3.GameEvent.CREATE_REPLAY_QUICK_STOP_FLOW, __dependency_9.default);
  }, a;
}(__dependency_2.SingletonExtends).instance());
__dependency_1.cclegacy._RF.pop();
