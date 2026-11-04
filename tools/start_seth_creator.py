"""Start/reuse the local Creator preview, independent of the old capture lab.

Normal audio: python3 tools/start_seth_creator.py
Isolated muted development: python3 tools/start_seth_creator.py --development
No build, wallet reset, remote service, or publication is performed.
"""
import argparse
import json
import socket
import subprocess
import sys
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
PROJECT = ROOT / 'creator-projects/seth2-recovered'
HEALTH = '/__seth_preview_health'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--development', action='store_true')
    parser.add_argument('--serve', action='store_true', help=argparse.SUPPRESS)
    args = parser.parse_args()
    mode = 'development-muted' if args.development else 'user-verification'
    port = 18983 if args.development else 18982
    preview = PROJECT / 'previews' / mode
    if not (preview / 'index.html').is_file():
        parser.error(f'找不到既有 Creator 建置：{preview}/index.html；未替換任何建置。')
    muted = 'development-mute.js' in (preview / 'index.html').read_text()
    if muted != args.development:
        parser.error('預覽音量設定與入口不符；拒絕啟動，未修改建置。')
    identity = {'project': 'seth2-recovered', 'mode': mode}
    address = f'http://127.0.0.1:{port}'
    url = address + ('/development-muted/' if args.development else '/')
    url += '?gn=golden-seth&l=zh-tw&view_mode=portrait&t=creator-local'

    if args.serve:
        directory = PROJECT / 'previews' if args.development else preview

        class Handler(SimpleHTTPRequestHandler):
            def __init__(self, *values, **kwargs):
                super().__init__(*values, directory=str(directory), **kwargs)

            def do_GET(self):
                if urlsplit(self.path).path == HEALTH:
                    body = json.dumps(identity).encode()
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Content-Length', str(len(body)))
                    self.end_headers()
                    self.wfile.write(body)
                else:
                    super().do_GET()

            def end_headers(self):
                self.send_header('Cache-Control', 'no-store, max-age=0')
                super().end_headers()

        class Server(ThreadingHTTPServer):
            request_queue_size = 128

        Server(('127.0.0.1', port), Handler).serve_forever()
        return

    def ours():
        try:
            with urlopen(address + HEALTH, timeout=1) as response:
                return json.load(response) == identity
        except (OSError, ValueError):
            return False

    if not ours():
        with socket.socket() as probe:
            if probe.connect_ex(('127.0.0.1', port)) == 0:
                parser.error(f'連接埠 {port} 已被其他服務使用；未終止任何程序。')
        logs = PROJECT / 'temp/local-preview'
        logs.mkdir(parents=True, exist_ok=True)
        command = [sys.executable, str(Path(__file__).resolve()), '--serve']
        if args.development:
            command.append('--development')
        with (logs / f'{mode}.log').open('ab') as log:
            child = subprocess.Popen(command, cwd=ROOT, stdin=subprocess.DEVNULL,
                                     stdout=log, stderr=log, start_new_session=True)
        for _ in range(50):
            if ours():
                break
            if child.poll() is not None:
                parser.error(f'服務啟動失敗，請查看 {logs}/{mode}.log')
            time.sleep(.1)
        else:
            parser.error(f'服務尚未就緒，請查看 {logs}/{mode}.log')
    print('戰神賽特2 Creator 本機入口（假後端）')
    print('開發靜音' if args.development else '使用者驗證：正常聲音設定')
    print(url)


if __name__ == '__main__':
    main()
