#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' 'Publicação direta descontinuada. Use os PRs existentes e o fluxo de homologação documentado em README.md e docs/EDITORIAL-REVIEW.md.' >&2
printf '%s\n' 'Nenhum push ou deploy foi realizado.' >&2
exit 2
