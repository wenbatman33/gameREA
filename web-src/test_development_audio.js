// Muting must preserve playback/resume promises used by game initialization.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
(async()=>{
 let resumed=0,buses=0,played=0;const links=[];
 class Context{constructor(){this.destination={context:this};}resume(){resumed++;return Promise.resolve('running');}createGain(){buses++;return Object.assign(new Node(this),{gain:{value:1}});}}
 class Node{constructor(context){this.context=context;}connect(destination){links.push({node:this,destination});return destination;}}
 class Media{play(){played++;return Promise.resolve('playing');}}
 const resume=Context.prototype.resume,scope={AudioNode:Node,HTMLMediaElement:Media,AudioContext:Context,window:{AudioContext:Context},WeakMap};
 vm.runInNewContext(fs.readFileSync(__dirname+'/development-mute.js','utf8'),scope);
 const context=new Context();assert.equal(Context.prototype.resume,resume);assert.equal(await context.resume(),'running');assert.equal(resumed,1);
 const source=new Node(context);source.connect(context.destination);source.connect(context.destination);assert.equal(buses,1);assert.equal(links[0].node.gain.value,0);assert.equal(links[0].destination,context.destination);
 const media=new Media();assert.equal(await media.play(),'playing');assert.equal(media.muted,true);assert.equal(media.volume,0);assert.equal(played,1);
 console.log('PASS development audio stays silent while native resume and media playback still complete');
})().catch(e=>{console.error(e);process.exitCode=1;});
