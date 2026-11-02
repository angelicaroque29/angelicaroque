"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { routes } from "@/lib/routes";
import data from "../../../content/caso-estudio-estructura/contenido/data.json";
import { LaborDemo, PhaseDemo } from "./silent-error-demo";
import "./case-study.css";

type Status = "done" | "in_progress" | "next";

const IMAGES = "/casos/contratista-estructura";
const OTHER_FINDINGS = [1, 2, 4] as const;

const narrative = {
  es: {
    eyebrow: "Caso real · Contratista de estructura de concreto",
    heroTitle: "Su estimado se ve perfecto. Ese es el problema.",
    heroBody: "Revisamos su plantilla de estimación contra un estimado real. Encontramos nueve errores. Ninguno daba una señal.",
    stats: [
      { value: "4", label: "sistemas sin conectar" },
      { value: "9", label: "errores silenciosos" },
      { value: "0", label: "avisos en rojo" },
    ],
    seeIt: "Verlo en 1 minuto",
    before: {
      label: "Antes",
      title: "Cuatro sistemas que no se hablan.",
      body: "Cada parte del negocio vivía en su propio archivo. Los datos pasaban de uno a otro copiando y pegando.",
      systems: ["Estimación", "Control de costos", "Pagos a subcontratistas", "Producción"],
      flag: "Y varias copias de la plantilla. ¿Cuál es la oficial?",
      alt: "Ilustración: cuatro archivos separados, sin conexión entre ellos.",
    },
    error1: {
      label: "Error 1",
      title: "Un espacio en una celda vale cero.",
      body: "No sale nada en rojo y el resumen se ve limpio. Toque el botón.",
      alt: "Ilustración: una hoja de cálculo ordenada con una sola celda vacía marcada en rojo.",
    },
    error2: {
      label: "Error 2",
      title: "Una fase completa fuera del total.",
      body: "Cuatro fases y un total. La última nunca llega al precio.",
      alt: "Ilustración: tres capas apiladas sobre una base y una cuarta capa apartada, marcada en rojo.",
    },
    more: {
      label: "Y hay más",
      title: "Nueve en total. Otros tres:",
      note: "En el estimado revisado ninguno estaba costando dinero todavía: ese proyecto no usaba esas fases. En el próximo que las use, los números saldrían mal sin avisar.",
    },
    after: {
      label: "Hacia dónde va",
      title: "Un mismo ID conecta todo.",
      body: "El código del cliente y del proyecto viaja del estimado a la propuesta, al control de costos y a los pagos. Sin volver a teclear.",
      spine: "Un ID por cliente y proyecto",
      alt: "Ilustración: bloques conectados por una misma línea, de la información a las acciones.",
      progress: "Avance",
    },
    alsoPrefix: "Además:",
    also: "ordenamos su documentación y montamos un asistente de IA que responde cómo funciona la empresa a partir de esos documentos.",
    checklistTitle: "¿Le suena?",
    closeTitle: "Envíeme su plantilla. Le digo qué encuentro.",
    closeBody: "Reviso su plantilla de estimación o un estimado reciente y le entrego la lista de lo que hoy cambia sus números sin avisar. Su información se queda conmigo, igual que la de este cliente.",
    illustrative: "Números ilustrativos, no son del cliente.",
  },
  en: {
    eyebrow: "Real case · Structural concrete contractor",
    heroTitle: "Your estimate looks perfect. That's the problem.",
    heroBody: "We checked their estimating template against a real estimate. We found nine errors. None of them gave a warning.",
    stats: [
      { value: "4", label: "disconnected systems" },
      { value: "9", label: "silent errors" },
      { value: "0", label: "red warnings" },
    ],
    seeIt: "See it in 1 minute",
    before: {
      label: "Before",
      title: "Four systems that don't talk.",
      body: "Each part of the business lived in its own file. Data moved between them by copy and paste.",
      systems: ["Estimating", "Cost control", "Subcontractor payments", "Production"],
      flag: "Plus several copies of the template. Which one is official?",
      alt: "Illustration: four separate files with no connection between them.",
    },
    error1: {
      label: "Error 1",
      title: "A space in a cell counts as zero.",
      body: "Nothing shows in red and the summary looks clean. Tap the button.",
      alt: "Illustration: a tidy spreadsheet with a single empty cell marked in red.",
    },
    error2: {
      label: "Error 2",
      title: "A whole phase left out of the total.",
      body: "Four phases and one total. The last one never reaches the price.",
      alt: "Illustration: three layers stacked on a base and a fourth layer set apart, marked in red.",
    },
    more: {
      label: "There's more",
      title: "Nine in total. Three others:",
      note: "On the estimate we reviewed, none was costing money yet: that project didn't use those phases. On the next one that does, the numbers would come out wrong without warning.",
    },
    after: {
      label: "Where it's heading",
      title: "One ID connects everything.",
      body: "The customer and project code travels from the estimate to the proposal, cost control and payments. No retyping.",
      spine: "One ID per customer and project",
      alt: "Illustration: blocks connected by a single line, from information to actions.",
      progress: "Progress",
    },
    alsoPrefix: "Also:",
    also: "we organized their documentation and set up an AI assistant that answers how the company works, using those documents.",
    checklistTitle: "Sound familiar?",
    closeTitle: "Send me your template. I'll tell you what I find.",
    closeBody: "I'll review your estimating template or a recent estimate and give you the list of what's changing your numbers without warning. Your information stays with me, just like this client's.",
    illustrative: "Illustrative numbers, not the client's.",
  },
} as const;

