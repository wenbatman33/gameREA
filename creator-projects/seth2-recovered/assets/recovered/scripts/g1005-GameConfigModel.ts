// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameConfigModel.ts.js
// SHA256: 8d8f2d8bc8c59d0152d5570ae66bbd705c77c380dd1daa8693583a11d73212ed
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-ObjectUtils";
import * as __dependency_3 from "./main-BaseModel";
import * as __dependency_4 from "./framework-DefinitionModel";
import * as __dependency_5 from "./framework-SettingsModel";
import * as __dependency_6 from "./g1005-GameSender";
import * as __dependency_7 from "./g1005-GameData";
import * as __dependency_8 from "./framework-UrlModel";
import * as __dependency_9 from "./main-UrlUtils";
var __export_0;
export { __export_0 as EBGM };
var __export_1;
export { __export_1 as EBTM };
var __export_2;
export { __export_2 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBGM":
      __export_0 = value;
      break;
    case "EBTM":
      __export_1 = value;
      break;
    case "default":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (s) {
  void 0, void 0;
})(__dependency_0);
(function (s) {
  void 0;
})(__dependency_1);
(function (s) {
  void 0;
})(__dependency_2);
(function (s) {
  void 0;
})(__dependency_3);
(function (s) {
  void 0;
})(__dependency_4);
(function (s) {
  void 0;
})(__dependency_5);
(function (s) {
  void 0;
})(__dependency_6);
(function (s) {
  void 0;
})(__dependency_7);
(function (s) {
  void 0;
})(__dependency_8);
(function (s) {
  void 0;
})(__dependency_9);
var c, r;
__publish({
  EBGM: void 0,
  EBTM: void 0
}), __dependency_1.cclegacy._RF.push({}, "e5bb6o7O65Hert4BN+LmyiY", "GameConfigModel", void 0), function (s) {
  s.MAINGAME = "assets/music/bgm/bgm_mg", s.FREEGAME = "assets/music/bgm/bgm_fg", s.GOLDFREEGAME = "assets/music/bgm/bgm_golden_fg";
}(c || (c = __publish("EBGM", {}))), function (s) {
  s.SPIN = "assets/music/btm/btm_spin", s.CH_LOOP = "assets/music/btm/btm_ch_loop", s.FREEGAME_IN = "assets/music/btm/btm_fg_in", s.FREEGAME_OUT = "assets/music/btm/btm_fg_out", s.SYMBOL_WIN = "assets/music/btm/btm_fx_symbol_frame", s.SYMBOL_BREAK = "assets/music/btm/btm_fx_symbol_out", s.TIMES_SYMBOL_01 = "assets/music/btm/btm_muti_function_1", s.TIMES_SYMBOL_02 = "assets/music/btm/btm_muti_function_2", s.SYMBOL_TURBO_FALL_OUT = "assets/music/btm/btm_fall_auto_1", s.SYMBOL_TURBO_FALL_IN = "assets/music/btm/btm_fall_auto_2", s.SYMBOL_NORMAL_FALL_OUT = "assets/music/btm/btm_fall_normal_1", s.SYMBOL_NORMAL_FALL_IN = "assets/music/btm/btm_fall_normal_2", s.FIREBALL_IN = "assets/music/btm/btm_fx_symbol_function_1", s.FIREBALL_HIT = "assets/music/btm/btm_fx_symbol_function_2", s.FIREBALL_HIT_100X = "assets/music/btm/btm_fx_symbol_function_2_100x", s.CH_MAN_TRANSITION = "assets/music/btm/btm_ch_male", s.CH_WOMAN_TRANSITION = "assets/music/btm/btm_ch_female", s.NEW_CH_MAN_TRANSITION = "assets/music/btm/btm_fg_chB", s.NEW_CH_WOMAN_TRANSITION = "assets/music/btm/btm_fg_chA", s.SMALL_PRIZE_IN = "assets/music/btm/btm_w_in_prize_s", s.ULTRA_IN = "assets/music/btm/btm_w_ultra", s.LEGEND_IN = "assets/music/btm/btm_w_legend", s.WIN_LOOP = "assets/music/btm/btm_w_loop", s.S_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_s", s.L_PRIZE_LOOP = "assets/music/btm/btm_w_loop_prize_l", s.JP_WIN = "assets/music/btm/btm_w_jp", s.FULLCOMBO = "assets/music/btm/btm_fc", s.SCATTER_IN = "assets/music/btm/btm_scatter_in", s.SCATTER_IN_X2 = "assets/music/btm/btm_scatter_in_x2", s.SCATTER_WIN = "assets/music/btm/btm_scatter_win", s.TIMES_SYMBOL_UPGRADE = "assets/music/btm/btm_muti_upgrade", s.TIMES_MOVING = "assets/music/btm/btm_muti_total", s.TOTAL_TIMES_UPGRADE = "assets/music/btm/btm_totalTimes_upgrade", s.TRANSITION = "assets/music/btm/btm_transitions", s.SCORE = "assets/music/btm/btm_score", s.SCORE_PLUS = "assets/music/btm/btm_score_plus", s.FIREWORKS = "assets/music/btm/btm_w_fireworks", s.COUNTING = "assets/music/btm/btm_counting", s.OPEN_FEATURE = "assets/music/btm/btm_open", s.CLOSE_FEATURE = "assets/music/btm/btm_close", s.JACKPOT_WIN = "assets/music/btm/btm_w_jp_line", s.JP_POPUP_IN_1 = "assets/music/btm/btm_w_jp_intro_1", s.JP_POPUP_IN_2 = "assets/music/btm/btm_w_jp_intro_2", s.JP_POPUP_LOOP_1 = "assets/music/btm/btm_w_jp_loop_1", s.JP_POPUP_LOOP_2 = "assets/music/btm/btm_w_jp_loop_2", s.JP_MINI_VOCAL = "assets/music/btm/btm_w_jp_mini_vocal", s.JP_MINOR_VOCAL = "assets/music/btm/btm_w_jp_minor_vocal", s.JP_MAJOR_VOCAL = "assets/music/btm/btm_w_major_vocal", s.JP_GRAND_VOCAL = "assets/music/btm/btm_w_grand_vocal", s.BIG_VOCAL = "assets/music/btm/btm_w_big_vocal", s.SUPER_VOCAL = "assets/music/btm/btm_w_super_vocal", s.MEGA_VOCAL = "assets/music/btm/btm_w_mega_vocal", s.ULTRA_VOCAL = "assets/music/btm/btm_w_ultra_vocal", s.LEGENDARY_VOCAL = "assets/music/btm/btm_w_legendary_vocal", s.TIMES_SPLIT_A = "assets/music/btm/btm_multi_split_A", s.TIMES_SPLIT_B = "assets/music/btm/btm_multi_split_B", s.TIMES_LOCK = "assets/music/btm/btm_multi_lock", s.TIMES_LOCK_LV1 = "assets/music/btm/btm_multi_lv1", s.TIMES_LOCK_LV2 = "assets/music/btm/btm_multi_lv2", s.TIMES_LOCK_LV3 = "assets/music/btm/btm_multi_lv3", s.SCATTER_WIN_16 = "assets/music/btm/btm_symbol_16_win", s.GOLDFREEGAME_IN = "assets/music/btm/btm_T_fg_in", s.GOLDFREEGAME_OUT = "assets/music/btm/btm_T_fg_out", s.WOMEN_FG_CHA_LV1 = "assets/music/btm/btm_fg_chA_lv1", s.WOMEN_FG_CHA_LV2 = "assets/music/btm/btm_fg_chA_lv2", s.WOMEN_FG_CHA_LV3 = "assets/music/btm/btm_fg_chA_lv3", s.GOLDEN_FG_SYMBOL_CHA_LV1 = "assets/music/btm/btm_sym_chA_lv1", s.GOLDEN_FG_SYMBOL_CHA_LV2 = "assets/music/btm/btm_sym_chA_lv2", s.GOLDEN_FG_SYMBOL_CHA_LV3 = "assets/music/btm/btm_sym_chA_lv3", s.MEN_FG_CHB_LV1 = "assets/music/btm/btm_fg_chB_lv1", s.MEN_FG_CHB_LV2 = "assets/music/btm/btm_fg_chB_lv2", s.MEN_FG_CHB_LV3 = "assets/music/btm/btm_fg_chB_lv3", s.GOLDEN_FG_SYMBOL_CHB_LV1 = "assets/music/btm/btm_sym_chB_lv1", s.GOLDEN_FG_SYMBOL_CHB_LV2 = "assets/music/btm/btm_sym_chB_lv2", s.GOLDEN_FG_SYMBOL_CHB_LV3 = "assets/music/btm/btm_sym_chB_lv3", s.SCATTER_SYMBOL_INTRO = "assets/music/btm/btm_T_fg_intro", s.WOMAN_FG_VOICE_LV1 = "assets/music/btm/btm_female_lv01", s.WOMAN_FG_VOICE_LV2 = "assets/music/btm/btm_female_lv02", s.WOMAN_FG_VOICE_LV3 = "assets/music/btm/btm_female_lv03", s.MEN_FG_VOICE_LV1 = "assets/music/btm/btm_male_lv01", s.MEN_FG_VOICE_LV2 = "assets/music/btm/btm_male_lv02", s.MEN_FG_VOICE_LV3 = "assets/music/btm/btm_male_lv03";
}(r || (r = __publish("EBTM", {})));
var f = function (s) {
  function _() {
    var t;
    (t = Reflect.construct(s, [], new.target || _) || this).turboMode = {
      animStagger: 0,
      speed: .16,
      characterFireSpeed: 2.5,
      fireBallSpeed: 3.2,
      totalTimesFireBallTime: .5
    }, t.normalMode = {
      animStagger: .03,
      speed: .23,
      characterFireSpeed: 1.4,
      fireBallSpeed: 1.85,
      totalTimesFireBallTime: .5
    }, t._isTurbo = !1, t.canQuickStop = !1, t.quickStopCount = 0, t.canQuickStopEarlySpin = !1, t.useProEffect = !1, t.stopOnBigwinPrize = !1, t.stopOnJpPrize = !0, t.stopOnFg = !0;
    var e = __dependency_8.default.getLanguageParam(),
      _ = __dependency_9.default.getViewModeParam();
    return t.data = {
      reelConfig: t.normalMode,
      filePaths: {
        symbolsSpriteFrame: "assets/texture/symbols/" + _,
        symbolsSpriteFrameBlur: "assets/texture/symbolsBlur/" + _,
        symbolPrefab: "prefabs/" + _ + "/Symbol",
        symbolsSkeletonData: "assets/spine/" + _ + "/symbol",
        winCashPrefab: "prefabs/" + _ + "/WinCash",
        fireBallPrefab: "prefabs/" + _ + "/Fireball",
        gameAlertsSkeletonData: "assets/spine/" + _ + "/prize",
        spinSkeleton: "assets/spine/" + _ + "/spin",
        common: "assets/texture/common/" + _,
        localeSpriteFrame: "assets/texture/locale/" + _ + "/" + e,
        font: "assets/font/" + _,
        timesMovingPrefab: "prefabs/" + _ + "/TimesMoving",
        blueTimesMovingPrefab: "prefabs/" + _ + "/BlueTimesMoving",
        purpleTimesMovingPrefab: "prefabs/" + _ + "/PurpleTimesMoving",
        transitionsSkeletonData: "assets/spine/" + _ + "/transition",
        buyFeatureBtnPrefab: "prefabs/" + _ + "/BuyFeatureButton",
        buyFeatureItemPrefab: "prefabs/" + _ + "/BuyFeatureItem",
        splitBlueTimesMovingPrefab: "prefabs/" + _ + "/Split",
        introSkeleton: "assets/spine/intro",
        testSpinDatas: "script/data/testSpin",
        testCloseSpinDatas: "script/data/testCloseSpin"
      },
      bigwinAutoCloseTime: 5,
      hasTimesSymbolsDelay: .35,
      nextSpinDelay: 0,
      symbolQuickInTime: .16,
      winAmountTime: 1.75,
      autoCloseTime: null
    }, t;
  }
  (0, __dependency_0.inheritsLoose)(_, s), _.Instance = function () {
    return this._instance || (this._instance = new _());
  };
  var i = _.prototype;
  return i.setData = function (s) {
    this.setIsTurbo(s.platform.player.settings.advancedSettings.turbo), __dependency_7.default.ins.originTurbo = s.platform.player.settings.advancedSettings.turbo;
    var t = __dependency_4.default.getData(),
      e = t.autoConfirmTime,
      _ = t.autoSpinInterval;
    this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = _, this.data.hasTimesSymbolsDelay = _, this.data.bigwinAutoCloseTime = s.engine.definition.prizeAutoNextDelay;
  }, i.setNewData = function (s) {
    this.setIsTurbo(s.platform.player.settings.advancedSettings.turbo), __dependency_7.default.ins.originTurbo = s.platform.player.settings.advancedSettings.turbo;
    var t = __dependency_4.default.getData(),
      e = t.autoConfirmTime,
      _ = t.autoSpinInterval;
    this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, this.data.autoCloseTime = e, this.data.nextSpinDelay = _, this.data.hasTimesSymbolsDelay = _, this.data.bigwinAutoCloseTime = s.engine.definition.prizeAutoNextDelay;
  }, i.sendSettingByTurbo = function () {
    var s = {
        turbo: __dependency_5.default.turbo
      },
      t = {
        turbo: this.isTurbo
      },
      e = __dependency_2.ObjectUtils.diffObjects(s, t);
    if (Object.keys(e).length > 0) {
      var _ = {
        type: "game",
        data: e
      };
      App.senderManager.get(__dependency_6.GameSender).setting(_);
    }
    __dependency_5.default.turbo = this.isTurbo;
  }, i.setIsTurbo = function (s, t) {
    void 0 === t && (t = !0), this._isTurbo = s, this.data.reelConfig = this.isTurbo ? this.turboMode : this.normalMode, t && this.sendSettingByTurbo();
  }, (0, __dependency_0.createClass)(_, [{
    key: "isTurbo",
    get: function () {
      return this._isTurbo;
    }
  }]), _;
}(__dependency_3.BaseModel);
f._instance = null;
__publish("default", f.Instance());
__dependency_1.cclegacy._RF.pop();
