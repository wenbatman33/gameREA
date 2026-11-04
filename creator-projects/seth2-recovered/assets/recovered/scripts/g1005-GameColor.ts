// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameColor.ts.js
// SHA256: 3638303f6ec7cf828afa06345bf674bc1b9805c6fe2c7f09fe1fad9ae76db44d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-ColorProxy";
import * as __dependency_3 from "./g1005-GameData";
import * as __dependency_4 from "./g1005-GameColors";
var __export_0;
export { __export_0 as GameColor };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameColor":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (o) {
  void 0;
})(__dependency_0);
(function (o) {
  void 0;
})(__dependency_1);
(function (o) {
  void 0, void 0;
})(__dependency_2);
(function (o) {
  void 0;
})(__dependency_3);
(function (o) {
  void 0;
})(__dependency_4);
var u;
__dependency_1.cclegacy._RF.push({}, "a1bccOBJRhCP77JAb6CqO+C", "GameColor", void 0);
__publish("GameColor", (0, __dependency_2.injectColorData)(u = function (o) {
  function n() {
    for (var t, n = arguments.length, r = new Array(n), e = 0; e < n; e++) r[e] = arguments[e];
    return (t = Reflect.construct(o, [this].concat(r).slice(1), new.target || n) || this).bundle = __dependency_3.default.module, t;
  }
  return (0, __dependency_0.inheritsLoose)(n, o), n.prototype.init = function () {
    this.importColors(__dependency_4);
  }, n;
}(__dependency_2.ColorProxy)) || u);
__dependency_1.cclegacy._RF.pop();
