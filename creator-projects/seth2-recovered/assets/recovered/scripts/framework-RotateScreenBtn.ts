// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RotateScreenBtn.ts.js
// SHA256: 59a8ebd48a765cf4ab2630be6992d1d279775bafc435a6bbc220d81740495668
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./framework-SlotFrameworkData";
import * as __dependency_4 from "./main-UrlUtils";
import * as __dependency_5 from "./main-CmmUtils";
import * as __dependency_6 from "./main-Bundles";
import * as __dependency_7 from "./main-Config";
import * as __dependency_8 from "./framework-SlotFrameworkEvent";
import * as __dependency_9 from "./framework-type2";
var __export_0;
export { __export_0 as RotateScreenBtn };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "RotateScreenBtn":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x43a80a) {
  void 0, void 0;
})(__dependency_0);
(function (_0x4047cb) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0x366c81) {
  void 0;
})(__dependency_2);
(function (_0x51a21d) {
  void 0;
})(__dependency_3);
(function (_0x474d70) {
  void 0;
})(__dependency_4);
(function (_0x1cfa3d) {
  void 0;
})(__dependency_5);
(function (_0x228a99) {
  void 0;
})(__dependency_6);
(function (_0x23d708) {
  void 0;
})(__dependency_7);
(function (_0x1a8a46) {
  void 0;
})(__dependency_8);
(function (_0x28866f) {
  void 0;
})(__dependency_9);
var _0x27d151;
__dependency_1['cclegacy']['_RF']['push']({}, '4d00f2b5H9GZ5Umsjg1lfF7', "RotateScreenBtn", void 0x0);
var _0x57270d = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']["property"], __publish("RotateScreenBtn", _0x57270d("RotateScreenBtn")(_0x27d151 = function (_0x2c5f60) {
  function _0x38b9be() {
    return Reflect.construct(_0x2c5f60, arguments, new.target || _0x38b9be) || this;
  }
  (0, __dependency_0["inheritsLoose"])(_0x38b9be, _0x2c5f60);
  var _0x3caf73 = _0x38b9be["prototype"];
  return _0x3caf73["onLoad"] = function () {
    _0x2c5f60["prototype"]["onLoad"]["call"](this);
  }, _0x3caf73['start'] = function () {
    this["init"]();
  }, _0x3caf73['onDestroy'] = function () {
    _0x2c5f60['prototype']['onDestroy']["call"](this);
  }, _0x3caf73["init"] = function () {
    this["setTouchEvent"]();
  }, _0x3caf73["setPostion"] = function () {}, _0x3caf73["setWidget"] = function () {}, _0x3caf73['rotateScreenHandler'] = function () {
    var _0x1fb91b = __dependency_4["default"]["getViewModeParam"](),
      _0x5bdefa = new URLSearchParams(window["location"]["search"]);
    'portrait' == _0x1fb91b ? _0x5bdefa["set"]("view_mode", 'landscape') : _0x5bdefa["set"]('view_mode', "portrait");
    var _0x412ade = __dependency_4["default"]['getParam']('gn') + '_view_mode';
    localStorage["setItem"](_0x412ade, _0x5bdefa["get"]("view_mode"));
    var _0x53c300 = window['location']["pathname"] + '?' + _0x5bdefa["toString"]();
    window['location']["href"] = _0x53c300;
  }, _0x3caf73["setTouchEvent"] = function () {
    var _0x1b4834 = this;
    __dependency_5["CmmUtils"]['addBtnClickEvent'](this["node"], function () {
      _0x1b4834["showConfirmAlert"]();
    });
  }, _0x3caf73["showConfirmAlert"] = function () {
    var _0x24d6b1 = this,
      _0xa2ba59 = {
        'text': App["getLanguage"]("rotateSceneMsg", [], __dependency_6["EBundles"][__dependency_6["EBundles"]['slotFramework']]),
        'confirmCb': function (_0x4fccfa) {
          _0x24d6b1["rotateScreenHandler"]();
        },
        'cancelCb': function (_0x2c2959) {},
        'bbrCb': function (_0x3914be) {},
        'tag': __dependency_7["ViewZOrder"]["Alert"]
      };
    App["gameAlert"]['show'](_0xa2ba59, __dependency_7["ViewZOrder"]["TopErrorAlert"]);
  }, _0x3caf73["updateSpinStatus"] = function (_0x597557) {
    this["node"]["getComponent"](__dependency_1["Button"])["interactable"] = _0x597557 === __dependency_9["ESpinStatus"]["IDLE"];
  }, _0x3caf73["reset"] = function () {}, _0x3caf73["setData"] = function (_0x4e8c56) {}, _0x3caf73['show'] = function () {
    this['node']["active"] = !0x0;
  }, _0x3caf73["hide"] = function () {
    this['node']["active"] = !0x1;
  }, _0x3caf73["addEvents"] = function () {
    var _0x25d7cb = this;
    _0x2c5f60["prototype"]["addEvents"]["call"](this), this['on'](__dependency_8["SlotFrameworkEvent"]["UPDATE_SPIN_STATUS"], function (_0x417b0e) {
      _0x25d7cb["updateSpinStatus"](_0x417b0e["data"]);
    });
  }, (0, __dependency_0["createClass"])(_0x38b9be, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]['get'](__dependency_3["default"]);
    }
  }]), _0x38b9be;
}(__dependency_2['default'])) || _0x27d151);
__dependency_1['cclegacy']["_RF"]['pop']();
