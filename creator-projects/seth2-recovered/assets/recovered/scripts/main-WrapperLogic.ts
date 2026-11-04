// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WrapperLogic.ts.js
// SHA256: 320f6918a737b0dd46ec200abaff7c918e027c879e1afb093316d6ecd237f3e1
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-ResourceLoader";
import * as __dependency_3 from "./main-Logic";
import * as __dependency_4 from "./main-WrapperData";
import * as __dependency_5 from "./main-AdapterEvent";
var __export_0;
export { __export_0 as WrapperLogic };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WrapperLogic":
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
  void 0;
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
__dependency_1.cclegacy._RF.push({}, "302f8IF/spDE5Qlwe+LRO9e", "WrapperLogic", void 0);
__publish("WrapperLogic", function (t) {
  function o() {
    for (var n, e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || o) || this).loader = new __dependency_2.default(), n.orientationHandler = function (t) {
      n.data.orientation = t;
    }, n;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var r = o.prototype;
  return r.onLoad = function (n) {
    t.prototype.onLoad.call(this, n), this._init();
  }, r.onDestroy = function () {}, r.reset = function () {}, r._init = function () {}, r.loadResources = function () {}, r.addEvents = function () {
    this.on(__dependency_5.AdapterEvent.ORIENTATION, this.orientationHandler);
  }, (0, __dependency_0.createClass)(o, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_4.default);
    }
  }, {
    key: "view",
    get: function () {
      return this.gameView;
    }
  }]), o;
}(__dependency_3.Logic));
__dependency_1.cclegacy._RF.pop();
