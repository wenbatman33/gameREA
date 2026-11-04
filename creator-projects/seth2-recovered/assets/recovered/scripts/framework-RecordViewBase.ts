// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RecordViewBase.ts.js
// SHA256: 6ff9c63f080f886dcf21447b42cd7c14db0b933a1429e075d64bca10cce20b67
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmUtils";
import * as __dependency_4 from "./main-AdapterEvent";
import * as __dependency_5 from "./main-TableView";
import * as __dependency_6 from "./main-UIView";
import * as __dependency_7 from "./main-Decorators";
import * as __dependency_8 from "./framework-RecordViewItem";
import * as __dependency_9 from "./framework-SlotFrameworkData";
import * as __dependency_10 from "./framework-SlotFrameworkEvent";
import * as __dependency_11 from "./framework-PlatformModel";
var __export_0;
export { __export_0 as DateBtnType };
var __export_1;
export { __export_1 as DateTouchType };
var __export_2;
export { __export_2 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "DateBtnType":
      __export_0 = value;
      break;
    case "DateTouchType":
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
(function (_0x79a0c) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x13ae96) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0xc67e5c) {
  void 0;
})(__dependency_2);
(function (_0x170c15) {
  void 0;
})(__dependency_3);
(function (_0x3b6f56) {
  void 0;
})(__dependency_4);
(function (_0x214fe0) {
  void 0;
})(__dependency_5);
(function (_0x5c2fa2) {
  void 0;
})(__dependency_6);
(function (_0x4d1a4b) {
  void 0;
})(__dependency_7);
(function (_0x5215a8) {
  void 0;
})(__dependency_8);
(function (_0xf375dc) {
  void 0;
})(__dependency_9);
(function (_0x5388e) {
  void 0;
})(__dependency_10);
(function (_0x3cc26f) {
  void 0;
})(__dependency_11);
var _0x63596f, _0x4a06e3, _0x57691f, _0x25c661, _0x186f3a, _0x210342, _0x433237, _0x58752a, _0x4916d2, _0x47a736, _0x54e049, _0x31063c, _0x3bd96b, _0x552089, _0x27cfe0, _0x31817b, _0x28a565, _0x328abf, _0x543abe, _0x4ff1e7, _0x11ca96, _0x1f652e, _0x298afa, _0xd7f109, _0x3c381c, _0x475670, _0x1d2fcf, _0x17b5b9, _0x10d312, _0x3fe298, _0x2c02f3, _0x538878, _0x4c72ec, _0x3b5b2d, _0x3f44b0, _0x8656fd, _0x31fd2d, _0x25adca, _0x3a462d, _0x3a2d23, _0xfea347, _0x4cd2e9, _0x1773bd, _0x47799b, _0x1a75f6, _0x4af665, _0x2eaf59, _0x13dd1f, _0x35c9fc, _0x32324e, _0x2f31a8;
__publish({
  'DateBtnType': void 0x0,
  'DateTouchType': void 0x0
}), __dependency_1["cclegacy"]["_RF"]["push"]({}, "cb957E9CKdAcarZuRvlTD10", "RecordViewBase", void 0x0);
var _0x44268d, _0x5c341b;
__dependency_1["_decorator"]["ccclass"], __dependency_1["_decorator"]['property'];
!function (_0x39426a) {
  _0x39426a["DAY"] = "day", _0x39426a['HOUR'] = 'hour', _0x39426a['MIN'] = 'min';
}(_0x44268d || (_0x44268d = __publish("DateBtnType", {}))), function (_0x11874f) {
  _0x11874f["ADD"] = "add", _0x11874f["CUT"] = "cut";
}(_0x5c341b || (_0x5c341b = __publish('DateTouchType', {})));
__publish('default', (_0x63596f = (0, __dependency_7["inject"])("bbr", __dependency_1["Node"]), _0x4a06e3 = (0, __dependency_7["inject"])("content/closeBtn", __dependency_1["Node"]), _0x57691f = (0, __dependency_7["inject"])("content/historyBtn", __dependency_1["Node"]), _0x25c661 = (0, __dependency_7["inject"])("content/topBar/dateBtn", __dependency_1["Node"]), _0x186f3a = (0, __dependency_7["inject"])("content/topBar/dateBtn/date", __dependency_1["Label"]), _0x210342 = (0, __dependency_7["inject"])("content/topBar/idContent", __dependency_1["Node"]), _0x433237 = (0, __dependency_7["inject"])("content/topBar/idContent/content/idMask", __dependency_1["Node"]), _0x58752a = (0, __dependency_7["inject"])('content/topBar/idContent/content/idMask/idLabel', __dependency_1["Node"]), _0x4916d2 = (0, __dependency_7["inject"])("content/topBar/copyHint", __dependency_1["Animation"]), _0x47a736 = (0, __dependency_7["inject"])("content/table/title", __dependency_1["Node"]), _0x54e049 = (0, __dependency_7["inject"])("content/table/scrollView", __dependency_5["default"]), _0x31063c = (0, __dependency_7["inject"])('content/loadingContent', __dependency_1["Node"]), _0x3bd96b = (0, __dependency_7["inject"])("content/loadingContent/ProgressBar", __dependency_1["ProgressBar"]), _0x552089 = (0, __dependency_7["inject"])("content/noDataLabel", __dependency_1["Node"]), _0x27cfe0 = (0, __dependency_7["inject"])("content/dateBoard", __dependency_1["Node"]), _0x31817b = (0, __dependency_7["inject"])('content/dateBoard/bbr', __dependency_1["Node"]), _0x28a565 = (0, __dependency_7["inject"])('content/dateBoard/layout/dayBtn/addBtn', __dependency_1["Node"]), _0x328abf = (0, __dependency_7["inject"])("content/dateBoard/layout/dayBtn/cutBtn", __dependency_1["Node"]), _0x543abe = (0, __dependency_7["inject"])("content/dateBoard/layout/dayBtn/label", __dependency_1["Label"]), _0x4ff1e7 = (0, __dependency_7["inject"])("content/dateBoard/layout/hourBtn/addBtn", __dependency_1["Node"]), _0x11ca96 = (0, __dependency_7["inject"])("content/dateBoard/layout/hourBtn/cutBtn", __dependency_1["Node"]), _0x1f652e = (0, __dependency_7["inject"])("content/dateBoard/layout/hourBtn/label", __dependency_1["Label"]), _0x298afa = (0, __dependency_7["inject"])("content/dateBoard/layout/minBtn/addBtn", __dependency_1["Node"]), _0xd7f109 = (0, __dependency_7["inject"])("content/dateBoard/layout/minBtn/cutBtn", __dependency_1["Node"]), _0x3c381c = (0, __dependency_7["inject"])("content/dateBoard/layout/minBtn/label", __dependency_1["Label"]), _0x1d2fcf = (0, __dependency_0["applyDecoratedDescriptor"])((_0x475670 = function (_0x378391) {
  function _0x5acd34() {
    for (var _0x54bece, _0x58b4ed = arguments["length"], _0xd4b5d = new Array(_0x58b4ed), _0x251499 = 0x0; _0x251499 < _0x58b4ed; _0x251499++) _0xd4b5d[_0x251499] = arguments[_0x251499];
    return _0x54bece = Reflect.construct(_0x378391, [this]['concat'](_0xd4b5d).slice(1), new.target || _0x5acd34) || this, (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "bbr", _0x1d2fcf, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'closeBtn', _0x17b5b9, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "historyBtn", _0x10d312, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "dateBtn", _0x3fe298, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "dateBtnLabel", _0x2c02f3, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "idContent", _0x538878, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "idMask", _0x4c72ec, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "idLabel", _0x3b5b2d, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'copyHint', _0x3f44b0, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "tableTitle", _0x8656fd, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "scrollView", _0x31fd2d, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "loadingContent", _0x25adca, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "loadingBar", _0x3a462d, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'noDataLabel', _0x3a2d23, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'dateBoard', _0xfea347, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'dateBoardBbr', _0x4cd2e9, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'dayAdd', _0x1773bd, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'dayCut', _0x47799b, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "dayLabel", _0x1a75f6, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "hourAdd", _0x4af665, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "hourCut", _0x2eaf59, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'hourLabel', _0x13dd1f, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "minAdd", _0x35c9fc, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, 'minCut', _0x32324e, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), (0, __dependency_0["initializerDefineProperty"])(_0x54bece, "minLabel", _0x2f31a8, (0, __dependency_0["assertThisInitialized"])(_0x54bece)), _0x54bece["itemPrefab"] = null, _0x54bece["recordData"] = [], _0x54bece['lastItemTime'] = null, _0x54bece["currentTime"] = null, _0x54bece["dateTouchFlag"] = !0x1, _0x54bece["dateBoardTime"] = null, _0x54bece['preDateBoardTime'] = null, _0x54bece["longTouchCB"] = null, _0x54bece["sentRequestFlag"] = !0x1, _0x54bece;
  }
  (0, __dependency_0["inheritsLoose"])(_0x5acd34, _0x378391);
  var _0x9ee985 = _0x5acd34['prototype'];
  return _0x9ee985["onLoad"] = function () {
    _0x378391['prototype']["onLoad"]['call'](this);
  }, _0x9ee985["start"] = function () {
    this['init'](), this["currentTime"] = new Date(), this['dateBoardTime'] = this['currentTime'], this["dateBtnLabel"]["string"] = this["dateBoardTime"]["toLocaleString"](void 0x0, {
      'hour12': !0x1
    })["replace"](/:\d{2}$/, ''), dispatch(__dependency_10["SlotFrameworkEvent"]["SEND_GET_BET_RECORDS_REQUEST"], {
      'rows': 0x10
    });
  }, _0x9ee985["onDestroy"] = function () {
    _0x378391["prototype"]["onDestroy"]['call'](this);
  }, _0x5acd34["getPrefabUrl"] = function () {
    return "prefabs/view/RecordView";
  }, _0x9ee985['updateCellData'] = function (_0x192fa7, _0x37461a) {
    _0x37461a["updateData"](this["recordData"][_0x37461a["index"]], _0x37461a["index"]);
  }, _0x9ee985["tableCellTypeAtIndex"] = function (_0x45622c, _0x212977) {
    return 0x0;
  }, _0x9ee985["numberOfCellsInTableView"] = function (_0x1a1b52) {
    return this["recordData"]["length"];
  }, _0x9ee985["tableCellWillRecycle"] = function (_0x5eae85, _0x3a2b9b) {
    _0x3a2b9b['willRecycle']();
  }, _0x9ee985['setAdapter'] = function (_0x1e0657) {
    switch (_0x1e0657) {
      case __dependency_4["EOrientationType"]['LANDSCAPE']:
      case __dependency_4["EOrientationType"]["PORTRAIT"]:
    }
  }, _0x9ee985["init"] = function () {
    this["startLoading"](), this["itemPrefab"] = App['cache']["get"](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], this["getRecordViewItemPrefabUrl"])["data"], this["setEventTouch"](), this["setUserID"](), this["serIdLabelMarquee"](), this['scrollView']["node"]['on'](__dependency_1['ScrollView']['EventType']['BOUNCE_BOTTOM'], this["onScrollEnd"], this), this['scrollView']["delegate"] = this;
    var _0x1a9cf4 = (0, __dependency_1["instantiate"])(this["itemPrefab"])["addComponent"](__dependency_8['default']),
      _0x3e427c = this["scrollView"]['template'];
    _0x3e427c["push"](_0x1a9cf4), this["scrollView"]["template"] = _0x3e427c, this['resize']();
  }, _0x9ee985["serIdLabelMarquee"] = function () {
    var _0x751620 = {
      'maskNode': this["idMask"],
      'labelNode': this["idLabel"],
      'delayTime': 0x2
    };
    this["scheduleOnce"](function () {
      __dependency_3["CmmUtils"]['labelMarquee'](_0x751620);
    });
  }, _0x9ee985["resize"] = function () {
    var _0x22ec5a = this,
      _0x255356 = this['historyBtn']["getChildByName"]("content")["getComponent"](__dependency_1["UITransform"])["contentSize"],
      _0x4dbdc8 = this["historyBtn"]['getChildByName']('bg');
    this["scheduleOnce"](function () {
      _0x22ec5a["historyBtn"]["getComponent"](__dependency_1["UITransform"])['setContentSize'](_0x255356), _0x4dbdc8["getComponent"](__dependency_1["Widget"])["updateAlignment"]();
    });
  }, _0x9ee985["onClose"] = function () {
    this["reloadItems"](), this["stopLoading"](), this["close"](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]);
  }, _0x9ee985["setEventTouch"] = function () {
    var _0x1c6e14 = this;
    this['historyBtn']['on'](__dependency_1['NodeEventType']["TOUCH_END"], function () {
      _0x1c6e14["openHistoryView"](), dispatch(__dependency_10["SlotFrameworkEvent"]['PLAY_CLICK_BTM']);
    }), this["closeBtn"]['on'](__dependency_1['NodeEventType']["TOUCH_START"], this["onClose"], this), this['bbr']['on'](__dependency_1['NodeEventType']["TOUCH_START"], this["onClose"], this), this['dateBtn']['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x1c6e14["dateBoard"]['active'] = !0x0, _0x1c6e14["preDateBoardTime"] = _0x1c6e14["dateBoardTime"], _0x1c6e14['updateDateBoard'](), _0x1c6e14["scrollView"]["stopAutoScroll"](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }), this["idContent"]['on'](__dependency_1['NodeEventType']['TOUCH_END'], function () {
      __dependency_3["CmmUtils"]['CopyText'](_0x1c6e14["idLabel"]["getComponent"](__dependency_1["Label"])["string"]), _0x1c6e14['copyHint']["play"](_0x1c6e14["copyHint"]['clips'][0x0]['name']), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }), this["dateBoardBbr"]['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x1c6e14["dateBoard"]["active"] = !0x1, _0x1c6e14['noDataLabel']["active"] = !0x1, _0x1c6e14['dateBoardTime']["valueOf"]() != _0x1c6e14['preDateBoardTime']["valueOf"]() && (_0x1c6e14["dateBtnLabel"]["string"] = _0x1c6e14['dateBoardTime']["toLocaleString"](void 0x0, {
        'hour12': !0x1
      })["replace"](/:\d{2}$/, ''), _0x1c6e14["reloadItems"](), _0x1c6e14["sentRecordRequest"](_0x1c6e14['dateBoardTime']['valueOf']()), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }), this['dayAdd']['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x1c6e14["onDateTouchStart"](_0x44268d["DAY"], _0x5c341b["ADD"]), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    }, this), this['dayAdd']['on'](__dependency_1['NodeEventType']["TOUCH_END"], this["onDateTouchEnd"], this), this['dayCut']['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x1c6e14["onDateTouchStart"](_0x44268d["DAY"], _0x5c341b['CUT']);
    }, this), this["dayCut"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], this["onDateTouchEnd"], this), this["hourAdd"]['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x1c6e14["onDateTouchStart"](_0x44268d["HOUR"], _0x5c341b["ADD"]);
    }, this), this['hourAdd']['on'](__dependency_1['NodeEventType']["TOUCH_END"], this["onDateTouchEnd"], this), this["hourCut"]['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x1c6e14["onDateTouchStart"](_0x44268d["HOUR"], _0x5c341b['CUT']);
    }, this), this["hourCut"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], this["onDateTouchEnd"], this), this["minAdd"]['on'](__dependency_1['NodeEventType']['TOUCH_START'], function () {
      _0x1c6e14['onDateTouchStart'](_0x44268d["MIN"], _0x5c341b["ADD"]);
    }, this), this["minAdd"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], this['onDateTouchEnd'], this), this["minCut"]['on'](__dependency_1['NodeEventType']["TOUCH_START"], function () {
      _0x1c6e14["onDateTouchStart"](_0x44268d["MIN"], _0x5c341b['CUT']);
    }, this), this["minCut"]['on'](__dependency_1['NodeEventType']["TOUCH_END"], this["onDateTouchEnd"], this);
  }, _0x9ee985["sentRecordRequest"] = function (_0x49515f) {
    var _0x148e9d = {
      'lt': null != _0x49515f ? _0x49515f : 0x0,
      'rows': 0x10
    };
    dispatch(__dependency_10["SlotFrameworkEvent"]["SEND_GET_BET_RECORDS_REQUEST"], _0x148e9d);
  }, _0x9ee985["createItems"] = function (_0x5677c1) {
    var _0x11af19 = _0x5677c1["data"];
    if (this["itemPrefab"]) {
      for (var _0x587394 = 0x0; _0x587394 < _0x11af19["length"]; _0x587394++) this["recordData"]["push"](_0x11af19[_0x587394]), this["scrollView"]['insertCellAtIndex'](), _0x587394 == _0x11af19["length"] - 0x1 && (this["lastItemTime"] = Number(_0x11af19[_0x587394]['endTime']));
      0x0 == this['recordData']["length"] && (this["noDataLabel"]["active"] = !0x0), this["sentRequestFlag"] = !0x1;
    }
  }, _0x9ee985["reloadItems"] = function () {
    this['recordData'] = [], this['scrollView']["reloadData"](), this["noDataLabel"]["active"] = !0x1;
  }, _0x9ee985["onScrollEnd"] = function () {
    var _0x3dee4d;
    if (!this["sentRequestFlag"]) {
      var _0x205dd2 = null != (_0x3dee4d = this['lastItemTime']) ? _0x3dee4d : 0x0;
      this["sentRecordRequest"](_0x205dd2), this['sentRequestFlag'] = !0x0;
    }
  }, _0x9ee985["onDateTouchStart"] = function (_0x51185c, _0x436799) {
    var _0x59095c = this;
    this["dateTouchFlag"] || (this["dateTouchFlag"] = !0x0, this["dateCallBack"](_0x51185c, _0x436799), this["longTouchCB"] = function () {
      _0x59095c["dateCallBack"](_0x51185c, _0x436799);
    }, this["schedule"](this["longTouchCB"], 0.1, __dependency_1["macro"]["REPEAT_FOREVER"], 0.5));
  }, _0x9ee985['onDateTouchEnd'] = function () {
    this["unschedule"](this["longTouchCB"]), this["longTouchCB"] = null, this["dateTouchFlag"] = !0x1;
  }, _0x9ee985["dateCallBack"] = function (_0x50b808, _0x364f3a) {
    if (this["dateTouchFlag"]) {
      var _0x505b7e = _0x364f3a == _0x5c341b['ADD'] ? 0x1 : -0x1,
        _0x277d51 = new Date(this['dateBoardTime']);
      switch (_0x50b808) {
        case _0x44268d["DAY"]:
          _0x277d51["setDate"](_0x277d51["getDate"]() + _0x505b7e);
          break;
        case _0x44268d["HOUR"]:
          _0x277d51['setHours'](_0x277d51["getHours"]() + _0x505b7e);
          break;
        case _0x44268d["MIN"]:
          _0x277d51['setMinutes'](_0x277d51["getMinutes"]() + _0x505b7e);
      }
      if (_0x277d51 > this['currentTime']) return;
      var _0x14159f = new Date(this["currentTime"]);
      if (_0x14159f["setMonth"](this["currentTime"]["getMonth"]() - 0x1), _0x14159f["setDate"](0x1), _0x14159f['setHours'](0x0), _0x14159f['setMinutes'](0x0), _0x14159f["setSeconds"](0x3b), _0x277d51 < _0x14159f) return;
      this["dateBoardTime"] = _0x277d51, this["updateDateBoard"](), dispatch(__dependency_10["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
    } else this['unschedule'](this["longTouchCB"]), this["longTouchCB"] = null;
  }, _0x9ee985['updateDateBoard'] = function () {
    this["dayLabel"]['string'] = (this["dateBoardTime"]['getMonth']() + 0x1)['toString']()["padStart"](0x2, '0') + '/' + this["dateBoardTime"]["getDate"]()["toString"]()["padStart"](0x2, '0'), this["hourLabel"]["string"] = App['getLanguage']("betRecordHour", ['' + this['dateBoardTime']["getHours"]()["toString"]()["padStart"](0x2, '0')], __dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]]), this["minLabel"]["string"] = App["getLanguage"]("betRecordMinute", ['' + this["dateBoardTime"]['getMinutes']()["toString"]()['padStart'](0x2, '0')], __dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]]);
  }, _0x9ee985["formatTime"] = function (_0x25cb39) {
    var _0x488059 = _0x25cb39;
    return _0x488059["getFullYear"]() + '/' + (_0x488059["getMonth"]() + 0x1)["toString"]()["padStart"](0x2, '0') + '/' + _0x488059["getDate"]()["toString"]()["padStart"](0x2, '0') + '\x20' + _0x488059["getHours"]()["toString"]()['padStart'](0x2, '0') + ':' + _0x488059["getMinutes"]()["toString"]()["padStart"](0x2, '0') + ':' + _0x488059["getSeconds"]()["toString"]()["padStart"](0x2, '0');
  }, _0x9ee985["setUserID"] = function () {
    this["idLabel"]['getComponent'](__dependency_1["Label"])["string"] = this['userData']['getData']()["player"]["name"];
  }, _0x9ee985["startLoading"] = function () {
    this['loadingBar']["totalLength"] = this["tableTitle"]["getComponent"](__dependency_1["UITransform"])["width"], this['loadingBar']['progress'] = 0x0, (0, __dependency_1["tween"])(this['loadingBar'])["repeatForever"]((0, __dependency_1["tween"])()["set"]({
      'progress': 0x0
    })['to'](0xa, {
      'progress': 0x1
    }))["start"]();
  }, _0x9ee985["stopLoading"] = function () {
    __dependency_1["Tween"]['stopAllByTarget'](this["loadingBar"]), this["loadingContent"]["active"] = !0x1;
  }, _0x9ee985["addEvents"] = function () {
    var _0x1d46a1 = this;
    _0x378391["prototype"]["addEvents"]["call"](this), this['on'](__dependency_10["SlotFrameworkEvent"]["BET_RECORDS_RESPONSE"], function (_0x16d0f1) {
      _0x1d46a1["createItems"](_0x16d0f1), _0x1d46a1['stopLoading']();
    });
  }, (0, __dependency_0['createClass'])(_0x5acd34, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]['get'](__dependency_9['default']);
    }
  }, {
    'key': "userData",
    'get': function () {
      return __dependency_11["default"];
    }
  }]), _0x5acd34;
}(__dependency_6["default"]))["prototype"], 'bbr', [_0x63596f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x17b5b9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "closeBtn", [_0x4a06e3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x10d312 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], "historyBtn", [_0x57691f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3fe298 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "dateBtn", [_0x25c661], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2c02f3 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], 'dateBtnLabel', [_0x186f3a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x538878 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "idContent", [_0x210342], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4c72ec = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "idMask", [_0x433237], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3b5b2d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "idLabel", [_0x58752a], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3f44b0 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "copyHint", [_0x4916d2], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x8656fd = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "tableTitle", [_0x47a736], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x31fd2d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "scrollView", [_0x54e049], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x25adca = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], 'loadingContent', [_0x31063c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3a462d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], "loadingBar", [_0x3bd96b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3a2d23 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "noDataLabel", [_0x552089], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xfea347 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "dateBoard", [_0x27cfe0], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4cd2e9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "dateBoardBbr", [_0x31817b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1773bd = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], "dayAdd", [_0x28a565], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x47799b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], "dayCut", [_0x328abf], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1a75f6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "dayLabel", [_0x543abe], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4af665 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "hourAdd", [_0x4ff1e7], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2eaf59 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], "hourCut", [_0x11ca96], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x13dd1f = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], "hourLabel", [_0x1f652e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x35c9fc = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], "minAdd", [_0x298afa], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x32324e = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670["prototype"], "minCut", [_0xd7f109], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2f31a8 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x475670['prototype'], 'minLabel', [_0x3c381c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x475670));
__dependency_1["cclegacy"]['_RF']["pop"]();
