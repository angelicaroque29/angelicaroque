const items = [
  { text: "Páginas Web", dot: "#3b4fd8" },
  { text: "Automatizaciones", dot: "#7c5cc4" },
  { text: "Sistemas Digitales", dot: "#2a9d8f" },
  { text: "Más Clientes", dot: "#3b4fd8" },
  { text: "Menos Trabajo Manual", dot: "#7c5cc4" },
  { text: "Tecnología Simple", dot: "#2a9d8f" },
  { text: "Crece tu Negocio", dot: "#3b4fd8" },
  { text: "Flujos Inteligentes", dot: "#7c5cc4" },
  { text: "Resultados Reales", dot: "#2a9d8f" },
];

// Double for seamless loop
const doubled = [...items, ...items];

export function MarqueeStrip() {
  return (
    <div
      className="w-full overflow-hidden border-y border-[#e7e2da]/60 bg-white/50 py-3.5 backdrop-blur-sm"
      aria-hidden
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-2.5 px-6 text-[11px] font-semibold tracking-[0.14em] text-navy/60 uppercase"
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: item.dot }}
            />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
