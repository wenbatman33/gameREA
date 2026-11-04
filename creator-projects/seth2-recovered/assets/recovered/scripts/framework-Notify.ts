// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-Notify.ts.js
// SHA256: 506f8337f79e7fb84673e8070e3885fa25a056f588feaacc0b9856e3a5edf529
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Decorators";
import * as __dependency_4 from "./main-UrlUtils";
import * as __dependency_5 from "./framework-SlotFrameworkData";
import * as __dependency_6 from "./framework-GameNameMap";
import * as __dependency_7 from "./framework-SlotFrameworkEvent";
import * as __dependency_8 from "./framework-PlatformModel";
var __export_0;
export { __export_0 as Notify };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Notify":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x5eb4e8) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x32f1d7) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x15d50c) {
  void 0;
})(__dependency_2);
(function (_0x187293) {
  void 0;
})(__dependency_3);
(function (_0x188f90) {
  void 0;
})(__dependency_4);
(function (_0x1ee08f) {
  void 0;
})(__dependency_5);
(function (_0x5386b9) {
  void 0;
})(__dependency_6);
(function (_0x567baa) {
  void 0;
})(__dependency_7);
(function (_0x46c9a6) {
  void 0;
})(__dependency_8);
var _0x24aacc, _0x48e927, _0x4e5aa, _0x52af12, _0x34a00d, _0x4fbfa0, _0x103653, _0x5fe433, _0xc6e637;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "920b5BTiOZL05vl3roZXqgW", "Notify", void 0x0);
var _0x13ec5d = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"], __publish("Notify", (_0x24aacc = _0x13ec5d("Notify"), _0x48e927 = (0, __dependency_3['inject'])("newGame", __dependency_1["Node"]), _0x4e5aa = (0, __dependency_3['inject'])("newGame/iconSpine", __dependency_1['sp']["Skeleton"]), _0x52af12 = (0, __dependency_3['inject'])("newGame/iconSpine/logo", __dependency_1["Sprite"]), _0x24aacc((_0x103653 = (0, __dependency_0['applyDecoratedDescriptor'])((_0x4fbfa0 = function (_0x45206d) {
  function _0x3d9e4b() {
    for (var _0x2874b0, _0x3e35df = arguments["length"], _0x1edbcf = new Array(_0x3e35df), _0x16f932 = 0x0; _0x16f932 < _0x3e35df; _0x16f932++) _0x1edbcf[_0x16f932] = arguments[_0x16f932];
    return _0x2874b0 = Reflect.construct(_0x45206d, [this]["concat"](_0x1edbcf).slice(1), new.target || _0x3d9e4b) || this, (0, __dependency_0['initializerDefineProperty'])(_0x2874b0, "newGameNode", _0x103653, (0, __dependency_0['assertThisInitialized'])(_0x2874b0)), (0, __dependency_0['initializerDefineProperty'])(_0x2874b0, 'newGameSpine', _0x5fe433, (0, __dependency_0['assertThisInitialized'])(_0x2874b0)), (0, __dependency_0['initializerDefineProperty'])(_0x2874b0, "newGameSprite", _0xc6e637, (0, __dependency_0['assertThisInitialized'])(_0x2874b0)), _0x2874b0["spineSocket"] = void 0x0, _0x2874b0;
  }
  (0, __dependency_0["inheritsLoose"])(_0x3d9e4b, _0x45206d);
  var _0x257b19 = _0x3d9e4b["prototype"];
  return _0x257b19['start'] = function () {
    this["spineSocket"] = new __dependency_1['sp']['SpineSocket']("root/logo", this['newGameSprite']['node']), this["initNewGameNotify"]();
  }, _0x257b19["initNewGameNotify"] = function () {
    var _0x2557fa = __dependency_4["default"]["getParam"]('gn');
    "portrait" == __dependency_4["default"]['getViewModeParam']() ? this["newGameNode"] && this["newGameNode"]["setPosition"]((0, __dependency_1['v3'])(-0x116, 0x128, 0x0)) : this["newGameNode"] && this["newGameNode"]["setPosition"]((0, __dependency_1['v3'])(-0x23c, 0xe, 0x0));
    var _0x3ee96d = this["data"]["getData"]()["filePaths"],
      _0x2346d1 = _0x3ee96d["iconSpDir"],
      _0x336c3c = _0x3ee96d['hadesPromoSpineDir'],
      _0x4eea6b = _0x3ee96d["goldenSethPromoSpineDir"],
      _0x1c13b5 = '',
      _0x34f0b2 = '';
    "hades" == _0x2557fa ? (_0x1c13b5 = __dependency_6['GameNameMap']['golden-seth'], _0x34f0b2 = _0x4eea6b) : (_0x1c13b5 = __dependency_6['GameNameMap']["hades"], _0x34f0b2 = _0x336c3c);
    var _0x58f6e8 = App['cache']['get'](this['data']["module"], _0x34f0b2)["data"],
      _0x350335 = null;
    _0x58f6e8["forEach"](function (_0x6ea7a9) {
      'promo' === _0x6ea7a9["name"] && (_0x350335 = _0x6ea7a9);
    }), _0x350335 && (this["newGameSpine"]["skeletonData"] = _0x350335, this["newGameSpine"]['sockets'] = [], this["newGameSpine"]['sockets']["push"](this["spineSocket"]), this["newGameSpine"]["sockets"] = this["newGameSpine"]["sockets"], this['newGameSpine']["setAnimation"](0x0, 'promo', !0x0));
    var _0x5a28de = this["data"]["getSpriteFrame"](this["data"]['module'], _0x2346d1, _0x1c13b5);
    _0x5a28de && (this["newGameSprite"]['spriteFrame'] = _0x5a28de);
  }, _0x257b19["addEvents"] = function () {
    var _0x56b91e = this;
    this['on'](__dependency_7["SlotFrameworkEvent"]['INIT_RESPONSE'], function () {
      __dependency_8["default"]['getData']()["disablePromotions"] && 0x1 == __dependency_8["default"]['getData']()["disablePromotions"] ? _0x56b91e["newGameNode"]["active"] = !0x1 : _0x56b91e["newGameNode"]["active"] = !0x0;
    });
  }, (0, __dependency_0["createClass"])(_0x3d9e4b, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_5["default"]);
    }
  }]), _0x3d9e4b;
}(__dependency_2["default"]))['prototype'], "newGameNode", [_0x48e927], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': null
}), _0x5fe433 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x4fbfa0['prototype'], 'newGameSpine', [_0x4e5aa], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': null
}), _0xc6e637 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x4fbfa0["prototype"], "newGameSprite", [_0x52af12], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': null
}), _0x34a00d = _0x4fbfa0)) || _0x34a00d));
__dependency_1["cclegacy"]["_RF"]["pop"]();
