// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-GameAlert.ts.js
// SHA256: fd05b22e7355990a71d533b35b3d7740c3fc82bd0167fcf1c3d0f7ec543df2ea
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./main-Config";
import * as __dependency_4 from "./main-Bundles";
import * as __dependency_5 from "./main-EventComponent";
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
(function (t) {
  void 0;
})(__dependency_5);
var P, S, L, k, B, H, E, T, q, z, I, N, D, R, O, G, F, V, J, M, U, j, X;
__dependency_1.cclegacy._RF.push({}, "00dbfsAAG1OXqY+qbdiBELI", "GameAlert", void 0);
var Y = (P = (0, __dependency_2.inject)("bbr", __dependency_1.Node), S = (0, __dependency_2.inject)("content", __dependency_1.Node), L = (0, __dependency_2.inject)("title", __dependency_1.Node, "content"), k = (0, __dependency_2.inject)("expand", __dependency_1.Node, "content"), B = (0, __dependency_2.inject)("expand/bg", __dependency_1.Node, "content"), H = (0, __dependency_2.inject)("expand/label", __dependency_1.Label, "content"), E = (0, __dependency_2.inject)("expand/num", __dependency_1.Label, "content"), T = (0, __dependency_2.inject)("message", __dependency_1.Label, "content"), q = (0, __dependency_2.inject)("button/confirm", __dependency_1.Node, "content"), z = (0, __dependency_2.inject)("button/cancel", __dependency_1.Node, "content"), I = (0, __dependency_2.inject)("errorCode", __dependency_1.Node, "content"), D = (0, __dependency_0.applyDecoratedDescriptor)((N = function (t) {
  function e() {
    for (var e, n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l];
    return e = Reflect.construct(t, [this].concat(i).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "_bbr", D, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_content", R, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_title", O, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_expand", G, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_expandBg", F, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_expandTitle", V, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_expandNum", J, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_message", M, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_confirm", U, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "_cancel", j, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "errorCode", X, (0, __dependency_0.assertThisInitialized)(e)), e._config = null, e.finishAlertCb = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var l = e.prototype;
  return l.show = function (t) {
    t.confirmString || (t.confirmString = App.getLanguage("alertConfirm", [], __dependency_4.EBundles[__dependency_4.EBundles.wrapper])), t.cancelString || (t.cancelString = App.getLanguage("alertCancel", [], __dependency_4.EBundles[__dependency_4.EBundles.wrapper])), t.colorStyle && (this._content.getComponent(__dependency_1.Sprite).color = t.colorStyle), t.bbrColor && (this._bbr.getComponent(__dependency_1.Sprite).color = t.bbrColor), null != t.titleisHidden && t.titleisHidden && (this._title.active = !1), null != t.expandisHidden && t.expandisHidden && (this._expand.active = !1), null != t.confirmisHidden && t.confirmisHidden && (this._confirm.parent.active = !1), this._content.getComponent(__dependency_1.Layout).updateLayout(!0), this._config = t, this.writeContent(t), this.showButton(t), (null == t ? void 0 : t.code) && this.setErrorCode(t), this._show();
  }, l.setErrorCode = function (t) {
    this.errorCode.active = !0, this.errorCode.getComponent(__dependency_1.Label).string = "" + t.code;
  }, l._show = function () {
    this._content && (0, __dependency_1.tween)(this._content).set({
      scale: new __dependency_1.Vec3(.2, .2, .2)
    }).to(.2, {
      scale: new __dependency_1.Vec3(1.1, 1.1, 1.1)
    }).delay(.05).to(.1, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    }).start();
  }, l.setFinishAlert = function (t) {
    this.finishAlertCb = t;
  }, l.writeContent = function (t) {
    if (t.text ? this._message.string = t.text : (Log.e("請指定提示內容"), this._message.string = ""), t.title ? (this._title.active = !0, this._title.getComponent(__dependency_1.Label).string = t.title) : this._title.active = !1, t.expandTitle ? (this._expand.active = !0, this._expandTitle.string = t.expandTitle, this._expandNum.string = t.expandNum) : this._expand.active = !1, t.confirmString) {
      var e = (0, __dependency_1.find)("Label", this._confirm);
      if (e) {
        var n = e.getComponent(__dependency_1.Label);
        n && (n.string = t.confirmString);
      }
    }
    if (t.cancelString) {
      var i = (0, __dependency_1.find)("Label", this._cancel);
      if (i) {
        var r = i.getComponent(__dependency_1.Label);
        r && (r.string = t.cancelString);
      }
    }
  }, l.showButton = function (t) {
    var e = void 0 === t.needCloseAlert || t.needCloseAlert;
    this._confirm && this._cancel && (t.bbrCb ? this._bbr.on(__dependency_1.Input.EventType.TOUCH_END, this.onClick.bind(this, t.bbrCb, !1, e)) : Log.d("請設定 bbrCb"), t.confirmCb ? (this._confirm.active = !0, this._confirm.on(__dependency_1.Input.EventType.TOUCH_END, this.onClick.bind(this, t.confirmCb, !0, e))) : this._confirm.active = !1, t.cancelCb ? (this._cancel.active = !0, this._cancel.on(__dependency_1.Input.EventType.TOUCH_END, this.onClick.bind(this, t.cancelCb, !1, e))) : this._cancel.active = !1);
  }, l.hiddenButton = function () {
    this._confirm.parent.active = !1, this._expand.active = !1, this._title.active = !1, this._content.getComponent(__dependency_1.Layout).updateLayout(!0);
  }, l._close = function (t, e) {
    var n = this;
    (0, __dependency_1.isValid)(this._content) && (t ? (0, __dependency_1.tween)(this._content).to(.2, {
      scale: new __dependency_1.Vec3(1.15, 1.15, 1.15)
    }).to(.1, {
      scale: new __dependency_1.Vec3(.3, .3, .3)
    }).call(function () {
      n.finishAlertCb(), e && e();
    }).start() : e && e());
  }, l.onClick = function (t, e, n) {
    this._config.immediatelyCallback ? (t && t(e), this._close(n, null)) : this._close(n, function () {
      t && t(e);
    });
  }, l.enableBLockInputEvents = function () {
    this._bbr && (this._bbr.getComponent(__dependency_1.BlockInputEvents).enabled = !0, this._bbr.active = !0), this._content && (this._content.getComponent(__dependency_1.BlockInputEvents).enabled = !0);
  }, l.disableBLockInputEvents = function () {
    Log.e("this._bbr:::::::", this._bbr), Log.e("this._content:::::::", this._content), this._bbr && (this._bbr.getComponent(__dependency_1.BlockInputEvents).enabled = !1, this._bbr.active = !1), this._content && (this._content.getComponent(__dependency_1.BlockInputEvents).enabled = !1);
  }, (0, __dependency_0.createClass)(e, [{
    key: "config",
    get: function () {
      return this._config;
    }
  }]), e;
}(__dependency_5.default)).prototype, "_bbr", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_content", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_title", [L], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_expand", [k], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), F = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_expandBg", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_expandTitle", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_expandNum", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), M = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_message", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), U = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_confirm", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "_cancel", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), X = (0, __dependency_0.applyDecoratedDescriptor)(N.prototype, "errorCode", [I], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N);
__publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.curPanel = null, this.queue = [];
  }
  var e = t.prototype;
  return e.getConfig = function (t) {
    var e = {};
    return t.tag && (e.tag = t.tag), t.text && (e.text = t.text), t.title && (e.title = t.title), t.confirmString && (e.confirmString = t.confirmString), t.cancelString && (e.cancelString = t.cancelString), t.richText && (e.richText = t.richText), t.immediatelyCallback && (e.immediatelyCallback = t.immediatelyCallback), t.isRepeat && (e.isRepeat = t.isRepeat), t.needCloseAlert && (e.needCloseAlert = t.needCloseAlert), t.code && (e.code = t.code), t.titleisHidden && (e.titleisHidden = t.titleisHidden), t.expandisHidden && (e.expandisHidden = t.expandisHidden), t.confirmisHidden && (e.confirmisHidden = t.confirmisHidden), e;
  }, e.show = function (t, e) {
    return void 0 === e && (e = __dependency_3.ViewZOrder.Alert), t.tag && !1 === t.isRepeat && this.isRepeat(t.tag) ? (Log.w("彈出框已經存在 config : " + JSON.stringify(this.getConfig(t))), !1) : (this.queue.push(t), this._show(t, e), !0);
  }, e.isCurrentShow = function (t) {
    if (this.curPanel) {
      var e,
        n = null == (e = this.curPanel.getComponent(Y)) ? void 0 : e.config;
      if (n && n.tag == t) return !0;
    }
    return !1;
  }, e.currentShow = function (t) {
    if (this.curPanel) {
      var e,
        n = null == (e = this.curPanel.getComponent(Y)) ? void 0 : e.config;
      return t && n && n.tag, n;
    }
    return null;
  }, e.enableBlockInputEvents = function () {
    this.curPanel && this.curPanel.getComponent(Y).enableBLockInputEvents();
  }, e.isRepeat = function (t) {
    if (this.curPanel) {
      var e,
        n = null == (e = this.curPanel.getComponent(Y)) ? void 0 : e.config;
      if (n && n.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(n))), !0;
    } else for (var i = 0; i < this.queue.length; i++) {
      var r = this.queue[i];
      if (r.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(r))), !0;
    }
    return !1;
  }, e.close = function (t) {
    if (t) {
      for (var e = this.queue.length; e--;) this.queue[e].tag == t && this.queue.splice(e, 1);
      if (this.curPanel) {
        var n,
          i = null == (n = this.curPanel.getComponent(Y)) ? void 0 : n.config;
        i && i.tag == t && this.finishAlert();
      }
    } else this.finishAlert();
  }, e.closeAll = function () {
    this.queue = [], this.finishAlert();
  }, e.finishAlert = function () {
    this.curPanel && (this.curPanel.removeFromParent(), this.curPanel = null);
    var t = this.queue.shift();
    return 0 != this.queue.length ? (this._show(this.queue[0]), this.queue[0]) : t;
  }, e._show = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(e, n) {
      var i;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            void 0 === n && (n = __dependency_3.ViewZOrder.Alert), this.curPanel || ((0, __dependency_1.log)(App.cache), this.curPanel = (0, __dependency_1.instantiate)(App.uiManager.getScenePrefab("GameAlert")), i = this.curPanel.addComponent(Y), App.uiManager.addView(this.curPanel, n), null != e.isDisableBlockInput && (Log.e("disableBlockInputEvents:::::::", e.isDisableBlockInput), 1 == e.isDisableBlockInput && i.disableBLockInputEvents()), i.setFinishAlert(this.finishAlert.bind(this)), i.show(e));
          case 2:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, n) {
      return t.apply(this, arguments);
    };
  }(), (0, __dependency_0.createClass)(t, [{
    key: "currentPanel",
    get: function () {
      return this.curPanel;
    }
  }]), t;
}()).module = "【GameAlert】", __dependency_1.cclegacy._RF.pop();
