"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { routes } from "@/lib/routes";
import data from "../../../content/caso-estudio-estructura/contenido/data.json";
import { LaborDemo } from "./silent-error-demo";
import "./case-study.css";

const IMAGES = "/casos/contratista-estructura";

type Handoff = "auto" | "retyped" | "missing" | "manual";

const HANDOFFS: Handoff[] = [
  "auto",
  ...Array<Handoff>(9).fill("retyped"),
  ...Array<Handoff>(2).fill("missing"),
  ...Array<Handoff>(14).fill("manual"),
];

const narrative = {
  es: {
    eyebrow: "Caso real · Thales Builders Corp. · Construcción de estructura",
    heroTitle: "Ponga su constructora al día, antes que su competencia.",
    heroBody:
      "Thales Builders funcionaba con décadas de sistemas que no se hablaban. Mapeamos cómo se mueve el trabajo y empezamos a automatizar lo que su gente hacía a mano.",
    stats: [
      { value: "1 de 26", label: "traspasos era automático" },
      { value: "255", label: "datos capturados en 5 semanas" },
      { value: "$554K", label: "validados al centavo" },
    ],
    seeIt: "Ver qué hicimos",
    bookLabel: "Quiero esto en mi empresa",
    problem: {
      label: "El problema",
      title: "Todo funcionaba. Nada se hablaba.",
      body: "Software propio, contabilidad, Excel para estimar, controlar costos y facturar, y plataformas de campo. Cada uno por su lado.",
      systems: ["Software propio", "Contabilidad", "Excel: estimados, costos y facturación", "Plataformas de campo"],
      pains: [
        "Volver a teclear los mismos números de trabajo",
        "Llamar a los supervisores para saber el avance",
        "Rehacer a mano el calendario de facturación",
      ],
      flag: "Y casi todo el conocimiento vivía en la cabeza de una sola persona.",
      alt: "Ilustración: cuatro archivos separados, sin conexión entre ellos.",
    },
    map: {
      label: "El mapa",
      title: "26 traspasos de información. Solo 1 automático.",
      body: "Dibujamos un mapa vivo de 8 áreas del negocio y cada traspaso entre ellas. Ese mapa se volvió el plan de trabajo.",
      legend: {
        auto: "1 automático",
        retyped: "9 se vuelven a teclear a mano",
        missing: "2 no existen",
        manual: "14 sin automatizar",
      },
      missingTitle: "Los 2 que faltaban:",
      missing: ["El costo real nunca llegaba a los precios.", "El avance semanal nunca llegaba a la facturación."],
    },
    knowledge: {
      label: "El conocimiento",
      title: "255 datos en 5 semanas, sacados de las conversaciones.",
      body: "Las reuniones y conversaciones se convierten en datos que el equipo revisa en un tablero compartido.",
      confirmed: "116 ya confirmados por el equipo",
      docs: [
        { value: "11", label: "sistemas documentados" },
        { value: "14", label: "procesos, de la licitación a la solicitud de pago" },
      ],
    },
    billing: {
      label: "Lo automatizado",
      title: "La facturación de costos, sin retecleo y validada al centavo.",
      body: "Reconstruí la importación que lleva los costos de cada trabajo desde contabilidad hasta la facturación del cliente.",
      proof: [
        { value: "308", label: "líneas de costo" },
        { value: "$554K", label: "cuadrados al centavo" },
        { value: "0", label: "diferencias" },
      ],
      fixes: [
        "15 problemas corregidos: líneas duplicadas, sobrescritas y perdidas",
        "Emisión y bloqueo con registro de auditoría en PDF",
        "Acceso de solo lectura a la base de datos",
      ],
      alt: "Ilustración: bloques conectados por una misma línea, de la información a las acciones.",
    },
    errors: {
      label: "Antes de la oferta",
      title: "Errores atrapados antes de llegar a una oferta.",
      body: "Encontramos 2 errores ocultos en la plantilla de estimación. Uno hacía que la línea de materiales sumara solo el impuesto de ventas.",
      plans:
        "La IA leyó un juego de 87 planos escaneados y los comparó con 3 trabajos anteriores: un precio fijo por pie cuadrado habría inflado la oferta.",
      tryIt: "Pruébelo: así se esconde un error en una plantilla.",
      alt: "Ilustración: una hoja de cálculo ordenada con una sola celda marcada en rojo.",
    },
    next: {
      label: "Lo que sigue",
      title: "Una empresa que no depende de una sola persona.",
      items: [
        "Servidores modernos, con ambientes separados de desarrollo, prueba y producción",
        "Una plataforma central con cada trabajo, fase y edificio, para que los números de trabajo viajen solos",
        "Cerrar los 2 traspasos que faltan",
      ],
      how: "Cómo trabajo: la IA lee, redacta y verifica. Su equipo confirma cada dato antes de usarlo.",
    },
    checklistTitle: "¿Le suena?",
    checklistExtra: "Su gente vuelve a teclear el mismo número de trabajo en varios sistemas.",
    closeTitle: "Ponga su empresa al día antes de que su competencia lo haga.",
    closeBody:
      "En 1 hora le muestro dónde se pierde información en su empresa y qué conviene automatizar primero, para que su equipo invierta su tiempo en lo que de verdad importa.",
    closeCta: "Agendar mi reunión",
    illustrative: "Números ilustrativos.",
  },
  en: {
    eyebrow: "Real case · Thales Builders Corp. · Structural construction",
    heroTitle: "Get your construction company up to speed, before your competitors do.",
    heroBody:
      "Thales Builders ran on decades of systems that didn't talk to each other. We mapped how work really moves and started automating what their people did by hand.",
    stats: [
      { value: "1 of 26", label: "handoffs was automatic" },
      { value: "255", label: "facts captured in 5 weeks" },
      { value: "$554K", label: "validated to the cent" },
    ],
    seeIt: "See what we did",
    bookLabel: "I want this for my company",
    problem: {
      label: "The problem",
      title: "Everything worked. Nothing talked.",
      body: "In-house software, accounting, Excel for estimating, cost control and billing, and field platforms. Each one on its own.",
      systems: ["In-house software", "Accounting", "Excel: estimates, costs and billing", "Field platforms"],
      pains: [
        "Retyping the same job numbers",
        "Phoning supervisors to find out progress",
        "Rebuilding billing schedules by hand",
      ],
      flag: "And most of the know-how lived in one person's head.",
      alt: "Illustration: four separate files with no connection between them.",
    },
    map: {
      label: "The map",
      title: "26 information handoffs. Only 1 automatic.",
      body: "We drew one live map of 8 business areas and every handoff between them. That map became the roadmap.",
      legend: {
        auto: "1 automatic",
        retyped: "9 retyped by hand",
        missing: "2 don't exist",
        manual: "14 not automated",
      },
      missingTitle: "The 2 that were missing:",
      missing: ["Actual costs never reached pricing.", "Weekly progress never reached billing."],
    },
    knowledge: {
      label: "The knowledge",
      title: "255 facts in 5 weeks, pulled from everyday conversations.",
      body: "Meetings and conversations become facts the team reviews on a shared board.",
      confirmed: "116 already confirmed by the team",
      docs: [
        { value: "11", label: "systems documented" },
        { value: "14", label: "processes, from bid intake to pay application" },
      ],
    },
    billing: {
      label: "What we automated",
      title: "Job-cost billing, with no retyping, validated to the cent.",
      body: "I rebuilt the import that pulls each job's costs from accounting into the customer billing record.",
      proof: [
        { value: "308", label: "cost lines" },
        { value: "$554K", label: "matched to the cent" },
        { value: "0", label: "differences" },
      ],
      fixes: [
        "15 issues fixed: duplicate, overwritten and dropped lines",
        "Issue-and-lock with a PDF audit trail",
        "Read-only database access",
      ],
      alt: "Illustration: blocks connected by a single line, from information to actions.",
    },
    errors: {
      label: "Before the bid",
      title: "Errors caught before they reached a bid.",
      body: "We found 2 hidden formula errors in the estimating template. One made the materials line read sales tax only.",
      plans:
        "AI read an 87-sheet scanned plan set and compared it with 3 past jobs: a straight price per square foot would have overstated the bid.",
      tryIt: "Try it: this is how an error hides in a template.",
      alt: "Illustration: a tidy spreadsheet with a single cell marked in red.",
    },
    next: {
      label: "What's next",
      title: "A company that doesn't depend on any one person.",
      items: [
        "Modern servers, with separate development, test and production environments",
        "A core platform that holds every job, phase and building, so job numbers flow on their own",
        "Closing the 2 missing handoffs",
      ],
      how: "How I work: AI does the reading, drafting and cross-checking. Your team confirms every fact before it's used.",
    },
    checklistTitle: "Sound familiar?",
    checklistExtra: "Your people retype the same job number into several systems.",
    closeTitle: "Get your company up to speed before your competitors do.",
    closeBody:
      "In 1 hour I'll show you where information gets lost in your company and what to automate first, so your team spends its time on the work that really matters.",
    closeCta: "Book my meeting",
    illustrative: "Illustrative numbers.",
  },
} as const;

