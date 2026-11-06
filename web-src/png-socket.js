/* Browser-local SignalR adapter for acquired practice clients. */
(()=>{'use strict';
const native=window.WebSocket,tag=document.currentScript,configURL=tag&&tag.dataset.pngConfig;
if(!configURL)return;
const encoder=new TextEncoder(),decoder=new TextDecoder();
const configuration=fetch(configURL).then(r=>{if(!r.ok)throw Error('Local PNG fixture unavailable');return r.json()});
function pack(text){
 const p=encoder.encode(text),s=p.length<32?[0xa0+p.length]:p.length<256?[0xd9,p.length]:[0xda,p.length>>8,p.length&255];
 const fixed=[0x96,1,0x80,0xc0,0xa8,...encoder.encode('Commands'),0x91,...s,...p,0x90];let n=fixed.length,prefix=[];
 while(n>=128){prefix.push((n&127)|128);n>>=7}prefix.push(n);return new Uint8Array([...prefix,...fixed]).buffer;
}
class LocalSocket extends EventTarget{
 constructor(url,protocols){super();this.url=String(url);this.protocol='';this.extensions='';this.binaryType='arraybuffer';this.bufferedAmount=0;this.readyState=0;this._queue=Promise.resolve();this._balance=2500000;this._active=[];this._stake=[1,1,1];
 configuration.then(c=>{if(this.readyState!==0)return;this._cfg=c;this._balance=c.balance||2500000;this.readyState=1;this._emit('open',new Event('open'))}).catch(e=>{this._emit('error',new Event('error'));this.close(1011,e.message)});
 }
 _emit(type,event){this.dispatchEvent(event);const fn=this['on'+type];if(typeof fn==='function')fn.call(this,event)}
 _message(data){setTimeout(()=>{if(this.readyState===1)this._emit('message',new MessageEvent('message',{data,origin:location.origin}))},0)}
 send(input){if(this.readyState!==1)throw new DOMException('WebSocket is not open','InvalidStateError');this._queue=this._queue.then(async()=>{
  const b=typeof input==='string'?encoder.encode(input):input instanceof Blob?new Uint8Array(await input.arrayBuffer()):new Uint8Array(input.buffer||input,input.byteOffset||0,input.byteLength);
  const text=decoder.decode(b);
  if(text.includes('"protocol"')){this._message('{}\x1e');return}
  if(b.length===3&&b[0]===2&&b[1]===0x91&&b[2]===6){this._message(b.slice().buffer);return}
  if(this._cfg.engine&&text.includes('ProcessPacket')){
   const start=text.indexOf('d=');if(start<0)throw Error('Missing local protocol packet');
   const packet=text.slice(start).split(/\r?\n/),sequence=packet[0].slice(2);
   const command=packet.slice(2).join('\r\n').replace(/[\r\n\u0090\ufffd]+$/,'');
   const response=await fetch(this._cfg.api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({command,id:(this._connection||(this._connection=crypto.randomUUID()))+':'+sequence})});
   if(!response.ok)throw Error(await response.text());
   this._message(pack(await response.text()));return;
  }
  if(/\b104 /.test(text)){this._message(pack(this._cfg.init));return}
  if(!text.includes('ProcessPacket'))return;
  const spin=text.match(/\r?\n1 (\d+) (\d+) (\d+)/);
  if(spin){const values=spin.slice(1).map(Number),stake=values.reduce((a,v)=>a*v,1);if(stake<=0||stake>this._balance){this._message(pack('d=111 "Insufficient virtual credits"\r\n'));return}this._stake=values;this._balance-=stake;this._active=this._cfg.rounds[0].slice();}
  if(!this._active.length){this._message(pack('d=\r\n'));return}
  let reply=this._active.shift();reply=reply.replace(/^(d=)?1 \d+ \d+ \d+/gm,(_,d)=>(d||'')+'1 '+this._stake.join(' '));reply=reply.replace(/^(d=)?52 \d+/gm,(_,d)=>(d||'')+'52 '+this._balance);this._message(pack(reply));
 }).catch(e=>{console.error('Local PNG protocol error',e);this._emit('error',new Event('error'));this.close(1011,'Local protocol error')});}
 close(code=1000,reason=''){if(this.readyState===3)return;this.readyState=3;setTimeout(()=>this._emit('close',new CloseEvent('close',{code,reason,wasClean:code===1000})),0)}
}
for(const [k,v]of Object.entries({CONNECTING:0,OPEN:1,CLOSING:2,CLOSED:3})){LocalSocket[k]=v;LocalSocket.prototype[k]=v}
function WebSocketShim(url,protocols){const u=new URL(String(url),location.href);if(u.host===location.host&&u.pathname.includes('/v/png/')&&/\/gamehub\/?$/.test(u.pathname))return new LocalSocket(url,protocols);return protocols===undefined?new native(url):new native(url,protocols)}
WebSocketShim.prototype=native.prototype;for(const k of ['CONNECTING','OPEN','CLOSING','CLOSED'])WebSocketShim[k]=native[k];window.WebSocket=WebSocketShim;
})();
