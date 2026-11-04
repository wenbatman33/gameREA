// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotFrameworkEntry.ts.js
// SHA256: c0925217c9ae0c3926faf7994f05f2922ab3c853a7f0598204ee4b2a58767c3c
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-LabelTextAlignFix";
import * as __dependency_3 from "./main-Bundles";
import * as __dependency_4 from "./main-Resource";
import * as __dependency_5 from "./main-Entry";
import * as __dependency_6 from "./main-Decorators";
import * as __dependency_7 from "./framework-SlotFrameworkData";
import * as __dependency_8 from "./framework-SlotFrameworkLanguage";
import * as __dependency_9 from "./framework-ReadyBundleModel";
import * as __dependency_10 from "./framework-ReplayModel";
import * as __dependency_11 from "./framework-SocketModel";
import * as __dependency_12 from "./framework-UrlModel";
import * as __dependency_13 from "./framework-CmmSlotUtils";
import * as __dependency_14 from "./framework-AutoSpinView";
import * as __dependency_15 from "./framework-AvatarViewL";
import * as __dependency_16 from "./framework-AvatarViewP";
import * as __dependency_17 from "./framework-GameRulesView";
import * as __dependency_18 from "./framework-GameRulesViewP";
import * as __dependency_19 from "./framework-NickNameView";
import * as __dependency_20 from "./framework-NoTouchingView";
import * as __dependency_21 from "./framework-RankingViewL";
import * as __dependency_22 from "./framework-RankingViewP";
import * as __dependency_23 from "./framework-RecordViewL";
import * as __dependency_24 from "./framework-RecordViewP";
import * as __dependency_25 from "./framework-SettingView";
import * as __dependency_26 from "./framework-SlotFrameworkView";
import * as __dependency_27 from "./main-UrlUtils";
import * as __dependency_28 from "./framework-GameNameMap";
import * as __dependency_29 from "./main-Config";
(function (_0x1f4c5a) {
  void 0, void 0;
})(__dependency_0);
(function (_0x59b4b6) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x511dd1) {
  void 0;
})(__dependency_3);
(function (_0x2ab9f6) {
  void 0;
})(__dependency_4);
(function (_0x570e9b) {
  void 0;
})(__dependency_5);
(function (_0x17e4e8) {
  void 0;
})(__dependency_6);
(function (_0x579d7e) {
  void 0;
})(__dependency_7);
(function (_0x2e342c) {
  void 0;
})(__dependency_8);
(function (_0x4cc8a0) {
  void 0;
})(__dependency_9);
(function (_0x1f7434) {
  void 0;
})(__dependency_10);
(function (_0x4bdb6f) {
  void 0;
})(__dependency_11);
(function (_0x172745) {
  void 0;
})(__dependency_12);
(function (_0x37e74d) {
  void 0;
})(__dependency_13);
(function (_0x2d50e6) {
  void 0;
})(__dependency_14);
(function (_0x40ca55) {
  void 0;
})(__dependency_15);
(function (_0x57ceee) {
  void 0;
})(__dependency_16);
(function (_0x361bd5) {
  void 0;
})(__dependency_17);
(function (_0x176009) {
  void 0;
})(__dependency_18);
(function (_0xdb98ca) {
  void 0;
})(__dependency_19);
(function (_0x592317) {
  void 0;
})(__dependency_20);
(function (_0x112385) {
  void 0;
})(__dependency_21);
(function (_0x1c4365) {
  void 0;
})(__dependency_22);
(function (_0x14280a) {
  void 0;
})(__dependency_23);
(function (_0x284153) {
  void 0;
})(__dependency_24);
(function (_0x30183c) {
  void 0;
})(__dependency_25);
(function (_0x4ebf6c) {
  void 0;
})(__dependency_26);
(function (_0x55d4bd) {
  void 0;
})(__dependency_27);
(function (_0x533a51) {
  void 0;
})(__dependency_28);
(function (_0x5608fd) {
  void 0;
})(__dependency_29);
var _0xa20cd0;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "bbf64fvbHRF+53I7dAdIX0y", "SlotFrameworkEntry", void 0x0);
(0, __dependency_6['registerEntry'])("SlotFrameworkEntry", __dependency_3['EBundles'][__dependency_3['EBundles']["slotFramework"]], __dependency_26["default"])(_0xa20cd0 = function (_0x3b0f03) {
  function _0x201c59() {
    for (var _0x53ebe4, _0xc72c38 = arguments["length"], _0x152141 = new Array(_0xc72c38), _0x1e3a8d = 0x0; _0x1e3a8d < _0xc72c38; _0x1e3a8d++) _0x152141[_0x1e3a8d] = arguments[_0x1e3a8d];
    return (_0x53ebe4 = Reflect.construct(_0x3b0f03, [this]["concat"](_0x152141).slice(1), new.target || _0x201c59) || this)["language"] = new __dependency_8["SlotFrameworkLanguage"](), _0x53ebe4['viewModeMap'] = new Map(), _0x53ebe4;
  }
  (0, __dependency_0["inheritsLoose"])(_0x201c59, _0x3b0f03);
  var _0x54a4e3 = _0x201c59["prototype"];
  return _0x54a4e3["addNetHandler"] = function () {}, _0x54a4e3["removeNetHandler"] = function () {}, _0x54a4e3["loadResources"] = function (_0x22fa4d) {
    var _0x591164 = this;
    (0, __dependency_1["log"])("loadResources");
    var _0x3c73a7 = this['data']["getData"]()['filePaths'],
      _0x5df9aa = _0x3c73a7["notifyPrefab"],
      _0x48b3c6 = _0x3c73a7["iconSpDir"],
      _0x14ae8a = _0x3c73a7["hadesPromoSpineDir"],
      _0x6ae198 = _0x3c73a7["goldenSethPromoSpineDir"],
      _0x2b91d8 = _0x3c73a7["commonSpDir"],
      _0x56e45a = _0x3c73a7["gameInterfaceSp"],
      _0x4c0e6d = _0x3c73a7["prizeNotifySp"],
      _0x31d952 = _0x3c73a7['rankingDir'],
      _0xe25406 = _0x3c73a7["spinBarPrefab"],
      _0xf68c4b = _0x3c73a7["spinBarPPrefab"],
      _0x4fa487 = _0x3c73a7["infoBarPrefab"],
      _0x3c2451 = _0x3c73a7["infoBarPPrefab"],
      _0x1020eb = _0x3c73a7['betToggleItemPrefab'],
      _0x5ecde4 = _0x3c73a7["marqueePrefab"],
      _0x32636a = _0x3c73a7["recordItemLPrefab"],
      _0x5e1379 = _0x3c73a7["recordItemPPrefab"],
      _0x22705d = _0x3c73a7["marqueeItemPrefab"],
      _0x44ba6c = _0x3c73a7["slotTableItemPrefab"],
      _0x2e21fc = _0x3c73a7["slotTableDir"],
      _0x5a41ab = _0x3c73a7["historyItemLPrefab"],
      _0x2c049c = _0x3c73a7["historyItemPPrefab"],
      _0xe19538 = _0x3c73a7["menuLPrefab"],
      _0x49d372 = _0x3c73a7["menuPPrefab"],
      _0x3d759f = _0x3c73a7["jpBarLPrefab"],
      _0x5ba6d0 = _0x3c73a7["jpBarPPrefab"],
      _0x5cabea = _0x3c73a7["rankingItemPPrefab"],
      _0x4079bf = _0x3c73a7["rankingItemLPrefab"],
      _0x150112 = _0x3c73a7["slotTablePageTableItemPrefab"],
      _0x36c0f6 = _0x3c73a7["prizeNotifyPrefab"];
    this["loader"]["getLoadResources"] = function () {
      var _0x129f6c = [{
        'url': "prefabs/ui/SpinBar",
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': __dependency_13["CmmSlotUtils"]['getOrientationTarget'](_0x4fa487, _0x3c2451),
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': __dependency_13["CmmSlotUtils"]['getOrientationTarget'](_0xe25406, _0xf68c4b),
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': "prefabs/ui/topBar/TopBar",
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': "prefabs/ui/topBar/TopBarP",
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': "prefabs/ui/button/ImageButton",
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': "prefabs/ui/button/SpineButton",
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': "prefabs/ui/button/SpinButton",
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x32636a,
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x5e1379,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x44ba6c,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': "prefabs/component/ruleItem",
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': 'prefabs/component/AvatarToggleItem',
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': "prefabs/component/PrizeNotify",
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x5ecde4,
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x22705d,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x1020eb,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x150112,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'dir': _0x56e45a,
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["SpriteFrame"]
      }, {
        'dir': _0x14ae8a,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1['sp']["SkeletonData"]
      }, {
        'dir': _0x6ae198,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1['sp']["SkeletonData"]
      }, {
        'dir': _0x48b3c6,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["SpriteFrame"]
      }, {
        'dir': _0x2b91d8,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["SpriteFrame"]
      }, {
        'dir': _0x4c0e6d,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["SpriteFrame"]
      }, {
        'dir': _0x2e21fc,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["SpriteFrame"]
      }, {
        'dir': _0x31d952,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["SpriteFrame"]
      }, {
        'url': _0x5df9aa,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': _0x36c0f6,
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': __dependency_13["CmmSlotUtils"]["getOrientationTarget"](_0x5a41ab, _0x2c049c),
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': __dependency_13["CmmSlotUtils"]["getOrientationTarget"](_0x4079bf, _0x5cabea),
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'url': __dependency_13["CmmSlotUtils"]["getOrientationTarget"](_0x3d759f, _0x5ba6d0),
        'bundle': _0x591164['bundle'],
        'type': __dependency_1["Prefab"]
      }, {
        'url': __dependency_13["CmmSlotUtils"]["getOrientationTarget"](_0xe19538, _0x49d372),
        'bundle': _0x591164["bundle"],
        'type': __dependency_1["Prefab"]
      }, {
        'preloadView': __dependency_25['default'],
        'bundle': _0x591164['bundle']
      }, {
        'preloadView': __dependency_13["CmmSlotUtils"]["getOrientationTarget"](__dependency_17['default'], __dependency_18["default"]),
        'bundle': _0x591164["bundle"]
      }, {
        'preloadView': __dependency_19["default"],
        'bundle': _0x591164['bundle']
      }, {
        'preloadView': __dependency_13["CmmSlotUtils"]['getOrientationTarget'](__dependency_15["default"], __dependency_16["default"]),
        'bundle': _0x591164["bundle"]
      }, {
        'preloadView': __dependency_13["CmmSlotUtils"]['getOrientationTarget'](__dependency_23["default"], __dependency_24["default"]),
        'bundle': _0x591164["bundle"]
      }, {
        'preloadView': __dependency_13["CmmSlotUtils"]['getOrientationTarget'](__dependency_21["default"], __dependency_22["default"]),
        'bundle': _0x591164["bundle"]
      }, {
        'preloadView': __dependency_14["default"],
        'bundle': _0x591164["bundle"]
      }];
      return __dependency_10['default']["isReplay"] && Object["assign"](_0x129f6c, [{
        'preloadView': __dependency_20['default'],
        'bundle': _0x591164["bundle"]
      }]), _0x129f6c;
    }, this["loader"]['onLoadProgress'] = function () {}, this["loader"]["onLoadComplete"] = function (_0x36fba9) {
      __dependency_4['Resource']["LoaderError"]["SUCCESS"] && (__dependency_9["default"]["setComplete"](__dependency_3['EBundles'][_0x591164["bundle"]]), _0x22fa4d(), _0x591164["openNotify"]());
    }, this['loader']['loadResources']();
  }, _0x54a4e3['openGameView'] = function (_0x2007e0) {
    _0x3b0f03["prototype"]["openGameView"]["call"](this), App["entryManager"]["onCheckUpdate"]();
  }, _0x54a4e3["openNotify"] = function () {
    var _0x9015df = this["data"]["getData"]()["filePaths"]["notifyPrefab"];
    App["cache"]["getCacheByAsync"](_0x9015df, __dependency_1["Prefab"], this["bundle"])["then"](function (_0x5e8c0e) {
      if (_0x5e8c0e) {
        var _0xafe204 = (0, __dependency_1['instantiate'])(_0x5e8c0e);
        App["uiManager"]["addView"](_0xafe204, __dependency_29["ViewZOrder"]["UILoading"] + 0x14);
      }
    });
  }, _0x54a4e3["initData"] = function () {
    this["initUrlConfig"]();
  }, _0x54a4e3["pauseMessageQueue"] = function () {}, _0x54a4e3['resumeMessageQueue'] = function () {}, _0x54a4e3["onEnter"] = function (_0x1c04a9) {
    _0x3b0f03["prototype"]["onEnter"]["call"](this, _0x1c04a9), Log['d']('--------------onEnterLogin--------------');
  }, _0x54a4e3["onEnterGameView"] = function (_0x1de2ce) {
    _0x3b0f03["prototype"]["onEnterGameView"]["call"](this, _0x1de2ce);
  }, _0x54a4e3["onUnloadBundle"] = function () {}, _0x54a4e3['initUrlConfig'] = function () {
    __dependency_12["default"]["setSearchParams"]();
    var _0x55a7ab = __dependency_27["default"]['getTokenFromUrl'](),
      _0x20c7b9 = localStorage['getItem'](_0x55a7ab);
    if (_0x20c7b9) __dependency_11['default']["currentToken"] = _0x20c7b9;else {
      if (__dependency_27["default"]['hasParam']("spinId")) return;
      this["getAllViewMode"](), App['storage']["clear"](), this['saveAllViewModeToLocalStorage'](), __dependency_11['default']["currentToken"] = _0x55a7ab;
    }
  }, _0x54a4e3["getAllViewMode"] = function () {
    for (var _0x4b3a9e = Object['keys'](__dependency_28["GameNameMap"]), _0x2e7d08 = 0x0; _0x2e7d08 < _0x4b3a9e["length"]; _0x2e7d08++) {
      var _0x9ac38b = _0x4b3a9e[_0x2e7d08] + "_view_mode",
        _0x26dad3 = localStorage["getItem"](_0x9ac38b);
      null != _0x26dad3 && this["viewModeMap"]["set"](_0x9ac38b, _0x26dad3);
    }
  }, _0x54a4e3['saveAllViewModeToLocalStorage'] = function () {
    var _0x5aecf4 = Object['keys'](__dependency_28["GameNameMap"]);
    Log['e']("game name keys::::::", _0x5aecf4);
    for (var _0x3cfb6b = 0x0; _0x3cfb6b < _0x5aecf4["length"]; _0x3cfb6b++) {
      var _0x468a80 = _0x5aecf4[_0x3cfb6b] + "_view_mode";
      if (this["viewModeMap"]["has"](_0x468a80)) {
        var _0x2c0e7e = this["viewModeMap"]["get"](_0x468a80);
        _0x2c0e7e && localStorage["setItem"](_0x468a80, _0x2c0e7e);
      }
    }
  }, (0, __dependency_0["createClass"])(_0x201c59, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_7['default']);
    }
  }]), _0x201c59;
}(__dependency_5['Entry']));
__dependency_1["cclegacy"]["_RF"]['pop']();
