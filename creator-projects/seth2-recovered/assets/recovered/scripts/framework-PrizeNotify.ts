// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-PrizeNotify.ts.js
// SHA256: fc9d19c136886e4acdfcf73744dad61d8df7fd8a4f076e5e3460f20b4db6f46e
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Queue";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-SlotFrameworkData";
import * as __dependency_7 from "./framework-SlotFrameworkEvent";
import * as __dependency_8 from "./framework-PlatformModel";
import * as __dependency_9 from "./framework-UrlModel";
import * as __dependency_10 from "./framework-res-type2";
import * as __dependency_11 from "./framework-type2";
import * as __dependency_12 from "./framework-LoadUtils";
import * as __dependency_13 from "./main-UrlUtils";
var __export_0;
export { __export_0 as PrizeNotify };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "PrizeNotify":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x1480da) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x4d3250) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x5003f4) {
  void 0;
})(__dependency_2);
(function (_0x464081) {
  void 0;
})(__dependency_3);
(function (_0x4a2db8) {
  void 0;
})(__dependency_4);
(function (_0x2c5ba7) {
  void 0;
})(__dependency_5);
(function (_0x4c9d8a) {
  void 0;
})(__dependency_6);
(function (_0x1122b1) {
  void 0;
})(__dependency_7);
(function (_0x1bae3c) {
  void 0;
})(__dependency_8);
(function (_0xe050b0) {
  void 0;
})(__dependency_9);
(function (_0x6ccd0d) {
  void 0;
})(__dependency_10);
(function (_0x13d2a3) {
  void 0;
})(__dependency_11);
(function (_0x5c8cb5) {
  void 0;
})(__dependency_12);
(function (_0x5640ee) {
  void 0;
})(__dependency_13);
var _0x2a8513, _0x430a43, _0x5f2bb3, _0x4c823e, _0x4bfd12, _0x37088d, _0x53f77a, _0x5eeb39, _0x26f651;
__dependency_1["cclegacy"]["_RF"]['push']({}, "b6888fWpDVDrLQN/2uq7exW", "PrizeNotify", void 0x0);
var _0x34254c,
  _0xe57ca = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"];
