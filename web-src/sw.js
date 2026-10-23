self.GAME_PROVIDERS = {};
// Provider scripts are generated into this list by build_static.py.
importScripts(...self.PROVIDER_SCRIPTS);
const BASE = self.registration.scope;
const PREFIX = new URL(BASE).pathname;
let manifest;
const load = () => manifest ||= fetch(new URL('games.json', BASE),{cache:'no-store'}).then(r => {
  if (!r.ok) throw new Error('Cannot load game manifest');
  return r.json();
}).catch(error=>{manifest=null;throw error;});
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('message',event=>{
  if(event.data==='build-id')event.ports[0]?.postMessage(self.BUILD_ID);
});
function virtualRoute(url) {
  const path = new URL(url).pathname;
  if (!path.startsWith(PREFIX + 'v/')) return null;
  const match = path.slice((PREFIX + 'v/').length).match(/^([^/]+)\/([^/]+)(\/.*)?$/);
  return match && {provider:match[1],slug:match[2],path:(match[3] || '/') + new URL(url).search};
}
function response(body, mime='text/plain; charset=utf-8', status=200) {
  return new Response(body, {status, headers:{'Content-Type':mime,'Cache-Control':'no-store',
    'Content-Security-Policy':"default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; connect-src 'self' blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; font-src 'self' data:; frame-src 'self' blob:; object-src 'none'"}});
}
async function handle(event) {
  const url = new URL(event.request.url);
  if(url.origin===new URL(BASE).origin && url.pathname.startsWith(PREFIX) && !url.pathname.startsWith(PREFIX+'v/'))
    return fetch(event.request);
  let route = virtualRoute(url);
  if (!route && event.clientId) {
    const client = await self.clients.get(event.clientId);
    const owner = client && virtualRoute(client.url);
    if (owner) route = {...owner,path:url.pathname + url.search};
  }
  if (!route) return fetch(event.request);
  // The providers' own source/config/fixture requests must bypass virtual routing.
  if (url.origin===new URL(BASE).origin && url.pathname.startsWith(PREFIX) &&
      /^(assets\/|.*-socket\.js$|development-mute\.js$|games\.json$)/.test(url.pathname.slice(PREFIX.length)))
    return fetch(event.request);
  const catalog = await load();
  const game = catalog.games.find(g => g.provider===route.provider && g.slug===route.slug);
  if (!game) return response('Unknown game', 'text/plain', 404);
  const ctx = {base:BASE,virtualBase:new URL(`v/${game.provider}/${game.slug}/`,BASE).href,
    metadata:game,quiet:catalog.quiet,clientId:event.clientId || event.resultingClientId || `${game.provider}:${game.slug}`,
    reply:response,
    read:async record=>{
      const source=await fetch(new URL(typeof record==='string'?record:record.file||record.asset,BASE));
      return new Response(source.body,{status:source.status,headers:{'Content-Type':record.mime||source.headers.get('Content-Type')||'application/octet-stream'}});
    },
    text:async record=>(await fetch(new URL(typeof record==='string'?record:record.file||record.asset,BASE))).text()};
  const provider = self.GAME_PROVIDERS[route.provider];
  if (!provider) return response('Game adapter unavailable','text/plain',503);
  const result = await provider.handle(event.request,route.path,ctx);
  if (result) return result;
  console.warn('Unmapped static game request',route.provider,route.slug,route.path);
  return response('Resource is not included in this demo','text/plain',404);
}
self.addEventListener('fetch',event => {
  event.respondWith(handle(event).catch(error => {
    console.error('Browser demo request failed',error);
    return response(JSON.stringify({error:'DEMO_REQUEST_FAILED',message:error.message}), 'application/json',503);
  }));
});
