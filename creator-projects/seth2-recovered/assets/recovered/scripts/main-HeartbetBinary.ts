// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-HeartbetBinary.ts.js
// SHA256: 15673e547ca73984aa0a19292879f50b67f93cad11962e48a3ef63f7fa1c9cf4
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BinaryStreamMessage";
import * as __dependency_3 from "./main-CmdDefines";
var __export_0;
export { __export_0 as HeartbeatBinary };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HeartbeatBinary":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0, void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "fad937gxhNAP5F5raDpetvK", "HeartbetBinary", void 0);
__publish("HeartbeatBinary", function (t) {
  function r() {
    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || r) || this).mainCmd = __dependency_3.MainCmd.CMD_SYS, e.subCmd = __dependency_3.SUB_CMD_SYS.CMD_SYS_HEART, e;
  }
  return (0, __dependency_0.inheritsLoose)(r, t), (0, __dependency_0.createClass)(r, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), r;
}(__dependency_2.BinaryStreamHeartbeat));
__dependency_1.cclegacy._RF.pop();
