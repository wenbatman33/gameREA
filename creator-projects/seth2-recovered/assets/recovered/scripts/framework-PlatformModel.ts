// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-PlatformModel.ts.js
// SHA256: 89d2b11b9f3e8c560a03e7bd1c21e48eeab6a1163dec3f4367307bcccda1b2da
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
import * as __dependency_3 from "./framework-ObjectUtils";
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
(function (_0xd6cf28) {
  void 0, void 0;
})(__dependency_0);
(function (_0x381f3d) {
  void 0;
})(__dependency_1);
(function (_0x57840b) {
  void 0;
})(__dependency_2);
(function (_0x228e3d) {
  void 0;
})(__dependency_3);
__dependency_1["cclegacy"]["_RF"]["push"]({}, "0b0a6LuKH9HEZcbT/gFrj5X", "PlatformModel", void 0x0);
var _0x465159 = function (_0x592d34) {
  function _0x297eb6() {
    var _0x12c291;
    return (_0x12c291 = Reflect.construct(_0x592d34, [], new.target || _0x297eb6) || this)["originData"] = null, _0x12c291["data"] = {
      'game': {
        'stakeValues': [],
        'ratioValues': []
      },
      'player': {
        'name': null,
        'id': null,
        'uid': null,
        'avatar': null,
        'avatarUrl': null,
        'balance': {
          'currency': null,
          'amount': null,
          'gemAmount': null,
          'betAmount': null,
          'updatedAt': null
        },
        'settings': {
          'advancedSettings': {
            'sounds': {
              'background': null,
              'backgroundVolume': null,
              'effect': null,
              'effectVolume': null
            },
            'notify': null,
            'turbo': null
          },
          'autoPlay': {
            'numberOfPlays': [],
            'stopOnWinMultiplier': null,
            'stopOnBalance': null,
            'stopOnFreeSpin': null,
            'stopOnJackpot': null
          },
          'stakeIndex': null,
          'ratioIndex': null
        },
        'clientSettings': null,
        'nameDisplayOn': null,
        'displayName': null,
        'displayNameBlockTime': null
      },
      'gemSystem': null,
      'table': {
        'roomId': null,
        'number': null,
        'status': null,
        'detail': null,
        'lock': null
      },
      'slotTablesOn': null,
      'tables': null,
      'slotTableUpdated': null,
      'jackpotOn': !0x0,
      'avatars': [],
      'theme': null,
      'isInstantClose': null,
      'betRecordUrl': null,
      'slotRankOn': !0x1,
      'tableMeta': {
        'currentPage': null,
        'tablePerPage': null,
        'totalPages': null,
        'totalTableCount': null
      }
    }, _0x12c291;
  }
  (0, __dependency_0['inheritsLoose'])(_0x297eb6, _0x592d34), _0x297eb6["Instance"] = function () {
    return this["_instance"] || (this["_instance"] = new _0x297eb6());
  };
  var _0x46659b = _0x297eb6["prototype"];
  return _0x46659b["updateBalance"] = function (_0x4e4911, _0x579ae0) {
    void 0x0 === _0x579ae0 && (_0x579ae0 = null), _0x579ae0 && (this["data"]["player"]["balance"]['updatedAt'] ? _0x579ae0 > this["data"]["player"]["balance"]["updatedAt"] && (this['amount'] = _0x4e4911, this['data']['player']["balance"]['updatedAt'] = _0x579ae0) : (this['amount'] = _0x4e4911, this["data"]["player"]["balance"]['updatedAt'] = _0x579ae0));
  }, _0x46659b["saveOriginData"] = function () {
    this["originData"] = __dependency_3["ObjectUtils"]["clone"](this["data"]);
  }, _0x46659b["restoreCurrentData"] = function () {
    this["originData"] ? (this["data"] = __dependency_3["ObjectUtils"]["clone"](this["originData"]), this["originData"] = null) : console["warn"]('No\x20originData\x20to\x20restore.');
  }, (0, __dependency_0['createClass'])(_0x297eb6, [{
    'key': "amount",
    'get': function () {
      return this["data"]['player']['balance']["amount"];
    },
    'set': function (_0x48ccff) {
      this['data']["player"]["balance"]["amount"] = _0x48ccff;
    }
  }, {
    'key': "betAmount",
    'get': function () {
      return this['data']["player"]["balance"]["betAmount"];
    },
    'set': function (_0x1762d9) {
      this["data"]["player"]["balance"]["betAmount"] = _0x1762d9;
    }
  }]), _0x297eb6;
}(__dependency_2["BaseModel"]);
_0x465159["_instance"] = null;
__publish("default", _0x465159['Instance']());
__dependency_1["cclegacy"]["_RF"]["pop"]();
