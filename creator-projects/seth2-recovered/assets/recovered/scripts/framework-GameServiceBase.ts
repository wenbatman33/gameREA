// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-GameServiceBase.ts.js
// SHA256: f8ff8722bb08cb340574258e4ca6adab8c3729eb72c2c66e1e43b03c6d27b84b
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./main-CommonService";
import * as __dependency_4 from "./framework-SlotFrameworkEvent";
import * as __dependency_5 from "./framework-GameStateModel";
import * as __dependency_6 from "./framework-SocketModel";
import * as __dependency_7 from "./framework-UrlModel";
import * as __dependency_8 from "./framework-type2";
import * as __dependency_9 from "./framework-ExitUtils";
import * as __dependency_10 from "./framework-CryptoTool";
var __export_0;
export { __export_0 as GameServiceBase };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "GameServiceBase":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x101e49) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0xdf570a) {
  void 0;
})(__dependency_1);
(function (_0x2720a1) {
  void 0;
})(__dependency_2);
(function (_0x270b2e) {
  void 0;
})(__dependency_3);
(function (_0x566e48) {
  void 0;
})(__dependency_4);
(function (_0x1a88d4) {
  void 0;
})(__dependency_5);
(function (_0x550a54) {
  void 0;
})(__dependency_6);
(function (_0x1d5f17) {
  void 0;
})(__dependency_7);
(function (_0x26c3cc) {
  void 0, void 0;
})(__dependency_8);
(function (_0x1d16fa) {
  void 0;
})(__dependency_9);
(function (_0x3920ea) {
  void 0;
})(__dependency_10);
__dependency_1["cclegacy"]["_RF"]["push"]({}, "c1c33c7fltGsa/KKjg+HxxA", "GameServiceBase", void 0x0);
__publish("GameServiceBase", function (_0x36998c) {
  function _0x516694() {
    var _0x5b9b66;
    return (_0x5b9b66 = Reflect.construct(_0x36998c, [], new.target || _0x516694) || this)["clientType"] = "socketIO", _0x5b9b66['url'] = __dependency_7["default"]["socket_url"], _0x5b9b66['EXCLUDE_CURRENT_EVENT'] = [__dependency_8["ESocketRequestName"]["UPDATE_SETTINGS"], __dependency_8["ESocketRequestName"]["UPDATE_AVATAR"], __dependency_8["ESocketRequestName"]['EXTENSION']], _0x5b9b66["EXCLUDE_STATE_500"] = [__dependency_8["ESocketRequestName"]["EXTENSION"]], _0x5b9b66['eventMap'] = new Map(), _0x5b9b66["handshakeSent"] = !0x1, _0x5b9b66["init"](), _0x5b9b66;
  }
  (0, __dependency_0["inheritsLoose"])(_0x516694, _0x36998c);
  var _0x103a51 = _0x516694["prototype"];
  return _0x103a51["onOpen"] = function (_0x5b68e9) {
    _0x36998c["prototype"]["onOpen"]["call"](this, _0x5b68e9), this["handshakeSent"] = !0x1, this["addSocketListeners"](), dispatch(__dependency_4["SlotFrameworkEvent"]["WRAPPER_SERVICE_CONNECTED"], this);
  }, _0x103a51["onClose"] = function (_0x3c677b) {
    _0x36998c["prototype"]["onClose"]["call"](this, _0x3c677b), __dependency_10["CryptoTool"]["clear"](), dispatch(__dependency_4["SlotFrameworkEvent"]["WRAPPER_SERVICE_CLOSE"], {
      'data': {
        'event': _0x3c677b,
        '_this': this
      }
    });
  }, _0x103a51["socketIOMessage"] = function () {
    var _0x40b6ea = (0, __dependency_0['asyncToGenerator'])((0, __dependency_0["regeneratorRuntime"])()["mark"](function _0x15966f(_0x420c1e, _0x1336bf, _0x407e23) {
      var _0x2293b9,
        _0x1a775e,
        _0x4f6140,
        _0x2f815c = this;
      return (0, __dependency_0["regeneratorRuntime"])()["wrap"](function (_0x2e5c6a) {
        for (;;) switch (_0x2e5c6a["prev"] = _0x2e5c6a["next"]) {
          case 0x0:
            if (!(this['eventMap']['size'] > 0x0)) {
              _0x2e5c6a["next"] = 0x7;
              break;
            }
            return _0x2293b9 = [], this["eventMap"]['forEach'](function (_0xf15331, _0x5cd4ec) {
              _0x2293b9['push'](_0x5cd4ec);
            }), Log['e']("error: " + _0x2293b9 + " 尚未回應，當前事件:" + _0x420c1e), __dependency_5["default"]["getData"]()['spinId'] && __dependency_5["default"]["getData"]()['spinId'], __dependency_8["EDebugLogLevel"]["ERROR"], __dependency_5["default"]["getData"](), _0x2e5c6a["abrupt"]("return");
          case 0x7:
            return _0x1336bf['request'] && delete _0x1336bf["request"], _0x1a775e = (0, __dependency_0["extends"])({}, _0x1336bf, {
              'token': __dependency_6["default"]["currentToken"],
              'locale': __dependency_7["default"]["getData"]()["searchParams"]['l']
            }), this["EXCLUDE_CURRENT_EVENT"]["includes"](_0x420c1e) || this["eventMap"]["set"](_0x420c1e, _0x1a775e), _0x2e5c6a["next"] = 0xd, this["buildPayload"](_0x1a775e);
          case 0xd:
            _0x4f6140 = _0x2e5c6a["sent"], this["emit"](_0x420c1e, _0x4f6140, (0, __dependency_0['asyncToGenerator'])((0, __dependency_0["regeneratorRuntime"])()["mark"](function _0x580127(_0x1a8fec) {
              var _0x4e6c68, _0x60e0c0, _0x5f1ee6, _0xe98cbc, _0x7118e6;
              return (0, __dependency_0["regeneratorRuntime"])()["wrap"](function (_0x4fbf01) {
                for (;;) switch (_0x4fbf01["prev"] = _0x4fbf01["next"]) {
                  case 0x0:
                    if (_0x2f815c['EXCLUDE_CURRENT_EVENT']['includes'](_0x420c1e)) {
                      _0x4fbf01["next"] = 0x3;
                      break;
                    }
                    if (_0x2f815c["eventMap"]["has"](_0x420c1e)) {
                      _0x4fbf01["next"] = 0x3;
                      break;
                    }
                    return _0x4fbf01["abrupt"]("return");
                  case 0x3:
                    return _0x4fbf01['next'] = 0x5, __dependency_10["CryptoTool"]["initKey"](__dependency_6["default"]['currentToken']);
                  case 0x5:
                    if ('string' != typeof _0x1a8fec) {
                      _0x4fbf01["next"] = 0x8;
                      break;
                    }
                    _0x4fbf01["next"] = 0x12;
                    break;
                  case 0x8:
                    if (!(_0x1a8fec instanceof ArrayBuffer)) {
                      _0x4fbf01["next"] = 0xe;
                      break;
                    }
                    return _0x4fbf01["next"] = 0xb, __dependency_10["CryptoTool"]["decrypt"](_0x1a8fec);
                  case 0xb:
                    _0x1a8fec = _0x4fbf01["sent"], _0x4fbf01["next"] = 0x12;
                    break;
                  case 0xe:
                    if (!(_0x1a8fec instanceof Uint8Array)) {
                      _0x4fbf01["next"] = 0x12;
                      break;
                    }
                    return _0x4fbf01["next"] = 0x11, __dependency_10["CryptoTool"]['decrypt'](_0x1a8fec);
                  case 0x11:
                    _0x1a8fec = _0x4fbf01["sent"];
                  case 0x12:
                    _0x1a8fec["zip"] && 0x1 == _0x1a8fec["zip"] && (_0x1a8fec["data"] ? _0x1a8fec = JSON["parse"](pako['inflate'](_0x1a8fec["data"], {
                      'to': "string"
                    })) : Log['e']('no\x20response\x20data::::::::::::::::', _0x1a8fec)), _0x60e0c0 = (_0x4e6c68 = _0x1a8fec)["status"], _0x5f1ee6 = _0x4e6c68["message"], _0xe98cbc = _0x4e6c68["code"], _0x7118e6 = _0x4e6c68["token"], 0x1f4 === _0x60e0c0 && (_0x2f815c["EXCLUDE_STATE_500"]["includes"](_0x420c1e) ? Log['e']("EXCLUDE_STATE_500::::::::::::::::", _0x420c1e) : _0x2f815c["showAlert"](_0x5f1ee6, {
                      'needCloseAlert': !0x1,
                      'code': _0xe98cbc
                    })), _0x2f815c["eventMap"]["delete"](_0x420c1e), _0x7118e6 && (__dependency_6["default"]["currentToken"] = _0x7118e6), _0x407e23 && _0x407e23(_0x1a8fec);
                  case 0x18:
                  case 'end':
                    return _0x4fbf01["stop"]();
                }
              }, _0x580127);
            })));
          case 0xf:
          case "end":
            return _0x2e5c6a['stop']();
        }
      }, _0x15966f, this);
    }));
    return function (_0x36ef60, _0x15d9fd, _0x46a923) {
      return _0x40b6ea['apply'](this, arguments);
    };
  }(), _0x103a51["socketIOMessageWithoutCheck"] = function () {
    var _0x472d57 = (0, __dependency_0['asyncToGenerator'])((0, __dependency_0["regeneratorRuntime"])()['mark'](function _0x2d2992(_0x14b8cf, _0x4ad273, _0x51d622) {
      var _0x1682cb,
        _0x372351,
        _0x3ca22f = this;
      return (0, __dependency_0["regeneratorRuntime"])()['wrap'](function (_0x2c662c) {
        for (;;) switch (_0x2c662c["prev"] = _0x2c662c["next"]) {
          case 0x0:
            return _0x4ad273["request"] && delete _0x4ad273["request"], _0x1682cb = (0, __dependency_0["extends"])({}, _0x4ad273, {
              'token': __dependency_6["default"]["currentToken"],
              'locale': __dependency_7["default"]["getData"]()['searchParams']['l']
            }), _0x2c662c["next"] = 0x4, this["buildPayload"](_0x1682cb);
          case 0x4:
            _0x372351 = _0x2c662c["sent"], this["emit"](_0x14b8cf, _0x372351, (0, __dependency_0['asyncToGenerator'])((0, __dependency_0["regeneratorRuntime"])()['mark'](function _0xee75f7(_0x689a3f) {
              var _0x2f0c75, _0x241ad8, _0x1002a8, _0x24a0cd, _0x162051;
              return (0, __dependency_0["regeneratorRuntime"])()["wrap"](function (_0xa048b1) {
                for (;;) switch (_0xa048b1["prev"] = _0xa048b1["next"]) {
                  case 0x0:
                    return _0xa048b1["next"] = 0x2, __dependency_10["CryptoTool"]["initKey"](__dependency_6["default"]["currentToken"]);
                  case 0x2:
                    if ('string' != typeof _0x689a3f) {
                      _0xa048b1["next"] = 0x5;
                      break;
                    }
                    _0xa048b1["next"] = 0xf;
                    break;
                  case 0x5:
                    if (!(_0x689a3f instanceof ArrayBuffer)) {
                      _0xa048b1['next'] = 0xb;
                      break;
                    }
                    return _0xa048b1["next"] = 0x8, __dependency_10["CryptoTool"]["decrypt"](_0x689a3f);
                  case 0x8:
                    _0x689a3f = _0xa048b1["sent"], _0xa048b1["next"] = 0xf;
                    break;
                  case 0xb:
                    if (!(_0x689a3f instanceof Uint8Array)) {
                      _0xa048b1["next"] = 0xf;
                      break;
                    }
                    return _0xa048b1["next"] = 0xe, __dependency_10["CryptoTool"]["decrypt"](_0x689a3f);
                  case 0xe:
                    _0x689a3f = _0xa048b1['sent'];
                  case 0xf:
                    _0x689a3f["zip"] && 0x1 == _0x689a3f['zip'] && (_0x689a3f["data"] ? _0x689a3f = JSON["parse"](pako["inflate"](_0x689a3f["data"], {
                      'to': "string"
                    })) : Log['e']("no response data::::::::::::::::", _0x689a3f)), _0x241ad8 = (_0x2f0c75 = _0x689a3f)["status"], _0x1002a8 = _0x2f0c75["message"], _0x24a0cd = _0x2f0c75["code"], _0x162051 = _0x2f0c75["token"], 0x1f4 === _0x241ad8 && (_0x3ca22f["EXCLUDE_STATE_500"]["includes"](_0x14b8cf) ? Log['e']("EXCLUDE_STATE_500::::::::::::::::", _0x14b8cf) : _0x3ca22f["showAlert"](_0x1002a8, {
                      'needCloseAlert': !0x1,
                      'code': _0x24a0cd
                    })), _0x162051 && (__dependency_6["default"]["currentToken"] = _0x162051), _0x51d622 && _0x51d622(_0x689a3f);
                  case 0x14:
                  case "end":
                    return _0xa048b1["stop"]();
                }
              }, _0xee75f7);
            })));
          case 0x6:
          case 'end':
            return _0x2c662c["stop"]();
        }
      }, _0x2d2992, this);
    }));
    return function (_0x19201a, _0x1664ff, _0x1b33ce) {
      return _0x472d57["apply"](this, arguments);
    };
  }(), _0x103a51["buildPayload"] = function () {
    var _0x6cb051 = (0, __dependency_0['asyncToGenerator'])((0, __dependency_0["regeneratorRuntime"])()["mark"](function _0x1c3d1f(_0x313a9c) {
      return (0, __dependency_0["regeneratorRuntime"])()["wrap"](function (_0x470e09) {
        for (;;) switch (_0x470e09['prev'] = _0x470e09["next"]) {
          case 0x0:
            if (this["handshakeSent"]) {
              _0x470e09["next"] = 0x5;
              break;
            }
            return _0x470e09["next"] = 0x3, __dependency_10["CryptoTool"]["ready"]();
          case 0x3:
            return this["handshakeSent"] = !0x0, _0x470e09["abrupt"]('return', (0, __dependency_0["extends"])({}, _0x313a9c, {
              'kid': __dependency_10["CryptoTool"]["kid"]
            }));
          case 0x5:
            return _0x470e09["abrupt"]("return", (0, __dependency_0["extends"])({}, _0x313a9c));
          case 0x6:
          case "end":
            return _0x470e09["stop"]();
        }
      }, _0x1c3d1f, this);
    }));
    return function (_0x30f127) {
      return _0x6cb051['apply'](this, arguments);
    };
  }(), _0x103a51["showAlert"] = function (_0xb0e035, _0x2a9ace) {
    var _0x445323 = {
        'text': _0xb0e035,
        'confirmCb': function () {
          _0x33f333(), dispatch(__dependency_4["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
        },
        'bbrCb': function () {
          dispatch(__dependency_4["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]);
        },
        'needCloseAlert': null == _0x2a9ace ? void 0x0 : _0x2a9ace["needCloseAlert"],
        'tag': __dependency_2["ViewZOrder"]["TopErrorAlert"],
        'code': null == _0x2a9ace ? void 0x0 : _0x2a9ace["code"]
      },
      _0x33f333 = function () {
        (null == _0x2a9ace ? void 0x0 : _0x2a9ace["callback"]) && _0x2a9ace["callback"](), __dependency_9["ExitUtils"]["exit"]();
      };
    App["gameAlert"]["show"](_0x445323, __dependency_2["ViewZOrder"]["TopErrorAlert"]);
  }, _0x103a51['addSocketListeners'] = function () {}, _0x516694;
}(__dependency_3["CommonService"]));
__dependency_1["cclegacy"]["_RF"]['pop']();
