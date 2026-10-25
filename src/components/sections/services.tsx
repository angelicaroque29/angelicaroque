"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import {
  auditAccent,
  offerIconBackgrounds,
  serviceHref,
  serviceOfferIcons,
  type ServiceOfferId,
} from "@/lib/service-offers";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

type ServicesProps = {
  standalone?: boolean;
};

type AuditOffer = {
  price: string;
  title: string;
  description: string;
  includes: readonly string[];
  cta: string;
};

type FirstMeeting = {
  label: string;
  regularPrice: string;
  price: string;
  savings: string;
};

type ServiceOffer = {
  id: ServiceOfferId;
  price: string;
  note: string;
  title: string;
  summary: string;
  priceHint?: string;
};

function AuditFeaturedCard({
  offer,
  categoryLabel,
  firstMeeting,
  detailsCta,
}: {
  offer: AuditOffer;
  categoryLabel: string;
  firstMeeting: FirstMeeting;
  detailsCta: string;
}) {
  return (
    <article
      id="audit"
      className="relative overflow-hidden rounded-[1.5rem] border shadow-lg"
      style={{
        animation: "fadeIn 0.7s cubic-bezier(.22,.68,0,1.2) 0.05s both",
        background: auditAccent.gradient,
        borderColor: auditAccent.border,
        boxShadow: auditAccent.glow,
      }}
    >
      <div className="grid lg:grid-cols-[1fr_minmax(19rem,22rem)]">
        <div className="p-6 sm:p-8 lg:p-9">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#a8e0d8] uppercase">{categoryLabel}</p>
          <h3 className="mt-3 font-heading text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold leading-snug text-white">
            {offer.title}
          </h3>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-[1.75] text-white/85">{offer.description}</p>
          <ul className="mt-6 hidden gap-2.5 sm:grid sm:grid-cols-3">
            {offer.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                <Check className="mt-0.5 size-4 shrink-0 text-[#a8e0d8]" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-4 border-t border-white/15 bg-black/10 p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <p className="font-heading text-[2.25rem] font-semibold leading-none tracking-tight text-white">
            {offer.price}
          </p>

          <div className="rounded-xl bg-white p-4 text-navy shadow-md">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold tracking-wide whitespace-nowrap uppercase">{firstMeeting.label}</p>
              <span className="shrink-0 rounded-full bg-teal px-2.5 py-1 text-[11px] font-bold whitespace-nowrap text-white">
                {firstMeeting.savings}
              </span>
            </div>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="font-heading text-[1.75rem] font-semibold leading-none">{firstMeeting.price}</span>
              <span className="text-base text-muted-foreground line-through">{firstMeeting.regularPrice}</span>
            </p>
          </div>

          <CtaButton
            href={routes.booking}
            showArrow
            className="w-full !h-12 !border-0 !bg-teal !text-white shadow-md hover:!bg-[#238a7e]"
          >
            {offer.cta}
          </CtaButton>
          <Link
            href={serviceHref("audit")}
            className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            {detailsCta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function OfferCard({
  offer,
  index,
  priceFromLabel,
  detailsCta,
}: {
  offer: ServiceOffer;
  index: number;
  priceFromLabel: string;
  detailsCta: string;
}) {
  const Icon = serviceOfferIcons[offer.id];

  return (
    <Link
      href={serviceHref(offer.id)}
      className="group flex flex-col rounded-[1.25rem] border border-[#e7e2da] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md sm:p-6"
      style={{ animation: `fadeIn 0.7s cubic-bezier(.22,.68,0,1.2) ${0.12 + index * 0.06}s both` }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-xl shadow-sm"
          style={{ background: offerIconBackgrounds[offer.id] }}
        >
          <Icon className="size-5 text-white" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold tracking-[0.14em] text-teal uppercase">{offer.note}</p>
          <h3 className="font-heading text-lg font-semibold leading-snug text-navy">{offer.title}</h3>
        </div>
      </div>

      <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{offer.summary}</p>

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#f0ece6] pt-4">
        <div>
          <p className="text-[11px] font-medium text-muted-foreground">{priceFromLabel}</p>
          <p className="font-heading text-[1.6rem] font-semibold leading-none tracking-tight text-navy">
            {offer.price}
          </p>
          {offer.priceHint && <p className="mt-1.5 text-[11px] text-muted-foreground">{offer.priceHint}</p>}
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-teal">
          {detailsCta}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function Services({ standalone = false }: ServicesProps) {
  const { t } = useLocale();
  const { services } = t;

  return (
    <Section id="services" flush className={cn("!py-10 lg:!py-14", standalone && "!pt-6 lg:!pt-10")}>
      <div className="mb-7 lg:mb-8">
        <span className="micro-chip mb-3 inline-flex">{services.label}</span>
        <h2 className="font-heading text-[clamp(1.65rem,3vw,2.35rem)] font-semibold leading-[1.1] tracking-tight text-navy">
          {services.title}
        </h2>
      </div>

      <AuditFeaturedCard
        offer={services.audit}
        categoryLabel={services.auditCategoryLabel}
        firstMeeting={services.firstMeeting}
        detailsCta={services.detailsCta}
      />

      <p className="mt-10 mb-4 text-xs font-semibold tracking-[0.2em] text-teal uppercase">{services.buildsLabel}</p>

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {services.offers.map((offer, index) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            index={index}
            priceFromLabel={services.priceFromLabel}
            detailsCta={services.detailsCta}
          />
        ))}
      </div>

      <p className="mt-5 text-center text-sm leading-[1.7] text-muted-foreground">{services.pricingNote}</p>
    </Section>
  );
}
