// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-EventComponent.ts.js
// SHA256: aedd66437b5f4212285a02939d3931dbcc7a1b6e3030154d2c64c1ac033af3c0
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventProcessor";
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
  void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
var s;
__dependency_1.cclegacy._RF.push({}, "9cde5GFThVAMr5vKTrRR3M4", "EventComponent", void 0);
var r = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("default", r(s = function (t) {
  function e() {
    for (var n, e = arguments.length, o = new Array(e), c = 0; c < e; c++) o[c] = arguments[c];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this)._eventProcessor = new __dependency_2.EventProcessor(), n;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var o = e.prototype;
  return o.on = function (t, n) {
    this._on({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.once = function (t, n) {
    this._once({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.off = function (t) {
    this._off({
      bind: "Dispatcher",
      type: t
    });
  }, o._on = function (t) {
    t.target || (t.target = this), this._eventProcessor._on(t);
  }, o._once = function (t) {
    t.target || (t.target = this), this._eventProcessor._once(t);
  }, o._off = function (t) {
    t.target || (t.target = this), this._eventProcessor._off(t);
  }, o.onD = function (t, n) {
    this._on({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.onceD = function (t, n) {
    this._once({
      bind: "Dispatcher",
      type: t,
      cb: n
    });
  }, o.offD = function (t) {
    this._off({
      bind: "Dispatcher",
      type: t
    });
  }, o.onG = function (t, n) {
    this._on({
      bind: "Game",
      type: t,
      cb: n
    });
  }, o.onceG = function (t, n) {
    this._once({
      bind: "Game",
      type: t,
      cb: n
    });
  }, o.offG = function (t, n) {
    this._off({
      bind: "Game",
      type: t,
      cb: n
    });
  }, o.onI = function (t, n) {
    this._on({
      bind: "Input",
      type: t,
      cb: n
    });
  }, o.onceI = function (t, n) {
    this._once({
      bind: "Input",
      type: t,
      cb: n
    });
  }, o.offI = function (t, n) {
    this._off({
      bind: "Input",
      type: t,
      cb: n
    });
  }, o.onN = function (t, n, e, o, c) {
    this._on({
      bind: "Node",
      type: n,
      cb: e,
      target: o,
      useCapture: c,
      node: t
    });
  }, o.onceN = function (t, n, e, o, c) {
    this._once({
      bind: "Node",
      type: n,
      cb: e,
      target: o,
      useCapture: c,
      node: t
    });
  }, o.offN = function (t, n, e, o, c) {
    this._off({
      bind: "Node",
      type: n,
      cb: e,
      target: o,
      useCapture: c,
      node: t
    });
  }, o.addEvents = function () {}, o.onLoad = function () {
    this.addEvents();
  }, o.onDestroy = function () {
    this._eventProcessor.onDestroy();
  }, o.removeAllEvents = function () {
    this._eventProcessor.removeAllEvents();
  }, o.setAdapter = function (t) {}, e;
}(__dependency_1.Component)) || s);
__dependency_1.cclegacy._RF.pop();
