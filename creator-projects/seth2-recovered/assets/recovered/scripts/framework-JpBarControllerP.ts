// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-JpBarControllerP.ts.js
// SHA256: 67c0a3c2441773ce38a26844bbe73deb2a1ccb948f18a2d049c8ad6ff0741445
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./framework-JpBarControllerBase";
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
(function (_0x21e4fb) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x5cd909) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x312c8a) {
  void 0;
})(__dependency_2);
(function (_0x4a1d89) {
  void 0;
})(__dependency_3);
var _0x2aa3ae, _0x264a94, _0xec1665, _0x5bb75d, _0x386dda, _0x50145f, _0x1d7809, _0x3de921, _0x402e0b, _0x57496c, _0x22ff8a, _0x87528a, _0x9d601c, _0x3b5bc9, _0x3586a0, _0x16f6ea, _0x2c2fd2, _0x1486bb, _0x3e8fc1, _0x2f003f, _0xe5ab7c;
__dependency_1["cclegacy"]["_RF"]['push']({}, 'd6b31RzUJpKGoL24O5EIEvx', "JpBarControllerP", void 0x0);
var _0x211d0f = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"], __publish("default", (_0x2aa3ae = _0x211d0f("JpBarControllerP"), _0x264a94 = (0, __dependency_2['inject'])("Mask/content", __dependency_1['Node']), _0xec1665 = (0, __dependency_2['inject'])("Mask/content/mini/title", __dependency_1['Label']), _0x5bb75d = (0, __dependency_2['inject'])("Mask/content/minor/title", __dependency_1['Label']), _0x386dda = (0, __dependency_2['inject'])("Mask/content/major/title", __dependency_1['Label']), _0x50145f = (0, __dependency_2['inject'])("Mask/content/grand/title", __dependency_1['Label']), _0x1d7809 = (0, __dependency_2['inject'])('Mask/content/mini/num', __dependency_1['Label']), _0x3de921 = (0, __dependency_2['inject'])("Mask/content/minor/num", __dependency_1['Label']), _0x402e0b = (0, __dependency_2['inject'])("Mask/content/major/num", __dependency_1['Label']), _0x57496c = (0, __dependency_2['inject'])('Mask/content/grand/num', __dependency_1['Label']), _0x2aa3ae((_0x9d601c = (0, __dependency_0["applyDecoratedDescriptor"])((_0x87528a = function (_0x1e73a8) {
  function _0x31123d() {
    for (var _0x3ab010, _0x1cf166 = arguments["length"], _0x3322ef = new Array(_0x1cf166), _0x4555fd = 0x0; _0x4555fd < _0x1cf166; _0x4555fd++) _0x3322ef[_0x4555fd] = arguments[_0x4555fd];
    return _0x3ab010 = Reflect.construct(_0x1e73a8, [this]["concat"](_0x3322ef).slice(1), new.target || _0x31123d) || this, (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "content", _0x9d601c, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "miniTitle", _0x3b5bc9, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "minorTitle", _0x3586a0, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "majorTitle", _0x16f6ea, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "grandTitle", _0x2c2fd2, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "miniNum", _0x1486bb, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "minorNum", _0x3e8fc1, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "majorNum", _0x2f003f, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), (0, __dependency_0["initializerDefineProperty"])(_0x3ab010, "grandNum", _0xe5ab7c, (0, __dependency_0["assertThisInitialized"])(_0x3ab010)), _0x3ab010;
  }
  return (0, __dependency_0["inheritsLoose"])(_0x31123d, _0x1e73a8), _0x31123d["prototype"]["onLoad"] = function () {
    _0x1e73a8["prototype"]["onLoad"]["call"](this), this['content'] = (0, __dependency_1["find"])('Mask/content'), this["miniTitle"] = (0, __dependency_1["find"])('Mask/content/mini/title', this['node'])["getComponent"](__dependency_1['Label']), this["minorTitle"] = (0, __dependency_1["find"])('Mask/content/minor/title', this['node'])["getComponent"](__dependency_1['Label']), this["majorTitle"] = (0, __dependency_1["find"])("Mask/content/major/title", this["node"])['getComponent'](__dependency_1['Label']), this["grandTitle"] = (0, __dependency_1["find"])('Mask/content/grand/title', this["node"])["getComponent"](__dependency_1['Label']), this["miniNum"] = (0, __dependency_1["find"])('Mask/content/mini/num', this["node"])['getComponent'](__dependency_1['Label']), this["minorNum"] = (0, __dependency_1["find"])("Mask/content/minor/num", this["node"])["getComponent"](__dependency_1['Label']), this["majorNum"] = (0, __dependency_1["find"])("Mask/content/major/num", this["node"])['getComponent'](__dependency_1['Label']), this['grandNum'] = (0, __dependency_1["find"])('Mask/content/grand/num', this["node"])["getComponent"](__dependency_1['Label']);
  }, _0x31123d;
}(__dependency_3["default"]))['prototype'], "content", [_0x264a94], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3b5bc9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a['prototype'], "miniTitle", [_0xec1665], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3586a0 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a["prototype"], "minorTitle", [_0x5bb75d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x16f6ea = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a["prototype"], "majorTitle", [_0x386dda], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2c2fd2 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a['prototype'], "grandTitle", [_0x50145f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1486bb = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a["prototype"], "miniNum", [_0x1d7809], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3e8fc1 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a["prototype"], "minorNum", [_0x3de921], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2f003f = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a["prototype"], "majorNum", [_0x402e0b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xe5ab7c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x87528a["prototype"], "grandNum", [_0x57496c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x22ff8a = _0x87528a)) || _0x22ff8a));
__dependency_1["cclegacy"]["_RF"]["pop"]();
