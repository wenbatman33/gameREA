// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UIRichText.ts.js
// SHA256: 5bf560e58b7631dcd6585cab63968b6df54606953d74877b2d810592efd2c34a
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
var c, y, g, h, d, f, _, b, m, D, v;
__dependency_1.cclegacy._RF.push({}, "c60049vLz5LvZDBP64ObpCM", "UIRichText", void 0);
var L = __dependency_1._decorator.ccclass,
  w = __dependency_1._decorator.property,
  O = __dependency_1._decorator.menu,
  k = (0, __dependency_1.Enum)(App.Bundles);
__publish("default", (c = O("Quick渲染元件/UIRichText"), y = w({
  displayName: "語言包所在Bundle",
  type: k,
  tooltip: "語言包所在bundle"
}), g = w({
  displayName: "語言包Key",
  tooltip: "所在Bundle中語言包的key,如果語言包在Bundle內，請先用injectLanguageData裝飾語言包資料代理類"
}), h = w({
  displayName: "語言包附加引數",
  tooltip: "附加引數，如果語言包中有 xx{0}{1},有兩個佔位的引數需要替換",
  type: __dependency_1.CCString
}), d = w({
  displayName: "是否啟用多語言",
  tooltip: "是否啟用多語言,預設為啟用"
}), L(f = c((b = (0, __dependency_0.applyDecoratedDescriptor)((_ = function (t) {
  function e() {
    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_lan", b, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_bundle", m, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_params", D, (0, __dependency_0.assertThisInitialized)(e)), e._isDirty = !0, (0, __dependency_0.initializerDefineProperty)(e, "_mult", v, (0, __dependency_0.assertThisInitialized)(e)), e;
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
      var t = this.bundle,
        e = k[t],
        i = App.getLanguage(this.language, this.params, e);
      this.string = i;
    }
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
}(__dependency_1.RichText)).prototype, "_lan", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "_bundle", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return k.resources;
  }
}), D = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "_params", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), v = (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "_mult", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "bundle", [y], Object.getOwnPropertyDescriptor(_.prototype, "bundle"), _.prototype), (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "language", [g], Object.getOwnPropertyDescriptor(_.prototype, "language"), _.prototype), (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "params", [h], Object.getOwnPropertyDescriptor(_.prototype, "params"), _.prototype), (0, __dependency_0.applyDecoratedDescriptor)(_.prototype, "isUseMultilingual", [d], Object.getOwnPropertyDescriptor(_.prototype, "isUseMultilingual"), _.prototype), f = _)) || f) || f));
__dependency_1.cclegacy._RF.pop();
