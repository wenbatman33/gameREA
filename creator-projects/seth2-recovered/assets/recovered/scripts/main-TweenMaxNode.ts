// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-TweenMaxNode.ts.js
// SHA256: 45c46b42788c0ca10bce3c5319d2f2c6f3ab7cc37a80aeb56c4ea03089cbbb31
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as TweenMaxNode };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "TweenMaxNode":
      __export_0 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var h;
__dependency_1.cclegacy._RF.push({}, "e3feeHpC/9GO6BSU3tLSMBD", "TweenMaxNode", void 0);
var l = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("TweenMaxNode", l("TweenMaxNode")(h = function (e) {
  function o() {
    return Reflect.construct(e, arguments, new.target || o) || this;
  }
  return (0, __dependency_0.inheritsLoose)(o, e), o.trans = function (e) {
    return e.getComponent(o);
  }, (0, __dependency_0.createClass)(o, [{
    key: "x",
    get: function () {
      return this.node.position.x;
    },
    set: function (e) {
      this.node.setPosition(e, this.node.position.y, this.node.position.z);
    }
  }, {
    key: "y",
    get: function () {
      return this.node.position.y;
    },
    set: function (e) {
      this.node.setPosition(this.node.position.x, e, this.node.position.z);
    }
  }, {
    key: "scale",
    get: function () {
      return this.node.scale.x;
    },
    set: function (e) {
      this.node.setScale(e, e, 1);
    }
  }, {
    key: "scaleX",
    get: function () {
      return this.node.scale.x;
    },
    set: function (e) {
      this.node.setScale(e, this.node.scale.y, 1);
    }
  }, {
    key: "scaleY",
    get: function () {
      return this.node.scale.y;
    },
    set: function (e) {
      this.node.setScale(this.node.scale.x, e, 1);
    }
  }, {
    key: "width",
    get: function () {
      return this.node.getComponent(__dependency_1.UITransform).width;
    },
    set: function (e) {
      this.node.getComponent(__dependency_1.UITransform).width = e;
    }
  }, {
    key: "height",
    get: function () {
      return this.node.getComponent(__dependency_1.UITransform).height;
    },
    set: function (e) {
      this.node.getComponent(__dependency_1.UITransform).height = e;
    }
  }, {
    key: "opacity",
    get: function () {
      var e = this.node.getComponent(__dependency_1.UIRenderer);
      if (null !== e) return e.color.a;
      var t = this.node.getComponent(__dependency_1.UIOpacity);
      return null !== t ? t.opacity : 255;
    },
    set: function (e) {
      var t = this.node.getComponent(__dependency_1.UIRenderer);
      if (null === t) {
        var n = this.node.getComponent(__dependency_1.UIOpacity);
        null !== n && (n.opacity = e);
      } else t.color = new __dependency_1.Color(t.color.r, t.color.g, t.color.b, e);
    }
  }, {
    key: "angle",
    get: function () {
      return this.node.angle;
    },
    set: function (e) {
      this.node.angle = e;
    }
  }]), o;
}(__dependency_1.Component)) || h);
__dependency_1.cclegacy._RF.pop();
