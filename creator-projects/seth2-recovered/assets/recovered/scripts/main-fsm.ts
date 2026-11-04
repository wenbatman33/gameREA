// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-fsm.ts.js
// SHA256: b53d39b07c35334ffe7c631322b52647e8f38882df670356dc96d134dfc906be
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-validate";
import * as __dependency_3 from "./main-CmmUtils";
var __export_0;
export { __export_0 as randomUUID };
var __export_1;
export { __export_1 as InvalidTransition };
var __export_2;
export { __export_2 as InvalidConstructor };
var __export_3;
export { __export_3 as StateMachine };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "randomUUID":
      __export_0 = value;
      break;
    case "InvalidTransition":
      __export_1 = value;
      break;
    case "InvalidConstructor":
      __export_2 = value;
      break;
    case "StateMachine":
      __export_3 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (t) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (t) {
  void 0, void 0;
})(__dependency_1);
(function (t) {
  void 0, void 0;
})(__dependency_2);
(function (t) {
  void 0;
})(__dependency_3);
__publish("randomUUID", l), __dependency_1.cclegacy._RF.push({}, "8f3d7JWJ75BzJyj9NtzZIc1", "fsm", void 0);
var v = Symbol("fiume.prevent-constructor");
function l() {
  return crypto ? __dependency_3.CmmUtils.getFakeSpinId() : (0, __dependency_1.pseudoRandomRangeInt)(Date.now(), 0, 999999999) + "";
}
var p = __publish("InvalidTransition", function (t) {
    function n() {
      return Reflect.construct(t, arguments, new.target || n) || this;
    }
    return (0, __dependency_0.inheritsLoose)(n, t), n;
  }((0, __dependency_0.wrapNativeSuper)(Error))),
  y = __publish("InvalidConstructor", function (t) {
    function n() {
      return Reflect.construct(t, arguments, new.target || n) || this;
    }
    return (0, __dependency_0.inheritsLoose)(n, t), n;
  }((0, __dependency_0.wrapNativeSuper)(Error))),
  w = (0, __dependency_0.classPrivateFieldLooseKey)("finished"),
  b = (0, __dependency_0.classPrivateFieldLooseKey)("initial"),
  m = (0, __dependency_0.classPrivateFieldLooseKey)("states"),
  k = (0, __dependency_0.classPrivateFieldLooseKey)("sharedData"),
  D = (0, __dependency_0.classPrivateFieldLooseKey)("subscriptions");
