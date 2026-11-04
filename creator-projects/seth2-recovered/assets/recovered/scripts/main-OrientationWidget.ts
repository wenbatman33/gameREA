// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-OrientationWidget.ts.js
// SHA256: ecd8a6908e36e3be4c97ff845da06f60604dc12ffaaf68260ff20eb8383d0c87
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-OrientationToolManager";
var __export_0;
export { __export_0 as OrientationWidget };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "OrientationWidget":
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
(function (t) {
  void 0;
})(__dependency_2);
var f, b, y, A, m, _, d, w, v, H, V, O, S, z, P, D, k, L, j, C, x, I, T, X, Y, E, W, N, B, R, F, M, q, G, Z, U, J, K, Q;
__dependency_1.cclegacy._RF.push({}, "2f4b2fv5CBGqb6IcZ6SStq2", "OrientationWidget", void 0);
var $ = __dependency_1._decorator.ccclass,
  tt = __dependency_1._decorator.property,
  it = __dependency_1._decorator.menu,
  et = __dependency_1._decorator.executeInEditMode;
__publish("OrientationWidget", (f = it("自訂工具/直橫版/OrientationWidget"), b = tt({
  visible: !1
}), y = tt({
  visible: !1
}), A = tt({
  visible: function () {
    return this._top;
  }
}), m = tt({
  visible: !1
}), _ = tt({
  visible: function () {
    return this._top;
  }
}), d = tt({
  visible: !1
}), w = tt({
  visible: !1
}), v = tt({
  visible: function () {
    return this._bottom;
  }
}), H = tt({
  visible: !1
}), V = tt({
  visible: function () {
    return this._bottom;
  }
}), O = tt({
  visible: !1
}), S = tt({
  visible: !1
}), z = tt({
  visible: function () {
    return this._left;
  }
}), P = tt({
  visible: !1
}), D = tt({
  visible: function () {
    return this._left;
  }
}), k = tt({
  visible: !1
}), L = tt({
  visible: !1
}), j = tt({
  visible: function () {
    return this._right;
  }
}), C = tt({
  visible: !1
}), x = tt({
  visible: function () {
    return this._right;
  }
}), I = tt({
  multiline: !0,
  readonly: !0
}), $(T = et(T = f((Y = (0, __dependency_0.applyDecoratedDescriptor)((X = function (t) {
  function i() {
    for (var i, e = arguments.length, r = new Array(e), h = 0; h < e; h++) r[h] = arguments[h];
    return (i = Reflect.construct(t, [this].concat(r).slice(1), new.target || i) || this)._callback = null, i.isSyncing = !1, (0, __dependency_0.initializerDefineProperty)(i, "horizontalStageLimit", Y, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticleStageLimit", E, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_top", W, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_topAlignH", N, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_topAlignV", B, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_bottom", R, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_bottomAlignH", F, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_bottomAlignV", M, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_left", q, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_leftAlignH", G, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_leftAlignV", Z, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_right", U, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_rightAlignH", J, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "_rightAlignV", K, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "tip", Q, (0, __dependency_0.assertThisInitialized)(i)), i;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var h = i.prototype;
  return h.start = function () {
    var t = this;
    this.align(), setTimeout(function () {
      t.align();
    }, 0), this.top || this.bottom || this.left || this.right || (0, __dependency_1.warn)("請設定 OrientationWidget 對齊");
  }, h.update = function (t) {}, h.onDestroy = function () {
    __dependency_1.director.off(__dependency_2.ORIENTATION_EVENT.WIDGET_RESIZE, this._callback);
  }, h.syncAlign = function () {
    this.isSyncing = !0;
    var t = __dependency_1.director.getScene().getChildByName("Canvas").getComponent(__dependency_1.UITransform).contentSize,
      i = t.width >= t.height ? this.horizontalStageLimit.width : this.verticleStageLimit.width,
      e = t.width >= t.height ? this.horizontalStageLimit.height : this.verticleStageLimit.height;
    i > t.width && (i = t.width), e > t.height && (e = t.height);
    var n = this.node.getComponent(__dependency_1.UITransform);
    i >= e ? (this.topAlignH = e / 2 - this.node.position.y - n.height * (1 - n.anchorY), this.bottomAlignH = e / 2 + this.node.position.y - n.height * n.anchorY, this.leftAlignH = i / 2 + this.node.position.x - n.width * n.anchorX, this.rightAlignH = i / 2 - this.node.position.x - n.width * (1 - n.anchorX)) : (this.topAlignV = e / 2 - this.node.position.y - n.height * (1 - n.anchorY), this.bottomAlignV = e / 2 + this.node.position.y - n.height * n.anchorY, this.leftAlignV = i / 2 + this.node.position.x - n.width * n.anchorX, this.rightAlignV = i / 2 - this.node.position.x - n.width * (1 - n.anchorX)), this.isSyncing = !1;
  }, h.align = function () {
    var t = this.node.getComponent(__dependency_1.UITransform);
    if (this.top || this.bottom || this.left || this.right) if (this.top && this.bottom || this.left && this.right) (0, __dependency_1.warn)("對齊參數設定錯誤，請勿同時設定上下或同時設定左右");else if (t.anchorX > 1 || t.anchorX < 0 || t.anchorY > 1 || t.anchorY < 0) (0, __dependency_1.warn)("節點錨點設定錯誤");else {
      var i = __dependency_1.director.getScene().getChildByName("Canvas").getComponent(__dependency_1.UITransform).contentSize,
        e = i.width >= i.height ? this.horizontalStageLimit.width : this.verticleStageLimit.width,
        n = i.width >= i.height ? this.horizontalStageLimit.height : this.verticleStageLimit.height,
        o = i.width >= i.height ? this.topAlignH : this.topAlignV,
        r = i.width >= i.height ? this.bottomAlignH : this.bottomAlignV,
        h = i.width >= i.height ? this.leftAlignH : this.leftAlignV,
        l = i.width >= i.height ? this.rightAlignH : this.rightAlignV;
      if (i.width < e && (e = i.width), i.height < n && (n = i.height), this.top) {
        var a = n / 2 - o;
        this.node.setPosition(this.node.position.x, a - (1 - t.anchorY) * t.height);
      }
      if (this.bottom) {
        var c = -n / 2 + r;
        this.node.setPosition(this.node.position.x, c + t.anchorY * t.height);
      }
      if (this.left) {
        var u = -e / 2 + h;
        this.node.setPosition(u + t.anchorX * t.width, this.node.position.y);
      }
      if (this.right) {
        var f = e / 2 - l;
        this.node.setPosition(f - (1 - t.anchorX) * t.width, this.node.position.y);
      }
    }
  }, (0, __dependency_0.createClass)(i, [{
    key: "top",
    get: function () {
      return this._top;
    },
    set: function (t) {
      this._top = t, this.align();
    }
  }, {
    key: "topAlignH",
    get: function () {
      return this._topAlignH;
    },
    set: function (t) {
      this._topAlignH = t, this.isSyncing || this.align();
    }
  }, {
    key: "topAlignV",
    get: function () {
      return this._topAlignV;
    },
    set: function (t) {
      this._topAlignV = t, this.isSyncing || this.align();
    }
  }, {
    key: "bottom",
    get: function () {
      return this._bottom;
    },
    set: function (t) {
      this._bottom = t, this.align();
    }
  }, {
    key: "bottomAlignH",
    get: function () {
      return this._bottomAlignH;
    },
    set: function (t) {
      this._bottomAlignH = t, this.isSyncing || this.align();
    }
  }, {
    key: "bottomAlignV",
    get: function () {
      return this._bottomAlignV;
    },
    set: function (t) {
      this._bottomAlignV = t, this.isSyncing || this.align();
    }
  }, {
    key: "left",
    get: function () {
      return this._left;
    },
    set: function (t) {
      this._left = t, this.align();
    }
  }, {
    key: "leftAlignH",
    get: function () {
      return this._leftAlignH;
    },
    set: function (t) {
      this._leftAlignH = t, this.isSyncing || this.align();
    }
  }, {
    key: "leftAlignV",
    get: function () {
      return this._leftAlignV;
    },
    set: function (t) {
      this._leftAlignV = t, this.isSyncing || this.align();
    }
  }, {
    key: "right",
    get: function () {
      return this._right;
    },
    set: function (t) {
      this._right = t, this.align();
    }
  }, {
    key: "rightAlignH",
    get: function () {
      return this._rightAlignH;
    },
    set: function (t) {
      this._rightAlignH = t, this.isSyncing || this.align();
    }
  }, {
    key: "rightAlignV",
    get: function () {
      return this._rightAlignV;
    },
    set: function (t) {
      this._rightAlignV = t, this.isSyncing || this.align();
    }
  }]), i;
}(__dependency_1.Component)).prototype, "horizontalStageLimit", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_1.Size(1680, 720);
  }
}), E = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "verticleStageLimit", [tt], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_1.Size(720, 1680);
  }
}), W = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_top", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "top", [tt], Object.getOwnPropertyDescriptor(X.prototype, "top"), X.prototype), N = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_topAlignH", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "topAlignH", [A], Object.getOwnPropertyDescriptor(X.prototype, "topAlignH"), X.prototype), B = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_topAlignV", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "topAlignV", [_], Object.getOwnPropertyDescriptor(X.prototype, "topAlignV"), X.prototype), R = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_bottom", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "bottom", [tt], Object.getOwnPropertyDescriptor(X.prototype, "bottom"), X.prototype), F = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_bottomAlignH", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "bottomAlignH", [v], Object.getOwnPropertyDescriptor(X.prototype, "bottomAlignH"), X.prototype), M = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_bottomAlignV", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "bottomAlignV", [V], Object.getOwnPropertyDescriptor(X.prototype, "bottomAlignV"), X.prototype), q = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_left", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "left", [tt], Object.getOwnPropertyDescriptor(X.prototype, "left"), X.prototype), G = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_leftAlignH", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "leftAlignH", [z], Object.getOwnPropertyDescriptor(X.prototype, "leftAlignH"), X.prototype), Z = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_leftAlignV", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "leftAlignV", [D], Object.getOwnPropertyDescriptor(X.prototype, "leftAlignV"), X.prototype), U = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_right", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "right", [tt], Object.getOwnPropertyDescriptor(X.prototype, "right"), X.prototype), J = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_rightAlignH", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "rightAlignH", [j], Object.getOwnPropertyDescriptor(X.prototype, "rightAlignH"), X.prototype), K = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "_rightAlignV", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "rightAlignV", [x], Object.getOwnPropertyDescriptor(X.prototype, "rightAlignV"), X.prototype), Q = (0, __dependency_0.applyDecoratedDescriptor)(X.prototype, "tip", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "場景 Canvas 請設定為 Fit Height\n請勿同時設定上下/左右，錨點請設定 0~1 之間";
  }
}), T = X)) || T) || T) || T));
__dependency_1.cclegacy._RF.pop();
