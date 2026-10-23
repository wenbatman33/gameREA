"""Generate the static GitHub Pages entry from the local launcher gallery."""
from pathlib import Path
import runpy
root=Path(__file__).resolve().parent
(root/'index.html').write_bytes(runpy.run_path(str(root/'start-local.py'))['page'](static=True))
print('Generated index.html')
