// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-BetView.ts.js
// SHA256: de1e8cdfaa6888534a8d2b6378a3a095dfb01a46f6377035697fe6cce1318bf4
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
(function (_0xe424a1) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x1691fa) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x38c74d) {
  void 0;
})(__dependency_2);
(function (_0x252fc5) {
  void 0;
})(__dependency_3);
(function (_0x6505e2) {
  void 0;
})(__dependency_4);
(function (_0x3c48e4) {
  void 0;
})(__dependency_5);
(function (_0x9a793) {
  void 0;
})(__dependency_6);
(function (_0x4d88f1) {
  void 0;
})(__dependency_7);
(function (_0x18aecc) {
  void 0;
})(__dependency_8);
(function (_0x2b5c57) {
  void 0;
})(__dependency_9);
var _0x462dd4, _0xd24513, _0x1a1e26, _0x297f82, _0x203e75, _0x5804bf, _0x151a8e, _0x510a36, _0x5640ec;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "99835gmaTRAk4HlmKLoR5Wd", "BetView", void 0x0);
var _0x293d0b = __dependency_1["_decorator"]['ccclass'];
__publish('default', (_0x462dd4 = _0x293d0b("BetView"), _0xd24513 = (0, __dependency_5["inject"])("bbr", __dependency_1["Node"]), _0x1a1e26 = (0, __dependency_5["inject"])('content/ScrollView/view/betItemContent', __dependency_1["Node"]), _0x297f82 = (0, __dependency_5["inject"])("content/confirmBtn", __dependency_1["Node"]), _0x462dd4((_0x151a8e = (0, __dependency_0['applyDecoratedDescriptor'])((_0x5804bf = function (_0x213a5d) {
  function _0x4d0c56() {
    for (var _0x5e7e5b, _0x1f40de = arguments["length"], _0x15e8d0 = new Array(_0x1f40de), _0x4b06d8 = 0x0; _0x4b06d8 < _0x1f40de; _0x4b06d8++) _0x15e8d0[_0x4b06d8] = arguments[_0x4b06d8];
    return _0x5e7e5b = Reflect.construct(_0x213a5d, [this]["concat"](_0x15e8d0).slice(1), new.target || _0x4d0c56) || this, (0, __dependency_0["initializerDefineProperty"])(_0x5e7e5b, 'bbr', _0x151a8e, (0, __dependency_0["assertThisInitialized"])(_0x5e7e5b)), (0, __dependency_0["initializerDefineProperty"])(_0x5e7e5b, "betItemContent", _0x510a36, (0, __dependency_0["assertThisInitialized"])(_0x5e7e5b)), (0, __dependency_0["initializerDefineProperty"])(_0x5e7e5b, "confirmBtn", _0x5640ec, (0, __dependency_0["assertThisInitialized"])(_0x5e7e5b)), _0x5e7e5b["betToggleItemMap"] = new Map(), _0x5e7e5b;
  }
  (0, __dependency_0['inheritsLoose'])(_0x4d0c56, _0x213a5d), _0x4d0c56['getPrefabUrl'] = function () {
    return "prefabs/view/BetView";
  };
  var _0x487a8a = _0x4d0c56["prototype"];
  return _0x487a8a["onLoad"] = function () {
    _0x213a5d["prototype"]["onLoad"]["call"](this);
  }, _0x487a8a["onDestroy"] = function () {
    _0x213a5d["prototype"]["onDestroy"]["call"](this);
  }, _0x487a8a["show"] = function (_0x1c4411) {
    _0x213a5d["prototype"]["show"]['call'](this, _0x1c4411), this["init"]();
  }, _0x487a8a["init"] = function () {
    var _0x412bf8 = this;
    this["setEventTouch"](), __dependency_8["default"]['getData']()["totalStakeMap"]["forEach"](function (_0xf2c97f, _0x449e94) {
      _0x412bf8['createBetToggleItem'](_0xf2c97f);
    }), this["initMarkToggle"]();
  }, _0x487a8a["setEventTouch"] = function () {
    var _0x440ff1 = this;
    this['bbr']['on'](__dependency_1["NodeEventType"]["TOUCH_END"], __dependency_3["CmmUtils"]['debounce'](function () {
      _0x440ff1["close"]();
    })), this["confirmBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      var _0x3ee4cb = _0x440ff1["betItemContent"]['getComponent'](__dependency_1["ToggleContainer"])["toggleItems"]["find"](function (_0x10ff41) {
        return !0x0 === _0x10ff41["isChecked"];
      })['node']['getComponent'](__dependency_6["BetToggleItem"])["stakeVO"];
      __dependency_8["default"]["updateStake"](__dependency_8["default"]['totalStakeMap']["get"](_0x3ee4cb["index"])), dispatch(__dependency_9["SlotFrameworkEvent"]["UPDATE_STAKE"], {
        'data': _0x3ee4cb["totalStake"]
      }), __dependency_8["default"]['stakeMapIndex'] = _0x3ee4cb["index"], _0x440ff1['sendSetting'](), _0x440ff1["close"]();
    });
  }, _0x487a8a['createBetToggleItem'] = function (_0x2a945b) {
    this["data"]["getData"]()["filePaths"]['betToggleItemPrefab'];
    var _0x117265 = App["cache"]['get'](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], this["data"]['getData']()["filePaths"]["betToggleItemPrefab"])["data"],
      _0x5bd243 = (0, __dependency_1["instantiate"])(_0x117265),
      _0x1e8c4c = _0x5bd243["addComponent"](__dependency_6["BetToggleItem"]);
    _0x5bd243['setParent'](this['betItemContent']), this["betToggleItemMap"]["set"](_0x2a945b['totalStake'], _0x1e8c4c), _0x1e8c4c["init"](_0x2a945b);
  }, _0x487a8a["initMarkToggle"] = function () {
    var _0x4bc85c = __dependency_8["default"]['totalStake'];
    this["betToggleItemMap"]["get"](_0x4bc85c)["getComponent"](__dependency_1["Toggle"])["isChecked"] = !0x0;
  }, _0x487a8a["sendSetting"] = function () {
    var _0xeb72c0 = __dependency_8["default"]['getData'](),
      _0x384908 = {
        'type': "game",
        'data': {
          'stakeIndex': _0xeb72c0["stakeIndex"],
          'ratioIndex': _0xeb72c0["ratioIndex"]
        }
      };
    dispatch(__dependency_9["SlotFrameworkEvent"]["SEND_SETTING_REQUEST"], _0x384908);
  }, (0, __dependency_0["createClass"])(_0x4d0c56, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_7["default"]);
    }
  }]), _0x4d0c56;
}(__dependency_4["default"]))["prototype"], 'bbr', [_0xd24513], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x510a36 = (0, __dependency_0['applyDecoratedDescriptor'])(_0x5804bf['prototype'], "betItemContent", [_0x1a1e26], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5640ec = (0, __dependency_0['applyDecoratedDescriptor'])(_0x5804bf['prototype'], "confirmBtn", [_0x297f82], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x203e75 = _0x5804bf)) || _0x203e75));
__dependency_1["cclegacy"]["_RF"]['pop']();
