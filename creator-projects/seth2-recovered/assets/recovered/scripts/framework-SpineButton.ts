// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SpineButton.ts.js
// SHA256: 8dc45cc9f12ca7b315df0a3ee7fd111bd17e42ca906d53002ea95e9834633b8d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./framework-type2";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-SpinButton";
import * as __dependency_7 from "./framework-AutoPlayModel";
var __export_0;
export { __export_0 as SpineButton };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpineButton":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x27b203) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x305a56) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x375a09) {
  void 0;
})(__dependency_2);
(function (_0x3bc4dd) {
  void 0;
})(__dependency_3);
(function (_0x1558b4) {
  void 0;
})(__dependency_4);
(function (_0x69f9be) {
  void 0;
})(__dependency_5);
(function (_0x4e9775) {
  void 0;
})(__dependency_6);
(function (_0x11e612) {
  void 0;
})(__dependency_7);
var _0x443d6b, _0x14fcba, _0x4d63c1, _0x298f9a, _0x156c41, _0x25c588, _0x510702, _0x28fa51, _0x280007, _0x4bfc56, _0x2ff597;
__dependency_1["cclegacy"]['_RF']['push']({}, "47bb7uo3gpEBbmoCv+eFm2+", "SpineButton", void 0x0);
var _0x476fbf,
  _0x1a01f3 = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"];
