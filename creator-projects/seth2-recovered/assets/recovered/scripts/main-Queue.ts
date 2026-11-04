// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Queue.ts.js
// SHA256: 68dc5dcbb5ecc536ac05246b4ab2a6d32ef1d7fef9b85576d3921bbb01775455
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
__dependency_0.cclegacy._RF.push({}, "de5b2AOED5K+LOaUiobQCy5", "Queue", void 0);
__publish("default", function () {
  function t() {
    this.temp = [];
  }
  var e = t.prototype;
  return e.Queue = function () {
    this.temp = [];
  }, e.enqueue = function (t) {
    this.temp.push(t);
  }, e.dequeue = function () {
    return this.temp.shift();
  }, e.front = function () {
    return this.temp[0];
  }, e.size = function () {
    return this.temp.length;
  }, e.isEmpty = function () {
    return 0 === this.temp.length;
  }, e.clear = function () {
    this.temp = [];
  }, t;
}());
__dependency_0.cclegacy._RF.pop();
