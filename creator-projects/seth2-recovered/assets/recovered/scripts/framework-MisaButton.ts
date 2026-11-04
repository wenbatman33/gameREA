// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-MisaButton.ts.js
// SHA256: 80e42f373022a85143406b29324b371289a0eea68f91c70d7897fd52d1e4d0a5
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as Transition };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Transition":
      __export_0 = value;
      break;
    case "default":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x78b612) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x423851) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var _0x15a716, _0x543854, _0x28d466, _0x49c09c, _0x36c28d, _0x383ac6, _0xac4c92, _0x517cd7, _0x57f7e1, _0x25bc3d, _0x442ba5, _0x561525, _0x29d858, _0x331328, _0x10f29e, _0x3542ba, _0x426f23, _0x1816f9, _0x34c49b, _0x80599a, _0x1d5de7, _0x5d12cf, _0x205c37, _0x4f7c3e, _0x931815, _0x2130ba, _0x584c6c, _0x266102, _0xa8dfbd, _0x50d0cf, _0x1f9536, _0x23a121, _0x3ee199, _0x17544c, _0x3809e5, _0x14cc46, _0x2a0605, _0x5942a3, _0x421310, _0x1f282e, _0x59d6ec, _0x568b4c, _0xcacc43;
__publish("Transition", void 0x0), __dependency_1["cclegacy"]["_RF"]["push"]({}, 'a275307MrROfautDC4hrIz3', 'MisaButton', void 0x0);
var _0x2cd14c,
  _0x1ef40b,
  _0x8d7939 = __dependency_1['_decorator']["ccclass"],
  _0x183a96 = __dependency_1['_decorator']["property"],
  _0x5a0c5e = __dependency_1['_decorator']["menu"],
  _0x1e2dbd = __dependency_1['_decorator']['executeInEditMode'];
