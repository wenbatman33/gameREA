// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CommonEvent.ts.js
// SHA256: b9600d458667bff935faec561e1c1e8cf4decd85f1d2b4b0e095482a90c74a41
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as CommonEvent };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CommonEvent":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (E) {
  void 0;
})(__dependency_0);
var C;
__publish("CommonEvent", void 0), __dependency_0.cclegacy._RF.push({}, "44b3bL/ZNdPXbAWy02ohBa3", "CommonEvent", void 0), function (E) {
  E.TEST_PROTO_MSG = "TEST_PROTO_MSG", E.TEST_BINARY_MSG = "TEST_BINARY_MSG", E.TEST_JSON_MSG = "TEST_JSON_MSG", E.LOBBY_SERVICE_CONNECTED = "LOBBY_SERVICE_CONNECTED", E.LOBBY_SERVICE_CLOSE = "LOBBY_SERVICE_CLOSE", E.GAME_SERVICE_CONNECTED = "GAME_SERVICE_CONNECTED", E.GAME_SERVICE_CLOSE = "GAME_SERVICE_CLOSE", E.CHAT_SERVICE_CONNECTED = "CHAT_SERVICE_CONNECTED", E.CHAT_SERVICE_CLOSE = "CHAT_SERVICE_CLOSE";
}(C || (C = __publish("CommonEvent", {}))), __dependency_0.cclegacy._RF.pop();
