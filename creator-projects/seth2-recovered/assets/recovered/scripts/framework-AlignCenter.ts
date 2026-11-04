// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-AlignCenter.ts.js
// SHA256: 9d31a0b12896b105f434b5fec94350e66677487712330d801415a76a2b058ad2
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
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
(function (_0x5cf4b1) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x24d2e1) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var _0x3b5061, _0x138b26, _0x13cd31, _0x359299, _0x112d1d, _0x46b5bd, _0x65297c;
__dependency_1["cclegacy"]["_RF"]["push"]({}, '12991v8EIFOup0um0ysJ/hL', 'AlignCenter', void 0x0);
var _0x48b96f = __dependency_1["_decorator"]["ccclass"],
  _0x567789 = __dependency_1["_decorator"]["property"],
  _0x40d37f = __dependency_1["_decorator"]["menu"];
__publish('default', (_0x3b5061 = _0x40d37f('AlignCenter'), _0x138b26 = _0x567789({
  'displayName': '臨界值',
  'type': __dependency_1["CCFloat"],
  'min': 0.1
}), _0x13cd31 = _0x567789({
  'displayName': '回彈速度',
  'type': __dependency_1["CCFloat"],
  'min': 0.1
}), _0x48b96f(_0x359299 = _0x3b5061((_0x46b5bd = (0, __dependency_0["applyDecoratedDescriptor"])((_0x112d1d = function (_0x4561e6) {
  function _0x1199ca() {
    for (var _0x5d137c, _0x4b02c8 = arguments["length"], _0x56c0a4 = new Array(_0x4b02c8), _0x27b87d = 0x0; _0x27b87d < _0x4b02c8; _0x27b87d++) _0x56c0a4[_0x27b87d] = arguments[_0x27b87d];
    return (_0x5d137c = Reflect.construct(_0x4561e6, [this]["concat"](_0x56c0a4).slice(1), new.target || _0x1199ca) || this)['_lastPos'] = void 0x0, _0x5d137c["_content"] = void 0x0, _0x5d137c['_contentUI'] = void 0x0, _0x5d137c["_layout"] = void 0x0, _0x5d137c["_view"] = void 0x0, _0x5d137c["_viewUI"] = void 0x0, _0x5d137c["_scrollView"] = void 0x0, _0x5d137c["_selected"] = void 0x0, _0x5d137c["_listener"] = !0x1, (0, __dependency_0["initializerDefineProperty"])(_0x5d137c, "threshold", _0x46b5bd, (0, __dependency_0['assertThisInitialized'])(_0x5d137c)), (0, __dependency_0["initializerDefineProperty"])(_0x5d137c, "turningSpeed", _0x65297c, (0, __dependency_0['assertThisInitialized'])(_0x5d137c)), _0x5d137c;
  }
  (0, __dependency_0["inheritsLoose"])(_0x1199ca, _0x4561e6);
  var _0x481d07 = _0x1199ca['prototype'];
  return _0x481d07["onLoad"] = function () {
    this["_scrollView"] = this["node"]['getComponent'](__dependency_1["ScrollView"]), this["_content"] = this["_scrollView"]['content'], this["_contentUI"] = this['_content']["getComponent"](__dependency_1["UITransform"]), this["_layout"] = this["_content"]["getComponent"](__dependency_1["Layout"]), this['_view'] = this['_content']["parent"], this['_viewUI'] = this['_view']["getComponent"](__dependency_1["UITransform"]), this["_lastPos"] = this["_content"]["position"], this["scrolling"]();
  }, _0x481d07["onEnable"] = function () {
    this["listener"] = !0x0, this["node"]['on'](__dependency_1["ScrollView"]['EventType']['SCROLL_ENDED'], this["scrollEnded"], this), this["node"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], this["touchStart"], this), this["node"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], this["touchEndNCancel"], this), this['node']['on'](__dependency_1["NodeEventType"]['TOUCH_CANCEL'], this["touchEndNCancel"], this);
  }, _0x481d07['onDisable'] = function () {
    this["listener"] = !0x1, this["node"]["off"](__dependency_1["ScrollView"]["EventType"]["SCROLL_ENDED"], this["scrollEnded"], this), this["node"]['off'](__dependency_1["NodeEventType"]["TOUCH_START"], this["touchStart"], this), this["node"]["off"](__dependency_1["NodeEventType"]["TOUCH_END"], this['touchEndNCancel'], this), this["node"]["off"](__dependency_1["NodeEventType"]['TOUCH_CANCEL'], this["touchEndNCancel"], this);
  }, _0x481d07["jumpToItem"] = function (_0x68dd74) {
    var _0x30e9e8 = new __dependency_1["Size"](this["_scrollView"]["node"]["getComponent"](__dependency_1["UITransform"])['width'], this["_contentUI"]["height"] - this["_viewUI"]["height"]),
      _0x5c3796 = (this["_content"]["children"][_0x68dd74]["position"]['y'] + this["_contentUI"]["height"] * this["_contentUI"]["anchorY"] - 0.5 * this["_viewUI"]["height"]) / _0x30e9e8["height"];
    return _0x5c3796 > 0x1 || _0x5c3796 < 0x0 || (this["listener"] = !0x1, this["_scrollView"]["stopAutoScroll"](), this['_scrollView']["scrollTo"]((0, __dependency_1['v2'])(0x0, _0x5c3796), this["turningSpeed"])), _0x5c3796;
  }, _0x481d07["scrolling"] = function () {
    if (this["_content"]['children']["length"] && !(this["_contentUI"]['height'] <= this["_viewUI"]["height"])) {
      var _0x57df2e,
        _0x30d100,
        _0x2b801a,
        _0x54a67e,
        _0x50a34b = new __dependency_1['Vec3'](),
        _0x7ec672 = new __dependency_1['Vec3']();
      if ((_0x50a34b = new __dependency_1['Vec3'](JSON['parse'](JSON["stringify"](this["_content"]["position"]))))["subtract"](this["_lastPos"]), this["_lastPos"] = this["_content"]["position"], !(_0x50a34b["length"]() > this["threshold"])) {
        var _0x24bc99 = new __dependency_1["Size"](this["_content"]['children'][0x0]["getComponent"](__dependency_1["UITransform"])["width"], this["_content"]["children"][0x0]["getComponent"](__dependency_1["UITransform"])["height"] + this["_layout"]['spacingY']);
        if (this["_view"]["parent"]["getComponent"](__dependency_1["UITransform"])['convertToWorldSpaceAR'](__dependency_1['Vec3']["ZERO"], _0x50a34b), this['_contentUI']["convertToNodeSpaceAR"](_0x50a34b, _0x7ec672), _0x57df2e = this["_contentUI"]["height"] - this['_contentUI']["anchorY"] * this["_contentUI"]["height"], _0x30d100 = 0x0, (_0x57df2e -= this["_layout"]["paddingTop"] + this["_content"]["children"][0x0]["getComponent"](__dependency_1["UITransform"])["height"] + 0.5 * this["_layout"]["spacingY"]) <= _0x7ec672['y']) {
          if (this["_selected"] = _0x30d100, this['_scrollView']["isScrolling"]()) return;
          if ((_0x54a67e = this["jumpToItem"](_0x30d100)) >= 0x0 && _0x54a67e <= 0x1) return;
        }
        for ((_0x2b801a = this["_content"]['children']["length"] - 0x1) < 0x1 && (_0x2b801a = 0x1), _0x30d100 = 0x1; _0x30d100 < _0x2b801a; ++_0x30d100) if ((_0x57df2e -= _0x24bc99["height"]) <= _0x7ec672['y']) {
          if (this["_selected"] = _0x30d100, this['_scrollView']["isScrolling"]()) return;
          if ((_0x54a67e = this["jumpToItem"](_0x30d100)) < 0x0) return void this['jumpToItem'](_0x30d100 - 0x1);
          if (_0x54a67e <= 0x1) return;
        }
        if ((_0x57df2e -= this["_content"]["children"][0x0]['getComponent'](__dependency_1["UITransform"])['height'] + 0.5 * this['_layout']["spacingY"] + this["_layout"]["paddingBottom"]) <= _0x7ec672['y']) {
          if (this["_selected"] = _0x30d100, this["_scrollView"]["isScrolling"]()) return;
          this['jumpToItem'](_0x30d100);
        }
      }
    }
  }, _0x481d07['scrollEnded'] = function () {
    this["listener"] || (this["listener"] = !0x0), this['scrolling']();
  }, _0x481d07["touchStart"] = function () {
    this["listener"] || (this['listener'] = !0x0);
  }, _0x481d07["touchEndNCancel"] = function () {
    this["_scrollView"]["isAutoScrolling"]() || this["scrolling"]();
  }, _0x481d07["update_view"] = function () {
    this['_layout']["updateLayout"](), this["scrolling"]();
  }, (0, __dependency_0['createClass'])(_0x1199ca, [{
    'key': "selected",
    'get': function () {
      return this["_selected"];
    }
  }, {
    'key': 'listener',
    'get': function () {
      return this["_listener"];
    },
    'set': function (_0x267f35) {
      this["_listener"] = _0x267f35, this["_listener"] ? this["node"]['on'](__dependency_1["ScrollView"]["EventType"]["SCROLLING"], this["scrolling"], this) : this["node"]["off"](__dependency_1["ScrollView"]['EventType']["SCROLLING"], this["scrolling"], this);
    }
  }]), _0x1199ca;
}(__dependency_1['Component']))["prototype"], 'threshold', [_0x138b26], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return 0x1;
  }
}), _0x65297c = (0, __dependency_0["applyDecoratedDescriptor"])(_0x112d1d['prototype'], "turningSpeed", [_0x13cd31], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return 0.3;
  }
}), _0x359299 = _0x112d1d)) || _0x359299) || _0x359299));
__dependency_1["cclegacy"]["_RF"]["pop"]();
