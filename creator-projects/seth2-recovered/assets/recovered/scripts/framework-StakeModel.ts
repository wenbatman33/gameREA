// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/framework-StakeModel.ts.js
// SHA256: b78a2f0dc20fab35395424ad66e1064a5ddcf4bcdfa6d4efb39cd280d62d0cd8
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-BaseModel";
import * as __dependency_3 from "./framework-ObjectUtils";
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
(function (_0x2d1a27) {
  void 0, void 0, void 0;
})(__dependency_0);
(function (_0x11ea09) {
  void 0;
})(__dependency_1);
(function (_0x26456a) {
  void 0;
})(__dependency_2);
(function (_0x54f4a9) {
  void 0;
})(__dependency_3);
__dependency_1['cclegacy']["_RF"]["push"]({}, "d43430u/bxO1JKhmEHis48n", 'StakeModel', void 0x0);
var _0x2e9b22 = function (_0x3df84b) {
  function _0x2f12ca() {
    var _0x47cf34;
    return (_0x47cf34 = Reflect.construct(_0x3df84b, [], new.target || _0x2f12ca) || this)["originData"] = null, _0x47cf34['stakeMapIndex'] = 0x0, _0x47cf34["data"] = {
      'stakeValue': 0x1,
      'ratioValue': 0.05,
      'stakeIndex': 0x0,
      'ratioIndex': 0x0,
      'stakeList': [],
      'ratioList': [],
      'totalStake': 0x0,
      'totalStakes': [],
      'totalStakeMap': new Map(),
      'numWinlines': 0x0,
      'totalStakeList': [],
      'totalBetValues': [],
      'extraStakeTimes': 0x1
    }, _0x47cf34;
  }
  (0, __dependency_0["inheritsLoose"])(_0x2f12ca, _0x3df84b), _0x2f12ca["Instance"] = function () {
    return this["_instance"] || (this["_instance"] = new _0x2f12ca());
  };
  var _0xb283e7 = _0x2f12ca["prototype"];
  return _0xb283e7["round"] = function (_0x317c86, _0x3a3262) {
    var _0x26c523 = Number(_0x317c86 + 'e' + _0x3a3262);
    return Number(Math["round"](_0x26c523) + 'e-' + _0x3a3262);
  }, _0xb283e7['initTotalStakes'] = function () {
    var _0x5112be = this;
    this["totalStakeMap"]['forEach'](function (_0x2c2951) {
      var _0x12fa3c = _0x2c2951['ratioIndex'],
        _0x5ed246 = _0x2c2951["stakeIndex"],
        _0x2ee5dc = (_0x2c2951["totalStake"], _0x5112be['round'](_0x5112be['stakeList'][_0x5ed246] * _0x5112be['ratioList'][_0x12fa3c] * _0x5112be["numWinlines"], 0x2));
      (_0x5112be["data"]["totalStakes"]["push"](_0x2ee5dc), _0x5112be["data"]['totalBetValues'] && _0x5112be["data"]['totalBetValues']["length"] > 0x0) && _0x5112be["data"]["totalBetValues"]["indexOf"](_0x2ee5dc) >= 0x0 && _0x5112be["data"]['totalStakeList']['push'](_0x2c2951);
    });
  }, _0xb283e7['init'] = function (_0x390ac2) {
    var _0x52e294 = this;
    this['stakeList'] = _0x390ac2["stakeList"], this["ratioList"] = _0x390ac2["ratioList"], this["stakeIndex"] = _0x390ac2["stakeIndex"], this["ratioIndex"] = _0x390ac2['ratioIndex'], this["numWinlines"] = _0x390ac2["numWinlines"], _0x390ac2["totalBetValues"] && _0x390ac2['totalBetValues']["length"] > 0x0 && (this['totalBetValues'] = _0x390ac2['totalBetValues']['slice']());
    var _0x2c8147 = [],
      _0x49244e = 0x0;
    this["stakeList"]["forEach"](function (_0x4320eb, _0x2ce81b) {
      _0x52e294["ratioList"]["forEach"](function (_0xb3cd44, _0x3fced0) {
        var _0x3fe663 = _0x52e294['round'](_0x4320eb * _0xb3cd44 * _0x390ac2["numWinlines"], 0x2);
        _0x2c8147["every"](function (_0x14e2c1) {
          return _0x14e2c1['stakeVO']["totalStake"] !== _0x3fe663;
        }) && _0x2c8147["push"]({
          'index': _0x49244e,
          'stakeVO': {
            'stakeIndex': _0x2ce81b,
            'ratioIndex': _0x3fced0,
            'totalStake': _0x3fe663,
            'index': _0x49244e
          }
        }), _0x49244e++;
      });
    }), _0x2c8147["sort"](function (_0x440786, _0x192840) {
      return _0x440786["stakeVO"]["totalStake"] - _0x192840['stakeVO']['totalStake'];
    })["map"](function (_0x560fa3, _0x4b3997) {
      var _0x5a21df = {
        'stakeIndex': _0x560fa3['stakeVO']['stakeIndex'],
        'ratioIndex': _0x560fa3["stakeVO"]["ratioIndex"],
        'totalStake': _0x560fa3["stakeVO"]["totalStake"],
        'index': _0x4b3997
      };
      _0x52e294["totalStakeMap"]["set"](_0x4b3997, _0x5a21df);
    }), this["totalStake"] = this["round"](this["stakeList"][this["stakeIndex"]] * this["ratioList"][this["ratioIndex"]] * _0x390ac2["numWinlines"], 0x2), this["initTotalStakes"]();
    var _0x3cb59a = Array["from"](this["totalStakeMap"]["keys"]())["find"](function (_0x317009) {
      return _0x52e294["totalStakeMap"]["get"](_0x317009)["totalStake"] === _0x52e294["totalStake"];
    });
    void 0x0 !== _0x3cb59a && (this["stakeMapIndex"] = _0x3cb59a);
  }, _0xb283e7["updateStake"] = function (_0x2a8129) {
    var _0x244f0d = _0x2a8129["stakeIndex"],
      _0x50cf0d = _0x2a8129["ratioIndex"];
    this["stakeIndex"] = _0x244f0d, this["ratioIndex"] = _0x50cf0d, this["totalStake"] = Math["round"](this['stakeList'][_0x244f0d] * this["ratioList"][_0x50cf0d] * this["numWinlines"] * this["data"]["extraStakeTimes"] * 0xa) / 0xa;
  }, _0xb283e7["getStakeVO"] = function (_0x18f2b7) {
    for (var _0x14adad, _0x33885, _0xd63688 = (0, __dependency_0["createForOfIteratorHelperLoose"])(this["data"]['totalStakeMap']); !(_0x33885 = _0xd63688())["done"];) {
      var _0x33323e = _0x33885["value"],
        _0x43602d = _0x33323e[0x0],
        _0x317bfd = _0x33323e[0x1];
      _0x317bfd['ratioIndex'] === _0x18f2b7["ratioIndex"] && _0x317bfd['stakeIndex'] === _0x18f2b7['stakeIndex'] && (this["stakeMapIndex"] = _0x43602d, _0x14adad = this["data"]["totalStakeMap"]["get"](_0x43602d));
    }
    return _0x14adad || (_0x14adad = this['data']["totalStakeMap"]["get"](0x0)), _0x14adad;
  }, _0xb283e7["saveOriginData"] = function () {
    this["originData"] = __dependency_3['ObjectUtils']["clone"](this['data']);
  }, _0xb283e7["restoreCurrentData"] = function () {
    this['originData'] ? (this["data"] = __dependency_3['ObjectUtils']["clone"](this["originData"]), this["originData"] = null) : console['warn']("No originData to restore.");
  }, (0, __dependency_0["createClass"])(_0x2f12ca, [{
    'key': 'stakeIndex',
    'get': function () {
      return this["data"]["stakeIndex"];
    },
    'set': function (_0x3d93ff) {
      this['data']["stakeIndex"] = _0x3d93ff, this['stakeValue'] = this["stakeList"][_0x3d93ff];
    }
  }, {
    'key': "stakeList",
    'get': function () {
      return this['data']["stakeList"];
    },
    'set': function (_0x121c31) {
      this["data"]["stakeList"] = _0x121c31;
    }
  }, {
    'key': 'stakeValue',
    'get': function () {
      return this["data"]['stakeValue'];
    },
    'set': function (_0x30159d) {
      this['data']["stakeValue"] = _0x30159d;
    }
  }, {
    'key': "totalStake",
    'get': function () {
      return this["data"]['totalStake'];
    },
    'set': function (_0x53c76c) {
      this["data"]['totalStake'] = _0x53c76c;
    }
  }, {
    'key': "ratioIndex",
    'get': function () {
      return this['data']['ratioIndex'];
    },
    'set': function (_0x3fb7f8) {
      this['data']["ratioIndex"] = _0x3fb7f8, this["ratioValue"] = this["ratioList"][_0x3fb7f8];
    }
  }, {
    'key': "ratioList",
    'get': function () {
      return this["data"]["ratioList"];
    },
    'set': function (_0x598ce3) {
      this["data"]["ratioList"] = _0x598ce3;
    }
  }, {
    'key': 'ratioValue',
    'get': function () {
      return this["data"]['ratioValue'];
    },
    'set': function (_0x556f52) {
      this["data"]['ratioValue'] = _0x556f52;
    }
  }, {
    'key': "numStakeOptions",
    'get': function () {
      return this["data"]["stakeList"]["length"];
    }
  }, {
    'key': "totalStakeMap",
    'get': function () {
      return this['data']["totalStakeMap"];
    }
  }, {
    'key': "numWinlines",
    'get': function () {
      return this["data"]["numWinlines"];
    },
    'set': function (_0x2051c1) {
      this["data"]['numWinlines'] = _0x2051c1;
    }
  }, {
    'key': "totalBetValues",
    'get': function () {
      return this['data']["totalBetValues"];
    },
    'set': function (_0x5e89d0) {
      this["data"]['totalBetValues'] = _0x5e89d0;
    }
  }, {
    'key': "extraStakeTimes",
    'set': function (_0xd59cf5) {
      this["data"]['extraStakeTimes'] = _0xd59cf5;
    }
  }]), _0x2f12ca;
}(__dependency_2['BaseModel']);
_0x2e9b22["_instance"] = null;
__publish('default', _0x2e9b22["Instance"]());
__dependency_1['cclegacy']["_RF"]["pop"]();
