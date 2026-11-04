// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-BaseModel.ts.js
// SHA256: 4242e180106b420d6b315b1b175499ee952f64d4599c5a65ed39531174f97e6f
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-OnlyEventComponent";
var __export_0;
export { __export_0 as BaseModel };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BaseModel":
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
  void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "750232jb11PsIMtQrrhFUkO", "BaseModel", void 0);
__publish("BaseModel", function (t) {
  (0, __dependency_0.inheritsLoose)(o, t);
  var n = o.prototype;
  function o() {
    var e;
    return (e = Reflect.construct(t, [], new.target || o) || this).data = void 0, e;
  }
  return n.getData = function () {
    return this.data;
  }, n.setData = function (t) {
    this.data = t;
  }, o;
}(__dependency_2.default));
__dependency_1.cclegacy._RF.pop();
