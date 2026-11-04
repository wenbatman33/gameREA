// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-res-type.ts.js
// SHA256: 83babf983c30c6fcba6065042302542953533770c7042e6d1285df050c85d70b
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as ENotifyExtraInfoTypes };
var __export_1;
export { __export_1 as ENotifyTypes };
var __export_2;
export { __export_2 as ENotifyWinTypes };
var __export_3;
export { __export_3 as __runtimeStub };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ENotifyExtraInfoTypes":
      __export_0 = value;
      break;
    case "ENotifyTypes":
      __export_1 = value;
      break;
    case "ENotifyWinTypes":
      __export_2 = value;
      break;
    case "__runtimeStub":
      __export_3 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
var l, i, t;
__publish({
  ENotifyExtraInfoTypes: void 0,
  ENotifyTypes: void 0,
  ENotifyWinTypes: void 0
}), __dependency_0.cclegacy._RF.push({}, "bf54bt5vtFAsZAGNYWDPO+O", "res-type", void 0), function (e) {
  e.BALANCE = "balance", e.JACKPOT_UPDATE = "jackpotUpdate", e.SYSTEM = "system", e.BIG_WIN = "bigWin", e.SUPER_WIN = "superWin", e.MEGA_WIN = "megaWin", e.ULTRA_WIN = "ultraWin", e.LEGENDARY_WIN = "legendaryWin", e.JP_MINI = "jp-mini", e.JP_MINOR = "jp-minor", e.JP_MAJOR = "jp-major", e.JP_GRAND = "jp-grand";
}(l || (l = __publish("ENotifyTypes", {}))), function (e) {
  e.BIG_WIN = "bigWin", e.SUPER_WIN = "superWin", e.MEGA_WIN = "megaWin", e.ULTRA_WIN = "ultraWin", e.LEGENDARY_WIN = "legendaryWin", e.JP_MINI = "jp-mini", e.JP_MINOR = "jp-minor", e.JP_MAJOR = "jp-major", e.JP_GRAND = "jp-grand", e.NO_WIN_REWARD = "noWinReward";
}(i || (i = __publish("ENotifyWinTypes", {}))), function (e) {
  e.ELIXIR_FURNACE = "elixirFurnace", e.LUCKY_WEALTH = "luckyWealth", e.FORTUNE_LANDING = "fortuneLanding", e.LUCKY_WEALTH_2 = "luckyWealth2";
}(t || (t = __publish("ENotifyExtraInfoTypes", {})));
__publish("__runtimeStub", {
  IInitialRes: null,
  INewInitialRes: null,
  ISpinRes: null,
  IPlatformSpin: null,
  INewSpinRes: null,
  ICloseSpinRes: null,
  IResBase: null,
  IBetRecordsRes: null,
  IHistoryRecordRes: null,
  HistoryRecordItem: null,
  IRankingRes: null,
  ISlotTablesRes: null,
  IUpdateSlotTableRes: null,
  ILockSlotTableRes: null,
  IUpdateAvatarRes: null,
  IUpdateDisplayNameRes: null,
  ENotifyTypes: {},
  ENotifyWinTypes: {},
  ENotifyExtraInfoTypes: {},
  INotifyJackpotUpdate: null,
  INotifyRes: null,
  ISlotTablesUpdatedRes: null
});
__dependency_0.cclegacy._RF.pop();
