// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SingleReel.ts.js
// SHA256: 5bb4f171b41a6e3af5bc2c93003aa39cab9ba9370d3fde7cd56f5e77e587e1b3
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-ReelDataSetting";
import * as __dependency_5 from "./main-SymbolBase";
import * as __dependency_6 from "./main-ReelEnum";
import * as __dependency_7 from "./main-ReelEvent";
import * as __dependency_8 from "./main-ReelSetting";
import * as __dependency_9 from "./main-SingleReelSetting";
var __export_0;
export { __export_0 as SingleReel };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingleReel":
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
  void 0, void 0;
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
var D, C, N, P, w, E, A, O, W, T, H, U, _, k, F, G, z, B, M, V, j, X, Y;
__dependency_1.cclegacy._RF.push({}, "af89e0w+eJN7qICj9OV9zdg", "SingleReel", void 0);
var q = __dependency_1._decorator.ccclass,
  J = __dependency_1._decorator.property,
  K = __dependency_1._decorator.executeInEditMode,
  Q = __dependency_1._decorator.menu,
  Z = __dependency_1._decorator.requireComponent;
__publish("SingleReel", (D = q("SingleReel"), C = Q("Slot/Reel/SingleReel"), N = K(), P = Z(__dependency_1.UITransform), w = J({
  type: __dependency_9.SingleReelSetting,
  displayName: "單一滾輪設定"
}), E = J({
  type: __dependency_9.SingleReelSetting,
  displayName: "單一滾輪設定"
}), A = J({
  type: __dependency_1.CCInteger
}), O = J({
  type: __dependency_8.ReelSetting,
  visible: !1
}), W = J({
  type: __dependency_1.Node,
  visible: !1
}), T = J({
  type: __dependency_1.Node,
  displayName: "瞇牌容器"
}), H = J({
  type: __dependency_1.Vec3,
  visible: !1
}), U = J({
  displayName: "是否打開瞇牌訊號"
}), _ = J({
  displayName: "是否為沒中獎的瞇牌在滾輪結果增加瞇牌symbol"
}), D(k = C(k = N(k = P((G = (0, __dependency_0.applyDecoratedDescriptor)((F = function (t) {
  function e() {
    for (var e, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(l).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_singleReelSetting", G, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "ready_cascade_frame", z, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "reelSetting", B, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "symbolList", M, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "expectContainer", V, (0, __dependency_0.assertThisInitialized)(e)), e.mathReel = [], e.nowIndex = 0, e.finalIndex = void 0, e.symbolStep = void 0, e.status = __dependency_6.EReelStatus.FINISH, e.speedUp = 1, e.expectSymbolIdList = [], e.finalSymbolIdList = [], e.isExpecting = !1, e.recoveryExpectStep = 0, e.expectStep = 0, e.strip = 0, e.isLastStrip = !1, e.initSymbolListFinish = !1, (0, __dependency_0.initializerDefineProperty)(e, "initPositionList", j, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "isOpenExpectSignal", X, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "isAddExpectSymbolOnLastSymbolForNoWin", Y, (0, __dependency_0.assertThisInitialized)(e)), e.expectingSymbols = [], e.symbolNodePool = new Map(), e.isInitSymbolListFinish = !1, e.isNeedExpect = !1, e.expectRandomSymbolList = [], e.expectNoWinRandomSymbolList = [], e.isWinExpectSymbol = !1, e._preRandomIndex = -1, e.isStartAddNoWinExpectSymbol = !1, e.isStartAddWinExpectSymbol = !1, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var o = e.prototype;
  return o.init = function (t) {
    this.reelSetting = t, this.initSymbolList();
  }, o.initMathReel = function (t) {
    this.nowIndex = (0, __dependency_1.randomRangeInt)(0, t.length), this.mathReel = t.slice();
  }, o.initSymbolList = function () {
    this.reelSetting && (this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? this.createPortraitSlot() : this.createLandscapeSlot(), this.createClickNode(), this.hideTopAndDownSymbol(), this.initNodePool(), this.isInitSymbolListFinish = !0);
  }, o.createPortraitSlot = function () {
    var t = this.singleReelSetting.getAllCount(),
      e = this.singleReelSetting.getAllCount() * this.reelSetting.symbolSetting.symbolHeight,
      i = this.node.getComponent(__dependency_1.UITransform),
      s = new __dependency_1.Vec2(0, 0),
      n = this.singleReelSetting.topView ? 1 : 0,
      l = this.singleReelSetting.topCount * n * this.reelSetting.symbolSetting.symbolHeight * this.reelSetting.symbolSetting.symbolAnchor.y;
    i && (i.width = this.reelSetting.symbolSetting.symbolWidth, i.height = e, s = i.anchorPoint), this.symbolList = [], this.initPositionList = [], l = l + (1 - s.y) * e - this.reelSetting.symbolSetting.symbolHeight * (1 - this.reelSetting.symbolSetting.symbolAnchor.y), this.node.destroyAllChildren();
    for (var o = 0; o < t; o++) {
      var h = this.singleReelSetting.initSymbolIdList[o] || 0;
      if (this.reelSetting.symbolPrefabList[h]) {
        var g = (0, __dependency_1.instantiate)(this.reelSetting.symbolPrefabList[h]);
        g.setParent(this.node), g.setSiblingIndex(o), g.name = h + "", g.getComponent(__dependency_1.UITransform).setAnchorPoint(this.reelSetting.symbolSetting.symbolAnchor);
        var S = new __dependency_1.Vec3(0, l);
        g.setPosition(S), g.active = !0, this.initPositionList.push(S.clone()), l -= this.reelSetting.symbolSetting.symbolHeight, this.initSymbol(g, h), this.symbolList.push(g);
      } else if (this.reelSetting.symbolNode) {
        var a = (0, __dependency_1.instantiate)(this.reelSetting.symbolNode);
        a.setParent(this.node), a.active = !0, a.name = h + "", a.getComponent(__dependency_1.UITransform).setAnchorPoint(this.reelSetting.symbolSetting.symbolAnchor);
        var d = new __dependency_1.Vec3(0, l);
        a.setPosition(d), this.initPositionList.push(d.clone()), l -= this.reelSetting.symbolSetting.symbolHeight, this.initSymbol(a, h), this.symbolList.push(a);
      }
    }
  }, o.createLandscapeSlot = function () {
    var t = this.singleReelSetting.getAllCount(),
      e = this.reelSetting.symbolSetting.symbolHeight,
      i = this.singleReelSetting.getAllCount() * this.reelSetting.symbolSetting.symbolWidth,
      s = this.node.getComponent(__dependency_1.UITransform),
      n = new __dependency_1.Vec2(0, 0),
      l = -1 * this.singleReelSetting.topCount * this.reelSetting.symbolSetting.symbolWidth * this.reelSetting.symbolSetting.symbolAnchor.x;
    s && (s.width = i, s.height = e, n = s.anchorPoint), this.symbolList = [], this.initPositionList = [], l = l - n.x * i + .5 * this.reelSetting.symbolSetting.symbolWidth, this.node.destroyAllChildren();
    for (var o = 0; o < t; o++) {
      var h = this.singleReelSetting.initSymbolIdList[o] || 0;
      if (this.reelSetting.symbolPrefabList[h]) {
        var g = (0, __dependency_1.instantiate)(this.reelSetting.symbolPrefabList[h]);
        g.setParent(this.node), g.setSiblingIndex(o), g.name = h + "", g.getComponent(__dependency_1.UITransform).setAnchorPoint(this.reelSetting.symbolSetting.symbolAnchor);
        var S = new __dependency_1.Vec3(l, 0);
        g.setPosition(S), g.active = !0, this.initPositionList.push(S.clone()), l += this.reelSetting.symbolSetting.symbolWidth, this.initSymbol(g, h), this.symbolList.push(g);
      } else if (this.reelSetting.symbolNode) {
        var a = (0, __dependency_1.instantiate)(this.reelSetting.symbolNode);
        a.setParent(this.node), a.active = !0, a.name = h + "", a.getComponent(__dependency_1.UITransform).setAnchorPoint(this.reelSetting.symbolSetting.symbolAnchor);
        var d = new __dependency_1.Vec3(l, 0);
        a.setPosition(d), this.initPositionList.push(d.clone()), l += this.reelSetting.symbolSetting.symbolWidth, this.initSymbol(a, h), this.symbolList.push(a);
      }
    }
  }, o.initSymbolListPosition = function () {
    for (var t = this.symbolList.length, e = 0; e < t; e++) {
      var i = this.symbolList[e],
        s = new __dependency_1.Vec3(this.initPositionList[e].x, this.initPositionList[e].y, 0);
      i.setPosition(s), i.setParent(this.node);
    }
  }, o.initSymbol = function (t, e) {
    var i = t.getComponent(__dependency_5.SymbolBase);
    i && i.unScheduleAllCallBack(), i && i.setSymbol(e);
  }, o.initNodePool = function () {
    for (var t = this.reelSetting.symbolPrefabList.length, e = 0; e < t; e++) if (this.reelSetting.symbolPrefabList[e] && null == this.symbolNodePool.get(e + "")) {
      var i = new __dependency_1.NodePool(this.strip + "-" + e);
      this.symbolNodePool.set(e + "", i);
    }
    if (0 == t) for (var s = 0; s < this.singleReelSetting.randomSymbolList.length; s++) if (null == this.symbolNodePool.get(this.singleReelSetting.randomSymbolList[s] + "")) {
      var n = new __dependency_1.NodePool(this.strip + "" + this.singleReelSetting.randomSymbolList[s]);
      this.symbolNodePool.set(this.singleReelSetting.randomSymbolList[s] + "", n);
    }
  }, o.createClickNode = function () {
    var t,
      e,
      i = new __dependency_1.Node("click");
    this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? (t = this.reelSetting.symbolSetting.symbolWidth * (.5 - this.reelSetting.symbolSetting.symbolAnchor.x), e = this.reelSetting.symbolSetting.symbolHeight * this.singleReelSetting.getAllCount() * (.5 - this.node.getComponent(__dependency_1.UITransform).anchorY)) : (t = this.reelSetting.symbolSetting.symbolWidth * this.singleReelSetting.getAllCount() * (.5 - this.node.getComponent(__dependency_1.UITransform).anchorX), e = this.reelSetting.symbolSetting.symbolHeight * (.5 - this.reelSetting.symbolSetting.symbolAnchor.y)), i.setPosition(t, e);
    var s = i.addComponent(__dependency_1.UITransform);
    this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? (s.width = this.reelSetting.symbolSetting.symbolWidth, s.height = this.reelSetting.symbolSetting.symbolHeight * this.singleReelSetting.midCount) : (s.height = this.reelSetting.symbolSetting.symbolHeight, s.width = this.reelSetting.symbolSetting.symbolWidth * this.singleReelSetting.midCount), i.setParent(this.node);
  }, o.showTopAndDownSymbol = function () {
    for (var t = 0; t < this.singleReelSetting.topCount; t++) this.symbolList[t].active = !0;
    for (var e = this.singleReelSetting.topCount + this.singleReelSetting.midCount; e < this.singleReelSetting.getAllCount(); e++) this.symbolList[e].active = !0;
  }, o.hideTopAndDownSymbol = function () {
    for (var t = 0; t < this.singleReelSetting.topCount; t++) this.symbolList[t].active = this.singleReelSetting.topView;
    for (var e = this.singleReelSetting.topCount + this.singleReelSetting.midCount; e < this.singleReelSetting.getAllCount(); e++) this.symbolList[e].active = this.singleReelSetting.downView;
  }, o.beforeScroll = function () {
    this.initSymbolListPosition(), this.showTopAndDownSymbol(), this.finalIndex = void 0, this.speedUp = 1, this.expectStep = 0, this.recoveryExpectStep = 0, this.symbolStep = Number(this.singleReelSetting.step), this.expectSymbolIdList = [], this.finalSymbolIdList = [], this.expectNoWinRandomSymbolList = [], this.expectRandomSymbolList = [], this.isExpecting = !1, this.isNeedExpect = !1, this.isStartAddNoWinExpectSymbol = !1, this.isStartAddWinExpectSymbol = !1, this.status = __dependency_6.EReelStatus.LOOP_SCROLLING;
  }, o.startScroll = function () {
    if (this.status === __dependency_6.EReelStatus.FINISH) if (this.beforeScroll(), this.singleReelSetting.dampingSetting.firstDamping) {
      var t,
        e,
        i = this.reelSetting.symbolSetting.symbolHeight * this.singleReelSetting.dampingSetting.firstDampingAmplitude,
        s = this.reelSetting.symbolSetting.symbolWidth * this.singleReelSetting.dampingSetting.firstDampingAmplitude;
      this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? (t = (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.DOWN ? "+=" : "-=") + i, e = "+=0") : (t = "+=0", e = (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.RIGHT ? "-=" : "+=") + s), gsap.to(this.symbolList, {
        duration: __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.dampingSetting.firstDampingTime, 3),
        ease: Linear.easeNone,
        x: e,
        y: t,
        onComplete: this.backFirstOriginal,
        delay: this.singleReelSetting.dampingSetting.firstDampingDelay * this.strip,
        callbackScope: this
      });
    } else this.scrollTween(this.loopScroll, __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.moveOneSymbolTime * this.speedUp, 3)), this.isLastStrip && dispatch(__dependency_7.SingleReelEvents.START_SPIN);
  }, o.backFirstOriginal = function () {
    gsap.killTweensOf(this.symbolList);
    var t,
      e,
      i = this.reelSetting.symbolSetting.symbolHeight * this.singleReelSetting.dampingSetting.firstDampingAmplitude,
      s = this.reelSetting.symbolSetting.symbolWidth * this.singleReelSetting.dampingSetting.firstDampingAmplitude;
    this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? (t = (this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN ? "-=" : "+=") + i, e = "+=0") : (e = (this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.RIGHT ? "+=" : "-=") + s, t = "+=0"), gsap.to(this.symbolList, {
      duration: __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.dampingSetting.firstDampingTime, 3),
      ease: Linear.easeNone,
      x: e,
      y: t,
      onComplete: this.loopScroll,
      onCompleteParams: [!0],
      callbackScope: this
    }), this.isLastStrip && dispatch(__dependency_7.SingleReelEvents.START_SPIN);
  }, o.loopScroll = function (t) {
    !t && this.changeSymbolList();
    var e = this.singleReelSetting.moveOneSymbolTime;
    this.status == __dependency_6.EReelStatus.SCROLLING || this.status == __dependency_6.EReelStatus.STOPPING ? this.scrollTween(this.normalScroll, __dependency_2.CmmUtils.roundDecimal(e * this.speedUp, 3)) : this.scrollTween(this.loopScroll, __dependency_2.CmmUtils.roundDecimal(e * this.speedUp, 3));
  }, o.getExpectSymbol = function (t) {
    for (var e, i = !1, s = 0; s < this.expectingSymbols.length; s++) {
      if (e = this.expectingSymbols[s], this.expectSymbolIdList.indexOf(e) > -1) {
        i = !0;
        break;
      }
    }
    if (this.isOpenExpectSignal && !this.isNeedExpect) if (i) {
      if (this.expectRandomSymbolList.length > 0) {
        var n = this.expectRandomSymbolList.pop();
        null != n && (t = n);
      }
    } else if (this.expectNoWinRandomSymbolList.length > 0) {
      var l = this.expectNoWinRandomSymbolList.pop();
      null != l && (t = l);
    }
    return t;
  }, o.getFullComboExpectSymbol = function (t) {
    for (var e, i = !1, s = 0; s < this.expectingSymbols.length; s++) {
      e = this.expectingSymbols[s];
      for (var n = 0; n < this.expectSymbolIdList.length && 0 != (i = this.expectSymbolIdList[s] == e); n++);
    }
    if (this.isOpenExpectSignal && this.isNeedExpect) if (i) {
      if (this.expectRandomSymbolList.length > 0) {
        var l = this.expectRandomSymbolList.pop();
        null != l && (t = l);
      }
    } else if (this.expectNoWinRandomSymbolList.length > 0) {
      var o = this.expectNoWinRandomSymbolList.pop();
      null != o && (t = o);
    }
    return t;
  }, o.normalScroll = function () {
    var t;
    if (this.symbolStep >= this.singleReelSetting.getAllCount() + 1 && this.symbolStep <= this.singleReelSetting.getAllCount() + 2) if (this.mathReel && this.mathReel.length > 0) this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.RIGHT ? this.countDownIndex() : this.countUpIndex(), t = this.mathReel[this.nowIndex];else if (this.singleReelSetting.randomSymbolList.length > 0) {
      var e = (0, __dependency_1.randomRangeInt)(0, this.singleReelSetting.randomSymbolList.length);
      this._preRandomIndex > -1 && this._preRandomIndex == e && (e = (0, __dependency_1.randomRangeInt)(0, e)), this._preRandomIndex = e, t = this.singleReelSetting.randomSymbolList[e];
    }
    this.isExpecting && (t = this.isNeedExpect ? this.getFullComboExpectSymbol(t) : this.getExpectSymbol(t)), this.isStartAddNoWinExpectSymbol && (t = this.expectNoWinRandomSymbolList.pop()), this.isStartAddWinExpectSymbol && (t = this.expectRandomSymbolList.pop()), this.changeSymbolList(t), this.recoveryExpectStep > 0 ? (this.symbolStep = Number(this.recoveryExpectStep), this.recoveryExpectStep = 0) : this.isExpecting || __dependency_4.ReelDataSettingObj.expectStrip != this.strip ? (this.expectStep > 0 && this.addExpectSymbol(), this.symbolStep--) : this.startExpect(), this.isExpecting && (this.speedUp = this.speedUp * this.reelSetting.expectSetting.incrementTime);
    var i = __dependency_4.ReelDataSettingObj.getSpeed() * this.speedUp;
    this.checkFinalScroll() ? (this.symbolStep = this.singleReelSetting.getAllCount(), this.nowIndex = Number(this.finalIndex), this.scrollTween(this.lastScroll, __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.stopReelTime * i, 3))) : this.scrollTween(this.normalScroll, __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.moveOneSymbolTime * i, 3));
  }, o.lastScroll = function () {
    var t = this.getLastSymbolId();
    __dependency_4.ReelDataSettingObj.expectStrip, this.strip, this.changeSymbolList(t);
    var e = __dependency_4.ReelDataSettingObj.getSpeed() * this.speedUp;
    0 == this.symbolStep ? this.endScroll() : this.expectStep > 0 ? (this.addExpectSymbol(), this.scrollTween(this.normalScroll, __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.moveOneSymbolTime * e, 3))) : this.isExpecting || __dependency_4.ReelDataSettingObj.expectStrip !== this.strip ? this.scrollTween(this.lastScroll, __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.stopReelTime * e, 3)) : (this.startExpect(), this.scrollTween(this.normalScroll, __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.moveOneSymbolTime * e, 3)));
  }, o.endScroll = function () {
    if (this.singleReelSetting.dampingSetting.lastDamping) {
      this.status = __dependency_6.EReelStatus.END_SCROLL, this.node.emit(__dependency_7.SingleReelEvents.END_SCROLL, this.strip);
      var t,
        e,
        i = this.reelSetting.symbolSetting.symbolHeight * this.singleReelSetting.dampingSetting.lastDampingAmplitude,
        s = this.reelSetting.symbolSetting.symbolWidth * this.singleReelSetting.dampingSetting.lastDampingAmplitude;
      this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? (e = (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.DOWN ? "-=" : "+=") + i, t = "+=0") : (t = (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.RIGHT ? "+=" : "-=") + s, e = "+=0"), gsap.to(this.symbolList, {
        duration: __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.dampingSetting.lastDampingTime * __dependency_4.ReelDataSettingObj.getSpeed() * this.speedUp, 3),
        ease: Linear.easeNone,
        x: t,
        y: e,
        onComplete: this.backLastOriginal,
        callbackScope: this
      });
    } else this.finish();
  }, o.finish = function () {
    var t = this;
    this.hideTopAndDownSymbol(), this.expectContainer && (this.expectContainer.active = !1), this.expectNoWinRandomSymbolList = [], this.expectRandomSymbolList = [], this.reorderChildren(), this.scheduleOnce(function () {
      t.unscheduleAllCallbacks(), t.singleReelSetting.stopSoundBundle && App.globalAudio.playEffect(t.singleReelSetting.stopSoundUrl, t.singleReelSetting.stopSoundBundle, !1), t.status = __dependency_6.EReelStatus.FINISH, t.node.emit(__dependency_7.SingleReelEvents.FINISH, t.strip);
    }, 0);
  }, o.reorderChildren = function () {
    for (var t = 0; t < this.symbolList.length; t++) {
      this.symbolList[t].parent = this.node;
      var e = this.symbolList[t].getComponent(__dependency_5.SymbolBase);
      null != e && (e.originalParent = this.node);
    }
    for (var i = 0; i < this.symbolList.length; i++) this.symbolList[i].setSiblingIndex(i);
  }, o.backLastOriginal = function () {
    var t,
      e,
      i = this.reelSetting.symbolSetting.symbolHeight * this.singleReelSetting.dampingSetting.lastDampingAmplitude,
      s = this.reelSetting.symbolSetting.symbolWidth * this.singleReelSetting.dampingSetting.lastDampingAmplitude;
    this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? (e = (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.DOWN ? "+=" : "-=") + i, t = "+=0") : (t = (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.RIGHT ? "-=" : "+=") + s, e = "+=0"), gsap.to(this.symbolList, {
      duration: __dependency_2.CmmUtils.roundDecimal(this.singleReelSetting.dampingSetting.lastDampingTime * __dependency_4.ReelDataSettingObj.getSpeed() * this.speedUp, 3),
      ease: Linear.easeNone,
      x: t,
      y: e,
      onComplete: this.finish,
      callbackScope: this
    });
  }, o.getLastSymbolId = function () {
    if (this.symbolStep--, this.isExpecting && this.isOpenExpectSignal && 0 == this.isWinExpectSymbol && this.isAddExpectSymbolOnLastSymbolForNoWin) {
      if (this.singleReelSetting.topCount > 0) {
        var t = this.expectNoWinRandomSymbolList[0];
        null != t && (this.finalSymbolIdList[this.singleReelSetting.topCount - 1] = t);
      }
      if (this.singleReelSetting.downCount > 0) {
        var e = this.expectNoWinRandomSymbolList[1];
        null != e && (this.finalSymbolIdList[this.singleReelSetting.getAllCount() - this.singleReelSetting.topCount] = e);
      }
    }
    if (this.finalSymbolIdList.length > this.symbolStep) return this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.RIGHT ? this.finalSymbolIdList[this.symbolStep] : this.finalSymbolIdList[this.finalSymbolIdList.length - this.symbolStep - 1];
  }, o.scrollTween = function (t, e) {
    gsap.killTweensOf(this.symbolList), gsap.to(this.symbolList, {
      duration: e,
      ease: Linear.easeNone,
      x: this.getScrollX(),
      y: this.getScrollY(),
      onComplete: t,
      callbackScope: this
    });
  }, o.stop = function () {
    this.status === __dependency_6.EReelStatus.SCROLLING && (this.speedUp = Number(this.reelSetting.speedUp), this.status = __dependency_6.EReelStatus.STOPPING);
  }, o.directShowStop = function () {
    if (this.status == __dependency_6.EReelStatus.SCROLLING && this.status === __dependency_6.EReelStatus.SCROLLING) {
      this.status = __dependency_6.EReelStatus.DIRECT_SHOW_STOP, gsap.killTweensOf(this.symbolList);
      for (var t = 0; t < this.symbolList.length; t++) {
        var e = this.finalSymbolIdList[t];
        if (null == e) if (this.mathReel && this.mathReel.length > 0) {
          var i = (0, __dependency_1.randomRangeInt)(0, this.mathReel.length);
          e = this.mathReel[i];
        } else e = this.getRandomSymbolId();
        var s = this.symbolList[t];
        s.getComponent(__dependency_5.SymbolBase).setSymbol(e), s.name = "" + e, this.symbolList[t].setPosition(this.initPositionList[t]);
      }
      this.expectContainer && (this.expectContainer.active = !1), this.reorderChildren(), this.endScroll();
    }
  }, o.startExpect = function () {
    this.isExpecting = !0, this.speedUp = Number(this.reelSetting.expectSetting.speedUp), this.expectStep = Number(this.reelSetting.expectSetting.step), this.isWinExpectSymbol = this.expectRandomSymbolList.length > 0, this.node.emit(__dependency_7.SingleReelEvents.START_EXPECT, this.strip), this.expectContainer && (this.expectContainer.active = !0);
  }, o.addExpectSymbol = function () {
    this.symbolStep = this.singleReelSetting.getAllCount() + this.expectStep, this.expectStep = 0;
  }, o.countUpIndex = function () {
    return this.nowIndex++, this.nowIndex = this.nowIndex % this.mathReel.length, this.nowIndex;
  }, o.checkFinalScroll = function () {
    return this.status === __dependency_6.EReelStatus.STOPPING || this.symbolStep <= this.singleReelSetting.getAllCount();
  }, o.countDownIndex = function () {
    return isNaN(this.nowIndex) && (this.nowIndex = (0, __dependency_1.randomRangeInt)(0, this.mathReel.length)), this.nowIndex--, this.nowIndex < 0 && (this.nowIndex = this.mathReel.length + this.nowIndex), this.nowIndex;
  }, o.setFinalIndex = function (t, e) {
    this.status === __dependency_6.EReelStatus.LOOP_SCROLLING && (this.updateExpectSymbolList(t, e), this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.RIGHT ? (this.finalIndex = t + this.singleReelSetting.midCount + this.singleReelSetting.downCount, this.finalIndex = this.finalIndex % this.mathReel.length) : (this.finalIndex = t - this.singleReelSetting.topCount - 1, this.finalIndex < 0 && (this.finalIndex = this.mathReel.length + this.finalIndex)), this.status = __dependency_6.EReelStatus.SCROLLING, __dependency_4.ReelDataSettingObj.getAllStop() && this.directShowStop());
  }, o.updateExpectSymbolList = function (t, e) {
    if (e) this.expectSymbolIdList = e.slice(0), this.updateFinalSymbolIdList();else if (this.expectSymbolIdList = this.mathReel.slice(t, t + this.singleReelSetting.midCount), this.expectSymbolIdList.length < this.singleReelSetting.midCount) {
      var i = this.mathReel.slice(0, this.singleReelSetting.midCount - this.expectSymbolIdList.length);
      this.expectSymbolIdList = this.expectSymbolIdList.concat(i);
    }
  }, o.updateFinalSymbolIdList = function () {
    if (this.finalSymbolIdList = this.expectSymbolIdList.slice(0), this.singleReelSetting.topCount > 0) for (var t = void 0, e = 0; e < this.singleReelSetting.topCount; e++) this.ready_cascade_frame.length > 0 && (t = this.ready_cascade_frame.pop()), this.finalSymbolIdList.unshift(t);
    if (this.singleReelSetting.downCount > 0) for (var i = 0; i < this.singleReelSetting.downCount; i++) this.finalSymbolIdList.push(void 0);
  }, o.checkSymbolId = function (t, e) {
    var i = Number(t.name);
    if (void 0 === e && null == (e = this.mathReel[this.nowIndex])) if (this.singleReelSetting.randomSymbolList.length > 0) {
      var s = (0, __dependency_1.randomRangeInt)(0, this.singleReelSetting.randomSymbolList.length);
      this._preRandomIndex > -1 && this._preRandomIndex == s && (s = (0, __dependency_1.randomRangeInt)(0, s)), this._preRandomIndex = s, e = this.singleReelSetting.randomSymbolList[s];
    } else Log.e("請設定隨機symbol id陣列");
    if (i !== e) {
      var n = this.changeSymbol(e, t);
      n && (n.setParent(this.node), n.name = e + "", t = n);
    }
    this.initSymbol(t, e);
    var l = -1;
    return this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.RIGHT ? l = 0 : this.singleReelSetting.scrollDirection != __dependency_6.EScrollDirection.UP && this.singleReelSetting.scrollDirection != __dependency_6.EScrollDirection.LEFT || (l = this.initPositionList.length - 1), t.getComponent(__dependency_1.UITransform).setAnchorPoint(this.reelSetting.symbolSetting.symbolAnchor), t.setPosition(this.initPositionList[l]), t;
  }, o.getRandomSymbolId = function () {
    var t = -1;
    if (this.singleReelSetting.randomSymbolList.length > 0) {
      var e = (0, __dependency_1.randomRangeInt)(0, this.singleReelSetting.randomSymbolList.length);
      t = this.singleReelSetting.randomSymbolList[e];
    }
    return t;
  }, o.changeSymbol = function (t, e) {
    var i = this.symbolNodePool.get(e.name);
    if (i) i.put(e);else {
      var s = new __dependency_1.NodePool(this.strip + "" + t);
      s.put(e), this.symbolNodePool.set(t + "", s);
    }
    var n = this.symbolNodePool.get(t + "");
    if (n && n.size() > 0) {
      var l = n.get();
      return l.active = !0, l;
    }
    if (this.reelSetting.symbolPrefabList[t]) return (0, __dependency_1.instantiate)(this.reelSetting.symbolPrefabList[t]);
    if (this.reelSetting.symbolNode) {
      var o = (0, __dependency_1.instantiate)(this.reelSetting.symbolNode);
      return o.active = !0, o;
    }
    return null;
  }, o.changeSymbolList = function (t) {
    if (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.RIGHT) {
      this.countDownIndex();
      var e = this.symbolList.pop();
      e = this.checkSymbolId(e, t), (this.isExpecting || this.isStartAddNoWinExpectSymbol || this.isStartAddWinExpectSymbol) && (this.expectContainer && this.expectingSymbols.indexOf(t) > -1 && this.expectContainer.addChild(e), this.isStartAddNoWinExpectSymbol = !1, this.isStartAddWinExpectSymbol = !1), this.symbolList.unshift(e);
    } else if (this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.UP || this.singleReelSetting.scrollDirection === __dependency_6.EScrollDirection.LEFT) {
      this.countUpIndex();
      var i = this.symbolList.shift();
      i = this.checkSymbolId(i, t), this.symbolList.push(i);
    }
  }, o.getScrollY = function () {
    return this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN ? "-=" + this.reelSetting.symbolSetting.symbolHeight : this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? "+=" + this.reelSetting.symbolSetting.symbolHeight : this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.LEFT || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.RIGHT ? "+=0" : void 0;
  }, o.getScrollX = function () {
    return this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.DOWN || this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.UP ? "-=0" : this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.LEFT ? "-=" + this.reelSetting.symbolSetting.symbolWidth : this.singleReelSetting.scrollDirection == __dependency_6.EScrollDirection.RIGHT ? "+=" + this.reelSetting.symbolSetting.symbolWidth : void 0;
  }, o.getMidSymbolNode = function (t) {
    return this.symbolList[this.singleReelSetting.topCount + t];
  }, o.getMidSymbolList = function () {
    return this.symbolList.slice(this.singleReelSetting.topCount, this.singleReelSetting.topCount + this.singleReelSetting.midCount);
  }, o.close = function () {
    this.symbolNodePool.forEach(function (t) {
      t.clear();
    }), gsap.killTweensOf(this.symbolList);
  }, o.onDestroy = function () {
    gsap.killTweensOf(this.symbolList);
  }, (0, __dependency_0.createClass)(e, [{
    key: "singleReelSetting",
    get: function () {
      return this._singleReelSetting;
    },
    set: function (t) {
      this._singleReelSetting = t;
    }
  }]), e;
}(__dependency_3.default)).prototype, "_singleReelSetting", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "singleReelSetting", [E], Object.getOwnPropertyDescriptor(F.prototype, "singleReelSetting"), F.prototype), z = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "ready_cascade_frame", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), B = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "reelSetting", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "symbolList", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "expectContainer", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "initPositionList", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), X = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "isOpenExpectSignal", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Y = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "isAddExpectSymbolOnLastSymbolForNoWin", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), k = F)) || k) || k) || k) || k));
__dependency_1.cclegacy._RF.pop();
