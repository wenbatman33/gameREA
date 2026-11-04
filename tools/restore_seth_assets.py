"""Rebuild source assets using recovered UUIDs; retain provenance and unresolved types."""
from pathlib import Path
from copy import deepcopy
import hashlib,json,shutil,sys,os
from recover_cocos_effect import effect_source
from restore_cocos_serialization import CompiledDecoder,unpack,decode_uuid,editor_document,decode_ccon_binary
ROOT=Path(__file__).resolve().parents[1]
MIRROR=ROOT/'research/atg/seth2/mirror/play.godeezone1.com'
PROJECT=ROOT/'creator-projects/seth2-recovered'
OUT=PROJECT/'assets/recovered'

def meta(path,uid,importer,version='1.0.0',user=None):
    target=Path(str(path)+'.meta')
    target.write_text(json.dumps(dict(ver=version,importer=importer,imported=False,uuid=uid,files=[],subMetas={},userData=user or {}),indent=2)+'\n')

def load_records():
    records={};bundles={};native={};errors=[]
    for config in MIRROR.rglob('config.json'):
        c=json.loads(config.read_text());base=config.parent;name=c['name'];bundles[name]=c
        for p in (base/'native').rglob('*') if (base/'native').exists() else []:
            if p.is_file():native[(p.stem,p.suffix)]=p
        docs={}
        for p in (base/'import').rglob('*.json') if (base/'import').exists() else []:
            docs[p.stem]=(p,unpack(json.loads(p.read_text())))
        packed=set()
        for pack,indices in c.get('packs',{}).items():
            if pack not in docs:errors.append(dict(bundle=name,missingPack=pack));continue
            source,items=docs[pack]
            if len(indices)!=len(items):raise ValueError(f'Pack mismatch {source}')
            for ix,doc in zip(indices,items):
                uid=decode_uuid(c['uuids'][int(ix)]);packed.add(uid)
                records[uid]=dict(bundle=name,source=str(source.relative_to(ROOT)),data=CompiledDecoder(doc).decode())
        for raw in c.get('uuids',[]):
            uid=decode_uuid(raw)
            if uid in packed:continue
            if uid not in docs:continue
            source,docs_for_uid=docs[uid]
            if len(docs_for_uid)!=1:continue
            records[uid]=dict(bundle=name,source=str(source.relative_to(ROOT)),data=CompiledDecoder(docs_for_uid[0]).decode())
        for p in (base/'import').rglob('*.cconb') if (base/'import').exists() else []:
            uid=decode_uuid(p.stem)
            records[uid]=dict(bundle=name,source=str(p.relative_to(ROOT)),data=decode_ccon_binary(p.read_bytes()))
    return records,bundles,native,errors

