// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ReplayUIViewBase.ts.js
// SHA256: 74a306976fdb5637ff0d7f1086c31a332e1017aa3c1b93af91884dd3128aed0d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./main-UrlUtils";
import * as __dependency_4 from "./framework-ExitUtils";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-NoTouchingView";
import * as __dependency_7 from "./framework-ReplayModel";
import * as __dependency_8 from "./main-UIView";
import * as __dependency_9 from "./framework-SlotFrameworkData";
import * as __dependency_10 from "./framework-type2";
import * as __dependency_11 from "./main-CmmUtils";
var __export_0;
export { __export_0 as REPLAY_TYPE };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "REPLAY_TYPE":
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
(function (_0x355116) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0xc4aae) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x287718) {
  void 0;
})(__dependency_2);
(function (_0x5c2cfa) {
  void 0;
})(__dependency_3);
(function (_0x50a573) {
  void 0;
})(__dependency_4);
(function (_0xa0dd2) {
  void 0;
})(__dependency_5);
(function (_0x1336bd) {
  void 0;
})(__dependency_6);
(function (_0x27f6c9) {
  void 0, void 0;
})(__dependency_7);
(function (_0x436797) {
  void 0;
})(__dependency_8);
(function (_0x489ff9) {
  void 0;
})(__dependency_9);
(function (_0x1a523c) {
  void 0;
})(__dependency_10);
(function (_0x327381) {
  void 0;
})(__dependency_11);
var _0x5e4362, _0x2e74cf, _0x2d10e4, _0x154b59, _0x521f1f, _0xfad0ba, _0x343835, _0x3ad048, _0x213cb3, _0x54e585, _0x28703c, _0x56ba73, _0x19b863, _0x1e9fdb, _0x51d654, _0x3eafc6, _0x3acebc, _0x2fa0e5, _0x27f599, _0x275e2a, _0x214f5a, _0x4b686b, _0xad681b;
__dependency_1['cclegacy']["_RF"]["push"]({}, "f1f46dRCdhG960lxU+Ps5hi", "ReplayUIViewBase", void 0x0);
var _0x19afa2 = 0x0,
  _0x3841c7 = 0x1,
  _0x3d5811 = 0x2,
  _0x360ee3 = __publish("REPLAY_TYPE", {
    'NONE': 0x0,
    'INFO_BAR': 0x1,
    'BOARD': 0x2,
    'CLOSE': 0x3
  }),
  _0x2b9087 = __dependency_1['_decorator']["ccclass"];
