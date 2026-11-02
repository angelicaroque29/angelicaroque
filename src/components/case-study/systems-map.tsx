type SystemsMapProps = {
  locale: "es" | "en";
};

const copy = {
  es: {
    title: "Sistemas antes y hacia dónde vamos",
    desc: "Antes: estimación, control de costos, pagos a subcontratistas y producción en archivos separados, conectados copiando y pegando, con varias copias de la plantilla. Hacia dónde vamos: los cuatro conectados por un mismo ID de cliente y proyecto.",
    before: "Antes",
    estimating: "Estimación",
    cost: "Control de costos",
    payments: "Pagos a subcontratistas",
    production: "Producción",
    which: "¿Cuál copia es la oficial?",
    paste: "Copiar y pegar a mano",
    after: "Hacia dónde vamos",
    spine: "Un ID por cliente y proyecto",
  },
  en: {
    title: "Systems before and where they are heading",
    desc: "Before: estimating, cost control, subcontractor payments and production in separate files, connected by copy and paste, with several copies of the template. Where it is heading: all four connected by one customer and project ID.",
    before: "Before",
    estimating: "Estimating",
    cost: "Cost control",
    payments: "Subcontractor payments",
    production: "Production",
    which: "Which copy is official?",
    paste: "Copied and pasted by hand",
    after: "Where it's heading",
    spine: "One ID per customer and project",
  },
} as const;

export function SystemsMap({ locale }: SystemsMapProps) {
  const t = copy[locale];
  const titleId = `systems-map-title-${locale}`;
  const descId = `systems-map-desc-${locale}`;

  const before = [t.estimating, t.cost, t.payments, t.production];

  return (
    <figure>
      <div className="md:hidden" role="img" aria-labelledby={`${titleId} ${descId}`}>
        <p id={titleId} className="text-base font-bold text-[color:var(--cs-muted)]">
          {t.before}
        </p>
        <ul className="mt-3 space-y-2">
          {before.map((label) => (
            <li key={label} className="border-2 border-[color:var(--cs-ink)] bg-[color:var(--cs-cell)] px-3 py-3 text-base font-semibold">
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[0.95rem] font-medium text-[color:var(--cs-flag)]">{t.which}</p>
        <p className="mt-1 text-[0.95rem] font-medium text-[color:var(--cs-flag)]">{t.paste}</p>
        <p className="mt-8 text-base font-bold text-[color:var(--cs-muted)]">{t.after}</p>
        <ul className="mt-3 space-y-2">
          {[t.estimating, t.cost].map((label) => (
            <li key={`after-${label}`} className="border-2 border-[color:var(--cs-ink)] bg-[color:var(--cs-cell)] px-3 py-3 text-base font-semibold">
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-2 bg-[color:var(--cs-rebar)] px-3 py-3 text-center text-base font-bold text-[color:var(--cs-on-rebar)]">{t.spine}</p>
        <ul className="mt-2 space-y-2">
          {[t.payments, t.production].map((label) => (
            <li key={`after-b-${label}`} className="border-2 border-[color:var(--cs-ink)] bg-[color:var(--cs-cell)] px-3 py-3 text-base font-semibold">
              {label}
            </li>
          ))}
        </ul>
        <p id={descId} className="sr-only">
          {t.desc}
        </p>
      </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 672"
      role="img"
      aria-labelledby={`${titleId}-wide ${descId}-wide`}
      className="hidden h-auto w-full max-w-[640px] md:block"
    >
      <title id={`${titleId}-wide`}>{t.title}</title>
      <desc id={`${descId}-wide`}>{t.desc}</desc>
      <text fill="var(--cs-muted)" fontSize="20" fontWeight="700" x="24" y="36">
        {t.before}
      </text>
      <rect fill="var(--cs-cell)" stroke="var(--cs-slab)" strokeWidth="2" x="36" y="58" width="272" height="64" rx="4" />
      <rect fill="var(--cs-cell)" stroke="var(--cs-slab)" strokeWidth="2" x="30" y="64" width="272" height="64" rx="4" />
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="24" y="70" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="160" y="109" textAnchor="middle">
        {t.estimating}
      </text>
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="344" y="70" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="480" y="109" textAnchor="middle">
        {t.cost}
      </text>
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="24" y="200" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="160" y="239" textAnchor="middle">
        {t.payments}
      </text>
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="344" y="200" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="480" y="239" textAnchor="middle">
        {t.production}
      </text>
      <line stroke="var(--cs-flag)" strokeWidth="2.5" strokeDasharray="8 6" x1="296" y1="102" x2="344" y2="102" />
      <line stroke="var(--cs-flag)" strokeWidth="2.5" strokeDasharray="8 6" x1="160" y1="134" x2="160" y2="200" />
      <line stroke="var(--cs-flag)" strokeWidth="2.5" strokeDasharray="8 6" x1="480" y1="134" x2="480" y2="200" />
      <text fill="var(--cs-flag)" fontSize="16" fontWeight="500" x="176" y="173">
        {t.which}
      </text>
      <line stroke="var(--cs-flag)" strokeWidth="2.5" strokeDasharray="8 6" x1="24" y1="298" x2="64" y2="298" />
      <text fill="var(--cs-flag)" fontSize="16" fontWeight="500" x="76" y="304">
        {t.paste}
      </text>
      <text fill="var(--cs-muted)" fontSize="20" fontWeight="700" x="24" y="380">
        {t.after}
      </text>
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="24" y="400" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="160" y="439" textAnchor="middle">
        {t.estimating}
      </text>
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="344" y="400" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="480" y="439" textAnchor="middle">
        {t.cost}
      </text>
      <line stroke="var(--cs-rebar)" strokeWidth="3" x1="160" y1="464" x2="160" y2="500" />
      <line stroke="var(--cs-rebar)" strokeWidth="3" x1="480" y1="464" x2="480" y2="500" />
      <rect fill="var(--cs-rebar)" x="24" y="500" width="592" height="48" rx="4" />
      <text fill="var(--cs-on-rebar)" fontSize="20" fontWeight="700" x="320" y="531" textAnchor="middle">
        {t.spine}
      </text>
      <line stroke="var(--cs-rebar)" strokeWidth="3" x1="160" y1="548" x2="160" y2="584" />
      <line stroke="var(--cs-rebar)" strokeWidth="3" x1="480" y1="548" x2="480" y2="584" />
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="24" y="584" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="160" y="623" textAnchor="middle">
        {t.payments}
      </text>
      <rect fill="var(--cs-cell)" stroke="var(--cs-ink)" strokeWidth="2" x="344" y="584" width="272" height="64" rx="4" />
      <text fill="var(--cs-ink)" fontSize="20" fontWeight="600" x="480" y="623" textAnchor="middle">
        {t.production}
      </text>
    </svg>
    </figure>
  );
}
