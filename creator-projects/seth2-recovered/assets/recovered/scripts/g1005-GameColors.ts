// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameColors.ts.js
// SHA256: ec3cfc1258e0aeb0ac42861ea279ef572845c93caab1ccb5132f096a89eafd03
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EUiColorKeys };
var __export_1;
export { __export_1 as DARK };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EUiColorKeys":
      __export_0 = value;
      break;
    case "DARK":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
__publish("EUiColorKeys", void 0), __dependency_0.cclegacy._RF.push({}, "aa840sFe0RHCbJb9DlN5nKO", "GameColors", void 0);
var a,
  o = __publish("DARK", {
    mode: "dark",
    data: {
      mainGame: {
        auxiliary: new __dependency_0.Color("#4e3487"),
        main: new __dependency_0.Color("#ab84ff"),
        mainHover: new __dependency_0.Color("#896acc"),
        topbar: new __dependency_0.Color(42, 26, 77, 209.1)
      },
      record: {
        5: new __dependency_0.Color(255, 255, 255, 12.75),
        10: new __dependency_0.Color(255, 255, 255, 255 * .24)
      },
      background: {
        0: new __dependency_0.Color("#c9c9cc"),
        20: new __dependency_0.Color("#a9a9ad"),
        40: new __dependency_0.Color("#88898e"),
        60: new __dependency_0.Color("#68696f"),
        80: new __dependency_0.Color("#474951"),
        100: new __dependency_0.Color("#272932")
      },
      white: {
        info01: new __dependency_0.Color("#ffffff"),
        default01: new __dependency_0.Color(255, 255, 255, 38.25),
        default02: new __dependency_0.Color(255, 255, 255, 255 * .24),
        hover01: new __dependency_0.Color(255, 255, 255, 76.5),
        hover02: new __dependency_0.Color(255, 255, 255, 255 * .08),
        labelDefault01: new __dependency_0.Color(255, 255, 255, 153),
        textAuto01: new __dependency_0.Color("#ffffff")
      },
      red: {
        primary: new __dependency_0.Color("#ff6433")
      },
      green: {
        primary: new __dependency_0.Color("#3ae300")
      },
      yellow: {
        primary: new __dependency_0.Color("#ffd680"),
        secondary: new __dependency_0.Color(255, 168, 0, 76.5)
      }
    }
  }).data;
a || (a = __publish("EUiColorKeys", {}));
var f = {};
for (var t in o) for (var w in o[t]) {
  var i = c(t + "_" + w);
  f[i] && Log.e("碰撞檢測: " + t + "_" + w + " 的哈希碰撞"), f[i] = t + "_" + w, a[t + "_" + w] = i;
}
function c(e) {
  for (var n = 0, r = 0; r < e.length; r++) {
    n = (n << 5) - n + e.charCodeAt(r), n |= 0;
  }
  return n;
}
__dependency_0.cclegacy._RF.pop();
