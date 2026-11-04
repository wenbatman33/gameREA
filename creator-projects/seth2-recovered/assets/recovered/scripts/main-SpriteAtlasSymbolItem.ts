// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SpriteAtlasSymbolItem.ts.js
// SHA256: d632edde7eba98cbd1d90d2da39bc0490a7f1c61bcc259e5551bf9eb20dc4d11
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SymbolBase";
var __export_0;
export { __export_0 as SpriteAtlasSymbolItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpriteAtlasSymbolItem":
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
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
var u, S, b, m, y, f, h, g, d, v;
__dependency_1.cclegacy._RF.push({}, "cfb76jk/dBG0buiz6BJ015o", "SpriteAtlasSymbolItem", void 0);
var A = __dependency_1._decorator.ccclass,
  z = __dependency_1._decorator.property,
  I = __dependency_1._decorator.menu;
__publish("SpriteAtlasSymbolItem", (u = A("SpriteAtlasSymbolItem"), S = I("Slot/Symbol/SpriteAtlasSymbolItem"), b = z(__dependency_1.SpriteAtlas), m = z(__dependency_1.Sprite), y = z(__dependency_1.CCString), u(f = S((g = (0, __dependency_0.applyDecoratedDescriptor)((h = function (t) {
  function e() {
    for (var e, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
    return e = Reflect.construct(t, [this].concat(l).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "atlas", g, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "staticSprite", d, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "prefix", v, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  return (0, __dependency_0.inheritsLoose)(e, t), e.prototype.setSymbol = function (e) {
    if (t.prototype.setSymbol.call(this, e), this.id = e, this.staticSprite && this.atlas) {
      var i = this.atlas.getSpriteFrame(this.prefix + "" + this.id);
      this.staticSprite.spriteFrame = i;
    }
  }, e;
}(__dependency_2.SymbolBase)).prototype, "atlas", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), d = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "staticSprite", [m], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), v = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "prefix", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), f = h)) || f) || f));
__dependency_1.cclegacy._RF.pop();
