"""Bounded account-free public DEMO observations; selects a complete base round.
Each attempt uses an independent practice session and at most one virtual spin.
Never connects a real-money account, follows bonus interactions or stores tokens.
"""
import concurrent.futures,json,pathlib,re,urllib.request
ROOT=pathlib.Path(__file__).resolve().parent
GAMES=['legacyofdead','firejoker','riseofolympus','moonprincess','gemix']
def run(slug):
 p=ROOT/slug;c=json.loads((p/'configuration.json').read_text());gid=json.loads((p/'lookup.json').read_text())['gameId'];summaries=[]
 for attempt in range(20):
  seq=0;token='0'
  def post(command):
   nonlocal seq,token
   seq+=1;body=f'd={seq}\r\n{token}\r\n{command}\r\n'
   with urllib.request.urlopen(urllib.request.Request('https://ascflyp.playngonetwork.com/',data=body.encode(),headers={'Content-Type':'text/plain','User-Agent':'Mozilla/5.0'}),timeout=25)as r:out=r.read().decode()
   if out.startswith('d=103'):token=out.split('"')[1]
   return out
  post(f'103 12 "en_GB" {gid} "Mozilla%2F5.0" "{slug}" "desktop"');post('101 "" "" "" "" "" ""')
  init=post(f'104 {gid} 0 %22%3croot%3e%3csettings%3e%3cDenominations%3e%3cdenom+Value%3d%220.01%22+%2f%3e%3c%2fDenominations%3e%3c%2fsettings%3e%3c%2froot%3e%22')
  init=re.sub(r'(?m)^91 .*\r?\n','',init)
  request=f"1 {c['defaultLimit']} {5 if slug=='firejoker' else c['lines']or 1} {c['denom']} 1"
  reply=post(request)
  complete=bool(re.search(r'(?m)^3 [01] 0 0 ',reply)and re.search(r'(?m)^52 ',reply)and not re.search(r'(?m)^2 ',reply))
  summaries.append(dict(attempt=attempt+1,completeZeroWinBaseRound=complete))
  if complete:
   result=dict(init=init,rounds=[[dict(request=request,response=reply)]],currency='DEMO',noAccount=True,status='observed_not_browser_verified',attempts=summaries)
   (p/'protocol-sequences.json').write_text(json.dumps(result,indent=2));print(slug,'complete base-round fixture captured',flush=True);return
 raise RuntimeError(slug+': no complete base round within 20 practice attempts; existing fixture preserved')
if __name__=='__main__':
 import sys
 with concurrent.futures.ThreadPoolExecutor()as ex:list(ex.map(run,sys.argv[1:]or GAMES))
