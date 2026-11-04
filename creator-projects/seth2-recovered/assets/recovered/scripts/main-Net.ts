// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Net.ts.js
// SHA256: fe68a35ad22150adba040930ce66bd9effc78ea71ab1eb66abcf64d10be21785
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as Net };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Net":
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
var o, n, r, c;
__publish("Net", void 0), __dependency_0.cclegacy._RF.push({}, "5d6ecXdPidA1pmDJolUfMzo", "Net", void 0), n = o || (o = __publish("Net", {})), function (t) {
  t[t.Unknown = 0] = "Unknown", t[t.Json = 1] = "Json", t[t.Proto = 2] = "Proto", t[t.BinaryStream = 3] = "BinaryStream";
}(r || (r = {})), n.ServiceType = r, c || (c = n.Proto || (n.Proto = {})), __dependency_0.cclegacy._RF.pop();
