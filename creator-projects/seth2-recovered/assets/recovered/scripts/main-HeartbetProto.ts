// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-HeartbetProto.ts.js
// SHA256: 976d8aef28bebc0d06ac528f232cfd87a13ca0c705713e52b2abaf807687a632
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmdDefines";
import * as __dependency_3 from "./main-ProtoMessage";
var __export_0;
export { __export_0 as HeartbeatProto };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HeartbeatProto":
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
  void 0, void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "0e25fKD2o1MUJ8sXE3BJGwU", "HeartbetProto", void 0);
__publish("HeartbeatProto", function (t) {
  function r() {
    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(r).slice(1), new.target || r) || this).buffer = null, e.mainCmd = __dependency_2.MainCmd.CMD_SYS, e.subCmd = __dependency_2.SUB_CMD_SYS.CMD_SYS_HEART, e;
  }
  (0, __dependency_0.inheritsLoose)(r, t);
  var i = r.prototype;
  return i.encode = function () {
    return !0;
  }, i.decode = function (t) {
    return !0;
  }, (0, __dependency_0.createClass)(r, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), r;
}(__dependency_3.ProtoMessageHeartbeat));
__dependency_1.cclegacy._RF.pop();
