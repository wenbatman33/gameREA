"""Loopback-only Play'n GO public-client research adapter. No upstream runtime IO.
Static official assets plus observed round fixture replay; not original game math.
Development: python3 offline-server.py 8767 --mute; default build keeps sound.
"""
import base64,hashlib,json,mimetypes,pathlib,re,struct,sys,urllib.parse
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer
ROOT=pathlib.Path(__file__).resolve().parent
GAMES=['legacyofdead','firejoker','riseofolympus','moonprincess','gemix']
MUTE='--mute'in sys.argv
CAP={g:json.loads((ROOT/g/'protocol-sequences.json').read_text())for g in GAMES}
FILES={g:json.loads((ROOT/g/'assets.json').read_text())['files']for g in GAMES}
for g in GAMES:
 # Shared modules can be served from previous captures only if byte-for-byte URL
 # matches an already acquired public asset. Never fetch missing runtime files.
 for old in ['bookofdead','reactoonz','wrappinmoregold']:
  for r in json.loads((ROOT.parent/old/'network.json').read_text())['responses']:
   if r.get('method')=='GET'and r.get('file'):FILES[g].append(dict(r,_root=str(ROOT.parent/old)))
HOSTS={'cdn.playngonetwork.com','released.playngonetwork.com','ascflyp.playngonetwork.com','asccw.playngonetwork.com','pc-prod-eu.playngonetwork.com'}
MUTE_JS="""<script>(()=>{window.__LOCAL_DEVELOPMENT_MUTED__=true;const A=window.AudioContext||window.webkitAudioContext;if(A){A.prototype.resume=function(){return Promise.resolve()};const B=class extends A{constructor(...a){super(...a);this.suspend()}};window.AudioContext=B;window.webkitAudioContext=B}const p=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(...a){this.muted=true;this.volume=0;return p.apply(this,a)}})()</script>"""
def norm(url):
 u=urllib.parse.urlsplit(url);return u.netloc,u.path
