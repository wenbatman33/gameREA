// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Flow.ts.js
// SHA256: ad6383b432426c01d12fa9eb0aa13ce22a537f249c14f943f60226645eb4c1ca
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-TaskQueue";
import * as __dependency_3 from "./main-FlowEvent";
import * as __dependency_4 from "./main-SingletonExtends";
var __export_0;
export { __export_0 as FlowTrigger };
var __export_1;
export { __export_1 as default };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "FlowTrigger":
      __export_0 = value;
      break;
    case "default":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
(function (t) {
  void 0;
})(__dependency_4);
var u;
__publish("FlowTrigger", void 0), __dependency_1.cclegacy._RF.push({}, "b89fb33Z5tEF4/6KMJFEYKx", "Flow", void 0), function (t) {
  t[t.AFTER_PREVIOUS = 0] = "AFTER_PREVIOUS", t[t.AFTER_ALL = 1] = "AFTER_ALL", t[t.CONCURRENT = 2] = "CONCURRENT", t[t.WITH_FLAGS = 3] = "WITH_FLAGS";
}(u || (u = __publish("FlowTrigger", {})));
__publish("default", function (t) {
  function s(a) {
    var s;
    return (s = Reflect.construct(t, [], new.target || s) || this).flowId = "", s._idx = 0, s._tag = 0, s._priority = 0, s._curPriority = 0, s._curTag = 0, s._taskManger = void 0, s.afterAllTasks = [], s._flowMap = new Map(), s.flowId = a, s._taskManger = new __dependency_2.TaskManager(), s._taskManger.eventTarget.once("completed", s.taskCompleted, (0, __dependency_0.assertThisInitialized)(s)), s._taskManger.eventTarget.on("curTaskConfig", s.setCurTaskConfig, (0, __dependency_0.assertThisInitialized)(s), !1), s;
  }
  (0, __dependency_0.inheritsLoose)(s, t);
  var l = s.prototype;
  return l.add = function (t) {
    this._idx += 1;
    for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) e[s - 1] = arguments[s];
    this._flowMap.set(this.flowId + "_" + this._idx, {
      firstTrigger: t,
      data: e
    });
  }, l.start = function () {
    var t = this;
    this._flowMap.forEach(function (a) {
      var e = a.firstTrigger,
        s = a.data,
        i = e;
      t.setTasksCount.apply(t, [e].concat(s)), s.forEach(function (a, e) {
        if (a instanceof __dependency_3.FlowEvent) {
          var s = {
            eventName: a.name,
            eventData: a.data,
            config: {
              autoComplete: a.autoComplete,
              delay: a.delay
            }
          };
          switch (i) {
            case u.CONCURRENT:
              t.addTaskQueue(s, e);
              break;
            case u.AFTER_PREVIOUS:
              t.addTaskQueue(s, t._tag);
              break;
            case u.AFTER_ALL:
              t.addAfterAll(s);
              break;
            case u.WITH_FLAGS:
              t.addWithFlags(s);
          }
        } else i = a, t._priority += 1;
      });
    });
  }, l.setTasksCount = function (t) {
    for (var a = t, e = 0, s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) i[n - 1] = arguments[n];
    i.forEach(function (t) {
      if (t instanceof __dependency_3.FlowEvent) switch (a) {
        case u.CONCURRENT:
        case u.AFTER_PREVIOUS:
          e += 1;
      } else a = t;
    }), this._taskManger.setEventCount(e);
  }, l.addTask = function (t) {
    var a = this;
    return function (e) {
      var s = function () {
        var a = t.eventName,
          s = t.eventData,
          i = {
            name: "",
            data: null,
            complete: e
          };
        a && (i.name = a), s && (i.data = s), dispatch(a, i);
      };
      if (t.config) {
        var n = t.config,
          r = n.delay,
          o = n.autoComplete;
        r ? (0, __dependency_1.tween)(a).delay(r).call(function () {
          s(), o && e();
        }).start() : (s(), o && e());
      } else s();
    };
  }, l.addTaskQueue = function (t, a, e) {
    var s = this.addTask(t);
    void 0 === e && (void 0 === this._priority ? this._priority = 0 : this._priority += 1, e = this._priority), this._tag = a, this._taskManger.pushTaskByTag(s, this._tag, e);
  }, l.addAfterAll = function (t) {
    this.afterAllTasks || (this.afterAllTasks = []), this.afterAllTasks.push(t);
  }, l.addWithFlags = function (t) {
    this._curPriority += .01, this.addTaskQueue(t, this._curTag, this._priority);
  }, l.taskCompleted = function () {
    var t,
      a = this;
    (null == (t = this.afterAllTasks) ? void 0 : t.length) > 0 && (this._taskManger.setEventCount(this.afterAllTasks.length), this.afterAllTasks.forEach(function (t) {
      a.addTaskQueue(t, a._tag);
    }), this.afterAllTasks = []);
  }, l.setCurTaskConfig = function (t) {
    this._curPriority = t.priority, this._curTag = t.tag;
  }, l.kill = function () {
    __dependency_1.Tween.stopAllByTarget(this), this._taskManger.clearAllTaskQueue();
  }, s;
}(__dependency_4.SingletonExtends));
__dependency_1.cclegacy._RF.pop();
