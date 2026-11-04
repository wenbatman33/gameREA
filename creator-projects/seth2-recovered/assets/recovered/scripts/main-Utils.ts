// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Utils.ts.js
// SHA256: 678601c0d9bbab9d936ac7a41705b8aa24acbe9ba9f1ec3e9c7c66c51cd26ed9
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as Utils };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Utils":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
__dependency_0.cclegacy._RF.push({}, "834c7+oOQpO/pw/9yqGEA/H", "Utils", void 0);
var l = 999;
__publish("Utils", function () {
  function t() {
    this.module = null;
  }
  var e = t.prototype;
  return e.showView = function (t, e) {
    t && (__dependency_0.Tween.stopAllByTag(l), (0, __dependency_0.tween)(t).tag(l).set({
      scale: new __dependency_0.Vec3(.2, .2, .2)
    }).to(.2, {
      scale: new __dependency_0.Vec3(1.15, 1.15, 1.15)
    }).delay(.05).to(.1, {
      scale: new __dependency_0.Vec3(1, 1, 1)
    }).call(function () {
      e && e();
    }).start());
  }, e.hideView = function (t, e) {
    t && (__dependency_0.Tween.stopAllByTag(l), (0, __dependency_0.tween)(t).tag(l).to(.2, {
      scale: new __dependency_0.Vec3(1.15, 1.15, 1.15)
    }).to(.1, {
      scale: new __dependency_0.Vec3(.3, .3, .3)
    }).call(function () {
      e && e();
    }).start());
  }, e.fadeOutView = function (t, e) {
    var a,
      i = null != (a = t.getComponent(__dependency_0.UIOpacity)) ? a : t.addComponent(__dependency_0.UIOpacity);
    i.opacity = 255, __dependency_0.Tween.stopAllByTag(l), (0, __dependency_0.tween)(i).tag(l).to(.4, {
      opacity: 0
    }).call(function () {
      e && e();
    }).start();
  }, e.isMail = function (t) {
    return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(t);
  }, e.isTEL = function (t) {
    return /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g.test(t);
  }, e.limitString = function (t, e, n, r) {
    if (void 0 === n && (n = 100), void 0 === r && (r = ".."), t) {
      t.string = e, t.forceDoLayout();
      var a = t.getComponent(__dependency_0.UITransform).width;
      if (a <= n) return;
      var o = (a - n) / (a / e.length);
      o = Math.floor(o);
      var l = e.substring(0, e.length - o) + r;
      if (t.assemblerData && t.assemblerData.context) for (var u = (0, __dependency_0.safeMeasureText)(t.assemblerData.context, l); u > n;) l = l.substring(0, l.length - r.length - 1) + r, u = (0, __dependency_0.safeMeasureText)(t.assemblerData.context, l);
      t.string = l;
    }
  }, e.toThousandths = function (t) {
    var e = "";
    t < 0 && (t *= -1, e = "-");
    var n = /(?=(?!\b)(\d{3})+\.?\b)/g;
    return e + t.toString().replace(/(^|\s)\d+(?=\.?\d*($|\s))/g, function (t) {
      return t.replace(n, ",");
    });
  }, e.toFormat = function (t, e) {
    void 0 === e && (e = 2);
    var n = 1e3,
      r = {
        K: n,
        M: n * n,
        B: n * n * n,
        T: n * n * n * n
      },
      a = ["K", "M", "B", "T"],
      o = "",
      i = "",
      s = 0,
      l = 1;
    if (t < 0 && (l = -1), (t = Math.abs(t)) < n) i = t.toFixed(e);else for (var u = a.length - 1; u >= 0; u--) {
      if ((s = t / r[a[u]]) >= 1) {
        i = s.toFixed(e), o = a[u];
        break;
      }
    }
    return "" + (s = parseFloat(i)) * l + o;
  }, e.toNumber = function (t, e) {
    void 0 === e && (e = 2);
    var n = t.match(/-?\d+e?[+-]?\d+[KMBT]?|-?\d*\.\d*e?[+-]?\d*[KMBT]?|-?\d+[KMBT]?/);
    if (n && n.length > 0) {
      for (var r = 1e3, a = {
          K: r,
          M: r * r,
          B: r * r * r,
          T: r * r * r * r
        }, o = "", i = 0; i < n.length; i++) o += n[i];
      var s = o.match(/[KMBT]/),
        l = "";
      s && s.length > 0 && (l = s[0]);
      var u = o.substring(0, o.length - l.length),
        c = parseFloat(u),
        f = a[l];
      return f && (c *= f), parseFloat(c.toFixed(e));
    }
    return Log.e("無法匹配" + t), 0;
  }, e.isIDNumber = function (t) {
    return !!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/g.test(t);
  }, e.isTencentQQ = function (t) {
    return !!/^[1-9][0-9]{4,}$/.test(t);
  }, e.removeNewLineAndTrim = function (t) {
    return void 0 === t && (t = ""), t.replace(/\r\n|\n/g, "");
  }, e.shuffle = function (t, e) {
    void 0 === e && (e = void 0);
    for (var n = t.slice(), r = n.length - 1; r > 0; r--) {
      var a = Math.floor(Math.random() * (r + 1));
      if (null == e || n[a] != e && n[r] != e) {
        var o = [n[a], n[r]];
        n[r] = o[0], n[a] = o[1];
      }
    }
    return n;
  }, t.shuffle = function (t, e) {
    void 0 === e && (e = void 0);
    for (var n = t.slice(), r = n.length - 1; r > 0; r--) {
      var a = Math.floor(Math.random() * (r + 1));
      if (null == e || n[a] != e && n[r] != e) {
        var o = [n[a], n[r]];
        n[r] = o[0], n[a] = o[1];
      }
    }
    return n;
  }, t;
}()).module = "【Utils】", __dependency_0.cclegacy._RF.pop();
