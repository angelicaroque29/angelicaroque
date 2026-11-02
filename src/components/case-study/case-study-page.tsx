"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { routes } from "@/lib/routes";
import data from "../../../content/caso-estudio-estructura/contenido/data.json";
import { SilentErrorDemo } from "./silent-error-demo";
import { SystemsMap } from "./systems-map";
import "./case-study.css";

const narrative = {
  es: {
    heroTitle: "Su estimado se ve perfecto. Ese es el problema.",
    heroBody:
      "Auditamos la plantilla de estimación de un contratista de estructura de concreto, encontramos nueve errores que no daban ninguna señal y empezamos a conectar estimado, control de costos y pagos en un solo sistema.",
    clientTitle: "El cliente",
    client:
      "Un contratista de estructura de concreto con proyectos residenciales y comerciales. Por confidencialidad no publicamos su nombre. Con su empresa haríamos lo mismo.",
    situationTitle: "La situación",
    situation: [
      "Como casi todas las constructoras, la empresa trabaja sobre Excel: una plantilla de estimación con decenas de hojas, miles de fórmulas y macros; un archivo para controlar costos; otro para pagar a subcontratistas.",
      "Cada archivo funcionaba por separado, pero no se hablaban. Los datos pasaban de uno a otro copiando y pegando, y circulaban varias copias de la plantilla sin que nadie pudiera decir cuál era la oficial.",
    ],
    findingsTitle: "Lo que encontramos",
    findingsIntro:
      "Auditamos la plantilla contra un estimado real, ya con precio, y encontramos nueve defectos. Algunos ejemplos:",
    findingsOutro:
      "En el estimado que revisamos, ninguno estaba costando dinero todavía, porque ese proyecto no usaba esas fases. En el próximo que sí las use, los números saldrían mal sin avisar.",
    processTitle: "Cómo lo estamos resolviendo",
    processIntro: "Es un proceso por etapas. Cada etapa deja algo que el equipo ya puede usar.",
    checklistTitle: "¿Le suena?",
    closeTitle: "Envíeme su plantilla. Le digo qué encuentro.",
    closeBody:
      "Reviso su plantilla de estimación o un estimado reciente y le entrego una lista de lo que hoy cambia sus números sin avisar. Su información se queda conmigo, igual que la de este cliente.",
  },
  en: {
    heroTitle: "Your estimate looks perfect. That's the problem.",
    heroBody:
      "We audited a structural concrete contractor's estimating template, found nine errors that gave no warning, and started connecting estimating, cost control and payments into one system.",
    clientTitle: "The client",
    client:
      "A structural concrete contractor working on residential and commercial projects. For confidentiality, we don't publish their name. We'd do the same for your company.",
    situationTitle: "The situation",
    situation: [
      "Like most contractors, the company runs on Excel: an estimating template with dozens of sheets, thousands of formulas and macros; one file for cost control; another for paying subcontractors.",
      "Each file worked on its own, but they didn't talk to each other. Data moved between them by copy and paste, and several copies of the template were in circulation with no way to tell which one was official.",
    ],
    findingsTitle: "What we found",
    findingsIntro:
      "We audited the template against a real, fully priced estimate and found nine defects. A few examples:",
    findingsOutro:
      "On the estimate we reviewed, none of them was costing money yet, because that project didn't use those phases. On the next one that does, the numbers would come out wrong without warning.",
    processTitle: "How we're fixing it",
    processIntro: "It's a staged process. Every stage leaves the team with something it can already use.",
    checklistTitle: "Sound familiar?",
    closeTitle: "Send me your template. I'll tell you what I find.",
    closeBody:
      "I'll review your estimating template or a recent estimate and give you a list of what's changing your numbers without warning. Your information stays with me, just like this client's.",
  },
} as const;

function StatusMark({ status }: { status: "done" | "in_progress" | "next" }) {
  if (status === "done") {
    return <span aria-hidden className="mt-1.5 size-3 shrink-0 bg-[color:var(--cs-ok)]" />;
  }
  if (status === "in_progress") {
    return (
      <span
        aria-hidden
        className="mt-1.5 size-3 shrink-0 border border-[color:var(--cs-rebar)]"
        style={{ background: "linear-gradient(to right, var(--cs-rebar) 50%, transparent 50%)" }}
      />
    );
  }
  return <span aria-hidden className="mt-1.5 size-3 shrink-0 border border-[color:var(--cs-muted)]" />;
}

