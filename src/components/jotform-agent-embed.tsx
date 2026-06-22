import Script from "next/script";

const embedSrc = process.env.NEXT_PUBLIC_JOTFORM_AGENT_EMBED_SRC?.trim();

/** Official Jotform AI Agent chatbot (Publish → Chatbot → Copy Code). */
export function JotformAgentEmbed() {
  if (!embedSrc) return null;

  return <Script src={embedSrc} strategy="lazyOnload" />;
}
