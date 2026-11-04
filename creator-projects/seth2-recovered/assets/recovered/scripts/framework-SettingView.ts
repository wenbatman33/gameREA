// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SettingView.ts.js
// SHA256: 02d0511e95ee13ef9283e356d57e59880370fddc168699520138ff43894f7968
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-AdapterEvent";
import * as __dependency_3 from "./main-UrlUtils";
import * as __dependency_4 from "./main-WrapperData";
import * as __dependency_5 from "./main-UIView";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-SlotFrameworkEvent";
import * as __dependency_9 from "./framework-ColorModel";
import * as __dependency_10 from "./framework-PlatformModel";
import * as __dependency_11 from "./framework-SettingsModel";
import * as __dependency_12 from "./framework-UrlModel";
import * as __dependency_13 from "./framework-ObjectUtils";
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
(function (_0x4a1b18) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x24506b) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x328c20) {
  void 0;
})(__dependency_2);
(function (_0x4d11cd) {
  void 0;
})(__dependency_3);
(function (_0x30980a) {
  void 0;
})(__dependency_4);
(function (_0x114219) {
  void 0;
})(__dependency_5);
(function (_0x171f84) {
  void 0;
})(__dependency_6);
(function (_0xea3736) {
  void 0;
})(__dependency_7);
(function (_0x34387a) {
  void 0;
})(__dependency_8);
(function (_0x54207e) {
  void 0;
})(__dependency_9);
(function (_0x52ed32) {
  void 0;
})(__dependency_10);
(function (_0x204edd) {
  void 0;
})(__dependency_11);
(function (_0x4840d5) {
  void 0;
})(__dependency_12);
(function (_0x3e29e5) {
  void 0;
})(__dependency_13);
var _0x2c2b87, _0x3d3113, _0x5e2ea0, _0x3aaa10, _0x565a7d, _0x8e46ac, _0x4b32cf, _0x1b3313, _0x2d7331, _0x53b375, _0x3f5891, _0x24f906, _0x474766, _0xd19d48, _0x27858b, _0x450939, _0x194315, _0x1ccac1, _0x488a53, _0x2a2871, _0x4f3417, _0x448e7c, _0x38f22c, _0x51f1ac, _0x587669, _0x15162d, _0xa2d97d, _0x7248da, _0x9d88d9, _0x431557, _0x5ba287, _0x113aea, _0x231278, _0x2ac7ff, _0xaa6f5e, _0x307368, _0x1d4a4f, _0x2efdf7, _0x59b4a4, _0x473c30, _0x38d269, _0x53d021, _0x1324ae;
__dependency_1['cclegacy']['_RF']["push"]({}, "cf88cj0OvNAjYG3rmXimZNf", 'SettingView', void 0x0);
var _0x30ae27 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("default", (_0x2c2b87 = _0x30ae27("SettingView"), _0x3d3113 = (0, __dependency_6["inject"])("content/topBar/closeBtn", __dependency_1["Node"]), _0x5e2ea0 = (0, __dependency_6["inject"])("bbr", __dependency_1["Node"]), _0x3aaa10 = (0, __dependency_6["inject"])("content/notifyContent/switchHitArea", __dependency_1["Node"]), _0x565a7d = (0, __dependency_6["inject"])("content/jpStop/switch", __dependency_1["Node"]), _0x8e46ac = (0, __dependency_6["inject"])('content/music/addBtn', __dependency_1["Node"]), _0x4b32cf = (0, __dependency_6["inject"])("content/music/cutBtn", __dependency_1["Node"]), _0x1b3313 = (0, __dependency_6["inject"])('content/music/volume', __dependency_1["Node"]), _0x2d7331 = (0, __dependency_6["inject"])("content/music/volume/handle", __dependency_1["Node"]), _0x53b375 = (0, __dependency_6["inject"])("content/music/volume/num", __dependency_1["Node"]), _0x3f5891 = (0, __dependency_6["inject"])("content/music/volume/num/label", __dependency_1["Label"]), _0x24f906 = (0, __dependency_6["inject"])("content/effect/addBtn", __dependency_1["Node"]), _0x474766 = (0, __dependency_6["inject"])("content/effect/cutBtn", __dependency_1["Node"]), _0xd19d48 = (0, __dependency_6["inject"])("content/effect/volume", __dependency_1["Node"]), _0x27858b = (0, __dependency_6["inject"])('content/effect/volume/handle', __dependency_1["Node"]), _0x450939 = (0, __dependency_6["inject"])("content/effect/volume/num", __dependency_1["Node"]), _0x194315 = (0, __dependency_6["inject"])("content/effect/volume/num/label", __dependency_1["Label"]), _0x1ccac1 = (0, __dependency_6["inject"])("content/viewMode", __dependency_1["Node"]), _0x488a53 = (0, __dependency_6["inject"])('content/viewMode/btnViewModeL', __dependency_1["Node"]), _0x2a2871 = (0, __dependency_6["inject"])("content/viewMode/btnViewModeP", __dependency_1["Node"]), _0x4f3417 = (0, __dependency_6["inject"])("content/version", __dependency_1["Label"]), _0x2c2b87((_0x51f1ac = (0, __dependency_0["applyDecoratedDescriptor"])((_0x38f22c = function (_0x252afe) {
  function _0x48c5bd() {
    for (var _0x45707b, _0x389a4f = arguments["length"], _0x242a85 = new Array(_0x389a4f), _0x4c67c1 = 0x0; _0x4c67c1 < _0x389a4f; _0x4c67c1++) _0x242a85[_0x4c67c1] = arguments[_0x4c67c1];
    return _0x45707b = Reflect.construct(_0x252afe, [this]["concat"](_0x242a85).slice(1), new.target || _0x48c5bd) || this, (0, __dependency_0['initializerDefineProperty'])(_0x45707b, 'closeBtn', _0x51f1ac, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "bbr", _0x587669, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "notifySwitchHitArea", _0x15162d, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "jpStopSwitch", _0xa2d97d, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "musicAddBtn", _0x7248da, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "musicCutBtn", _0x9d88d9, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "musicVol", _0x431557, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, 'musicVolHandleNode', _0x5ba287, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "musicVolNum", _0x113aea, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "musicVolNumLabel", _0x231278, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "effectAddBtn", _0x2ac7ff, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "effectCutBtn", _0xaa6f5e, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "effectVol", _0x307368, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "effectVolHandleNode", _0x1d4a4f, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "effectVolNum", _0x2efdf7, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "effectVolNumLabel", _0x59b4a4, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, 'ndViewMode', _0x473c30, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "btnViewModeL", _0x38d269, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, "btnViewModeP", _0x53d021, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), (0, __dependency_0['initializerDefineProperty'])(_0x45707b, 'versionLabel', _0x1324ae, (0, __dependency_0['assertThisInitialized'])(_0x45707b)), _0x45707b["effectVolBar"] = null, _0x45707b['effectVolHandle'] = null, _0x45707b["musicVolBar"] = null, _0x45707b["musicVolHandle"] = null, _0x45707b["preData"] = null, _0x45707b["allowSwitchGameList"] = [], _0x45707b;
  }
  (0, __dependency_0['inheritsLoose'])(_0x48c5bd, _0x252afe);
  var _0x91a62e = _0x48c5bd["prototype"];
  return _0x91a62e["onLoad"] = function () {
    _0x252afe['prototype']["onLoad"]['call'](this);
  }, _0x91a62e["start"] = function () {
    this["init"]();
  }, _0x91a62e['onDestroy'] = function () {}, _0x48c5bd["getPrefabUrl"] = function () {
    return "prefabs/view/SettingView";
  }, _0x91a62e["init"] = function () {
    var _0x25f79a = __dependency_12["default"]["searchParams"]['gn'];
    this['isEnableViewMode'](this["allowSwitchGameList"]["indexOf"](_0x25f79a) > -0x1);
  }, _0x91a62e["show"] = function (_0x3a83a7) {
    _0x252afe['prototype']["show"]['call'](this, _0x3a83a7), this["musicVolBar"] = this["musicVol"]['getComponent'](__dependency_1["ProgressBar"]), this["musicVolHandle"] = this["musicVol"]['getComponent'](__dependency_1["Slider"]), this["effectVolBar"] = this['effectVol']["getComponent"](__dependency_1["ProgressBar"]), this["effectVolHandle"] = this["effectVol"]['getComponent'](__dependency_1["Slider"]), this["setData"](), this['setEventTouch']();
  }, _0x91a62e['setData'] = function () {
    var _0x135945 = this["data"],
      _0x227d3a = _0x135945['notify'],
      _0x210628 = _0x135945["stopOnJackpot"],
      _0xd732e5 = _0x135945["backgroundVolume"],
      _0x50f6b6 = _0x135945["effectVolume"];
    this["preData"] = __dependency_13['ObjectUtils']["clone"](this["data"]["getData"]()), this["setNotify"](_0x227d3a, !0x0), this['setJpStop'](_0x210628), this["musicVolHandle"]["progress"] = _0xd732e5, this["setMusicVolume"](this["musicVolHandle"]), this['effectVolHandle']["progress"] = _0x50f6b6, this["setEffectVolume"](this['effectVolHandle']), this["versionLabel"] && (this["versionLabel"]['string'] = "ver:" + this['slotData']['SLOT_VERSION']);
  }, _0x91a62e["onClose"] = function () {
    this["sendSetting"](), dispatch(__dependency_8['SlotFrameworkEvent']["PLAY_UI_CLOSE_CLICK_BTM"]), this["close"]();
  }, _0x91a62e["isEnableViewMode"] = function (_0x2dd8cb) {
    var _0x256eb1 = App['dataCenter']['get'](__dependency_4['default'])["orientation"],
      _0x32f8bc = new URLSearchParams(window["location"]["search"]),
      _0x2d57da = null;
    switch (this["ndViewMode"]["active"] = _0x2dd8cb, _0x256eb1) {
      case __dependency_2["EOrientationType"]["LANDSCAPE"]:
        this['btnViewModeL']["getComponent"](__dependency_1["Sprite"])["color"] = __dependency_9["default"]["getData"]()['background'][0x50], this["changeViewModeColor"](this["btnViewModeL"], __dependency_9["default"]["getData"]()["background"][0x0]), _0x32f8bc["set"]("view_mode", "portrait"), _0x2d57da = this["btnViewModeP"];
        break;
      case __dependency_2["EOrientationType"]["PORTRAIT"]:
        this["btnViewModeP"]["getComponent"](__dependency_1["Sprite"])['color'] = __dependency_9["default"]["getData"]()["background"][0x50], this['changeViewModeColor'](this["btnViewModeP"], __dependency_9["default"]["getData"]()['background'][0x0]), _0x32f8bc['set']("view_mode", "landscape"), _0x2d57da = this["btnViewModeL"];
    }
    _0x2d57da["getComponent"](__dependency_1["Sprite"])['color'] = __dependency_9["default"]["getData"]()['mainGame']["main"], this["changeViewModeColor"](_0x2d57da, __dependency_9["default"]["getData"]()["background"][0x64]);
    _0x2d57da['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x2d57da["getComponent"](__dependency_1["Sprite"])["color"] = __dependency_9["default"]["getData"]()['mainGame']['main'], function () {
        var _0x443ee0 = __dependency_3["default"]["getParam"]('gn') + '_view_mode';
        localStorage['setItem'](_0x443ee0, _0x32f8bc['get']("view_mode"));
        var _0x4f1ffc = window["location"]["pathname"] + '?' + _0x32f8bc["toString"]();
        window["location"]["href"] = _0x4f1ffc;
      }();
    }), _0x2d57da['on'](__dependency_1["NodeEventType"]["MOUSE_ENTER"], function () {
      _0x2d57da["getComponent"](__dependency_1["Sprite"])["color"] = __dependency_9["default"]["getData"]()["mainGame"]["mainHover"];
    }), _0x2d57da['on'](__dependency_1["NodeEventType"]["MOUSE_LEAVE"], function () {
      _0x2d57da['getComponent'](__dependency_1["Sprite"])["color"] = __dependency_9["default"]["getData"]()["mainGame"]['main'];
    }), _0x2d57da['on'](__dependency_1["NodeEventType"]["TOUCH_CANCEL"], function () {
      _0x2d57da["getComponent"](__dependency_1["Sprite"])["color"] = __dependency_9["default"]["getData"]()['mainGame']["main"];
    });
  }, _0x91a62e["changeViewModeColor"] = function (_0x40c766, _0xc7f148) {
    var _0x54ffb5 = _0x40c766["getChildByName"]("status")["getChildByName"]("Label"),
      _0x31d3c4 = _0x40c766["getChildByName"]('status')["getChildByName"]('screen_icon');
    _0x54ffb5['getComponent'](__dependency_1["Label"])["color"] = _0xc7f148, _0x31d3c4['getComponent'](__dependency_1["Sprite"])["color"] = _0xc7f148;
  }, _0x91a62e["sendSetting"] = function () {
    var _0xcdb880 = __dependency_13['ObjectUtils']["diffObjects"](this["preData"], this['data']["getData"]());
    if (Object["keys"](_0xcdb880)['length'] > 0x0) {
      var _0x56f04b = {
        'type': "game",
        'data': _0xcdb880
      };
      dispatch(__dependency_8['SlotFrameworkEvent']['SEND_SETTING_REQUEST'], _0x56f04b);
    }
  }, _0x91a62e["setEventTouch"] = function () {
    var _0x50d559 = this;
    this["closeBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x50d559["onClose"]();
    }), this['bbr']['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x50d559['onClose']();
    }), this["notifySwitchHitArea"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      var _0x4febea = !_0x50d559["data"]["notify"];
      _0x50d559["setNotify"](_0x4febea, !0x1), dispatch(__dependency_8['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    }), this["jpStopSwitch"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      var _0x25a9f7 = !_0x50d559["data"]["stopOnJackpot"];
      _0x50d559['setJpStop'](_0x25a9f7);
    }), this["musicAddBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x50d559['musicVolHandle']["progress"] += 0.1, _0x50d559["setMusicVolume"](_0x50d559["musicVolHandle"]);
    }), this['musicCutBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x50d559["musicVolHandle"]["progress"] -= 0.1, _0x50d559['setMusicVolume'](_0x50d559["musicVolHandle"]);
    }), this["onN"](this["musicVol"], "slide", this["setMusicVolume"]), this['musicVolBar']["progress"] = this["musicVolHandle"]["progress"], this["setMusicVolume"](this["musicVolHandle"]), this['effectAddBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      _0x50d559["effectVolHandle"]["progress"] += 0.1, _0x50d559["setEffectVolume"](_0x50d559['effectVolHandle']);
    }), this['effectCutBtn']['on'](__dependency_1["NodeEventType"]['TOUCH_START'], function () {
      _0x50d559["effectVolHandle"]['progress'] -= 0.1, _0x50d559['setEffectVolume'](_0x50d559["effectVolHandle"]);
    }), this["onN"](this["effectVol"], "slide", this["setEffectVolume"]), this["effectVolBar"]["progress"] = this["effectVolHandle"]['progress'], this['setEffectVolume'](this["effectVolHandle"]), this['effectVol']['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      dispatch(__dependency_8['SlotFrameworkEvent']['PLAY_CLICK_BTM']);
    }), this["effectVolHandleNode"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      dispatch(__dependency_8['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
    });
  }, _0x91a62e["setJpStop"] = function (_0x2f2b4f) {
    var _0x241dc0 = this['jpStopSwitch']["getComponent"](__dependency_1["Animation"]);
    _0x2f2b4f ? _0x241dc0['play'](_0x241dc0["clips"][0x0]['name']) : _0x241dc0['play'](_0x241dc0["clips"][0x1]["name"]), __dependency_11["default"]["stopOnJackpot"] = _0x2f2b4f;
  }, _0x91a62e['setNotify'] = function (_0x5c6dd3, _0x20ea30) {
    this["switchTween"](this["notifySwitchHitArea"], _0x5c6dd3, _0x20ea30), __dependency_11["default"]["notify"] = _0x5c6dd3;
  }, _0x91a62e["switchTween"] = function (_0x1e2c37, _0xaa960d, _0x34233f) {
    void 0x0 === _0x34233f && (_0x34233f = !0x1);
    var _0x355314 = _0x1e2c37["getChildByPath"]("switch/label"),
      _0x3d371d = _0x1e2c37["getChildByPath"]('switch/bar'),
      _0x33a7bd = _0x1e2c37["getChildByPath"]('switch/handle'),
      _0x3b59f2 = (0, __dependency_1['v3'])(_0xaa960d ? 0xd : -0xd, -0x2, 0x0),
      _0x298523 = _0xaa960d ? __dependency_9["default"]['getData']()["mainGame"]['main'] : __dependency_9["default"]["getData"]()["background"][0x50],
      _0x341745 = _0xaa960d ? __dependency_9["default"]["getData"]()["mainGame"]["main"] : __dependency_9["default"]["getData"]()["background"][0x3c],
      _0x3f4d6b = function () {
        _0x3d371d["getComponent"](__dependency_1["Sprite"])["color"] = _0x298523, _0x355314['getComponent'](__dependency_1["Label"])["color"] = _0x341745, _0x355314["getComponent"](__dependency_1["Label"])["string"] = _0xaa960d ? 'ON' : 'OFF';
      };
    if (_0x34233f) return _0x3f4d6b(), void _0x33a7bd['setPosition'](_0x3b59f2);
    __dependency_1["Tween"]['stopAllByTarget'](_0x33a7bd), (0, __dependency_1["tween"])(_0x33a7bd)["call"](function () {
      _0x3f4d6b();
    })['to'](0.2, {
      'position': _0x3b59f2
    })["start"]();
  }, _0x91a62e["setMusicVolume"] = function (_0x23f4bc) {
    _0x23f4bc['progress'] < 0x0 && (_0x23f4bc["progress"] = 0x0), _0x23f4bc["progress"] > 0x1 && (_0x23f4bc["progress"] = 0x1), App["globalAudio"]["musicVolume"] = _0x23f4bc["progress"], this['musicVolBar']["progress"] = _0x23f4bc["progress"], this["musicVolNumLabel"]['string'] = String(Math["round"](0x64 * _0x23f4bc["progress"]));
    var _0x460663 = this["musicVolHandleNode"]['position'];
    this["musicVolNum"]['setPosition'](_0x460663['x'], _0x460663['y'] + 0x22), this["data"]["backgroundVolume"] = Math["round"](0x64 * _0x23f4bc["progress"]) / 0x64, __dependency_10["default"]['getData']()['player']["settings"]["advancedSettings"]["sounds"]['backgroundVolume'] = this["data"]['backgroundVolume'];
  }, _0x91a62e['setEffectVolume'] = function (_0x45f93f) {
    _0x45f93f["progress"] < 0x0 && (_0x45f93f["progress"] = 0x0), _0x45f93f["progress"] > 0x1 && (_0x45f93f["progress"] = 0x1), App['globalAudio']["effectVolume"] = _0x45f93f["progress"], this["effectVolBar"]["progress"] = _0x45f93f["progress"], this['effectVolNumLabel']['string'] = String(Math["round"](0x64 * _0x45f93f["progress"]));
    var _0x28e475 = this['effectVolHandleNode']['position'];
    this["effectVolNum"]["setPosition"](_0x28e475['x'], _0x28e475['y'] + 0x22), this["data"]["effectVolume"] = Math["round"](0x64 * _0x45f93f["progress"]) / 0x64, __dependency_10["default"]["getData"]()["player"]["settings"]["advancedSettings"]["sounds"]['effectVolume'] = this["data"]['effectVolume'];
  }, (0, __dependency_0["createClass"])(_0x48c5bd, [{
    'key': "data",
    'get': function () {
      return __dependency_11["default"];
    }
  }, {
    'key': "slotData",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_7["default"]);
    }
  }]), _0x48c5bd;
}(__dependency_5["default"]))['prototype'], "closeBtn", [_0x3d3113], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x587669 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "bbr", [_0x5e2ea0], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x15162d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], 'notifySwitchHitArea', [_0x3aaa10], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xa2d97d = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "jpStopSwitch", [_0x565a7d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x7248da = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c['prototype'], "musicAddBtn", [_0x8e46ac], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x9d88d9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "musicCutBtn", [_0x4b32cf], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x431557 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c['prototype'], "musicVol", [_0x1b3313], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5ba287 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c['prototype'], 'musicVolHandleNode', [_0x2d7331], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x113aea = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "musicVolNum", [_0x53b375], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x231278 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "musicVolNumLabel", [_0x3f5891], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2ac7ff = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "effectAddBtn", [_0x24f906], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xaa6f5e = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "effectCutBtn", [_0x474766], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x307368 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "effectVol", [_0xd19d48], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1d4a4f = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "effectVolHandleNode", [_0x27858b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2efdf7 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "effectVolNum", [_0x450939], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x59b4a4 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "effectVolNumLabel", [_0x194315], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x473c30 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c['prototype'], "ndViewMode", [_0x1ccac1], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x38d269 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "btnViewModeL", [_0x488a53], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x53d021 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c["prototype"], "btnViewModeP", [_0x2a2871], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1324ae = (0, __dependency_0["applyDecoratedDescriptor"])(_0x38f22c['prototype'], "versionLabel", [_0x4f3417], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x448e7c = _0x38f22c)) || _0x448e7c));
__dependency_1['cclegacy']["_RF"]["pop"]();
