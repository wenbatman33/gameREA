// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-AdapterRoot.ts.js
// SHA256: b319a633108431589119019a0db3de562d04833b9e1924983b5c310d5edb8c11
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Adapter";
import * as __dependency_3 from "./main-AdapterEvent";
import * as __dependency_4 from "./main-Macros";
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
  void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
var c;
__dependency_1.cclegacy._RF.push({}, "f32e31t7khMV4GDh7KIqIvX", "AdapterRoot", void 0);
var u = __dependency_1._decorator.ccclass,
  d = (__dependency_1._decorator.property, __dependency_1._decorator.executeInEditMode),
  p = __dependency_1._decorator.menu;
__publish("default", u(c = d(!0)(c = p("Quick適配元件/AdapterRoot")(c = function (t) {
  function i() {
    return Reflect.construct(t, arguments, new.target || i) || this;
  }
  return (0, __dependency_0.inheritsLoose)(i, t), i.prototype.onChangeSize = function () {
    var t = __dependency_1.screen.windowSize,
      e = t.width / this.width,
      i = t.height / this.height,
      h = Math.min(e, i),
      o = this.width * h,
      c = this.height * h;
    e = t.width / o, i = t.height / c;
    var u = Math.max(e, i);
    __dependency_1.view.getVisibleSize().width, __dependency_1.view.getVisibleSize().height;
    this.width = o * u, this.height = c * u;
    var d = t.width / t.height > 1;
    __dependency_4.Macro.SUPPORT_ORIENTATION.portrait || (d = !0), __dependency_4.Macro.SUPPORT_ORIENTATION.landscape || (d = !1);
    d ? __dependency_3.EOrientationType.LANDSCAPE : __dependency_3.EOrientationType.PORTRAIT;
  }, i;
}(__dependency_2.Adapter)) || c) || c) || c);
__dependency_1.cclegacy._RF.pop();
