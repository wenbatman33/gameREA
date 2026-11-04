// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SpriteSymbolItem.ts.js
// SHA256: bed6d93e8e63ba77ae4e75fc9e5d71508413b4aceeb52adaddbbdc85ccbd1f40
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SymbolBase";
var __export_0;
export { __export_0 as SpriteSymbolItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpriteSymbolItem":
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
var m, u, y, b, S, f, h, d, F;
__dependency_1.cclegacy._RF.push({}, "b481e8FpJpLxZ0/TiZNr/hB", "SpriteSymbolItem", void 0);
var I = __dependency_1._decorator.ccclass,
  g = __dependency_1._decorator.property,
  v = __dependency_1._decorator.menu,
  z = __dependency_1._decorator.executeInEditMode;
__publish("SpriteSymbolItem", (m = I("SpriteSymbolItem"), u = v("Slot/Symbol/SpriteSymbolItem"), y = z(), b = g(__dependency_1.Node), S = g({
  type: __dependency_1.SpriteFrame,
  tooltip: "放入對應圖片。通常[0]會是空，其餘會與後端symbolID對齊"
}), m(f = u(f = y((d = (0, __dependency_0.applyDecoratedDescriptor)((h = function (t) {
  function e() {
    for (var e, i = arguments.length, n = new Array(i), l = 0; l < i; l++) n[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "staticSymbol", d, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "spriteFrames", F, (0, __dependency_0.assertThisInitialized)(e)), e;
  }
  return (0, __dependency_0.inheritsLoose)(e, t), e.prototype.setSymbol = function (e) {
    if (t.prototype.setSymbol.call(this, e), this.id = e, this.staticSymbol) {
      var i = this.spriteFrames[e];
      i && (this.staticSymbol.getComponent(__dependency_1.Sprite).spriteFrame = i);
    }
  }, e;
}(__dependency_2.SymbolBase)).prototype, "staticSymbol", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = (0, __dependency_0.applyDecoratedDescriptor)(h.prototype, "spriteFrames", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), f = h)) || f) || f) || f));
__dependency_1.cclegacy._RF.pop();
