// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ImageButton.ts.js
// SHA256: 5d06c1963644aacf1b891ecbef44f39ec7bae0a141980f618d9da17d8740cc2e
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
(function (_0x522317) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x541942) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x5c7a68) {
  void 0;
})(__dependency_2);
(function (_0x2334a6) {
  void 0;
})(__dependency_3);
(function (_0x4cebd3) {
  void 0;
})(__dependency_4);
var _0x3d14a2, _0x30a586, _0x17b353, _0x657fd, _0x570926, _0x369e16, _0x1fe81e, _0x380a63, _0x500419;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '5db9fyh7ZZDu7mcogzGjWnq', "ImageButton", void 0x0);
var _0x3d836b = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish('ImageButton', (_0x3d14a2 = _0x3d836b("ImageButton"), _0x30a586 = (0, __dependency_2['inject'])("Button", __dependency_1["Node"]), _0x17b353 = (0, __dependency_2['inject'])('Button/text', __dependency_1["Node"]), _0x657fd = (0, __dependency_2['inject'])("Button/font", __dependency_1["Node"]), _0x3d14a2((_0x1fe81e = (0, __dependency_0["applyDecoratedDescriptor"])((_0x369e16 = function (_0x7c7816) {
  function _0x122db8() {
    for (var _0x324696, _0x4206e4 = arguments["length"], _0x281311 = new Array(_0x4206e4), _0x5ef929 = 0x0; _0x5ef929 < _0x4206e4; _0x5ef929++) _0x281311[_0x5ef929] = arguments[_0x5ef929];
    return _0x324696 = Reflect.construct(_0x7c7816, [this]["concat"](_0x281311).slice(1), new.target || _0x122db8) || this, (0, __dependency_0["initializerDefineProperty"])(_0x324696, "button", _0x1fe81e, (0, __dependency_0["assertThisInitialized"])(_0x324696)), (0, __dependency_0["initializerDefineProperty"])(_0x324696, "text", _0x380a63, (0, __dependency_0["assertThisInitialized"])(_0x324696)), (0, __dependency_0["initializerDefineProperty"])(_0x324696, "font", _0x500419, (0, __dependency_0["assertThisInitialized"])(_0x324696)), _0x324696;
  }
  (0, __dependency_0["inheritsLoose"])(_0x122db8, _0x7c7816);
  var _0x504df5 = _0x122db8['prototype'];
  return _0x504df5['setLabelColor'] = function (_0x576bd8) {
    var _0xea527 = this["text"]['getComponent'](__dependency_1["Label"]);
    _0xea527 && (_0xea527['color'] = new __dependency_1['Color'](_0x576bd8));
  }, _0x504df5["setLabelEventTouch"] = function () {
    var _0x11aa33 = this,
      _0x2ae7f8 = this["data"]["colorConfig"],
      _0x29c0df = _0x2ae7f8["btn_label_normal"],
      _0x20292d = _0x2ae7f8["btn_label_hover"],
      _0x4797a9 = _0x2ae7f8["btn_label_pressed"],
      _0x1434b7 = (_0x2ae7f8["btn_label_disable"], this["button"]['getComponent'](__dependency_1['Button']));
    this["button"]['on'](__dependency_1["NodeEventType"]["MOUSE_ENTER"], function () {
      _0x1434b7['interactable'] && _0x11aa33["setLabelColor"](_0x20292d);
    }, this), this['button']['on'](__dependency_1["NodeEventType"]['MOUSE_LEAVE'], function () {
      _0x1434b7["interactable"] && _0x11aa33["setLabelColor"](_0x29c0df);
    }, this), this['button']['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x1434b7["interactable"] && _0x11aa33['setLabelColor'](_0x4797a9);
    }, this);
  }, _0x504df5["init"] = function () {
    this["setLabelEventTouch"](), this['show']();
  }, _0x504df5["setButton"] = function (_0x12ba16, _0x141a69) {
    var _0x1eee6a = this["button"]["getComponent"](__dependency_1['Button']),
      _0x125b94 = this["button"]["getComponent"](__dependency_1['Sprite']),
      _0x1a6f44 = this["button"]["getComponent"](__dependency_1["UITransform"]);
    if (this['button']) switch (_0x1eee6a["transition"] = _0x12ba16, _0x12ba16) {
      case __dependency_1['Button']["Transition"]["NONE"]:
        break;
      case __dependency_1['Button']['Transition']["COLOR"]:
        var _0x189e6 = _0x141a69,
          _0x48dd47 = _0x189e6["normal"],
          _0x2eefeb = _0x189e6['pressed'],
          _0x3c8a60 = _0x189e6["hover"],
          _0x45f1f5 = _0x189e6["disabled"],
          _0x3ff22b = _0x189e6["bgSprite"],
          _0x2facfc = _0x189e6["contentSize"];
        _0x1eee6a["normalColor"] = new __dependency_1['Color'](_0x48dd47), _0x1eee6a["pressedColor"] = new __dependency_1['Color'](_0x2eefeb), _0x1eee6a["hoverColor"] = new __dependency_1['Color'](_0x3c8a60), _0x1eee6a["disabledColor"] = new __dependency_1['Color'](_0x45f1f5), _0x125b94['spriteFrame'] = _0x3ff22b;
        var _0x4cd3d4 = _0x2facfc ? _0x2facfc["width"] : _0x3ff22b["width"],
          _0x597b30 = _0x2facfc ? _0x2facfc["height"] : _0x3ff22b["height"];
        _0x1a6f44["setContentSize"](_0x4cd3d4, _0x597b30), this["node"]["getComponent"](__dependency_1["UITransform"])["setContentSize"](_0x4cd3d4, _0x597b30);
        break;
      case __dependency_1['Button']['Transition']["SPRITE"]:
        var _0x41f1a6 = _0x141a69,
          _0xc0ea93 = _0x41f1a6["normal"],
          _0x36fc03 = _0x41f1a6["pressed"],
          _0x5ce219 = _0x41f1a6["hover"],
          _0x3c68bd = _0x41f1a6["disabled"];
        _0x1eee6a["normalSprite"] = _0xc0ea93, _0x1eee6a["pressedSprite"] = _0x36fc03, _0x1eee6a["hoverSprite"] = _0x5ce219, _0x1eee6a["disabledSprite"] = _0x3c68bd, _0x1a6f44["setContentSize"](_0xc0ea93["width"], _0xc0ea93['height']);
        break;
      case __dependency_1['Button']['Transition']["SCALE"]:
        var _0x143dc4 = _0x141a69,
          _0x3e48eb = _0x143dc4["zoomScale"],
          _0x5604aa = _0x143dc4["duration"];
        _0x1eee6a["zoomScale"] = _0x3e48eb, _0x1eee6a["duration"] = _0x5604aa;
    } else Log['e']('Button\x20not\x20found');
  }, _0x504df5["setColor"] = function (_0x48283e) {
    var _0x3985e5 = this['button']["getComponent"](__dependency_1['Sprite']);
    _0x3985e5 && (_0x3985e5["color"] = new __dependency_1['Color'](_0x48283e));
  }, _0x504df5["setLabel"] = function (_0x5388ab, _0x59cb91) {
    var _0x4ae6d2 = this['text']["getComponent"](__dependency_1["Label"]);
    _0x4ae6d2["string"] = _0x5388ab, void 0x0 !== (null == _0x59cb91 ? void 0x0 : _0x59cb91["fontSize"]) && (_0x4ae6d2["fontSize"] = _0x59cb91["fontSize"]), void 0x0 !== (null == _0x59cb91 ? void 0x0 : _0x59cb91['active']) && (this["text"]["active"] = _0x59cb91["active"]), void 0x0 !== (null == _0x59cb91 ? void 0x0 : _0x59cb91["color"]) && (_0x4ae6d2['color'] = new __dependency_1['Color'](_0x59cb91["color"])), void 0x0 !== (null == _0x59cb91 ? void 0x0 : _0x59cb91["isBold"]) && (_0x4ae6d2['isBold'] = _0x59cb91['isBold']);
  }, _0x504df5["setFont"] = function (_0x56e7f7, _0x282ae4) {
    this["font"]["getComponent"](__dependency_1['Sprite'])["spriteFrame"] = _0x56e7f7, this["font"]["active"] = !0x0, _0x282ae4['position'] && this["font"]['setPosition'](_0x282ae4["position"]);
  }, _0x504df5["reset"] = function () {}, _0x504df5["show"] = function () {
    var _0x1ef618 = this["node"]["getComponent"](__dependency_1["UIOpacity"]);
    _0x1ef618["opacity"] = 0x0, this["node"]['active'] = !0x0, (0, __dependency_1["tween"])(_0x1ef618)['to'](0.3, {
      'opacity': 0xff
    })["start"]();
  }, _0x504df5["hide"] = function () {
    this["node"]["active"] = !0x1;
  }, _0x504df5["labelActive"] = function (_0x239c0f) {
    this["text"]["active"] = _0x239c0f;
  }, _0x504df5["setInteractable"] = function (_0x19f6af) {
    var _0x2e9d29 = this["data"]["colorConfig"],
      _0x29781d = _0x2e9d29["btn_label_normal"],
      _0x362c3b = _0x2e9d29["btn_label_disable"];
    this["button"]["getComponent"](__dependency_1['Button'])["interactable"] = _0x19f6af, this["setLabelColor"](_0x19f6af ? _0x29781d : _0x362c3b);
  }, _0x504df5["addClickEvent"] = function (_0x423839) {
    this["button"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x423839 && _0x423839();
    });
  }, (0, __dependency_0["createClass"])(_0x122db8, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]['get'](__dependency_4['default']);
    }
  }]), _0x122db8;
}(__dependency_3["default"]))["prototype"], 'button', [_0x30a586], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x380a63 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x369e16["prototype"], 'text', [_0x17b353], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x500419 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x369e16['prototype'], 'font', [_0x657fd], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x570926 = _0x369e16)) || _0x570926));
__dependency_1["cclegacy"]["_RF"]["pop"]();
