// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UILabel.ts.js
// SHA256: e8b33ae48744e8762ad5710afa3fe9eae2f0e076e5300116df7763fb87aafad6
import "./main-Application";
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
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
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var c, y, g, h, b, d, f, _, m, D, L;
__dependency_1.cclegacy._RF.push({}, "b340dLlFTJHb7Z4XQaDDRVw", "UILabel", void 0);
var w = __dependency_1._decorator.ccclass,
  v = __dependency_1._decorator.property,
  O = __dependency_1._decorator.menu,
  k = (0, __dependency_1.Enum)(App.Bundles);
__publish("default", (c = O("Quick渲染元件/UILabel"), y = v({
  displayName: "語言包所在Bundle",
  type: k,
  tooltip: "語言包所在bundle"
}), g = v({
  displayName: "語言包Key",
  tooltip: "所在Bundle中語言包的key,如果語言包在Bundle內，請先用injectLanguageData裝飾語言包資料代理類"
}), h = v({
  displayName: "語言包附加引數",
  tooltip: "附加引數，如果語言包中有 xx{0}{1},有兩個佔位的引數需要替換",
  type: __dependency_1.CCString
}), b = v({
  displayName: "是否啟用多語言",
  tooltip: "是否啟用多語言,預設為啟用"
}), w(d = c((_ = (0, __dependency_0.applyDecoratedDescriptor)((f = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_lan", _, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_bundle", m, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_params", D, (0, __dependency_0.assertThisInitialized)(e)), e._isDirty = !0, (0, __dependency_0.initializerDefineProperty)(e, "_mult", L, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var a = e.prototype;
  return a.onLoad = function () {
    t.prototype.onLoad.call(this), App.language.add(this), this.update(0);
  }, a.onDestroy = function () {
    App.language.remove(this), t.prototype.onDestroy.call(this);
  }, a.update = function (e) {
    t.prototype.update && t.prototype.update.call(this, e), this._isDirty && (this.forceDoLayout(), this._isDirty = !1);
  }, a.forceDoLayout = function () {
    if (this.isUseMultilingual) {
      var e = this.bundle,
        i = k[e],
        r = App.getLanguage(this.language, this.params, i);
      this.string = r;
    }
    t.prototype.forceDoLayout.call(this);
  }, (0, __dependency_0.createClass)(e, [{
    key: "bundle",
    get: function () {
      return this._bundle;
    },
    set: function (t) {
      this._bundle != t && (this._bundle = t, this._isDirty = !0);
    }
  }, {
    key: "language",
    get: function () {
      return this._lan;
    },
    set: function (t) {
      this.language != t && (this._lan = t, this._isDirty = !0);
    }
  }, {
    key: "params",
    get: function () {
      return this._params;
    },
    set: function (t) {
      this._params = t, this._isDirty = !0;
    }
  }, {
    key: "isUseMultilingual",
    get: function () {
      return this._mult;
    },
    set: function (t) {
      t != this._mult && (this._mult = t, this._isDirty = !0);
    }
  }]), e;
}(__dependency_1.Label)).prototype, "_lan", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "_bundle", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return k.resources;
  }
}), D = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "_params", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "_mult", [v], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "bundle", [y], Object.getOwnPropertyDescriptor(f.prototype, "bundle"), f.prototype), (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "language", [g], Object.getOwnPropertyDescriptor(f.prototype, "language"), f.prototype), (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "params", [h], Object.getOwnPropertyDescriptor(f.prototype, "params"), f.prototype), (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "isUseMultilingual", [b], Object.getOwnPropertyDescriptor(f.prototype, "isUseMultilingual"), f.prototype), d = f)) || d) || d));
__dependency_1.cclegacy._RF.pop();
