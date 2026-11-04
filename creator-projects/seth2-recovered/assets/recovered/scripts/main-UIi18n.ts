// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UIi18n.ts.js
// SHA256: 4a4952075993d1fda428c34eb1225ef68893ffeaa975adf066f18308a6d261c1
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var y, g, z, f, b, _, S, F, d, m, L, D, U, w, O, v, H, k, P, j;
__dependency_1.cclegacy._RF.push({}, "a1c47n1NB9JY5gVe5Pf0Gpk", "UIi18n", void 0);
var N = __dependency_1._decorator.ccclass,
  C = __dependency_1._decorator.property,
  A = __dependency_1._decorator.menu,
  B = __dependency_1._decorator.executeInEditMode,
  I = (0, __dependency_1.Enum)(App.Bundles);
__publish("default", (y = A("Quick渲染元件/UIi18n"), g = B(), z = C({
  displayName: "語言包所在Bundle",
  type: I,
  tooltip: "語言包所在bundle"
}), f = C({
  displayName: "語言包Key",
  tooltip: "所在Bundle中語言包的key,如果語言包在Bundle內，請先用injectLanguageData裝飾語言包資料代理類"
}), b = C({
  displayName: "語言包附加引數",
  tooltip: "附加引數，如果語言包中有 xx{0}{1},有兩個佔位的引數需要替換",
  type: __dependency_1.CCString
}), _ = C({
  displayName: "是否啟用多語言",
  tooltip: "是否啟用多語言,預設為啟用"
}), S = C({
  displayName: "是否啟用字型大小",
  tooltip: "是否啟用字型大小,預設為啟用"
}), F = C({
  displayName: "是否同步行高(LineHeight)",
  visible: function () {
    return this.isUseFontSize;
  },
  tooltip: "是否同步行高,預設為啟用"
}), d = C({
  displayName: "中文 字型大小",
  type: __dependency_1.CCFloat,
  visible: function () {
    return this.isUseFontSize;
  },
  tooltip: "中文 字型大小"
}), m = C({
  displayName: "其他 字型大小",
  type: __dependency_1.CCFloat,
  visible: function () {
    return this.isUseFontSize;
  },
  tooltip: "中文以外的字型大小"
}), N(L = y(L = g((U = (0, __dependency_0.applyDecoratedDescriptor)((D = function (t) {
  function e() {
    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_lan", U, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_bundle", w, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_params", O, (0, __dependency_0.assertThisInitialized)(e)), e._isDirty = !0, (0, __dependency_0.initializerDefineProperty)(e, "_mult", v, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_isUseFontSize", H, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_isSyncLineHeight", k, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_zhFontSize", P, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_otherFontSize", j, (0, __dependency_0.assertThisInitialized)(e)), e.targetLabel = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var s = e.prototype;
  return s.onLoad = function () {
    var t = this.node.getComponent(__dependency_1.Label);
    t ? (this.targetLabel = t, App.language.add(this), this.update(0)) : Log.e("錯誤: 請確認此節點上面已掛載 Label 組件。", this);
  }, s.onDestroy = function () {
    App.language.remove(this);
  }, s.update = function (t) {
    this._isDirty && (this.forceDoLayout(), this._isDirty = !1);
  }, s.forceDoLayout = function () {
    if (this.targetLabel) {
      if (this.isUseMultilingual) {
        var t = this.bundle,
          e = I[t],
          i = App.getLanguage(this.language, this.params, e);
        this.targetLabel.string = i;
      }
      this.isUseFontSize && this.updateFontSize(), this.targetLabel.forceDoLayout();
    }
  }, s.updateFontSize = function () {
    var t = App.language.getLanguage(),
      e = this.getFontSizeForLanguage(t);
    null !== e ? (this.targetLabel.fontSize = e, this.isUseFontSize && this._isSyncLineHeight && (this.targetLabel.lineHeight = e)) : console.warn("UIFontSize: 未定義語言 " + t + " 的字型大小。");
  }, s.getFontSizeForLanguage = function (t) {
    return "zh-tw" === t || "zh-cn" === t ? this._zhFontSize : this._otherFontSize;
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
  }, {
    key: "isUseFontSize",
    get: function () {
      return this._isUseFontSize;
    },
    set: function (t) {
      if (t != this._isUseFontSize) {
        if (t) {
          var e = this.getComponent(__dependency_1.Label).fontSize;
          this._zhFontSize || (this._zhFontSize = e), this._otherFontSize || (this._otherFontSize = e);
        }
        this._isUseFontSize = t, this._isDirty = !0;
      }
    }
  }, {
    key: "isSyncLineHeight",
    get: function () {
      return this._isSyncLineHeight;
    },
    set: function (t) {
      t != this._isSyncLineHeight && (this._isSyncLineHeight = t);
    }
  }, {
    key: "zhFontSize",
    get: function () {
      return this._zhFontSize;
    },
    set: function (t) {
      this._zhFontSize = t, this.targetLabel.fontSize = t, this.isUseFontSize && this._isSyncLineHeight && (this.targetLabel.lineHeight = t);
    }
  }, {
    key: "otherFontSize",
    get: function () {
      return this._otherFontSize;
    },
    set: function (t) {
      this._otherFontSize = t;
    }
  }]), e;
}(__dependency_1.Component)).prototype, "_lan", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), w = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "_bundle", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return I.resources;
  }
}), O = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "_params", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), v = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "_mult", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "bundle", [z], Object.getOwnPropertyDescriptor(D.prototype, "bundle"), D.prototype), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "language", [f], Object.getOwnPropertyDescriptor(D.prototype, "language"), D.prototype), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "params", [b], Object.getOwnPropertyDescriptor(D.prototype, "params"), D.prototype), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "isUseMultilingual", [_], Object.getOwnPropertyDescriptor(D.prototype, "isUseMultilingual"), D.prototype), H = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "_isUseFontSize", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), k = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "_isSyncLineHeight", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), P = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "_zhFontSize", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "_otherFontSize", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "isUseFontSize", [S], Object.getOwnPropertyDescriptor(D.prototype, "isUseFontSize"), D.prototype), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "isSyncLineHeight", [F], Object.getOwnPropertyDescriptor(D.prototype, "isSyncLineHeight"), D.prototype), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "zhFontSize", [d], Object.getOwnPropertyDescriptor(D.prototype, "zhFontSize"), D.prototype), (0, __dependency_0.applyDecoratedDescriptor)(D.prototype, "otherFontSize", [m], Object.getOwnPropertyDescriptor(D.prototype, "otherFontSize"), D.prototype), L = D)) || L) || L) || L));
__dependency_1.cclegacy._RF.pop();
