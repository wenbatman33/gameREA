// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CmdDefines.ts.js
// SHA256: 1260b2b8194ec57cb663f6ba01e26dcfd3c193b56c7d061fdcaae14a5601e98d
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as EMainCmd };
var __export_1;
export { __export_1 as MainCmd };
var __export_2;
export { __export_2 as SUB_CMD_SYS };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "EMainCmd":
      __export_0 = value;
      break;
    case "MainCmd":
      __export_1 = value;
      break;
    case "SUB_CMD_SYS":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (C) {
  void 0;
})(__dependency_0);
__publish("EMainCmd", void 0), __dependency_0.cclegacy._RF.push({}, "8b0d47nT5xN3LlWFAW1DU7w", "CmdDefines", void 0);
var _;
__publish("MainCmd", {
  CMD_SYS: 1,
  CMD_GAME: 2,
  CMD_LOBBY: 3,
  CMD_PAY: 4,
  CMD_CHAT: 5
});
!function (C) {
  C.CMD_WRAPPER = "WRAPPER", C.CMD_SYS = "SYS", C.CMD_GAME = "GAME", C.CMD_LOBBY = "LOBBY", C.CMD_PAY = "PAY", C.CMD_CHAT = "CHAT";
}(_ || (_ = __publish("EMainCmd", {})));
__publish("SUB_CMD_SYS", {
  CMD_SYS_HEART: 1
});
__dependency_0.cclegacy._RF.pop();
