System.register("chunks:///_virtual/WrapperView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Decorators.ts","./Bundles.ts","./CmmUtils.ts","./GameViewBase.ts","./WrapperData.ts","./WrapperLogic.ts"],(function(t){"use strict";var n,e,i,o,s,r,a,c,l,u,p,f,h,b,d,m,v,g;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized,s=t.createClass},function(t){r=t.cclegacy,a=t._decorator,c=t.find,l=t.Label,u=t.NodeEventType,p=t.tween,f=t.Node},function(t){h=t.inject},function(t){b=t.EBundles},function(t){d=t.CmmUtils},function(t){m=t.default},function(t){v=t.default},function(t){g=t.WrapperLogic}],execute:function(){var y,B,C,T,w;r._RF.push({},"d0f3bzgoghKnopHyB5KfGCs","WrapperView",void 0);var E=a.ccclass;a.property,t("default",(y=h("content/bbr",f),E(((w=function(t){function n(){for(var n,e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return n=t.call.apply(t,[this].concat(s))||this,i(n,"bbr",T,o(n)),n.title=null,n.btnContent=null,n.lobbyBtn=null,n.gamebtn=null,n.tween=null,n}e(n,t);var r=n.prototype;return r.onLoad=function(){t.prototype.onLoad.call(this),this.setNode(),this.setEventTouch()},r.start=function(){var t=this;this.enableBBR(!0),this.init(),this.serviceInit(),this.coundown((function(){t.setBtnContentActive(!0)})),this.data.ENTER_SLOT_VIEW},r.onDestroy=function(){this.tween.stop()},n.getPrefabUrl=function(){return"@WrapperView"},r.init=function(){this.setBtnContentActive(!1)},r.setNode=function(){this.title=c("content/title",this.node).getComponent(l),this.btnContent=c("content/btnContent",this.node),this.lobbyBtn=c("lobbyBtn",this.btnContent),this.gamebtn=c("gameBtn",this.btnContent)},r.setEventTouch=function(){var t=this;this.lobbyBtn.on(u.TOUCH_END,(function(){t.enterBundle(b[b.slotFramework])})),this.gamebtn.on(u.TOUCH_END,(function(){t.enterBundle(b[b.g1002])}))},r.setTitle=function(t){this.title.string="\n        Wrapper\n        "+t+"s \n        go to GameView\n        Game 前往 Game\n        "},r.setBtnContentActive=function(t){this.btnContent.active=t},r.coundown=function(t){var n=this,e={time:2,totalTime:2};this.tween=p(e).to(e.totalTime,{time:0},{onUpdate:function(){e.totalTime=e.time,n.setTitle(d.roundDecimal(e.totalTime,0))},onComplete:function(n){t&&t(n)}}).start()},r.serviceInit=function(){},r.enableBBR=function(t){this.bbr.active=t},r.addEvents=function(){t.prototype.addEvents.call(this)},s(n,[{key:"data",get:function(){return App.dataCenter.get(v)}}]),n}(m)).logicType=g,T=n((C=w).prototype,"bbr",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=C))||B));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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