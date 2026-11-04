// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-HeartbetJson.ts.js
// SHA256: 303940b06baff72aa9dac4726e0c1b9527fc4b293f8f0c83c3cf7352a7c4e28a
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-JsonMessage";
import * as __dependency_3 from "./main-CmdDefines";
var __export_0;
export { __export_0 as HeartbeatJson };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HeartbeatJson":
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
__dependency_1.cclegacy._RF.push({}, "bf8fbqBBmlMgpCa176v8+Pq", "HeartbetJson", void 0);
__publish("HeartbeatJson", function (t) {
  function s() {
    for (var e, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return (e = Reflect.construct(t, [this].concat(s).slice(1), new.target || s) || this).buffer = null, e.mainCmd = __dependency_3.MainCmd.CMD_SYS, e.subCmd = __dependency_3.SUB_CMD_SYS.CMD_SYS_HEART, e;
  }
  return (0, __dependency_0.inheritsLoose)(s, t), (0, __dependency_0.createClass)(s, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), s;
}(__dependency_2.JsonMessageHeartbeat));
__dependency_1.cclegacy._RF.pop();
