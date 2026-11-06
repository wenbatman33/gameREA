import json
from pathlib import Path
p=Path(__file__).parent
for slug,gid,name in [('le-bandit','1309','Le Bandit'),('wanted-dead-or-a-wild','1067','Wanted Dead Or a Wild'),('chaos-crew','1059','Chaos Crew')]:
 d={'browser':{'mode':'launch','executable_path':'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome','headless':True},'start_url':{'url':'https://www.hacksawgaming.com/games'},'actions':[{'step_id':'load','action':'wait_for_timeout','duration_ms':1000},{'step_id':'select','action':'click','locator':{'kind':'css','selector':f'span.js-launch-game[data-gameid="{gid}"]'},'timeout_ms':10000},{'step_id':'cookies','action':'click','locator':{'kind':'css','selector':'button[data-consent="granted"]'},'timeout_ms':10000},{'step_id':'confirm','action':'click','locator':{'kind':'css','selector':'.js-responsible-approve'},'timeout_ms':10000},{'step_id':'load-demo','action':'wait_for_timeout','duration_ms':15000}],'capture':{'at_end':['dom','accessibility','url','screenshot'],'events':['network','console','page-errors','frames'],'network':{'response_body':True,'request_body':True}}}
 (p/(slug+'.scenario.json')).write_text(json.dumps(d,indent=2))
