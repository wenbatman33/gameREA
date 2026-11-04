// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-TableViewCell.ts.js
// SHA256: f9feb2f6def2b67d5f0515495012584d3caf4808fd2597adf6139e59a871b169
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
var __export_0;
export { __export_0 as TableViewCell };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TableViewCell":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
var a, u, s, p, f, y;
__dependency_1.cclegacy._RF.push({}, "911aez3VC9D84ngrsmXq6sf", "TableViewCell", void 0);
var d = __dependency_1._decorator.ccclass,
  v = __dependency_1._decorator.property,
  b = __dependency_1._decorator.menu;
__publish("TableViewCell", (a = b("QuickUI组件/TableViewCell"), u = v({
  displayName: "Type",
  tooltip: "列表項型別"
}), d(s = a(((y = function (e) {
  function t() {
    for (var t, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
    return (t = Reflect.construct(e, [this].concat(l).slice(1), new.target || t) || this).view = null, t.index = -1, (0, __dependency_0.initializerDefineProperty)(t, "type", f, (0, __dependency_0.assertThisInitialized)(t)), t;
  }
  (0, __dependency_0.inheritsLoose)(t, e);
  var l = t.prototype;
  return l.reset = function () {
    this.index = -1;
  }, l.init = function () {}, l.willRecycle = function () {}, t;
}(__dependency_2.default)).INVALID_INDEX = -1, f = (0, __dependency_0.applyDecoratedDescriptor)((p = y).prototype, "type", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 0;
  }
}), s = p)) || s) || s));
__dependency_1.cclegacy._RF.pop();
