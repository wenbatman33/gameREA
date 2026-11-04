// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-TransitionView.ts.js
// SHA256: 5dc657a090c2031779bd750c7b359ee9ff82c1fc8f3c3625f34a83f85949ae00
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./g1005-GameData";
import * as __dependency_5 from "./g1005-GameEvent";
import * as __dependency_6 from "./g1005-GameConfigModel";
import * as __dependency_7 from "./main-UrlUtils";
var __export_0;
export { __export_0 as TransitionView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TransitionView":
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
  void 0, void 0, void 0, void 0;
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
var T, v, y, g, m;
__dependency_1.cclegacy._RF.push({}, "cf46aVALiNB1qFK0SbfIWDC", "TransitionView", void 0);
var w = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("TransitionView", (T = w("TransitionView"), v = (0, __dependency_3.inject)("transitionSpine", __dependency_1.sp.Skeleton), T((m = (0, __dependency_0.applyDecoratedDescriptor)((g = function (t) {
  function n() {
    for (var n, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
    return n = Reflect.construct(t, [this].concat(a).slice(1), new.target || n) || this, (0, __dependency_0.initializerDefineProperty)(n, "transitionSpine", m, (0, __dependency_0.assertThisInitialized)(n)), n;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var s = n.prototype;
  return s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.start = function () {
    this.init();
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.init = function () {}, s.showTransitionIn = function (t) {
    var n = this;
    this.transitionSpine.node.active = !0, "portrait" == __dependency_7.default.getViewModeParam() && (this.transitionSpine.node.scale = (0, __dependency_1.v3)(1.2, -1.2, 1.2), this.transitionSpine.node.angle = 90), this.transitionSpine.skeletonData = this.data.getTransitionSpine("transition_in"), this.transitionSpine.setAnimation(0, "in", !1), this.transitionSpine.setCompleteListener(function () {
      n.transitionSpine.node.active = !1;
    }), dispatch(__dependency_5.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_6.EBTM.TRANSITION
      }
    }), this.scheduleOnce(t, 1);
  }, s.showTransitionOut = function (t) {
    var n = this;
    this.transitionSpine.node.active = !0, "portrait" == __dependency_7.default.getViewModeParam() && (this.transitionSpine.node.scale = (0, __dependency_1.v3)(1.2, -1.2, 1.2), this.transitionSpine.node.angle = 90), this.transitionSpine.skeletonData = this.data.getTransitionSpine("transition_out"), this.transitionSpine.setAnimation(0, "out", !1), this.transitionSpine.setCompleteListener(function () {
      n.transitionSpine.node.active = !1;
    }), dispatch(__dependency_5.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_6.EBTM.TRANSITION
      }
    }), this.scheduleOnce(t, 1);
  }, s.reset = function () {}, s.setData = function (t) {}, s.show = function () {
    this.node.active = !0;
  }, s.hide = function () {
    this.node.active = !1;
  }, s.addEvents = function () {
    var t = this;
    this.on(__dependency_5.GameEvent.SHOW_TRANSITION_IN, function (n) {
      t.showTransitionIn(n.data);
    }), this.on(__dependency_5.GameEvent.SHOW_TRANSITION_OUT, function (n) {
      t.showTransitionOut(n.data);
    });
  }, (0, __dependency_0.createClass)(n, [{
    key: "data",
    get: function () {
      return __dependency_4.default.ins;
    }
  }]), n;
}(__dependency_2.default)).prototype, "transitionSpine", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = g)) || y));
__dependency_1.cclegacy._RF.pop();
