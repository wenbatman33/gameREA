// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReelsController.ts.js
// SHA256: 57eeb52b954ecad90bf836e1d108b4a7803f0bad1d8a9fd737eab81d00346bf1
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingleReel";
import * as __dependency_3 from "./main-ReelSetting";
import * as __dependency_4 from "./main-ReelEvent";
import * as __dependency_5 from "./main-ReelDataSetting";
import * as __dependency_6 from "./main-EventComponent";
import * as __dependency_7 from "./main-ReelEnum";
var __export_0;
export { __export_0 as ReelsController };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelsController":
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
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0, void 0;
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
var y, v, x, R, b, E, I, C, N, O, w, _;
__dependency_1.cclegacy._RF.push({}, "3bce7W7crhF3rOT/2F0rIWl", "ReelsController", void 0), Object.defineProperty(__dependency_1.Node.prototype, "x", {
  get: function () {
    return this.position.x;
  },
  set: function (t) {
    var e = this.position;
    this.position = new __dependency_1.Vec3(t, e.y, e.z);
  },
  enumerable: !0,
  configurable: !0
}), Object.defineProperty(__dependency_1.Node.prototype, "y", {
  get: function () {
    return this.position.y;
  },
  set: function (t) {
    var e = this.position;
    this.position = new __dependency_1.Vec3(e.x, t, e.z);
  },
  enumerable: !0,
  configurable: !0
});
var F = __dependency_1._decorator.ccclass,
  k = __dependency_1._decorator.property,
  H = __dependency_1._decorator.menu,
  P = __dependency_1._decorator.executeInEditMode,
  D = __dependency_1._decorator.requireComponent;
