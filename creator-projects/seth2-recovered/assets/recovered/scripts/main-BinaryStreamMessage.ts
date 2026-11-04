// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-BinaryStreamMessage.ts.js
// SHA256: 3b10b73bbedbab767bdb5cb6c7234bf8a55e2970f76bb877623a2ed95cd81961
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
import * as __dependency_3 from "./main-ByteArray";
import * as __dependency_4 from "./main-Net";
import * as __dependency_5 from "./main-Message";
var __export_0;
export { __export_0 as serialize };
var __export_1;
export { __export_1 as BOOL };
var __export_2;
export { __export_2 as STRING };
var __export_3;
export { __export_3 as FLOAT };
var __export_4;
export { __export_4 as DOUBLE };
var __export_5;
export { __export_5 as BYTE };
var __export_6;
export { __export_6 as SHORT };
var __export_7;
export { __export_7 as INT };
var __export_8;
export { __export_8 as UBYTE };
var __export_9;
export { __export_9 as USHORT };
var __export_10;
export { __export_10 as UINT };
var __export_11;
export { __export_11 as BinaryStream };
var __export_12;
export { __export_12 as BinaryStreamHeartbeat };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "serialize":
      __export_0 = value;
      break;
    case "BOOL":
      __export_1 = value;
      break;
    case "STRING":
      __export_2 = value;
      break;
    case "FLOAT":
      __export_3 = value;
      break;
    case "DOUBLE":
      __export_4 = value;
      break;
    case "BYTE":
      __export_5 = value;
      break;
    case "SHORT":
      __export_6 = value;
      break;
    case "INT":
      __export_7 = value;
      break;
    case "UBYTE":
      __export_8 = value;
      break;
    case "USHORT":
      __export_9 = value;
      break;
    case "UINT":
      __export_10 = value;
      break;
    case "BinaryStream":
      __export_11 = value;
      break;
    case "BinaryStreamHeartbeat":
      __export_12 = value;
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
(function (e) {
  void 0;
})(__dependency_5);
__publish("serialize", function (e, t, r, i, a) {
  return function (n, s) {
    if (void 0 === Reflect.getOwnPropertyDescriptor(n, "__serialize__")) {
      var o = {};
      if (Reflect.getPrototypeOf(n).__serialize__ && void 0 === Reflect.getOwnPropertyDescriptor(n, "__serialize__")) for (var u = Reflect.getPrototypeOf(n).__serialize__, l = Object.keys(u), c = l.length, y = 0; y < c; y++) o[l[y]] = u[l[y]].slice(0);
      Reflect.defineProperty(n, "__serialize__", {
        value: o
      });
    }
    if (n.__serialize__[e]) throw "SerializeKey has already been declared:" + e;
    n.__serialize__[e] = [s, t, r, i, a];
  };
}), __dependency_1.cclegacy._RF.push({}, "6ffc0ADekNBn6xYaGYHBeeL", "BinaryStreamMessage", void 0);
var u = function () {
    function e() {
      this.data = null;
    }
    var t = e.prototype;
    return t.read = function (e) {}, t.write = function (e) {}, (0, __dependency_0.createClass)(e, [{
      key: "littleEndian",
      get: function () {
        return __dependency_2.Macro.USING_LITTLE_ENDIAN;
      }
    }]), e;
  }(),
  l = function (e) {
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || r) || this).data = 0, t;
    }
    return (0, __dependency_0.inheritsLoose)(r, e), r;
  }(u),
  c = __publish("BOOL", function (e) {
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || r) || this).data = !1, t;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readBoolean();
    }, i.write = function (e) {
      e.writeBoolean(this.data);
    }, r;
  }(u)),
  y = __publish("STRING", function (e) {
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || r) || this).data = "", t.byteSize = void 0, t;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      var t = this.byteSize;
      null == this.byteSize && (t = e.readUnsignedInt()), this.data = e.readUTFBytes(t);
    }, i.write = function (e) {
      var t = new __dependency_3.ByteArray();
      t.writeUTFBytes(this.data, this.byteSize), null == this.byteSize && e.writeUnsignedInt(t.length), e.writeBytes(t);
    }, r;
  }(u)),
  h = __publish("FLOAT", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readFloat();
    }, i.write = function (e) {
      e.writeFloat(this.data);
    }, r;
  }(l)),
  f = __publish("DOUBLE", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readDouble();
    }, i.write = function (e) {
      e.writeDouble(this.data);
    }, r;
  }(l)),
  d = __publish("BYTE", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readByte();
    }, i.write = function (e) {
      e.writeByte(this.data);
    }, r;
  }(l)),
  p = __publish("SHORT", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readShort();
    }, i.write = function (e) {
      e.writeShort(this.data);
    }, r;
  }(l)),
  b = __publish("INT", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readInt();
    }, i.write = function (e) {
      e.writeInt(this.data);
    }, r;
  }(l)),
  z = __publish("UBYTE", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readUnsignedByte();
    }, i.write = function (e) {
      e.writeByte(this.data);
    }, r;
  }(l)),
  v = __publish("USHORT", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readUnsignedShort();
    }, i.write = function (e) {
      e.writeUnsignedShort(this.data);
    }, r;
  }(l)),
  A = __publish("UINT", function (e) {
    function r() {
      return Reflect.construct(e, arguments, new.target || r) || this;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.read = function (e) {
      this.data = e.readUnsignedInt();
    }, i.write = function (e) {
      e.writeUnsignedInt(this.data);
    }, r;
  }(l)),
  _ = __publish("BinaryStream", function (e) {
    function r() {
      for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (t = Reflect.construct(e, [this].concat(i).slice(1), new.target || r) || this).byteArray = null, t.buffer = null, t;
    }
    (0, __dependency_0.inheritsLoose)(r, e);
    var i = r.prototype;
    return i.encode = function () {
      return this.byteArray = new __dependency_3.ByteArray(this.buffer), this.byteArray.endian = __dependency_2.Macro.USING_LITTLE_ENDIAN, this.serialize(), this.buffer = this.byteArray.bytes, !0;
    }, i.isNumberValue = function (e) {
      return e == h || e == f || e == d || e == p || e == b || e == z || e == v || e == A;
    }, i.isBoolValue = function (e) {
      return e == c;
    }, i.isStringValue = function (e) {
      return e == y;
    }, i.serialize = function () {
      var e = Reflect.getPrototypeOf(this).__serialize__;
      if (!e) return null;
      for (var t = Object.keys(e), r = t.length, i = 0; i < r; i++) {
        var a = e[t[i]],
          n = a[0],
          s = a[1],
          o = a[2],
          u = a[3],
          l = a[4];
        this.serializeMember(this[n], n, s, o, u, l);
      }
    }, i.serializeMember = function (e, t, i, a, n, s) {
      this.isNumberValue(i) ? this.serializeNumberStreamValue(e, i) : this.isBoolValue(i) ? this.serializeBoolValue(e, i) : this.isStringValue(i) ? this.serializeStringStreamValue(e, i, a) : e instanceof Array ? this.serializeArray(e, t, i, a, n, s) : e instanceof r ? (e.byteArray = this.byteArray, e.serialize()) : Log.e("序列化成員 : " + t + " 出錯!!");
    }, i.serializeNumberStreamValue = function (e, t) {
      var r = new t();
      r.data = null == e || e == Number.NaN ? 0 : e, r.write(this.byteArray);
    }, i.serializeBoolValue = function (e, t) {
      var r = new t();
      r.data = null != e && e, r.write(this.byteArray);
    }, i.serializeStringStreamValue = function (e, t, r) {
      var i = new t();
      i.byteSize = r, i.data = null == e ? "" : e, i.write(this.byteArray);
    }, i.checkArrayDimension = function (e, t) {
      var r = 0,
        i = e;
      do {
        r++, i = i[0];
      } while (i && Array.isArray(i) && i.length > 0);
      return r == t;
    }, i.serializeArray = function (e, t, r, i, a, n) {
      if (null == n && (n = 1), this.checkArrayDimension(e, n)) {
        this.byteArray.writeUnsignedInt(e.length);
        for (var s = 0; s < e.length; s++) e[s] instanceof Array ? this.serializeArray(e[s], t + "[" + s + "]", r, i, a, n - 1) : this.serializeMember(e[s], t + "[" + s + "]", i, a, void 0);
      } else Log.e(t + " 定義陣列跟序列化的陣列維度不一致");
    }, i.decode = function (e) {
      return this.buffer = e, this.byteArray = new __dependency_3.ByteArray(e), this.byteArray.endian = __dependency_2.Macro.USING_LITTLE_ENDIAN, this.deserialize(), !0;
    }, i.deserialize = function () {
      var e = Reflect.getPrototypeOf(this).__serialize__;
      if (!e) return !0;
      for (var t = Object.keys(e), r = t.length, i = 0; i < r; i++) {
        var a = e[t[i]],
          n = a[0],
          s = a[1],
          o = a[2],
          u = a[3],
          l = a[4];
        this.deserializeMember(n, s, o, u, l);
      }
    }, i.deserializeMember = function (e, t, i, a, n) {
      try {
        var s = this[e];
        this.isNumberValue(t) ? this[e] = this.deserializeNumberStreamValue(e, t) : this.isBoolValue(t) ? this[e] = this.deserializeBoolValue(e, t) : this.isStringValue(t) ? this[e] = this.deserializeStringStreamValue(e, t, i) : s instanceof Array ? this.deserializeArray(e, t, i, a, n) : s instanceof r ? (s.byteArray = this.byteArray, s.deserialize()) : Log.e("deserializeMember " + e + " error!!!");
      } catch (t) {
        Log.w(t.message), Log.e("deserializeMember " + e + " error!!!");
      }
    }, i.deserializeNumberStreamValue = function (e, t) {
      var r = new t();
      return r.read(this.byteArray), r.data;
    }, i.deserializeBoolValue = function (e, t) {
      var r = new t();
      return r.read(this.byteArray), r.data;
    }, i.deserializeStringStreamValue = function (e, t, r) {
      var i = new t();
      return i.byteSize = r, i.read(this.byteArray), i.data;
    }, i._deserializeArray = function (e, t, i, a, n, s) {
      if (void 0 === s && (s = 1), !(s <= 0)) for (var o = this.byteArray.readUnsignedInt(), u = 0, l = 0; l < o; l++) if (s > 1) e.push([]), this._deserializeArray(e[u], t + "[" + u + "]", i, a, n, s - 1), u++;else {
        var c = new a();
        c instanceof r ? (c.byteArray = this.byteArray, e[l] = c.deserialize()) : c instanceof y ? (c.byteSize = n, c.read(this.byteArray), e[l] = c.data) : (c.read(this.byteArray), e[l] = c.data);
      }
    }, i.deserializeArray = function (e, t, r, i, a) {
      this[e] = [], null == a && (a = 1), this._deserializeArray(this[e], e, t, r, i, a);
    }, r;
  }(__dependency_5.Message));
__publish("BinaryStreamHeartbeat", function (e) {
  function r() {
    return Reflect.construct(e, arguments, new.target || r) || this;
  }
  return (0, __dependency_0.inheritsLoose)(r, e), r;
}(_)).type = __dependency_4.Net.ServiceType.BinaryStream, __dependency_1.cclegacy._RF.pop();