!function (_0xba4858) {
  _0xba4858["HOVER"] = "hover", _0xba4858["RELEASED"] = 'released', _0xba4858["NORMAL"] = "normal", _0xba4858["PRESSED"] = "pressed", _0xba4858["DISABLED"] = "disabled";
}(_0x476fbf || (_0x476fbf = {}));
__publish("SpineButton", (_0x443d6b = _0x1a01f3("SpineButton"), _0x14fcba = (0, __dependency_2["inject"])("spineBtn", __dependency_1["Node"]), _0x4d63c1 = (0, __dependency_2["inject"])("spineBtn/image", __dependency_1["Sprite"]), _0x298f9a = (0, __dependency_2["inject"])("spineBtn/text", __dependency_1["Node"]), _0x156c41 = (0, __dependency_2["inject"])('arrow', __dependency_1["Node"]), _0x443d6b((_0x28fa51 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x510702 = function (_0x4d596b) {
  function _0x5acdb6() {
    for (var _0x4f076a, _0x1349ef = arguments['length'], _0x3fb347 = new Array(_0x1349ef), _0x53f59b = 0x0; _0x53f59b < _0x1349ef; _0x53f59b++) _0x3fb347[_0x53f59b] = arguments[_0x53f59b];
    return _0x4f076a = Reflect.construct(_0x4d596b, [this]["concat"](_0x3fb347).slice(1), new.target || _0x5acdb6) || this, (0, __dependency_0["initializerDefineProperty"])(_0x4f076a, 'spine', _0x28fa51, (0, __dependency_0["assertThisInitialized"])(_0x4f076a)), (0, __dependency_0["initializerDefineProperty"])(_0x4f076a, 'image', _0x280007, (0, __dependency_0["assertThisInitialized"])(_0x4f076a)), (0, __dependency_0["initializerDefineProperty"])(_0x4f076a, "text", _0x4bfc56, (0, __dependency_0["assertThisInitialized"])(_0x4f076a)), (0, __dependency_0["initializerDefineProperty"])(_0x4f076a, "arrow", _0x2ff597, (0, __dependency_0["assertThisInitialized"])(_0x4f076a)), _0x4f076a["arrowSpriteMap"] = new Map(), _0x4f076a['BASE_SPEED'] = 0x64, _0x4f076a["HIGH_SPEED"] = 0x1f4, _0x4f076a["speed"] = _0x4f076a['BASE_SPEED'], _0x4f076a['angle'] = 0x0, _0x4f076a["timeout"] = void 0x0, _0x4f076a['button'] = null, _0x4f076a["_status"] = void 0x0, _0x4f076a["isEnableArrowAtAutoSpinToAlpha"] = !0x1, _0x4f076a;
  }
  (0, __dependency_0["inheritsLoose"])(_0x5acdb6, _0x4d596b);
  var _0x3878e5 = _0x5acdb6['prototype'];
  return _0x3878e5['update'] = function (_0x41bd5e) {
    this["arrow"]["angle"] = this["angle"] -= this["speed"] * _0x41bd5e, this["angle"] < -0x168 && (this["angle"] = 0x0);
  }, _0x3878e5["setEventTouch"] = function () {
    var _0x4467fb = this;
    this['node']['on'](__dependency_1['NodeEventType']['TOUCH_START'], function () {
      _0x4467fb["status"] = __dependency_4['EBtnStatus']['PRESSED'], _0x4467fb["setAnimation"](_0x476fbf["PRESSED"], !0x1);
    }), this["node"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      _0x4467fb['status'] = __dependency_4['EBtnStatus']["DISABLED"], _0x4467fb["setAnimation"](_0x476fbf['RELEASED'], !0x1, function () {
        _0x4467fb['setAnimation'](_0x476fbf["NORMAL"], !0x0);
      });
    }), this["node"]['on'](__dependency_1['NodeEventType']["TOUCH_CANCEL"], function () {
      _0x4467fb['status'] = __dependency_4['EBtnStatus']["NORMAL"], _0x4467fb["setAnimation"](_0x476fbf['NORMAL'], !0x0);
    }), this["node"]['on'](__dependency_1['NodeEventType']["MOUSE_ENTER"], function () {
      _0x4467fb["button"]['getComponent'](__dependency_1["Button"])["interactable"] && (_0x4467fb["setArrowSprite"](__dependency_4['EBtnStatus']["HOVER"]), _0x4467fb["setAnimation"](_0x476fbf["HOVER"]));
    }), this["node"]['on'](__dependency_1['NodeEventType']["MOUSE_LEAVE"], function () {
      _0x4467fb["button"]["getComponent"](__dependency_1["Button"])["interactable"] && (_0x4467fb["setArrowSprite"](__dependency_4['EBtnStatus']["NORMAL"]), _0x4467fb['setAnimation'](_0x476fbf["NORMAL"]));
    });
  }, _0x3878e5['init'] = function () {
    this["button"] = this["getComponent"](__dependency_1["Button"]), this["setEventTouch"]();
  }, _0x3878e5["setSpineData"] = function (_0x358ef8) {
    var _0x2fea52 = this["spine"]['getComponent'](__dependency_1['sp']["Skeleton"]);
    _0x2fea52["skeletonData"] = _0x358ef8, _0x2fea52["setAnimation"](0x0, _0x476fbf["HOVER"], !0x0);
  }, _0x3878e5["setAnimation"] = function (_0x1015ee, _0x1d5a8d, _0xfceb43) {
    void 0x0 === _0x1d5a8d && (_0x1d5a8d = !0x1);
    var _0x448197 = this["spine"]["getComponent"](__dependency_1['sp']['Skeleton']);
    _0x448197["setAnimation"](0x0, _0x1015ee, _0x1d5a8d), _0x448197['setCompleteListener'](function () {
      _0xfceb43 && _0xfceb43();
    });
  }, _0x3878e5["playSpineReleasedAnim"] = function () {
    var _0x527fb1 = this;
    this["setAnimation"](_0x476fbf["RELEASED"], !0x1, function () {
      _0x527fb1["setAnimation"](_0x476fbf["HOVER"], !0x0);
    }), this['speedUp']();
  }, _0x3878e5["setLabel"] = function (_0xa0bc23, _0x2e1d08) {
    var _0x379720 = this["text"]["getComponent"](__dependency_1['Label']);
    _0x379720["string"] = _0xa0bc23, void 0x0 !== (null == _0x2e1d08 ? void 0x0 : _0x2e1d08["fontSize"]) && (_0x379720['fontSize'] = _0x2e1d08['fontSize']), void 0x0 !== (null == _0x2e1d08 ? void 0x0 : _0x2e1d08["fontSize"]) && (_0x379720["lineHeight"] = _0x2e1d08["fontSize"]), void 0x0 !== (null == _0x2e1d08 ? void 0x0 : _0x2e1d08["fontSize"]) && (_0x379720["fontSize"] = _0x2e1d08["fontSize"], _0x379720['lineHeight'] = _0x2e1d08["fontSize"], this["text"]["getComponent"](__dependency_1["UITransform"])['height'] = _0x2e1d08["fontSize"]), void 0x0 !== (null == _0x2e1d08 ? void 0x0 : _0x2e1d08["active"]) && (this['text']["active"] = _0x2e1d08['active']);
  }, _0x3878e5["reset"] = function () {}, _0x3878e5["show"] = function () {
    this["node"]["active"] = !0x0;
  }, _0x3878e5["hide"] = function () {
    this["node"]["active"] = !0x1;
  }, _0x3878e5["labelActive"] = function (_0xf3a248) {
    this["text"]["active"] = _0xf3a248;
  }, _0x3878e5['setData'] = function (_0x386366, _0x3d6f91, _0x539441) {
    var _0x4da6d3 = this["spine"]['getComponent'](__dependency_1['sp']["Skeleton"]);
    _0x4da6d3["skeletonData"] = _0x386366, _0x4da6d3['setAnimation'](0x0, _0x476fbf["NORMAL"], !0x0), this["setArrow"](_0x3d6f91), this["setArtFont"](_0x539441);
  }, _0x3878e5["setArrow"] = function (_0x474b20) {
    if (_0x474b20) {
      var _0x1dae0a = this["arrow"]["getComponent"](__dependency_1["UITransform"]),
        _0x236eae = _0x474b20["normal"],
        _0x4ffece = _0x474b20["pressed"],
        _0x122bbf = _0x474b20['hover'],
        _0x43af4f = _0x474b20["disabled"];
      this["arrowSpriteMap"]['set'](__dependency_4['EBtnStatus']['NORMAL'], _0x236eae), this["arrowSpriteMap"]["set"](__dependency_4['EBtnStatus']["PRESSED"], _0x4ffece), this['arrowSpriteMap']["set"](__dependency_4['EBtnStatus']["HOVER"], _0x122bbf), this["arrowSpriteMap"]["set"](__dependency_4['EBtnStatus']["DISABLED"], _0x43af4f), this['setArrowSprite'](__dependency_4['EBtnStatus']["NORMAL"]), _0x1dae0a["setContentSize"](_0x236eae["originalSize"]["width"], _0x236eae['originalSize']["height"]);
    }
  }, _0x3878e5["setArrowSprite"] = function (_0x52011b) {
    this['arrow']["getComponent"](__dependency_1["Sprite"])['spriteFrame'] = this["arrowSpriteMap"]['get'](_0x52011b);
  }, _0x3878e5["speedUp"] = function () {
    var _0x4597a4 = this;
    this["timeout"] && clearTimeout(this["timeout"]), this['speed'] = this["HIGH_SPEED"], this["timeout"] = setTimeout(function () {
      _0x4597a4["speed"] = _0x4597a4['BASE_SPEED'];
    }, 0x320);
  }, _0x3878e5["setArtFont"] = function (_0x1025f7) {
    if (_0x1025f7) {
      var _0x2700d2 = _0x1025f7["font"],
        _0x1e1764 = _0x1025f7["fontSize"],
        _0x2f3a94 = _0x1025f7["fontPos"],
        _0x2e9a06 = this["text"]["getComponent"](__dependency_1['Label']);
      _0x2e9a06["font"] = _0x2700d2, _0x2e9a06["fontSize"] = _0x1e1764, _0x2e9a06["lineHeight"] = _0x1e1764, this["text"]["setPosition"](_0x2f3a94);
    }
  }, _0x3878e5["setInteractable"] = function (_0x147d9d) {
    this["button"] && (this["button"]['interactable'] = _0x147d9d), this["setArrowSprite"](__dependency_4['EBtnStatus']["NORMAL"]);
  }, _0x3878e5['addEvents'] = function () {
    var _0x4015ee = this;
    _0x4d596b['prototype']["addEvents"]["call"](this), this['on'](__dependency_5["SlotFrameworkEvent"]["SET_AUTO_SPIN_COUNT"], function (_0x5c721a) {
      var _0x4b553d = _0x5c721a['data'];
      if (_0x4b553d > __dependency_6["AutoPlayOption"]['INFINITY']) {
        var _0x3b1b41 = _0x4b553d;
        _0x3b1b41 = -0x1 === _0x3b1b41 ? 0x0 : _0x3b1b41, _0x4015ee['setLabel']('' + _0x3b1b41, {
          'active': !0x0
        });
      } else _0x4015ee["setLabel"]('∞', {
        'active': !0x0
      });
      __dependency_7["default"]["active"] || _0x4015ee['setLabel']('', {
        'active': !0x1
      }), _0x4015ee["isEnableArrowAtAutoSpinToAlpha"] && _0x4015ee['isEnableArrowAlpha'](__dependency_7["default"]['active']);
    }), this['on'](__dependency_5["SlotFrameworkEvent"]['PLAY_SPIN_BTN_RELEASED_ANIM'], function () {
      _0x4015ee["playSpineReleasedAnim"]();
    });
  }, _0x3878e5["setAutoSpinCountToTop"] = function () {
    this["text"]["parent"] = this["node"];
  }, _0x3878e5["isEnableArrowAlpha"] = function (_0x38d8de) {
    this["arrow"]['getComponent'](__dependency_1["Sprite"])['color'] = new __dependency_1["Color"](0xff, 0xff, 0xff, _0x38d8de ? 0x80 : 0xff);
  }, _0x3878e5['setArrowAtAutoSpinAlpha'] = function (_0x4e9bc6) {
    this["isEnableArrowAtAutoSpinToAlpha"] = _0x4e9bc6;
  }, (0, __dependency_0["createClass"])(_0x5acdb6, [{
    'key': "status",
    'get': function () {
      return this['_status'];
    },
    'set': function (_0xcfc6c7) {
      this["_status"] = _0xcfc6c7;
    }
  }]), _0x5acdb6;
}(__dependency_3['default']))["prototype"], "spine", [_0x14fcba], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x280007 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x510702["prototype"], "image", [_0x4d63c1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4bfc56 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x510702["prototype"], "text", [_0x298f9a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2ff597 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x510702['prototype'], "arrow", [_0x156c41], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x25c588 = _0x510702)) || _0x25c588));
__dependency_1["cclegacy"]["_RF"]["pop"]();
