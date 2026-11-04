// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Resource.ts.js
// SHA256: b1db6e5eb1381abf116f0f7626260b43027a3d2495e22067319443463a2543b8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as Resource };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Resource":
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
var n;
__publish("Resource", void 0), __dependency_1.cclegacy._RF.push({}, "86fa3hsHP1My5zJYrNKRvgr", "Resource", void 0), function (t) {
  var s, n, o;
  !function (t) {
    t[t.LOADING = 0] = "LOADING", t[t.NO_FOUND_LOAD_RESOURCE = 1] = "NO_FOUND_LOAD_RESOURCE", t[t.SUCCESS = 2] = "SUCCESS";
  }(s || (s = {})), t.LoaderError = s, function (t) {
    t[t.NONE = 0] = "NONE", t[t.WAITTING_FOR_RELEASE = 1] = "WAITTING_FOR_RELEASE";
  }(n || (n = {})), t.CacheStatus = n, function (t) {
    t[t.Local = 0] = "Local", t[t.Remote = 1] = "Remote";
  }(o || (o = {})), t.Type = o;
  var r = function () {
    this.url = "", this.type = null, this.data = null, this.retain = !1, this.bundle = null, this.resourceType = o.Local, this.stamp = null;
  };
  t.Info = r;
  var a = function () {
    function t() {
      this.isLoaded = !1, this.data = null, this.info = new r(), this.status = n.NONE, this.getCb = [], this.finishCb = [];
    }
    var s = t.prototype;
    return s.doGet = function (t) {
      for (var i = 0; i < this.getCb.length; i++) this.getCb[i] && this.getCb[i](t);
      this.getCb = [];
    }, s.doFinish = function (t) {
      for (var i = 0; i < this.finishCb.length; i++) this.finishCb[i] && this.finishCb[i](t);
      this.finishCb = [];
    }, (0, __dependency_0.createClass)(t, [{
      key: "isInvalid",
      get: function () {
        return this.isLoaded && this.data && !(0, __dependency_1.isValid)(this.data);
      }
    }]), t;
  }();
  t.CacheData = a;
}(n || (n = __publish("Resource", {}))), __dependency_1.cclegacy._RF.pop();
