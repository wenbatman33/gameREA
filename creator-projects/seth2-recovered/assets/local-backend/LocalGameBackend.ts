// @ts-nocheck
/** New local backend. This is not recovered original server code or original RNG/RTP.
 * Normal symbol payouts use the transcribed displayed rules. No round fixtures,
 * captured packet templates, original remote endpoints, or sample response replay.
 */
import { generateNormalRound, evaluateBoard } from './OrdinaryRules';
import { generateFeatureRound } from './FeatureRules';
import { createFeatureDefinition, getFeatureDefinition, featureCostCents } from './FeatureDefinitions';
import { createJackpotConfig, createJackpotState, contributeJackpots, generateJackpotSymbolCount, settleJackpot, jackpotNotify } from './JackpotRules';

const copy = value => JSON.parse(JSON.stringify(value));
const cents = value => Math.round(Number(value) * 100);
const money = value => value / 100;
const defaultStakes = [0.05, 0.1, 0.2, 0.5, 1, 2, 5];
export class LocalBackendError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}
const fail = (condition, code, message) => { if (condition) throw new LocalBackendError(code, message); };
const safeKey = key => !['__proto__', 'constructor', 'prototype'].includes(key);
function merge(target, change) {
  for (const key of Object.keys(change || {})) {
    if (!safeKey(key)) continue;
    const value = change[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      merge(target[key], value);
    } else target[key] = copy(value);
  }
  return target;
}
export function normalFallTransform(stage) {
  // Source positions use original GameSymbolID row-major coordinates: 6 columns,
  // 5 rows. The original SymbolView applies set(after,get(before));delete(before),
  // so move bottom-up within each column and omit unchanged identities.
  const removed = new Set(stage.winSymbols.flatMap(win => win.symbolPos));
  const transforms = [];
  for (let column = 0; column < 6; column++) {
    let destinationRow = 4;
    for (let sourceRow = 4; sourceRow >= 0; sourceRow--) {
      const beforePos = sourceRow * 6 + column;
      if (removed.has(beforePos)) continue;
      const afterPos = destinationRow-- * 6 + column;
      if (beforePos !== afterPos) transforms.push({ beforePos, afterPos });
    }
  }
  return transforms;
}
export function normalStage(stage, spinId, index, count) {
  return {
    ...copy(stage), spinId, action: 'spin', currentView: index, totalViews: count,
    timesSymbols: [], newTimesSymbols: [], timesUpgrade: [], splitList: [], posTransform: normalFallTransform(stage),
    currentTimes: 0, totalTimes: 0, freeGameCount: 0, superMainGameCount: 0,
    remainingFreeGames: 0, remainingFreeSpins: 0, startFreeGame: false,
    maleTotemLevel: 0, femaleTotemLevel: 0, isJp: '', jpWinnings: 0,
  };
}
export class LocalGameBackend {
  constructor(options = {}) {
    this.options = options;
    this.storage = options.storage || null;
    this.storageKey = options.storageKey || 'seth2.creator.local-backend.v1';
    this.random = options.random || Math.random;
    this.clock = options.clock || Date.now;
    this.weights = options.weights || Array(9).fill(1);
    this.stakes = options.stakeValues || defaultStakes;
    this.ratios = options.ratioValues || [1, 2, 5, 10];
    this.maxCascades = options.maxCascades || 100;
    this.featuresEnabled = options.features !== false;
    this.featureConfig = { ...options.featureConfig };
    this.jackpotConfig = createJackpotConfig(options.jackpotConfig);
    const sounds = { background: true, effect: true, backgroundVolume: 1, effectVolume: 1 };
    const saved = this.storage && this.storage.getItem(this.storageKey);
    if (saved) {
      try { this.state = JSON.parse(saved); } catch (_) { throw new LocalBackendError('CORRUPT_WALLET', 'Local wallet is corrupted; refusing to reset its balance silently.'); }
      fail(this.state.version !== 1 || !Number.isSafeInteger(this.state.balanceCents) || this.state.balanceCents < 0,
        'CORRUPT_WALLET', 'Invalid stored wallet.');
    } else this.state = {
      version: 1, balanceCents: cents(options.initialBalance ?? 10000), sequence: 0,
      pending: null, completed: {}, requests: {}, records: [], updatedAt: 0,
      settings: { stakeIndex: 0, ratioIndex: 0,
        advancedSettings: { sounds, turbo: false, notify: false },
        autoPlay: { numberOfPlays: [10, 20, 50, 100, -1], stopOnWinMultiplier: 0, stopOnBalance: 0, stopOnFreeSpin: true, stopOnJackpot: true },
      },
    };
    fail(!Number.isSafeInteger(this.state.balanceCents) || this.state.balanceCents < 0, 'INVALID_BALANCE', 'Initial balance must be a nonnegative cent amount.');
    this.audit = [];
  }
  commit(next) {
    fail(!Number.isSafeInteger(next.balanceCents) || next.balanceCents < 0, 'INVALID_BALANCE', 'Wallet arithmetic overflow.');
    if (Number(next.updatedAt || 0) <= Number(this.state.updatedAt || 0)) next.updatedAt = Math.max(Number(this.state.updatedAt || 0) + 1, this.clock());
    if (this.storage) this.storage.setItem(this.storageKey, JSON.stringify(next));
    this.state = next;
  }
  stake(payload = {}) {
    const stakeIndex = payload.stakeIndex ?? this.state.settings.stakeIndex;
    const ratioIndex = payload.ratioIndex ?? this.state.settings.ratioIndex;
    fail(!Number.isInteger(stakeIndex) || !Number.isInteger(ratioIndex) || !(stakeIndex in this.stakes) || !(ratioIndex in this.ratios),
      'INVALID_STAKE_INDEX', 'Stake/ratio index is outside local configuration.');
    const total = cents(this.stakes[stakeIndex] * this.ratios[ratioIndex] * 20);
    fail(!Number.isSafeInteger(total) || total <= 0, 'INVALID_STAKE', 'Positive cent stake required.');
    // The indices select the authoritative local stake. Do not trust caller cash.
    for (const [name, expected] of [['stakeValue', this.stakes[stakeIndex]], ['ratioValue', this.ratios[ratioIndex]]])
      if (payload[name] != null) fail(Number(payload[name]) !== expected, 'STAKE_MISMATCH', name + ' disagrees with selected index.');
    return { stakeIndex, ratioIndex, totalCents: total };
  }
  definition() {
    return {
      digital: 2, winlineDefs: Array.from({ length: 20 }, () => []),
      winOddsTypes: { big: 20, super: 40, mega: 80, ultra: 160, legendary: 1000 },
      autoConfirmTime: 1.5, autoSpinInterval: 0.3, prizeAutoNextDelay: 3,
      ...(this.featuresEnabled ? createFeatureDefinition() : { buyFeature: [], extraFgRounds: 5 }),
      localReconstruction: {
        payoutSource: 'displayed-paytable.json', betDivisor: 20,
        ordinaryScoring: 'anywhere 8+ matching normal symbols, simultaneous removal, gravity refill',
        originalRngRestored: false, originalRtpRestored: false,
        weights: copy(this.weights), unsupported: this.featuresEnabled ? ['replay'] : ['freeSpin', 'awakening', 'buyFeature', 'jackpot', 'multiplierSymbols', 'replay'],
        featureDistributions: 'Locally configurable; original hidden probabilities, RTP, pool seeds and contributions are not recovered.',
        selfDefinedContract: ['stake options', 'presentation win thresholds', 'timing', 'initial response settings', '20 stake-divisor placeholders, not recovered paylines'],
      },
    };
  }
  platform(state = this.state) {
    return {
      game: { name: 'golden-seth', gameId: 'g1005', stakeValues: copy(this.stakes), ratioValues: copy(this.ratios), stakeList: [], superMgRealStakeLimit: 0 },
      player: {
        name: 'Local Player', id: 'local-player', uid: 'local-player', avatar: 0, avatarUrl: '', displayName: 'Local Player', nameDisplayOn: true,
        balance: { currency: 'TWD', amount: money(state.balanceCents), gemAmount: 0, betAmount: 0, updatedAt: state.updatedAt },
        settings: copy(state.settings), clientSettings: {},
      },
      gemSystem: false, table: { roomId: 'local', number: 1, status: 'available', detail: {}, lock: false },
      slotTablesOn: false, tables: [], slotTableUpdated: false, jackpotOn: this.featuresEnabled, avatars: [], theme: '',
      isInstantClose: false, slotRankOn: false, disableRotate: false,
      tableMeta: { currentPage: 1, tablePerPage: 1, totalPages: 1, totalTableCount: 1 },
    };
  }
  response(extra = {}, state = this.state) {
    const platform = this.platform(state);
    if (this.options.quiet) platform.player.settings.advancedSettings.sounds = { background: false, effect: false, backgroundVolume: 0, effectVolume: 0 };
    return { status: 200, message: 'Local configurable-rule backend', token: 'creator-local', localBackend: true, ...extra, platform };
  }
  jackpotState(state = this.state) { return state.jackpots || createJackpotState(this.jackpotConfig); }
  jackpotNotification() { return this.featuresEnabled ? jackpotNotify(this.jackpotState()) : null; }
  idleStage() {
    // Initialization shows generated normal symbols and never awards an unbet spin.
    let board;
    for (let attempt = 0; attempt < 1000; attempt++) {
      board = Array.from({ length: 5 }, () => Array.from({ length: 6 }, () => 1 + Math.floor(this.random() * 9)));
      if (evaluateBoard(board, 1).wins.length === 0) return normalStage({ view: board, winSymbols: [], roundWinnings: 0, totalWinnings: 0, totalStake: money(this.stake().totalCents) }, 'local-initial', 0, 1);
    }
    throw new LocalBackendError('INITIAL_RANDOM_LIMIT', 'Unable to generate a non-winning initial view.');
  }
  presentationStages(pending) {
    const stages = copy(pending.stages);
    // Pre-upgrade local feature wallets keep their generated results and cash.
    // Supply the new presentation contract without rewriting those transactions.
    if (this.featuresEnabled && pending.featureSummary?.originalRngRestored === false)
      for (const stage of stages) stage.localRules = true;
    return stages;
  }
  initial() {
    const pending = this.state.pending;
    return this.response({ isResuming: Boolean(pending), localResumeIndex: pending?.currentView || 0, engine: {
      spinId: pending ? pending.id : 'local-initial', definition: this.definition(),
      gameState: pending ? this.presentationStages(pending) : [this.idleStage()],
    } });
  }
  spin(payload = {}) {
    fail(payload.test != null || payload.type === 'freeSpin' || payload.type === 'superMainGame' || payload.buyFeature != null ||
      (payload.action != null && !['spin', 'buyFeature'].includes(payload.action)),
      'UNSUPPORTED_FEATURE', 'Feature phases are generated by the local rules, not caller-supplied spin phases.');
    const purchase = payload.action === 'buyFeature';
    fail(purchase && !this.featuresEnabled, 'UNSUPPORTED_FEATURE', 'Features are disabled for this isolated normal-rule configuration.');
    const key = payload.requestId || payload.operationId || (typeof payload.forceClose === 'string' ? 'force-close:' + payload.forceClose : null);
    if (key && this.state.requests[key]) return copy(this.state.requests[key]);
    const stake = this.stake(payload);
    let feature = null;
    if (purchase) {
      try { feature = getFeatureDefinition(payload.featureIndex); }
      catch (_) { throw new LocalBackendError('INVALID_FEATURE', 'Unknown feature index.'); }
      fail(payload.featureValue !== feature.feature, 'FEATURE_MISMATCH', 'Feature value disagrees with configured purchase.');
    }
    let closing = null;
    if (this.state.pending) {
      const pending = this.state.pending;
      if (purchase && pending.purchase && pending.featureIndex === feature.featureIndex && pending.stakeCents === stake.totalCents && !key)
        return this.purchaseAcknowledgement(pending);
      if (!purchase && payload.spinId === pending.id) return this.response({ engine: { spinId: pending.id, gameState: this.presentationStages(pending) } });
      if (payload.forceClose === pending.id) {
        fail(purchase || pending.purchase || pending.stages.some(stage => stage.action !== 'spin' || stage.startFreeGame), 'FEATURE_PENDING', 'Finish or resume the current feature before early-spin.');
        closing = pending;
      }
      else {
        fail(purchase || pending.purchase || Boolean(payload.spinId) || Boolean(key) || Boolean(payload.forceClose) || pending.stakeCents !== stake.totalCents,
          'PENDING_ROUND', 'Settle the existing spin before creating a new operation or changing stake.');
        return this.response({ engine: { spinId: this.state.pending.id, gameState: this.presentationStages(this.state.pending) } });
      }
    } else fail(Boolean(payload.forceClose) || Boolean(payload.spinId), 'UNKNOWN_SPIN', 'Request does not match an unclaimed local spin.');
    const costCents = purchase ? featureCostCents(feature.featureIndex, stake.totalCents) : stake.totalCents;
    const availableCents = this.state.balanceCents + (closing ? closing.awardCents : 0);
    fail(availableCents < costCents, 'INSUFFICIENT_BALANCE', 'Insufficient local test balance.');
    // Generate and validate the entire cascade chain before any debit. Failed or
    // unbounded RNG cannot consume a stake or leave a half-written transaction.
    const scenario = !purchase && !this.state.debugScenarioConsumed ? this.options.scenario || '' : '';
    let pools = this.jackpotState();
    let generated;
    if (this.featuresEnabled) {
      pools = contributeJackpots(pools, costCents, this.jackpotConfig);
      const jackpotScenario = !this.state.debugJackpotConsumed ? this.options.jackpotScenario || '' : '';
      const forcedTier = /^jackpot-(mini|minor|major|grand)$/.exec(jackpotScenario || scenario);
      const jpCount = forcedTier ? ['mini', 'minor', 'major', 'grand'].indexOf(forcedTier[1]) + 2
        : generateJackpotSymbolCount(this.random, this.jackpotConfig);
      generated = generateFeatureRound({ totalBet: money(stake.totalCents), weights: this.weights, random: this.random,
        mode: feature ? feature.feature : 'ordinary', jackpotPools: jackpotNotify(pools).data,
        config: { ...this.featureConfig, maxCascades: this.maxCascades, scenario, jackpotSymbolCount: jpCount } });
      const jackpot = settleJackpot(pools, generated.featureSummary.jpSymbolCount || 0, this.jackpotConfig);
      pools = jackpot.newState;
      if (jackpot.tier) {
        const index = generated.featureSummary.jpStageIndex;
        const stage = generated.stages[index];
        fail(!stage || stage.isJp !== jackpot.tier || stage.view.flat().filter(symbol => symbol === 14).length !== jackpot.count,
          'INVALID_JACKPOT_STAGE', 'Jackpot must be presented on its actual terminal symbol board.');
        stage.jpWinnings = money(jackpot.awardCents);
        // The recovered base close flow presents JP itself. Feature/intro paths
        // need the explicit local continuation bridge before leaving this board.
        stage.localJpBeforeContinuation = stage.action !== 'spin' || stage.startFreeGame;
        stage.roundWinnings = money(cents(stage.roundWinnings) + jackpot.awardCents);
        for (let n = index; n < generated.stages.length; n++)
          generated.stages[n].totalWinnings = money(cents(generated.stages[n].totalWinnings) + jackpot.awardCents);
        generated.totalWinnings = money(cents(generated.totalWinnings) + jackpot.awardCents);
      }
      generated.featureSummary.jackpot = { tier: jackpot.tier, awardCents: jackpot.awardCents, count: jackpot.count };
    } else generated = generateNormalRound({ totalBet: money(stake.totalCents), weights: this.weights, random: this.random, maxCascades: this.maxCascades });
    fail(!generated.stages.length || !Number.isSafeInteger(cents(generated.totalWinnings)) || generated.totalWinnings < 0,
      'INVALID_AWARD', 'Generated operation has invalid stages or award.');
    const next = copy(this.state); next.updatedAt = Math.max(next.updatedAt + 1, this.clock()); const id = 'local-' + (++next.sequence);
    const stages = generated.stages.map((stage, index) => this.featuresEnabled
      ? { ...copy(stage), localRules: true, spinId: id, currentView: index, totalViews: generated.stages.length }
      : normalStage(stage, id, index, generated.stages.length));
    if (closing) {
      next.balanceCents += closing.awardCents;
      next.completed[closing.id] = this.response({ engine: { spinId: closing.id, gameState: copy(closing.stages) }, settled: true }, next);
      next.records.unshift({ spinId: closing.id, totalStake: money(closing.costCents ?? closing.stakeCents), winnings: money(closing.awardCents), generated: true });
      next.records = next.records.slice(0, 200);
      next.updatedAt++;
    }
    next.balanceCents -= costCents;
    next.settings.stakeIndex = stake.stakeIndex; next.settings.ratioIndex = stake.ratioIndex;
    next.pending = { id, currentView: 0, stakeCents: stake.totalCents, costCents, awardCents: cents(generated.totalWinnings), stages,
      purchase, featureIndex: feature?.featureIndex, mode: generated.featureSummary?.mode || 'ordinary', featureSummary: generated.featureSummary || null };
    if (this.featuresEnabled) next.jackpots = pools;
    if (scenario) next.debugScenarioConsumed = true;
    if (this.featuresEnabled && !this.state.debugJackpotConsumed && this.options.jackpotScenario) next.debugJackpotConsumed = true;
    const response = purchase ? this.purchaseAcknowledgement(next.pending, next)
      : this.response({ engine: { spinId: id, gameState: stages }, featureSummary: copy(next.pending.featureSummary) }, next);
    if (key) next.requests[key] = copy(response);
    this.commit(next);
    response.platform.player.balance.updatedAt = next.updatedAt;
    this.audit.push({ event: 'spin', spinId: id, stake: money(stake.totalCents), winnings: generated.totalWinnings, generated: true });
    return copy(response);
  }
  purchaseAcknowledgement(pending, state = this.state) {
    // Recovered GameSender.buyFeature reads a single object. Its following
    // spin({spinId}) reveals this same pre-generated operation without a debit.
    return this.response({ engine: { spinId: pending.id, gameState: { spinId: pending.id } },
      purchased: true, featureIndex: pending.featureIndex, cost: money(pending.costCents) }, state);
  }
  progress(payload = {}) {
    const pending = this.state.pending;
    fail(!pending || payload.spinId !== pending.id, 'UNKNOWN_SPIN', 'Progress must match the pending operation.');
    const index = payload.currentView;
    fail(!Number.isInteger(index) || index < 0 || index >= pending.stages.length,
      'INVALID_PROGRESS', 'Progress index must name an existing stage.');
    const prior = pending.currentView || 0;
    fail(index < prior, 'STALE_PROGRESS', 'Progress cannot move an operation backwards.');
    if (index !== prior) {
      const next = copy(this.state); next.pending.currentView = index; this.commit(next);
    }
    return this.response({ spinId: pending.id, currentView: index, progressed: true });
  }
  closeSpin(payload = {}) {
    const id = payload.spinId || this.state.pending?.id;
    fail(!id, 'MISSING_SPIN_ID', 'closeSpin requires a spin ID.');
    if (this.state.completed[id]) return copy(this.state.completed[id]);
    fail(!this.state.pending || this.state.pending.id !== id, 'UNKNOWN_SPIN', 'No matching unclaimed local spin.');
    const next = copy(this.state); next.updatedAt = Math.max(next.updatedAt + 1, this.clock()); const pending = next.pending;
    next.balanceCents += pending.awardCents; next.pending = null;
    next.records.unshift({ spinId: id, totalStake: money(pending.costCents ?? pending.stakeCents), winnings: money(pending.awardCents), generated: true });
    next.records = next.records.slice(0, 200);
    const response = this.response({ engine: { spinId: id, gameState: copy(pending.stages) }, settled: true }, next);
    next.completed[id] = copy(response); this.commit(next);
    response.platform.player.balance.updatedAt = next.updatedAt;
    this.audit.push({ event: 'closeSpin', spinId: id, award: money(pending.awardCents), settled: true });
    return copy(response);
  }
  updateSettings(payload = {}) {
    const next = copy(this.state); const patch = payload.data || payload.settings || {};
    if (payload.type === 'game') merge(next.settings.advancedSettings, patch);
    else if (['sound', 'sounds'].includes(payload.type)) merge(next.settings.advancedSettings.sounds, patch);
    else if (payload.type === 'autoPlay') merge(next.settings.autoPlay, patch);
    else merge(next.settings, patch);
    this.commit(next); return this.response();
  }
  request(event, payload = {}) {
    try {
      switch (event) {
        case 'initial': return this.initial();
        case 'spin': return this.spin(payload);
        case 'closeSpin': return this.closeSpin(payload);
        case 'progress': return this.progress(payload);
        case 'updateSettings': return this.updateSettings(payload);
        case 'echo': return this.response();
        case 'getBetRecords': return this.response({ data: { records: copy(this.state.records), total: this.state.records.length } });
        default: throw new LocalBackendError('UNSUPPORTED_FEATURE', 'Local backend does not implement ' + event + '.');
      }
    } catch (error) {
      return { status: 400, code: error.code || 'LOCAL_RULE_ERROR', message: error.message, localBackend: true, unsupported: error.code === 'UNSUPPORTED_FEATURE' };
    }
  }
}
