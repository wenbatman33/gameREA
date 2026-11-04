// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-MainUpdateHandlerImpl.ts.js
// SHA256: ee154b79407dd76778a5564b5170335171af6b5c203474db44c3385e75b6aa6b
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as MainUpdateHandlerImpl };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MainUpdateHandlerImpl":
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
__dependency_0.cclegacy._RF.push({}, "cac7a+ZzjZBQqpsWN779faI", "MainUpdateHandlerImpl", void 0), __publish("MainUpdateHandlerImpl", function () {
  function n() {
    this.module = null, this.isResident = !0;
  }
  var e = n.prototype;
  return e.onNewVersionFund = function (n) {
    n.doUpdate();
  }, e.onUpdateFailed = function (n) {
    var e = App.getLanguage("downloadFailed");
    App.alert.show({
      text: e,
      confirmCb: function (e) {
        n.checkUpdate();
      }
    }), App.updateLoading.hide();
  }, e.onPreVersionFailed = function (n) {
    var e = App.getLanguage("downloadFailed");
    App.alert.show({
      text: e,
      confirmCb: function (e) {
        n.checkUpdate();
      }
    }), App.updateLoading.hide();
  }, e.onShowUpdating = function (n) {
    App.updateLoading.show(App.getLanguage("loading"));
  }, e.onNeedUpdateMain = function (n) {}, e.onOther = function (n) {}, e.onDownloading = function (n, e) {
    App.updateLoading.updateProgress(e.progress);
  }, e.onAreadyUpToData = function (n) {
    App.updateLoading.hide();
  }, e.onStarCheckUpdate = function (n) {
    App.updateLoading.show(App.getLanguage("loading"));
  }, e.onStartLoadBundle = function (n) {}, e.onLoadBundleError = function (n, e) {
    App.updateLoading.hide(), App.tips.show(App.getLanguage("loadFailed", [n.name])), Log.dump(e, "onLoadBundleError");
  }, e.onLoadBundleComplete = function (n) {
    App.updateLoading.hide(), App.entryManager.onLoadBundleComplete(n);
  }, e.onLoadBundle = function (n) {
    App.updateLoading.hide();
  }, e.onDownloadComplete = function (n) {}, e.onNeedRestartApp = function (n, e) {
    e(!0);
  }, n;
}()).module = "【主包熱更新】", __dependency_0.cclegacy._RF.pop();
