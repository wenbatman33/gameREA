// @ts-nocheck
// Recovered runtime JavaScript; not original TypeScript.
// Source: research/atg/seth2/extracted/main-CmmEntry.ts.js
// SHA256: 917175ceaffb5b56429a42d28fbb62d7efc31b860ff8ad5e842541d1eda4aecd
import * as __dependency_0 from "./shared-rollupPluginModLoBabelHelpers";
import * as __dependency_1 from "cc";
import * as __dependency_2 from "./main-EntryDelegate";
import * as __dependency_3 from "./main-Macros";
import * as __dependency_4 from "./main-Singleton";
import * as __dependency_5 from "./main-Bundles";
import * as __dependency_6 from "./main-BundleUpdateHandlerImpl";
import * as __dependency_7 from "./main-HallUpdateHandlerImpl";
import * as __dependency_8 from "./main-MainUpdateHandlerImpl";
var __export_0;
export { __export_0 as CmmEntry };
function __publish(name, value) {
  if (typeof name === 'object') {
    for (const key of Object.keys(name)) __publish(key, name[key]);
    return name;
  }
  switch (name) {
    case "CmmEntry":
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
(function (e) {
  void 0;
})(__dependency_5);
(function (e) {
  void 0;
})(__dependency_6);
(function (e) {
  void 0;
})(__dependency_7);
(function (e) {
  void 0;
})(__dependency_8);
__dependency_1.cclegacy._RF.push({}, "3e642VxXNZJBIt6YDvEMdSh", "CmmEntry", void 0);
__publish("CmmEntry", function (e) {
  function n() {
    return Reflect.construct(e, arguments, new.target || n) || this;
  }
  (0, __dependency_0.inheritsLoose)(n, e);
  var a = n.prototype;
  return a.onEnterGameView = function (t, n) {
    App.stageData.where = t.bundle, e.prototype.onEnterGameView.call(this, t, n), App.loading.hide();
  }, a.onShowGameView = function (e, t) {
    App.stageData.where = t.bundle;
  }, a.getEntryConfig = function (e) {
    var t;
    try {
      t = App.stageData.getEntry(e);
    } catch (e) {
      Log.e("很高的可能性 是輸入未知的多語系，所造成的錯誤。請檢查 CommonLanguage 模塊");
    }
    if (t) {
      var n = App.updateManager.getItem(t);
      return e == __dependency_3.Macro.BUNDLE_RESOURCES ? n.handler = __dependency_4.default.instance.get(__dependency_8.MainUpdateHandlerImpl) : e == __dependency_5.EBundles[__dependency_5.EBundles.wrapper] ? n.handler = __dependency_4.default.instance.get(__dependency_7.HallUpdateHandlerImpl) : n.handler = __dependency_4.default.instance.get(__dependency_6.BundleUpdateHandlerImpl), n;
    }
    return Log.e("未找到入口配置資訊"), null;
  }, a.getPersistBundle = function () {
    return [__dependency_3.Macro.BUNDLE_RESOURCES, __dependency_5.EBundles[__dependency_5.EBundles.wrapper], __dependency_5.EBundles[__dependency_5.EBundles.slotFramework]];
  }, n;
}(__dependency_2.EntryDelegate));
__dependency_1.cclegacy._RF.pop();
