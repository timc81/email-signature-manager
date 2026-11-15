import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://siggly.io';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/settings/',
          '/login',
          '/signup',
          '/auth/',
          // NOTE: do NOT block '/_next/' — that stops Googlebot fetching the
          // JS/CSS it needs to render. Static assets under /_next/static are
          // immutable-cached and safe to crawl.
          // Anchor '/guide$' so this only blocks the onboarding page and NOT
          // the /guides/* content hub (robots rules are prefix matches).
          '/guide$',
        ],
      },
      // --- OpenAI / ChatGPT ---
      {
        userAgent: 'GPTBot', // training crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // user-triggered browsing in ChatGPT
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot', // powers ChatGPT Search citations — key for cited traffic
        allow: '/',
      },
      // --- Google (Gemini / AI Overviews) ---
      {
        userAgent: 'Google-Extended', // Gemini / Vertex training & grounding
        allow: '/',
      },
      {
        userAgent: 'GoogleOther', // Google research / AI crawling
        allow: '/',
      },
      // --- Anthropic / Claude ---
      {
        userAgent: 'ClaudeBot', // current Anthropic crawler
        allow: '/',
      },
      {
        userAgent: 'Claude-SearchBot', // Claude search/citation fetches
        allow: '/',
      },
      {
        userAgent: 'Claude-User', // user-triggered fetches in Claude
        allow: '/',
      },
      {
        userAgent: 'Anthropic-AI', // legacy, kept for coverage
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // legacy, kept for coverage
        allow: '/',
      },
      // --- Perplexity ---
      {
        userAgent: 'PerplexityBot', // index crawler
        allow: '/',
      },
      {
        userAgent: 'Perplexity-User', // user-triggered answer fetches
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended', // Apple Intelligence
        allow: '/',
      },
      // --- Other assistants / AI search ---
      {
        userAgent: 'meta-externalagent', // Meta AI
        allow: '/',
      },
      {
        userAgent: 'DuckAssistBot', // DuckDuckGo AI
        allow: '/',
      },
      {
        userAgent: 'Amazonbot', // Alexa / Rufus
        allow: '/',
      },
      {
        userAgent: 'MistralAI-User', // Le Chat
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
