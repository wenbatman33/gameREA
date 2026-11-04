// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-EntryDelegate.ts.js
// SHA256: 95442de049cd426f318b22b6d6ded3c506664b835b46502d577a20ff9a73bc88
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Macros";
var __export_0;
export { __export_0 as EntryDelegate };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EntryDelegate":
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
__dependency_0.cclegacy._RF.push({}, "7195eD0dxVOmIS0HcmWhEaq", "EntryDelegate", void 0);
__publish("EntryDelegate", function () {
  function e() {}
  var n = e.prototype;
  return n.onEnterGameView = function (e, n) {
    var t = this.getPersistBundle();
    e && t.push(e.bundle), App.gameView && App.gameView.close(), App.gameView = n, App.bundleManager.removeLoadedBundle(t);
  }, n.onShowGameView = function (e, n) {}, n.onCheckUpdate = function () {
    Log.d("主包檢測更新");
    var e = this.getEntryConfig(__dependency_1.Macro.BUNDLE_RESOURCES);
    App.bundleManager.enterBundle(e);
  }, n.getPersistBundle = function () {
    return [__dependency_1.Macro.BUNDLE_RESOURCES];
  }, n.onEnterMain = function (e, n) {
    e && (App.gameView && App.gameView.close(), e.onEnter(n));
  }, n.getEntryConfig = function (e) {
    return null;
  }, e;
}());
__dependency_0.cclegacy._RF.pop();
