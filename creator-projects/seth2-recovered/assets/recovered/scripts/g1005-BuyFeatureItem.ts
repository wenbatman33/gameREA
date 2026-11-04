// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-BuyFeatureItem.ts.js
// SHA256: abd544d2f871c0e73cfbcb38bbe47b9ecfa06da0047af71e18394f1fcd33bf94
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./g1005-GameData";
import * as __dependency_3 from "./framework-StakeModel";
import * as __dependency_4 from "./framework-CmmSlotUtils";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-SettingsModel";
import * as __dependency_7 from "./framework-ObjectUtils";
import * as __dependency_8 from "./g1005-GameSender";
import * as __dependency_9 from "./framework-DefinitionModel";
import * as __dependency_10 from "./framework-MathUtil";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./main-Bundles";
import * as __dependency_13 from "./framework-LoadUtils";
import * as __dependency_14 from "./g1005-GameConfigModel";
import * as __dependency_15 from "./g1005-GameEvent";
var __export_0;
export { __export_0 as BuyFeatureItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureItem":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
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
(function (t) {
  void 0;
})(__dependency_9);
(function (t) {
  void 0;
})(__dependency_10);
(function (t) {
  void 0;
})(__dependency_11);
(function (t) {
  void 0;
})(__dependency_12);
(function (t) {
  void 0;
})(__dependency_13);
(function (t) {
  void 0;
})(__dependency_14);
(function (t) {
  void 0;
})(__dependency_15);
var v, U, O, T, C, M, R, w, A, H, N, L, z, V, G;
__dependency_1.cclegacy._RF.push({}, "5e21dDRkFBDG4KOKn6WeTXR", "BuyFeatureItem", void 0);
var j = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("BuyFeatureItem", (v = j("BuyFeatureItem"), U = (0, __dependency_5.inject)("stake", __dependency_1.Label), O = (0, __dependency_5.inject)("buyBtn", __dependency_1.Node), T = (0, __dependency_5.inject)("fontSprite", __dependency_1.Sprite), C = (0, __dependency_5.inject)("iconSprite", __dependency_1.Sprite), M = (0, __dependency_5.inject)("ruleSprite", __dependency_1.Sprite), R = (0, __dependency_5.inject)("buyBtn/font", __dependency_1.Sprite), v((H = (0, __dependency_0.applyDecoratedDescriptor)((A = function (t) {
  function e() {
    for (var e, n = arguments.length, r = new Array(n), u = 0; u < n; u++) r[u] = arguments[u];
    return e = Reflect.construct(t, [this].concat(r).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "stake", H, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "buyBtn", N, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "fontSprite", L, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "iconSprite", z, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "ruleSprite", V, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "buyBtnFontSprite", G, (0, __dependency_0.assertThisInitialized)(e)), e._buyFeatureIndex = 0, e._feature = "", e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var u = e.prototype;
  return u.init = function (t) {
    var e = this;
    this.buyFeatureIndex = t;
    var n = __dependency_14.default.getData().filePaths.localeSpriteFrame;
    if (this.fontSprite && (this.fontSprite.spriteFrame = __dependency_13.LoadUtils.getDirSp(this.data.module, n, "buy_feature_font_0" + (t + 1))), this.ruleSprite && (this.ruleSprite.spriteFrame = __dependency_13.LoadUtils.getDirSp(this.data.module, n, "buy_feature_info_font_0" + (this.buyFeatureIndex + 1))), this.iconSprite) {
      var i = __dependency_14.default.getData().filePaths.common;
      this.iconSprite.spriteFrame = __dependency_13.LoadUtils.getDirSp(this.data.module, i, "buy_feature_board_icon_" + (this.buyFeatureIndex + 1));
    }
    this.buyBtnFontSprite && (this.buyBtnFontSprite.spriteFrame = __dependency_13.LoadUtils.getDirSp(this.data.module, n, "buy_feature_btn_font_normal"), this.buyBtn.on(__dependency_1.NodeEventType.MOUSE_ENTER, function () {
      e.buyBtnFontSprite.spriteFrame = __dependency_13.LoadUtils.getDirSp(e.data.module, n, "buy_feature_btn_font_hover");
    }), this.buyBtn.on(__dependency_1.NodeEventType.MOUSE_LEAVE, function () {
      e.buyBtnFontSprite.spriteFrame = __dependency_13.LoadUtils.getDirSp(e.data.module, n, "buy_feature_btn_font_normal");
    })), this.updataBuyFeatureStake(), this.addEvents();
  }, u.onDestroy = function () {
    this.buyBtn && this.buyBtn.off(__dependency_1.NodeEventType.TOUCH_END, this.confirmBtnHandler, this), this.buyBtnFontSprite && (this.buyBtnFontSprite.node.off(__dependency_1.NodeEventType.MOUSE_ENTER), this.buyBtnFontSprite.node.off(__dependency_1.NodeEventType.MOUSE_LEAVE));
  }, u.addEvents = function () {
    this.buyBtn && this.buyBtn.on(__dependency_1.NodeEventType.TOUCH_END, this.confirmBtnHandler, this);
  }, u.updataBuyFeatureStake = function () {
    var t = __dependency_3.default.getData().totalStake * this.data.getData().definition.buyFeature[this.buyFeatureIndex].featureRate;
    this.stake && (this.stake.string = __dependency_4.CmmSlotUtils.formatNumber(t));
  }, u.needUpdateStake = function () {
    var t = {
        stakeIndex: __dependency_6.default.stakeIndex,
        ratioIndex: __dependency_6.default.ratioIndex
      },
      e = {
        stakeIndex: __dependency_3.default.stakeIndex,
        ratioIndex: __dependency_3.default.ratioIndex
      },
      n = __dependency_7.ObjectUtils.diffObjects(t, e);
    return Object.keys(n).length > 0;
  }, u.checkBalance = function (t) {
    var e = __dependency_9.default.getData().winlineDefs.length,
      n = this.data.getData().definition.buyFeature,
      i = t.stakeValue,
      a = t.ratioValue,
      r = __dependency_10.default.multiply(a, i, e) * n[this.buyFeatureIndex].featureRate;
    return __dependency_11.default.getData().player.balance.amount - r >= 0;
  }, u.sendFeatureReq = function () {
    var t = {
      ratioIndex: __dependency_3.default.ratioIndex,
      ratioValue: __dependency_3.default.ratioValue,
      stakeIndex: __dependency_3.default.stakeIndex,
      stakeValue: __dependency_3.default.stakeValue
    };
    if (this.checkBalance(t)) dispatch(__dependency_15.GameEvent.DISABLE_FEATURE_BUTTON), this.buyBtn.off(__dependency_1.NodeEventType.TOUCH_END, this.confirmBtnHandler, this), App.senderManager.get(__dependency_8.GameSender).buyFeature(t, this.needUpdateStake(), this.buyFeatureIndex);else {
      var e = {
        text: App.getLanguage("insufficientFund", [], __dependency_12.EBundles[__dependency_12.EBundles.wrapper]),
        confirmCb: function () {},
        bbrCb: function () {}
      };
      App.gameAlert.show(e);
    }
  }, u.confirmBtnHandler = function (t) {
    t.type == __dependency_1.NodeEventType.TOUCH_START ? (0, __dependency_1.v3)(1.15, 1.15, 1.15) : (0, __dependency_1.v3)(1.2, 1.2, 1.2);
    t.type == __dependency_1.NodeEventType.TOUCH_END && (this.data.getData().currentBuyFeatureIndex = this.buyFeatureIndex, this.sendFeatureReq());
  }, (0, __dependency_0.createClass)(e, [{
    key: "buyFeatureIndex",
    get: function () {
      return this._buyFeatureIndex;
    },
    set: function (t) {
      this._buyFeatureIndex = t;
    }
  }, {
    key: "feature",
    get: function () {
      return this._feature;
    },
    set: function (t) {
      this._feature = t;
      for (var e = this.data.getData().definition.buyFeature, n = 0; n < e.length; n++) {
        var i = e[n];
        if (i.feature == t) {
          this.buyFeatureIndex = i.featureIndex;
          break;
        }
      }
    }
  }, {
    key: "data",
    get: function () {
      return __dependency_2.default.ins;
    }
  }]), e;
}(__dependency_1.Component)).prototype, "stake", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), N = (0, __dependency_0.applyDecoratedDescriptor)(A.prototype, "buyBtn", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), L = (0, __dependency_0.applyDecoratedDescriptor)(A.prototype, "fontSprite", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), z = (0, __dependency_0.applyDecoratedDescriptor)(A.prototype, "iconSprite", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(A.prototype, "ruleSprite", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = (0, __dependency_0.applyDecoratedDescriptor)(A.prototype, "buyBtnFontSprite", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), w = A)) || w));
__dependency_1.cclegacy._RF.pop();
