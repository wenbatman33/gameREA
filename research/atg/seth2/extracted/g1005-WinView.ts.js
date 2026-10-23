System.register("chunks:///_virtual/WinView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventComponent.ts","./CmmSlotUtils.ts","./GameConfigModel.ts","./GameData.ts","./GameEvent.ts"],(function(t){"use strict";var n,e,o,i,a,s,c,r,u,f,l,h,d;return{setters:[function(t){n=t.inheritsLoose,e=t.createClass},function(t){o=t.cclegacy,i=t._decorator,a=t.instantiate,s=t.Label,c=t.tween,r=t.Vec3},function(t){u=t.default},function(t){f=t.CmmSlotUtils},function(t){l=t.default},function(t){h=t.default},function(t){d=t.GameEvent}],execute:function(){var p;o._RF.push({},"f0bace+0B5NDIDlOv6rqpmQ","WinView",void 0);var m=i.ccclass;i.property,t("WinView",m("WinView")(p=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var i=o.prototype;return i.onLoad=function(){t.prototype.onLoad.call(this)},i.start=function(){this.init()},i.onDestroy=function(){t.prototype.onDestroy.call(this)},i.init=function(){},i.showWinCash=function(){var t=this,n=this.data.getData().gameState.winSymbols,e=l.getData().filePaths.winCashPrefab,o=App.cache.get(this.data.module,e).data,i=[14,15,8,9,20,21,2,3,26,27,13,16,7,10,19,22,1,4,25,28,12,17,6,11,18,23,0,5,24,29];null==n&&(n=[]),n.forEach((function(n){var e=[];n.symbolPos.forEach((function(t){e.push(i.indexOf(t))})),e.sort((function(t,n){return t-n}));var c=a(o),r=i[e[0]],u=c.getComponent(s);t.node.addChild(c),u.string=f.formatNumber(n.winnings),t.playWinCashTween(c,r)}))},i.playWinCashTween=function(t,n){var e=this.data.getData().symbolPosConfig.get(n),o=t.getComponent(s).color;c(t).set({position:e}).by(1.5,{position:new r(0,50,0)},{easing:"fade",onComplete:function(){t.destroy()}}).start(),c(o).delay(1).to(.5,{a:0},{easing:"fade"}).start()},i.reset=function(){},i.setData=function(t){},i.show=function(){this.node.active=!0},i.hide=function(){this.node.active=!1},i.addEvents=function(){var t=this;this.on(d.SHOW_WIN_CASH,(function(){t.showWinCash()}))},e(o,[{key:"data",get:function(){return h.ins}}]),o}(u))||p);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/g1005', 'chunks:///_virtual/g1005'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});