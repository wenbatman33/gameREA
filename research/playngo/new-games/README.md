# Additional Play’n GO local research builds

Public official demo frontend and local fixture adapter for Legacy of Dead (416), Fire Joker (307), Rise of Olympus (352), Moon Princess (334), and Gemix (286). These are **not complete reverse-engineered games**.

Run for silent development:

```
python3 research/playngo/new-games/offline-server.py 8767 --mute
```

Open <http://127.0.0.1:8767/>. Omit `--mute` for normal default sound; the downloaded release configuration itself retains `defaultSound: true`. Development muting is injected at the beginning of served HTML and is not a saved user game setting.

## Evidence and implementation

Official `released.playngonetwork.com/games/getgamebygid/<slug>` resolves each game ID. Official practice configuration supplies the exact build and CDN resource root. The original game modules and manifests provide the real raster texture atlases, fonts and audio. `assets.json` records URL, SHA-256 body path and bytes. Optional compressed atlas formats are disabled in served manifest JSON, so the client uses the downloaded original PNG/JPG versions.

A bounded, account-free public DEMO HTTP session observed command `103` (create), `101` (practice login), `104` (initialize), and `1 coins lines denomination confirmCollect` (spin). No real-money account or wager was used. `protocol-sequences.json` stores sanitized responses; session tokens and command 91 identifiers are removed. Every local game selects a complete observed nonwinning round with command 3 (round end), 6 (collect), and 52 (balance). SignalR MessagePack frames carry these commands over a loopback WebSocket. The fake server adjusts the stake header and subtracts coins × lines × denomination from its own virtual balance on each spin. It performs no upstream runtime requests, and unknown assets return a visible 404.

## Verification and limits

Each of the five local WebSocket endpoints passed initialization and three consecutive round packets. With a 1-credit test stake, balances were 2499999, 2499998, 2499997. This proves adapter packet sequencing and balance subtraction, **not browser animation completion**. Browser verification is pending separately.

Only one observed zero-win base-round result is replayed repeatedly. Original math, RTP, wins, bonuses, gamble, persistent wallets, feature state machines and history are not reconstructed. Each new WebSocket starts a new virtual 2500000-credit session. Grid games have materially different feature commands; failed exploratory responses were not selected as local gameplay fixtures. Keep this scope visible when reporting results.

The server shares already acquired common module bytes from existing `../bookofdead`, `../reactoonz`, and `../wrappinmoregold` captures when the official URL matches exactly. Those existing captures are read-only dependencies.
