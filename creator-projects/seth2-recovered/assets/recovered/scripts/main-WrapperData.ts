// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-WrapperData.ts.js
// SHA256: 7fef90b0650688ac949f99dabd8c296a62b4044a7392af47d0eb256ef577d7ce
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-GameDataBase";
import * as __dependency_3 from "./main-Macros";
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
(function (n) {
  void 0, void 0;
})(__dependency_0);
(function (n) {
  void 0;
})(__dependency_1);
(function (n) {
  void 0;
})(__dependency_2);
(function (n) {
  void 0;
})(__dependency_3);
__dependency_1.cclegacy._RF.push({}, "9d2b2JmbXhFEZLADzrPFFbL", "WrapperData", void 0), __publish("default", function (n) {
  function a() {
    for (var e, t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o];
    return (e = Reflect.construct(n, [this].concat(a).slice(1), new.target || a) || this).ENTER_SLOT_VIEW = !1, e.orientation = null, e._colorConfig = {
      main: "#FFD680",
      main_normal: "#FFD53A",
      main_pressed: "#FFDD61",
      main_disable: "#A18E4C",
      second: "#876A00",
      disable: "#56596F",
      btn_bg_normal: "#56596F",
      btn_bg_hover: "#696C7F",
      btn_bg_pressed: "#FFD53A",
      btn_bg_disable: "#4C5067",
      btn_label_normal: "#AAACB7",
      btn_label_hover: "#AAACB7",
      btn_label_pressed: "#876A00",
      btn_label_disable: "#76798B"
    }, e;
  }
  return (0, __dependency_0.inheritsLoose)(a, n), (0, __dependency_0.createClass)(a, [{
    key: "colorConfig",
    get: function () {
      return this._colorConfig;
    },
    set: function (n) {
      this._colorConfig = n;
    }
  }]), a;
}(__dependency_2.GameDataBase)).module = __dependency_3.Macro.BUNDLE_RESOURCES, __dependency_1.cclegacy._RF.pop();
