// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-GameLoading.ts.js
// SHA256: cecb03a0fd2be496682d5a1944b9b00d84fa07aa6567350730c816715996eceb
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Config";
import * as __dependency_3 from "./framework-SlotFrameworkEvent";
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
(function (_0x26fcc6) {
  void 0;
})(__dependency_0);
(function (_0x2af4c0) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x162030) {
  void 0, void 0;
})(__dependency_2);
(function (_0x534618) {
  void 0;
})(__dependency_3);
var _0x291688;
__publish('SpineName', void 0x0), __dependency_1["cclegacy"]["_RF"]["push"]({}, "e7295bYB29JKIzgpZJghufA", "GameLoading", void 0x0), function (_0x1ac107) {
  _0x1ac107["LANDSCAPE"] = 'loading_pc', _0x1ac107['PORTRAIT'] = "loading_phone";
}(_0x291688 || (_0x291688 = __publish("SpineName", {}))), __publish("default", function () {
  function _0xd7d3f5() {
    this["module"] = null, this["isResident"] = !0x0, this["node"] = null, this["maskPosition"] = null, this["percentTextPosition"] = null, this["barLightPos"] = null, this["logoPosition"] = null, this["atgLogoPosition"] = null, this["progressBarPosition"] = null, this["barSpinePosition"] = null, this["startGamePosition"] = null, this["content"] = null, this["barSprite"] = null, this["barBGSprite"] = null, this["mask"] = null, this["barLight"] = null, this["frame"] = null, this["logo"] = null, this["atgLogo"] = null, this["startGame"] = null, this["background"] = null, this["spine"] = null, this['barSpine'] = null, this['message'] = null, this["percentText"] = null, this["bar"] = null, this["logoWidget"] = null, this["isHandlerReady"] = !0x1, this['_uiName'] = null, this["_timerId"] = -0x1, this["loadTotal"] = 0x0, this["loadedNum"] = 0x0, this['delay'] = 0x0, this["barLightPosY"] = null, this["barRealWidth"] = null, this["loadingVO"] = null, this["enterGameSpVO"] = null;
  }
  var _0x39aa58 = _0xd7d3f5["prototype"];
  return _0x39aa58["_show"] = function () {
    var _0x1df4f5, _0x5c406d, _0x290d9d;
    if (this['node'] || (this["node"] = (0, __dependency_1["instantiate"])(this["prefab"])), this["node"]["addComponent"](__dependency_1["UIOpacity"]), this["node"]["removeFromParent"](), App["uiManager"]["addView"](this["node"], __dependency_2["ViewZOrder"]["UILoading"]), this["node"]['position'] = __dependency_1["Vec3"]["ZERO"], this['content'] = (0, __dependency_1["find"])("content", this["node"]), this["background"] = this["content"]["getChildByName"]("background"), this["spine"] = this["content"]["getChildByName"]("spine"), this["barSpine"] = this["content"]["getChildByName"]("barSpine"), this['barBGSprite'] = this["content"]["getChildByPath"]("ProgressBar"), this["mask"] = this["content"]['getChildByPath']('ProgressBar/Mask'), this["barSprite"] = this['content']["getChildByPath"]("ProgressBar/Mask/Bar"), this["barLight"] = this["content"]["getChildByPath"]("ProgressBar/barLight"), this["barLightPos"] = this["barLight"]["getPosition"](), this["frame"] = this["content"]['getChildByPath']("ProgressBar/frame"), this["logo"] = this["content"]["getChildByName"]("logo"), this["atgLogo"] = this['content']["getChildByName"]("atgLogo"), this["startGame"] = this["content"]["getChildByName"]("startGame"), this["barLightPosY"] && (this["barLightPos"]['y'] = this["barLightPosY"]), this["logoPosition"] && (this["logo"]["getComponent"](__dependency_1["Widget"]) && (this["logo"]["getComponent"](__dependency_1["Widget"])["enabled"] = !0x1), this["logo"]['setPosition'](this["logoPosition"])), this["atgLogoPosition"] && this["atgLogo"] && (0x0 == this["atgLogo"]['active'] && (this['atgLogo']["active"] = !0x0), this['atgLogo']['setPosition'](this["atgLogoPosition"])), this["logoWidget"]) {
      var _0x364fef = this["logo"]["getComponent"](__dependency_1["Widget"]);
      _0x364fef["enabled"] = !0x0, _0x364fef['top'] = this["logoWidget"]['top'], _0x364fef["left"] = this['logoWidget']["left"], _0x364fef['right'] = this["logoWidget"]["right"], _0x364fef["bottom"] = this["logoWidget"]["bottom"], _0x364fef['alignMode'] = this['logoWidget']["alignMode"], _0x364fef["alignFlags"] = this["logoWidget"]["alignFlags"], _0x364fef["verticalCenter"] = this["logoWidget"]['verticalCenter'], _0x364fef["horizontalCenter"] = this["logoWidget"]["horizontalCenter"], _0x364fef["isAlignVerticalCenter"] = this["logoWidget"]['isAlignVerticalCenter'], _0x364fef["isAlignHorizontalCenter"] = this['logoWidget']["isAlignHorizontalCenter"], _0x364fef["isAlignTop"] = this["logoWidget"]["isAlignTop"], _0x364fef["isAlignLeft"] = this["logoWidget"]["isAlignLeft"], _0x364fef['isAlignRight'] = this["logoWidget"]["isAlignRight"], _0x364fef["isAlignBottom"] = this["logoWidget"]["isAlignBottom"], _0x364fef["isAbsoluteTop"] = this["logoWidget"]["isAbsoluteTop"], _0x364fef["isAbsoluteRight"] = this["logoWidget"]["isAbsoluteRight"], _0x364fef['isAbsoluteLeft'] = this["logoWidget"]["isAbsoluteLeft"], _0x364fef["isAbsoluteBottom"] = this["logoWidget"]['isAbsoluteBottom'];
    }
    this["percentText"] = null == (_0x1df4f5 = (0, __dependency_1["find"])("ProgressBar/percent", this["content"])) ? void 0x0 : _0x1df4f5["getComponent"](__dependency_1["Label"]), this["percentText"]["string"] = '0%', this["bar"] = null == (_0x5c406d = (0, __dependency_1["find"])('ProgressBar', this["content"])) ? void 0x0 : _0x5c406d["getComponent"](__dependency_1["ProgressBar"]), this["bar"]["progress"] = 0x0, this["progressBarPosition"] && this["bar"]["node"]["setPosition"](this["progressBarPosition"]), this['message'] = null == (_0x290d9d = (0, __dependency_1["find"])("message", this["content"])) ? void 0x0 : _0x290d9d["getComponent"](__dependency_1["Label"]), this["fadeIn"](), this["node"]['active'] = !0x0;
  }, _0x39aa58["startTimeOutTimer"] = function (_0x483653) {
    var _0x30da07 = this;
    this["stopTimeOutTimer"](), _0x483653 && (this["_timerId"] = setTimeout(function () {
      App["tips"]["show"]("加载界面" + (_0x30da07["_uiName"] ? _0x30da07['_uiName'] : '') + "超时，请重试"), _0x30da07["hide"](!0x1);
    }, 0x4e20 * _0x483653));
  }, _0x39aa58['stopTimeOutTimer'] = function () {
    clearTimeout(this["_timerId"]), this["_timerId"] = -0x1;
  }, _0x39aa58['updateProgress'] = function () {
    if (this["percentText"]) {
      var _0x14e14f = this['loadedNum'] + (this["isHandlerReady"] ? 0x1 : 0x0),
        _0x32adbb = Math['floor'](_0x14e14f / this['loadTotal'] * 0x64);
      if (null == _0x32adbb || null == _0x32adbb || Number["isNaN"](_0x32adbb)) return;
      if (_0x32adbb >= 0x0 && _0x32adbb <= 0x64) {
        this["percentText"]["string"] = _0x32adbb + '%', this["bar"]["progress"] = _0x32adbb / 0x64;
        var _0x5f55f6 = this["mask"]["getComponent"](__dependency_1["UITransform"])['width'] + this["mask"]["getPosition"]()['x'];
        null != this["barRealWidth"] && this["barRealWidth"] > 0x0 && (_0x5f55f6 = this["barRealWidth"] * (_0x32adbb / 0x64) + this["mask"]["getPosition"]()['x']), this["barLight"]["setPosition"]((0, __dependency_1['v3'])(_0x5f55f6, this['barLightPos']['y'])), _0x32adbb >= 0x64 && this["hide"](!0x1);
      }
    }
  }, _0x39aa58["show"] = function (_0x3da945, _0x57bad4) {
    this['delay'] = null == _0x3da945 || null == _0x3da945 || _0x3da945 < 0x0 ? __dependency_2["Config"]["LOAD_VIEW_DELAY"] : _0x3da945, this['_uiName'] = _0x57bad4 || '', this["_show"]();
  }, _0x39aa58["hide"] = function (_0x43ff8f) {
    var _0x3e9d86 = this;
    this["stopTimeOutTimer"](), _0x43ff8f ? this["node"] && (__dependency_1["Tween"]['stopAllByTarget'](this["content"]), (0, __dependency_1["tween"])(this["node"]["getComponent"](__dependency_1["UIOpacity"]))['to'](0x1, {
      'opacity': 0x0
    }, {
      'easing': "quintIn"
    })["delay"](0.1)["call"](function () {
      _0x3e9d86['node']["active"] = !0x1;
    })["start"]()) : this["node"] && (this["node"]['getComponent'](__dependency_1["UIOpacity"])["opacity"] = 0x0, this['node']["active"] = !0x1);
  }, _0x39aa58["fadeIn"] = function () {
    this["node"]["getComponent"](__dependency_1["UIOpacity"])["opacity"] = 0x0, (0, __dependency_1["tween"])(this["node"]['getComponent'](__dependency_1["UIOpacity"]))['to'](0.1, {
      'opacity': 0xff
    }, {
      'easing': 'quintIn'
    })['start']();
  }, _0x39aa58["setGameSpriteFrame"] = function () {
    if (!this['loadingVO']) return Log['e']("this.loadingVO is error");
    var _0x553705 = this["loadingVO"],
      _0x374e12 = _0x553705["loadingSpineAnimName"],
      _0x128dad = _0x553705["background"],
      _0x4f6975 = _0x553705['spine'],
      _0x508c27 = _0x553705['barFrame'],
      _0xf816f1 = _0x553705["bar"],
      _0xd7685a = _0x553705["barbg"],
      _0x494394 = _0x553705["barLight"],
      _0x15c674 = _0x553705["logo"],
      _0x18719c = _0x553705["startGame"],
      _0x3b8339 = _0x553705["enterGame"],
      _0x57bf0c = _0x553705["barSpine"],
      _0x32a89b = _0x553705["spineBgScale"];
    this['bar']["totalLength"] = _0xf816f1["width"], this["bar"]["_updateBarStatus"], this["frame"]["getComponent"](__dependency_1['Sprite'])["spriteFrame"] = _0x508c27, this["frame"]['getComponent'](__dependency_1['Sprite'])["sizeMode"] = __dependency_1['Sprite']["SizeMode"]["RAW"], this["barSprite"]["getComponent"](__dependency_1['Sprite'])['spriteFrame'] = _0xf816f1, this["barSprite"]["getComponent"](__dependency_1['Sprite'])["sizeMode"] = __dependency_1['Sprite']["SizeMode"]["RAW"], this["barSprite"]['getPosition']()['x'] = 0.5 * this["frame"]["getComponent"](__dependency_1["UITransform"])["width"], this['barBGSprite']["getComponent"](__dependency_1['Sprite'])["spriteFrame"] = _0xd7685a, this["barBGSprite"]["getComponent"](__dependency_1['Sprite'])["sizeMode"] = __dependency_1['Sprite']['SizeMode']['RAW'], this["mask"]["getComponent"](__dependency_1['Sprite'])["spriteFrame"] = _0xf816f1, this["background"]["getComponent"](__dependency_1["UITransform"])["setContentSize"](_0x128dad["originalSize"]["width"], _0x128dad["originalSize"]['height']), this["background"]["getComponent"](__dependency_1['Sprite'])["spriteFrame"] = _0x128dad, this["barLight"]['getComponent'](__dependency_1['Sprite'])["spriteFrame"] = _0x494394, this["logo"]["getComponent"](__dependency_1['Sprite'])["spriteFrame"] = _0x15c674, this["startGame"]['getComponent'](__dependency_1['Sprite'])["spriteFrame"] = _0x18719c, this["maskPosition"] ? (this["mask"]["getComponent"](__dependency_1["Widget"])["enabled"] = !0x1, this["mask"]["setPosition"](this['maskPosition'])) : this["mask"]["getPosition"]()['x'] = 0.5 * -this["frame"]["getComponent"](__dependency_1["UITransform"])["width"], this["percentTextPosition"] && (this["percentText"]["node"]['getComponent'](__dependency_1["Widget"])['enabled'] = !0x1, this["percentText"]["node"]["setPosition"](this["percentTextPosition"])), this["spine"] && (this["spine"]["getComponent"](__dependency_1['sp']["Skeleton"])["skeletonData"] = _0x4f6975, null != _0x374e12 ? this["spine"]['getComponent'](__dependency_1['sp']["Skeleton"])["setAnimation"](0x0, _0x374e12, !0x0) : this['spine']["getComponent"](__dependency_1['sp']['Skeleton'])["setAnimation"](0x0, _0x291688["LANDSCAPE"], !0x0), _0x32a89b && this["spine"]["setScale"](_0x32a89b, _0x32a89b, 0x1)), this["barSpine"] && (this["barSpine"]["getComponent"](__dependency_1['sp']["Skeleton"])["skeletonData"] = _0x57bf0c, this["barSpine"]["getComponent"](__dependency_1['sp']["Skeleton"])["setAnimation"](0x0, "loop", !0x0), this["barSpinePosition"] && this["barSpine"]["setPosition"](this["barSpinePosition"])), this["startGamePosition"] && this["startGame"]["setPosition"](this["startGamePosition"]), this["enterGameSpVO"] = _0x3b8339, this['bar']["getComponent"](__dependency_1["UITransform"])["width"] = _0xf816f1["width"], this["frame"]["getComponent"](__dependency_1["UITransform"])["width"] = null == _0x508c27 ? void 0x0 : _0x508c27['width'], this['barSprite']["getComponent"](__dependency_1["UITransform"])["width"] = _0xf816f1["width"], this["barBGSprite"]['getComponent'](__dependency_1["UITransform"])["width"] = null == _0xd7685a ? void 0x0 : _0xd7685a["width"], this["mask"]["getComponent"](__dependency_1["UITransform"])["width"] = _0xf816f1["width"], this["barLight"]["getComponent"](__dependency_1["UITransform"])["width"] = _0x494394['width'];
  }, _0x39aa58["createEnterGameBtn"] = function () {
    var _0x11035b = this["startGame"]['getComponent'](__dependency_1["UIOpacity"]);
    _0x11035b['opacity'] = 0x0, (0, __dependency_1["tween"])(_0x11035b)['repeatForever']((0, __dependency_1["tween"])()['to'](0x1, {
      'opacity': 0xff
    })['to'](0x1, {
      'opacity': 0xaa
    }))["start"](), this["background"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      App['gameLoading']["complete"](function () {
        dispatch(__dependency_3["SlotFrameworkEvent"]["CLICK_GAME_LOADING_CONFIRM_BTN"]);
      });
    });
  }, _0x39aa58["hideProgressBar"] = function () {
    this["bar"]["node"]['active'] = !0x1, this['percentText']["node"]['active'] = !0x1, this['barSpine'] && (this["barSpine"]["active"] = !0x1);
  }, _0x39aa58["setLoadResource"] = function (_0x5b627d) {
    this["content"]["getComponent"](__dependency_1['Sprite'])["spriteFrame"] = _0x5b627d;
  }, _0x39aa58["setData"] = function (_0x3fd234) {
    this["loadingVO"] = _0x3fd234;
  }, _0x39aa58["setLoading"] = function (_0x43bf43, _0x5c5b90, _0xd8b2b1) {
    var _0xed1d31, _0x5ad049;
    0x1 === _0x43bf43 && (this["show"](), this['setGameSpriteFrame'](), null != (_0xed1d31 = window) && _0xed1d31["hideLogo"] && (null == (_0x5ad049 = window) || _0x5ad049["hideLogo"]()));
    this["loadedNum"] = _0x43bf43, this["loadTotal"] = _0x5c5b90 + 0x1, this["updateProgress"]();
    var _0x5167ba = _0xd8b2b1["info"];
    _0x5167ba["type"], _0x5167ba["url"], _0x5167ba['bundle'];
  }, _0x39aa58['complete'] = function (_0x10768c) {
    this["isHandlerReady"] = !0x0, this["updateProgress"](), _0x10768c && _0x10768c();
  }, _0x39aa58["setMessage"] = function (_0x1e9d83) {
    this["message"]["string"] = _0x1e9d83;
  }, _0x39aa58['showEnterGameBtn'] = function () {
    this["hideProgressBar"](), this["createEnterGameBtn"]();
  }, _0x39aa58['hideGameLogo'] = function () {
    this["logo"]["active"] = !0x1;
  }, _0x39aa58["setLogoPosition"] = function (_0x536737) {
    this["logoPosition"] = _0x536737;
  }, _0x39aa58["setLogoWidget"] = function (_0x11c42f) {
    this["logoWidget"] = _0x11c42f;
  }, _0x39aa58["setSpineBgAnimName"] = function (_0x1c66b3) {
    this["spine"]["getComponent"](__dependency_1['sp']['Skeleton'])['setAnimation'](0x0, _0x1c66b3, !0x0);
  }, _0x39aa58["setBarSpineAnimName"] = function (_0x217fe5) {
    this["barSpine"]['getComponent'](__dependency_1['sp']['Skeleton'])['setAnimation'](0x0, _0x217fe5, !0x0);
  }, _0x39aa58['setBarSpinePosition'] = function (_0xb7a578) {
    this['barSpinePosition'] = _0xb7a578;
  }, _0x39aa58["setProgressBarPosition"] = function (_0x109b7a) {
    this['progressBarPosition'] = _0x109b7a;
  }, _0x39aa58["setPercentTextPos"] = function (_0x2a0cf2) {
    this["percentTextPosition"] = _0x2a0cf2;
  }, _0x39aa58["setStartGamePosition"] = function (_0x11082d) {
    this["startGamePosition"] = _0x11082d;
  }, _0x39aa58["setBarLightPositionY"] = function (_0xddfa27) {
    this["barLightPosY"] = _0xddfa27;
  }, _0x39aa58["setBarRealWidth"] = function (_0x4b4193) {
    this['barRealWidth'] = _0x4b4193;
  }, _0x39aa58["setMaskPos"] = function (_0x47da3f) {
    this["maskPosition"] = _0x47da3f;
  }, _0x39aa58['setAtgLogoPosition'] = function (_0x1be379, _0x3b3671) {
    this["atgLogoPosition"] = (0, __dependency_1['v3'])(_0x1be379, _0x3b3671, 0x0);
  }, (0, __dependency_0["createClass"])(_0xd7d3f5, [{
    'key': 'prefab',
    'get': function () {
      return App["uiManager"]["getScenePrefab"]('GameLoading');
    }
  }]), _0xd7d3f5;
}())["module"] = "【GameLoading】", __dependency_1["cclegacy"]["_RF"]["pop"]();
