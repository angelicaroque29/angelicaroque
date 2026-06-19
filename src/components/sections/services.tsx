"use client";

import { Check, Sparkles, Star } from "lucide-react";
import { CurvedPath, DotMatrix, GradientBubble, ScatterDots } from "@/components/deco";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import {
  auditAccent,
  customAccent,
  mainOfferAccents,
  premiumAccent,
  serviceOfferIcons,
  type ServiceOfferId,
} from "@/lib/service-offers";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

type ServicesProps = {
  standalone?: boolean;
};

type ServiceOffer = {
  id: ServiceOfferId;
  price: string;
  title: string;
  description: string;
  includes: readonly string[];
  cta: string;
  tier?: "premium" | "custom";
};

function AuditFeaturedCard({
  offer,
  featuredLabel,
  freeCallNote,
  includesLabel,
}: {
  offer: ServiceOffer;
  featuredLabel: string;
  freeCallNote: string;
  includesLabel: string;
}) {
  const Icon = serviceOfferIcons.audit;

  return (
    <article
      id="audit"
      className="group relative overflow-hidden rounded-[1.5rem] border-2 p-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5 sm:p-8 lg:p-9"
      style={{
        animation: "fadeIn 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both",
        background: auditAccent.gradient,
        borderColor: auditAccent.border,
        boxShadow: auditAccent.glow,
      }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgb(255 255 255 / 0.35) 0%, rgb(132 103 255 / 0.25) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-wide text-[#3b4fd8] uppercase shadow-sm">
              <Sparkles className="size-3" />
              {featuredLabel}
            </span>
            <span className="rounded-full bg-[#eef2fb] px-3 py-1 text-[11px] font-semibold text-[#1e3a5f]">
              {freeCallNote}
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              {offer.price}
            </span>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm ring-1 ring-white/25">
              <Icon className="size-6 text-white" strokeWidth={1.75} />
            </div>
            <h3 className="font-heading text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold leading-snug text-white">
              {offer.title}
            </h3>
          </div>

          <p className="max-w-2xl text-sm leading-[1.85] text-white/90 sm:text-[0.9375rem]">
            {offer.description}
          </p>

          <p className="mt-4 text-[11px] font-semibold tracking-wide text-white/80 uppercase">
            {includesLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {offer.includes.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1.5 text-xs text-white/95 ring-1 ring-white/15"
              >
                <Check className="size-3 shrink-0 text-[#c5d4f7]" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <CtaButton
          href={routes.booking}
          showArrow
          className="w-full shrink-0 !h-12 !border-0 !bg-white !text-navy shadow-md hover:!bg-[#eef2fb] lg:w-auto lg:!px-8"
        >
          {offer.cta}
        </CtaButton>
      </div>
    </article>
  );
}

function PricingNote({ text }: { text: string }) {
  return (
    <p className="mt-6 rounded-[1rem] border border-[#e7e2da]/90 bg-white/70 px-5 py-4 text-sm leading-[1.8] text-muted-foreground shadow-xs">
      {text}
    </p>
  );
}

function OfferIncludes({
  items,
  includesLabel,
  linkColor,
  textClass = "text-muted-foreground",
  labelClass = "text-navy uppercase opacity-70",
}: {
  items: readonly string[];
  includesLabel: string;
  linkColor: string;
  textClass?: string;
  labelClass?: string;
}) {
  return (
    <div className="mt-5 flex-1">
      <p className={cn("text-[11px] font-semibold tracking-wide", labelClass)}>
        {includesLabel}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className={cn("flex items-start gap-2 text-sm", textClass)}>
            <Check
              className="mt-0.5 size-3.5 shrink-0"
              style={{ color: linkColor }}
              strokeWidth={2.5}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StandardOfferCard({
  offer,
  index,
  includesLabel,
}: {
  offer: ServiceOffer;
  index: number;
  includesLabel: string;
}) {
  const accent = mainOfferAccents[index] ?? mainOfferAccents[0];
  const Icon = serviceOfferIcons[offer.id];

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:p-7"
      style={{
        animation: `fadeIn 0.7s cubic-bezier(.22,.68,0,1.2) ${0.12 + index * 0.06}s both`,
        background: accent.cardWash,
        borderColor: accent.border,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = accent.hoverShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px] rounded-t-[1.35rem]"
        style={{ background: accent.bar }}
      />

      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-xl shadow-sm"
          style={{ background: accent.iconBg }}
        >
          <Icon className="size-5 text-white" strokeWidth={1.75} />
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide",
            accent.chip
          )}
        >
          {offer.price}
        </span>
      </div>

      <h3 className="font-heading text-lg font-semibold leading-snug text-navy">{offer.title}</h3>
      <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{offer.description}</p>

      <OfferIncludes
        items={offer.includes}
        includesLabel={includesLabel}
        linkColor={accent.link}
      />

      <div className="mt-6 pt-2">
        <CtaButton href={routes.booking} variant="secondary" className="w-full !h-11" showArrow>
          {offer.cta}
        </CtaButton>
      </div>
    </article>
  );
}

function PremiumOfferCard({
  offer,
  includesLabel,
  premiumLabel,
}: {
  offer: ServiceOffer;
  includesLabel: string;
  premiumLabel: string;
}) {
  const accent = premiumAccent;
  const Icon = serviceOfferIcons.proposals;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border-2 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 sm:p-7"
      style={{
        animation: "fadeIn 0.7s cubic-bezier(.22,.68,0,1.2) 0.35s both",
        background: accent.cardWash,
        borderColor: accent.border,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = accent.hoverShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[4px] rounded-t-[1.35rem]"
        style={{ background: accent.bar }}
      />

      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-xl shadow-sm"
          style={{ background: accent.iconBg }}
        >
          <Icon className="size-5 text-white" strokeWidth={1.75} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase",
              accent.badge
            )}
          >
            <Star className="size-3 fill-[#3b4fd8] text-[#3b4fd8]" />
            {premiumLabel}
          </span>
          <span className={cn("rounded-full px-2.5 py-1 text-[10px] font-semibold", accent.chip)}>
            {offer.price}
          </span>
        </div>
      </div>

      <h3 className="font-heading text-lg font-semibold leading-snug text-white">{offer.title}</h3>
      <p className="mt-3 text-sm leading-[1.75] text-white/85">{offer.description}</p>

      <OfferIncludes
        items={offer.includes}
        includesLabel={includesLabel}
        linkColor={accent.link}
        labelClass="text-white/70"
        textClass="text-white/80"
      />

      <div className="mt-6 pt-2">
        <CtaButton
          href={routes.booking}
          showArrow
          className="w-full !h-11 !border-0 !bg-white !text-navy shadow-md hover:!bg-[#eef2fb]"
        >
          {offer.cta}
        </CtaButton>
      </div>
    </article>
  );
}

function CustomOfferCard({
  offer,
  includesLabel,
  customLabel,
}: {
  offer: ServiceOffer;
  includesLabel: string;
  customLabel: string;
}) {
  const accent = customAccent;
  const Icon = serviceOfferIcons.custom;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.35rem] border-2 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:p-7",
        accent.ring
      )}
      style={{
        animation: "fadeIn 0.7s cubic-bezier(.22,.68,0,1.2) 0.42s both",
        background: accent.cardWash,
        borderColor: accent.border,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = accent.hoverShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[4px] rounded-t-[1.35rem]"
        style={{ background: accent.bar }}
      />

      <div className="mb-5 flex items-start justify-between gap-3">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-xl shadow-sm"
          style={{ background: accent.iconBg }}
        >
          <Icon className="size-5 text-white" strokeWidth={1.75} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide",
              accent.chip
            )}
          >
            {customLabel}
          </span>
          <span className="rounded-full bg-[#faf9f7] px-2.5 py-1 text-[10px] font-semibold text-navy">
            {offer.price}
          </span>
        </div>
      </div>

      <h3 className="font-heading text-lg font-semibold leading-snug text-navy">{offer.title}</h3>
      <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{offer.description}</p>

      <OfferIncludes
        items={offer.includes}
        includesLabel={includesLabel}
        linkColor={accent.link}
      />

      <div className="mt-6 pt-2">
        <CtaButton href={routes.booking} variant="secondary" className="w-full !h-11 !border-navy/20" showArrow>
          {offer.cta}
        </CtaButton>
      </div>
    </article>
  );
}

