"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Lightbulb, Sparkles } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { useLocale } from "@/lib/i18n/context";
import {
  offerIconBackgrounds,
  serviceHref,
  serviceOfferIcons,
  serviceOfferIds,
  type ServiceOfferId,
} from "@/lib/service-offers";
import { routes } from "@/lib/routes";

function DetailList({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: readonly string[];
  icon: typeof Check;
}) {
  return (
    <div className="rounded-[1.25rem] border border-[#e7e2da] bg-white p-5 shadow-sm sm:p-6">
      <h2 className="font-heading text-lg font-semibold text-navy">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <Icon className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={2.25} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceDetail({ id }: { id: ServiceOfferId }) {
  const { t } = useLocale();
  const details = t.serviceDetails;
  const item = details.items[id];
  const Icon = serviceOfferIcons[id];
  const otherIds = serviceOfferIds.filter((other) => other !== id);

  return (
    <Section flush className="!pt-6 !pb-12 lg:!pt-10 lg:!pb-16">
      <Link
        href={routes.services}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy/70 transition-colors hover:text-navy"
      >
        <ArrowLeft className="size-4" />
        {details.back}
      </Link>

      <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[#e7e2da] bg-[linear-gradient(145deg,#faf8f3_0%,#ffffff_50%,#f4faf9_100%)] shadow-sm">
        <div className="grid lg:grid-cols-[1fr_minmax(18rem,21rem)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div
              className="flex size-12 items-center justify-center rounded-xl shadow-sm"
              style={{ background: offerIconBackgrounds[id] }}
            >
              <Icon className="size-6 text-white" strokeWidth={1.75} />
            </div>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.16em] text-teal uppercase">{item.note}</p>
            <h1 className="mt-2 font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-navy">
              {item.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-[1.75] text-muted-foreground">{item.intro}</p>
          </div>

          <div className="flex flex-col justify-center gap-4 border-t border-[#e7e2da] bg-white/70 p-6 sm:p-8 lg:border-t-0 lg:border-l">
            <div>
              <p className="text-xs font-medium text-muted-foreground">{item.priceLabel}</p>
              <p className="mt-1 font-heading text-[2.5rem] font-semibold leading-none tracking-tight text-navy">
                {item.price}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{item.priceHint}</p>
            </div>
            <CtaButton href={routes.booking} showArrow className="w-full !h-12">
              {details.cta}
            </CtaButton>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <DetailList title={details.idealForLabel} items={item.idealFor} icon={Lightbulb} />
        <DetailList title={details.includesLabel} items={item.includes} icon={Check} />
      </div>
      <div className="mt-4">
        <DetailList title={details.examplesLabel} items={item.examples} icon={Sparkles} />
      </div>

      <div className="mt-6 rounded-[1.5rem] bg-navy px-6 py-8 text-center sm:px-10">
        <h2 className="font-heading text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold text-white">
          {details.ctaTitle}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-[1.7] text-white/80">{details.ctaText}</p>
        <div className="mt-6 flex justify-center">
          <CtaButton
            href={routes.booking}
            showArrow
            className="w-full !h-12 !border-0 !bg-teal !text-white hover:!bg-[#238a7e] sm:w-auto"
          >
            {details.cta}
          </CtaButton>
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-teal uppercase">
          {details.otherServicesLabel}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {otherIds.map((otherId) => {
            const other = details.items[otherId];
            const OtherIcon = serviceOfferIcons[otherId];
            return (
              <Link
                key={otherId}
                href={serviceHref(otherId)}
                className="group flex items-center gap-3 rounded-[1rem] border border-[#e7e2da] bg-white p-4 transition-colors hover:border-teal/40"
              >
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: offerIconBackgrounds[otherId] }}
                >
                  <OtherIcon className="size-4 text-white" strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-navy">{other.title}</span>
                  <span className="block text-xs text-muted-foreground">
                    {other.priceLabel} {other.price}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-teal transition-transform group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
