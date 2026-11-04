// Reconstructed opt-in diagnostics, not original game logic; no gameplay errors are swallowed.
var __recoverySymbolTraceCount = 0;
function __recoverySymbolTrace(component, phase) {
  // Catch only optional instrumentation failures; original gameplay calls remain outside this wrapper.
  try { return __recoverySymbolTraceUnsafe(component,phase); }
  catch(error) { console.error('[Seth recovery diagnostic failure]',String(error)); }
}
function __recoverySymbolTraceUnsafe(component, phase) {
  if (!globalThis.location || new URLSearchParams(globalThis.location.search).get('reaDebug') !== '1' || __recoverySymbolTraceCount++ >= 80) return;
  if(!__dependency_1.isValid(component)||!component.node)return;
  const data = component.data.getData(), node = component.node;
  const uiState = value => {
    const props=value&&value._uiProps, renderer=props&&props.uiComp;
    return props?{localOpacity:props.localOpacity,opacity:props.opacity,colorDirty:props.colorDirty,isStatic:value._static,renderer:renderer?{name:renderer.constructor.name,enabled:renderer.enabled,inHierarchy:renderer.enabledInHierarchy,alpha:renderer.color&&renderer.color.a,stencilStage:renderer.stencilStage}:null}:null;
  };
  const ancestors = [];
  for (let current = node, depth = 0; current && depth < 5; current = current.parent, depth++) {
    const opacity = current.getComponent(__dependency_1.UIOpacity);
    ancestors.push({uiState:uiState(current),name:current.name,active:current.active,inHierarchy:current.activeInHierarchy,layer:current.layer,opacity:opacity?opacity.opacity:null,position:{x:current.position.x,y:current.position.y,z:current.position.z},scale:{x:current.scale.x,y:current.scale.y,z:current.scale.z}});
  }
  const snapshot = value => {
    if(!value)return null;
    const opacity=value.getComponent(__dependency_1.UIOpacity), transform=value.getComponent(__dependency_1.UITransform);
    return {worldMatrix:value.worldMatrix?Array.from({length:16},(_,index)=>value.worldMatrix["m"+String(index).padStart(2,"0")]):null,uiState:uiState(value),name:value.name,active:value.active,inHierarchy:value.activeInHierarchy,layer:value.layer,sibling:value.getSiblingIndex(),opacity:opacity?opacity.opacity:null,position:{x:value.position.x,y:value.position.y,z:value.position.z},worldPosition:{x:value.worldPosition.x,y:value.worldPosition.y,z:value.worldPosition.z},scale:{x:value.scale.x,y:value.scale.y,z:value.scale.z},worldScale:{x:value.worldScale.x,y:value.worldScale.y,z:value.worldScale.z},size:transform?{width:transform.width,height:transform.height}:null};
  };
  const primitiveFields = (object,keys) => object?Object.fromEntries(keys.filter(key=>['number','string','boolean'].includes(typeof object[key])).map(key=>[key,object[key]])):null;
  const depthState = state => primitiveFields(state,['depthTest','depthWrite','depthFunc','stencilTestFront','stencilTestBack','stencilFuncFront','stencilFuncBack','stencilRefFront','stencilRefBack','stencilReadMaskFront','stencilReadMaskBack','stencilWriteMaskFront','stencilWriteMaskBack','stencilFailOpFront','stencilZFailOpFront','stencilPassOpFront','stencilFailOpBack','stencilZFailOpBack','stencilPassOpBack']);
  const materialState = material => material?{name:material.name,effect:material.effectAsset&&material.effectAsset.name,passes:material.passes.map(pass=>({defines:primitiveFields(pass.defines,Object.keys(pass.defines||{})),depthStencil:depthState(pass.depthStencilState)}))}:null;
  const mask=node.getComponent(__dependency_1.Mask), graphics=node.getComponent(__dependency_1.Graphics);
  // Explicit diagnostic A/B only: never enabled in normal verification or published defaults.
  if(phase==='createSymbols:exit'&&new URLSearchParams(globalThis.location.search).get('reaProbeMask')==='off'&&mask&&mask.enabled){
    mask.enabled=false;
    console.info('[Seth recovery diagnostic probe] SymbolView Mask disabled by explicit reaDebug=1&reaProbeMask=off; this is a causal rendering probe, not a gameplay fix.');
  }
  const maskTransform=node.getComponent(__dependency_1.UITransform), maskWorldBounds=maskTransform&&maskTransform.getBoundingBoxToWorld();
  const graphicsMeshes=graphics&&graphics.impl?graphics.impl.getRenderDataList().map((data,meshIndex)=>{
    const gpuModel=graphics.model&&graphics.model.subModels[meshIndex];
    const vertexBuffer=gpuModel&&gpuModel.inputAssembler.vertexBuffers[0];
    // Graphics uses its own pos/color/dist format (8 floats), not MeshRenderData's default UV format (9).
    const stride=vertexBuffer?vertexBuffer.stride/Float32Array.BYTES_PER_ELEMENT:0;
    const count=data.vertexStart||data.vertexCount, points=[];
    if(stride>0)for(let index=0;index<count&&index<1024;index++)points.push({x:data.vData[index*stride],y:data.vData[index*stride+1]});
    return {vertexCount:data.vertexCount,vertexStart:data.vertexStart,indexCount:data.indexCount,indexStart:data.indexStart,floatStride:stride,meshDefaultStride:data.floatStride,localBounds:points.length?{minX:Math.min(...points.map(p=>p.x)),maxX:Math.max(...points.map(p=>p.x)),minY:Math.min(...points.map(p=>p.y)),maxY:Math.max(...points.map(p=>p.y))}:null};
  }):[];
  const graphicsGPU=graphics&&graphics.model?graphics.model.subModels.map(model=>({vertices:model.inputAssembler.vertexCount,indices:model.inputAssembler.indexCount})):[];
  const cameraTarget = camera => {
    const renderCamera=camera.camera, window=renderCamera&&renderCamera.window, framebuffer=window&&window.framebuffer;
    return framebuffer?{offscreen:!!camera.targetTexture,depthStencilTexture:framebuffer.depthStencilTexture?{format:framebuffer.depthStencilTexture.format}:null,depthStencilAttachment:primitiveFields(framebuffer.renderPass&&framebuffer.renderPass.depthStencilAttachment,['format','depthLoadOp','depthStoreOp','stencilLoadOp','stencilStoreOp'])}:null;
  };
  const cameras=node.scene.getComponentsInChildren(__dependency_1.Camera).map(camera=>({target:cameraTarget(camera),name:camera.node.name,enabled:camera.enabled,inHierarchy:camera.enabledInHierarchy,visibility:camera.visibility,priority:camera.priority,projection:camera.projection,orthoHeight:camera.orthoHeight,node:snapshot(camera.node)}));
  const sample = Array.from(component.symbolsMap.values()).slice(0,3).map(symbol => {
    const sprite=symbol.symbolSprite, frame=sprite&&sprite.spriteFrame, texture=frame&&frame.texture, material=sprite&&sprite.getRenderMaterial(0);
    const renderData=sprite&&sprite.renderData,chunk=renderData&&renderData.chunk;
    const renderState=renderData?{valid:!!renderData.isValid(),vertices:renderData.vertexCount,indices:renderData.indexCount,dataLength:renderData.dataLength,vertDirty:renderData.vertDirty,textureDirty:renderData.textureDirty,material:renderData.material&&renderData.material.name,chunk:chunk?{bufferId:chunk.bufferId,vertexOffset:chunk.vertexOffset,firstVertex:Array.from(chunk.vb||[]).slice(0,9)}:null}:null;
    return {renderState,spriteCanRender:!!(sprite&&sprite._canRender()),spriteEnabledInHierarchy:sprite&&sprite.enabledInHierarchy,id:symbol.symbolID,pos:symbol.posId,active:symbol.node.active,inHierarchy:symbol.node.activeInHierarchy,position:{x:symbol.node.position.x,y:symbol.node.position.y,z:symbol.node.position.z},root:snapshot(symbol.node),spriteNode:snapshot(sprite&&sprite.node),spriteEnabled:sprite&&sprite.enabled,spriteColor:sprite?{r:sprite.color.r,g:sprite.color.g,b:sprite.color.b,a:sprite.color.a}:null,material:material?{name:material.name,valid:material.isValid,passes:material.passes.length}:null,uv:frame?Array.from(frame.uv||[]):null,frame:frame&&frame.name,rect:frame?{width:frame.rect.width,height:frame.rect.height}:null,texture:texture?{width:texture.width,height:texture.height,gfxReady:!!texture.getGFXTexture(),valid:texture.isValid}:null};
  });
  const pool=App.pool.getPool('symbolPool',false);
  console.info('[Seth recovery symbols]', JSON.stringify({phase,mask:mask?{enabled:mask.enabled,inHierarchy:mask.enabledInHierarchy,type:mask.type,inverted:mask.inverted,subComp:mask.subComp?{name:mask.subComp.constructor.name,enabled:mask.subComp.enabled,stencilStage:mask.subComp.stencilStage}:null,worldBounds:maskWorldBounds?{x:maskWorldBounds.x,y:maskWorldBounds.y,width:maskWorldBounds.width,height:maskWorldBounds.height}:null,node:snapshot(node)}:null,graphics:graphics?{enabled:graphics.enabled,inHierarchy:graphics.enabledInHierarchy,stencilStage:graphics.stencilStage,meshes:graphicsMeshes,gpu:graphicsGPU,material:materialState(graphics.getRenderMaterial(0)),modelUBOWorld:graphics.model?Array.from(graphics.model._localData||[]).slice(0,16):null,modelNode:snapshot(graphics.model&&graphics.model.node),modelTransform:snapshot(graphics.model&&graphics.model.transform)}:null,cameras,viewLength:data.parser.view1D.length,symbols:component.symbolsMap.size,outSymbols:component.outSymbolMap.size,poolSize:pool?pool.size:null,children:node.children.length,isOutCompleted:component.isOutCompleted,isStartSymbolIn:component.isStartSymbolIn,ancestors,sample}));
  if(phase==='createSymbols:exit')component.scheduleOnce(()=>__recoverySymbolTrace(component,'createSymbols:nextFrame'),0);
}
