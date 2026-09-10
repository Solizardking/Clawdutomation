# ────────────────────────────────────────────────────────────────────────────
# ooda — self-hosted Clawd OODA runtime (dashboard + paper loop + live RPC)
#
# Local / VM:
#   docker build -t ooda .
#   docker run --rm -p 4173:4173 \
#     -e SOLANA_RPC_URL=https://api.mainnet-beta.solana.com \
#     -e OODA_JOURNAL_PATH=/data/journal/ticks.jsonl \
#     ooda
#
# Optional Fly.io: see fly.toml (volumes + secrets). Not required to self-host.
# ────────────────────────────────────────────────────────────────────────────

FROM node:22-alpine

# NOTE: NODE_ENV=production comes AFTER npm ci — with it set earlier, npm
# skips devDependencies and tsx (the runtime TS runner) is never baked in.
ENV OODA_WEB_HOST=0.0.0.0 \
    OODA_AUTORUN=1 \
    OODA_SLEEP=5 \
    OODA_TICKS=100 \
    OODA_JOURNAL_PATH=/data/journal/ticks.jsonl

WORKDIR /app

# Install all deps including devDeps (tsx is the runtime TS runner).
COPY package.json package-lock.json ./
RUN npm ci --include=dev --ignore-scripts

ENV NODE_ENV=production

# Copy app source (respects .dockerignore).
COPY . .

# Journal lands on the Fly volume mounted at /data.
RUN mkdir -p /data/journal

EXPOSE 4173

CMD ["npx", "tsx", "web/server.ts"]