// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReelEvent.ts.js
// SHA256: e58e7a65bc61cdd4aafd167799ce7bc37605e9aa85d7e8c71139f378040b04ef
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as SingleReelEvents };
var __export_1;
export { __export_1 as ReelControllerEvents };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SingleReelEvents":
      __export_0 = value;
      break;
    case "ReelControllerEvents":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
__dependency_0.cclegacy._RF.push({}, "81688XI/bRNsY7pH+OYtEQP", "ReelEvent", void 0);
var R = "SINGLE_REEL_",
  _ = (__publish("SingleReelEvents", {
    START_SPIN: R + "START_SPIN",
    START_EXPECT: R + "START_EXPECT",
    END_SCROLL: R + "END_SCROLL",
    FINISH: R + "FINISH"
  }), "REEL_CONTROLLER_");
__publish("ReelControllerEvents", {
  FINISH_EVENT: _ + "FINISH_EVENT",
  START_NORMAL_SCROLL_EVENT: _ + "START_NORMAL_SCROLL_EVENT"
});
__dependency_0.cclegacy._RF.pop();
