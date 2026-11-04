// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-IntroView.ts.js
// SHA256: af922aacbcb9d8cebbf0169adea83fbfdc92abdbe08d3ac1cf8fc434d311e929
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-LoadUtils";
import * as __dependency_7 from "./framework-MathUtil";
import * as __dependency_8 from "./g1005-GameConfigModel";
import * as __dependency_9 from "./g1005-GameData";
import * as __dependency_10 from "./main-UrlUtils";
var __export_0;
export { __export_0 as IntroView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "IntroView":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
var V, I, C, x, D, L, G, _, F, N, U, z, k, E, M, B, O;
__dependency_1.cclegacy._RF.push({}, "d4ff4NGY/ZP9p91pTTBH45v", "IntroView", void 0);
var R = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("IntroView", (V = R("IntroView"), I = (0, __dependency_4.inject)("pageView", __dependency_1.PageView), C = (0, __dependency_4.inject)("bbr", __dependency_1.Node), x = (0, __dependency_4.inject)("startGame", __dependency_1.Node), D = (0, __dependency_4.inject)("gameLogo", __dependency_1.Sprite), L = (0, __dependency_4.inject)("leftArrow", __dependency_1.Button), G = (0, __dependency_4.inject)("rightArrow", __dependency_1.Button), _ = (0, __dependency_4.inject)("introTextArea/text", __dependency_1.Sprite), V((U = (0, __dependency_0.applyDecoratedDescriptor)((N = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "pageView", U, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "bbr", z, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "startGame", k, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "gameLogo", E, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "leftArrow", M, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "rightArrow", B, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "infoTextSprite", O, (0, __dependency_0.assertThisInitialized)(e)), e.spineNodes = [], e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, a.start = function () {
    var t = this;
    this.init(), this.setInfoTextSprite(0), this.playSpineAnim(0), this.pageView.node.on("page-turning", this.onPageTurning, this), __dependency_2.CmmUtils.addBtnClickEvent(this.leftArrow.node, function () {
      t.onPrevPage();
    }), __dependency_2.CmmUtils.addBtnClickEvent(this.rightArrow.node, function () {
      t.onNextPage();
    });
  }, a.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + __dependency_10.default.getViewModeParam() + "/IntroView";
  }, a.init = function () {
    this.setGameLogo(), this.setStartGame(), this.setPageSpines(), __dependency_2.CmmUtils.fadeInTween(this.node, .1);
  }, a.setGameLogo = function () {
    var t = __dependency_8.default.getData().filePaths.localeSpriteFrame;
    this.gameLogo.spriteFrame = __dependency_6.LoadUtils.getDirSp(this.data.module, t, "l_logo");
  }, a.setStartGame = function () {
    var t = this,
      e = __dependency_8.default.getData().filePaths.localeSpriteFrame,
      i = this.startGame.getComponent(__dependency_1.UIOpacity);
    i.opacity = 0, (0, __dependency_1.tween)(i).repeatForever((0, __dependency_1.tween)().to(1, {
      opacity: 255
    }).to(1, {
      opacity: 170
    })).start(), this.bbr.on(__dependency_1.NodeEventType.TOUCH_START, function () {
      App.gameLoading.complete(function () {
        dispatch(__dependency_5.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN), t.close();
      });
    }), this.startGame.getComponent(__dependency_1.Sprite).spriteFrame = __dependency_6.LoadUtils.getDirSp(this.data.module, e, "l_font");
  }, a.setPageSpines = function () {
    var t = this;
    this.pageView.content.children.forEach(function (e, i) {
      var n = e.getChildByName("intro");
      if (n) {
        var r = n.getComponent(__dependency_1.sp.Skeleton);
        t.spineNodes.push(r), t.resetSpine(r, "p" + (i + 1));
      }
    });
  }, a.onPageTurning = function () {
    var t = this.pageView.getCurrentPageIndex();
    this.playSpineAnim(t), this.setInfoTextSprite(t);
  }, a.setInfoTextSprite = function (t) {
    var e = __dependency_8.default.getData().filePaths.localeSpriteFrame;
    this.infoTextSprite.spriteFrame = __dependency_6.LoadUtils.getDirSp(this.data.module, e, "intro_text_" + __dependency_7.default.zeroPad(t + 1));
  }, a.resetSpine = function (t, e) {
    t.clearTracks(), t.setToSetupPose(), t.setAnimation(0, e, !1), t.paused = !0;
  }, a.playSpineAnim = function (t) {
    var e = this;
    this.spineNodes.forEach(function (i, n) {
      var r = "p" + (n + 1);
      n === t ? (i.paused = !1, i.clearTracks(), i.setToSetupPose(), i.setAnimation(0, r, !0)) : e.resetSpine(i, r);
    });
  }, a.onPrevPage = function () {
    var t = this.pageView.getCurrentPageIndex(),
      e = Math.max(0, t - 1);
    this.pageView.scrollToPage(e, .3);
  }, a.onNextPage = function () {
    var t = this.pageView.getCurrentPageIndex(),
      e = this.pageView.content.children.length - 1,
      i = Math.min(e, t + 1);
    this.pageView.scrollToPage(i, .3);
  }, a.reset = function () {}, a.setData = function (t) {}, a.addEvents = function () {}, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_9.default.ins;
    }
  }]), e;
}(__dependency_3.default)).prototype, "pageView", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "bbr", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "startGame", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), E = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "gameLogo", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "leftArrow", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "rightArrow", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "infoTextSprite", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = N)) || F));
__dependency_1.cclegacy._RF.pop();
