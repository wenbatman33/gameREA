// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-PrizeView.ts.js
// SHA256: 6ac910070805eae19a113f57b5d509a5e2e4354cc3960e22bf73d1cfeb66e484
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
var __export_0;
export { __export_0 as PrizeView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "PrizeView":
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
var l, f, p, d, h;
__dependency_1.cclegacy._RF.push({}, "2b821zPXmRCXITWE1Tf9lla", "PrizeView", void 0);
var y = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("PrizeView", (l = y("PrizeView"), f = (0, __dependency_3.inject)("someNode", __dependency_1.Node), l((h = (0, __dependency_0.applyDecoratedDescriptor)((d = function (t) {
  function e() {
    for (var e, i = arguments.length, r = new Array(i), c = 0; c < i; c++) r[c] = arguments[c];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "someNode", h, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.start = function () {
    this.init();
  }, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {}, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, e;
}(__dependency_2.default)).prototype, "someNode", [f], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), p = d)) || p));
__dependency_1.cclegacy._RF.pop();
