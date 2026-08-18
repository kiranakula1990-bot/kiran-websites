#!/usr/bin/env bash
# Deploy all six sites to Cloudflare Pages (direct upload). Run from cloudflare/kiran.
# Prereq: `npx wrangler login` as kiranakula1990@gmail.com.
set -u
declare -A SITES=(
  [marvelconsultants]=marvelconsultants
  [evochem]=evochem
  [hygex]=hygex
  [mavrick]=mavrick
  [ennwin]=ennwin
  [efcs]=efcs
)
ONLY="${1:-}"
for folder in "${!SITES[@]}"; do
  proj="${SITES[$folder]}"
  [ -n "$ONLY" ] && [ "$ONLY" != "$folder" ] && continue
  echo "=== $folder -> Pages project '$proj'"
  npx wrangler pages project create "$proj" --production-branch main >/dev/null 2>&1 || true
  npx wrangler pages deploy "$folder" --project-name "$proj" --branch main --commit-dirty=true || echo "!! $folder FAILED"
done
