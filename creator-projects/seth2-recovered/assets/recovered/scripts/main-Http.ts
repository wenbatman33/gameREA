// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Http.ts.js
// SHA256: e57417e5566adeca3e65a9a7f752fb4b271f9326b0f2d1203002c997d470d467
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as Http };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Http":
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
var E, R, e, u, O;
__publish("Http", void 0), __dependency_0.cclegacy._RF.push({}, "e9b1d5uD8FCfI9iZ4UZ5E3F", "Http", void 0), R = E || (E = __publish("Http", {})), function (t) {
  t[t.UrlError = 0] = "UrlError", t[t.TimeOut = 1] = "TimeOut", t[t.RequestError = 2] = "RequestError";
}(e || (e = {})), R.ErrorType = e, function (t) {
  t.POST = "POST", t.GET = "GET";
}(u || (u = {})), R.Type = u, function (t) {
  t[t.SUCCESS = 200] = "SUCCESS", t[t.ERROR_SPIN_ONE_MORE = 201] = "ERROR_SPIN_ONE_MORE", t[t.NOT_MODIFIED = 304] = "NOT_MODIFIED", t[t.REQUEST_ERROR = 400] = "REQUEST_ERROR", t[t.BACKEND_ERROR = 500] = "BACKEND_ERROR";
}(O || (O = {})), R.ServerStatus = O, __dependency_0.cclegacy._RF.pop();
