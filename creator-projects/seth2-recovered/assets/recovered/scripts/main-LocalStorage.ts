// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-LocalStorage.ts.js
// SHA256: 7854a7b56dbad8351a103752245c0e10eb2a841840436260fd867ba7e2bd8360
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BitEncrypt";
var __export_0;
export { __export_0 as LocalStorage };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LocalStorage":
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
__dependency_1.cclegacy._RF.push({}, "ecf54s/MtVLRIrjjIqrRIjp", "LocalStorage", void 0), __publish("LocalStorage", function () {
  function t() {
    this.module = null, this.key = "VuxiAKihQ0VR9WRe";
  }
  var r = t.prototype;
  return r.encrypt = function (t) {
    return __dependency_2.BitEncrypt.encode(JSON.stringify(t), this.key);
  }, r.decryption = function (t) {
    return __dependency_2.BitEncrypt.decode(t, this.key);
  }, r.getItem = function (t, e) {
    void 0 === e && (e = null);
    var r = this.storage.getItem(t);
    if (!r) return e;
    try {
      var n = this.decryption(r),
        o = JSON.parse(n);
      return o.type ? o.value : r;
    } catch (t) {
      return r;
    }
  }, r.setItem = function (t, e) {
    var r = typeof e;
    if ("number" == r || "string" == r || "boolean" == r || "object" == r) {
      var n = {
        type: r,
        value: e
      };
      try {
        var o = this.encrypt(n);
        this.storage.setItem(t, o);
      } catch (t) {}
    }
  }, r.removeItem = function (t) {
    this.storage.removeItem(t);
  }, r.clear = function () {
    window.localStorage.clear();
  }, (0, __dependency_0.createClass)(t, [{
    key: "storage",
    get: function () {
      return window.localStorage;
    }
  }]), t;
}()).module = "【本地倉庫】", __dependency_1.cclegacy._RF.pop();
