// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Bundles.ts.js
// SHA256: f02655b4146738d322f87ebd4a907444597700e0079ad16407af812a0ade10ea
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EBundles };
var __export_1;
export { __export_1 as Bundles };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EBundles":
      __export_0 = value;
      break;
    case "Bundles":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (g) {
  void 0;
})(__dependency_0);
var n;
__publish("EBundles", void 0), __dependency_0.cclegacy._RF.push({}, "3d1a3os25ROeo0YTS1i+Vgc", "Bundles", void 0), function (g) {
  g[g.resources = 0] = "resources", g[g.hall = 1] = "hall", g[g.template = 2] = "template", g[g.g1001 = 3] = "g1001", g[g.g9999 = 4] = "g9999", g[g.wrapper = 5] = "wrapper", g[g.slotFramework = 6] = "slotFramework", g[g.unknown = 7] = "unknown", g[g.g1002 = 8] = "g1002", g[g.g1003 = 9] = "g1003", g[g.g1004 = 10] = "g1004", g[g.g1005 = 11] = "g1005", g[g.g1006 = 12] = "g1006", g[g.g1007 = 13] = "g1007", g[g.g1008 = 14] = "g1008", g[g.g1009 = 15] = "g1009", g[g.g1010 = 16] = "g1010", g[g.g1011 = 17] = "g1011", g[g.g1012 = 18] = "g1012", g[g.g1013 = 19] = "g1013", g[g.g1014 = 20] = "g1014", g[g.g1015 = 21] = "g1015", g[g.g1016 = 22] = "g1016";
}(n || (n = __publish("EBundles", {})));
var s = __publish("Bundles", {
  bundles: {}
});
Object.values(n).forEach(function (g, e) {
  var n;
  "number" != typeof g && Object.assign(s.bundles, ((n = {})[g] = {
    name: g,
    sort: e
  }, n));
}), __dependency_0.cclegacy._RF.pop();
