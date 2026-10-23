"""Verify money conservation, divine round pricing, isolation, and local asset completeness."""
import json, unittest, uuid
from pathlib import Path
from urllib.request import Request,urlopen

ROOT=Path(__file__).resolve().parent
BASE='http://127.0.0.1:18766'

class BackendTests(unittest.TestCase):
    def call(self,path,data=None,token=None):
        headers={'Content-Type':'application/json','Authorization':'Bearer '+(token or self.token)}
        req=Request(BASE+'/api/v1'+path,data=json.dumps(data).encode() if data is not None else None,headers=headers)
        with urlopen(req) as r:return json.load(r)
    def setUp(self):self.token='test-'+uuid.uuid4().hex
    def test_ordinary_draw_conserves_balance_and_returns_valid_cards(self):
        for gid in ['CA261119','CA261141','CA261130']:
            self.call('/packs/select',{'GameID':gid})
            pack=json.loads((ROOT/'fixtures'/(gid+'.json')).read_text())
            count=10 if gid=='CA261141' else 3
            before=self.call('/auth/balance')['Data']['Balance']
            result=self.call('/packs/play',{'Count':count,'Multiplier':3,'RuleType':0})
            self.assertIsNone(result['Err']);data=result['Data'];r=data['Result']
            expected_bet=pack['PackInfo']['Bet']*3*(1 if gid=='CA261141' else count)
            self.assertEqual(r['TotalBet'],expected_bet)
            self.assertEqual(data['Balance'],before-r['TotalBet']+r['TotalWin'])
            self.assertEqual(len(r['Main']['WinResults']),count)
            valid={c['UID']for c in pack['Modes']['normal']['Cards']}
            self.assertTrue(all(c['CardInfo']['UID']in valid for c in r['Main']['WinResults']))
            self.assertEqual(self.call('/auth/balance')['Data']['Balance'],data['Balance'])
    def test_sessions_are_isolated_and_unsupported_modes_do_not_debit(self):
        self.call('/packs/select',{'GameID':'CA261119'})
        before=self.call('/auth/balance')['Data']['Balance']
        rejected=self.call('/packs/play',{'Count':1,'Multiplier':1,'RuleType':1})
        self.assertEqual(rejected['Err'],'UNSUPPORTED_LOCAL_MODE')
        self.assertEqual(self.call('/auth/balance')['Data']['Balance'],before)
        self.call('/packs/play',{'Count':1,'Multiplier':1,'RuleType':0})
        self.assertEqual(self.call('/auth/balance',token='other-'+uuid.uuid4().hex)['Data']['Balance'],250_000_000)
    def test_selected_card_images_exist_and_local_config_has_no_remote_backend(self):
        manifest=json.loads((ROOT/'afa-card-downloads.json').read_text())
        self.assertEqual(len(manifest),85)
        for row in manifest:self.assertTrue((ROOT/row['path']).is_file())
        req=Request(BASE+'/ca2501/src/settings.dffed.json')
        with urlopen(req)as r:settings=json.load(r)
        self.assertEqual(settings['settings']['ServerHttp'],BASE+'/api/v1')
        self.assertFalse(settings['settings']['Encrypt'])
        with urlopen(BASE+'/ca2501/')as r:html=r.read().decode()
        self.assertNotIn('https://txlobby.api.afagaming.cc',html)

if __name__=='__main__':unittest.main()
