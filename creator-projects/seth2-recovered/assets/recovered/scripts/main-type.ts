// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-type.ts.js
// SHA256: 7be97f626f43c713afe9e741826727c8dc1160c0e51c170e7549ad715581a603
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
(function (e) {
  void 0;
})(__dependency_0);
var E, S, o, a, T, n;
__publish({
  EBtnStatus: void 0,
  EDebugLogLevel: void 0,
  ELocalStorageKey: void 0,
  ESocketRequestName: void 0,
  ESpinStatus: void 0,
  ETableStatus: void 0
}), __dependency_0.cclegacy._RF.push({}, "ae65bIGW31PW4/KjN579+hd", "type", void 0), function (e) {
  e.NORMAL = "normal", e.PRESSED = "pressed", e.HOVER = "hover", e.DISABLED = "disabled";
}(E || (E = __publish("EBtnStatus", {}))), function (e) {
  e.IDLE = "idle", e.SPINING = "spining";
}(S || (S = __publish("ESpinStatus", {}))), function (e) {
  e.INITIAL = "initial", e.SPIN = "spin", e.CLOSE_SPIN = "closeSpin", e.UPDATE_SETTINGS = "updateSettings", e.GET_BET_RECORDS = "getBetRecords", e.GET_SLOT_TABLES = "getSlotTables", e.GET_SLOT_TABLE_DETAIL = "getSlotTableDetail", e.UPDATE_SLOT_TABLE = "updateSlotTable", e.LOCK_SLOT_TABLE = "lockSlotTable", e.BUY_FEATURE = "buyFeature", e.UPDATE_AVATAR = "updateAvatar", e.UPDATE_DISPLAYNAME = "updateDisplayName", e.GET_USER_REPORT = "getUserReport", e.REPLAY = "replay", e.EXTENSION = "extension", e.GET_SLOT_BET_RANKS_LIST = "slotBetranks", e.GET_SLOT_BET_RANKS_REPLAY = "slotBetranks";
}(o || (o = __publish("ESocketRequestName", {}))), function (e) {
  e.EMPTY = "Empty", e.FULL = "Full", e.LOCKED = "Locked", e.CLOSE = "Close";
}(a || (a = __publish("ETableStatus", {}))), function (e) {
  e.DEBUG = "debug", e.WARN = "warn", e.ERROR = "error", e.INFO = "info";
}(T || (T = __publish("EDebugLogLevel", {}))), n || (n = __publish("ELocalStorageKey", {})), __dependency_0.cclegacy._RF.pop();
