// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ChatService.ts.js
// SHA256: ad49355e7f1ae02a1589e16a48a360a27249bd1bbab9dd5e798240d55ae9c33e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-CommonEvent";
import * as __dependency_4 from "./main-CommonService";
var __export_0;
export { __export_0 as ChatService };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ChatService":
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
__dependency_1.cclegacy._RF.push({}, "35307er0mdBR7bBHQJfElHc", "ChatService", void 0), __publish("ChatService", function (t) {
  function o() {
    for (var n, o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
    return (n = Reflect.construct(t, [this].concat(i).slice(1), new.target || o) || this).priority = __dependency_2.NetPriority.Chat, n;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var r = o.prototype;
  return r.onOpen = function (n) {
    t.prototype.onOpen.call(this, n), dispatch(__dependency_3.CommonEvent.CHAT_SERVICE_CONNECTED, this);
  }, r.onClose = function (n) {
    t.prototype.onClose.call(this, n), dispatch(__dependency_3.CommonEvent.CHAT_SERVICE_CLOSE, this);
  }, o;
}(__dependency_4.CommonService)).module = "聊天", __dependency_1.cclegacy._RF.pop();
