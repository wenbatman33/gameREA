"""Loopback-only, fixture-backed reconstruction of captured public demo transport.

Static bytes are captured originals. Outcomes are a bounded repeated recording,
not the provider's RNG, probabilities, bonus coverage or production backend.
"""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, parse_qs, urlencode
from http.cookies import SimpleCookie
import base64, json, re, time, uuid, threading

ROOT = Path(__file__).resolve().parent
PORT = 18765
ORIGIN = f'http://127.0.0.1:{PORT}'
UPSTREAM = 'https://demogamesfree.pragmaticplay.net'
RECORDED_CONTEXT = json.loads((ROOT / 'serialization-context.json').read_text())
GAMES = {}
STATIC = {}
SESSIONS = {}
LOCK = threading.Lock()
for file in ROOT.glob('*.manifest.json'):
    manifest = json.loads(file.read_text())
    game = manifest['game']
    game.update(entry=None, fixtures=[])
    for record in manifest['records']:
        if not record.get('sha256') or record['status'] != 200:
            continue
        location = urlsplit(record['url'])
        if location.path.endswith('/html5Game.do'):
            game['entry'] = record
        elif location.path.endswith('/gameService'):
            request = parse_qs(record.get('requestBody') or '')
            record['action'] = request.get('action', [''])[0]
            game['fixtures'].append(record)
        elif record['method'] == 'GET':
            STATIC[location.path] = record
    GAMES[game['symbol']] = game

def fields(raw):
    return dict(part.split('=', 1) for part in raw.split('&') if '=' in part)

def read(record):
    return (ROOT / 'bodies' / record['sha256']).read_bytes()

