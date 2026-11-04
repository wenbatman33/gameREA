"""Loopback-only uncached server for repeatedly rebuilt Creator development previews."""
import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--port',type=int,default=18983);p.add_argument('--project',default='creator-projects/seth2-recovered');a=p.parse_args()
workspace=Path(__file__).resolve().parents[1];project=(workspace/a.project).resolve()
if project.parent!=workspace/'creator-projects' or not (project/'package.json').is_file():p.error('Select an existing local Creator project.')
root=project/'previews'
class DevelopmentHandler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(root),**kwargs)
    def end_headers(self):
        self.send_header('Cache-Control','no-store, max-age=0')
        self.send_header('Pragma','no-cache')
        super().end_headers()
class DevelopmentServer(ThreadingHTTPServer):
    # Creator starts parallel UUID/native asset loads; the base backlog of 5
    # can reject a fresh-origin burst before a handler sees the request.
    request_queue_size=128
DevelopmentServer(('127.0.0.1',a.port),DevelopmentHandler).serve_forever()
