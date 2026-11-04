// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-type2.ts.js
// SHA256: e330c688f347c76723d1d4e16e9633605d2ddff0b7eeb5949f8b531fa726ab9a
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EBtnStatus };
var __export_1;
export { __export_1 as EDebugLogLevel };
var __export_2;
export { __export_2 as ELocalStorageKey };
var __export_3;
export { __export_3 as ESocketRequestName };
var __export_4;
export { __export_4 as ESpinStatus };
var __export_5;
export { __export_5 as ETableStatus };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBtnStatus":
      __export_0 = value;
      break;
    case "EDebugLogLevel":
      __export_1 = value;
      break;
    case "ELocalStorageKey":
      __export_2 = value;
      break;
    case "ESocketRequestName":
      __export_3 = value;
      break;
    case "ESpinStatus":
      __export_4 = value;
      break;
    case "ETableStatus":
      __export_5 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x46446a) {
  void 0;
})(__dependency_0);
var _0x206816, _0x20c972, _0x55a647, _0x523b92, _0x557591, _0x43557f;
__publish({
  'EBtnStatus': void 0x0,
  'EDebugLogLevel': void 0x0,
  'ELocalStorageKey': void 0x0,
  'ESocketRequestName': void 0x0,
  'ESpinStatus': void 0x0,
  'ETableStatus': void 0x0
}), __dependency_0["cclegacy"]['_RF']["push"]({}, 'f1c07LKLaRDxYTWfikykoje', 'type', void 0x0), function (_0x4e4581) {
  _0x4e4581["NORMAL"] = "normal", _0x4e4581["PRESSED"] = 'pressed', _0x4e4581['HOVER'] = "hover", _0x4e4581['DISABLED'] = "disabled";
}(_0x206816 || (_0x206816 = __publish("EBtnStatus", {}))), function (_0x5a6cdc) {
  _0x5a6cdc['IDLE'] = "idle", _0x5a6cdc["SPINING"] = 'spining';
}(_0x20c972 || (_0x20c972 = __publish('ESpinStatus', {}))), function (_0x19dd5f) {
  _0x19dd5f["INITIAL"] = 'initial', _0x19dd5f["SPIN"] = 'spin', _0x19dd5f["CLOSE_SPIN"] = "closeSpin", _0x19dd5f["UPDATE_SETTINGS"] = 'updateSettings', _0x19dd5f["GET_BET_RECORDS"] = 'getBetRecords', _0x19dd5f['GET_SLOT_TABLES'] = 'getSlotTables', _0x19dd5f["GET_SLOT_TABLE_DETAIL"] = "getSlotTableDetail", _0x19dd5f["UPDATE_SLOT_TABLE"] = "updateSlotTable", _0x19dd5f["LOCK_SLOT_TABLE"] = 'lockSlotTable', _0x19dd5f['BUY_FEATURE'] = "buyFeature", _0x19dd5f["UPDATE_AVATAR"] = "updateAvatar", _0x19dd5f["UPDATE_DISPLAYNAME"] = "updateDisplayName", _0x19dd5f["GET_USER_REPORT"] = 'getUserReport', _0x19dd5f["REPLAY"] = "replay", _0x19dd5f['EXTENSION'] = "extension", _0x19dd5f["GET_SLOT_BET_RANKS_LIST"] = "slotBetranks", _0x19dd5f['GET_SLOT_BET_RANKS_REPLAY'] = 'slotBetranks';
}(_0x55a647 || (_0x55a647 = __publish("ESocketRequestName", {}))), function (_0x443c2d) {
  _0x443c2d["EMPTY"] = "Empty", _0x443c2d["FULL"] = "Full", _0x443c2d["LOCKED"] = 'Locked', _0x443c2d["CLOSE"] = "Close";
}(_0x523b92 || (_0x523b92 = __publish('ETableStatus', {}))), function (_0x28af4e) {
  _0x28af4e["DEBUG"] = "debug", _0x28af4e['WARN'] = 'warn', _0x28af4e["ERROR"] = 'error', _0x28af4e["INFO"] = "info";
}(_0x557591 || (_0x557591 = __publish("EDebugLogLevel", {}))), _0x43557f || (_0x43557f = __publish('ELocalStorageKey', {})), __dependency_0["cclegacy"]["_RF"]["pop"]();
