"""Compatibility launcher for the retained Seth2 Creator build."""
from tools.start_seth_creator import main
if __name__ == '__main__':
    import sys
    if '--mute' in sys.argv:
        sys.argv[sys.argv.index('--mute')] = '--development'
    main()
