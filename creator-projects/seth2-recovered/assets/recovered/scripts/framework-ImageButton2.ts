// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ImageButton2.ts.js
// SHA256: a88c05cabff1117617ac463054f48788f0d19daa21234b0363a0cce9e5402355
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-WrapperData";
var __export_0;
export { __export_0 as ImageButton };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ImageButton":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x2aa7b7) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x2651da) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0xc4068c) {
  void 0;
})(__dependency_2);
(function (_0x4bada6) {
  void 0;
})(__dependency_3);
(function (_0x26e45d) {
  void 0;
})(__dependency_4);
var _0x2199b5, _0x18aa36, _0x24c3b4, _0x2e8095, _0xc6cd76, _0x5cba68, _0x57265b, _0x54ca8c, _0x28f84c;
__dependency_1["cclegacy"]["_RF"]['push']({}, 'dac019bJqZId5Dt+QCFL2rf', "ImageButton2", void 0x0);
var _0x22f609 = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"], __publish('ImageButton', (_0x2199b5 = _0x22f609("ImageButton"), _0x18aa36 = (0, __dependency_2["inject"])("Button", __dependency_1["Node"]), _0x24c3b4 = (0, __dependency_2["inject"])("Button/text", __dependency_1["Node"]), _0x2e8095 = (0, __dependency_2["inject"])('Button/font', __dependency_1["Node"]), _0x2199b5((_0x57265b = (0, __dependency_0["applyDecoratedDescriptor"])((_0x5cba68 = function (_0x45326e) {
  function _0x52ba5b() {
    for (var _0x387829, _0x4b3a11 = arguments['length'], _0xc5c94b = new Array(_0x4b3a11), _0x4fd442 = 0x0; _0x4fd442 < _0x4b3a11; _0x4fd442++) _0xc5c94b[_0x4fd442] = arguments[_0x4fd442];
    return _0x387829 = Reflect.construct(_0x45326e, [this]['concat'](_0xc5c94b).slice(1), new.target || _0x52ba5b) || this, (0, __dependency_0["initializerDefineProperty"])(_0x387829, "button", _0x57265b, (0, __dependency_0['assertThisInitialized'])(_0x387829)), (0, __dependency_0["initializerDefineProperty"])(_0x387829, "text", _0x54ca8c, (0, __dependency_0['assertThisInitialized'])(_0x387829)), (0, __dependency_0["initializerDefineProperty"])(_0x387829, 'font', _0x28f84c, (0, __dependency_0['assertThisInitialized'])(_0x387829)), _0x387829;
  }
  (0, __dependency_0["inheritsLoose"])(_0x52ba5b, _0x45326e);
  var _0x1f6435 = _0x52ba5b["prototype"];
  return _0x1f6435['setLabelColor'] = function (_0x4a7fd4) {
    var _0x2417c9 = this['text']["getComponent"](__dependency_1["Label"]);
    _0x2417c9 && (_0x2417c9["color"] = new __dependency_1['Color'](_0x4a7fd4));
  }, _0x1f6435["setLabelEventTouch"] = function () {
    var _0xe636a3 = this,
      _0x4ac884 = this["data"]['colorConfig'],
      _0x582ae7 = _0x4ac884["btn_label_normal"],
      _0x38e29b = _0x4ac884['btn_label_hover'],
      _0x4c5952 = _0x4ac884["btn_label_pressed"],
      _0x553d8a = (_0x4ac884["btn_label_disable"], this['button']['getComponent'](__dependency_1["Button"]));
    this["button"]['on'](__dependency_1['NodeEventType']["MOUSE_ENTER"], function () {
      _0x553d8a["interactable"] && _0xe636a3['setLabelColor'](_0x38e29b);
    }, this), this["button"]['on'](__dependency_1['NodeEventType']["MOUSE_LEAVE"], function () {
      _0x553d8a['interactable'] && _0xe636a3['setLabelColor'](_0x582ae7);
    }, this), this['button']['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x553d8a["interactable"] && _0xe636a3["setLabelColor"](_0x4c5952);
    }, this);
  }, _0x1f6435["init"] = function () {
    this['setLabelEventTouch'](), this["show"]();
  }, _0x1f6435["setButton"] = function (_0x59a188, _0x54ee92) {
    var _0x5b2294 = this["button"]['getComponent'](__dependency_1["Button"]),
      _0x14f680 = this['button']["getComponent"](__dependency_1["Sprite"]),
      _0x5c6c94 = this['button']["getComponent"](__dependency_1["UITransform"]);
    if (this["button"]) switch (_0x5b2294['transition'] = _0x59a188, _0x59a188) {
      case __dependency_1["Button"]["Transition"]['NONE']:
        break;
      case __dependency_1["Button"]["Transition"]["COLOR"]:
        var _0x7adea8 = _0x54ee92,
          _0x2e6dd2 = _0x7adea8["normal"],
          _0x1e37b3 = _0x7adea8['pressed'],
          _0x32a5e6 = _0x7adea8["hover"],
          _0x106ac5 = _0x7adea8["disabled"],
          _0x257ff6 = _0x7adea8["bgSprite"],
          _0x193b6a = _0x7adea8['contentSize'];
        _0x5b2294['normalColor'] = new __dependency_1['Color'](_0x2e6dd2), _0x5b2294["pressedColor"] = new __dependency_1['Color'](_0x1e37b3), _0x5b2294["hoverColor"] = new __dependency_1['Color'](_0x32a5e6), _0x5b2294["disabledColor"] = new __dependency_1['Color'](_0x106ac5), _0x14f680["spriteFrame"] = _0x257ff6;
        var _0x3dd3ac = _0x193b6a ? _0x193b6a["width"] : _0x257ff6["width"],
          _0x3af2f2 = _0x193b6a ? _0x193b6a["height"] : _0x257ff6["height"];
        _0x5c6c94["setContentSize"](_0x3dd3ac, _0x3af2f2), this["node"]["getComponent"](__dependency_1["UITransform"])["setContentSize"](_0x3dd3ac, _0x3af2f2);
        break;
      case __dependency_1["Button"]["Transition"]['SPRITE']:
        var _0x3bdfa3 = _0x54ee92,
          _0x30432e = _0x3bdfa3["normal"],
          _0x40e528 = _0x3bdfa3["pressed"],
          _0x2639cf = _0x3bdfa3["hover"],
          _0x316960 = _0x3bdfa3['disabled'];
        _0x5b2294["normalSprite"] = _0x30432e, _0x5b2294["pressedSprite"] = _0x40e528, _0x5b2294['hoverSprite'] = _0x2639cf, _0x5b2294["disabledSprite"] = _0x316960, _0x5c6c94["setContentSize"](_0x30432e["width"], _0x30432e['height']);
        break;
      case __dependency_1["Button"]['Transition']["SCALE"]:
        var _0x29a545 = _0x54ee92,
          _0x545c74 = _0x29a545["zoomScale"],
          _0x1a4542 = _0x29a545["duration"];
        _0x5b2294["zoomScale"] = _0x545c74, _0x5b2294["duration"] = _0x1a4542;
    } else Log['e']("Button not found");
  }, _0x1f6435["setColor"] = function (_0x5df6aa) {
    var _0x5b5ff5 = this['button']["getComponent"](__dependency_1["Sprite"]);
    _0x5b5ff5 && (_0x5b5ff5["color"] = new __dependency_1['Color'](_0x5df6aa));
  }, _0x1f6435["setLabel"] = function (_0x12d98d, _0x6dec45) {
    var _0xbe9730 = this["text"]['getComponent'](__dependency_1["Label"]);
    _0xbe9730["string"] = _0x12d98d, void 0x0 !== (null == _0x6dec45 ? void 0x0 : _0x6dec45["fontSize"]) && (_0xbe9730["fontSize"] = _0x6dec45["fontSize"]), void 0x0 !== (null == _0x6dec45 ? void 0x0 : _0x6dec45["active"]) && (this["text"]["active"] = _0x6dec45["active"]), void 0x0 !== (null == _0x6dec45 ? void 0x0 : _0x6dec45["color"]) && (_0xbe9730["color"] = new __dependency_1['Color'](_0x6dec45['color'])), void 0x0 !== (null == _0x6dec45 ? void 0x0 : _0x6dec45['isBold']) && (_0xbe9730['isBold'] = _0x6dec45["isBold"]);
  }, _0x1f6435["reset"] = function () {}, _0x1f6435['show'] = function () {
    var _0x31512c = this['node']["getComponent"](__dependency_1["UIOpacity"]);
    _0x31512c['opacity'] = 0x0, this["node"]["active"] = !0x0, (0, __dependency_1['tween'])(_0x31512c)['to'](0.3, {
      'opacity': 0xff
    })['start']();
  }, _0x1f6435["hide"] = function () {
    this["node"]["active"] = !0x1;
  }, _0x1f6435["labelActive"] = function (_0x59e774) {
    this['text']["active"] = _0x59e774;
  }, _0x1f6435["setInteractable"] = function (_0x351ec4) {
    var _0x311207 = this["data"]["colorConfig"],
      _0x4c9725 = _0x311207["btn_label_normal"],
      _0x1156af = _0x311207["btn_label_disable"];
    this["button"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x351ec4, this["setLabelColor"](_0x351ec4 ? _0x4c9725 : _0x1156af);
  }, _0x1f6435["addClickEvent"] = function (_0x279f16) {
    this["button"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      _0x279f16 && _0x279f16();
    });
  }, (0, __dependency_0["createClass"])(_0x52ba5b, [{
    'key': 'data',
    'get': function () {
      return App["dataCenter"]["get"](__dependency_4['default']);
    }
  }]), _0x52ba5b;
}(__dependency_3['default']))['prototype'], "button", [_0x18aa36], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x54ca8c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x5cba68["prototype"], "text", [_0x24c3b4], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x28f84c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x5cba68['prototype'], "font", [_0x2e8095], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xc6cd76 = _0x5cba68)) || _0xc6cd76));
__dependency_1["cclegacy"]["_RF"]["pop"]();
