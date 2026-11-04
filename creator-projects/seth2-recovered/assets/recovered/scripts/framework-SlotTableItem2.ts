// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SlotTableItem2.ts.js
// SHA256: 82834ef1279e36c8c590030b304514ba57300e449ada29b502859ab9c1011d62
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-CmmUtils";
import * as __dependency_4 from "./main-EventComponent";
import * as __dependency_5 from "./main-Decorators";
import * as __dependency_6 from "./framework-SlotFrameworkData";
import * as __dependency_7 from "./framework-SlotFrameworkEvent";
import * as __dependency_8 from "./framework-ColorModel";
import * as __dependency_9 from "./framework-PlatformModel";
import * as __dependency_10 from "./framework-type2";
import * as __dependency_11 from "./framework-CmmSlotUtils";
import * as __dependency_12 from "./framework-LoadUtils";
import * as __dependency_13 from "./framework-SlotTableViewBase";
var __export_0;
export { __export_0 as SlotTableItem2 };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "SlotTableItem2":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0xbcfe2b) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0xb30cf2) {
  void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x529591) {
  void 0;
})(__dependency_2);
(function (_0x104abd) {
  void 0;
})(__dependency_3);
(function (_0x5869c1) {
  void 0;
})(__dependency_4);
(function (_0x39d594) {
  void 0;
})(__dependency_5);
(function (_0x582f3c) {
  void 0;
})(__dependency_6);
(function (_0x12d059) {
  void 0;
})(__dependency_7);
(function (_0x37dabd) {
  void 0;
})(__dependency_8);
(function (_0x53d56a) {
  void 0;
})(__dependency_9);
(function (_0x2b34d9) {
  void 0;
})(__dependency_10);
(function (_0x13d9f0) {
  void 0;
})(__dependency_11);
(function (_0x1b3fd1) {
  void 0;
})(__dependency_12);
(function (_0x37cb08) {
  void 0;
})(__dependency_13);
var _0x452ab4, _0x3535db, _0x465fe7, _0x3cbed8, _0x461b3d, _0x3039c0, _0x4abd45, _0x21b51e, _0x57b399, _0xa5ce4f, _0x213324, _0x3b72c2, _0x413626;
__dependency_1["cclegacy"]["_RF"]["push"]({}, "e9ddec+SmBGIpB6Lf475pCv", "SlotTableItem2", void 0x0);
var _0x2dd8d4 = __dependency_1["_decorator"]['ccclass'];
__dependency_1["_decorator"]["property"], __publish("SlotTableItem2", (_0x452ab4 = _0x2dd8d4("SlotTableItem2"), _0x3535db = (0, __dependency_5["inject"])("content/bg", __dependency_1["Sprite"]), _0x465fe7 = (0, __dependency_5["inject"])("content/icon", __dependency_1["Sprite"]), _0x3cbed8 = (0, __dependency_5["inject"])("content/number", __dependency_1["Label"]), _0x461b3d = (0, __dependency_5["inject"])("content/roomId", __dependency_1["Label"]), _0x3039c0 = (0, __dependency_5["inject"])("content/rate", __dependency_1["Label"]), _0x452ab4((_0x57b399 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x21b51e = function (_0x89f243) {
  function _0x1125ed() {
    for (var _0x10816d, _0x125aa1 = arguments["length"], _0x2922b1 = new Array(_0x125aa1), _0x136606 = 0x0; _0x136606 < _0x125aa1; _0x136606++) _0x2922b1[_0x136606] = arguments[_0x136606];
    return _0x10816d = Reflect.construct(_0x89f243, [this]["concat"](_0x2922b1).slice(1), new.target || _0x1125ed) || this, (0, __dependency_0["initializerDefineProperty"])(_0x10816d, 'bg', _0x57b399, (0, __dependency_0["assertThisInitialized"])(_0x10816d)), (0, __dependency_0["initializerDefineProperty"])(_0x10816d, "icon", _0xa5ce4f, (0, __dependency_0["assertThisInitialized"])(_0x10816d)), (0, __dependency_0["initializerDefineProperty"])(_0x10816d, 'number', _0x213324, (0, __dependency_0["assertThisInitialized"])(_0x10816d)), (0, __dependency_0["initializerDefineProperty"])(_0x10816d, "roomId", _0x3b72c2, (0, __dependency_0["assertThisInitialized"])(_0x10816d)), (0, __dependency_0["initializerDefineProperty"])(_0x10816d, "rate", _0x413626, (0, __dependency_0["assertThisInitialized"])(_0x10816d)), _0x10816d['statusIsChange'] = !0x1, _0x10816d["_tableStatus"] = null, _0x10816d["status"] = null, _0x10816d["statusColorMap"] = new Map(), _0x10816d["statusIconMap"] = new Map(), _0x10816d["tableVO"] = null, _0x10816d;
  }
  (0, __dependency_0["inheritsLoose"])(_0x1125ed, _0x89f243);
  var _0x1698ef = _0x1125ed['prototype'];
  return _0x1698ef["onLoad"] = function () {
    _0x89f243['prototype']["onLoad"]["call"](this);
  }, _0x1698ef["start"] = function () {
    this["init"]();
  }, _0x1698ef["update"] = function () {
    this["statusIsChange"] && (this["updateStatus"](), this["statusIsChange"] = !0x1);
  }, _0x1698ef['onDestroy'] = function () {
    _0x89f243["prototype"]["onDestroy"]['call'](this);
  }, _0x1698ef["init"] = function () {
    this["createStatusColorMap"](), this["createStatusIconMap"](), this["setEventTouch"]();
  }, _0x1698ef["setEventTouch"] = function () {
    var _0x40b58f = this;
    __dependency_3['CmmUtils']['addBtnClickEvent'](this["node"], function () {
      _0x40b58f["node"]["getComponent"](__dependency_1['Toggle'])["isChecked"] || (dispatch(__dependency_7["SlotFrameworkEvent"]["SLOT_TABLE_START_LOADING"]), _0x40b58f["sendGetSlotTableData"](_0x40b58f['tableVO']["roomId"]), dispatch(__dependency_7["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }, {
      'delaySeconds': 0.25
    });
  }, _0x1698ef["createStatusColorMap"] = function () {
    var _0x5cc0c7 = this,
      _0x515c0b = __dependency_8["default"]['getData'](),
      _0x2edb65 = _0x515c0b["white"],
      _0x35069b = _0x515c0b["background"],
      _0x1cb231 = _0x515c0b["mainGame"],
      _0x24610f = {
        'white': {
          'bg': _0x2edb65["hover02"],
          'icon': _0x35069b[0x3c],
          'number': _0x35069b[0x3c]
        },
        'gray': {
          'bg': _0x2edb65["default02"],
          'icon': _0x2edb65['info01'],
          'number': _0x2edb65['info01']
        },
        'selfFull': {
          'bg': _0x1cb231["main"],
          'icon': _0x1cb231["auxiliary"],
          'number': _0x1cb231['auxiliary']
        },
        'selfLocked': {
          'bg': _0x1cb231['main'],
          'icon': _0x1cb231["auxiliary"],
          'number': _0x1cb231["auxiliary"]
        }
      };
    [{
      'key': __dependency_13["EStatus"]["EMPTY"],
      'value': "xin-star" == __dependency_9["default"]["getData"]()["theme"] ? _0x24610f["gray"] : _0x24610f["white"]
    }, {
      'key': __dependency_13["EStatus"]["FULL"],
      'value': 'xin-star' == __dependency_9["default"]['getData']()['theme'] ? _0x24610f["white"] : _0x24610f["gray"]
    }, {
      'key': __dependency_13["EStatus"]["LOCKED"],
      'value': _0x24610f["gray"]
    }, {
      'key': __dependency_13["EStatus"]["SELF_FULL"],
      'value': _0x24610f["selfFull"]
    }, {
      'key': __dependency_13["EStatus"]["SELF_LOCKED"],
      'value': _0x24610f['selfLocked']
    }]["forEach"](function (_0x4d8ec8) {
      _0x5cc0c7["statusColorMap"]["set"](_0x4d8ec8["key"], _0x4d8ec8["value"]);
    });
  }, _0x1698ef['createStatusIconMap'] = function () {
    var _0x2002e2 = this,
      _0x553e75 = this["data"]["getData"]()["filePaths"]["slotTableDir"];
    [{
      'key': __dependency_13["EStatus"]["EMPTY"],
      'value': __dependency_12["LoadUtils"]["getDirSp"](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], _0x553e75, "machinel_icon")
    }, {
      'key': __dependency_13["EStatus"]["FULL"],
      'value': __dependency_12["LoadUtils"]["getDirSp"](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], _0x553e75, "other_icon")
    }, {
      'key': __dependency_13["EStatus"]["LOCKED"],
      'value': __dependency_12["LoadUtils"]["getDirSp"](__dependency_2["EBundles"][__dependency_2["EBundles"]['slotFramework']], _0x553e75, 'otherLock_icon')
    }, {
      'key': __dependency_13["EStatus"]["SELF_FULL"],
      'value': __dependency_12["LoadUtils"]['getDirSp'](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], _0x553e75, 'machinel_icon')
    }, {
      'key': __dependency_13["EStatus"]['SELF_LOCKED'],
      'value': __dependency_12["LoadUtils"]['getDirSp'](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]], _0x553e75, "tableLock_icon")
    }]["forEach"](function (_0x98891e) {
      _0x2002e2["statusIconMap"]['set'](_0x98891e["key"], _0x98891e["value"]);
    });
  }, _0x1698ef['updateStatus'] = function () {
    switch (this["tableStatus"]) {
      case __dependency_10['ETableStatus']["EMPTY"]:
        this["setColor"](__dependency_13["EStatus"]["EMPTY"]), this["setIcon"](__dependency_13["EStatus"]['EMPTY']), this["status"] = __dependency_13["EStatus"]["EMPTY"];
        break;
      case __dependency_10['ETableStatus']["FULL"]:
        this["isSelf"]() ? (this['setColor'](__dependency_13["EStatus"]["SELF_FULL"]), this["setIcon"](__dependency_13["EStatus"]["SELF_FULL"]), this["status"] = __dependency_13["EStatus"]["SELF_FULL"]) : (this["setColor"](__dependency_13["EStatus"]["FULL"]), this["setIcon"](__dependency_13["EStatus"]["FULL"]), this["status"] = __dependency_13["EStatus"]["FULL"]);
        break;
      case __dependency_10['ETableStatus']['LOCKED']:
        this["isSelf"]() ? (this["setColor"](__dependency_13["EStatus"]['SELF_LOCKED']), this["setIcon"](__dependency_13["EStatus"]["SELF_LOCKED"]), this["status"] = __dependency_13["EStatus"]["SELF_LOCKED"]) : (this['setColor'](__dependency_13["EStatus"]["LOCKED"]), this["setIcon"](__dependency_13["EStatus"]['LOCKED']), this["status"] = __dependency_13["EStatus"]["LOCKED"]);
    }
  }, _0x1698ef['setColor'] = function (_0xa9d703) {
    var _0x3dc475 = this["statusColorMap"]['get'](_0xa9d703),
      _0x461b62 = _0x3dc475['bg'],
      _0x59856b = _0x3dc475["icon"],
      _0x1927ac = _0x3dc475["number"];
    this['bg']['color'] = _0x461b62, this['icon']["color"] = _0x59856b, this["number"]["color"] = _0x1927ac;
  }, _0x1698ef["setIcon"] = function (_0x44827d) {
    var _0x13b303 = this["statusIconMap"]["get"](_0x44827d);
    this["icon"]["spriteFrame"] = _0x13b303;
  }, _0x1698ef["setNumber"] = function (_0x534328) {
    this["number"]["string"] = _0x534328;
  }, _0x1698ef['setRoomId'] = function (_0x49aad2) {
    this['roomId']["string"] = _0x49aad2;
  }, _0x1698ef["setRate"] = function (_0x5a2ccf) {
    this['rate']["string"] = _0x5a2ccf;
  }, _0x1698ef['isSelf'] = function () {
    var _0x1cb3b7 = __dependency_9["default"]["getData"](),
      _0x5dec76 = _0x1cb3b7['table'],
      _0x5eee24 = _0x1cb3b7["player"],
      _0x5f3b11 = this["tableVO"],
      _0x16a65d = _0x5f3b11["user"],
      _0xb84627 = _0x5f3b11['roomId'];
    return _0x5dec76['roomId'] === _0xb84627 || (null == _0x16a65d ? void 0x0 : _0x16a65d["userId"]) === _0x5eee24["uid"];
  }, _0x1698ef["sendGetSlotTableData"] = function (_0x38ea74) {
    dispatch(__dependency_7["SlotFrameworkEvent"]["SEND_GET_SLOT_TABLE_DETAIL_REQUEST"], {
      'roomId': _0x38ea74
    });
  }, _0x1698ef["reset"] = function () {
    this["node"]["active"] = !0x0, this["tableVO"] = null, this["_tableStatus"] = null, this["status"] = null, this["statusIsChange"] = null;
  }, _0x1698ef["recycle"] = function () {
    App["pool"]["getPool"]("SLOT_TABLE_ITEM_POOL")["put"](this["node"]);
  }, _0x1698ef["select"] = function () {
    this["node"]["getComponent"](__dependency_1['Toggle'])["isChecked"] = !0x0;
  }, _0x1698ef['setData'] = function (_0x4b2e72) {
    var _0x573b5d = _0x4b2e72['number'],
      _0x5c67e2 = _0x4b2e72["roomId"],
      _0x5c92a3 = _0x4b2e72["win"],
      _0xaf02f0 = _0x4b2e72["bet"],
      _0x215dba = _0x4b2e72["status"],
      _0xcf7a46 = _0x4b2e72["today"];
    this["tableVO"] = _0x4b2e72, this["tableStatus"] = _0x215dba, this["setNumber"](('' + _0x573b5d)['padStart'](0x3, '0')), this["setRoomId"]('' + _0x5c67e2), _0xcf7a46 ? this["setRate"](0x0 === _0xcf7a46['bet'] ? __dependency_11["CmmSlotUtils"]['formatNumber'](0x0, !0x0, !0x0) + '%' : __dependency_11["CmmSlotUtils"]["formatNumber"](_0xcf7a46["win"] / _0xcf7a46['bet'] * 0x64, !0x0, !0x0) + '%') : this["setRate"](0x0 === _0xaf02f0 ? __dependency_11["CmmSlotUtils"]['formatNumber'](0x0, !0x0, !0x0) + '%' : __dependency_11["CmmSlotUtils"]["formatNumber"](_0x5c92a3 / _0xaf02f0 * 0x64, !0x0, !0x0) + '%');
  }, _0x1698ef["show"] = function () {
    this["node"]['active'] = !0x0;
  }, _0x1698ef["hide"] = function () {
    this["node"]["active"] = !0x1;
  }, _0x1698ef["addEvents"] = function () {}, (0, __dependency_0["createClass"])(_0x1125ed, [{
    'key': "data",
    'get': function () {
      return App['dataCenter']["get"](__dependency_6['default']);
    }
  }, {
    'key': "tableStatus",
    'get': function () {
      return this["_tableStatus"];
    },
    'set': function (_0x3d95d1) {
      this["_tableStatus"] = _0x3d95d1, this["statusIsChange"] = !0x0;
    }
  }]), _0x1125ed;
}(__dependency_4["default"]))['prototype'], 'bg', [_0x3535db], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0xa5ce4f = (0, __dependency_0["applyDecoratedDescriptor"])(_0x21b51e['prototype'], "icon", [_0x465fe7], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x213324 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x21b51e["prototype"], "number", [_0x3cbed8], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x3b72c2 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x21b51e["prototype"], "roomId", [_0x461b3d], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x413626 = (0, __dependency_0["applyDecoratedDescriptor"])(_0x21b51e["prototype"], "rate", [_0x3039c0], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x4abd45 = _0x21b51e)) || _0x4abd45));
__dependency_1["cclegacy"]["_RF"]["pop"]();
