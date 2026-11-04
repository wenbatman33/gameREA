// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameEntry.ts.js
// SHA256: 121d4ad535bf701174686bcb4e5d3bb874f7e881d061f258e2486f860cb4554e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-HeartbetJson";
import * as __dependency_5 from "./main-Resource";
import * as __dependency_6 from "./main-Entry";
import * as __dependency_7 from "./main-Decorators";
import * as __dependency_8 from "./framework-SlotFrameworkData";
import * as __dependency_9 from "./framework-ColorModel";
import * as __dependency_10 from "./framework-PlatformModel";
import * as __dependency_11 from "./framework-ReadyBundleModel";
import * as __dependency_12 from "./framework-ReplayModel";
import * as __dependency_13 from "./framework-UrlModel";
import * as __dependency_14 from "./framework-CmmSlotUtils";
import * as __dependency_15 from "./g1005-BigwinView";
import * as __dependency_16 from "./g1005-BuyFeatureView";
import * as __dependency_17 from "./g1005-GameColor";
import * as __dependency_18 from "./g1005-GameConfigModel";
import * as __dependency_19 from "./g1005-GameData";
import * as __dependency_20 from "./g1005-GameLanguage";
import * as __dependency_21 from "./g1005-GameHandler";
import * as __dependency_22 from "./g1005-GameSender";
import * as __dependency_23 from "./g1005-GameService";
import * as __dependency_24 from "./g1005-GameView";
import * as __dependency_25 from "./framework-SlotTableViewP";
import * as __dependency_26 from "./g1005-RegisterNewCommands";
import * as __dependency_27 from "./framework-SlotTableViewL_v2";
import * as __dependency_28 from "./main-UrlUtils";
import * as __dependency_29 from "./g1005-IntroView";
(function (r) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0, void 0;
})(__dependency_2);
(function (e) {
  void 0;
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
  void 0;
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
  void 0;
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
(function (e) {
  void 0;
})(__dependency_25);
(function (e) {
  void 0;
})(__dependency_26);
(function (e) {
  void 0;
})(__dependency_27);
(function (e) {
  void 0;
})(__dependency_28);
(function (e) {
  void 0;
})(__dependency_29);
var H;
__dependency_1.cclegacy._RF.push({}, "c377cr5gcNGs7F0q/XMrclI", "GameEntry", void 0);
(0, __dependency_7.registerEntry)("GameEntry", __dependency_19.default.module, __dependency_24.default)(H = function (r) {
  function y() {
    for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    return (e = Reflect.construct(r, [this].concat(n).slice(1), new.target || y) || this).language = new __dependency_20.GameLanguage(), e.color = new __dependency_17.GameColor(), e;
  }
  (0, __dependency_0.inheritsLoose)(y, r);
  var w = y.prototype;
  return w.addNetHandler = function () {
    App.handlerManager.get(__dependency_21.GameHandler);
  }, w.removeNetHandler = function () {}, w.loadResources = function () {
    var e = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function e(t) {
      var n,
        r,
        o,
        d,
        p,
        f,
        g,
        b,
        y,
        w,
        v,
        A,
        S,
        L,
        k,
        M,
        B,
        I,
        P,
        F,
        V = this;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = __dependency_18.default.getData().filePaths, r = n.symbolsSpriteFrame, o = n.symbolPrefab, d = n.symbolsSkeletonData, p = n.winCashPrefab, f = n.fireBallPrefab, g = n.gameAlertsSkeletonData, b = n.spinSkeleton, y = n.common, w = n.localeSpriteFrame, v = n.font, A = n.timesMovingPrefab, S = n.transitionsSkeletonData, L = n.buyFeatureBtnPrefab, k = n.buyFeatureItemPrefab, M = n.blueTimesMovingPrefab, B = n.purpleTimesMovingPrefab, I = n.symbolsSpriteFrameBlur, P = n.splitBlueTimesMovingPrefab, F = n.introSkeleton, n.testSpinDatas, n.testCloseSpinDatas, e.next = 3, this.setloadingDataVO();
          case 3:
            this.loader.getLoadResources = function () {
              return [{
                preloadView: __dependency_24.default,
                bundle: V.bundle
              }, {
                url: o,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: p,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: f,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: A,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: M,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: B,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: P,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: L,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                url: k,
                bundle: V.bundle,
                type: __dependency_1.Prefab
              }, {
                dir: r,
                bundle: V.bundle,
                type: __dependency_1.SpriteFrame
              }, {
                dir: I,
                bundle: V.bundle,
                type: __dependency_1.SpriteFrame
              }, {
                dir: d,
                bundle: V.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                dir: g,
                bundle: V.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                dir: b,
                bundle: V.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                dir: S,
                bundle: V.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                dir: y,
                bundle: V.bundle,
                type: __dependency_1.SpriteFrame
              }, {
                dir: w,
                bundle: V.bundle,
                type: __dependency_1.SpriteFrame
              }, {
                dir: v,
                bundle: V.bundle,
                type: __dependency_1.Font
              }, {
                dir: "assets/music/bgm",
                bundle: V.bundle,
                type: __dependency_1.AudioClip
              }, {
                dir: "assets/music/btm",
                bundle: V.bundle,
                type: __dependency_1.AudioClip
              }, {
                dir: F,
                bundle: V.bundle,
                type: __dependency_1.sp.SkeletonData
              }, {
                preloadView: __dependency_16.BuyFeatureView,
                bundle: V.bundle
              }, {
                preloadView: __dependency_15.BigwinView,
                bundle: V.bundle
              }];
            }, this.loader.onLoadProgress = function (e, t, n) {
              App.gameLoading.setLoading(e, t, n);
            }, this.loader.onLoadComplete = function (e) {
              __dependency_5.Resource.LoaderError.SUCCESS && (__dependency_11.default.setComplete(__dependency_3.EBundles[V.bundle]), t());
            }, this.loader.loadResources();
          case 7:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), w.initData = function () {
    Log.e(" 🐽🐽🐽 gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION + " 🐽🐽🐽 "), __dependency_26.default.execute(), App.serviceManager.get(__dependency_23.GameService, !0), this.initColorModel(), this.initLanguage();
  }, w.initColorModel = function () {
    var e = {
      mainGame: {
        auxiliary: new __dependency_1.Color("#4e3487"),
        main: new __dependency_1.Color("#ab84ff"),
        mainHover: new __dependency_1.Color("#896acc"),
        topbar: new __dependency_1.Color(42, 26, 77, 209.1)
      },
      record: {
        5: new __dependency_1.Color(255, 255, 255, 12.75),
        10: new __dependency_1.Color(255, 255, 255, 255 * .24)
      },
      background: {
        0: new __dependency_1.Color("#c9c9cc"),
        20: new __dependency_1.Color("#a9a9ad"),
        40: new __dependency_1.Color("#88898e"),
        60: new __dependency_1.Color("#68696f"),
        80: new __dependency_1.Color("#474951"),
        100: new __dependency_1.Color("#272932")
      },
      white: {
        info01: new __dependency_1.Color("#ffffff"),
        default01: new __dependency_1.Color(255, 255, 255, 38.25),
        default02: new __dependency_1.Color(255, 255, 255, 255 * .24),
        hover01: new __dependency_1.Color(255, 255, 255, 76.5),
        hover02: new __dependency_1.Color(255, 255, 255, 255 * .08),
        labelDefault01: new __dependency_1.Color(255, 255, 255, 153),
        textAuto01: new __dependency_1.Color("#ffffff")
      },
      red: {
        primary: new __dependency_1.Color("#ff6433")
      },
      green: {
        primary: new __dependency_1.Color("#3ae300")
      },
      yellow: {
        primary: new __dependency_1.Color("#ffd680"),
        secondary: new __dependency_1.Color(255, 168, 0, 76.5)
      }
    };
    __dependency_9.default.setData(e);
  }, w.pauseMessageQueue = function () {}, w.resumeMessageQueue = function () {}, w.onEnter = function (e) {
    r.prototype.onEnter.call(this, e), Log.d("--------------onEnterLogin--------------"), this.serviceInit();
  }, w.openGameView = function (e) {
    var t = this;
    App.gameLoading.setMessage("gv" + this.data.GAME_VERSION + " sv" + this.slotData.SLOT_VERSION);
    var n = setInterval(function () {
      t.checkCompletion(n, e);
    }, 100);
  }, w.onUnloadBundle = function () {
    r.prototype.onUnloadBundle.call(this);
  }, w.checkCompletion = function () {
    var e = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function e(t, n) {
      var r,
        o = this;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = App.gameLoading, __dependency_11.default.isComplete()) {
              e.next = 5;
              break;
            }
            return e.abrupt("return");
          case 5:
            return clearInterval(t), App.uiManager.open({
              type: this.gameViewType,
              bundle: this.bundle,
              args: n
            }), e.next = 10, this.waitSocketConnected();
          case 10:
            if (!__dependency_28.default.hasParam("spinId")) {
              e.next = 18;
              break;
            }
            __dependency_12.default.isReplay = !0, Log.d("hasReplayUrl", __dependency_12.default.isReplay), App.senderManager.get(__dependency_22.GameSender).replay(), r.complete(), e.next = 20;
            break;
          case 18:
            return e.next = 20, App.senderManager.get(__dependency_22.GameSender).initial().then(function () {
              r.hideProgressBar(), r.hideGameLogo(), App.uiManager.open({
                type: __dependency_29.IntroView,
                bundle: o.bundle,
                zIndex: __dependency_2.ViewZOrder.UILoading,
                name: "Intro"
              });
              var e = __dependency_10.default.getData().slotTablesOn,
                t = o.data.getData().isResuming,
                n = "1" === __dependency_13.default.getData().searchParams.table;
              if (e && !t) {
                if (n) return;
                var a = __dependency_14.CmmSlotUtils.getOrientationTarget(__dependency_27.default, __dependency_25.default);
                App.uiManager.open({
                  type: a,
                  bundle: __dependency_3.EBundles[__dependency_3.EBundles.slotFramework],
                  zIndex: __dependency_2.ViewZOrder.UI,
                  name: "機台選擇",
                  args: !0
                });
              }
            });
          case 20:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t, n) {
      return e.apply(this, arguments);
    };
  }(), w.setloadingDataVO = function () {
    var e = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function e() {
      var t, n, r, o, i, l, c, f, g, m, b, h, y, w;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = __dependency_28.default.getViewModeParam(), r = __dependency_13.default.getData().searchParams.l, e.next = 4, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_bg/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 4:
            return e.next = 6, e.sent;
          case 6:
            return o = e.sent, e.next = 9, App.cache.getCacheByAsync("assets/spine/" + t + "/loading/loading", __dependency_1.sp.SkeletonData, this.bundle);
          case 9:
            return i = e.sent, e.next = 12, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_frame/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 12:
            return l = e.sent, e.next = 15, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_02/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 15:
            return c = e.sent, e.next = 18, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_01/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 18:
            return f = e.sent, e.next = 21, App.cache.getCacheByAsync("assets/texture/common/" + t + "/l_loading_light/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 21:
            return g = e.sent, e.next = 24, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/" + r + "/l_logo/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 24:
            return m = e.sent, e.next = 27, App.cache.getCacheByAsync("assets/texture/locale/" + t + "/" + r + "/l_font/spriteFrame", __dependency_1.SpriteFrame, this.bundle);
          case 27:
            b = e.sent, h = null, "landscape" == t ? (n = {
              background: o,
              spine: i,
              barFrame: l,
              bar: f,
              barbg: c,
              barLight: g,
              logo: m,
              startGame: b
            }, y = {
              alignMode: __dependency_1.Widget.AlignMode.ALWAYS,
              left: 20,
              isAlignLeft: !0,
              isAlignTop: !0,
              top: 10
            }, App.gameLoading.setLogoWidget(y), App.gameLoading.setAtgLogoPosition(580, 290)) : "portrait" == t && (n = {
              background: o,
              barFrame: l,
              bar: f,
              barbg: c,
              barLight: g,
              logo: m,
              startGame: b
            }, w = {
              alignMode: __dependency_1.Widget.AlignMode.ALWAYS,
              bottom: 180,
              isAlignBottom: !0,
              isAlignHorizontalCenter: !0,
              horizontalCenter: 0
            }, App.gameLoading.setLogoWidget(w), h = {
              mask: (0, __dependency_1.v3)(0, 0, 0)
            }), App.gameLoading.setData(n, h);
          case 31:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), w.serviceInit = function () {
    this.service.heartbeat = __dependency_4.HeartbeatJson, this.service.maxEnterBackgroundTime = __dependency_2.Config.MIN_INBACKGROUND_TIME, this.service.connect(), this.service.enabled = !0;
  }, w.initLanguage = function () {
    var e,
      t = null != (e = __dependency_13.default.getData().searchParams) && e.l ? __dependency_13.default.getData().searchParams.l : "zh-tw";
    App.language.change(t);
  }, w.waitSocketConnected = function () {
    var e = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function e() {
      var t = this;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e, n) {
              var a = 0,
                r = setInterval(function () {
                  t.service.isConnected ? (clearInterval(r), e()) : (a += 100) >= 3e4 && (clearInterval(r), n(new Error("Socket connection timed out")));
                }, 100);
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }, e);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }(), (0, __dependency_0.createClass)(y, [{
    key: "service",
    get: function () {
      return App.serviceManager.get(__dependency_23.GameService);
    }
  }, {
    key: "data",
    get: function () {
      return __dependency_19.default.ins;
    }
  }, {
    key: "slotData",
    get: function () {
      return App.dataCenter.get(__dependency_8.default);
    }
  }]), y;
}(__dependency_6.Entry));
__dependency_1.cclegacy._RF.pop();
