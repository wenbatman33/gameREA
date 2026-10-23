/* Development only; included only by --mute. Release defaults stay unchanged. */
(() => {
 const connect=AudioNode.prototype.connect;
 const buses=new WeakMap();
 AudioNode.prototype.connect=function(destination,...rest){
  if(destination===this.context.destination){
   let bus=buses.get(this.context);
   if(!bus){bus=this.context.createGain();bus.gain.value=0;connect.call(bus,destination);buses.set(this.context,bus);}
   return connect.call(this,bus,...rest);
  }
  return connect.call(this,destination,...rest);
 };
 const play=HTMLMediaElement.prototype.play;
 HTMLMediaElement.prototype.play=function(...args){this.muted=true;this.volume=0;return play.apply(this,args);};
})();
