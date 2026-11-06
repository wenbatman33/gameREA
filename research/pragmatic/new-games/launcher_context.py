"""Bind provider session metadata to the private client decoding context."""
def verify_context(manifest, expected):
    actual=manifest.get('launcherContext')
    if actual!=expected:
        raise ValueError('Launcher acquisition context differs from client decoding context; refresh launchers with refresh-launchers.py')
    return actual
