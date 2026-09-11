#!/usr/bin/env bash
# Baixa sons e imagens do repositório original no GitHub.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP_DIR="$(mktemp -d)"
REPO="https://github.com/sheilagomes/estudo-mandarim.git"

echo "Clonando recursos de $REPO ..."
git clone --depth 1 --filter=blob:none --sparse "$REPO" "$TMP_DIR/repo"
cd "$TMP_DIR/repo"
git sparse-checkout set sounds images

mkdir -p "$ROOT/sounds" "$ROOT/images"
cp -r sounds/* "$ROOT/sounds/" 2>/dev/null || true
cp -r images/* "$ROOT/images/" 2>/dev/null || true

rm -rf "$TMP_DIR"
echo "Recursos copiados para $ROOT"
