"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { routes } from "@/lib/routes";

export function Hero() {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section id="hero" className="ar-hero" aria-labelledby="hero-title">
      <div className="min-w-0">
        <p className="ar-eyebrow">{hero.eyebrow}</p>
        <h1 className="ar-hero__title" id="hero-title">
          {hero.titleLines.map((line) => (
            <span key={line}>{line} </span>
          ))}
        </h1>
        <p className="ar-hero__description">{hero.description}</p>
        <div className="ar-hero__actions">
          <Link className="ar-button" href={routes.services}>
            {hero.primaryCta}
            <span className="ar-button__arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Link className="ar-link" href={routes.booking}>
            {hero.secondaryCta}
          </Link>
        </div>
      </div>

      <figure className="ar-workflow">
        <div className="ar-workflow__media">
          <Image
            className="ar-workflow__image"
            src="/brand/hero/emerald-workflow.png"
            width={1722}
            height={893}
            alt=""
            preload
            fetchPriority="high"
            sizes="(min-width: 1600px) 780px, (min-width: 960px) 52vw, 100vw"
          />
        </div>
        <div className="ar-workflow__labels" aria-hidden="true">
          {hero.flowLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <figcaption className="sr-only">{hero.flowCaption}</figcaption>
        <p className="ar-workflow__signature" aria-hidden="true">
          angelica.build()
          <span />
        </p>
      </figure>
    </section>
  );
}
