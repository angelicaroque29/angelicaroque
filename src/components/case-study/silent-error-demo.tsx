"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import data from "../../../content/caso-estudio-estructura/contenido/data.json";
import { routes } from "@/lib/routes";

type Locale = "es" | "en";
type Step = 0 | 1 | 2;

const FACTOR = data.demo.labor.factor_hours_per_ft;
const RATE = data.demo.labor.rate_per_hour;
const laborRows = data.demo.labor.rows;

function money(n: number) {
  return `$${Math.round(n).toLocaleString("en-US")}`;
}

function plain(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

function rowLength(row: (typeof laborRows)[number], fixed: boolean) {
  if (typeof row.length === "number") return row.length;
  return fixed && typeof row.fixed_length === "number" ? row.fixed_length : 0;
}

function totalHours(fixed: boolean) {
  return laborRows.reduce((sum, row) => sum + rowLength(row, fixed) * row.qty * FACTOR, 0);
}

function useCountUp(initial: number) {
  const [value, setValue] = useState(initial);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  function run(from: number, to: number) {
    if (reduceMotion.current) {
      setValue(to);
      return;
    }
    const start = performance.now();
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / 450);
      setValue(from + (to - from) * (1 - (1 - p) ** 3));
      if (p < 1) window.setTimeout(tick, 32);
    };
    tick();
  }

  return [value, run, setValue] as const;
}

function DemoControls({
  step,
  locale,
  onAdvance,
  message,
}: {
  step: Step;
  locale: Locale;
  onAdvance: () => void;
  message: string;
}) {
  const copy = data.demo[locale];
  const label = [copy.btn_reveal, copy.btn_fix, copy.btn_reset][step];

  return (
    <div className="mt-4 flex flex-col items-stretch gap-3">
      <p
        className={`m-0 max-w-[60ch] text-base leading-snug ${step === 1 ? "font-semibold text-[color:var(--cs-flag)]" : ""} ${step === 2 ? "text-lg font-semibold text-[color:var(--cs-ok)]" : ""}`}
        aria-live="polite"
      >
        {message}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          className={`action min-h-12 w-full rounded-[14px] px-5 py-3 text-base font-semibold sm:w-fit ${step === 2 ? "border border-[color:var(--cs-slab)] bg-white text-[color:var(--cs-ink)]" : "bg-[color:var(--cs-ink)] text-white"}`}
          type="button"
          onClick={onAdvance}
        >
          {label}
          {step < 2 ? (
            <span aria-hidden="true" className="ml-3 text-[color:var(--lime)]">
              →
            </span>
          ) : null}
        </button>
        {step === 2 ? (
          <Link href={routes.booking} className="btn-primary min-h-12 w-full sm:w-fit">
            {locale === "es" ? data.cta.label_primary_es : data.cta.label_primary_en}
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function LaborDemo({ locale }: { locale: Locale }) {
  const copy = data.demo[locale];
  const [step, setStep] = useState<Step>(0);
  const hBad = totalHours(false);
  const hGood = totalHours(true);
  const [shownHours, runHours, setShownHours] = useCountUp(hBad);
  const fixedRow = laborRows.find((row) => typeof row.length !== "number");
  const fixedLength = fixedRow && typeof fixedRow.fixed_length === "number" ? fixedRow.fixed_length : 0;

  useEffect(() => {
    if (step !== 1) return;
    document.querySelector("#demo-labor td.is-flag")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [step]);

  function advance() {
    const next = ((step + 1) % 3) as Step;
    setStep(next);
    if (next === 2) runHours(hBad, hGood);
    else setShownHours(hBad);
  }

  const hoursNow = step === 2 ? shownHours : hBad;
  const message = [copy.msg_labor_start, copy.msg_labor_reveal, copy.msg_labor_fix][step];

  return (
    <div id="demo-labor" className="sheet-card">
      <div className="fx mb-3 flex items-center gap-2 border border-[color:var(--cs-slab)] px-2.5 py-1.5 text-[0.95rem]">
        <b className="font-semibold text-[color:var(--cs-muted)] italic">fx</b>
        <span>{copy.formula_labor}</span>
      </div>
      <div className="sheet-scroll">
        <table className="sheet sheet-labor">
          <thead>
            <tr>
              <th />
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="rn">1</th>
              <td className="font-semibold">{copy.col_element}</td>
              <td className="num font-semibold">{copy.col_length}</td>
              <td className="num font-semibold">{copy.col_qty}</td>
              <td className="num font-semibold">{copy.col_hours}</td>
            </tr>
            {laborRows.map((row, index) => {
              const isBlank = typeof row.length !== "number";
              const flag = isBlank && step === 1 ? "is-flag" : "";
              const ok = isBlank && step === 2 ? "is-ok" : "";
              const length = rowLength(row, step === 2);
              return (
                <tr key={row.id}>
                  <th className="rn">{index + 2}</th>
                  <td>{row.id}</td>
                  <td className={`num ${flag} ${ok}`}>
                    {isBlank && step < 2 ? (
                      <span className="space" aria-label={locale === "es" ? "un espacio" : "a space"}>
                        &nbsp;
                      </span>
                    ) : (
                      plain(isBlank ? fixedLength : length)
                    )}
                  </td>
                  <td className="num">{row.qty}</td>
                  <td className={`num ${flag} ${ok}`}>{plain(length * row.qty * FACTOR)}</td>
                </tr>
              );
            })}
            <tr className="tot">
              <th className="rn">{laborRows.length + 2}</th>
              <td colSpan={3}>{copy.row_total_hours}</td>
              <td className={`num ${step === 2 ? "is-ok" : ""}`}>{plain(hoursNow)}</td>
            </tr>
            <tr className="tot">
              <th className="rn">{laborRows.length + 3}</th>
              <td colSpan={3}>{copy.row_labor_cost}</td>
              <td className={`num ${step === 2 ? "is-ok" : ""}`}>{money(hoursNow * RATE)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <DemoControls step={step} locale={locale} onAdvance={advance} message={message} />
    </div>
  );
}
