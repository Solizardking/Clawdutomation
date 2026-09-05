/** Observe-only clawd-ws live pump tape. No auth on raw WS. */
export const CLAWD_WS_HTTP = "https://clawd-ws.fly.dev";
export const CLAWD_WS_WS = "wss://clawd-ws.fly.dev/ws";

export async function clawdWsHealth(fetchImpl = fetch) {
  const res = await fetchImpl(`${CLAWD_WS_HTTP}/health`);
  if (!res.ok) throw new Error(`clawd-ws health ${res.status}`);
  return res.json();
}

/**
 * Connect to the live tape. Caller handles messages.
 * @param {{ onMessage?: (data: unknown) => void, onStatus?: (ok: boolean) => void, url?: string }} opts
 */
export function connectClawdWs(opts = {}) {
  const url = opts.url || CLAWD_WS_WS;
  const ws = new WebSocket(url);
  ws.addEventListener("open", () => opts.onStatus?.(true));
  ws.addEventListener("close", () => opts.onStatus?.(false));
  ws.addEventListener("error", () => opts.onStatus?.(false));
  ws.addEventListener("message", (ev) => {
    try {
      opts.onMessage?.(JSON.parse(String(ev.data)));
    } catch {
      opts.onMessage?.(ev.data);
    }
  });
  return ws;
}
