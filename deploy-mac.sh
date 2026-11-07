#!/usr/bin/env bash
set -euo pipefail

# Publica o Premium V3 no repositório JÁ EXISTENTE, preservando histórico e LICENSE.
cd "$(dirname "$0")"
REPO="JeefQueiroz/euvouserdoutor-premium"
TEAM="euvouserdoutorrs-projects"
PROJECT="euvouserdoutor-premium-v3"

for cmd in node npm git gh; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Erro: comando '$cmd' indisponível. Instale-o antes de continuar." >&2
    exit 1
  fi
done

ACCOUNT="$(gh api user --jq '.login' 2>/dev/null || true)"
if [[ "$(printf '%s' "$ACCOUNT" | tr '[:upper:]' '[:lower:]')" != 'jeefqueiroz' ]]; then
  echo "GitHub incorreto: ${ACCOUNT:-sem login}. Autentique JeefQueiroz via 'gh auth login --web'." >&2
  exit 1
fi

if ! gh repo view "$REPO" --json nameWithOwner -q '.nameWithOwner' >/dev/null 2>&1; then
  echo "O repositório $REPO não está acessível. Nenhum repositório será criado." >&2
  exit 1
fi

echo "Destino validado: $REPO"
npm run check

# Usa um clone novo para PRESERVAR o commit LICENSE e evitar push non-fast-forward.
WORK="$(mktemp -d "${TMPDIR:-/tmp}/evd-premium.XXXXXX")"
trap 'rm -rf "$WORK"' EXIT
gh auth setup-git >/dev/null
GIT_TERMINAL_PROMPT=0 gh repo clone "$REPO" "$WORK/repo" -- --branch main

for file in build.mjs package.json vercel.json .gitignore README.md ESTRATEGIA-SEO.md deploy-mac.sh; do
  cp "$file" "$WORK/repo/$file"
done
for folder in src assets tests scripts; do
  mkdir -p "$WORK/repo/$folder"
  cp -R "$folder/." "$WORK/repo/$folder/"
done

cd "$WORK/repo"
git add build.mjs package.json vercel.json .gitignore README.md ESTRATEGIA-SEO.md deploy-mac.sh src assets tests scripts
if git diff --cached --quiet; then
  echo "Nenhuma alteração: repositório já está atualizado."
else
  git -c user.name="${GIT_AUTHOR_NAME:-JeefQueiroz}" \
      -c user.email="${GIT_AUTHOR_EMAIL:-235369496+JeefQueiroz@users.noreply.github.com}" \
      commit -m "feat: publica Premium V3 com SEO, conteúdo e acessibilidade"
  git push origin HEAD:main
  echo "Código enviado: https://github.com/$REPO"
fi

printf '\nA Vercel já foi conectada pelo usuário. Nenhuma alteração de equipe, projeto ou domínio foi feita.\n'
printf 'Equipe esperada: %s | Projeto esperado: %s\n' "$TEAM" "$PROJECT"
printf 'Se o Git está conectado à main na Vercel, o push inicia o deploy automaticamente.\n'
printf 'O preview permanece noindex. Confirme o deploy no painel da Vercel.\n'