function StatusMark({ status }: { status: Status }) {
  if (status === "done") {
    return <span aria-hidden className="size-3 shrink-0 rounded-full bg-[color:var(--cs-ok)]" />;
  }
  if (status === "in_progress") {
    return (
      <span
        aria-hidden
        className="size-3 shrink-0 rounded-full border border-[color:var(--cs-rebar)]"
        style={{ background: "linear-gradient(to right, var(--cs-rebar) 50%, transparent 50%)" }}
      />
    );
  }
  return <span aria-hidden className="size-3 shrink-0 rounded-full border border-[color:var(--cs-muted)]" />;
}

function Chapter({
  index,
  label,
  title,
  body,
  image,
  alt,
  aside,
  children,
}: {
  index: number;
  label: string;
  title: string;
  body: string;
  image?: string;
  alt?: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="chapter" aria-labelledby={`chapter-${index}`}>
      <p className="chapter-label">
        <span>{String(index).padStart(2, "0")}</span>
        {label}
      </p>
      <div
        className={`mt-4 grid gap-6 lg:items-center lg:gap-12 ${image ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" : "lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"}`}
      >
        <div>
          <h2 id={`chapter-${index}`} className="font-heading">
            {title}
          </h2>
          <p className="mt-3 max-w-[46ch] text-[1.0625rem] leading-[1.55] text-[color:var(--cs-muted)]">{body}</p>
        </div>
        {image ? (
          <div className="chapter-image">
            <Image src={image} alt={alt ?? ""} width={1280} height={720} sizes="(max-width: 1024px) 100vw, 600px" />
          </div>
        ) : (
          aside
        )}
      </div>
      {children}
    </section>
  );
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
  const checklist = lang === "es" ? data.checklist_es : data.checklist_en;

  return (
    <article className="case-study mx-auto w-full max-w-6xl px-4 pt-8 pb-12 sm:px-8 sm:pt-14">
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
        <div>
          <p className="chapter-label">{text.eyebrow}</p>
          <h1 className="mt-4 max-w-[18ch] font-heading">{text.heroTitle}</h1>
          <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-[1.55] text-[color:var(--cs-muted)] sm:text-lg">
            {text.heroBody}
          </p>
          <dl className="mt-7 grid max-w-xl grid-cols-3 gap-3 border-y border-[color:var(--cs-slab)] py-5">
            {text.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 font-mono text-[11px] leading-snug text-[color:var(--cs-muted)] uppercase">
                  {stat.label}
                </dt>
                <dd
                  className={`font-heading text-4xl font-semibold tracking-tight sm:text-5xl ${stat.value === "0" ? "text-[color:var(--cs-flag)]" : ""}`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#chapter-2" className="btn-primary min-h-12 w-full sm:w-auto">
              {text.seeIt}
              <span className="btn-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
            <Link href={routes.booking} className="btn-secondary min-h-12 w-full sm:w-auto">
              {primaryLabel}
            </Link>
          </div>
        </div>
        <div className="chapter-image">
          <Image
            src={`${IMAGES}/celda-silenciosa.webp`}
            alt={text.error1.alt}
            width={1280}
            height={720}
            preload
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </header>

      <Chapter
        index={1}
        label={text.before.label}
        title={text.before.title}
        body={text.before.body}
        image={`${IMAGES}/antes-archivos-sueltos.webp`}
        alt={text.before.alt}
      >
        <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {text.before.systems.map((system) => (
            <li key={system} className="system-chip">
              {system}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-base font-semibold text-[color:var(--cs-flag)]">{text.before.flag}</p>
      </Chapter>

      <Chapter
        index={2}
        label={text.error1.label}
        title={text.error1.title}
        body={text.error1.body}
        aside={
          <div className="min-w-0">
            <LaborDemo locale={lang} />
            <p className="mt-2 text-sm text-[color:var(--cs-muted)]">{text.illustrative}</p>
          </div>
        }
      />

      <Chapter
        index={3}
        label={text.error2.label}
        title={text.error2.title}
        body={text.error2.body}
        image={`${IMAGES}/fase-fuera-del-total.webp`}
        alt={text.error2.alt}
      >
        <div className="mt-6 max-w-3xl">
          <PhaseDemo locale={lang} />
          <p className="mt-2 text-sm text-[color:var(--cs-muted)]">{text.illustrative}</p>
        </div>
      </Chapter>

      <section className="chapter" aria-labelledby="chapter-4">
        <p className="chapter-label">
          <span>04</span>
          {text.more.label}
        </p>
        <h2 id="chapter-4" className="mt-4 font-heading">
          {text.more.title}
        </h2>
        <ol className="mt-6 grid gap-3 md:grid-cols-3">
          {OTHER_FINDINGS.map((i, n) => {
            const finding = data.findings[i];
            return (
              <li key={finding.title_es} className="finding-card">
                <span className="font-mono text-xs font-semibold text-[color:var(--cs-flag)]">
                  {String(n + 3).padStart(2, "0")} / 09
                </span>
                <p className="mt-2 font-heading text-lg font-semibold leading-snug">
                  {lang === "es" ? finding.title_es : finding.title_en}
                </p>
                <p className="mt-1.5 text-[0.95rem] leading-[1.5] text-[color:var(--cs-muted)]">
                  {lang === "es" ? finding.body_es : finding.body_en}
                </p>
              </li>
            );
          })}
        </ol>
        <p className="mt-5 max-w-[60ch] border-l-2 border-[color:var(--cs-flag)] pl-4 text-base leading-[1.55]">
          {text.more.note}
        </p>
      </section>

      <Chapter
        index={5}
        label={text.after.label}
        title={text.after.title}
        body={text.after.body}
        image="/brand/hero/emerald-workflow-1200.webp"
        alt={text.after.alt}
      >
        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="spine" role="img" aria-label={`${text.before.systems.join(", ")}: ${text.after.spine}`}>
            <p className="spine__bar">{text.after.spine}</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {text.before.systems.map((system) => (
                <li key={system} className="system-chip is-linked">
                  {system}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.12em] text-[color:var(--cs-muted)] uppercase">
              {text.after.progress}
            </p>
            <ol className="mt-3 divide-y divide-[color:var(--cs-slab)] border-y border-[color:var(--cs-slab)]">
              {data.process.map((step, index) => {
                const status = step.status as Status;
                const tone =
                  status === "done"
                    ? "text-[color:var(--cs-ok)]"
                    : status === "in_progress"
                      ? "text-[color:var(--cs-rebar)]"
                      : "text-[color:var(--cs-muted)]";
                return (
                  <li key={step.id} className="flex items-center gap-3 py-3">
                    <StatusMark status={status} />
                    <span className="flex-1 text-base font-medium leading-snug">
                      <span className="mr-2 font-mono text-xs text-[color:var(--cs-muted)]">{index + 1}</span>
                      {lang === "es" ? step.title_es : step.title_en}
                    </span>
                    <span className={`shrink-0 text-sm font-semibold ${tone}`}>
                      {data.status_labels[lang][status]}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <p className="mt-8 max-w-[66ch] text-base leading-[1.55]">
          <strong>{text.alsoPrefix}</strong> {text.also}
        </p>
      </Chapter>

      <section className="chapter" aria-labelledby="checklist-title">
        <h2 id="checklist-title" className="font-heading">
          {text.checklistTitle}
        </h2>
        <ul className="mt-5 grid max-w-3xl gap-2">
          {checklist.map((item) => (
            <li key={item} className="check-row">
              <span aria-hidden className="check-box" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="case-close" aria-labelledby="close-title">
        <h2 id="close-title" className="max-w-[22ch] font-heading !text-white">
          {text.closeTitle}
        </h2>
        <p className="mt-4 max-w-[56ch] text-[1.0625rem] leading-[1.6] text-white/80">{text.closeBody}</p>
        <Link href={routes.booking} className="cta-banner__button mt-7">
          {primaryLabel}
          <span aria-hidden="true" className="text-2xl leading-none">
            →
          </span>
        </Link>
      </section>
    </article>
  );
}
