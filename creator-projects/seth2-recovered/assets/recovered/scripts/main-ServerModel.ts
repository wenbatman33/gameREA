// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ServerModel.ts.js
// SHA256: a0fb5db33a1d1966c7a126cecc8efc10e08dfdb4c4f57062bd887c45165a8029
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
var __export_0;
export { __export_0 as EServerMode };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EServerMode":
      __export_0 = value;
      break;
    case "default":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
var o;
__publish("EServerMode", void 0), __dependency_1.cclegacy._RF.push({}, "24183MNqbhJ2Kqy5ZQAANyA", "ServerModel", void 0), function (e) {
  e[e.STATIC = 0] = "STATIC", e[e.ONLINE = 1] = "ONLINE";
}(o || (o = __publish("EServerMode", {})));
var i = function (e) {
  function r() {
    var t;
    return (t = Reflect.construct(e, [], new.target || r) || this).data = {
      mode: o.ONLINE
    }, t;
  }
  return (0, __dependency_0.inheritsLoose)(r, e), r.Instance = function () {
    return this._instance || (this._instance = new r());
  }, (0, __dependency_0.createClass)(r, [{
    key: "mode",
    get: function () {
      return this.data.mode;
    },
    set: function (e) {
      this.data.mode = e;
    }
  }]), r;
}(__dependency_2.BaseModel);
i._instance = null;
__publish("default", i.Instance());
__dependency_1.cclegacy._RF.pop();
