// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReconnectHandler.ts.js
// SHA256: ffd6971fd16913eb3f894d8dcc2c4df3250631b7e445f756c5013d7f57eeb6d9
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Handler";
import * as __dependency_3 from "./main-Macros";
import * as __dependency_4 from "./main-Config";
var __export_0;
export { __export_0 as ReconnectHandler };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReconnectHandler":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
__dependency_1.cclegacy._RF.push({}, "2aac1yI2aBLi64ZG5EB3lv6", "ReconnectHandler", void 0);
__publish("ReconnectHandler", function (t) {
  function i(n) {
    var e;
    return (e = Reflect.construct(t, [], new.target || i) || this)._service = null, e._enabled = !1, e._connectCount = 0, e._maxConnectCount = 3, e.isConnecting = !1, e.connectID = 1, e.connectTimeOutID = 2, e._service = n, e;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var s = i.prototype;
  return s.reconnect = function () {
    this.isInvalid || (this.service.close(), this.stop(), this.delayConnect());
  }, s.stop = function () {
    this.stopActions(), this.isConnecting = !1, this._connectCount = 0, App.alert.close(__dependency_4.Config.RECONNECT_ALERT_TAG);
  }, s.delayConnect = function () {
    var t = this;
    if (!this.isInvalid) if (this.isConnecting) Log.w(this.service.module + " 正在連線中...");else {
      var n = .3;
      this._connectCount > 0 && ((n = (this._connectCount + 1) * n) > 3 && (n = 3), Log.d("" + this.service.module + n + "秒後嘗試重連")), this.stopAction(this.connectID), this.delayCall(this.connectID, n, function () {
        t.connect();
      });
    }
  }, s.connect = function () {
    var t = this;
    if (!this.isInvalid) {
      if (App.alert.close(__dependency_4.Config.RECONNECT_ALERT_TAG), this.data.isLoginStage()) return App.uiReconnect.hide(), void Log.w("重连处于登录界面，停止重连");
      this._connectCount++, this._connectCount > this._maxConnectCount ? this.showReconnectDialog() : (App.uiReconnect.show(App.getLanguage("tryReconnect", [this.service.module, this._connectCount])), this.service.connect(), this.stopAction(this.connectTimeOutID), this.delayCall(this.connectTimeOutID, __dependency_4.Config.RECONNECT_TIME_OUT, function () {
        t.connectTimeOut();
      }));
    }
  }, s.connectTimeOut = function () {
    this.isInvalid || (this.stopAction(this.connectID), this.isConnecting = !1, this.service.close(), this.showReconnectDialog());
  }, s.showReconnectDialog = function () {
    var t = this;
    this.isInvalid || (App.uiReconnect.hide(), Log.d(this.service.module + " 断开"), this.stopAction(this.connectTimeOutID), App.alert.show({
      tag: __dependency_4.Config.RECONNECT_ALERT_TAG,
      isRepeat: !1,
      text: App.getLanguage("warningReconnect", [this.service.module]),
      confirmCb: function (n) {
        var e, i;
        n ? (Log.d((null == (e = t.service) ? void 0 : e.module) + " 重連連線網路"), t.stop(), App.serviceManager.reconnect(t.service)) : (Log.d((null == (i = t.service) ? void 0 : i.module) + " 玩家网络不好，不重连，退回到登录界面"), App.entryManager.enterBundle(__dependency_3.Macro.BUNDLE_RESOURCES));
      },
      cancelCb: function () {
        var n;
        Log.d((null == (n = t.service) ? void 0 : n.module) + " 玩家网络不好，不重连，退回到登录界面"), App.entryManager.enterBundle(__dependency_3.Macro.BUNDLE_RESOURCES);
      }
    }));
  }, s.onOpen = function (t) {
    this.isInvalid || (this._connectCount = 0, this.isConnecting = !1, this.stop(), Log.d(this.service.module + "伺服器重連成功"));
  }, s.onClose = function (t) {
    this.isInvalid || (this.isConnecting = !1, this.delayConnect());
  }, s.onError = function (t) {
    this.isInvalid || (this.service.close(), this.isConnecting = !1, this.delayConnect());
  }, s.stopActions = function () {
    this.stopAction(this.connectID), this.stopAction(this.connectTimeOutID);
  }, s.stopAction = function (t) {
    __dependency_1.Tween.stopAllByTag(t, this);
  }, s.delayCall = function (t, n, e) {
    (0, __dependency_1.tween)(this).tag(t).delay(n).call(e).start();
  }, s.onDestroy = function () {
    this.stopActions(), t.prototype.onDestroy.call(this);
  }, (0, __dependency_0.createClass)(i, [{
    key: "module",
    get: function () {
      return this.service.module;
    }
  }, {
    key: "service",
    get: function () {
      return this._service;
    }
  }, {
    key: "data",
    get: function () {
      return App.stageData;
    }
  }, {
    key: "enabled",
    get: function () {
      return this._enabled;
    },
    set: function (t) {
      this._enabled = t;
    }
  }, {
    key: "isInvalid",
    get: function () {
      return !(this.service && this.enabled && !this.data.isLoginStage());
    }
  }]), i;
}(__dependency_2.Handler));
__dependency_1.cclegacy._RF.pop();
