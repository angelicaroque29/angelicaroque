"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";
import { localeLabels, type Locale } from "@/lib/i18n/types";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[#e7e2da] bg-white p-0.5 shadow-xs",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(["es", "en"] as Locale[]).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-all",
              active
                ? "bg-navy text-white shadow-sm"
                : "text-muted-foreground hover:text-navy"
            )}
            aria-pressed={active}
          >
            {localeLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
