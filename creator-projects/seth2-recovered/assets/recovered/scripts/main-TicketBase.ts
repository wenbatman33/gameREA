// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-TicketBase.ts.js
// SHA256: c6ab26ef7bc77a63ed4e27bd7f220b562eece143187b3492bee69f53235f7580
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as roundDecimal };
var __export_1;
export { __export_1 as TicketBase };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "roundDecimal":
      __export_0 = value;
      break;
    case "TicketBase":
      __export_1 = value;
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var E, D, A, _, H, M, z, W, B, R, U, F, I, O, G, K, Y, j, J, Z, V;
__publish("roundDecimal", X), __dependency_1.cclegacy._RF.push({}, "f344a+d2jhDLZmLDZ0z64Eg", "TicketBase", void 0);
var q = __dependency_1._decorator.ccclass,
  Q = __dependency_1._decorator.property;
function X(t, e) {
  return Math.round(Math.round(t * Math.pow(10, (e || 0) + 1)) / 10) / Math.pow(10, e || 0);
}
__publish("TicketBase", (E = q("TicketBase"), D = Q(__dependency_1.Node), A = Q(__dependency_1.Node), _ = Q(__dependency_1.Node), H = Q({
  type: __dependency_1.SpriteFrame,
  displayName: "紙屑圖案"
}), M = Q({
  type: __dependency_1.Node,
  displayName: "手指節點"
}), z = Q({
  type: __dependency_1.Node,
  displayName: "開獎結果節點"
}), W = Q({
  displayName: "計算進度的範圍寬度"
}), B = Q({
  displayName: "劃線寬度"
}), R = Q({
  displayName: "超過多少完成"
}), E((I = (0, __dependency_0.applyDecoratedDescriptor)((F = function (t) {
  function e() {
    for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
    return e = Reflect.construct(t, [this].concat(n).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "maskNode", I, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "ticketNode", O, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "paperNode", G, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "paperSpriteFrame", K, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "coinNode", Y, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "resultNode", j, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "rectWidth", J, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "lineWidth", Z, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "overProcess", V, (0, __dependency_0.assertThisInitialized)(e)), e.process = 0, e.paperNodePool = new __dependency_1.NodePool("paper"), e.polygonPointsList = [], e.tempDrawPoints = [], e.calcDebugger = !1, e.autoPositionList = [], e._autoStep = 0, e.autoGird = {
      x: 0,
      y: 0
    }, e;
  }
  (0, __dependency_0.inheritsLoose)(e, t);
  var s = e.prototype;
  return s.start = function () {
    this.init();
  }, s.init = function () {
    if (this.maskNode) {
      var t = this.maskNode.getComponent(__dependency_1.Mask);
      t && (t.getComponent(__dependency_1.UITransform).setContentSize(0, 0), t.type = __dependency_1.Mask.Type.GRAPHICS_RECT, t.inverted = !0);
    }
    this.updateAutoPositionList(), this.reset(), this.resetHitBox(), this.addEvents();
  }, s.addEvents = function () {
    var t = this;
    this.node.on(__dependency_1.Node.EventType.TOUCH_START, this.touchStart, this), this.node.on(__dependency_1.Node.EventType.TOUCH_MOVE, this.touchStart, this), this.node.on(__dependency_1.Node.EventType.TOUCH_END, this.touchEnd, this), this.node.on(__dependency_1.Node.EventType.TOUCH_CANCEL, this.touchEnd, this), __dependency_1.input.on(__dependency_1.Input.EventType.KEY_DOWN, function (e) {
      e.keyCode === __dependency_1.KeyCode.KEY_A && t.startAuto(), e.keyCode == __dependency_1.KeyCode.KEY_R && (t.reset(), t.resetHitBox());
    }, this);
  }, s.touchStart = function (t) {
    var e = this.ticketNode.getComponent(__dependency_1.UITransform),
      i = t.getUILocation();
    if (this.coinNode && (this.coinNode.active = !0), e.getBoundingBoxToWorld().contains(i)) {
      var o = e.convertToNodeSpaceAR((0, __dependency_1.v3)(i.x, i.y, 0));
      return this.clearMask((0, __dependency_1.v2)(o.x, o.y)), this.startPaperAnimation(i), !0;
    }
    return this.tempDrawPoints = [], !1;
  }, s.touchEnd = function () {
    this.tempDrawPoints = [], this.calcProgress(), this.coinNode && (this.coinNode.active = !1), Log.e("current progress::::", this.process);
  }, s.startAuto = function () {
    var t = this;
    __dependency_1.Tween.stopAllByTarget(this), this.touchEnd();
    this.clearMask(this.autoPositionList[0]), this.autoStep = 0;
    var e = this.autoPositionList.length - 1;
    (0, __dependency_1.tween)(this).to(2.5, {
      autoStep: e
    }, {
      onUpdate: function (e) {
        var i = Math.floor(t.autoStep);
        i > t._autoStep && (t.autoStep = i);
      }
    }).call(function () {
      t.openClear();
    }).start();
  }, s.openClear = function () {
    this.ticketNode.active = !1, this.onAutoFinish();
  }, s.onAutoFinish = function () {
    this.coinNode.active = !1, this.calcProgress();
  }, s.calcProgress = function () {
    var t = this;
    if (this.ticketNode.active) {
      var e = 0,
        i = this.ticketNode.getComponent(__dependency_1.Graphics);
      this.polygonPointsList.forEach(function (o) {
        o.isHit && (e += 1, t.calcDebugger && i && (i.rect(o.rect.x, o.rect.y, o.rect.width, o.rect.height), i.fillColor = new __dependency_1.Color(216, 18, 18, 255), i.fill()));
      }), this.process = Math.ceil(e / this.polygonPointsList.length * 100);
    } else this.process = 100;
  }, s.startPaperAnimation = function (t, e) {
    for (var i = this, o = (0, __dependency_1.randomRangeInt)(1, 2), r = this.paperNode.getComponent(__dependency_1.UITransform), n = e || r.convertToNodeSpaceAR((0, __dependency_1.v3)(t.x, t.y, 0)), s = 0; s < this.polygonPointsList.length; s++) {
      var a = this.polygonPointsList[s];
      if (__dependency_1.Intersection2D.circleCircle(a.circle.position, a.circle.radius, (0, __dependency_1.v2)(n.x, n.y), this.lineWidth / 2)) {
        a.isHit && (o = 0);
        break;
      }
    }
    for (var c = function () {
        var t = i.getPaperNode();
        t.active = !0, t.parent = i.paperNode, __dependency_1.Tween.stopAllByTarget(t);
        (0, __dependency_1.randomRangeInt)(200, -200), (0, __dependency_1.randomRangeInt)(250, -250);
        var e = (0, __dependency_1.randomRangeInt)(10, 5) / 10;
        t.setScale((0, __dependency_1.v3)(e, e, 1));
        var o = (0, __dependency_1.v2)(n.x, n.y);
        t.setPosition((0, __dependency_1.v3)(o.x, o.y, 0));
        var r = X(e * Math.random(), 3),
          s = t.getComponent(__dependency_1.UIOpacity);
        __dependency_1.Tween.stopAllByTarget(s), s.opacity = 255, (0, __dependency_1.tween)(s).to(.4, {
          opacity: 0
        }).start(), (0, __dependency_1.tween)(t).to(.4, {
          position: (0, __dependency_1.v3)(o.x, o.y - (0, __dependency_1.randomRangeInt)(150, 70), 0),
          scale: (0, __dependency_1.v3)(r, r, r),
          angle: (0, __dependency_1.randomRangeInt)(90, 360)
        }).call(function () {
          t.active = !1, i.paperNodePool.put(t);
        }).start();
      }, p = 0; p < o; p++) c();
  }, s.getPaperNode = function () {
    return this.paperNodePool.size() > 0 ? this.paperNodePool.get() : this.createPaper();
  }, s.createPaper = function () {
    var t = new __dependency_1.Node("paperItem");
    t.addComponent(__dependency_1.UITransform);
    var e = t.addComponent(__dependency_1.Sprite);
    return this.paperSpriteFrame && (e.spriteFrame = this.paperSpriteFrame), t.setParent(this.paperNode), t.layer = __dependency_1.Layers.Enum.UI_2D, t.addComponent(__dependency_1.UIOpacity), t;
  }, s.clearMask = function (t) {
    var e = this.maskNode.getComponent(__dependency_1.Mask)._graphics,
      i = this.tempDrawPoints.length;
    if (this.tempDrawPoints.push(t), this.coinNode.setPosition((0, __dependency_1.v3)(t.x, t.y, 0)), i <= 1) {
      var o = this.lineWidth / 2;
      e.circle(t.x, t.y, o), e.fill(), this.checkHit(t, o);
    } else {
      var r = this.tempDrawPoints[i - 2],
        n = this.tempDrawPoints[i - 1];
      e.moveTo(r.x, r.y), e.lineTo(n.x, n.y), e.lineWidth = this.lineWidth, e.lineCap = __dependency_1.Graphics.LineCap.ROUND, e.lineJoin = __dependency_1.Graphics.LineJoin.ROUND, e.strokeColor = new __dependency_1.Color(255, 255, 255, 255), e.stroke(), this.checkHit(n, this.lineWidth / 2);
    }
  }, s.checkHit = function (t, e) {
    var i = {
      position: (0, __dependency_1.v2)(t.x, t.y),
      radius: e
    };
    this.polygonPointsList.forEach(function (t) {
      t.isHit || (t.isHit = __dependency_1.Intersection2D.circleCircle(t.circle.position, t.circle.radius, i.position, i.radius));
    });
  }, s.reset = function () {
    var t = this;
    this.ticketNode.active = !0, this.maskNode.getComponent(__dependency_1.Mask)._graphics.clear(), this.coinNode.active = !1, this.tempDrawPoints = [], this.polygonPointsList = [], this.process = 0;
    var e = this.ticketNode.getComponent(__dependency_1.Graphics);
    e && e.clear(), this.paperNode.children.forEach(function (e) {
      return t.paperNodePool.put(e);
    }), this.autoStep = 0;
  }, s.isOverProcess = function () {
    return this.process >= this.overProcess;
  }, s.resetHitBox = function () {
    for (var t = this.ticketNode.getComponent(__dependency_1.UITransform), e = this.resultNode.getComponent(__dependency_1.UITransform), i = X(this.rectWidth / 3, 2), o = i / 2, r = 0; r < e.width; r += i) for (var n = 0; n < e.height; n += i) {
      var s = r - e.width / 2,
        a = n - e.height / 2,
        c = e.convertToWorldSpaceAR((0, __dependency_1.v3)(s, a, 0)),
        p = t.convertToNodeSpaceAR(c);
      this.polygonPointsList.push({
        rect: (0, __dependency_1.rect)(p.x, p.y, i, i),
        circle: {
          position: (0, __dependency_1.v2)(p.x + o, p.y + o),
          radius: o
        },
        isHit: !1
      });
    }
  }, s.updateAutoPositionList = function () {
    var t = this.ticketNode.getComponent(__dependency_1.UITransform),
      e = (0, __dependency_1.v2)(this.ticketNode.position.x, this.ticketNode.position.y);
    e = e.add((0, __dependency_1.v2)(-t.width / 2, t.height / 2));
    var i = this.rectWidth / 2;
    this.autoGird = {
      x: Math.floor(t.width / i),
      y: Math.floor(t.height / i)
    };
    for (var o = t.width / this.autoGird.x, r = t.height / this.autoGird.y, n = [], s = 0; s < this.autoGird.y; s++) {
      n[s] = n[s] || [];
      for (var a = 0; a < this.autoGird.x; a++) n[s][a] = (0, __dependency_1.v2)(e.x + o * a, e.y - r * s);
    }
    for (var c = 0; c < n.length; c++) {
      var p, h;
      if (c % 2 == 0) (p = this.autoPositionList).push.apply(p, n[c]);else (h = this.autoPositionList).push.apply(h, n[c].reverse());
    }
  }, (0, __dependency_0.createClass)(e, [{
    key: "autoStep",
    get: function () {
      return this._autoStep;
    },
    set: function (t) {
      if (this._autoStep = t, t > 0) {
        this.coinNode.active = !0;
        var e = this.autoPositionList[Math.floor(t)];
        this.startPaperAnimation((0, __dependency_1.v2)(0, 0), e), this.coinNode.setPosition((0, __dependency_1.v3)(e.x, e.y, 0)), this.clearMask(e);
      }
    }
  }]), e;
}(__dependency_1.Component)).prototype, "maskNode", [D], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), O = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "ticketNode", [A], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), G = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "paperNode", [_], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), K = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "paperSpriteFrame", [H], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), Y = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "coinNode", [M], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), j = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "resultNode", [z], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return null;
  }
}), J = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "rectWidth", [W], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 30;
  }
}), Z = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "lineWidth", [B], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 30;
  }
}), V = (0, __dependency_0.applyDecoratedDescriptor)(F.prototype, "overProcess", [R], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 50;
  }
}), U = F)) || U));
__dependency_1.cclegacy._RF.pop();
