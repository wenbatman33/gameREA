import copy,json,re,unittest
from urllib.parse import urljoin,urlsplit
from pathlib import Path
from launcher_context import verify_context
ROOT=Path(__file__).resolve().parent
EXPECTED=json.loads((ROOT.parent/'serialization-context.json').read_text())
class LauncherContextTest(unittest.TestCase):
    def test_reject_original_failure_user_agents(self):
        for wrong in ['Mozilla/5.0','Python-urllib/3.14']:
            context=copy.deepcopy(EXPECTED);context['win["navigator"]["userAgent"]']=wrong
            with self.assertRaisesRegex(ValueError,'refresh launchers'):
                verify_context({'launcherContext':context},EXPECTED)
    def test_reject_missing_context(self):
        with self.assertRaises(ValueError):verify_context({},EXPECTED)
    def test_acquired_launchers_match_decoding_context(self):
        manifests=list(ROOT.glob('*.manifest.json'));self.assertEqual(len(manifests),5)
        for path in manifests:
            manifest=json.loads(path.read_text());verify_context(manifest,EXPECTED)
            launcher=next(r for r in manifest['records']if'/html5Game.do'in r['url'])
            raw=(ROOT/'bodies'/launcher['sha256']).read_text()
            self.assertIn('sessionKeyV2',raw)
            self.assertIn('demogamesfree.pragmaticplay.net',raw)
    def test_all_external_package_textures_are_captured(self):
        for path in ROOT.glob('*.manifest.json'):
            manifest=json.loads(path.read_text())
            available={urlsplit(r['url']).path:r for r in manifest['records']if r.get('sha256')and r['status']==200}
            for record in manifest['records']:
                if record['method']!='GET'or'/game/'not in record['url']or'.json'not in record['url']:continue
                raw=(ROOT/'bodies'/record['sha256']).read_text()
                for image in re.findall(r'res/[a-zA-Z0-9_.-]+\.(?:png|jpg|webp|jpeg)',raw):
                    expected=urlsplit(urljoin(record['url'],image)).path
                    self.assertIn(expected,available,path.name+': '+expected)
                    self.assertTrue((ROOT/'bodies'/available[expected]['sha256']).is_file())
if __name__=='__main__':unittest.main()
