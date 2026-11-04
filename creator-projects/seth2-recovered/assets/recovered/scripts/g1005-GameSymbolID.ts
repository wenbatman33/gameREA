// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameSymbolID.ts.js
// SHA256: e257dcf719996e70c7381b278733fcd34e165c0b073694e495f3c712d97ecd2a
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-UrlUtils";
var __export_0;
export { __export_0 as EBackendSymbolID };
var __export_1;
export { __export_1 as EReelStatus };
var __export_2;
export { __export_2 as ESymbolAnimType };
var __export_3;
export { __export_3 as ESymbolStatus };
var __export_4;
export { __export_4 as GameSymbolID };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBackendSymbolID":
      __export_0 = value;
      break;
    case "EReelStatus":
      __export_1 = value;
      break;
    case "ESymbolAnimType":
      __export_2 = value;
      break;
    case "ESymbolStatus":
      __export_3 = value;
      break;
    case "GameSymbolID":
      __export_4 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (M) {
  void 0, void 0;
})(__dependency_0);
(function (M) {
  void 0;
})(__dependency_1);
var e, A, _, s;
__publish({
  EBackendSymbolID: void 0,
  EReelStatus: void 0,
  ESymbolAnimType: void 0,
  ESymbolStatus: void 0
}), __dependency_0.cclegacy._RF.push({}, "ed54f++FrZK6LMrYcjegPaG", "GameSymbolID", void 0), function (M) {
  M[M.BLUR = 0] = "BLUR", M[M.STATIC = 1] = "STATIC", M[M.ANIM = 2] = "ANIM", M[M.WIN = 3] = "WIN";
}(e || (e = __publish("ESymbolStatus", {}))), function (M) {
  M.LOOP = "loop", M.WIN = "win", M.IN = "in", M.OUT = "out", M.TEASE = "tease", M.FUNCTION = "function", M.LV1 = "lv1", M.LV2 = "lv2", M.LV3 = "lv3", M.HIT = "hit";
}(A || (A = __publish("ESymbolAnimType", {}))), function (M) {
  M.SPINNING = "SPINNING", M.STOPPING = "STOPPING", M.STATIC = "STATIC";
}(_ || (_ = __publish("EReelStatus", {}))), function (M) {
  M[M.EYE = 1] = "EYE", M[M.SNAKE = 2] = "SNAKE", M[M.BOW = 3] = "BOW", M[M.MACHETE = 4] = "MACHETE", M[M.ORANGE_GEM = 5] = "ORANGE_GEM", M[M.RED_GEM = 6] = "RED_GEM", M[M.PURPLE_GEM = 7] = "PURPLE_GEM", M[M.BLUE_GEM = 8] = "BLUE_GEM", M[M.GREEN_GEM = 9] = "GREEN_GEM", M[M.T1 = 10] = "T1", M[M.T2 = 11] = "T2", M[M.T3 = 12] = "T3", M[M.T4 = 13] = "T4", M[M.JACKPOT = 14] = "JACKPOT", M[M.SCATTER = 15] = "SCATTER", M[M.GOLD_SCATTER = 16] = "GOLD_SCATTER", M[M.MEN_TOTEM = 17] = "MEN_TOTEM", M[M.WOMEN_TOTEM = 18] = "WOMEN_TOTEM";
}(s || (s = __publish("EBackendSymbolID", {})));
var T = __publish("GameSymbolID", function () {
  function M() {}
  return M.init = function () {
    this.mapSymbolAnims(), this.makeSymbolPosConfig(__dependency_1.default.getViewModeParam());
  }, M.mapSymbolAnims = function () {
    var S = A.FUNCTION,
      E = A.WIN,
      t = A.IN,
      e = A.LOOP;
    M.SYMBOL_ANIMS_MAP.set(s.EYE, [E]), M.SYMBOL_ANIMS_MAP.set(s.SNAKE, [E]), M.SYMBOL_ANIMS_MAP.set(s.BOW, [E]), M.SYMBOL_ANIMS_MAP.set(s.MACHETE, [E]), M.SYMBOL_ANIMS_MAP.set(s.ORANGE_GEM, [E]), M.SYMBOL_ANIMS_MAP.set(s.RED_GEM, [E]), M.SYMBOL_ANIMS_MAP.set(s.PURPLE_GEM, [E]), M.SYMBOL_ANIMS_MAP.set(s.BLUE_GEM, [E]), M.SYMBOL_ANIMS_MAP.set(s.GREEN_GEM, [E]), M.SYMBOL_ANIMS_MAP.set(s.T1, [S]), M.SYMBOL_ANIMS_MAP.set(s.T2, [S]), M.SYMBOL_ANIMS_MAP.set(s.T3, [S]), M.SYMBOL_ANIMS_MAP.set(s.T4, [S]), M.SYMBOL_ANIMS_MAP.set(s.JACKPOT, [t, e, E]), M.SYMBOL_ANIMS_MAP.set(s.SCATTER, [t, E]);
  }, M.makeSymbolPosConfig = function (M) {
    void 0 === M && (M = "landscape");
    for (var S = "landscape" == M ? 375 : 353, t = "landscape" == M ? 250 : 235, e = "landscape" == M ? this.SYMBOL_WIDTH : 117, A = "landscape" == M ? this.SYMBOL_HIGH : .94 * this.SYMBOL_HIGH, _ = "landscape" == M ? 64 : 60, s = "landscape" == M ? -54 : -51, T = 0; T < this.TOTAL_SYMBOL; T++) {
      var n = new __dependency_0.Vec3(0, 0);
      n.x = _ + T % this.ROW * (e + 0) - S, n.y = s + Math.floor(T / this.ROW) * -(A + 0) + t, this.symbolPosConfig.set(T, n);
    }
  }, M;
}());
T.ROW = 6, T.COL = 5, T.TOTAL_SYMBOL = T.ROW * T.COL, T.SYMBOL_WIDTH = 124, T.SYMBOL_HIGH = 98, T.symbolPosConfig = new Map(), T.SYMBOL_ANIMS_MAP = new Map(), T.symbolTextures = [], T.symbolSpriteMap = new Map(), T.symbolAnimMap = new Map(), __dependency_0.cclegacy._RF.pop();
