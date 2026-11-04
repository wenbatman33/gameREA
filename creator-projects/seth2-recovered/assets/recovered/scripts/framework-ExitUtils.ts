// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-ExitUtils.ts.js
// SHA256: ddde249c7981f5a73641f05f0471560f2520cf00c6da99c2726928ca10ac43a9
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./framework-UrlUtils2";
import * as __dependency_2 from "./main-CmmUtils";
import * as __dependency_3 from "./framework-InitialModel";
var __export_0;
export { __export_0 as EClientTypes };
var __export_1;
export { __export_1 as ExitUtils };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EClientTypes":
      __export_0 = value;
      break;
    case "ExitUtils":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x47622c) {
  void 0;
})(__dependency_0);
(function (_0x24ed2b) {
  void 0;
})(__dependency_1);
(function (_0x1ffb3d) {
  void 0;
})(__dependency_2);
(function (_0x300ab4) {
  void 0;
})(__dependency_3);
var _0x43a38b;
__publish("EClientTypes", void 0x0), __dependency_0["cclegacy"]["_RF"]['push']({}, 'c25f9RY6O1CGaE/8HBnBB+O', "ExitUtils", void 0x0), function (_0x4900a2) {
  _0x4900a2["WEB"] = "web", _0x4900a2["WAP"] = "wap", _0x4900a2["ANDROID"] = "android", _0x4900a2["IOS"] = 'ios', _0x4900a2['RN'] = 'rn', _0x4900a2["UNITY_WEBVIEW"] = 'uniWebView';
}(_0x43a38b || (_0x43a38b = __publish("EClientTypes", {}))), __publish("ExitUtils", function () {
  function _0x326df0() {}
  return _0x326df0["exit"] = function () {
    var _0x54d731 = __dependency_2['CmmUtils']["getClientType"](),
      _0x338349 = this["getGoBackUrl"]();
    if (_0x338349) this["exitWeb"](_0x338349);else switch (this["_window"]["close"](), _0x54d731) {
      case _0x43a38b['WEB']:
      case _0x43a38b['WAP']:
        this['exitWeb']();
        break;
      case _0x43a38b["ANDROID"]:
        this["exitWVJB"](), this["exitAndroid"]();
        break;
      case _0x43a38b["IOS"]:
        this["exitWVJB"](), this['exitIOS']();
        break;
      case _0x43a38b['RN']:
        this["exitRN"]();
        break;
      case _0x43a38b['UNITY_WEBVIEW']:
        window["location"]["href"] = "uniwebview://exit";
        break;
      default:
        this["exitWeb"]();
    }
  }, _0x326df0["getGoBackUrl"] = function () {
    var _0x233e24,
      _0x39a585 = __dependency_1["default"]['getParam']('goback_url'),
      _0x1e65c1 = null == (_0x233e24 = __dependency_3["default"]["getData"]()) ? void 0x0 : _0x233e24['lobbyUrl'];
    return _0x1e65c1 && function (_0x19cad0) {
      var _0x540e36 = new URL(_0x19cad0),
        _0x408790 = Number(_0x540e36['searchParams']["get"]('ts'));
      return new Date()["getTime"]() - _0x408790 < 0x0;
    }(_0x1e65c1) && (_0x39a585 = _0x1e65c1), _0x39a585;
  }, _0x326df0["exitWeb"] = function (_0x2417c4) {
    var _0x403dd1 = this;
    _0x2417c4 && (this["_window"]["location"]["href"] = _0x2417c4);
    var _0x9e9f69 = 'error.html',
      _0x10637e = this["_window"]["location"]["href"],
      _0x4e2a34 = new URL(_0x10637e)['searchParams']["get"]('l');
    _0x4e2a34 && (_0x9e9f69 += "?l=" + encodeURIComponent(_0x4e2a34)), setTimeout(function () {
      window["close"](), _0x403dd1["_window"]["open"](_0x9e9f69, "_self"), _0x403dd1["_window"]["close"]();
    }, 0x3e8);
  }, _0x326df0['webClose'] = function () {
    if (this["_window"]['navigator']["appName"]["indexOf"]("Explorer") < 0x0) {
      var _0x4810f1 = navigator['userAgent']["indexOf"]("MSIE") + 0x5,
        _0x4c0ad1 = Number(navigator["userAgent"]["substring"](_0x4810f1, _0x4810f1 + 0x1));
      _0x4c0ad1 >= 0x7 ? (this['_window']["open"]('', "_self", ''), this["_window"]['close']()) : 0x6 == _0x4c0ad1 ? (this['_window']["opener"] = null, this["_window"]["close"]()) : (this['_window']["opener"] = '', this["_window"]['close']());
    } else {
      var _0x301551 = this["_window"]["location"]["href"];
      this["_window"]["open"](_0x301551, "_self")["close"]();
    }
  }, _0x326df0["exitWVJB"] = function () {
    var _0x390b99 = (this["_window"] || {})["WebViewJavascriptBridge"];
    _0x390b99 && (_0x390b99["callHandler"]("UnityBack", {
      'message': "back"
    }, function (_0x52685d) {}), _0x390b99["callHandler"]("TwGameBack", {
      'message': "back"
    }, function (_0x3efc86) {}));
  }, _0x326df0["exitAndroid"] = function () {
    var _0x7503a4 = (this["_window"] || {})["androidFunc"];
    null == _0x7503a4 || null == _0x7503a4["finish"] || _0x7503a4["finish"]();
  }, _0x326df0["exitRN"] = function () {
    var _0x1ce04b;
    null == (_0x1ce04b = this["_window"]) || null == _0x1ce04b["postMessage"] || _0x1ce04b["postMessage"](JSON["stringify"]({
      'type': "iosback"
    }));
  }, _0x326df0['exitIOS'] = function () {
    var _0x9baef5 = (this["_window"] || {})['webkit'];
    if (null != _0x9baef5 && _0x9baef5["messageHandlers"]) {
      var _0x4e5c3b,
        _0x31981c,
        _0x518b94 = _0x9baef5['messageHandlers'];
      if (null != (_0x4e5c3b = _0x518b94["TwGameBack"]) && _0x4e5c3b["postMessage"]) return _0x518b94["TwGameBack"]["postMessage"]({
        'action': "exit"
      });
      if (null != (_0x31981c = _0x518b94["UnityBack"]) && _0x31981c["postMessage"]) return _0x518b94["UnityBack"]["postMessage"]({
        'action': "exit"
      });
    }
  }, _0x326df0["replayExitWeb"] = function (_0x463d0c) {
    var _0x23b769 = this;
    _0x463d0c && (this["_window"]['location']["href"] = _0x463d0c), setTimeout(function () {
      window["close"](), _0x23b769["_window"]['open']("error.html", "_self"), _0x23b769['_window']["close"](), console["error"]('replayExitWeb\x20error.html');
    }, 0x3e8);
  }, _0x326df0;
}())['_window'] = window, __dependency_0["cclegacy"]['_RF']["pop"]();
