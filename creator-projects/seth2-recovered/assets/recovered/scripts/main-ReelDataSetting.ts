// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-ReelDataSetting.ts.js
// SHA256: a72de3b1caa7457c7541c436bd116db28b3366e02471ed72e1766c00bb467bb3
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as ReelDataSetting };
var __export_1;
export { __export_1 as ReelDataSettingObj };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ReelDataSetting":
      __export_0 = value;
      break;
    case "ReelDataSettingObj":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0;
})(__dependency_0);
__dependency_0.cclegacy._RF.push({}, "7f53chreC1I27vZPBNHh4hu", "ReelDataSetting", void 0);
var n = __publish("ReelDataSetting", function () {
  function t() {
    this.key = "reel_data_setting_", this.allStop = !1, this.skipWinScroll = !1, this.nowSpeedIndex = 0, this.userId = void 0, this.speedList = [1, .68, .5, .5], this.expectStrip = void 0;
  }
  var e = t.prototype;
  return e.getAllStop = function () {
    return this.allStop;
  }, e.setAllStop = function (t) {
    this.allStop = t, this.saveData();
  }, e.getSpeedIndex = function () {
    return this.nowSpeedIndex;
  }, e.getSkipWinScroll = function () {
    return this.skipWinScroll;
  }, e.setSpeedIndex = function (t) {
    this.nowSpeedIndex = t, this.allStop = 3 === t, this.skipWinScroll = 3 === t, this.saveData();
  }, e.getSpeed = function () {
    return this.speedList[this.nowSpeedIndex];
  }, e.changeSpeed = function () {
    return this.setSpeedIndex((this.nowSpeedIndex + 1) % this.speedList.length), this.nowSpeedIndex;
  }, e.saveData = function () {
    dispatch(t.CHANGE_SPEED, this.speedList[this.nowSpeedIndex], this.allStop);
  }, e.getData = function () {}, t;
}());
n.CHANGE_SPEED = "REEL_DATA_SETTING_CHANGE_SPEED";
__publish("ReelDataSettingObj", new n());
__dependency_0.cclegacy._RF.pop();
