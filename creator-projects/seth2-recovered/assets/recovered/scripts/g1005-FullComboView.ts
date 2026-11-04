// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-FullComboView.ts.js
// SHA256: 07ca5e3ab0957453fa52b8ea3be5b6aa175ccddcae01d80ac8a9d8fd811e7c88
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./g1005-GameData";
import * as __dependency_5 from "./g1005-GameEvent";
import * as __dependency_6 from "./g1005-GameConfigModel";
var __export_0;
export { __export_0 as FullComboView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FullComboView":
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
  void 0;
})(__dependency_4);
(function (t) {
  void 0;
})(__dependency_5);
(function (t) {
  void 0;
})(__dependency_6);
var v, b, C, w, O, F, g, D, L;
__dependency_1.cclegacy._RF.push({}, "25dc3zChk5DT6OyyXqQlXl6", "FullComboView", void 0);
var A = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("FullComboView", (v = A("FullComboView"), b = (0, __dependency_3.inject)("alert", __dependency_1.Node), C = (0, __dependency_3.inject)("alert", __dependency_1.UIOpacityComponent), w = (0, __dependency_3.inject)("alert/effect", __dependency_1.sp.Skeleton), v((g = (0, __dependency_0.applyDecoratedDescriptor)((F = function (t) {
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "alert", g, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "alertOpacity", D, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "effect", L, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {}, r.showFullCombo = function (t) {
    var e = this;
    this.data.getData().parser.isFullCombo ? (this.openAlert(), this.effect.setAnimation(0, "in", !1), this.effect.setCompleteListener(function () {
      e.effect.setAnimation(0, "loop", !0);
    }), dispatch(__dependency_5.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_6.EBTM.FULLCOMBO
      }
    }), this.scheduleOnce(function () {
      e.closeAlert(function () {
        t && t();
      });
    }, 3)) : t && t();
  }, r.openAlert = function () {
    this.alert.active = !0, (0, __dependency_1.tween)(this.alertOpacity).to(1, {
      opacity: 255
    }).start();
  }, r.closeAlert = function (t) {
    var e = this;
    (0, __dependency_1.tween)(this.alertOpacity).to(.3, {
      opacity: 0
    }).call(function () {
      e.alert.active = !1, t && t();
    }).start();
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(__dependency_5.GameEvent.SHOW_FULL_COMBO, function (e) {
      t.showFullCombo(e.complete);
    });
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_4.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "alert", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), D = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "alertOpacity", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "effect", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = F)) || O));
__dependency_1.cclegacy._RF.pop();
