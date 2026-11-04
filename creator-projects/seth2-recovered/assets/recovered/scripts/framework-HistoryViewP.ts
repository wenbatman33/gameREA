// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-HistoryViewP.ts.js
// SHA256: f7e8aa21a55ba835515d6a66f498c3eedad6fc6d2d11abfe017e61742e32722d
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Decorators";
import * as __dependency_3 from "./framework-HistoryViewBase";
import * as __dependency_4 from "./main-Config";
import * as __dependency_5 from "./main-Bundles";
import * as __dependency_6 from "./framework-RecordViewP";
import * as __dependency_7 from "./main-CmmUtils";
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
(function (_0xff5389) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x1330fd) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x35b3c5) {
  void 0;
})(__dependency_2);
(function (_0x12e10a) {
  void 0;
})(__dependency_3);
(function (_0x3654fb) {
  void 0;
})(__dependency_4);
(function (_0x2be821) {
  void 0;
})(__dependency_5);
(function (_0x294c73) {
  void 0;
})(__dependency_6);
(function (_0x5a5acf) {
  void 0;
})(__dependency_7);
var _0x4e2ef3, _0x1ce95e, _0x397ce5, _0x341612, _0x3f031f, _0x1e515b, _0x5f5223, _0x2e782f, _0x3bd895, _0x42344e, _0x5e954d, _0x6c9fd6, _0x3f8f69, _0x400b21, _0x13f8d7, _0x36b6e6, _0x266178, _0x262a8a, _0x30c112, _0x2738e4, _0x46bf96, _0x58bfd1, _0x1b0d72;
__dependency_1["cclegacy"]['_RF']["push"]({}, "0f09fZvPj9KBLKPdM2f/TpC", 'HistoryViewP', void 0x0);
var _0x32f5a4 = __dependency_1['_decorator']["ccclass"];
__dependency_1['_decorator']['property'], __publish("default", (_0x4e2ef3 = _0x32f5a4('HistoryViewP'), _0x1ce95e = (0, __dependency_2["inject"])("content/table/title/gameNameMask", __dependency_1['Node']), _0x397ce5 = (0, __dependency_2["inject"])("content/table/title/gameNameMask/Label", __dependency_1['Node']), _0x341612 = (0, __dependency_2["inject"])("content/table/title/betNumMask", __dependency_1['Node']), _0x3f031f = (0, __dependency_2["inject"])("content/table/title/betNumMask/Label", __dependency_1['Node']), _0x1e515b = (0, __dependency_2["inject"])("content/table/title/totalWinMask", __dependency_1['Node']), _0x5f5223 = (0, __dependency_2["inject"])('content/table/title/totalWinMask/Label', __dependency_1['Node']), _0x2e782f = (0, __dependency_2["inject"])("content/table/title/profitMask", __dependency_1['Node']), _0x3bd895 = (0, __dependency_2["inject"])("content/table/title/profitMask/Label", __dependency_1['Node']), _0x42344e = (0, __dependency_2["inject"])("content/table/title/countMask", __dependency_1['Node']), _0x5e954d = (0, __dependency_2["inject"])("content/table/title/countMask/Label", __dependency_1['Node']), _0x4e2ef3((_0x400b21 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x3f8f69 = function (_0xa3dc3) {
  function _0x2aa40f() {
    for (var _0x4ef534, _0x5ff4a4 = arguments['length'], _0x96acdc = new Array(_0x5ff4a4), _0x577f20 = 0x0; _0x577f20 < _0x5ff4a4; _0x577f20++) _0x96acdc[_0x577f20] = arguments[_0x577f20];
    return _0x4ef534 = Reflect.construct(_0xa3dc3, [this]["concat"](_0x96acdc).slice(1), new.target || _0x2aa40f) || this, (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, 'gameNameMask', _0x400b21, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, "gameNameLabel", _0x13f8d7, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, 'betNumMask', _0x36b6e6, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, "betNumLabel", _0x266178, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, "totalWinMask", _0x262a8a, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, 'totalWinLabel', _0x30c112, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, 'profitMask', _0x2738e4, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, "profitLabel", _0x46bf96, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, "countMask", _0x58bfd1, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), (0, __dependency_0["initializerDefineProperty"])(_0x4ef534, "countLabel", _0x1b0d72, (0, __dependency_0["assertThisInitialized"])(_0x4ef534)), _0x4ef534;
  }
  (0, __dependency_0["inheritsLoose"])(_0x2aa40f, _0xa3dc3), _0x2aa40f["getPrefabUrl"] = function () {
    return "prefabs/view/HistoryViewP";
  };
  var _0x27fd04 = _0x2aa40f["prototype"];
  return _0x27fd04['start'] = function () {
    _0xa3dc3["prototype"]["start"]["call"](this), this["initLabelMarquee"]();
  }, _0x27fd04["initLabelMarquee"] = function () {
    var _0x519c89 = this;
    [{
      'mask': this["gameNameMask"],
      'label': this["gameNameLabel"]
    }, {
      'mask': this["betNumMask"],
      'label': this["betNumLabel"]
    }, {
      'mask': this["totalWinMask"],
      'label': this["totalWinLabel"]
    }, {
      'mask': this["profitMask"],
      'label': this["profitLabel"]
    }, {
      'mask': this['countMask'],
      'label': this["countLabel"]
    }]['forEach'](function (_0x57098e) {
      var _0x5ea49a = {
        'maskNode': _0x57098e["mask"],
        'labelNode': _0x57098e["label"],
        'delayTime': 0x2
      };
      _0x519c89["scheduleOnce"](function () {
        __dependency_7["CmmUtils"]["labelMarquee"](_0x5ea49a);
      });
    });
  }, _0x27fd04["setEventTouch"] = function () {
    var _0x141a7c = this;
    _0xa3dc3['prototype']["setEventTouch"]["call"](this), this["closeBtn"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      _0x141a7c['onClose'](), App["uiManager"]["close"](__dependency_6["default"]);
    }), this["bbr"]['on'](__dependency_1["NodeEventType"]["TOUCH_END"], function () {
      _0x141a7c["onClose"](), App["uiManager"]["close"](__dependency_6["default"]);
    }), this["backBtn"]['on'](__dependency_1["NodeEventType"]['TOUCH_END'], function () {
      _0x141a7c["onClose"](), App["uiManager"]["open"]({
        'type': __dependency_6["default"],
        'bundle': __dependency_5["EBundles"][__dependency_5["EBundles"]["slotFramework"]],
        'zIndex': __dependency_4["ViewZOrder"]['UI'],
        'name': '押注紀錄P'
      });
    });
  }, (0, __dependency_0["createClass"])(_0x2aa40f, [{
    'key': "getHistoryViewItemPrefabUrl",
    'get': function () {
      return this["data"]["getData"]()["filePaths"]["historyItemPPrefab"];
    }
  }]), _0x2aa40f;
}(__dependency_3["default"]))['prototype'], "gameNameMask", [_0x1ce95e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x13f8d7 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69["prototype"], "gameNameLabel", [_0x397ce5], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x36b6e6 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69['prototype'], "betNumMask", [_0x341612], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x266178 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69['prototype'], "betNumLabel", [_0x3f031f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x262a8a = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69['prototype'], "totalWinMask", [_0x1e515b], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x30c112 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69["prototype"], 'totalWinLabel', [_0x5f5223], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x2738e4 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69["prototype"], "profitMask", [_0x2e782f], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x46bf96 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69["prototype"], "profitLabel", [_0x3bd895], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x58bfd1 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69['prototype'], "countMask", [_0x42344e], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x1b0d72 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x3f8f69["prototype"], "countLabel", [_0x5e954d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x6c9fd6 = _0x3f8f69)) || _0x6c9fd6));
__dependency_1["cclegacy"]["_RF"]['pop']();