!function (_0x2d18f6) {
  _0x2d18f6[_0x2d18f6["NONE"] = 0x0] = "NONE", _0x2d18f6[_0x2d18f6['COLOR'] = 0x1] = "COLOR", _0x2d18f6[_0x2d18f6["SPRITE"] = 0x2] = "SPRITE";
}(_0x2cd14c || (_0x2cd14c = __publish("Transition", {}))), (0, __dependency_1["Enum"])(_0x2cd14c), function (_0x2c8d25) {
  _0x2c8d25["NORMAL"] = "normal", _0x2c8d25['HOVER'] = 'hover', _0x2c8d25["PRESSED"] = "pressed", _0x2c8d25["DISABLED"] = "disabled";
}(_0x1ef40b || (_0x1ef40b = {}));
__publish("default", (_0x15a716 = _0x5a0c5e('MisaButton'), _0x543854 = _0x183a96({
  'tooltip': "按鍵是否啟用"
}), _0x28d466 = _0x183a96({
  'type': _0x2cd14c,
  'tooltip': "按鍵變化類型"
}), _0x49c09c = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c["COLOR"];
  }
}), _0x36c28d = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c['COLOR'];
  }
}), _0x383ac6 = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c["COLOR"];
  }
}), _0xac4c92 = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c["COLOR"];
  }
}), _0x517cd7 = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this["transition"] == _0x2cd14c['SPRITE'];
  }
}), _0x57f7e1 = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this["transition"] == _0x2cd14c["SPRITE"];
  }
}), _0x25bc3d = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this["transition"] == _0x2cd14c["SPRITE"];
  }
}), _0x442ba5 = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this["transition"] == _0x2cd14c["SPRITE"];
  }
}), _0x561525 = _0x183a96({
  'type': __dependency_1['Node'],
  'tooltip': '前景Icon節點'
}), _0x29d858 = _0x183a96({
  'tooltip': "前景圖片使用不同於背景的顏色設定"
}), _0x331328 = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c["COLOR"] && this["isCustomIconColor"];
  }
}), _0x10f29e = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c["COLOR"] && this["isCustomIconColor"];
  }
}), _0x3542ba = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c['COLOR'] && this["isCustomIconColor"];
  }
}), _0x426f23 = _0x183a96({
  'visible': function () {
    return this["transition"] == _0x2cd14c["COLOR"] && this["isCustomIconColor"];
  }
}), _0x1816f9 = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this["transition"] == _0x2cd14c['SPRITE'];
  }
}), _0x34c49b = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this['transition'] == _0x2cd14c["SPRITE"];
  }
}), _0x80599a = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this["transition"] == _0x2cd14c["SPRITE"];
  }
}), _0x1d5de7 = _0x183a96({
  'type': __dependency_1['SpriteFrame'],
  'visible': function () {
    return this["transition"] == _0x2cd14c["SPRITE"];
  }
}), _0x8d7939(_0x5d12cf = _0x15a716(_0x5d12cf = _0x1e2dbd((_0x4f7c3e = (0, __dependency_0["applyDecoratedDescriptor"])((_0x205c37 = function (_0xa54b20) {
  function _0x4e4ef7() {
    for (var _0x47808b, _0x347b30 = arguments['length'], _0x11452b = new Array(_0x347b30), _0x380a6e = 0x0; _0x380a6e < _0x347b30; _0x380a6e++) _0x11452b[_0x380a6e] = arguments[_0x380a6e];
    return _0x47808b = Reflect.construct(_0xa54b20, [this]['concat'](_0x11452b).slice(1), new.target || _0x4e4ef7) || this, (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "_interactable", _0x4f7c3e, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "transition", _0x931815, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "normalColor", _0x2130ba, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, 'pressedColor', _0x584c6c, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "hoverColor", _0x266102, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "disabledColor", _0xa8dfbd, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "_normalSprite", _0x50d0cf, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "pressedSprite", _0x1f9536, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "hoverSprite", _0x23a121, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, 'disabledSprite', _0x3ee199, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "iconNode", _0x17544c, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, 'isCustomIconColor', _0x3809e5, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "customNormalColor", _0x14cc46, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, 'customPressedColor', _0x2a0605, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "customHoverColor", _0x5942a3, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, 'customDisabledColor', _0x421310, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "customNormalSprite", _0x1f282e, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "customPressedSprite", _0x59d6ec, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, 'customHoverSprite', _0x568b4c, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), (0, __dependency_0['initializerDefineProperty'])(_0x47808b, "customDisabledSprite", _0xcacc43, (0, __dependency_0["assertThisInitialized"])(_0x47808b)), _0x47808b["bgComSprite"] = null, _0x47808b["iconComSprite"] = null, _0x47808b["isHover"] = !0x1, _0x47808b;
  }
  (0, __dependency_0["inheritsLoose"])(_0x4e4ef7, _0xa54b20);
  var _0x1b9ee3 = _0x4e4ef7['prototype'];
  return _0x1b9ee3['start'] = function () {
    this['_interactable'] && this["listenerOn"](!0x0), this['normalSprite'] = this["node"]['getComponent'](__dependency_1["Sprite"])['spriteFrame'];
  }, _0x1b9ee3["listenerOn"] = function (_0xecdc1b) {
    _0xecdc1b ? (this["node"]['on'](__dependency_1['NodeEventType']['TOUCH_START'], this["buttonEvent"], this), this["node"]['on'](__dependency_1['NodeEventType']['TOUCH_END'], this["buttonEvent"], this), this['node']['on'](__dependency_1['NodeEventType']["MOUSE_ENTER"], this['buttonEvent'], this), this["node"]['on'](__dependency_1['NodeEventType']['MOUSE_LEAVE'], this['buttonEvent'], this)) : (this['node']["off"](__dependency_1['NodeEventType']["TOUCH_START"], this["buttonEvent"], this), this["node"]['off'](__dependency_1['NodeEventType']["TOUCH_END"], this["buttonEvent"], this), this["node"]['off'](__dependency_1['NodeEventType']["MOUSE_ENTER"], this["buttonEvent"], this), this["node"]["off"](__dependency_1['NodeEventType']["MOUSE_LEAVE"], this["buttonEvent"], this)), this["buttonDisable"](_0xecdc1b);
  }, _0x1b9ee3["buttonEvent"] = function (_0x3cc450) {
    var _0x216d2e;
    switch (this["bgComSprite"] = this["node"]["getComponent"](__dependency_1["Sprite"]), this["iconComSprite"] = null == (_0x216d2e = this['iconNode']) ? void 0x0 : _0x216d2e["getComponent"](__dependency_1["Sprite"]), this["transition"]) {
      case _0x2cd14c["COLOR"]:
        this["changeColor"](_0x3cc450);
        break;
      case _0x2cd14c["SPRITE"]:
        this["changeSprite"](_0x3cc450);
    }
  }, _0x1b9ee3["buttonDisable"] = function (_0x1bd8c5) {
    var _0x4d3982;
    switch (this["bgComSprite"] = this["node"]["getComponent"](__dependency_1["Sprite"]), this['iconComSprite'] = null == (_0x4d3982 = this["iconNode"]) ? void 0x0 : _0x4d3982["getComponent"](__dependency_1["Sprite"]), this["transition"]) {
      case _0x2cd14c['COLOR']:
        this['changeDisableColor'](_0x1bd8c5);
        break;
      case _0x2cd14c["SPRITE"]:
        this["changeDisableSprite"](_0x1bd8c5);
    }
  }, _0x1b9ee3['changeColor'] = function (_0x5c7613) {
    switch (_0x5c7613["type"]) {
      case __dependency_1['NodeEventType']['TOUCH_START']:
        this["bgComSprite"]["color"] = this["pressedColor"], this["iconComSprite"]["color"] = this['isCustomIconColor'] ? this["customPressedColor"] : this["pressedColor"];
        break;
      case __dependency_1['NodeEventType']['TOUCH_END']:
        this['isHover'] ? (this["bgComSprite"]["color"] = this['hoverColor'], this['iconComSprite']["color"] = this["isCustomIconColor"] ? this["customHoverColor"] : this["hoverColor"]) : (this["bgComSprite"]["color"] = this['normalColor'], this["iconComSprite"]["color"] = this["isCustomIconColor"] ? this['customNormalColor'] : this['normalColor']);
        break;
      case __dependency_1['NodeEventType']['MOUSE_ENTER']:
        this["isHover"] = !0x0, this["bgComSprite"]["color"] = this["hoverColor"], this["iconComSprite"]['color'] = this["isCustomIconColor"] ? this['customHoverColor'] : this["hoverColor"];
        break;
      case __dependency_1['NodeEventType']["MOUSE_LEAVE"]:
        this["isHover"] = !0x1, this["bgComSprite"]['color'] = this["normalColor"], this["iconComSprite"]["color"] = this['isCustomIconColor'] ? this["customNormalColor"] : this["normalColor"];
    }
  }, _0x1b9ee3["changeDisableColor"] = function (_0x3af7c7) {
    _0x3af7c7 ? (this["bgComSprite"]['color'] = this["normalColor"], this["iconComSprite"]["color"] = this['isCustomIconColor'] ? this['customNormalColor'] : this["normalColor"]) : (this["bgComSprite"]['color'] = this['disabledColor'], this["iconComSprite"]["color"] = this["isCustomIconColor"] ? this["customDisabledColor"] : this["disabledColor"]);
  }, _0x1b9ee3["changeSprite"] = function (_0x14a85c) {
    switch (_0x14a85c["type"]) {
      case __dependency_1['NodeEventType']["TOUCH_START"]:
        this["pressedSprite"] && (this["bgComSprite"]["spriteFrame"] = this['pressedSprite']), this['customPressedSprite'] && (this["iconComSprite"]["spriteFrame"] = this["customPressedSprite"]);
        break;
      case __dependency_1['NodeEventType']["TOUCH_END"]:
        this["isHover"] ? (this['hoverSprite'] && (this["bgComSprite"]['spriteFrame'] = this["hoverSprite"]), this['customHoverSprite'] && (this['iconComSprite']["spriteFrame"] = this["customHoverSprite"])) : (this["normalSprite"] && (this["bgComSprite"]["spriteFrame"] = this["normalSprite"]), this["customNormalSprite"] && (this['iconComSprite']["spriteFrame"] = this["customNormalSprite"]));
        break;
      case __dependency_1['NodeEventType']['MOUSE_ENTER']:
        this['isHover'] = !0x0, this["hoverSprite"] && (this["bgComSprite"]["spriteFrame"] = this['hoverSprite']), this["customHoverSprite"] && (this['iconComSprite']["spriteFrame"] = this["customHoverSprite"]);
        break;
      case __dependency_1['NodeEventType']["MOUSE_LEAVE"]:
        this["isHover"] = !0x1, this["normalSprite"] && (this["bgComSprite"]["spriteFrame"] = this["normalSprite"]), this["customNormalSprite"] && (this["iconComSprite"]["spriteFrame"] = this["customNormalSprite"]);
    }
  }, _0x1b9ee3["changeDisableSprite"] = function (_0x3b363a) {
    _0x3b363a ? (this['normalSprite'] && (this["bgComSprite"]["spriteFrame"] = this["normalSprite"]), this["customNormalSprite"] && (this["iconComSprite"]["spriteFrame"] = this["customNormalSprite"])) : (this["disabledSprite"] && (this['bgComSprite']["spriteFrame"] = this['disabledSprite']), this["customDisabledSprite"] && (this["iconComSprite"]["spriteFrame"] = this["customDisabledSprite"]));
  }, (0, __dependency_0["createClass"])(_0x4e4ef7, [{
    'key': 'interactable',
    'get': function () {
      return this["_interactable"];
    },
    'set': function (_0x423882) {
      this["_interactable"] !== _0x423882 && (this["_interactable"] = _0x423882, this["listenerOn"](this["_interactable"]));
    }
  }, {
    'key': "normalSprite",
    'get': function () {
      return this["_normalSprite"];
    },
    'set': function (_0x43e1fe) {
      this["_normalSprite"] = _0x43e1fe;
    }
  }]), _0x4e4ef7;
}(__dependency_1["Component"]))["prototype"], "_interactable", [_0x183a96], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return !0x0;
  }
}), (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "interactable", [_0x543854], Object['getOwnPropertyDescriptor'](_0x205c37['prototype'], "interactable"), _0x205c37["prototype"]), _0x931815 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], 'transition', [_0x28d466], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return _0x2cd14c["NONE"];
  }
}), _0x2130ba = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37['prototype'], "normalColor", [_0x49c09c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0xff, 0xff, 0xff, 0xff);
  }
}), _0x584c6c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37['prototype'], 'pressedColor', [_0x36c28d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0xff, 0xe6, 0xb4, 0xff);
  }
}), _0x266102 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], 'hoverColor', [_0x383ac6], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0xff, 0xe6, 0xb4, 0xff);
  }
}), _0xa8dfbd = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37['prototype'], 'disabledColor', [_0xac4c92], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0x73, 0x73, 0x73, 0xff);
  }
}), _0x50d0cf = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "_normalSprite", [_0x183a96], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37['prototype'], "normalSprite", [_0x517cd7], Object["getOwnPropertyDescriptor"](_0x205c37["prototype"], "normalSprite"), _0x205c37["prototype"]), _0x1f9536 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], 'pressedSprite', [_0x57f7e1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x23a121 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "hoverSprite", [_0x25bc3d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3ee199 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "disabledSprite", [_0x442ba5], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x17544c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], 'iconNode', [_0x561525], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3809e5 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "isCustomIconColor", [_0x29d858], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return !0x1;
  }
}), _0x14cc46 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "customNormalColor", [_0x331328], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0xff, 0xd6, 0x80, 0xff);
  }
}), _0x2a0605 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "customPressedColor", [_0x10f29e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0xff, 0xb9, 0x28, 0xff);
  }
}), _0x5942a3 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "customHoverColor", [_0x3542ba], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0xff, 0xe6, 0xb4, 0xff);
  }
}), _0x421310 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], 'customDisabledColor', [_0x426f23], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return new __dependency_1["Color"](0x7c, 0x7c, 0x7c, 0xff);
  }
}), _0x1f282e = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], 'customNormalSprite', [_0x1816f9], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x59d6ec = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37["prototype"], "customPressedSprite", [_0x34c49b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x568b4c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37['prototype'], "customHoverSprite", [_0x80599a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xcacc43 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x205c37['prototype'], 'customDisabledSprite', [_0x1d5de7], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5d12cf = _0x205c37)) || _0x5d12cf) || _0x5d12cf) || _0x5d12cf));
__dependency_1["cclegacy"]["_RF"]['pop']();