export function Services({ standalone = false }: ServicesProps) {
  const { t } = useLocale();
  const { services } = t;

  const standardOffers = services.offers.filter((o) => !("tier" in o));
  const premiumOffer = services.offers.find((o) => "tier" in o && o.tier === "premium");
  const customOffer = services.offers.find((o) => "tier" in o && o.tier === "custom");

  return (
    <>
      <Section
        id="services"
        flush
        className={cn("!py-10 lg:!py-14", standalone && "!pt-6 lg:!pt-10")}
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e7e2da]/80 bg-[linear-gradient(118deg,rgb(232_228_245_/_0.38),rgb(250_248_243_/_0.82)_48%,rgb(221_232_250_/_0.32))] px-5 py-10 shadow-sm sm:px-8 lg:px-10 lg:py-12">
          <GradientBubble
            size={220}
            colorA="rgb(132 103 255 / 0.35)"
            colorB="rgb(197 212 240 / 0.45)"
            style={{ top: "-10%", right: "-5%", zIndex: 0 }}
          />
          <GradientBubble
            size={160}
            colorA="rgb(59 79 216 / 0.28)"
            colorB="rgb(197 212 240 / 0.45)"
            style={{ bottom: "-8%", left: "-6%", zIndex: 0 }}
          />

          <DotMatrix
            cols={9}
            rows={6}
            gap={18}
            r={1.6}
            fill="rgb(30 58 95 / 0.08)"
            className="hidden lg:block"
            style={{ top: "1rem", right: "1rem", zIndex: 1 }}
          />

          <CurvedPath
            className="hidden lg:block"
            style={{ top: "1rem", left: "0", width: "60%", zIndex: 1 }}
            d="M 0 80 Q 120 20 280 60 T 480 30"
            stroke="rgb(91 125 184 / 0.15)"
            strokeWidth={1.5}
            viewBox="0 0 480 100"
          />

          <ScatterDots
            className="hidden lg:block"
            style={{ bottom: "1.5rem", left: "0.5rem", zIndex: 1 }}
            dots={[
              { cx: 8, cy: 8, r: 5, fill: "rgb(132 103 255 / 0.22)" },
              { cx: 22, cy: 22, r: 3, fill: "rgb(91 125 184 / 0.28)" },
              { cx: 36, cy: 10, r: 4, fill: "rgb(30 58 95 / 0.18)" },
            ]}
          />

          <div className="relative z-10">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="micro-chip mb-3 inline-flex">{services.label}</span>
                <h2 className="font-heading text-[clamp(1.65rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-tight text-navy">
                  {services.title}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-[1.8] text-muted-foreground lg:pb-1 lg:text-right">
                {services.subtitle}
              </p>
            </div>

            <AuditFeaturedCard
              offer={services.audit}
              featuredLabel={services.auditFeaturedLabel}
              freeCallNote={services.freeCallNote}
              includesLabel={services.includesLabel}
            />

            <PricingNote text={services.pricingNote} />

            <div className="mt-10 mb-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#5b7db8] uppercase">
                {services.buildsLabel}
              </p>
            </div>

            <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {standardOffers.map((offer, index) => (
                <StandardOfferCard
                  key={offer.id}
                  offer={offer}
                  index={index}
                  includesLabel={services.includesLabel}
                />
              ))}
            </div>

            {(premiumOffer || customOffer) && (
              <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-2">
                {premiumOffer && (
                  <PremiumOfferCard
                    offer={premiumOffer}
                    includesLabel={services.includesLabel}
                    premiumLabel={services.premiumLabel}
                  />
                )}
                {customOffer && (
                  <CustomOfferCard
                    offer={customOffer}
                    includesLabel={services.includesLabel}
                    customLabel={services.customLabel}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section id="how-it-works" flush className="!py-8 lg:!py-10">
        <div className="rounded-[1.5rem] border border-[#e7e2da]/80 bg-white px-5 py-9 shadow-sm sm:px-8 lg:px-10">
          <h2 className="font-heading text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-tight text-navy">
            {services.howItWorks.title}
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.howItWorks.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.15rem] border border-[#f0ece6] bg-[#faf9f7] p-5 transition-shadow duration-300 hover:shadow-sm"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section flush className="!pb-10 lg:!pb-14">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#3b4fd8]/20 bg-[linear-gradient(135deg,#eef2fb_0%,#faf9f7_55%,#ffffff_100%)] px-6 py-10 text-center shadow-sm sm:px-10 lg:py-12">
          <GradientBubble
            size={180}
            colorA="rgb(59 79 216 / 0.28)"
            colorB="rgb(197 212 240 / 0.35)"
            style={{ top: "-20%", right: "10%", zIndex: 0 }}
          />
          <div className="relative z-10 mx-auto max-w-lg">
            <h2 className="font-heading text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold tracking-tight text-navy">
              {services.finalCta.title}
            </h2>
            <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{services.finalCta.text}</p>
            <div className="mt-7 flex justify-center">
              <CtaButton href={routes.booking} showArrow className="!h-11 !px-7">
                {services.finalCta.cta}
              </CtaButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
