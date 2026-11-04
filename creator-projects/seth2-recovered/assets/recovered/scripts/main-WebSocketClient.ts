// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WebSocketClient.ts.js
// SHA256: 9cdab44461bd6bb7164e19da9eb85fcfe59d69814dc933ef55a2e9fd3097e7bd
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Macros";
var __export_0;
export { __export_0 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "default":
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
__dependency_1.cclegacy._RF.push({}, "791e34uVbBJ2Y7472KZ8z2x", "WebSocketClient", void 0);
__publish("default", function () {
  function t() {
    this._tag = "[WebSocketClinet]", this._ip = "", this._port = null, this._protocol = "wss", this._dataArr = [], this._isWaitingConnect = !1, this._conTimeOut = 10, this._sendTimeOut = 10, this._ws = null, this._onOpen = null, this._onClose = null, this._onMessage = null, this._onError = null, this._closeEvent = null;
  }
  var e = t.prototype;
  return e.init = function (t, s, e) {
    this._ip = t, this._port = s, this._protocol = e, this._dataArr = [], this._conTimeOut = 10, this._sendTimeOut = 10, this._closeEvent = null;
  }, e.connectWebSocket = function (t, s, e) {
    if (this.init(t, s, e), this._ip) {
      var i = e + "://" + this._ip;
      this._port && (i = i + ":" + this._port), this._ws = new WebSocket(i), this._ws && (this._ws.binaryType = "arraybuffer", this._ws.onopen = this.__onConnected.bind(this), this._ws.onmessage = this.__onMessage.bind(this), this._ws.onclose = this.__onClose.bind(this), this._ws.onerror = this.__onError.bind(this));
    }
  }, e.initSocket = function (t, s, e) {
    if (!(null == t || null == t || t.length < 0)) if (this._ws) {
      if (this._ws.readyState == WebSocket.CONNECTING) {
        if (this._ip == t && this._port == s) return;
      } else this._ws.readyState == WebSocket.OPEN ? this._ip == t && this._port : this._ws.readyState == WebSocket.CLOSING ? (this._isWaitingConnect = !0, this._ip = t, this._port = s) : (this._ws = null, this.connectWebSocket(t, s, e));
    } else this.connectWebSocket(t, s, e);
  }, e.__onConnected = function (t) {
    if (this._ws, this._dataArr.length > 0) {
      for (var s = 0; s < this._dataArr.length; s++) this.send(this._dataArr[s]);
      this._dataArr = [];
    }
    this.onOpen && this.onOpen(t);
  }, e.__onMessage = function (t) {
    this.onMessage && this.onMessage(t);
  }, e.__onClose = function (t) {
    this._ws = null, this._closeEvent && (t = this._closeEvent, this._closeEvent = null), this._isWaitingConnect ? (this._closeEvent = null, this.connectWebSocket(this._ip, this._port, this._protocol), this._isWaitingConnect = !1) : this.onClose && this.onClose(t);
  }, e.__onError = function (t) {
    this.onError && this.onError(t);
  }, e.send = function (t) {
    if (this._ws && t) if (this._ws.readyState === WebSocket.OPEN) this._ws.send(t);else if (this._ws.readyState == WebSocket.CONNECTING) this._dataArr.push(t);else this._ws.readyState, WebSocket.CLOSING;
  }, e.close = function (t) {
    this._ws && (this._closeEvent = {
      type: __dependency_2.Macro.ON_CUSTOM_CLOSE,
      isEnd: t
    }, this._ws.close()), this._dataArr = [];
  }, (0, __dependency_0.createClass)(t, [{
    key: "connectTimeOut",
    get: function () {
      return this._conTimeOut;
    },
    set: function (t) {
      this._conTimeOut = t;
    }
  }, {
    key: "sendTimeOut",
    get: function () {
      return this._sendTimeOut;
    },
    set: function (t) {
      this._sendTimeOut = t;
    }
  }, {
    key: "onOpen",
    get: function () {
      return this._onOpen;
    },
    set: function (t) {
      this._onOpen = t;
    }
  }, {
    key: "onClose",
    get: function () {
      return this._onClose;
    },
    set: function (t) {
      this._onClose = t;
    }
  }, {
    key: "onMessage",
    get: function () {
      return this._onMessage;
    },
    set: function (t) {
      this._onMessage = t;
    }
  }, {
    key: "onError",
    get: function () {
      return this._onError;
    },
    set: function (t) {
      this._onError = t;
    }
  }, {
    key: "isConnected",
    get: function () {
      return !(!this._ws || this._ws.readyState !== WebSocket.OPEN);
    }
  }]), t;
}());
__dependency_1.cclegacy._RF.pop();
