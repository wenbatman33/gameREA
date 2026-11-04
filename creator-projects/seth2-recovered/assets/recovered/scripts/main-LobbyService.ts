// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-LobbyService.ts.js
// SHA256: 12f6cccecf9484f3484e9441e00bd409c93821798578918550859fcd05e4418d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-CommonEvent";
import * as __dependency_4 from "./main-CommonService";
var __export_0;
export { __export_0 as LobbyService };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "LobbyService":
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
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
__dependency_1.cclegacy._RF.push({}, "e28f7LLLVVJaYjQl5+dh0Ue", "LobbyService", void 0), __publish("LobbyService", function (t) {
  function o() {
    var e;
    return (e = Reflect.construct(t, [], new.target || o) || this).priority = __dependency_2.NetPriority.Lobby, e.clientType = "socketIO", e.url = "", Log.d("[LobbyService] this.clientType", e.clientType), e.init(), e;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var c = o.prototype;
  return c.onOpen = function (e) {
    t.prototype.onOpen.call(this, e), dispatch(__dependency_3.CommonEvent.LOBBY_SERVICE_CONNECTED, this);
  }, c.onClose = function (e) {
    t.prototype.onClose.call(this, e), dispatch(__dependency_3.CommonEvent.LOBBY_SERVICE_CLOSE, this);
  }, o;
}(__dependency_4.CommonService)).module = "大廳", __dependency_1.cclegacy._RF.pop();
