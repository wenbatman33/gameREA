// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-HttpClient.ts.js
// SHA256: 15477abfc387a0be37021383b7eb1e5cd480518ab23abb4f9b8a8054a2bb5cf7
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Http";
import * as __dependency_3 from "./shared-env";
var __export_0;
export { __export_0 as HttpPackage };
var __export_1;
export { __export_1 as HttpClient };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "HttpPackage":
      __export_0 = value;
      break;
    case "HttpClient":
      __export_1 = value;
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
  void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "88b85LK3HND3agPP4yXVee/", "HttpClient", void 0);
var o = function () {
    function e() {
      this.data = null, this.url = null, this.timeout = 1e4, this.type = __dependency_2.Http.Type.GET, this.async = !0, this.requestHeader = null, this.isAutoAttachCurrentTime = !1, this._responseType = "";
    }
    return (0, __dependency_0.createClass)(e, [{
      key: "responseType",
      get: function () {
        return this._responseType;
      },
      set: function (e) {
        this._responseType = e;
      }
    }]), e;
  }(),
  u = __publish("HttpPackage", function () {
    function e() {
      this._data = new o(), this._params = null;
    }
    return e.prototype.send = function (e, t) {
      App.http.request(this, e, t);
    }, (0, __dependency_0.createClass)(e, [{
      key: "data",
      get: function () {
        return this._data;
      },
      set: function (e) {
        this._data = e;
      }
    }, {
      key: "params",
      get: function () {
        return this._params;
      },
      set: function (e) {
        this._params = e;
      }
    }]), e;
  }());
u.crossProxy = {}, u.location = {
  host: "",
  pathname: "",
  protocol: ""
}, __publish("HttpClient", function () {
  function e() {
    this.module = null;
  }
  var t = e.prototype;
  return t.crossProxy = function (e) {
    if (__dependency_1.sys.isBrowser && !__dependency_3.PREVIEW && u.crossProxy) {
      for (var t = u.crossProxy, r = u.location, s = Object.keys(t), o = 0; o < s.length; o++) {
        var i = s[o],
          c = t[i];
        if (e.indexOf(i) > -1 && c.protocol && c.api) return r.protocol != c.protocol && (e = e.replace(c.protocol, r.protocol)), e.replace(i, r.host + "/" + c.api);
      }
      return e;
    }
    return e;
  }, t.convertParams = function (e, t) {
    if (null == t || null == t) return e;
    var r = "&";
    e.indexOf("?") < 0 && (r = "?");
    for (var a = Object.keys(t), s = 0; s < a.length; s++) r += 0 == s ? a[s] + "=" + t[a[s]] : "&" + a[s] + "=" + t[a[s]];
    return r = e + r;
  }, t.convertData = function (e) {
    return e;
  }, t.request = function (e, t, r) {
    var n = e.data.url;
    if (n) {
      var o = new XMLHttpRequest();
      if (o.onreadystatechange = function () {
        if (4 === o.readyState) if (o.status >= 200 && o.status < 300) "arraybuffer" == o.responseType || "blob" == o.responseType ? t && t(o.response) : t && t(o.responseText);else {
          var e = "請求錯誤,錯誤狀態:" + o.status;
          Log.e("request error status : " + o.status + " url : " + n + " "), r && r({
            type: __dependency_2.Http.ErrorType.RequestError,
            reason: e
          });
        }
      }, o.responseType = e.data.responseType, o.timeout = e.data.timeout, o.ontimeout = function () {
        o.abort(), r && r({
          type: __dependency_2.Http.ErrorType.TimeOut,
          reason: "連線超時"
        });
      }, o.onerror = function () {
        Log.e("request error : " + n + " "), r && r({
          type: __dependency_2.Http.ErrorType.RequestError,
          reason: "請求錯誤"
        });
      }, n = this.crossProxy(n), n = this.convertParams(n, e.params), e.data.isAutoAttachCurrentTime && (n = n.indexOf("?") >= 0 ? n + "&cur_loc_t=" + Date.timeNow() : n + "?cur_loc_t=" + Date.timeNow()), __dependency_1.sys.isBrowser, e.data.type === __dependency_2.Http.Type.POST) {
        if (o.open(__dependency_2.Http.Type.POST, n, e.data.async), e.data.requestHeader) {
          if (e.data.requestHeader instanceof Array) e.data.requestHeader.forEach(function (e) {
            o.setRequestHeader(e.name, e.value);
          });else {
            var u = e.data.requestHeader;
            o.setRequestHeader(u.name, u.value);
          }
        } else o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        o.send(this.convertData(e.data.data));
      } else {
        if (o.open(__dependency_2.Http.Type.GET, n, e.data.async), e.data.requestHeader) if (e.data.requestHeader instanceof Array) e.data.requestHeader.forEach(function (e) {
          o.setRequestHeader(e.name, e.value);
        });else {
          var i = e.data.requestHeader;
          o.setRequestHeader(i.name, i.value);
        }
        o.send();
      }
    } else r && r({
      type: __dependency_2.Http.ErrorType.UrlError,
      reason: "錯誤的Url地址"
    });
  }, e;
}()).module = "【Http管理器】", __dependency_1.cclegacy._RF.pop();