class H(BaseHTTPRequestHandler):
 def log_message(self,*args):pass
 def sendbytes(self,b,typ='application/json',code=200):
  self.send_response(code);self.send_header('Content-Type',typ);self.send_header('Content-Length',str(len(b)));self.send_header('Access-Control-Allow-Origin','*');self.send_header('Content-Security-Policy',"connect-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:");self.end_headers();self.wfile.write(b)
 def do_GET(self):self.serve()
 def do_POST(self):self.serve()
 def serve(self):
  u=urllib.parse.urlsplit(self.path)
  if u.path=='/':
   b=('<!doctype html><meta charset="utf-8"><title>Play’n GO 本機研究版</title><h1>新增五款本機假後端研究版</h1><p>僅觀察回合重播；特殊玩法未完整還原。</p>'+''.join(f'<p><a href="/{g}/o/released.playngonetwork.com/casino/ContainerLauncher?pid=2&gid={g}&lang=en_GB&practice=1&channel=desktop&demo=2">{g}</a></p>'for g in GAMES)).encode();return self.sendbytes(b,'text/html; charset=utf-8')
  m=re.match(r'^/('+'|'.join(GAMES)+r')/o/([^/]+)(/.*)?$',u.path)
  if not m:
   ref=urllib.parse.urlsplit(self.headers.get('Referer',''));rm=re.match(r'^/('+'|'.join(GAMES)+r')/o/([^/]+)',ref.path)
   if rm:m=re.match(r'^/('+'|'.join(GAMES)+r')/o/([^/]+)(/.*)?$','/'+rm[1]+'/o/'+rm[2]+u.path)
  if not m:return self.send_error(404)
  g,host,path=m.groups();path=path or'/'
  if self.headers.get('Upgrade','').lower()=='websocket':return self.websocket(g,host)
  if self.command=='POST'and host=='ascflyp.playngonetwork.com':
   body=self.rfile.read(int(self.headers.get('Content-Length',0))).decode(errors='replace')
   if re.search(r'(?m)^103 ',body):b='d=103 "LOCAL"\r\n\r\n'
   elif re.search(r'(?m)^101 ',body):b='d=103 "LOCAL!1"\r\n101 1 "DEMO" "" "ZZ" "LOCAL" ""\r\n127 "2026-10-23T00:00:00Z"\r\n\r\n'
   else:return self.sendbytes(b'd=111 "Unimplemented local HTTP command"\r\n','text/plain',400)
   return self.sendbytes(b.encode(),'text/plain')
  if path=='/games/getgamebygid/'+g:b=(ROOT/g/'lookup.json').read_bytes();typ='application/json'
  elif path=='/configuration/prelaunchconfiguration':b=(ROOT/g/'prelaunch.json').read_bytes();typ='application/json'
  elif path=='/configuration/v2':
   cfg=json.loads((ROOT/g/'configuration.json').read_text());cfg['availableModules']=[x for x in cfg['availableModules']if x['name']!='promocentre'];cfg['defaultSound']=False if MUTE else cfg.get('defaultSound',True);b=json.dumps(cfg).encode();typ='application/json'
  else:
   row=next((r for r in FILES[g]if norm(r['url'])==(host,path)),None)
   if not row:print('MISSING',g,host,path,flush=True);return self.send_error(404,'Not acquired')
   b=(pathlib.Path(row.get('_root',ROOT/g))/row['file']).read_bytes();typ=row.get('contentType')or mimetypes.guess_type(path)[0]or'application/octet-stream'
  if any(t in typ for t in ['javascript','json','html','css','text/']):
   text=b.decode(errors='replace');text=re.sub(r'"has(?:Avif|Webp|Jp2)"\s*:\s*true',lambda m:m[0].rsplit('true',1)[0]+'false',text);base='http://'+self.headers['Host']+'/'+g+'/o/'
   for origin in HOSTS:
    for proto in ['https://','http://','//']:text=text.replace(proto+origin,base+origin)
   if MUTE and 'html'in typ:text=MUTE_JS+text
   b=text.encode()
  return self.sendbytes(b,typ)
 def websocket(self,g,host):
  if host!='ascflyp.playngonetwork.com':return self.send_error(404)
  key=base64.b64encode(hashlib.sha1((self.headers['Sec-WebSocket-Key']+'258EAFA5-E914-47DA-95CA-C5AB0DC85B11').encode()).digest()).decode()
  self.send_response(101);self.send_header('Upgrade','websocket');self.send_header('Connection','Upgrade');self.send_header('Sec-WebSocket-Accept',key);self.end_headers()
  balance=2500000;active=[];stake=100;count=0
  # Prefer an observed complete zero-win response for repeatable base rounds.
  rounds=CAP[g]['rounds'];base_round=next((r for r in rounds if len(r)==1 and re.search(r'(?m)^3 [01] 0 0 ',r[0]['response'])),rounds[0])
  def send(b,op=2):
   n=len(b);head=bytes([128|op,n])if n<126 else bytes([128|op,126])+struct.pack('!H',n)if n<65536 else bytes([128|op,127])+struct.pack('!Q',n);self.wfile.write(head+b);self.wfile.flush()
  def packet(text):
   p=text.encode();string=bytes([0xa0+len(p)])+p if len(p)<32 else b'\xd9'+bytes([len(p)])+p if len(p)<256 else b'\xda'+struct.pack('!H',len(p))+p
   body=b'\x96\x01\x80\xc0\xa8Commands\x91'+string+b'\x90';n=len(body);prefix=b''
   while n>=128:prefix+=bytes([(n&127)|128]);n>>=7
   send(prefix+bytes([n])+body)
  try:
   while True:
    head=self.rfile.read(2)
    if len(head)!=2:break
    op=head[0]&15;n=head[1]&127
    if n==126:n=struct.unpack('!H',self.rfile.read(2))[0]
    elif n==127:n=struct.unpack('!Q',self.rfile.read(8))[0]
    mask=self.rfile.read(4)if head[1]&128 else b'';b=self.rfile.read(n)
    if mask:b=bytes(x^mask[i%4]for i,x in enumerate(b))
    if op==8:break
    if op==9:send(b,10);continue
    if b'"protocol"'in b:send(b'{}\x1e',1);continue
    if b==b'\x02\x91\x06':send(b);continue
    if b'104 'in b:packet(CAP[g]['init']);continue
    if b'ProcessPacket'not in b:continue
    request=re.search(rb'\r?\n1 (\d+) (\d+) (\d+)',b)
    if request:
     a,lines,denom=map(int,request.groups());stake=a*lines*denom
     if stake<=0 or stake>balance:packet('d=111 "Insufficient local DEMO credits"\r\n');continue
     balance-=stake;active=[dict(x)for x in base_round];count+=1
    if not active:packet('d=\r\n');continue
    stage=active.pop(0);text=stage['response'];text=re.sub(r'(?m)^(d=)?1 \d+ \d+ \d+',lambda m:(m[1]or'')+f'1 {a} {lines} {denom}',text)
    text=re.sub(r'(?m)^(d=)?52 \d+',lambda m:(m[1]or'')+'52 '+str(balance),text)
    packet(text)
    print('LOCAL ROUND',g,count,'pendingStages',len(active),'balance',balance,flush=True)
  except (BrokenPipeError,ConnectionError):pass
if __name__=='__main__':
 port=next((int(x)for x in sys.argv[1:]if x.isdigit()),8767)
 print('Additional Play’n GO local adapter http://127.0.0.1:'+str(port)+' development mute='+str(MUTE),flush=True)
 ThreadingHTTPServer(('127.0.0.1',port),H).serve_forever()
