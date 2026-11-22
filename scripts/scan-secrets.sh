#!/usr/bin/env bash
# Audits full Git history and generated public site; no unredacted values in logs.
set -Eeuo pipefail

VERSION="8.30.1"
ARCHIVE="gitleaks_${VERSION}_linux_x64.tar.gz"
CHECKSUMS="gitleaks_${VERSION}_checksums.txt"
BASE="https://github.com/gitleaks/gitleaks/releases/download/v${VERSION}"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

curl --fail --silent --show-error --location --retry 3 \
  "${BASE}/${ARCHIVE}" --output "${WORK}/${ARCHIVE}"
curl --fail --silent --show-error --location --retry 3 \
  "${BASE}/${CHECKSUMS}" --output "${WORK}/${CHECKSUMS}"
(
  cd "$WORK"
  grep -E " ${ARCHIVE}$" "$CHECKSUMS" | sha256sum --check --status
)
tar -xzf "${WORK}/${ARCHIVE}" -C "$WORK" gitleaks
chmod +x "${WORK}/gitleaks"

# Checkout must use fetch-depth: 0 to include historical commits.
if ! "${WORK}/gitleaks" git --no-banner --redact=100 \
    --log-opts="--all" . >/dev/null 2>&1; then
  echo "::error::Full-history secret scan failed. Review locally with Gitleaks and rotate any genuine credentials. No findings are printed to public logs."
  exit 1
fi

if [[ -d dist ]]; then
  if ! "${WORK}/gitleaks" dir --no-banner --redact=100 dist >/dev/null 2>&1; then
    echo "::error::Public build secret scan failed. Inspect generated output locally before publishing."
    exit 1
  fi
fi

echo "Gitleaks passed: Git history and generated public assets."
