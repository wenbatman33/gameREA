// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-BetViewLandScape.ts.js
// SHA256: 323076634439f1ae13c5ad8d92ea184223149cad743223ea09264850e3cfc90e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmUtils";
import * as __dependency_4 from "./main-UIView";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-BetToggleItem";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-StakeModel";
import * as __dependency_9 from "./framework-SlotFrameworkEvent";
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
(function (_0x31171b) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x5af9a2) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x250376) {
  void 0;
})(__dependency_2);
(function (_0x1faf47) {
  void 0;
})(__dependency_3);
(function (_0x12cb3b) {
  void 0;
})(__dependency_4);
(function (_0x585d0a) {
  void 0;
})(__dependency_5);
(function (_0x21e631) {
  void 0;
})(__dependency_6);
(function (_0x52bf76) {
  void 0;
})(__dependency_7);
(function (_0x1640b3) {
  void 0;
})(__dependency_8);
(function (_0xc5c5c5) {
  void 0;
})(__dependency_9);
var _0x3b2391, _0x2679c6, _0x243d76, _0x1a5010, _0x5e6cf9, _0x197fd0, _0xa1148f, _0x3d59dc, _0x754778, _0x5c6422, _0x11c289;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '5bb0am/t41DCqjlThEO9YOg', "BetViewLandScape", void 0x0);
var _0x47fa3f = __dependency_1["_decorator"]['ccclass'];
__publish("default", (_0x3b2391 = _0x47fa3f("BetViewLandScape"), _0x2679c6 = (0, __dependency_5["inject"])('bbr', __dependency_1['Node']), _0x243d76 = (0, __dependency_5["inject"])("content/ScrollView/view/betItemContent", __dependency_1['Node']), _0x1a5010 = (0, __dependency_5["inject"])("content/confirmBtn", __dependency_1['Node']), _0x5e6cf9 = (0, __dependency_5["inject"])("content/closeBtn", __dependency_1['Node']), _0x3b2391((_0x3d59dc = (0, __dependency_0["applyDecoratedDescriptor"])((_0xa1148f = function (_0x116d1a) {
  function _0x12e367() {
    for (var _0x4e42f7, _0x44e942 = arguments["length"], _0x30dd9e = new Array(_0x44e942), _0x47c797 = 0x0; _0x47c797 < _0x44e942; _0x47c797++) _0x30dd9e[_0x47c797] = arguments[_0x47c797];
    return _0x4e42f7 = Reflect.construct(_0x116d1a, [this]['concat'](_0x30dd9e).slice(1), new.target || _0x12e367) || this, (0, __dependency_0["initializerDefineProperty"])(_0x4e42f7, "bbr", _0x3d59dc, (0, __dependency_0["assertThisInitialized"])(_0x4e42f7)), (0, __dependency_0["initializerDefineProperty"])(_0x4e42f7, "betItemContent", _0x754778, (0, __dependency_0["assertThisInitialized"])(_0x4e42f7)), (0, __dependency_0["initializerDefineProperty"])(_0x4e42f7, 'confirmBtn', _0x5c6422, (0, __dependency_0["assertThisInitialized"])(_0x4e42f7)), (0, __dependency_0["initializerDefineProperty"])(_0x4e42f7, "closeBtn", _0x11c289, (0, __dependency_0["assertThisInitialized"])(_0x4e42f7)), _0x4e42f7["betToggleItemMap"] = new Map(), _0x4e42f7['isUseServerBetList'] = !0x1, _0x4e42f7;
  }
  (0, __dependency_0['inheritsLoose'])(_0x12e367, _0x116d1a), _0x12e367["getPrefabUrl"] = function () {
    return "prefabs/view/BetViewLandScape";
  };
  var _0x565f98 = _0x12e367["prototype"];
  return _0x565f98['onLoad'] = function () {
    _0x116d1a["prototype"]["onLoad"]["call"](this);
  }, _0x565f98["onDestroy"] = function () {
    _0x116d1a["prototype"]['onDestroy']["call"](this);
  }, _0x565f98["show"] = function (_0x240d6c) {
    _0x116d1a["prototype"]["show"]["call"](this, _0x240d6c), this["init"]();
  }, _0x565f98["init"] = function () {
    var _0x4e22cf = this;
    if (this["setEventTouch"](), this['isUseServerBetList'] = this["args"], this["isUseServerBetList"] && __dependency_8["default"]["getData"]()["totalStakeList"] && __dependency_8["default"]["getData"]()['totalStakeList']["length"] > 0x0) for (var _0x49508a = 0x0; _0x49508a < __dependency_8["default"]["getData"]()["totalStakeList"]["length"]; _0x49508a++) {
      var _0x76c3eb = __dependency_8["default"]['getData']()["totalStakeList"][_0x49508a];
      this["createBetToggleItem"](_0x76c3eb);
    } else __dependency_8["default"]["getData"]()['totalStakeMap']["forEach"](function (_0x23fdcf, _0x50e76f) {
      _0x4e22cf["createBetToggleItem"](_0x23fdcf);
    }), this['initMarkToggle']();
  }, _0x565f98["setEventTouch"] = function () {
    var _0x243a42 = this;
    this["bbr"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_3["CmmUtils"]["debounce"](function () {
      _0x243a42["close"]();
    })), this['closeBtn']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_3["CmmUtils"]["debounce"](function () {
      _0x243a42["close"]();
    })), this['confirmBtn']['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      var _0x5cf125,
        _0x4c305c = null == (_0x5cf125 = _0x243a42['betItemContent']["getComponent"](__dependency_1['ToggleContainer'])["toggleItems"]["find"](function (_0x3294e7) {
          return !0x0 === _0x3294e7["isChecked"];
        })) ? void 0x0 : _0x5cf125['node'];
      if (_0x4c305c) {
        var _0x214d8b = _0x4c305c["getComponent"](__dependency_6["BetToggleItem"])["stakeVO"];
        __dependency_8["default"]['updateStake'](__dependency_8["default"]["totalStakeMap"]["get"](_0x214d8b["index"])), dispatch(__dependency_9["SlotFrameworkEvent"]["UPDATE_STAKE_SETTING"], {
          'data': _0x214d8b["totalStake"]
        }), __dependency_8["default"]["stakeMapIndex"] = _0x214d8b['index'], _0x243a42["sendSetting"](), _0x243a42["close"]();
      }
    });
  }, _0x565f98["createBetToggleItem"] = function (_0x27c615) {
    this["data"]["getData"]()['filePaths']["betToggleItemPrefab"];
    var _0xe4152b = App['cache']["get"](__dependency_2['EBundles'][__dependency_2['EBundles']['slotFramework']], this["data"]["getData"]()["filePaths"]["betToggleItemPrefab"])['data'],
      _0x1ce45f = (0, __dependency_1["instantiate"])(_0xe4152b),
      _0xdbaac6 = _0x1ce45f["addComponent"](__dependency_6["BetToggleItem"]);
    _0x1ce45f["setParent"](this["betItemContent"]), this["betToggleItemMap"]["set"](_0x27c615["totalStake"], _0xdbaac6), _0xdbaac6['init'](_0x27c615);
  }, _0x565f98['initMarkToggle'] = function () {
    var _0xbcb99c = __dependency_8["default"]["totalStake"];
    this["betToggleItemMap"]["get"](_0xbcb99c)["getComponent"](__dependency_1["Toggle"])["isChecked"] = !0x0;
  }, _0x565f98["sendSetting"] = function () {
    var _0x3ffa94 = __dependency_8["default"]['getData'](),
      _0x53cef1 = {
        'type': 'game',
        'data': {
          'stakeIndex': _0x3ffa94["stakeIndex"],
          'ratioIndex': _0x3ffa94["ratioIndex"]
        }
      };
    dispatch(__dependency_9["SlotFrameworkEvent"]["SEND_SETTING_REQUEST"], _0x53cef1);
  }, (0, __dependency_0["createClass"])(_0x12e367, [{
    'key': "data",
    'get': function () {
      return App['dataCenter']["get"](__dependency_7["default"]);
    }
  }]), _0x12e367;
}(__dependency_4["default"]))["prototype"], "bbr", [_0x2679c6], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x754778 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xa1148f['prototype'], "betItemContent", [_0x243d76], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5c6422 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xa1148f["prototype"], "confirmBtn", [_0x1a5010], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x11c289 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xa1148f['prototype'], "closeBtn", [_0x5e6cf9], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x197fd0 = _0xa1148f)) || _0x197fd0));
__dependency_1["cclegacy"]["_RF"]["pop"]();
