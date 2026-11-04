// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CanvasHelper.ts.js
// SHA256: 2a2c5ce75bfa10cdf277f554114191473592f91be8870c0da5824e1a28c3d1d1
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as CanvasHelper };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CanvasHelper":
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
__dependency_1.cclegacy._RF.push({}, "a96d56Mr9FI4rHutCkVnb9o", "CanvasHelper", void 0), __publish("CanvasHelper", function () {
  function e() {
    this.module = null, this.downloadMime = "image/octet-stream";
  }
  var a = e.prototype;
  return a.scaleCanvas = function (e, t, a) {
    var n = e.width,
      i = e.height;
    null == t && (t = n), null == a && (a = i);
    var r = document.createElement("canvas"),
      o = r.getContext("2d");
    return r.width = t, r.height = a, null == o || o.drawImage(e, 0, 0, n, i, 0, 0, t, a), r;
  }, a.getDataURL = function (e, t, a, n) {
    return (e = this.scaleCanvas(e, a, n)).toDataURL(t);
  }, a.saveFile = function (e, t, a) {
    this.fileDownload(e, t, a);
  }, a.genImage = function (e) {
    var t = document.createElement("img");
    return t.src = e, t;
  }, a.fixType = function (e) {
    return "image/" + (e = e.toLowerCase().replace(/jpg/i, "jpeg")).match(/png|jpeg|bmp|gif/)[0];
  }, a.encodeData = function (e) {
    if (!window.btoa) throw "btoa undefined";
    var t = "";
    if ("string" == typeof e) t = e;else for (var a = 0; a < e.length; a++) t += String.fromCharCode(e[a]);
    return btoa(t);
  }, a.getImageData = function (e) {
    var t,
      a = e.width,
      n = e.height;
    return null == (t = e.getContext("2d")) ? void 0 : t.getImageData(0, 0, a, n);
  }, a.makeURL = function (e, t) {
    return "data:" + t + ";base64," + e;
  }, a.genBitmapImage = function (e) {
    var t = e.width,
      a = e.height,
      n = t * a * 3,
      i = n + 54,
      r = [66, 77, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0],
      o = [40, 0, 0, 0, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      s = (4 - 3 * t % 4) % 4,
      u = e.data,
      c = "",
      g = t << 2,
      l = a,
      m = String.fromCharCode;
    do {
      for (var v = g * (l - 1), f = "", d = 0; d < t; d++) {
        var h = d << 2;
        f += m(u[v + h + 2]) + m(u[v + h + 1]) + m(u[v + h]);
      }
      for (var p = 0; p < s; p++) f += String.fromCharCode(0);
      c += f;
    } while (--l);
    return this.encodeData(r.concat(o)) + this.encodeData(c);
  }, a.savaAsImage = function (e, t, a, n, i) {
    void 0 === n && (n = "png"), void 0 === i && (i = "defaultpng");
    var r = null;
    if (this.support.canvas && this.support.dataURL) {
      if ("string" == typeof e) {
        var o = document.getElementById(e);
        o && (r = o);
      } else r = e;
      if (!r) return;
      if (n = this.fixType(n), /bmp/.test(n)) {
        var s = this.getImageData(this.scaleCanvas(r, t, a));
        if (s) {
          var u = this.genBitmapImage(s);
          this.saveFile(this.makeURL(u, this.downloadMime), n.replace("image/", ""), i);
        }
      } else {
        r = this.scaleCanvas(r, t, a);
        var c = this;
        r.toBlob(function (e) {
          var t = URL.createObjectURL(e);
          c.saveFile(t, n.replace("image/", ""), i);
        }, n, 1);
      }
    }
  }, a.convertToImage = function (e, t, a, n) {
    void 0 === n && (n = "png");
    var i = null;
    if (this.support.canvas && this.support.dataURL) {
      if ("string" == typeof e) {
        var r = document.getElementById(e);
        r && (i = r);
      } else i = e;
      if (!i) return;
      if (/bmp/.test(n)) {
        var o = this.getImageData(this.scaleCanvas(i, t, a)),
          s = this.genBitmapImage(o);
        return this.genImage(this.makeURL(s, "image/bmp"));
      }
      s = this.getDataURL(i, n, t, a);
      return this.genImage(s);
    }
  }, a.fileDownload = function (e, t, a) {
    var n = document.createElement("a");
    n.style.display = "none", n.href = e, n.download = a + "." + t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
  }, a.saveAsPNG = function (e, t, a) {
    return this.savaAsImage(e, t, a, "png", "defaultpng");
  }, a.saveAsJPEG = function (e, t, a) {
    return this.savaAsImage(e, t, a, "jpeg", "defaultjpg");
  }, a.saveAsGIF = function (e, t, a) {
    return this.savaAsImage(e, t, a, "gif", "defaultgif");
  }, a.saveAsBMP = function (e, t, a) {
    return this.savaAsImage(e, t, a, "bmp", "defaultbmp");
  }, a.convertToPNG = function (e, t, a) {
    return this.convertToImage(e, t, a, "png");
  }, a.convertToJPEG = function (e, t, a) {
    return this.convertToImage(e, t, a, "jpeg");
  }, a.convertToGIF = function (e, t, a) {
    return this.convertToImage(e, t, a, "gif");
  }, a.convertToBMP = function (e, t, a) {
    return this.convertToImage(e, t, a, "bmp");
  }, (0, __dependency_0.createClass)(e, [{
    key: "support",
    get: function () {
      var e = document.createElement("canvas"),
        t = e.getContext("2d");
      return {
        canvas: !!t,
        imageData: !(null == t || !t.getImageData),
        dataURL: !!e.toDataURL,
        btoa: !!window.btoa
      };
    }
  }]), e;
}()).module = "【CanvasHelper】", __dependency_1.cclegacy._RF.pop();
