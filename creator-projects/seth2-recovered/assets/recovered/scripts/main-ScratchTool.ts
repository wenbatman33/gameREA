// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ScratchTool.ts.js
// SHA256: 2d8060638e28c8c86cbc31ab5ef3381d5743ec03b3dbe34fcb6c580474a50851
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as ScratchTool };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ScratchTool":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var g, T, _, d, v;
__dependency_1.cclegacy._RF.push({}, "fbee07bdSVLB5P+gsWN1pmX", "ScratchTool", void 0);
var f = __dependency_1._decorator.ccclass,
  y = __dependency_1._decorator.property;
__publish("ScratchTool", (g = f("ScratchTool"), T = y({
  tooltip: "刮痕的寬度"
}), g((v = (0, __dependency_0.applyDecoratedDescriptor)((d = function (t) {
  function i() {
    for (var i, o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
    return (i = Reflect.construct(t, [this].concat(r).slice(1), new.target || i) || this)._graphics = null, (0, __dependency_0.initializerDefineProperty)(i, "lineWidth", v, (0, __dependency_0.assertThisInitialized)(i)), i;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var r = i.prototype;
  return r.onLoad = function () {
    this._graphics = this.getComponent(__dependency_1.Graphics), null == this._graphics && (this._graphics = this.node.addComponent(__dependency_1.Graphics)), this.node.getComponent(__dependency_1.Mask).type = __dependency_1.Mask.Type.GRAPHICS_STENCIL, this._graphics.lineWidth = this.lineWidth, this._graphics.lineJoin = __dependency_1.Graphics.LineJoin.ROUND, this._graphics.lineCap = __dependency_1.Graphics.LineCap.ROUND, this._graphics.stroke(), this.node.on(__dependency_1.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.on(__dependency_1.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
  }, r.onTouchStart = function (t) {
    var i = t.getUILocation(),
      o = this.convertToLocal(i);
    this._graphics.moveTo(o.x, o.y);
  }, r.onTouchMove = function (t) {
    var i = t.getUILocation(),
      o = this.convertToLocal(i);
    this._graphics.lineWidth = this.lineWidth, this._graphics.lineJoin = __dependency_1.Graphics.LineJoin.ROUND, this._graphics.lineCap = __dependency_1.Graphics.LineCap.ROUND, this._graphics.lineTo(o.x, o.y), this._graphics.stroke();
  }, r.convertToLocal = function (t) {
    return this.getComponent(__dependency_1.UITransform).convertToNodeSpaceAR(new __dependency_1.Vec3(t.x, t.y, 0));
  }, r.resetScratch = function () {
    this._graphics.clear(), this._graphics.stroke();
  }, i;
}(__dependency_1.Component)).prototype, "lineWidth", [T], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return 60;
  }
}), _ = d)) || _));
__dependency_1.cclegacy._RF.pop();
