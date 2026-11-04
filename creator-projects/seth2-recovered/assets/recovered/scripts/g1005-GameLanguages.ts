// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-GameLanguages.ts.js
// SHA256: b090ca735fcb1b9571a981d3669fdffda07835a28579d453e2c394a4a4acbc70
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as ZH_TW };
var __export_1;
export { __export_1 as ZH_CN };
var __export_2;
export { __export_2 as EN };
var __export_3;
export { __export_3 as VN };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ZH_TW":
      __export_0 = value;
      break;
    case "ZH_CN":
      __export_1 = value;
      break;
    case "EN":
      __export_2 = value;
      break;
    case "VN":
      __export_3 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (a) {
  void 0;
})(__dependency_0);
__dependency_0.cclegacy._RF.push({}, "81245kTwHZKeorW+mlZYtcM", "GameLanguages", void 0);
__publish("ZH_TW", {
  language: "zh-tw",
  data: {
    confirm: "確定",
    cancel: "取消"
  }
}), __publish("ZH_CN", {
  language: "zh-cn",
  data: {
    confirm: "确定",
    cancel: "取消"
  }
}), __publish("EN", {
  language: "en",
  data: {
    confirm: "Sure",
    cancel: "Cancel"
  }
}), __publish("VN", {
  language: "vn",
  data: {
    confirm: "",
    cancel: ""
  }
});
__dependency_0.cclegacy._RF.pop();
