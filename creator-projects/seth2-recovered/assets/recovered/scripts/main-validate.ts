// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-validate.ts.js
// SHA256: 88fdd8d18ddd4f1fb11b1963aeee44a4b82b313f552c5004a7688a924f41d2ca
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as validateHydration };
var __export_1;
export { __export_1 as validateStates };
var __export_2;
export { __export_2 as InvalidStatesError };
var __export_3;
export { __export_3 as InvalidInitialStateError };
var __export_4;
export { __export_4 as InvalidStateIdError };
var __export_5;
export { __export_5 as InvalidTransitionCondition };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "validateHydration":
      __export_0 = value;
      break;
    case "validateStates":
      __export_1 = value;
      break;
    case "InvalidStatesError":
      __export_2 = value;
      break;
    case "InvalidInitialStateError":
      __export_3 = value;
      break;
    case "InvalidStateIdError":
      __export_4 = value;
      break;
    case "InvalidTransitionCondition":
      __export_5 = value;
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
  void 0;
})(__dependency_1);
__publish({
  validateHydration: function (t, n) {
    if (s(t), !t.some(function (t) {
      return t.id === n;
    })) throw new a("No state id matches with the state id provided");
  },
  validateStates: s
}), __dependency_1.cclegacy._RF.push({}, "35c61eRDUdNIbCCo9zUwNZM", "validate", void 0);
var e = __publish("InvalidStatesError", function (t) {
    function i() {
      return Reflect.construct(t, arguments, new.target || i) || this;
    }
    return (0, __dependency_0.inheritsLoose)(i, t), i;
  }((0, __dependency_0.wrapNativeSuper)(Error))),
  o = __publish("InvalidInitialStateError", function (t) {
    function i() {
      return Reflect.construct(t, arguments, new.target || i) || this;
    }
    return (0, __dependency_0.inheritsLoose)(i, t), i;
  }((0, __dependency_0.wrapNativeSuper)(Error))),
  a = __publish("InvalidStateIdError", function (t) {
    function i() {
      return Reflect.construct(t, arguments, new.target || i) || this;
    }
    return (0, __dependency_0.inheritsLoose)(i, t), i;
  }((0, __dependency_0.wrapNativeSuper)(Error))),
  u = __publish("InvalidTransitionCondition", function (t) {
    function i() {
      return Reflect.construct(t, arguments, new.target || i) || this;
    }
    return (0, __dependency_0.inheritsLoose)(i, t), i;
  }((0, __dependency_0.wrapNativeSuper)(Error)));
function s(t) {
  if (!t || !Array.isArray(t) || (null == t ? void 0 : t.length) < 1) throw new e("States must be an array of at least 1 element");
  if (1 !== t.filter(function (t) {
    return t.initial;
  }).length) throw new o("There must be one and only initial state");
  if (!t.every(function (t) {
    return "string" == typeof t.id;
  })) throw new a("Ids must be of type string");
  if (new Set(t.map(function (t) {
    return t.id;
  })).size !== t.length) throw new a("Ids must be unique");
  if (t.some(function (t) {
    return t.autoTransition && t.transitionGuard;
  })) throw new u("State with autoTransition cannot have property transitionGuard");
  if (t.some(function (t) {
    return !t.final && !t.transitionTo || t.final && (t.autoTransition || t.transitionTo || t.transitionGuard);
  })) throw new u("State must have autoTransition or transitionTo if not final");
  if (t.some(function (t) {
    return !t.final && t.onFinal;
  })) throw new u("State that are not final cannot have property onFinal");
}
__dependency_1.cclegacy._RF.pop();
