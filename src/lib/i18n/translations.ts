import type { Locale } from "@/lib/i18n/types";

const es = {
    nav: {
      links: [
        { label: "Inicio", href: "#hero" },
        { label: "Servicios", href: "#services" },
        { label: "Paquetes", href: "#packages" },
        { label: "Sobre mí", href: "#about" },
        { label: "Contacto", href: "#contact" },
      ],
      cta: "Agendar cita",
      openMenu: "Menú",
      closeMenu: "Cerrar",
    },
    hero: {
      chip: "AngieInTech · Miami · Software Engineer",
      title: "Tecnología simple para negocios que",
      titleHighlight: "quieren crecer.",
      subtitle:
        "Construyo páginas web, automatizaciones y sistemas digitales para ayudarte a conseguir más clientes, ahorrar tiempo y trabajar con más claridad.",
      outcomes: [
        "Más clientes sin trabajar más",
        "Operación que corre sola",
        "Tecnología que realmente funciona",
      ],
      primaryCta: "Agenda tu llamada gratis",
      secondaryCta: "Ver servicios",
      stats: [
        { label: "Software Engineer @ AmEx", detail: "Full-time role" },
        { label: "Real client projects", detail: "Healthcare & services" },
        { label: "English & Spanish", detail: "Bilingual support" },
        { label: "Based in Miami", detail: "Local & remote" },
      ],
      highlights: [
        { title: "Automatizaciones", label: "que te ahorran tiempo" },
        { title: "Sistemas con IA", label: "que trabajan por ti" },
        { title: "Websites que venden", label: "los 7 días de la semana" },
      ],
    },
    marquee: [
      "Páginas Web",
      "Automatizaciones",
      "Sistemas Digitales",
      "Más Clientes",
      "Menos Trabajo Manual",
      "Tecnología Simple",
      "Crece tu Negocio",
      "Flujos Inteligentes",
      "Resultados Reales",
    ],
    services: {
      label: "Servicios",
      title: "La tecnología que tu negocio necesita para crecer.",
      subtitle:
        "Web, automatización y tecnología inteligente para que atiendas más clientes sin contratar más personas ni trabajar más horas.",
      learnMore: "Saber más",
      items: [
        {
          tag: "Presencia digital",
          title: "Páginas Web",
          headline: "Tu negocio trabaja aunque no estés.",
          description:
            "Sitio profesional que presenta tu oferta, captura leads y convierte visitas en clientes, las 24 horas, sin que tengas que perseguir a nadie.",
          outcome: "Más clientes sin esfuerzo extra",
        },
        {
          tag: "Automatización",
          title: "Automatizaciones",
          headline: "Deja de hacer lo mismo una y otra vez.",
          description:
            "Conecto tu agenda, formularios, pagos y seguimiento para que el flujo de cliente funcione solo. Tú te enfocas en crecer.",
          outcome: "Horas libres para lo que importa",
        },
        {
          tag: "Sistemas & IA",
          title: "Sistemas a tu medida",
          headline: "Infraestructura que escala contigo.",
          description:
            "Portales, dashboards y sistemas inteligentes para que tu equipo tome mejores decisiones, atienda más rápido y no dependa de hojas de Excel.",
          outcome: "Operación organizada que escala",
        },
      ],
    },
    packages: {
      label: "Paquetes",
      title: "Elige el plan que le conviene a tu negocio.",
      subtitle:
        "Desde automatizar lo urgente hasta construir un sistema con IA a tu medida. La mayoría empieza en Starter o Growth.",
      discovery: {
        prefix: "Antes de proyectos grandes ·",
        name: "Diagnóstico digital",
        description:
          "Recomendado antes de proyectos grandes. Sabes exactamente qué se va a hacer, cuánto cuesta y en cuánto tiempo, antes de pagar el proyecto completo.",
        cta: "Empezar",
      },
      retainer: {
        label: "Mensual · Máx. 2 negocios · unas 8 hrs/mes",
        name: "Acompañamiento mensual",
        from: "desde",
        suffix: "/mes",
        description:
          "Reviso que las automatizaciones sigan funcionando, optimizo flujos y agrego mejoras incrementales.",
        cta: "Hablar del acompañamiento",
      },
      note: "Trabajo con pocos clientes a la vez para dar foco real. Las herramientas mensuales van a tu nombre y suelen costar ~$15–30/mes.",
      ui: {
        mostPopular: "Más popular",
        from: "desde",
        includes: "Incluye",
        notIncluded: "No incluye",
        ongoing: "Mensual",
      },
      items: [
        {
          name: "Operación Automatizada",
          tier: "Starter",
          price: "$1,800",
          priceRange: "– $2,800",
          pricePrefix: null as string | null,
          audience: "Para negocios que quieren empezar a automatizar",
          bestFor: "Ordena tu operación sin rehacer todo",
          description:
            "Automatizo los flujos que más te quitan tiempo: captura de clientes, agenda, seguimiento y reportes automáticos.",
          features: [
            "Formularios y flujos de ingreso de clientes automatizados",
            "Agenda en línea con recordatorios y confirmaciones",
            "Hoja de seguimiento: quién entró, quién avanzó, quién pagó",
            "Automatizaciones en los canales donde ya operas (web, email, redes)",
          ],
          includes: "Hasta 3 canales + formularios + 1 sistema de seguimiento",
          excludes: "Página web nueva completa, logo/branding, funciones a medida complejas",
          highlighted: false,
        },
        {
          name: "Negocio Digital Completo",
          tier: "Growth",
          price: "$3,200",
          priceRange: "– $5,000",
          pricePrefix: null as string | null,
          audience: "Para negocios listos para escalar con sistemas",
          bestFor: "Web profesional + operación conectada de punta a punta",
          description:
            "Web profesional, Google optimizado y toda la operación conectada: desde el primer contacto hasta el cliente pagado.",
          features: [
            "Página web profesional (nueva o mejora seria de la actual)",
            "Perfil de Google optimizado + pedir reseñas después del servicio",
            "Formulario de ingreso del cliente (datos, preferencias, plazos)",
            "Links de pago conectados a tu seguimiento de clientes",
          ],
          includes: "Web + 3 canales + un solo sistema de seguimiento",
          excludes: null as string | null,
          highlighted: true,
        },
        {
          name: "Sistema a Tu Medida",
          tier: "Enterprise",
          price: "desde $6,000",
          priceRange: "",
          pricePrefix: null as string | null,
          audience: "Para negocios que necesitan una solución propia a medida",
          bestFor: "Cuando Excel y apps sueltas ya no alcanzan",
          description:
            "Herramienta o sistema completamente personalizado, construido para tu operación exacta.",
          features: [
            "Portal donde el cliente ve su proyecto, archivos y aprobaciones",
            "Panel interno con números, clientes y entregas",
            "Conexión entre agenda, pagos, email y seguimiento de clientes",
            "Primera versión de producto o app para probar con usuarios reales",
          ],
          includes: "Alcance definido en el diagnóstico, precio según lo que necesites",
          excludes: null as string | null,
          highlighted: false,
        },
      ],
      discoveryMeta: { timeline: "3–5 días", price: "$450–$650" },
      retainerMeta: { price: "$500", priceRange: "– $900" },
      retainerFeatures: [
        "Revisión y mejora de automatizaciones existentes",
        "Nuevos flujos para campañas o procesos que surjan",
        "Ajustes de formularios, seguimiento y reportes",
        "Resumen mensual: qué funciona, qué duele, qué mejorar",
        "Prioridad en mi agenda (no disponible 24/7)",
      ],
    },
    booking: {
      label: "Agenda",
      title: "Elige cómo quieres empezar.",
      subtitle:
        "No necesitas saber exactamente qué necesitas. La mayoría empieza con la llamada gratis y desde ahí definimos el plan.",
      region: "Negocios en Miami, EEUU y LATAM",
      mostPopular: "Más popular",
      showCalendar: "Ver todos los horarios disponibles",
      hideCalendar: "Ocultar calendario",
      calendarTitle: "Todos los tipos de cita disponibles",
      openCalendar: "Abrir en nueva pestaña",
      footer: "Primera llamada siempre gratis · sin compromiso · sales con claridad",
      whatsapp: "¿Prefieres WhatsApp?",
      options: [
        {
          id: "free",
          badge: "Gratis",
          label: "Llamada de descubrimiento",
          price: "20 min · Sin costo",
          description: "Cuéntame tu negocio. Te digo exactamente qué puedo hacer por ti y cómo.",
          cta: "Reservar ahora",
          perks: ["Sin compromiso", "Sales con un plan claro", "Respuesta en 24h"],
          featured: true,
        },
        {
          id: "consult",
          badge: "Estrategia",
          label: "Sesión de estrategia",
          price: "desde $75",
          description:
            "Una sesión enfocada para priorizar qué mejorar primero en tu operación y cómo crecer.",
          cta: "Agendar sesión",
          perks: ["30 o 60 minutos", "Plan de acción escrito", "Estimado de inversión"],
          featured: false,
        },
        {
          id: "project",
          badge: "Implementación",
          label: "Quiero un proyecto",
          price: "desde $1,800",
          description:
            "Listo para construir. Empezamos con la llamada gratis para definir alcance, precio y plazos.",
          cta: "Empezar aquí",
          perks: ["Web, automatización o sistema", "Propuesta por escrito", "Precio y plazos claros"],
          featured: false,
        },
      ],
    },
    about: {
      label: "Founder-led studio",
      title: "Sobre mí",
      paragraph1:
        "Soy Angelica Roque, ingeniera de software en Miami y fundadora de AngieInTech. Ayudo a negocios a automatizar lo que más duele en su operación diaria.",
      paragraph2:
        "De día, American Express. Para clientes: webs, automatizaciones y herramientas que devuelven tiempo y control.",
      principles: ["Simple antes que complejo", "Control humano", "Hecho para tu operación"],
      experience: [
        "Ingeniera de software en American Express",
        "Automatizaciones, reportes y herramientas internas",
        "Licenciatura en Digital Arts & Sciences + Computer Science",
        "Bilingüe: inglés y español",
        "Webs, sistemas y flujos para negocios en Miami",
      ],
      cta: "Agendar cita",
    },
    ctaBanner: {
      label: "¿Lista para empezar?",
      title: "Tu negocio merece crecer con tecnología",
      titleHighlight: "que realmente funciona.",
      subtitle:
        "Agenda la llamada gratis de 20 min. Te digo exactamente qué puedo construirte para que atiendas más clientes sin trabajar el doble.",
      perks: ["Llamada gratis de 20 min", "Sin compromiso", "Sales con un plan claro"],
      cta: "Agendar llamada gratis",
    },
    footer: {
      tagline:
        "Transformo el caos manual en sistemas que trabajan por ti. Webs, automatizaciones e IA para pequeños negocios.",
      navigation: "Navegación",
      services: "Servicios",
      legal: "Legal",
      connect: "Conecta conmigo",
      rights: "Todos los derechos reservados.",
      serviceLinks: [
        { label: "Páginas Web", href: "#services" },
        { label: "Automatizaciones", href: "#services" },
        { label: "Sistemas con IA", href: "#services" },
      ],
      legalLinks: [
        { label: "Política de privacidad", href: "#" },
        { label: "Términos de servicio", href: "#" },
      ],
    },
} as const;

