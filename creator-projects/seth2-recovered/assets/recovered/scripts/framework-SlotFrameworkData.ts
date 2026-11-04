// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotFrameworkData.ts.js
// SHA256: 1b9d98eba48305edf7e71a2daebb5b50cf4c67f04644753db48d6ad231fe66ac
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-GameDataBase";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./framework-DefinitionModel";
import * as __dependency_6 from "./framework-PlatformModel";
import * as __dependency_7 from "./framework-type2";
import * as __dependency_8 from "./framework-MathUtil";
import * as __dependency_9 from "./framework-StakeModel";
import * as __dependency_10 from "./framework-UrlModel";
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
(function (_0x55e7b6) {
  void 0, void 0;
})(__dependency_0);
(function (_0x33b9a9) {
  void 0;
})(__dependency_1);
(function (_0x2aaccd) {
  void 0;
})(__dependency_2);
(function (_0x1a40e3) {
  void 0;
})(__dependency_3);
(function (_0x5cc207) {
  void 0;
})(__dependency_4);
(function (_0x1b8476) {
  void 0;
})(__dependency_5);
(function (_0x5e40f0) {
  void 0;
})(__dependency_6);
(function (_0x420c8e) {
  void 0;
})(__dependency_7);
(function (_0x12467c) {
  void 0;
})(__dependency_8);
(function (_0x272fdb) {
  void 0;
})(__dependency_9);
(function (_0xd2b356) {
  void 0;
})(__dependency_10);
__dependency_1["cclegacy"]["_RF"]["push"]({}, "ea5abokIe9IFYPUVPHrvdsU", "SlotFrameworkData", void 0x0);
var _0x3458eb = __publish("default", function (_0x69d804) {
  function _0x28db2b() {
    for (var _0x1ec705, _0x2a5fba = arguments['length'], _0x45b1ba = new Array(_0x2a5fba), _0x1306d4 = 0x0; _0x1306d4 < _0x2a5fba; _0x1306d4++) _0x45b1ba[_0x1306d4] = arguments[_0x1306d4];
    return (_0x1ec705 = Reflect.construct(_0x69d804, [this]["concat"](_0x45b1ba).slice(1), new.target || _0x28db2b) || this)['SLOT_VERSION'] = "1.1.3_3", _0x1ec705["tempJpPools"] = {
      'jp-mini': 0x0,
      'jp-minor': 0x0,
      'jp-major': 0x0,
      'jp-grand': 0x0
    }, _0x1ec705;
  }
  (0, __dependency_0["inheritsLoose"])(_0x28db2b, _0x69d804);
  var _0x5f37ba = _0x28db2b["prototype"];
  return _0x5f37ba['init'] = function () {
    _0x69d804["prototype"]['init']['call'](this);
    var _0x3ae1b4 = __dependency_10["default"]["getLanguageParam"]();
    this["data"] = {
      'spinStatus': __dependency_7['ESpinStatus']['IDLE'],
      'filePaths': {
        'commonSpDir': "assets/texture/common",
        'iconSpDir': "assets/texture/locale/" + _0x3ae1b4 + "/icon/",
        'hadesPromoSpineDir': "assets/spines/promo/g1007",
        'goldenSethPromoSpineDir': 'assets/spines/promo/g1005',
        'gameInterfaceSp': "assets/texture/gameinterface",
        'prizeNotifySp': "assets/texture/prizeNotify",
        'slotTableDir': "assets/texture/slottable",
        'marqueePrefab': "prefabs/component/Marquee",
        'marqueeItemPrefab': "prefabs/component/MarqueeItem",
        'slotTableItemPrefab': "prefabs/component/SlotTableItem2",
        'recordItemLPrefab': "prefabs/component/RecordItemL",
        'recordItemPPrefab': "prefabs/component/RecordItemP",
        'historyItemLPrefab': "prefabs/component/HistoryItemL",
        'historyItemPPrefab': "prefabs/component/HistoryItemP",
        'betToggleItemPrefab': "prefabs/component/BetToggleItem",
        'jpBarLPrefab': "prefabs/ui/topBar/JpBarL",
        'jpBarPPrefab': 'prefabs/ui/topBar/JpBarP',
        'menuLPrefab': "prefabs/ui/topBar/MenuL",
        'menuPPrefab': "prefabs/ui/topBar/MenuP",
        'infoBarPPrefab': "prefabs/ui/InfoBarP",
        'infoBarPrefab': 'prefabs/ui/InfoBar',
        'spinBarPPrefab': "prefabs/ui/SpinBarP",
        'spinBarPrefab': "prefabs/ui/SpinBarLandScape",
        'rankingDir': "assets/texture/ranking",
        'rankingItemLPrefab': "prefabs/component/RankingItemL",
        'rankingItemPPrefab': 'prefabs/component/RankingItemP',
        'slotTablePageTableItemPrefab': "prefabs/component/SlotTablePageTabsItem",
        'notifyPrefab': "prefabs/component/Notify",
        'prizeNotifyPrefab': 'prefabs/component/PrizeNotify'
      },
      'isForceHideRankBtn': !0x1
    };
  }, _0x5f37ba["onDestory"] = function () {}, _0x5f37ba["clear"] = function () {}, _0x5f37ba["debug"] = function () {
    Log['d']('' + this["module"]);
  }, _0x5f37ba["checkBalance"] = function () {
    var _0x548e5a = {
        'ratioIndex': __dependency_9["default"]["ratioIndex"],
        'ratioValue': __dependency_9["default"]["ratioValue"],
        'stakeIndex': __dependency_9["default"]["stakeIndex"],
        'stakeValue': __dependency_9["default"]['stakeValue']
      },
      _0x39d9ca = _0x548e5a["stakeValue"],
      _0x262ed4 = _0x548e5a["ratioValue"],
      _0x113160 = __dependency_5["default"]["getData"]()["winlineDefs"] ? __dependency_5["default"]["getData"]()["winlineDefs"]["length"] : 0x1,
      _0x2b6ad8 = __dependency_8["default"]["multiply"](_0x262ed4, _0x39d9ca, _0x113160);
    return _0x2b6ad8 = __dependency_9["default"]["getData"]()["extraStakeTimes"] * _0x2b6ad8, __dependency_6["default"]["getData"]()["player"]['balance']['amount'] - _0x2b6ad8 >= 0x0;
  }, _0x5f37ba["setForceHideRankBtn"] = function () {
    this["data"]["isForceHideRankBtn"] = !0x0;
  }, _0x5f37ba["getSpriteFrame"] = function (_0x24657b, _0x983311, _0x399100) {
    var _0xfa6ca = App["cache"]['get'](this['module'], _0x983311)['data'],
      _0x33c20a = null;
    if (_0xfa6ca["forEach"](function (_0x388201) {
      _0x388201["name"] === _0x399100 && (_0x33c20a = _0x388201);
    }), !_0x33c20a) throw new Error('NOT\x20FIND\x20所需SpriteFrame\x20' + _0x983311);
    return _0x33c20a;
  }, _0x5f37ba['checkBalanceAndAlert'] = function (_0x2ecd37) {
    var _0x15bf95 = !0x0,
      _0x37f68b = __dependency_6["default"]["getData"]()["player"]["balance"]["amount"];
    if (0x0 === _0x37f68b || !this["checkBalance"]()) {
      var _0x5f0961 = 0x0 === _0x37f68b ? "insufficientFundError" : "insufficientFund",
        _0x183208 = function () {
          dispatch(__dependency_4["SlotFrameworkEvent"]["SHOW_AUTO_SPIN"], {
            'data': !0x0
          });
        },
        _0x430dda = {
          'text': App["getLanguage"](_0x5f0961, [], __dependency_2["EBundles"][__dependency_2["EBundles"]["wrapper"]]),
          'confirmCb': _0x183208,
          'bbrCb': _0x183208
        };
      App["gameAlert"]["show"](_0x430dda), dispatch(__dependency_4["SlotFrameworkEvent"]['STOP_AUTO_SPIN']), _0x15bf95 = !0x1;
    }
    return _0x2ecd37 && _0x2ecd37(), _0x15bf95;
  }, _0x5f37ba["addEvents"] = function () {
    var _0x4b3dd7 = this;
    this['on'](__dependency_4["SlotFrameworkEvent"]["UPDATE_SPIN_STATUS"], function (_0x5d4a0b) {
      var _0x2fafc6 = _0x5d4a0b['data'];
      _0x4b3dd7["spinStatus"] = _0x2fafc6;
    });
  }, (0, __dependency_0['createClass'])(_0x28db2b, [{
    'key': "spinStatus",
    'get': function () {
      return this["data"]['spinStatus'];
    },
    'set': function (_0xa05b5d) {
      this['data']["spinStatus"] = _0xa05b5d;
    }
  }]), _0x28db2b;
}(__dependency_3['GameDataBase']));
_0x3458eb["module"] = __dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], _0x3458eb["allowReplayGameList"] = ["egyptian-mythology", "materialistic-women", "egyptian-mythology-golang", 'golden-seth', "scarlet-three-kingdoms", "hades", "tiger-princess"], _0x3458eb["disableClickGameList"] = ['son-go-ku', 'wuxia-caishen'], __dependency_1["cclegacy"]["_RF"]["pop"]();
