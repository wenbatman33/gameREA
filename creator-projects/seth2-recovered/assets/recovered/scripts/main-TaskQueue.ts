// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-TaskQueue.ts.js
// SHA256: da408ae304e1b0db2a641f70dd707d11ee324cf88e6675d0ba281413c92f4268
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-SingletonExtends";
var __export_0;
export { __export_0 as ETaskTag };
var __export_1;
export { __export_1 as TaskQueue };
var __export_2;
export { __export_2 as TaskManager };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "ETaskTag":
      __export_0 = value;
      break;
    case "TaskQueue":
      __export_1 = value;
      break;
    case "TaskManager":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
__publish("ETaskTag", void 0), __dependency_1.cclegacy._RF.push({}, "46530OmLmFKkK+9DLcLK5e/", "TaskQueue", void 0);
var a,
  r = function (t, e) {
    this.task = void 0, this.priority = void 0, this.task = t, this.priority = e;
  };
!function (t) {
  t[t.GAME_UPDATED = 1] = "GAME_UPDATED";
}(a || (a = __publish("ETaskTag", {})));
var o = __publish("TaskQueue", function (t) {
  function s() {
    for (var e, s = arguments.length, u = new Array(s), i = 0; i < s; i++) u[i] = arguments[i];
    return (e = Reflect.construct(t, [this].concat(u).slice(1), new.target || s) || this)._curTask = null, e._taskQueue = Array(), e.eventTarget = new __dependency_1.EventTarget(), e._isCompleted = !1, e;
  }
  (0, __dependency_0.inheritsLoose)(s, t);
  var i = s.prototype;
  return i.pushTask = function (t, e) {
    void 0 === e && (e = 0);
    var s = new r(t, e);
    if (this._taskQueue.length > 0) for (var u = this._taskQueue.length - 1; u >= 0; --u) if (this._taskQueue[u].priority <= e) return void this._taskQueue.splice(u + 1, 0, s);
    this._taskQueue.splice(0, 0, s), null == this._curTask && this.executeNextTask();
  }, i.clearTask = function () {
    this._curTask = null, this._taskQueue = [];
  }, i.getCurTaskPriority = function () {
    return this._curTask.priority;
  }, i.executeNextTask = function () {
    var t = this,
      e = this._taskQueue.shift() || null;
    this._curTask = e, e && e.task(function () {
      e === t._curTask ? (t.eventTarget.emit("completed"), t.executeNextTask()) : (0, __dependency_1.warn)("your task finish twice!");
    });
  }, s;
}(__dependency_2.SingletonExtends));
__publish("TaskManager", function () {
  function t() {
    this._taskQueues = {}, this.count = 0, this.eventTarget = new __dependency_1.EventTarget();
  }
  t.Instance = function () {
    return this._instance || (this._instance = new t());
  }, t.destory = function () {
    this._instance = null;
  };
  var e = t.prototype;
  return e.pushTask = function (t, e) {
    return void 0 === e && (e = 0), this.getTaskQueue().pushTask(t, e);
  }, e.pushTaskByTag = function (t, e, s) {
    return void 0 === s && (s = 0), this.getTaskQueue(e).pushTask(t, s);
  }, e.clearTaskQueue = function (t) {
    void 0 === t && (t = 0);
    var e = this._taskQueues[t];
    e && e.clearTask();
  }, e.clearAllTaskQueue = function () {
    for (var t in this._taskQueues) this._taskQueues[t].clearTask();
    this._taskQueues = {};
  }, e.getTaskQueue = function (t) {
    var e = this;
    void 0 === t && (t = 0);
    var s = this._taskQueues[t];
    return null == s && (s = new o(), this._taskQueues[t] = s, void 0 !== this.count && s.eventTarget.on("completed", function () {
      var s = {
        tag: t,
        priority: e._taskQueues[t].getCurTaskPriority()
      };
      e.count -= 1, e.eventTarget.emit("curTaskConfig", s), 0 === e.count && e.eventTarget.emit("completed");
    }, this, !1)), s;
  }, e.setEventCount = function (t) {
    this.count = t;
  }, t;
}())._instance = null, __dependency_1.cclegacy._RF.pop();
