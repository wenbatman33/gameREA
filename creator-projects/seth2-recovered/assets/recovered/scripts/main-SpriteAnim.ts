// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-SpriteAnim.ts.js
// SHA256: 9295dc9d8b3517d42f23d48030640304e96cf28336f6759efe939b6df386f3f5
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
(function (i) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (i) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var u, c, m, y, F, f;
__dependency_1.cclegacy._RF.push({}, "39cb6DIWdBASK7XIw4LCbaH", "SpriteAnim", void 0);
var d = __dependency_1._decorator.ccclass,
  g = __dependency_1._decorator.property;
__publish("default", (u = g(__dependency_1.CCFloat), c = g({
  type: __dependency_1.SpriteFrame
}), d((F = (0, __dependency_0.applyDecoratedDescriptor)((y = function (i) {
  function t() {
    for (var t, e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
    return t = Reflect.construct(i, [this].concat(n).slice(1), new.target || t) || this, (0, __dependency_0.initializerDefineProperty)(t, "duration", F, (0, __dependency_0.assertThisInitialized)(t)), (0, __dependency_0.initializerDefineProperty)(t, "spriteFrames", f, (0, __dependency_0.assertThisInitialized)(t)), t.loop = !1, t.playOnload = !1, t.endFunc = null, t.isPlaying = !1, t.playTime = null, t.sprite = null, t;
  }
  (0, __dependency_0.inheritsLoose)(t, i);
  var n = t.prototype;
  return n.onLoad = function () {
    this.isPlaying = !1, this.playTime = 0, this.sprite = this.getComponent(__dependency_1.Sprite), this.sprite || (this.sprite = this.addComponent(__dependency_1.Sprite)), this.playOnload && (this.loop ? this.playLoop() : this.playOnce(null));
  }, n.playLoop = function () {
    this.spriteFrames.length <= 0 || (this.loop = !0, this.endFunc = null, this.isPlaying = !0, this.playTime = 0, this.sprite.spriteFrame = this.spriteFrames[0]);
  }, n.playCount = function (i, t) {
    var e = this,
      s = 0;
    !function r() {
      return e.playOnce(function () {
        (s += 1) === i ? t() : r();
      });
    }();
  }, n.playOnce = function (i) {
    this.spriteFrames.length <= 0 || (this.endFunc = i, this.loop = !1, this.isPlaying = !0, this.playTime = 0, this.sprite.spriteFrame = this.spriteFrames[0]);
  }, n.update = function (i) {
    if (this.isPlaying) {
      this.playTime += i;
      var t = Math.floor(this.playTime / this.duration);
      if (this.loop) {
        for (; t >= this.spriteFrames.length;) t -= this.spriteFrames.length, this.playTime -= this.spriteFrames.length * this.duration;
        this.sprite.spriteFrame = this.spriteFrames[t];
      } else t >= this.spriteFrames.length ? (this.isPlaying = !1, this.endFunc && this.endFunc()) : this.sprite.spriteFrame = this.spriteFrames[t];
    }
  }, t;
}(__dependency_1.Component)).prototype, "duration", [u], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return .1;
  }
}), f = (0, __dependency_0.applyDecoratedDescriptor)(y.prototype, "spriteFrames", [c], {
  configurable: !0,
  enumerable: !0,
  writable: !0,
  initializer: function () {
    return [];
  }
}), m = y)) || m));
__dependency_1.cclegacy._RF.pop();
