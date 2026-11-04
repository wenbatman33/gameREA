// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Decorators.ts.js
// SHA256: 402d2f388d7ddcfce8fe11a7162f416c3611b1e7f4d9dfd77482602fc68886ca
import * as __dependency_0 from "cc";
var __export_0;
export { __export_0 as abstract };
var __export_1;
export { __export_1 as inject };
var __export_2;
export { __export_2 as registerEntry };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "abstract":
      __export_0 = value;
      break;
    case "inject":
      __export_1 = value;
      break;
    case "registerEntry":
      __export_2 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
__publish({
  abstract: function () {
    return function (e) {
      e.prototype.__abstract__ = !0;
    };
  },
  inject: function (e, t, o) {
    return function (c, u) {
      if (c instanceof __dependency_0.Component) {
        var s = c;
        if (!Reflect.has(c, i)) {
          var l = s.onLoad;
          s.onLoad = function () {
            var e = this,
              t = Reflect.get(e, i),
              n = function (n) {
                var o = Reflect.get(t, n),
                  c = n.split("__")[0];
                Reflect.get(e, o.member) && e._className != c || Reflect.defineProperty(e, o.member, {
                  enumerable: !0,
                  configurable: !0,
                  get: function () {
                    var t = e.node;
                    if (o.root) {
                      var c = "__" + o.root.replace(/\//g, "_");
                      (0, __dependency_0.isValid)(e[c]) || (e[c] = f(o.root, t, __dependency_0.Node)), t = e[c];
                    }
                    return (0, __dependency_0.isValid)(e[n]) || (e[n] = f(o.path, t, o.type)), e[n];
                  },
                  set: function (t) {
                    e[n] = t;
                  }
                });
              };
            for (var o in t) n(o);
            l && Reflect.apply(l, this, arguments);
          }, Reflect.defineProperty(c, i, {
            value: {}
          });
        }
        var _ = {
            path: e,
            type: t,
            member: u,
            root: o
          },
          p = c.name + "__" + u,
          v = Reflect.get(c, i);
        Reflect.defineProperty(v, p, {
          value: _,
          enumerable: !0
        });
      } else Log.e("無法注入，僅支持 Component 組件");
    };
  },
  registerEntry: function (e, t, n) {
    return function (r) {
      r.__classname__ = e, r.bundle = t, App.entryManager.register(r, n);
    };
  }
}), __dependency_0.cclegacy._RF.push({}, "79becuRyZJMkYDHY8CyWds7", "Decorators", void 0);
var i = "_FIND_OPTIONS_";
function f(e, t, r) {
  var a = (0, __dependency_0.find)(e, t);
  return __dependency_0.js.isChildClassOf(r, __dependency_0.Component) ? null == a ? void 0 : a.getComponent(r) : a;
}
__dependency_0.cclegacy._RF.pop();
