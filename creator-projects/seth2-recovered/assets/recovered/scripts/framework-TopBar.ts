// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-TopBar.ts.js
// SHA256: 2c7db72db7be75cf42cb07b9b92fcc3d5e4ba5687f118c791270665350d0f9c9
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-JpBarControllerL";
import * as __dependency_6 from "./framework-CmmSlotUtils";
import * as __dependency_7 from "./framework-JpBarControllerP";
import * as __dependency_8 from "./framework-SlotFrameworkData";
import * as __dependency_9 from "./framework-MenuController";
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
(function (_0x14167f) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x2c0941) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x576c9b) {
  void 0;
})(__dependency_2);
(function (_0x9f0ff0) {
  void 0;
})(__dependency_3);
(function (_0x1cc2a9) {
  void 0;
})(__dependency_4);
(function (_0x4de8be) {
  void 0;
})(__dependency_5);
(function (_0x2fbb7c) {
  void 0;
})(__dependency_6);
(function (_0x44bcb8) {
  void 0;
})(__dependency_7);
(function (_0xe5b24c) {
  void 0;
})(__dependency_8);
(function (_0x375d14) {
  void 0;
})(__dependency_9);
var _0x3fd14a, _0x315d34, _0x1aff31, _0x2e282c, _0x3ef8d8, _0x190a76, _0x46e5e4;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "4754e6U6IpHNbNutG0zqCYm", "TopBar", void 0x0);
__dependency_1["_decorator"]['ccclass'], __dependency_1["_decorator"]["property"], __publish("default", (_0x3fd14a = (0, __dependency_4["inject"])('content/version', __dependency_1["Label"]), _0x315d34 = (0, __dependency_4["inject"])("content/bg", __dependency_1["Node"]), _0x1aff31 = (0, __dependency_4["inject"])("JpBar", __dependency_1["Node"]), _0x3ef8d8 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x2e282c = function (_0xfd90d5) {
  function _0x439bb3() {
    for (var _0x1e2195, _0xf81cd = arguments["length"], _0x3c0512 = new Array(_0xf81cd), _0x338432 = 0x0; _0x338432 < _0xf81cd; _0x338432++) _0x3c0512[_0x338432] = arguments[_0x338432];
    return _0x1e2195 = Reflect.construct(_0xfd90d5, [this]["concat"](_0x3c0512).slice(1), new.target || _0x439bb3) || this, (0, __dependency_0["initializerDefineProperty"])(_0x1e2195, "version", _0x3ef8d8, (0, __dependency_0['assertThisInitialized'])(_0x1e2195)), (0, __dependency_0["initializerDefineProperty"])(_0x1e2195, "barBgNode", _0x190a76, (0, __dependency_0['assertThisInitialized'])(_0x1e2195)), (0, __dependency_0["initializerDefineProperty"])(_0x1e2195, "jpBarNode", _0x46e5e4, (0, __dependency_0['assertThisInitialized'])(_0x1e2195)), _0x1e2195;
  }
  (0, __dependency_0['inheritsLoose'])(_0x439bb3, _0xfd90d5);
  var _0x2ab82f = _0x439bb3["prototype"];
  return _0x2ab82f['onLoad'] = function () {
    _0xfd90d5["prototype"]["onLoad"]["call"](this), this['setUI'](), this["setEventTouch"]();
  }, _0x2ab82f["start"] = function () {
    this['init']();
  }, _0x2ab82f["onDestroy"] = function () {}, _0x2ab82f['init'] = function () {}, _0x2ab82f['setEventTouch'] = function () {}, _0x2ab82f['showHideJPBar'] = function (_0xc72749) {
    void 0x0 === _0xc72749 && (_0xc72749 = !0x0), this['jpBarNode'] && (this["jpBarNode"]["active"] = _0xc72749, this["barBgNode"]['active'] = _0xc72749);
  }, _0x2ab82f['setUI'] = function () {
    var _0x430d22 = this['slotData']["getData"]()["filePaths"],
      _0x263e95 = _0x430d22["jpBarLPrefab"],
      _0x1845b2 = _0x430d22["jpBarPPrefab"],
      _0x203196 = _0x430d22["menuLPrefab"],
      _0x38e527 = _0x430d22["menuPPrefab"],
      _0x45f69c = [{
        'path': __dependency_6["CmmSlotUtils"]["getOrientationTarget"](_0x203196, _0x38e527),
        'component': __dependency_6["CmmSlotUtils"]["getOrientationTarget"](__dependency_9["default"], __dependency_9["default"])
      }, {
        'path': __dependency_6["CmmSlotUtils"]["getOrientationTarget"](_0x263e95, _0x1845b2),
        'component': __dependency_6["CmmSlotUtils"]["getOrientationTarget"](__dependency_5["default"], __dependency_7["default"])
      }];
    this['addSlotUI'](_0x45f69c);
  }, _0x2ab82f["addSlotUI"] = function (_0x3aca4a) {
    var _0x1132e8 = this;
    _0x3aca4a['forEach'](function (_0x5d729a) {
      var _0x1bf4bf = _0x5d729a["path"],
        _0x4d683e = _0x5d729a["component"],
        _0x1d62c1 = App['cache']['get'](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], _0x1bf4bf)["data"],
        _0x556338 = (0, __dependency_1["instantiate"])(_0x1d62c1);
      _0x4d683e != __dependency_5["default"] && _0x4d683e != __dependency_7["default"] || (_0x1132e8["jpBarNode"] = _0x556338), _0x556338["addComponent"](_0x4d683e), _0x1132e8["node"]["addChild"](_0x556338);
    });
  }, _0x2ab82f["setVersion"] = function (_0x36e87b) {
    this['version']["string"] = _0x36e87b;
  }, _0x2ab82f["addEvents"] = function () {
    _0xfd90d5['prototype']["addEvents"]["call"](this);
  }, (0, __dependency_0['createClass'])(_0x439bb3, [{
    'key': 'slotData',
    'get': function () {
      return App["dataCenter"]["get"](__dependency_8["default"]);
    }
  }]), _0x439bb3;
}(__dependency_3["default"]))["prototype"], "version", [_0x3fd14a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x190a76 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2e282c["prototype"], "barBgNode", [_0x315d34], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x46e5e4 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x2e282c["prototype"], 'jpBarNode', [_0x1aff31], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2e282c));
__dependency_1["cclegacy"]['_RF']["pop"]();
