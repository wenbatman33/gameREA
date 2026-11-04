// @ts-nocheck
/** New controlled replacement for the recovered service's transport lifecycle.
 * Keep the recovered GameSender, parsers, models, animation flows and assets.
 * No fixture playback, network socket, crypto handshake, or original server.
 */
import { LocalGameBackend } from './LocalGameBackend';

/** Optional explicit developer namespace; never resets or migrates any wallet. */
export function selectLocalWalletKey(search = '', baseKey = 'seth2.creator.local-backend.v1') {
  const params = new URLSearchParams(search);
  const slug = params.get('reaTestWallet');
  return params.get('reaDebug') === '1' && slug && /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,47}$/.test(slug)
    ? baseKey + '.test.' + slug : baseKey;
}

/** Deterministic QA is allowed only in a named, isolated development wallet. */
export function selectLocalScenario(search = '') {
  const params = new URLSearchParams(search);
  if (selectLocalWalletKey(search) === 'seth2.creator.local-backend.v1') return '';
  const scenario = params.get('reaScenario') || '';
  return ['multiplier', 'freeGame', 'free-retrigger', 'superFreeGame', 'split', 'lock',
    'jackpot-mini', 'jackpot-minor', 'jackpot-major', 'jackpot-grand'].includes(scenario) ? scenario : '';
}

/** Independent one-shot JP condition permits actual UI purchases plus JP QA. */
export function selectLocalJackpot(search = '') {
  if (selectLocalWalletKey(search) === 'seth2.creator.local-backend.v1') return '';
  const tier = new URLSearchParams(search).get('reaJackpot');
  return ['mini', 'minor', 'major', 'grand'].includes(tier) ? 'jackpot-' + tier : '';
}

export function installLocalBackend(GameServiceBase, options = {}) {
  const proto = GameServiceBase.prototype;
  if (proto.__sethLocalTransport) return proto.__sethLocalTransport;
  let backend;
  const clients = new Set();
  const original = {};
  const runtime = { installed: true, created: false, requests: [], connections: 0, original,
    markStage(spinId, currentView) {
      const response = runtime.getBackend().request('progress', { spinId, currentView });
      if (response.status !== 200) console.error('[Seth local progress]', response.code, response.message);
      return response;
    },
    getBackend() {
      if (!backend) {
        let storage = options.storage;
        if (storage === undefined) { try { storage = globalThis.localStorage; } catch (_) { storage = null; } }
        const search = options.search === undefined ? (globalThis.location?.search || '') : options.search;
        const storageKey = selectLocalWalletKey(search, options.storageKey || 'seth2.creator.local-backend.v1');
        backend = new LocalGameBackend({ ...options, scenario: options.scenario || selectLocalScenario(search), jackpotScenario: options.jackpotScenario || selectLocalJackpot(search), storage, storageKey });
        runtime.storageKey = storageKey; runtime.created = true;
      }
      return backend;
    },
  };
  function replace(name, fn) { original[name] = proto[name]; proto[name] = fn; }
  function deliver(event, payload, callback) {
    // Defer callbacks exactly as a transport response, so sender/flow listeners
    // finish registration before normal response events are dispatched.
    return Promise.resolve().then(() => {
      const local = runtime.getBackend();
      const balanceBefore = local.state.balanceCents / 100;
      const sequenceBefore = local.state.sequence;
      const response = local.request(event, payload || {});
      const stages = Array.isArray(response.engine?.gameState) ? response.engine.gameState : [];
      // The original GameService consumes pool updates through notify, before
      // its initial callback creates JpBar. Initial/spin fields alone are ignored.
      if (response.status === 200) {
        const notification = local.jackpotNotification();
        if (notification) for (const client of clients) {
          const listener = client.listeners.get('notify');
          if (listener) listener(notification);
        }
      }
      const record = { event, status: response.status, spinId: response.engine?.spinId,
        stake: stages[0]?.totalStake || 0, totalWinnings: stages[stages.length - 1]?.totalWinnings || 0,
        purchaseAcknowledgement: response.purchased === true,
        mode: local.state.pending?.mode || null, cost: local.state.pending?.costCents / 100 || 0,
        featureSummary: local.state.pending?.featureSummary || null,
        stageCount: stages.length, winningStageCount: stages.filter(stage => stage.winSymbols?.length).length,
        balanceBefore, balanceAfter: local.state.balanceCents / 100,
        generated: local.state.sequence > sequenceBefore, localBackend: true };
      runtime.requests.push(record);
      if (runtime.requests.length > 300) runtime.requests.shift();
      if (runtime.consoleCount === undefined) runtime.consoleCount = 0;
      if (runtime.consoleCount < 300) {
        console.info('[Seth local backend]', JSON.stringify(record)); runtime.consoleCount++;
      }
      if (callback) callback(response);
      return response;
    });
  }
  function connected(service) {
    clients.add(service._client);
    service._client.isConnected = true; service._client._readyState = 3;
    runtime.connections++;
    return Promise.resolve().then(() => service.onOpen({ type: 'creator-local', localBackend: true }));
  }
  replace('init', function () {
    // Original init only creates a client and reconnect handler; it does not
    // connect. Retain its model lifecycle, then replace its never-opened client.
    original.init.call(this);
    const service = this; const listeners = new Map();
    const client = {
      listeners,
      isConnected: false, _readyState: 0, connectTimeOut: 10,
      on(event, callback) { listeners.set(event, callback); },
      emit(event, payload, callback) { return deliver(event, payload, callback); },
      initSocket() { return connected(service); },
      close() { clients.delete(this); this.isConnected = false; this._readyState = 0; },
      socketDisconnect() { this.close(); },
    };
    this._client = client; clients.add(client);
  });
  replace('connect', function () { return connected(this); });
  replace('socketIOMessage', function (event, payload, callback) { return deliver(event, payload, callback); });
  replace('socketIOMessageWithoutCheck', function (event, payload, callback) { return deliver(event, payload, callback); });
  replace('buildPayload', async function (payload) { return payload; });
  replace('sendHeartbeat', function () { /* No remote heartbeat for in-process local service. */ });
  Object.defineProperty(proto, '__sethLocalTransport', { value: runtime, configurable: true });
  // Installation itself deliberately does not read App, models or browser
  // storage: it is safe before the recovered Application singleton exists.
  globalThis.SethCreatorLocalBackend = runtime;
  return runtime;
}
