"""Meaningful invariants for local virtual money and interrupted rounds."""
import unittest
import local_server as server

class LocalRounds(unittest.TestCase):
    def setUp(self):server.SESSIONS.clear()
    def test_close_is_idempotent_and_prefetch_is_supported(self):
        for _ in range(3):
            before=server.respond('initial',{},'local-test')['platform']['player']['balance']['amount']
            result=server.respond('spin',{'stakeIndex':1,'ratioIndex':1},'local-test')
            spin_id=result['engine']['spinId'];after_bet=result['platform']['player']['balance']['amount']
            self.assertEqual(after_bet,before-4)
            pending=server.SESSIONS['local-test']['pending'][spin_id];win=pending['win']
            server.respond('closeSpin',{'spinId':'wrong'},'local-test')
            self.assertIn(spin_id,server.SESSIONS['local-test']['pending'])
            closed=server.respond('closeSpin',{'spinId':spin_id},'local-test')
            expected=round(before-4+win,2)
            self.assertEqual(closed['platform']['player']['balance']['amount'],expected)
            duplicate=server.respond('closeSpin',{'spinId':spin_id},'local-test')
            self.assertEqual(duplicate['platform']['player']['balance']['amount'],expected)
        first=server.respond('spin',{},'local-pipeline')
        second=server.respond('spin',{},'local-pipeline')
        self.assertNotEqual(first['engine']['spinId'],second['engine']['spinId'])
        self.assertEqual(len(server.SESSIONS['local-pipeline']['pending']),2)
        for result in [second,first,first]:server.respond('closeSpin',{'spinId':result['engine']['spinId']},'local-pipeline')
        self.assertEqual(len(server.SESSIONS['local-pipeline']['pending']),0)
    def test_reload_preserves_pending_result_and_sessions_are_separate(self):
        first=server.respond('spin',{},'local-one')
        resumed=server.respond('initial',{},'local-one')
        self.assertTrue(resumed['isResuming'])
        self.assertEqual(resumed['engine']['spinId'],first['engine']['spinId'])
        self.assertEqual(resumed['engine']['gameState'],first['engine']['gameState'])
        self.assertEqual(server.respond('initial',{},'local-two')['platform']['player']['balance']['amount'],10000)
    def test_bad_stakes_do_not_change_balance(self):
        for value in [-1,100,True,'0']:
            self.assertEqual(server.respond('spin',{'stakeIndex':value},'local-test')['status'],400)
            self.assertEqual(server.SESSIONS['local-test']['balance'],10000)
        server.SESSIONS['local-test']['balance']=0
        self.assertEqual(server.respond('spin',{},'local-test')['status'],400)
        self.assertEqual(server.SESSIONS['local-test']['pending'],{})
    def test_buy_feature_reserves_then_continues_without_second_debit(self):
        bought=server.respond('spin',{'action':'buyFeature'},'local-buy')
        spin_id=bought['engine']['gameState']['spinId']
        self.assertEqual(bought['platform']['player']['balance']['amount'],9900)
        played=server.respond('spin',{'spinId':spin_id},'local-buy')
        self.assertEqual(played['platform']['player']['balance']['amount'],9900)
        self.assertTrue(played['engine']['gameState'][0]['startFreeGame'])
        self.assertEqual(len(server.SESSIONS['local-buy']['pending']),1)
        win=played['engine']['gameState'][-1]['totalWinnings']
        server.respond('closeSpin',{'spinId':spin_id},'local-buy')
        self.assertEqual(server.SESSIONS['local-buy']['balance'],round(9900+win,2))
    def test_probability_controls_and_feature_state_endings(self):
        for rate,win in [(0,0),(100,2)]:
            key='local-rate-'+str(rate)
            server.respond('configure',{'winRate':rate,'payoutMultiplier':2},key)
            for _ in range(20):
                result=server.respond('spin',{},key)
                self.assertEqual(result['engine']['gameState'][-1]['totalWinnings'],win)
                server.respond('closeSpin',{'spinId':result['engine']['spinId']},key)
        for feature in ['free','awakening']:
            key='local-'+feature
            server.respond('configure',{'nextFeature':feature},key)
            result=server.respond('spin',{},key);states=result['engine']['gameState']
            self.assertTrue(states[0]['startFreeGame'])
            self.assertEqual(states[-1]['action'],'freeSpin')
            self.assertEqual(states[-1]['freeGameCount'],0)
            self.assertEqual(states[-1]['currentView']+1,states[-1]['totalViews'])
            self.assertEqual(server.SESSIONS[key]['nextFeature'],'normal')
        result=server.respond('configure',{'winRate':101},'local-bad')
        self.assertEqual(result['status'],400)
    def test_free_round_count_audio_history_and_force_close(self):
        initial=server.respond('initial',{},'local-extra')
        self.assertEqual(initial['platform']['player']['settings']['advancedSettings']['sounds'],dict(backgroundVolume=0.5,effectVolume=0.8))
        for golden in [False,True]:
            states=server.bonus_stages(1,golden,100,2)
            remaining={x['freeGameCount']for x in states if x['action']=='freeSpin'}
            self.assertEqual(remaining,set(range(15)))
        server.respond('configure',{'winRate':100},'local-extra')
        first=server.respond('spin',{},'local-extra')
        second=server.respond('spin',{'forceClose':first['engine']['spinId']},'local-extra')
        server.respond('closeSpin',{'spinId':second['engine']['spinId']},'local-extra')
        records=server.respond('getBetRecords',{},'local-extra')['data']
        self.assertEqual(len(records),2)
        self.assertEqual(sum(x['profit']for x in records),2)
        report=server.respond('getUserReport',{},'local-extra')['content']['list'][0]
        self.assertEqual(report['betCount'],2)
        for feature in ['jackpot','treasure']:
            server.respond('configure',{'nextFeature':feature},'local-extra')
            item=server.respond('spin',{},'local-extra')['engine']['gameState'][0]
            self.assertGreater(item['totalWinnings'],0)
            self.assertTrue(item['isJp']if feature=='jackpot'else item['noWinReward'])
    def test_development_mute_does_not_change_release_defaults(self):
        try:
            server.DEVELOPMENT_MUTE=True
            muted=server.respond('initial',{},'local-dev')
            self.assertEqual(muted['platform']['player']['settings']['advancedSettings']['sounds'],dict(backgroundVolume=0,effectVolume=0))
            server.respond('updateSettings',{'type':'game','data':{'backgroundVolume':0,'effectVolume':0}},'local-dev')
            self.assertEqual(server.SESSIONS['local-dev']['settings']['advancedSettings']['sounds'],dict(backgroundVolume=0.5,effectVolume=0.8))
        finally:server.DEVELOPMENT_MUTE=False
        normal=server.respond('initial',{},'local-release')
        self.assertEqual(normal['platform']['player']['settings']['advancedSettings']['sounds'],dict(backgroundVolume=0.5,effectVolume=0.8))

if __name__=='__main__':unittest.main()
