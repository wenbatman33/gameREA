// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-env.ts.js
// SHA256: 5acc6f8963eafcc005c874b40a4b3b00c24a342e40955fbbd2265bf4ea9c1906
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Config";
var __export_0;
export { __export_0 as ENV };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ENV":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
var s, n;
__publish("ENV", void 0), __dependency_0.cclegacy._RF.push({}, "0b8ef08Ar9CNape5zymCeww", "env", void 0), s || (s = __publish("ENV", {})), (n = s || (s = __publish("ENV", {}))).local = {
  env: __dependency_1.EEnv.LOCAL,
  apiUrl: "",
  socketUrl: "",
  baseUrl: "https://play.riversense.tw"
}, n.dev = {
  env: __dependency_1.EEnv.DEV,
  apiUrl: "",
  socketUrl: "",
  baseUrl: ""
}, n.prod = {
  env: __dependency_1.EEnv.PROD,
  apiUrl: "",
  socketUrl: "",
  baseUrl: ""
}, __dependency_0.cclegacy._RF.pop();
