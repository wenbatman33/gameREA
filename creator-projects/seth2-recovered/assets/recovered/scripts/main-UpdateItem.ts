// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UpdateItem.ts.js
// SHA256: 996738d5fe6b6a5e8baa62bcc7296bb2a77e5881de64e94a2ae278341bff67c7
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
import * as __dependency_3 from "./main-Update";
var __export_0;
export { __export_0 as UpdateItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "UpdateItem":
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
  void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "7c9a6PDI79IarK+jVWGiFP0", "UpdateItem", void 0);
__publish("UpdateItem", function () {
  function e(e) {
    this._name = "", this.bundle = "", this.handler = null, this.userData = null, this.isLoaded = !1, this._code = __dependency_3.Update.Code.UNINITED, this._state = __dependency_3.Update.State.UNINITED, this._name = e.name, this.bundle = e.bundle;
  }
  var s = e.prototype;
  return s.reset = function () {
    this.state = __dependency_3.Update.State.UNINITED, this.code = __dependency_3.Update.Code.UNINITED, Log.d(this.bundle + " AssetsManager 重置"), this.assetsManager.manager.reset();
  }, s.convertBundle = function (e) {
    return App.updateManager.convertBundle(e);
  }, s.getProjectString = function () {
    return App.updateManager.getProjectString(this.bundle);
  }, s.checkUpdate = function () {
    this.handler.onStarCheckUpdate(this), this.checkBundleUpdate();
  }, s.checkBundleUpdate = function () {
    if (this.assetsManager.manager.getLocalManifest() && (Log.d(this.bundle + " 本地檔案已經載入完成,直接進入更新流程"), this.isUpdating)) return Log.d(this.bundle + " 正在檢測更新中..."), void this.handler.onShowUpdating(this);
    var e = this.getProjectString();
    if (e) {
      var t = new __dependency_1.native.Manifest(e, this.storagePath, this.hotUpdateUrl);
      Log.d(this.bundle + " --存在本地版本控制檔案checkUpdate--"), this.assetsManager.manager.loadLocalManifest(t, ""), this._checkUpdate();
    } else {
      var s = {
          version: "0",
          bundle: this.convertBundle(this.bundle),
          md5: __dependency_2.Macro.UNKNOWN
        },
        n = JSON.stringify(s),
        i = new __dependency_1.native.Manifest(n, this.storagePath, this.hotUpdateUrl);
      Log.d(this.bundle + " 檢測更新"), Log.d(this.bundle + " 版本資訊 : " + n), this.assetsManager.manager.loadLocalManifest(i, ""), this._checkUpdate();
    }
  }, s._checkUpdate = function () {
    Log.d(this.bundle + " 進入檢測更新"), this.state = __dependency_3.Update.State.UPDATING, this.assetsManager.manager.setEventCallback(this.checkCb.bind(this)), this.assetsManager.manager.checkUpdate();
  }, s.checkCb = function (e) {
    var t = e.getEventCode(),
      s = this.assetsManager.manager.getState();
    switch (Log.d(this.bundle + " checkCb event code : " + t + " state : " + s), t) {
      case __dependency_3.Update.Code.ERROR_NO_LOCAL_MANIFEST:
        Log.d(this.bundle + " No local manifest file found, hot update skipped.");
        break;
      case __dependency_3.Update.Code.ERROR_DOWNLOAD_MANIFEST:
      case __dependency_3.Update.Code.ERROR_PARSE_MANIFEST:
        Log.d(this.bundle + " Fail to download manifest file, hot update skipped.");
        break;
      case __dependency_3.Update.Code.ALREADY_UP_TO_DATE:
        Log.d(this.bundle + " Already up to date with the latest remote version."), this.isMain ? App.updateManager.savePreVersions() : this.bundle == __dependency_2.Macro.BUNDLE_HALL && (t = App.updateManager.checkMainMd5(this, t));
        break;
      case __dependency_3.Update.Code.NEW_VERSION_FOUND:
        Log.d(this.bundle + " New version found, please try to update."), this.isMain || (t = App.updateManager.checkAllowUpdate(this, t));
        break;
      default:
        return;
    }
    this.state = s, this.code = t, t == __dependency_3.Update.Code.NEW_VERSION_FOUND ? this.handler.onNewVersionFund(this) : t == __dependency_3.Update.Code.ALREADY_UP_TO_DATE ? this.handler.onAreadyUpToData(this) : t == __dependency_3.Update.Code.ERROR_DOWNLOAD_MANIFEST || t == __dependency_3.Update.Code.ERROR_NO_LOCAL_MANIFEST || t == __dependency_3.Update.Code.ERROR_PARSE_MANIFEST ? this.handler.onUpdateFailed(this) : t == __dependency_3.Update.Code.MAIN_PACK_NEED_UPDATE || t == __dependency_3.Update.Code.PRE_VERSIONS_NOT_FOUND ? this.handler.onNeedUpdateMain(this) : this.handler.onOther(this);
  }, s.doUpdate = function () {
    Log.d(this.bundle + " 即將熱更新, updating : " + this.isUpdating), this.isUpdating || (Log.d(this.bundle + " 執行更新 "), this.assetsManager.manager.setEventCallback(this.updateCb.bind(this)), this.assetsManager.manager.update());
  }, s.updateCb = function (e) {
    var t = this,
      s = !1,
      d = !1,
      o = e.getEventCode(),
      r = this.assetsManager.manager.getState();
    switch (Log.d(this.bundle + " --update cb code : " + o + " state : " + r), o) {
      case __dependency_3.Update.Code.ERROR_NO_LOCAL_MANIFEST:
        Log.d(this.bundle + " No local manifest file found, hot update skipped."), d = !0;
        break;
      case __dependency_3.Update.Code.UPDATE_PROGRESSION:
        Log.d(this.bundle + " " + e.getDownloadedBytes() + " / " + e.getTotalBytes()), Log.d(this.bundle + " " + e.getDownloadedFiles() + " / " + e.getTotalFiles()), Log.d(this.bundle + " percent : " + e.getPercent()), Log.d(this.bundle + " percent by file : " + e.getPercentByFile()), Log.d(this.bundle + " assetId : " + e.getAssetId());
        var h = e.getMessage();
        h && Log.d(this.bundle + " Updated file: " + h);
        break;
      case __dependency_3.Update.Code.ERROR_DOWNLOAD_MANIFEST:
      case __dependency_3.Update.Code.ERROR_PARSE_MANIFEST:
        Log.d(this.bundle + " Fail to download manifest file, hot update skipped."), d = !0;
        break;
      case __dependency_3.Update.Code.ALREADY_UP_TO_DATE:
        Log.d(this.bundle + " Already up to date with the latest remote version"), d = !0, this.isMain && App.updateManager.savePreVersions();
        break;
      case __dependency_3.Update.Code.UPDATE_FINISHED:
        Log.d(this.bundle + " Update finished. " + e.getMessage()), s = !0, this.isMain && App.updateManager.savePreVersions();
        break;
      case __dependency_3.Update.Code.UPDATE_FAILED:
        Log.d(this.bundle + " Update failed. " + e.getMessage());
        break;
      case __dependency_3.Update.Code.ERROR_UPDATING:
        Log.d(this.bundle + " Asset update error: " + e.getAssetId() + " , " + e.getMessage());
        break;
      case __dependency_3.Update.Code.ERROR_DECOMPRESS:
        Log.d(this.bundle + " " + e.getMessage());
    }
    d && this.assetsManager.manager.setEventCallback(null);
    var g = !1;
    this.isMain ? s && (this.assetsManager.manager.setEventCallback(null), e.getDownloadedFiles() > 0 && (g = !0)) : s && (Log.d(this.bundle + " 更新前是否加载过 : " + this.isLoaded), this.isLoaded && e.getDownloadedFiles() > 0 && (Log.d(this.bundle + " 已经加载过，需要重启"), g = !0)), this.state = r, this.code = o;
    var l = {
      downloadedBytes: e.getDownloadedBytes(),
      totalBytes: e.getTotalBytes(),
      downloadedFiles: e.getDownloadedFiles(),
      totalFiles: e.getTotalFiles(),
      percent: e.getPercent(),
      percentByFile: e.getPercentByFile(),
      code: e.getEventCode(),
      state: r,
      needRestart: g,
      bundle: this.bundle,
      assetId: e.getAssetId(),
      progress: 0
    };
    l.code == __dependency_3.Update.Code.UPDATE_FINISHED ? (l.progress = 1.1, this.handler.onDownloading(this, l)) : l.code == __dependency_3.Update.Code.UPDATE_PROGRESSION ? (l.totalBytes <= 0 ? l.progress = 0 : l.progress = l.percent == Number.NaN ? 0 : l.percent, this.handler.onDownloading(this, l)) : l.code == __dependency_3.Update.Code.ALREADY_UP_TO_DATE ? (l.progress = 1, this.handler.onDownloading(this, l)) : l.code != __dependency_3.Update.Code.UPDATE_FAILED && l.code != __dependency_3.Update.Code.ERROR_NO_LOCAL_MANIFEST && l.code != __dependency_3.Update.Code.ERROR_DOWNLOAD_MANIFEST && l.code != __dependency_3.Update.Code.ERROR_PARSE_MANIFEST && l.code != __dependency_3.Update.Code.ERROR_DECOMPRESS || (l.progress = -1, Log.e("更新" + this.name + "失敗"), this.handler.onUpdateFailed(this)), s && (Log.d(this.bundle + " 更新完成,下载资源数 : " + e.getDownloadedFiles()), g ? (Log.d(this.bundle + " 更新完成，需要重启游戏"), this.handler.onNeedRestartApp(this, function (e) {
      __dependency_1.native.fileUtils.purgeCachedEntries();
      var s = .5;
      e && (s = 1), setTimeout(function () {
        Log.d(t.bundle + " 重启游戏"), __dependency_1.game.restart();
      }, s);
    })) : (__dependency_1.native.fileUtils.purgeCachedEntries(), this.reset(), this.handler.onDownloadComplete(this))), Log.d(this.bundle + "update cb  failed : " + d + "  , isRestartApp : " + g + " isUpdateFinished : " + s + " , updating : " + this.isUpdating);
  }, (0, __dependency_0.createClass)(e, [{
    key: "name",
    get: function () {
      return App.getLanguage(this._name);
    }
  }, {
    key: "assetsManager",
    get: function () {
      return App.updateManager.getAssetsManager(this);
    }
  }, {
    key: "code",
    get: function () {
      return this.isBrowser ? __dependency_3.Update.Code.ALREADY_UP_TO_DATE : this._code;
    },
    set: function (e) {
      this._code = e;
    }
  }, {
    key: "state",
    get: function () {
      return this.isBrowser ? __dependency_3.Update.State.UP_TO_DATE : this._state;
    },
    set: function (e) {
      this._state = e;
    }
  }, {
    key: "updateName",
    get: function () {
      return this.assetsManager.name;
    }
  }, {
    key: "isBrowser",
    get: function () {
      return App.updateManager.isBrowser;
    }
  }, {
    key: "isSkipUpdate",
    get: function () {
      return !!this.isBrowser || App.updateManager.isSkipCheckUpdate;
    }
  }, {
    key: "isMain",
    get: function () {
      return this.assetsManager.name == __dependency_3.Update.MAIN_PACK;
    }
  }, {
    key: "remoteMd5",
    get: function () {
      return this.assetsManager.manager.getRemoteManifest().getMd5();
    }
  }, {
    key: "storagePath",
    get: function () {
      return App.updateManager.storagePath;
    }
  }, {
    key: "hotUpdateUrl",
    get: function () {
      return App.updateManager.hotUpdateUrl;
    }
  }, {
    key: "isUpdating",
    get: function () {
      var e = this,
        t = function (t) {
          return t == __dependency_3.Update.State.PREDOWNLOAD_VERSION ? (Log.d(e.bundle + " 準備下載版本檔案"), !0) : t == __dependency_3.Update.State.DOWNLOADING_VERSION ? (Log.d(e.bundle + " 下載版本檔案中"), !0) : t == __dependency_3.Update.State.PREDOWNLOAD_MANIFEST ? (Log.d(e.bundle + " 準備下載project檔案"), !0) : t == __dependency_3.Update.State.DOWNLOADING_MANIFEST ? (Log.d(e.bundle + " 下載project檔案中"), !0) : t == __dependency_3.Update.State.VERSION_LOADED ? (Log.d(e.bundle + " 下載版本檔案完成，下一步驟會解析版本檔案，也算在更新過程中"), !0) : t == __dependency_3.Update.State.MANIFEST_LOADED ? (Log.d(e.bundle + " 下載project檔案完成,下載步驟會解析project檔案，也算在更新過程中"), !0) : t == __dependency_3.Update.State.UPDATING ? (Log.d(e.bundle + " 正在更新中"), !0) : void 0;
        };
      return t(this.assetsManager.manager.getState()) ? (Log.d(this.bundle + " C++層更新中"), !0) : !!t(this.state) && (Log.d(this.bundle + " TS層更新中"), !0);
    }
  }]), e;
}());
__dependency_1.cclegacy._RF.pop();