const en = {
    nav: {
      links: [
        { label: "Home", href: "#hero" },
        { label: "Services", href: "#services" },
        { label: "Packages", href: "#packages" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Book a call",
      openMenu: "Menu",
      closeMenu: "Close",
    },
    hero: {
      chip: "AngieInTech · Miami · Software Engineer",
      title: "Simple systems that help small businesses",
      titleHighlight: "get more clients.",
      subtitle:
        "I build websites, automations, and AI-powered workflows that help service businesses save time, capture leads, and operate with more clarity.",
      outcomes: [
        "More clients without working more",
        "Operations that run on their own",
        "Technology that actually works",
      ],
      primaryCta: "Book a free call",
      secondaryCta: "View services",
      stats: [
        { label: "Software Engineer @ AmEx", detail: "Full-time role" },
        { label: "Real client projects", detail: "Healthcare & services" },
        { label: "English & Spanish", detail: "Bilingual support" },
        { label: "Based in Miami", detail: "Local & remote" },
      ],
      highlights: [
        { title: "Automations", label: "that save you time" },
        { title: "AI systems", label: "that work for you" },
        { title: "Websites that sell", label: "7 days a week" },
      ],
    },
    marquee: [
      "Websites",
      "Automations",
      "Digital Systems",
      "More Clients",
      "Less Manual Work",
      "Simple Technology",
      "Grow Your Business",
      "Smart Workflows",
      "Real Results",
    ],
    services: {
      label: "Services",
      title: "The technology your business needs to grow.",
      subtitle:
        "Websites, automation, and smart systems so you can serve more clients without hiring more people or working longer hours.",
      learnMore: "Learn more",
      items: [
        {
          tag: "Digital presence",
          title: "Websites",
          headline: "Your business works even when you're not.",
          description:
            "A professional site that presents your offer, captures leads, and turns visits into clients around the clock without you chasing anyone.",
          outcome: "More clients without extra effort",
        },
        {
          tag: "Automation",
          title: "Automations",
          headline: "Stop doing the same thing over and over.",
          description:
            "I connect your calendar, forms, payments, and follow-up so your client flow runs on its own while you focus on growth.",
          outcome: "Hours back for what matters",
        },
        {
          tag: "Systems & AI",
          title: "Custom systems",
          headline: "Infrastructure that scales with you.",
          description:
            "Portals, dashboards, and smart systems so your team makes better decisions, responds faster, and stops relying on spreadsheets.",
          outcome: "Organized operations that scale",
        },
      ],
    },
    packages: {
      label: "Packages",
      title: "Choose the plan that fits your business.",
      subtitle:
        "From automating what's urgent to building a custom AI-powered system. Most clients start with Starter or Growth.",
      discovery: {
        prefix: "Before large projects ·",
        name: "Digital diagnosis",
        description:
          "Recommended before large projects. You'll know exactly what will be done, how much it costs, and how long it takes before paying for the full project.",
        cta: "Get started",
      },
      retainer: {
        label: "Monthly · Max 2 businesses · ~8 hrs/month",
        name: "Monthly support",
        from: "from",
        suffix: "/mo",
        description:
          "I make sure automations keep working, optimize flows, and add incremental improvements.",
        cta: "Discuss ongoing support",
      },
      note: "I work with a small number of clients at a time so each project gets real focus. Monthly tool costs usually run about $15–30 and stay in your name.",
      ui: {
        mostPopular: "Most popular",
        from: "from",
        includes: "Includes",
        notIncluded: "Not included",
        ongoing: "Monthly",
      },
      items: [
        {
          name: "Automated Operations",
          tier: "Starter",
          price: "$1,800",
          priceRange: "– $2,800",
          pricePrefix: null as string | null,
          audience: "For businesses ready to start automating",
          bestFor: "Organize your operations without rebuilding everything",
          description:
            "I automate the flows that cost you the most time: client intake, scheduling, follow-up, and reporting.",
          features: [
            "Automated client intake forms and flows",
            "Online scheduling with reminders and confirmations",
            "Tracking sheet: who came in, who moved forward, who paid",
            "Automations across the channels you already use (web, email, social)",
          ],
          includes: "Up to 3 channels + forms + 1 tracking system",
          excludes: "Full new website, logo/branding, complex custom features",
          highlighted: false,
        },
        {
          name: "Complete Digital Business",
          tier: "Growth",
          price: "$3,200",
          priceRange: "– $5,000",
          pricePrefix: null as string | null,
          audience: "For businesses ready to scale with systems",
          bestFor: "Professional website + connected operations end to end",
          description:
            "Professional website, optimized Google presence, and connected operations from first contact to paid client.",
          features: [
            "Professional website (new or major upgrade)",
            "Optimized Google profile + review requests after service",
            "Client intake form (details, preferences, timelines)",
            "Payment links connected to your client tracking",
          ],
          includes: "Website + 3 channels + one tracking system",
          excludes: null as string | null,
          highlighted: true,
        },
        {
          name: "Custom System",
          tier: "Enterprise",
          price: "from $6,000",
          priceRange: "",
          pricePrefix: null as string | null,
          audience: "For businesses that need a solution built for them",
          bestFor: "When spreadsheets and separate apps are no longer enough",
          description:
            "A fully custom tool or system built for exactly how you operate.",
          features: [
            "Client portal for projects, files, and approvals",
            "Internal dashboard for numbers, clients, and deliverables",
            "Connection between calendar, payments, email, and client tracking",
            "First version of a product or app to test with real users",
          ],
          includes: "Scope defined in diagnosis, price based on what you need",
          excludes: null as string | null,
          highlighted: false,
        },
      ],
      discoveryMeta: { timeline: "3–5 days", price: "$450–$650" },
      retainerMeta: { price: "$500", priceRange: "– $900" },
      retainerFeatures: [
        "Review and improve existing automations",
        "New flows for campaigns or processes that come up",
        "Adjustments to forms, tracking, and reports",
        "Monthly summary: what works, what hurts, what to improve",
        "Priority on my calendar (not available 24/7)",
      ],
    },
    booking: {
      label: "Book",
      title: "Choose how you want to start",
      subtitle:
        "You don't need to know exactly what you need yet. Most clients start with the free call and we figure out the plan from there.",
      region: "Businesses in Miami, US & LATAM",
      mostPopular: "Most popular",
      showCalendar: "View all available times",
      hideCalendar: "Hide calendar",
      calendarTitle: "All available appointment types",
      openCalendar: "Open in new tab",
      footer: "First call is always free · no pressure · you leave with clarity",
      whatsapp: "Prefer WhatsApp?",
      options: [
        {
          id: "free",
          badge: "Free",
          label: "Discovery call",
          price: "20 min · No cost",
          description: "Tell me about your business. I'll tell you exactly what I can build and how.",
          cta: "Book now",
          perks: ["No commitment", "Leave with a clear plan", "Reply within 24 hours"],
          featured: true,
        },
        {
          id: "consult",
          badge: "Strategy",
          label: "Strategy session",
          price: "from $75",
          description:
            "A focused session to prioritize what to improve first in your operations and how to grow.",
          cta: "Book session",
          perks: ["30 or 60 minutes", "Written action plan", "Investment estimate"],
          featured: false,
        },
        {
          id: "project",
          badge: "Build",
          label: "Ready for a project",
          price: "from $1,800",
          description:
            "Ready to build. We start with the free call to define scope, price, and timeline.",
          cta: "Start here",
          perks: ["Website, automation, or system", "Written proposal", "Clear price and timeline"],
          featured: false,
        },
      ],
    },
    about: {
      label: "Founder-led studio",
      title: "About me",
      paragraph1:
        "I'm Angelica Roque, a software engineer in Miami and founder of AngieInTech. I help businesses automate what hurts most in their daily operations.",
      paragraph2:
        "By day, American Express. For clients: websites, automations, and tools that give you back time and control.",
      principles: ["Simple before complex", "Human in the loop", "Built for how you work"],
      experience: [
        "Software engineer at American Express",
        "Automations, reporting, and internal tools",
        "BS in Digital Arts & Sciences + Computer Science",
        "Bilingual: English and Spanish",
        "Websites, systems, and workflows for Miami businesses",
      ],
      cta: "Book a call",
    },
    ctaBanner: {
      label: "Ready to start?",
      title: "Your business deserves to grow with technology",
      titleHighlight: "that actually works.",
      subtitle:
        "Book the free 20-minute call. I'll tell you exactly what I can build so you can serve more clients without working twice as hard.",
      perks: ["Free 20-minute call", "No commitment", "Leave with a clear plan"],
      cta: "Book a free call",
    },
    footer: {
      tagline:
        "I turn manual chaos into systems that work for you. Websites, automations, and AI for small businesses.",
      navigation: "Navigation",
      services: "Services",
      legal: "Legal",
      connect: "Connect",
      rights: "All rights reserved.",
      serviceLinks: [
        { label: "Websites", href: "#services" },
        { label: "Automations", href: "#services" },
        { label: "AI Systems", href: "#services" },
      ],
      legalLinks: [
        { label: "Privacy policy", href: "#" },
        { label: "Terms of service", href: "#" },
      ],
    },
} as const;

export type SiteTranslations = (typeof translations)[Locale];

export const translations = {
  es,
  en,
} as const;
