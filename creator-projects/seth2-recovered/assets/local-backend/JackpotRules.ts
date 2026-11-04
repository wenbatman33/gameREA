// @ts-nocheck
/** Independently authored configurable local jackpot mathematics.
 * Only count→tier and original symbol14 / jp-* strings come from displayed
 * rules_09 and recovered GameSymbolID/JackpotView. Seeds, contributions, weights,
 * reset and trigger probability below are self-defined, not recovered RNG/RTP.
 * No wallet mutation or captured round data; caller owns transaction/idempotency.
 */
export const JACKPOT_TIERS = Object.freeze(['jp-mini', 'jp-minor', 'jp-major', 'jp-grand']);
const cents = (value, name) => { if (!Number.isSafeInteger(value) || value < 0) throw new RangeError(name + ' must be nonnegative safe integer cents'); return value; };
export function createJackpotConfig(options = {}) {
  const seeds = [10000, 50000, 250000, 1000000], rates = [30, 20, 10, 5], weights = [85, 12, 2.8, 0.2];
  const result = { seedsCents: {}, contributionBasisPoints: {}, tierWeights: {}, triggerProbability: options.triggerProbability ?? 0.002 };
  if (!Number.isFinite(result.triggerProbability) || result.triggerProbability < 0 || result.triggerProbability > 1) throw new RangeError('Invalid local JP trigger probability');
  JACKPOT_TIERS.forEach((tier, index) => {
    result.seedsCents[tier] = cents(options.seedsCents?.[tier] ?? seeds[index], tier + ' seed');
    const rate = options.contributionBasisPoints?.[tier] ?? rates[index];
    if (!Number.isInteger(rate) || rate < 0 || rate > 10000) throw new RangeError('Invalid JP contribution basis points');
    result.contributionBasisPoints[tier] = rate;
    const weight = options.tierWeights?.[tier] ?? weights[index];
    if (!Number.isFinite(weight) || weight < 0) throw new RangeError('Invalid JP tier weight');
    result.tierWeights[tier] = weight;
  });
  if (Object.values(result.contributionBasisPoints).reduce((sum, value) => sum + value, 0) > 10000) throw new RangeError('Total JP contributions exceed stake');
  const weightSum = Object.values(result.tierWeights).reduce((sum, value) => sum + value, 0);
  if (!Number.isFinite(weightSum) || weightSum <= 0) throw new RangeError('Finite positive total JP tier weight required');
  return result;
}
export function createJackpotState(config = createJackpotConfig()) {
  const c = createJackpotConfig(config);
  return { version: 1, poolsCents: { ...c.seedsCents }, contributionRemainders: Object.fromEntries(JACKPOT_TIERS.map(tier => [tier, 0])) };
}
function copyState(state) {
  if (!state || state.version !== 1) throw new RangeError('Invalid local jackpot state');
  const result = { version: 1, poolsCents: {}, contributionRemainders: {} };
  for (const tier of JACKPOT_TIERS) {
    result.poolsCents[tier] = cents(state.poolsCents?.[tier], tier + ' pool');
    const remainder = state.contributionRemainders?.[tier];
    if (!Number.isInteger(remainder) || remainder < 0 || remainder >= 10000) throw new RangeError('Invalid JP fractional-cent remainder');
    result.contributionRemainders[tier] = remainder;
  }
  return result;
}
export function contributeJackpots(state, stakeCents, config = createJackpotConfig()) {
  cents(stakeCents, 'JP contribution stake');
  const c = createJackpotConfig(config), next = copyState(state);
  for (const tier of JACKPOT_TIERS) {
    const numerator = stakeCents * c.contributionBasisPoints[tier] + next.contributionRemainders[tier];
    if (!Number.isSafeInteger(numerator)) throw new RangeError('JP contribution overflow');
    next.poolsCents[tier] = cents(next.poolsCents[tier] + Math.floor(numerator / 10000), tier + ' contributed pool');
    next.contributionRemainders[tier] = numerator % 10000;
  }
  return next;
}
const draw = random => { const value = random(); if (!Number.isFinite(value) || value < 0 || value >= 1) throw new RangeError('Random source must return [0,1)'); return value; };
export function generateJackpotSymbolCount(random = Math.random, config = createJackpotConfig()) {
  const c = createJackpotConfig(config);
  if (c.triggerProbability === 0 || draw(random) >= c.triggerProbability) return 0;
  let cursor = draw(random) * Object.values(c.tierWeights).reduce((sum, value) => sum + value, 0);
  for (let index = 0; index < JACKPOT_TIERS.length; index++) { cursor -= c.tierWeights[JACKPOT_TIERS[index]]; if (cursor < 0) return index + 2; }
  throw new Error('JP weight selection exhausted');
}
export function settleJackpot(state, symbolCount, config = createJackpotConfig()) {
  if (!Number.isInteger(symbolCount) || ![0, 1, 2, 3, 4, 5].includes(symbolCount)) throw new RangeError('JP symbol count must be 0–5');
  const c = createJackpotConfig(config), next = copyState(state);
  if (symbolCount < 2) return { state: next, newState: next, count: symbolCount, tier: '', awardCents: 0, isJp: '', jpWinnings: 0, jpWinningsCents: 0, symbolCount, symbol: 14 };
  const tier = JACKPOT_TIERS[symbolCount - 2], winnings = next.poolsCents[tier];
  next.poolsCents[tier] = c.seedsCents[tier];
  // Preserve fractional-cent contributions; reset only the awarded pool value.
  return { state: next, newState: next, count: symbolCount, tier, awardCents: winnings, isJp: tier, jpWinnings: winnings / 100, jpWinningsCents: winnings, symbolCount, symbol: 14 };
}

export function jackpotPools(state) {
  const valid = copyState(state);
  return Object.fromEntries(JACKPOT_TIERS.map(tier => [tier, valid.poolsCents[tier] / 100]));
}
export function jackpotNotify(state) {
  // Exact original GameService notify consumer shape; pool amounts are cash.
  return { type: 'jackpotUpdate', data: jackpotPools(state) };
}