__publish("ReelsController", (y = F("ReelsController"), v = H("Slot/Reel/ReelsController"), x = P(), R = D(__dependency_1.Layout), b = k({
  type: __dependency_3.ReelSetting
}), E = k({
  type: __dependency_3.ReelSetting
}), I = k(__dependency_2.SingleReel), C = k({
  type: __dependency_2.SingleReel,
  tooltip: "填入 SingleReel[]"
}), y(N = v(N = x(N = R((w = (0, __dependency_0.applyDecoratedDescriptor)((O = function (t) {
  function e() {
    for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_reelSetting", w, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_reelList", _, (0, __dependency_0.assertThisInitialized)(e)), e.status = __dependency_7.EReelStatus.FINISH, e.reelResult = void 0, e.newReelResult = void 0, e.winSymbol = void 0, e.winPosition = void 0, e.currentExpectItem = null, e.currentNoWinExpectItem = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var o = e.prototype;
  return o.start = function () {
    this.initSingleReels();
  }, o.onDestroy = function () {
    __dependency_5.ReelDataSettingObj.expectStrip = void 0;
  }, o.addEvents = function () {
    t.prototype.addEvents.call(this);
    for (var e = 0; e < this.reelList.length; e++) this.reelList[e].node.on(__dependency_4.SingleReelEvents.FINISH, this.onSingleReelFinish, this), this.reelList[e].node.on(__dependency_4.SingleReelEvents.END_SCROLL, this.onEndScroll, this), this.reelList[e].node.on(__dependency_4.SingleReelEvents.START_EXPECT, this.onStartExpect, this);
  }, o.getWinSymbol = function () {
    this.winPosition = [], this.winSymbol = [];
    for (var t = 0; t < this.reelResult.length; t++) {
      this.winPosition[t] = [], this.winSymbol[t] = [];
      for (var e = (0, __dependency_1.randomRangeInt)(0, this.reelList[t].getMidSymbolList().length), i = 0; i < e; i++) {
        var n = (0, __dependency_1.randomRangeInt)(0, this.reelList[t].getMidSymbolList().length);
        this.winPosition[t].push(n);
        var s = (0, __dependency_1.randomRangeInt)(0, this.reelList[t].singleReelSetting.randomSymbolList.length);
        this.winSymbol[t].push(this.reelList[t].singleReelSetting.randomSymbolList[s]);
      }
    }
    return this.winSymbol.slice();
  }, o.initSingleReels = function (t, e) {
    for (var i = this.reelList.length, n = 0; n < i; n++) this.reelList[n].strip = n, e && (this.reelList[n].singleReelSetting.initSymbolIdList = e[n].slice()), this.reelList[n].init(this.reelSetting), this.reelList[n].isLastStrip = n === i - 1, t && this.reelList[n].initMathReel(t[n]);
  }, o.initMathReels = function (t) {
    for (var e = this.reelList.length, i = 0; i < e; i++) this.reelList[i].initMathReel(t[i]);
  }, o.initExpect = function () {
    for (var t = this.reelSetting.expectSetting.itemList, e = t.length, i = 0; i < e; i++) t[i].count = 0;
  }, o.beforeScroll = function () {
    this.initExpect();
  }, o.startScroll = function (t) {
    if (this.status == __dependency_7.EReelStatus.FINISH) {
      this.beforeScroll();
      for (var e = this.reelList.length, i = 0; i < e; i++) if (t) {
        var n = t.indexOf(i);
        n > -1 ? (this.reelList[i].isLastStrip = n === t.length - 1, this.reelList[i].startScroll()) : this.reelList[i].isLastStrip = !1;
      } else this.reelList[i].isLastStrip = i === e - 1, this.reelList[i].startScroll();
      this.status = __dependency_7.EReelStatus.LOOP_SCROLLING;
    }
  }, o.stopAllSingleReel = function () {
    for (var t = this.reelList.length, e = 0; e < t; e++) this.reelList[e].stop();
  }, o.directShowStopSingleReel = function () {
    for (var t = this.reelList.length, e = 0; e < t; e++) this.reelList[e].directShowStop();
  }, o.setCascadeFrame = function (t) {
    for (var e = this.reelList.length, i = 0; i < e; i++) {
      var n = t[i];
      this.reelList[i].ready_cascade_frame = n.slice(0);
    }
  }, o.finish = function () {}, o.stopExpect = function (t) {
    Log.d("stopExpect strip::::", t);
  }, o.setReelResult = function (t, e) {
    for (var i = this.reelList.length, n = 0; n < i; n++) e && e[n] ? this.reelList[n].setFinalIndex(e[n]) : this.reelList[n].setFinalIndex(void 0, t[n]);
    this.reelResult = t.slice(), this.currentExpectItem = this.checkCurrentSpinExpectItem(this.reelResult.slice()), this.currentNoWinExpectItem = this.checkCurrentSpinIsHaveExpect(this.reelResult.slice()), this.status = __dependency_7.EReelStatus.SCROLLING, this.node.emit(__dependency_4.ReelControllerEvents.START_NORMAL_SCROLL_EVENT);
  }, o.recoveryExpect = function () {
    for (var t = this.reelList.filter(function (t) {
        return t.status != __dependency_7.EReelStatus.FINISH;
      }), e = t.length, i = 0; i < e; i++) {
      var n = t[i];
      n.expectStep = 0, n.recoveryExpectStep = Number(this.reelList[i].singleReelSetting.step) + 1;
    }
  }, o.expectCount = function (t, e) {
    for (var i = this.reelSetting.expectSetting.itemList, n = i.length, s = function () {
        var n = i[r];
        t.some(function (t) {
          return n.symbolList.indexOf(t) > -1;
        }) && n.reelIdList.indexOf(e) > -1 && n.count++;
      }, r = 0; r < n; r++) s();
  }, o.findExpectItem = function (t) {
    return this.reelSetting.expectSetting.itemList.find(function (e) {
      return e.count >= e.overCount && e.reelIdList.indexOf(t) > -1;
    });
  }, o.checkCurrentSpinIsHaveExpect = function (t) {
    for (var e = JSON.parse(JSON.stringify(this.reelSetting.expectSetting.itemList)), i = function () {
        for (var i = e[n], s = 0; s <= i.overCount; s++) {
          var r = i.reelIdList[s];
          if (!t[r].some(function (t) {
            return i.symbolList.indexOf(t) > -1;
          })) break;
          i.count++;
        }
      }, n = 0; n < e.length; n++) i();
    var s = e.find(function (t) {
      return t.count >= t.overCount;
    });
    return null != s ? s.count >= s.reelIdList.length ? void 0 : s : void 0;
  }, o.checkCurrentSpinExpectItem = function (t) {
    for (var e = JSON.parse(JSON.stringify(this.reelSetting.expectSetting.itemList)), i = function () {
        for (var i = e[n], s = 0; s <= i.overCount; s++) {
          var r = i.reelIdList[s];
          t[r].some(function (t) {
            return i.symbolList.indexOf(t) > -1;
          }) && i.count++;
        }
      }, n = 0; n < e.length; n++) i();
    return e.find(function (t) {
      return t.count > t.overCount;
    });
  }, o.customCheckExpect = function (t, e) {
    return !0;
  }, o.onStartExpect = function (t) {
    Log.d("startExpect:::::strip::::", t);
  }, o.onEndScroll = function (t) {
    Log.d("onEndScroll::::::::::", t);
  }, o.onSingleReelFinish = function (t) {
    if (__dependency_5.ReelDataSettingObj.expectStrip == t && (this.recoveryExpect(), this.stopExpect(t), __dependency_5.ReelDataSettingObj.expectStrip = void 0), this.checkAllReelStatus(__dependency_7.EReelStatus.FINISH)) this.status = __dependency_7.EReelStatus.FINISH, this.node.emit(__dependency_4.ReelControllerEvents.FINISH_EVENT), this.finish();else if (!__dependency_5.ReelDataSettingObj.getAllStop()) {
      this.expectCount(this.reelList[t].expectSymbolIdList, t);
      var e = this.reelList.findIndex(function (t) {
          return t.status === __dependency_7.EReelStatus.SCROLLING;
        }),
        i = this.findExpectItem(e);
      if (i && this.customCheckExpect(e, i)) {
        __dependency_5.ReelDataSettingObj.expectStrip = e, i.symbolList.length > 0 && (this.reelList[e].expectingSymbols = i.symbolList.slice(), this.reelList[e].expectRandomSymbolList = this.shuffle(i.winningExpectRandomSymbolList.slice(), i.symbolList[0]), this.reelList[e].expectNoWinRandomSymbolList = this.shuffle(i.noWinExpectRandomSymbolList.slice(), i.symbolList[0]));
        for (var n = this.reelList.filter(function (t) {
            return t.status !== __dependency_7.EReelStatus.FINISH && t.strip !== e;
          }), s = n.length, r = 0; r < s; r++) n[r].recoveryExpectStep = 0, n[r].expectStep = 999;
      }
      if (-1 == e) return;
      if (this.reelList[e].isNeedExpect) {
        __dependency_5.ReelDataSettingObj.expectStrip = e, this.reelList[e].expectingSymbols = this.reelSetting.expectSetting.fullComboItem.symbolList.slice(), this.reelList[e].expectRandomSymbolList = this.reelSetting.expectSetting.fullComboItem.getFullComboExpectWinSymbols().slice(), this.reelList[e].expectNoWinRandomSymbolList = this.reelSetting.expectSetting.fullComboItem.noWinExpectRandomSymbolList.slice();
        for (var o = this.reelList.filter(function (t) {
            return t.status !== __dependency_7.EReelStatus.FINISH && t.strip !== e;
          }), l = o.length, c = 0; c < l; c++) o[c].recoveryExpectStep = 0, o[c].expectStep = 999;
      }
    }
  }, o.checkAllReelStatus = function (t) {
    return this.reelList.every(function (e) {
      return e.status == t;
    });
  }, o.close = function () {
    for (var t = this.reelList.length, e = 0; e < t; e++) this.reelList[e].close();
    this.onDestroy();
  }, o.shuffle = function (t, e) {
    void 0 === e && (e = void 0);
    for (var i = t.slice(), n = i.length - 1; n > 0; n--) {
      var s = Math.floor(Math.random() * (n + 1));
      if (null == e || i[s] != e && i[n] != e) {
        var r = [i[s], i[n]];
        i[n] = r[0], i[s] = r[1];
      }
    }
    return i;
  }, (0, __dependency_0.createClass)(e, [{
    key: "reelSetting",
    get: function () {
      return this._reelSetting;
    },
    set: function (t) {
      this._reelSetting = t;
    }
  }, {
    key: "reelList",
    get: function () {
      return this._reelList;
    },
    set: function (t) {
      this._reelList = t;
    }
  }]), e;
}(__dependency_6.default)).prototype, "_reelSetting", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.ReelSetting();
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(O.prototype, "reelSetting", [E], Object.getOwnPropertyDescriptor(O.prototype, "reelSetting"), O.prototype), _ = (0, __dependency_0.applyDecoratedDescriptor)(O.prototype, "_reelList", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(O.prototype, "reelList", [C], Object.getOwnPropertyDescriptor(O.prototype, "reelList"), O.prototype), N = O)) || N) || N) || N) || N));
__dependency_1.cclegacy._RF.pop();
