// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Process.ts.js
// SHA256: dc4a80f8b996cd0919fea483da641ea2389ba2b09d7c8d01e41a540aaf06fd18
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-DefaultCodec";
import * as __dependency_2 from "./main-Net";
var __export_0;
export { __export_0 as Process };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Process":
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
(function (e) {
  void 0;
})(__dependency_2);
__dependency_0.cclegacy._RF.push({}, "a6a00CX5l9GkrM01dGgc/x0", "Process", void 0);
__publish("Process", function () {
  function e() {
    this.Codec = __dependency_1.DefaultCodec, this._listeners = {}, this._masseageQueue = new Array(), this._isDoingMessage = !1, this.isPause = !1, this.serviceType = null;
  }
  var s = e.prototype;
  return s.pauseMessageQueue = function () {
    this.isPause = !0;
  }, s.resumeMessageQueue = function () {
    this.isPause = !1;
  }, s.handMessage = function () {
    var e = this;
    if (!this.isPause && !this._isDoingMessage && 0 != this._masseageQueue.length) {
      var s = this._masseageQueue.shift();
      if (null != s && 0 != s.length) {
        this._isDoingMessage = !0;
        for (var t, i = 0, n = 0; n < s.length; n++) {
          var a = s[n];
          if (a.func instanceof Function) try {
            var r = a.func.call(a.target, a.data);
            "number" == typeof r && (i = Math.max(i, r));
          } catch (e) {
            Log.e(e);
          }
        }
        if (0 == i) this._isDoingMessage = !1;else null == (t = App.uiManager.mainController) || t.scheduleOnce(function () {
          e._isDoingMessage = !1;
        }, i);
      }
    }
  }, s.onMessage = function (e) {
    Log.d("recv data main cmd : " + e.cmd);
    var s = String(e.cmd);
    this._listeners[s] ? this._listeners[s].length <= 0 || this.addMessageQueue(s, e, !0) : Log.w("no find listener data main cmd : " + e.cmd);
  }, s.reset = function () {
    this._isDoingMessage = !1, this._listeners = {}, this._masseageQueue = [], this.resumeMessageQueue();
  }, s.close = function () {
    this._masseageQueue = [], this._isDoingMessage = !1;
  }, s.addListener = function (e, s, t, i, n) {
    var a = e;
    if (this._listeners[a]) {
      for (var r = !1, u = 0; u < this._listeners[a].length; u++) if (this._listeners[a][u].target === n) {
        r = !0;
        break;
      }
      if (r) return;
      this._listeners[a].push({
        cmd: e,
        func: t,
        type: s,
        isQueue: i,
        target: n
      });
    } else this._listeners[a] = [], this._listeners[a].push({
      cmd: e,
      func: t,
      type: s,
      isQueue: i,
      target: n
    });
  }, s.removeListeners = function (e, s) {
    if (s) {
      var t = this;
      Object.keys(this._listeners).forEach(function (i) {
        for (var n = t._listeners[i], a = n.length; a--;) n[a].target == e && n[a].cmd == s && n.splice(a, 1);
        0 == n.length && delete t._listeners[i];
      });
      for (var i = this._masseageQueue.length; i--;) {
        for (var n = this._masseageQueue[i], a = n.length; a--;) n[a].target == e && n[i].cmd == s && n.splice(a, 1);
        0 == n.length && this._masseageQueue.splice(i, 1);
      }
    } else {
      var r = this;
      Object.keys(this._listeners).forEach(function (s, t, i) {
        for (var n = r._listeners[s], a = n.length; a--;) n[a].target == e && n.splice(a, 1);
        0 == n.length && delete r._listeners[s];
      });
      for (var u = this._masseageQueue.length; u--;) {
        for (var c = this._masseageQueue[u], h = c.length; h--;) c[h].target == e && c.splice(h, 1);
        0 == c.length && this._masseageQueue.splice(u, 1);
      }
    }
  }, s.decode = function (e, s) {
    var t = null;
    if (this.serviceType == __dependency_2.Net.ServiceType.Proto) {
      if (e.type && "string" == typeof e.type) t = App.protoManager.lookup(e.type) ? App.protoManager.decode({
        className: e.type,
        buffer: s.buffer
      }) : s.buffer;else t = s.buffer;
      return t;
    }
    return e.type && "string" != typeof e.type ? (t = new e.type()).decode(s.buffer) : t = s.buffer, t;
  }, s.addMessageQueue = function (e, s, t) {
    if (!(this._listeners[e].length <= 0)) {
      for (var i = this._listeners[e], n = [], a = 0; a < i.length; a++) {
        var r = s;
        if (t && (r = this.decode(i[a], s)), i[a].isQueue) n.push(this.copyListenerData(i[a], r));else try {
          i[a].func && i[a].func.call(i[a].target, r);
        } catch (e) {
          Log.e(e);
        }
      }
      n.length > 0 && this._masseageQueue.push(n);
    }
  }, s.copyListenerData = function (e, s) {
    return {
      type: e.type,
      func: e.func,
      isQueue: e.isQueue,
      data: s,
      target: e.target,
      cmd: e.cmd
    };
  }, e;
}());
__dependency_0.cclegacy._RF.pop();
