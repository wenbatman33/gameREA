// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-OnlyEventComponent.ts.js
// SHA256: 6b190e993972c0a937de1512c996f8e70268497da012404a75c490fa1dc5c187
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
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
__dependency_0.cclegacy._RF.push({}, "a6c08V+ZSRPWbgvzyDEx52J", "OnlyEventComponent", void 0);
__publish("default", function () {
  function t() {
    this._events = new Map();
  }
  var n = t.prototype;
  return n.on = function (t, n) {
    this._events.has(t) ? Log.e(t + " 重複註冊") : (App.dispatcher.on(t, n, this), this._events.set(t, n));
  }, n.off = function (t) {
    this._events.has(t) && (App.dispatcher.off(t, this), this._events.delete(t));
  }, n.addEvents = function () {}, n.onLoad = function () {
    this.addEvents();
  }, n.onDestroy = function () {
    var t = this;
    this._events.forEach(function (n, e) {
      App.dispatcher.off(e, t);
    }), this._events.clear();
  }, t;
}());
__dependency_0.cclegacy._RF.pop();
