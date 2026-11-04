// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-GameRulesView.ts.js
// SHA256: df9931dcad1a2f4ebec4f3aa4b4195d65cda92e177fb64e47a3ce227dc944f43
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-UIView";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-AlignCenter";
import * as __dependency_6 from "./framework-SlotFrameworkEvent";
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
(function (_0x83df4c) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x4dd27d) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x1095aa) {
  void 0;
})(__dependency_2);
(function (_0x32b23c) {
  void 0;
})(__dependency_3);
(function (_0x2b41d6) {
  void 0;
})(__dependency_4);
(function (_0x1778ad) {
  void 0;
})(__dependency_5);
(function (_0x5778b4) {
  void 0;
})(__dependency_6);
var _0x140150, _0x524a76, _0x187299, _0x207713, _0x49ce20, _0x504730, _0x34832c, _0xd3d2fd, _0x7830f7, _0x42140a, _0x1dc510, _0x2d7f9f, _0x205aa9;
__dependency_1["cclegacy"]["_RF"]["push"]({}, 'dcab14wtl1LwJ1QGDfg0thr', "GameRulesView", void 0x0);
var _0x216180 = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]['property'], __publish("default", (_0x140150 = _0x216180("GameRulesView"), _0x524a76 = (0, __dependency_4["inject"])("closeBtn", __dependency_1["Node"]), _0x187299 = (0, __dependency_4["inject"])("scrollView/view/content", __dependency_1["Node"]), _0x207713 = (0, __dependency_4["inject"])('background', __dependency_1["Node"]), _0x49ce20 = (0, __dependency_4["inject"])('scrollView', __dependency_1["Node"]), _0x504730 = (0, __dependency_4["inject"])("pageView", __dependency_1["PageView"]), _0x140150((_0x7830f7 = (0, __dependency_0["applyDecoratedDescriptor"])((_0xd3d2fd = function (_0x1424d2) {
  function _0x1cd720() {
    for (var _0x579b0e, _0x910191 = arguments["length"], _0x46d5fd = new Array(_0x910191), _0x513ddf = 0x0; _0x513ddf < _0x910191; _0x513ddf++) _0x46d5fd[_0x513ddf] = arguments[_0x513ddf];
    return _0x579b0e = Reflect.construct(_0x1424d2, [this]['concat'](_0x46d5fd).slice(1), new.target || _0x1cd720) || this, (0, __dependency_0['initializerDefineProperty'])(_0x579b0e, "closeBtn", _0x7830f7, (0, __dependency_0['assertThisInitialized'])(_0x579b0e)), (0, __dependency_0['initializerDefineProperty'])(_0x579b0e, 'content', _0x42140a, (0, __dependency_0['assertThisInitialized'])(_0x579b0e)), (0, __dependency_0['initializerDefineProperty'])(_0x579b0e, 'background', _0x1dc510, (0, __dependency_0['assertThisInitialized'])(_0x579b0e)), (0, __dependency_0['initializerDefineProperty'])(_0x579b0e, "scrollView", _0x2d7f9f, (0, __dependency_0['assertThisInitialized'])(_0x579b0e)), (0, __dependency_0['initializerDefineProperty'])(_0x579b0e, "pageView", _0x205aa9, (0, __dependency_0['assertThisInitialized'])(_0x579b0e)), _0x579b0e["flag"] = !0x1, _0x579b0e;
  }
  (0, __dependency_0['inheritsLoose'])(_0x1cd720, _0x1424d2);
  var _0x96eadb = _0x1cd720['prototype'];
  return _0x96eadb["onLoad"] = function () {
    _0x1424d2["prototype"]["onLoad"]['call'](this);
  }, _0x96eadb["start"] = function () {
    this["init"]();
  }, _0x96eadb["onDestroy"] = function () {}, _0x1cd720["getPrefabUrl"] = function () {
    return 'prefabs/view/GameRulesView';
  }, _0x96eadb["init"] = function () {
    this["setRuleAssets"](), this["setEventTouch"](), this["flag"] && (this['scrollView']['addComponent'](__dependency_5["default"]), this['pageView']["node"]["active"] = !0x1);
  }, _0x96eadb["setEventTouch"] = function () {
    var _0x5f4c5e = this;
    this["closeBtn"]['on'](__dependency_1["NodeEventType"]["TOUCH_START"], function () {
      dispatch(__dependency_6["SlotFrameworkEvent"]["PLAY_UI_CLOSE_CLICK_BTM"]), _0x5f4c5e['onClose']();
    });
  }, _0x96eadb["setRuleAssets"] = function () {
    var _0x1e09f6 = this,
      _0x188661 = App["cache"]["get"](this["args"]["bundle"], this["args"]["background"])["data"]["find"](function (_0x685383) {
        return "mg_bg" === _0x685383["name"];
      }),
      _0x36b40b = App['cache']['get'](this['args']['bundle'], this['args']["rules"])['data']["filter"](function (_0x161f65) {
        return _0x161f65["name"]['includes']("rule");
      });
    this["background"]["getComponent"](__dependency_1["Sprite"])["spriteFrame"] = _0x188661, _0x36b40b['sort'](function (_0x1dc1f2, _0x17ac2d) {
      return Number(_0x1dc1f2['name']["split"]('_')[0x1]) - Number(_0x17ac2d["name"]['split']('_')[0x1]);
    }), this["args"]["excludeIndexes"] && this["args"]["excludeIndexes"]["length"] > 0x0 && (_0x36b40b = _0x36b40b["filter"](function (_0x1a4170) {
      var _0x379d19 = Number(_0x1a4170['name']["split"]('_')[0x1]);
      return !(_0x1e09f6["args"]["excludeIndexes"]["indexOf"](_0x379d19) > -0x1);
    }));
    var _0x3383e1 = App["cache"]['get'](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], "prefabs/component/ruleItem")["data"];
    _0x36b40b["forEach"](function (_0x4b88de) {
      var _0x7c68af = (0, __dependency_1['instantiate'])(_0x3383e1);
      (0, __dependency_1["find"])("rule", _0x7c68af)['getComponent'](__dependency_1["Sprite"])["spriteFrame"] = _0x4b88de, _0x1e09f6["flag"] ? _0x1e09f6["content"]['addChild'](_0x7c68af) : _0x1e09f6['pageView']["addPage"](_0x7c68af);
    });
  }, _0x96eadb["onClose"] = function () {
    this["close"]();
  }, _0x1cd720;
}(__dependency_3["default"]))["prototype"], "closeBtn", [_0x524a76], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x42140a = (0, __dependency_0["applyDecoratedDescriptor"])(_0xd3d2fd['prototype'], "content", [_0x187299], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1dc510 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xd3d2fd["prototype"], "background", [_0x207713], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2d7f9f = (0, __dependency_0["applyDecoratedDescriptor"])(_0xd3d2fd["prototype"], 'scrollView', [_0x49ce20], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x205aa9 = (0, __dependency_0["applyDecoratedDescriptor"])(_0xd3d2fd["prototype"], "pageView", [_0x504730], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x34832c = _0xd3d2fd)) || _0x34832c));
__dependency_1["cclegacy"]["_RF"]["pop"]();
