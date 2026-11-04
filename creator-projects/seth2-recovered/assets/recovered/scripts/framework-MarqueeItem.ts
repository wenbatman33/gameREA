// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-MarqueeItem.ts.js
// SHA256: bf7d35436a319675d2bb9ad3b8abc7130697cb22b2c3611b83edf376a2f7f8a2
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EventComponent";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./framework-res-type2";
var __export_0;
export { __export_0 as MarqueeItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "MarqueeItem":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x1a645b) {
  void 0;
})(__dependency_0);
(function (_0x129631) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0x1ab1e4) {
  void 0;
})(__dependency_2);
(function (_0x54dc3c) {
  void 0;
})(__dependency_3);
(function (_0x28d981) {
  void 0, void 0;
})(__dependency_4);
var _0x3bfe1f;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '808ed9pzDhA+YP0aNay5TF/', 'MarqueeItem', void 0x0);
var _0x47bf74 = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']['property'], __publish('MarqueeItem', _0x47bf74("MarqueeItem")(_0x3bfe1f = function (_0xf63de5) {
  function _0x16a9b2() {
    return Reflect.construct(_0xf63de5, arguments, new.target || _0x16a9b2) || this;
  }
  (0, __dependency_0["inheritsLoose"])(_0x16a9b2, _0xf63de5);
  var _0x1ac207 = _0x16a9b2["prototype"];
  return _0x1ac207["onLoad"] = function () {
    _0xf63de5["prototype"]["onLoad"]["call"](this);
  }, _0x1ac207['start'] = function () {
    this["init"]();
  }, _0x1ac207['onDestroy'] = function () {
    _0xf63de5["prototype"]["onDestroy"]["call"](this);
  }, _0x1ac207['init'] = function () {}, _0x1ac207["reset"] = function () {
    this["node"]['targetOff'](this);
  }, _0x1ac207["setData"] = function (_0x1805f9) {}, _0x1ac207["show"] = function () {
    this["node"]["active"] = !0x0;
  }, _0x1ac207["hide"] = function () {
    this['node']["active"] = !0x1;
  }, _0x1ac207["setMessage"] = function (_0x2f67c9) {
    var _0x283340 = Object['values'](__dependency_4['ENotifyWinTypes'])["includes"](_0x2f67c9['winType']),
      _0x222c0a = _0x2f67c9["extraInfoType"] && Object['values'](__dependency_4["ENotifyExtraInfoTypes"])["includes"](_0x2f67c9["extraInfoType"]);
    _0x283340 ? _0x222c0a ? this['processLittleGameMessage'](_0x2f67c9) : this["processWinPrizeMessage"](_0x2f67c9) : this['processSystemMessage'](_0x2f67c9);
  }, _0x1ac207["processWinPrizeMessage"] = function (_0x4ed3e0) {
    var _0x10ffd9 = _0x4ed3e0["player"],
      _0x44e48d = _0x4ed3e0["game"],
      _0x220573 = _0x4ed3e0['win'],
      _0x4476c8 = _0x4ed3e0["winType"],
      _0x1866de = _0x4ed3e0['gameCode'],
      _0x51783f = {
        'bigWin': "prizeBigWin",
        'superWin': "prizeSuperWin",
        'megaWin': "prizeMegaWin",
        'ultraWin': 'prizeUltraWin',
        'legendaryWin': "prizeLegendaryWin",
        'jp-mini': "prizeMiniJackpot",
        'jp-minor': 'prizeMinorJackpot',
        'jp-major': "prizeMajorJackpot",
        'jp-grand': "prizeGrandJackpot"
      };
    switch (_0x1866de) {
      case 'hades':
        _0x51783f["noWinReward"] = "g1007_Chest";
        break;
      default:
        _0x51783f["noWinReward"] = "mysteryChest";
    }
    var _0x4c209f = App["getLanguage"](_0x1866de, null, __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]);
    null == _0x4c209f && (_0x4c209f = _0x44e48d);
    var _0x41d318 = App["getLanguage"](_0x51783f[_0x4476c8], null, __dependency_3["EBundles"][__dependency_3["EBundles"]["wrapper"]]),
      _0x413959 = '',
      _0x175dfd = App["getLanguage"]('notifyMarqueeMsg', [_0x10ffd9, _0x4c209f, _0x41d318, _0x220573], __dependency_3["EBundles"][__dependency_3["EBundles"]["wrapper"]]);
    if (_0x413959 = _0x413959["concat"](_0x175dfd), null != _0x4ed3e0 && _0x4ed3e0["roomNumber"]) {
      var _0x1705a5 = App["getLanguage"]("notifyAtSomeTable", [null == _0x4ed3e0 ? void 0x0 : _0x4ed3e0["roomNumber"]], __dependency_3["EBundles"][__dependency_3["EBundles"]['wrapper']]);
      _0x413959 = _0x413959["concat"]('\x20', _0x1705a5);
    }
    this['node']["getComponent"](__dependency_1["RichText"])["string"] = _0x413959;
  }, _0x1ac207["processLittleGameMessage"] = function (_0x178709) {
    var _0x34f9b1 = _0x178709["player"],
      _0x333575 = _0x178709["game"],
      _0xb9142b = _0x178709["win"],
      _0x1ec330 = (_0x178709["winType"], _0x178709['extraInfoType']),
      _0x5aa767 = _0x178709["gameCode"],
      _0x37c632 = App['getLanguage'](_0x5aa767, null, __dependency_3["EBundles"][__dependency_3["EBundles"]["slotFramework"]]);
    null == _0x37c632 && (_0x37c632 = _0x333575);
    var _0x1c0c78 = App["getLanguage"]({
        'elixirFurnace': "bonusGame",
        'luckyWealth': "secretBonus",
        'luckyWealth2': "meetTheImmortal",
        'fortuneLanding': 'heavenlyTreasures'
      }[_0x1ec330], null, __dependency_3["EBundles"][__dependency_3["EBundles"]["wrapper"]]),
      _0x3ad97e = '',
      _0x18c16b = App["getLanguage"]("notifyMarqueeMsg", [_0x34f9b1, _0x37c632, _0x1c0c78, _0xb9142b], __dependency_3["EBundles"][__dependency_3["EBundles"]["wrapper"]]);
    if (_0x3ad97e = _0x3ad97e["concat"](_0x18c16b), null != _0x178709 && _0x178709["roomNumber"]) {
      var _0x193735 = App["getLanguage"]("notifyAtSomeTable", [null == _0x178709 ? void 0x0 : _0x178709["roomNumber"]], __dependency_3["EBundles"][__dependency_3["EBundles"]["wrapper"]]);
      _0x3ad97e = _0x3ad97e["concat"]('\x20', _0x193735);
    }
    this["node"]["getComponent"](__dependency_1["RichText"])["string"] = _0x3ad97e;
  }, _0x1ac207["processSystemMessage"] = function (_0x22b43b) {
    var _0x40d8e5 = App["utils"]["removeNewLineAndTrim"](_0x22b43b["text"]);
    Log['w']("filter string:::::::::::::", _0x40d8e5);
    var _0x20b657 = "<color=#ff3600><outline color=#ff3600 width=0.9><b>" + _0x40d8e5 + "</b></outline></color>";
    this["node"]["getComponent"](__dependency_1["RichText"])["string"] = _0x20b657;
  }, _0x16a9b2;
}(__dependency_2["default"])) || _0x3bfe1f);
__dependency_1["cclegacy"]["_RF"]['pop']();
