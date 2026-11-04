// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WrapperView.ts.js
// SHA256: 5d32647ebe4d8d4e541de2dd6f2240b6992f2d8afe7f9f6f51b485a369fb4c44
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-CmmUtils";
import * as __dependency_5 from "./main-GameViewBase";
import * as __dependency_6 from "./main-WrapperData";
import * as __dependency_7 from "./main-WrapperLogic";
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
(function (t) {
  void 0;
})(__dependency_6);
(function (t) {
  void 0;
})(__dependency_7);
var y, B, C, T, w;
__dependency_1.cclegacy._RF.push({}, "d0f3bzgoghKnopHyB5KfGCs", "WrapperView", void 0);
var E = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("default", (y = (0, __dependency_2.inject)("content/bbr", __dependency_1.Node), E(((w = function (t) {
  function n() {
    for (var n, e = arguments.length, s = new Array(e), r = 0; r < e; r++) s[r] = arguments[r];
    return n = Reflect.construct(t, [this].concat(s).slice(1), new.target || n) || this, (0, __dependency_0.initializerDefineProperty)(n, "bbr", T, (0, __dependency_0.assertThisInitialized)(n)), n.title = null, n.btnContent = null, n.lobbyBtn = null, n.gamebtn = null, n.tween = null, n;
  }
  (0, __dependency_0.inheritsLoose)(n, t);
  var r = n.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.setNode(), this.setEventTouch();
  }, r.start = function () {
    var t = this;
    this.enableBBR(!0), this.init(), this.serviceInit(), this.coundown(function () {
      t.setBtnContentActive(!0);
    }), this.data.ENTER_SLOT_VIEW;
  }, r.onDestroy = function () {
    this.tween.stop();
  }, n.getPrefabUrl = function () {
    return "@WrapperView";
  }, r.init = function () {
    this.setBtnContentActive(!1);
  }, r.setNode = function () {
    this.title = (0, __dependency_1.find)("content/title", this.node).getComponent(__dependency_1.Label), this.btnContent = (0, __dependency_1.find)("content/btnContent", this.node), this.lobbyBtn = (0, __dependency_1.find)("lobbyBtn", this.btnContent), this.gamebtn = (0, __dependency_1.find)("gameBtn", this.btnContent);
  }, r.setEventTouch = function () {
    var t = this;
    this.lobbyBtn.on(__dependency_1.NodeEventType.TOUCH_END, function () {
      t.enterBundle(__dependency_3.EBundles[__dependency_3.EBundles.slotFramework]);
    }), this.gamebtn.on(__dependency_1.NodeEventType.TOUCH_END, function () {
      t.enterBundle(__dependency_3.EBundles[__dependency_3.EBundles.g1002]);
    });
  }, r.setTitle = function (t) {
    this.title.string = "\n        Wrapper\n        " + t + "s \n        go to GameView\n        Game 前往 Game\n        ";
  }, r.setBtnContentActive = function (t) {
    this.btnContent.active = t;
  }, r.coundown = function (t) {
    var n = this,
      e = {
        time: 2,
        totalTime: 2
      };
    this.tween = (0, __dependency_1.tween)(e).to(e.totalTime, {
      time: 0
    }, {
      onUpdate: function () {
        e.totalTime = e.time, n.setTitle(__dependency_4.CmmUtils.roundDecimal(e.totalTime, 0));
      },
      onComplete: function (n) {
        t && t(n);
      }
    }).start();
  }, r.serviceInit = function () {}, r.enableBBR = function (t) {
    this.bbr.active = t;
  }, r.addEvents = function () {
    t.prototype.addEvents.call(this);
  }, (0, __dependency_0.createClass)(n, [{
    key: "data",
    get: function () {
      return App.dataCenter.get(__dependency_6.default);
    }
  }]), n;
}(__dependency_5.default)).logicType = __dependency_7.WrapperLogic, T = (0, __dependency_0.applyDecoratedDescriptor)((C = w).prototype, "bbr", [y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: null
}), B = C)) || B));
__dependency_1.cclegacy._RF.pop();
