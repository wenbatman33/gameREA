// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotTableViewBase.ts.js
// SHA256: 659fb4c99123be2a7488472911123d3b09a5388c5764a3bcdd39c85c92cbd0b0
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-CmmUtils";
import * as __dependency_5 from "./main-UIView";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./framework-SlotTableItem2";
import * as __dependency_8 from "./framework-SlotTablePageTableItem";
import * as __dependency_9 from "./framework-SlotFrameworkData";
import * as __dependency_10 from "./framework-SlotFrameworkEvent";
import * as __dependency_11 from "./framework-PlatformModel";
import * as __dependency_12 from "./framework-SlotTableModel";
import * as __dependency_13 from "./framework-type2";
import * as __dependency_14 from "./framework-CmmSlotUtils";
var __export_0;
export { __export_0 as EStatus };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EStatus":
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
(function (_0x455d8c) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x2b85e5) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x23daf2) {
  void 0;
})(__dependency_2);
(function (_0x3e0869) {
  void 0;
})(__dependency_3);
(function (_0x11bd7b) {
  void 0;
})(__dependency_4);
(function (_0x44d5f9) {
  void 0;
})(__dependency_5);
(function (_0x18dba7) {
  void 0;
})(__dependency_6);
(function (_0xcfd5c8) {
  void 0;
})(__dependency_7);
(function (_0x16da32) {
  void 0;
})(__dependency_8);
(function (_0x392d44) {
  void 0;
})(__dependency_9);
(function (_0xd3fb57) {
  void 0;
})(__dependency_10);
(function (_0x5214b3) {
  void 0;
})(__dependency_11);
(function (_0x3fc9c2) {
  void 0;
})(__dependency_12);
(function (_0x4b9aeb) {
  void 0;
})(__dependency_13);
(function (_0xcb81a2) {
  void 0;
})(__dependency_14);
var _0xf37773, _0x5100e8, _0x2ad933, _0x4b7519, _0x36f01, _0x1365c9, _0x4f5cd5, _0x188c81, _0xf22210, _0x56fb7d, _0xab1ca8, _0x37af49, _0x52507f, _0x20c4bb, _0x3ac0d3, _0x5140a4, _0x141c87, _0x232ca8, _0x5ac8c1, _0x1a2b7b, _0x5cc5c0, _0x2c93d8, _0x3a51b8, _0x49cad5, _0xa6cca7, _0x554b18, _0x12d835, _0x36c325, _0x32b266, _0x574731, _0x3c03a3, _0x461e78, _0x45e3cc, _0x14c7b3, _0x24a406, _0x2f5da4, _0x4884fe, _0x3aece5, _0x4d3872, _0x4f3c9e, _0x31cf28, _0x34e72, _0x5a1cc8, _0x30a7d4, _0xcdf46d, _0x41bba7, _0xe2ca88, _0x104b40, _0x2a6cb2, _0x2b0c73, _0x2e1ed9, _0x2b13ba, _0x2a779a, _0x3db6f8, _0x4b6eec, _0x273c12, _0x5e4fc3, _0x6f9c8d, _0x1e2cca, _0x333106, _0x24b36f, _0x412925, _0x528c16;
__publish("EStatus", void 0x0), __dependency_1["cclegacy"]["_RF"]["push"]({}, '6d83360q6JA9pQCHwuUAXde', "SlotTableViewBase", void 0x0), function (_0x567758) {
  _0x567758[_0x567758['EMPTY'] = 0x0] = "EMPTY", _0x567758[_0x567758["FULL"] = 0x1] = "FULL", _0x567758[_0x567758["LOCKED"] = 0x2] = 'LOCKED', _0x567758[_0x567758["SELF_FULL"] = 0x3] = 'SELF_FULL', _0x567758[_0x567758["SELF_LOCKED"] = 0x4] = "SELF_LOCKED";
}(_0x412925 || (_0x412925 = __publish("EStatus", {}))), function (_0x4dde1f) {
  _0x4dde1f[_0x4dde1f['SHOW_ALL'] = 0x0] = "SHOW_ALL", _0x4dde1f[_0x4dde1f['SHOW_EMPTY'] = 0x1] = 'SHOW_EMPTY';
}(_0x528c16 || (_0x528c16 = {}));
var _0x3d93ef = __dependency_1["_decorator"]["ccclass"];
__publish("default", (_0xf37773 = _0x3d93ef('SlotTableViewBase'), _0x5100e8 = (0, __dependency_6["inject"])("content/topContent/line", __dependency_1["Node"]), _0x2ad933 = (0, __dependency_6["inject"])("content/topContent/closeBtn", __dependency_1["Node"]), _0x4b7519 = (0, __dependency_6["inject"])("content/topContent/exitBtn", __dependency_1["Node"]), _0x36f01 = (0, __dependency_6["inject"])("content/topContent/showTableToggleContent", __dependency_1["Node"]), _0x1365c9 = (0, __dependency_6["inject"])("content/topContent/showTableToggleContent/ToggleGroup", __dependency_1["Node"]), _0x4f5cd5 = (0, __dependency_6["inject"])("content/topContent/showTableToggleContent/ToggleGroup/allToggle", __dependency_1["Node"]), _0x188c81 = (0, __dependency_6["inject"])("content/topContent/showTableToggleContent/ToggleGroup/allToggle/text", __dependency_1["Node"]), _0xf22210 = (0, __dependency_6["inject"])("content/topContent/showTableToggleContent/ToggleGroup/emptyToggle", __dependency_1["Node"]), _0x56fb7d = (0, __dependency_6["inject"])("content/topContent/showTableToggleContent/ToggleGroup/emptyToggle/text", __dependency_1["Node"]), _0xab1ca8 = (0, __dependency_6["inject"])("content/ScrollView/view/content", __dependency_1["Node"]), _0x37af49 = (0, __dependency_6["inject"])('content/pageTabsContent/ScrollView/view/content', __dependency_1["Node"]), _0x52507f = (0, __dependency_6["inject"])("content/infoContent", __dependency_1["Node"]), _0x20c4bb = (0, __dependency_6["inject"])('content/infoContent/bg', __dependency_1["Node"]), _0x3ac0d3 = (0, __dependency_6["inject"])("content/infoContent/content", __dependency_1["Node"]), _0x5140a4 = (0, __dependency_6["inject"])('content/infoContent/content/infoRow/table', __dependency_1["Node"]), _0x141c87 = (0, __dependency_6["inject"])("content/infoContent/content/infoRow/slotTableBlock/slotTableNumber", __dependency_1["Label"]), _0x232ca8 = (0, __dependency_6["inject"])('content/infoContent/content/infoRow/table/scoreCol/hourMask/hour', __dependency_1["Label"]), _0x5ac8c1 = (0, __dependency_6["inject"])('content/infoContent/content/infoRow/table/scoreCol/dayMask/day', __dependency_1["Label"]), _0x1a2b7b = (0, __dependency_6["inject"])("content/infoContent/content/infoRow/table/rateCol/hourMask/hour", __dependency_1["Label"]), _0x5cc5c0 = (0, __dependency_6["inject"])('content/infoContent/content/infoRow/table/rateCol/dayMask/day', __dependency_1["Label"]), _0x2c93d8 = (0, __dependency_6["inject"])('content/infoContent/content/infoRow/buttons/confirmBtn', __dependency_1["Node"]), _0x3a51b8 = (0, __dependency_6["inject"])('content/infoContent/content/infoRow/buttons/selectBtn', __dependency_1["Node"]), _0x49cad5 = (0, __dependency_6["inject"])("content/infoContent/content/infoRow/buttons/lockBtn", __dependency_1["Node"]), _0xa6cca7 = (0, __dependency_6["inject"])('content/infoContent/content/infoRow/buttons/remainTimeTip', __dependency_1["Node"]), _0x554b18 = (0, __dependency_6["inject"])("content/infoContent/content/infoRow/buttons/remainTimeTip/time", __dependency_1["Node"]), _0x12d835 = (0, __dependency_6["inject"])("content/infoContent/content/infoRow/tipContentMask", __dependency_1["Node"]), _0x36c325 = (0, __dependency_6["inject"])("content/infoContent/content/infoRow/tipContentMask/tipsLabel", __dependency_1["Label"]), _0x32b266 = (0, __dependency_6["inject"])("content/loadingContent", __dependency_1["Node"]), _0x574731 = (0, __dependency_6["inject"])("content/loadingContent/ProgressBar", __dependency_1["ProgressBar"]), _0xf37773((_0x45e3cc = (0, __dependency_0['applyDecoratedDescriptor'])((_0x461e78 = function (_0x2b2ced) {
  function _0x382f2d() {
    for (var _0x155126, _0x290169 = arguments["length"], _0x311a4e = new Array(_0x290169), _0x4c6674 = 0x0; _0x4c6674 < _0x290169; _0x4c6674++) _0x311a4e[_0x4c6674] = arguments[_0x4c6674];
    return _0x155126 = Reflect.construct(_0x2b2ced, [this]["concat"](_0x311a4e).slice(1), new.target || _0x382f2d) || this, (0, __dependency_0['initializerDefineProperty'])(_0x155126, "line", _0x45e3cc, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "closeBtn", _0x14c7b3, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, 'exitBtn', _0x24a406, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "showTableToggleContent", _0x2f5da4, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "showTableToggleGroup", _0x4884fe, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "allToggle", _0x3aece5, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "allToggleText", _0x4d3872, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, 'emptyToggle', _0x4f3c9e, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "emptyToggleText", _0x31cf28, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "ScrollViewContent", _0x34e72, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "pageTabsContent", _0x5a1cc8, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "infoContent", _0x30a7d4, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "infoContentBg", _0xcdf46d, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "infoContentContent", _0x41bba7, (0, __dependency_0["assertThisInitialized"])(_0x155126)), _0x155126["notOpenContentNumber"] = void 0x0, _0x155126['previousOneNumber'] = void 0x0, _0x155126["previousTwoNumber"] = void 0x0, (0, __dependency_0['initializerDefineProperty'])(_0x155126, "infoRowTable", _0xe2ca88, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, 'slotTableNumber', _0x104b40, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, 'betHour', _0x2a6cb2, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "betDay", _0x2b0c73, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "rateHour", _0x2e1ed9, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "rateDay", _0x2b13ba, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "confirmBtn", _0x2a779a, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "selectBtn", _0x3db6f8, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "lockBtn", _0x4b6eec, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "remainTimeTip", _0x273c12, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "remainTimeTipTime", _0x5e4fc3, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "tipContentMask", _0x6f9c8d, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "tipsLabel", _0x1e2cca, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, "loadingContent", _0x333106, (0, __dependency_0["assertThisInitialized"])(_0x155126)), (0, __dependency_0['initializerDefineProperty'])(_0x155126, 'loadingBar', _0x24b36f, (0, __dependency_0["assertThisInitialized"])(_0x155126)), _0x155126["slotTableMap"] = new Map(), _0x155126["currentRoomId"] = __dependency_11["default"]["getData"]()["table"] ? __dependency_11["default"]['getData']()["table"]["roomId"] : 0x0, _0x155126["_selectRoomId"] = __dependency_11["default"]["getData"]()['table'] ? __dependency_11["default"]['getData']()["table"]["roomId"] : 0x0, _0x155126['isUpdateSelectFlag'] = !0x0, _0x155126["lockVO"] = null, _0x155126["isFirstShowFullTip"] = !0x1, _0x155126['filterMode'] = _0x528c16["SHOW_ALL"], _0x155126['selectPage'] = 0x0, _0x155126["tabsMap"] = new Map(), _0x155126;
  }
  (0, __dependency_0["inheritsLoose"])(_0x382f2d, _0x2b2ced);
  var _0xfdbac9 = _0x382f2d['prototype'];
  return _0xfdbac9["onLoad"] = function () {
    _0x2b2ced["prototype"]["onLoad"]["call"](this), this["createItemPool"]();
  }, _0xfdbac9["start"] = function () {
    this["createTabItem"]();
  }, _0xfdbac9["update"] = function () {
    this["isUpdateSelectFlag"] && (this["updateBtnsStatus"](), this["isUpdateSelectFlag"] = !0x1);
  }, _0xfdbac9["onDestroy"] = function () {
    _0x2b2ced["prototype"]["onDestroy"]["call"](this);
  }, _0xfdbac9["show"] = function (_0xa31890) {
    this["init"]();
  }, _0xfdbac9["close"] = function () {
    _0x2b2ced["prototype"]["close"]["call"](this), this["recycleAll"](), this["stopLoading"](), this["unschedule"](this["syncSlotTables"]), dispatch(__dependency_10["SlotFrameworkEvent"]["VIEW_CLOSE_TABLE"]);
  }, _0xfdbac9['init'] = function () {
    var _0x5be5e1 = this['args'];
    if (this["setEventTouch"](), __dependency_11["default"]['getData']()["tableMeta"] ? this["selectPage"] = __dependency_11["default"]['getData']()['tableMeta']['currentPage'] : this['selectPage'] = 0x1, _0x5be5e1) {
      var _0x2fe99e = __dependency_11["default"]["getData"](),
        _0x9bb18a = _0x2fe99e["table"],
        _0x4d790e = _0x2fe99e['tables'],
        _0x2d3bca = {
          'data': {
            'lock': _0x9bb18a["lock"],
            'tables': _0x4d790e,
            'detail': _0x9bb18a["detail"]
          }
        };
      __dependency_12["default"]['setData'](_0x9bb18a), __dependency_11["default"]["getData"]()["table"] && 0x0 == __dependency_11["default"]["getData"]()["table"]["roomId"] && 0x0 == __dependency_11["default"]["getData"]()["table"]['number'] && (this["closeBtn"] && (this["closeBtn"]["active"] = !0x1), this['showFullTip'](), this["isFirstShowFullTip"] = !0x0), dispatch(__dependency_10["SlotFrameworkEvent"]["SLOT_TABLE_PAGE_DATA_RESPONSE"], _0x2d3bca), dispatch(__dependency_10["SlotFrameworkEvent"]['SLOT_TABLE_RESPONSE'], _0x2d3bca);
    } else this["getSlotTablesData"]();
    this["isFirstShowFullTip"] = !0x0, this['hideBtns'](), this["tipsLabel"]['string'] = '', this["setInfoHight"](), this["setShowTableToggleLayout"](), this["setLockVO"](__dependency_11["default"]["getData"]()["table"]["lock"]), this["schedule"](this['syncSlotTables'], 0x12c), this["args"] = !0x1;
  }, _0xfdbac9["setEventTouch"] = function () {
    var _0x5e765e = this;
    this["closeBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_4["CmmUtils"]["debounce"](function () {
      _0x5e765e["close"](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
    })), this['onI'](__dependency_1["Input"]["EventType"]["KEY_DOWN"], function (_0x3e106d) {
      _0x3e106d["keyCode"];
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this['confirmBtn'], function () {
      _0x5e765e['close'](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]['addBtnClickEvent'](this['selectBtn'], function () {
      _0x5e765e["changeTableAlert"](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["lockBtn"], function () {
      _0x5e765e['lockTableAlert']();
    });
    var _0x5c7a10 = new __dependency_1["EventHandler"]();
    _0x5c7a10["target"] = this["ScrollViewContent"], _0x5c7a10["component"] = __dependency_4["CmmUtils"]["extractContentBetweenAngleBrackets"](this["ScrollViewContent"]["name"])[0x0], _0x5c7a10["handler"] = __dependency_1["Node"]['EventType']["TOUCH_END"], _0x5c7a10['emit'] = function (_0x4903bf) {
      if (_0x4903bf[0x0]["node"]["getComponent"](__dependency_7["SlotTableItem2"])["tableVO"]) {
        var _0x44bdd1 = _0x4903bf[0x0]["node"]['getComponent'](__dependency_7["SlotTableItem2"])['tableVO']["roomId"];
        _0x5e765e["selectRoomId"] = _0x44bdd1, _0x5e765e["isUpdateSelectFlag"] = !0x0;
      }
    }, this["ScrollViewContent"]["getComponent"](__dependency_1["ToggleContainer"])["checkEvents"]["push"](_0x5c7a10), __dependency_4["CmmUtils"]["addToggleCheckEvent"](this["showTableToggleGroup"], function (_0x49fde2) {
      switch (__dependency_4["CmmUtils"]["extractNameBeforeBrackets"](_0x49fde2[0x0]["name"])[0x0]) {
        case 'allToggle':
          _0x5e765e["setFilterMode"](_0x528c16["SHOW_ALL"]);
          break;
        case "emptyToggle":
          _0x5e765e["setFilterMode"](_0x528c16['SHOW_EMPTY']);
      }
      _0x5e765e["allToggle"]['getComponent'](__dependency_1["Toggle"])['interactable'] = !0x1, _0x5e765e['emptyToggle']["getComponent"](__dependency_1["Toggle"])["interactable"] = !0x1, _0x5e765e["scheduleOnce"](function () {
        _0x5e765e["allToggle"]["getComponent"](__dependency_1["Toggle"])['interactable'] = !0x0, _0x5e765e['emptyToggle']["getComponent"](__dependency_1["Toggle"])["interactable"] = !0x0;
      }, 0.5), _0x5e765e['setFilterTable'](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }), __dependency_4["CmmUtils"]["addBtnClickEvent"](this["exitBtn"], function () {
      dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]), dispatch(__dependency_10["SlotFrameworkEvent"]["SHOW_EXIT_ALERT"]);
    }), this['setPageTabsEvent']();
  }, _0xfdbac9['setPageTabsEvent'] = function () {
    var _0x1a7941 = this,
      _0x24c0f4 = new __dependency_1["EventHandler"]();
    _0x24c0f4['target'] = this["pageTabsContent"], _0x24c0f4["component"] = __dependency_4["CmmUtils"]["extractContentBetweenAngleBrackets"](this["pageTabsContent"]["name"])[0x0], _0x24c0f4["handler"] = __dependency_1["Node"]["EventType"]["TOUCH_END"], _0x24c0f4["emit"] = function (_0x4e1f6c) {
      var _0x3ad2f9 = _0x4e1f6c[0x0]["node"]["getComponent"](__dependency_8["SlotTablePageTableItem"])["pageIndex"];
      _0x1a7941['selectPage'] = _0x3ad2f9;
    }, this["pageTabsContent"]["getComponent"](__dependency_1["ToggleContainer"])['checkEvents']["push"](_0x24c0f4);
  }, _0xfdbac9["setFilterMode"] = function (_0x4127ea) {
    this["filterMode"] = _0x4127ea;
  }, _0xfdbac9['setFilterTable'] = function () {
    var _0x38bf11,
      _0x3279fc = this,
      _0x10347a = ((_0x38bf11 = {})[_0x528c16['SHOW_ALL']] = function () {
        return _0x3279fc["showAllTable"]();
      }, _0x38bf11[_0x528c16["SHOW_EMPTY"]] = function () {
        return _0x3279fc["showEmptyTable"]();
      }, _0x38bf11);
    _0x10347a[this['filterMode']] && _0x10347a[this["filterMode"]]();
  }, _0xfdbac9["showAllTable"] = function () {
    this['slotTableMap']["forEach"](function (_0x5b22f0) {
      _0x5b22f0["node"]['active'] || (_0x5b22f0['node']["active"] = !0x0);
    });
  }, _0xfdbac9["showEmptyTable"] = function () {
    this["slotTableMap"]["forEach"](function (_0x5bdb95) {
      _0x5bdb95["tableVO"]["status"] === __dependency_13["ETableStatus"]["EMPTY"] ? _0x5bdb95["node"]["active"] = !0x0 : _0x5bdb95['node']['active'] = !0x1;
    });
  }, _0xfdbac9['updateBtnsStatus'] = function () {
    var _0x10e989, _0x5ada0c;
    if (Log['e']('update\x20btn\x20status:::::::', this['selectRoomId'], this['currentRoomId']), 0x0 === this["selectRoomId"] && 0x0 === this["currentRoomId"]) return this["selectBtn"]["active"] = !0x1, this["confirmBtn"]["active"] = !0x1, this["lockBtn"]["active"] = !0x1, this['closeBtn']["active"] = !0x1, void (this['exitBtn']['active'] = !0x0);
    if (this["remainTimeTip"]["active"] = (null == (_0x10e989 = this["lockVO"]) ? void 0x0 : _0x10e989["roomId"]) === this['selectRoomId'] && (this["lockVO"]["time"] + 0x3e8 * this['lockVO']["expiredDef"] - new Date()["valueOf"]()) / 0x3e8 > 0x0, this["selectRoomId"] === this["currentRoomId"]) this["selectBtn"]["active"] = !0x1, this["confirmBtn"]["active"] = !0x0, this["closeBtn"]['active'] = !0x0, this['exitBtn']["active"] = !0x1, this["lockBtn"]["active"] = !(null != (_0x5ada0c = this["lockVO"]) && _0x5ada0c["roomId"]);else if (this["selectBtn"]["active"] = !0x0, this["confirmBtn"]["active"] = !0x1, this['lockBtn']['active'] = !0x1, this['slotTableMap']["get"](this["selectRoomId"])) {
      var _0x19c146 = this["slotTableMap"]["get"](this["selectRoomId"])['status'];
      this["selectBtn"]["getComponent"](__dependency_1['Button'])["interactable"] = _0x19c146 === _0x412925["EMPTY"] || _0x19c146 === _0x412925["SELF_LOCKED"];
    } else this["selectBtn"]["active"] = !0x1, this["selectBtn"]["getComponent"](__dependency_1['Button'])['interactable'] = !0x1;
  }, _0xfdbac9['createItemPool'] = function () {
    if (0x0 === App["pool"]['getPool']("SLOT_TABLE_ITEM_POOL")["size"]) {
      var _0xbf6efe = this["data"]['getData']()["filePaths"]["slotTableItemPrefab"],
        _0x3a8f1c = App["cache"]["get"](this["data"]["module"], _0xbf6efe)["data"],
        _0x3c583d = App["pool"]["createPool"]("SLOT_TABLE_ITEM_POOL"),
        _0x3e991d = (0, __dependency_1["instantiate"])(_0x3a8f1c);
      _0x3c583d['cloneNode'] = _0x3e991d;
      for (var _0x95bcb1 = 0x0; _0x95bcb1 < 0x1f4; _0x95bcb1++) {
        var _0x22d7ef = (0, __dependency_1["instantiate"])(_0x3a8f1c);
        _0x3c583d['put'](_0x22d7ef);
      }
    }
  }, _0xfdbac9["createItem"] = function (_0x4bec12) {
    var _0x59066a = _0x4bec12["roomId"],
      _0x4283f6 = App["pool"]["getPool"]("SLOT_TABLE_ITEM_POOL")['get']();
    _0x4283f6['setParent'](this["ScrollViewContent"]);
    var _0x34c4bb = _0x4283f6["getComponent"](__dependency_7["SlotTableItem2"]);
    _0x34c4bb["setData"](_0x4bec12), this['slotTableMap']["set"](_0x59066a, _0x34c4bb);
  }, _0xfdbac9['updateItem'] = function (_0x125566) {
    var _0x1d3ff0 = _0x125566["roomId"],
      _0x1e7ff3 = this["slotTableMap"]["get"](_0x1d3ff0);
    _0x1e7ff3["setData"](_0x125566), _0x1e7ff3['node']["parent"] || this["ScrollViewContent"]["addChild"](_0x1e7ff3["node"]);
  }, _0xfdbac9['createItems'] = function (_0x1174d9) {
    var _0x2bd9cf = this;
    _0x1174d9['forEach'](function (_0xded092) {
      var _0x31f57c = _0xded092['roomId'];
      _0x2bd9cf["slotTableMap"]["has"](_0x31f57c) ? _0x2bd9cf['updateItem'](_0xded092) : _0x2bd9cf['createItem'](_0xded092);
    });
  }, _0xfdbac9['removeNotUseSlotTable'] = function (_0x397f68) {
    var _0x416ca6 = this,
      _0x72f977 = Array['from'](this["slotTableMap"]["keys"]()),
      _0x4e8275 = _0x397f68["map"](function (_0x2bba74) {
        return _0x2bba74["roomId"];
      });
    _0x72f977["filter"](function (_0x14853e) {
      return !_0x4e8275['includes'](_0x14853e);
    })['forEach'](function (_0x4a81d1) {
      _0x4a81d1 !== _0x416ca6["currentRoomId"] && _0x416ca6["recycleOnce"](_0x4a81d1);
    });
  }, _0xfdbac9["setLockVO"] = function (_0x4e482f) {
    this['lockVO'] = (0, __dependency_0["extends"])({}, this["lockVO"], _0x4e482f), __dependency_11["default"]['getData']()["table"]["lock"] = this['lockVO'];
  }, _0xfdbac9["recycleOnce"] = function (_0x5af26c) {
    this["slotTableMap"]["get"](_0x5af26c)["recycle"](), this["slotTableMap"]["get"](_0x5af26c)["reset"](), this["slotTableMap"]["delete"](_0x5af26c);
  }, _0xfdbac9["recycleAll"] = function () {
    var _0x39f04 = this;
    this["ScrollViewContent"]["removeAllChildren"](), this["slotTableMap"]["forEach"](function (_0x52e2b5, _0x4d2e47) {
      _0x39f04["currentRoomId"] !== _0x52e2b5["tableVO"]["roomId"] && (_0x39f04["slotTableMap"]['delete'](_0x52e2b5["tableVO"]['roomId']), _0x52e2b5['reset'](), _0x52e2b5["recycle"]());
    });
  }, _0xfdbac9["setTableInfo"] = function (_0x2dfb61) {
    if (_0x2dfb61["data"]["detail"] && this['slotTableMap']["get"](this["selectRoomId"])) {
      var _0x4b1378 = _0x2dfb61["data"]["detail"],
        _0x77484c = _0x4b1378["dayWin"],
        _0x51ea95 = _0x4b1378["dayBet"],
        _0x17369e = _0x4b1378["mgCounts"],
        _0x4d071a = _0x4b1378["hourWin"],
        _0x2b91ea = _0x4b1378["hourBet"],
        _0x2fad80 = _0x4b1378["todayBet"],
        _0xd22871 = _0x4b1378["todayWin"],
        _0x22e794 = this['slotTableMap']["get"](this["selectRoomId"])["tableVO"],
        _0x10d50a = this["slotTableMap"]['get'](this["selectRoomId"]);
      this["slotTableNumber"]["string"] = ('' + _0x22e794["number"])["padStart"](0x3, '0'), this['betHour']['string'] = __dependency_14["CmmSlotUtils"]['formatNumber'](_0x2b91ea, !0x0, !0x0), null != _0x2fad80 && null != _0xd22871 ? (this["betHour"]["string"] = __dependency_14["CmmSlotUtils"]["formatNumber"](_0x2fad80, !0x0, !0x0), this['rateHour']['string'] = 0x0 === _0x2fad80 ? __dependency_14["CmmSlotUtils"]["formatNumber"](0x0, !0x0, !0x0) + '%' : __dependency_14["CmmSlotUtils"]["formatNumber"](_0xd22871 / _0x2fad80 * 0x64, !0x0, !0x0) + '%') : this['rateHour']['string'] = 0x0 === _0x2b91ea ? __dependency_14["CmmSlotUtils"]["formatNumber"](0x0, !0x0, !0x0) + '%' : __dependency_14["CmmSlotUtils"]['formatNumber'](_0x4d071a / _0x2b91ea * 0x64, !0x0, !0x0) + '%', this["betDay"]["string"] = __dependency_14["CmmSlotUtils"]["formatNumber"](_0x51ea95, !0x0, !0x0), this["rateDay"]["string"] = 0x0 === _0x51ea95 ? __dependency_14["CmmSlotUtils"]["formatNumber"](0x0, !0x0, !0x0) + '%' : __dependency_14["CmmSlotUtils"]["formatNumber"](_0x77484c / _0x51ea95 * 0x64, !0x0, !0x0) + '%', _0x10d50a && _0x10d50a["setRate"](this['rateHour']["string"]), this["notOpenContentNumber"]["string"] = '' + _0x17369e[0x0], this["previousOneNumber"]["string"] = '' + _0x17369e[0x1], this['previousTwoNumber']["string"] = '' + _0x17369e[0x2];
    }
  }, _0xfdbac9["changeTableAlert"] = function () {
    var _0x441ec2 = this,
      _0x5316f0 = this["slotTableMap"]["get"](this["selectRoomId"])["tableVO"]['number'],
      _0x30c57e = {
        'text': App["getLanguage"]("slotTableAlertMsg1", ['' + _0x5316f0], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]),
        'confirmCb': function (_0x481528) {
          _0x441ec2["sendChangeSlotTable"](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
        },
        'cancelCb': function (_0x869bfa) {
          dispatch(__dependency_10["SlotFrameworkEvent"]['PLAY_UI_CLOSE_CLICK_BTM']);
        },
        'bbrCb': function (_0x1d116e) {
          dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
        }
      };
    App["gameAlert"]["show"](_0x30c57e);
  }, _0xfdbac9["lockTableAlert"] = function () {
    var _0x4b9691 = this,
      _0x5cd86a = {
        'text': App["getLanguage"]("lockSlotTable", [], __dependency_3["EBundles"][__dependency_3["EBundles"]['wrapper']]),
        'confirmCb': function (_0x53adc7) {
          _0x4b9691["lockTable"]();
        },
        'cancelCb': function (_0x53fa1e) {},
        'bbrCb': function (_0x1e0846) {}
      };
    "xin-star" == __dependency_11["default"]["getData"]()["theme"] ? App["gameAlert"]["show"](_0x5cd86a) : this["lockTable"]();
  }, _0xfdbac9["lockTable"] = function () {
    this["slotTableMap"]["get"](this['selectRoomId'])["tableVO"]["status"] = __dependency_13["ETableStatus"]["LOCKED"], this["sendLockSlotTable"](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
  }, _0xfdbac9["setLockTips"] = function (_0x5f44f8) {
    if (0x0 == _0x5f44f8["time"]) {
      var _0x482546 = App['getLanguage']("slotTableTip1", ['' + this['formatTime'](_0x5f44f8["resetDef"]), '' + this["formatTime"](_0x5f44f8["expiredDef"])], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]);
      this["tipsLabel"]["string"] = _0x482546;
    } else {
      var _0x507ca1 = new Date(),
        _0x378008 = _0x5f44f8["time"] + 0x3e8 * _0x5f44f8["resetDef"] - _0x507ca1["valueOf"](),
        _0x252dc2 = _0x5f44f8['time'] + 0x3e8 * _0x5f44f8["expiredDef"] - _0x507ca1["valueOf"]();
      if (_0x252dc2 > 0x0) {
        var _0x29e26c,
          _0x37103e = 0x0;
        null != (_0x29e26c = this["slotTableMap"]["get"](this["lockVO"]['roomId'])) && _0x29e26c["tableVO"]["number"] ? _0x37103e = this["slotTableMap"]["get"](this['lockVO']["roomId"])["tableVO"]["number"] : this["lockVO"]["number"] && (_0x37103e = this['lockVO']["number"]);
        var _0x3eb313 = App["getLanguage"]('slotTableTip2', ['' + _0x37103e, '' + this["formatTime"](_0x378008 / 0x3e8)], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]);
        this["tipsLabel"]["string"] = _0x3eb313, this["remainTimeTipTime"]["getComponent"](__dependency_1["Label"])["string"] = '' + this["formatTime"](_0x252dc2 / 0x3e8), this["remainTimeTip"]["getComponent"](__dependency_1['Layout'])["updateLayout"]();
      } else {
        var _0x290cb6 = App["getLanguage"]("slotTableTip3", ['' + this["formatTime"](_0x378008 / 0x3e8)], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]);
        this['tipsLabel']["string"] = _0x290cb6;
      }
    }
    this["setTipsLabelMarquee"]();
  }, _0xfdbac9["setInfoHight"] = function () {
    var _0x27893d = this;
    this["scheduleOnce"](function () {
      var _0x21b594 = _0x27893d['infoContentContent']["getComponent"](__dependency_1["UITransform"])["height"];
      _0x27893d["infoContent"]['getComponent'](__dependency_1["UITransform"])["height"] = _0x21b594 + 0xa, _0x27893d['infoContentBg']["getComponentsInChildren"](__dependency_1["Widget"])["forEach"](function (_0xc51f14) {
        return _0xc51f14["updateAlignment"]();
      });
    });
  }, _0xfdbac9["setShowTableToggleLayout"] = function () {
    var _0x3963b8 = this,
      _0x40774c = this["allToggleText"]["getComponent"](__dependency_1["UITransform"])["width"],
      _0x5cdf9a = this["emptyToggleText"]["getComponent"](__dependency_1["UITransform"])["width"];
    this["allToggle"]["getComponent"](__dependency_1["UITransform"])["width"] = _0x40774c + 0x14, this["emptyToggle"]["getComponent"](__dependency_1["UITransform"])['width'] = _0x5cdf9a + 0x14, this['scheduleOnce'](function () {
      var _0x1acabd = _0x3963b8["showTableToggleGroup"]["getComponent"](__dependency_1["UITransform"])["width"];
      _0x3963b8["showTableToggleContent"]["getComponent"](__dependency_1["UITransform"])["width"] = _0x1acabd, _0x3963b8["showTableToggleContent"]['getComponent'](__dependency_1["Widget"])["updateAlignment"]();
    });
  }, _0xfdbac9['formatTime'] = function (_0x2b1398) {
    return _0x2b1398 > 0xe10 ? App["getLanguage"]("slotTableHour", ['' + Math['floor'](_0x2b1398 / 0xe10)], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]) : _0x2b1398 > 0x3c ? App["getLanguage"]("slotTableMinute", ['' + Math["floor"](_0x2b1398 / 0x3c)], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]) : App["getLanguage"]("slotTableSecond", ['' + Math["floor"](_0x2b1398)], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]);
  }, _0xfdbac9["hideBtns"] = function () {
    this["confirmBtn"]["active"] = !0x1, this["selectBtn"]["active"] = !0x1, this["lockBtn"]["active"] = !0x1, this["remainTimeTip"]["active"] = !0x1;
  }, _0xfdbac9['startLoading'] = function () {
    this['loadingContent']["active"] = !0x0, this["loadingBar"]["totalLength"] = this['line']["getComponent"](__dependency_1["UITransform"])["width"], this["loadingBar"]["progress"] = 0x0, (0, __dependency_1["tween"])(this['loadingBar'])['repeatForever']((0, __dependency_1["tween"])()["set"]({
      'progress': 0x0
    })['to'](0xa, {
      'progress': 0x1
    }))["start"]();
  }, _0xfdbac9["stopLoading"] = function () {
    __dependency_1["Tween"]["stopAllByTarget"](this["loadingBar"]), this['loadingContent']["active"] = !0x1;
  }, _0xfdbac9["syncSlotTables"] = function () {
    this["getSlotTablesData"]();
  }, _0xfdbac9["setTipsLabelMarquee"] = function () {
    var _0x4e7343 = this;
    this['scheduleOnce'](function () {
      var _0x10eabc = {
        'maskNode': _0x4e7343["tipContentMask"],
        'labelNode': _0x4e7343["tipsLabel"]["node"],
        'delayTime': 0x1
      };
      __dependency_4["CmmUtils"]["labelMarquee"](_0x10eabc);
    });
  }, _0xfdbac9["getSlotTablesData"] = function () {
    this["startLoading"](), dispatch(__dependency_10["SlotFrameworkEvent"]['SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST'], {
      'page': this["selectPage"]
    });
  }, _0xfdbac9["getSlotTableDetail"] = function (_0xb56f53) {
    0x0 !== _0xb56f53 && (this["startLoading"](), dispatch(__dependency_10["SlotFrameworkEvent"]["SEND_GET_SLOT_TABLE_DETAIL_REQUEST"], {
      'roomId': _0xb56f53
    }));
  }, _0xfdbac9["sendChangeSlotTable"] = function () {
    var _0x468b3b,
      _0x4c3b13,
      _0x127c6e = {
        'table': (0, __dependency_0["extends"])({}, this["slotTableMap"]["get"](this["selectRoomId"])["tableVO"], {
          'isLocked': this["slotTableMap"]["get"](this["selectRoomId"])["tableVO"]["status"] === __dependency_13["ETableStatus"]['LOCKED'] && (null == (_0x468b3b = this["slotTableMap"]["get"](this['selectRoomId'])['tableVO']) || null == (_0x4c3b13 = _0x468b3b["user"]) ? void 0x0 : _0x4c3b13['userId']) === __dependency_11["default"]['getData']()['player']["uid"]
        })
      };
    dispatch(__dependency_10["SlotFrameworkEvent"]['SEND_CHANGE_SLOT_TABLE_REQUEST'], _0x127c6e);
  }, _0xfdbac9['sendLockSlotTable'] = function () {
    this["startLoading"]();
    var _0x3e65e4 = {
      'roomId': this["selectRoomId"]
    };
    dispatch(__dependency_10["SlotFrameworkEvent"]["SEND_LOCK_SLOT_TABLE_REQUEST"], _0x3e65e4);
  }, _0xfdbac9['showFullTip'] = function () {
    var _0x2a8de4 = {
      'text': App["getLanguage"]("tipMsgGameIsFull", [], __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]),
      'confirmCb': function () {},
      'bbrCb': function () {}
    };
    App["gameAlert"]['show'](_0x2a8de4, __dependency_2['ViewZOrder']["Tips"]);
  }, _0xfdbac9['createTabItem'] = function () {
    for (var _0x867a67 = __dependency_11["default"]["getData"]()['tableMeta'], _0x1de30e = _0x867a67["currentPage"], _0x591b43 = _0x867a67["totalPages"], _0x350a71 = this["data"]["getData"]()["filePaths"]["slotTablePageTableItemPrefab"], _0x41d8b5 = App["cache"]["get"](this["data"]["module"], _0x350a71)["data"], _0x1461ec = 0x1; _0x1461ec <= _0x591b43; _0x1461ec++) {
      var _0x3e5aef = (0, __dependency_1["instantiate"])(_0x41d8b5),
        _0x4f89e7 = _0x3e5aef["getComponent"](__dependency_8["SlotTablePageTableItem"]),
        _0x533c02 = '' + _0x1461ec;
      this["pageTabsContent"]["addChild"](_0x3e5aef), _0x4f89e7['setData']({
        'pageIndex': _0x1461ec,
        'tabTitle': _0x533c02
      }), this["tabsMap"]["set"](_0x1461ec, _0x4f89e7);
    }
    this["tabsMap"]['get'](_0x1de30e)["node"]["getComponent"](__dependency_1["Toggle"])["isChecked"] = !0x0;
  }, _0xfdbac9['isCurrentPage'] = function (_0x200897) {
    var _0x200389 = this;
    return _0x200897["some"](function (_0x576ecc) {
      return _0x576ecc["roomId"] === _0x200389["currentRoomId"];
    });
  }, _0xfdbac9["addEvents"] = function () {
    var _0x58b24c = this;
    _0x2b2ced["prototype"]["addEvents"]['call'](this), this['on'](__dependency_10["SlotFrameworkEvent"]["SLOT_TABLES_RESPONSE"], function (_0x2095f5) {
      var _0x3588aa = _0x2095f5["data"]["tables"],
        _0x1a3451 = __dependency_11["default"]["getData"]()['player']["uid"];
      _0x3588aa['some'](function (_0x12e3c4) {
        var _0x420345 = _0x12e3c4['status'] === __dependency_13["ETableStatus"]["EMPTY"],
          _0x43df24 = (_0x12e3c4['status'] === __dependency_13["ETableStatus"]["FULL"] || _0x12e3c4['status'] === __dependency_13["ETableStatus"]["LOCKED"]) && _0x12e3c4["user"]["userId"] === _0x1a3451;
        return _0x420345 || _0x43df24;
      }) || _0x58b24c["isFirstShowFullTip"] || _0x58b24c["showFullTip"](), _0x58b24c["removeNotUseSlotTable"](_0x3588aa), _0x58b24c['createItems'](_0x3588aa), _0x58b24c['setLockVO'](_0x2095f5["data"]["lock"]), _0x58b24c["currentRoomId"] && _0x58b24c["slotTableMap"]["has"](_0x58b24c["currentRoomId"]) && _0x58b24c["slotTableMap"]['get'](_0x58b24c['currentRoomId'])["select"](), _0x58b24c["setLockTips"](_0x2095f5["data"]["lock"]), _0x58b24c["setFilterTable"](), _0x58b24c["stopLoading"](), !_0x58b24c["args"] && _0x58b24c["getSlotTableDetail"](_0x58b24c["currentRoomId"]);
    }), this['on'](__dependency_10["SlotFrameworkEvent"]["SLOT_TABLE_RESPONSE"], function (_0x3c148e) {
      _0x58b24c["setLockVO"](_0x3c148e["data"]["lock"]), _0x58b24c['setTableInfo'](_0x3c148e), _0x58b24c['setLockTips'](_0x58b24c["lockVO"]), _0x58b24c['isUpdateSelectFlag'] = !0x0, _0x58b24c["stopLoading"]();
    }), this['on'](__dependency_10["SlotFrameworkEvent"]["LOCK_SLOT_TABLE_RESPONSE"], function (_0x2a8260) {
      _0x58b24c["setLockVO"](_0x2a8260['lock']), _0x58b24c["setLockTips"](_0x58b24c["lockVO"]), _0x58b24c["isUpdateSelectFlag"] = !0x0, _0x58b24c["stopLoading"]();
    }), this['on'](__dependency_10["SlotFrameworkEvent"]["SLOT_TABLE_START_LOADING"], function () {
      _0x58b24c['startLoading']();
    }), this['on'](__dependency_10["SlotFrameworkEvent"]["SLOT_TABLES_UPDATED_RESPONSE"], function (_0x1f44c5) {
      0x0 !== __dependency_11["default"]["getData"]()["slotTableUpdated"] && (0x0 !== Object["keys"](_0x1f44c5)["length"] ? (Object["entries"](_0x1f44c5)["forEach"](function (_0x35e809) {
        var _0x525137 = _0x35e809[0x0],
          _0x2624ec = _0x35e809[0x1];
        if (_0x58b24c["slotTableMap"]["has"](Number(_0x525137))) switch (_0x2624ec) {
          case __dependency_13["ETableStatus"]["EMPTY"]:
            var _0x35e067 = _0x58b24c["slotTableMap"]['get'](Number(_0x525137))['tableVO'];
            _0x35e067["status"] = _0x2624ec, _0x35e067["user"] = null, _0x58b24c["slotTableMap"]["get"](Number(_0x525137))["setData"](_0x35e067);
            break;
          case __dependency_13["ETableStatus"]['FULL']:
            var _0x2f51c9 = _0x58b24c["slotTableMap"]["get"](Number(_0x525137))["tableVO"];
            _0x2f51c9["status"] = _0x2624ec, _0x58b24c["slotTableMap"]['get'](Number(_0x525137))["setData"](_0x2f51c9);
            break;
          case __dependency_13["ETableStatus"]['LOCKED']:
            var _0x3a4c14 = _0x58b24c['slotTableMap']["get"](Number(_0x525137))['tableVO'];
            _0x3a4c14["status"] = _0x2624ec, _0x58b24c["slotTableMap"]["get"](Number(_0x525137))["setData"](_0x3a4c14);
            break;
          case __dependency_13["ETableStatus"]["CLOSE"]:
            _0x58b24c["slotTableMap"]["get"](Number(_0x525137))["reset"](), _0x58b24c["slotTableMap"]["get"](Number(_0x525137))["recycle"](), _0x58b24c['recycleOnce'](Number(_0x525137));
        }
      }), _0x58b24c["setFilterTable"](), _0x58b24c["stopLoading"]()) : dispatch(__dependency_10["SlotFrameworkEvent"]['SEND_GET_SLOT_TABLE_PAGE_DATA_REQUEST'], {
        'page': _0x58b24c["selectPage"]
      }));
    }), this['on'](__dependency_10["SlotFrameworkEvent"]["SYNC_SOLT_TABLES"], function () {
      var _0x46c24d = _0x58b24c["slotTableMap"]["get"](_0x58b24c["selectRoomId"]);
      _0x46c24d["tableStatus"] = __dependency_13["ETableStatus"]["FULL"], _0x46c24d['tableVO']['status'] = __dependency_13["ETableStatus"]["FULL"], _0x58b24c["setFilterTable"](), Array["from"](_0x58b24c["slotTableMap"]['values']())["some"](function (_0x482078) {
        return _0x482078["tableVO"]["status"] === __dependency_13["ETableStatus"]['EMPTY'];
      }) || _0x58b24c["syncSlotTables"]();
    }), this['on'](__dependency_10["SlotFrameworkEvent"]['SLOT_TABLES_RECYCLE_ALL'], function () {
      _0x58b24c['recycleAll']();
    }), this['on'](__dependency_10["SlotFrameworkEvent"]["SLOT_TABLE_PAGE_DATA_RESPONSE"], function (_0x18cdc6) {
      var _0xee40b9 = _0x18cdc6["data"]["tables"],
        _0x142488 = __dependency_11["default"]["getData"]()['player']["uid"];
      (_0xee40b9["some"](function (_0x46f712) {
        var _0x1f905d = _0x46f712["status"] === __dependency_13["ETableStatus"]["EMPTY"],
          _0x1147ef = (_0x46f712["status"] === __dependency_13["ETableStatus"]["FULL"] || _0x46f712["status"] === __dependency_13["ETableStatus"]['LOCKED']) && _0x46f712['user']["userId"] === _0x142488;
        return _0x1f905d || _0x1147ef;
      }) || _0x58b24c['isFirstShowFullTip'] || _0x58b24c["showFullTip"](), _0x58b24c["removeNotUseSlotTable"](_0xee40b9), _0x58b24c["createItems"](_0xee40b9), _0x58b24c["setLockVO"](_0x18cdc6["data"]["lock"]), _0x58b24c['currentRoomId'] && _0x58b24c["slotTableMap"]['has'](_0x58b24c["currentRoomId"]) && _0x58b24c["slotTableMap"]["get"](_0x58b24c["currentRoomId"])["select"](), _0x58b24c["setLockTips"](_0x18cdc6["data"]["lock"]), _0x58b24c['setFilterTable'](), _0x58b24c["stopLoading"](), _0x58b24c["isCurrentPage"](_0xee40b9)) ? _0x58b24c["args"] || (_0x58b24c["selectRoomId"] = _0x58b24c["currentRoomId"], _0x58b24c["getSlotTableDetail"](_0x58b24c["selectRoomId"])) : (_0x58b24c["selectRoomId"] = _0xee40b9[0x0]["roomId"], _0x58b24c['slotTableMap']["get"](_0x58b24c['selectRoomId'])["select"](), _0x58b24c["getSlotTableDetail"](_0x58b24c["selectRoomId"]));
    });
  }, (0, __dependency_0["createClass"])(_0x382f2d, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_9["default"]);
    }
  }, {
    'key': "selectRoomId",
    'get': function () {
      return this["_selectRoomId"];
    },
    'set': function (_0x429457) {
      this['_selectRoomId'] = _0x429457;
    }
  }]), _0x382f2d;
}(__dependency_5["default"]))["prototype"], "line", [_0x5100e8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x14c7b3 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "closeBtn", [_0x2ad933], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x24a406 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "exitBtn", [_0x4b7519], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2f5da4 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], 'showTableToggleContent', [_0x36f01], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4884fe = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "showTableToggleGroup", [_0x1365c9], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3aece5 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78['prototype'], 'allToggle', [_0x4f5cd5], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4d3872 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "allToggleText", [_0x188c81], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4f3c9e = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "emptyToggle", [_0xf22210], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x31cf28 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "emptyToggleText", [_0x56fb7d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x34e72 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "ScrollViewContent", [_0xab1ca8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5a1cc8 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], 'pageTabsContent', [_0x37af49], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x30a7d4 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78['prototype'], "infoContent", [_0x52507f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xcdf46d = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78['prototype'], "infoContentBg", [_0x20c4bb], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x41bba7 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], 'infoContentContent', [_0x3ac0d3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xe2ca88 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "infoRowTable", [_0x5140a4], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x104b40 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "slotTableNumber", [_0x141c87], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2a6cb2 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "betHour", [_0x232ca8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2b0c73 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78['prototype'], 'betDay', [_0x5ac8c1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2e1ed9 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], 'rateHour', [_0x1a2b7b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2b13ba = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "rateDay", [_0x5cc5c0], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2a779a = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "confirmBtn", [_0x2c93d8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3db6f8 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78['prototype'], "selectBtn", [_0x3a51b8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4b6eec = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78['prototype'], 'lockBtn', [_0x49cad5], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x273c12 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "remainTimeTip", [_0xa6cca7], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5e4fc3 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "remainTimeTipTime", [_0x554b18], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x6f9c8d = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78['prototype'], "tipContentMask", [_0x12d835], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1e2cca = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], 'tipsLabel', [_0x36c325], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x333106 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "loadingContent", [_0x32b266], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x24b36f = (0, __dependency_0['applyDecoratedDescriptor'])(_0x461e78["prototype"], "loadingBar", [_0x574731], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3c03a3 = _0x461e78)) || _0x3c03a3));
__dependency_1["cclegacy"]['_RF']['pop']();
