"""Isolated, muted observation of account-free provider DEMO sessions.

Serves the original static client and records complete client-driven command
chains. Public practice tokens stay in memory and are removed from evidence.
This is an acquisition tool, never part of the published browser backend.
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json, re, threading, urllib.request

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / '.static-preview'
OUTPUT = Path(__file__).with_name('observed-rounds')
CATALOG = json.loads((SITE / 'gameREA/games.json').read_text())
GAMES = {g['slug']: g for g in CATALOG['games'] if g['provider'] == 'png'}
SESSIONS = {}
LOCK = threading.Lock()

class DemoSession:
    def __init__(self, slug):
        self.slug, self.sequence, self.token = slug, 0, '0'
        self.lock = threading.Lock()
        self.transactions = []
        gid = GAMES[slug]['lookup']['gameId']
        self.post(f'103 12 "en_GB" {gid} "Mozilla%2F5.0" "{slug}" "desktop"')
        self.post('101 "" "" "" "" "" ""')

    def post(self, command):
        self.sequence += 1
        body = f'd={self.sequence}\r\n{self.token}\r\n{command}\r\n'
        request = urllib.request.Request('https://ascflyp.playngonetwork.com/', data=body.encode(),
            headers={'Content-Type': 'text/plain', 'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(request, timeout=25) as response:
            text = response.read().decode()
        if text.startswith('d=103'):
            self.token = text.split('"')[1]
        return re.sub(r'(?m)^91 .*\r?\n', '', text)

    def observe(self, command):
        with self.lock:
            if len(self.transactions) >= 160:
                raise ValueError('Bounded DEMO observation limit reached')
            if not re.match(r'^\d+(?:\s|$)', command):
                raise ValueError('Invalid client command')
            response = self.post(command)
            self.transactions.append({'request': command, 'response': response})
            OUTPUT.mkdir(exist_ok=True)
            path = OUTPUT / (self.slug + '.json')
            value = {'slug': self.slug, 'noAccount': True, 'currency': 'DEMO',
                'source': 'public practice API, driven by original client',
                'transactions': self.transactions}
            path.with_suffix('.tmp').write_text(json.dumps(value, ensure_ascii=False, indent=2))
            path.with_suffix('.tmp').replace(path)
            print(self.slug, 'command', command.split()[0], 'transactions', len(self.transactions), flush=True)
            return response

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SITE), **kwargs)

    def log_message(self, *_):
        pass

    def reply(self, body, mime, status=200):
        body = body.encode() if isinstance(body, str) else body
        self.send_response(status)
        self.send_header('Content-Type', mime)
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path.split('?')[0] == '/gameREA/png-socket.js':
            script = (ROOT / 'web-src/png-socket.js').read_text()
            start = script.index('  if(this._cfg.engine')
            end = script.index('\n }).catch', start)
            script = script[:start] + '''
  if(!text.includes('ProcessPacket'))return;
  const start=text.indexOf('d=');if(start<0)throw Error('Missing public DEMO packet');
  const command=text.slice(start).split(/\\r?\\n/).slice(2).join('\\r\\n').replace(/[\\r\\n\\u0090\\ufffd]+$/,'');
  const slug=new URL(configURL,location.href).pathname.match(/\\/v\\/png\\/([^/]+)/)[1];
  const observation=await fetch('/gameREA/__observe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug,client:this._observeId||(this._observeId=crypto.randomUUID()),command})});
  if(!observation.ok)throw Error(await observation.text());
  this._message(pack(await observation.text()));
''' + script[end:]
            return self.reply(script, 'application/javascript')
        return super().do_GET()

    def do_POST(self):
        if self.path != '/gameREA/__observe':
            return self.reply('Not found', 'text/plain', 404)
        try:
            value = json.loads(self.rfile.read(int(self.headers.get('Content-Length', 0))))
            slug, client = value['slug'], value['client']
            if slug not in GAMES or not re.fullmatch(r'[a-f0-9-]{36}', client):
                raise ValueError('Unknown public DEMO client')
            with LOCK:
                session = SESSIONS.get(client)
                if session is None:
                    session = SESSIONS[client] = DemoSession(slug)
            if session.slug != slug:
                raise ValueError('DEMO session identity mismatch')
            return self.reply(session.observe(value['command']), 'text/plain')
        except Exception as error:
            self.reply(str(error), 'text/plain', 502)

if __name__ == '__main__':
    print('Muted, account-free observation: http://127.0.0.1:19868/gameREA/', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 19868), Handler).serve_forever()
