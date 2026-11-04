"""Call the project-local Cocos MCP endpoint; log actual requests and responses."""
import argparse,json,urllib.request
from pathlib import Path
ENDPOINT='http://127.0.0.1:18980/mcp'
LOG=Path(__file__).resolve().parents[1]/'research/creator-recovery/cocos-mcp-calls.jsonl'
def call(name,arguments):
 payload={'jsonrpc':'2.0','id':1,'method':'tools/call','params':{'name':name,'arguments':arguments}}
 req=urllib.request.Request(ENDPOINT,data=json.dumps(payload).encode(),headers={'Content-Type':'application/json'})
 result=json.load(urllib.request.urlopen(req,timeout=120))
 with LOG.open('a') as out:out.write(json.dumps({'request':payload,'response':result},ensure_ascii=False)+'\n')
 if result.get('error'):raise RuntimeError(result['error'])
 return result
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('name');p.add_argument('arguments',nargs='?',default='{}');a=p.parse_args()
 print(json.dumps(call(a.name,json.loads(a.arguments)),ensure_ascii=False,indent=2))
