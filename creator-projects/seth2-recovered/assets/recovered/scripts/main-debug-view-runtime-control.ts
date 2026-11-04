// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-debug-view-runtime-control.ts.js
// SHA256: 0320eb8f4f3dca7256ae49d9f99b0d8455a4600f34256de5670e16fbc27e1c5e
// Capability bridge: reuse a real Editor/Web builtin; absent Web builtin uses the captured implementation.
import { EDITOR as __SETH_EDITOR__ } from "cc/env";
import { js } from "cc";
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as DebugViewRuntimeControl };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DebugViewRuntimeControl":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
const __creatorBuiltinDebug = js.getClassById("b2bd1+njXxJxaFY3ymm06WU") || js.getClassByName('internal.DebugViewRuntimeControl');
if (__creatorBuiltinDebug || __SETH_EDITOR__) {
  if (!__creatorBuiltinDebug) throw Error('Creator editor builtin DebugViewRuntimeControl is unavailable');
  __publish('DebugViewRuntimeControl', __creatorBuiltinDebug);
} else {
  (function (t) {
    void 0, void 0, void 0, void 0;
  })(__dependency_0);
  (function (t) {
    void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
  })(__dependency_1);
  var L, f, M, b, v, x, E, S, I;
  __dependency_1.cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", void 0);
  var A = __dependency_1._decorator.ccclass,
    y = __dependency_1._decorator.property;
  __publish("DebugViewRuntimeControl", (L = A("internal.DebugViewRuntimeControl"), f = y(__dependency_1.Node), M = y(__dependency_1.Node), b = y(__dependency_1.Node), L((E = (0, __dependency_0.applyDecoratedDescriptor)((x = function (t) {
    function e() {
      for (var e, o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
      return e = Reflect.construct(t, [this].concat(s).slice(1), new.target || e) || this, (0, __dependency_0.initializerDefineProperty)(e, "compositeModeToggle", E, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "singleModeToggle", S, (0, __dependency_0.assertThisInitialized)(e)), (0, __dependency_0.initializerDefineProperty)(e, "EnableAllCompositeModeButton", I, (0, __dependency_0.assertThisInitialized)(e)), e._single = 0, e.strSingle = ["No Single Debug", "Vertex Color", "Vertex Normal", "Vertex Tangent", "World Position", "Vertex Mirror", "Face Side", "UV0", "UV1", "UV Lightmap", "Project Depth", "Linear Depth", "Fragment Normal", "Fragment Tangent", "Fragment Binormal", "Base Color", "Diffuse Color", "Specular Color", "Transparency", "Metallic", "Roughness", "Specular Intensity", "IOR", "Direct Diffuse", "Direct Specular", "Direct All", "Env Diffuse", "Env Specular", "Env All", "Emissive", "Light Map", "Shadow", "AO", "Fresnel", "Direct Transmit Diffuse", "Direct Transmit Specular", "Env Transmit Diffuse", "Env Transmit Specular", "Transmit All", "Direct TRT", "Env TRT", "TRT All", "Fog"], e.strComposite = ["Direct Diffuse", "Direct Specular", "Env Diffuse", "Env Specular", "Emissive", "Light Map", "Shadow", "AO", "Normal Map", "Fog", "Tone Mapping", "Gamma Correction", "Fresnel", "Transmit Diffuse", "Transmit Specular", "TRT", "TT"], e.strMisc = ["CSM Layer Coloration", "Lighting With Albedo"], e.compositeModeToggleList = [], e.singleModeToggleList = [], e.miscModeToggleList = [], e.textComponentList = [], e.labelComponentList = [], e.textContentList = [], e.hideButtonLabel = void 0, e._currentColorIndex = 0, e.strColor = ["<color=#ffffff>", "<color=#000000>", "<color=#ff0000>", "<color=#00ff00>", "<color=#0000ff>"], e.color = [__dependency_1.Color.WHITE, __dependency_1.Color.BLACK, __dependency_1.Color.RED, __dependency_1.Color.GREEN, __dependency_1.Color.BLUE], e;
    }
    (0, __dependency_0.inheritsLoose)(e, t);
    var s = e.prototype;
    return s.start = function () {
      if (this.node.parent.getComponent(__dependency_1.Canvas)) {
        var t = this.node.parent.getComponent(__dependency_1.UITransform),
          e = .5 * t.width,
          o = .5 * t.height,
          i = .1 * e - e,
          n = o - .1 * o,
          s = this.node.getChildByName("MiscMode"),
          l = (0, __dependency_1.instantiate)(s);
        l.parent = this.node, l.name = "Buttons";
        var r = (0, __dependency_1.instantiate)(s);
        r.parent = this.node, r.name = "Titles";
        for (var u = 0; u < 2; u++) {
          var T = (0, __dependency_1.instantiate)(this.EnableAllCompositeModeButton.getChildByName("Label"));
          T.setPosition(i + (u > 0 ? 450 : 150), n, 0), T.setScale(.75, .75, .75), T.parent = r;
          var L = T.getComponent(__dependency_1.Label);
          L.string = u ? "----------Composite Mode----------" : "----------Single Mode----------", L.color = __dependency_1.Color.WHITE, L.overflow = 0, this.labelComponentList[this.labelComponentList.length] = L;
        }
        n -= 20;
        for (var f = 0, M = 0; M < this.strSingle.length; M++, f++) {
          M === this.strSingle.length >> 1 && (i += 200, f = 0);
          var b = M ? (0, __dependency_1.instantiate)(this.singleModeToggle) : this.singleModeToggle;
          b.setPosition(i, n - 20 * f, 0), b.setScale(.5, .5, .5), b.parent = this.singleModeToggle.parent;
          var v = b.getComponentInChildren(__dependency_1.RichText);
          v.string = this.strSingle[M], this.textComponentList[this.textComponentList.length] = v, this.textContentList[this.textContentList.length] = v.string, b.on(__dependency_1.Toggle.EventType.TOGGLE, this.toggleSingleMode, this), this.singleModeToggleList[M] = b;
        }
        i += 200, this.EnableAllCompositeModeButton.setPosition(i + 15, n, 0), this.EnableAllCompositeModeButton.setScale(.5, .5, .5), this.EnableAllCompositeModeButton.on(__dependency_1.Button.EventType.CLICK, this.enableAllCompositeMode, this), this.EnableAllCompositeModeButton.parent = l;
        var x = this.EnableAllCompositeModeButton.getComponentInChildren(__dependency_1.Label);
        this.labelComponentList[this.labelComponentList.length] = x;
        var E = (0, __dependency_1.instantiate)(this.EnableAllCompositeModeButton);
        E.setPosition(i + 90, n, 0), E.setScale(.5, .5, .5), E.on(__dependency_1.Button.EventType.CLICK, this.changeTextColor, this), E.parent = l, (x = E.getComponentInChildren(__dependency_1.Label)).string = "TextColor", this.labelComponentList[this.labelComponentList.length] = x;
        var S = (0, __dependency_1.instantiate)(this.EnableAllCompositeModeButton);
        S.setPosition(i + 200, n, 0), S.setScale(.5, .5, .5), S.on(__dependency_1.Button.EventType.CLICK, this.hideUI, this), S.parent = this.node.parent, (x = S.getComponentInChildren(__dependency_1.Label)).string = "Hide UI", this.labelComponentList[this.labelComponentList.length] = x, this.hideButtonLabel = x, n -= 40;
        for (var I = 0; I < this.strMisc.length; I++) {
          var A = (0, __dependency_1.instantiate)(this.compositeModeToggle);
          A.setPosition(i, n - 20 * I, 0), A.setScale(.5, .5, .5), A.parent = s;
          var y = A.getComponentInChildren(__dependency_1.RichText);
          y.string = this.strMisc[I], this.textComponentList[this.textComponentList.length] = y, this.textContentList[this.textContentList.length] = y.string, A.getComponent(__dependency_1.Toggle).isChecked = !!I, A.on(__dependency_1.Toggle.EventType.TOGGLE, I ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this), this.miscModeToggleList[I] = A;
        }
        n -= 150;
        for (var D = 0; D < this.strComposite.length; D++) {
          var B = D ? (0, __dependency_1.instantiate)(this.compositeModeToggle) : this.compositeModeToggle;
          B.setPosition(i, n - 20 * D, 0), B.setScale(.5, .5, .5), B.parent = this.compositeModeToggle.parent;
          var w = B.getComponentInChildren(__dependency_1.RichText);
          w.string = this.strComposite[D], this.textComponentList[this.textComponentList.length] = w, this.textContentList[this.textContentList.length] = w.string, B.on(__dependency_1.Toggle.EventType.TOGGLE, this.toggleCompositeMode, this), this.compositeModeToggleList[D] = B;
        }
      } else console.error("debug-view-runtime-control should be child of Canvas");
    }, s.isTextMatched = function (t, e) {
      var o = new String(t),
        i = o.search(">");
      return -1 === i ? t === e : (o = (o = o.substr(i + 1)).substr(0, o.search("<"))) === e;
    }, s.toggleSingleMode = function (t) {
      for (var e = __dependency_1.director.root.debugView, o = t.getComponentInChildren(__dependency_1.RichText), i = 0; i < this.strSingle.length; i++) this.isTextMatched(o.string, this.strSingle[i]) && (e.singleMode = i);
    }, s.toggleCompositeMode = function (t) {
      for (var e = __dependency_1.director.root.debugView, o = t.getComponentInChildren(__dependency_1.RichText), i = 0; i < this.strComposite.length; i++) this.isTextMatched(o.string, this.strComposite[i]) && e.enableCompositeMode(i, t.isChecked);
    }, s.toggleLightingWithAlbedo = function (t) {
      __dependency_1.director.root.debugView.lightingWithAlbedo = t.isChecked;
    }, s.toggleCSMColoration = function (t) {
      __dependency_1.director.root.debugView.csmLayerColoration = t.isChecked;
    }, s.enableAllCompositeMode = function (t) {
      var e = __dependency_1.director.root.debugView;
      e.enableAllCompositeMode(!0);
      for (var o = 0; o < this.compositeModeToggleList.length; o++) {
        this.compositeModeToggleList[o].getComponent(__dependency_1.Toggle).isChecked = !0;
      }
      var i = this.miscModeToggleList[0].getComponent(__dependency_1.Toggle);
      i.isChecked = !1, e.csmLayerColoration = !1, (i = this.miscModeToggleList[1].getComponent(__dependency_1.Toggle)).isChecked = !0, e.lightingWithAlbedo = !0;
    }, s.hideUI = function (t) {
      var e = this.node.getChildByName("Titles"),
        o = !e.active;
      this.singleModeToggleList[0].parent.active = o, this.miscModeToggleList[0].parent.active = o, this.compositeModeToggleList[0].parent.active = o, this.EnableAllCompositeModeButton.parent.active = o, e.active = o, this.hideButtonLabel.string = o ? "Hide UI" : "Show UI";
    }, s.changeTextColor = function (t) {
      this._currentColorIndex++, this._currentColorIndex >= this.strColor.length && (this._currentColorIndex = 0);
      for (var e = 0; e < this.textComponentList.length; e++) this.textComponentList[e].string = this.strColor[this._currentColorIndex] + this.textContentList[e] + "</color>";
      for (var o = 0; o < this.labelComponentList.length; o++) this.labelComponentList[o].color = this.color[this._currentColorIndex];
    }, s.onLoad = function () {}, s.update = function (t) {}, e;
  }(__dependency_1.Component)).prototype, "compositeModeToggle", [f], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), S = (0, __dependency_0.applyDecoratedDescriptor)(x.prototype, "singleModeToggle", [M], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), I = (0, __dependency_0.applyDecoratedDescriptor)(x.prototype, "EnableAllCompositeModeButton", [b], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: function () {
      return null;
    }
  }), v = x)) || v));
  __dependency_1.cclegacy._RF.pop();
}
