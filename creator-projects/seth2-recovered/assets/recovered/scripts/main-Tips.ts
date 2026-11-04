// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Tips.ts.js
// SHA256: f305f3e749307266e44d2e314ff52c403f7cb047448b12140b334a08de4504ad
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
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
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
__dependency_1.cclegacy._RF.push({}, "cbe3apTgWJJCIVevDJz8JOj", "Tips", void 0);
var m = function (t) {
  function o() {
    for (var n, i = arguments.length, o = new Array(i), e = 0; e < i; e++) o[e] = arguments[e];
    return (n = Reflect.construct(t, [this].concat(o).slice(1), new.target || o) || this)._content = null, n._curPositon = new __dependency_1.Vec3(), n._curOpacity = null, n._transform = null, n;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var e = o.prototype;
  return e.stopAllActions = function () {
    __dependency_1.Tween.stopAllByTarget(this._content), __dependency_1.Tween.stopAllByTarget(this._curPositon), this.opacity && __dependency_1.Tween.stopAllByTarget(this.opacity);
  }, e.onDestroy = function () {
    this.stopAllActions();
  }, e.init = function (t, n) {
    this._content = (0, __dependency_1.find)("content", this.node), this._content && (this._content.getComponent(__dependency_1.Label).string = t), this.runTimeOut(n);
  }, e.runTimeOut = function (t) {
    var n = this;
    (0, __dependency_1.tween)(this._content).delay(t).call(function () {
      App.tips.finishShowItem(n.node);
    }).start();
  }, e.fadeOut = function () {
    var t = this;
    this.opacity && (__dependency_1.Tween.stopAllByTarget(this.opacity), (0, __dependency_1.tween)(this.opacity).to(.5, {
      opacity: 0
    }).call(function () {
      var n;
      t.stopAllActions(), null == (n = t.node) || n.removeFromParent();
    }).start(), this.moveTo(0, this.node.position.y + this.transform.height));
  }, e.fadeIn = function () {
    this.opacity && (__dependency_1.Tween.stopAllByTarget(this.opacity), this.opacity.opacity = 0, (0, __dependency_1.tween)(this.opacity).to(.5, {
      opacity: 255
    }).start(), this.moveTo(0, this.node.position.y + this.transform.height));
  }, e.moveTo = function (t, n) {
    var i = this;
    __dependency_1.Tween.stopAllByTarget(this._curPositon), this._curPositon.set(this.node.position), (0, __dependency_1.tween)(this._curPositon).to(.5, {
      x: t,
      y: n
    }, {
      onUpdate: function (t) {
        var n;
        null == (n = i.node) || n.setPosition(t);
      },
      easing: "expoOut"
    }).start();
  }, (0, __dependency_0.createClass)(o, [{
    key: "opacity",
    get: function () {
      return this._curOpacity || (this._curOpacity = this.node.getComponent(__dependency_1.UIOpacity)), this._curOpacity;
    }
  }, {
    key: "transform",
    get: function () {
      return this._transform || (this._transform = this.node.getComponent(__dependency_1.UITransform)), this._transform;
    }
  }]), o;
}(__dependency_1.Component);
__publish("default", function () {
  function t() {
    this.module = null, this.isResident = !0, this._queue = [], this.MAX_NUM = 3, this.FADE_TIME = 2, this._id = 0, this.startPosition = new __dependency_1.Vec3(0, 100);
  }
  var n = t.prototype;
  return n._show = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(n) {
      var i, o, s, r, a, u, h, c, p;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (i = (0, __dependency_1.instantiate)(App.uiManager.getScenePrefab("Tips"))) {
              for ((o = i.addComponent(m)).init(n, this.FADE_TIME), i.setPosition(this.startPosition), o.fadeIn(), i.userData = this._id++, i.name = "Tips" + i.userData, App.uiManager.addView(i, __dependency_2.ViewZOrder.Tips), s = this._queue.length, r = 0; r < s && r < this.MAX_NUM; r++) a = this._queue[r], u = a.getComponent(m), h = a.getComponent(__dependency_1.UITransform), u && h && u.moveTo(0, this.startPosition.y + h.height + (s - r) * (h.height + 3));
              this._queue.push(i), this._queue.length > this.MAX_NUM && (p = this._queue.shift(), null == (c = p.getComponent(m)) || c.fadeOut());
            }
          case 2:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (n) {
      return t.apply(this, arguments);
    };
  }(), n.show = function (t) {
    null != t && null != t && "" != t && ((0, __dependency_1.log)("Toast.show msg=%s", t), this._show(t));
  }, n.finishShowItem = function (t) {
    for (var n = 0; n < this._queue.length; n++) {
      if (this._queue[n].userData == t.userData) {
        var i;
        this._queue.splice(n, 1), null == (i = t.getComponent(m)) || i.fadeOut();
        break;
      }
    }
  }, n.clear = function () {
    for (var t = null; t = this._queue.pop();) {
      var n = t.getComponent(m);
      n && n.stopAllActions(), t.removeFromParent();
    }
  }, t;
}()).module = "【Tips】", __dependency_1.cclegacy._RF.pop();
