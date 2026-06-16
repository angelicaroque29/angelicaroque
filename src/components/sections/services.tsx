import { ArrowRight, Bot, Globe, Workflow } from "lucide-react";
import { Section } from "@/components/section";
import { featuredServices } from "@/lib/content";

const icons = [Globe, Workflow, Bot];

const accents = {
  blue: {
    bg: "linear-gradient(135deg, #eef2fb 0%, #dde6f8 100%)",
    icon: "#4262c8",
    bar: "linear-gradient(90deg, #3b4fd8, #5b7db8)",
    chip: "bg-[#eef2fb] text-[#3b4fd8]",
    link: "#3b4fd8",
  },
  purple: {
    bg: "linear-gradient(135deg, #f0edf8 0%, #e5dff5 100%)",
    icon: "#7c5cc4",
    bar: "linear-gradient(90deg, #7c5cc4, #a07dd8)",
    chip: "bg-[#f0edf8] text-[#7c5cc4]",
    link: "#7c5cc4",
  },
  teal: {
    bg: "linear-gradient(135deg, #ddf5f1 0%, #c8ede8 100%)",
    icon: "#2a9d8f",
    bar: "linear-gradient(90deg, #2a9d8f, #4bbfb1)",
    chip: "bg-[#ddf5f1] text-[#1f7a6e]",
    link: "#1f7a6e",
  },
} as const;

export function Services() {
  return (
    <Section id="services" flush className="!py-10 lg:!py-14">
      {/* Outer wrapper panel */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e7e2da]/80 bg-[linear-gradient(118deg,rgb(232_228_245_/_0.38),rgb(250_248_243_/_0.82)_48%,rgb(221_245_241_/_0.32))] px-5 py-10 shadow-sm sm:px-8 lg:px-10 lg:py-12">
        {/* Decorative corner grid */}
        <div className="corner-grid right-0 top-6" style={{ width: "10rem", height: "10rem" }} />
        {/* Soft sphere left */}
        <div
          className="pointer-events-none absolute -left-16 top-1/2 size-40 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgb(255 255 255 / 0.9) 0 8%, rgb(197 212 240 / 0.85) 22%, rgb(132 103 255 / 0.35) 54%, transparent 70%)",
          }}
        />
        {/* Thin path bottom */}
        <div className="thin-path -bottom-10 right-12 hidden h-28 w-56 lg:block" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-lg">
              <span className="micro-chip mb-3 inline-flex">Servicios</span>
              <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-[1.1] tracking-tight text-navy">
                La tecnología que tu negocio necesita para crecer.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-[1.8] text-muted-foreground lg:pb-1 lg:text-right">
              Web, automatización y tecnología inteligente para que atiendas más clientes
              sin contratar más personas ni trabajar más horas.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {featuredServices.map((service, i) => {
              const Icon = icons[i];
              const a = accents[service.color];
              return (
                <article
                  key={service.title}
                  className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border border-[#e7e2da] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Colored top accent bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] rounded-t-[1.35rem]"
                    style={{ background: a.bar }}
                  />
                  {/* Subtle deck number */}
                  <span className="pointer-events-none absolute right-5 top-5 font-heading text-5xl font-semibold leading-none" style={{ color: "rgb(30 58 95 / 0.045)" }}>
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className="mb-5 flex size-11 items-center justify-center rounded-xl"
                    style={{ background: a.bg }}
                  >
                    <Icon className="size-5" style={{ color: a.icon }} strokeWidth={1.75} />
                  </div>

                  {/* Tag chip */}
                  <span className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${a.chip}`}>
                    {service.tag}
                  </span>

                  <h3 className="text-base font-semibold text-navy">{service.title}</h3>
                  <p className="mt-1 text-xs font-medium" style={{ color: a.icon }}>{service.headline}</p>
                  <p className="mt-3 flex-1 text-sm leading-[1.75] text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Outcome */}
                  <div className="mt-5 flex items-center justify-between border-t border-[#f0ece6] pt-4">
                    <span className="text-xs font-medium text-muted-foreground">
                      {service.outcome}
                    </span>
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                      style={{ color: a.link }}
                    >
                      Saber más
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
