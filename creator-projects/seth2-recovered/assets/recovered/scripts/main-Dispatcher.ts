// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Dispatcher.ts.js
// SHA256: 5bd6630cfc4e3d6c2e9bfbca68b670c9cad9d9bb514c434f00f832bad72f5b90
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as Dispatcher };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Dispatcher":
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
__dependency_1.cclegacy._RF.push({}, "0ff9be6s7FMBotS/RUggf3E", "Dispatcher", void 0);
var a = __publish("Dispatcher", function () {
  function t() {
    this._eventCaches = null, this.isResident = !0, this.module = null, this._eventCaches = {};
  }
  var n = t.prototype;
  return n.destory = function () {
    t._instance = null;
  }, n.on = function (t, e, n, a) {
    if (t && e && n) {
      for (var c = this._eventCaches[t] || [], i = !1, s = 0; s < c.length; s++) if (c[s].target === n) {
        i = !0;
        break;
      }
      if (!i) {
        var r = {
          type: t,
          callback: e,
          target: n,
          once: a
        };
        c.push(r), this._eventCaches[t] = c;
      }
    }
  }, n.off = function (t, e) {
    if (t && e) {
      var n = this._eventCaches[t];
      if (n) {
        for (var a = 0; a < n.length; a++) if (n[a].target === e) {
          n.splice(a, 1);
          break;
        }
        0 == n.length && delete this._eventCaches[t];
      }
    }
  }, n.dispatch = function () {
    if (!(arguments.length < 1)) {
      var t = arguments[0];
      if (t) {
        Array.prototype.shift.apply(arguments);
        var e = this._eventCaches[t];
        if (e) {
          for (var n = [], a = 0; a < e.length; a++) {
            var c = e[a];
            try {
              "object" == typeof Reflect ? Reflect.apply(c.callback, c.target, arguments) : c.callback.apply(c.target, arguments), c.once && n.push(c);
            } catch (t) {
              Log.e(t);
            }
          }
          for (var i = 0; i < n.length; i++) {
            var s = n[i];
            this.off(s.type, s.target);
          }
        }
      }
    }
  }, (0, __dependency_0.createClass)(t, null, [{
    key: "instance",
    get: function () {
      return this._instance || (this._instance = new t());
    }
  }]), t;
}());
a._instance = null, a.module = "【事件管理器】", window.dispatch = function () {
  App ? Reflect.apply(App.dispatcher.dispatch, App.dispatcher, arguments) : Reflect.apply(a.instance.dispatch, a.instance, arguments);
}, __dependency_1.cclegacy._RF.pop();
