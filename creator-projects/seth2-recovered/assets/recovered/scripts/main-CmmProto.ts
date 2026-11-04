// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CmmProto.ts.js
// SHA256: 8d37623bb7d4a0e780cd7c3ba5ac70dcb9665afbd3362b28f85201fa08d6a638
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-ProtoMessage";
var __export_0;
export { __export_0 as CmmProto };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CmmProto":
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
__dependency_1.cclegacy._RF.push({}, "b35e78QVExCGoTgRGudayLT", "CmmProto", void 0);
__publish("CmmProto", function (t) {
  function e() {
    for (var o, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return (o = Reflect.construct(t, [this].concat(n).slice(1), new.target || e) || this).cmd = "", o.mainCmd = 0, o.subCmd = 0, o;
  }
  return (0, __dependency_0.inheritsLoose)(e, t), e;
}(__dependency_2.ProtoMessage));
__dependency_1.cclegacy._RF.pop();
