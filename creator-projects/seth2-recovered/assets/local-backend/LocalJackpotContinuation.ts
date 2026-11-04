// @ts-nocheck
/** New local-only orchestration for JP that precedes FG intro/continuation/summary.
 * Reuses the captured SHOW_JP_WIN and SHOW_JP listeners' real completion callbacks.
 * No timer, synthesized completion, wallet mutation or change to nonlocal flows.
 */
const presented = new Map();
const tiers = { 'jp-mini': 2, 'jp-minor': 3, 'jp-major': 4, 'jp-grand': 5 };
export function continueAfterLocalJackpot(stage, normalClose, dispatchEvent, events, continuation) {
  if (!stage || stage.localJpBeforeContinuation !== true || normalClose) return false;
  const expected = tiers[stage.isJp];
  const symbols = Array.isArray(stage.view) ? stage.view.flat().filter(symbol => symbol === 14).length : 0;
  if (!expected || symbols !== expected || !Array.isArray(stage.winSymbols) || stage.winSymbols.length || !stage.spinId || !Number.isInteger(stage.currentView)) {
    throw new Error('Local JP continuation requires a terminal stage with matching actual JP symbols and operation identity');
  }
  const key = stage.spinId + ':' + stage.currentView;
  if (presented.has(key)) return true;
  const state = { symbolComplete: false, popupComplete: false };
  presented.set(key, state);
  // Bound retained completed-operation identities; an active presentation is never removed.
  if (presented.size > 512) for (const [oldKey, value] of presented) { if (value.popupComplete) { presented.delete(oldKey); break; } }
  dispatchEvent(events.SHOW_JP_WIN, {
    name: events.SHOW_JP_WIN, data: null,
    complete() {
      if (state.symbolComplete) return;
      state.symbolComplete = true;
      dispatchEvent(events.SHOW_JP, {
        name: events.SHOW_JP, data: null,
        complete() {
          if (state.popupComplete) return;
          state.popupComplete = true;
          continuation();
        },
      });
    },
  });
  return true;
}

/** Separate local JP pool prize from accumulated trophy and current round displays. */
export function jackpotPresentationAmounts(stage) {
  if (stage?.localRules !== true) return { popup: stage.totalWinnings, trophy: stage.totalWinnings, reel: stage.totalWinnings };
  for (const key of ['jpWinnings', 'totalWinnings', 'roundWinnings']) {
    if (!Number.isFinite(stage[key]) || stage[key] < 0) throw new Error('Invalid local jackpot presentation amount: ' + key);
  }
  if (stage.jpWinnings > stage.roundWinnings || stage.roundWinnings > stage.totalWinnings) throw new Error('Local jackpot presentation amounts are inconsistent');
  return { popup: stage.jpWinnings, trophy: stage.totalWinnings, reel: stage.action === 'spin' ? stage.totalWinnings : stage.roundWinnings };
}
