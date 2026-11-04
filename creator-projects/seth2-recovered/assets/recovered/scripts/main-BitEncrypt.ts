// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-BitEncrypt.ts.js
// SHA256: 6340d07f9af3dd2d2a4956148bc88d75f78822cc51af1d1ad3845d9c3294be4e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as BitEncrypt };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BitEncrypt":
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
__dependency_1.cclegacy._RF.push({}, "dc65dfUZyBKGo+ZLjacvgTW", "BitEncrypt", void 0);
__publish("BitEncrypt", new (function () {
  function t() {
    this.logTag = "[BitEncrypt]:", this._encryptKey = "EskKbMvzZBILhcTv";
  }
  var n = t.prototype;
  return n.decode = function (t, e) {
    return this._code(t, e);
  }, n.encode = function (t, e) {
    return this._code(t, e);
  }, n._code = function (t, e) {
    var n = this._check(t, e);
    if (n.isOK) {
      for (var r = [], c = 0; c < t.length; c++) r.push(t.charCodeAt(c));
      for (var i = 0, o = /[\w\d_-`~#!$%^&*(){}=+;:'"<,>,/?|\\\u4e00-\u9fa5]/g, h = 0; h < r.length; h++) {
        var s = t[h].match(o);
        s && s.length > 0 && (r[h] ^= n.key.charCodeAt(i), (s = String.fromCharCode(r[h]).match(o)) && s.length || (r[h] ^= n.key.charCodeAt(i)), ++i >= n.key.length && (i = 0));
      }
      for (var u = "", y = 0; y < r.length; y++) u += String.fromCharCode(r[y]);
      return u;
    }
    return t;
  }, n._check = function (t, e) {
    return t && t.length > 0 ? e && e.length > 0 ? {
      isOK: !0,
      key: e
    } : this.encryptKey && this.encryptKey.length > 0 ? {
      isOK: !0,
      key: this.encryptKey
    } : {
      isOK: !1,
      key: ""
    } : {
      isOK: !1,
      key: ""
    };
  }, (0, __dependency_0.createClass)(t, [{
    key: "encryptKey",
    get: function () {
      return this._encryptKey;
    },
    set: function (t) {
      this._encryptKey = t;
    }
  }]), t;
}())());
__dependency_1.cclegacy._RF.pop();
