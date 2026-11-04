// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-AvatarToggleItem.ts.js
// SHA256: 1bee8c90967ce0e591fd5fccf6ca33c24b8d368093e54313fc85382fd0668d99
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-Bundles";
import * as __dependency_3 from "./main-EventComponent";
import * as __dependency_4 from "./main-Decorators";
import * as __dependency_5 from "./framework-SlotFrameworkEvent";
import * as __dependency_6 from "./framework-UrlUtils2";
var __export_0;
export { __export_0 as AvatarToggleItem };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "AvatarToggleItem":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (_0x14f96b) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (_0x5aded8) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (_0x494519) {
  void 0;
})(__dependency_2);
(function (_0xa1878c) {
  void 0;
})(__dependency_3);
(function (_0x3580cb) {
  void 0;
})(__dependency_4);
(function (_0x2f5a8b) {
  void 0;
})(__dependency_5);
(function (_0xe8fc6b) {
  void 0;
})(__dependency_6);
var _0x21184a, _0x593673, _0x30c2fb, _0x5ddeab, _0x5db953, _0x372fb9, _0x24afda, _0x1290b1;
__dependency_1["cclegacy"]["_RF"]["push"]({}, 'c29a6CKHf5KpJU/v72+XUi8', "AvatarToggleItem", void 0x0);
var _0x42af8b = __dependency_1["_decorator"]["ccclass"];
__dependency_1["_decorator"]['property'], __publish("AvatarToggleItem", (_0x21184a = _0x42af8b("AvatarToggleItem"), _0x593673 = (0, __dependency_4["inject"])("content", __dependency_1['Node']), _0x30c2fb = (0, __dependency_4["inject"])("content/mask/avatar", __dependency_1['Node']), _0x21184a(((_0x1290b1 = function (_0x5ec534) {
  function _0x4a1f76() {
    for (var _0x21dae1, _0x1affca = arguments["length"], _0x3e748d = new Array(_0x1affca), _0xc629b3 = 0x0; _0xc629b3 < _0x1affca; _0xc629b3++) _0x3e748d[_0xc629b3] = arguments[_0xc629b3];
    return _0x21dae1 = Reflect.construct(_0x5ec534, [this]['concat'](_0x3e748d).slice(1), new.target || _0x4a1f76) || this, (0, __dependency_0["initializerDefineProperty"])(_0x21dae1, "content", _0x372fb9, (0, __dependency_0["assertThisInitialized"])(_0x21dae1)), (0, __dependency_0["initializerDefineProperty"])(_0x21dae1, "avatar", _0x24afda, (0, __dependency_0["assertThisInitialized"])(_0x21dae1)), _0x21dae1['id'] = null, _0x21dae1;
  }
  (0, __dependency_0['inheritsLoose'])(_0x4a1f76, _0x5ec534);
  var _0x9a7fdf = _0x4a1f76["prototype"];
  return _0x9a7fdf['onLoad'] = function () {}, _0x9a7fdf['start'] = function () {}, _0x9a7fdf["onDestroy"] = function () {
    _0x5ec534["prototype"]["onDestroy"]["call"](this);
  }, _0x9a7fdf['addEventTouch'] = function () {
    var _0x147f53 = this,
      _0x4e5e70 = this["node"]["getComponent"](__dependency_1["Toggle"]),
      _0x446e73 = new __dependency_1["EventHandler"]();
    _0x446e73["target"] = this["node"], _0x446e73['component'] = 'AvatarToggleItem', _0x446e73["handler"] = __dependency_1["Toggle"]["EventType"]['TOGGLE'], _0x446e73["emit"] = function () {
      _0x147f53["updateOpacity"](), _0x4e5e70['isChecked'] && (dispatch(__dependency_5["SlotFrameworkEvent"]['UPDATE_CHECK_AVATAR_ID'], {
        'data': _0x147f53['id']
      }), dispatch(__dependency_5["SlotFrameworkEvent"]["PLAY_CLICK_BTM"]));
    }, _0x4e5e70["checkEvents"]['push'](_0x446e73);
  }, _0x9a7fdf["updateOpacity"] = function () {
    var _0x10e805 = this["node"]["getComponent"](__dependency_1["Toggle"])["isChecked"],
      _0x8cae28 = _0x4a1f76["OPACITY_CONFIG"],
      _0x1cae74 = _0x8cae28["isCheck"],
      _0x14f1aa = _0x8cae28["noCheck"];
    this["content"]["getComponent"](__dependency_1['UIOpacity'])["opacity"] = _0x10e805 ? _0x1cae74 : _0x14f1aa;
  }, _0x9a7fdf["setAvatar"] = function (_0x35a01d) {
    var _0x891436 = this,
      _0x5242f4 = __dependency_6["default"]["GetAvatarUrl"]('' + _0x35a01d),
      _0x8ba75a = this['avatar']['getComponent'](__dependency_1["Sprite"]),
      _0x4b1234 = new __dependency_1["Size"](this["avatar"]["getComponent"](__dependency_1["UITransform"])["contentSize"]);
    _0x8ba75a["loadRemoteImage"]({
      'url': _0x5242f4,
      'view': App["entryManager"]["getEntry"](__dependency_2["EBundles"][__dependency_2["EBundles"]["slotFramework"]])["gameView"],
      'complete': function () {
        _0x891436['avatar']["getComponent"](__dependency_1["UITransform"])['setContentSize'](_0x4b1234);
      }
    });
  }, _0x9a7fdf["init"] = function (_0x3c6844) {
    this['id'] = _0x3c6844, this["addEventTouch"](), this["setAvatar"](_0x3c6844);
  }, _0x4a1f76;
}(__dependency_3['default']))["OPACITY_CONFIG"] = {
  'isCheck': 0xff,
  'noCheck': 0x64
}, _0x372fb9 = (0, __dependency_0["applyDecoratedDescriptor"])((_0x5db953 = _0x1290b1)["prototype"], "content", [_0x593673], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x24afda = (0, __dependency_0["applyDecoratedDescriptor"])(_0x5db953["prototype"], 'avatar', [_0x30c2fb], {
  'configurable': !0x0,
  'enumerable': !0x0,
  'writable': !0x0,
  'initializer': function () {
    return null;
  }
}), _0x5ddeab = _0x5db953)) || _0x5ddeab));
__dependency_1["cclegacy"]["_RF"]["pop"]();
