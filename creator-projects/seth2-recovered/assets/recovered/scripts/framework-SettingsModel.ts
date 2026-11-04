// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-SettingsModel.ts.js
// SHA256: c51caa0f7f8a9b966ecf62dd5d94a26ae0d2878f7d337a73804bd945d5fcbf77
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
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
(function (_0x1ca076) {
  void 0, void 0;
})(__dependency_0);
(function (_0x435baf) {
  void 0;
})(__dependency_1);
(function (_0x59d188) {
  void 0;
})(__dependency_2);
__dependency_1["cclegacy"]["_RF"]["push"]({}, "edc25gZ8xRJdLTLR7FE4byD", "SettingsModel", void 0x0);
var _0x2da647 = function (_0x42faff) {
  function _0x1fad9d() {
    var _0x2369df;
    return (_0x2369df = Reflect.construct(_0x42faff, [], new.target || _0x1fad9d) || this)["data"] = {
      'backgroundVolume': null,
      'effectVolume': null,
      'notify': null,
      'stopOnJackpot': null,
      'turbo': null,
      'stakeIndex': null,
      'ratioIndex': null
    }, _0x2369df;
  }
  (0, __dependency_0['inheritsLoose'])(_0x1fad9d, _0x42faff), _0x1fad9d["Instance"] = function () {
    return this["_instance"] || (this['_instance'] = new _0x1fad9d());
  };
  var _0x724034 = _0x1fad9d["prototype"];
  return _0x724034['setData'] = function (_0x293c2a) {
    var _0x29df3d = _0x293c2a['advancedSettings'],
      _0x15904a = _0x29df3d["sounds"],
      _0xf99e8a = _0x29df3d["notify"],
      _0x3fc542 = _0x29df3d["turbo"],
      _0x251c5f = _0x293c2a['autoPlay'],
      _0x23464e = _0x293c2a["stakeIndex"],
      _0x3ccf88 = _0x293c2a["ratioIndex"];
    this["data"] = {
      'backgroundVolume': _0x15904a["backgroundVolume"],
      'effectVolume': _0x15904a['effectVolume'],
      'notify': _0xf99e8a,
      'stopOnJackpot': _0x251c5f["stopOnJackpot"],
      'turbo': _0x3fc542,
      'stakeIndex': _0x23464e,
      'ratioIndex': _0x3ccf88
    };
  }, _0x724034["reset"] = function () {
    this["data"] = {
      'backgroundVolume': null,
      'effectVolume': null,
      'notify': null,
      'stopOnJackpot': null,
      'turbo': null,
      'stakeIndex': null,
      'ratioIndex': null
    };
  }, (0, __dependency_0["createClass"])(_0x1fad9d, [{
    'key': "backgroundVolume",
    'get': function () {
      return this["data"]["backgroundVolume"];
    },
    'set': function (_0x3fced4) {
      this["data"]['backgroundVolume'] = _0x3fced4;
    }
  }, {
    'key': 'effectVolume',
    'get': function () {
      return this["data"]["effectVolume"];
    },
    'set': function (_0x30ea42) {
      this["data"]["effectVolume"] = _0x30ea42;
    }
  }, {
    'key': "notify",
    'get': function () {
      return this["data"]["notify"];
    },
    'set': function (_0x41807f) {
      this["data"]["notify"] = _0x41807f;
    }
  }, {
    'key': "stopOnJackpot",
    'get': function () {
      return this["data"]["stopOnJackpot"];
    },
    'set': function (_0x25c63e) {
      this["data"]["stopOnJackpot"] = _0x25c63e;
    }
  }, {
    'key': 'turbo',
    'get': function () {
      return this["data"]['turbo'];
    },
    'set': function (_0x29d7f0) {
      this["data"]["turbo"] = _0x29d7f0;
    }
  }, {
    'key': "stakeIndex",
    'get': function () {
      return this["data"]["stakeIndex"];
    },
    'set': function (_0x1e7896) {
      this["data"]["stakeIndex"] = _0x1e7896;
    }
  }, {
    'key': "ratioIndex",
    'get': function () {
      return this["data"]["ratioIndex"];
    },
    'set': function (_0x2f302b) {
      this["data"]["ratioIndex"] = _0x2f302b;
    }
  }]), _0x1fad9d;
}(__dependency_2["BaseModel"]);
_0x2da647["_instance"] = null;
__publish('default', _0x2da647["Instance"]());
__dependency_1["cclegacy"]['_RF']["pop"]();
