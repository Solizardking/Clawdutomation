export const OPENROUTER_REFERER = "https://solanaclawd.com";
export const OPENROUTER_TITLE = "solanaclawd";
export const OPENROUTER_CATEGORIES = "personal-agent,cloud-agent";

export function openRouterAttributionHeaders() {
  return {
    "HTTP-Referer": OPENROUTER_REFERER,
    "X-OpenRouter-Title": OPENROUTER_TITLE,
    "X-Title": OPENROUTER_TITLE,
    "X-OpenRouter-Categories": OPENROUTER_CATEGORIES,
  };
}
