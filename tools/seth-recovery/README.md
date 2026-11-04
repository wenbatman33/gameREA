# Seth2 module reconstruction tooling

This package has pinned transitive dependencies in `package-lock.json`; it must not depend on `/tmp` tools.

From the repository root (source-generation commands below are for the first reconstruction only; existing editable files are protected):

```sh
npm ci --ignore-scripts --prefix tools/seth-recovery
node tools/restore_seth_modules.cjs
python3 tools/restore_seth_vendor.py
node tools/audit_seth_module_semantics.cjs
node --test tools/test_seth_module_recovery.cjs tools/test_seth_vendor_guard.cjs tools/test_seth_recovery_cli.cjs
```

The transformer parses captured System.register factories without executing original game scripts. It emits editable JavaScript semantics in `.ts` files because Creator 3.8.8 imports `.js` as CommonJS; these are **not original TypeScript source or restored author types**. Every output identifies its captured input and SHA256. 344 script UUIDs are extracted from original `_RF.push` registrations, including bracket-property notation; five aggregator/shared modules have no RF registration. The asset recovery tool separately emits importer metadata.

Semantic transformations:

- Replace setter locals with ESM namespace live bindings, preserving indirect-call `this` semantics.
- Export `var` cells, matching System.register's early `undefined` in circular imports.
- Preserve named/default/object exports and synchronous export updates; pure setter forwarding becomes direct ESM reexports, with a differential live barrel-export fixture.
- Remove only decoder alias closures whose remaining references are alias declarations. Any actual undecoded call aborts recovery rather than inventing a decoder.
- Bridge Babel ES5 superclass construction with `Reflect.construct` for Creator 3.8 ES6 engine bases; ordinary prototype method `.call` remains unchanged.
- Declare six Application side-effect dependencies that were implicit in original cross-bundle loading order.

Thirteen focused module/diagnostic fixtures test observable behavior, including comparison with a small System.register fixture loader. The loader executes **synthetic fixtures only**. Seven additional tests check restored vendor byte hashes/order and network isolation, Request URL handling, credential-free diagnostics, idempotent policy reload and Creator cache UUID protocols.

`restore_seth_vendor.py` copies all ten original plugins in original `settings.json` order. A single official Creator plugin prevents duplicate or unordered loading; original individual source bytes remain inert `.source.txt` files with provenance. Its isolation guard allows loopback APIs and same-origin HTTP/HTTPS assets/APIs, while blocking cross-origin upstream fetch, XHR, WebSocket and EventSource connections. WebSockets must use the page’s same host and port with matching transport security (`https → wss`, `http → ws`); alternate WebSocket endpoints need an explicit future configuration. It permits read-only, hostless Creator `import:`/`native:` UUID cache paths whose two-character folder matches the UUID prefix; it permits this project’s `library/<prefix>/<UUID@sub>.ext` files with the same ID validation and GET/HEAD restriction, and does not allow arbitrary file URLs. It neither selects replay fixtures nor modifies audio. User verification remains normal audio; development silence belongs only to the separate development build.

These transformations and passing fixtures do not prove that full original gameplay is restored. Actual Creator scene import, build, runtime startup, asset reference repair, an independently generated backend and feature verification remain separate acceptance steps.

After `assets/local-backend/InstallLocalBackend.ts` is available, run `python3 tools/restore_seth_bootstrap.py` before rerunning the module transformer. This explicitly installs the independently generated local backend before Application initialization and disables original hot updates. The presence of this bootstrap is recorded on the Application module in the script map; the static graph records it as an external local dependency.

## Preserve later edits

The module, vendor and bootstrap generators refuse to overwrite existing reconstructed sources by default. Their CLI flag `--overwrite-restored-source` is required for a deliberate regeneration. This can replace manual code/editor edits; preserve those changes before using it. For example:

```sh
node tools/restore_seth_modules.cjs --overwrite-restored-source
python3 tools/restore_seth_vendor.py --overwrite-restored-source
python3 tools/restore_seth_bootstrap.py --overwrite-restored-source
```

Normal development uses the editable Creator source directly and does not rerun reconstruction. Importing transformer functions from the test harness has no CLI side effects.

A real CLI regression additionally launches all three generators without the overwrite flag and verifies that every existing source/metadata byte is unchanged.

The Web network policy is deliberately not installed in Creator Editor or Electron AssetDB/Builder processes (`root.Editor` or `root.process.versions.electron`). Their native fetch/XHR/socket functions remain untouched. A clean Dashboard restart is necessary when upgrading from an older guard that already wrapped those functions; subsequent GUI build progress is the actual A/B check for an editor pipeline stall.

Captured-versus-installed Vec3 overload evidence and all known vector/color literal-null sites can be regenerated without executing inputs with `node tools/audit_seth_vec3_compatibility.cjs`. Only the two proven `new Vec3(null,y,null)` calls are normalized to the captured numeric overload; Node.setPosition null arguments are preserved.

Captured-versus-installed Tween activation evidence can be regenerated with `node tools/audit_seth_tween_compatibility.cjs`. Only SymbolView normal/turbo incoming tweens opt out of the new 3.8 Node state binding, matching the actual captured engine. Actual browser validation confirmed one generated ordinary round reaches closeSpin; this does not validate special features or solve the independent invisible-symbol rendering issue.

Opt-in source diagnostics (`reaDebug=1`) trace actual SymbolView creation, activation, sprite resources, render data, node opacity/static state, masks and cameras. They are bounded and do not alter gameplay. Graphics bounds must use its real GPU buffer stride rather than MeshRenderData's default stride; these formats differ in installed3.8.8.

Diagnostics normalize engine `RenderData.isValid()` to boolean: installed3.8.8 returns `false | StaticVBAccessor`, and serializing that accessor would recurse into GPU texture objects. A regression uses a cyclic accessor. Instrumentation failures are logged separately and never wrap the original gameplay operation. An explicit causal probe requires both `reaDebug=1&reaProbeMask=off`; it disables only SymbolView's Mask for that diagnostic run. Normal/user defaults retain the original Mask, and this probe is not a completed rendering fix.

`FeatureDefinitions.ts` and `JackpotRules.ts` are separately authored local math helpers, not recovered server code. Seven additional test groups cover displayed buy/scatter values, safe cent arithmetic, fractional pool contributions, JP tier/reset rules, configured trigger selection, and the actual recovered service listener consuming pool notifications. They are included in `npm --prefix tools/seth-recovery test`; focused command: `node --test tools/seth-recovery/test-feature-definitions.mjs`. Integration and unknown original distributions are documented in `research/creator-recovery/feature-jackpot-local-api.md`.
