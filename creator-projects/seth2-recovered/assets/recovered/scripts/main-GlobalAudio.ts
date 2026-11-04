// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-GlobalAudio.ts.js
// SHA256: 4b7da500170891d401ea9d3ed9d15ae517a38824211f75923f07e44b7766b315
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-AudioComponent";
import * as __dependency_3 from "./main-Macros";
import * as __dependency_4 from "./main-Config";
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
(function (e) {
  void 0;
})(__dependency_0);
(function (e) {
  void 0, void 0, void 0, void 0;
})(__dependency_1);
(function (e) {
  void 0, void 0;
})(__dependency_2);
(function (e) {
  void 0;
})(__dependency_3);
(function (e) {
  void 0;
})(__dependency_4);
var d;
__dependency_1.cclegacy._RF.push({}, "8dca8lhVEpKYbqJLgXzurTU", "GlobalAudio", void 0);
var f = __dependency_1._decorator.ccclass,
  p = (__dependency_1._decorator.property, __dependency_1._decorator.menu);
__publish("default", f(d = p("Quick公共元件/GlobalAudio")(d = function (e) {
  function t() {
    return Reflect.construct(e, arguments, new.target || t) || this;
  }
  (0, __dependency_0.inheritsLoose)(t, e);
  var n = t.prototype;
  return n.playDialogOpen = function () {
    this.playEffect(__dependency_4.Config.audioPath.dialog, __dependency_3.Macro.BUNDLE_RESOURCES, !1);
  }, n.playButtonClick = function () {
    this.playEffect(__dependency_4.Config.audioPath.button, __dependency_3.Macro.BUNDLE_RESOURCES, !1);
  }, n.playMusic = function (e, o, t) {
    var n = this;
    void 0 === t && (t = !0);
    var s = this;
    return new Promise(function (r) {
      if (o != __dependency_3.Macro.BUNDLE_RESOURCES) return Log.e(e + " 不在 " + __dependency_3.Macro.BUNDLE_RESOURCES + " 全域性播放的聲音發現存放到" + __dependency_3.Macro.BUNDLE_RESOURCES), void r(!1);
      var d = n.audioData.makeKey(e, o),
        f = n.audioData.musicInfos.get(d);
      f || ((f = new __dependency_2.AudioInfo()).url = e, f.bundle = o, f.source = n.node.addComponent(__dependency_1.AudioSource), f.source.playOnAwake = !0, f.source.name = d, n.audioData.musicInfos.set(d, f)), n.audioData.curMusic = f, App.cache.getCacheByAsync(e, __dependency_1.AudioClip, o).then(function (a) {
        a ? (App.asset.addPersistAsset(e, a, o), s.stopMusic(), f && f.source && (f.source.clip = a, f.source.loop = t, n.play(f, !0, r))) : r(!1);
      });
    });
  }, n.playEffect = function (e, o, t) {
    var n = this;
    return void 0 === t && (t = !1), new Promise(function (s) {
      if (o != __dependency_3.Macro.BUNDLE_RESOURCES) return Log.e(e + " 不在 " + __dependency_3.Macro.BUNDLE_RESOURCES + " 全域性播放的聲音發現存放到" + __dependency_3.Macro.BUNDLE_RESOURCES), void s(!1);
      var r = n.audioData.makeKey(e, o),
        d = n.audioData.effectInfos.get(r);
      d || ((d = new __dependency_2.AudioInfo()).url = e, d.bundle = o, d.source = n.node.addComponent(__dependency_1.AudioSource), d.source.name = r, n.audioData.effectInfos.set(r, d)), d.isStopPlay = !1, App.cache.getCacheByAsync(e, __dependency_1.AudioClip, o).then(function (a) {
        a ? (App.asset.addPersistAsset(e, a, o), d && d.source && (d.source.clip = a, d.source.loop = t, 0 == d.isStopPlay && n.play(d, !1, s))) : s(!1);
      });
    });
  }, n.getAudioInfo = function (e, o) {
    var t = this;
    return new Promise(function (n, s) {
      var c = t.audioData.makeKey(e, o),
        r = t.audioData.effectInfos.get(c);
      r || ((r = new __dependency_2.AudioInfo()).url = e, r.bundle = o, r.source = t.node.addComponent(__dependency_1.AudioSource), r.source.name = c, t.audioData.effectInfos.set(c, r)), App.cache.getCacheByAsync(e, __dependency_1.AudioClip, o).then(function (t) {
        t ? (App.asset.addPersistAsset(e, t, o), r && r.source && n(r)) : s();
      });
    });
  }, t;
}(__dependency_2.default)) || d) || d);
__dependency_1.cclegacy._RF.pop();
