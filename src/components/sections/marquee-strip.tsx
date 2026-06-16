"use client";

import { useLocale } from "@/lib/i18n/context";

const dots = ["#3b4fd8", "#7c5cc4", "#2a9d8f", "#3b4fd8", "#7c5cc4", "#2a9d8f", "#3b4fd8", "#7c5cc4", "#2a9d8f"];

export function MarqueeStrip() {
  const { t } = useLocale();
  const doubled = [...t.marquee, ...t.marquee];

  return (
    <div
      className="w-full overflow-hidden border-y border-[#e7e2da]/60 bg-white/50 py-3.5 backdrop-blur-sm"
      aria-hidden
    >
      <div className="marquee-track">
        {doubled.map((text, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-2.5 px-6 text-[11px] font-semibold tracking-[0.14em] text-navy/60 uppercase"
          >
            <span className="size-1.5 rounded-full" style={{ background: dots[i % dots.length] }} />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
