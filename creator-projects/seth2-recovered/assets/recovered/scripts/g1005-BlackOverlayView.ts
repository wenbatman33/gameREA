// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-BlackOverlayView.ts.js
// SHA256: 656f53490b30df338896b8d7f33afb6c8bab3ddaad1a614390036821937b9637
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./g1005-GameEvent";
var __export_0;
export { __export_0 as BlackOverlayView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BlackOverlayView":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
var u, v, y, h, p;
__dependency_1.cclegacy._RF.push({}, "35ebfDwb1BJ2J7IhRhzeDOe", "BlackOverlayView", void 0);
var d = __dependency_1._decorator.ccclass,
  b = __dependency_1._decorator.property;
__publish("BlackOverlayView", (u = d("BlackOverlayView"), v = b(__dependency_1.Node), u((p = (0, __dependency_0.applyDecoratedDescriptor)((h = function (t) {
  function e() {
    for (var e, a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "blackOverlay", p, (0, __dependency_0.assertThisInitialized)(e)), e.scatterSymbols = [], e.spliteSymbols = [], e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var n = e.prototype;
  return n.update = function (t) {}, n.showOverlay = function () {
    this.blackOverlay && (this.blackOverlay.active = !0);
  }, n.hideOverlay = function () {
    this.blackOverlay && (this.blackOverlay.active = !1);
  }, n.addEvents = function () {
    var t = this;
    this.on(__dependency_3.GameEvent.SHOW_DARK, function () {
      t.blackOverlay.active = !0;
    }), this.on(__dependency_3.GameEvent.HIDE_DARK, function () {
      t.blackOverlay.active = !1;
      for (var e = 0; e < t.scatterSymbols.length; e++) dispatch(__dependency_3.GameEvent.BACK_SCATTER, {
        data: t.scatterSymbols[e]
      });
      t.scatterSymbols = [];
    }), this.on(__dependency_3.GameEvent.SPLIT_HIDE_DARK, function () {
      t.blackOverlay.active = !1;
      for (var e = 0; e < t.spliteSymbols.length; e++) dispatch(__dependency_3.GameEvent.BACK_SPLIT, {
        data: t.spliteSymbols[e]
      });
      t.spliteSymbols = [];
    }), this.on(__dependency_3.GameEvent.MOVE_SCATTER, function (e) {
      t.scatterSymbols.push(e.data), t.node.addChild(e.data);
    }), this.on(__dependency_3.GameEvent.MOVE_SPLIT, function (e) {
      t.spliteSymbols.push(e.data), t.node.addChild(e.data);
    });
  }, e;
}(__dependency_2.default)).prototype, "blackOverlay", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), y = h)) || y));
__dependency_1.cclegacy._RF.pop();
