// @ts-nocheck
// Reconstructed local runtime integration; this is not original source.
// Installed before main-Application evaluates; no sample/replay backend is used.
import { installLocalBackend } from '../../local-backend/InstallLocalBackend';
import { GameServiceBase } from '../scripts/framework-GameServiceBase';
import { Config } from '../scripts/main-Config';

// Creator's Play button has no operator launch query. Supply the recovered
// Seth2 identity before Application parses UrlModel, rather than falling back
// to the unrelated g1001 bundle. Explicit user parameters remain unchanged.
if (typeof window !== 'undefined' && window.location && window.history) {
  const launch = new URL(window.location.href);
  const defaults = { gn: 'golden-seth', l: 'zh-tw', ct: 'slot',
    gt: 'slot-erase-any-times-2', view_mode: 'portrait', t: 'creator-local',
    socket_url: 'browser-local', gv: '261006', table: '1' };
  let changed = false;
  for (const [key, value] of Object.entries(defaults)) {
    if (!launch.searchParams.get(key)) {
      launch.searchParams.set(key, value);
      changed = true;
    }
  }
  if (changed) window.history.replaceState(window.history.state, '', launch.href);
}

// Independent local build never uses the original hot-update server.
Config.isSkipCheckUpdate = true;
Config.USE_AUTO_VERSION = false;
Config.HOT_UPDATE_URL = '';

// User verification defaults to normal sound. Agent-only development builds
// apply a separate zero-gain output shim, without changing this saved setting.
installLocalBackend(GameServiceBase, { quiet: new URLSearchParams(window.location.search).get('reaDevelopmentMute') === '1' });
