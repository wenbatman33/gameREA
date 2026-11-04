// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Platform.ts.js
// SHA256: c567b4c1b286cd3a666a69693242857bf35169a4386e8a5a79071f4a5b7b63f7
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Snapshot";
var __export_0;
export { __export_0 as Platform };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Platform":
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
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "98f4cJugxNCmLLz8qfpsjAJ", "Platform", void 0), __publish("Platform", function () {
  function t() {
    this.module = null, this._screenshotsPath = null;
  }
  var s = t.prototype;
  return s.openURL = function (t) {
    __dependency_1.sys.openURL(t);
  }, s.copyText = function (t) {
    __dependency_1.native.copyTextToClipboard(t);
  }, s.getNetworkType = function () {
    return __dependency_1.sys.getNetworkType();
  }, s.getBatteryLevel = function () {
    return __dependency_1.sys.getBatteryLevel();
  }, s.snapshot = function (t, e) {
    if ((0, __dependency_1.isValid)(t)) {
      var s = t.addComponent(__dependency_2.Snapshot);
      s.onCaptureComplete = e;
    }
  }, (0, __dependency_0.createClass)(t, [{
    key: "screenshotsPath",
    get: function () {
      return this._screenshotsPath || __dependency_1.sys.isNative && (this._screenshotsPath = __dependency_1.native.fileUtils.getWritablePath() + "Screenshots", __dependency_1.native.fileUtils.isDirectoryExist(this._screenshotsPath) || __dependency_1.native.fileUtils.createDirectory(this._screenshotsPath)), this._screenshotsPath;
    }
  }]), t;
}()).module = "【平臺管理器】", __dependency_1.cclegacy._RF.pop();