!function (_0x43a77f) {
  _0x43a77f["BIG"] = "big", _0x43a77f['SUPER'] = 'super', _0x43a77f["MEGA"] = "mega", _0x43a77f["ULTRA"] = "ultra", _0x43a77f["LEGEND"] = "legend", _0x43a77f["MINI"] = "mini", _0x43a77f['MINOR'] = "minor", _0x43a77f["MAJOR"] = "major", _0x43a77f["GRAND"] = "grand";
}(_0x34254c || (_0x34254c = {}));
__publish("PrizeNotify", (_0x2a8513 = _0xe57ca("PrizeNotify"), _0x430a43 = (0, __dependency_5["inject"])("content/icon", __dependency_1["Node"]), _0x5f2bb3 = (0, __dependency_5["inject"])('content/richText', __dependency_1["RichText"]), _0x4c823e = (0, __dependency_5["inject"])("content/hitArea", __dependency_1["Node"]), _0x2a8513((_0x53f77a = (0, __dependency_0["applyDecoratedDescriptor"])((_0x37088d = function (_0x411a1c) {
  function _0x50433d() {
    for (var _0x4a1b3f, _0xcfbd36 = arguments["length"], _0x52b6d0 = new Array(_0xcfbd36), _0x122aff = 0x0; _0x122aff < _0xcfbd36; _0x122aff++) _0x52b6d0[_0x122aff] = arguments[_0x122aff];
    return _0x4a1b3f = Reflect.construct(_0x411a1c, [this]["concat"](_0x52b6d0).slice(1), new.target || _0x50433d) || this, (0, __dependency_0["initializerDefineProperty"])(_0x4a1b3f, "icon", _0x53f77a, (0, __dependency_0["assertThisInitialized"])(_0x4a1b3f)), (0, __dependency_0["initializerDefineProperty"])(_0x4a1b3f, 'richText', _0x5eeb39, (0, __dependency_0["assertThisInitialized"])(_0x4a1b3f)), (0, __dependency_0["initializerDefineProperty"])(_0x4a1b3f, "hitArea", _0x26f651, (0, __dependency_0["assertThisInitialized"])(_0x4a1b3f)), _0x4a1b3f["msgQueue"] = new __dependency_4["default"](), _0x4a1b3f["tween"] = null, _0x4a1b3f["prizeFileNameMap"] = new Map(), _0x4a1b3f;
  }
  (0, __dependency_0["inheritsLoose"])(_0x50433d, _0x411a1c);
  var _0x21d5bf = _0x50433d["prototype"];
  return _0x21d5bf["onLoad"] = function () {
    _0x411a1c["prototype"]["onLoad"]["call"](this);
  }, _0x21d5bf['start'] = function () {
    this["init"]();
  }, _0x21d5bf["onDestroy"] = function () {
    _0x411a1c['prototype']['onDestroy']['call'](this);
  }, _0x21d5bf["init"] = function () {
    this['hide'](), this["msgQueue"] = new __dependency_4["default"](), this["initPrizeFileNameMap"]();
  }, _0x21d5bf["test"] = function () {
    for (var _0x5e6190 = 0x0; _0x5e6190 < 0xa; _0x5e6190++) {
      var _0x48c971 = {
        'data': {
          'text': '恭喜玩家rsgtest00016在戰神塞特獲得Grand彩金42,332,176.01',
          'html': '<span>恭喜</span><span\x20class=\x27notify-win-username\x27>玩家rsgtest00016</span><br><span>在</span><span\x20class=\x27notify-win-game\x27>[戰神塞特]</span><br><span>获得</span>Grand<span\x20class=\x27notify-win-prize\x27>42,332,176.01</span><span>彩金</span>',
          'game': "戰神塞特",
          'player': "JOJO_" + _0x5e6190,
          'win': "42,332,176.01",
          'winType': "jp-grand"
        },
        'expiredAt': 0x18aefb2c145,
        'shiftTime': 0x3,
        'type': "jp-grand"
      };
      dispatch(__dependency_7["SlotFrameworkEvent"]["NOTIFY_PRIZE_RESPONSE"], {
        'data': _0x48c971
      });
    }
  }, _0x21d5bf["initPrizeFileNameMap"] = function () {
    var _0x167459 = this;
    [{
      'winType': __dependency_10["ENotifyWinTypes"]["BIG_WIN"],
      'file': _0x34254c["BIG"]
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]["SUPER_WIN"],
      'file': _0x34254c["SUPER"]
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]['MEGA_WIN'],
      'file': _0x34254c['MEGA']
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]["ULTRA_WIN"],
      'file': _0x34254c["ULTRA"]
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]["LEGENDARY_WIN"],
      'file': _0x34254c["LEGEND"]
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]["JP_MINI"],
      'file': _0x34254c["MINI"]
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]["JP_MINOR"],
      'file': _0x34254c["MINOR"]
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]['JP_MAJOR'],
      'file': _0x34254c["MAJOR"]
    }, {
      'winType': __dependency_10["ENotifyWinTypes"]["JP_GRAND"],
      'file': _0x34254c["GRAND"]
    }]["forEach"](function (_0x180720) {
      _0x167459["prizeFileNameMap"]["set"](_0x180720["winType"], _0x180720["file"]);
    });
  }, _0x21d5bf["setMessage"] = function (_0x274060) {
    var _0x586110 = _0x274060["player"],
      _0xcafffb = _0x274060["game"],
      _0x15f14b = _0x274060["gameCode"],
      _0x4528c1 = _0x274060['win'],
      _0x37ea11 = '',
      _0x5a50c1 = App['getLanguage'](_0x15f14b, [], __dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]]);
    null == _0x5a50c1 && (_0x5a50c1 = _0xcafffb);
    var _0x3805ae = App["getLanguage"]("notifyPrizeMsg", [_0x586110, _0x5a50c1, _0x4528c1], __dependency_2["EBundles"][__dependency_2["EBundles"]["wrapper"]]);
    if (_0x37ea11 = _0x37ea11["concat"](_0x3805ae), Log['d']("messageVO: ", _0x274060), null != (null == _0x274060 ? void 0x0 : _0x274060["roomNumber"])) {
      var _0x2780a7 = App["getLanguage"]('notifyAtSomeTable', [null == _0x274060 ? void 0x0 : _0x274060["roomNumber"]], __dependency_2["EBundles"][__dependency_2["EBundles"]["wrapper"]]);
      _0x37ea11 = _0x37ea11["concat"]("<br/>", _0x2780a7);
    }
    this["richText"]["string"] = _0x37ea11;
  }, _0x21d5bf["setIcon"] = function (_0x4606cd) {
    var _0x25d592 = this["prizeFileNameMap"]["get"](_0x4606cd),
      _0x126b55 = this['data']["getData"]()["filePaths"]["prizeNotifySp"],
      _0x25bbda = __dependency_12["LoadUtils"]["getDirSp"](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], _0x126b55, _0x25d592);
    this["icon"]["getComponent"](__dependency_1["Sprite"])['spriteFrame'] = _0x25bbda;
  }, _0x21d5bf["playPrize"] = function (_0x4a98d3) {
    var _0x432be5 = this;
    if (!this['msgQueue']['isEmpty']() && null === this["tween"]) {
      var _0x852d99 = this["msgQueue"]["dequeue"]();
      this["setIcon"](_0x852d99["winType"]), this["node"]['active'] = !0x0, this["node"]["getComponent"](__dependency_1['UIOpacity'])['opacity'] = 0x0, this["tween"] = (0, __dependency_1["tween"])(this["node"]["getComponent"](__dependency_1['UIOpacity']))["call"](function () {
        _0x432be5["setMessage"](_0x852d99), _0x432be5["hitArea"]['on'](__dependency_1["Node"]['EventType']['TOUCH_END'], function () {
          if (null != _0x852d99["replayUrl"]) {
            var _0x148df6 = __dependency_13["default"]["getParam"]('gn', _0x852d99["replayUrl"]);
            if (_0x148df6 === __dependency_9["default"]["searchParams"]['gn']) {
              if (!_0x432be5['isSpining']() && _0x852d99 && _0x852d99["replayUrl"]) {
                var _0x33a952 = __dependency_13["default"]["getHostname"](),
                  _0x3e3c66 = new URL(_0x852d99["replayUrl"]),
                  _0x31bc65 = _0x3e3c66["searchParams"]["get"]("view_mode"),
                  _0x317669 = __dependency_13["default"]['getViewModeParam']();
                _0x31bc65 !== _0x317669 && _0x3e3c66["searchParams"]['set']("view_mode", _0x317669);
                var _0x158020 = {
                  'text': App["getLanguage"]('replayTitle', [], __dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]]),
                  'confirmCb': function (_0x4a55b3) {
                    App['globalAudio']["pauseMusic"](), _0x3e3c66['hostname'] = _0x33a952, _0x852d99['replayUrl'] = _0x3e3c66["toString"]();
                    var _0x24d18d = __dependency_8["default"]['getData'](),
                      _0x54269a = _0x24d18d["disableRotate"],
                      _0x47b986 = void 0x0 !== _0x54269a && _0x54269a,
                      _0x2a53a6 = _0x24d18d['hideUserInfo'],
                      _0xd921c1 = void 0x0 !== _0x2a53a6 && _0x2a53a6;
                    0x1 == _0x47b986 && (_0x852d99['replayUrl'] = _0x852d99["replayUrl"] + '&disableRotate=true'), 0x1 == _0xd921c1 && (_0x852d99["replayUrl"] = _0x852d99['replayUrl'] + "&hideUserInfo=true"), _0x432be5["redirectTo"](_0x852d99["replayUrl"]), dispatch(__dependency_7["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
                  },
                  'cancelCb': function (_0x1de587) {},
                  'bbrCb': function (_0x11fc3c) {}
                };
                App["gameAlert"]["show"](_0x158020);
              }
            } else Log['e']('目前只能重播自己的遊戲:::::', _0x148df6, __dependency_9["default"]["searchParams"]['gn']);
          } else Log['e']("replay url is undefined");
        }, _0x432be5);
      })['to'](0.5, {
        'opacity': 0xff
      })['delay'](_0x4a98d3)['to'](0.5, {
        'opacity': 0x0
      })["call"](function () {
        _0x432be5["hitArea"]["targetOff"](_0x432be5), __dependency_1["Tween"]['stopAllByTarget'](_0x432be5['node']["getComponent"](__dependency_1['UIOpacity'])), _0x432be5["node"]["active"] = !0x1, _0x432be5["msgQueue"]["isEmpty"]() ? _0x432be5["tween"] = null : (0, __dependency_1["tween"])(_0x432be5)["delay"](0.01)['call'](function () {
          _0x432be5["tween"] = null, _0x432be5["playPrize"](_0x4a98d3);
        })["start"]();
      })["start"]();
    }
  }, _0x21d5bf["isSpining"] = function () {
    return App["dataCenter"]["get"](__dependency_6["default"])["getData"]()["spinStatus"] === __dependency_11["ESpinStatus"]["SPINING"];
  }, _0x21d5bf['redirectTo'] = function (_0x4dfc40) {
    window['location']["href"] = _0x4dfc40;
  }, _0x21d5bf["reset"] = function () {}, _0x21d5bf['setData'] = function (_0x1b645b) {}, _0x21d5bf["show"] = function () {
    this["node"]['active'] = !0x0;
  }, _0x21d5bf["hide"] = function () {
    this["node"]['active'] = !0x1;
  }, _0x21d5bf['addEvents'] = function () {
    var _0x210635 = this;
    _0x411a1c["prototype"]["addEvents"]["call"](this), this['on'](__dependency_7["SlotFrameworkEvent"]['NOTIFY_PRIZE_RESPONSE'], function (_0x145256) {
      var _0x3036a4 = _0x145256['data'],
        _0x25981d = _0x3036a4['shiftTime'],
        _0x13bb5c = _0x3036a4["data"],
        _0x365529 = _0x3036a4["replayUrl"],
        _0x56b793 = _0x13bb5c["winType"];
      if (Object["values"](__dependency_10["ENotifyWinTypes"])['includes'](_0x56b793)) {
        if (!(_0x210635["msgQueue"]["size"]() > 0x64)) {
          var _0x1473f1 = (0, __dependency_0["extends"])({}, _0x13bb5c, {
            'replayUrl': _0x365529
          });
          _0x210635["msgQueue"]["enqueue"](_0x1473f1), "hades" != __dependency_9["default"]["searchParams"]['gn'] && null === _0x210635["tween"] && _0x210635['playPrize'](_0x25981d);
        }
      } else Log['w']("warn: 大獎通知資料異常", __dependency_10["ENotifyWinTypes"], _0x56b793, _0x13bb5c);
    });
  }, (0, __dependency_0['createClass'])(_0x50433d, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_6["default"]);
    }
  }]), _0x50433d;
}(__dependency_3["default"]))["prototype"], "icon", [_0x430a43], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5eeb39 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x37088d['prototype'], 'richText', [_0x5f2bb3], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x26f651 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x37088d["prototype"], "hitArea", [_0x4c823e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4bfd12 = _0x37088d)) || _0x4bfd12));
__dependency_1["cclegacy"]["_RF"]['pop']();
