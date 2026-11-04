// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-GameLoadingP.ts.js
// SHA256: 9918d59653ab095c119c2e26650c381825002a9b45d27cf09df5a4dfe917b456
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-GameLoading";
var __export_0;
export { __export_0 as SpineName };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SpineName":
      __export_0 = value;
      break;
    case "default":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x55acec) {
  void 0;
})(__dependency_0);
(function (_0x584568) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x56cd03) {
  void 0;
})(__dependency_2);
var _0x26edd8;
__publish('SpineName', void 0x0), __dependency_1["cclegacy"]["_RF"]["push"]({}, '588d51V9G1OhLtq7UbpPiGe', "GameLoadingP", void 0x0), function (_0x50257c) {
  _0x50257c['LANDSCAPE'] = 'loading_pc', _0x50257c['PORTRAIT'] = "loading_phone";
}(_0x26edd8 || (_0x26edd8 = __publish("SpineName", {})));
__publish("default", function (_0x240dfc) {
  function _0x32a000() {
    for (var _0x242978, _0x13232c = arguments["length"], _0x16657e = new Array(_0x13232c), _0xc5fe67 = 0x0; _0xc5fe67 < _0x13232c; _0xc5fe67++) _0x16657e[_0xc5fe67] = arguments[_0xc5fe67];
    return (_0x242978 = Reflect.construct(_0x240dfc, [this]["concat"](_0x16657e).slice(1), new.target || _0x32a000) || this)["progressBar"] = null, _0x242978["loadingVO"] = null, _0x242978['offsetVO'] = null, _0x242978;
  }
  (0, __dependency_0["inheritsLoose"])(_0x32a000, _0x240dfc);
  var _0x305fb9 = _0x32a000["prototype"];
  return _0x305fb9['_show'] = function () {
    _0x240dfc['prototype']["_show"]['call'](this), this["progressBar"] = this["content"]["getChildByName"]("ProgressBar");
  }, _0x305fb9["setGameSpriteFrame"] = function () {
    var _0x64f8f0;
    if (this["loadingVO"]) {
      var _0x56585a = this["loadingVO"],
        _0x44cb8d = _0x56585a["background"],
        _0x17550d = _0x56585a["spine"],
        _0x5bb65e = _0x56585a['loadingSpineAnimName'],
        _0x53135d = _0x56585a["barFrame"],
        _0x154bbb = _0x56585a["bar"],
        _0x17d9a5 = _0x56585a["barbg"],
        _0x298aac = _0x56585a['barLight'],
        _0x22004d = _0x56585a["logo"],
        _0x2ad93a = _0x56585a["startGame"],
        _0x54651b = _0x56585a["enterGame"],
        _0x507136 = _0x56585a["progressBarPostion"];
      _0x53135d && (this['frame']['getComponent'](__dependency_1["Sprite"])["spriteFrame"] = _0x53135d, this["frame"]['getComponent'](__dependency_1["Sprite"])["sizeMode"] = __dependency_1["Sprite"]["SizeMode"]["RAW"]), _0x154bbb && (this['bar']['totalLength'] = _0x154bbb["width"], this["bar"]["_updateBarStatus"], this["barSprite"]['getComponent'](__dependency_1["Sprite"])["spriteFrame"] = _0x154bbb, this["mask"]['getComponent'](__dependency_1["Sprite"])["spriteFrame"] = _0x154bbb, this['barSprite']["getComponent"](__dependency_1["Sprite"])["sizeMode"] = __dependency_1["Sprite"]["SizeMode"]["RAW"]), _0x17d9a5 && (this['barBGSprite']["getComponent"](__dependency_1["Sprite"])["spriteFrame"] = _0x17d9a5, this['barBGSprite']['getComponent'](__dependency_1["Sprite"])["sizeMode"] = __dependency_1["Sprite"]["SizeMode"]["RAW"], this['barSprite']["setPosition"](0.5 * this['barBGSprite']["getComponent"](__dependency_1["UITransform"])["width"], this["barSprite"]['y'])), this['background']["getComponent"](__dependency_1["UITransform"])["setContentSize"](_0x44cb8d["originalSize"]["width"], _0x44cb8d["originalSize"]["height"]), this["background"]["getComponent"](__dependency_1["Sprite"])["spriteFrame"] = _0x44cb8d, this["spine"] && (this["spine"]['getComponent'](__dependency_1['sp']["Skeleton"])["skeletonData"] = _0x17550d, null != _0x5bb65e && this["spine"]["getComponent"](__dependency_1['sp']["Skeleton"])["setAnimation"](0x0, _0x5bb65e, !0x0)), _0x298aac && (this["barLight"]["getComponent"](__dependency_1["Sprite"])['spriteFrame'] = _0x298aac), _0x22004d && (this["logo"]["getComponent"](__dependency_1["Sprite"])["spriteFrame"] = _0x22004d), _0x2ad93a && (this["startGame"]['getComponent'](__dependency_1["Sprite"])['spriteFrame'] = _0x2ad93a), _0x54651b && (this["enterGameSpVO"] = _0x54651b), this['frame']['getComponent'](__dependency_1["UITransform"])["width"] = null == _0x53135d ? void 0x0 : _0x53135d["width"], this["bar"]["getComponent"](__dependency_1["UITransform"])['width'] = null == _0x154bbb ? void 0x0 : _0x154bbb["width"], this["barSprite"]["getComponent"](__dependency_1["UITransform"])["width"] = null == _0x154bbb ? void 0x0 : _0x154bbb['width'], this['mask']['getComponent'](__dependency_1["UITransform"])["width"] = null == _0x154bbb ? void 0x0 : _0x154bbb["width"], this["barBGSprite"]['getComponent'](__dependency_1["UITransform"])["width"] = null == _0x17d9a5 ? void 0x0 : _0x17d9a5["width"], this["barLight"]["getComponent"](__dependency_1["UITransform"])["width"] = null == _0x298aac ? void 0x0 : _0x298aac["width"];
      var _0x64cc21 = (null != (_0x64f8f0 = this['offsetVO']) ? _0x64f8f0 : {})["mask"];
      _0x64cc21 && this["mask"]["setPosition"](0.5 * -this["barBGSprite"]["getComponent"](__dependency_1["UITransform"])["width"] + _0x64cc21['x'], this["mask"]['y'] + _0x64cc21['y']), _0x507136 && this["progressBar"]['setPosition'](_0x507136);
    }
  }, _0x305fb9["setData"] = function (_0xa99dc6, _0x1fad18) {
    this['loadingVO'] = _0xa99dc6, this["offsetVO"] = _0x1fad18;
  }, _0x32a000;
}(__dependency_2['default']));
__dependency_1["cclegacy"]["_RF"]["pop"]();
