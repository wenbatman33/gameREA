// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RunScoreComponent.ts.js
// SHA256: 4dfda9936497185facea34a8dda1c97c0341f0347e17ca26fb111040c51ce721
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./framework-CmmSlotUtils";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
var __export_0;
export { __export_0 as ERunScoreStatus };
var __export_1;
export { __export_1 as RunScoreComponent };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ERunScoreStatus":
      __export_0 = value;
      break;
    case "RunScoreComponent":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x459768) {
  void 0, void 0;
})(__dependency_0);
(function (_0x216d5c) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0xb8e7bc) {
  void 0;
})(__dependency_2);
(function (_0x29d95a) {
  void 0;
})(__dependency_3);
(function (_0x4f9ea8) {
  void 0;
})(__dependency_4);
(function (_0x47cdff) {
  void 0;
})(__dependency_5);
var _0x4c7210;
__publish("ERunScoreStatus", void 0x0), __dependency_1["cclegacy"]["_RF"]['push']({}, "2e10f/+JsNOcYn/Hx6g5/8F", "RunScoreComponent", void 0x0);
var _0x5ad584,
  _0x247cf0 = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"];
!function (_0x42b489) {
  _0x42b489["NONE"] = "NONE", _0x42b489["RUN_SCORE"] = "RUN_SCORE", _0x42b489["RUN_SCORE_END"] = "RUN_SCORE_END", _0x42b489["WAIT_CLOSE"] = "WAIT_CLOSE";
}(_0x5ad584 || (_0x5ad584 = __publish('ERunScoreStatus', {})));
__publish("RunScoreComponent", _0x247cf0('RunScoreComponent')(_0x4c7210 = function (_0x20481f) {
  function _0x1eb26b() {
    for (var _0xfe8a91, _0x1ae469 = arguments["length"], _0x423138 = new Array(_0x1ae469), _0x42e58b = 0x0; _0x42e58b < _0x1ae469; _0x42e58b++) _0x423138[_0x42e58b] = arguments[_0x42e58b];
    return (_0xfe8a91 = Reflect.construct(_0x20481f, [this]["concat"](_0x423138).slice(1), new.target || _0x1eb26b) || this)["_status"] = _0x5ad584["NONE"], _0xfe8a91["tweenNumTween"] = null, _0xfe8a91['currentLabel'] = null, _0xfe8a91['totalScore'] = 0x0, _0xfe8a91["digital"] = 0x0, _0xfe8a91['closeTime'] = 0x0, _0xfe8a91;
  }
  (0, __dependency_0["inheritsLoose"])(_0x1eb26b, _0x20481f);
  var _0x395626 = _0x1eb26b["prototype"];
  return _0x395626["start"] = function () {
    this['node']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], this["handleTouchEnd"], this), this["onI"](__dependency_1['Input']["EventType"]["KEY_UP"], __dependency_2["CmmUtils"]["debounce"](this["handleKeyDown"]["bind"](this)));
  }, _0x395626["runScore"] = function (_0x1a63e1, _0x13a379, _0xf39cda, _0x3ebaf1, _0x310fa2, _0x144ee3) {
    var _0x4904c3 = this;
    this["status"] = _0x5ad584["RUN_SCORE"], this["currentLabel"] = _0x1a63e1, this["currentLabel"]['node']["active"] = !0x0, this["totalScore"] = _0x13a379, this["digital"] = _0x3ebaf1, this['closeTime'] = _0x310fa2;
    var _0x508e2b = {
      'label': this['currentLabel'],
      'start': 0x0,
      'end': this["totalScore"],
      'tweenTime': _0xf39cda,
      'digital': this["digital"],
      'useThousandsSeparator': !0x0,
      'callback': function () {
        _0x4904c3["updateStatus"](_0x5ad584["RUN_SCORE_END"]);
      }
    };
    this['tweenNumTween'] = __dependency_4["CmmSlotUtils"]["tweenNum"](_0x508e2b), _0x144ee3 && dispatch(__dependency_5["SlotFrameworkEvent"]["UPDATE_TOTAL_WINNINGS"], {
      'data': {
        'value': Number(__dependency_4["CmmSlotUtils"]['formatNumber'](this["totalScore"], !0x1, !0x1, this["digital"])),
        'tweenTime': _0xf39cda
      }
    });
  }, _0x395626["handleTouchEnd"] = function () {
    this["updateStatusBasedOnCurrent"]();
  }, _0x395626["handleKeyDown"] = function (_0x298e6d) {
    _0x298e6d["keyCode"] === __dependency_1["KeyCode"]["SPACE"] && this["updateStatusBasedOnCurrent"]();
  }, _0x395626["updateStatusBasedOnCurrent"] = function () {
    switch (this["status"]) {
      case _0x5ad584["RUN_SCORE"]:
        this['updateStatus'](_0x5ad584["RUN_SCORE_END"]);
        break;
      case _0x5ad584['RUN_SCORE_END']:
        this["updateStatus"](_0x5ad584["WAIT_CLOSE"]);
    }
  }, _0x395626["updateStatus"] = function (_0x4301e2) {
    var _0x66f30f = this;
    this['status'] !== _0x4301e2 && (this["status"] = _0x4301e2, this["tweenNumTween"] && this['tweenNumTween']["stop"](), _0x4301e2 === _0x5ad584["RUN_SCORE_END"] && (this['currentLabel']["string"] = __dependency_4["CmmSlotUtils"]['formatNumber'](this["totalScore"], !0x1, !0x0, this["digital"]), (0, __dependency_1["tween"])(this["node"])["delay"](this["closeTime"])['call'](function () {
      _0x66f30f["updateStatus"](_0x5ad584["WAIT_CLOSE"]);
    })["start"]()), dispatch(_0x4301e2));
  }, (0, __dependency_0['createClass'])(_0x1eb26b, [{
    'key': "status",
    'get': function () {
      return this["_status"];
    },
    'set': function (_0x9a616) {
      this["_status"] = _0x9a616;
    }
  }]), _0x1eb26b;
}(__dependency_3["default"])) || _0x4c7210);
__dependency_1["cclegacy"]["_RF"]["pop"]();
