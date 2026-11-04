// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UIReconnect.ts.js
// SHA256: 9099048c5077c931965807be25080b5b9b9c358b2fc16c1a8cba88eeb3bd0662
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Loading";
var __export_0;
export { __export_0 as UIReconnect };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "UIReconnect":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "eea64oh+bZBb7iXTe4r2WC1", "UIReconnect", void 0), __publish("UIReconnect", function (e) {
  function n() {
    for (var t, n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c];
    return (t = Reflect.construct(e, [this].concat(o).slice(1), new.target || n) || this).module = null, t.isResident = !0, t;
  }
  (0, __dependency_0.inheritsLoose)(n, e);
  var o = n.prototype;
  return o.startTimeOutTimer = function (e) {}, o.stopTimeOutTimer = function () {}, n;
}(__dependency_2.default)).module = "【重連提示】", __dependency_1.cclegacy._RF.pop();
