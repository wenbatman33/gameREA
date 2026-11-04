// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-DragItem.ts.js
// SHA256: ced740c4b8a8f43eae1fe0dbe998323f265762559db3f731eec03a1bf9e9c050
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
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
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var T, C, v, y, P, S;
__dependency_1.cclegacy._RF.push({}, "f24a6nclRRPhLFywmOCMGvi", "DragItem", void 0);
var D = __dependency_1._decorator.ccclass,
  m = __dependency_1._decorator.property;
__publish("default", (T = m({
  type: __dependency_1.Node,
  tooltip: "拖动去的指定区域节点列表"
}), C = m({
  tooltip: "是否吸附到中点心"
}), D((P = (0, __dependency_0.applyDecoratedDescriptor)((y = function (t) {
  function o() {
    for (var o, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
    return o = Reflect.construct(t, [this].concat(s).slice(1), new.target || o) || this, (0, __dependency_0.initializerDefineProperty)(o, "targetOfDragList", P, (0, __dependency_0.assertThisInitialized)(o)), (0, __dependency_0.initializerDefineProperty)(o, "isCenter", S, (0, __dependency_0.assertThisInitialized)(o)), o._onDragComp = null, o._oldPos = null, o._target = null, o._touchStartPoint = new __dependency_1.Vec2(), o;
  }
  (0, __dependency_0.inheritsLoose)(o, t);
  var h = o.prototype;
  return h.start = function () {
    this._oldPos = this.node.getPosition();
  }, h.onEnable = function () {
    this.node.on(__dependency_1.NodeEventType.TOUCH_MOVE, this._onTouchMove, this), this.node.on(__dependency_1.NodeEventType.TOUCH_START, this._onTouchStart, this), this.node.on(__dependency_1.NodeEventType.TOUCH_END, this._onTouchEnd, this), this.node.on(__dependency_1.NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
  }, h.onDisable = function () {
    this.node.off(__dependency_1.NodeEventType.TOUCH_MOVE, this._onTouchMove, this), this.node.off(__dependency_1.NodeEventType.TOUCH_START, this._onTouchStart, this), this.node.off(__dependency_1.NodeEventType.TOUCH_END, this._onTouchEnd, this), this.node.off(__dependency_1.NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
  }, h._onTouchStart = function (t) {
    this._touchStartPoint.set(t.getUILocation());
    var o = this._touchStartPoint.x - __dependency_1.view.getVisibleSize().width / 2 - this.node.position.x,
      i = this._touchStartPoint.y - __dependency_1.view.getVisibleSize().height / 2 - this.node.position.y;
    this._touchStartPoint = new __dependency_1.Vec2(o, i);
  }, h._onTouchMove = function (t) {
    var o = new __dependency_1.Vec2().set(t.getUILocation()),
      i = o.x - __dependency_1.view.getVisibleSize().width / 2 - this._touchStartPoint.x,
      e = o.y - __dependency_1.view.getVisibleSize().height / 2 - this._touchStartPoint.y;
    this.node.setPosition((0, __dependency_1.v3)(i, e, 0));
  }, h._onTouchCancel = function (t) {
    this.clearTouch(t);
  }, h._onTouchEnd = function (t) {
    this.clearTouch(t);
  }, h.clearTouch = function (t) {
    if (this._touchStartPoint = new __dependency_1.Vec2(0, 0), 0 !== this.targetOfDragList.length) {
      for (var o, i = !1, e = (0, __dependency_0.createForOfIteratorHelperLoose)(this.targetOfDragList); !(o = e()).done;) {
        var n = o.value,
          r = this._withinTarget(n, t);
        if (r.isIn) {
          this._target = n, i = !0, r.offsetX, r.offsetY;
          break;
        }
      }
      if (i) {
        if (this.isCenter) {
          var h = this.target.worldPosition,
            a = this.node.parent.getComponent(__dependency_1.UITransform).convertToNodeSpaceAR(h);
          this.node.setPosition(a);
        }
        this._onDragComp && this._onDragComp(this.node, this._target);
      } else this._target = null, this.node.setPosition(this._oldPos);
    }
  }, h._withinTarget = function (t, o) {
    var i = t.getComponent(__dependency_1.UITransform).getBoundingBox(),
      e = o.getUILocation(),
      n = t.parent.getComponent(__dependency_1.UITransform).convertToNodeSpaceAR((0, __dependency_1.v3)(e.x, e.y, 0)),
      s = {},
      r = i.contains((0, __dependency_1.v2)(n.x, n.y));
    if (s.isIn = r, r) {
      var h = i.x + .5 * i.width,
        a = i.y + .5 * i.height;
      s.offsetX = n.x - h, s.offsetY = n.y - a;
    }
    return s;
  }, h.goBack = function () {
    this._oldPos && this.node.setPosition(this._oldPos);
  }, (0, __dependency_0.createClass)(o, [{
    key: "target",
    get: function () {
      return this._target;
    }
  }, {
    key: "onDragComp",
    set: function (t) {
      this._onDragComp = t;
    }
  }]), o;
}(__dependency_1.Component)).prototype, "targetOfDragList", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), S = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "isCenter", [C], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return !0;
  }
}), v = y)) || v));
__dependency_1.cclegacy._RF.pop();
