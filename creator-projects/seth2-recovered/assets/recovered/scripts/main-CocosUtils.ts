// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CocosUtils.ts.js
// SHA256: 2ac6140c3db167a714f998ef41c3d8cfa13a3c7b7c2ae2f3ecb9926ee7dc1af6
import * as __dependency_0 from "cc";
import * as __dependency_1 from "./main-Resource";
import * as __dependency_2 from "./main-UIView";
import * as __dependency_3 from "./main-Enums";
import * as __dependency_4 from "./main-Macros";
var __export_0;
export { __export_0 as _loadDirRes };
var __export_1;
export { __export_1 as _loadRes };
var __export_2;
export { __export_2 as addExtraLoadResource };
var __export_3;
export { __export_3 as addRemoteLoadResource };
var __export_4;
export { __export_4 as createNodeWithPrefab };
var __export_5;
export { __export_5 as getBundle };
var __export_6;
export { __export_6 as loadDragonDisplay };
var __export_7;
export { __export_7 as setButtonSpriteFrame };
var __export_8;
export { __export_8 as setLabelFont };
var __export_9;
export { __export_9 as setParticleSystemFile };
var __export_10;
export { __export_10 as setSkeletonSkeletonData };
var __export_11;
export { __export_11 as setSpriteSpriteFrame };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "_loadDirRes":
      __export_0 = value;
      break;
    case "_loadRes":
      __export_1 = value;
      break;
    case "addExtraLoadResource":
      __export_2 = value;
      break;
    case "addRemoteLoadResource":
      __export_3 = value;
      break;
    case "createNodeWithPrefab":
      __export_4 = value;
      break;
    case "getBundle":
      __export_5 = value;
      break;
    case "loadDragonDisplay":
      __export_6 = value;
      break;
    case "setButtonSpriteFrame":
      __export_7 = value;
      break;
    case "setLabelFont":
      __export_8 = value;
      break;
    case "setParticleSystemFile":
      __export_9 = value;
      break;
    case "setSkeletonSkeletonData":
      __export_10 = value;
      break;
    case "setSpriteSpriteFrame":
      __export_11 = value;
      break;
    default:
      throw Error('Unknown recovered export ' + name);
  }
  return value;
}
(function (e) {
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_0);
(function (e) {
  void 0;
})(__dependency_1);
(function (e) {
  void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
function v(e, t) {
  var n = App.uiManager;
  e == n.retainMemory ? n.retainMemory.addLocal(t) : e && e instanceof __dependency_2.default ? n.addLocal(t, e.className) : n.garbage.addLocal(t);
}
function y(e, t) {
  var n = App.uiManager;
  e == n.retainMemory ? n.retainMemory.addRemote(t) : e && e instanceof __dependency_2.default ? n.addRemote(t, e.className) : n.garbage.addRemote(t);
}
function g(e) {
  var t = e.bundle;
  return null != e.bundle && null != e.bundle || (t = __dependency_4.Macro.BUNDLE_RESOURCES, e.view && (t = e.view.bundle)), t;
}
function w(e) {
  return !!((0, __dependency_0.isValid)(e) && e.node && (0, __dependency_0.isValid)(e.node));
}
function h(e, t, l, r, o, c, i, s) {
  void 0 === s && (s = !1), o && w(e) ? function (e, t, l, r, o, c, i, s) {
    if (!i) {
      var p = new __dependency_1.Resource.Info();
      p.url = t, p.type = __dependency_0.SpriteFrame, p.data = r, p.bundle = s, v(e, p);
    }
    if (r && w(l)) {
      var f = l[o];
      try {
        var d = (0, __dependency_0.isValid)(r) ? r : null;
        d && (l[o] = d), c && c(o, d);
      } catch (e) {
        var m = (0, __dependency_0.isValid)(f) ? f : null;
        l[o] = m, c && c(o, null), Log.e(t + " : " + (e || "replace spriteframe error"));
      }
    } else c && w(l) && c(o, r);
  }(l, r, e, o, t, c, s, i) : c && w(e) && c(t, o);
}
function A(e, t, a, l, r, o) {
  l && ("string" == typeof l ? (l += "/spriteFrame", App.cache.getCacheByAsync(l, __dependency_0.SpriteFrame, o).then(function (n) {
    h(e, t, a, l, n, r, o);
  })) : App.cache.getSpriteFrameByAsync(l.urls, l.key, a, v, o).then(function (n) {
    n && n.isTryReload || h(e, t, a, n.url, n.spriteFrame, r, o, !0);
  }));
}
__publish({
  _loadDirRes: function (e) {
    var t = g(e),
      n = App.cache.get(t, e.url);
    App.asset.loadDir(t, e.url, e.type, e.onProgress, function (a) {
      if (!n) {
        var l = new __dependency_1.Resource.Info();
        l.url = e.url, l.type = e.type, l.data = a.data, l.bundle = t, v(e.view, l);
      }
      e.onComplete && e.onComplete(a);
    });
  },
  _loadRes: function (e) {
    var t = g(e),
      n = App.cache.get(t, e.url);
    App.asset.load(t, e.url, e.type, e.onProgress, function (a) {
      if (!n) {
        var l = new __dependency_1.Resource.Info();
        l.url = e.url, l.type = e.type, l.data = a.data, l.bundle = t, v(e.view, l);
      }
      e.onComplete && e.onComplete(a);
    });
  },
  addExtraLoadResource: v,
  addRemoteLoadResource: y,
  createNodeWithPrefab: function (e) {
    var t = e.url,
      n = g(e),
      a = App.cache.get(n, t);
    App.cache.getCacheByAsync(t, __dependency_0.Prefab, n).then(function (t) {
      if (!a) {
        var n = new __dependency_1.Resource.Info();
        n.url = e.url, n.type = __dependency_0.Prefab, n.data = t, n.bundle = g(e), v(e.view, n);
      }
      if (t && w(e.view) && e.complete) {
        var l = (0, __dependency_0.instantiate)(t);
        e.complete(l);
      } else w(e.view) && e.complete && e.complete(null);
    });
  },
  getBundle: g,
  loadDragonDisplay: function (e, t) {
    var n = g(t);
    App.cache.getCacheByAsync(t.assetUrl, __dependency_0.dragonBones.DragonBonesAsset, n).then(function (a) {
      if (a) {
        var l = new __dependency_1.Resource.Info();
        l.url = t.assetUrl, l.type = __dependency_0.dragonBones.DragonBonesAsset, l.data = a, l.bundle = g(t), v(t.view, l), App.cache.getCacheByAsync(t.atlasUrl, __dependency_0.dragonBones.DragonBonesAtlasAsset, n).then(function (n) {
          if (n) {
            if (__dependency_0.sys.isBrowser) {
              var l = new __dependency_1.Resource.Info();
              l.url = t.atlasUrl, l.type = __dependency_0.dragonBones.DragonBonesAtlasAsset, l.data = n, l.bundle = g(t), v(t.view, l);
            }
            e.dragonAsset = a, e.dragonAtlasAsset = n, t.complete && t.complete(a, n);
          } else t.complete && t.complete(a, null);
        });
      } else t.complete && t.complete(null, null);
    });
  },
  setButtonSpriteFrame: function (e, t) {
    var n = g(t);
    A(e, __dependency_3.ButtonSpriteType.Norml, t.view, t.normalSprite, t.complete, n), A(e, __dependency_3.ButtonSpriteType.Pressed, t.view, t.pressedSprite, t.complete, n), A(e, __dependency_3.ButtonSpriteType.Hover, t.view, t.hoverSprite, t.complete, n), A(e, __dependency_3.ButtonSpriteType.Disable, t.view, t.disabledSprite, t.complete, n);
  },
  setLabelFont: function (e, t, n) {
    var l = new __dependency_1.Resource.Info();
    if (l.url = t.font, l.type = __dependency_0.Font, l.data = n, l.bundle = g(t), v(t.view, l), n && w(e)) {
      var o = e.font;
      try {
        var c = (0, __dependency_0.isValid)(n) ? n : null;
        c && (e.font = c), t.complete && t.complete(c);
      } catch (n) {
        var i = (0, __dependency_0.isValid)(o) ? o : null;
        e.font = i, t.complete && t.complete(null), Log.e(t.font + " : " + (n || "replace font error"));
      }
    } else t.complete && w(e) && t.complete(n);
  },
  setParticleSystemFile: function (e, t, n) {
    var r = new __dependency_1.Resource.Info();
    if (r.url = t.url, r.type = __dependency_0.ParticleAsset, r.data = n, r.bundle = g(t), v(t.view, r), n && w(e)) {
      var o = e.file;
      try {
        var c = (0, __dependency_0.isValid)(n) ? n : null;
        c && (e.file = c), t.complete && t.complete(c);
      } catch (n) {
        var i = (0, __dependency_0.isValid)(o) ? o : null;
        e.file = i, t.complete && t.complete(null), Log.e(t.url + " : " + (n || "replace file error"));
      }
    } else t.complete && w(e) && t.complete(n);
  },
  setSkeletonSkeletonData: function (e, t, n, l) {
    void 0 === l && (l = __dependency_1.Resource.Type.Local);
    var r = "",
      c = !1;
    if (l == __dependency_1.Resource.Type.Remote) {
      var i = t;
      r = i.path + "/" + i.name, c = !!i.retain;
    } else {
      r = t.url;
    }
    var s = new __dependency_1.Resource.Info();
    s.url = r, s.type = __dependency_0.sp.SkeletonData, s.data = n, s.retain = c, s.bundle = g(t), l == __dependency_1.Resource.Type.Remote ? (s.bundle = __dependency_4.Macro.BUNDLE_REMOTE, y(t.view, s)) : v(t.view, s);
    if (n && w(e)) {
      var p = e.skeletonData;
      try {
        var f = (0, __dependency_0.isValid)(n) ? n : null;
        f && (e.skeletonData = f), t.complete && t.complete(f);
      } catch (n) {
        var d = (0, __dependency_0.isValid)(p) ? p : null;
        e.skeletonData = d, t.complete && t.complete(null), Log.e(r + " : " + (n || "replace skeletonData error"));
      }
    } else t.complete && w(e) && t.complete(n);
  },
  setSpriteSpriteFrame: function (e, t, l, r, o, c, i, s, p) {
    void 0 === i && (i = __dependency_1.Resource.Type.Local);
    void 0 === s && (s = !1);
    void 0 === p && (p = !1);
    if (!p) {
      var f = new __dependency_1.Resource.Info();
      f.url = t, f.type = __dependency_0.SpriteFrame, f.data = r, f.retain = s, f.bundle = c, i == __dependency_1.Resource.Type.Remote ? y(e, f) : v(e, f);
    }
    if (r && w(l)) {
      var d = l.spriteFrame,
        m = (0, __dependency_0.isValid)(r) ? r : null;
      try {
        m && (l.spriteFrame = m), o && o(m);
      } catch (e) {
        var g = (0, __dependency_0.isValid)(d) ? d : null;
        l.spriteFrame = g, o && o(null), Log.e(t + " : " + (e || "replace spriteframe error"));
      }
    } else o && w(l) && o(r);
  }
}), __dependency_0.cclegacy._RF.push({}, "c5e498hvkpGm6BWGue9rQcW", "CocosUtils", void 0), __dependency_0.cclegacy._RF.pop();
