"""Recover dynamic Cocos JSON from compiled format v1 without executing game code.
Algorithm follows the installed engine's deserialize.ts. Unknown forms fail closed.
"""
from copy import deepcopy

B64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
def decode_uuid(value):
    root,sep,sub=value.partition('@')
    if len(root)in (22,23):
        prefix=2 if len(root)==22 else 5
        out=root[:prefix]
        for i in range(prefix,len(root),2):
            a,b=B64.index(root[i]),B64.index(root[i+1])
            out+=f'{a>>2:x}{((a&3)<<2)|(b>>4):x}{b&15:x}'
        root=f'{out[:8]}-{out[8:12]}-{out[12:16]}-{out[16:20]}-{out[20:]}'
    return root+(sep+sub if sep else '')

class CompiledDecoder:
    def __init__(self,data):
        self.data=deepcopy(data)
        if not isinstance(data,list) or len(data)!=11 or data[0]!=1:raise ValueError('Expected compiled format v1 document')
        self.strings=data[2] or [];self.classes=data[3];self.masks=data[4] or []
        self.refs=deepcopy(data[7]) if data[7] else []
        self.depowners=deepcopy(data[8]);self.instances=[]
    def assign(self,owner,key,kind,value):
        if kind==0:owner[key]=deepcopy(value)
        elif kind==1:
            if value>=0:owner[key]={'__id__':value}
            else:self.refs[(~value)*3]=owner
        elif kind in (2,3,9):
            owner[key]=[None]*len(value)
            for i,item in enumerate(value):self.assign(owner[key],i,{2:1,3:6,9:4}[kind],item)
        elif kind==4:owner[key]=self.object(value)
        elif kind in (5,8):owner[key]=self.value(value)
        elif kind==6:self.depowners[value]=owner;owner[key]=None
        elif kind==7:owner[key]=deepcopy(value)
        elif kind==10:owner[key]={'__type__':self.classes[value[0]],'_serialized':deepcopy(value[1])}
        elif kind==11:
            owner[key]=deepcopy(value[0])
            for i in range(1,len(value),3):self.assign(owner[key],value[i],value[i+1],value[i+2])
        elif kind==12:
            owner[key]=[None]*len(value[0])
            for i,item in enumerate(value[0]):self.assign(owner[key],i,value[i+1],item)
        else:raise ValueError(f'Unknown data type {kind}')
    def value(self,v):
        names=['cc.Vec2','cc.Vec3','cc.Vec4','cc.Quat','cc.Color','cc.Size','cc.Rect','cc.Mat4']
        kind=v[0];out={'__type__':names[kind]}
        if kind==4:
            n=v[1];out.update(r=n&255,g=(n>>8)&255,b=(n>>16)&255,a=(n>>24)&255)
        else:
            keys={0:['x','y'],1:['x','y','z'],2:['x','y','z','w'],3:['x','y','z','w'],5:['width','height'],6:['x','y','width','height'],7:[f'm{i:02}' for i in range(16)]}[kind]
            out.update(zip(keys,v[1:]))
        return out
    def object(self,v):
        mask=self.masks[v[0]];cls=self.classes[mask[0]]
        out={'__type__':cls[0]}
        for i in range(1,len(v)):
            prop=mask[i];kind=0 if i<mask[-1] else cls[prop+cls[2]]
            self.assign(out,cls[1][prop],kind,v[i])
        return out
    def decode(self):
        data=self.data;source=list(data[5]);types=data[6] or [];root=0
        if isinstance(source[-1],int):
            root=source.pop();root=root if root>=0 else ~root
        normal=len(source)-len(types)
        for i,item in enumerate(source):
            if i<normal:self.instances.append(self.object(item))
            else:
                kind=types[i-normal]
                if kind>=0:self.instances.append({'__type__':self.classes[kind],'_serialized':deepcopy(item)})
                else:
                    tmp=[None];self.assign(tmp,0,~kind,item);self.instances.append(tmp[0])
        if self.refs:
            boundary=self.refs[-1]*3
            for i in range(0,len(self.refs)-1,3):
                owner=self.refs[i] if i<boundary else self.instances[self.refs[i]]
                key=self.refs[i+1];key=self.strings[key] if key>=0 else ~key
                owner[key]={'__id__':self.refs[i+2]}
        for i,owner in enumerate(self.depowners):
            if isinstance(owner,int):owner=self.instances[owner]
            key=data[9][i]
            if isinstance(key,int):key=self.strings[key] if key>=0 else ~key
            uid=data[10][i];uid=data[1][uid] if isinstance(uid,int) else uid
            owner[key]={'__uuid__':decode_uuid(uid)}
        if root!=0:raise ValueError(f'Nonzero root {root}; explicit reference remapping required')
        return self.instances

