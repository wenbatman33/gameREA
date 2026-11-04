// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-NodePoolManager.ts.js
// SHA256: 0fb8a0ba403f8c09414f11b03534d9cb871eea3fa84bb97f46f44f164dc17d73
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
var __export_0;
export { __export_0 as NodePool };
var __export_1;
export { __export_1 as NodePoolManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "NodePool":
      __export_0 = value;
      break;
    case "NodePoolManager":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (o) {
  void 0;
})(__dependency_0);
(function (o) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (o) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "98d8dJBeClOv4kRv+WtZ/mZ", "NodePoolManager", void 0);
var l = __publish("NodePool", function () {
  function o(o) {
    this.name = __dependency_2.Macro.UNKNOWN, this.pool = [], this.node = null, this.name = o;
  }
  var e = o.prototype;
  return e.clear = function () {
    for (var o = this.pool.length, t = 0; t < o; ++t) this.pool[t].destroy();
    this.pool = [], this.node && (0, __dependency_1.isValid)(this.node) && this.node.destroy(), this.node = null;
  }, e.put = function (o) {
    o && -1 === this.pool.indexOf(o) && (o.removeFromParent(), this.pool.push(o));
  }, e.get = function () {
    if (this.pool.length <= 0) return this.node ? (0, __dependency_1.instantiate)(this.node) : null;
    var o = this.pool.length - 1,
      t = this.pool[o];
    return this.pool.length = o, t;
  }, (0, __dependency_0.createClass)(o, [{
    key: "cloneNode",
    get: function () {
      return this.node;
    },
    set: function (o) {
      o && (0, __dependency_1.isValid)(o) && (this.node = o, this.node.removeFromParent());
    }
  }, {
    key: "size",
    get: function () {
      return this.pool.length;
    }
  }]), o;
}());
__publish("NodePoolManager", function () {
  function o() {
    this.module = null, this.pools = new Map();
  }
  var t = o.prototype;
  return t.createPool = function (o) {
    return this.pools.has(o) || this.pools.set(o, new l(o)), this.pools.get(o);
  }, t.deletePool = function (o) {
    if ("string" == typeof o) {
      if (this.pools.has(o)) {
        var t = this.pools.get(o);
        t && t.clear(), this.pools.delete(o);
      }
    } else o && o instanceof l && this.deletePool(o.name);
  }, t.getPool = function (o, t) {
    return void 0 === t && (t = !0), this.pools.has(o) ? this.pools.get(o) : t ? this.createPool(o) : null;
  }, t.debug = function () {
    Log.d("-------物件池節點快取資訊-------"), this.pools.forEach(function (o, t) {
      Log.d(t);
    });
  }, o;
}()).module = "【物件池】", __dependency_1.cclegacy._RF.pop();
