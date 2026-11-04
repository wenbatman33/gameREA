// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-JpBarControllerBase.ts.js
// SHA256: 92791f8c5dcd6ac5ba564c562f97c91727db977cee450b0dc6fab789d6c9b74c
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-AdapterEvent";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./main-WrapperData";
import * as __dependency_7 from "./framework-SlotFrameworkEvent";
import * as __dependency_8 from "./framework-CmmSlotUtils";
import * as __dependency_9 from "./framework-ReplayModel";
import * as __dependency_10 from "./framework-SlotFrameworkData";
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
(function (_0xfa4a0b) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x20eb2a) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x11a3c2) {
  void 0;
})(__dependency_2);
(function (_0xa52ed7) {
  void 0;
})(__dependency_3);
(function (_0x4adf92) {
  void 0;
})(__dependency_4);
(function (_0x511daf) {
  void 0;
})(__dependency_5);
(function (_0x8b4b13) {
  void 0;
})(__dependency_6);
(function (_0x554238) {
  void 0;
})(__dependency_7);
(function (_0x4a8864) {
  void 0;
})(__dependency_8);
(function (_0x1300ff) {
  void 0;
})(__dependency_9);
(function (_0x468b4e) {
  void 0;
})(__dependency_10);
var _0x2df13b, _0x5da601, _0x41953a, _0x118e24, _0x494cb6, _0x138870, _0x2f2520, _0x51601f, _0x23463b, _0x4868d2, _0x3a185f, _0x243e84, _0x2285ef, _0x25c44c, _0x37396a, _0x221753, _0x4c8a1f, _0x1f77f9, _0x3d7210, _0x590a7c, _0x572db6, _0x54fbd0, _0x28b436;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '6c4636K/iZP76OHQL/MnzGJ', "JpBarControllerBase", void 0x0);
var _0x51ee0d = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']["property"], __publish("default", (_0x2df13b = _0x51ee0d("JpBarControllerBase"), _0x5da601 = (0, __dependency_5["inject"])("content", __dependency_1['Node']), _0x41953a = (0, __dependency_5["inject"])("content/line2", __dependency_1['Node']), _0x118e24 = (0, __dependency_5["inject"])("content/mini/title", __dependency_1["Label"]), _0x494cb6 = (0, __dependency_5["inject"])("content/minor/title", __dependency_1["Label"]), _0x138870 = (0, __dependency_5["inject"])("content/major/title", __dependency_1["Label"]), _0x2f2520 = (0, __dependency_5["inject"])("content/grand/title", __dependency_1["Label"]), _0x51601f = (0, __dependency_5["inject"])("content/mini/num", __dependency_1["Label"]), _0x23463b = (0, __dependency_5["inject"])("content/minor/num", __dependency_1["Label"]), _0x4868d2 = (0, __dependency_5["inject"])("content/major/num", __dependency_1["Label"]), _0x3a185f = (0, __dependency_5["inject"])("content/grand/num", __dependency_1["Label"]), _0x2df13b((_0x25c44c = (0, __dependency_0["applyDecoratedDescriptor"])((_0x2285ef = function (_0x4c5d89) {
  function _0x166564() {
    var _0x5a4e51;
    return _0x5a4e51 = Reflect.construct(_0x4c5d89, [], new.target || _0x166564) || this, (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "content", _0x25c44c, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "line2", _0x37396a, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "miniTitle", _0x221753, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "minorTitle", _0x4c8a1f, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, 'majorTitle', _0x1f77f9, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, 'grandTitle', _0x3d7210, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "miniNum", _0x590a7c, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "minorNum", _0x572db6, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "majorNum", _0x54fbd0, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), (0, __dependency_0['initializerDefineProperty'])(_0x5a4e51, "grandNum", _0x28b436, (0, __dependency_0["assertThisInitialized"])(_0x5a4e51)), _0x5a4e51["tweenMap"] = new Map(), _0x5a4e51;
  }
  (0, __dependency_0["inheritsLoose"])(_0x166564, _0x4c5d89);
  var _0x44b1f9 = _0x166564["prototype"];
  return _0x44b1f9["onLoad"] = function () {
    _0x4c5d89['prototype']["onLoad"]["call"](this);
  }, _0x44b1f9["start"] = function () {
    __dependency_9["default"]['isReplay'] ? this["replayinit"]() : this['init']();
  }, _0x44b1f9["onDestroy"] = function () {
    _0x4c5d89['prototype']['onDestroy']['call'](this);
  }, _0x44b1f9["init"] = function () {
    this["miniTitle"] && (this['miniTitle']["string"] = App["getLanguage"]('jp_mini')), this["minorTitle"] && (this["minorTitle"]["string"] = App["getLanguage"]('jp_minor')), this["majorTitle"] && (this["majorTitle"]["string"] = App["getLanguage"]("jp_major")), this["grandTitle"] && (this["grandTitle"]["string"] = App['getLanguage']("jp_grand"));
    var _0x2e4276 = this['slotData']['tempJpPools'];
    this["miniNum"]["string"] = __dependency_8['CmmSlotUtils']["formatJPNumber"]((null == _0x2e4276 ? void 0x0 : _0x2e4276['jp-mini']) || 0x0, !0x0, !0x0, 0x2), this["minorNum"]["string"] = __dependency_8['CmmSlotUtils']["formatJPNumber"]((null == _0x2e4276 ? void 0x0 : _0x2e4276["jp-minor"]) || 0x0, !0x0, !0x0, 0x2), this['majorNum']["string"] = __dependency_8['CmmSlotUtils']["formatJPNumber"]((null == _0x2e4276 ? void 0x0 : _0x2e4276['jp-major']) || 0x0, !0x0, !0x0, 0x2), this['grandNum']["string"] = __dependency_8['CmmSlotUtils']['formatJPNumber']((null == _0x2e4276 ? void 0x0 : _0x2e4276['jp-grand']) || 0x0, !0x0, !0x0, 0x2);
  }, _0x44b1f9["replayinit"] = function () {
    this["miniNum"]['string'] = '0', this["minorNum"]["string"] = '0', this["majorNum"]["string"] = '0', this['grandNum']["string"] = '0';
    var _0x2cb12d = __dependency_9["default"]["getData"]()["betData"]["replayMeta"]["pool"];
    this["miniNum"]["string"] = __dependency_8['CmmSlotUtils']["formatJPNumber"]((null == _0x2cb12d ? void 0x0 : _0x2cb12d['jp-mini']) || 0x0, !0x0, !0x0, 0x2), this["minorNum"]["string"] = __dependency_8['CmmSlotUtils']["formatJPNumber"]((null == _0x2cb12d ? void 0x0 : _0x2cb12d['jp-minor']) || 0x0, !0x0, !0x0, 0x2), this['majorNum']["string"] = __dependency_8['CmmSlotUtils']['formatJPNumber']((null == _0x2cb12d ? void 0x0 : _0x2cb12d["jp-major"]) || 0x0, !0x0, !0x0, 0x2), this["grandNum"]["string"] = __dependency_8['CmmSlotUtils']['formatJPNumber']((null == _0x2cb12d ? void 0x0 : _0x2cb12d["jp-grand"]) || 0x0, !0x0, !0x0, 0x2);
  }, _0x44b1f9["yoyoAnim"] = function () {
    App["dataCenter"]['get'](__dependency_6["default"])["orientation"];
    __dependency_4["EOrientationType"]['LANDSCAPE'];
  }, _0x44b1f9['setJackpotValue'] = function (_0xa94165) {
    var _0x3310a9 = this,
      _0x2ce4ec = _0xa94165["data"];
    [{
      'target': this["miniNum"],
      'data': _0x2ce4ec['jp-mini'],
      'key': 'jp-mini'
    }, {
      'target': this['minorNum'],
      'data': _0x2ce4ec['jp-minor'],
      'key': "jp-minor"
    }, {
      'target': this["majorNum"],
      'data': _0x2ce4ec["jp-major"],
      'key': "jp-major"
    }, {
      'target': this["grandNum"],
      'data': _0x2ce4ec["jp-grand"],
      'key': 'jp-grand'
    }]['forEach'](function (_0x57baa2) {
      var _0xba052 = _0x57baa2["target"],
        _0x2af1fd = _0x57baa2["data"],
        _0x4ee738 = _0x57baa2["key"];
      Number.isFinite(_0x2af1fd) && _0x2af1fd >= 0 && _0x3310a9["dynamicEasingTime"](_0xba052, _0x2af1fd, _0x4ee738);
    });
  }, _0x44b1f9["dynamicEasingTime"] = function (_0xf83cf2, _0x32bea3, _0x18caf9) {
    var _0x4c3615 = parseFloat(_0xf83cf2["string"]["replace"](/,/g, ''));
    if (0x0 !== _0x4c3615) {
      if (this['tweenMap']["get"](_0x18caf9) && __dependency_1["Tween"]["stopAllByTag"](__dependency_2["CmmUtils"]["hashCode"](_0x18caf9)), _0x4c3615 > _0x32bea3) _0xf83cf2["string"] = __dependency_8['CmmSlotUtils']["formatJPNumber"](_0x32bea3, !0x0, !0x0, 0x2);else {
        var _0x314738 = Math['abs'](_0x32bea3 - _0x4c3615) / 0.5;
        if (!(_0x314738 < 0x1)) {
          var _0x43cb58 = {
              'label': _0xf83cf2,
              'start': _0x4c3615,
              'end': _0x32bea3,
              'tweenTime': _0x314738,
              'digital': 0x2,
              'useThousandsSeparator': !0x0,
              'isRounding': !0x1,
              'callback': null,
              'tag': __dependency_2["CmmUtils"]["hashCode"](_0x18caf9)
            },
            _0x3a2ba9 = __dependency_8['CmmSlotUtils']["tweenJPNum"](_0x43cb58);
          this["tweenMap"]['set'](_0x18caf9, _0x3a2ba9);
        }
      }
    } else _0xf83cf2['string'] = __dependency_8['CmmSlotUtils']["formatJPNumber"](_0x32bea3, !0x0, !0x0, 0x2);
  }, _0x44b1f9['addEvents'] = function () {
    var _0x3a9d6d = this;
    _0x4c5d89['prototype']["addEvents"]["call"](this), this['on'](__dependency_7["SlotFrameworkEvent"]['NOTIFY_JACKPOT_RESPONSE'], __dependency_2["CmmUtils"]["throttle"](function (_0x4e6044) {
      __dependency_9["default"]["isReplay"] || _0x3a9d6d["setJackpotValue"](_0x4e6044["data"]);
    }));
  }, (0, __dependency_0["createClass"])(_0x166564, [{
    'key': "slotData",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_10["default"]);
    }
  }]), _0x166564;
}(__dependency_3["default"]))["prototype"], "content", [_0x5da601], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x37396a = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef['prototype'], "line2", [_0x41953a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x221753 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef["prototype"], "miniTitle", [_0x118e24], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4c8a1f = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef["prototype"], "minorTitle", [_0x494cb6], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1f77f9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef['prototype'], "majorTitle", [_0x138870], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3d7210 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef["prototype"], "grandTitle", [_0x2f2520], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x590a7c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef["prototype"], "miniNum", [_0x51601f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x572db6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef['prototype'], "minorNum", [_0x23463b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x54fbd0 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef["prototype"], 'majorNum', [_0x4868d2], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x28b436 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2285ef['prototype'], "grandNum", [_0x3a185f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x243e84 = _0x2285ef)) || _0x243e84));
__dependency_1["cclegacy"]['_RF']["pop"]();
