// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-BundleUpdateHandlerImpl.ts.js
// SHA256: 29e6e5d903c2209f4934ccd7fe7e227760d57210948da51b9967c6d0722d0a05
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Macros";
var __export_0;
export { __export_0 as BundleUpdateHandlerImpl };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BundleUpdateHandlerImpl":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (n) {
  void 0;
})(__dependency_0);
(function (n) {
  void 0;
})(__dependency_1);
__dependency_0.cclegacy._RF.push({}, "8b7b9KkXIBPqJ3HKbM6mJj4", "BundleUpdateHandlerImpl", void 0), __publish("BundleUpdateHandlerImpl", function () {
  function n() {
    this.module = null, this.isResident = !0;
  }
  var e = n.prototype;
  return e.onNewVersionFund = function (n) {
    n.doUpdate();
  }, e.onUpdateFailed = function (n) {
    App.tips.show(App.getLanguage("updateFaild", [n.name])), App.uiManager.getView("HallView").then(function (e) {
      e && e.toUpdateStatus(n);
    });
  }, e.onPreVersionFailed = function (n) {
    this.onUpdateFailed(n);
  }, e.onShowUpdating = function (n) {
    App.tips.show(App.getLanguage("checkingUpdate"));
  }, e.onNeedUpdateMain = function (n) {
    var e = App.getLanguage("mainPackVersionIsTooLow");
    App.alert.show({
      text: e,
      confirmCb: function (n) {
        App.entryManager.enterBundle(__dependency_1.Macro.BUNDLE_RESOURCES);
      }
    });
  }, e.onOther = function (n) {}, e.onDownloading = function (n, e) {
    App.uiManager.getView("HallView").then(function (n) {
      n && n.onDownloadProgess(e);
    });
  }, e.onAreadyUpToData = function (n) {
    App.tips.show(App.getLanguage("alreadyRemoteVersion", [n.name]));
  }, e.onStarCheckUpdate = function (n) {}, e.onStartLoadBundle = function (n) {}, e.onLoadBundleError = function (n, e) {
    App.tips.show(App.getLanguage("loadFailed", [n.name]));
  }, e.onLoadBundleComplete = function (n) {
    App.entryManager.onLoadBundleComplete(n);
  }, e.onLoadBundle = function (n) {
    App.bundleManager.loadBundle(n);
  }, e.onDownloadComplete = function (n) {
    App.releaseManger.tryRemoveBundle(n.bundle);
  }, e.onNeedRestartApp = function (n, e) {
    var t = App.getLanguage("restartApp", [n.name]);
    App.alert.show({
      text: t,
      confirmCb: function (n) {
        e(!1);
      }
    });
  }, n;
}()).module = "【Bundle熱更新】", __dependency_0.cclegacy._RF.pop();
