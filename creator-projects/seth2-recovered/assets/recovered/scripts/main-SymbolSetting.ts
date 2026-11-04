// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SymbolSetting.ts.js
// SHA256: af063985e4fe63d9a061ee7f960ddc84e1533aca1c87abea174f6bf06196a8cb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as SymbolSetting };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SymbolSetting":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
var a, s, c, u, y, b, p, m, h;
__dependency_1.cclegacy._RF.push({}, "08221BVuwJOmp4oOuoGt6xV", "SymbolSetting", void 0);
var g = __dependency_1._decorator.ccclass,
  f = __dependency_1._decorator.property;
__publish("SymbolSetting", (a = g("SymbolSetting"), s = f({
  type: __dependency_1.CCInteger,
  displayName: "Symbol 寬度"
}), c = f({
  type: __dependency_1.CCInteger,
  displayName: "Symbol 高度"
}), u = f({
  displayName: "Symbol 锚點"
}), a((p = (0, __dependency_0.applyDecoratedDescriptor)((b = function () {
  (0, __dependency_0.initializerDefineProperty)(this, "symbolWidth", p, this), (0, __dependency_0.initializerDefineProperty)(this, "symbolHeight", m, this), (0, __dependency_0.initializerDefineProperty)(this, "symbolAnchor", h, this);
}).prototype, "symbolWidth", [s], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 150;
  }
}), m = (0, __dependency_0.applyDecoratedDescriptor)(b.prototype, "symbolHeight", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 150;
  }
}), h = (0, __dependency_0.applyDecoratedDescriptor)(b.prototype, "symbolAnchor", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_1.Vec2(.5, .5);
  }
}), y = b)) || y));
__dependency_1.cclegacy._RF.pop();