__publish("default", (_0x5e4362 = _0x2b9087("ReplayUIViewBase"), _0x2e74cf = (0, __dependency_2["inject"])('content/infoBarContent', __dependency_1["Node"]), _0x2d10e4 = (0, __dependency_2["inject"])("content/infoBarContent/playBtn", __dependency_1["Node"]), _0x154b59 = (0, __dependency_2["inject"])("content/infoBarContent/stopBtn", __dependency_1["Node"]), _0x521f1f = (0, __dependency_2["inject"])("content/infoBarContent/quickStopBtn", __dependency_1["Node"]), _0xfad0ba = (0, __dependency_2["inject"])('content/infoBarContent/exitBtn', __dependency_1["Node"]), _0x343835 = (0, __dependency_2["inject"])("content/boardContent", __dependency_1["Node"]), _0x3ad048 = (0, __dependency_2["inject"])("content/boardContent/content/boardExitBtn", __dependency_1["Node"]), _0x213cb3 = (0, __dependency_2["inject"])('content/boardContent/content/boardAgainBtn', __dependency_1["Node"]), _0x54e585 = (0, __dependency_2["inject"])("content/closeContent", __dependency_1["Node"]), _0x28703c = (0, __dependency_2["inject"])("content/closeContent/closeBtn", __dependency_1["Node"]), _0x5e4362((_0x1e9fdb = (0, __dependency_0["applyDecoratedDescriptor"])((_0x19b863 = function (_0x23505b) {
  function _0x333fca() {
    for (var _0x536902, _0xa545a6 = arguments["length"], _0x4b75a6 = new Array(_0xa545a6), _0x42eccc = 0x0; _0x42eccc < _0xa545a6; _0x42eccc++) _0x4b75a6[_0x42eccc] = arguments[_0x42eccc];
    return _0x536902 = Reflect.construct(_0x23505b, [this]["concat"](_0x4b75a6).slice(1), new.target || _0x333fca) || this, (0, __dependency_0['initializerDefineProperty'])(_0x536902, "infoBarContent", _0x1e9fdb, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, 'playBtn', _0x51d654, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, "stopBtn", _0x3eafc6, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, 'quickStopBtn', _0x3acebc, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, "exitBtn", _0x2fa0e5, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, "boardContent", _0x27f599, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, "boardExitBtn", _0x275e2a, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, "boardAgainBtn", _0x214f5a, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, "closeContent", _0x4b686b, (0, __dependency_0["assertThisInitialized"])(_0x536902)), (0, __dependency_0['initializerDefineProperty'])(_0x536902, "closeBtn", _0xad681b, (0, __dependency_0["assertThisInitialized"])(_0x536902)), _0x536902["_status"] = _0x19afa2, _0x536902;
  }
  (0, __dependency_0["inheritsLoose"])(_0x333fca, _0x23505b);
  var _0x45e26b = _0x333fca["prototype"];
  return _0x45e26b["start"] = function () {
    this['init']();
  }, _0x45e26b["onLoad"] = function () {
    _0x23505b["prototype"]["onLoad"]["call"](this);
  }, _0x45e26b['onDestroy'] = function () {
    _0x23505b["prototype"]["onDestroy"]["call"](this), this["removeEvents"]();
  }, _0x333fca["getPrefabUrl"] = function () {
    return "prefabs/ui/ReplayUIViewP";
  }, _0x45e26b["init"] = function () {
    null === this["closeContent"] && (this["closeContent"] = new __dependency_1["Node"]("closeContent"), this['closeBtn'] = new __dependency_1["Node"]('closeBtn')), this["switchShowContent"](_0x360ee3["INFO_BAR"]), this['playBtn']['active'] = !0x1, this['stopBtn']["active"] = !0x0, this['setEventTouch']();
  }, _0x45e26b["switchShowContent"] = function (_0x5c7026) {
    switch (this["boardContent"]['active'] = !0x1, this['infoBarContent']["active"] = !0x1, this["closeContent"]["active"] = !0x1, _0x5c7026) {
      case _0x360ee3["INFO_BAR"]:
        this['infoBarContent']['active'] = !0x0, App['uiManager']["close"](__dependency_6["default"]);
        break;
      case _0x360ee3["BOARD"]:
        this['boardContent']["active"] = !0x0;
        break;
      case _0x360ee3["CLOSE"]:
        App["uiManager"]["close"](__dependency_6["default"]), this["closeContent"]["active"] = !0x0;
        break;
      default:
        this["boardContent"]['active'] = !0x1, this["infoBarContent"]["active"] = !0x1, this["closeContent"]['active'] = !0x1;
    }
  }, _0x45e26b["exitHandler"] = function () {
    var _0x729f5 = __dependency_4["ExitUtils"]["getGoBackUrl"]();
    if (console['error']("goBackUrl", _0x729f5), "disable" !== _0x729f5) {
      var _0x553212 = document["referrer"],
        _0x5040fc = __dependency_3['default']['hasParam']('gn', _0x553212) && __dependency_3['default']["hasParam"]('t', _0x553212);
      if (__dependency_7["default"]["replayMode"] === __dependency_7["EReplayMode"]["RANKING_REPLAY"]) return this["node"]["destroy"](), void dispatch(__dependency_5["SlotFrameworkEvent"]["REPLAY_BACK_TO_GAME"]);
      console["error"]("document.referrer", _0x553212), console["error"]('isGameRedirect', _0x5040fc, __dependency_3['default']["hasParam"]('gn', _0x553212), __dependency_3['default']["hasParam"]('t', _0x553212)), _0x5040fc ? window["location"]["href"] = _0x553212 : __dependency_4["ExitUtils"]["replayExitWeb"]();
    }
  }, _0x45e26b["sendWindowsCloseWebView"] = function () {
    window["parent"]['postMessage']({
      'type': "closeWebUiView"
    }, '*');
  }, _0x45e26b['showPlayOrStopBtn'] = function (_0x240469) {
    this['playBtn']["active"] = _0x240469, this["stopBtn"]['active'] = !_0x240469;
  }, _0x45e26b["showReplayBoard"] = function (_0x3d021d) {
    this["switchShowContent"](_0x360ee3['BOARD']);
  }, _0x45e26b["showBoardType"] = function () {
    this['switchShowContent'](_0x360ee3['BOARD']);
  }, _0x45e26b["hideInfoBarContent"] = function () {
    this["infoBarContent"]['active'] = !0x1;
  }, _0x45e26b['setEventTouch'] = function () {
    var _0x38c276 = this;
    this["playBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      __dependency_1["game"]["resume"](), _0x38c276["status"] = _0x19afa2, _0x38c276['showPlayOrStopBtn'](!0x1), _0x38c276["scheduleOnce"](function () {
        _0x38c276["setInteractable"](!0x0);
      }), App["gameAlert"]['enableBlockInputEvents']();
    }), this["stopBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x38c276['status'] = _0x3841c7, _0x38c276["setInteractable"](!0x1), _0x38c276["scheduleOnce"](function () {
        _0x38c276['showPlayOrStopBtn'](!0x0), __dependency_1["game"]['pause']();
      });
    }), __dependency_11['CmmUtils']["addBtnClickEvent"](this["quickStopBtn"], function () {
      _0x38c276["status"] !== _0x3841c7 && _0x38c276["quickStop"]();
    }), __dependency_11['CmmUtils']['addBtnClickEvent'](this["exitBtn"], function () {
      _0x38c276["status"] !== _0x3d5811 && (_0x38c276['status'] = _0x3d5811, _0x38c276["exitHandler"](), __dependency_7["default"]["replayMode"] === __dependency_7["EReplayMode"]["RANKING_REPLAY"] && __dependency_1["game"]["resume"]());
    }), this['closeBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x38c276["status"] !== _0x3841c7 && (_0x38c276["status"] = _0x3d5811, _0x38c276["exitHandler"]());
    }), this["boardExitBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x38c276["exitHandler"]();
    }), this["boardAgainBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x38c276['status'] = _0x19afa2, _0x38c276['boardAgainBtnHandler']();
    }), this["onI"](__dependency_1["Input"]["EventType"]['KEY_UP'], function (_0x485ff4) {
      var _0x2a0efd = _0x485ff4["keyCode"];
      _0x38c276["status"] !== _0x3841c7 && _0x2a0efd === __dependency_1["KeyCode"]["SPACE"] && _0x38c276['slotData']["spinStatus"] === __dependency_10["ESpinStatus"]["SPINING"] && _0x38c276["quickStop"] && _0x38c276["quickStop"]();
    });
  }, _0x45e26b["setInteractable"] = function (_0x40e439) {
    this['quickStopBtn']["getComponent"](__dependency_1["Button"])['interactable'] = _0x40e439;
  }, _0x45e26b['addEvents'] = function () {
    var _0x30d5da = this;
    _0x23505b["prototype"]["addEvents"]["call"](this), this['on'](__dependency_5["SlotFrameworkEvent"]['SHOW_REPLAY_BOARD_ALERT'], function (_0x4fbc7e) {
      App["uiManager"]["close"](__dependency_6["default"]), _0x30d5da["switchShowContent"](_0x360ee3["BOARD"]);
    }), this['on'](__dependency_5["SlotFrameworkEvent"]["HIDE_REPLAY_INFO_BAR"], function (_0x41b11c) {
      _0x30d5da["hideInfoBarContent"]();
    });
  }, _0x45e26b["removeEvents"] = function () {
    this["off"](__dependency_5["SlotFrameworkEvent"]["SHOW_REPLAY_BOARD_ALERT"]), this["off"](__dependency_5["SlotFrameworkEvent"]["HIDE_REPLAY_INFO_BAR"]);
  }, (0, __dependency_0['createClass'])(_0x333fca, [{
    'key': 'slotData',
    'get': function () {
      return App["dataCenter"]['get'](__dependency_9['default']);
    }
  }, {
    'key': "status",
    'get': function () {
      return this["_status"];
    },
    'set': function (_0x2421d8) {
      this["_status"] = _0x2421d8;
    }
  }]), _0x333fca;
}(__dependency_8['default']))["prototype"], "infoBarContent", [_0x2e74cf], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x51d654 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863['prototype'], 'playBtn', [_0x2d10e4], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3eafc6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863["prototype"], "stopBtn", [_0x154b59], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3acebc = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863['prototype'], "quickStopBtn", [_0x521f1f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2fa0e5 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863['prototype'], "exitBtn", [_0xfad0ba], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x27f599 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863["prototype"], "boardContent", [_0x343835], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x275e2a = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863["prototype"], "boardExitBtn", [_0x3ad048], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x214f5a = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863["prototype"], 'boardAgainBtn', [_0x213cb3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4b686b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863["prototype"], "closeContent", [_0x54e585], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xad681b = (0, __dependency_0["applyDecoratedDescriptor"])(_0x19b863["prototype"], 'closeBtn', [_0x28703c], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x56ba73 = _0x19b863)) || _0x56ba73));
__dependency_1['cclegacy']["_RF"]["pop"]();
