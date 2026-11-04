// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CommonService.ts.js
// SHA256: 5371b79f890a5a8e4fb3429ce775c9dcf1dd1d6df98174dc177b7c8f2eaf5ef4
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmdDefines";
import * as __dependency_3 from "./main-Config";
import * as __dependency_4 from "./main-Service";
import * as __dependency_5 from "./main-ReconnectHandler";
var __export_0;
export { __export_0 as CommonService };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CommonService":
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
  void 0;
})(__dependency_1);
(function (t) {
  void 0, void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
(function (t) {
  void 0;
})(__dependency_5);
__dependency_1.cclegacy._RF.push({}, "aad07lPwddEKJJ1ajESY2A1", "CommonService", void 0);
__publish("CommonService", function (t) {
  function i() {
    var e;
    return (e = Reflect.construct(t, [], new.target || i) || this).ip = "localhost", e.port = 3e3, e.protocol = "ws", e.url = "", e.opts = null, e._maxEnterBackgroundTime = __dependency_3.Config.MAX_INBACKGROUND_TIME, e._backgroundTimeOutId = -1, e;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var a = i.prototype;
  return a.init = function () {
    t.prototype.init.call(this), Log.d("[" + this.module + "] init"), Log.d("[" + this.module + "] this.clientType", this.clientType), this.reconnectHandler = new __dependency_5.ReconnectHandler(this);
  }, a.connect = function () {
    Log.d("this.clientType", this.clientType, this.url), "websocket" === this.clientType ? t.prototype.connect_server.call(this, this.ip, this.port, this.protocol) : t.prototype.connect_server_io.call(this, this.url, this.opts);
  }, a.sendHeartbeat = function () {
    this.heartbeat ? this.send(new this.heartbeat()) : Log.e("請先設定心跳解析型別");
  }, a.getMaxHeartbeatTimeOut = function () {
    return t.prototype.getMaxHeartbeatTimeOut.call(this);
  }, a.getHeartbeatInterval = function () {
    return t.prototype.getHeartbeatInterval.call(this);
  }, a.onHeartbeatTimeOut = function () {
    Log.w(this.module + " 心跳超時，您已經斷開網路"), this.close(), App.serviceManager.reconnect(this);
  }, a.isHeartBeat = function (t) {
    return t.cmd == String(__dependency_2.MainCmd.CMD_SYS) + String(__dependency_2.SUB_CMD_SYS.CMD_SYS_HEART);
  }, a.onEnterBackground = function () {
    if (!this.data.isLoginStage()) {
      var t = this;
      t._backgroundTimeOutId = setTimeout(function () {
        Log.d("進入後臺時間過長，主動關閉網路，等玩家切回前臺重新連線網路"), t.close(), App.alert.close(__dependency_3.Config.RECONNECT_ALERT_TAG);
      }, 1e3 * t.maxEnterBackgroundTime);
    }
  }, a.onEnterForgeground = function (t) {
    if (-1 != this._backgroundTimeOutId) {
      if (Log.d("清除進入後臺的超時關閉網路定時器"), clearTimeout(this._backgroundTimeOutId), Log.d("在後臺時間" + t + " , 最大時間為: " + this.maxEnterBackgroundTime), this.data.isLoginStage()) return;
      t > this.maxEnterBackgroundTime && (Log.d("從回臺切換，顯示重新連線網路"), this.close(), App.alert.close(__dependency_3.Config.RECONNECT_ALERT_TAG), App.serviceManager.reconnect(this));
    }
  }, (0, __dependency_0.createClass)(i, [{
    key: "data",
    get: function () {
      return App.stageData;
    }
  }, {
    key: "maxEnterBackgroundTime",
    get: function () {
      return this._maxEnterBackgroundTime;
    },
    set: function (t) {
      (t < __dependency_3.Config.MIN_INBACKGROUND_TIME || t > __dependency_3.Config.MAX_INBACKGROUND_TIME) && (t = __dependency_3.Config.MIN_INBACKGROUND_TIME), Log.d(this.module, "maxEnterBackgroundTime " + t), this._maxEnterBackgroundTime = t;
    }
  }]), i;
}(__dependency_4.Service));
__dependency_1.cclegacy._RF.pop();
