// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-Marquee.ts.js
// SHA256: 05cd6dd12d1c42b9d85f9e2c6bae495512d7dfe4e8f6e42cdf676de68d3c3707
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Queue";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-SlotFrameworkData";
import * as __dependency_7 from "./framework-SlotFrameworkEvent";
import * as __dependency_8 from "./framework-PlatformModel";
import * as __dependency_9 from "./framework-ReplayModel";
import * as __dependency_10 from "./framework-UrlModel";
import * as __dependency_11 from "./framework-res-type2";
import * as __dependency_12 from "./framework-type2";
import * as __dependency_13 from "./framework-MarqueeItem";
import * as __dependency_14 from "./main-UrlUtils";
var __export_0;
export { __export_0 as Marquee };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Marquee":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x1acfcb) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x3bbc96) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x1fec37) {
  void 0;
})(__dependency_2);
(function (_0x316a98) {
  void 0;
})(__dependency_3);
(function (_0x21542e) {
  void 0;
})(__dependency_4);
(function (_0x4f544a) {
  void 0;
})(__dependency_5);
(function (_0xf2efbd) {
  void 0;
})(__dependency_6);
(function (_0x1cf149) {
  void 0;
})(__dependency_7);
(function (_0x2e29d0) {
  void 0;
})(__dependency_8);
(function (_0x2a3d39) {
  void 0;
})(__dependency_9);
(function (_0x3dcca8) {
  void 0;
})(__dependency_10);
(function (_0x13c720) {
  void 0;
})(__dependency_11);
(function (_0x399f30) {
  void 0;
})(__dependency_12);
(function (_0x1fe4c9) {
  void 0;
})(__dependency_13);
(function (_0x3d61df) {
  void 0;
})(__dependency_14);
var _0x4337eb, _0x2dfec9, _0x21903f, _0x159dfa, _0x25bcbb;
__dependency_1['cclegacy']["_RF"]['push']({}, "db544LlkjJGYYtTKks29ac+", "Marquee", void 0x0);
var _0x9b1d8 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]["property"], __publish("Marquee", (_0x4337eb = _0x9b1d8("Marquee"), _0x2dfec9 = (0, __dependency_5["inject"])("content/msgContent", __dependency_1['Node']), _0x4337eb((_0x25bcbb = (0, __dependency_0["applyDecoratedDescriptor"])((_0x159dfa = function (_0x1ee327) {
  function _0x5c554f() {
    for (var _0x1546fe, _0x82546c = arguments["length"], _0x56a1bf = new Array(_0x82546c), _0x24d7eb = 0x0; _0x24d7eb < _0x82546c; _0x24d7eb++) _0x56a1bf[_0x24d7eb] = arguments[_0x24d7eb];
    return _0x1546fe = Reflect.construct(_0x1ee327, [this]['concat'](_0x56a1bf).slice(1), new.target || _0x5c554f) || this, (0, __dependency_0["initializerDefineProperty"])(_0x1546fe, "msgContent", _0x25bcbb, (0, __dependency_0["assertThisInitialized"])(_0x1546fe)), _0x1546fe['taskQueue'] = void 0x0, _0x1546fe["tempTweenArray"] = [], _0x1546fe["MARQUEE_SPEED"] = 0x64, _0x1546fe['MARQUEE_DELAY_FACTOR'] = 1.5, _0x1546fe["ITEM_OFFSET_Y"] = 0x3, _0x1546fe["announcementMap"] = new Map(), _0x1546fe;
  }
  (0, __dependency_0['inheritsLoose'])(_0x5c554f, _0x1ee327);
  var _0x36748d = _0x5c554f["prototype"];
  return _0x36748d["onLoad"] = function () {
    _0x1ee327["prototype"]["onLoad"]["call"](this);
  }, _0x36748d["start"] = function () {
    this["init"]();
  }, _0x36748d['onDestroy'] = function () {
    _0x1ee327['prototype']["onDestroy"]['call'](this);
  }, _0x36748d["init"] = function () {
    this["hide"](), this["taskQueue"] = new __dependency_4["default"](), this["createMarqueePool"]();
  }, _0x36748d['test'] = function () {
    for (var _0x2e5af9 = 0x0; _0x2e5af9 < 0xa; _0x2e5af9++) {
      dispatch(__dependency_7['SlotFrameworkEvent']["NOTIFY_SYSTEM_RESPONSE"], {
        'data': {
          'data': {
            'html': '<span\x20class=\x22news-notify\x20news\x22>test</span><span\x20class=\x22news-notify\x20news\x22>test2</span>',
            'text': "test"
          },
          'expiredAt': 0x1907bfb81e1,
          'shiftTime': 0x3,
          'type': 'system'
        }
      });
    }
  }, _0x36748d['createMarqueePool'] = function () {
    for (var _0x29ff16 = this["data"]['getData']()["filePaths"]["marqueeItemPrefab"], _0x3bef6d = App['cache']["get"](__dependency_2["EBundles"][__dependency_2["EBundles"]['slotFramework']], _0x29ff16)["data"], _0x339d94 = App["pool"]["getPool"]("MARQUEE_POOL"), _0x1450fc = 0x0; _0x1450fc < 0xa; _0x1450fc++) {
      var _0x9efd4c = (0, __dependency_1["instantiate"])(_0x3bef6d);
      _0x339d94['cloneNode'] = _0x9efd4c, _0x339d94["put"](_0x9efd4c);
    }
  }, _0x36748d["createLabel"] = function (_0x1a01e6) {
    var _0x79e8e9 = this,
      _0x917785 = App["pool"]["getPool"]("MARQUEE_POOL")["get"]();
    return _0x917785["getComponent"](__dependency_13["MarqueeItem"])["setMessage"](_0x1a01e6), _0x917785['on'](__dependency_1['Node']['EventType']["TOUCH_END"], function () {
      if (null != _0x1a01e6['replayUrl']) {
        var _0x56e999 = __dependency_14['default']["getParam"]('gn', _0x1a01e6["replayUrl"]);
        if (_0x56e999 === __dependency_10["default"]["searchParams"]['gn']) {
          if (!_0x79e8e9["isSpining"]() && _0x1a01e6 && _0x1a01e6['replayUrl']) {
            var _0x567524 = __dependency_14['default']["getHostname"](),
              _0x424719 = new URL(_0x1a01e6['replayUrl']),
              _0x1dae56 = {
                'text': App["getLanguage"]('replayTitle', [], __dependency_2["EBundles"][__dependency_2["EBundles"]['slotFramework']]),
                'confirmCb': function (_0x1154ca) {
                  App["globalAudio"]['pauseMusic'](), _0x424719["hostname"] = _0x567524;
                  var _0x772b27 = _0x424719['searchParams']["get"]("view_mode"),
                    _0x4675bb = __dependency_14['default']["getViewModeParam"]();
                  _0x772b27 !== _0x4675bb && _0x424719["searchParams"]['set']('view_mode', _0x4675bb), _0x1a01e6['replayUrl'] = _0x424719["toString"]();
                  var _0x304869 = __dependency_8["default"]["getData"](),
                    _0x4d5c5f = _0x304869['disableRotate'],
                    _0x476f05 = void 0x0 !== _0x4d5c5f && _0x4d5c5f,
                    _0x3fca5a = _0x304869["hideUserInfo"],
                    _0x39c415 = void 0x0 !== _0x3fca5a && _0x3fca5a;
                  0x1 == _0x476f05 && (_0x1a01e6["replayUrl"] = _0x1a01e6["replayUrl"] + "&disableRotate=true"), 0x1 == _0x39c415 && (_0x1a01e6["replayUrl"] = _0x1a01e6["replayUrl"] + "&hideUserInfo=true"), _0x79e8e9["redirectTo"](_0x1a01e6["replayUrl"]), dispatch(__dependency_7['SlotFrameworkEvent']["PLAY_CLICK_BTM"]);
                },
                'cancelCb': function (_0x31166f) {},
                'bbrCb': function (_0x2db0bc) {}
              };
            App["gameAlert"]["show"](_0x1dae56);
          }
        } else Log['e']("目前只能重播自己的遊戲:::::", _0x56e999, __dependency_10["default"]['searchParams']['gn']);
      } else Log['e']("replay url is undefined");
    }, _0x917785["getComponent"](__dependency_13["MarqueeItem"])), _0x917785["setParent"](this["msgContent"]), _0x917785;
  }, _0x36748d["playMarqueeAnim"] = function () {
    var _0x2db1df = this;
    if (0x0 === this["tempTweenArray"]["length"] && !this["taskQueue"]["isEmpty"]()) {
      this["show"]();
      var _0x5bf9dc = this["taskQueue"]["dequeue"](),
        _0x279de8 = this['createLabel'](_0x5bf9dc),
        _0x217eb2 = _0x279de8['getComponent'](__dependency_1["UITransform"]),
        _0x2e0f5c = this["msgContent"]['getComponent'](__dependency_1["UITransform"]);
      _0x279de8["setPosition"](_0x2e0f5c["width"] / 0x2, this["ITEM_OFFSET_Y"]);
      var _0x190399 = (_0x2e0f5c["width"] + _0x217eb2['width'] * this["MARQUEE_DELAY_FACTOR"]) / this["MARQUEE_SPEED"],
        _0x488f49 = (0, __dependency_1['tween'])(_0x279de8)['to'](_0x190399, {
          'position': (0, __dependency_1['v3'])(-_0x2e0f5c["width"] / 0x2 + -_0x217eb2["width"] * this["MARQUEE_DELAY_FACTOR"], this["ITEM_OFFSET_Y"], 0x0)
        })['call'](function () {
          _0x279de8["getComponent"](__dependency_13["MarqueeItem"])["reset"](), App['pool']['getPool']("MARQUEE_POOL")['put'](_0x279de8), 0x0 === _0x2db1df["msgContent"]['children']["length"] && _0x2db1df['hide'](), null != _0x5bf9dc['id'] && _0x2db1df["announcementMap"]["get"](_0x5bf9dc['id']) && _0x2db1df["announcementMap"]["delete"](_0x5bf9dc['id']);
        })["start"]();
      this["tempTweenArray"]['push'](_0x488f49), this['scheduleOnce'](function () {
        var _0x352e56 = _0x217eb2['width'] / _0x2db1df['MARQUEE_SPEED'];
        _0x2db1df["scheduleOnce"](function () {
          _0x2db1df["tempTweenArray"]["pop"](), _0x2db1df["playMarqueeAnim"]();
        }, _0x352e56 + 0.5);
      });
    }
  }, _0x36748d["isSpining"] = function () {
    return App["dataCenter"]["get"](__dependency_6['default'])["getData"]()["spinStatus"] === __dependency_12["ESpinStatus"]["SPINING"];
  }, _0x36748d["redirectTo"] = function (_0x5ce18e) {
    window["location"]["href"] = _0x5ce18e;
  }, _0x36748d["reset"] = function () {}, _0x36748d["setData"] = function (_0xdfe46b) {}, _0x36748d['show'] = function () {
    this['node']["active"] = !0x0;
  }, _0x36748d["hide"] = function () {
    this["node"]["active"] = !0x1;
  }, _0x36748d['addEvents'] = function () {
    var _0x46a895 = this;
    _0x1ee327["prototype"]['addEvents']["call"](this), this['on'](__dependency_7['SlotFrameworkEvent']['NOTIFY_SYSTEM_RESPONSE'], function (_0x5af237) {
      if (!__dependency_9['default']["isReplay"] && _0x46a895["taskQueue"]) {
        var _0x513838 = _0x5af237["data"],
          _0x5a9d89 = _0x513838['data'],
          _0x2d0da9 = _0x513838["replayUrl"];
        if (!(_0x46a895["taskQueue"]["size"]() > 0x64)) {
          var _0x2425ce = (0, __dependency_0['extends'])({}, _0x5a9d89, {
            'replayUrl': _0x2d0da9
          });
          if (_0x5a9d89['winType']) {
            if (!Object['values'](__dependency_11['ENotifyWinTypes'])["includes"](_0x5a9d89["winType"])) return;
            _0x46a895['taskQueue']["enqueue"](_0x2425ce), _0x46a895["playMarqueeAnim"]();
          } else {
            if (_0x5a9d89['id'] && _0x46a895['announcementMap']["get"](_0x5a9d89['id'])) return;
            var _0x354f61 = _0x2425ce["text"],
              _0x391f0b = [];
            _0x354f61 && (_0x391f0b = _0x354f61["split"]('|'));
            for (var _0x903633 = 0x0; _0x903633 < _0x391f0b["length"]; _0x903633++) if ('' != _0x391f0b[_0x903633]) {
              var _0x56cf2c = {
                'game': _0x2425ce["game"],
                'player': _0x2425ce["player"],
                'win': _0x2425ce["win"],
                'winType': _0x2425ce["winType"],
                'roomNumber': _0x2425ce["roomNumber"],
                'replayUrl': _0x2425ce["replayUrl"],
                'gameCode': _0x2425ce["gameCode"],
                'text': _0x391f0b[_0x903633],
                'id': _0x5a9d89['id']
              };
              _0x46a895['taskQueue']["enqueue"](_0x56cf2c);
            }
            if ('' == _0x5a9d89["text"]) return;
            _0x46a895['announcementMap']["set"](_0x5a9d89['id'], _0x5a9d89), _0x46a895["playMarqueeAnim"]();
          }
        }
      }
    });
  }, (0, __dependency_0["createClass"])(_0x5c554f, [{
    'key': "data",
    'get': function () {
      return App["dataCenter"]["get"](__dependency_6['default']);
    }
  }]), _0x5c554f;
}(__dependency_3["default"]))["prototype"], "msgContent", [_0x2dfec9], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x21903f = _0x159dfa)) || _0x21903f));
__dependency_1['cclegacy']["_RF"]["pop"]();
