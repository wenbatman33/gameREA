// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-OrientationTool.ts.js
// SHA256: 7c56279afcf5cf7226bda98151302c9d0287ad124077b623fad5fa260e0643b2
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-OrientationToolManager";
import * as __dependency_3 from "./main-OrientationToolModule";
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
(function (e) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0, void 0;
})(__dependency_2);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_3);
var D, H, O, B, x, _, E, X, W, j, J, Q, U, Y, Z, q, G, K, $, ee, ie, te, ne, oe, le, ae, re, se, ue, he, de, pe, ce, Me, fe, me, be, ge, ve, ye, ze, we, Se, Ce, Pe, ke, Ne, Ve, Ae, Ie, Le, Te, Fe;
__dependency_1.cclegacy._RF.push({}, "215083TaJlLQb2Fbp1F40xO", "OrientationTool", void 0);
var Re,
  De = __dependency_1._decorator.ccclass,
  He = __dependency_1._decorator.property,
  Oe = __dependency_1._decorator.executeInEditMode,
  Be = __dependency_1._decorator.menu;
!function (e) {
  e[e.None = 0] = "None", e[e.Verticall = 1] = "Verticall", e[e.Horizontal = 2] = "Horizontal";
}(Re || (Re = {}));
__publish("default", (D = Be("自訂工具/直橫版/OrientationTool"), H = He({
  readonly: !0,
  displayName: "直橫版狀態"
}), O = He(__dependency_1.CCBoolean), B = He(__dependency_1.CCBoolean), x = He({
  visible: function () {
    return this.nodeModule && this.showParameter;
  },
  type: __dependency_3.NodeModule
}), _ = He({
  visible: function () {
    return this.nodeModule && this.showParameter;
  },
  type: __dependency_3.NodeModule
}), E = He(__dependency_1.CCBoolean), X = He({
  visible: function () {
    return this.animationModule && this.showParameter;
  },
  type: __dependency_3.AnimationModule
}), W = He({
  visible: function () {
    return this.animationModule && this.showParameter;
  },
  type: __dependency_3.AnimationModule
}), j = He(__dependency_1.CCBoolean), J = He({
  visible: function () {
    return this.spineModule && this.showParameter;
  },
  type: __dependency_3.SpineModule
}), Q = He({
  visible: function () {
    return this.spineModule && this.showParameter;
  },
  type: __dependency_3.SpineModule
}), U = He(__dependency_1.CCBoolean), Y = He({
  visible: function () {
    return this.spriteModule && this.showParameter;
  },
  type: __dependency_3.SpriteModule
}), Z = He({
  visible: function () {
    return this.spriteModule && this.showParameter;
  },
  type: __dependency_3.SpriteModule
}), q = He(__dependency_1.CCBoolean), G = He({
  visible: function () {
    return this.maskModule && this.showParameter;
  },
  type: __dependency_3.MaskModule
}), K = He({
  visible: function () {
    return this.maskModule && this.showParameter;
  },
  type: __dependency_3.MaskModule
}), $ = He(__dependency_1.CCBoolean), ee = He({
  visible: function () {
    return this.labelModule && this.showParameter;
  },
  type: __dependency_3.LabelModule
}), ie = He({
  visible: function () {
    return this.labelModule && this.showParameter;
  },
  type: __dependency_3.LabelModule
}), te = He(__dependency_1.CCBoolean), ne = He({
  visible: function () {
    return this.polygonModule && this.showParameter;
  },
  type: __dependency_3.PolygonModule
}), oe = He({
  visible: function () {
    return this.polygonModule && this.showParameter;
  },
  type: __dependency_3.PolygonModule
}), le = He(__dependency_1.CCBoolean), ae = He({
  type: [__dependency_1.Node],
  visible: function () {
    return this.particleReset;
  }
}), De(re = D(re = Oe((ue = (0, __dependency_0.applyDecoratedDescriptor)((se = function (e) {
  function i() {
    for (var i, t = arguments.length, l = new Array(t), a = 0; a < t; a++) l[a] = arguments[a];
    return i = Reflect.construct(e, [this].concat(l).slice(1), new.target || i) || this, (0, __dependency_0.initializerDefineProperty)(i, "statusDisplay", ue, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "showParameter", he, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "nodeModule", de, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticalNodeModule", pe, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "horizontalNodeModule", ce, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "animationModule", Me, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticalAnimationModule", fe, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "horizontalAnimationModule", me, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "spineModule", be, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticalSpineModule", ge, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "horizontalSpineModule", ve, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "spriteModule", ye, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticalSpriteModule", ze, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "horizontalSpriteModule", we, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "maskModule", Se, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticalMaskModule", Ce, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "horizontalMaskModule", Pe, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "labelModule", ke, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticalLabelModule", Ne, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "horizontalLabelModule", Ve, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "polygonModule", Ae, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "verticalPolygonModule", Ie, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "horizontalPolygonModule", Le, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "particleReset", Te, (0, __dependency_0.assertThisInitialized)(i)), (0, __dependency_0.initializerDefineProperty)(i, "particleList", Fe, (0, __dependency_0.assertThisInitialized)(i)), i.canvas = null, i.mask = null, i.animation = null, i.sprite = null, i.spine = null, i.label = null, i.polygon = null, i.missSpine = !1, i.orientationMode = Re.None, i.isStaticNode = !1, i;
  }
  (0, __dependency_0.inheritsLoose)(i, e);
  var l = i.prototype;
  return l.start = function () {
    var e, i, t;
    (null == (e = __dependency_2.default.getInstance()) || e.addToList(this), this.spriteModule) && (null == (i = this.verticalSpriteModule.spriteFrame) || i.addRef(), null == (t = this.horizontalSpriteModule.spriteFrame) || t.addRef());
  }, l.onEnable = function () {
    __dependency_2.default.orientationState === __dependency_2.ORIENTATION_TYPE.NONE || this.isStaticNode || this.canvasResize(), this.missSpine && (this.setSpineModule(), this.missSpine = !1);
  }, l.onDisable = function () {}, l.onDestroy = function () {
    var e, i, t;
    __dependency_1.director.getScene() && (0, __dependency_1.find)("OrientationToolManager") && (null == (e = __dependency_2.default.getInstance()) || e.removeFormList(this));
    this.spriteModule && (null == (i = this.verticalSpriteModule.spriteFrame) || i.decRef(), null == (t = this.horizontalSpriteModule.spriteFrame) || t.decRef());
  }, l.canvasResize = function () {
    __dependency_2.default.orientationState === __dependency_2.ORIENTATION_TYPE.HORIZONTAL ? this.toHorizontal() : this.toVerticall(), this.resetParticle();
  }, l.updateModules = function () {}, l.resetParticle = function () {
    this.particleList.forEach(function (e) {
      if (e.active) {
        var i = e.getComponent(__dependency_1.ParticleSystem);
        i && i.clear();
      }
    });
  }, l.toVerticall = function () {
    this.orientationMode = Re.Verticall, this.setModules(), this.statusDisplay = "直版";
  }, l.toHorizontal = function () {
    this.orientationMode = Re.Horizontal, this.setModules(), this.statusDisplay = "橫版";
  }, l.updateNodeModuleParameter = function (e) {
    var i = e == Re.Verticall ? this.verticalNodeModule : this.horizontalNodeModule;
    i.isInit = !0, i.nodeActive = this.node.active, i.position.set(this.node.position), i.rotation = this.node.angle, this.node.getScale(i.scale), i.size = this.node.getComponent(__dependency_1.UITransform).contentSize;
  }, l.updateAnimationModule = function (e) {
    if (this.animation = this.node.getComponent(__dependency_1.Animation), 0 != (0, __dependency_1.isValid)(this.animation)) {
      var i = e == Re.Verticall ? this.verticalAnimationModule : this.horizontalAnimationModule;
      i.isInit = !0, i.defalutClip = this.animation.defaultClip;
    }
  }, l.updateSpineModule = function (e) {
    if (this.spine = this.node.getComponent(__dependency_1.sp.Skeleton), 0 != (0, __dependency_1.isValid)(this.spine)) {
      var i = e == Re.Verticall ? this.verticalSpineModule : this.horizontalSpineModule;
      i.isInit = !0, i.animationName = this.spine.animation, i.skeletonData = this.spine.skeletonData;
    }
  }, l.updateSpriteModule = function (e) {
    if (this.sprite = this.node.getComponent(__dependency_1.Sprite), 0 != (0, __dependency_1.isValid)(this.sprite)) {
      var i = e == Re.Verticall ? this.verticalSpriteModule : this.horizontalSpriteModule;
      i.isInit = !0, i.spriteFrame = this.sprite.spriteFrame, i.material = this.sprite.getMaterial(0);
    }
  }, l.updateMaskModule = function (e) {
    if (this.mask = this.node.getComponent(__dependency_1.Mask), 0 != (0, __dependency_1.isValid)(this.mask)) {
      var i = e == Re.Verticall ? this.verticalMaskModule : this.horizontalMaskModule;
      i.isInit = !0, i.spriteFrame = this.mask.spriteFrame, i.alphaThreshold = this.mask.alphaThreshold;
    }
  }, l.updateLableModule = function (e) {
    if (this.label = this.node.getComponent(__dependency_1.Label), 0 != (0, __dependency_1.isValid)(this.label)) {
      var i = e == Re.Verticall ? this.verticalLabelModule : this.horizontalLabelModule;
      i.isInit = !0, i.fontSize = this.label.fontSize, i.lineHeight = this.label.lineHeight, i.spacingX = this.label.spacingX, i.font = this.label.font, i.isBold = this.label.isBold;
    }
  }, l.updatePolygonModule = function (e) {
    if (this.polygon = this.node.getComponent(__dependency_1.PolygonCollider2D), 0 != (0, __dependency_1.isValid)(this.polygon)) {
      var i = e == Re.Verticall ? this.verticalPolygonModule : this.horizontalPolygonModule;
      i.isInit = !0, i.points = this.polygon.points;
    }
  }, l.setModules = function () {
    this.orientationMode === Re.None && (this.orientationMode = __dependency_1.view.getDesignResolutionSize().height > __dependency_1.view.getDesignResolutionSize().width ? Re.Verticall : Re.Horizontal), this.nodeModule && this.setNodeModule(), this.animationModule && this.setAnimationModule(), this.spineModule && this.setSpineModule(), this.spriteModule && this.setSpriteModule(), this.maskModule && this.setMaskModule(), this.labelModule && this.setLableModule(), this.polygonModule && this.setPolygonModule();
  }, l.setNodeModule = function () {
    var e = this.orientationMode == Re.Verticall ? this.verticalNodeModule : this.horizontalNodeModule;
    0 != e.isInit && (this.node.active = e.nodeActive, this.node.setPosition(e.position), this.node.getComponent(__dependency_1.UITransform).setContentSize(e.size), e.richTextSyncMaxWidth && this.node.getComponent(__dependency_1.RichText) && (this.node.getComponent(__dependency_1.RichText).maxWidth = this.node.getComponent(__dependency_1.UITransform).width), this.node.angle = e.rotation, this.node.angle = e.rotation, this.node.setScale(e.scale));
  }, l.setAnimationModule = function () {
    if (this.animation = this.node.getComponent(__dependency_1.Animation), 0 != (0, __dependency_1.isValid)(this.animation)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalAnimationModule : this.horizontalAnimationModule;
      if (0 != e.isInit && null != e.defalutClip) {
        for (var i = this.getNowAnimationPlayClipName(this.animation), t = this.animation.clips, n = !1, o = 0; o < t.length; o++) if (t[o] == e.defalutClip) {
          n = !0;
          break;
        }
        if (n && this.animation.addClip(e.defalutClip, e.defalutClip.name), this.animation.defaultClip = e.defalutClip, i) {
          var l = this.animation.getState(i),
            a = 0;
          (0, __dependency_1.isValid)(l) && (a = l.time), this.animation.crossFade(e.defalutClip.name, a);
        }
      }
    }
  }, l.getNowAnimationPlayClipName = function (e) {
    for (var i = e.clips, t = 0; t < i.length; t++) {
      if (e.getState(i[t].name).isPlaying) return i[t].name;
    }
    return null;
  }, l.changeName = function (e, i) {
    for (var t = "", n = e.split("_"), o = 0; o < n.length - 1; o++) t += n[o] + "_";
    return t += i == Re.Verticall ? "V" : "H";
  }, l.setSpineModule = function () {
    if ((this.spine = this.node.getComponent(__dependency_1.sp.Skeleton), 0 != (0, __dependency_1.isValid)(this.spine)) && 0 != (this.orientationMode == Re.Verticall ? this.verticalSpineModule : this.horizontalSpineModule).isInit) {
      var e = this.spine.getCurrent(0);
      if (null != e) {
        var i = e.trackTime,
          t = this.changeName(this.spine.animation, this.orientationMode),
          n = e.listener;
        if (null != this.spine.findAnimation(t)) {
          this.spine.animation = t;
          var o = this.spine.setAnimation(0, t, e.loop);
          o.trackTime = i, o.listener = n;
        } else (0, __dependency_1.error)("【錯誤】" + this.node.name + " 找不到對應animation的名稱，確認Spine的Animation名稱是否符合命名規範");
      } else this.missSpine = !0;
    }
  }, l.setSpriteModule = function () {
    if (this.sprite = this.node.getComponent(__dependency_1.Sprite), 0 != (0, __dependency_1.isValid)(this.sprite)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalSpriteModule : this.horizontalSpriteModule;
      0 != e.isInit && (this.sprite.spriteFrame = e.spriteFrame);
    }
  }, l.setMaskModule = function () {
    if (this.mask = this.node.getComponent(__dependency_1.Mask), 0 != (0, __dependency_1.isValid)(this.mask)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalMaskModule : this.horizontalMaskModule;
      0 != e.isInit && (this.mask.spriteFrame = e.spriteFrame, this.mask.alphaThreshold = e.alphaThreshold);
    }
  }, l.setLableModule = function () {
    if (this.label = this.node.getComponent(__dependency_1.Label), 0 != (0, __dependency_1.isValid)(this.label)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalLabelModule : this.horizontalLabelModule;
      0 != e.isInit && (this.label.fontSize = e.fontSize, this.label.lineHeight = e.lineHeight, this.label.spacingX = e.spacingX, e.font && (this.label.font = e.font), this.label.isBold = e.isBold);
    }
  }, l.setPolygonModule = function () {
    if (this.polygon = this.node.getComponent(__dependency_1.PolygonCollider2D), 0 != (0, __dependency_1.isValid)(this.polygon)) {
      var e = this.orientationMode == Re.Verticall ? this.verticalPolygonModule : this.horizontalPolygonModule;
      0 != e.isInit && (this.polygon.points = e.points);
    }
  }, l.getCanvas = function () {
    if (__dependency_1.director.getScene().getChildByName("Canvas")) {
      if (0 == (0, __dependency_1.isValid)(this.canvas)) {
        var e = __dependency_1.director.getScene().getChildByName("Canvas");
        if (0 == (0, __dependency_1.isValid)(e)) return (0, __dependency_1.log)("找不到Canvas"), null;
        this.canvas = e.getComponent(__dependency_1.Canvas);
      }
      return this.canvas;
    }
  }, l.getNowOrientationMode = function () {
    var e = this.getCanvas();
    return 0 == (0, __dependency_1.isValid)(e) ? null : __dependency_1.view.getDesignResolutionSize().width > __dependency_1.view.getDesignResolutionSize().height ? Re.Horizontal : Re.Verticall;
  }, i;
}(__dependency_1.Component)).prototype, "statusDisplay", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return "";
  }
}), he = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "showParameter", [O], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), de = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "nodeModule", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), pe = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "verticalNodeModule", [x], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.NodeModule();
  }
}), ce = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "horizontalNodeModule", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.NodeModule();
  }
}), Me = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "animationModule", [E], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), fe = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "verticalAnimationModule", [X], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.AnimationModule();
  }
}), me = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "horizontalAnimationModule", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.AnimationModule();
  }
}), be = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "spineModule", [j], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), ge = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "verticalSpineModule", [J], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.SpineModule();
  }
}), ve = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "horizontalSpineModule", [Q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.SpineModule();
  }
}), ye = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "spriteModule", [U], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), ze = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "verticalSpriteModule", [Y], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.SpriteModule();
  }
}), we = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "horizontalSpriteModule", [Z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.SpriteModule();
  }
}), Se = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "maskModule", [q], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ce = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "verticalMaskModule", [G], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.MaskModule();
  }
}), Pe = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "horizontalMaskModule", [K], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.MaskModule();
  }
}), ke = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "labelModule", [$], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ne = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "verticalLabelModule", [ee], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.LabelModule();
  }
}), Ve = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "horizontalLabelModule", [ie], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.LabelModule();
  }
}), Ae = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "polygonModule", [te], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Ie = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "verticalPolygonModule", [ne], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.PolygonModule();
  }
}), Le = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "horizontalPolygonModule", [oe], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return new __dependency_3.PolygonModule();
  }
}), Te = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "particleReset", [le], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !1;
  }
}), Fe = (0, __dependency_0.applyDecoratedDescriptor)(se.prototype, "particleList", [ae], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), re = se)) || re) || re) || re));
__dependency_1.cclegacy._RF.pop();
