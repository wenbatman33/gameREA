// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-FlowEvent.ts.js
// SHA256: 9b0daf68ae6b39da8dc45b027ec998f1a84dc4206c9a43a95286961e05c1cfb2
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseEvent";
var __export_0;
export { __export_0 as FlowEvent };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FlowEvent":
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
__dependency_1.cclegacy._RF.push({}, "b115ctfVDBOXI3fhj1Fquw9", "FlowEvent", void 0);
__publish("FlowEvent", function (e) {
  function n(t, n, o) {
    var u;
    return (u = Reflect.construct(e, [t, n], new.target || n) || this).autoComplete = !1, u.delay = void 0, o ? (u.autoComplete = o.autoComplete, u.delay = o.delay) : u.delay = 0, u;
  }
  return (0, __dependency_0.inheritsLoose)(n, e), n;
}(__dependency_2.BaseEvent));
__dependency_1.cclegacy._RF.pop();
