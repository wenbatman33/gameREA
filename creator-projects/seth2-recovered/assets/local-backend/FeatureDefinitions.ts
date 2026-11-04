// @ts-nocheck
/** Displayed rules + original frontend field contract; not original server mathematics.
 * rules_05: buy costs 200/500/2000 total bets. rules_02/03: +5 retrigger.
 * rules_07: scatter display pay 60/100/2000 for total 4/5/6; totalBet/20.
 */
export const FEATURE_DEFINITIONS = Object.freeze([
  Object.freeze({ featureIndex: 0, feature: 'freeGame', featureRate: 200 }),
  Object.freeze({ featureIndex: 1, feature: 'superFreeGame', featureRate: 500 }),
  Object.freeze({ featureIndex: 2, feature: 'superMainGame', featureRate: 2000 }),
]);
export function createFeatureDefinition() {
  return { buyFeature: FEATURE_DEFINITIONS.map(item => ({ ...item })), extraFgRounds: 5 };
}
export function getFeatureDefinition(index) {
  if (!Number.isInteger(index) || index < 0 || index >= FEATURE_DEFINITIONS.length) throw new RangeError('Unknown featureIndex');
  return { ...FEATURE_DEFINITIONS[index] };
}
export function featureCostCents(index, totalStakeCents) {
  if (!Number.isSafeInteger(totalStakeCents) || totalStakeCents <= 0) throw new RangeError('Feature stake must be positive integer cents');
  const cost = totalStakeCents * getFeatureDefinition(index).featureRate;
  if (!Number.isSafeInteger(cost)) throw new RangeError('Feature cost overflow');
  return cost;
}
export function scatterPayout(view, totalStake) {
  if (!Array.isArray(view) || view.length !== 5 || view.some(row => !Array.isArray(row) || row.length !== 6)) throw new RangeError('Expected a 5 by 6 board');
  const stakeCents = Math.round(totalStake * 100);
  if (!Number.isFinite(totalStake) || stakeCents <= 0 || !Number.isSafeInteger(stakeCents) || Math.abs(totalStake * 100 - stakeCents) > 1e-7) throw new RangeError('Invalid total stake');
  const positions = [], golden = [];
  view.flat().forEach((symbol, position) => { if (symbol === 15 || symbol === 16) positions.push(position); if (symbol === 16) golden.push(position); });
  if (positions.length < 4) return null;
  if (positions.length > 6) throw new RangeError('Generated scatter count exceeds the displayed 4–6 contract');
  const payValue = ({ 4: 60, 5: 100, 6: 2000 })[positions.length];
  if (!Number.isSafeInteger(stakeCents * payValue)) throw new RangeError('Scatter payout overflow');
  // A mixed ordinary/golden group is represented once; no duplicate ordinary award.
  // Multiple golden symbols' original distribution is unknown; this helper only
  // applies the displayed total-count tier and labels the presence of golden.
  return { symbol: golden.length ? 16 : 15, symbolPos: positions, winnings: Math.round(stakeCents * payValue / 20) / 100, payValue, isGoldenFg: golden.length > 0 };
}
