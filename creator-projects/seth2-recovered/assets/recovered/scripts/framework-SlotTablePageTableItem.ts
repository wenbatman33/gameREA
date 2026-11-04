// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotTablePageTableItem.ts.js
// SHA256: f92b04909ca253402dc09f8b08cd11e1ebd7f23c75888acbfd670a03ba0e0405
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-SlotFrameworkData";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
var __export_0;
export { __export_0 as SlotTablePageTableItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotTablePageTableItem":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x130118) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x38d4b8) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x16865a) {
  void 0;
})(__dependency_2);
(function (_0x5ee32f) {
  void 0;
})(__dependency_3);
(function (_0x2c6075) {
  void 0;
})(__dependency_4);
(function (_0x5eb568) {
  void 0;
})(__dependency_5);
(function (_0x5bc409) {
  void 0;
})(__dependency_6);
var _0x1738ce, _0x4b5d8b, _0x30406f, _0x3856db, _0x32c86b;
__dependency_1["cclegacy"]['_RF']["push"]({}, '7711ajO4ydIwLFSlv6Kdp22', "SlotTablePageTableItem", void 0x0);
var _0xb8cd44,
  _0x436667 = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']['property'];
!function (_0x48c843) {
  _0x48c843[_0x48c843["NONE"] = 0x0] = "NONE", _0x48c843[_0x48c843["NORMAL"] = 0x1] = "NORMAL", _0x48c843[_0x48c843["LOADING"] = 0x2] = "LOADING";
}(_0xb8cd44 || (_0xb8cd44 = {}));
__publish('SlotTablePageTableItem', (_0x1738ce = _0x436667("SlotTablePageTableItem"), _0x4b5d8b = (0, __dependency_4['inject'])("content/title", __dependency_1["Label"]), _0x1738ce((_0x32c86b = (0, __dependency_0["applyDecoratedDescriptor"])((_0x3856db = function (_0x124f2e) {
  function _0x62617c() {
    for (var _0xd9fc61, _0x36e4b1 = arguments["length"], _0x5143c5 = new Array(_0x36e4b1), _0xba1702 = 0x0; _0xba1702 < _0x36e4b1; _0xba1702++) _0x5143c5[_0xba1702] = arguments[_0xba1702];
    return _0xd9fc61 = Reflect.construct(_0x124f2e, [this]["concat"](_0x5143c5).slice(1), new.target || _0x62617c) || this, (0, __dependency_0["initializerDefineProperty"])(_0xd9fc61, "title", _0x32c86b, (0, __dependency_0["assertThisInitialized"])(_0xd9fc61)), _0xd9fc61["pageIndex"] = null, _0xd9fc61;
  }
  (0, __dependency_0["inheritsLoose"])(_0x62617c, _0x124f2e);
  var _0x2d7556 = _0x62617c["prototype"];
  return _0x2d7556['onLoad'] = function () {
    _0x124f2e["prototype"]['onLoad']['call'](this);
  }, _0x2d7556["start"] = function () {
    this["init"]();
  }, _0x2d7556["onDestroy"] = function () {
    _0x124f2e["prototype"]['onDestroy']['call'](this);
  }, _0x2d7556['init'] = function () {
    this['setEventTouch']();
  }, _0x2d7556["setEventTouch"] = function () {
    var _0x5cf47b = this;
    __dependency_2["CmmUtils"]["addBtnClickEvent"](this["node"], __dependency_2["CmmUtils"]['throttle'](function () {
      _0x5cf47b['node']['getComponent'](__dependency_1["Toggle"])["isChecked"] || (dispatch(__dependency_6['SlotFrameworkEvent']["SLOT_TABLE_START_LOADING"]), dispatch(__dependency_6['SlotFrameworkEvent']['SLOT_TABLES_RECYCLE_ALL']), _0x5cf47b["sendGetSlotTablePageData"](_0x5cf47b['pageIndex']), dispatch(__dependency_6['SlotFrameworkEvent']['PLAY_CLICK_BTM']));
    }));
  }, _0x2d7556['setTitle'] = function (_0x5a8749) {
    this["title"]["string"] = _0x5a8749;
  }, _0x2d7556["sendGetSlotTablePageData"] = function (_0x533183) {
    dispatch(__dependency_6['SlotFrameworkEvent']["SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST"], {
      'page': _0x533183
    });
  }, _0x2d7556["reset"] = function () {
    this["node"]["active"] = !0x0;
  }, _0x2d7556["select"] = function () {
    this['node']['getComponent'](__dependency_1["Toggle"])["isChecked"] = !0x0;
  }, _0x2d7556['setData'] = function (_0xa33595) {
    var _0x570c99 = _0xa33595["tabTitle"],
      _0x2ca7c0 = _0xa33595["pageIndex"];
    this["pageIndex"] = _0x2ca7c0, this['setTitle'](_0x570c99);
  }, _0x2d7556['show'] = function () {
    this["node"]["active"] = !0x0;
  }, _0x2d7556["hide"] = function () {
    this["node"]["active"] = !0x1;
  }, _0x2d7556["addEvents"] = function () {}, (0, __dependency_0["createClass"])(_0x62617c, [{
    'key': 'data',
    'get': function () {
      return App["dataCenter"]['get'](__dependency_5['default']);
    }
  }]), _0x62617c;
}(__dependency_3["default"]))["prototype"], "title", [_0x4b5d8b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x30406f = _0x3856db)) || _0x30406f));
__dependency_1["cclegacy"]["_RF"]["pop"]();
