"""Exercise provider contracts and the generated static package without a backend."""
from pathlib import Path
import argparse, importlib.util, json, subprocess, tempfile

ROOT=Path(__file__).resolve().parent
SOURCE=ROOT/'web-src'

def main(output):
    with tempfile.TemporaryDirectory(prefix='game-rea-tests-')as directory:
        temporary=Path(directory)
        for provider,name in [('pp','test_pp_worker.js'),('seth','test_seth_worker.js')]:
            spec=importlib.util.spec_from_file_location('test_export_'+provider,SOURCE/f'export_{provider}.py')
            module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
            metadata=module.export(ROOT,temporary,lambda p:str(Path(p).resolve()))
            path=temporary/(provider+'.json')
            path.write_text(json.dumps(metadata[0]if provider=='seth'else metadata,ensure_ascii=False))
            subprocess.run(['node',str(SOURCE/name),str(path)],check=True,cwd=ROOT)
        for name in ['test_png_socket.js','test_afa_protocol.js']:
            subprocess.run(['node',str(SOURCE/name)],check=True,cwd=ROOT)
        subprocess.run(['node',str(SOURCE/'test_static_routing.js'),str(Path(output).resolve())],check=True,cwd=ROOT)

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('output',nargs='?',default='web-build')
    main(parser.parse_args().output)