class Handler(BaseHTTPRequestHandler):
    def send(self, body=b'', kind='text/plain; charset=utf-8', status=200, cookie=None):
        self.send_response(status)
        self.send_header('Content-Type', kind)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Security-Policy', "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; connect-src 'self' data: blob:; frame-src 'self'; object-src 'none'")
        if cookie:
            self.send_header('Set-Cookie', f'pp_local={cookie}; Path=/; HttpOnly; SameSite=Lax')
        self.end_headers()
        self.wfile.write(body)

    def redirect(self, location, cookie=None):
        self.send_response(302)
        self.send_header('Location', location)
        self.send_header('Content-Length', '0')
        if cookie:
            self.send_header('Set-Cookie', f'pp_local={cookie}; Path=/; HttpOnly; SameSite=Lax')
        self.end_headers()

    def do_GET(self):
        url = urlsplit(self.path)
        query = parse_qs(url.query)
        if url.path == '/':
            links = ''.join(f'<li><a href="/play/{g["slug"]}">{g["slug"]}</a></li>' for g in GAMES.values())
            body = ('<!doctype html><meta charset="utf-8"><title>PP 本機研究版</title>'
                    '<h1>PP 本機研究版</h1><p>使用原始靜態資源與已擷取回應。結果為固定循環樣本，保持預設下注；未還原原版機率或完整獎勵模式。</p>'
                    f'<ul>{links}</ul>').encode()
            return self.send(body, 'text/html; charset=utf-8')
        if url.path.startswith('/play/'):
            game = next((g for g in GAMES.values() if g['slug'] == url.path.split('/')[-1]), None)
            if not game:
                return self.send(b'Unknown game', status=404)
            return self.redirect('/gs2c/html5Game.do?' + urlencode({'symbol': game['symbol']}), uuid.uuid4().hex)
        if url.path.endswith('/openGame.do'):
            return self.redirect('/gs2c/html5Game.do?' + urlencode({'symbol': query.get('gameSymbol', [''])[0]}))
        if url.path.endswith('/html5Game.do'):
            game = GAMES.get(query.get('symbol', [''])[0])
            if not game or not game['entry']:
                return self.send(b'Unknown game entry', status=404)
            raw = read(game['entry']).decode().replace(UPSTREAM, ORIGIN)
            # Suppress optional analytics in the captured launcher.
            raw = raw.replace('if (!noga)', 'if (false)')
            return self.send(raw.encode(), 'text/html; charset=utf-8')
        record = STATIC.get(url.path)
        if record:
            raw = read(record)
            kind = record['contentType'] or 'application/octet-stream'
            if any(t in kind for t in ['javascript', 'json', 'text/', 'xml']):
                raw = raw.replace(UPSTREAM.encode(), ORIGIN.encode())
                if '/build.js' in url.path:
                    # Recorded session metadata permutes component fields using
                    # these two cached strings. Retain the capture context while
                    # leaving navigator, location and all networking unchanged.
                    def recorded_context(match):
                        encoded = b''.join(re.findall(rb"'([^']*)'", match[2]))
                        expression = base64.b64decode(encoded).decode()
                        value = RECORDED_CONTEXT.get(expression)
                        if value is None:
                            return match[0]
                        return match[1] + b'=' + json.dumps(value).encode()
                    raw = re.sub(rb"(win\[(?:'[^']*'\+)*'[^']*'\])=eval\(atob\(([^)]*)\)\)", recorded_context, raw)
            return self.send(raw, kind)
        if url.path == '/health':
            return self.send(json.dumps({'mode': 'local-fixtures', 'games': len(GAMES)}).encode(), 'application/json')
        with (ROOT / 'missing-requests.jsonl').open('a') as log:
            log.write(json.dumps({'path': self.path}) + '\n')
        return self.send(b'Not in captured asset set', status=404)

    def do_POST(self):
        length = int(self.headers.get('Content-Length', '0'))
        if length > 1024 * 1024:
            return self.send(b'Request too large', status=413)
        raw = self.rfile.read(length).decode()
        url = urlsplit(self.path)
        if not url.path.endswith('/gameService'):
            # Captured launcher telemetry is not needed by the demo state machine.
            return self.send(b'{}', 'application/json')
        request = parse_qs(raw)
        symbol = request.get('symbol', [''])[0]
        action = request.get('action', [''])[0]
        game = GAMES.get(symbol)
        if not game:
            return self.send(b'Unknown symbol', status=400)
        if action == 'doSpin':
            expected_coin = 0.20 if symbol == 'vs10swtbnz' else 0.10
            expected_lines = 10 if symbol == 'vs10swtbnz' else 20
            try:
                if float(request.get('c', ['0'])[0]) != expected_coin or int(request.get('l', ['0'])[0]) != expected_lines:
                    return self.send(b'This recorded demo supports only the default stake. Reload to reset.', status=422)
            except ValueError:
                return self.send(b'Invalid stake', status=400)
        cookie = SimpleCookie()
        cookie.load(self.headers.get('Cookie', ''))
        session = cookie['pp_local'].value if 'pp_local' in cookie else 'default'
        with LOCK:
            state = SESSIONS.setdefault((session, symbol), {'position': 1, 'balance': 100000.0, 'previous': 100000.0})
            fixtures = game['fixtures']
            if action == 'doInit':
                state.update(position=1, balance=100000.0, previous=100000.0)
                record = next(r for r in fixtures if r['action'] == 'doInit')
            else:
                chain = [r for r in fixtures if r['action'] != 'doInit']
                if not chain:
                    return self.send(b'No captured round', status=501)
                position = state['position'] - 1
                if position >= len(chain):
                    position = 0
                    state['previous'] = 100000.0
                record = chain[position]
                if record['action'] != action:
                    return self.send(b'Action outside recorded round sequence; reload to reset', status=409)
                state['position'] = position + 2
            data = fields(read(record).decode())
            original_balance = float(data.get('balance', '100000').replace(',', ''))
            state['balance'] += original_balance - state['previous']
            state['previous'] = original_balance
            data.update(balance=f'{state["balance"]:,.2f}', balance_cash=f'{state["balance"]:,.2f}',
                        ntp=f'{state["balance"] - 100000.0:.2f}',
                        index=request.get('index', ['1'])[0],
                        counter=str(int(request.get('counter', ['1'])[0]) + 1), stime=str(int(time.time() * 1000)))
            reply = '&'.join(f'{key}={value}' for key, value in data.items()).encode()
            with (ROOT / 'local-api.jsonl').open('a') as log:
                log.write(json.dumps({'symbol': symbol, 'action': action, 'index': data['index'], 'balance': data['balance'], 'fixture': record['sha256']}) + '\n')
        return self.send(reply)

    def log_message(self, fmt, *args):
        if args and str(args[1]) not in ('200', '302'):
            super().log_message(fmt, *args)

if __name__ == '__main__':
    print(f'PP local fixture demo: {ORIGIN}', flush=True)
    ThreadingHTTPServer(('127.0.0.1', PORT), Handler).serve_forever()
