// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameSender.ts.js
// SHA256: 954bb34facbf9f618ecb6e79a8addb4b4bec5b4fa020a26a1a1531f459e47377
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-ServerModel";
import * as __dependency_4 from "./main-CmmUtils";
import * as __dependency_5 from "./main-Http";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
import * as __dependency_7 from "./g1005-GameService";
import * as __dependency_8 from "./framework-type2";
import * as __dependency_9 from "./main-Config";
import * as __dependency_10 from "./framework-GameSenderBase";
import * as __dependency_11 from "./framework-DefinitionModel";
import * as __dependency_12 from "./framework-GameStateModel";
import * as __dependency_13 from "./framework-InitialModel";
import * as __dependency_14 from "./framework-PlatformModel";
import * as __dependency_15 from "./framework-SettingsModel";
import * as __dependency_16 from "./framework-SlotTableModel";
import * as __dependency_17 from "./framework-SocketModel";
import * as __dependency_18 from "./framework-ReplayModel";
import * as __dependency_19 from "./framework-UrlUtils2";
import * as __dependency_20 from "./g1005-GameData";
import * as __dependency_21 from "./g1005-GameConfigModel";
import * as __dependency_22 from "./g1005-GameEvent";
import * as __dependency_23 from "./framework-SlotFrameworkData";
import * as __dependency_24 from "./framework-NoTouchingView";
var __export_0;
export { __export_0 as GameSender };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameSender":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0, void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
(function (e) {
  void 0;
})(__dependency_5);
(function (e) {
  void 0;
})(__dependency_6);
(function (e) {
  void 0;
})(__dependency_7);
(function (e) {
  void 0, void 0, void 0;
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
(function (e) {
  void 0;
})(__dependency_15);
(function (e) {
  void 0;
})(__dependency_16);
(function (e) {
  void 0;
})(__dependency_17);
(function (e) {
  void 0, void 0;
})(__dependency_18);
(function (e) {
  void 0;
})(__dependency_19);
(function (e) {
  void 0;
})(__dependency_20);
(function (e) {
  void 0;
})(__dependency_21);
(function (e) {
  void 0;
})(__dependency_22);
(function (e) {
  void 0;
})(__dependency_23);
(function (e) {
  void 0;
})(__dependency_24);
__dependency_1.cclegacy._RF.push({}, "fbe8fGj+GJDzq2bvbdH7aMn", "GameSender", void 0), __publish("GameSender", function (e) {
  function r() {
    return Reflect.construct(e, arguments, new.target || r) || this;
  }
  (0, __dependency_0.inheritsLoose)(r, e);
  var h = r.prototype;
  return h.initial = function () {
    var e = this;
    if (__dependency_3.default.mode !== __dependency_3.EServerMode.STATIC) {
      var t = {
        token: __dependency_17.default.currentToken,
        clientType: __dependency_4.CmmUtils.getClientType(),
        deviceInfo: {
          browser: {
            name: __dependency_1.sys.browserType,
            version: __dependency_1.sys.browserVersion
          },
          os: {
            name: __dependency_1.sys.os,
            version: __dependency_1.sys.osVersion,
            versionName: __dependency_1.sys.osMainVersion
          },
          platform: {
            type: __dependency_1.sys.platform
          },
          engine: {
            name: "cocos creator 3.7.2"
          }
        }
      };
      return new Promise(function (a, s) {
        e.send("initial", t, function (t) {
          if (t.status == __dependency_5.Http.ServerStatus.SUCCESS) {
            if (t.code) return Log.e("NETWORK_ERROR: ", t), void e.showAlert(t.message, {
              needCloseAlert: !1,
              code: null == t ? void 0 : t.code
            });
            try {
              e.setToken(t), __dependency_11.default.setData(t.engine.definition), __dependency_12.default.setData(t.engine.gameState), __dependency_14.default.setData(t.platform), __dependency_15.default.setData(t.platform.player.settings), __dependency_13.default.setData(t), dispatch(__dependency_6.SlotFrameworkEvent.INIT_RESPONSE, t), a();
            } catch (e) {
              var s = {
                title: App.getLanguage("alertHint", [], __dependency_2.EBundles[__dependency_2.EBundles.slotFramework]),
                text: "initial data error",
                bbrCb: function () {},
                needCloseAlert: !1,
                code: e
              };
              App.gameAlert.show(s);
            }
          } else Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
            needCloseAlert: !1,
            code: null == t ? void 0 : t.code
          });
        });
      });
    }
  }, h.spin = function () {
    var e = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function e(t, s, n, r) {
      var i,
        l,
        c,
        E,
        T,
        h = this;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (!n) {
              e.next = 5;
              break;
            }
            return i = n.type, (l = __dependency_21.default.getData().filePaths.testSpinDatas) && (c = App.cache.get(__dependency_20.default.module, l).data) && c.length > 0 && (__dependency_3.default.mode = __dependency_3.EServerMode.STATIC, Log.e("fake spin data:::::::", c[i].json), E = c[i].json, __dependency_12.default.setData(E.engine.gameState), __dependency_14.default.amount = E.platform.player.balance.amount, dispatch(__dependency_6.SlotFrameworkEvent.SPIN_RESPONSE, E)), e.abrupt("return");
          case 5:
            T = (0, __dependency_0.extends)({
              request: __dependency_8.ESocketRequestName.SPIN
            }, t, {
              updateStake: r
            }, s && {
              spinId: s
            }, {
              pools: {
                "jp-mini": this.slotData.tempJpPools["jp-mini"],
                "jp-minor": this.slotData.tempJpPools["jp-minor"],
                "jp-major": this.slotData.tempJpPools["jp-major"],
                "jp-grand": this.slotData.tempJpPools["jp-grand"]
              }
            }), this.send(T.request, T, function (e) {
              if (e.status == __dependency_5.Http.ServerStatus.SUCCESS) {
                h.setToken(e), __dependency_12.default.setData(e.engine.gameState);
                var t = e.platform.player.balance.amount;
                if (e.platform.player.balance.updatedAt) {
                  var a = e.platform.player.balance.updatedAt;
                  __dependency_14.default.updateBalance(t, a);
                } else __dependency_14.default.amount = e.platform.player.balance.amount;
                dispatch(__dependency_6.SlotFrameworkEvent.SPIN_RESPONSE, e);
              } else if (e.status == __dependency_5.Http.ServerStatus.ERROR_SPIN_ONE_MORE) {
                var n, o, r, i;
                h.setToken(e), dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_SPIN_STATUS, {
                  data: __dependency_8.ESpinStatus.IDLE
                }), Log.e("後端->前端 多打了一次spin"), h.debugLog({
                  id: s || __dependency_20.default.ins.getData().gameState.spinId,
                  level: __dependency_8.EDebugLogLevel.ERROR,
                  message: "後端->前端 多打了一次spin",
                  data: {
                    requestVO: T,
                    currentData: null == (n = __dependency_20.default.ins) || null == (o = n.getData()) ? void 0 : o.gameState,
                    preData: null == (r = __dependency_20.default.ins) || null == (i = r.preData) ? void 0 : i.gameState
                  }
                });
              } else Log.e("NETWORK_ERROR: ", e), h.showAlert(e.message, {
                needCloseAlert: !1,
                code: e.code
              });
            });
          case 7:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, a, s, n) {
      return e.apply(this, arguments);
    };
  }(), h.earlySpin = function (e, t, s, n, o) {
    var r = this;
    if (__dependency_3.default.mode !== __dependency_3.EServerMode.STATIC) {
      var i = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.SPIN
      }, e, {
        updateStake: n
      }, t && {
        spinId: t
      }, {
        forceClose: o,
        pools: {
          "jp-mini": this.slotData.tempJpPools["jp-mini"],
          "jp-minor": this.slotData.tempJpPools["jp-minor"],
          "jp-major": this.slotData.tempJpPools["jp-major"],
          "jp-grand": this.slotData.tempJpPools["jp-grand"]
        }
      });
      Log.w("early request::::::::::", i, o), this.send(i.request, i, function (e) {
        e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (r.setToken(e), dispatch(__dependency_6.SlotFrameworkEvent.EARLY_SPIN_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), r.showAlert(e.message, {
          needCloseAlert: !1,
          code: e.code
        }));
      });
    }
  }, h.closeSpin = function (e) {
    var t = this;
    if (__dependency_3.default.mode != __dependency_3.EServerMode.STATIC) {
      var a = {
        request: __dependency_8.ESocketRequestName.CLOSE_SPIN,
        spinId: e
      };
      this.send(a.request, a, function (e) {
        if (e.status == __dependency_5.Http.ServerStatus.SUCCESS) {
          t.setToken(e);
          var a = e.platform.player.balance.amount;
          if (e.platform.player.balance.updatedAt) {
            var s = e.platform.player.balance.updatedAt;
            __dependency_14.default.updateBalance(a, s);
          } else __dependency_14.default.amount = e.platform.player.balance.amount;
          dispatch(__dependency_6.SlotFrameworkEvent.CLOSE_RESPONSE, e);
        } else Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
          needCloseAlert: !1,
          code: e.code
        });
      });
    } else {
      var s = __dependency_21.default.getData().filePaths.testCloseSpinDatas;
      if (s) {
        var n = App.cache.get(__dependency_20.default.module, s).data;
        if (n && n.length > 0) {
          var o = n[0].json;
          __dependency_14.default.amount = o.platform.player.balance.amount, dispatch(__dependency_6.SlotFrameworkEvent.CLOSE_RESPONSE, o), __dependency_3.default.mode = __dependency_3.EServerMode.ONLINE;
        }
      }
    }
  }, h.earlyCloseSpin = function (e, t) {
    var a = this,
      s = {
        request: __dependency_8.ESocketRequestName.CLOSE_SPIN,
        spinId: e
      };
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (a.setToken(e), t && t(), dispatch(__dependency_6.SlotFrameworkEvent.EARLY_CLOSE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), a.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.setting = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.UPDATE_SETTINGS
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? t.setToken(e) : Log.e("update setting NETWORK_ERROR: ", e);
    });
  }, h.getBetRecords = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.GET_BET_RECORDS
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_6.SlotFrameworkEvent.BET_RECORDS_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.getHistoryRecords = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.GET_USER_REPORT
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_6.SlotFrameworkEvent.GET_HISTORY_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.getSlotTablePage = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (t.setToken(e), __dependency_16.default.setData(e), dispatch(__dependency_6.SlotFrameworkEvent.SLOT_TABLE_PAGE_DATA_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.getSlotTableData = function () {
    var e = this,
      t = {
        request: __dependency_8.ESocketRequestName.GET_SLOT_TABLES
      };
    this.send(t.request, t, function (t) {
      t.status == __dependency_5.Http.ServerStatus.SUCCESS ? (e.setToken(t), __dependency_16.default.setData(t), dispatch(__dependency_6.SlotFrameworkEvent.SLOT_TABLES_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
        needCloseAlert: !1,
        code: t.code
      }));
    });
  }, h.getSlotTable = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.GET_SLOT_TABLES
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (t.setToken(e), __dependency_16.default.setData(e), dispatch(__dependency_6.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.getSlotTableDetail = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.GET_SLOT_TABLE_DETAIL
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (t.setToken(e), __dependency_16.default.setData(e), dispatch(__dependency_6.SlotFrameworkEvent.SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.changeSlotTable = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.UPDATE_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      if (e.status !== __dependency_5.Http.ServerStatus.BACKEND_ERROR) {
        if (t.setToken(e), e.status !== __dependency_5.Http.ServerStatus.NOT_MODIFIED) {
          var a = new URLSearchParams(window.location.search);
          a.set("table", "1");
          var s = window.location.pathname + "?" + a.toString();
          window.location.href = s;
        } else App.gameAlert.show({
          text: e.message,
          confirmCb: function () {
            dispatch(__dependency_6.SlotFrameworkEvent.SYNC_SOLT_TABLES);
          },
          bbrCb: function () {}
        }, __dependency_9.ViewZOrder.TopErrorAlert);
      } else t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      });
    });
  }, h.lockSlotTable = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.LOCK_SLOT_TABLE
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_6.SlotFrameworkEvent.LOCK_SLOT_TABLE_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.buyFeature = function (e, t, s) {
    var n = this,
      o = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.SPIN,
        action: "buyFeature",
        clientType: "web",
        featureIndex: s,
        featureValue: __dependency_11.default.getData().buyFeature[s].feature
      }, e, {
        updateStake: !0,
        pools: {
          "jp-mini": this.slotData.tempJpPools["jp-mini"],
          "jp-minor": this.slotData.tempJpPools["jp-minor"],
          "jp-major": this.slotData.tempJpPools["jp-major"],
          "jp-grand": this.slotData.tempJpPools["jp-grand"]
        }
      });
    this.send(o.request, o, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (n.setToken(e), dispatch(__dependency_6.SlotFrameworkEvent.BUY_FEATURE_RESPONSE, {
        data: e.engine.gameState.spinId
      })) : (Log.e("NETWORK_ERROR: ", e), App.gameAlert.show({
        text: e.message,
        confirmCb: function () {},
        bbrCb: function () {}
      }));
    });
  }, h.updateAvatar = function (e) {
    var t = {
      request: __dependency_8.ESocketRequestName.UPDATE_AVATAR,
      avatarId: e
    };
    this.send(t.request, t), __dependency_14.default.getData().player.avatar = e, __dependency_14.default.getData().player.avatarUrl = __dependency_19.default.GetAvatarUrl(e), dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE);
  }, h.updateDisplayName = function (e) {
    var t = this,
      a = {
        request: __dependency_8.ESocketRequestName.UPDATE_DISPLAYNAME,
        displayName: e
      };
    this.send(a.request, a, function (a) {
      t.setToken(a), a.status !== __dependency_5.Http.ServerStatus.REQUEST_ERROR ? (__dependency_14.default.getData().player.displayName = e, dispatch(__dependency_6.SlotFrameworkEvent.UPDATE_DISPLAYNAME_RESPONSE)) : dispatch(__dependency_6.SlotFrameworkEvent.SET_DISPLAYNAME_TIP, a.message);
    });
  }, h.replay = function () {
    var e = this,
      t = new URL(window.location.href).searchParams.get("spinId"),
      a = {
        request: __dependency_8.ESocketRequestName.REPLAY,
        spinId: t
      };
    this.send(a.request, a, function (t) {
      t.status == __dependency_5.Http.ServerStatus.SUCCESS ? (__dependency_18.default.setData(t), __dependency_11.default.setData(t.definition), dispatch(__dependency_6.SlotFrameworkEvent.REPLAY_RESPONSE, t)) : (Log.e("NETWORK_ERROR: ", t), e.showAlert(t.message, {
        needCloseAlert: !1
      }));
    });
  }, h.getSlotBetRanksList = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.GET_SLOT_BET_RANKS_LIST,
        action: "list"
      }, e);
    this.send(s.request, s, function (e) {
      e.status == __dependency_5.Http.ServerStatus.SUCCESS ? (t.setToken(e), dispatch(__dependency_6.SlotFrameworkEvent.GET_RANKING_LIST_RESPONSE, e)) : (Log.e("NETWORK_ERROR: ", e), t.showAlert(e.message, {
        needCloseAlert: !1,
        code: e.code
      }));
    });
  }, h.getSlotBetRanksReplay = function (e) {
    var t = this,
      s = (0, __dependency_0.extends)({
        request: __dependency_8.ESocketRequestName.GET_SLOT_BET_RANKS_REPLAY,
        action: "replay"
      }, e);
    if (App.dataCenter.get(__dependency_23.default).getData().spinStatus === __dependency_8.ESpinStatus.IDLE) return new Promise(function (e, a) {
      t.send(s.request, s, function (a) {
        __dependency_18.default.replayMode = __dependency_18.EReplayMode.RANKING_REPLAY, a.status == __dependency_5.Http.ServerStatus.SUCCESS ? (__dependency_18.default.isReplay = !0, __dependency_20.default.ins.saveOriginGameData(), __dependency_18.default.setData(a), a.definition && __dependency_11.default.setData(a.definition), dispatch(__dependency_6.SlotFrameworkEvent.REPLAY_RESPONSE, a), dispatch(__dependency_22.GameEvent.PROCESS_REPLAY_IN_GAME, {
          data: a
        }), e()) : (Log.e("NETWORK_ERROR: ", a), t.showAlert(a.message, {
          needCloseAlert: !1
        }));
      });
    });
    App.uiManager.close(__dependency_24.default);
    var n = {
      text: "請等待遊戲結束後，再進行重播",
      confirmCb: function () {
        dispatch(__dependency_6.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      bbrCb: function () {
        dispatch(__dependency_6.SlotFrameworkEvent.PLAY_CLICK_BTM);
      },
      needCloseAlert: !0,
      tag: __dependency_9.ViewZOrder.Tips
    };
    App.gameAlert.show(n, __dependency_9.ViewZOrder.Tips);
  }, (0, __dependency_0.createClass)(r, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(__dependency_7.GameService);
    }
  }]), r;
}(__dependency_10.GameSenderBase)).module = __dependency_20.default.module, __dependency_1.cclegacy._RF.pop();