function ChapterHead({ index, label, title, body }: { index: number; label: string; title: string; body: string }) {
  return (
    <div>
      <p className="chapter-label">
        <span>{String(index).padStart(2, "0")}</span>
        {label}
      </p>
      <h2 id={`chapter-${index}`} className="mt-4 font-heading">
        {title}
      </h2>
      <p className="mt-3 max-w-[48ch] text-[1.0625rem] leading-[1.55] text-[color:var(--cs-muted)]">{body}</p>
    </div>
  );
}

function StoryImage({ src, alt, preload = false }: { src: string; alt: string; preload?: boolean }) {
  return (
    <div className="chapter-image">
      <Image src={src} alt={alt} width={1280} height={720} preload={preload} sizes="(max-width: 1024px) 100vw, 560px" />
    </div>
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
  const checklist = [...(lang === "es" ? data.checklist_es : data.checklist_en), text.checklistExtra];

  return (
    <article className="case-study mx-auto w-full max-w-6xl px-4 pt-8 pb-12 sm:px-8 sm:pt-14">
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
        <div>
          <Image
            src="/casos/thales/thales-builders-logo.png"
            alt="Thales Builders Corp."
            width={1699}
            height={294}
            preload
            className="h-auto w-[200px] sm:w-[240px]"
            sizes="240px"
          />
          <p className="chapter-label mt-6">{text.eyebrow}</p>
          <h1 className="mt-4 max-w-[20ch] font-heading">{text.heroTitle}</h1>
          <p className="mt-4 max-w-[48ch] text-[1.0625rem] leading-[1.55] text-[color:var(--cs-muted)] sm:text-lg">
            {text.heroBody}
          </p>
          <dl className="mt-7 grid max-w-xl grid-cols-3 gap-3 border-y border-[color:var(--cs-slab)] py-5">
            {text.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 font-mono text-[11px] leading-snug text-[color:var(--cs-muted)] uppercase">
                  {stat.label}
                </dt>
                <dd className="font-heading text-2xl font-semibold tracking-tight whitespace-nowrap sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#chapter-1" className="btn-primary min-h-12 w-full sm:w-auto">
              {text.seeIt}
              <span className="btn-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
            <Link href={routes.booking} className="btn-secondary min-h-12 w-full sm:w-auto">
              {text.bookLabel}
            </Link>
          </div>
        </div>
        <StoryImage src={`${IMAGES}/antes-archivos-sueltos.webp`} alt={text.problem.alt} preload />
      </header>

      <section className="chapter" aria-labelledby="chapter-1">
        <ChapterHead index={1} label={text.problem.label} title={text.problem.title} body={text.problem.body} />
        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <ul className="grid grid-cols-2 gap-2 self-start">
            {text.problem.systems.map((system) => (
              <li key={system} className="system-chip">
                {system}
              </li>
            ))}
          </ul>
          <ul className="grid gap-2">
            {text.problem.pains.map((pain) => (
              <li key={pain} className="pain-row">
                <span aria-hidden className="pain-row__x">
                  ×
                </span>
                {pain}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 text-lg font-semibold text-[color:var(--cs-flag)]">{text.problem.flag}</p>
      </section>

      <section className="chapter" aria-labelledby="chapter-2">
        <ChapterHead index={2} label={text.map.label} title={text.map.title} body={text.map.body} />
        <div className="handoff-board mt-6" role="img" aria-label={Object.values(text.map.legend).join(", ")}>
          <div className="handoff-grid">
            {HANDOFFS.map((kind, i) => (
              <span key={i} className={`handoff handoff--${kind}`} />
            ))}
          </div>
          <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {(Object.keys(text.map.legend) as Handoff[]).map((kind) => (
              <li key={kind} className="flex items-center gap-2.5 text-[0.95rem] font-medium">
                <span aria-hidden className={`handoff handoff--${kind} !size-4`} />
                {text.map.legend[kind]}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 rounded-[14px] border border-[color:var(--cs-flag)] bg-[color:var(--cs-flag-bg)] p-4 sm:p-5">
          <p className="font-semibold text-[color:var(--cs-flag)]">{text.map.missingTitle}</p>
          <ul className="mt-2 grid gap-1.5">
            {text.map.missing.map((item) => (
              <li key={item} className="text-[1.0625rem] font-semibold leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-3">
        <ChapterHead index={3} label={text.knowledge.label} title={text.knowledge.title} body={text.knowledge.body} />
        <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="sheet-card">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-heading text-5xl font-semibold tracking-tight">255</p>
              <p className="text-right text-sm font-semibold text-[color:var(--cs-ok)]">{text.knowledge.confirmed}</p>
            </div>
            <div className="progress mt-4" aria-hidden>
              <span style={{ width: `${(116 / 255) * 100}%` }} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {text.knowledge.docs.map((doc) => (
              <div key={doc.label} className="sheet-card">
                <p className="font-heading text-4xl font-semibold tracking-tight">{doc.value}</p>
                <p className="mt-1 text-sm leading-snug text-[color:var(--cs-muted)]">{doc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-4">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
          <ChapterHead index={4} label={text.billing.label} title={text.billing.title} body={text.billing.body} />
          <StoryImage src="/brand/hero/emerald-workflow-1200.webp" alt={text.billing.alt} />
        </div>
        <dl className="proof-band mt-6">
          {text.billing.proof.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-sm leading-snug text-white/75">{item.label}</dt>
              <dd className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">{item.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-4 grid gap-2 md:grid-cols-3">
          {text.billing.fixes.map((fix) => (
            <li key={fix} className="check-row">
              <span aria-hidden className="check-box is-checked" />
              {fix}
            </li>
          ))}
        </ul>
      </section>

      <section className="chapter" aria-labelledby="chapter-5">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
          <div>
            <ChapterHead index={5} label={text.errors.label} title={text.errors.title} body={text.errors.body} />
            <p className="mt-4 max-w-[48ch] border-l-2 border-[color:var(--cs-rebar)] pl-4 text-[1.0625rem] leading-[1.55]">
              {text.errors.plans}
            </p>
          </div>
          <StoryImage src={`${IMAGES}/celda-silenciosa.webp`} alt={text.errors.alt} />
        </div>
        <div className="mt-8 max-w-3xl">
          <p className="mb-3 font-semibold">{text.errors.tryIt}</p>
          <LaborDemo locale={lang} />
          <p className="mt-2 text-sm text-[color:var(--cs-muted)]">{text.illustrative}</p>
        </div>
      </section>

      <section className="chapter" aria-labelledby="chapter-6">
        <p className="chapter-label">
          <span>06</span>
          {text.next.label}
        </p>
        <h2 id="chapter-6" className="mt-4 font-heading">
          {text.next.title}
        </h2>
        <ol className="mt-6 grid gap-3 md:grid-cols-3">
          {text.next.items.map((item, i) => (
            <li key={item} className="finding-card !border-t-[color:var(--cs-rebar)]">
              <span className="font-mono text-xs font-semibold text-[color:var(--cs-rebar)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-[1.0625rem] font-semibold leading-snug">{item}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 max-w-[66ch] text-base leading-[1.55] text-[color:var(--cs-muted)]">{text.next.how}</p>
      </section>

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
        <h2 id="close-title" className="max-w-[24ch] font-heading !text-white">
          {text.closeTitle}
        </h2>
        <p className="mt-4 max-w-[56ch] text-[1.0625rem] leading-[1.6] text-white/80">{text.closeBody}</p>
        <Link href={routes.booking} className="cta-banner__button mt-7">
          {text.closeCta}
          <span aria-hidden="true" className="text-2xl leading-none">
            →
          </span>
        </Link>
      </section>
    </article>
  );
}
