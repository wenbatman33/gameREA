// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReelEnum.ts.js
// SHA256: 2ad2b993a179fdd3a8043ede235733b03c2ec1cee3166c53017ee72521b0041d
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EReelStatus };
var __export_1;
export { __export_1 as EScrollDirection };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EReelStatus":
      __export_0 = value;
      break;
    case "EScrollDirection":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (S) {
  void 0;
})(__dependency_0);
var N, O;
__publish({
  EReelStatus: void 0,
  EScrollDirection: void 0
}), __dependency_0.cclegacy._RF.push({}, "fd84au6EUlFf4T53oRzTowz", "ReelEnum", void 0), function (S) {
  S[S.NONE = 0] = "NONE", S[S.FINISH = 1] = "FINISH", S[S.LOOP_SCROLLING = 2] = "LOOP_SCROLLING", S[S.SCROLLING = 3] = "SCROLLING", S[S.END_SCROLL = 4] = "END_SCROLL", S[S.STOPPING = 5] = "STOPPING", S[S.DIRECT_SHOW_STOP = 6] = "DIRECT_SHOW_STOP", S[S.START_SPIN = 7] = "START_SPIN", S[S.ROUND_START = 8] = "ROUND_START", S[S.WAITING = 9] = "WAITING";
}(N || (N = __publish("EReelStatus", {}))), function (S) {
  S[S.UP = 0] = "UP", S[S.DOWN = 1] = "DOWN", S[S.LEFT = 2] = "LEFT", S[S.RIGHT = 3] = "RIGHT";
}(O || (O = __publish("EScrollDirection", {}))), __dependency_0.cclegacy._RF.pop();
