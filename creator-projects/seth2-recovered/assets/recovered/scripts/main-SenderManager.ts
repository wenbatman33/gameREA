// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SenderManager.ts.js
// SHA256: bed6755fd59b05445a9817b41292ad0ea0652cba15974c23d029a2fde62991a9
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingletonT";
var __export_0;
export { __export_0 as SenderManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SenderManager":
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
__dependency_1.cclegacy._RF.push({}, "99dfadiQCtCWbS1VuSqD4iM", "SenderManager", void 0), __publish("SenderManager", function (e) {
  function t() {
    for (var n, t = arguments.length, r = new Array(t), u = 0; u < t; u++) r[u] = arguments[u];
    return (n = Reflect.construct(e, [this].concat(r).slice(1), new.target || t) || this).module = null, n;
  }
  return (0, __dependency_0.inheritsLoose)(t, e), t;
}(__dependency_2.SingletonT)).module = "【Sender管理器】", __dependency_1.cclegacy._RF.pop();
