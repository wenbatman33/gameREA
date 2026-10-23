import json,base64,pathlib,urllib.parse,urllib.request,hashlib,subprocess
root=pathlib.Path(__file__).parent
summary=[]
for p in root.glob('*.evidence.json'):
 d=json.loads(p.read_text());n=d['normalized_result']
 if 'steps' not in n:continue
 slug=p.name.removesuffix('.evidence.json');out=root/slug;out.mkdir(exist_ok=True)
 events=n['events']['items'];req={e['transaction_id']:e for e in events if e['kind']=='request'}
 requests=[];inventory=[]
 for e in events:
  if e['kind']=='network-content' and e['phase']=='request' and '/api/play/' in str(req.get(e['transaction_id'])):
   b=e['body'];requests.append({'url':req[e['transaction_id']]['url']['url'],'body':json.loads(base64.b64decode(b['content'])) if b.get('state')=='captured' else b})
 for e in events:
  if e['kind']=='response' and e['status']==200 and e['url']['origin']=='https://static-live.hacksawgaming.com':
   url=e['url']['url'];parts=urllib.parse.urlparse(url);path=parts.path
   if path.startswith('/launcher/') or path.startswith('/integrations/'):continue
   dest=out/'public'/path.lstrip('/');dest.parent.mkdir(parents=True,exist_ok=True)
   try:
    result=subprocess.run(['curl','--fail','-L','--max-time','20','-sS',url],capture_output=True,check=True);data=result.stdout;dest.write_bytes(data)
    inventory.append({'url':url,'file':str(dest.relative_to(root)),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
   except Exception as ex:inventory.append({'url':url,'error':str(ex)})
 last=n['steps'][-1]['artifacts']
 (out/'dom.html').write_text(last['dom']['value']['text'])
 (out/'initial-requests.json').write_text(json.dumps(requests,indent=2))
 (out/'resource-inventory.json').write_text(json.dumps(inventory,indent=2))
 summary.append({'slug':slug,'evidence_id':d['evidence_id'],'scenario_complete':all(s['status']=='completed' for s in n['steps']),'assets':inventory,'initial_requests':requests,'blocker':'CORS preflight missing Access-Control-Allow-Origin on official demo API; no successful authentication, no spin captured','screenshot':slug+'.png','limitations':d['limitations']})
(root/'summary.json').write_text(json.dumps(summary,indent=2))
