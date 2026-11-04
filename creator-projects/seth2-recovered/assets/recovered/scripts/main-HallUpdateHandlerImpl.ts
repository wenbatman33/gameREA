// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-HallUpdateHandlerImpl.ts.js
// SHA256: a518293c92942d28dbc83e70f62ec0818e56bf18df60bf2c23443c813f4dda79
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Macros";
var __export_0;
export { __export_0 as HallUpdateHandlerImpl };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HallUpdateHandlerImpl":
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
__dependency_0.cclegacy._RF.push({}, "2be25f7HNtJrJ3lfhGK9ALc", "HallUpdateHandlerImpl", void 0), __publish("HallUpdateHandlerImpl", function () {
  function e() {
    this.module = null, this.isResident = !0;
  }
  var n = e.prototype;
  return n.onNewVersionFund = function (e) {
    e.doUpdate();
  }, n.onUpdateFailed = function (e) {
    var n = App.getLanguage("downloadFailed");
    App.alert.show({
      text: n,
      confirmCb: function (n) {
        e.checkUpdate();
      }
    }), App.updateLoading.hide();
  }, n.onPreVersionFailed = function (e) {
    var n = App.getLanguage("downloadFailed");
    App.alert.show({
      text: n,
      confirmCb: function (n) {
        e.checkUpdate();
      }
    }), App.updateLoading.hide();
  }, n.onShowUpdating = function (e) {
    App.updateLoading.show(App.getLanguage("loading"));
  }, n.onNeedUpdateMain = function (e) {
    App.updateLoading.hide();
    var n = App.getLanguage("mainPackVersionIsTooLow");
    App.alert.show({
      text: n,
      confirmCb: function (e) {
        App.stageData.isLoginStage() ? App.entryManager.onCheckUpdate() : App.entryManager.enterBundle(__dependency_1.Macro.BUNDLE_RESOURCES);
      }
    });
  }, n.onOther = function (e) {}, n.onDownloading = function (e, n) {
    App.updateLoading.updateProgress(n.progress);
  }, n.onAreadyUpToData = function (e) {
    App.bundleManager.loadBundle(e);
  }, n.onStarCheckUpdate = function (e) {
    App.updateLoading.show(App.getLanguage("loading"));
  }, n.onStartLoadBundle = function (e) {}, n.onLoadBundleError = function (e, n) {
    App.updateLoading.hide(), App.tips.show(App.getLanguage("loadFailed", [e.name]));
  }, n.onLoadBundleComplete = function (e) {
    App.updateLoading.hide(), App.entryManager.onLoadBundleComplete(e);
  }, n.onLoadBundle = function (e) {
    App.bundleManager.loadBundle(e);
  }, n.onDownloadComplete = function (e) {
    App.releaseManger.tryRemoveBundle(e.bundle), this.onLoadBundle(e);
  }, n.onNeedRestartApp = function (e, n) {
    var t = App.stageData.where;
    if (Log.d("重启游戏,当前位置 :" + t + ",之前位置 : " + App.stageData.prevWhere), t == __dependency_1.Macro.BUNDLE_RESOURCES) n(!0);else {
      var o = App.getLanguage("restartApp", [e.name]);
      App.alert.show({
        text: o,
        confirmCb: function (e) {
          n(!1);
        }
      });
    }
  }, e;
}()).module = "【大廳熱更新】", __dependency_0.cclegacy._RF.pop();
