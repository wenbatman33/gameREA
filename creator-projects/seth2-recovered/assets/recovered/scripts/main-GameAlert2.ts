// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-GameAlert2.ts.js
// SHA256: 32c138f59a497969b630b653bf9a81c61ed16a6ee49ec0ecaac9612dcdf696bb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./main-Config";
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
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
var b, d, w, y, x, S, P, T, A, z, L, q, k, R, B;
__dependency_1.cclegacy._RF.push({}, "6d185pBzzJKFZi8SZ3jOWGJ", "GameAlert2", void 0);
var E = (b = (0, __dependency_3.inject)("close", __dependency_1.Node, "content"), d = (0, __dependency_3.inject)("content", __dependency_1.Node), w = (0, __dependency_3.inject)("content", __dependency_1.Label, "content"), y = (0, __dependency_3.inject)("richContent", __dependency_1.RichText, "content"), x = (0, __dependency_3.inject)("title", __dependency_1.Label, "content"), S = (0, __dependency_3.inject)("confirm", __dependency_1.Node, "content"), P = (0, __dependency_3.inject)("cancel", __dependency_1.Node, "content"), A = (0, __dependency_0.applyDecoratedDescriptor)((T = function (t) {
  function n() {
    for (var n, e = arguments.length, r = new Array(e), c = 0; c < e; c++) r[c] = arguments[c];
    return n = Reflect.construct(t, [this].concat(r).slice(1), new.target || n) || this, (0, __dependency_0.initializerDefineProperty)(n, "_closeBtn", A, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "_content", z, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "_textContent", L, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "_richTextContent", q, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "_title", k, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "_confirm", R, (0, __dependency_0.assertThisInitialized)(n)), (0, __dependency_0.initializerDefineProperty)(n, "_cancel", B, (0, __dependency_0.assertThisInitialized)(n)), n._config = null, n;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var c = n.prototype;
  return c.show = function (t) {
    t.title || (t.title = App.getLanguage("alert_title")), t.confirmString || (t.confirmString = App.getLanguage("alert_confirm")), t.cancelString || (t.cancelString = App.getLanguage("alert_cancel")), this._config = t, this.writeContent(t), this.showButton(t), this._show();
  }, c._show = function () {
    this._content && (0, __dependency_1.tween)(this._content).set({
      scale: new __dependency_1.Vec3(.2, .2, .2)
    }).to(.2, {
      scale: new __dependency_1.Vec3(1.1, 1.1, 1.1)
    }).delay(.05).to(.1, {
      scale: new __dependency_1.Vec3(1, 1, 1)
    }).start();
  }, c.writeContent = function (t) {
    if (t.richText ? (this._textContent.node.active = !1, this._richTextContent.node.active = !0, this._richTextContent.string = t.richText) : (this._textContent.node.active = !0, this._richTextContent.node.active = !1, t.text ? this._textContent.string = t.text : (Log.e("請指定提示內容"), this._textContent.string = "")), t.title && (this._title.string = t.title), t.confirmString) {
      var n = (0, __dependency_1.find)("Label", this._confirm);
      if (n) {
        var e = n.getComponent(__dependency_1.Label);
        e && (e.string = t.confirmString);
      }
    }
    if (t.cancelString) {
      var i = (0, __dependency_1.find)("Label", this._cancel);
      if (i) {
        var o = i.getComponent(__dependency_1.Label);
        o && (o.string = t.cancelString);
      }
    }
  }, c.showButton = function (t) {
    this._confirm && this._cancel && this._closeBtn && (this._closeBtn.on(__dependency_1.Input.EventType.TOUCH_END, this.close.bind(this)), t.confirmCb ? (this._confirm.active = !0, this._confirm.on(__dependency_1.Input.EventType.TOUCH_END, this.onClick.bind(this, t.confirmCb, !0)), this._closeBtn.on(__dependency_1.Input.EventType.TOUCH_END, this.onClick.bind(this, t.confirmCb, !1))) : this._confirm.active = !1, t.cancelCb ? (this._cancel.active = !0, this._cancel.on(__dependency_1.Input.EventType.TOUCH_END, this.onClick.bind(this, t.cancelCb, !1))) : this._cancel.active = !1, this._confirm.active ? this._cancel.active || this._confirm.setPosition(new __dependency_1.Vec3(0, this._confirm.position.y, this._confirm.position.z)) : this._cancel.active ? this._confirm.setPosition(new __dependency_1.Vec3(0, this._confirm.position.y, this._confirm.position.z)) : Log.w("提示框無按鈕顯示"));
  }, c.close = function () {
    this._close(null);
  }, c._close = function (t) {
    (0, __dependency_1.isValid)(this._content) && (0, __dependency_1.tween)(this._content).to(.2, {
      scale: new __dependency_1.Vec3(1.15, 1.15, 1.15)
    }).to(.1, {
      scale: new __dependency_1.Vec3(.3, .3, .3)
    }).call(function () {
      App.alert.finishAlert(), t && t();
    }).start();
  }, c.onClick = function (t, n) {
    this._config.immediatelyCallback ? (t && t(n), this._close(null)) : this._close(function () {
      t && t(n);
    });
  }, (0, __dependency_0.createClass)(n, [{
    key: "config",
    get: function () {
      return this._config;
    }
  }]), n;
}(__dependency_2.default)).prototype, "_closeBtn", [b], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(T.prototype, "_content", [d], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(T.prototype, "_textContent", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), q = (0, __dependency_0.applyDecoratedDescriptor)(T.prototype, "_richTextContent", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), k = (0, __dependency_0.applyDecoratedDescriptor)(T.prototype, "_title", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), R = (0, __dependency_0.applyDecoratedDescriptor)(T.prototype, "_confirm", [S], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), B = (0, __dependency_0.applyDecoratedDescriptor)(T.prototype, "_cancel", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T);
__publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this.curPanel = null, this.queue = [];
  }
  var n = t.prototype;
  return n.getConfig = function (t) {
    var n = {};
    return t.tag && (n.tag = t.tag), t.text && (n.text = t.text), t.title && (n.title = t.title), t.confirmString && (n.confirmString = t.confirmString), t.cancelString && (n.cancelString = t.cancelString), t.richText && (n.richText = t.richText), t.immediatelyCallback && (n.immediatelyCallback = t.immediatelyCallback), t.isRepeat && (n.isRepeat = t.isRepeat), n;
  }, n.show = function (t) {
    return t.tag && !1 === t.isRepeat && this.isRepeat(t.tag) ? (Log.w("彈出框已經存在 config : " + JSON.stringify(this.getConfig(t))), !1) : (this.queue.push(t), this._show(t), !0);
  }, n.isCurrentShow = function (t) {
    if (this.curPanel) {
      var n,
        e = null == (n = this.curPanel.getComponent(E)) ? void 0 : n.config;
      if (e && e.tag == t) return !0;
    }
    return !1;
  }, n.currentShow = function (t) {
    if (this.curPanel) {
      var n,
        e = null == (n = this.curPanel.getComponent(E)) ? void 0 : n.config;
      return t && e && e.tag, e;
    }
    return null;
  }, n.isRepeat = function (t) {
    if (this.curPanel) {
      var n,
        e = null == (n = this.curPanel.getComponent(E)) ? void 0 : n.config;
      if (e && e.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(e))), !0;
    } else for (var i = 0; i < this.queue.length; i++) {
      var o = this.queue[i];
      if (o.tag == t) return Log.w("重複的彈出框 config ; " + JSON.stringify(this.getConfig(o))), !0;
    }
    return !1;
  }, n.close = function (t) {
    if (t) {
      for (var n = this.queue.length; n--;) this.queue[n].tag == t && this.queue.splice(n, 1);
      if (this.curPanel) {
        var e,
          i = null == (e = this.curPanel.getComponent(E)) ? void 0 : e.config;
        i && i.tag == t && this.finishAlert();
      }
    } else this.finishAlert();
  }, n.closeAll = function () {
    this.queue = [], this.finishAlert();
  }, n.finishAlert = function () {
    this.curPanel && (this.curPanel.destroy(), this.curPanel = null);
    var t = this.queue.shift();
    return 0 != this.queue.length ? (this._show(this.queue[0]), this.queue[0]) : t;
  }, n._show = function (t) {
    if (!this.curPanel) {
      this.curPanel = (0, __dependency_1.instantiate)(App.uiManager.getScenePrefab("Alert"));
      var n = this.curPanel.addComponent(E);
      App.uiManager.addView(this.curPanel, __dependency_4.ViewZOrder.Alert), n.show(t);
    }
  }, t;
}()).module = "【GameAlert2】", __dependency_1.cclegacy._RF.pop();
