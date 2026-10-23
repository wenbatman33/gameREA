"""Start the captured-demo lab on loopback. Python standard library only."""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.request import urlopen
import html, signal, socket, subprocess, sys, time

ROOT = Path(__file__).resolve().parent
PORT = 18764
GAMES = [
    ('Pragmatic Play', 'Sweet Bonanza POP', 'http://127.0.0.1:18765/play/sweet-bonanza-pop', 'research/pragmatic/sweet-bonanza-pop.local-after.png', True),
    ('Pragmatic Play', 'Gates of Olympus 2500', 'http://127.0.0.1:18765/play/gates-of-olympus-2500', 'research/pragmatic/gates-of-olympus-2500.local-after.png', True),
    ('Pragmatic Play', 'The Dog House', 'http://127.0.0.1:18765/play/the-dog-house-slot', 'research/pragmatic/the-dog-house-slot.local-after.png', True),
    *[('Play’n GO', name, f'http://127.0.0.1:8766/{gid}/o/released.playngonetwork.com/casino/ContainerLauncher?pid=2&gid={gid}&lang=en_GB&practice=1&channel=desktop&demo=2', f'research/playngo/{gid}/offline-after-second-spin.png', True)
      for gid, name in [('reactoonz', 'Reactoonz'), ('bookofdead', 'Rich Wilde and the Book of Dead'), ('wrappinmoregold', 'Wrappin’ More Gold')]],
]
GAMES += [('AFA', name, f'http://127.0.0.1:18766/play/{gid}', f'research/havespring/{slug}-local-after.png', True)
          for gid, name, slug in [('CA261119', '草船借箭', 'grass-boat'), ('CA261141', '血戰長坂', 'blood-battle'), ('CA261130', '火燒赤壁', 'red-cliffs')]]
GAMES += [('ATG', '戰神賽特2 覺醒之力', 'http://127.0.0.1:18767/', 'research/atg/seth2/local-after.png', True)]
IMAGES = {g[3] for g in GAMES}

def page(static=False):
    cards = []
    for provider, name, url, image, ready in GAMES:
        status = ('可在本機一般抽卡' if provider == 'AFA' else '可在本機試玩') if ready else '研究中，尚未提供本機試玩'
        if provider == 'ATG': status = '本機假後端：一般／自動回合、免費與覺醒樣本；可調中獎機率，非原站數學模型'
        button = '開啟本機遊戲' if ready else '查看官方頁面'
        cards.append(f'<article><img src="{image}" alt="{html.escape(name)} 實測截圖"><div><small>{provider}</small><h2>{html.escape(name)}</h2><p>{status}</p><a href="{html.escape(url)}" target="_blank" rel="noopener">{button} ↗</a></div></article>')
    body = ('''<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>遊戲逆向研究室</title>
<style>*{box-sizing:border-box}body{margin:0;background:#10141b;color:#f5f7fa;font:16px/1.6 system-ui,sans-serif}main{max-width:1200px;margin:auto;padding:36px 24px}h1{font-size:34px;margin:0 0 8px}header p{max-width:850px;color:#bfc9d6}.note{padding:16px 20px;background:#1e2a3a;border-radius:12px;margin:24px 0}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}article{background:#1b222d;border:1px solid #303d4e;border-radius:14px;overflow:hidden}article img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}article div{padding:18px}small{color:#a2b4ca}h2{font-size:20px;margin:8px 0}article p{color:#cbd5e2;margin:0 0 18px}a{display:inline-block;color:#90c7ff;text-decoration:none;font-weight:600}a:hover{text-decoration:underline}footer{margin-top:32px;color:#94a3b8;font-size:14px}@media(max-width:850px){.grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.grid{grid-template-columns:1fr}}</style>
<main><header><h1>遊戲逆向研究室</h1><p>提供已驗證可操作的本機試作。各款玩法限制請見卡片與研究紀錄；能操作一般回合不代表完整玩法已還原。</p></header>
<div class="note">PP 使用已擷取的回合樣本，請保持預設下注；Play’n GO 使用固定未中獎盤面。AFA 使用合成的一般抽卡結果與虛擬餘額，特殊模式與購買獎勵尚未還原。</div><section class="grid">'''
            + ''.join(cards)
            + '</section><footer>關閉終端機後若無法連線，重新執行 python3 start-local.py。原始檔案與完整分析證據保留於研究資料夾。</footer></main></html>')
    if static:
        body = body.replace('九款可透過本機假後端試玩；', '九款需先啟動本機假後端才能試玩；')
        body = body.replace('<div class="note">', '<div class="note"><strong>GitHub Pages 展示入口</strong><p>請先下載專案，執行 <code>python3 start-local.py</code>，再使用下方本機遊戲連結。這個公開網頁僅提供選單與截圖。</p>')
        body = body.replace('關閉終端機後若無法連線，重新執行 python3 start-local.py。', '<a href="https://github.com/wenbatman33/gameREA">取得專案與啟動說明 ↗</a>。')
    return body.encode()

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        resource = self.path.split('?', 1)[0].lstrip('/')
        if not resource:
            body, kind = page(), 'text/html; charset=utf-8'
        elif resource == 'index.html':
            body, kind = (ROOT / 'index.html').read_bytes(), 'text/html; charset=utf-8'
        elif resource in IMAGES and (ROOT / resource).is_file():
            body, kind = (ROOT / resource).read_bytes(), 'image/png'
        else:
            self.send_error(404)
            return
        self.send_response(200)
        self.send_header('Content-Type', kind)
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)
    def log_message(self, *args):
        pass

def running(port, marker):
    try:
        with urlopen(f'http://127.0.0.1:{port}/', timeout=2) as response:
            text = response.read().decode()
            if marker in text:
                return True
    except Exception:
        pass
    with socket.socket() as sock:
        if sock.connect_ex(('127.0.0.1', port)) == 0:
            raise SystemExit(f'Port {port} is occupied by another service; no process was changed.')
    return False

if __name__ == '__main__':
    children = []
    try:
        for port, marker, script in [(18765, 'PP 本機研究版', 'research/pragmatic/offline_server.py'),
                                      (8766, 'Play’n GO 本機研究版', 'research/playngo/offline-server.py'),
                                      (18766, 'AFA 本機研究版', 'research/havespring/offline_server.py'),
                                      (18767, '戰神賽特2 本機模擬版', 'research/atg/seth2/local_server.py')]:
            if not running(port, marker):
                command=[sys.executable, str(ROOT / script)]
                if port==18767 and '--mute' in sys.argv:command.append('--mute')
                children.append(subprocess.Popen(command, cwd=ROOT))
                for attempt in range(40):
                    time.sleep(0.1)
                    try:
                        with urlopen(f'http://127.0.0.1:{port}/', timeout=1):
                            break
                    except Exception:
                        continue
                else:
                    raise SystemExit(f'Local server {port} did not start.')
        print(f'遊戲入口：http://127.0.0.1:{PORT}', flush=True)
        ThreadingHTTPServer(('127.0.0.1', PORT), Handler).serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        for child in children:
            child.terminate()
        for child in children:
            try:
                child.wait(timeout=3)
            except subprocess.TimeoutExpired:
                child.kill()
