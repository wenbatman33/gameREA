// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-BaseEvent.ts.js
// SHA256: 27b741c5ec4262e46c856ee675d086f1d3fb1ba54683d9a045ad7e99de408604
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as BaseEvent };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BaseEvent":
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
__dependency_0.cclegacy._RF.push({}, "1e915HrXdhM+ZB0zWT8k5Cv", "BaseEvent", void 0);
__publish("BaseEvent", function (t, e) {
  this.complete = void 0, this.name = void 0, this.data = void 0, this.name = t, this.data = e;
});
__dependency_0.cclegacy._RF.pop();
