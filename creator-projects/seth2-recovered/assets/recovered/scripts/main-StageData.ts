// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-StageData.ts.js
// SHA256: b5cfe567db80886079d0b91d328e9241160d5c926652d9d001ce129f7803dc47
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Update";
import * as __dependency_3 from "./main-CmmGameData";
import * as __dependency_4 from "./main-Macros";
import * as __dependency_5 from "./main-Bundles";
var __export_0;
export { __export_0 as StageData };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "StageData":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
(function (e) {
  void 0;
})(__dependency_5);
__dependency_1.cclegacy._RF.push({}, "c284cIfNW5DV5M9KCSAIfPf", "StageData", void 0), __publish("StageData", function (e) {
  function s() {
    for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return (t = Reflect.construct(e, [this].concat(s).slice(1), new.target || s) || this)._sceneStack = [], t._where = __dependency_4.Macro.UNKNOWN, t._entrys = new Map(), t._games = [], t;
  }
  (0, __dependency_0.inheritsLoose)(s, e);
  var a = s.prototype;
  return a.init = function () {
    var t = this;
    e.prototype.init.call(this);
    var n = App.getLanguage("bundles"),
      s = Object.keys(n);
    this._entrys.clear(), s.forEach(function (e) {
      var s = n[e],
        a = new __dependency_2.Update.Config("bundles." + e + ".name", e);
      t._entrys.set(e, a), e != __dependency_5.EBundles[__dependency_5.EBundles.wrapper] && e != __dependency_4.Macro.BUNDLE_RESOURCES && t._games.push({
        name: s.name,
        sort: s.sort,
        language: "bundles." + e + ".name",
        bundle: e
      });
    }), this._games.sort(function (e, t) {
      return e.sort - t.sort;
    });
  }, a.isLoginStage = function (e) {
    return e ? e == __dependency_4.Macro.BUNDLE_RESOURCES : this.where == __dependency_4.Macro.BUNDLE_RESOURCES;
  }, a.isWrapperStage = function (e) {
    return e ? e == __dependency_5.EBundles[__dependency_5.EBundles.wrapper] : this.where == __dependency_5.EBundles[__dependency_5.EBundles.wrapper];
  }, a.getEntry = function (e) {
    return this._entrys.get(e);
  }, a.push = function (e) {
    for (var t = 0, n = this._sceneStack.length - 1; n >= 0; n--) {
      if (this._sceneStack[n] == e) {
        t = this._sceneStack.length - n;
        break;
      }
    }
    for (; t > 0;) this._sceneStack.pop(), t--;
    this._sceneStack.push(e), Log.d(this.module + "壓入場景 : " + e), Log.d(this.module + "當前場景堆疊 : " + this._sceneStack.toString());
  }, (0, __dependency_0.createClass)(s, [{
    key: "where",
    get: function () {
      return this._where;
    },
    set: function (e) {
      Log.d("" + this.module + this._where + " ==> " + e);
      var t = this._where;
      this._where = e, t != e && this.push(e);
    }
  }, {
    key: "games",
    get: function () {
      return this._games;
    }
  }, {
    key: "prevWhere",
    get: function () {
      var e = void 0;
      return this._sceneStack.length >= 2 && (e = this._sceneStack[this._sceneStack.length - 2]), Log.d(this.module + "獲取的上一場景 : " + e), e;
    }
  }]), s;
}(__dependency_3.CmmGameData)).module = "【Stage資料】", __dependency_1.cclegacy._RF.pop();
