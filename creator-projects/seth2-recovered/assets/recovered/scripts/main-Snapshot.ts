// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-Snapshot.ts.js
// SHA256: cf87939cb8db370f01a4401a7cd58253b16a3e64e0c56b40c0bb8d05a9256c91
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
var __export_0;
export { __export_0 as Snapshot };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "Snapshot":
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
  void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0;
})(__dependency_1);
var _;
__dependency_1.cclegacy._RF.push({}, "1ff00yaE7BLMZ9D4Mudhp/4", "Snapshot", void 0);
var v = __dependency_1._decorator.ccclass;
__dependency_1._decorator.property, __publish("Snapshot", v("Snapshot")(_ = function (e) {
  function a() {
    for (var t, a = arguments.length, s = new Array(a), i = 0; i < a; i++) s[i] = arguments[i];
    return (t = Reflect.construct(e, [this].concat(s).slice(1), new.target || a) || this)._camera = null, t.onCaptureComplete = void 0, t._texture = null, t._canvas = null, t._buffer = null, t;
  }
  (0, __dependency_0.inheritsLoose)(a, e);
  var s = a.prototype;
  return s.start = function () {
    var t = this;
    this._camera = App.uiManager.screenShotCamera, e.prototype.start && e.prototype.start.call(this), this._texture = new __dependency_1.RenderTexture(), this._texture.reset({
      width: __dependency_1.view.getVisibleSize().width,
      height: __dependency_1.view.getVisibleSize().height
    }), this._camera.targetTexture = this._texture, this._camera.node.active = !0, this.scheduleOnce(function () {
      t.capture();
    }, .2);
  }, s.onDestroy = function () {
    this._camera.node.active = !1, e.prototype.onDestroy && e.prototype.onDestroy.call(this);
  }, s.capture = function () {
    var e = this.node.getComponent(__dependency_1.UITransform);
    if (e) {
      var t = e.width,
        a = e.height,
        s = e.getBoundingBoxToWorld(),
        i = s.x,
        n = s.y;
      this._buffer = this._texture.readPixels(Math.round(i), Math.round(n), t, a), this.saveImage();
    }
  }, s.genSpriteFrame = function (e, t) {
    var a = new __dependency_1.ImageAsset();
    a.reset({
      _data: this._buffer,
      width: e,
      height: t,
      format: __dependency_1.Texture2D.PixelFormat.RGBA8888,
      _compressed: !1
    });
    var s = new __dependency_1.Texture2D();
    s.image = a;
    var i = new __dependency_1.SpriteFrame();
    return i.texture = s, i.packable = !1, i.flipUVY = !0, i;
  }, s.createImageData = function (e, t, a) {
    if (__dependency_1.sys.isBrowser || __dependency_1.sys.platform === __dependency_1.sys.Platform.WECHAT_GAME) {
      this._canvas ? this.clearCanvas() : (this._canvas = document.createElement("canvas"), this._canvas.width = e, this._canvas.height = t);
      for (var s = this._canvas.getContext("2d"), i = 4 * e, n = 0; n < t; n++) {
        for (var r = t - 1 - n, o = s.createImageData(e, 1), p = r * e * 4, h = 0; h < i; h++) o.data[h] = a[p + h];
        s.putImageData(o, 0, n);
      }
    }
  }, s.onCaptureFinish = function (e, t, a) {
    this.onCaptureComplete && (null == a && (a = this.genSpriteFrame(e, t)), this.onCaptureComplete(a, new __dependency_1.Size(e, t))), this.destroy();
  }, s.flipImageY = function (e, t, a) {
    for (var s = new Uint8Array(t * a * 4), i = 4 * t, n = a - 1, r = 0; r < a; r++) for (var o = (n - r) * i, p = r * i, h = 0; h < i; h++) s[h + p] = e[o + h];
    return s;
  }, s.savaAsImage = function (e, t, a) {
    var s = this;
    if (__dependency_1.sys.isBrowser) this.createImageData(e, t, a), App.canvasHelper.saveAsPNG(this._canvas, e, t), App.tips.show(App.getLanguage("capture_success")), this.onCaptureFinish(e, t);else if (__dependency_1.sys.isNative) {
      var i = new Date().format("yyyy_MM_dd_hh_mm_ss_SS") + ".png",
        n = App.platform.screenshotsPath + "/" + i,
        r = this.flipImageY(this._buffer, e, t);
      __dependency_1.native.saveImageData(r, e, t, n).then(function () {
        s.onCaptureComplete && __dependency_1.assetManager.loadRemote(n, function (a, i) {
          if (a) Log.d("show image error");else {
            var r = new __dependency_1.SpriteFrame(),
              o = new __dependency_1.Texture2D();
            o.image = i, r.texture = o, r.packable = !1, App.tips.show(App.getLanguage("capture_save_local_success1", [n])), s.onCaptureFinish(e, t, r);
          }
        }), Log.d("save image data success, file: " + n), App.tips.show(App.getLanguage("capture_save_local_success2", [n]));
      }).catch(function () {
        Log.e("save image data failed!"), App.tips.show(App.getLanguage("capture_save_failed"));
      });
    } else __dependency_1.sys.platform === __dependency_1.sys.Platform.WECHAT_GAME && (this.createImageData(e, t, a), this._canvas.toTempFilePath({
      x: 0,
      y: 0,
      width: this._canvas.width,
      height: this._canvas.height,
      destWidth: this._canvas.width,
      destHeight: this._canvas.height,
      fileType: "png",
      success: function (e) {
        wx.showToast({
          title: App.getLanguage("capture_success")
        }), App.tips.show(App.getLanguage("capture_success")), wx.saveImageToPhotosAlbum({
          filePath: e.tempFilePath,
          success: function (e) {
            wx.showToast({
              title: App.getLanguage("capture_save_photo_album")
            }), App.tips.show(App.getLanguage("capture_save_local_success2", [e.tempFilePath]));
          },
          fail: function () {
            App.tips.show(App.getLanguage("capture_save_failed"));
          }
        });
      },
      fail: function () {
        wx.showToast({
          title: App.getLanguage("capture_failed")
        }), App.tips.show(App.getLanguage("capture_failed"));
      }
    }), this.onCaptureFinish(e, t));
  }, s.clearCanvas = function () {
    var e = this._canvas.getContext("2d");
    e && e.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }, s.saveImage = function () {
    var e = this.node.getComponent(__dependency_1.UITransform);
    e && this.savaAsImage(e.width, e.height, this._buffer);
  }, a;
}(__dependency_1.Component)) || _);
__dependency_1.cclegacy._RF.pop();
