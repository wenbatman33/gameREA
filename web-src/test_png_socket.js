const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync(__dirname+'/png-socket.js','utf8');
(async()=>{for(const slug of ['reactoonz','bookofdead','wrappinmoregold','legacyofdead','firejoker','riseofolympus','moonprincess','gemix']){
 let p;if(['reactoonz','bookofdead','wrappinmoregold'].includes(slug)){const cap=JSON.parse(fs.readFileSync(__dirname+'/../research/playngo/'+slug+'/network.json','utf8'));const f=cap.websockets.find(w=>w.url.includes('gamehub')).frames;const unpack=x=>{const b=Buffer.from(x.payload,'base64');return b.subarray(b.indexOf('d='),b.length-1).toString()};p={init:unpack(f.find(x=>x.direction==='received'&&x.phase==='load'&&x.payload.length>40)),rounds:f.filter(x=>x.direction==='received'&&x.phase==='spin'&&x.payload.length>40).map(x=>[{response:unpack(x)}])}}else p=JSON.parse(fs.readFileSync(__dirname+'/../research/playngo/new-games/'+slug+'/protocol-sequences.json','utf8'));
 const fixture=p.rounds.find(r=>r.length===1&&/^3 [01] 0 0 /m.test(r[0].response));assert(fixture);
 class Close extends Event{constructor(type,o){super(type);Object.assign(this,o)}}
 const native=function(){};Object.assign(native,{CONNECTING:0,OPEN:1,CLOSING:2,CLOSED:3});
 const c={window:{WebSocket:native},document:{currentScript:{dataset:{pngConfig:'https://local/_local/protocol.json'}}},fetch:async()=>({ok:true,json:async()=>({init:p.init,rounds:[fixture.map(x=>x.response)],balance:2500000})}),TextEncoder,TextDecoder,EventTarget,Event,MessageEvent,CloseEvent:Close,DOMException,Blob,URL,Uint8Array,location:{href:'https://local/v/png/'+slug+'/',host:'local',origin:'https://local'},setTimeout,console};
 vm.createContext(c);vm.runInContext(source,c);
 const ws=new c.window.WebSocket('wss://local/v/png/'+slug+'/o/ascflyp.playngonetwork.com//gamehub');await new Promise(r=>ws.addEventListener('open',r));
 async function send(t){const event=new Promise(r=>ws.addEventListener('message',r,{once:true}));ws.send(t);return(await event).data}
 assert.strictEqual(await send('{"protocol":"messagepack","version":1}\x1e'),'{}\x1e');
 assert(new TextDecoder().decode(await send('ProcessPacket\r\n104 1')).includes('104'));
 for(let n=1;n<=3;n++){const b=new TextDecoder().decode(await send('ProcessPacket\r\n1 1 1 1 1\r\n'));assert(b.includes('52 '+(2500000-n)));assert(/^3 [01] 0 0 /m.test(b))}
 ws.close();console.log(slug+': 3 browser-local protocol rounds PASS');
}})().catch(e=>{console.error(e);process.exitCode=1});
