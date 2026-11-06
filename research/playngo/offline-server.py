"""Serve captured public demo builds and replay only their two startup responses.
No upstream network calls. Uncaptured resources receive 404.
"""
import json,pathlib,re,urllib.parse,sys,base64,hashlib,struct
from http.server import ThreadingHTTPServer,BaseHTTPRequestHandler
ROOT=pathlib.Path(__file__).resolve().parent
GAMES=['reactoonz','bookofdead','wrappinmoregold']
CAPTURES={g:json.loads((ROOT/g/'network.json').read_text()) for g in GAMES}
DATABASE={g:d['responses'] for g,d in CAPTURES.items()}
HOSTS=set()
for rows in DATABASE.values():
 for row in rows:HOSTS.add(urllib.parse.urlsplit(row['url']).netloc)
HOSTS.discard('')
HOSTS.update(['asccw.playngonetwork.com','ascflyp.playngonetwork.com','released.playngonetwork.com','cdn.playngonetwork.com','pc-prod-eu.playngonetwork.com'])
def normalized(url):
 u=urllib.parse.urlsplit(url);q=urllib.parse.parse_qsl(u.query,keep_blank_values=True);q=[(k,v) for k,v in q if k not in ['_r','_','t']];return u.netloc,u.path,tuple(sorted(q))
