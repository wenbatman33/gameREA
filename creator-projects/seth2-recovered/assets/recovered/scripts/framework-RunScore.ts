// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-RunScore.ts.js
// SHA256: eba010c22ecb28ddadab50876618f2e74ec4c5d05d073e10ce77f58057325b3f
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-CmmSlotUtils";
var __export_0;
export { __export_0 as RunScore };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "RunScore":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x1fd81e) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x47eba6) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x157f99) {
  void 0;
})(__dependency_2);
var _0x420a9d, _0x4af838;
__dependency_1["cclegacy"]['_RF']["push"]({}, "3bdd2ee2RtBy749awYKnz6K", "RunScore", void 0x0);
__dependency_1["_decorator"]["ccclass"];
var _0x4d0f54 = __dependency_1["_decorator"]["property"];
__publish("RunScore", (_0x4af838 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x420a9d = function (_0x6f872c) {
  function _0xca01fd() {
    for (var _0x353d6f, _0x2ebac7 = arguments['length'], _0x1b42ec = new Array(_0x2ebac7), _0x1e8aec = 0x0; _0x1e8aec < _0x2ebac7; _0x1e8aec++) _0x1b42ec[_0x1e8aec] = arguments[_0x1e8aec];
    return _0x353d6f = Reflect.construct(_0x6f872c, [this]['concat'](_0x1b42ec).slice(1), new.target || _0xca01fd) || this, (0, __dependency_0["initializerDefineProperty"])(_0x353d6f, "_score", _0x4af838, (0, __dependency_0["assertThisInitialized"])(_0x353d6f)), _0x353d6f["label"] = null, _0x353d6f;
  }
  (0, __dependency_0["inheritsLoose"])(_0xca01fd, _0x6f872c);
  var _0x48708f = _0xca01fd["prototype"];
  return _0x48708f["start"] = function () {
    this['label'] = this['node']["getComponent"](__dependency_1["Label"]);
  }, _0x48708f["runScore"] = function (_0x1382e0, _0x499053, _0x1ae910) {
    void 0x0 === _0x499053 && (_0x499053 = 0x2), void 0x0 === _0x1ae910 && (_0x1ae910 = !0x1), _0x1ae910 ? (this["label"]['string'] = __dependency_2["CmmSlotUtils"]['formatNumber'](_0x1382e0, !0x0), this["_score"] = _0x1382e0) : (0, __dependency_1['tween'])(this)['to'](_0x499053, {
      'score': _0x1382e0
    }, {
      'easing': "quintOut"
    })['start']();
  }, _0x48708f["runZeroScore"] = function (_0x1f1658, _0x3a3775, _0x2dfba) {
    void 0x0 === _0x3a3775 && (_0x3a3775 = 0x2), void 0x0 === _0x2dfba && (_0x2dfba = !0x1), this["score"] = 0x0, this["runScore"](_0x1f1658, _0x3a3775, _0x2dfba);
  }, (0, __dependency_0["createClass"])(_0xca01fd, [{
    'key': "score",
    'get': function () {
      return this["_score"];
    },
    'set': function (_0x4ee5a4) {
      this["_score"] = _0x4ee5a4, this["label"] && (this['label']["string"] = __dependency_2["CmmSlotUtils"]["formatNumber"](this['_score'], !0x0));
    }
  }]), _0xca01fd;
}(__dependency_1["Component"]))["prototype"], "_score", [_0x4d0f54], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return 0x0;
  }
}), (0, __dependency_0["applyDecoratedDescriptor"])(_0x420a9d["prototype"], "score", [_0x4d0f54], Object["getOwnPropertyDescriptor"](_0x420a9d['prototype'], "score"), _0x420a9d["prototype"]), _0x420a9d));
__dependency_1["cclegacy"]['_RF']['pop']();
