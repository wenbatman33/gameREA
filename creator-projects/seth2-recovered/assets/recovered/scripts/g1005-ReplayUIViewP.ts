// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/g1005-ReplayUIViewP.ts.js
// SHA256: 7c6b669c961a24d12c9270aa018e6e76c34700e63762b09b5208a5fe25721874
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./framework-SlotFrameworkEvent";
import * as __dependency_3 from "./g1005-GameData";
import * as __dependency_4 from "./g1005-GameEvent";
import * as __dependency_5 from "./framework-ReplayUIViewBase";
import * as __dependency_6 from "./framework-ReplayModel";
import * as __dependency_7 from "./framework-ReplayUIViewPBase";
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
(function (t) {
  void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0, void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
(function (t) {
  void 0;
})(__dependency_5);
(function (t) {
  void 0;
})(__dependency_6);
(function (t) {
  void 0;
})(__dependency_7);
var h;
__dependency_1.cclegacy._RF.push({}, "f94c20XWs9PnJch/LOzb01M", "ReplayUIViewP", void 0);
var _ = __dependency_1._decorator.ccclass;
__publish("default", _("ReplayUIViewP")(h = function (t) {
  function i() {
    return Reflect.construct(t, arguments, new.target || i) || this;
  }
  (0, __dependency_0.inheritsLoose)(i, t);
  var s = i.prototype;
  return s.start = function () {
    this.init(), this.switchShowContent(__dependency_5.REPLAY_TYPE.INFO_BAR);
  }, s.onLoad = function () {
    t.prototype.onLoad.call(this);
  }, s.onDestroy = function () {
    t.prototype.onDestroy.call(this);
  }, s.boardAgainBtnHandler = function () {
    this.switchShowContent(__dependency_5.REPLAY_TYPE.INFO_BAR), dispatch(__dependency_2.SlotFrameworkEvent.KILL_SYMBOLS), __dependency_6.default.index = 0;
    var t = __dependency_6.default.getData();
    dispatch(__dependency_2.SlotFrameworkEvent.REPLAY_AGAIN, t);
  }, s.quickStop = function () {
    dispatch(__dependency_4.GameEvent.REPLAY_START_QUICK_STOP);
  }, s.addEvents = function () {
    var n = this;
    t.prototype.addEvents.call(this), this.on(__dependency_2.SlotFrameworkEvent.REPLAY_BACK_TO_GAME, (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(e) {
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            n.data.restoreCurrentGameData(), dispatch(__dependency_4.GameEvent.RESET_AND_OPEN_GAME_VIEW, {
              data: __dependency_3.EInitName.INIT_GAME
            });
          case 2:
          case "end":
            return t.stop();
        }
      }, t);
    }))), this.on(__dependency_2.SlotFrameworkEvent.SHOW_REPLAY_END, function () {
      dispatch(__dependency_2.SlotFrameworkEvent.SHOW_REPLAY_BOARD_ALERT);
    });
  }, (0, __dependency_0.createClass)(i, [{
    key: "data",
    get: function () {
      return __dependency_3.default.ins;
    }
  }]), i;
}(__dependency_7.default)) || h);
__dependency_1.cclegacy._RF.pop();