class Handler(BaseHTTPRequestHandler):
 def log_message(self,*args):pass
 def do_POST(self):self.serve()
 def do_GET(self):self.serve()
 def serve(self):
  parsed=urllib.parse.urlsplit(self.path)
  match=re.match(r'^/(reactoonz|bookofdead|wrappinmoregold)/o/([^/]+)(/.*)?$',parsed.path)
  if parsed.path=='/':
   content=('<!doctype html><meta charset="utf-8"><title>Play’n GO 本機研究版</title><h1>Play’n GO 本機研究版</h1><p>公開 Demo 前端＋本機啟動回應重播；虛擬點數，無真金交易。</p>'+''.join('<p><a href="/'+g+'/o/released.playngonetwork.com/casino/ContainerLauncher?pid=2&gid='+g+'&lang=en_GB&practice=1&channel=desktop&demo=2">'+g+'</a></p>' for g in GAMES)).encode();self.send_response(200);self.send_header('Content-Type','text/html; charset=utf-8');self.end_headers();self.wfile.write(content);return
  if not match:
   ref=urllib.parse.urlsplit(self.headers.get('Referer',''));rm=re.match(r'^/(reactoonz|bookofdead|wrappinmoregold)/o/([^/]+)',ref.path)
   if rm:match=re.match(r'^/(reactoonz|bookofdead|wrappinmoregold)/o/([^/]+)(/.*)?$', '/'+rm[1]+'/o/'+rm[2]+parsed.path)
   if not match:self.send_error(404);return
  gid,host,path=match.groups()
  if self.headers.get('Upgrade','').lower()=='websocket':return self.websocket(gid,host,path)
  upstream='https://'+host+(path or '/')+('?' + parsed.query if parsed.query else '')
  body=self.rfile.read(int(self.headers.get('Content-Length','0'))).decode(errors='replace') if self.command=='POST' else ''
  candidates=[r for r in DATABASE[gid] if r['method']==self.command and normalized(r['url'])==normalized(upstream)]
  if self.command=='POST' and host=='ascflyp.playngonetwork.com':
   code=re.search(r'\r?\n(103|101) ',body);candidates=[r for r in candidates if code and re.search(r'\r?\n'+code[1]+' ',r.get('requestBody') or '')]
  if not candidates:
   # Captured configuration URLs contain public optional parameters; path is sufficient.
   candidates=[r for r in DATABASE[gid] if r['method']==self.command and urllib.parse.urlsplit(r['url']).netloc==host and urllib.parse.urlsplit(r['url']).path==(path or '/')]
  if not candidates:
   print('MISSING',gid,self.command,upstream,flush=True);self.send_error(404,'Resource not present in capture');return
  row=candidates[0]
  if 'file' not in row:self.send_error(404);return
  data=(ROOT/gid/row['file']).read_bytes();ctype=row.get('contentType') or 'application/octet-stream'
  if any(t in ctype for t in ['javascript','json','html','css','text/']):
   text=data.decode('utf-8',errors='replace')
   if '/configuration/v2' in upstream:
    config=json.loads(text);config['availableModules']=[m for m in config.get('availableModules',[]) if m['name']!='promocentre'];text=json.dumps(config)
   base='http://'+self.headers['Host']+'/'+gid+'/o/'
   for origin in HOSTS:
    for proto in ['https://','http://','//']:
     text=text.replace(proto+origin,base+origin)
   data=text.encode('utf-8')
  self.send_response(row['status']);self.send_header('Content-Type',ctype);self.send_header('Content-Length',str(len(data)));self.send_header('Access-Control-Allow-Origin','*');self.send_header('Content-Security-Policy',"connect-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:");self.end_headers();self.wfile.write(data)
 def websocket(self,gid,host,path):
  if host!='ascflyp.playngonetwork.com':self.send_error(404);return
  key=base64.b64encode(hashlib.sha1((self.headers['Sec-WebSocket-Key']+'258EAFA5-E914-47DA-95CA-C5AB0DC85B11').encode()).digest()).decode()
  self.send_response(101);self.send_header('Upgrade','websocket');self.send_header('Connection','Upgrade');self.send_header('Sec-WebSocket-Accept',key);self.end_headers()
  frames=next(w['frames'] for w in CAPTURES[gid]['websockets'] if 'gamehub' in w['url'])
  init=next(base64.b64decode(f['payload']) for f in frames if f['direction']=='received' and f['phase']=='load' and len(f['payload'])>40)
  spins=[base64.b64decode(f['payload']) for f in frames if f['direction']=='received' and f['phase']=='spin' and len(f['payload'])>40]
  count=0;balance=2500000
  def send(data,opcode=2):
   n=len(data);head=bytes([128|opcode,n]) if n<126 else bytes([128|opcode,126])+struct.pack('!H',n) if n<65536 else bytes([128|opcode,127])+struct.pack('!Q',n)
   self.wfile.write(head+data);self.wfile.flush()
  try:
   while True:
    head=self.rfile.read(2)
    if len(head)!=2:break
    op=head[0]&15;n=head[1]&127
    if n==126:n=struct.unpack('!H',self.rfile.read(2))[0]
    elif n==127:n=struct.unpack('!Q',self.rfile.read(8))[0]
    mask=self.rfile.read(4) if head[1]&128 else b'';data=self.rfile.read(n)
    if mask:data=bytes(x^mask[i%4] for i,x in enumerate(data))
    if op==8:break
    if op==9:send(data,10);continue
    if b'"protocol"' in data:send(b'{}\x1e',1)
    elif data==b'\x02\x91\x06':send(data)
    elif b'104 ' in data:send(init)
    elif b'ProcessPacket' in data:
     if spins:
      packet=spins[count%len(spins)];start=packet.find(b'd=');text=packet[start:-1].decode()
      request=re.search(rb'\r?\n1 (\d+) (\d+) (\d+) (\d+)',data)
      if request:
       a,b,c=map(int,request.groups()[:3]);balance=max(0,balance-a*b*c)
       text=re.sub(r'^d=1 \d+ \d+ \d+',f'd=1 {a} {b} {c}',text)
      text=re.sub(r'(?m)^52 \d+',f'52 {balance}',text);payload=text.encode()
      string=bytes([0xa0+len(payload)])+payload if len(payload)<32 else b'\xd9'+bytes([len(payload)])+payload if len(payload)<256 else b'\xda'+struct.pack('!H',len(payload))+payload
      message=b'\x96\x01\x80\xc0\xa8Commands\x91'+string+b'\x90';n=len(message);prefix=b''
      while n>=128:prefix+=bytes([(n&127)|128]);n>>=7
      send(prefix+bytes([n])+message);count+=1
     else:send(base64.b64decode('FJYBgMCoQ29tbWFuZHORpGQ9DQqQ'))
  except (BrokenPipeError,ConnectionError):pass
if __name__=='__main__':
 port=int(sys.argv[1]) if len(sys.argv)>1 else 8766
 print('Local-only capture replay: http://127.0.0.1:'+str(port),flush=True);ThreadingHTTPServer(('127.0.0.1',port),Handler).serve_forever()
