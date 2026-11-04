// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-BetToggleItem.ts.js
// SHA256: 18c50731e7a29a74dba52726aa044717c91cd33d36fe718721438a8e307931c4
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./main-WrapperData";
var __export_0;
export { __export_0 as BetToggleItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "BetToggleItem":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x2f9dea) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x22fc0c) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x7452e2) {
  void 0;
})(__dependency_2);
(function (_0x3bdbd1) {
  void 0;
})(__dependency_3);
(function (_0x329c9d) {
  void 0;
})(__dependency_4);
var _0x4c87ef, _0x1a69f8, _0x3be160, _0x466103, _0xcc78a8, _0xb2ea80, _0x1b0e7a;
__dependency_1["cclegacy"]["_RF"]['push']({}, "795ectCR+xAdoFwPWTEG66t", 'BetToggleItem', void 0x0);
var _0x334efb = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("BetToggleItem", (_0x4c87ef = _0x334efb('BetToggleItem'), _0x1a69f8 = (0, __dependency_3["inject"])('text', __dependency_1["Label"]), _0x3be160 = (0, __dependency_3["inject"])('Checkmark', __dependency_1["Node"]), _0x4c87ef((_0xb2ea80 = (0, __dependency_0["applyDecoratedDescriptor"])((_0xcc78a8 = function (_0x52085c) {
  function _0x41160e() {
    for (var _0x39c1ec, _0x4839a0 = arguments["length"], _0x419f2b = new Array(_0x4839a0), _0x2358ec = 0x0; _0x2358ec < _0x4839a0; _0x2358ec++) _0x419f2b[_0x2358ec] = arguments[_0x2358ec];
    return _0x39c1ec = Reflect.construct(_0x52085c, [this]["concat"](_0x419f2b).slice(1), new.target || _0x41160e) || this, (0, __dependency_0["initializerDefineProperty"])(_0x39c1ec, "text", _0xb2ea80, (0, __dependency_0["assertThisInitialized"])(_0x39c1ec)), (0, __dependency_0["initializerDefineProperty"])(_0x39c1ec, "checkmark", _0x1b0e7a, (0, __dependency_0["assertThisInitialized"])(_0x39c1ec)), _0x39c1ec["stakeVO"] = void 0x0, _0x39c1ec;
  }
  (0, __dependency_0["inheritsLoose"])(_0x41160e, _0x52085c);
  var _0x4fae39 = _0x41160e["prototype"];
  return _0x4fae39['onLoad'] = function () {}, _0x4fae39["start"] = function () {}, _0x4fae39["onDestroy"] = function () {
    _0x52085c['prototype']["onDestroy"]["call"](this);
  }, _0x4fae39["init"] = function (_0x4ce48e) {
    this["stakeVO"] = _0x4ce48e, this["setLabel"](this['stakeVO']["totalStake"]);
    var _0x583134 = this['node']["getComponent"](__dependency_1["Toggle"])["isChecked"] ? '#876A00' : '#C9C9CC';
    this["setLabelColor"](_0x583134), this["addEventTouch"]();
  }, _0x4fae39["addEventTouch"] = function () {
    var _0x21fdd3 = this,
      _0x5bb6da = this["node"]["getComponent"](__dependency_1["Toggle"]),
      _0x286cf6 = new __dependency_1["EventHandler"]();
    _0x286cf6["target"] = this['node'], _0x286cf6["component"] = "BetToggleItem", _0x286cf6["handler"] = __dependency_1["Toggle"]["EventType"]["TOGGLE"], _0x286cf6['emit'] = function (_0x3766f4) {
      var _0xc9b6db = _0x5bb6da["isChecked"] ? "#876A00" : '#C9C9CC';
      _0x21fdd3["setLabelColor"](_0xc9b6db);
    }, _0x5bb6da["checkEvents"]["push"](_0x286cf6), this["node"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x5bb6da["interactable"] && (_0x5bb6da["isChecked"] || _0x21fdd3["setLabelColor"]('#C9C9CC'));
    }, this), this["node"]['on'](__dependency_1["NodeEventType"]['MOUSE_LEAVE'], function () {
      _0x5bb6da["interactable"] && _0x21fdd3["setLabelColor"](_0x5bb6da["isChecked"] ? "#876A00" : "#C9C9CC");
    }, this), this["node"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x5bb6da["interactable"] && _0x21fdd3["setLabelColor"]("#876A00");
    }, this);
  }, _0x4fae39["setLabel"] = function (_0x3fda21) {
    this["text"]["string"] = '' + _0x3fda21;
  }, _0x4fae39['setLabelColor'] = function (_0xfa002a) {
    var _0x4861e7 = this["text"]["getComponent"](__dependency_1["Label"]);
    _0x4861e7 && (_0x4861e7["color"] = new __dependency_1['Color'](_0xfa002a));
  }, (0, __dependency_0["createClass"])(_0x41160e, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]['get'](__dependency_4['default']);
    }
  }]), _0x41160e;
}(__dependency_2["default"]))["prototype"], "text", [_0x1a69f8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1b0e7a = (0, __dependency_0["applyDecoratedDescriptor"])(_0xcc78a8["prototype"], 'checkmark', [_0x3be160], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x466103 = _0xcc78a8)) || _0x466103));
__dependency_1["cclegacy"]["_RF"]['pop']();
