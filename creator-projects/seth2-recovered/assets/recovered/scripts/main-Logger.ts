// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Logger.ts.js
// SHA256: 0dccee4e7b48b9d574c9b7cee99e9ce2f32190b22184225a6825d01756e3aef3
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Enums";
var __export_0;
export { __export_0 as LoggerImpl };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LoggerImpl":
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
  void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "1373dsNcepOQKt3JH5pmlPC", "Logger", void 0), __publish("LoggerImpl", function () {
  function t() {
    this.logger = console, this._level = __dependency_2.LogLevel.ALL, this.module = null, this.isResident = !0, this.update();
  }
  var n = t.prototype;
  return n.attach = function (t) {
    this.isValid(t) || (this.level = this.level | t, this.update());
  }, n.detach = function (t) {
    this.isValid(t) && (this.level = this.level ^ t, this.update());
  }, n.isValid = function (t) {
    return !!(this.level & t);
  }, n.update = function () {
    this.isValid(__dependency_2.LogLevel.DUMP) ? __dependency_1.sys.isBrowser ? this.logger.dump = console.debug : this.logger.dump = this.dump.bind(this) : this.logger.dump = function () {}, this.isValid(__dependency_2.LogLevel.ERROR) ? this.logger.e = console.error : this.logger.e = function () {}, this.isValid(__dependency_2.LogLevel.DEBUG) ? this.logger.d = console.log : this.logger.d = function () {}, this.isValid(__dependency_2.LogLevel.WARN) ? this.logger.w = console.warn : this.logger.w = function () {};
  }, n.dump = function () {
    if (this.isValid(__dependency_2.LogLevel.DUMP)) {
      var t = arguments[2];
      if (null == t && (t = 5), Number.isNaN(t) && (t = 10), t > 10 && (t = 10), t <= 0) return void (t = 1);
      var e = arguments[0];
      e.toJSON && "function" == typeof e.toJSON && (e = e.toJSON());
      var n = this._dump(e, arguments[1], t, 0);
      this.logger.d(n);
    }
  }, n.convertName = function (t, e) {
    return void 0 === e && (e = "="), t.length > 0 ? t + " " + e + " " : " ";
  }, n.toBoolean = function (t, e) {
    return "" + this.convertName(t) + e + ";";
  }, n.toNumber = function (t, e) {
    return "" + this.convertName(t) + e;
  }, n.toStringForDump = function (t, e) {
    return this.convertName(t) + '"' + e + '"';
  }, n.toOther = function (t, e) {
    return this.convertName(t) + typeof e;
  }, n.toUnknown = function (t) {
    return (t.length > 0 ? t + " " : " ") + "is unknown type!";
  }, n.toArray = function (t, e, n, i) {
    var o,
      r = "",
      s = "";
    o = e.length;
    for (var u = this.convertName(t, ""), l = 0; l < i; ++l) s += " ";
    r = u + "[";
    for (var a = 0; a < o; ++a) r += "\n" + (0 === s.length ? "" : "" + s) + this.indentFormat + "[" + a + "]:" + this._dump(e[a], "", n, i + 1);
    return r += "\n" + (0 === s.length ? "" : "" + s + this.halfIndentFormat) + "]";
  }, n.toObject = function (t, e, n, i) {
    var o = "";
    if (null === e) return o = "null";
    var r = "";
    if (e instanceof Object) {
      for (var s = 0; s < i; ++s) r += " ";
      for (var u in o = "{", e) o += "\n" + (0 === r.length ? "" : "" + r) + this.indentFormat + u + ":" + this._dump(e[u], "", n, i + 1);
      return o += "\n" + (0 === r.length ? "" : "" + r + this.halfIndentFormat) + "}";
    }
    return o = "Unknown Object Type!";
  }, n._dump = function (t, e, n, i) {
    if (void 0 === e && (e = "unkown"), i > n) return "...";
    e = void 0 === e ? "" : e;
    var o = "";
    switch (typeof t) {
      case "boolean":
        o += this.toBoolean("", t);
        break;
      case "number":
        o += this.toNumber("", t);
        break;
      case "string":
        o += this.toStringForDump("", t);
        break;
      case "object":
        Array.isArray(t) ? o += this.toArray(e, t, n, i) : o += this.toObject(e, t, n, i);
        break;
      case "function":
      case "undefined":
        o += this.toOther(e, t);
        break;
      default:
        o += this.toUnknown(e);
    }
    return o;
  }, (0, __dependency_0.createClass)(t, [{
    key: "level",
    get: function () {
      return this._level;
    },
    set: function (t) {
      this._level = t, this.update();
    }
  }, {
    key: "indentFormat",
    get: function () {
      return "    ";
    }
  }, {
    key: "halfIndentFormat",
    get: function () {
      return "   ";
    }
  }]), t;
}()).module = "【日誌管理器】", __dependency_1.cclegacy._RF.pop();
