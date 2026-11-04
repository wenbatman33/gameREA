// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-BuyFeatureButton.ts.js
// SHA256: 45a14ceb682dc1c29e2f1b5b5cc99f7114a74de624a025b27fc0684db93bec32
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./framework-type2";
import * as __dependency_6 from "./g1005-GameConfigModel";
import * as __dependency_7 from "./g1005-GameData";
import * as __dependency_8 from "./g1005-GameEvent";
var __export_0;
export { __export_0 as BuyFeatureButton };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureButton":
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
(function (t) {
  void 0;
})(__dependency_8);
var S, T, _, b, C;
__dependency_1.cclegacy._RF.push({}, "ecd3eit8QpCgYtF+zRz/IAy", "BuyFeatureButton", void 0);
var A = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("BuyFeatureButton", (S = A("BuyFeatureButton"), T = (0, __dependency_3.inject)("font", __dependency_1.Sprite), S((C = (0, __dependency_0.applyDecoratedDescriptor)((b = function (t) {
  function e() {
    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(a).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "fontSprite", C, (0, __dependency_0.assertThisInitialized)(e)), e.button = null, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this), this.init();
  }, r.start = function () {}, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, r.init = function () {
    this.button = this.node.getComponent(__dependency_1.Button), this.node.on(__dependency_1.NodeEventType.TOUCH_START, this.buyFeatureBtnHandler, this), this.node.on(__dependency_1.NodeEventType.TOUCH_MOVE, this.buyFeatureBtnHandler, this), this.node.on(__dependency_1.NodeEventType.TOUCH_CANCEL, this.buyFeatureBtnHandler, this), this.node.on(__dependency_1.NodeEventType.TOUCH_END, this.buyFeatureBtnHandler, this), this.fontSprite.spriteFrame = this.data.getLocaleSpriteFrame("mg_btn_font");
  }, r.setBuyFeatureBtnActive = function (t) {
    this.node.active = t;
  }, r.buyFeatureBtnHandler = function (t) {
    if (this.button.interactable) {
      var e = t.type == __dependency_1.NodeEventType.TOUCH_START ? (0, __dependency_1.v3)(.95, .95, .95) : (0, __dependency_1.v3)(1, 1, 1);
      this.node.children.forEach(function (t) {
        t.setScale(e);
      }), t.type == __dependency_1.NodeEventType.TOUCH_END && (dispatch(__dependency_8.GameEvent.OPEN_FEATURE_POPUP), dispatch(__dependency_8.GameEvent.PLAY_BTM, {
        data: {
          url: __dependency_6.EBTM.OPEN_FEATURE
        }
      }));
    }
  }, r.updateBuyFeatureStake = function (t) {
    this.data.getData().definition.buyFeature[0].featureRate;
  }, r.updateBuyFeatureBtnStatus = function (t) {
    var e = __dependency_5.ESpinStatus.SPINING === t,
      n = new __dependency_1.Color(255, 255, 255, 255),
      i = new __dependency_1.Color(130, 130, 130, 255);
    this.button.interactable = !e, this.fontSprite.color = e ? i : n;
  }, r.reset = function () {}, r.setData = function (t) {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(__dependency_8.GameEvent.CHANGE_GAME_STYLE, function (e) {
      t.setBuyFeatureBtnActive(e.data);
    }), this.on(__dependency_4.SlotFrameworkEvent.UPDATE_SPIN_STATUS, function (e) {
      t.updateBuyFeatureBtnStatus(e.data);
    });
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_7.default.ins;
    }
  }]), e;
}(__dependency_2.default)).prototype, "fontSprite", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), _ = b)) || _));
__dependency_1.cclegacy._RF.pop();
