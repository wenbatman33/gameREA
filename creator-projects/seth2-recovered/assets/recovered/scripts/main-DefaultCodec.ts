// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-DefaultCodec.ts.js
// SHA256: 26772a6d660adea51b3eb9af50353230900d4cbabfe52d1df2c20b12d4b28924
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
import * as __dependency_3 from "./main-ByteArray";
import * as __dependency_4 from "./main-Message";
var __export_0;
export { __export_0 as DefaultCodec };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DefaultCodec":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
__dependency_1.cclegacy._RF.push({}, "8edff39/nxOT6WieRg4wCeT", "DefaultCodec", void 0);
__publish("DefaultCodec", function (e) {
  function r() {
    for (var n, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
    return (n = Reflect.construct(e, [this].concat(r).slice(1), new.target || r) || this).mainCmd = 0, n.subCmd = 0, n.buffer = null, n.headerSize = 3 * Uint32Array.BYTES_PER_ELEMENT, n;
  }
  (0, __dependency_0.inheritsLoose)(r, e);
  var u = r.prototype;
  return u.pack = function (e) {
    this.mainCmd = e.mainCmd, this.subCmd = e.subCmd;
    var n = 0;
    e.buffer && (n = e.buffer.length);
    var t = new __dependency_3.ByteArray();
    if (t.endian = __dependency_2.Macro.USING_LITTLE_ENDIAN, t.writeUnsignedInt(this.mainCmd), t.writeUnsignedInt(this.subCmd), t.writeUnsignedInt(n), e.buffer) {
      var r = new __dependency_3.ByteArray(e.buffer);
      t.writeBytes(r);
    }
    return this.buffer = t.bytes, !0;
  }, u.unPack = function (e) {
    var n = new __dependency_3.ByteArray(e.data);
    n.endian = __dependency_2.Macro.USING_LITTLE_ENDIAN, this.mainCmd = n.readUnsignedInt(), this.subCmd = n.readUnsignedInt();
    var t = n.readUnsignedInt(),
      r = n.buffer.slice(n.position);
    return this.buffer = new Uint8Array(r), t == this.buffer.length;
  }, (0, __dependency_0.createClass)(r, [{
    key: "cmd",
    get: function () {
      return String(this.mainCmd) + String(this.subCmd);
    }
  }]), r;
}(__dependency_4.Codec));
__dependency_1.cclegacy._RF.pop();
