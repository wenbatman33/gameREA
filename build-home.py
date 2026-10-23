"""Compatibility entry: build the complete browser runtime, never localhost links."""
from build_static import build
import argparse
if __name__ == '__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--output',default='web-build')
    parser.add_argument('--mute',action='store_true')
    args=parser.parse_args()
    build(args.output,quiet=args.mute)
