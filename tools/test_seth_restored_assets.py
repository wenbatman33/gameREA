"""Check recovered editor source references without executing game code.
Run independently from Creator's real import/build acceptance.
"""
import json,unittest,re
from pathlib import Path
from restore_seth_assets import ROOT,PROJECT
from restore_cocos_serialization import editor_document,decode_uuid,decode_ccon_binary

class RestoredAssetTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.report=json.loads((ROOT/'research/creator-recovery/seth2-asset-map.json').read_text())
    def test_original_paths_unique(self):
        paths=[x['path']for x in self.report['outputs']]
        self.assertEqual(len(paths),len(set(paths)))
        self.assertTrue((PROJECT/'assets/recovered/g1005/prefabs').is_dir())
        self.assertTrue((PROJECT/'assets/resources/effect/shake-wave.effect').is_file())
    def test_material_source_is_object(self):
        for item in self.report['outputs']:
            if item['type']=='material':
                obj=json.loads((PROJECT/item['path']).read_text())
                self.assertEqual(obj['__type__'],'cc.Material')
                self.assertIn('__uuid__',obj['_effectAsset'])
    def test_spine_page_files_exist(self):
        count=0
        for item in self.report['outputs']:
            if item['type']!='spine-data':continue
            path=(PROJECT/item['path']).with_suffix('.atlas')
            lines=path.read_text().splitlines()
            for i,line in enumerate(lines):
                if i+1<len(lines)and lines[i+1].startswith('size:'):
                    self.assertTrue((path.parent/line).resolve().is_file(),f'{path}: {line}')
                    count+=1
        self.assertGreater(count,140)
    def test_bitmap_font_characters_retained(self):
        count=0
        for item in self.report['outputs']:
            if item['type']!='bitmap-font':continue
            text=(PROJECT/item['path']).read_text()
            declared=int(re.search(r'^chars count=(\d+)$',text,re.M)[1])
            self.assertEqual(declared,len(re.findall(r'^char id=',text,re.M)))
            page=re.search(r'^page id=0 file="([^"]+)"$',text,re.M)[1]
            self.assertTrue(((PROJECT/item['path']).parent/page).resolve().is_file())
            count+=1
        self.assertEqual(count,17)
    def test_ccon_binary_curves_retain_bytes(self):
        import struct
        from restore_seth_assets import MIRROR
        count=0
        for path in MIRROR.rglob('*.cconb'):
            raw=path.read_bytes();size=struct.unpack_from('<I',raw,12)[0]
            cursor=(16+size+7)//8*8;length=struct.unpack_from('<I',raw,cursor)[0]
            chunk=raw[cursor+4:cursor+4+length]
            original=json.loads(raw[16:16+size]);decoded=decode_ccon_binary(raw)
            for before,after in zip(original,decoded):
                if before.get('bytes',{}).get('__type__')=='TypedArrayRef':
                    ref=before['bytes'];self.assertEqual(after['bytes']['array'],list(chunk[ref['offset']:ref['offset']+ref['length']]))
            self.assertEqual(decoded[0]['__type__'],'cc.AnimationClip');count+=1
        self.assertEqual(count,6)
    def test_editor_inline_graph_is_deterministic(self):
        source=[{'__type__':'cc.SceneAsset','scene':{'__id__':1}}, {'__type__':'cc.Scene','_children':[{'__type__':'cc.Node','_name':'n','_parent':{'__id__':1}}]}]
        uid='ed1c7a5d-01d8-4ed0-9393-741fe7f675a0'
        first=editor_document(source,uid);second=editor_document(source,uid)
        self.assertEqual(first,second)
        self.assertEqual(first[1]['_children'],[{'__id__':2}])
        self.assertEqual(first[2]['_parent'],{'__id__':1})
        self.assertNotEqual(first[1]['_id'],first[2]['_id'])
    def test_script_uuid_preserves_rf_class_registration(self):
        from uuid import UUID
        import base64
        scripts=json.loads((ROOT/'research/creator-recovery/seth2-script-map.json').read_text())
        count=0
        for script in scripts['modules']:
            raw=script.get('uuid')
            if not raw:continue
            uid=decode_uuid(raw);UUID(uid)
            compact=uid.replace('-','')
            # Creator _RF class identifiers retain five hex chars and encode
            # the remaining 27 nibbles as nine pairs of base64 symbols.
            b64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
            encoded=compact[:5]
            for i in range(5,32,3):
                n=int(compact[i:i+3],16);encoded+=b64[n>>6]+b64[n&63]
            self.assertEqual(encoded,raw)
            path=PROJECT/'assets/recovered/scripts'/script['output']
            m=json.loads(Path(str(path)+'.meta').read_text())
            if script.get('compatibility') and script['output']=='main-debug-view-runtime-control.ts':
                builtin=Path('/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/editor/assets/tools/debug-view-runtime-control.ts.meta')
                self.assertEqual(json.loads(builtin.read_text())['uuid'],uid)
                self.assertNotEqual(m['uuid'],uid)
                self.assertIn('js.getClassById('+json.dumps(raw)+')',path.read_text())
            else:self.assertEqual(m['uuid'],uid)
            self.assertEqual(m['importer'],'typescript')
            count+=1
        self.assertEqual(count,344)
    def test_scene_references_and_ids(self):
        for item in self.report['outputs']:
            if item['type']not in ['scene','prefab']:continue
            data=json.loads((PROJECT/item['path']).read_text());ids=[]
            def check(value):
                if isinstance(value,dict):
                    if '__id__'in value:self.assertTrue(0<=value['__id__']<len(data))
                    for child in value.values():check(child)
                elif isinstance(value,list):
                    for child in value:check(child)
            check(data)
            asset_paths={x['uuid']:PROJECT/x['path'] for x in self.report['outputs']}
            for index,obj in enumerate(data):
                if isinstance(obj,dict)and(obj.get('__type__')in ['cc.Scene','cc.Node']or'node'in obj):
                    identity=obj.get('_id')
                    if not identity:
                        # Creator save strips the expanded body/ID of linked
                        # Prefab roots. Accept only an intact, uniquely identified
                        # instance whose source root fileId really matches.
                        self.assertEqual(obj.get('__type__'),'cc.Node',item['path'])
                        self.assertIn('_prefab',obj,item['path'])
                        prefab=data[obj['_prefab']['__id__']]
                        self.assertEqual(prefab['__type__'],'cc.PrefabInfo')
                        self.assertEqual(prefab['root'],{'__id__':index})
                        self.assertTrue(prefab.get('fileId'))
                        instance=data[prefab['instance']['__id__']]
                        self.assertEqual(instance['__type__'],'cc.PrefabInstance')
                        self.assertTrue(instance.get('fileId'))
                        uid=prefab['asset']['__uuid__']
                        self.assertIn(uid,asset_paths)
                        source=json.loads(asset_paths[uid].read_text())
                        self.assertEqual(source[0]['__type__'],'cc.Prefab')
                        root=source[source[0]['data']['__id__']]
                        root_info=root['_prefab']
                        if '__id__'in root_info:root_info=source[root_info['__id__']]
                        self.assertEqual(prefab['fileId'],root_info['fileId'])
                        identity='prefab-instance:'+instance['fileId']
                    ids.append(identity)
            self.assertEqual(len(ids),len(set(ids)),item['path'])

if __name__=='__main__':unittest.main()
