// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-WinView.ts.js
// SHA256: 11a92e11710aef7a79e8b409d9feae0d96493ee3e58fd551d0f7cc55f2c6a246
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./framework-CmmSlotUtils";
import * as __dependency_4 from "./g1005-GameConfigModel";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-GameEvent";
var __export_0;
export { __export_0 as WinView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WinView":
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
  void 0, void 0, void 0, void 0, void 0, void 0;
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
var p;
__dependency_1.cclegacy._RF.push({}, "f0bace+0B5NDIDlOv6rqpmQ", "WinView", void 0);
var m = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("WinView", m("WinView")(p = function (t) {
  function o() {
    return Reflect.construct(t, arguments, new.target || o) || this;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var i = o.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, i.start = function () {
    this.init();
  }, i.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, i.init = function () {}, i.showWinCash = function () {
    var t = this,
      n = this.data.getData().gameState.winSymbols,
      e = __dependency_4.default.getData().filePaths.winCashPrefab,
      o = App.cache.get(this.data.module, e).data,
      i = [14, 15, 8, 9, 20, 21, 2, 3, 26, 27, 13, 16, 7, 10, 19, 22, 1, 4, 25, 28, 12, 17, 6, 11, 18, 23, 0, 5, 24, 29];
    null == n && (n = []), n.forEach(function (n) {
      var e = [];
      n.symbolPos.forEach(function (t) {
        e.push(i.indexOf(t));
      }), e.sort(function (t, n) {
        return t - n;
      });
      var c = (0, __dependency_1.instantiate)(o),
        r = i[e[0]],
        u = c.getComponent(__dependency_1.Label);
      t.node.addChild(c), u.string = __dependency_3.CmmSlotUtils.formatNumber(n.winnings), t.playWinCashTween(c, r);
    });
  }, i.playWinCashTween = function (t, n) {
    var e = this.data.getData().symbolPosConfig.get(n),
      o = t.getComponent(__dependency_1.Label).color;
    (0, __dependency_1.tween)(t).set({
      position: e
    }).by(1.5, {
      position: new __dependency_1.Vec3(0, 50, 0)
    }, {
      easing: "fade",
      onComplete: function () {
        t.destroy();
      }
    }).start(), (0, __dependency_1.tween)(o).delay(1).to(.5, {
      a: 0
    }, {
      easing: "fade"
    }).start();
  }, i.reset = function () {}, i.setData = function (t) {}, i.show = function () {
    this.node.active = !0;
  }, i.hide = function () {
    this.node.active = !1;
  }, i.addEvents = function () {
    var t = this;
    this.on(__dependency_6.GameEvent.SHOW_WIN_CASH, function () {
      t.showWinCash();
    });
  }, (0, __dependency_0.createClass)(o, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }]), o;
}(__dependency_2.default)) || p);
__dependency_1.cclegacy._RF.pop();
