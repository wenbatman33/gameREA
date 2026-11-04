// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameHandler.ts.js
// SHA256: 66b98a051ef128a8e5b3f681f3378935e57ae4f37339cb0da9eb1d91cab0ce0c
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-AutoPlayModel";
import * as __dependency_3 from "./framework-SlotFrameworkEvent";
import * as __dependency_4 from "./framework-GameHandlerBase";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-GameEvent";
import * as __dependency_7 from "./g1005-GameSender";
import * as __dependency_8 from "./g1005-GameService";
var __export_0;
export { __export_0 as GameHandler };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameHandler":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
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
  void 0, void 0;
})(__dependency_5);
(function (e) {
  void 0;
})(__dependency_6);
(function (e) {
  void 0;
})(__dependency_7);
(function (e) {
  void 0;
})(__dependency_8);
__dependency_1.cclegacy._RF.push({}, "99d2d5XLeZNFZU0pol7HdFF", "GameHandler", void 0), __publish("GameHandler", function (e) {
  function a() {
    return Reflect.construct(e, arguments, new.target || a) || this;
  }
  return (0, __dependency_0.inheritsLoose)(a, e), a.prototype.addListeners = function () {
    var e = this;
    this.on(__dependency_3.SlotFrameworkEvent.SEND_SPIN_REQUEST, function (e) {
      var n = null == e ? void 0 : e.data,
        t = n.spinId,
        a = n.stakeVO,
        s = n.test,
        o = n.updateStake;
      App.senderManager.get(__dependency_7.GameSender).spin(a, t, s, o);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_EARLY_SPIN_REQUEST, function (n) {
      var t = null == n ? void 0 : n.data,
        a = t.spinId,
        r = t.stakeVO,
        E = t.test,
        S = t.forceClose;
      __dependency_2.default.active && __dependency_5.default.ins.isOpenEarlyFlag && (Log.w("SEND_OUT_EARLY_SPIN_REQUEST::::::::"), __dependency_5.default.ins.earlyData = null, __dependency_5.default.ins.delayEarlyTween = (0, __dependency_1.tween)(e).delay(.4).call(function () {
        __dependency_5.default.ins.isSendOutEarlyFlag = !0, __dependency_5.default.ins.isSendClose = !0, App.senderManager.get(__dependency_7.GameSender).earlySpin(r, a, E, !1, S);
      }).start());
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_CLOSE_REQUEST, function (e) {
      var n = e.data;
      __dependency_5.default.ins.isSendClose = !0, App.senderManager.get(__dependency_7.GameSender).closeSpin(n);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_EARLY_CLOSE_REQUEST, function (e) {
      var n = e.data.spinId;
      App.senderManager.get(__dependency_7.GameSender).earlyCloseSpin(n, e.complete);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_UPDATE_AVATAR_REQUEST, function (e) {
      var n = e.avatarId;
      App.senderManager.get(__dependency_7.GameSender).updateAvatar(n);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).getSlotTablePage(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_SLOT_TABLES_DATA_REQUEST, function () {
      App.senderManager.get(__dependency_7.GameSender).getSlotTableData();
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_SLOT_TABLE_DETAIL_REQUEST, function (e) {
      var n = e.roomId;
      App.senderManager.get(__dependency_7.GameSender).getSlotTableDetail({
        roomId: n
      });
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_CHANGE_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).changeSlotTable(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_LOCK_SLOT_TABLE_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).lockSlotTable(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_SETTING_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).setting(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_BET_RECORDS_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).getBetRecords(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_UPDATE_DISPLAYNAME_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).updateDisplayName(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_HISTORY_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).getHistoryRecords(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_RANKING_LIST_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).getSlotBetRanksList(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.SEND_GET_RANKING_REPLAY_REQUEST, function (e) {
      App.senderManager.get(__dependency_7.GameSender).getSlotBetRanksReplay(e);
    }), this.on(__dependency_3.SlotFrameworkEvent.REPLAY_BACK_TO_GAME, function () {
      __dependency_5.default.ins.restoreCurrentGameData(), dispatch(__dependency_6.GameEvent.RESET_AND_OPEN_GAME_VIEW, {
        data: __dependency_5.EInitName.INIT_GAME
      });
    });
  }, (0, __dependency_0.createClass)(a, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(__dependency_8.GameService);
    }
  }]), a;
}(__dependency_4.GameHandlerBase)).module = __dependency_5.default.module, __dependency_1.cclegacy._RF.pop();
