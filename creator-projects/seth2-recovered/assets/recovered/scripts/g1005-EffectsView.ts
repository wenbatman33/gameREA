// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-EffectsView.ts.js
// SHA256: b6cb9c2bfa4199f6dbe76dd3e97f82075a02bc189ddc041ee10f05b2610fc003
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./g1005-GameConfigModel";
import * as __dependency_4 from "./g1005-GameData";
import * as __dependency_5 from "./g1005-GameEvent";
import * as __dependency_6 from "./g1005-GameSymbolID";
var __export_0;
export { __export_0 as EffectsView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EffectsView":
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
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0, void 0;
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
var p;
__dependency_1.cclegacy._RF.push({}, "c69a8p1wNZAY6AN+qmtbYUP", "EffectsView", void 0);
var m = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("EffectsView", m("EffectsView")(p = function (t) {
  function i() {
    return Reflect.construct(t, arguments, new.target || i) || this;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var o = i.prototype;
  return o.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, o.start = function () {
    this.init();
  }, o.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, o.init = function () {}, o.showFireBall = function (t, e) {
    void 0 === e && (e = !1);
    var a = __dependency_3.default.getData().filePaths.fireBallPrefab,
      i = App.cache.get(this.data.module, a).data,
      o = this.data.getData().symbolPosConfig,
      l = this.data.getData().parser.newTimesSymbols,
      c = __dependency_3.default.getData().reelConfig.fireBallSpeed,
      f = (0, __dependency_1.instantiate)(i),
      p = f.getComponent(__dependency_1.sp.Skeleton);
    if (l.length) {
      var m = l.find(function (e) {
          return e.symbolPos == t;
        }),
        g = m.isRare ? "fireball_purple" : "fireball_blue",
        _ = m.times >= 100,
        v = _ ? __dependency_3.EBTM.FIREBALL_HIT_100X : __dependency_3.EBTM.FIREBALL_HIT,
        T = _ ? 3 : 1,
        S = m.symbol == __dependency_6.EBackendSymbolID.T1;
      this.node.addChild(f), f.position = o.get(t);
      var E = __dependency_3.default.isTurbo;
      g = E ? g + "_turbo" : g, g = e ? g + "_stop" : g;
      var M = c;
      E && _ && (M = 1.4 * c), p.timeScale = M, p.setAnimation(0, g, !1), p.setCompleteListener(function () {
        f.destroy();
      }), S && dispatch(__dependency_5.GameEvent.SHAKE_NODE, {
        data: T
      }), this.scheduleOnce(function () {
        dispatch(__dependency_5.GameEvent.PLAY_BTM, {
          data: {
            url: v
          }
        });
      }, .3);
    }
  }, o.showSplitFireBall = function (t) {
    var e = __dependency_3.default.getData().filePaths.fireBallPrefab,
      a = App.cache.get(this.data.module, e).data,
      i = this.data.getData().symbolPosConfig,
      o = __dependency_3.default.getData().reelConfig.fireBallSpeed,
      l = (0, __dependency_1.instantiate)(a),
      c = l.getComponent(__dependency_1.sp.Skeleton),
      f = "fireball_purple",
      h = __dependency_3.EBTM.FIREBALL_HIT_100X;
    this.node.addChild(l), l.position = i.get(t);
    var p = __dependency_3.default.isTurbo;
    f = p ? f + "_turbo" : f;
    var m = o;
    p && (m = 1.4 * o), c.timeScale = m, c.setAnimation(0, f, !1), c.setCompleteListener(function () {
      l.destroy();
    }), this.scheduleOnce(function () {
      dispatch(__dependency_5.GameEvent.PLAY_BTM, {
        data: {
          url: h
        }
      });
    }, .3);
  }, o.showTimesMoving = function (t) {
    var e = this,
      a = this.data.getData(),
      i = a.symbolPosConfig,
      o = a.winBoardPosition,
      s = a.currentTimesPosition,
      c = this.data.getData().gameState,
      f = c.timesSymbols,
      h = c.currentTimes,
      p = __dependency_3.default.getData().reelConfig.totalTimesFireBallTime;
    if (h > 0) {
      var m = __dependency_3.default.getData().filePaths.timesMovingPrefab,
        g = App.cache.get(this.data.module, m).data,
        _ = (0, __dependency_1.instantiate)(g);
      this.node.addChild(_), _.position = s, _.active = !1, /* Preserve captured 3.7 inactive flying-node tween: its own onStart activates this node. */(0, __dependency_1.tween)(_).bindNodeState(false).to(p, {
        position: o
      }, {
        onStart: function () {
          _.active = !0;
        },
        onComplete: function () {
          dispatch(__dependency_5.GameEvent.EXPAND_WIN_AMOUNT), dispatch(__dependency_5.GameEvent.UPDATE_TIMES, {
            data: h
          }), _.destroy();
        }
      }).start(), dispatch(__dependency_5.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_3.EBTM.TIMES_MOVING
        }
      });
    }
    for (var v = function (a) {
        var s = f[a].symbolPos,
          c = __dependency_3.default.getData().filePaths,
          m = c.blueTimesMovingPrefab,
          g = c.purpleTimesMovingPrefab,
          _ = f[a].isRare ? g : m,
          v = App.cache.get(e.data.module, _).data,
          T = (0, __dependency_1.instantiate)(v),
          S = h > 0 ? .37 * (a + 1) : .37 * a;
        e.node.addChild(T), T.position = i.get(s), T.active = !1, /* Preserve captured 3.7 inactive flying-node tween: its own onStart activates this node. */(0, __dependency_1.tween)(T).bindNodeState(false).delay(S).to(p, {
          position: o
        }, {
          onStart: function () {
            T.active = !0, dispatch(__dependency_5.GameEvent.HIDE_TIMES_LABEL, {
              data: s
            }), dispatch(__dependency_5.GameEvent.PLAY_TIMES_SYMBOL_FUNCTION, {
              data: s
            }), dispatch(__dependency_5.GameEvent.PLAY_BTM, {
              data: {
                url: __dependency_3.EBTM.TIMES_MOVING
              }
            });
          },
          onComplete: function () {
            var e = f[a].times;
            0 != a || h > 0 || dispatch(__dependency_5.GameEvent.EXPAND_WIN_AMOUNT), a == f.length - 1 && dispatch(__dependency_5.GameEvent.MERGE_WIN_AMOUNT, {
              data: t
            }), dispatch(__dependency_5.GameEvent.UPDATE_TIMES, {
              data: e
            }), T.destroy();
          }
        }).start();
      }, T = 0; T < f.length; T++) v(T);
  }, o.showCloneTimesMoving = function (t, e, a) {
    for (var i = this, o = 0, s = function () {
        var s = __dependency_3.default.getData().filePaths.splitBlueTimesMovingPrefab,
          d = App.cache.get(i.data.module, s).data,
          f = (0, __dependency_1.instantiate)(d),
          u = __dependency_3.default.getData().reelConfig.totalTimesFireBallTime,
          h = i.data.getData().gameState,
          p = (h.timesSymbols, h.currentTimes, i.data.getData().symbolPosConfig);
        i.node.addChild(f), f.position = p.get(t), f.active = !1, /* Preserve captured 3.7 inactive flying-node tween: its own onStart activates this node. */(0, __dependency_1.tween)(f).bindNodeState(false).to(u, {
          position: p.get(e[c])
        }, {
          onStart: function () {
            f.active = !0;
          },
          onComplete: function () {
            o++, (0, __dependency_1.tween)(i).delay(.5).call(function () {
              o == e.length && a();
            }).start(), f.active = !1, f.destroy();
          }
        }).start();
      }, c = 0; c < e.length; c++) s();
  }, o.reset = function () {}, o.setData = function (t) {}, o.show = function () {
    this.node.active = !0;
  }, o.hide = function () {
    this.node.active = !1;
  }, o.addEvents = function () {
    var t = this;
    this.on(__dependency_5.GameEvent.SHOW_FIRE_BALL, function (e) {
      t.showFireBall(e.data);
    }), this.on(__dependency_5.GameEvent.SHOW_FIRE_BALL_QUICK_STOP, function (e) {
      t.showFireBall(e.data, !0);
    }), this.on(__dependency_5.GameEvent.SHOW_TIMES_MOVING, function (e) {
      t.showTimesMoving(e.complete);
    }), this.on(__dependency_5.GameEvent.SHOW_CLONE_TIMES_MOVING, function () {
      var e = t.data.getData().gameState.splitList.slice();
      e.forEach(function (a, i) {
        t.showCloneTimesMoving(a.from, a.to, function () {
          e.length;
        });
      });
    }), this.on(__dependency_5.GameEvent.SHOW_SPLIT_FIRE_BALL, function (e) {
      var a = t.data.getData().gameState.splitList.slice();
      (0, __dependency_1.tween)(t).call(function () {
        t.showSplitFireBall(a[0].from), dispatch(__dependency_5.GameEvent.SHAKE_NODE, {
          data: 1
        });
      }).call(function () {
        e.complete();
      }).start();
    });
  }, (0, __dependency_0.createClass)(i, [{
    key: "data",
    get: function () {
      return __dependency_4.default.ins;
    }
  }]), i;
}(__dependency_2.default)) || p);
__dependency_1.cclegacy._RF.pop();
