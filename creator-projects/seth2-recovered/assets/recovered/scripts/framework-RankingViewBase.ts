// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RankingViewBase.ts.js
// SHA256: 8d21110750f2b3055a05867d440b808fa7c41c0457030e69b8eccb5b92ce094a
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-TableView";
import * as __dependency_4 from "./main-UIView";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-RankingItemBase";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-SlotFrameworkEvent";
import * as __dependency_9 from "./framework-ColorModel";
var __export_0;
export { __export_0 as ERankType };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ERankType":
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
(function (_0x22e010) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x377ea9) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x191480) {
  void 0;
})(__dependency_2);
(function (_0x21e01e) {
  void 0;
})(__dependency_3);
(function (_0x3d04f1) {
  void 0;
})(__dependency_4);
(function (_0x4ba947) {
  void 0;
})(__dependency_5);
(function (_0x488902) {
  void 0;
})(__dependency_6);
(function (_0xe902c7) {
  void 0;
})(__dependency_7);
(function (_0x11185d) {
  void 0;
})(__dependency_8);
(function (_0x525001) {
  void 0;
})(__dependency_9);
var _0xa8aeed, _0x1433b7, _0x18ab4c, _0x46effa, _0x1d1163, _0x12ad45, _0x13f950, _0x4a27f1, _0x9f5445, _0x355901, _0x645b29, _0x18edde, _0x575697, _0x457070, _0xd96808, _0x3c13d9, _0x41c355, _0x5dca94, _0x4c70b6, _0x1208b8, _0x3616ea;
__publish("ERankType", void 0x0), __dependency_1["cclegacy"]['_RF']["push"]({}, "fa46dT/D4ZHQpJQVvLMZLO7", "RankingViewBase", void 0x0);
var _0x55fd2d;
__dependency_1["_decorator"]["ccclass"], __dependency_1["_decorator"]['property'];
!function (_0x9bb892) {
  _0x9bb892["DRAGON_THIS_WEEK"] = "dragonThisWeek", _0x9bb892["DRAGON_LAST_WEEK"] = "dragonLastWeek", _0x9bb892["DRAGON_THIS_YEAR"] = "dragonThisYear";
}(_0x55fd2d || (_0x55fd2d = __publish("ERankType", {})));
__publish('default', (_0xa8aeed = (0, __dependency_5['inject'])("bbr", __dependency_1["Node"]), _0x1433b7 = (0, __dependency_5['inject'])("content/closeBtn", __dependency_1["Node"]), _0x18ab4c = (0, __dependency_5['inject'])("content/topBar/weekBtnContent/thisWeekBtn", __dependency_1["Node"]), _0x46effa = (0, __dependency_5['inject'])("content/topBar/weekBtnContent/lastWeekBtn", __dependency_1["Node"]), _0x1d1163 = (0, __dependency_5['inject'])("content/topBar/weekBtnContent/historyBtn", __dependency_1["Node"]), _0x12ad45 = (0, __dependency_5['inject'])("content/table/title", __dependency_1["Node"]), _0x13f950 = (0, __dependency_5['inject'])("content/table/scrollView", __dependency_3['default']), _0x4a27f1 = (0, __dependency_5['inject'])('content/loadingContent', __dependency_1["Node"]), _0x9f5445 = (0, __dependency_5['inject'])("content/loadingContent/ProgressBar", __dependency_1['ProgressBar']), _0x355901 = (0, __dependency_5['inject'])("content/noDataLabel", __dependency_1["Node"]), _0x18edde = (0, __dependency_0["applyDecoratedDescriptor"])((_0x645b29 = function (_0x15a047) {
  function _0x2bfc20() {
    for (var _0x4887dd, _0x112aa4 = arguments["length"], _0x2f5a07 = new Array(_0x112aa4), _0x4eaa1e = 0x0; _0x4eaa1e < _0x112aa4; _0x4eaa1e++) _0x2f5a07[_0x4eaa1e] = arguments[_0x4eaa1e];
    return _0x4887dd = Reflect.construct(_0x15a047, [this]["concat"](_0x2f5a07).slice(1), new.target || _0x2bfc20) || this, (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "bbr", _0x18edde, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, 'closeBtn', _0x575697, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "thisWeekBtn", _0x457070, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "lastWeekBtn", _0xd96808, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, 'historyBtn', _0x3c13d9, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "tableTitle", _0x41c355, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "scrollView", _0x5dca94, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "loadingContent", _0x4c70b6, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "loadingBar", _0x1208b8, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), (0, __dependency_0['initializerDefineProperty'])(_0x4887dd, "noDataLabel", _0x3616ea, (0, __dependency_0["assertThisInitialized"])(_0x4887dd)), _0x4887dd['itemPrefab'] = null, _0x4887dd["itemDataArray"] = [], _0x4887dd["thisWeekBtnClickedFlag"] = !0x1, _0x4887dd["lastWeekBtnClickedFlag"] = !0x1, _0x4887dd["historyBtnClickedFlag"] = !0x1, _0x4887dd['rankKey'] = null, _0x4887dd;
  }
  (0, __dependency_0["inheritsLoose"])(_0x2bfc20, _0x15a047);
  var _0x2d755a = _0x2bfc20["prototype"];
  return _0x2d755a["onLoad"] = function () {
    _0x15a047["prototype"]["onLoad"]["call"](this);
  }, _0x2d755a['start'] = function () {
    this["init"](), this["thisWeekBtnClickedFlag"] = !0x0, this["sendGetRankingWeekByBtn"](this['thisWeekBtn'], _0x55fd2d["DRAGON_THIS_WEEK"]);
  }, _0x2d755a["onDestroy"] = function () {
    _0x15a047["prototype"]["onDestroy"]["call"](this);
  }, _0x2bfc20["getPrefabUrl"] = function () {
    return "prefabs/view/RankingViewP";
  }, _0x2d755a["updateCellData"] = function (_0x1f97f7, _0x1bac21) {
    _0x1bac21["updateData"](this['rankKey'], this["itemDataArray"][_0x1bac21["index"]], _0x1bac21["index"]);
  }, _0x2d755a["tableCellTypeAtIndex"] = function (_0x1b0fb4, _0x2ddaa7) {
    return 0x0;
  }, _0x2d755a["numberOfCellsInTableView"] = function (_0x33bb2a) {
    return this["itemDataArray"]["length"];
  }, _0x2d755a["tableCellWillRecycle"] = function (_0x2cf6cd, _0x31e5b6) {
    _0x31e5b6['willRecycle']();
  }, _0x2d755a["init"] = function () {
    this["startLoading"](), this["itemPrefab"] = App["cache"]["get"](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], this["getRankingItemPrefabUrl"])["data"], this["setEventTouch"](), this["scrollView"]["delegate"] = this;
    var _0x497b60 = (0, __dependency_1["instantiate"])(this["itemPrefab"])['addComponent'](__dependency_6["default"]),
      _0x19c679 = this["scrollView"]["template"];
    _0x19c679['push'](_0x497b60), this['scrollView']['template'] = _0x19c679;
  }, _0x2d755a["onClose"] = function () {
    this["reloadItems"](), this['stopLoading'](), this["close"](), dispatch(__dependency_8["SlotFrameworkEvent"]['PLAY_UI_CLOSE_CLICK_BTM']);
  }, _0x2d755a["setEventTouch"] = function () {
    var _0x571fcb = this;
    this["closeBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x571fcb["close"]();
    }), this["bbr"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x571fcb["close"]();
    }), this['thisWeekBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x571fcb["thisWeekBtnClickedFlag"] || (_0x571fcb["resetBtnStatus"](), _0x571fcb['thisWeekBtnClickedFlag'] = !0x0, _0x571fcb["sendGetRankingWeekByBtn"](_0x571fcb["thisWeekBtn"], _0x55fd2d["DRAGON_THIS_WEEK"]), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }), this["lastWeekBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x571fcb["lastWeekBtnClickedFlag"] || (_0x571fcb["resetBtnStatus"](), _0x571fcb["lastWeekBtnClickedFlag"] = !0x0, _0x571fcb['sendGetRankingWeekByBtn'](_0x571fcb["lastWeekBtn"], _0x55fd2d['DRAGON_LAST_WEEK']), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }), this['historyBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x571fcb["historyBtnClickedFlag"] || (_0x571fcb["resetBtnStatus"](), _0x571fcb['historyBtnClickedFlag'] = !0x0, _0x571fcb["sendGetRankingWeekByBtn"](_0x571fcb["historyBtn"], _0x55fd2d["DRAGON_THIS_YEAR"]), dispatch(__dependency_8["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    });
  }, _0x2d755a["sendGetRankingWeekByBtn"] = function (_0x195a2f, _0x595bdb) {
    this["startLoading"](), this["setButtonActive"](this['thisWeekBtn'], this['lastWeekBtn'], this['historyBtn']), this["setButtonStyle"](_0x195a2f, !0x0), this["reloadItems"](), dispatch(__dependency_8["SlotFrameworkEvent"]['SEND_GET_RANKING_LIST_REQUEST'], {
      'rankType': _0x595bdb
    });
  }, _0x2d755a["setButtonActive"] = function (_0x4edb64, _0x7f2a47, _0x306281, _0x3ca9ca) {
    void 0x0 === _0x3ca9ca && (_0x3ca9ca = !0x1), this["setButtonStyle"](_0x4edb64, _0x3ca9ca), this["setButtonStyle"](_0x7f2a47, _0x3ca9ca), this["setButtonStyle"](_0x306281, _0x3ca9ca);
  }, _0x2d755a["setButtonStyle"] = function (_0x128c54, _0x488076) {
    var _0x163fc8 = __dependency_9["default"]['getData']();
    _0x488076 ? (_0x128c54["getComponent"](__dependency_1["Sprite"])['color'] = _0x163fc8['mainGame']['main'], _0x128c54["getComponent"](__dependency_1['Button'])["normalColor"] = _0x163fc8["mainGame"]["main"], _0x128c54['getComponent'](__dependency_1['Button'])['pressedColor'] = _0x163fc8['mainGame']["mainHover"], _0x128c54["getComponent"](__dependency_1['Button'])['hoverColor'] = _0x163fc8["mainGame"]["mainHover"], _0x128c54["getComponent"](__dependency_1['Button'])["disabledColor"] = _0x163fc8['white']["default01"], _0x128c54["getChildByName"]("Label")["getComponent"](__dependency_1["Label"])["color"] = new __dependency_1["Color"]('#000000')) : (_0x128c54["getComponent"](__dependency_1["Sprite"])["color"] = _0x163fc8["background"][0x3c], _0x128c54['getComponent'](__dependency_1['Button'])["normalColor"] = _0x163fc8['background'][0x3c], _0x128c54['getComponent'](__dependency_1['Button'])["pressedColor"] = _0x163fc8["background"][0x50], _0x128c54["getComponent"](__dependency_1['Button'])["hoverColor"] = _0x163fc8['background'][0x50], _0x128c54["getComponent"](__dependency_1['Button'])["disabledColor"] = _0x163fc8['white']["default01"], _0x128c54["getChildByName"]("Label")["getComponent"](__dependency_1["Label"])["color"] = _0x163fc8["background"][0x0]);
  }, _0x2d755a["resetBtnStatus"] = function () {
    this['thisWeekBtnClickedFlag'] = !0x1, this["lastWeekBtnClickedFlag"] = !0x1, this["historyBtnClickedFlag"] = !0x1;
  }, _0x2d755a["createItems"] = function (_0x435e6c) {
    var _0x74381e = _0x435e6c["data"]["list"];
    if (this["itemPrefab"]) {
      for (var _0x2096a6 = 0x0; _0x2096a6 < _0x74381e['length']; _0x2096a6++) {
        var _0x568d45 = _0x74381e[_0x2096a6],
          _0x5d945a = _0x568d45["rank"],
          _0x335449 = _0x568d45["win"],
          _0xbecfe4 = _0x568d45["bet"];
        _0x74381e[_0x2096a6]['rank'] = _0x5d945a, _0x74381e[_0x2096a6]["win"] = _0x335449, _0x74381e[_0x2096a6]["bet"] = _0xbecfe4, this['itemDataArray']["push"](_0x74381e[_0x2096a6]), this["scrollView"]["insertCellAtIndex"]();
      }
      0x0 == this["itemDataArray"]["length"] && (this["noDataLabel"]["active"] = !0x0);
    }
  }, _0x2d755a["reloadItems"] = function () {
    this["itemDataArray"] = [], this["scrollView"]["reloadData"](), this["noDataLabel"]["active"] = !0x1;
  }, _0x2d755a['startLoading'] = function () {
    this["loadingContent"]['active'] = !0x0, this["loadingBar"]["totalLength"] = this["tableTitle"]['getComponent'](__dependency_1['UITransform'])["width"], this["loadingBar"]['progress'] = 0x0, (0, __dependency_1['tween'])(this["loadingBar"])["repeatForever"]((0, __dependency_1['tween'])()['set']({
      'progress': 0x0
    })['to'](0xa, {
      'progress': 0x1
    }))['start']();
  }, _0x2d755a["stopLoading"] = function () {
    __dependency_1["Tween"]["stopAllByTarget"](this['loadingBar']), this['loadingContent']["active"] = !0x1;
  }, _0x2d755a['addEvents'] = function () {
    var _0x83d055 = this;
    _0x15a047["prototype"]["addEvents"]["call"](this), this['on'](__dependency_8["SlotFrameworkEvent"]["GET_RANKING_LIST_RESPONSE"], function (_0x9d8657) {
      _0x83d055["rankKey"] = _0x9d8657['data']["rankKey"], _0x83d055["createItems"](_0x9d8657), _0x83d055['stopLoading']();
    });
  }, (0, __dependency_0["createClass"])(_0x2bfc20, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_7['default']);
    }
  }]), _0x2bfc20;
}(__dependency_4["default"]))['prototype'], "bbr", [_0xa8aeed], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x575697 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29["prototype"], "closeBtn", [_0x1433b7], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x457070 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29["prototype"], "thisWeekBtn", [_0x18ab4c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xd96808 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29["prototype"], "lastWeekBtn", [_0x46effa], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3c13d9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29['prototype'], "historyBtn", [_0x1d1163], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x41c355 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29['prototype'], 'tableTitle', [_0x12ad45], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5dca94 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29["prototype"], "scrollView", [_0x13f950], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4c70b6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29["prototype"], "loadingContent", [_0x4a27f1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1208b8 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29["prototype"], 'loadingBar', [_0x9f5445], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3616ea = (0, __dependency_0["applyDecoratedDescriptor"])(_0x645b29["prototype"], 'noDataLabel', [_0x355901], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x645b29));
__dependency_1["cclegacy"]["_RF"]["pop"]();
