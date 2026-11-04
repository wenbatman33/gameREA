// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-AdapterSprite.ts.js
// SHA256: 73c42ec6479a82a6050d70b8e8d3d24164bc5f72441538a943a42c95dc31dbea
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Adapter";
var __export_0;
export { __export_0 as SpriteAlignType };
var __export_1;
export { __export_1 as SpriteScaleType };
var __export_2;
export { __export_2 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpriteAlignType":
      __export_0 = value;
      break;
    case "SpriteScaleType":
      __export_1 = value;
      break;
    case "default":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
var T, d, u, y, g, f;
__publish({
  SpriteAlignType: void 0,
  SpriteScaleType: void 0
}), __dependency_1.cclegacy._RF.push({}, "38151mINEtP7bc2sNH9D25e", "AdapterSprite", void 0);
var S,
  v,
  I = __dependency_1._decorator.ccclass,
  E = __dependency_1._decorator.property,
  L = __dependency_1._decorator.executeInEditMode,
  _ = __dependency_1._decorator.menu;
!function (t) {
  t[t.FILL = 0] = "FILL", t[t.SUIT = 1] = "SUIT";
}(S || (S = __publish("SpriteScaleType", {}))), function (t) {
  t[t.LEFT = 0] = "LEFT", t[t.TOP = 1] = "TOP", t[t.RIGHT = 2] = "RIGHT", t[t.BOTTOM = 3] = "BOTTOM", t[t.CENTER = 4] = "CENTER";
}(v || (v = __publish("SpriteAlignType", {})));
__publish("default", (T = L(!0), d = _("Quick適配元件/AdapterSprite"), u = E({
  type: (0, __dependency_1.Enum)(S),
  tooltip: "縮放型別:\n        -FILL: 縮放到填滿父節點（如果父節點有裁剪，影像可能會被裁剪，節點可能會超出父節點）\n        -SUIT: 縮放到剛好在父節點內部最大化顯示（影像會完整顯示，但父節點上下或者左右可能會留空）"
}), y = E({
  type: (0, __dependency_1.Enum)(v),
  tooltip: "齊方式型別:\n        -LEFT: 縮放後靠左對齊\n        -TOP: 縮放後靠上對齊\n        -RIGHT: 縮放後靠右對齊\n        -BOTTOM: 縮放後靠下對齊\n        -CENTER: 縮放後居中對齊"
}), I(g = T(g = d(((0, __dependency_0.applyDecoratedDescriptor)((f = function (t) {
  function e() {
    for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || e) || this)._scaleType = S.SUIT, e._alignType = v.CENTER, e._sprite = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var n = e.prototype;
  return n.onLoad = function () {
    this._sprite = this.node.getComponent(__dependency_1.Sprite);
  }, n.start = function () {
    this.updateSprite(this.scaleType, this.alignType);
  }, n.onChangeSize = function () {
    this.updateSprite(this.scaleType, this.alignType);
  }, n.updateSprite = function (t, e) {
    var i;
    if (this._sprite && this._sprite.enabled && this._sprite.spriteFrame) {
      var s = null == (i = this.node.parent) ? void 0 : i.getComponent(__dependency_1.Widget);
      s && s.updateAlignment(), this.width = this._sprite.spriteFrame.rect.width, this.height = this._sprite.spriteFrame.rect.height;
      var n = this.parentTrans;
      if (this.width / this.height > n.width / n.height) {
        if (t == S.SUIT) {
          var r = n.width / this.width;
          this.node.scale = (0, __dependency_1.v3)(r, r);
        } else if (t == S.FILL) {
          var o = n.height / this.height;
          this.node.scale = (0, __dependency_1.v3)(o, o);
        }
      } else if (t == S.SUIT) {
        var p = n.height / this.height;
        this.node.scale = (0, __dependency_1.v3)(p, p);
      } else if (t == S.FILL) {
        var c = n.width / this.width;
        this.node.scale = (0, __dependency_1.v3)(c, c);
      }
      switch (e) {
        case v.CENTER:
          this.node.setPosition((0, __dependency_1.v3)());
          break;
        case v.LEFT:
          this.node.setPosition((0, __dependency_1.v3)(-.5 * (n.width - this.width * this.node.scale.x), 0));
          break;
        case v.RIGHT:
          this.node.setPosition((0, __dependency_1.v3)(.5 * (n.width - this.width * this.node.scale.x), 0));
          break;
        case v.TOP:
          this.node.setPosition((0, __dependency_1.v3)(0, .5 * (n.height - this.height * this.node.scale.x)));
          break;
        case v.BOTTOM:
          this.node.setPosition((0, __dependency_1.v3)(0, -.5 * (n.height - this.height * this.node.scale.x)));
      }
    }
  }, (0, __dependency_0.createClass)(e, [{
    key: "scaleType",
    get: function () {
      return this._scaleType;
    },
    set: function (t) {
      this._scaleType = t;
    }
  }, {
    key: "alignType",
    get: function () {
      return this._alignType;
    },
    set: function (t) {
      this._alignType = t;
    }
  }, {
    key: "parentTrans",
    get: function () {
      var t;
      return null == (t = this.node.parent) ? void 0 : t.getComponent(__dependency_1.UITransform);
    }
  }]), e;
}(__dependency_2.Adapter)).prototype, "scaleType", [u], Object.getOwnPropertyDescriptor(f.prototype, "scaleType"), f.prototype), (0, __dependency_0.applyDecoratedDescriptor)(f.prototype, "alignType", [y], Object.getOwnPropertyDescriptor(f.prototype, "alignType"), f.prototype), g = f)) || g) || g) || g));
__dependency_1.cclegacy._RF.pop();
