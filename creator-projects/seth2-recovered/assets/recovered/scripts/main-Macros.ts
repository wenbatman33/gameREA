// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Macros.ts.js
// SHA256: ea784f81baeab627607b5b57357ea938a49ea616682920a5a4c76dbb860fd200
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Bundles";
import * as __dependency_2 from "./main-ByteArray";
var __export_0;
export { __export_0 as Macro };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Macro":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_) {
  void 0;
})(__dependency_0);
(function (_) {
  void 0;
})(__dependency_1);
(function (_) {
  void 0;
})(__dependency_2);
var e, c;
__publish("Macro", void 0), __dependency_0.cclegacy._RF.push({}, "e9733sUI9xL5obHtAPUvMhj", "Macros", void 0), (c = e || (e = __publish("Macro", {}))).USING_LITTLE_ENDIAN = __dependency_2.Endian.BIG_ENDIAN, c.BUNDLE_RESOURCES = __dependency_1.EBundles[__dependency_1.EBundles.resources], c.BUNDLE_REMOTE = "__Remote__Caches__", c.ENABLE_CHANGE_LANGUAGE = !0, c.USING_LAN_KEY = "i18n.", c.USING_COLOR_KEY = "color.", c.ADAPT_SCREEN = "Event_ADAPT_SCREEN", c.UNKNOWN = "UNKNOWN", c.ON_CUSTOM_CLOSE = "ON_CUSTOM_CLOSE", c.MAIN_PACK_BUNDLE_NAME = "main", c.BUNDLE_HALL = "hall", c.SUPPORT_ORIENTATION = {
  landscape: !0,
  portrait: !1,
  auto: !1
}, __dependency_0.cclegacy._RF.pop();
