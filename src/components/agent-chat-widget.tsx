"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path d="M12 1c-2.987 0-3.362.019-4.535.067-1.17.054-1.968.237-2.668.51a5.403 5.403 0 0 0-1.95 1.27A5.384 5.384 0 0 0 1.58 4.794c-.272.7-.46 1.501-.513 2.672C1.014 8.64 1 9.014 1 12.002c0 2.987.014 3.362.067 4.535.054 1.171.24 1.97.513 2.669a5.383 5.383 0 0 0 1.266 1.948 5.417 5.417 0 0 0 1.951 1.27c.7.272 1.498.459 2.668.512C8.638 22.99 9.013 23 12 23s3.362-.017 4.535-.064c1.17-.053 1.972-.24 2.671-.512a5.393 5.393 0 0 0 1.948-1.27 5.384 5.384 0 0 0 1.267-1.948c.271-.7.458-1.498.512-2.669.053-1.173.067-1.547.067-4.535 0-2.988-.014-3.362-.067-4.536-.054-1.17-.24-1.972-.512-2.672a5.384 5.384 0 0 0-1.267-1.947 5.392 5.392 0 0 0-1.948-1.27c-.7-.273-1.5-.456-2.671-.51C15.362 1.014 14.987 1 12 1Zm0 1.981c2.937 0 3.284.018 4.444.064 1.072.048 1.657.23 2.045.38.513.2.878.438 1.263.823a3.4 3.4 0 0 1 .822 1.264c.15.387.332.973.38 2.045.054 1.16.065 1.507.065 4.445 0 2.937-.012 3.284-.064 4.444-.05 1.073-.23 1.654-.38 2.042-.2.514-.438.882-.823 1.267-.385.385-.75.623-1.263.822-.388.15-.973.329-2.045.378-1.16.053-1.507.064-4.444.064-2.937 0-3.284-.018-4.444-.064-1.072-.049-1.654-.227-2.041-.378a3.415 3.415 0 0 1-1.267-.822 3.416 3.416 0 0 1-.822-1.267c-.15-.387-.329-.97-.378-2.042-.052-1.16-.064-1.507-.064-4.444 0-2.938.013-3.285.064-4.445.05-1.072.227-1.658.378-2.045.2-.514.437-.879.822-1.264a3.415 3.415 0 0 1 1.267-.822c.387-.15.969-.332 2.041-.38C8.716 2.991 9.063 2.98 12 2.98Zm5.872 1.827a1.321 1.321 0 1 0 .002 2.642 1.321 1.321 0 0 0-.002-2.642ZM12 6.35A5.649 5.649 0 0 0 6.353 12 5.649 5.649 0 1 0 12 6.352Zm0 1.985a3.665 3.665 0 0 1 3.665 3.666 3.665 3.665 0 1 1-7.33 0A3.665 3.665 0 0 1 12 8.336Z" />
    </svg>
  );
}

export function AgentChatWidget() {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();
  const { chatWidget } = t;

  return (
    <div
      className={cn(
        "pointer-events-none fixed right-4 z-[60] flex w-[min(360px,calc(100vw-2rem))] flex-col items-end",
        "bottom-[calc(4.75rem+env(safe-area-inset-bottom))] lg:bottom-6"
      )}
    >
      <div
        role="dialog"
        aria-label={chatWidget.agentName}
        aria-hidden={!open}
        className={cn(
          "pointer-events-auto mb-3 w-full overflow-hidden rounded-[1.25rem] border border-[#e7e2da] bg-white shadow-lg",
          "transition-[transform,opacity,visibility] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-full opacity-0"
        )}
      >
        <div className="relative flex items-center gap-5 p-4">
          <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f8fafc] p-0.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.agentAvatarUrl}
              alt=""
              width={44}
              height={44}
              className="size-11 rounded-full bg-[#f8fafc] object-cover"
            />
            <span className="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-white">
              <span className="size-3 rounded-full bg-emerald-500" />
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="m-0 text-sm font-bold text-slate-700">{chatWidget.agentName}</p>
            <p className="m-0 text-sm font-medium text-slate-600">{chatWidget.online}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-slate-100"
            aria-label={chatWidget.close}
          >
            <span className="text-sm leading-none">×</span>
          </button>
        </div>

        <div className="border-t border-[#e7e2da]" />

        <div className="flex items-start gap-5 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.agentAvatarUrl}
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full bg-[#f8fafc] object-cover"
          />
          <div className="rounded-md bg-[#fafafa] py-2 pl-4 pr-3">
            <p className="m-0 text-sm text-slate-700">{chatWidget.greeting}</p>
            <p className="m-0 mt-1 text-sm text-slate-700">{chatWidget.prompt}</p>
          </div>
        </div>

        <div className="px-4 pb-4">
          <a
            href={siteConfig.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3b4fd8] px-4 text-base font-medium text-white transition-colors hover:bg-[#2f3eb8]"
          >
            <InstagramIcon />
            <span>{chatWidget.cta}</span>
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={chatWidget.open}
        aria-expanded={open}
        className={cn(
          "pointer-events-auto inline-flex size-12 items-center justify-center rounded-full border border-[#e7e2da] bg-white text-slate-600 shadow-md",
          "transition-[transform,opacity,visibility] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#fafbff]",
          open
            ? "invisible translate-y-full opacity-0"
            : "visible translate-y-0 opacity-100"
        )}
      >
        <InstagramIcon />
      </button>
    </div>
  );
}
