// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameView.ts.js
// SHA256: 2116dad4cdce936ee10fac95b2dee08d3882550162a6618d8f44efff17fab780
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmUtils";
import * as __dependency_4 from "./main-GameViewBase";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-PrizeNotify";
import * as __dependency_7 from "./framework-InfoBarController";
import * as __dependency_8 from "./framework-MenuController";
import * as __dependency_9 from "./framework-TopBar";
import * as __dependency_10 from "./framework-SlotFrameworkData";
import * as __dependency_11 from "./framework-SlotFrameworkEvent";
import * as __dependency_12 from "./framework-PlatformModel";
import * as __dependency_13 from "./framework-SettingsModel";
import * as __dependency_14 from "./framework-type2";
import * as __dependency_15 from "./framework-LoadUtils";
import * as __dependency_16 from "./g1005-GameConfigModel";
import * as __dependency_17 from "./g1005-GameData";
import * as __dependency_18 from "./g1005-GameEvent";
import * as __dependency_19 from "./g1005-GameLogic";
import * as __dependency_20 from "./main-WrapperData";
import * as __dependency_21 from "./main-AdapterEvent";
import * as __dependency_22 from "./framework-CmmSlotUtils";
import * as __dependency_23 from "./framework-SlotTableViewP";
import * as __dependency_24 from "./framework-InfoBarPController";
import * as __dependency_25 from "./framework-SpinBarPController";
import * as __dependency_26 from "./framework-SpinBarControllerLandScape";
import * as __dependency_27 from "./g1005-ReplayUIViewL";
import * as __dependency_28 from "./main-Config";
import * as __dependency_29 from "./framework-ReplayModel";
import * as __dependency_30 from "./framework-SlotTableViewL_v2";
import * as __dependency_31 from "./main-UrlUtils";
import * as __dependency_32 from "./g1005-ReplayUIViewP";
import * as __dependency_33 from "./g1005-types";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
(function (t) {
  void 0;
})(__dependency_8);
(function (t) {
  void 0;
})(__dependency_9);
(function (t) {
  void 0;
})(__dependency_10);
(function (t) {
  void 0;
})(__dependency_11);
(function (t) {
  void 0;
})(__dependency_12);
(function (t) {
  void 0;
})(__dependency_13);
(function (t) {
  void 0;
})(__dependency_14);
(function (t) {
  void 0;
})(__dependency_15);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_16);
(function (t) {
  void 0, void 0;
})(__dependency_17);
(function (t) {
  void 0;
})(__dependency_18);
(function (t) {
  void 0;
})(__dependency_19);
(function (t) {
  void 0;
})(__dependency_20);
(function (t) {
  void 0;
})(__dependency_21);
(function (t) {
  void 0;
})(__dependency_22);
(function (t) {
  void 0;
})(__dependency_23);
(function (t) {
  void 0;
})(__dependency_24);
(function (t) {
  void 0;
})(__dependency_25);
(function (t) {
  void 0;
})(__dependency_26);
(function (t) {
  void 0;
})(__dependency_27);
(function (t) {
  void 0;
})(__dependency_28);
(function (t) {
  void 0;
})(__dependency_29);
(function (t) {
  void 0;
})(__dependency_30);
(function (t) {
  void 0;
})(__dependency_31);
(function (t) {
  void 0;
})(__dependency_32);
(function (t) {
  void 0;
})(__dependency_33);
var at, ot, rt, st, lt, ut, pt, ct, dt, ft, gt, ht, mt, bt, _t, St, yt, At;
__dependency_1.cclegacy._RF.push({}, "3fc9cnk3ABNwrWISu6ie4X8", "GameView", void 0);
var Et = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("default", (at = Et("GameView"), ot = (0, __dependency_5.inject)("content", __dependency_1.Node), rt = (0, __dependency_5.inject)("content/gameLayer", __dependency_1.Node), st = (0, __dependency_5.inject)("content/uiLayer", __dependency_1.Node), lt = (0, __dependency_5.inject)("content/uiLayer/leftContent", __dependency_1.Node), ut = (0, __dependency_5.inject)("content/gameLayer/ReelView", __dependency_1.Node), pt = (0, __dependency_5.inject)("content/gameLayer/SymbolView", __dependency_1.Node), ct = (0, __dependency_5.inject)("content/uiLayer/rotateScreenBtn", __dependency_1.Node), at(((At = function (t) {
  function e() {
    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "content", gt, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "gameLayer", ht, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "uiLayer", mt, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "leftContent", bt, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "ReelView", _t, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "SymbolView", St, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "rotateScreenBtn", yt, (0, __dependency_0.assertThisInitialized)(e)), e.slotUIConfigs = [], e.slotUIMap = new Map(), e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var l = e.prototype;
  return l.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, l.start = function () {
    this.beforeInit();
  }, l.onDestroy = function () {
    this.removeAllEvents();
  }, l.reset = function () {
    t.prototype.reset.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + __dependency_31.default.getViewModeParam() + "/GameView";
  }, l.beforeInit = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t() {
      var e;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (e = this.args) {
              t.next = 3;
              break;
            }
            return t.abrupt("return");
          case 3:
            e === __dependency_17.EInitName.INIT_REPLAY ? (!0, dispatch(__dependency_18.GameEvent.PARSER_REPLAY_COMPLETED, true), this.playBGM(__dependency_16.EBGM.MAINGAME)) : e == __dependency_17.EInitName.INIT_GAME && (__dependency_29.default.isReplay = !1, __dependency_16.default.setIsTurbo(__dependency_12.default.getData().player.settings.advancedSettings.turbo), dispatch(__dependency_11.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN));
          case 4:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), l.init = function () {
    this.initGameViewSize(), this.initNewCompleted(), this.setUI(), this.initAudio(), this.setEventTouch(), this.gameLayer.on(__dependency_1.NodeEventType.TOUCH_END, this.quickStop, this), this.initRotateScreenBtn();
  }, l.initRotateScreenBtn = function () {
    null != __dependency_12.default.getData().disableRotate && 1 == __dependency_12.default.getData().disableRotate ? this.rotateScreenBtn.active = !1 : this.rotateScreenBtn.active = !0;
  }, l.initReplay = function () {
    this.initAudio(), this.setReplayUI(), this.gameLayer.on(__dependency_1.NodeEventType.TOUCH_END, this.replayQuickStop, this), __dependency_12.default.getData().player.avatarUrl = __dependency_29.default.getData().betData.replayMeta.avatarUrl, __dependency_12.default.getData().player.displayName = __dependency_29.default.getData().betData.replayMeta.displayName, dispatch(__dependency_11.SlotFrameworkEvent.UPDATE_USER_BALANCE, {
      data: {
        balance: __dependency_29.default.getData().betData.replayMeta.amount
      }
    }), dispatch(__dependency_11.SlotFrameworkEvent.UPDATE_AVATAR_COMPLETED_RESPONSE), dispatch(__dependency_11.SlotFrameworkEvent.SET_DISPLAY_NAME), dispatch(__dependency_11.SlotFrameworkEvent.UPDATE_USER_SPIN_ID, {
      data: {
        spinId: ""
      }
    });
  }, l.againReplayUpdateAmount = function () {
    dispatch(__dependency_18.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: 0
      }
    }), dispatch(__dependency_11.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    });
  }, l.initGameViewSize = function () {
    var t = this.wrapperData.orientation === __dependency_21.EOrientationType.LANDSCAPE ? new __dependency_1.Size(1280, 720) : new __dependency_1.Size(720, 1280);
    this.content.getComponent(__dependency_1.UITransform).setContentSize(t);
  }, l.createBuyFeatureBtn = function () {
    var t = __dependency_16.default.getData().filePaths.buyFeatureBtnPrefab,
      e = __dependency_17.default.ins.getData().definition.buyFeature,
      n = App.cache.get(__dependency_17.default.ins.module, t).data;
    if (e.length > 0) {
      var i = (0, __dependency_1.instantiate)(n);
      this.uiLayer.addChild(i);
    }
  }, l.setReplayUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      i = t.spinBarPrefab;
    this.slotUIConfigs = [{
      path: __dependency_22.CmmSlotUtils.getOrientationTarget(n, e),
      component: __dependency_22.CmmSlotUtils.getOrientationTarget(__dependency_7.default, __dependency_24.default)
    }, {
      path: __dependency_22.CmmSlotUtils.getOrientationTarget("prefabs/ui/topBar/TopBar", "prefabs/ui/topBar/TopBarP"),
      component: __dependency_9.default
    }], "landscape" == __dependency_31.default.getViewModeParam() && this.slotUIConfigs.push({
      path: i,
      component: __dependency_26.default
    }), this.addSlotUI(this.slotUIConfigs);
    var a = __dependency_22.CmmSlotUtils.getOrientationTarget(__dependency_27.default, __dependency_32.default);
    App.uiManager.open({
      type: a,
      bundle: __dependency_2.EBundles[__dependency_2.EBundles.slotFramework],
      zIndex: __dependency_28.ViewZOrder.ReplayUI,
      name: "replay UI層"
    }), this.uiLayer.getComponentInChildren(__dependency_9.default).setVersion("v" + __dependency_17.default.ins.GAME_VERSION);
  }, l.setUI = function () {
    var t = this.slotData.getData().filePaths,
      e = t.infoBarPPrefab,
      n = t.infoBarPrefab,
      i = t.spinBarPPrefab,
      a = t.spinBarPrefab;
    this.slotUIConfigs = [{
      path: __dependency_22.CmmSlotUtils.getOrientationTarget(n, e),
      component: __dependency_22.CmmSlotUtils.getOrientationTarget(__dependency_7.default, __dependency_24.default)
    }, {
      path: __dependency_22.CmmSlotUtils.getOrientationTarget(a, i),
      component: __dependency_22.CmmSlotUtils.getOrientationTarget(__dependency_26.default, __dependency_25.default)
    }, {
      path: __dependency_22.CmmSlotUtils.getOrientationTarget("prefabs/ui/topBar/TopBar", "prefabs/ui/topBar/TopBarP"),
      component: __dependency_9.default
    }, {
      path: "prefabs/component/PrizeNotify",
      component: __dependency_6.PrizeNotify
    }], this.addSlotUI(this.slotUIConfigs), this.setSlotUIData();
  }, l.addSlotUI = function (t) {
    var e = this;
    t.forEach(function (t) {
      var n = t.path,
        i = t.component,
        a = App.cache.get(__dependency_2.EBundles[__dependency_2.EBundles.slotFramework], n).data,
        o = (0, __dependency_1.instantiate)(a);
      e.slotUIMap.set(o.name, o), o.addComponent(i), e.uiLayer.addChild(o);
    });
    var n = this.uiLayer.getComponentInChildren(__dependency_6.PrizeNotify);
    if (n) {
      var i = __dependency_31.default.getViewModeParam(),
        a = n.node.getChildByName("content").getComponent(__dependency_1.Widget);
      "landscape" == i ? (a.left = 0, a.isAlignVerticalCenter = !0, a.verticalCenter = -50, n.node.active = !0) : (a.left = -14, a.isAbsoluteLeft = !0, a.isAlignVerticalCenter = !0, a.verticalCenter = 310, n.node.active = !0);
    }
  }, l.setSlotUIData = function () {
    var t = this;
    if (App.dataCenter.get(__dependency_20.default).orientation === __dependency_21.EOrientationType.LANDSCAPE) {
      var e = this.uiLayer.getComponentInChildren(__dependency_26.default);
      e.addSpinEventTouch(this.name, function () {
        t.spin();
      }), e.addQuickStopEventTouch(function () {
        t.quickStop();
      }), e.initTurbo(__dependency_16.default.isTurbo), e.addTurboEventTouch(__dependency_16.default);
      var n = __dependency_16.default.getData().filePaths,
        i = n.common,
        a = n.font,
        o = n.localeSpriteFrame,
        r = n.spinSkeleton,
        s = App.cache.get(this.bundle, r).data[0],
        l = {
          normal: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_bg_normal"),
          pressed: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_bg_pressed"),
          hover: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_bg_normal"),
          disabled: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_bg_disabled")
        },
        u = {
          normal: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_icon_normal"),
          pressed: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_icon_pressed"),
          hover: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_icon_normal"),
          disabled: __dependency_15.LoadUtils.getDirSp(this.bundle, i, "mg_btn_spin_icon_disabled")
        },
        p = {
          font: __dependency_15.LoadUtils.getDirSp(this.bundle, a, "countup_01"),
          fontSize: 8,
          fontPos: new __dependency_1.Vec3(0, 12, 0)
        };
      e.setSpinBtnData(s, l, u, p);
      var c = this.uiLayer.getComponentInChildren(__dependency_9.default);
      c.setVersion("v" + __dependency_17.default.ins.GAME_VERSION);
      var d = __dependency_12.default.getData().jackpotOn;
      c.showHideJPBar(d);
      var f = c.getComponentInChildren(__dependency_8.default),
        g = {
          bundle: this.bundle,
          background: i,
          rules: o
        };
      f.setRuleAssets(g);
    } else {
      var m = this.uiLayer.getComponentInChildren(__dependency_25.default);
      m.addSpinEventTouch(this.name, function () {
        t.spin();
      }), m.addQuickStopEventTouch(function () {
        t.quickStop();
      }), m.initTurbo(__dependency_16.default.isTurbo), m.addTurboEventTouch(__dependency_16.default);
      var b = __dependency_16.default.getData().filePaths,
        _ = b.common,
        S = b.font,
        y = b.localeSpriteFrame,
        A = b.spinSkeleton,
        E = App.cache.get(__dependency_2.EBundles[__dependency_2.EBundles.g1005], A).data[0],
        v = {
          normal: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_normal"),
          pressed: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_pressed"),
          hover: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_normal"),
          disabled: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_bg_disabled")
        },
        I = {
          normal: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_normal"),
          pressed: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_pressed"),
          hover: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_normal"),
          disabled: __dependency_15.LoadUtils.getDirSp(this.bundle, _, "mg_btn_spin_icon_disabled")
        },
        D = {
          font: __dependency_15.LoadUtils.getDirSp(this.bundle, S, "countup_01"),
          fontSize: 8,
          fontPos: new __dependency_1.Vec3(0, 12, 0)
        };
      m.setSpinBtnData(E, v, I, D);
      var T = this.uiLayer.getComponentInChildren(__dependency_9.default);
      T.setVersion("v" + __dependency_17.default.ins.GAME_VERSION);
      var w = __dependency_12.default.getData().jackpotOn;
      T.showHideJPBar(w);
      var L = {
        bundle: this.bundle,
        background: _,
        rules: y
      };
      __dependency_12.default.getData().theme && "xin-star" == __dependency_12.default.getData().theme && (L.excludeIndexes = [6, 7]), m.setRuleAssets(L);
    }
  }, l.setEventTouch = function () {
    this.onI(__dependency_1.Input.EventType.KEY_DOWN, function (t) {
      t.keyCode;
    });
  }, l.shakeView = function () {
    var t = this,
      e = .02,
      n = [this.ReelView, this.SymbolView],
      i = (0, __dependency_1.v3)(0, 0, 0);
    n.forEach(function (n) {
      n == t.SymbolView && (i = (0, __dependency_1.v3)(0, -4.6, 0)), (0, __dependency_1.tween)(n).delay(.3).to(e, {
        position: new __dependency_1.Vec3(18, 21, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(39, 9, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(-9, -18, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(15, 15, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(-6, -24, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(24, -30, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(-9, 30, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(9, -15, 0)
      }).to(e, {
        position: new __dependency_1.Vec3(-12, 24, 0)
      }).to(e, {
        position: i
      }).call(function () {
        t.node.position = new __dependency_1.Vec3(0, 0, 0);
      }).start();
    });
  }, l.playBGM = function (t) {
    this.audioHelper.playMusic(t, this.bundle);
  }, l.playBTM = function (t, e) {
    void 0 === e && (e = !1), this.audioHelper.playEffect(t, this.bundle, e);
  }, l.stopBTM = function (t) {
    this.audioHelper.stopEffect(t, this.bundle);
  }, l.initAudio = function () {
    var t, e;
    if (__dependency_31.default.hasParam("spinId")) return App.globalAudio.musicVolume = 0, App.globalAudio.effectVolume = 0, void Log.e("replay model volume:::::::::", App.globalAudio.musicVolume);
    App.globalAudio.musicVolume = null != (t = __dependency_13.default.backgroundVolume) ? t : 1, App.globalAudio.effectVolume = null != (e = __dependency_13.default.effectVolume) ? e : 1;
  }, l.buyFeatureSpin = function (t) {
    dispatch(__dependency_18.GameEvent.CLOSE_FEATURE_POPUP), dispatch(__dependency_18.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: t,
        test: null
      }
    }), dispatch(__dependency_18.GameEvent.UPDATE_WIN_AMOUNT, {
      data: {
        value: 0
      }
    }), dispatch(__dependency_11.SlotFrameworkEvent.UPDATE_TOTAL_WINNINGS, {
      data: {
        value: 0
      }
    }), this.playBTM(__dependency_16.EBTM.SPIN);
  }, l.showResumeAlert = function () {
    var t = {
      text: App.getLanguage("wrapper1", [], __dependency_2.EBundles[__dependency_2.EBundles.wrapper]),
      bbrColor: new __dependency_1.Color(0, 0, 0, 255),
      confirmCb: function (t) {
        dispatch(__dependency_18.GameEvent.CREATE_RESUME_FLOW);
      }
    };
    App.gameAlert.show(t), App.uiManager.close(__dependency_22.CmmSlotUtils.getOrientationTarget(__dependency_30.default, __dependency_23.default));
  }, l.createTestBtn = function () {
    var t = this;
    [{
      name: "測試1: Super Game 男角 -1",
      function: function () {
        t.testSpin({
          type: 0
        });
      }
    }, {
      name: "測試2: Super Game 無男角",
      function: function () {
        t.testSpin({
          type: 1
        });
      }
    }, {
      name: "測試3: SuperGame 女角 1",
      function: function () {
        t.testSpin({
          type: 2
        });
      }
    }, {
      name: "測試4: SuperGame 男女角混搭",
      function: function () {
        t.testSpin({
          type: 3
        });
      }
    }, {
      name: "測試5: SuperGame 沒中獎",
      function: function () {
        t.testSpin({
          type: 4
        });
      }
    }].forEach(function (e, n) {
      var i = __dependency_3.CmmUtils.createNode("按鈕" + n, {
        Button: !0,
        subLabel: !0
      });
      i.getComponent(__dependency_1.UITransform).height = 25;
      var a = i.getComponentInChildren(__dependency_1.Label);
      a.color = new __dependency_1.Color("#ffffff"), a.fontSize = 18, a.lineHeight = 18, a.string = e.name, i.setParent(t.leftContent), __dependency_3.CmmUtils.addDoubleClickProtection(i, function () {
        e.function();
      });
    });
  }, l.testSpin = function (t) {
    this.slotData.getData().spinStatus == __dependency_14.ESpinStatus.IDLE && dispatch(__dependency_18.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: null,
        test: t
      }
    });
  }, l.spin = function () {
    var t = __dependency_3.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0];
    App.uiManager.IsOnlyGameViewOpen(t) && (dispatch(__dependency_18.GameEvent.CREATE_SPIN_FLOW, {
      data: {
        spinId: null,
        test: null
      }
    }), this.playBTM(__dependency_16.EBTM.SPIN));
  }, l.quickStop = function () {
    var t = App.dataCenter.get(__dependency_10.default).getData().spinStatus,
      e = __dependency_3.CmmUtils.extractContentBetweenAngleBrackets(this.name)[0],
      n = App.uiManager.IsOnlyGameViewOpen(e);
    t === __dependency_14.ESpinStatus.SPINING && n && dispatch(__dependency_18.GameEvent.CREATE_QUICK_STOP_FLOW);
  }, l.replayQuickStop = function () {
    var t = App.dataCenter.get(__dependency_10.default).getData().spinStatus;
    __dependency_1.game.isPaused() || t === __dependency_14.ESpinStatus.SPINING && dispatch(__dependency_18.GameEvent.CREATE_REPLAY_QUICK_STOP_FLOW);
  }, l.multipleMusicVolume = function (t) {
    App.globalAudio.musicVolume = App.globalAudio.musicVolume * t;
  }, l.initNewCompleted = function () {
    var t = __dependency_17.default.ins.getData().isResuming,
      e = __dependency_17.default.ins.getData().newGameState[__dependency_17.default.ins.currSpinIndex].action,
      n = e == __dependency_33.EActionType.SPIN || e == __dependency_33.EActionType.SUPER_GAME,
      i = n ? __dependency_16.EBGM.MAINGAME : __dependency_16.EBGM.FREEGAME;
    this.createBuyFeatureBtn(), t ? (this.playBGM(i), dispatch(__dependency_18.GameEvent.CHANGE_GAME_STYLE, {
      data: n
    }), this.showResumeAlert()) : (this.playBGM(__dependency_16.EBGM.MAINGAME), dispatch(__dependency_18.GameEvent.CHANGE_GAME_STYLE, {
      data: !0
    }));
  }, l.showTest = function () {
    this.leftContent.active = !this.leftContent.active;
  }, (0, __dependency_0.createClass)(e, [{
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_10.default);
    }
  }, {
    key: "wrapperData",
    get: function () {
      return App.dataCenter.get(__dependency_20.default);
    }
  }]), e;
}(__dependency_4.default)).logicType = __dependency_19.GameLogic, gt = (0, __dependency_0.applyDecoratedDescriptor)((ft = At).prototype, "content", [ot], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), ht = (0, __dependency_0.applyDecoratedDescriptor)(ft.prototype, "gameLayer", [rt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), mt = (0, __dependency_0.applyDecoratedDescriptor)(ft.prototype, "uiLayer", [st], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), bt = (0, __dependency_0.applyDecoratedDescriptor)(ft.prototype, "leftContent", [lt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _t = (0, __dependency_0.applyDecoratedDescriptor)(ft.prototype, "ReelView", [ut], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), St = (0, __dependency_0.applyDecoratedDescriptor)(ft.prototype, "SymbolView", [pt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), yt = (0, __dependency_0.applyDecoratedDescriptor)(ft.prototype, "rotateScreenBtn", [ct], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), dt = ft)) || dt));
__dependency_1.cclegacy._RF.pop();
