// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-WebUiView.ts.js
// SHA256: 74b8012259e897f24f2d216fbe874e7116577e2aa3aeaf67d4dec6c99ae16b68
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-UIView";
var __export_0;
export { __export_0 as WebUiView };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "WebUiView":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x5c0572) {
  void 0;
})(__dependency_0);
(function (_0x14fa41) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (_0x575bae) {
  void 0;
})(__dependency_2);
var _0x41a8c4;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "070caQikuZOGIt/+qGWXA1I", 'WebUiView', void 0x0);
var _0x532cf1 = __dependency_1['_decorator']['ccclass'];
__dependency_1['_decorator']["property"], __publish("WebUiView", _0x532cf1('WebUiView')(_0x41a8c4 = function (_0x405b61) {
  function _0x7fe195() {
    for (var _0x237259, _0x5e32b2 = arguments['length'], _0x2cb9aa = new Array(_0x5e32b2), _0x47b091 = 0x0; _0x47b091 < _0x5e32b2; _0x47b091++) _0x2cb9aa[_0x47b091] = arguments[_0x47b091];
    return (_0x237259 = Reflect.construct(_0x405b61, [this]["concat"](_0x2cb9aa).slice(1), new.target || _0x7fe195) || this)['iframe'] = null, _0x237259['gameDiv'] = null, _0x237259["onResizeHandler"] = function () {
      _0x237259['iframe']['style']["width"] = '' + _0x237259['gameDiv']["style"]["width"], _0x237259["iframe"]["style"]["height"] = '' + _0x237259['gameDiv']["style"]['height'];
    }, _0x237259["messageCloseWebUiViewHandler"] = function (_0x32bb04) {
      if (_0x32bb04["data"] && "closeWebUiView" === _0x32bb04["data"]["type"]) {
        var _0x5817b0 = document["getElementById"]('webView');
        _0x5817b0 && (__dependency_1["game"]["container"]["removeChild"](_0x5817b0), _0x5817b0 = null, App["globalAudio"]['resumeMusic'](), App["uiManager"]["close"](_0x7fe195));
      }
    }, _0x237259;
  }
  (0, __dependency_0["inheritsLoose"])(_0x7fe195, _0x405b61);
  var _0x1f81f4 = _0x7fe195["prototype"];
  return _0x1f81f4['onLoad'] = function () {
    _0x405b61["prototype"]["onLoad"]['call'](this), window["addEventListener"]("message", this["messageCloseWebUiViewHandler"]);
  }, _0x1f81f4["start"] = function () {
    this["init"]();
  }, _0x1f81f4["onDestroy"] = function () {
    window['removeEventListener']('message', this["messageCloseWebUiViewHandler"]), window['removeEventListener']('resize', this['onResizeHandler']), _0x405b61['prototype']["onDestroy"]["call"](this);
  }, _0x7fe195["getPrefabUrl"] = function () {
    return 'prefabs/view/WebUiView';
  }, _0x1f81f4["init"] = function () {
    this["gameDiv"] = document["getElementById"]("GameDiv"), this['setWebViewUrl'](this['args']);
  }, _0x1f81f4["setWebViewUrl"] = function (_0x304917) {
    var _0x2f76da = document["createElement"]('iframe');
    return this["iframe"] = _0x2f76da, _0x2f76da["style"]["position"] = "absolute", _0x2f76da["style"]["width"] = "100%", _0x2f76da['style']["height"] = '100%', _0x2f76da["style"]["top"] = '0px', _0x2f76da["style"]["left"] = '0px', _0x2f76da['id'] = "webView", __dependency_1["game"]['container']['appendChild'](_0x2f76da), this['setStyle'](_0x304917), _0x2f76da['src'] = _0x304917;
  }, _0x1f81f4['setStyle'] = function (_0xf97272) {
    _0xf97272["includes"]('betrecord-web') && this["setBetRecordStyle"]();
  }, _0x1f81f4["setBetRecordStyle"] = function () {
    this["iframe"]["style"]['position'] = "absolute", this["iframe"]["style"]["width"] = '' + this["gameDiv"]["style"]["width"], this['iframe']['style']["height"] = '' + this['gameDiv']["style"]["height"], this["iframe"]["style"]['top'] = "50%", this['iframe']["style"]['left'] = '50%', this["iframe"]["style"]['transform'] = "translate(-50%, -50%)", this["iframe"]["style"]["border"] = "none", window["addEventListener"]("resize", this["onResizeHandler"]);
  }, _0x1f81f4['addEvents'] = function () {
    _0x405b61["prototype"]["addEvents"]["call"](this);
  }, _0x7fe195;
}(__dependency_2['default'])) || _0x41a8c4);
__dependency_1["cclegacy"]["_RF"]["pop"]();
