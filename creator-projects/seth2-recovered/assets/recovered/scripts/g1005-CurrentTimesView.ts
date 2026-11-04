// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-CurrentTimesView.ts.js
// SHA256: d235aa560a7bf73318fc2f3caf8a20333e65d22842c9662c4bb07077fcab9a8d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./g1005-GameData";
import * as __dependency_5 from "./g1005-GameEvent";
import * as __dependency_6 from "./g1005-GameConfigModel";
import * as __dependency_7 from "./main-UrlUtils";
var __export_0;
export { __export_0 as CurrentTimesView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CurrentTimesView":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
var b, y, _, E, N, G, L, D, C, F, S;
__dependency_1.cclegacy._RF.push({}, "85842Rv+bVCBLxjG4vaKsg0", "CurrentTimesView", void 0);
var x = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("CurrentTimesView", (b = x("CurrentTimesView"), y = (0, __dependency_3.inject)("timesNode", __dependency_1.Node), _ = (0, __dependency_3.inject)("timesNode/timesAnimation", __dependency_1.sp.Skeleton), E = (0, __dependency_3.inject)("timesNode/totalTimes", __dependency_1.Label), N = (0, __dependency_3.inject)("timesNode/upgradeAnimation", __dependency_1.sp.Skeleton), b((D = (0, __dependency_0.applyDecoratedDescriptor)((L = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "timesNode", D, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "timesAnimation", C, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "totalTimes", F, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "upgradeAnimation", S, (0, __dependency_0.assertThisInitialized)(e)), e.lv = 0, e.breatheTween = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {}, r.setFgElements = function (t) {
    var e,
      i = this.data.getData().gameState.currentTimes;
    if (this.timesNode.active = !t, this.timesAnimation.setAnimation(0, "loop_0", !0), this.lv = 0, null == (e = this.breatheTween) || e.stop(), !t) {
      var n = i <= 0 ? 0 : i;
      this.updateFGTotalTimes(n);
    }
  }, r.updateFGTotalTimes = function (t) {
    var e = this,
      i = [{
        aniName: "loop_0",
        lv: 0,
        maxTimes: 8
      }, {
        aniName: "loop_1",
        lv: 1,
        maxTimes: 25
      }, {
        aniName: "loop_2",
        lv: 2,
        maxTimes: 80
      }],
      n = i[i.length - 1],
      a = "loop_0",
      s = 0;
    if (t >= n.maxTimes) a = n.aniName, s = n.lv;else for (var r, l = (0, __dependency_0.createForOfIteratorHelperLoose)(i); !(r = l()).done;) {
      var u = r.value;
      if (t <= u.maxTimes) {
        a = u.aniName, s = u.lv;
        break;
      }
    }
    if (s > this.lv && (this.upgradeAnimation.node.active = !0, this.upgradeAnimation.setAnimation(0, "lvUp", !1), this.upgradeAnimation.setCompleteListener(function () {
      e.upgradeAnimation.node.active = !1;
    }), dispatch(__dependency_5.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_6.EBTM.TOTAL_TIMES_UPGRADE
      }
    }), this.timesAnimation.setAnimation(0, a, !0), this.playBreatheTween(this.totalTimes.node, 1 + .1 * s)), this.totalTimes.string = t + "x", "portrait" == __dependency_7.default.getViewModeParam()) if (t.toString().length > 3) {
      var c = 10 * (t.toString().length - 3);
      this.totalTimes.node.setPosition((0, __dependency_1.v3)(-c, 8, 0));
    } else this.totalTimes.node.setPosition((0, __dependency_1.v3)(0, 8, 0));
    this.lv = s;
  }, r.playBreatheTween = function (t, e) {
    var i;
    null == (i = this.breatheTween) || i.stop(), this.breatheTween = (0, __dependency_1.tween)(t).repeatForever((0, __dependency_1.tween)().set({
      scale: new __dependency_1.Vec3(1, 1, 1)
    }).to(.6, {
      scale: new __dependency_1.Vec3(e, e, e)
    }).to(.6, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    })).start();
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(__dependency_5.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setFgElements(e.data);
    }), this.on(__dependency_5.GameEvent.UPDATE_FG_TOTAL_TIMES, function (e) {
      t.updateFGTotalTimes(e.data);
    });
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_4.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "timesNode", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "timesAnimation", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "totalTimes", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(L.prototype, "upgradeAnimation", [N], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = L)) || G));
__dependency_1.cclegacy._RF.pop();
