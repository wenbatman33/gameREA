"""Reconstruct editable CCEffect from preserved shader reflection and GLSL1.
Not original author source: all transformations are mechanical and traceable.
"""
from copy import deepcopy
import json,re

def effect_source(obj):
    techniques=deepcopy(obj['techniques']);programs=[]
    for index,shader in enumerate(obj['shaders']):
        name=f'recovered{index}'
        for technique in techniques:
            for p in technique['passes']:
                if p.get('program')==shader['name']:
                    p.pop('program');p.update(vert=name+'-vs:vert',frag=name+'-fs:frag')
                    for prop in p.get('properties',{}).values():
                        prop.pop('type',None)
                        if isinstance(prop.get('value'),list) and len(prop['value'])==1:prop['value']=prop['value'][0]
        for stage,entry in [('vert','vert'),('frag','frag')]:
            src=shader['glsl1'][stage]
            wrapper=re.search(r'void\s+main\s*\(\s*\)\s*\{\s*(?:gl_Position|gl_FragColor)\s*=\s*(\w+)\s*\(\s*\)\s*;\s*\}\s*$',src)
            preserved_entry=wrapper.group(1)if wrapper else None
            src=re.sub(r'void\s+main\s*\(\s*\)\s*\{[^{}]*\}\s*$','',src)
            # Reflected blocks retain exact field order; move their loose GLSL1
            # uniforms back into UBOs required by Creator's effect compiler.
            for descriptor in shader.get('descriptors',[]):
                for block in descriptor.get('blocks',[]):
                    members=block.get('members',[]);present=[]
                    for member in members:
                        pattern=r'uniform\s+((?:(?:highp|mediump|lowp)\s+)?\w+)\s+'+re.escape(member['name'])+r'(\s*\[[^]]+\])?\s*;'
                        match=re.search(pattern,src)
                        if match:
                            present.append(f'  {match.group(1)} {member["name"]}{match.group(2)or""};')
                            src=src[:match.start()]+src[match.end():]
                    if present:
                        # Built-in UBO offsets are fixed by the engine. Restore
                        # every reflected field, including unused members that
                        # GLSL1 flattened output omitted, to retain std140 layout.
                        types={1:'bool',2:'bvec2',3:'bvec3',4:'bvec4',5:'int',6:'ivec2',7:'ivec3',8:'ivec4',9:'uint',10:'uvec2',11:'uvec3',12:'uvec4',13:'float',14:'vec2',15:'vec3',16:'vec4',17:'mat2',18:'mat2x3',19:'mat2x4',20:'mat3x2',21:'mat3',22:'mat3x4',23:'mat4x2',24:'mat4x3',25:'mat4'}
                        present=[f'  {m.get("precision", "")}{m.get("typename",types.get(m["type"],"float"))} {m["name"]}'+(f'[{m["count"]}]'if m.get('count',1)>1 else'')+';'for m in members]
                        # Keep optional block guards rather than unconditional
                        # declarations for feature-dependent material uniforms.
                        guard=' && '.join(block.get('defines',[]))
                        ubo='uniform '+block['name']+' {\n'+'\n'.join(present)+'\n};\n'
                        if guard:ubo='#if '+guard+'\n'+ubo+'#endif\n'
                        # Insert before first function, after initial precision.
                        precision=re.search(r'precision\s+\w+\s+float\s*;',src)
                        at=precision.end()if precision else 0
                        src=src[:at]+'\n'+ubo+src[at:]
            src=re.sub(r'\battribute\b','in',src)
            src=re.sub(r'\bvarying\b','out'if stage=='vert'else'in',src)
            src=re.sub(r'\btexture2D\b','texture',src)
            # GPU particles publish gpvs_main rather than vert as their return entry.
            # Pick the preserved vec4 function, never invent shader operations.
            if not re.search(r'\bvec4\s+'+entry+r'\s*\(',src):
                if not preserved_entry or not re.search(r'\bvec4\s+'+re.escape(preserved_entry)+r'\s*\(',src):raise ValueError('Published shader entry cannot be recovered unambiguously')
                entry=preserved_entry
                for technique in techniques:
                    for p in technique['passes']:
                        key='vert'if stage=='vert'else'frag'
                        if p.get(key)==name+'-'+('vs'if stage=='vert'else'fs')+':'+stage:p[key]=name+'-'+('vs'if stage=='vert'else'fs')+':'+entry
            programs.append(f'CCProgram {name}-'+('vs'if stage=='vert'else'fs')+' %{\n'+src+'\n}%\n')
    # Published effects can retain unused property declarations after shader
    # dead-code removal. Creator's source compiler rejects them; the compiled
    # asset remains the provenance record, while this source omits only names
    # absent from every preserved uniform declaration.
    uniform_names=set()
    for shader in obj['shaders']:
        for descriptor in shader.get('descriptors',[]):
            for block in descriptor.get('blocks',[]):uniform_names.update(m['name'] for m in block.get('members',[]))
            for key in ['samplerTextures','samplers','textures','buffers','images']:
                uniform_names.update(m['name'] for m in descriptor.get(key,[]))
        for key in ['samplerTextures','samplers','textures','buffers','images']:
            uniform_names.update(m['name'] for m in shader.get(key,[]))
    for technique in techniques:
        for p in technique['passes']:
            for key,prop in list(p.get('properties',{}).items()):
                # A property must exist in THIS pass's programs, not an unrelated
                # technique variant (shadowColor is absent from shadow-only pass).
                selected=[]
                for program in programs:
                    if any(program.startswith('CCProgram '+str(p.get(stage,'')).split(':')[0]+' %{')for stage in ['vert','frag']):selected.append(program)
                if not re.search(r'\b\w+\s+'+re.escape(prop.get('target',key).split('.')[0])+r'\s*(?:;|\[)', '\n'.join(selected)):del p['properties'][key]
    return '// Reconstructed from published shader GLSL/reflection; not original author source.\nCCEffect %{\n'+json.dumps({'techniques':techniques},indent=2)+'\n}%\n'+'\n'.join(programs)
