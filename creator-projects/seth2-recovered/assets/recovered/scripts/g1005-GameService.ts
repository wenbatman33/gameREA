// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameService.ts.js
// SHA256: e7cc8a0ca0628227e6390333210f91caf86eb37f1b73e1fc890bc559967130fb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-res-type";
import * as __dependency_3 from "./framework-SlotFrameworkData";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./framework-GameServiceBase";
import * as __dependency_6 from "./g1005-GameData";
import * as __dependency_7 from "./framework-PlatformModel";
var __export_0;
export { __export_0 as GameService };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameService":
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
__dependency_1.cclegacy._RF.push({}, "46b28pe9U9I5ZdY9xfVIQ+3", "GameService", void 0), __publish("GameService", function (t) {
  function n() {
    return Reflect.construct(t, arguments, new.target || n) || this;
  }
  return (0, __dependency_0.inheritsLoose)(n, t), n.prototype.addSocketListeners = function () {
    var t = this;
    this.on("echo", function (t) {}), this.on("warning", function (t) {
      dispatch(__dependency_4.SlotFrameworkEvent.WARN_RESPONSE, t);
    }), this.on("error", function (t) {
      dispatch(__dependency_4.SlotFrameworkEvent.ERROR_RESPONSE, t);
    }), this.on("notify", function (e) {
      switch (e.type) {
        case __dependency_2.ENotifyTypes.BALANCE:
          __dependency_7.default.updateBalance(e.balance, e.updatedAt), dispatch(__dependency_4.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
            data: {
              balance: __dependency_7.default.amount
            }
          });
          break;
        case __dependency_2.ENotifyTypes.JACKPOT_UPDATE:
          t.slotData.tempJpPools = {
            "jp-mini": e.data["jp-mini"],
            "jp-minor": e.data["jp-minor"],
            "jp-major": e.data["jp-major"],
            "jp-grand": e.data["jp-grand"]
          }, dispatch(__dependency_4.SlotFrameworkEvent.NOTIFY_JACKPOT_RESPONSE, {
            data: e
          });
          break;
        case __dependency_2.ENotifyTypes.SYSTEM:
          dispatch(__dependency_4.SlotFrameworkEvent.NOTIFY_SYSTEM_RESPONSE, {
            data: e
          });
          break;
        case __dependency_2.ENotifyTypes.JACKPOT_UPDATE:
        case __dependency_2.ENotifyTypes.BIG_WIN:
        case __dependency_2.ENotifyTypes.SUPER_WIN:
        case __dependency_2.ENotifyTypes.MEGA_WIN:
        case __dependency_2.ENotifyTypes.ULTRA_WIN:
        case __dependency_2.ENotifyTypes.LEGENDARY_WIN:
        case __dependency_2.ENotifyTypes.JP_MINI:
        case __dependency_2.ENotifyTypes.JP_MINOR:
        case __dependency_2.ENotifyTypes.JP_MAJOR:
        case __dependency_2.ENotifyTypes.JP_GRAND:
          dispatch(__dependency_4.SlotFrameworkEvent.NOTIFY_PRIZE_RESPONSE, {
            data: e
          });
      }
    }), this.on("slotTableUpdated", function (t) {
      dispatch(__dependency_4.SlotFrameworkEvent.SLOT_TABLES_UPDATED_RESPONSE, t);
    });
  }, (0, __dependency_0.createClass)(n, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_3.default);
    }
  }]), n;
}(__dependency_5.GameServiceBase)).module = __dependency_6.default.module, __dependency_1.cclegacy._RF.pop();
