// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-FlowManager.ts.js
// SHA256: da81048d40ceed3ad5781cd90d66f5103c93a1fc560afd9310563d12bb399f44
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Flow";
var __export_0;
export { __export_0 as FlowManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FlowManager":
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
__dependency_0.cclegacy._RF.push({}, "3d4c4EHqDxJSYCJxxKnXK1x", "FlowManager", void 0), __publish("FlowManager", function () {
  function t() {
    this.module = null, this.Flow = __dependency_1.default, this.flowsMap = new Map();
  }
  var o = t.prototype;
  return o.registerFlow = function (t) {
    this.flowsMap.get(t.flowId) ? this.flowsMap.get(t.flowId).push(t) : this.flowsMap.set(t.flowId, [t]), t.start();
  }, o.getFlow = function (t) {
    return this.flowsMap.get(t) ? this.flowsMap.get(t)[0] : null;
  }, o.killFlow = function (t) {
    var o = this.flowsMap.get(t);
    o && (o.reverse(), o.forEach(function (t) {
      t.kill();
    }), this.flowsMap.clear());
  }, o.killAllFlow = function () {
    this.flowsMap.forEach(function (t, o) {
      t.forEach(function (t) {
        t.kill();
      });
    }), this.flowsMap.clear();
  }, o.killOneFlow = function (t) {
    var o = this.flowsMap.get(t);
    if (o) {
      for (var l = 0; l < o.length; l++) o[l].kill();
      this.flowsMap.delete(t);
    }
  }, o.debug = function () {
    Log.d("-------Flow流程快取資訊-------"), this.flowsMap.forEach(function (t, o) {
      Log.d(o);
    });
  }, t;
}()).module = "【flow 流程管理】", __dependency_0.cclegacy._RF.pop();
