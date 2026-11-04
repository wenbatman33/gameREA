// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-HistoryViewBase.ts.js
// SHA256: 3b37e6473ff34c536dff2932c6ee2508bbef28fb4838208dded06796d978b46d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-AdapterEvent";
import * as __dependency_4 from "./main-TableView";
import * as __dependency_5 from "./main-UIView";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./framework-HistoryItem";
import * as __dependency_8 from "./framework-SlotFrameworkData";
import * as __dependency_9 from "./framework-SlotFrameworkEvent";
import * as __dependency_10 from "./framework-ColorModel";
import * as __dependency_11 from "./framework-PlatformModel";
var __export_0;
export { __export_0 as EDateBtnType };
var __export_1;
export { __export_1 as EDateTouchType };
var __export_2;
export { __export_2 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EDateBtnType":
      __export_0 = value;
      break;
    case "EDateTouchType":
      __export_1 = value;
      break;
    case "default":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x497c5a) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x57df3c) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0xf8bbe5) {
  void 0;
})(__dependency_2);
(function (_0x389d64) {
  void 0;
})(__dependency_3);
(function (_0x4b854d) {
  void 0;
})(__dependency_4);
(function (_0x3479fc) {
  void 0;
})(__dependency_5);
(function (_0x166de7) {
  void 0;
})(__dependency_6);
(function (_0x1416f3) {
  void 0;
})(__dependency_7);
(function (_0x277f96) {
  void 0;
})(__dependency_8);
(function (_0x3834db) {
  void 0;
})(__dependency_9);
(function (_0x5d721c) {
  void 0;
})(__dependency_10);
(function (_0x5b0f19) {
  void 0;
})(__dependency_11);
var _0x143742, _0x47fb65, _0x3efb72, _0x40581a, _0x261274, _0x152e63, _0x21aa17, _0x1ab082, _0x11ce72, _0x5eda6c, _0x521980, _0x4513ad, _0x266861, _0x233c44, _0x4d9bd4, _0x4dfdd6, _0x13a623, _0x2bd9a6, _0x4a764a, _0x38061d, _0x3b7727, _0x4a5a64, _0x5d25ea, _0x16aa48, _0x40c5b9, _0x5411ee, _0x12e71b, _0x4023cd, _0x530828, _0x46bac4, _0x4334f9, _0x1c29ff, _0x1ccf33, _0x4dbb7f, _0x5802df, _0x330cd7, _0x43fb16, _0x2dcdec, _0xba1c87, _0x1b2dd0, _0x35dd0e, _0x50e2f9, _0x3f6bea;
__publish({
  'EDateBtnType': void 0x0,
  'EDateTouchType': void 0x0
}), __dependency_1["cclegacy"]["_RF"]["push"]({}, "7f0d5QDRWxNqZ8jPiTzQwe8", "HistoryViewBase", void 0x0);
var _0x40b3be, _0x308260;
__dependency_1['_decorator']["ccclass"], __dependency_1['_decorator']["property"];
!function (_0x163635) {
  _0x163635['START'] = "start", _0x163635["END"] = 'end';
}(_0x40b3be || (_0x40b3be = __publish('EDateBtnType', {}))), function (_0x26dad7) {
  _0x26dad7['ADD'] = "add", _0x26dad7['CUT'] = 'cut';
}(_0x308260 || (_0x308260 = __publish("EDateTouchType", {})));
__publish('default', (_0x143742 = (0, __dependency_6["inject"])('bbr', __dependency_1["Node"]), _0x47fb65 = (0, __dependency_6["inject"])("content/backBtn", __dependency_1["Node"]), _0x3efb72 = (0, __dependency_6["inject"])("content/closeBtn", __dependency_1["Node"]), _0x40581a = (0, __dependency_6["inject"])("content/topBar/dateBtn", __dependency_1["Node"]), _0x261274 = (0, __dependency_6["inject"])("content/topBar/dateBtn/date", __dependency_1["Label"]), _0x152e63 = (0, __dependency_6["inject"])("content/topBar/dateBtnContent/last7DaysBtn", __dependency_1["Node"]), _0x21aa17 = (0, __dependency_6["inject"])("content/topBar/dateBtnContent/yesterdayBtn", __dependency_1["Node"]), _0x1ab082 = (0, __dependency_6["inject"])("content/topBar/dateBtnContent/todayBtn", __dependency_1["Node"]), _0x11ce72 = (0, __dependency_6["inject"])('content/table/title', __dependency_1["Node"]), _0x5eda6c = (0, __dependency_6["inject"])("content/table/scrollView", __dependency_4['default']), _0x521980 = (0, __dependency_6["inject"])("content/loadingContent", __dependency_1["Node"]), _0x4513ad = (0, __dependency_6["inject"])('content/loadingContent/ProgressBar', __dependency_1["ProgressBar"]), _0x266861 = (0, __dependency_6["inject"])("content/noDataLabel", __dependency_1["Node"]), _0x233c44 = (0, __dependency_6["inject"])("content/dateBoard", __dependency_1["Node"]), _0x4d9bd4 = (0, __dependency_6["inject"])('content/dateBoard/bbr', __dependency_1["Node"]), _0x4dfdd6 = (0, __dependency_6["inject"])('content/dateBoard/layout/startDateContent/startDateBtn/addBtn', __dependency_1["Node"]), _0x13a623 = (0, __dependency_6["inject"])("content/dateBoard/layout/startDateContent/startDateBtn/cutBtn", __dependency_1["Node"]), _0x2bd9a6 = (0, __dependency_6["inject"])("content/dateBoard/layout/startDateContent/startDateBtn/label", __dependency_1["Label"]), _0x4a764a = (0, __dependency_6["inject"])('content/dateBoard/layout/endDateContent/endDateBtn/addBtn', __dependency_1["Node"]), _0x38061d = (0, __dependency_6["inject"])('content/dateBoard/layout/endDateContent/endDateBtn/cutBtn', __dependency_1["Node"]), _0x3b7727 = (0, __dependency_6["inject"])("content/dateBoard/layout/endDateContent/endDateBtn/label", __dependency_1["Label"]), _0x5d25ea = (0, __dependency_0["applyDecoratedDescriptor"])((_0x4a5a64 = function (_0x332806) {
  function _0x1a0384() {
    for (var _0x17243e, _0x40a362 = arguments["length"], _0x41e55c = new Array(_0x40a362), _0x2754e0 = 0x0; _0x2754e0 < _0x40a362; _0x2754e0++) _0x41e55c[_0x2754e0] = arguments[_0x2754e0];
    return _0x17243e = Reflect.construct(_0x332806, [this]['concat'](_0x41e55c).slice(1), new.target || _0x1a0384) || this, (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "bbr", _0x5d25ea, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "backBtn", _0x16aa48, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "closeBtn", _0x40c5b9, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "dateBtn", _0x5411ee, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "dateBtnLabel", _0x12e71b, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "last7DaysBtn", _0x4023cd, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "yesterdayBtn", _0x530828, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "todayBtn", _0x46bac4, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, 'tableTitle', _0x4334f9, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "scrollView", _0x1c29ff, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "loadingContent", _0x1ccf33, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, 'loadingBar', _0x4dbb7f, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "noDataLabel", _0x5802df, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "dateBoard", _0x330cd7, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, 'dateBoardBbr', _0x43fb16, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "startDateBtnAdd", _0x2dcdec, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "startDateBtnCut", _0xba1c87, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "startDateBtnLabel", _0x1b2dd0, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "endDateBtnAdd", _0x35dd0e, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "endDateBtnCut", _0x50e2f9, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), (0, __dependency_0["initializerDefineProperty"])(_0x17243e, "endDateBtnLabel", _0x3f6bea, (0, __dependency_0['assertThisInitialized'])(_0x17243e)), _0x17243e["itemPrefab"] = null, _0x17243e["recordData"] = [], _0x17243e["currentTime"] = null, _0x17243e['startDateBoardTime'] = null, _0x17243e['endDateBoardTime'] = null, _0x17243e["preStartDate"] = null, _0x17243e['preEndDate'] = null, _0x17243e["startTime"] = null, _0x17243e["endTime"] = null, _0x17243e["dateTouchFlag"] = !0x1, _0x17243e["longTouchCB"] = null, _0x17243e["todayBtnClickedFlag"] = !0x1, _0x17243e["yesterdayBtnClickedFlag"] = !0x1, _0x17243e['last7DaysBtnClickedFlag'] = !0x1, _0x17243e;
  }
  (0, __dependency_0['inheritsLoose'])(_0x1a0384, _0x332806);
  var _0x5a682c = _0x1a0384['prototype'];
  return _0x5a682c['onLoad'] = function () {
    _0x332806["prototype"]['onLoad']["call"](this);
  }, _0x5a682c["start"] = function () {
    this["init"](), this["currentTime"] = new Date(), this["startDateBoardTime"] = this["currentTime"], this['endDateBoardTime'] = this["currentTime"], this['setDateLabel'](this['startDateBoardTime'], this['endDateBoardTime']), this["todayBtnClickedFlag"] = !0x0, this["sendGetHistoryByBtn"](0x0, 0x0, this["todayBtn"]);
  }, _0x5a682c["onDestroy"] = function () {
    _0x332806["prototype"]['onDestroy']["call"](this);
  }, _0x1a0384["getPrefabUrl"] = function () {
    return 'prefabs/view/HistoryView';
  }, _0x5a682c['updateCellData'] = function (_0x5d520b, _0x537f7d) {
    _0x537f7d["updateData"](this["recordData"][_0x537f7d["index"]], _0x537f7d["index"]);
  }, _0x5a682c["tableCellTypeAtIndex"] = function (_0x2d139f, _0x5adfa7) {
    return 0x0;
  }, _0x5a682c["numberOfCellsInTableView"] = function (_0x1a79cd) {
    return this["recordData"]["length"];
  }, _0x5a682c['tableCellWillRecycle'] = function (_0x393766, _0x4badf7) {
    _0x4badf7["willRecycle"]();
  }, _0x5a682c["setAdapter"] = function (_0x216f05) {
    switch (_0x216f05) {
      case __dependency_3["EOrientationType"]["LANDSCAPE"]:
      case __dependency_3["EOrientationType"]["PORTRAIT"]:
    }
  }, _0x5a682c["init"] = function () {
    this["startLoading"](), this["itemPrefab"] = App["cache"]["get"](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], this["getHistoryViewItemPrefabUrl"])["data"], this["setEventTouch"](), this["scrollView"]["delegate"] = this;
    var _0x2fdd14 = (0, __dependency_1["instantiate"])(this["itemPrefab"])["addComponent"](__dependency_7['default']),
      _0x5be6b5 = this["scrollView"]["template"];
    _0x5be6b5['push'](_0x2fdd14), this["scrollView"]["template"] = _0x5be6b5;
  }, _0x5a682c["onClose"] = function () {
    this["reloadItems"](), this["stopLoading"](), this["close"](), dispatch(__dependency_9["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
  }, _0x5a682c["setEventTouch"] = function () {
    var _0x35f7f2 = this;
    this['dateBtn']['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      _0x35f7f2["dateBoard"]['active'] = !0x0, _0x35f7f2['preStartDate'] = _0x35f7f2["startDateBoardTime"], _0x35f7f2["preEndDate"] = _0x35f7f2["endDateBoardTime"], _0x35f7f2["setDateBoard"](_0x35f7f2["startDateBoardTime"], _0x35f7f2["endDateBoardTime"]), _0x35f7f2["scrollView"]['stopAutoScroll'](), dispatch(__dependency_9["SlotFrameworkEvent"]['PLAY_CLICK_BTM']);
    }), this["dateBoardBbr"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      if (_0x35f7f2["dateBoard"]["active"] = !0x1, _0x35f7f2["preStartDate"]['valueOf']() !== _0x35f7f2["startDateBoardTime"]['valueOf']() || _0x35f7f2["preEndDate"]["valueOf"]() !== _0x35f7f2['endDateBoardTime']['valueOf']()) {
        _0x35f7f2["noDataLabel"]["active"] = !0x1, _0x35f7f2["startLoading"](), _0x35f7f2["resetBtnStatus"](), _0x35f7f2["setButtonActive"](_0x35f7f2["todayBtn"], _0x35f7f2["yesterdayBtn"], _0x35f7f2["last7DaysBtn"]);
        var _0x548fc4 = _0x35f7f2["formatTime"](_0x35f7f2["endDateBoardTime"]),
          _0x25210c = Math['floor']((_0x35f7f2['endDateBoardTime']["getTime"]() - _0x35f7f2["startDateBoardTime"]["getTime"]()) / 0x5265c00 + 0x1),
          _0xe8ce41 = new Date(_0x548fc4);
        _0xe8ce41["setHours"](0x17, 0x3b, 0x3b, 0x3e7), _0x35f7f2['endTime'] = _0xe8ce41['getTime'](), _0x35f7f2["startTime"] = _0x35f7f2["endTime"] - (0x18 * _0x25210c * 0x3c * 0x3c * 0x3e8 - 0x1);
        var _0x49dc45 = {
          'startTime': _0x35f7f2["startTime"],
          'endTime': _0x35f7f2["endTime"]
        };
        _0x35f7f2["setDateLabel"](_0x35f7f2["startDateBoardTime"], _0x35f7f2["endDateBoardTime"]), _0x35f7f2["reloadItems"](), dispatch(__dependency_9["SlotFrameworkEvent"]['SEND_GET_HISTORY_REQUEST'], _0x49dc45), dispatch(__dependency_9["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
      }
    }), this['todayBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x35f7f2["todayBtnClickedFlag"] || (_0x35f7f2["resetBtnStatus"](), _0x35f7f2["todayBtnClickedFlag"] = !0x0, _0x35f7f2["sendGetHistoryByBtn"](0x0, 0x0, _0x35f7f2["todayBtn"]), dispatch(__dependency_9["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }), this["yesterdayBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x35f7f2['yesterdayBtnClickedFlag'] || (_0x35f7f2["resetBtnStatus"](), _0x35f7f2["yesterdayBtnClickedFlag"] = !0x0, _0x35f7f2["sendGetHistoryByBtn"](0x0, 0x1, _0x35f7f2["yesterdayBtn"]), dispatch(__dependency_9["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }), this["last7DaysBtn"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      _0x35f7f2["last7DaysBtnClickedFlag"] || (_0x35f7f2['resetBtnStatus'](), _0x35f7f2['last7DaysBtnClickedFlag'] = !0x0, _0x35f7f2['sendGetHistoryByBtn'](0x6, 0x0, _0x35f7f2['last7DaysBtn']), dispatch(__dependency_9["SlotFrameworkEvent"]['PLAY_CLICK_BTM']));
    }), this["startDateBtnAdd"]['on'](__dependency_1["NodeEventType"]['TOUCH_START'], function () {
      _0x35f7f2["onDateTouchStart"](_0x40b3be["START"], _0x308260["ADD"]);
    }, this), this['startDateBtnAdd']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], this['onDateTouchEnd'], this), this['startDateBtnCut']['on'](__dependency_1["NodeEventType"]['TOUCH_START'], function () {
      _0x35f7f2['onDateTouchStart'](_0x40b3be["START"], _0x308260["CUT"]);
    }, this), this["startDateBtnCut"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], this["onDateTouchEnd"], this), this["endDateBtnAdd"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x35f7f2['onDateTouchStart'](_0x40b3be['END'], _0x308260["ADD"]);
    }, this), this["endDateBtnAdd"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], this["onDateTouchEnd"], this), this['endDateBtnCut']['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x35f7f2["onDateTouchStart"](_0x40b3be['END'], _0x308260["CUT"]);
    }, this), this['endDateBtnCut']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], this["onDateTouchEnd"], this);
  }, _0x5a682c["sendGetHistoryByBtn"] = function (_0x30f2dc, _0x39d775, _0x1137a6) {
    this["startLoading"]();
    var _0x5c4de9 = new Date();
    _0x5c4de9["setDate"](_0x5c4de9["getDate"]() - _0x39d775), _0x5c4de9["setHours"](0x17, 0x3b, 0x3b, 0x3e7);
    var _0x31d8a6 = new Date(_0x5c4de9);
    _0x31d8a6["setDate"](_0x5c4de9["getDate"]() - _0x30f2dc), _0x31d8a6["setHours"](0x0, 0x0, 0x0, 0x0), this["startTime"] = _0x31d8a6["getTime"](), this["endTime"] = _0x5c4de9['getTime'](), this["startDateBoardTime"] = _0x31d8a6, this["endDateBoardTime"] = _0x5c4de9, this["setButtonActive"](this["todayBtn"], this["yesterdayBtn"], this["last7DaysBtn"]), this["setButtonStyle"](_0x1137a6, !0x0), this["reloadItems"](), this["setDateLabel"](this["startDateBoardTime"], this["endDateBoardTime"]), this['setDateBoard'](this["startDateBoardTime"], this["endDateBoardTime"]);
    var _0x3ca62c = {
      'startTime': this["startTime"],
      'endTime': this['endTime']
    };
    dispatch(__dependency_9["SlotFrameworkEvent"]["SEND_GET_HISTORY_REQUEST"], _0x3ca62c);
  }, _0x5a682c["setButtonActive"] = function (_0xf837d2, _0x4a8f91, _0x185a6d, _0x69ef47) {
    void 0x0 === _0x69ef47 && (_0x69ef47 = !0x1), this["setButtonStyle"](_0xf837d2, _0x69ef47), this['setButtonStyle'](_0x4a8f91, _0x69ef47), this["setButtonStyle"](_0x185a6d, _0x69ef47);
  }, _0x5a682c["setButtonStyle"] = function (_0x16ddd7, _0xc34757) {
    var _0x55f0a0 = __dependency_10["default"]["getData"]();
    _0xc34757 ? (_0x16ddd7["getComponent"](__dependency_1['Sprite'])['color'] = _0x55f0a0["mainGame"]['main'], _0x16ddd7["getComponent"](__dependency_1["Button"])["normalColor"] = _0x55f0a0["mainGame"]["main"], _0x16ddd7['getComponent'](__dependency_1["Button"])["pressedColor"] = _0x55f0a0["mainGame"]["mainHover"], _0x16ddd7["getComponent"](__dependency_1["Button"])['hoverColor'] = _0x55f0a0["mainGame"]["mainHover"], _0x16ddd7["getComponent"](__dependency_1["Button"])["disabledColor"] = _0x55f0a0["white"]['default01'], _0x16ddd7["getChildByName"]("Label")['getComponent'](__dependency_1["Label"])["color"] = new __dependency_1["Color"]('#000000')) : (_0x16ddd7["getComponent"](__dependency_1['Sprite'])["color"] = _0x55f0a0["background"][0x3c], _0x16ddd7["getComponent"](__dependency_1["Button"])["normalColor"] = _0x55f0a0['background'][0x3c], _0x16ddd7["getComponent"](__dependency_1["Button"])['pressedColor'] = _0x55f0a0["background"][0x50], _0x16ddd7['getComponent'](__dependency_1["Button"])["hoverColor"] = _0x55f0a0["background"][0x50], _0x16ddd7['getComponent'](__dependency_1["Button"])["disabledColor"] = _0x55f0a0["white"]["default01"], _0x16ddd7["getChildByName"]("Label")["getComponent"](__dependency_1["Label"])["color"] = _0x55f0a0["background"][0x0]);
  }, _0x5a682c["resetBtnStatus"] = function () {
    this["todayBtnClickedFlag"] = !0x1, this["yesterdayBtnClickedFlag"] = !0x1, this["last7DaysBtnClickedFlag"] = !0x1;
  }, _0x5a682c['createItems'] = function (_0x24e37a) {
    var _0x3eca6b = _0x24e37a["content"]["list"];
    if (this["itemPrefab"]) {
      for (var _0x5de24e = 0x0; _0x5de24e < _0x3eca6b["length"]; _0x5de24e++) {
        var _0x234df1 = _0x3eca6b[_0x5de24e],
          _0x564c68 = _0x234df1['bet'],
          _0x4864a0 = _0x234df1["win"],
          _0x19fd94 = _0x234df1["profit"];
        _0x3eca6b[_0x5de24e]['bet'] = _0x564c68, _0x3eca6b[_0x5de24e]['win'] = _0x4864a0, _0x3eca6b[_0x5de24e]['profit'] = _0x19fd94, this["recordData"]["push"](_0x3eca6b[_0x5de24e]), this["scrollView"]['insertCellAtIndex']();
      }
      0x0 == this["recordData"]["length"] && (this['noDataLabel']['active'] = !0x0);
    }
  }, _0x5a682c['reloadItems'] = function () {
    this["recordData"] = [], this["scrollView"]["reloadData"](), this["noDataLabel"]["active"] = !0x1;
  }, _0x5a682c['onDateTouchStart'] = function (_0x15a333, _0x584de7) {
    var _0x5b6b75 = this;
    this["dateTouchFlag"] || (this["dateTouchFlag"] = !0x0, this["dateCallBack"](_0x15a333, _0x584de7), this["longTouchCB"] = function () {
      _0x5b6b75['dateCallBack'](_0x15a333, _0x584de7);
    }, this["schedule"](this['longTouchCB'], 0.1, __dependency_1["macro"]["REPEAT_FOREVER"], 0.5));
  }, _0x5a682c["onDateTouchEnd"] = function () {
    this['unschedule'](this["longTouchCB"]), this["longTouchCB"] = null, this['dateTouchFlag'] = !0x1;
  }, _0x5a682c["dateCallBack"] = function (_0x443b5e, _0x458e2a) {
    if (this["dateTouchFlag"]) {
      var _0x2397dc = _0x458e2a == _0x308260["ADD"] ? 0x1 : -0x1,
        _0x2d36c4 = new Date(this['startDateBoardTime']),
        _0x2f4fd3 = new Date(this["endDateBoardTime"]);
      switch (_0x443b5e) {
        case _0x40b3be["START"]:
          _0x2d36c4["setDate"](_0x2d36c4['getDate']() + _0x2397dc);
          break;
        case _0x40b3be['END']:
          _0x2f4fd3["setDate"](_0x2f4fd3["getDate"]() + _0x2397dc);
      }
      if (_0x2d36c4 > _0x2f4fd3) return;
      if (_0x2d36c4["setHours"](0x0, 0x0, 0x0, 0x0), _0x2f4fd3["setHours"](0x0, 0x0, 0x0, 0x0), _0x2f4fd3["getTime"]() > this['currentTime']["getTime"]()) return;
      var _0x4ceca4 = new Date(this["currentTime"]);
      if (_0x4ceca4["setMonth"](this["currentTime"]["getMonth"]() - 0x1), _0x4ceca4['setDate'](0x0), _0x2d36c4 < _0x4ceca4 || _0x2f4fd3 < _0x4ceca4) return;
      this["startDateBoardTime"] = _0x2d36c4, this["endDateBoardTime"] = _0x2f4fd3, this["setDateBoard"](this["startDateBoardTime"], this["endDateBoardTime"]), dispatch(__dependency_9["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    } else this['unschedule'](this['longTouchCB']), this["longTouchCB"] = null;
  }, _0x5a682c['setDateLabel'] = function (_0xf18789, _0x1f8c56) {
    this["dateBtnLabel"]["string"] = this["formatTime"](_0xf18789) + '\x20~\x20' + this["formatTime"](_0x1f8c56);
  }, _0x5a682c["setDateBoard"] = function (_0x2df3b3, _0x50e501) {
    this['startDateBtnLabel']["string"] = this["formatTime"](_0x2df3b3), this["endDateBtnLabel"]["string"] = this['formatTime'](_0x50e501);
  }, _0x5a682c["formatTime"] = function (_0x329699) {
    var _0x452db7 = _0x329699;
    return _0x452db7["getFullYear"]() + '/' + (_0x452db7['getMonth']() + 0x1)["toString"]()["padStart"](0x2, '0') + '/' + _0x452db7["getDate"]()["toString"]()["padStart"](0x2, '0');
  }, _0x5a682c["startLoading"] = function () {
    this["loadingContent"]['active'] = !0x0, this["loadingBar"]["totalLength"] = this["tableTitle"]["getComponent"](__dependency_1['UITransform'])['width'], this['loadingBar']['progress'] = 0x0, (0, __dependency_1['tween'])(this["loadingBar"])["repeatForever"]((0, __dependency_1['tween'])()["set"]({
      'progress': 0x0
    })['to'](0xa, {
      'progress': 0x1
    }))["start"]();
  }, _0x5a682c["stopLoading"] = function () {
    __dependency_1['Tween']["stopAllByTarget"](this["loadingBar"]), this['loadingContent']["active"] = !0x1;
  }, _0x5a682c["addEvents"] = function () {
    var _0x3ae300 = this;
    _0x332806["prototype"]['addEvents']["call"](this), this['on'](__dependency_9["SlotFrameworkEvent"]["GET_HISTORY_RESPONSE"], function (_0x24bb13) {
      _0x3ae300["createItems"](_0x24bb13), _0x3ae300['stopLoading']();
    });
  }, (0, __dependency_0["createClass"])(_0x1a0384, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_8["default"]);
    }
  }, {
    'key': "userData",
    'get': function () {
      return __dependency_11['default'];
    }
  }]), _0x1a0384;
}(__dependency_5["default"]))['prototype'], 'bbr', [_0x143742], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x16aa48 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "backBtn", [_0x47fb65], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x40c5b9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "closeBtn", [_0x3efb72], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5411ee = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "dateBtn", [_0x40581a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x12e71b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], 'dateBtnLabel', [_0x261274], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4023cd = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64['prototype'], "last7DaysBtn", [_0x152e63], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x530828 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "yesterdayBtn", [_0x21aa17], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x46bac4 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "todayBtn", [_0x1ab082], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4334f9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], 'tableTitle', [_0x11ce72], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1c29ff = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], 'scrollView', [_0x5eda6c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1ccf33 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64['prototype'], "loadingContent", [_0x521980], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4dbb7f = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "loadingBar", [_0x4513ad], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5802df = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64['prototype'], "noDataLabel", [_0x266861], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x330cd7 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64['prototype'], "dateBoard", [_0x233c44], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x43fb16 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64['prototype'], "dateBoardBbr", [_0x4d9bd4], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2dcdec = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "startDateBtnAdd", [_0x4dfdd6], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xba1c87 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "startDateBtnCut", [_0x13a623], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1b2dd0 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "startDateBtnLabel", [_0x2bd9a6], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x35dd0e = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64['prototype'], 'endDateBtnAdd', [_0x4a764a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x50e2f9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "endDateBtnCut", [_0x38061d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3f6bea = (0, __dependency_0["applyDecoratedDescriptor"])(_0x4a5a64["prototype"], "endDateBtnLabel", [_0x3b7727], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4a5a64));
__dependency_1["cclegacy"]["_RF"]['pop']();
