// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SocketIOClient.ts.js
// SHA256: 3be256533574eddefd2b962f29a9bf2132b48efad1c2787863fc5db3f1b867f3
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmdDefines";
import * as __dependency_3 from "./main-Macros";
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
  void 0, void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
var h, c;
__dependency_1.cclegacy._RF.push({}, "29b63EniwNEh4dap0cYtBy4", "SocketIOClient", void 0), function (t) {
  t.CONNECT = "connect", t.RECONNECT = "reconnect", t.DISCONNECT = "disconnect", t.CONNECT_TIMEOUT = "connect_timeout", t.CONNECT_ERROR = "connect_error", t.ERROR = "error", t.WARNING = "warning";
}(h || (h = {})), function (t) {
  t[t.CLOSED = 0] = "CLOSED", t[t.CLOSING = 1] = "CLOSING", t[t.CONNECTING = 2] = "CONNECTING", t[t.OPEN = 3] = "OPEN";
}(c || (c = {}));
__publish("default", function () {
  function t() {
    this._tag = "[SocketIOClient]", this._url = "", this._opts = null, this._dataArr = [], this._isWaitingConnect = !1, this._conTimeOut = 10, this._sendTimeOut = 10, this._readyState = c.CLOSED, this._io = null, this._onOpen = null, this._onClose = null, this._onMessage = null, this._onError = null, this._closeEvent = null;
  }
  var i = t.prototype;
  return i._setReadyState = function (t) {
    Log.d(this._tag, "setReadyState: " + t), this._readyState = t;
  }, i.init = function (t, n) {
    this._url = t, this._opts = n, this._dataArr = [], this._conTimeOut = 10, this._sendTimeOut = 10, this._closeEvent = null, this._setReadyState(c.CONNECTING);
  }, i.connectSocketIO = function (t, n) {
    t && (n || (n = {
      reconnection: !0,
      "force new connection": !0,
      transports: ["websocket", "polling"],
      allowEIO3: !0
    }), this._io = window.io.connect(t, n, App.wssCacertUrl), this._io && (this.init(t, n), this.on(h.CONNECT, this.__onConnected.bind(this)), this.on(h.DISCONNECT, this.__onClose.bind(this)), this.on(h.ERROR, this.__onError.bind(this)), this.on("test", this.__onMessage.bind(this)), this.on("echo", this.__onMessage.bind(this)), this.on(h.ERROR, this.__onMessage.bind(this)), this.on(h.WARNING, this.__onMessage.bind(this))));
  }, i.initSocket = function (t, n) {
    if (!(null == t || null == t || t.length < 0)) if (this._io) {
      if (this._readyState == c.CONNECTING) {
        if (this._url == t) return;
      } else this._readyState == c.OPEN ? this._url : this._readyState == c.CLOSING ? (this._isWaitingConnect = !0, this._url = t) : (this._io = null, this.connectSocketIO(t, n));
    } else this.connectSocketIO(t, n);
  }, i.__onConnected = function (t) {
    if (this._setReadyState(c.OPEN), this._io, this._dataArr.length > 0) {
      for (var n = 0; n < this._dataArr.length; n++) this.send(this._dataArr[n]);
      this._dataArr = [];
    }
    this.onOpen && this.onOpen(t);
  }, i.__onMessage = function (t) {
    this.onMessage && this.onMessage(t);
  }, i.__onClose = function (t) {
    this._setReadyState(c.CLOSED), this._io = null, this._closeEvent && (t = this._closeEvent, this._closeEvent = null), this._isWaitingConnect ? (this._closeEvent = null, this.connectSocketIO(this._url, this._opts), this._isWaitingConnect = !1) : this.onClose && this.onClose(t);
  }, i.__onError = function (t) {
    this.onError && this.onError(t);
  }, i.on = function (t, n) {
    this._io && this._io.on(t, n);
  }, i.emit = function (t, n, i) {
    this._io && this._readyState === c.OPEN && (i ? this._io.emit(t, n, i) : n ? this._io.emit(t, n) : this._io.emit(t));
  }, i.isHeartBeat = function (t) {
    return t == String(__dependency_2.MainCmd.CMD_SYS) + String(__dependency_2.SUB_CMD_SYS.CMD_SYS_HEART);
  }, i.send = function (t) {
    Log.d(this._tag, "send " + t + ", " + this.isHeartBeat(t));
  }, i.close = function (t) {
    this._io && (this._closeEvent = {
      type: __dependency_3.Macro.ON_CUSTOM_CLOSE,
      isEnd: t
    }, this._io.close()), this._dataArr = [];
  }, i.socketDisconnect = function () {
    this._io.disconnect();
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
      var t;
      return !(null == (t = this._io) || !t.connected || this._readyState !== c.OPEN);
    }
  }]), t;
}());
__dependency_1.cclegacy._RF.pop();