export function CaseStudy({ initialLocale }: { initialLocale: Locale }) {
  const { locale, setLocale } = useLocale();
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (initialLocale === "en") setLocale("en");
    setSettled(true);
  }, [initialLocale, setLocale]);

  const lang: Locale = !settled && initialLocale === "en" ? "en" : locale;
  const text = narrative[lang];
  const primaryLabel = lang === "es" ? data.cta.label_primary_es : data.cta.label_primary_en;
  const secondaryLabel = lang === "es" ? data.cta.label_secondary_es : data.cta.label_secondary_en;
  const closingLabel = lang === "es" ? data.cta.label_closing_es : data.cta.label_closing_en;
  const checklist = lang === "es" ? data.checklist_es : data.checklist_en;

  return (
    <article className="case-study mx-auto flex w-full max-w-6xl flex-col px-4 py-8 sm:px-8 sm:py-16">
      <header className="order-1">
        <h1 className="prose-measure font-heading">{text.heroTitle}</h1>
        <p className="prose-measure mt-4 text-[1.0625rem] leading-[1.55] sm:mt-5 sm:leading-[1.6]">{text.heroBody}</p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
          <Link href={routes.booking} className="btn-primary min-h-12 w-full sm:w-auto">
            {primaryLabel}
          </Link>
          <a href="#findings" className="btn-secondary min-h-12 w-full sm:w-auto">
            {secondaryLabel}
          </a>
        </div>
      </header>

      <section className="order-4 mt-14 lg:order-2 lg:mt-24">
        <h2 className="font-heading">{text.clientTitle}</h2>
        <p className="prose-measure mt-4 text-[1.0625rem] leading-[1.6]">{text.client}</p>
      </section>

      <section className="order-5 mt-14 lg:order-3 lg:mt-24">
        <h2 className="font-heading">{text.situationTitle}</h2>
        {text.situation.map((paragraph) => (
          <p key={paragraph} className="prose-measure mt-4 text-[1.0625rem] leading-[1.6]">
            {paragraph}
          </p>
        ))}
        <div className="mt-8 max-w-[640px]">
          <SystemsMap locale={lang} />
        </div>
      </section>

      <section id="findings" className="order-2 mt-14 scroll-mt-24 lg:order-4 lg:mt-24">
        <h2 className="font-heading">{text.findingsTitle}</h2>
        <div className="mt-6">
          <SilentErrorDemo locale={lang} />
        </div>
        <p className="prose-measure mt-8 text-[1.0625rem] leading-[1.6]">{text.findingsIntro}</p>
        <ul className="prose-measure mt-4 space-y-3 text-[1.0625rem] leading-[1.6]">
          {data.findings.map((finding) => (
            <li key={finding.title_es}>
              <strong>{lang === "es" ? finding.title_es : finding.title_en}</strong>{" "}
              {lang === "es" ? finding.body_es : finding.body_en}
            </li>
          ))}
        </ul>
        <p className="prose-measure mt-4 text-[1.0625rem] leading-[1.6]">{text.findingsOutro}</p>
      </section>

      <section className="order-6 mt-14 lg:order-5 lg:mt-24">
        <h2 className="font-heading">{text.processTitle}</h2>
        <p className="prose-measure mt-4 text-[1.0625rem] leading-[1.6]">{text.processIntro}</p>
        <ol className="mt-6 max-w-3xl space-y-5">
          {data.process.map((step, index) => {
            const label = data.status_labels[lang][step.status as "done" | "in_progress" | "next"];
            const tone =
              step.status === "done"
                ? "text-[color:var(--cs-ok)]"
                : step.status === "in_progress"
                  ? "text-[color:var(--cs-rebar)]"
                  : "text-[color:var(--cs-muted)]";
            return (
              <li key={step.id} className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                <StatusMark status={step.status as "done" | "in_progress" | "next"} />
                <p className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[1.0625rem] leading-snug">
                  <span className="font-semibold">
                    {index + 1}. {lang === "es" ? step.title_es : step.title_en}
                  </span>
                  <span className={`font-semibold ${tone}`}>{label}</span>
                </p>
                <p className="col-start-2 text-[1.0625rem] leading-[1.6] text-[color:var(--cs-muted)]">
                  {lang === "es" ? step.body_es : step.body_en}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="order-7 mt-14 lg:order-6 lg:mt-24">
        <h2 className="font-heading">{lang === "es" ? data.also.title_es : data.also.title_en}</h2>
        <p className="prose-measure mt-4 text-[1.0625rem] leading-[1.6]">
          {lang === "es" ? data.also.body_es : data.also.body_en}
        </p>
      </section>

      <section className="order-3 mt-14 lg:order-7 lg:mt-24">
        <h2 className="font-heading">{text.checklistTitle}</h2>
        <ul className="prose-measure mt-4 border-y border-[color:var(--cs-slab)]">
          {checklist.map((item) => (
            <li key={item} className="border-b border-[color:var(--cs-slab)] py-3.5 text-[1.0625rem] leading-snug last:border-b-0">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="order-8 mt-14 bg-[color:var(--cs-concrete)] px-5 py-10 lg:mt-24 sm:px-8 sm:py-12">
        <h2 className="prose-measure font-heading">{text.closeTitle}</h2>
        <p className="prose-measure mt-4 text-[1.0625rem] leading-[1.6]">{text.closeBody}</p>
        <Link href={routes.booking} className="btn-primary mt-6 min-h-12 w-full sm:w-auto">
          {closingLabel}
        </Link>
      </section>
    </article>
  );
}
