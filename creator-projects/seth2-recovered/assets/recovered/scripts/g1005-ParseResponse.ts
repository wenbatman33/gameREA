// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-ParseResponse.ts.js
// SHA256: 9d6b5ecf2de80450b1541a0960fe18853b8a8a935312a33405a048393bca3c43
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-StakeModel";
import * as __dependency_3 from "./g1005-GameConfigModel";
import * as __dependency_4 from "./g1005-GameData";
import * as __dependency_5 from "./g1005-GameEvent";
import * as __dependency_6 from "./g1005-types";
import * as __dependency_7 from "./framework-ReplayModel";
import * as __dependency_8 from "./framework-DefinitionModel";
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
  void 0;
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
  void 0, void 0;
})(__dependency_6);
(function (t) {
  void 0, void 0;
})(__dependency_7);
(function (t) {
  void 0;
})(__dependency_8);
__dependency_1.cclegacy._RF.push({}, "489feosKDxE2p8FARjlU5pN", "ParseResponse", void 0);
__publish("default", function () {
  function t() {}
  return t.parseNewInit = function (t) {
    var e;
    this.data.currSpinIndex = 0, this.data.setNewInitData(t), __dependency_2.default.init({
      stakeList: t.platform.game.stakeValues,
      stakeIndex: t.platform.player.settings.stakeIndex,
      ratioList: t.platform.game.ratioValues,
      ratioIndex: t.platform.player.settings.ratioIndex,
      numWinlines: t.engine.definition.winlineDefs.length,
      totalBetValues: null == (e = t.platform) ? void 0 : e.game.stakeList
    }), __dependency_3.default.setNewData(t), this.setNewGameType(), dispatch(__dependency_5.GameEvent.PARSER_INIT_COMPLETED);
  }, t.parseNewSpin = function (t) {
    this.data.setNewSpinData(t), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag(), dispatch(__dependency_5.GameEvent.PARSER_SPIN_COMPLETED);
  }, t.parseNewEarlySpin = function (t) {
    this.data.setNewSpinData(t), this.setNewGameType(), this.data.judgeIsOpenEarlyFlag();
  }, t.parseEarlySpin = function (t) {
    this.data.earlyData = t;
  }, t.tempEarlyClose = function (t) {
    this.data.earlyCloseData = t;
  }, t.parseCloseSpin = function (t) {
    dispatch(__dependency_5.GameEvent.PARSER_CLOSE_SPIN_COMPLETED);
  }, t.parseReplay = function (t) {
    this.parseReplayData(t);
    var e = __dependency_7.default.index;
    this.data.setReplayInit(t), this.data.setReplayCurrentView(t.betData.theResult[e]), __dependency_7.default.replayMode !== __dependency_7.EReplayMode.RANKING_REPLAY && dispatch(__dependency_5.GameEvent.PARSER_REPLAY_COMPLETED, !0);
  }, t.parseReplayAgain = function (t) {
    this.parseReplayData(t);
    var e = __dependency_7.default.index;
    this.data.setReplayCurrentView(t.betData.theResult[e]), dispatch(__dependency_5.GameEvent.PARSER_REPLAY_COMPLETED, !1);
  }, t.parseReplayData = function (t) {
    var e = t.definition ? t.definition.winlineDefs : __dependency_8.default.getData().winlineDefs;
    __dependency_2.default.init({
      stakeList: t.betData.replayMeta.stakeValues,
      stakeIndex: t.betData.replayMeta.stakeIndex,
      ratioList: t.betData.replayMeta.ratioValues,
      ratioIndex: t.betData.replayMeta.ratioIndex,
      numWinlines: e.length
    });
    var a = t.betData.theResult[0].engine,
      i = t.betData.theResult[1].engine;
    a.currentView = 0, a.totalWinnings = 0, a.roundWinnings = 0, a.action = __dependency_6.EActionType.SPIN, a.isJp = "", a.timesSymbols = [], t.betData.theResult.forEach(function (e, n) {
      n > 0 && (e.engine.totalViews += 1, e.engine.currentView += 1, a.totalViews = i.totalViews, t.betData.totalViews = a.totalViews);
    });
  }, t.setNewGameType = function () {
    var t,
      e = this.data.currSpinData;
    (null == e ? void 0 : e.action) === __dependency_6.EActionType.SPIN || (null == e ? void 0 : e.action) === __dependency_6.EActionType.SUPER_GAME ? t = __dependency_6.EGameType.MAIN_GAME : (t = __dependency_6.EGameType.FREE_GAME, this.data.previousGameType || (t = __dependency_6.EGameType.MAIN_GAME)), this.data.currentGameType = t;
  }, (0, __dependency_0.createClass)(t, null, [{
    key: "data",
    get: function () {
      return __dependency_4.default.ins;
    }
  }]), t;
}());
__dependency_1.cclegacy._RF.pop();