__publish("StateMachine", function () {
  function t(t, e, r, i) {
    if (this.id = void 0, this.context = void 0, Object.defineProperty(this, w, {
      writable: !0,
      value: !1
    }), Object.defineProperty(this, b, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, m, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, k, {
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, D, {
      writable: !0,
      value: void 0
    }), r !== v) throw new y("StateMachine must be created with `StateMachine.from`");
    this.id = (null == e ? void 0 : e.id) || l(), this.context = (null == e ? void 0 : e.context) || {}, (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k] = (null == e ? void 0 : e.sharedData) || {}, (0, __dependency_0.classPrivateFieldLooseBase)(this, m)[m] = new Map(t.map(function (t) {
      return [t.id, t];
    })), (0, __dependency_0.classPrivateFieldLooseBase)(this, D)[D] = new Map(), (0, __dependency_0.classPrivateFieldLooseBase)(this, b)[b] = i ? (0, __dependency_0.classPrivateFieldLooseBase)(this, m)[m].get(i) : t.find(function (t) {
      return t.initial;
    });
  }
  var e = t.prototype;
  return e.createSnapshot = function () {
    return {
      snapshotId: l(),
      machineId: this.id,
      stateId: this.current.id,
      context: structuredClone(this.context)
    };
  }, t.fromSnapshot = function (e, n, r) {
    var i = e.stateId;
    return (0, __dependency_2.validateHydration)(n, i), new t(n, {
      id: e.machineId,
      context: e.context,
      sharedData: r
    }, v, i);
  }, t.from = function (e, n) {
    return (0, __dependency_2.validateStates)(e), new t(e, n, v);
  }, e.sendAsync = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(e) {
      var r, i;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!(0, __dependency_0.classPrivateFieldLooseBase)(this, w)[w]) {
              t.next = 2;
              break;
            }
            throw new p("Machine cannot send to a machine in final state");
          case 2:
            if (r = {
              context: this.context,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
              event: e
            }, i = this.current, t.t0 = i.transitionGuard, !t.t0) {
              t.next = 9;
              break;
            }
            return t.next = 8, i.transitionGuard(r);
          case 8:
            t.t0 = !t.sent;
          case 9:
            if (!t.t0) {
              t.next = 11;
              break;
            }
            return t.abrupt("return");
          case 11:
            return t.next = 13, this.executeStateAsync(this.current, e);
          case 13:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), e.send = function (t) {
    if ((0, __dependency_0.classPrivateFieldLooseBase)(this, w)[w]) throw new p("Machine cannot send to a machine in final state");
    var e = {
        context: this.context,
        sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
        event: t
      },
      r = this.current;
    r.transitionGuard && !r.transitionGuard(e) || this.executeState(this.current, t);
  }, e.forceToAsync = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(e) {
      var r, i;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (r = (0, __dependency_0.classPrivateFieldLooseBase)(this, m)[m].get(e), !this.current || !this.current.onExit) {
              t.next = 4;
              break;
            }
            return t.next = 4, this.current.onExit({
              context: this.context,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k]
            });
          case 4:
            if (!(i = this.current) || 1 != i.final) {
              t.next = 11;
              break;
            }
            if (!i.onFinal) {
              t.next = 9;
              break;
            }
            return t.next = 9, i.onFinal({
              context: this.context,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
              event: event
            });
          case 9:
            return (0, __dependency_0.classPrivateFieldLooseBase)(this, w)[w] = !0, t.abrupt("return");
          case 11:
            if (r) {
              t.next = 13;
              break;
            }
            throw new p("Invalid destination node");
          case 13:
            return t.next = 15, this.enterAsync(r);
          case 15:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(), e.forceTo = function (t) {
    var e = (0, __dependency_0.classPrivateFieldLooseBase)(this, m)[m].get(t);
    this.current && this.current.onExit && this.current.onExit({
      context: this.context,
      sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k]
    });
    var r = this.current;
    if (r && 1 == r.final) return r.onFinal && r.onFinal({
      context: this.context,
      sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
      event: event
    }), void ((0, __dependency_0.classPrivateFieldLooseBase)(this, w)[w] = !0);
    if (!e) throw new p("Invalid destination node");
    this.enter(e);
  }, e.startAsync = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t() {
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, this.enterAsync((0, __dependency_0.classPrivateFieldLooseBase)(this, b)[b]);
          case 2:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function () {
      return t.apply(this, arguments);
    };
  }(), e.start = function () {
    this.enter((0, __dependency_0.classPrivateFieldLooseBase)(this, b)[b]);
  }, e.enter = function (t, e) {
    this.previous = this.current, this.current = t, t.onEntry && t.onEntry({
      context: this.context,
      sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
      event: e
    });
    for (var i, a = (0, __dependency_0.createForOfIteratorHelperLoose)((0, __dependency_0.classPrivateFieldLooseBase)(this, D)[D].values()); !(i = a()).done;) {
      (0, i.value)({
        context: this.context,
        currentStateId: this.current.id,
        sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k]
      });
    }
    (t.final || t.autoTransition) && this.executeState(this.current, e);
  }, e.enterAsync = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(e, i) {
      var a, s;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this.previous = this.current, this.current = e, !e.onEntry) {
              t.next = 5;
              break;
            }
            return t.next = 5, e.onEntry({
              context: this.context,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
              event: i
            });
          case 5:
            for (a = (0, __dependency_0.createForOfIteratorHelperLoose)((0, __dependency_0.classPrivateFieldLooseBase)(this, D)[D].values()); !(s = a()).done;) (0, s.value)({
              context: this.context,
              currentStateId: this.current.id,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k]
            });
            if (!e.final && !e.autoTransition) {
              t.next = 9;
              break;
            }
            return t.next = 9, this.executeStateAsync(this.current, i);
          case 9:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, n) {
      return t.apply(this, arguments);
    };
  }(), e.executeStateAsync = function () {
    var t = (0, __dependency_0.asyncToGenerator)((0, __dependency_0.regeneratorRuntime)().mark(function t(e, r) {
      var i, a, s, o;
      return (0, __dependency_0.regeneratorRuntime)().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this.current = e, !(a = e).transitionTo) {
              t.next = 7;
              break;
            }
            return t.next = 5, a.transitionTo({
              context: this.context,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
              event: r
            });
          case 5:
            s = t.sent, i = (0, __dependency_0.classPrivateFieldLooseBase)(this, m)[m].get(s);
          case 7:
            if (!e.onExit) {
              t.next = 10;
              break;
            }
            return t.next = 10, e.onExit({
              context: this.context,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
              event: r
            });
          case 10:
            if (!(o = e).final) {
              t.next = 17;
              break;
            }
            if (!o.onFinal) {
              t.next = 15;
              break;
            }
            return t.next = 15, o.onFinal({
              context: this.context,
              sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
              event: r
            });
          case 15:
            return (0, __dependency_0.classPrivateFieldLooseBase)(this, w)[w] = !0, t.abrupt("return");
          case 17:
            if (i) {
              t.next = 19;
              break;
            }
            throw new p("Invalid destination node");
          case 19:
            return t.next = 21, this.enterAsync(i, r);
          case 21:
          case "end":
            return t.stop();
        }
      }, t, this);
    }));
    return function (e, n) {
      return t.apply(this, arguments);
    };
  }(), e.executeState = function (t, e) {
    var r;
    this.current = t;
    var i = t;
    if (i.transitionTo) {
      var a = i.transitionTo({
        context: this.context,
        sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
        event: e
      });
      r = (0, __dependency_0.classPrivateFieldLooseBase)(this, m)[m].get(a);
    }
    t.onExit && t.onExit({
      context: this.context,
      sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
      event: e
    });
    var s = t;
    if (s.final) return s.onFinal && s.onFinal({
      context: this.context,
      sharedData: (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k],
      event: e
    }), void ((0, __dependency_0.classPrivateFieldLooseBase)(this, w)[w] = !0);
    if (!r) throw new p("Invalid destination node");
    this.enter(r, e);
  }, e.subscribe = function (t) {
    var e = l();
    return (0, __dependency_0.classPrivateFieldLooseBase)(this, D)[D].set(e, t), e;
  }, e.unsubscribe = function (t) {
    (0, __dependency_0.classPrivateFieldLooseBase)(this, D)[D].delete(t);
  }, (0, __dependency_0.createClass)(t, [{
    key: "currentStateId",
    get: function () {
      return this.current.id;
    }
  }, {
    key: "sharedData",
    get: function () {
      return (0, __dependency_0.classPrivateFieldLooseBase)(this, k)[k];
    }
  }, {
    key: "isFinished",
    get: function () {
      return (0, __dependency_0.classPrivateFieldLooseBase)(this, w)[w];
    }
  }]), t;
}());
__dependency_1.cclegacy._RF.pop();
