// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-res-type2.ts.js
// SHA256: f60acb94606601ab04b815a6e7f8e9f84dc8bcc3e6fbe17cc855ccd6eaf984dd
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as ENotifyExtraInfoTypes };
var __export_1;
export { __export_1 as ENotifyTypes };
var __export_2;
export { __export_2 as ENotifyWinTypes };
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
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0xe7dd35) {
  void 0;
})(__dependency_0);
var _0x23d9d9, _0x1c0f19, _0x390917;
__publish({
  'ENotifyExtraInfoTypes': void 0x0,
  'ENotifyTypes': void 0x0,
  'ENotifyWinTypes': void 0x0
}), __dependency_0["cclegacy"]["_RF"]["push"]({}, "ad0b8hdxHZDbIjiYYegFJY/", "res-type", void 0x0), function (_0xa260c9) {
  _0xa260c9["JACKPOT_UPDATE"] = "jackpotUpdate", _0xa260c9['SYSTEM'] = "system", _0xa260c9["BIG_WIN"] = "bigWin", _0xa260c9['SUPER_WIN'] = "superWin", _0xa260c9["MEGA_WIN"] = "megaWin", _0xa260c9["ULTRA_WIN"] = 'ultraWin', _0xa260c9["LEGENDARY_WIN"] = "legendaryWin", _0xa260c9["JP_MINI"] = "jp-mini", _0xa260c9["JP_MINOR"] = "jp-minor", _0xa260c9["JP_MAJOR"] = "jp-major", _0xa260c9["JP_GRAND"] = 'jp-grand';
}(_0x23d9d9 || (_0x23d9d9 = __publish("ENotifyTypes", {}))), function (_0x378669) {
  _0x378669["BIG_WIN"] = "bigWin", _0x378669['SUPER_WIN'] = "superWin", _0x378669['MEGA_WIN'] = "megaWin", _0x378669["ULTRA_WIN"] = 'ultraWin', _0x378669["LEGENDARY_WIN"] = "legendaryWin", _0x378669['JP_MINI'] = "jp-mini", _0x378669['JP_MINOR'] = "jp-minor", _0x378669["JP_MAJOR"] = "jp-major", _0x378669["JP_GRAND"] = "jp-grand", _0x378669["NO_WIN_REWARD"] = 'noWinReward';
}(_0x1c0f19 || (_0x1c0f19 = __publish("ENotifyWinTypes", {}))), function (_0x40aaec) {
  _0x40aaec["ELIXIR_FURNACE"] = 'elixirFurnace', _0x40aaec['LUCKY_WEALTH'] = "luckyWealth", _0x40aaec["FORTUNE_LANDING"] = "fortuneLanding", _0x40aaec["LUCKY_WEALTH_2"] = "luckyWealth2";
}(_0x390917 || (_0x390917 = __publish("ENotifyExtraInfoTypes", {}))), __dependency_0["cclegacy"]['_RF']["pop"]();
