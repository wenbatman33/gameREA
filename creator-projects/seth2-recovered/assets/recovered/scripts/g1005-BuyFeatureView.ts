// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-BuyFeatureView.ts.js
// SHA256: 11bb6b0ff698f01bc92ae1050c5ff71b27451d2a56023b9aaebb28d5d3db52ef
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./framework-StakeModel";
import * as __dependency_4 from "./g1005-GameConfigModel";
import * as __dependency_5 from "./g1005-GameData";
import * as __dependency_6 from "./g1005-GameEvent";
import * as __dependency_7 from "./main-UIView";
import * as __dependency_8 from "./main-UrlUtils";
import * as __dependency_9 from "./g1005-BuyFeatureItem";
var __export_0;
export { __export_0 as BuyFeatureView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BuyFeatureView":
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
  void 0, void 0;
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
var v, w, P, E, V, I, L, T, C;
__dependency_1.cclegacy._RF.push({}, "f4ddfyBcwFJn6Q8Pc5lIgst", "BuyFeatureView", void 0);
var M = __dependency_1._decorator.ccclass,
  S = (__dependency_1._decorator.property, {
    landscape: {
      1: [(0, __dependency_1.v3)(0, -80, 0)],
      2: [(0, __dependency_1.v3)(-138, -80, 0), (0, __dependency_1.v3)(144, -80, 0)],
      3: [(0, __dependency_1.v3)(-264, -68, 0), (0, __dependency_1.v3)(0, -134, 0), (0, __dependency_1.v3)(264, -68, 0)]
    },
    portrait: {
      1: [(0, __dependency_1.v3)(0, -102, 0)],
      2: [(0, __dependency_1.v3)(-148, -102, 0), (0, __dependency_1.v3)(134, -102, 0)],
      3: [(0, __dependency_1.v3)(-240, -50, 0), (0, __dependency_1.v3)(0, -124, 0), (0, __dependency_1.v3)(240, -50, 0)]
    }
  }),
  _ = {
    landscape: {
      1: (0, __dependency_1.v3)(1, 1, 1),
      2: (0, __dependency_1.v3)(1, 1, 1),
      3: (0, __dependency_1.v3)(1, 1, 1)
    },
    portrait: {
      1: (0, __dependency_1.v3)(1, 1, 1),
      2: (0, __dependency_1.v3)(1, 1, 1),
      3: (0, __dependency_1.v3)(.9, .9, .9)
    }
  };
__publish("BuyFeatureView", (v = M("BuyFeatureView"), w = (0, __dependency_2.inject)("popup", __dependency_1.Node), P = (0, __dependency_2.inject)("popup/cancelBtn", __dependency_1.Node), E = (0, __dependency_2.inject)("popup/content", __dependency_1.Node), v((L = (0, __dependency_0.applyDecoratedDescriptor)((I = function (t) {
  function e() {
    for (var e, a = arguments.length, u = new Array(a), r = 0; r < a; r++) u[r] = arguments[r];
    return e = Reflect.construct(t, [this].concat(u).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "popup", L, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "cancelBtn", T, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "content", C, (0, __dependency_0.assertThisInitialized)(e)), e.titleFontTween = null, e.buyFeatureViewData = [], e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var r = e.prototype;
  return r.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, r.init = function () {}, r.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, e.getPrefabUrl = function () {
    return "prefabs/" + __dependency_8.default.getViewModeParam() + "/BuyFeatureView";
  }, r.cancelBtnHandler = function (t) {
    var e = t.type == __dependency_1.NodeEventType.TOUCH_START ? (0, __dependency_1.v3)(1.15, 1.15, 1.15) : (0, __dependency_1.v3)(1.2, 1.2, 1.2);
    this.cancelBtn.children.forEach(function (t) {
      t.setScale(e);
    }), t.type == __dependency_1.NodeEventType.TOUCH_END && this.closePopup();
  }, r.openPopup = function () {
    if (Log.e("max buy feature setting:::::", this.data.getData().superMgRealStakeLimit), this.data.getData().superMgRealStakeLimit > 0) {
      this.buyFeatureViewData = [];
      for (var t = __dependency_3.default.getData().totalStake, e = this.data.getData().definition.buyFeature.slice(), a = 0; a < e.length; a++) {
        var n = e[a],
          i = t * n.featureRate;
        Log.e("featureStake::::::", i), 2 == a ? i <= this.data.getData().superMgRealStakeLimit && this.buyFeatureViewData.push(n) : this.buyFeatureViewData.push(n);
      }
      this.createBuyFeatureItemWithMaxBet();
    } else this.createBuyFeatureItem();
    this.popup.active = !0, this.cancelBtn && this.cancelBtn.on(__dependency_1.NodeEventType.TOUCH_END, this.cancelBtnHandler, this);
  }, r.closePopup = function () {
    App.uiManager.close(e), dispatch(__dependency_6.GameEvent.PLAY_BTM, {
      data: {
        url: __dependency_4.EBTM.CLOSE_FEATURE
      }
    }), this.cancelBtn && this.cancelBtn.off(__dependency_1.NodeEventType.TOUCH_END, this.cancelBtnHandler, this);
  }, r.reset = function () {}, r.show = function () {
    this.node.active = !0;
  }, r.hide = function () {
    this.node.active = !1;
  }, r.addEvents = function () {
    var t = this;
    this.on(__dependency_6.GameEvent.CLOSE_FEATURE_POPUP, function (e) {
      t.closePopup();
    }), this.on(__dependency_6.GameEvent.DISABLE_FEATURE_BUTTON, function () {
      t.disableBuyFeatureItemBtn();
    });
  }, r.createBuyFeatureItem = function () {
    for (var t = this.data.getData().definition, e = __dependency_4.default.getData().filePaths.buyFeatureItemPrefab, a = t.buyFeature, n = a.length, i = __dependency_8.default.getViewModeParam(), u = 0; u < a.length; u++) {
      var r = a[u],
        o = App.cache.get(this.data.module, e).data,
        c = (0, __dependency_1.instantiate)(o);
      c.setPosition(S[i][n][u]), c.setScale(_[i][n]);
      var s = c.addComponent(__dependency_9.BuyFeatureItem);
      this.content.addChild(c), s.init(r.featureIndex);
    }
  }, r.createBuyFeatureItemWithMaxBet = function () {
    Log.e("max buy feature::::::::::", this.data.getData().superMgRealStakeLimit), Log.e("buy feature view data:::::::", this.buyFeatureViewData);
    this.data.getData().definition;
    for (var t = __dependency_4.default.getData().filePaths.buyFeatureItemPrefab, e = this.buyFeatureViewData.length, a = __dependency_8.default.getViewModeParam(), n = 0; n < this.buyFeatureViewData.length; n++) {
      var i = this.buyFeatureViewData[n],
        u = App.cache.get(this.data.module, t).data,
        r = (0, __dependency_1.instantiate)(u);
      r.setPosition(S[a][e][n]), r.setScale(_[a][e]);
      var o = r.addComponent(__dependency_9.BuyFeatureItem);
      this.content.addChild(r), o.init(i.featureIndex);
    }
  }, r.disableBuyFeatureItemBtn = function () {
    for (var t = this.content.children, e = 0; e < t.length; e++) {
      var a = t[e].getComponent(__dependency_9.BuyFeatureItem);
      a && (a.buyBtn.getComponent(__dependency_1.Button).interactable = !1);
    }
    this.cancelBtn && (this.cancelBtn.getComponent(__dependency_1.Button).interactable = !1);
  }, (0, __dependency_0.createClass)(e, [{
    key: "data",
    get: function () {
      return __dependency_5.default.ins;
    }
  }]), e;
}(__dependency_7.default)).prototype, "popup", [w], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), T = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "cancelBtn", [P], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), C = (0, __dependency_0.applyDecoratedDescriptor)(I.prototype, "content", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), V = I)) || V));
__dependency_1.cclegacy._RF.pop();
