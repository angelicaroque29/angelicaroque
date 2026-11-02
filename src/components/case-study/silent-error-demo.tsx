"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import data from "../../../content/caso-estudio-estructura/contenido/data.json";
import { routes } from "@/lib/routes";

type Locale = "es" | "en";
type Step = 0 | 1 | 2;

const FACTOR = data.demo.labor.factor_hours_per_ft;
const RATE = data.demo.labor.rate_per_hour;
const laborRows = data.demo.labor.rows;
const phaseCosts = data.demo.phases.rows.map((row) => row.cost);

function money(n: number) {
  return `$${Math.round(n).toLocaleString("en-US")}`;
}

function plain(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

function hours(fixed: boolean) {
  return laborRows.reduce((sum, row) => {
    const length =
      typeof row.length === "number" ? row.length : fixed && typeof row.fixed_length === "number" ? row.fixed_length : 0;
    return sum + length * row.qty * FACTOR;
  }, 0);
}

export function SilentErrorDemo({ locale }: { locale: Locale }) {
  const copy = data.demo[locale];
  const [tab, setTab] = useState<0 | 1>(0);
  const [laborStep, setLaborStep] = useState<Step>(0);
  const [phaseStep, setPhaseStep] = useState<Step>(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (laborStep !== 1) return;
    document.querySelector("#panel-labor td.is-flag")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [laborStep]);

  useEffect(() => {
    if (phaseStep !== 1) return;
    document.querySelector("#panel-phases tr.is-flag")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [phaseStep]);

  const hBad = hours(false);
  const hGood = hours(true);
  const tBad = phaseCosts.slice(0, 3).reduce((a, b) => a + b, 0);
  const tGood = phaseCosts.reduce((a, b) => a + b, 0);
  const fixedRow = laborRows[1];
  const fixedLength = typeof fixedRow.fixed_length === "number" ? fixedRow.fixed_length : 0;

  const [shownHours, setShownHours] = useState(hBad);
  const [shownPhaseTotal, setShownPhaseTotal] = useState(tBad);

  function runCount(from: number, to: number, write: (value: number) => void) {
    if (reduceMotion) {
      write(to);
      return;
    }
    const start = performance.now();
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / 450);
      const eased = 1 - (1 - p) ** 3;
      write(from + (to - from) * eased);
      if (p < 1) window.setTimeout(tick, 32);
    };
    tick();
  }

  const laborMessage = [copy.msg_labor_start, copy.msg_labor_reveal, copy.msg_labor_fix][laborStep];
  const phaseMessage = [copy.msg_phases_start, copy.msg_phases_reveal, copy.msg_phases_fix][phaseStep];
  const laborButton = [copy.btn_reveal, copy.btn_fix, copy.btn_reset][laborStep];
  const phaseButton = [copy.btn_reveal, copy.btn_fix, copy.btn_reset][phaseStep];

  function advanceLabor() {
    const next = ((laborStep + 1) % 3) as Step;
    setLaborStep(next);
    if (next === 2) runCount(hBad, hGood, setShownHours);
    else setShownHours(hBad);
  }

  function advancePhases() {
    const next = ((phaseStep + 1) % 3) as Step;
    setPhaseStep(next);
    if (next === 2) runCount(tBad, tGood, setShownPhaseTotal);
    else setShownPhaseTotal(tBad);
  }

  function onTabKey(event: React.KeyboardEvent, index: 0 | 1) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const resolved = ((index + (event.key === "ArrowRight" ? 1 : 1)) % 2) as 0 | 1;
    setTab(resolved);
    document.getElementById(resolved === 0 ? "tab-labor" : "tab-phases")?.focus();
  }

  const lengthCell =
    laborStep === 2 ? (
      plain(fixedLength)
    ) : (
      <span className="space" aria-label={locale === "es" ? "un espacio" : "a space"}>
        &nbsp;
      </span>
    );

  return (
    <section className="max-w-[960px]" aria-labelledby="demo-title">
      <h3 id="demo-title" className="font-heading text-2xl font-semibold leading-tight">
        {copy.heading}
      </h3>
      <p className="prose-measure mt-1 text-[color:var(--cs-muted)]">{copy.intro}</p>

      <div className="mt-5 grid grid-cols-2 gap-1 border-b border-[color:var(--cs-slab)] pr-16 sm:pr-0" role="tablist">
        {(
          [
            ["tab-labor", copy.tab_labor, 0],
            ["tab-phases", copy.tab_phases, 1],
          ] as const
        ).map(([id, label, index]) => (
          <button
            key={id}
            id={id}
            className="tab -mb-px min-h-12 rounded-t border border-transparent px-3 py-2 text-left text-sm leading-snug text-[color:var(--cs-muted)] aria-selected:border-[color:var(--cs-slab)] aria-selected:border-b-white aria-selected:bg-white aria-selected:font-semibold aria-selected:text-[color:var(--cs-ink)]"
            role="tab"
            type="button"
            aria-selected={tab === index}
            aria-controls={index === 0 ? "panel-labor" : "panel-phases"}
            tabIndex={tab === index ? 0 : -1}
            onClick={() => setTab(index)}
            onKeyDown={(event) => onTabKey(event, index)}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className="border border-t-0 border-[color:var(--cs-slab)] bg-[color:var(--cs-cell)] p-3 sm:p-5"
        role="tabpanel"
        id="panel-labor"
        aria-labelledby="tab-labor"
        hidden={tab !== 0}
      >
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
              <tr>
                <th className="rn">2</th>
                <td>V-1</td>
                <td className="num">24</td>
                <td className="num">6</td>
                <td className="num">72</td>
              </tr>
              <tr>
                <th className="rn">3</th>
                <td>V-2</td>
                <td className={`num ${laborStep === 1 ? "is-flag" : ""} ${laborStep === 2 ? "is-ok" : ""}`}>{lengthCell}</td>
                <td className="num">4</td>
                <td className={`num ${laborStep === 1 ? "is-flag" : ""} ${laborStep === 2 ? "is-ok" : ""}`}>
                  {laborStep === 2 ? plain(fixedLength * fixedRow.qty * FACTOR) : "0"}
                </td>
              </tr>
              <tr>
                <th className="rn">4</th>
                <td>V-3</td>
                <td className="num">18</td>
                <td className="num">8</td>
                <td className="num">72</td>
              </tr>
              <tr>
                <th className="rn">5</th>
                <td>V-4</td>
                <td className="num">30</td>
                <td className="num">2</td>
                <td className="num">30</td>
              </tr>
              <tr className="tot">
                <th className="rn">6</th>
                <td>{copy.row_total_hours}</td>
                <td />
                <td />
                <td className="num" data-build="hours-v3">
                  {plain(laborStep === 2 ? shownHours : hBad)}
                </td>
              </tr>
              <tr className="tot">
                <th className="rn">7</th>
                <td colSpan={3}>{copy.row_labor_cost}</td>
                <td className="num">{money((laborStep === 2 ? shownHours : hBad) * RATE)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col items-stretch gap-3">
          <button
            className="action min-h-12 w-full rounded bg-[color:var(--cs-rebar)] px-4 py-3 text-base font-semibold text-[color:var(--cs-on-rebar)] sm:w-fit"
            type="button"
            onClick={advanceLabor}
          >
            {laborButton}
          </button>
          <p
            className={`m-0 max-w-[60ch] text-base leading-snug ${laborStep === 1 ? "font-semibold text-[color:var(--cs-flag)]" : ""} ${laborStep === 2 ? "text-lg font-semibold text-[color:var(--cs-ok)]" : ""}`}
            aria-live="polite"
          >
            {laborMessage}
          </p>
          {laborStep === 2 ? (
            <Link href={routes.booking} className="btn-primary min-h-12 w-full sm:w-fit">
              {locale === "es" ? data.cta.label_closing_es : data.cta.label_closing_en}
            </Link>
          ) : null}
        </div>
      </div>

      <div
        className="border border-t-0 border-[color:var(--cs-slab)] bg-[color:var(--cs-cell)] p-3 sm:p-5"
        role="tabpanel"
        id="panel-phases"
        aria-labelledby="tab-phases"
        hidden={tab !== 1}
      >
        <div
          className={`fx mb-3 flex items-center gap-2 border px-2.5 py-1.5 text-[0.95rem] ${phaseStep === 1 ? "is-flag" : ""} ${phaseStep === 2 ? "is-ok" : "border-[color:var(--cs-slab)]"}`}
        >
          <b className="font-semibold text-[color:var(--cs-muted)] italic">fx</b>
          <span>{phaseStep === 2 ? copy.formula_phases_good : copy.formula_phases_bad}</span>
        </div>
        <div className="sheet-scroll">
          <table className="sheet">
            <thead>
              <tr>
                <th />
                <th>A</th>
                <th>B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="rn">1</th>
                <td className="font-semibold">{copy.col_phase}</td>
                <td className="num font-semibold">{copy.col_cost}</td>
              </tr>
              {data.demo.phases.rows.map((row, index) => (
                <tr key={row.name_es} className={phaseStep === 1 && row.excluded ? "is-flag" : ""}>
                  <th className="rn">{index + 2}</th>
                  <td>{locale === "es" ? row.name_es : row.name_en}</td>
                  <td className="num">{money(row.cost)}</td>
                </tr>
              ))}
              <tr className="tot">
                <th className="rn">6</th>
                <td>{copy.row_total}</td>
                <td className={`num ${phaseStep === 2 ? "is-ok" : ""}`}>
                  {money(phaseStep === 2 ? shownPhaseTotal : tBad)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col items-stretch gap-3">
          <button
            className="action min-h-12 w-full rounded bg-[color:var(--cs-rebar)] px-4 py-3 text-base font-semibold text-[color:var(--cs-on-rebar)] sm:w-fit"
            type="button"
            onClick={advancePhases}
          >
            {phaseButton}
          </button>
          <p
            className={`m-0 max-w-[60ch] text-base leading-snug ${phaseStep === 1 ? "font-semibold text-[color:var(--cs-flag)]" : ""} ${phaseStep === 2 ? "text-lg font-semibold text-[color:var(--cs-ok)]" : ""}`}
            aria-live="polite"
          >
            {phaseMessage}
          </p>
          {phaseStep === 2 ? (
            <Link href={routes.booking} className="btn-primary min-h-12 w-full sm:w-fit">
              {locale === "es" ? data.cta.label_closing_es : data.cta.label_closing_en}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
