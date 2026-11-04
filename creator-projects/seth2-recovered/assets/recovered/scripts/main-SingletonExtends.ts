// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SingletonExtends.ts.js
// SHA256: bb8060b73f1be26f9562abe94e6131d370317dbce9fce6d63ba85566304fab9e
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as SingletonExtends };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingletonExtends":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (n) {
  void 0;
})(__dependency_0);
__dependency_0.cclegacy._RF.push({}, "1dadeUDcThH8oh7TgbXHTJ/", "SingletonExtends", void 0);
__publish("SingletonExtends", function () {
  function n() {}
  return n.instance = function () {
    return this._instance || (this._instance = new this()), this._instance;
  }, n.destory = function () {
    this._instance = null;
  }, n;
}());
__dependency_0.cclegacy._RF.pop();
