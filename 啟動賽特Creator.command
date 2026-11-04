#!/bin/zsh
cd -- "${0:A:h}" || exit 1
exec python3 tools/start_seth_creator.py
