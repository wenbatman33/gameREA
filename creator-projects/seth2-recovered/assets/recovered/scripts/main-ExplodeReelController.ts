// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ExplodeReelController.ts.js
// SHA256: 61c6ef2b1dabe36b225d1d34b45ed5dea8824389b53044e2aee8c5335594f21c
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-ReelDataSetting";
import * as __dependency_2 from "./main-SymbolBase";
import * as __dependency_3 from "./main-ReelEnum";
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
  void 0, void 0, void 0;
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
__dependency_0.cclegacy._RF.push({}, "f79c1p9PL5G5YvBHjcQ58lp", "ExplodeReelController", void 0);
__publish("default", function () {
  function t(t) {
    this.durationList = [.6, .5, .3, .3], this.delayFinishList = [.5, .45, .35, .35], this.symbolDelay = .05, this.easing = "bounceOut", this.reelsController = void 0, this.reelsController = t;
  }
  var e = t.prototype;
  return e.startExplode = function () {
    this.reelsController.reelList.forEach(function (t) {
      t.initSymbolListPosition();
    }), this.changeExplodeSymbolList();
  }, e.changeExplodeSymbolList = function () {
    var t = this;
    this.forEach(function (e, o, n) {
      var r = t.reelsController.reelList[e],
        a = n.getComponent(__dependency_2.SymbolBase);
      if (a.isExplode) {
        a.isExplode = !1;
        var c = o + r.singleReelSetting.topCount;
        r.symbolList.splice(c, 1);
        var h = r.initPositionList[0].clone();
        if (r.singleReelSetting.scrollDirection === __dependency_3.EScrollDirection.DOWN) {
          r.countDownIndex(), h = h.add((0, __dependency_0.v3)(0, r.reelSetting.symbolSetting.symbolHeight, 0));
          var u = void 0;
          r.ready_cascade_frame.length > 0 && (u = r.ready_cascade_frame.pop());
          var y = r.checkSymbolId(n, u);
          y.setPosition(h), r.symbolList.splice(r.singleReelSetting.topCount, 0, y);
        } else {
          r.countUpIndex(), h = h.subtract((0, __dependency_0.v3)(0, r.reelSetting.symbolSetting.symbolHeight));
          var d = r.checkSymbolId(n, void 0);
          d.setPosition(h), r.symbolList.push(d);
        }
      }
    }), this.beforeDropAnimation(), this.startDropAnimation();
  }, e.beforeDropAnimation = function () {}, e.startDropAnimation = function () {
    var t = this,
      e = !0,
      i = __dependency_1.ReelDataSettingObj.getSpeedIndex(),
      o = this.durationList[i],
      s = this.delayFinishList[i];
    this.reelsController.reelList.forEach(function (i) {
      for (var n = 0, l = i.symbolList.length - 1; l >= 0; l--) {
        var r = i.symbolList[l],
          a = i.initPositionList[l].clone();
        r.y !== a.y && (e = t.dropSymbolAnimation({
          symbolNode: r,
          isFirst: e,
          delay: n,
          vec2: a,
          duration: o,
          delayFinish: s
        })), n += t.symbolDelay;
      }
    });
  }, e.dropSymbolAnimation = function (t) {
    var e = this,
      i = (0, __dependency_0.tween)(t.symbolNode).delay(t.delay).to(t.duration, {
        y: t.vec2.y
      }, {
        easing: this.easing
      });
    return t.isFirst && (t.isFirst = !1, i.delay(t.delayFinish), i.call(function () {
      return e.finish();
    })), i.start(), t.isFirst;
  }, e.forEach = function (t) {
    for (var e = this.reelsController.reelList.length, i = 0; i < e; i++) for (var o = this.reelsController.reelList[i].getMidSymbolList(), n = o.length, s = 0; s < n; s++) t(i, s, o[s]);
  }, e.finish = function () {}, t;
}());
__dependency_0.cclegacy._RF.pop();
