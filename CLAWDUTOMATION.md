# Clawdutomation

Financial automation harness: Solana first; Robinhood + perps/stocks on the roadmap. Paper/observe first. No live trading without operator opt-in.

## Layout
- Automaton: src/ constitution/ onchainai-automation-0.1.1.tgz
- bots/ooda/ — Canonical OODA synced from clawdbot-go-main/ooda (paper default; includes clawd-decision.ts)
- ooda/ (repo root) — Evolved Fly/web/Docker variant; not replaced by sync. Prefer bots/ooda as sole source-of-truth for clawdbot-go OODA.
- vendors/solana-chat/ — nanochat + Solana/perps
- vendors/strategy/ — grid runner ta twap
- packages/clawd-ws/ — observe-only tape
- packages/openrouter-attribution/

## Tape
- https://clawd-ws.fly.dev/health
- wss://clawd-ws.fly.dev/ws

## OpenRouter
- https://solanaclawd.com / solanaclawd

## Paper start
Use .env.example. Install local package. Prefer observe mode.

## Roadmap
Vault/OWS, MEMEbrain, RH + perps/stocks, risk caps. See README.md. MIT.
