// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UISprite.ts.js
// SHA256: 24de50e32736fbe29f00f8f1f268cc18036347595f981f35af6f59b69f08ce1e
import "./main-Application";
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
import * as __dependency_3 from "./main-CocosUtils";
import * as __dependency_4 from "./main-Resource";
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0, void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
var b, d, D, A, w, L, v, O, k, C, R, N, S, U, B, M, P;
__dependency_1.cclegacy._RF.push({}, "51a47oGgppB6ZnHntSq3PUI", "UISprite", void 0);
var j = __dependency_1._decorator.ccclass,
  x = __dependency_1._decorator.property,
  z = __dependency_1._decorator.menu,
  F = (0, __dependency_1.Enum)(App.Bundles);
__publish("default", (b = z("Quick渲染元件/UISprite"), d = x({
  displayName: "是否啟用多語言",
  tooltip: "是否啟用多語言,預設為關閉"
}), D = x({
  displayName: "語言包所在Bundle",
  visible: function () {
    return this._mult;
  },
  type: F,
  tooltip: "語言包所在bundle"
}), A = x({
  displayName: "語言包Key",
  visible: function () {
    return this._mult;
  },
  tooltip: "所在Bundle中語言包的key,如果語言包在Bundle內，請先用injectLanguageData裝飾語言包資料代理類"
}), w = x({
  displayName: "圖集資源",
  visible: function () {
    return this._mult;
  },
  tooltip: "圖集資源"
}), L = x({
  displayName: "遠端地址",
  visible: function () {
    return this._mult;
  },
  tooltip: "遠端地址"
}), v = x({
  displayName: "語言包附加引數",
  visible: function () {
    return this._mult;
  },
  tooltip: "附加引數，如果語言包中有 xx{0}{1},有兩個佔位的引數需要替換",
  type: __dependency_1.CCString
}), O = x({
  displayName: "資源持有人",
  visible: function () {
    return this._mult;
  },
  tooltip: "填寫對應的 ClassName，例如:'TemplateView'。"
}), j(k = b((R = (0, __dependency_0.applyDecoratedDescriptor)((C = function (t) {
  function e() {
    for (var e, r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    return e = Reflect.construct(t, [this].concat(o).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_lan", R, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_bundle", N, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_params", S, (0, __dependency_0.assertThisInitialized)(e)), e._isDirty = !0, (0, __dependency_0.initializerDefineProperty)(e, "_mult", U, (0, __dependency_0.assertThisInitialized)(e)), e.onLoadComplete = void 0, (0, __dependency_0.initializerDefineProperty)(e, "_user", B, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_lanAtlas", M, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_remote", P, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var u = e.prototype;
  return u.onLoad = function () {
    t.prototype.onLoad.call(this), App.language.add(this), this.update(0);
  }, u.onDestroy = function () {
    App.language.remove(this), t.prototype.onDestroy.call(this);
  }, u.update = function (e) {
    t.prototype.update && t.prototype.update.call(this, e), this._isDirty && (this.forceDoLayout(), this._isDirty = !1);
  }, u.forceDoLayout = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t() {
      var e,
        r,
        i,
        n,
        o,
        a = this;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!this.isUseMultilingual) {
              t.next = 13;
              break;
            }
            if (e = this.bundle, r = F[e], App.bundleManager.getBundle(r)) {
              t.next = 6;
              break;
            }
            return t.abrupt("return");
          case 6:
            if (i = App.getLanguage(this.language, this.params, r)) {
              t.next = 9;
              break;
            }
            return t.abrupt("return");
          case 9:
            return t.next = 11, App.uiManager.getView(this.user);
          case 11:
            n = t.sent, this.isRemote ? App.asset.remote.loadImage(i, !0).then(function (t) {
              t && (0, __dependency_3.setSpriteSpriteFrame)(n, i, a, t, function (t) {
                a.onLoadComplete && a.onLoadComplete(t);
              }, __dependency_2.Macro.BUNDLE_REMOTE, __dependency_4.Resource.Type.Remote, !1);
            }) : this.languageAtlas.length > 0 ? (o = App.getLanguage(this.languageAtlas, [], r), App.cache.getSpriteFrameByAsync(o, i, n, __dependency_3.addExtraLoadResource, r).then(function (t) {
              t && t.isTryReload || t && t.spriteFrame && (0, __dependency_3.setSpriteSpriteFrame)(n, t.url, a, t.spriteFrame, function (t) {
                a.onLoadComplete && a.onLoadComplete(t);
              }, r, __dependency_4.Resource.Type.Local, !1, !0);
            })) : (i += "/spriteFrame", App.cache.getCacheByAsync(i, __dependency_1.SpriteFrame, r).then(function (t) {
              (0, __dependency_3.setSpriteSpriteFrame)(n, i, a, t, function (t) {
                a.onLoadComplete && a.onLoadComplete(t);
              }, r);
            }));
          case 13:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), (0, __dependency_0.createClass)(e, [{
    key: "isUseMultilingual",
    get: function () {
      return this._mult;
    },
    set: function (t) {
      t != this._mult && (this._mult = t, this._isDirty = !0);
    }
  }, {
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
    key: "languageAtlas",
    get: function () {
      return this._lanAtlas;
    },
    set: function (t) {
      this._lanAtlas != t && (this._lanAtlas = t, this._isDirty = !0);
    }
  }, {
    key: "isRemote",
    get: function () {
      return this._remote;
    },
    set: function (t) {
      this._remote != t && (this._remote = t, this._isDirty = !0);
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
    key: "user",
    get: function () {
      return this._user;
    },
    set: function (t) {
      this._user = t;
    }
  }]), e;
}(__dependency_1.Sprite)).prototype, "_lan", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), N = (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "_bundle", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return F.resources;
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "_params", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), U = (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "_mult", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), B = (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "_user", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return __dependency_2.Macro.UNKNOWN;
  }
}), M = (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "_lanAtlas", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), P = (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "_remote", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "isUseMultilingual", [d], Object.getOwnPropertyDescriptor(C.prototype, "isUseMultilingual"), C.prototype), (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "bundle", [D], Object.getOwnPropertyDescriptor(C.prototype, "bundle"), C.prototype), (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "language", [A], Object.getOwnPropertyDescriptor(C.prototype, "language"), C.prototype), (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "languageAtlas", [w], Object.getOwnPropertyDescriptor(C.prototype, "languageAtlas"), C.prototype), (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "isRemote", [L], Object.getOwnPropertyDescriptor(C.prototype, "isRemote"), C.prototype), (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "params", [v], Object.getOwnPropertyDescriptor(C.prototype, "params"), C.prototype), (0, __dependency_0.applyDecoratedDescriptor)(C.prototype, "user", [O], Object.getOwnPropertyDescriptor(C.prototype, "user"), C.prototype), k = C)) || k) || k));
__dependency_1.cclegacy._RF.pop();
