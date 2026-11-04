// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CocosExtention.ts.js
// SHA256: 5c4bd5fc6cc5fa0b9a5fa140bad75ea78ba60434b116918a0186190debe340bc
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-CocosUtils";
import * as __dependency_2 from "./main-Resource";
import * as __dependency_3 from "./main-Macros";
var __export_0;
export { __export_0 as CocosExtentionInit };
var __export_1;
export { __export_1 as updateZIndex };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CocosExtentionInit":
      __export_0 = value;
      break;
    case "updateZIndex":
      __export_1 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
__publish({
  CocosExtentionInit: function () {
    Log.d("Cocos擴充套件初始化");
  },
  updateZIndex: function (e) {
    _.updateZIndex(e);
  }
}), __dependency_0.cclegacy._RF.push({}, "41a78zq+i1C45s4JKGkhQdk", "CocosExtention", void 0), "object" == typeof Reflect ? Reflect.defineProperty(__dependency_0.Node.prototype, "userData", {
  value: null,
  writable: !0
}) : __dependency_0.Node.prototype.userData = null;
var I = __dependency_0.Sprite.prototype;
I.loadRemoteImage = function (e) {
  var t = this;
  null != e.isNeedCache && null != e.isNeedCache || (e.isNeedCache = !0);
  var n = !1;
  e.retain && (n = !0);
  var o = (0, __dependency_1.getBundle)({
    bundle: e.defaultBundle,
    view: e.view
  });
  App.asset.remote.loadImage(e.url, e.isNeedCache).then(function (r) {
    r ? (0, __dependency_1.setSpriteSpriteFrame)(e.view, e.url, t, r, e.complete, __dependency_3.Macro.BUNDLE_REMOTE, __dependency_2.Resource.Type.Remote, n) : (e.defaultSpriteFrame && "string" == typeof e.defaultSpriteFrame && (e.defaultSpriteFrame = e.defaultSpriteFrame + "/spriteFrame", App.cache.getCacheByAsync(e.defaultSpriteFrame, __dependency_0.SpriteFrame, o).then(function (n) {
      (0, __dependency_1.setSpriteSpriteFrame)(e.view, e.defaultSpriteFrame, t, n, e.complete, o);
    })), e.complete && (0, __dependency_0.isValid)(t) && e.complete(r));
  });
}, I.loadImage = function (e) {
  var t = this,
    n = e.view,
    o = e.url,
    i = e.complete,
    r = (0, __dependency_1.getBundle)(e);
  "string" == typeof o ? (o += "/spriteFrame", App.cache.getCacheByAsync(o, __dependency_0.SpriteFrame, r).then(function (e) {
    (0, __dependency_1.setSpriteSpriteFrame)(n, o, t, e, i, r);
  })) : App.cache.getSpriteFrameByAsync(o.urls, o.key, n, __dependency_1.addExtraLoadResource, r).then(function (e) {
    e && e.isTryReload || (0, __dependency_1.setSpriteSpriteFrame)(n, e.url, t, e.spriteFrame, i, r, __dependency_2.Resource.Type.Local, !1, !0);
  });
}, (I = __dependency_0.sp.Skeleton.prototype).loadRemoteSkeleton = function (e) {
  var t = this;
  null != e.isNeedCache && null != e.isNeedCache || (e.isNeedCache = !0), App.asset.remote.loadSkeleton(e.path, e.name, e.isNeedCache).then(function (n) {
    (0, __dependency_1.setSkeletonSkeletonData)(t, e, n, __dependency_2.Resource.Type.Remote);
  });
}, I.loadSkeleton = function (e) {
  var t = this,
    n = e.url,
    o = (0, __dependency_1.getBundle)(e);
  App.cache.getCacheByAsync(n, __dependency_0.sp.SkeletonData, o).then(function (n) {
    (0, __dependency_1.setSkeletonSkeletonData)(t, e, n);
  });
}, (I = __dependency_0.Button.prototype).loadButton = function (e) {
  (0, __dependency_1.setButtonSpriteFrame)(this, e);
}, __dependency_0.dragonBones.ArmatureDisplay.prototype.loadDisplay = function (e) {
  (0, __dependency_1.loadDragonDisplay)(this, e);
}, (I = __dependency_0.ParticleSystem2D.prototype).loadFile = function (e) {
  var t = this,
    n = e.url,
    o = (0, __dependency_1.getBundle)(e);
  App.cache.getCacheByAsync(n, __dependency_0.ParticleAsset, o).then(function (n) {
    (0, __dependency_1.setParticleSystemFile)(t, e, n);
  });
}, (I = __dependency_0.Label.prototype).forceDoLayout = function () {
  this._forceUpdateRenderData ? this._forceUpdateRenderData() : this._updateRenderData ? this._updateRenderData(!0) : this.updateRenderData && this.updateRenderData(!0);
}, I.loadFont = function (e) {
  var t = e.font,
    n = this,
    o = (0, __dependency_1.getBundle)(e);
  App.cache.getCacheByAsync(t, __dependency_0.Font, o).then(function (t) {
    (0, __dependency_1.setLabelFont)(n, e, t);
  });
}, window.createPrefab = function (e) {
  (0, __dependency_1.createNodeWithPrefab)(e);
}, window.loadDirRes = function (e) {
  (0, __dependency_1._loadDirRes)(e);
}, window.loadRes = function (e) {
  (0, __dependency_1._loadRes)(e);
};
var _ = window.cc;
_.updateZIndex = function (e) {
  e.children.length > 1 && (e.children.sort(function (e, t) {
    return e.zIndex - t.zIndex;
  }), e._updateSiblingIndex());
}, Reflect.defineProperty(__dependency_0.Node.prototype, "zIndex", {
  get: function () {
    var e = this;
    return "number" == typeof e._zIndex || (e._zIndex = 0), e._zIndex;
  },
  set: function (e) {
    this._zIndex = e;
  }
}), __dependency_0.cclegacy._RF.pop();
