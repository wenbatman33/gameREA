// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-AutoPlayModel.ts.js
// SHA256: 5c89f787f2855adf4ab3f2ab03674b5d61611c972da618e88b987554cdf4c634
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
import * as __dependency_3 from "./framework-SlotFrameworkEvent";
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
(function (_0x20e734) {
  void 0, void 0;
})(__dependency_0);
(function (_0x4683fd) {
  void 0;
})(__dependency_1);
(function (_0x447b49) {
  void 0;
})(__dependency_2);
(function (_0x43894f) {
  void 0;
})(__dependency_3);
__dependency_1["cclegacy"]['_RF']['push']({}, '6f832sx8eBFsZhkdE7kaAEA', "AutoPlayModel", void 0x0);
var _0x4342d6 = function (_0x40f2fb) {
  function _0x50448c() {
    var _0x442b60;
    return (_0x442b60 = Reflect.construct(_0x40f2fb, [], new.target || _0x50448c) || this)["data"] = {
      'active': !0x1,
      'spinsRemaining': 0x0
    }, _0x442b60;
  }
  return (0, __dependency_0['inheritsLoose'])(_0x50448c, _0x40f2fb), _0x50448c["Instance"] = function () {
    return this["_instance"] || (this["_instance"] = new _0x50448c());
  }, (0, __dependency_0['createClass'])(_0x50448c, [{
    'key': "active",
    'get': function () {
      return this["data"]['active'];
    },
    'set': function (_0x42ab4a) {
      this['data']["active"] = _0x42ab4a;
    }
  }, {
    'key': "spinsRemaining",
    'get': function () {
      return this['data']["spinsRemaining"];
    },
    'set': function (_0x27659a) {
      this["data"]["spinsRemaining"] = _0x27659a, dispatch(__dependency_3["SlotFrameworkEvent"]["SET_AUTO_SPIN_COUNT"], {
        'data': this["data"]['spinsRemaining']
      });
    }
  }]), _0x50448c;
}(__dependency_2["BaseModel"]);
_0x4342d6['_instance'] = null;
__publish('default', _0x4342d6['Instance']());
__dependency_1["cclegacy"]["_RF"]["pop"]();
