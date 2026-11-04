// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ServerConnector.ts.js
// SHA256: 86f5e754d5306440e7aa8e233e61a625c3134567d982974cc13dd72903e76025
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-WebSocketClient";
import * as __dependency_3 from "./main-SocketIOClient";
var __export_0;
export { __export_0 as ServerConnector };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ServerConnector":
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
  void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "8f212tIZJxBPJFQ22wpaqRR", "ServerConnector", void 0);
__publish("ServerConnector", function () {
  function t() {
    this.clientType = "websocket", this._client = null, this._sendHartId = -1, this._curRecvHartTimeOutCount = 0, this._enabled = !0;
  }
  var n = t.prototype;
  return n.init = function () {
    this._client = "websocket" === this.clientType ? new __dependency_2.default() : new __dependency_3.default(), this._client.onClose = this.onClose.bind(this), this._client.onError = this.onError.bind(this), this._client.onMessage = this.onMessage.bind(this), this._client.onOpen = this.onOpen.bind(this);
  }, n.getMaxHeartbeatTimeOut = function () {
    return 5;
  }, n.getHeartbeatInterval = function () {
    return 5e3;
  }, n.isHeartBeat = function (t) {
    return !1;
  }, n.onOpen = function (t) {
    this.recvHeartbeat(), this.stopSendHartSchedule(), this.sendHeartbeat();
  }, n.onClose = function (t) {
    this.stopSendHartSchedule();
  }, n.onError = function (t) {
    this.stopSendHartSchedule();
  }, n.onMessage = function (t) {
    this.recvHeartbeat();
  }, n.recvHeartbeat = function () {
    this._curRecvHartTimeOutCount = 0;
  }, n.connect_server = function (t, e, n) {
    void 0 === e && (e = null), void 0 === n && (n = "wss"), this.enabled && (e ? "string" == typeof e && e.length > 0 ? this._client && this._client.initSocket(t, e, n) : "number" == typeof e && e > 0 ? this._client && this._client.initSocket(t, e.toString(), n) : this._client && this._client.initSocket(t, null, n) : this._client && this._client.initSocket(t, null, n));
  }, n.connect_server_io = function (t, e) {
    this.enabled && this._client && this._client.initSocket(t, e);
  }, n.stopSendHartSchedule = function () {
    -1 != this._sendHartId && (clearInterval(this._sendHartId), this._sendHartId = -1);
  }, n.startSendHartSchedule = function () {
    var t = this;
    this._sendHartId = setInterval(function () {
      if (t._curRecvHartTimeOutCount = t._curRecvHartTimeOutCount + 1, t._curRecvHartTimeOutCount > t.getMaxHeartbeatTimeOut()) return t.stopSendHartSchedule(), void t.onHeartbeatTimeOut();
      t.sendHeartbeat();
    }, t.getHeartbeatInterval());
  }, n.sendBuffer = function (t) {
    this._client && this._client.send(t);
  }, n.on = function (t, e) {
    this._client && this._client.on(t, e);
  }, n.emit = function (t, e, n) {
    this._client && this._client.emit(t, e, n);
  }, n.close = function (t) {
    void 0 === t && (t = !1), this.stopSendHartSchedule(), this._client && this._client.close(t);
  }, n.setSocketIOConTimeOut = function (t) {
    this._client && (this._client.connectTimeOut = t);
  }, n.socketDisconnect = function () {
    this._client.socketDisconnect();
  }, (0, __dependency_0.createClass)(t, [{
    key: "enabled",
    get: function () {
      return this._enabled;
    },
    set: function (t) {
      this._enabled = t, 0 == t && this.close();
    }
  }, {
    key: "isConnected",
    get: function () {
      return !!this._client && this._client.isConnected;
    }
  }]), t;
}());
__dependency_1.cclegacy._RF.pop();
