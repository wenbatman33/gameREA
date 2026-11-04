// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ProtoMessage.ts.js
// SHA256: e056e88d047a7ae4ad888ae03339126a141c6c26be85bc9e1e9abbee1fe8d2ea
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Net";
import * as __dependency_3 from "./main-Message";
var __export_0;
export { __export_0 as ProtoMessage };
var __export_1;
export { __export_1 as ProtoCodec };
var __export_2;
export { __export_2 as ProtoMessageHeartbeat };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ProtoMessage":
      __export_0 = value;
      break;
    case "ProtoCodec":
      __export_1 = value;
      break;
    case "ProtoMessageHeartbeat":
      __export_2 = value;
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
(function (t) {
  void 0, void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "2a060dCqolHUa5KS4cGgWCi", "ProtoMessage", void 0);
__publish("ProtoMessage", function (t) {
  function n(e) {
    var n;
    return (n = Reflect.construct(t, [], new.target || n) || this).buffer = null, n.type = null, n.data = null, n.type = e, n;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var r = n.prototype;
  return r.encode = function () {
    return this.buffer = this.type.encode(this.data).finish(), !!this.buffer;
  }, r.decode = function (t) {
    return !!t && (this.buffer = t, this.data = this.type.decode(this.buffer), !0);
  }, n;
}(__dependency_3.Message)), __publish("ProtoCodec", function (t) {
  function n() {
    return Reflect.construct(t, arguments, new.target || n) || this;
  }
  return (0, __dependency_0.inheritsLoose)(n, t), n;
}(__dependency_3.Codec));
__publish("ProtoMessageHeartbeat", function (t) {
  function n() {
    return Reflect.construct(t, arguments, new.target || n) || this;
  }
  return (0, __dependency_0.inheritsLoose)(n, t), n;
}(__dependency_3.Message)).type = __dependency_2.Net.ServiceType.Proto, __dependency_1.cclegacy._RF.pop();