def main():
    records,bundles,native,errors=load_records();writes=[];builtin=[]
    engine_assets=Path('/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/editor/assets')
    builtin_assets={}
    for path in engine_assets.rglob('*.meta'):
        try:
            m=json.loads(path.read_text());builtin_assets[m['uuid']]=(Path(str(path)[:-5]),m)
        except (ValueError,KeyError):pass
    source_paths={}
    for bundle,c in bundles.items():
        for index,path_info in c.get('paths',{}).items():
            uid=decode_uuid(c['uuids'][int(index)])
            if '@' not in uid and not path_info[0].startswith('db:'):
                source_paths[uid]=(bundle,path_info[0])
        for scene_path,index in c.get('scenes',{}).items():
            uid=decode_uuid(c['uuids'][int(index)])
            source_paths[uid]=(bundle,scene_path.removeprefix('db://assets/').removeprefix('db:/assets/'))
    def source_destination(path,uid):
        if uid in source_paths:
            bundle,relative=source_paths[uid]
            relative=Path(relative)
            if relative.suffix==path.suffix:relative=relative.with_suffix('')
            return (PROJECT/'assets/resources' if bundle=='resources' else OUT/bundle)/(str(relative)+path.suffix)
        return path
    # Never derive source metadata from the active editor asset-db: an early
    # CLI startup without engine importers can downgrade every file to '*'.
    image_template=dict(ver='1.0.27',importer='image',imported=False,uuid='00000000-0000-0000-0000-000000000000',files=[],subMetas={},userData=dict(type='sprite-frame',fixAlphaTransparencyArtifacts=False,hasAlpha=True,redirect='00000000-0000-0000-0000-000000000000@6c48a'))
    image_template['subMetas']['6c48a']=dict(importer='texture',uuid='00000000-0000-0000-0000-000000000000@6c48a',displayName='texture',id='6c48a',name='texture',userData=dict(wrapModeS='clamp-to-edge',wrapModeT='clamp-to-edge',imageUuidOrDatabaseUri='00000000-0000-0000-0000-000000000000',isUuid=True,visible=False,minfilter='linear',magfilter='linear',mipfilter='none',anisotropy=0),ver='1.0.22',imported=False,files=[],subMetas={})
    image_template['subMetas']['f9941']=dict(importer='sprite-frame',uuid='00000000-0000-0000-0000-000000000000@f9941',displayName='spriteFrame',id='f9941',name='spriteFrame',userData=dict(trimThreshold=1,rotated=False,offsetX=0,offsetY=0,trimX=0,trimY=0,width=0,height=0,rawWidth=0,rawHeight=0,borderTop=0,borderBottom=0,borderLeft=0,borderRight=0,packable=True,pixelsToUnit=100,pivotX=.5,pivotY=.5,meshType=0,vertices={},isUuid=True,imageUuidOrDatabaseUri='00000000-0000-0000-0000-000000000000@6c48a',atlasUuid='',trimType='custom'),ver='1.0.12',imported=False,files=[],subMetas={})
    image_paths={}
    def write(path,body,uid,kind,version='1.0.0',user=None):
        path=source_destination(path,uid)
        path.parent.mkdir(parents=True,exist_ok=True)
        if isinstance(body,Path):shutil.copyfile(body,path)
        else:path.write_text(body)
        meta(path,uid,kind,version,user)
        writes.append(dict(uuid=uid,path=str(path.relative_to(PROJECT)),type=kind,source=records.get(uid,{}).get('source'),nativeSource=str(body.relative_to(ROOT))if isinstance(body,Path)else None))
        return path
    def body(d):return json.dumps(d,ensure_ascii=False,indent=2)+'\n'
    for uid,r in records.items():
        obj=r['data'][0];kind=obj.get('__type__') if isinstance(obj,dict) else None
        if kind=='cc.ImageAsset':
            if uid in builtin_assets:
                image_paths[uid]=builtin_assets[uid][0]
                builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])));continue
            native_image=next((native[(uid,ext)]for ext in ['.png','.jpg','.webp']if(uid,ext)in native),None)
            if not native_image:errors.append(dict(uuid=uid,type=kind,reason='native raster not found'));continue
            dest=source_destination(OUT/'images'/r['bundle']/(uid+native_image.suffix),uid)
            write(dest,native_image,uid,'image','1.0.27');image_paths[uid]=dest
            m=deepcopy(image_template);old=m['uuid'];m['uuid']=uid;m['imported']=False
            def replace(x):
                if isinstance(x,dict):return{k:replace(v)for k,v in x.items()}
                if isinstance(x,list):return[replace(v)for v in x]
                return x.replace(old,uid)if isinstance(x,str)else x
            m=replace(m)
            for sub in m['subMetas'].values():sub['displayName']=dest.stem
            sampler=records.get(uid+'@6c48a',{}).get('data',[{}])[0].get('_serialized',[])
            if isinstance(sampler,list)and sampler and isinstance(sampler[0],str):
                fields=[int(x)for x in sampler[0].split(',')]
                if len(fields)>=6:
                    filters={0:'none',1:'nearest',2:'linear',3:'anisotropic'}
                    wraps={0:'repeat',1:'mirrored-repeat',2:'clamp-to-edge',3:'clamp-to-border'}
                    m['subMetas']['6c48a']['userData'].update(minfilter=filters[fields[0]],magfilter=filters[fields[1]],wrapModeS=wraps[fields[2]],wrapModeT=wraps[fields[3]],mipfilter=filters[fields[4]],anisotropy=fields[5])
            for sub in m['subMetas'].values():sub['imported']=False
            frame=records.get(uid+'@f9941',{}).get('data',[{}])[0]
            if frame.get('_serialized'):
                f=frame['_serialized'];u=m['subMetas']['f9941']['userData'];rect=f['rect'];size=f['originalSize'];off=f['offset'];caps=f.get('capInsets',[0,0,0,0])
                u.update(trimType='custom',rotated=f.get('rotated',False),offsetX=off['x'],offsetY=off['y'],trimX=rect['x'],trimY=rect['y'],width=rect['width'],height=rect['height'],rawWidth=size['width'],rawHeight=size['height'],borderLeft=caps[0],borderTop=caps[1],borderRight=caps[2],borderBottom=caps[3],packable=f.get('packable',True),pixelsToUnit=f.get('pixelsToUnit',100))
                vertices=deepcopy(f.get('vertices',{}))
                for k in ['minPos','maxPos']:
                    if isinstance(vertices.get(k),dict):vertices[k]=[vertices[k].get(c,0)for c in ['x','y','z']]
                # Auto-atlas publication rewrites frame coordinates to packed
                # atlas space. We restore original individual raster sources,
                # so derive their trim origin from originalSize/offset instead.
                texture_uid=frame.get('_textureSource',{}).get('__uuid__','').split('@')[0]
                if texture_uid and texture_uid!=uid:
                    u['rotated']=False
                    u['trimX']=(size['width']-rect['width'])/2+off['x']
                    u['trimY']=(size['height']-rect['height'])/2-off['y']
                    vertices={}
                for key in ['rawPosition','indexes','uv','nuv','minPos','maxPos']:vertices.setdefault(key,[])
                u['vertices']=vertices
            else:m['subMetas'].pop('f9941',None);m['userData']['type']='texture'
            Path(str(dest)+'.meta').write_text(body(m))
    for uid,r in sorted(records.items(),key=lambda item:isinstance(item[1]['data'][0],dict)and item[1]['data'][0].get('__type__')=='sp.SkeletonData'):
        data=r['data'];obj=data[0];kind=obj.get('__type__') if isinstance(obj,dict) else None
        if uid in builtin_assets:
            if kind!='cc.ImageAsset':builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])))
            continue
        safe_name=(obj.get('_name')or uid).replace('/','_').replace('\\','_')
        folder=OUT/r['bundle']
        if kind in ['cc.SceneAsset','cc.Prefab','cc.AnimationClip','cc.Material']:
            ext,imp,ver={'cc.SceneAsset':('.scene','scene','1.1.50'),'cc.Prefab':('.prefab','prefab','1.1.50'),'cc.AnimationClip':('.anim','animation-clip','2.0.3'),'cc.Material':('.mtl','material','1.0.21')}[kind]
            if kind=='cc.Material':
                obj=deepcopy(obj);obj.setdefault('_techIdx',0);obj.setdefault('_objFlags',0);obj.setdefault('_native','')
                obj['_effectAsset']['__expectedType__']='cc.EffectAsset'
            write(folder/(safe_name+'-'+uid[:8]+ext),body(obj if kind=='cc.Material' else editor_document(data,uid)),uid,imp,ver)
        elif kind=='cc.AudioClip':
            p=native.get((uid,obj.get('_native','.mp3')))
            if p:write(folder/'audio'/(safe_name+'-'+uid[:8]+p.suffix),p,uid,'audio-clip','1.0.11')
            else:errors.append(dict(uuid=uid,type=kind,reason='native audio missing'))
        elif kind=='cc.JsonAsset':write(folder/'json'/(safe_name+'-'+uid[:8]+'.json'),body(obj.get('json',obj.get('_json',{}))),uid,'json','1.0.3')
        elif kind=='cc.BitmapFont':
            cfg=obj['fntConfig'];frame_uid=obj.get('spriteFrame',{}).get('__uuid__','');image=image_paths.get(frame_uid.split('@')[0])
            if not image:errors.append(dict(uuid=uid,type=kind,reason='font texture missing',spriteFrame=frame_uid));continue
            dest=source_destination(folder/'fonts'/(safe_name+'-'+uid[:8]+'.fnt'),uid)
            frame=records[frame_uid]['data'][0]['_serialized'];size=frame['originalSize']
            page=os.path.relpath(image,dest.parent)
            lines=[f'info face="{safe_name}" size={cfg["fontSize"]} bold=0 italic=0 charset="" unicode=1 stretchH=100 smooth=1 aa=1 padding=0,0,0,0 spacing=0,0',f'common lineHeight={cfg["commonHeight"]} base={cfg["fontSize"]} scaleW={size["width"]} scaleH={size["height"]} pages=1 packed=0',f'page id=0 file="{page}"',f'chars count={len(cfg["fontDefDictionary"])}']
            for char,glyph in cfg['fontDefDictionary'].items():
                rect=glyph['rect'];lines.append(f'char id={char} x={rect["x"]} y={rect["y"]} width={rect["width"]} height={rect["height"]} xoffset={glyph["xOffset"]} yoffset={glyph["yOffset"]} xadvance={glyph["xAdvance"]} page=0 chnl=15')
            kern=cfg.get('kerningDict',{});lines.append(f'kernings count={len(kern)}')
            for pair,amount in kern.items():
                pair=int(pair);lines.append(f'kerning first={pair>>16} second={pair&65535} amount={amount}')
            write(dest,'\n'.join(lines)+'\n',uid,'bitmap-font','1.0.6',dict(_fntConfig=cfg,fontSize=cfg['fontSize'],textureUuid=frame_uid.split('@')[0]))
        elif kind=='cc.TextAsset':write(folder/'text'/(safe_name+'-'+uid[:8]+'.txt'),obj.get('text',''),uid,'text','1.0.2')
        elif kind=='cc.Asset':
            p=native.get((uid,obj.get('_native','')))
            if p:write(folder/'native'/(safe_name+'-'+uid[:8]+p.suffix),p,uid,'*','0.0.1')
            else:errors.append(dict(uuid=uid,type=kind,name=safe_name,reason='nonvisual native source absent',native=obj.get('_native')))
        elif kind=='cc.ParticleAsset':
            p=native.get((uid,'.plist'))
            if p:write(folder/'particles'/(safe_name+'-'+uid[:8]+'.plist'),p,uid,'particle','1.0.2',dict(spriteFrameUuid=obj.get('spriteFrame',{}).get('__uuid__')))
            else:errors.append(dict(uuid=uid,type=kind,reason='native plist absent'))
        elif kind=='cc.SpriteAtlas':
            # The packed atlas contains its exact frame UUID/name list but no
            # author packing settings. Recreate editable auto-atlas definition
            # over restored originals; Creator will repack it during build.
            template=engine_assets/'default_file_content/auto-atlas/default.pac.meta'
            user=json.loads(template.read_text())['userData']
            user.update(filterUnused=False,removeSpriteAtlasInBundle=False)
            write(folder/(safe_name+'-'+uid[:8]+'.pac'),body({'__type__':'cc.SpriteAtlas'}),uid,'auto-atlas','1.0.8',user)
        elif kind=='cc.EffectAsset':
            if uid in builtin_assets:
                # References resolve to installed engine built-ins. Do not create
                # duplicate UUIDs in the user project.
                builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])))
            else:
                write(folder/'effects'/(safe_name+'-'+uid[:8]+'.effect'),effect_source(obj),uid,'effect','1.7.1')
        elif kind=='cc.RenderTexture':
            content=obj['_serialized'];dest=source_destination(folder/(safe_name+'-'+uid[:8]+'.rt'),uid)
            write(dest,body(dict(__type__='cc.RenderTexture',_objFlags=0,_native='',content=content)),uid,'render-texture','1.2.1',dict(width=content['w'],height=content['h'],anisotropy=0,minfilter='linear',magfilter='linear',mipfilter='none',wrapModeS='repeat',wrapModeT='repeat',redirect=uid+'@f9941'))
            m=json.loads(Path(str(dest)+'.meta').read_text());m['subMetas']['f9941']=dict(importer='rt-sprite-frame',uuid=uid+'@f9941',displayName=safe_name,id='f9941',name='spriteFrame',userData=dict(imageUuidOrDatabaseUri=uid,width=content['w'],height=content['h']),ver='1.0.0',imported=False,files=[],subMetas={});Path(str(dest)+'.meta').write_text(body(m))
        elif kind=='cc.PhysicsMaterial':
            if uid in builtin_assets:builtin.append(dict(uuid=uid,type=kind,source=str(builtin_assets[uid][0])))
            else:write(folder/(safe_name+'-'+uid[:8]+'.pmtl'),body(obj),uid,'physics-material','1.0.1')
        elif kind=='sp.SkeletonData':
            dest=source_destination(folder/'spine'/(safe_name+'-'+uid[:8]+'.json'),uid)
            atlas=obj.get('_atlasText','')
            for name,texture in zip(obj.get('textureNames',[]),obj.get('textures',[])):
                image=image_paths.get(texture.get('__uuid__','').split('@')[0])
                if image:
                    rel=os.path.relpath(image,dest.parent)
                    atlas='\n'.join(rel if line==name else line for line in atlas.split('\n'))
                else:errors.append(dict(uuid=uid,type=kind,texture=texture))
            write(dest,body(obj['_skeletonJson']),uid,'spine-data','1.2.5')
            atlas_path=dest.with_suffix('.atlas');atlas_path.write_text(atlas)
        elif kind not in ['cc.ImageAsset','cc.SpriteFrame','cc.Texture2D']:
            errors.append(dict(uuid=uid,type=kind,reason='source importer restoration not implemented'))
    # Remove only previous generator outputs whose original UUID has moved.
    # This prevents editor duplicate UUIDs while preserving unrelated user work.
    expected={item['uuid']:PROJECT/item['path'] for item in writes}
    expected.update({uid:source[0] for uid,source in builtin_assets.items()})
    for path in list(OUT.rglob('*.meta'))+list((PROJECT/'assets/resources').rglob('*.meta')):
        try:m=json.loads(path.read_text())
        except ValueError:continue
        old=Path(str(path)[:-5]);actual=expected.get(m.get('uuid'))
        if actual and old!=actual:
            path.unlink()
            if old.is_file():old.unlink()
            if old.suffix=='.json' and old.with_suffix('.atlas').exists():old.with_suffix('.atlas').unlink()
    for bundle in ['g1005','slotFramework']:
        directory=OUT/bundle;directory.mkdir(parents=True,exist_ok=True)
        from uuid import uuid5,NAMESPACE_URL
        meta(directory,str(uuid5(NAMESPACE_URL,'seth2-recovered:bundle:'+bundle)),'directory','1.2.0',dict(isBundle=True,bundleName=bundle,priority=1,compressionType={},isRemoteBundle={} ))
    # Creator reserves assets/resources for the resources bundle.
    resources=PROJECT/'assets/resources';resources.mkdir(parents=True,exist_ok=True)
    meta(resources,str(uuid5(NAMESPACE_URL,'seth2-recovered:bundle:resources')),'directory','1.2.0')
    old_resources=OUT/'resources'
    if old_resources.exists() and not any(p.is_file() and p.suffix!='.meta' for p in old_resources.rglob('*')):
        shutil.rmtree(old_resources)
        Path(str(old_resources)+'.meta').unlink(missing_ok=True)
    scripts=json.loads((ROOT/'research/creator-recovery/seth2-script-map.json').read_text())
    for script in scripts['modules']:
        path=OUT/'scripts'/script['output']
        previous=Path(str(path)+'.meta')
        existing=json.loads(previous.read_text()).get('uuid')if previous.exists()else None
        source_uid=decode_uuid(script['uuid'])if script.get('uuid')else None
        if source_uid in builtin_assets and script.get('compatibility'):
            # An explicit 3.7 -> 3.8 built-in bridge must not register the same
            # asset UUID twice. Component classID resolves to the real builtin.
            uid=existing if existing and existing!=source_uid else str(uuid5(NAMESPACE_URL,'seth2-recovered:bridge:'+script['output']))
        else:uid=source_uid or existing or str(uuid5(NAMESPACE_URL,'seth2-recovered:script:'+script['output']))
        meta(path,uid,'typescript'if path.suffix=='.ts'else'javascript','4.0.23'if path.suffix=='.ts'else'4.0.24',{})
    report=dict(status='Source reconstruction; editor/build acceptance still required',records=len(records),outputs=writes,builtinReferences=builtin,derivedSettings=[dict(uuid='e55eac2f-3e32-44dc-948e-01b98dd0d2e3',reason='Original packing settings absent; editor packing defaults reconstructed over original rasters')],unresolved=errors)
    (ROOT/'research/creator-recovery/seth2-asset-map.json').write_text(body(report))
    print(json.dumps(dict(records=len(records),written=len(writes),unresolved=len(errors))))
if __name__=='__main__':
    import argparse
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--overwrite-restored-source',action='store_true',help='Explicitly replace reconstructed assets; this can overwrite later editor edits.')
    args=parser.parse_args()
    if OUT.exists()and any(OUT.iterdir())and not args.overwrite_restored_source:
        parser.error('Recovered sources already exist. Preserve editor edits; use --overwrite-restored-source only for an intentional full reconstruction.')
    main()
