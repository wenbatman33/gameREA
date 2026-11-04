// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ColorManager.ts.js
// SHA256: 78a2eabfd6d62b6d91e84123694c21fe8c81a695e4fc1628504050c4b77fab48
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Macros";
var __export_0;
export { __export_0 as ColorManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ColorManager":
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
__dependency_0.cclegacy._RF.push({}, "ab9f6JcUw5Arr+XQNiuvD71", "ColorManager", void 0);
var i = "using_color";
__publish("ColorManager", function () {
  function t() {
    this.isResident = !0, this.module = null, this._components = [], this._data = {
      mode: "undefined"
    }, this.proxys = new Map(), this.colorEnum = void 0;
  }
  var e = t.prototype;
  return e.addProxy = function (t) {
    t && (this.proxys.set(t.bundle, t), this.colorEnum = t.datas.get("enum"), this.updateData(this.getColorMode()));
  }, e.updateData = function (t) {
    var e = this;
    this._data.mode = t, this.proxys.forEach(function (o, n, i) {
      e._data = o.merge(t, e._data);
    });
  }, e.removeProxy = function (t) {
    t && this.proxys.delete(t.bundle) && t.bundle != __dependency_1.Macro.BUNDLE_RESOURCES && delete this._data[t.bundle];
  }, e.change = function (t) {
    var e = this;
    this.proxys.size <= 0 || this._data && this._data.mode == t || (this._data.mode = t, this.proxys.forEach(function (t, o, n) {
      e._data = t.merge(e.getColorMode(), e._data);
    }), Log.d(this.module, "當前顏色:" + this._data.mode), App.storage.setItem(i, this._data.mode));
  }, e.get = function (t) {
    var e = "";
    do {
      if (!t) break;
      if (t.length < 1) break;
      var o = t[0];
      if ("string" != typeof o) {
        Log.e("key error");
        break;
      }
      if (o.indexOf(__dependency_1.Macro.USING_COLOR_KEY) > -1) {
        var i = o.split(".");
        if (i.length < 2) {
          Log.e("key error");
          break;
        }
        i.shift(), t.shift();
        for (var r = null; i.length > 0;) {
          var a = i.shift();
          if (!a) {
            Log.e("顏色包不存在 : " + o), e = "";
            break;
          }
          r = r ? r[a] : this._data[a];
        }
        e = "string" == typeof r ? String.format(r, t) : r;
      } else {
        var s = t.shift();
        if ("string" == typeof s) return String.format(s, t);
        e = s;
      }
    } while (0);
    return e;
  }, e.getColorMode = function () {
    return App.storage.getItem(i, "dark");
  }, e.add = function (t) {
    -1 == this._components.indexOf(t) && this._components.push(t);
  }, e.remove = function (t) {
    var e = this._components.indexOf(t);
    e >= 0 && this._components.splice(e, 1);
  }, e.onChangeColor = function () {
    this._components.forEach(function (t) {
      (0, __dependency_0.isValid)(t);
    });
  }, t;
}()).module = "【顏色包】", __dependency_0.cclegacy._RF.pop();
