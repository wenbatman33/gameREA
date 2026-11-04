// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ProtoManager.ts.js
// SHA256: 927fed67e47f8f37d6e68787a5efb7abb450ecc4055bc96e3d45d48f7daf2e2e
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Resource";
var __export_0;
export { __export_0 as ProtoManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ProtoManager":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (o) {
  void 0, void 0, void 0;
})(__dependency_0);
(function (o) {
  void 0;
})(__dependency_1);
__dependency_0.cclegacy._RF.push({}, "647b9mLXKhEYLYv4tkuN2zn", "ProtoManager", void 0), __publish("ProtoManager", function () {
  function o() {
    this._loadDir = {}, this._root = null, this.module = null, this._root = new protobuf.Root();
  }
  var t = o.prototype;
  return t.destory = function () {
    this.unload();
  }, t.load = function (o, t) {
    var e = this;
    return void 0 === t && (t = "proto"), new Promise(function (u, a) {
      e._loadDir[o + "/" + t] ? u(!0) : (e._loadDir[o + "/" + t] = !1, App.asset.loadDir(o, t, __dependency_0.TextAsset, function (o, t, r) {}, function (a) {
        if (a && a.data && Array.isArray(a.data)) {
          for (var i = 0; i < a.data.length; i++) {
            var s = a.data[i];
            protobuf.parse(s.text, e._root);
          }
          var l = new __dependency_1.Resource.Info();
          l.url = t, l.type = __dependency_0.TextAsset, l.data = a.data, l.bundle = o, App.asset.releaseAsset(l), e._loadDir[o + "/" + t] = !0, u(!0);
        } else u(!1);
      }));
    });
  }, t.unload = function () {
    this._loadDir = {}, this._root = new protobuf.Root();
  }, t.lookup = function (o) {
    return this._root ? this._root.lookup(o) : null;
  }, t.decode = function (o) {
    var t = this.lookup(o.className);
    return t ? t.decode(o.buffer) : null;
  }, t.debug = function () {
    Log.d("-------Proto檔案載入資訊,所有proto檔案都載入在同一個root下,檔案載入完成後，資原始檔就會初釋放-------"), __dependency_0.sys.isNative ? Log.dump(this._loadDir) : Log.d(this._loadDir);
  }, o;
}()).module = "【Protobuf協議管理器】", __dependency_0.cclegacy._RF.pop();
