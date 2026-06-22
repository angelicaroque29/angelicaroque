"use client";

import { AgentChatWidget } from "@/components/agent-chat-widget";
import { Footer } from "@/components/footer";
import { HashScroll } from "@/components/hash-scroll";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { Nav } from "@/components/nav";

const useJotformScriptEmbed = Boolean(
  process.env.NEXT_PUBLIC_JOTFORM_AGENT_EMBED_SRC?.trim()
);

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HashScroll />
      <Nav />
      <main className="site-main pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
      {!useJotformScriptEmbed ? <AgentChatWidget /> : null}
    </>
  );
}