def unpack(data):
    if isinstance(data,list) and len(data)==6 and data[0]==1:
        return [data[:5]+section for section in data[5]]
    if isinstance(data,dict) and data.get('type')=='cc.ImageAsset':return data['data']
    if isinstance(data,dict) and data.get('type')=='cc.Texture2D':
        return [[1,0,0,['cc.Texture2D'],0,[item],[0],0,[],[],[]] for item in data['data']]
    return [data]

VALUE_TYPES={'TypedArray','TypedArrayRef','cc.Vec2','cc.Vec3','cc.Vec4','cc.Quat','cc.Color','cc.Size','cc.Rect','cc.Mat4'}
def editor_document(data,asset_uuid):
    """Expand compiled inline CCObjects into editable dynamic serialization.

    Publishing omits Node/Component IDs. Recreate deterministic editor identities;
    preserve existing references and original identities wherever available.
    """
    import uuid
    result=deepcopy(data)
    def visit(value,top=False):
        if isinstance(value,list):
            for i,item in enumerate(value):value[i]=visit(item)
        elif isinstance(value,dict):
            if not top and '__type__'in value and value['__type__']not in VALUE_TYPES:
                index=len(result);result.append(value)
                return {'__id__':index}
            for key,item in list(value.items()):value[key]=visit(item)
        return value
    index=0
    while index<len(result):
        obj=result[index];visit(obj,True)
        if isinstance(obj,dict):
            kind=obj.get('__type__','')
            if kind in ('cc.Scene','cc.Node')or'node'in obj:
                if not obj.get('_id'):obj['_id']=str(uuid.uuid5(uuid.UUID(asset_uuid),f'object:{index}:{kind}'))
        index+=1
    # The Creator Scene importer addresses document[1] as the Scene and
    # replaces that object's editor ID with the scene asset UUID. Publishing
    # compilation may place the Scene anywhere (e.g. index36), so normalize
    # its ordering and remap every object reference before editor import.
    if result and isinstance(result[0],dict)and result[0].get('__type__')=='cc.SceneAsset':
        scene_index=result[0]['scene']['__id__']
        if scene_index!=1:
            order=[0,scene_index]+[i for i in range(len(result))if i not in (0,scene_index)]
            remap={old:new for new,old in enumerate(order)}
            result=[result[i]for i in order]
            def fix(value):
                if isinstance(value,dict):
                    if '__id__'in value:value['__id__']=remap[value['__id__']]
                    else:
                        for child in value.values():fix(child)
                elif isinstance(value,list):
                    for child in value:fix(child)
            fix(result)
    return result

def decode_ccon_binary(raw):
    """Decode CCON v1 and inline its binary typed arrays as editable JSON.
    Follows engine cocos/serialization/ccon.ts and deserialize-dynamic.ts.
    """
    import struct,json
    if len(raw)<16:raise ValueError('CCON header truncated')
    magic,version,total,size=struct.unpack_from('<IIII',raw)
    if magic!=0x4e4f4343 or total!=len(raw):raise ValueError('Invalid CCON header')
    if version!=1:raise ValueError(f'Unsupported CCON version {version}')
    document=json.loads(raw[16:16+size]);cursor=16+size;chunks=[]
    while cursor<len(raw):
        cursor=(cursor+7)//8*8
        length=struct.unpack_from('<I',raw,cursor)[0];cursor+=4
        chunks.append(raw[cursor:cursor+length]);cursor+=length
    if cursor!=len(raw):raise ValueError('Truncated CCON chunk')
    types={'Uint8Array':'B','Int8Array':'b','Uint16Array':'H','Int16Array':'h','Uint32Array':'I','Int32Array':'i','Float32Array':'f','Float64Array':'d'}
    def inline(value):
        if isinstance(value,list):return[inline(v)for v in value]
        if isinstance(value,dict):
            if value.get('__type__')=='TypedArrayRef':
                fmt=types[value['ctor']];count=value['length'];offset=value['offset']
                values=struct.unpack_from('<'+fmt*count,chunks[0],offset)
                return dict(__type__='TypedArray',ctor=value['ctor'],array=list(values))
            return{k:inline(v)for k,v in value.items()}
        return value
    return inline(document)
