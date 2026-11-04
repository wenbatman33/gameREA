// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Adapter.ts.js
// SHA256: 8144c7a1b2a85ebba355907024d787292cbcb86510f95625b7a3634b6d344f9d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as Adapter };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Adapter":
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
  void 0, void 0, void 0, void 0;
})(__dependency_1);
var a;
__dependency_1.cclegacy._RF.push({}, "aaa34/PoEtBfKKezXCXgQqE", "Adapter", void 0);
var c = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("Adapter", c("Adapter")(a = function (t) {
  function o() {
    for (var n, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || o) || this)._func = null, n;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var i = o.prototype;
  return i.onLoad = function () {
    t.prototype.onLoad && t.prototype.onLoad.call(this), this.onChangeSize();
  }, i.onEnable = function () {
    t.prototype.onEnable && t.prototype.onEnable.call(this), this.addEvents();
  }, i.onDisable = function () {
    this.removeEvents(), t.prototype.onDisable && t.prototype.onDisable.call(this);
  }, i.onDestroy = function () {
    this.removeEvents(), t.prototype.onDestroy && t.prototype.onDestroy.call(this);
  }, i.addEvents = function () {
    this._func || (this._func = this.onChangeSize.bind(this), window.addEventListener("resize", this._func), window.addEventListener("orientationchange", this._func));
  }, i.removeEvents = function () {
    this._func && (window.removeEventListener("resize", this._func), window.removeEventListener("orientationchange", this._func)), this._func = null;
  }, i.onChangeSize = function () {}, (0, __dependency_0.createClass)(o, [{
    key: "width",
    get: function () {
      var t = this.getComponent(__dependency_1.UITransform);
      return t ? t.width : 0;
    },
    set: function (t) {
      var n = this.getComponent(__dependency_1.UITransform);
      n && (n.width = t);
    }
  }, {
    key: "height",
    get: function () {
      var t = this.getComponent(__dependency_1.UITransform);
      return t ? t.height : 0;
    },
    set: function (t) {
      var n = this.getComponent(__dependency_1.UITransform);
      n && (n.height = t);
    }
  }]), o;
}(__dependency_1.Component)) || a);
__dependency_1.cclegacy._RF.pop();
