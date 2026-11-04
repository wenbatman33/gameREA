// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SingletonT.ts.js
// SHA256: aee1a219cfa36117d2297888c4912e221d06751935965b883b13d64b8f62d0d0
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Macros";
var __export_0;
export { __export_0 as SingletonT };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingletonT":
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
__dependency_0.cclegacy._RF.push({}, "cada6ZZEXlHUKK5Bplpb0ho", "SingletonT", void 0);
__publish("SingletonT", function () {
  function t() {
    this._datas = new Map(), this.module = null;
  }
  var e = t.prototype;
  return e.get = function (t, e) {
    void 0 === e && (e = !0);
    var o = this.getKey(t);
    if (o == __dependency_1.Macro.UNKNOWN) return null;
    if (this._datas.has(o)) return this._datas.get(o);
    if ("string" != typeof t && e) {
      var i = null;
      return (i = t.instance ? t.instance : new t()).module = t.module, Log.d(i.module + "初始化"), i.init && i.init(), this._datas.set(t.module, i), i;
    }
    return null;
  }, e.destory = function (t) {
    var e = this;
    if (t) {
      var n = this.getKey(t);
      if (this._datas.has(n)) {
        Log.d(n + "銷燬");
        var o = this._datas.get(n);
        return o && o.destory && o.destory(), this._datas.delete(n), !0;
      }
      return !1;
    }
    return this._datas.forEach(function (t) {
      t.isResident ? Log.d(t.module + "為常駐單列，不做銷燬處理") : (Log.d(t.module + "銷燬"), t.destory && t.destory(), e._datas.delete(t.module));
    }), !0;
  }, e.clear = function (t) {
    var e = this;
    t ? this._datas.forEach(function (n, o) {
      e.isInExclude(n, t) || (Log.d(n.module + "清理"), n.clear && n.clear());
    }) : this._datas.forEach(function (t, e) {
      Log.d(t.module + "清理"), t.clear && t.clear();
    });
  }, e.debug = function () {
    Log.d("************************** " + this.module + " 開始 **************************"), this._datas.forEach(function (t, e, n) {
      t.debug ? t.debug() : Log.d(t.module + " : 未實現debug介面");
    }), Log.d("************************** " + this.module + " 結束 **************************");
  }, e.isInExclude = function (t, e) {
    if (!e) return !1;
    for (var n = 0; n < e.length; n++) {
      if (this.getKey(e[n]) == t.module) return !0;
    }
    return !1;
  }, e.getKey = function (t) {
    __dependency_1.Macro.UNKNOWN;
    return "string" == typeof t ? t : t.module;
  }, t;
}());
__dependency_0.cclegacy._RF.pop();
