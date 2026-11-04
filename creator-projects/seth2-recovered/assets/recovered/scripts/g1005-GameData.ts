// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameData.ts.js
// SHA256: 3d083d47818700e77d960ab8211598544049cdaeed555d26396ad082d2be37b0
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./framework-MathUtil";
import * as __dependency_4 from "./main-GameDataBase";
import * as __dependency_5 from "./g1005-GameEvent";
import * as __dependency_6 from "./g1005-types";
import * as __dependency_7 from "./g1005-GameConfigModel";
import * as __dependency_8 from "./g1005-GameSymbolID";
import * as __dependency_9 from "./framework-AutoPlayModel";
import * as __dependency_10 from "./framework-ObjectUtils";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./framework-StakeModel";
import * as __dependency_13 from "./framework-DefinitionModel";
import * as __dependency_14 from "./main-UrlUtils";
var __export_0;
export { __export_0 as EInitName };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EInitName":
      __export_0 = value;
      break;
    case "default":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0;
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
  void 0, void 0;
})(__dependency_6);
(function (e) {
  void 0;
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
(function (e) {
  void 0;
})(__dependency_12);
(function (e) {
  void 0;
})(__dependency_13);
(function (e) {
  void 0;
})(__dependency_14);
var w;
__publish("EInitName", void 0), __dependency_1.cclegacy._RF.push({}, "1ccecTxaNJLsI8drIc74lIn", "GameData", void 0), function (e) {
  e.INIT_GAME = "init_game", e.INIT_REPLAY = "init_replay";
}(w || (w = __publish("EInitName", {})));
var D = __publish("default", function (e) {
  function s() {
    for (var t, a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
    return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || s) || this).GAME_VERSION = "1.1.5_8", t.preData = void 0, t._currentGameType = void 0, t.previousGameType = void 0, t.originTurbo = null, t.currSpinIndex = 0, t.preSpinData = null, t.isEarlyFlag = !1, t.isOpenEarlyFlag = !1, t.isSendOutEarlyFlag = !1, t.earlySpinDelaying = !1, t.earlyData = null, t.newEarlyData = null, t.isEarlyCloseFlag = !1, t.earlyCloseData = null, t.waitEarlyDataRetryInterval = null, t.waitEarlyCloseDataRetryInterval = null, t.isHaveNewLock = !1, t.newLockTimesSymbols = new Map(), t.delayEarlyTween = void 0, t.isSendClose = !1, t.originGameData = null, t;
  }
  (0, __dependency_0.inheritsLoose)(s, e);
  var r = s.prototype;
  return r.init = function () {
    this.data = {
      symbolPosConfig: new Map(),
      gameState: null,
      definition: null,
      isResuming: !1,
      parser: {
        view1D: [],
        newTimesSymbols: [],
        winOdds: [],
        bigwinReach: null,
        isFullCombo: !1,
        lockTimesSymbols: new Map(),
        isHaveLockSymbol: !1,
        isSplitSymbol: !1
      },
      winBoardPosition: (0, __dependency_1.v3)(),
      currentTimesPosition: (0, __dependency_1.v3)(),
      currentBuyFeatureIndex: 0,
      superMgRealStakeLimit: 0
    }, __dependency_8.GameSymbolID.init(), this.data.symbolPosConfig = __dependency_8.GameSymbolID.symbolPosConfig, "landscape" == __dependency_14.default.getViewModeParam() ? (this.data.winBoardPosition = (0, __dependency_1.v3)(50, 290, 0), this.data.currentTimesPosition = (0, __dependency_1.v3)(388, 264, 0)) : (this.data.winBoardPosition = (0, __dependency_1.v3)(50, -282, 0), this.data.currentTimesPosition = (0, __dependency_1.v3)(293, 264, 0));
  }, r.onDestory = function () {}, r.clear = function () {}, r.debug = function () {
    Log.d("" + this.module);
  }, r.parseView = function (e) {
    this.data.parser.view1D = __dependency_3.default.flattenArray(e.view);
  }, r.parseNewTimesSymbols = function (e) {
    var t = e.newTimesSymbols;
    this.data.parser.newTimesSymbols = t.slice();
  }, r.ReplayParseView = function (e) {
    this.data.parser.view1D = __dependency_3.default.flattenArray(e.engine.view);
  }, r.ReplayParseTimesSymbols = function (e) {
    var t,
      a,
      i,
      s,
      n = e.engine,
      r = (n.action, n.currentView, n.timesSymbols, n.newTimesSymbols),
      o = void 0 === r ? [] : r;
    null == (t = this.preData.gameState) || t.winSymbols, null == (a = this.preData.gameState) || a.splitList, null == (i = this.preData.gameState) || i.timesSymbols, null == (s = this.preData.gameState) || s.posTransform;
    this.data.parser.newTimesSymbols = o.slice();
  }, r.setPreData = function () {
    this.preData = JSON.parse(JSON.stringify(this.data));
  }, r.setPreSpinData = function () {
    this.preSpinData = JSON.parse(JSON.stringify(this.currSpinData));
  }, r.compareFunction = function (e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }, r.parseReplayWinOddsType = function (e) {
    for (var t = Object.keys(e), a = Object.values(e).sort(this.compareFunction), i = 0; i < t.length; i++) this.data.parser.winOdds.push({
      level: i,
      reachRate: a[i]
    });
    Log.w("parseReplayWinOddsType", this.data.parser.winOdds);
  }, r.parseWinOddsTypes = function (e) {
    var t = e.winOddsTypes,
      a = Object.keys(t),
      i = Object.values(t).sort(this.compareFunction);
    Log.w("BigWinOdd values::::::::::", i);
    for (var s = 0; s < a.length; s++) this.data.parser.winOdds.push({
      level: s,
      reachRate: i[s]
    });
    Log.w("parseWinOddsTypes", this.data.parser.winOdds);
  }, r.parseFullCombo = function (e) {
    this.data.parser.isFullCombo = e.every(function (t) {
      return t === e[0];
    });
  }, r.parseLockTimesSymbol = function () {
    var e = this.currSpinData,
      t = this.preSpinData.timesSymbols;
    if (void 0 !== t) for (var a = 0; a < t.length; a++) {
      var i = t[a];
      void 0 !== i.lock && 1 == i.lock && this.data.parser.lockTimesSymbols.has(i.symbolPos) && this.data.parser.lockTimesSymbols.delete(i.symbolPos);
    }
    if (e.timesSymbols && e.timesSymbols.length > 0) {
      var s = e.timesSymbols.slice();
      this.isHaveNewLock = !1, this.newLockTimesSymbols.clear();
      for (var n = 0; n < s.length; n++) {
        var r = s[n];
        if (null != r.lock && r.lock > 0) {
          if (this.data.parser.lockTimesSymbols.get(r.symbolPos)) {
            this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
            continue;
          }
          this.newLockTimesSymbols.set(r.symbolPos, r), this.isHaveNewLock = !0, this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
        }
      }
      this.data.parser.lockTimesSymbols.size > 0 ? this.data.parser.isHaveLockSymbol = !0 : this.data.parser.isHaveLockSymbol = !1;
    } else this.data.parser.isHaveLockSymbol = !1;
  }, r.parseReplayLockTimesSymbol = function () {
    var e = this.data.gameState;
    if (this.isHaveNewLock = !1, this.preData.gameState) {
      var t = this.preData.gameState.timesSymbols;
      if (void 0 !== t) for (var a = 0; a < t.length; a++) {
        var i = t[a];
        i.lock && 1 == i.lock && this.data.parser.lockTimesSymbols.has(i.symbolPos) && this.data.parser.lockTimesSymbols.delete(i.symbolPos);
      }
    }
    for (var s = e.timesSymbols.slice(), n = 0; n < s.length; n++) {
      var r = s[n];
      if (null != r.lock && r.lock > 0) {
        if (this.data.parser.lockTimesSymbols.get(r.symbolPos)) {
          this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
          continue;
        }
        this.newLockTimesSymbols.set(r.symbolPos, r), this.isHaveNewLock = !0, this.data.parser.lockTimesSymbols.set(r.symbolPos, r);
      }
    }
    this.data.parser.lockTimesSymbols.size > 0 ? this.data.parser.isHaveLockSymbol = !0 : this.data.parser.isHaveLockSymbol = !1;
  }, r.setNewInitData = function (e) {
    if (e.localBackend === true && e.isResuming && Number.isInteger(e.localResumeIndex)) {
      if (e.localResumeIndex < 0 || e.localResumeIndex >= e.engine.gameState.length) throw new RangeError('Invalid local resume stage');
      this.currSpinIndex = e.localResumeIndex;
    }
    var t = e.engine,
      a = e.isResuming,
      i = e.platform;
    i.game.superMgRealStakeLimit && i.game.superMgRealStakeLimit > 0 && (this.data.superMgRealStakeLimit = i.game.superMgRealStakeLimit), this.data.newGameState = t.gameState.slice(), this.setPreSpinData(), this.data.definition = t.definition, this.data.isResuming = a, this.data.spinId = t.spinId, 0 == this.data.isResuming && (this.currSpinIndex = this.data.newGameState.length - 1), this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseWinOddsTypes(t.definition), this.parseFullCombo(this.data.parser.view1D), this.parseLockTimesSymbol();
  }, r.setNewSpinData = function (e) {
    var t = e.engine;
    this.data.newGameState = t.gameState.slice(), this.data.spinId = t.spinId, this.currSpinIndex = 0, this.setPreSpinData(), this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseNewTimesSymbols(this.currSpinData), this.parseFullCombo(this.data.parser.view1D), this.parseLockTimesSymbol();
  }, r.judgeIsOpenEarlyFlag = function () {
    1 == this.data.newGameState.length && (__dependency_9.default.spinsRemaining > 1 || -1 == __dependency_9.default.spinsRemaining) && __dependency_9.default.active && __dependency_7.default.isTurbo && this.currentGameType == __dependency_6.EGameType.MAIN_GAME ? this.isOpenEarlyFlag = !0 : (this.isOpenEarlyFlag = !1, this.earlyData = null);
  }, r.setNextSpinData = function () {
    this.setPreSpinData(), this.currSpinIndex++, this.data.gameState = this.currSpinData, this.parseView(this.currSpinData), this.parseNewTimesSymbols(this.currSpinData), this.parseFullCombo(this.data.parser.view1D), this.parseLockTimesSymbol();
    const __localRuntime = globalThis.SethCreatorLocalBackend;
    if (__localRuntime && typeof __localRuntime.markStage === 'function') __localRuntime.markStage(this.data.spinId, this.currSpinData.currentView);
  }, r.setReplayCurrentView = function (e) {
    this.setPreData(), this.data.gameState = e.engine, this.ReplayParseView(e), this.ReplayParseTimesSymbols(e), this.parseReplayLockTimesSymbol();
  }, r.setReplayInit = function (e) {
    var t = e.definition ? e.definition.digital : __dependency_13.default.getData().digital,
      i = e.definition ? e.definition.winOddsTypes : __dependency_13.default.getData().winOddsTypes,
      s = e.definition ? e.definition.extraFgRounds : __dependency_13.default.getData().extraFgRounds;
    this.data.definition = (0, __dependency_0.extends)({
      digital: t,
      winOddsTypes: this.parseReplayWinOddsType(i),
      extraFgRounds: s
    }, this.data.definition), __dependency_7.default.getData().autoCloseTime = 3, __dependency_7.default.getData().bigwinAutoCloseTime = 5;
  }, r.setBigWinReach = function (e) {
    var t = this.data.gameState.totalStake,
      a = this.data.parser.winOdds,
      i = e / t;
    this.data.parser.bigwinReach = null;
    for (var s = 0; s < a.length; s++) i >= a[s].reachRate && (this.data.parser.bigwinReach = a[s]);
    return this.data.parser.bigwinReach;
  }, r.setNewBigWinReach = function (e) {
    var t = this.currSpinData.totalStake,
      a = this.data.parser.winOdds,
      i = e / t;
    this.data.parser.bigwinReach = null;
    for (var s = 0; s < a.length; s++) i >= a[s].reachRate && (this.data.parser.bigwinReach = a[s]);
    return this.data.parser.bigwinReach;
  }, r.getSymbolSpriteFrame = function (e) {
    var t = __dependency_7.default.getData().filePaths.symbolsSpriteFrame,
      a = "symbol_" + e,
      i = App.cache.get(s.module, t).data.find(function (e) {
        return e.name === a;
      });
    if (!i) throw new Error("NOT FIND 所需圖片 " + a);
    return i;
  }, r.getSymbolSpriteFrameBlur = function (e) {
    var t = __dependency_7.default.getData().filePaths.symbolsSpriteFrameBlur,
      a = "symbol_" + e,
      i = App.cache.get(s.module, t).data.find(function (e) {
        return e.name === a;
      });
    if (!i) throw new Error("NOT FIND 所需圖片 " + a);
    return i;
  }, r.getSymbolAnimSpine = function (e) {
    var t = __dependency_7.default.getData().filePaths.symbolsSkeletonData,
      a = "symbol_" + e,
      i = App.cache.get(s.module, t).data.find(function (e) {
        return e.name === a;
      });
    if (!i) throw new Error("NOT FIND 所需sp.SkeletonData " + a);
    return i;
  }, r.getGameAlertSpine = function (e) {
    var t = __dependency_7.default.getData().filePaths.gameAlertsSkeletonData,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需sp.SkeletonData " + e);
    return a;
  }, r.getCommonSpriteFrame = function (e) {
    var t = __dependency_7.default.getData().filePaths.common,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + e);
    return a;
  }, r.getLocaleSpriteFrame = function (e) {
    var t = __dependency_7.default.getData().filePaths.localeSpriteFrame,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需spriteFrame " + e);
    return a;
  }, r.getTransitionSpine = function (e) {
    var t = __dependency_7.default.getData().filePaths.transitionsSkeletonData,
      a = App.cache.get(s.module, t).data.find(function (t) {
        return t.name === e;
      });
    if (!a) throw new Error("NOT FIND 所需skeletonData " + e);
    return a;
  }, r.getIsFGFinish = function () {
    var e = this.data.gameState,
      t = e.currentView,
      a = e.totalViews,
      i = (e.spinId, e.startFreeGame, e.action);
    return t + 1 === a && "freeSpin" == i;
  }, r.getIsSuperMainGameFinish = function () {
    var e = this.data.gameState,
      t = e.currentView,
      a = e.totalViews,
      i = (e.spinId, e.startFreeGame, e.action);
    return t + 1 === a && i == __dependency_6.EActionType.SUPER_GAME;
  }, r.getIsBigWinReach = function () {
    return null != this.data.parser.bigwinReach;
  }, r.saveOriginGameData = function () {
    this.originGameData = __dependency_10.ObjectUtils.clone(this.data), __dependency_11.default.saveOriginData(), __dependency_12.default.saveOriginData();
  }, r.restoreCurrentGameData = function () {
    this.originGameData ? (this.data = __dependency_10.ObjectUtils.clone(this.originGameData), this.currentGameType = __dependency_6.EGameType.MAIN_GAME, this.originGameData = null) : console.warn("No originGameData to restore."), __dependency_11.default.restoreCurrentData(), __dependency_12.default.restoreCurrentData();
  }, (0, __dependency_0.createClass)(s, [{
    key: "currentGameType",
    get: function () {
      return this._currentGameType;
    },
    set: function (e) {
      this.previousGameType = this._currentGameType, this._currentGameType = e, dispatch(__dependency_5.GameEvent.UPDATE_GAME_TYPE, {
        data: this._currentGameType
      });
    }
  }, {
    key: "currSpinData",
    get: function () {
      return this.data.newGameState[this.currSpinIndex];
    }
  }], [{
    key: "ins",
    get: function () {
      return this._ins || (this._ins = new s(), this._ins.module = s.module, this._ins.init()), this._ins;
    }
  }]), s;
}(__dependency_4.GameDataBase));
D.module = __dependency_2.EBundles[__dependency_2.EBundles.g1005], D._ins = void 0, __dependency_1.cclegacy._RF.pop();
