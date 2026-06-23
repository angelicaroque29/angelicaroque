"use client";

import { Calendar, CheckCircle2, ChevronDown, ExternalLink, MessageCircle, Sparkles, Star } from "lucide-react";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import { useBookingCalendar } from "@/lib/booking-calendar-context";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const optionStyles = {
  free: {
    ctaIcon: Calendar,
    bar: "linear-gradient(90deg, #3b4fd8, #5b7db8)",
    bg: "linear-gradient(160deg, #fafbff 0%, #f0f4ff 100%)",
    accent: "#3b4fd8",
    accentBg: "#eef2fb",
  },
  audit: {
    ctaIcon: Calendar,
    bar: "linear-gradient(90deg, #7c5cc4, #a07dd8)",
    bg: "linear-gradient(160deg, #fdf9ff 0%, #f5f0fc 100%)",
    accent: "#7c5cc4",
    accentBg: "#f0edf8",
  },
  project: {
    ctaIcon: Sparkles,
    bar: "linear-gradient(90deg, #1e3a5f, #5b7db8)",
    bg: "linear-gradient(160deg, #f4f6fb 0%, #eef2fb 100%)",
    accent: "#1e3a5f",
    accentBg: "#eef2fb",
  },
} as const;

type BookingProps = {
  standalone?: boolean;
};

export function Booking({ standalone = false }: BookingProps) {
  const { showCalendar, setShowCalendar } = useBookingCalendar();
  const { t } = useLocale();

  return (
    <Section id="booking" flush className={cn("!py-14 lg:!py-20", standalone && "!pt-10 lg:!pt-14")}>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e7e2da]/70 bg-white/60 px-5 py-10 shadow-sm sm:px-8 lg:px-12 lg:py-14">
        <div className="corner-grid right-4 top-4" />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 size-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgb(255 255 255 / 0.95) 0 10%, rgb(197 212 240 / 0.88) 26%, rgb(132 103 255 / 0.38) 56%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="micro-chip mb-3 inline-flex">{t.booking.label}</span>
              <h2 className="font-heading text-[clamp(1.7rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-tight text-navy">
                {t.booking.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {t.booking.subtitle}
              </p>
            </div>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground lg:flex">
              <Star className="size-4 fill-[#f5c542] text-[#f5c542]" />
              <span>{t.booking.region}</span>
            </div>
          </div>

          <div className="mx-auto max-w-xl">
            {t.booking.options.map((opt) => {
              const style = optionStyles[opt.id as keyof typeof optionStyles];
              const Cta = style.ctaIcon;
              return (
                <div
                  key={opt.id}
                  className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: style.bg,
                    borderColor: `${style.accent}40`,
                    boxShadow: `0 4px 32px ${style.accent}18`,
                  }}
                >
                  <div
                    className="h-[3.5px] w-full rounded-t-[1.35rem]"
                    style={{ background: style.bar }}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase"
                        style={{ background: style.accentBg, color: style.accent }}
                      >
                        {opt.badge}
                      </span>
                      {opt.featured && (
                        <span className="text-[10px] font-semibold tracking-wide text-[#3b4fd8] uppercase">
                          {t.booking.mostPopular}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                      {opt.label}
                    </h3>
                    <p className="mt-1 text-xl font-semibold" style={{ color: style.accent }}>
                      {opt.price}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {opt.description}
                    </p>
                    <ul className="mt-5 space-y-1.5">
                      {opt.perks.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-3.5 shrink-0" style={{ color: style.accent }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        setShowCalendar(true);
                        requestAnimationFrame(() => {
                          document.getElementById("booking-calendar")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        });
                      }}
                      className="mt-6 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-105 hover:shadow-md"
                      style={{ background: style.accent }}
                    >
                      <Cta className="size-4" strokeWidth={2.25} />
                      {opt.cta}
                      <Calendar className="size-3.5 opacity-80" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calendar */}
          <div id="booking-calendar" className="mt-10 overflow-hidden rounded-[1.35rem] border-2 border-[#3b4fd8]/25 bg-[linear-gradient(135deg,#eef2fb_0%,#ffffff_55%,#faf9f7_100%)] shadow-md">
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/50 sm:p-6"
              aria-expanded={showCalendar}
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#3b4fd8] shadow-[0_4px_14px_rgb(59_79_216_/_0.35)] sm:size-14">
                  <Calendar className="size-6 text-white sm:size-7" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-base font-semibold text-navy sm:text-lg">
                    {showCalendar ? t.booking.hideCalendar : t.booking.showCalendar}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                    {t.booking.calendarTitle}
                  </p>
                </div>
              </div>
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#3b4fd8]/20 bg-white shadow-xs"
                aria-hidden
              >
                <ChevronDown
                  className="size-5 text-[#3b4fd8] transition-transform duration-200"
                  style={{ transform: showCalendar ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </span>
            </button>

            {showCalendar && (
              <div className="border-t border-[#3b4fd8]/15 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e2da]/60 px-5 py-3 sm:px-6">
                  <p className="text-sm font-semibold text-navy">{t.booking.calendarTitle}</p>
                  <a
                    href={siteConfig.calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#eef2fb] px-3 py-1.5 text-xs font-semibold text-[#3b4fd8] transition-colors hover:bg-[#3b4fd8] hover:text-white"
                  >
                    {t.booking.openCalendar}
                    <ExternalLink className="size-3" />
                  </a>
                </div>
                <iframe
                  title="Calendario Angelica Roque"
                  src={siteConfig.calEmbedUrl}
                  className="h-[min(70vh,640px)] w-full border-0 bg-white"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-[#e7e2da]/60 pt-6 sm:flex-row sm:justify-between">
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              {t.booking.footer}
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a9d8f] hover:text-navy"
            >
              <MessageCircle className="size-4" />
              {t.booking.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
