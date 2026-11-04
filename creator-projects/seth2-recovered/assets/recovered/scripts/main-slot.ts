// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-slot.ts.js
// SHA256: 048e2247d3ac00a61afe50c5da30c81574d266de49d207cfdb5e1f15c1918539
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-index";
import * as __dependency_2 from "./main-fsm";
(function (e) {
  void 0;
})(__dependency_0);
(function (t) {
  void 0;
})(__dependency_2);
__dependency_0.cclegacy._RF.push({}, "ba32571q8NM0Zo8AKToxfjj", "slot", void 0);
var n = 1e3,
  a = "start",
  o = "bet",
  r = "step";
function i() {
  return n;
}
var c = [{
    id: "START",
    initial: !0,
    transitionGuard: function (t) {
      var e = t.event;
      return (null == e ? void 0 : e.type) === a;
    },
    transitionTo: function (t) {
      var e = t.context;
      t.sharedData;
      return e.initialState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], e.balance = i(), e.balance, "BET";
    }
  }, {
    id: "BET",
    transitionGuard: function (t) {
      var e = t.event;
      t.sharedData;
      return console.log("current state::::::", l.currentStateId, ":::::receive:::", e.type), (null == e ? void 0 : e.type) === o;
    },
    transitionTo: function (t) {
      var e,
        a = t.event,
        o = t.context,
        r = (t.sharedData, a);
      if (r.value > o.balance) throw new Error("INVALID BET AMOUNT");
      return o.bet = r.value, o.balance = (e = r.value, n -= e), o.balance, "STEP";
    }
  }, {
    id: "STEP",
    transitionGuard: function (t) {
      var e = t.event;
      t.sharedData;
      return (null == e ? void 0 : e.type) === r;
    },
    transitionTo: function (t) {
      var e = t.context,
        a = t.sharedData,
        o = [[Math.floor(10 * Math.random()), Math.floor(10 * Math.random()), Math.floor(10 * Math.random())], [Math.floor(10 * Math.random()), Math.floor(10 * Math.random()), Math.floor(10 * Math.random())], [Math.floor(10 * Math.random()), Math.floor(10 * Math.random()), Math.floor(10 * Math.random())]];
      e.initialState = o.slice();
      var r = new Set(o.map(function (t) {
        return t[0];
      }));
      console.log("top:::::::::", r, r.size);
      var c = new Set(o.map(function (t) {
        return t[1];
      }));
      console.log("middle:::::::::", c, c.size);
      var s,
        u = new Set(o.map(function (t) {
          return t[2];
        }));
      return console.log("bottom:::::::::", u, u.size), 1 === r.size || 1 === c.size || 1 === u.size ? (console.log("WIN"), s = e.bet, n += 10 * s) : console.log("LOST"), a = i(), console.log("current state::::::", l.currentStateId, ":::::sharedata:::", a), console.log("balance:", i()), "START";
    }
  }],
  l = __dependency_2.StateMachine.from(c, {});
console.log("machine id:::::::::", l.id), l.start();
l.subscribe(function (t) {
  t.context;
  var e = t.currentStateId;
  return console.log("subscribe:::::stateid::::", e);
});
console.log("after start the machine::::::is:::::", l.currentStateId), __dependency_0.cclegacy._RF.pop();
