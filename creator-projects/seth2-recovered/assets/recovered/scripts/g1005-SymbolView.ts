// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-SymbolView.ts.js
// SHA256: 27d84dfd86b914b8b1ad592e1df497df3f6097685e8e9df96fd9590978cb387f
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./g1005-Symbol";
import * as __dependency_4 from "./g1005-GameConfigModel";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-GameSymbolID";
import * as __dependency_7 from "./g1005-GameEvent";
import * as __dependency_8 from "./g1005-types";
import * as __dependency_9 from "./framework-SlotFrameworkEvent";
var __export_0;
export { __export_0 as SymbolView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SymbolView":
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
(function (t) {
  void 0;
})(__dependency_8);
(function (t) {
  void 0;
})(__dependency_9);
var I, A, E, v, B, C, Y;
__dependency_1.cclegacy._RF.push({}, "389a4wz1DZLjZ5mgKPtdiUa", "SymbolView", void 0);
var D = __dependency_1._decorator.ccclass,
  w = __dependency_1._decorator.property;
__publish("SymbolView", (I = D("SymbolView"), A = w(__dependency_1.Prefab), E = w(__dependency_1.Node), I((C = (0, __dependency_0.applyDecoratedDescriptor)((B = function (t) {
  function o() {
    for (var o, e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
    return (o = Reflect.construct(t, [this].concat(a).slice(1), new.target || o) || this).symbolsMap = new Map(), o.outSymbolMap = new Map(), o.lockSymbolMap = new Map(), o.SYMBOL_ROW = 6, o.SYMBOL_COL = 5, o.TOTAL_SYMBOL = o.SYMBOL_ROW * o.SYMBOL_COL, o.GAME_HEIGHT = 720, o.BIG_SYMBOLS = [__dependency_6.EBackendSymbolID.EYE, __dependency_6.EBackendSymbolID.SNAKE, __dependency_6.EBackendSymbolID.BOW, __dependency_6.EBackendSymbolID.MACHETE, __dependency_6.EBackendSymbolID.SCATTER, __dependency_6.EBackendSymbolID.JACKPOT], o.TIMES_SYMBOLS = [__dependency_6.EBackendSymbolID.T1, __dependency_6.EBackendSymbolID.T2, __dependency_6.EBackendSymbolID.T3, __dependency_6.EBackendSymbolID.T4], (0, __dependency_0.initializerDefineProperty)(o, "gameSymbol", C, (0, __dependency_0.assertThisInitialized)(o)), (0, __dependency_0.initializerDefineProperty)(o, "lockView", Y, (0, __dependency_0.assertThisInitialized)(o)), o.symbolOutTag = 1234, o.symbolInTag = 5678, o.isOutCompleted = !1, o.needInitHeight = !1, o.fireballPosIds = [], o.isStartSymbolIn = !1, o;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var n = o.prototype;
  return n.onLoad = function () {
    __recoverySymbolTrace(this, "onLoad:enter");
    t.prototype.onLoad.call(this);
    __recoverySymbolTrace(this, "onLoad:exit");
  }, n.start = function () {
    __recoverySymbolTrace(this, "start:enter");
    this.createSymbolPool();
    __recoverySymbolTrace(this, "start:exit");
  }, n.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, n.createSymbolPool = function () {
    __recoverySymbolTrace(this, "createSymbolPool:enter");
    for (var t = __dependency_4.default.getData().filePaths.symbolPrefab, o = App.cache.get(this.data.module, t).data, e = 0; e < 3 * this.TOTAL_SYMBOL; e++) {
      var i = (0, __dependency_1.instantiate)(o);
      i.addComponent(__dependency_3.Symbol), App.pool.createPool(__dependency_8.EPool.SYMBOL_POOL).cloneNode = i, App.pool.createPool(__dependency_8.EPool.SYMBOL_POOL).put(i);
    }
    __recoverySymbolTrace(this, "createSymbolPool:exit");
  }, n.createSymbols = function (t) {
    __recoverySymbolTrace(this, "createSymbols:enter");
    var o = this;
    this.data.getData().parser.view1D.forEach(function (e, i) {
      o.createSymbol(i, e, t, null);
    }), this.setSymbolsSiblingIndex();
    __recoverySymbolTrace(this, "createSymbols:exit");
  }, n.createSymbol = function (t, o, e, i) {
    var s = this.data.getData().symbolPosConfig,
      a = App.pool.getPool(__dependency_8.EPool.SYMBOL_POOL).get(),
      n = a.getComponent(__dependency_3.Symbol),
      l = this.BIG_SYMBOLS.includes(o),
      m = this.TIMES_SYMBOLS.includes(o);
    a.position.set(s.get(t)), a.name = "" + t, e && (a.active = !0);
    var r = {
      posId: t,
      symbolId: o,
      isTimesSymbol: m
    };
    this.symbolsMap.set(t, n), this.node.addChild(a), n.setData(r), n.setTimesText(i), m && e && n.initTimesSymbol(t), l && n.playLoopAnim();
  }, n.createLockSymbol = function (t, o, e, i) {
    var s = this.data.getData(),
      a = s.symbolPosConfig,
      n = (s.parser, App.pool.getPool(__dependency_8.EPool.SYMBOL_POOL).get()),
      l = n.getComponent(__dependency_3.Symbol),
      m = this.TIMES_SYMBOLS.includes(o);
    n.position.set(a.get(t)), n.name = "" + t;
    var r = {
      posId: t,
      symbolId: o,
      isTimesSymbol: m
    };
    this.lockSymbolMap.set(t, l), this.lockView.addChild(n), l.setData(r), l.setTimesText(i), m && e && l.initTimesSymbol(t), n.active = !0;
  }, n.setSymbolsSiblingIndex = function () {
    for (var t = 0, o = 0; o < this.TOTAL_SYMBOL; o++) {
      var e = this.symbolsMap.get(o);
      this.TIMES_SYMBOLS.includes(e.symbolID) ? (e.node.setSiblingIndex(29 - t), t++) : e.node.setSiblingIndex(o);
    }
  }, n.showSymbolsOut = function (t) {
    __recoverySymbolTrace(this, "showSymbolsOut:enter");
    var o = this,
      e = __dependency_4.default.isTurbo,
      i = this.configModel.reelConfig,
      s = i.animStagger,
      a = i.speed,
      n = Array.from(this.outSymbolMap).sort(function (t, o) {
        return t[0] - o[0];
      }),
      l = e ? __dependency_4.EBTM.SYMBOL_TURBO_FALL_OUT : __dependency_4.EBTM.SYMBOL_NORMAL_FALL_OUT,
      m = 0,
      r = 0;
    this.isOutCompleted = !1;
    for (var c = 0; c < this.SYMBOL_ROW; c++) for (var y = function () {
        var e = n[h][1];
        m++, (0, __dependency_1.tween)(e.node).delay(m * s).by(a, {
          position: new __dependency_1.Vec3(0, -o.GAME_HEIGHT, 0)
        }, {
          easing: "cubicInOut",
          onStart: function () {
            e.setSymbolBlurActive(!0);
          }
        }).call(function () {
          r++, e.recycleSymbol(), r == o.TOTAL_SYMBOL && (o.isOutCompleted = !0, o.outSymbolMap.clear(), t());
        }).tag(o.symbolOutTag).start();
      }, h = this.TOTAL_SYMBOL - this.SYMBOL_ROW + c; h >= 0; h -= this.SYMBOL_ROW) y();
    dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: l
      }
    });
    __recoverySymbolTrace(this, "showSymbolsOut:exit");
  }, n.showSymbolsIn = function (t) {
    __dependency_4.default.isTurbo ? this.showTurboSymbolsIn(t) : this.showNormalSymbolsIn(t);
  }, n.showNormalSymbolsIn = function (t) {
    __recoverySymbolTrace(this, "showNormalSymbolsIn:enter");
    for (var o = this, e = this.configModel.reelConfig, i = e.animStagger, s = e.speed, a = Array.from(this.symbolsMap).sort(function (t, o) {
        return t[0] - o[0];
      }), n = __dependency_4.EBTM.SYMBOL_NORMAL_FALL_IN, l = 0, m = 0, r = 0; r < this.SYMBOL_ROW; r++) for (var c = function () {
        var e = a[y][1],
          r = e.node.position,
          c = r.x,
          h = r.y,
          p = r.z,
          d = o.TIMES_SYMBOLS.includes(e.symbolID),
          b = !0,
          M = !0;
        o.lockSymbolMap.has(e.posId) && (M = !(b = !1)), l++, /* Preserve captured 3.7 incoming tween behavior for pooled inactive Nodes (3.8.7+ binds activation by default). */(0, __dependency_1.tween)(e.node).bindNodeState(false).set({
          position: new __dependency_1.Vec3(c, h + o.GAME_HEIGHT, p),
          active: b
        }).delay(l * i).to(s, {
          position: new __dependency_1.Vec3(c, h, p)
        }, {
          onStart: function () {
            d && b && (dispatch(__dependency_7.GameEvent.SHOW_FIRE_BALL, {
              data: e.posId
            }), o.fireballPosIds.push(e.posId)), e.setSymbolBlurActive(!0);
          }
        }).to(.085, {
          position: new __dependency_1.Vec3(c, h - 20, p)
        }).to(.1, {
          position: new __dependency_1.Vec3(c, h, p)
        }).set({
          active: M
        }).call(function () {
          ++m == o.TOTAL_SYMBOL && (__dependency_4.default.canQuickStop = !1, o.fireballPosIds.length = 0, o.isStartSymbolIn = !1, t()), 1 == m && dispatch(__dependency_7.GameEvent.PLAY_BTM, {
            data: {
              url: n
            }
          }), e.symbolID != __dependency_6.EBackendSymbolID.SCATTER && e.symbolID != __dependency_6.EBackendSymbolID.GOLD_SCATTER || e.playScatterInBtm(), e.symbolID != __dependency_6.EBackendSymbolID.WOMEN_TOTEM && e.symbolID != __dependency_6.EBackendSymbolID.MEN_TOTEM || e.playTotemHitAnim(), d && o.openTimesSymbol(e.posId), e.setSymbolBlurActive(!1);
        }).tag(o.symbolInTag).start();
      }, y = this.TOTAL_SYMBOL - this.SYMBOL_ROW + r; y >= 0; y -= this.SYMBOL_ROW) c();
    __recoverySymbolTrace(this, "showNormalSymbolsIn:exit");
  }, n.showTurboSymbolsIn = function (t) {
    for (var o = this, e = this.configModel.reelConfig.speed, i = Array.from(this.symbolsMap).sort(function (t, o) {
        return t[0] - o[0];
      }), s = __dependency_4.EBTM.SYMBOL_TURBO_FALL_IN, a = 0, n = 0; n < this.SYMBOL_ROW; n++) for (var l = function () {
        var n = i[m][1],
          l = !0,
          r = !0,
          c = n.node.position,
          y = c.x,
          h = c.y,
          d = c.z,
          b = o.TIMES_SYMBOLS.includes(n.symbolID);
        n.symbolID == __dependency_6.EBackendSymbolID.SCATTER && (__dependency_4.default.isTurbo ? n.playScatterInBtmFast() : n.playScatterInBtm()), o.lockSymbolMap.has(n.posId) && (r = !(l = !1));
        var M = n.node.getComponent(__dependency_1.UITransform).height / 12,
          f = Math.floor(m / 6),
          L = h + o.GAME_HEIGHT - 25 * (4 - f) - 60 * (4 - f);
        /* Preserve captured 3.7 incoming tween behavior for pooled inactive Nodes (3.8.7+ binds activation by default). */(0, __dependency_1.tween)(n.node).bindNodeState(false).set({
          position: new __dependency_1.Vec3(y, L, d),
          active: l
        }).to(1.1 * e, {
          position: new __dependency_1.Vec3(y, h - M, d)
        }, {
          easing: "quintOut",
          onStart: function () {
            b && l && (dispatch(__dependency_7.GameEvent.SHOW_FIRE_BALL, {
              data: n.posId
            }), o.fireballPosIds.push(n.posId)), n.setSymbolBlurActive(!0);
          },
          onComplete: function () {
            /* Preserve captured 3.7 incoming tween behavior for pooled inactive Nodes (3.8.7+ binds activation by default). */(0, __dependency_1.tween)(n.node).bindNodeState(false).to(.04, {
              position: new __dependency_1.Vec3(y, h, d)
            }, {
              easing: "quadOut",
              onComplete: function () {
                ++a == o.TOTAL_SYMBOL && (__dependency_4.default.canQuickStop = !1, o.isStartSymbolIn = !1, o.fireballPosIds.length = 0, t()), 1 == a && dispatch(__dependency_7.GameEvent.PLAY_BTM, {
                  data: {
                    url: s
                  }
                }), n.symbolID != __dependency_6.EBackendSymbolID.WOMEN_TOTEM && n.symbolID != __dependency_6.EBackendSymbolID.MEN_TOTEM || n.playTotemHitAnim(), b && o.openTimesSymbol(n.posId), n.setSymbolBlurActive(!1);
              }
            }).set({
              active: r
            }).start();
          }
        }).tag(o.symbolInTag).start();
      }, m = this.TOTAL_SYMBOL - this.SYMBOL_ROW + n; m >= 0; m -= this.SYMBOL_ROW) l();
  }, n.showSymbolsQuickIn = function (t) {
    for (var o = this, e = this.data.getData().symbolPosConfig, i = __dependency_4.default.getData().symbolQuickInTime, s = Array.from(this.symbolsMap).sort(function (t, o) {
        return t[0] - o[0];
      }), a = 0, n = 0; n < this.SYMBOL_ROW; n++) for (var l = function () {
        var n = s[m][1],
          l = e.get(m),
          r = !0,
          c = !0;
        o.lockSymbolMap.has(n.posId) && (c = !(r = !1));
        var y = o.TIMES_SYMBOLS.includes(n.symbolID),
          h = o.needInitHeight ? {
            position: new __dependency_1.Vec3(l.x, l.y + 300, l.z),
            active: r
          } : {
            active: r
          };
        n.symbolID == __dependency_6.EBackendSymbolID.SCATTER && n.playScatterInBtmFast(), (0, __dependency_1.tween)(n.node).set(h).to(i, {
          position: l
        }, {
          easing: function (t) {
            return o.symbolsBezierByTime(t);
          },
          onStart: function () {
            y && !o.fireballPosIds.includes(n.posId) && r && dispatch(__dependency_7.GameEvent.SHOW_FIRE_BALL_QUICK_STOP, {
              data: n.posId
            }), n.setSymbolBlurActive(!0);
          },
          onComplete: function () {
            ++a == o.TOTAL_SYMBOL && (__dependency_4.default.canQuickStop = !1, o.isStartSymbolIn = !1, o.needInitHeight = !1, o.fireballPosIds.length = 0, t()), y && o.openTimesSymbol(n.posId), n.setSymbolBlurActive(!1);
          }
        }).set({
          active: c
        }).start();
      }, m = this.TOTAL_SYMBOL - this.SYMBOL_ROW + n; m >= 0; m -= this.SYMBOL_ROW) l();
  }, n.showLockSymbols = function (t) {
    (0, __dependency_1.tween)(this).delay(.1).call(function () {
      t();
    }).start();
  }, n.showCloneSymbols = function (t) {
    (0, __dependency_1.tween)(this).delay(.1).call(function () {
      t();
    }).start();
  }, n.showCurrentViewFall = function (t) {
    var o = this.data.getData().gameState,
      e = o.posTransform;
    o.action;
    e || t && t(), e.length || t && t();
    for (var i = 0; i < e.length; i++) {
      var s = e[i],
        a = s.beforePos,
        n = s.afterPos,
        l = i == e.length - 1 ? t : null;
      this.updateSymbolMapIndex(a, n);
      var m = this.symbolsMap.get(n);
      m.node.name = "" + n, this.moveTo(m.node, n, !1, i, l);
    }
  }, n.symbolsBezierByTimeTurbo = function (t) {
    return (0, __dependency_1.bezierByTime)([.73, .73, .66, 1.16], t);
  }, n.symbolsBezierByTime = function (t) {
    return (0, __dependency_1.bezierByTime)([.67, 1.33, .61, 1], t);
  }, n.playSymbolsWin = function (t) {
    var o = this.data.getData().gameState,
      e = o.winSymbols,
      i = o.femaleTotemLevel,
      s = void 0 === i ? 0 : i,
      a = o.maleTotemLevel,
      n = void 0 === a ? 0 : a;
    null == e && (e = []);
    var l = !1;
    if (s > 0 || n > 0) for (var m = 0; m < e.length; m++) {
      var r = e[m];
      if (r.symbol !== __dependency_6.EBackendSymbolID.WOMEN_TOTEM && r.symbol !== __dependency_6.EBackendSymbolID.MEN_TOTEM) {
        l = !0;
        break;
      }
    }
    for (var c = 0; c < e.length; c++) for (var S = e[c], y = S.symbolPos, h = S.symbol, p = 0; p < y.length; p++) {
      var u = y[p],
        d = y.length == p + 1 && e.length == c + 1 ? function () {
          t(), dispatch(__dependency_7.GameEvent.STOP_BTM, {
            data: __dependency_4.EBTM.SYMBOL_WIN
          });
        } : null;
      h == __dependency_6.EBackendSymbolID.WOMEN_TOTEM ? (this.playFemaleTotemWinSound(s), this.symbolsMap.get(u).playTotemWinAnim(d, s, l)) : h == __dependency_6.EBackendSymbolID.MEN_TOTEM ? (this.playMaleTotemWinSound(n), this.symbolsMap.get(u).playTotemWinAnim(d, n, l)) : (this.symbolsMap.get(u).playWinAnim(d), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_4.EBTM.SYMBOL_WIN
        }
      }));
    }
  }, n.playMaleTotemWinSound = function (t) {
    switch (t) {
      case 0:
      case 1:
        dispatch(__dependency_7.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_4.EBTM.GOLDEN_FG_SYMBOL_CHB_LV1
          }
        });
        break;
      case 2:
        dispatch(__dependency_7.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_4.EBTM.GOLDEN_FG_SYMBOL_CHB_LV2
          }
        });
        break;
      case 3:
        dispatch(__dependency_7.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_4.EBTM.GOLDEN_FG_SYMBOL_CHB_LV3
          }
        });
    }
  }, n.playFemaleTotemWinSound = function (t) {
    switch (t) {
      case 0:
      case 1:
        dispatch(__dependency_7.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_4.EBTM.GOLDEN_FG_SYMBOL_CHA_LV1
          }
        });
        break;
      case 2:
        dispatch(__dependency_7.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_4.EBTM.GOLDEN_FG_SYMBOL_CHA_LV2
          }
        });
        break;
      case 3:
        dispatch(__dependency_7.GameEvent.PLAY_BTM, {
          data: {
            url: __dependency_4.EBTM.GOLDEN_FG_SYMBOL_CHA_LV3
          }
        });
    }
  }, n.playOutAnimAndRemoveSymbols = function (t) {
    var o = this,
      e = this.data.getData().gameState,
      i = e.winSymbols,
      s = e.femaleTotemLevel,
      a = void 0 === s ? 0 : s,
      n = e.maleTotemLevel,
      l = void 0 === n ? 0 : n;
    i.forEach(function (t) {
      t.symbolPos.forEach(function (t) {
        o.symbolsMap.get(t).playOutAnim(), o.symbolsMap.delete(t);
      });
    }), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.SYMBOL_BREAK
      }
    });
    var m = .15;
    (a > 0 || l > 0) && (m = 0), (0, __dependency_1.tween)(this).delay(m).call(function () {
      t();
    }).start();
  }, n.killSymbols = function () {
    this.symbolsMap.forEach(function (t) {
      t.recycleSymbol();
    }), this.symbolsMap.clear(), __dependency_1.Tween.stopAll();
  }, n.playScatterWin = function (t) {
    var o = this,
      e = this.data.getData(),
      i = e.parser,
      s = e.gameState,
      a = (s.totalWinnings, s.isGoldenFg),
      n = (__dependency_4.default.getData().winAmountTime, !1),
      l = i.view1D.filter(function (t) {
        return t == __dependency_6.EBackendSymbolID.GOLD_SCATTER && (n = !0), t == __dependency_6.EBackendSymbolID.SCATTER || t == __dependency_6.EBackendSymbolID.GOLD_SCATTER;
      }),
      m = 0;
    n && dispatch(__dependency_7.GameEvent.SHOW_DARK), i.view1D.forEach(function (e, i) {
      if (e == __dependency_6.EBackendSymbolID.SCATTER || e == __dependency_6.EBackendSymbolID.GOLD_SCATTER) {
        var s = ++m == l.length ? function () {
          0 == a && (t(), dispatch(__dependency_7.GameEvent.MUSIC_VOLUME_MULTIPLE, {
            data: 2
          }));
        } : null;
        dispatch(__dependency_7.GameEvent.MOVE_SCATTER, {
          data: o.symbolsMap.get(i).node
        }), o.symbolsMap.get(i).playScatterWinAnim(s);
      }
    }), dispatch(__dependency_7.GameEvent.MUSIC_VOLUME_MULTIPLE, {
      data: .5
    }), n ? (dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.SCATTER_SYMBOL_INTRO
      }
    }), App.globalAudio.pauseMusic(), (0, __dependency_1.tween)(this).delay(2.5).call(function () {
      t(), dispatch(__dependency_7.GameEvent.MUSIC_VOLUME_MULTIPLE, {
        data: 2
      }), App.globalAudio.resumeMusic();
    }).start()) : dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.SCATTER_WIN
      }
    });
  }, n.playTotemWin = function (t) {
    var o = this,
      e = this.data.getData(),
      i = e.parser,
      s = e.gameState,
      a = s.maleTotemLevel,
      n = s.femaleTotemLevel,
      l = !1;
    i.view1D.filter(function (t) {
      return t != __dependency_6.EBackendSymbolID.MEN_TOTEM && t != __dependency_6.EBackendSymbolID.WOMEN_TOTEM || (l = !0), t == __dependency_6.EBackendSymbolID.MEN_TOTEM || t == __dependency_6.EBackendSymbolID.WOMEN_TOTEM;
    });
    l && dispatch(__dependency_7.GameEvent.SHOW_DARK);
    var m = 0;
    i.view1D.forEach(function (t, e) {
      t != __dependency_6.EBackendSymbolID.WOMEN_TOTEM && t != __dependency_6.EBackendSymbolID.MEN_TOTEM || (dispatch(__dependency_7.GameEvent.MOVE_SCATTER, {
        data: o.symbolsMap.get(e).node
      }), t == __dependency_6.EBackendSymbolID.MEN_TOTEM ? m = a : t == __dependency_6.EBackendSymbolID.WOMEN_TOTEM && (m = n), o.symbolsMap.get(e).playTotemWinAnim(null, m));
    });
  }, n.playJpWin = function (t) {
    var o = this,
      e = this.data.getData().parser,
      i = e.view1D.filter(function (t) {
        return t == __dependency_6.EBackendSymbolID.JACKPOT;
      }),
      s = 0;
    e.view1D.forEach(function (e, a) {
      if (e == __dependency_6.EBackendSymbolID.JACKPOT) {
        var n = ++s == i.length ? t : null;
        o.symbolsMap.get(a).playJpWinAnim(n);
      }
    }), dispatch(__dependency_7.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.JACKPOT_WIN
      }
    });
  }, n.playRareUpgrade = function () {
    for (var t = this, o = this.data.getData().gameState, e = o.timesUpgrade, i = void 0 === e ? [] : e, s = o.posTransform, a = (o.splitList, function () {
        var o = i[n],
          e = null;
        s.forEach(function (t) {
          t.beforePos == o.symbolPos && (e = t.afterPos);
        }), e || (e = o.symbolPos), t.lockSymbolMap.has(e) && (t.lockSymbolMap.get(e).closeTimesLabel(), t.lockSymbolMap.get(e).playTimesSymbolsUpgrade(o), t.lockSymbolMap.get(e).playTimesSymbolsFunction()), t.symbolsMap.get(e).playTimesSymbolsUpgrade(o), t.symbolsMap.get(e).playTimesSymbolsFunction();
      }), n = 0; n < i.length; n++) a();
  }, n.updateSymbolMapIndex = function (t, o) {
    var e = this.symbolsMap.get(t);
    this.symbolsMap.set(o, e), this.symbolsMap.delete(t);
  }, n.moveTo = function (t, o, e, i, s) {
    var a = this,
      n = this.configModel.reelConfig,
      l = n.speed,
      m = n.animStagger,
      r = this.data.getData().symbolPosConfig.get(o),
      c = r.x,
      y = r.y,
      h = r.z,
      d = t.getComponent(__dependency_3.Symbol),
      T = this.TIMES_SYMBOLS.includes(d.symbolID),
      M = d.node.getComponent(__dependency_1.UITransform).height / 12;
    return (0, __dependency_1.tween)(t).delay(i * m).to(.6 * l, {
      position: new __dependency_1.Vec3(c, y - M, h)
    }, {
      easing: "quadOut",
      onStart: function () {
        T && e && dispatch(__dependency_7.GameEvent.SHOW_FIRE_BALL, {
          data: d.posId
        }), d.setSymbolBlurActive(!0);
      },
      onComplete: function () {
        (0, __dependency_1.tween)(t).to(.6 * l, {
          position: new __dependency_1.Vec3(c, y, h)
        }, {
          easing: "quadOut",
          onComplete: function () {
            s && s(), T && e && a.openTimesSymbol(d.posId), d.setSymbolBlurActive(!1);
          }
        }).start();
      }
    }).start();
  }, n.newFallMoveTo = function (t, o, e) {
    var i = this.data.getData().symbolPosConfig.get(t),
      s = i.x,
      a = i.y,
      n = i.z,
      l = this.symbolsMap.get(t);
    l.node.setPosition(new __dependency_1.Vec3(s, a + this.GAME_HEIGHT, n)), l.node.active = !0, l.symbolID == __dependency_6.EBackendSymbolID.SCATTER && l.playScatterInBtmFast(), l.symbolID != __dependency_6.EBackendSymbolID.MEN_TOTEM && l.symbolID != __dependency_6.EBackendSymbolID.WOMEN_TOTEM || l.playTotemHitAnim(), this.moveTo(l.node, t, !0, o, e);
  }, n.showNewSymbolFall = function (t) {
    var o = this.data.getData().parser.view1D,
      e = Array.from(this.symbolsMap.keys()),
      i = Array.from({
        length: o.length
      }, function (t, o) {
        return o;
      }).filter(function (t) {
        return !e.includes(t);
      }).sort(function (t, o) {
        return t - o;
      }),
      s = 0;
    if (0 != i.length) {
      for (var a = 0; a < this.SYMBOL_ROW; a++) for (var n = this.TOTAL_SYMBOL - this.SYMBOL_ROW + a; n >= 0; n -= this.SYMBOL_ROW) if (i.includes(n)) {
        s++;
        var l = o[n],
          m = s == i.length ? t : null;
        this.createSymbol(n, l, !1, null), this.newFallMoveTo(n, a, m);
      }
    } else t();
  }, n.openTimesSymbol = function (t) {
    this.symbolsMap.get(t).openTimesSymbol(t);
  }, n.hideTimesSymbolLabel = function (t) {
    var o = this;
    this.symbolsMap.get(t).closeTimesLabel(), this.data.getData().parser.lockTimesSymbols.forEach(function (e, i, s) {
      e.symbolPos == t && 1 == e.lock && (o.lockSymbolMap.get(t).closeTimesLabel(), dispatch(__dependency_7.GameEvent.TIMES_LOCK_OUT, t));
    });
  }, n.playTimesSymbolsFunction = function (t) {
    this.symbolsMap.get(t).playTimesSymbolsFunction();
  }, n.startQuickStop = function (t) {
    if (this.unscheduleAllCallbacks(), dispatch(__dependency_7.GameEvent.SET_EARLY_SPIN_DELAYING_COMPLETED), this.isOutCompleted) __dependency_1.Tween.stopAllByTag(this.symbolInTag), t();else {
      __dependency_1.Tween.stopAllByTag(this.symbolOutTag), this.isStartSymbolIn && (__dependency_1.Tween.stopAllByTag(this.symbolInTag), this.isStartSymbolIn = !1);
      var o = this.node.getComponentsInChildren(__dependency_3.Symbol);
      if (o.length > 0) for (var e = 0; e < o.length; e++) o[e].recycleSymbol();
      for (var i = 0; i < this.TOTAL_SYMBOL; i++) {
        var s = this.symbolsMap.get(i);
        s && (s.recycleSymbol(), this.symbolsMap.delete(i)), i == this.TOTAL_SYMBOL - 1 && t();
      }
      this.createSymbols(!1), this.isOutCompleted = !0, this.needInitHeight = !0;
    }
  }, n.showSplitA_Anim = function (t, o, e) {
    var i = this.symbolsMap.get(t);
    this.lockSymbolMap.has(t) && i.initTimesSymbol(t), dispatch(__dependency_7.GameEvent.MOVE_SPLIT, {
      data: i.node
    }), i.showSplitA_Anim(e);
  }, n.showSplitSymbolAnime = function (t, o, e) {
    for (var i = 0, s = 0; s < o.length; s++) this.startCloneTimeSymbol({
      from: t,
      target: o[s]
    }, function () {
      ++i == o.length && e();
    });
  }, n.startCloneTimeSymbol = function (t, o) {
    var e = this,
      i = this.symbolsMap.get(t.target),
      s = this.symbolsMap.get(t.from),
      a = null,
      n = !1;
    this.lockSymbolMap.has(t.from) && (a = this.lockSymbolMap.get(t.from), n = !0), i && (i.node.removeFromParent(), this.symbolsMap.delete(t.target));
    var l = (0, __dependency_1.instantiate)(s.node).getComponent(__dependency_3.Symbol);
    this.symbolsMap.set(t.target, l), l.node.name = t.target + "";
    var m = this.data.getData().symbolPosConfig.get(t.target);
    l.node.setPosition(m), dispatch(__dependency_7.GameEvent.MOVE_SPLIT, {
      data: l.node
    });
    var r = {
      posId: t.target,
      symbolId: s.symbolID,
      isTimesSymbol: !0
    };
    if (l.setData(r), l.showSplitB_Anim(o), n && a) {
      var S = (0, __dependency_1.instantiate)(a.node).getComponent(__dependency_3.Symbol);
      this.lockView.addChild(S.node);
      var y = {
        posId: t.target,
        symbolId: s.symbolID,
        isTimesSymbol: !0
      };
      S.setData(y), this.lockSymbolMap.set(t.target, S), S.node.name = t.target + "";
      var h = this.data.getData().symbolPosConfig.get(t.target);
      S.node.setPosition(h), S.showSplitB_Anim(function () {
        e.lockView.addChild(a.node);
      }), S.cloneLockAnime();
    }
  }, n.showTimesLock_Anim = function (t, o, e, i, s) {
    this.lockSymbolMap.get(o) ? s() : (this.createLockSymbol(o, t, !0, i), this.lockSymbolMap.get(o).showTimesLock_Anim(e, s));
  }, n.showTimesLock_LevelDown = function (t, o, e) {
    var i = this.lockSymbolMap.get(t);
    i && i.showTimesStage_Anim(o, e, !0);
  }, n.timeLock_out = function (t) {
    var o = this.lockSymbolMap.get(t);
    o && (o.node.active = !1, this.node.removeChild(o.node), this.lockSymbolMap.delete(t), o.recycleSymbol());
  }, n.timeLock_Allout = function () {
    var t = this;
    this.lockSymbolMap.forEach(function (o, e) {
      var i = t.symbolsMap.get(e);
      i.isTimeSymbol && (o && (i.isRare = o.isRare), i.initTimesSymbol(e)), o && (o.node.active = !1, o.node.parent = null, o.recycleSymbol(), t.data.getData().parser.lockTimesSymbols.delete(e));
    }), this.lockSymbolMap.clear(), this.data.getData().parser.lockTimesSymbols.clear();
  }, n.reset = function () {}, n.init = function () {}, n.show = function () {
    this.node.active = !0;
  }, n.hide = function () {
    this.node.active = !1;
  }, n.addEvents = function () {
    var t = this;
    this.on(__dependency_9.SlotFrameworkEvent.CLICK_GAME_LOADING_CONFIRM_BTN, function () {
      __recoverySymbolTrace(t, "CLICK_GAME_LOADING_CONFIRM_BTN:received");
      t.createSymbols(!0);
    }), this.on(__dependency_7.GameEvent.PARSER_REPLAY_COMPLETED, function () {
      t.createSymbols(!0);
    }), this.on(__dependency_7.GameEvent.SHOW_SYMBOLS_OUT_ANIM, function (o) {
      t.symbolsMap.forEach(function (o, e) {
        t.outSymbolMap.set(e, o);
      }), t.symbolsMap.clear(), t.showSymbolsOut(o.complete);
    }), this.on(__dependency_7.GameEvent.SHOW_SYMBOLS_IN_ANIM, function (o) {
      0 == t.isOutCompleted ? t.schedule(function () {
        1 == t.isOutCompleted && (t.unscheduleAllCallbacks(), t.isStartSymbolIn = !0, t.createSymbols(!1), t.showSymbolsIn(o.complete));
      }, .001) : (t.isStartSymbolIn = !0, t.createSymbols(!1), t.showSymbolsIn(o.complete));
    }), this.on(__dependency_7.GameEvent.SHOW_SYMBOLS_WIN, function (o) {
      t.playSymbolsWin(o.complete);
    }), this.on(__dependency_7.GameEvent.REMOVE_SYMBOLS, function (o) {
      t.playOutAnimAndRemoveSymbols(o.complete);
    }), this.on(__dependency_7.GameEvent.PLAY_CURRENT_VIEW_FALL_ANIM, function (o) {
      t.showCurrentViewFall(o.complete);
    }), this.on(__dependency_7.GameEvent.CLONE_TIMES, function (o) {
      t.showCloneSymbols(o.complete);
    }), this.on(__dependency_7.GameEvent.SHOW_NEW_SYMBOLS_IN_ANIM, function (o) {
      t.showNewSymbolFall(o.complete), t.setSymbolsSiblingIndex();
    }), this.on(__dependency_7.GameEvent.SHOW_SCATTER_WIN, function (o) {
      t.playScatterWin(o.complete);
    }), this.on(__dependency_7.GameEvent.SHOW_JP_WIN, function (o) {
      t.playJpWin(o.complete);
    }), this.on(__dependency_7.GameEvent.SHOW_TIMES_SYMBOLS_UPGRADE, function () {
      t.playRareUpgrade();
    }), this.on(__dependency_7.GameEvent.HIDE_TIMES_LABEL, function (o) {
      t.hideTimesSymbolLabel(o.data);
    }), this.on(__dependency_7.GameEvent.PLAY_TIMES_SYMBOL_FUNCTION, function (o) {
      t.playTimesSymbolsFunction(o.data);
    }), this.on(__dependency_7.GameEvent.START_QUICK_STOP, function (o) {
      t.startQuickStop(o.complete);
    }), this.on(__dependency_7.GameEvent.SHOW_SYMBOLS_QUICK_IN_ANIM, function (o) {
      t.showSymbolsQuickIn(o.complete);
    }), this.on(__dependency_9.SlotFrameworkEvent.KILL_SYMBOLS, function () {
      t.killSymbols();
    }), this.on(__dependency_7.GameEvent.SHOW_TIMES_B, function (o) {
      for (var e = t.data.getData().gameState.splitList.slice(), i = 0, s = 0; s < e.length; s++) t.showSplitSymbolAnime(e[s].from, e[s].to, function () {
        ++i == e.length && o.complete();
      });
    }), this.on(__dependency_7.GameEvent.SHOW_TIMES_A, function (o) {
      (0, __dependency_1.tween)(t).delay(.5).call(function () {
        dispatch(__dependency_7.GameEvent.SHOW_DARK);
        var e = t.data.getData().gameState.splitList.slice(),
          i = 0;
        e.forEach(function (s, a) {
          t.showSplitA_Anim(s.from, t.symbolsMap.get(s.from).symbolID, function () {
            ++i >= e.length && o.complete();
          });
        }), dispatch(__dependency_7.GameEvent.SHOW_CLONE_TIMES_MOVING, {});
      }).start();
    }), this.on(__dependency_7.GameEvent.SHOW_TIMES_LOCK, function (o) {
      (0, __dependency_1.tween)(t).delay(.5).call(function () {
        var e = t.data.getData().parser.lockTimesSymbols,
          i = 0;
        e.forEach(function (s, a) {
          t.showTimesLock_Anim(s.symbol, s.symbolPos, s.lock, s.times, function () {
            ++i >= e.size && o.complete();
          });
        });
      }).start();
    }), this.on(__dependency_7.GameEvent.SHOW_TIMES_STAGE, function (o) {
      t.data.getData().parser.lockTimesSymbols.forEach(function (o, e, i) {
        t.showTimesLock_LevelDown(e, o.lock);
      });
    }), this.on(__dependency_7.GameEvent.TIMES_LOCK_OUT, function (o) {
      t.timeLock_out(o);
    }), this.on(__dependency_7.GameEvent.TIMES_LOCK_ALLOUT, function (o) {
      t.timeLock_Allout();
    }), this.on(__dependency_7.GameEvent.BACK_SCATTER, function (o) {
      o.data && t.node.addChild(o.data);
    }), this.on(__dependency_7.GameEvent.BACK_SPLIT, function (o) {
      o.data && t.node.addChild(o.data);
    });
  }, (0, __dependency_0.createClass)(o, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }, {
    key: "configModel",
    get: function () {
      return __dependency_4.default.getData();
    }
  }]), o;
}(__dependency_2.default)).prototype, "gameSymbol", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = (0, __dependency_0.applyDecoratedDescriptor)(B.prototype, "lockView", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = B)) || v));
__dependency_1.cclegacy._RF.pop();
// Reconstructed opt-in diagnostics, not original game logic; no gameplay errors are swallowed.
var __recoverySymbolTraceCount = 0;
function __recoverySymbolTrace(component, phase) {
  // Catch only optional instrumentation failures; original gameplay calls remain outside this wrapper.
  try {
    return __recoverySymbolTraceUnsafe(component, phase);
  } catch (error) {
    console.error('[Seth recovery diagnostic failure]', String(error));
  }
}
function __recoverySymbolTraceUnsafe(component, phase) {
  if (!globalThis.location || new URLSearchParams(globalThis.location.search).get('reaDebug') !== '1' || __recoverySymbolTraceCount++ >= 80) return;
  if (!__dependency_1.isValid(component) || !component.node) return;
  const data = component.data.getData(),
    node = component.node;
  const uiState = value => {
    const props = value && value._uiProps,
      renderer = props && props.uiComp;
    return props ? {
      localOpacity: props.localOpacity,
      opacity: props.opacity,
      colorDirty: props.colorDirty,
      isStatic: value._static,
      renderer: renderer ? {
        name: renderer.constructor.name,
        enabled: renderer.enabled,
        inHierarchy: renderer.enabledInHierarchy,
        alpha: renderer.color && renderer.color.a,
        stencilStage: renderer.stencilStage
      } : null
    } : null;
  };
  const ancestors = [];
  for (let current = node, depth = 0; current && depth < 5; current = current.parent, depth++) {
    const opacity = current.getComponent(__dependency_1.UIOpacity);
    ancestors.push({
      uiState: uiState(current),
      name: current.name,
      active: current.active,
      inHierarchy: current.activeInHierarchy,
      layer: current.layer,
      opacity: opacity ? opacity.opacity : null,
      position: {
        x: current.position.x,
        y: current.position.y,
        z: current.position.z
      },
      scale: {
        x: current.scale.x,
        y: current.scale.y,
        z: current.scale.z
      }
    });
  }
  const snapshot = value => {
    if (!value) return null;
    const opacity = value.getComponent(__dependency_1.UIOpacity),
      transform = value.getComponent(__dependency_1.UITransform);
    return {
      worldMatrix: value.worldMatrix ? Array.from({
        length: 16
      }, (_, index) => value.worldMatrix["m" + String(index).padStart(2, "0")]) : null,
      uiState: uiState(value),
      name: value.name,
      active: value.active,
      inHierarchy: value.activeInHierarchy,
      layer: value.layer,
      sibling: value.getSiblingIndex(),
      opacity: opacity ? opacity.opacity : null,
      position: {
        x: value.position.x,
        y: value.position.y,
        z: value.position.z
      },
      worldPosition: {
        x: value.worldPosition.x,
        y: value.worldPosition.y,
        z: value.worldPosition.z
      },
      scale: {
        x: value.scale.x,
        y: value.scale.y,
        z: value.scale.z
      },
      worldScale: {
        x: value.worldScale.x,
        y: value.worldScale.y,
        z: value.worldScale.z
      },
      size: transform ? {
        width: transform.width,
        height: transform.height
      } : null
    };
  };
  const primitiveFields = (object, keys) => object ? Object.fromEntries(keys.filter(key => ['number', 'string', 'boolean'].includes(typeof object[key])).map(key => [key, object[key]])) : null;
  const depthState = state => primitiveFields(state, ['depthTest', 'depthWrite', 'depthFunc', 'stencilTestFront', 'stencilTestBack', 'stencilFuncFront', 'stencilFuncBack', 'stencilRefFront', 'stencilRefBack', 'stencilReadMaskFront', 'stencilReadMaskBack', 'stencilWriteMaskFront', 'stencilWriteMaskBack', 'stencilFailOpFront', 'stencilZFailOpFront', 'stencilPassOpFront', 'stencilFailOpBack', 'stencilZFailOpBack', 'stencilPassOpBack']);
  const materialState = material => material ? {
    name: material.name,
    effect: material.effectAsset && material.effectAsset.name,
    passes: material.passes.map(pass => ({
      defines: primitiveFields(pass.defines, Object.keys(pass.defines || {})),
      depthStencil: depthState(pass.depthStencilState)
    }))
  } : null;
  const mask = node.getComponent(__dependency_1.Mask),
    graphics = node.getComponent(__dependency_1.Graphics);
  // Explicit diagnostic A/B only: never enabled in normal verification or published defaults.
  if (phase === 'createSymbols:exit' && new URLSearchParams(globalThis.location.search).get('reaProbeMask') === 'off' && mask && mask.enabled) {
    mask.enabled = false;
    console.info('[Seth recovery diagnostic probe] SymbolView Mask disabled by explicit reaDebug=1&reaProbeMask=off; this is a causal rendering probe, not a gameplay fix.');
  }
  const maskTransform = node.getComponent(__dependency_1.UITransform),
    maskWorldBounds = maskTransform && maskTransform.getBoundingBoxToWorld();
  const graphicsMeshes = graphics && graphics.impl ? graphics.impl.getRenderDataList().map((data, meshIndex) => {
    const gpuModel = graphics.model && graphics.model.subModels[meshIndex];
    const vertexBuffer = gpuModel && gpuModel.inputAssembler.vertexBuffers[0];
    // Graphics uses its own pos/color/dist format (8 floats), not MeshRenderData's default UV format (9).
    const stride = vertexBuffer ? vertexBuffer.stride / Float32Array.BYTES_PER_ELEMENT : 0;
    const count = data.vertexStart || data.vertexCount,
      points = [];
    if (stride > 0) for (let index = 0; index < count && index < 1024; index++) points.push({
      x: data.vData[index * stride],
      y: data.vData[index * stride + 1]
    });
    return {
      vertexCount: data.vertexCount,
      vertexStart: data.vertexStart,
      indexCount: data.indexCount,
      indexStart: data.indexStart,
      floatStride: stride,
      meshDefaultStride: data.floatStride,
      localBounds: points.length ? {
        minX: Math.min(...points.map(p => p.x)),
        maxX: Math.max(...points.map(p => p.x)),
        minY: Math.min(...points.map(p => p.y)),
        maxY: Math.max(...points.map(p => p.y))
      } : null
    };
  }) : [];
  const graphicsGPU = graphics && graphics.model ? graphics.model.subModels.map(model => ({
    vertices: model.inputAssembler.vertexCount,
    indices: model.inputAssembler.indexCount
  })) : [];
  const cameraTarget = camera => {
    const renderCamera = camera.camera,
      window = renderCamera && renderCamera.window,
      framebuffer = window && window.framebuffer;
    return framebuffer ? {
      offscreen: !!camera.targetTexture,
      depthStencilTexture: framebuffer.depthStencilTexture ? {
        format: framebuffer.depthStencilTexture.format
      } : null,
      depthStencilAttachment: primitiveFields(framebuffer.renderPass && framebuffer.renderPass.depthStencilAttachment, ['format', 'depthLoadOp', 'depthStoreOp', 'stencilLoadOp', 'stencilStoreOp'])
    } : null;
  };
  const cameras = node.scene.getComponentsInChildren(__dependency_1.Camera).map(camera => ({
    target: cameraTarget(camera),
    name: camera.node.name,
    enabled: camera.enabled,
    inHierarchy: camera.enabledInHierarchy,
    visibility: camera.visibility,
    priority: camera.priority,
    projection: camera.projection,
    orthoHeight: camera.orthoHeight,
    node: snapshot(camera.node)
  }));
  const sample = Array.from(component.symbolsMap.values()).slice(0, 3).map(symbol => {
    const sprite = symbol.symbolSprite,
      frame = sprite && sprite.spriteFrame,
      texture = frame && frame.texture,
      material = sprite && sprite.getRenderMaterial(0);
    const renderData = sprite && sprite.renderData,
      chunk = renderData && renderData.chunk;
    const renderState = renderData ? {
      valid: !!renderData.isValid(),
      vertices: renderData.vertexCount,
      indices: renderData.indexCount,
      dataLength: renderData.dataLength,
      vertDirty: renderData.vertDirty,
      textureDirty: renderData.textureDirty,
      material: renderData.material && renderData.material.name,
      chunk: chunk ? {
        bufferId: chunk.bufferId,
        vertexOffset: chunk.vertexOffset,
        firstVertex: Array.from(chunk.vb || []).slice(0, 9)
      } : null
    } : null;
    return {
      renderState,
      spriteCanRender: !!(sprite && sprite._canRender()),
      spriteEnabledInHierarchy: sprite && sprite.enabledInHierarchy,
      id: symbol.symbolID,
      pos: symbol.posId,
      active: symbol.node.active,
      inHierarchy: symbol.node.activeInHierarchy,
      position: {
        x: symbol.node.position.x,
        y: symbol.node.position.y,
        z: symbol.node.position.z
      },
      root: snapshot(symbol.node),
      spriteNode: snapshot(sprite && sprite.node),
      spriteEnabled: sprite && sprite.enabled,
      spriteColor: sprite ? {
        r: sprite.color.r,
        g: sprite.color.g,
        b: sprite.color.b,
        a: sprite.color.a
      } : null,
      material: material ? {
        name: material.name,
        valid: material.isValid,
        passes: material.passes.length
      } : null,
      uv: frame ? Array.from(frame.uv || []) : null,
      frame: frame && frame.name,
      rect: frame ? {
        width: frame.rect.width,
        height: frame.rect.height
      } : null,
      texture: texture ? {
        width: texture.width,
        height: texture.height,
        gfxReady: !!texture.getGFXTexture(),
        valid: texture.isValid
      } : null
    };
  });
  const pool = App.pool.getPool('symbolPool', false);
  console.info('[Seth recovery symbols]', JSON.stringify({
    phase,
    mask: mask ? {
      enabled: mask.enabled,
      inHierarchy: mask.enabledInHierarchy,
      type: mask.type,
      inverted: mask.inverted,
      subComp: mask.subComp ? {
        name: mask.subComp.constructor.name,
        enabled: mask.subComp.enabled,
        stencilStage: mask.subComp.stencilStage
      } : null,
      worldBounds: maskWorldBounds ? {
        x: maskWorldBounds.x,
        y: maskWorldBounds.y,
        width: maskWorldBounds.width,
        height: maskWorldBounds.height
      } : null,
      node: snapshot(node)
    } : null,
    graphics: graphics ? {
      enabled: graphics.enabled,
      inHierarchy: graphics.enabledInHierarchy,
      stencilStage: graphics.stencilStage,
      meshes: graphicsMeshes,
      gpu: graphicsGPU,
      material: materialState(graphics.getRenderMaterial(0)),
      modelUBOWorld: graphics.model ? Array.from(graphics.model._localData || []).slice(0, 16) : null,
      modelNode: snapshot(graphics.model && graphics.model.node),
      modelTransform: snapshot(graphics.model && graphics.model.transform)
    } : null,
    cameras,
    viewLength: data.parser.view1D.length,
    symbols: component.symbolsMap.size,
    outSymbols: component.outSymbolMap.size,
    poolSize: pool ? pool.size : null,
    children: node.children.length,
    isOutCompleted: component.isOutCompleted,
    isStartSymbolIn: component.isStartSymbolIn,
    ancestors,
    sample
  }));
  if (phase === 'createSymbols:exit') component.scheduleOnce(() => __recoverySymbolTrace(component, 'createSymbols:nextFrame'), 0);
}
