// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-UrlModel.ts.js
// SHA256: dc02b4df20dc0f193dc5966f7e3b816b22babc37db40af687f726e508a2c24f9
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-env";
import * as __dependency_3 from "./main-BaseModel";
import * as __dependency_4 from "./framework-UrlUtils2";
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
(function (_0x40c373) {
  void 0, void 0;
})(__dependency_0);
(function (_0x4e0794) {
  void 0, void 0;
})(__dependency_1);
(function (_0x34e378) {
  void 0;
})(__dependency_2);
(function (_0x6518c9) {
  void 0;
})(__dependency_3);
(function (_0x4bc574) {
  void 0;
})(__dependency_4);
__dependency_1["cclegacy"]["_RF"]['push']({}, "6dd8fCAZ6xLaL/QZ37w0QYU", "UrlModel", void 0x0);
var _0x4046ca = function (_0x5aeb1a) {
  function _0x447fd6() {
    var _0x5730a1;
    return (_0x5730a1 = Reflect.construct(_0x5aeb1a, [], new.target || _0x447fd6) || this)["data"] = {
      'base_api': '',
      'base_url': '',
      'socket_url': '',
      'searchParams': null
    }, _0x5730a1;
  }
  (0, __dependency_0["inheritsLoose"])(_0x447fd6, _0x5aeb1a), _0x447fd6["Instance"] = function () {
    return this["_instance"] || (this["_instance"] = new _0x447fd6());
  };
  var _0x1d7a38 = _0x447fd6["prototype"];
  return _0x1d7a38['init'] = function () {
    var _0x172c6d = new URL(window['location']["href"])['hostname'];
    this["data"]["base_url"] = "localhost" === _0x172c6d ? __dependency_2["ENV"]["local"]["baseUrl"] : __dependency_4["default"]["getBaseUrl"]();
  }, _0x1d7a38["getData"] = function () {
    return this["data"];
  }, _0x1d7a38["setSearchParams"] = function () {
    if (!__dependency_1["sys"]["isNative"]) {
      this["init"](), this["data"]["searchParams"] = {
        't': __dependency_4["default"]["getParam"]('t'),
        'gn': __dependency_4["default"]["getParam"]('gn'),
        'l': this["getLanguageParam"](),
        'ct': __dependency_4["default"]["getParam"]('ct'),
        'gt': __dependency_4["default"]["getParam"]('gt'),
        'ts': __dependency_4["default"]["getParam"]('ts'),
        'view_mode': __dependency_4["default"]["getParam"]('view_mode'),
        'p': __dependency_4["default"]['getParam']('p'),
        'wv': __dependency_4["default"]["getParam"]('wv'),
        'gv': __dependency_4["default"]["getParam"]('gv'),
        'client_type': __dependency_4["default"]['getParam']('client_type'),
        'goback_url': __dependency_4["default"]["getParam"]('goback_url'),
        'table': __dependency_4["default"]["getParam"]("table"),
        'protocol': __dependency_4["default"]["getParam"]('protocol')
      };
      var _0x1f7a61 = __dependency_4["default"]["getParam"]('socket_url');
      if (_0x1f7a61) {
        var _0x2dc387 = __dependency_4["default"]["getParam"]('protocol'),
          _0x3b25b0 = _0x2dc387 || __dependency_4["default"]['getUrlProtocol']();
        this['data']["socket_url"] = _0x3b25b0 + '//' + _0x1f7a61;
      }
      Log['d']('url\x20data\x20==>\x20', this["data"]);
    }
  }, _0x1d7a38["getLanguageParam"] = function () {
    var _0x5a2ec0 = __dependency_4["default"]["getParam"]('l') ? __dependency_4["default"]["getParam"]('l') : "zh-tw";
    return App["language"]["getSupportLanguages"]()['includes'](_0x5a2ec0) ? _0x5a2ec0 : (console["error"]("語系設定錯誤"), 'zh-tw');
  }, _0x1d7a38['getViewModeParam'] = function () {
    return __dependency_4["default"]["getParam"]("view_mode") ? __dependency_4["default"]["getParam"]("view_mode") : "landscape";
  }, (0, __dependency_0['createClass'])(_0x447fd6, [{
    'key': 'base_api',
    'get': function () {
      return this["data"]["base_api"];
    }
  }, {
    'key': "base_url",
    'get': function () {
      return this["data"]["base_url"];
    }
  }, {
    'key': "socket_url",
    'get': function () {
      return this["data"]["socket_url"];
    }
  }, {
    'key': 'searchParams',
    'get': function () {
      return this['data']["searchParams"];
    }
  }, {
    'key': 'socket_token',
    'get': function () {
      return this["data"]["searchParams"]['t'];
    },
    'set': function (_0x91caf6) {
      this["data"]["searchParams"]['t'] = _0x91caf6;
    }
  }]), _0x447fd6;
}(__dependency_3["BaseModel"]);
_0x4046ca["_instance"] = null;
__publish("default", _0x4046ca['Instance']());
__dependency_1["cclegacy"]["_RF"]["pop"]();
