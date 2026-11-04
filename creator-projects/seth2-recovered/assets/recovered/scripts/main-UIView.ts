// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-UIView.ts.js
// SHA256: f471613ae448857cdc6c6ad1b6560b07f1d0e7efb5aa799de950c53787735590
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-AudioComponent";
import * as __dependency_4 from "./main-Macros";
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
(function (n) {
  void 0, void 0;
})(__dependency_0);
(function (n) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (n) {
  void 0;
})(__dependency_2);
(function (n) {
  void 0;
})(__dependency_3);
(function (n) {
  void 0;
})(__dependency_4);
var d;
__dependency_1.cclegacy._RF.push({}, "88e0cFi4dhOUr9sdD/3nRz4", "UIView", void 0);
var l = __dependency_1._decorator.ccclass,
  p = (__dependency_1._decorator.property, __dependency_1._decorator.menu);
__publish("default", l(d = p("Quick公共元件/UIView")(d = function (n) {
  function o() {
    for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
    return (e = Reflect.construct(n, [this].concat(o).slice(1), new.target || o) || this)._args = void 0, e._className = "unknow", e._bundle = null, e._enabledKeyUp = !1, e._enabledKeyDown = !1, e.audioHelper = null, e._enterBackgroundTime = 0, e._enableFrontAndBackgroundSwitch = !1, e;
  }
  (0, __dependency_0.inheritsLoose)(o, n), o.getPrefabUrl = function () {
    return Log.e("請求實現public static getPrefabUrl"), __dependency_4.Macro.UNKNOWN;
  };
  var i = o.prototype;
  return i.close = function () {
    var n = this;
    this.closeAction ? this.closeAction(function () {
      App.uiManager.close(n.className);
    }) : App.uiManager.close(this.className);
  }, i.show = function (n) {
    this._args = n, this.node && (this.node.active = !0), this.showAction && this.showAction(function () {});
  }, i.hide = function () {
    var n = this;
    this.hideAction ? this.hideAction(function () {
      n.node && n.node.removeFromParent();
    }) : this.node && this.node.removeFromParent();
  }, i.onKeyUp = function (n) {
    n.keyCode == __dependency_1.macro.KEY.escape ? this.onKeyBackUp(n) : n.propagationStopped = !0;
  }, i.onKeyDown = function (n) {
    n.keyCode == __dependency_1.macro.KEY.escape ? this.onKeyBackDown(n) : n.propagationStopped = !0;
  }, i.onKeyBackUp = function (n) {
    n.propagationStopped = !0;
  }, i.onKeyBackDown = function (n) {
    n.propagationStopped = !0;
  }, i.onLoad = function () {
    this.audioHelper = this.addComponent(__dependency_3.default), this.audioHelper.owner = this, n.prototype.onLoad.call(this);
  }, i._onEnterBackground = function () {
    this._enterBackgroundTime = Date.timeNow(), this.onEnterBackground();
  }, i._onEnterForgeGround = function () {
    var n = Date.timeNow() - this._enterBackgroundTime;
    this.onEnterForgeground(n);
  }, i.onEnterForgeground = function (n) {}, i.onEnterBackground = function () {}, (0, __dependency_0.createClass)(o, [{
    key: "args",
    get: function () {
      return this._args;
    },
    set: function (n) {
      this._args = n;
    }
  }, {
    key: "className",
    get: function () {
      return this._className;
    },
    set: function (n) {
      this._className = n;
    }
  }, {
    key: "bundle",
    get: function () {
      return this._bundle;
    },
    set: function (n) {
      this._bundle = n;
    }
  }, {
    key: "closeAction",
    get: function () {
      return null;
    }
  }, {
    key: "showAction",
    get: function () {
      return null;
    }
  }, {
    key: "hideAction",
    get: function () {
      return null;
    }
  }, {
    key: "enabledKeyUp",
    get: function () {
      return this._enabledKeyUp;
    },
    set: function (n) {
      this._enabledKeyUp = n, n ? this.onI(__dependency_1.Input.EventType.KEY_UP, this.onKeyUp) : this.offI(__dependency_1.Input.EventType.KEY_UP, this.onKeyUp);
    }
  }, {
    key: "enabledKeyDown",
    get: function () {
      return this._enabledKeyUp;
    },
    set: function (n) {
      this._enabledKeyUp = n, n ? this.onI(__dependency_1.Input.EventType.KEY_DOWN, this.onKeyDown) : this.offI(__dependency_1.Input.EventType.KEY_DOWN, this.onKeyDown);
    }
  }, {
    key: "enableFrontAndBackgroundSwitch",
    get: function () {
      return this._enableFrontAndBackgroundSwitch;
    },
    set: function (n) {
      this._enableFrontAndBackgroundSwitch = n, n ? (this.onG(__dependency_1.Game.EVENT_SHOW, this._onEnterForgeGround), this.onG(__dependency_1.Game.EVENT_HIDE, this._onEnterBackground)) : (this.offG(__dependency_1.Game.EVENT_SHOW, this._onEnterForgeGround), this.offG(__dependency_1.Game.EVENT_HIDE, this._onEnterBackground));
    }
  }]), o;
}(__dependency_2.default)) || d) || d);
__dependency_1.cclegacy._RF.pop();
