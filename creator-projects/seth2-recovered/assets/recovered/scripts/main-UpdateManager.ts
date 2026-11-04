// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UpdateManager.ts.js
// SHA256: 44af5a52f5c429e3373eb61d38aaded5e87f97fcc9ca2ef8a37790f6543d1ad2
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Update";
import * as __dependency_3 from "./shared-env";
import * as __dependency_4 from "./main-Macros";
import * as __dependency_5 from "./main-HttpClient";
import * as __dependency_6 from "./main-UpdateItem";
var __export_0;
export { __export_0 as UpdateManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "UpdateManager":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0;
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
(function (e) {
  void 0;
})(__dependency_4);
(function (e) {
  void 0;
})(__dependency_5);
(function (e) {
  void 0;
})(__dependency_6);
__dependency_1.cclegacy._RF.push({}, "a8a370bCy5IT6wexJ6WyBkT", "UpdateManager", void 0);
__publish("UpdateManager", function () {
  function e() {
    this.isResident = !0, this.module = null, this.items = [], this.current = null, this._hotUpdateUrl = "", this.isSkipCheckUpdate = !1, this.assetsManagers = {}, this.preVersions = {}, this.remoteVersions = {}, this.defaultVersion = "1.0", this.defaultMD5 = __dependency_4.Macro.UNKNOWN, this.mainBundles = ["src", "jsb-adapter", "assets/resources", "assets/main", "main.js"], this.isAutoVersion = !0;
  }
  var r = e.prototype;
  return r.getAssetsManager = function (e) {
    var t = e.convertBundle(e.bundle);
    return this.assetsManagers[t];
  }, r.dowonLoad = function (e) {
    e.isSkipUpdate ? e.handler.onLoadBundle(e) : (this.current = this.getItem(e), this.current ? this.current.isUpdating ? (Log.d(e.bundle + " 正在更新中..."), this.current.handler.onShowUpdating(this.current)) : (Log.d(e.bundle + " 不在更新狀態，進入更新..."), this._dowonLoad(e)) : (Log.d(e.bundle + " 放入下載佇列中..."), this.items.push(e), this._dowonLoad(e)));
  }, r._dowonLoad = function () {
    var e = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function e(t) {
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return this.current = t, e.next = 3, this.loadVersions(this.current);
          case 3:
            e.sent && (this.getStatus(t.bundle) == __dependency_2.Update.Status.UP_TO_DATE ? (t.state = __dependency_2.Update.State.UP_TO_DATE, t.bundle == __dependency_4.Macro.BUNDLE_HALL && this.isMd5Change(__dependency_2.Update.MAIN_PACK) ? (Log.d("進入" + t.bundle + " 時，需要更新主包"), t.handler.onNeedUpdateMain(t)) : (Log.d(t.bundle + " 已經是最新，直接進入..."), t.handler.onLoadBundle(t))) : (Log.d(t.bundle + " 進入檢測更新..."), t.state = __dependency_2.Update.State.READY_TO_UPDATE, t.checkUpdate()));
          case 5:
          case "end":
            return e.stop();
        }
      }, e, this);
    }));
    return function (t) {
      return e.apply(this, arguments);
    };
  }(), r.getItem = function (e) {
    if (e instanceof __dependency_6.UpdateItem) return this._getItem(e.bundle);
    var t = this._getItem(e.bundle);
    return null == t && (t = new __dependency_6.UpdateItem(e)), t;
  }, r._getItem = function (e) {
    for (var t = 0; t < this.items.length; t++) if (e == this.items[t].bundle) return this.items[t];
    return null;
  }, r.checkAllowUpdate = function (e, t) {
    var n = e.remoteMd5,
      s = this.preVersions[e.updateName];
    return null == s || null == s ? (Log.e("預處理版本未存在!!!!"), __dependency_2.Update.Code.PRE_VERSIONS_NOT_FOUND) : (s.md5 == n ? Log.d(e.bundle + " 將要下載版本 md5 與遠端版本 md5 相同，可以下載 version : " + s.version + " md5:" + s.md5) : e.bundle == __dependency_4.Macro.BUNDLE_HALL ? (Log.d(e.bundle + " 更新"), this.isMd5Change(__dependency_2.Update.MAIN_PACK) ? (Log.d("更新" + e.bundle + "時，主包有更新，需要先更新主包"), t = __dependency_2.Update.Code.MAIN_PACK_NEED_UPDATE) : Log.d("更新" + e.bundle + "時，主包無更新，直接更新進入")) : this.isMd5Change(__dependency_2.Update.MAIN_PACK) || this.isMd5Change(__dependency_4.Macro.BUNDLE_HALL) ? (Log.d("更新" + e.bundle + "時，主包與大廳有更新，下載 md5 :" + n + " 與預處理md5不一致，需要對主包先進行更新"), t = __dependency_2.Update.Code.MAIN_PACK_NEED_UPDATE) : Log.e("更新" + e.bundle + "時，主包與大廳無更新，可直接下載更新！！"), t);
  }, r.checkMainMd5 = function (e, t) {
    return Log.d(e.bundle + " 無更新，檢測主包md5是否變化，如果變更，需要提示玩家更新主包"), this.isMd5Change(__dependency_2.Update.MAIN_PACK) && (Log.d("進入" + e.bundle + "時，主包有更新，需要先更新主包"), t = __dependency_2.Update.Code.MAIN_PACK_NEED_UPDATE), t;
  }, r.getStatus = function (e) {
    if (this.isBrowser || this.isSkipCheckUpdate) return __dependency_2.Update.Status.UP_TO_DATE;
    e = this.convertBundle(e);
    var t = this.getVersionInfo(e);
    return t ? t.md5 == this.remoteVersions[e].md5 ? __dependency_2.Update.Status.UP_TO_DATE : __dependency_2.Update.Status.NEED_UPDATE : __dependency_2.Update.Status.NEED_DOWNLOAD;
  }, r.getMd5 = function (e) {
    if (this.isBrowser) return this.defaultMD5;
    e = this.convertBundle(e);
    var t = this.getVersionInfo(e);
    return t ? "" + t.md5 : this.remoteVersions[e] ? (Log.w(this.module + "本地無版本資訊,返回遠端版本" + this.remoteVersions[e].md5), "" + this.remoteVersions[e].md5) : (Log.e(this.module + "遠端無版本資訊，返回預設版本" + this.defaultMD5), this.defaultMD5);
  }, r.getVersion = function (e) {
    if (this.isBrowser) return this.defaultVersion;
    e = this.convertBundle(e), this.isAutoVersion && (e = __dependency_4.Macro.MAIN_PACK_BUNDLE_NAME);
    var t = this.getVersionInfo(e);
    return t ? "" + t.version : this.remoteVersions[e] ? (Log.w(this.module + "本地無版本資訊,返回遠端版本" + this.remoteVersions[e].version), "" + this.remoteVersions[e].version) : (Log.e(this.module + "遠端無版本資訊，返回預設版本" + this.defaultVersion), this.defaultVersion);
  }, r.isMd5Change = function (e) {
    return e = this.convertBundle(e), !(!this.preVersions[e] || !this.remoteVersions[e] || this.preVersions[e].md5 == this.remoteVersions[e].md5);
  }, r.getString = function (e) {
    var t = "" + this.storagePath + e;
    return __dependency_1.native.fileUtils.isFileExist(t) ? __dependency_1.native.fileUtils.getStringFromFile(t) : __dependency_1.native.fileUtils.isFileExist(e) ? __dependency_1.native.fileUtils.getStringFromFile(e) : void 0;
  }, r.getVersionString = function (e) {
    e = this.convertBundle(e);
    var t = "" + __dependency_2.Update.MANIFEST_ROOT + e + "_version.json";
    return this.getString(t);
  }, r.getProjectString = function (e) {
    e = this.convertBundle(e);
    var t = "" + __dependency_2.Update.MANIFEST_ROOT + e + "_project.json";
    return this.getString(t);
  }, r.getVersionInfo = function (e) {
    var t = this.getVersionString(e);
    if (t) return JSON.parse(t);
  }, r.loadVersions = function (e) {
    var n = this;
    return new Promise((0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(r, o) {
      var a, d;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!n.isBrowser) {
              t.next = 3;
              break;
            }
            return r(!0), t.abrupt("return");
          case 3:
            return e.state = __dependency_2.Update.State.PREDOWNLOAD_VERSION, e.handler.onShowUpdating(e), Log.d(n.module + " 請求遠端版本資訊"), t.next = 8, n.readRemoteVersions();
          case 8:
            (a = t.sent) ? (n.remoteVersions = JSON.parse(a), (d = e.convertBundle(e.bundle)) == __dependency_2.Update.MAIN_PACK && n.getStatus(d) == __dependency_2.Update.Status.UP_TO_DATE && (Log.d(n.module + " 主包已經是最新，寫入遠端的版本資訊"), n.savePreVersions(), __dependency_1.native.fileUtils.purgeCachedEntries()), Log.d(n.module + " 載入" + e.bundle + "時，載入遠端版本資訊成功..."), e.state = __dependency_2.Update.State.VERSION_LOADED, r(!0)) : (n.remoteVersions = {}, e.state = __dependency_2.Update.State.FAIL_TO_UPDATE, e.code = __dependency_2.Update.Code.PRE_VERSIONS_NOT_FOUND, e.handler.onPreVersionFailed(e), Log.e(n.module + " 載入" + e.bundle + "時，載入遠端版本資訊失敗..."), r(!1));
          case 10:
          case "end":
            return t.stop();
        }
      }, t);
    })));
  }, r.convertBundle = function (e) {
    return e == __dependency_4.Macro.BUNDLE_RESOURCES ? __dependency_2.Update.MAIN_PACK : e;
  }, r.readRemoteVersions = function () {
    var e = this;
    return new Promise(function (t) {
      var n = new __dependency_5.HttpPackage();
      n.data.url = e.hotUpdateUrl + "/" + __dependency_2.Update.MANIFEST_ROOT + "versions.json", n.data.isAutoAttachCurrentTime = !0, n.send(function (e) {
        t(e);
      }, function (e) {
        Log.dump(e), t(null);
      });
    });
  }, r.savePreVersions = function () {
    if (Object.keys(this.remoteVersions).length > 0) {
      Log.d(this.module + " 儲存遠端版本資訊如下:");
      var e = JSON.stringify(this.remoteVersions);
      Log.d(e), this.preVersions = JSON.parse(e);
    } else Log.e(this.module + " 致命更新錯誤,無法讀取到遠端版本資訊!!!");
  }, r.debug = function () {
    Log.d("-----------熱火更新管理器中相關資訊------------"), Log.dump({
      name: "預處理版本資訊",
      data: this.preVersions
    }), Log.dump({
      name: "遠端版本資訊",
      data: this.remoteVersions
    });
  }, (0, __dependency_0.createClass)(e, [{
    key: "storagePath",
    get: function () {
      return __dependency_1.native.fileUtils.getWritablePath() + "caches/";
    }
  }, {
    key: "hotUpdateUrl",
    get: function () {
      return Log.d("當前熱更新地址為:" + this._hotUpdateUrl), this._hotUpdateUrl;
    },
    set: function (e) {
      this._hotUpdateUrl = e;
    }
  }, {
    key: "isBrowser",
    get: function () {
      return __dependency_1.sys.platform == __dependency_1.sys.Platform.WECHAT_GAME || __dependency_3.PREVIEW || __dependency_1.sys.isBrowser;
    }
  }, {
    key: "appVersion",
    get: function () {
      if (this.isBrowser) return this.defaultVersion;
      var e = __dependency_2.Update.MANIFEST_ROOT + "$apk.json",
        t = this.getString(e);
      return t ? "v" + JSON.parse(t).version : (Log.e(this.module + "無法讀取到" + e), this.defaultVersion);
    }
  }]), e;
}()).module = "【更新管理器】", __dependency_1.cclegacy._RF.pop();
