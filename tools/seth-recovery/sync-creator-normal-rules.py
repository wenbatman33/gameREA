"""Copy the auditable pure normal-rule implementation into Creator (no node:fs)."""
from pathlib import Path
import hashlib,json
root=Path(__file__).resolve().parents[2]
source=root/'tools/seth-recovery/ordinary-rules.mjs'
table=root/'creator-projects/seth2-recovered/assets/local-rules/displayed-paytable.json'
out=root/'creator-projects/seth2-recovered/assets/local-backend'
out.mkdir(parents=True,exist_ok=True)
text=source.read_text()
start=text.index("import {readFileSync} from 'node:fs';")
end=text.index('const cents=n=>Math.round(n*100);')
text=text[:start]+"import { displayedPaytable as table } from './DisplayedPaytable';\nexport const displayedPaytable=table;\n"+text[end:]
(out/'OrdinaryRules.ts').write_text('// @ts-nocheck\n// New local implementation, not original server RNG.\n// Source SHA256: '+hashlib.sha256(source.read_bytes()).hexdigest()+'\n'+text)
(out/'DisplayedPaytable.ts').write_text('// Displayed original rule transcription; no captured round responses.\n// Source SHA256: '+hashlib.sha256(table.read_bytes()).hexdigest()+'\nexport const displayedPaytable = '+table.read_text().strip()+';\n')
print('Synced pure Creator normal rules and displayed paytable')
