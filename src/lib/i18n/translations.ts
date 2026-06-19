import type { Locale } from "@/lib/i18n/types";

const es = {
    nav: {
      links: [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/#services" },
        { label: "Sobre mí", href: "/about" },
        { label: "Agenda", href: "/booking" },
      ],
      mobile: {
        home: "Inicio",
        services: "Servicios",
        about: "Sobre mí",
        book: "Agenda",
      },
      cta: "Agendar cita",
      openMenu: "Menú",
      closeMenu: "Cerrar",
      talkCta: "Hablemos",
    },
    hero: {
      chip: "AngieInTech · Miami · Software Engineer",
      greeting: "Hola, soy",
      name: "ANGÉLICA",
      title: "Consulto contigo y construyo sistemas con",
      titleHighlight: "IA y tecnología.",
      subtitle:
        "Ingeniera de software con maestría en Computer Science. Convierto el trabajo manual en webs, automatizaciones, dashboards y sistemas con IA que te ayudan a ahorrar tiempo, organizarte y crecer.",
      outcomes: [
        "Primera llamada gratis · 20 min",
        "Sistemas hechos a tu operación",
        "De la idea al lanzamiento",
      ],
      primaryCta: "Agenda tu primera llamada gratis",
      secondaryCta: "Ver servicios",
      freeCallNote: "Primera llamada gratis · 20 min",
      stats: [
        { label: "Software Engineer @ AmEx", detail: "Full-time role" },
        { label: "Real client projects", detail: "Healthcare & services" },
        { label: "English & Spanish", detail: "Bilingual support" },
        { label: "Based in Miami", detail: "Local & remote" },
      ],
      highlights: [
        { title: "Auditoría de sistemas", label: "desde $150" },
        { title: "Sistema inicial", label: "desde $500" },
        { title: "Automatización con IA", label: "desde $2,500" },
      ],
    },
    marquee: [
      "Consultas con IA",
      "Webs Profesionales",
      "Automatización",
      "Sistemas a Medida",
      "Más Clientes",
      "Menos Trabajo Manual",
      "Tecnología Simple",
      "Construcción Real",
      "Resultados Reales",
    ],
    services: {
      label: "Servicios y precios",
      title: "Sistemas simples para que tu negocio funcione mejor.",
      subtitle:
        "Ayudo a negocios pequeños a reemplazar el trabajo manual caótico con sistemas digitales claros que mejoran cómo manejas clientes, operaciones, ventas y flujos de trabajo.",
      pricingNote:
        "Cada negocio es diferente. El precio depende de la complejidad del flujo, herramientas necesarias, integraciones y nivel de personalización. Empieza con una Auditoría de Sistemas si no estás seguro de qué necesita tu negocio.",
      freeCallNote: "Primera llamada gratis · 20 min",
      includesLabel: "Puede incluir",
      buildsLabel: "Sistemas que construyo",
      auditFeaturedLabel: "Empieza aquí",
      premiumLabel: "Oferta premium",
      customLabel: "A medida",
      audit: {
        id: "audit" as const,
        price: "desde $150",
        title: "Auditoría de Sistemas de Negocio",
        description:
          "Reviso tu flujo actual y te muestro dónde tu negocio pierde tiempo, leads o claridad, y qué arreglar primero.",
        includes: [
          "Revisión de flujos",
          "Recomendaciones de sistemas",
          "Sugerencias de herramientas",
          "Ideas de automatización",
          "Mapeo de procesos",
          "Plan de acción simple",
          "Roadmap de prioridades",
        ],
        cta: "Agendar auditoría",
      },
      offers: [
        {
          id: "starter" as const,
          price: "desde $500",
          title: "Configuración de sistema inicial",
          description:
            "Una configuración simple para que tu negocio se vea más organizado y una parte de tu proceso sea más fácil de manejar.",
          includes: [
            "Formulario de contacto",
            "Configuración de link de reservas",
            "Tracker básico de leads",
            "Automatización simple",
            "Configuración de respuestas por email",
            "Actualizaciones básicas de web o landing",
          ],
          cta: "Empezar pequeño",
        },
        {
          id: "intake" as const,
          price: "desde $750",
          title: "Sistemas de experiencia del cliente",
          description:
            "Construyo sistemas que organizan el recorrido del cliente desde el primer mensaje hasta el cliente reservado, para que se pierdan menos leads.",
          includes: [
            "Formularios de clientes",
            "Flujos de reservas",
            "Trackers de leads",
            "Respuestas automáticas",
            "Recordatorios de seguimiento",
            "Onboarding de clientes",
            "Organización tipo CRM",
            "Flujos de comunicación con clientes",
          ],
          cta: "Construir mi sistema de clientes",
        },
        {
          id: "dashboard" as const,
          price: "desde $1,500",
          title: "Sistemas de operaciones del negocio",
          description:
            "Construyo dashboards, herramientas internas y flujos que hacen el negocio más fácil de manejar sin saltar entre varias apps.",
          includes: [
            "Dashboards a medida",
            "Paneles de administración",
            "Trackers de proyectos",
            "Flujos de tareas",
            "Seguimiento de ingresos",
            "Bases de datos de clientes",
            "Herramientas de reportes",
            "Integraciones de herramientas",
            "Flujos internos",
          ],
          cta: "Crear mi sistema de operaciones",
        },
        {
          id: "proposals" as const,
          tier: "premium" as const,
          price: "desde $2,500",
          title: "Automatización de ventas y flujos con IA",
          description:
            "Construyo sistemas con IA que automatizan trabajo repetitivo mientras tú mantienes el control del resultado final.",
          includes: [
            "Generadores de propuestas",
            "Sistemas de cotizaciones",
            "Respuestas asistidas por IA",
            "Flujos de recomendación de productos o servicios",
            "Generación de documentos",
            "Seguimiento de ventas",
            "Flujos de soporte al cliente",
            "Flujos de pago",
            "Flujos de aprobación",
          ],
          cta: "Automatizar mi flujo",
        },
        {
          id: "custom" as const,
          tier: "custom" as const,
          price: "Precio personalizado",
          title: "Software con IA / herramienta interna a medida",
          description:
            "Para negocios que necesitan una herramienta interna, sistema con IA, dashboard, portal o software a medida diseñado para su proceso específico.",
          includes: [
            "Herramientas con IA a medida",
            "Software interno de negocio",
            "Portales de clientes",
            "Dashboards de administración",
            "Agentes de IA",
            "Sistemas de procesamiento de documentos",
            "Integraciones personalizadas",
            "Desarrollo de MVP",
          ],
          cta: "Solicitar cotización",
        },
      ],
      howItWorks: {
        title: "Cómo funciona",
        steps: [
          {
            title: "Auditamos tu flujo",
            description:
              "Vemos cómo tu negocio maneja hoy leads, clientes, seguimientos, propuestas y tareas diarias.",
          },
          {
            title: "Diseñamos el sistema",
            description: "Mapeo el mejor sistema para tu negocio.",
          },
          {
            title: "Construimos + conectamos",
            description:
              "Creo los formularios, dashboards, automatizaciones y piezas web necesarias.",
          },
          {
            title: "Lanzamos + refinamos",
            description:
              "Probamos todo y nos aseguramos de que encaje con cómo realmente trabajas.",
          },
        ],
      },
      finalCta: {
        title: "¿No sabes qué necesita tu negocio?",
        text: "Empieza con una Auditoría de Sistemas de Negocio. Reviso tu proceso actual, te muestro dónde pierdes tiempo o leads y recomiendo el mejor sistema para construir primero.",
        cta: "Agendar auditoría",
      },
    },
    booking: {
      label: "Agenda",
      title: "Reserva tu cita.",
      subtitle: "Empieza con la primera llamada gratis de 20 min, o agenda una auditoría o proyecto si ya sabes qué necesitas.",
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
          label: "Primera llamada",
          price: "20 min · Sin costo",
          description:
            "Cuéntame tu negocio. Vemos dónde pierdes tiempo o leads, qué sistema encaja y cuál es el siguiente paso. Sin presión.",
          cta: "Reservar llamada gratis",
          perks: ["Sin compromiso", "20 minutos", "Respuesta en 24h"],
          featured: true,
        },
        {
          id: "audit",
          badge: "Auditoría",
          label: "Auditoría de Sistemas de Negocio",
          price: "desde $150",
          description:
            "Revisión profunda de tu flujo con plan de acción, recomendaciones de herramientas e ideas de automatización.",
          cta: "Agendar auditoría",
          perks: ["Plan de acción claro", "Roadmap de prioridades", "Recomendaciones concretas"],
          featured: false,
        },
        {
          id: "project",
          badge: "Construcción",
          label: "Listo para construir un sistema",
          price: "desde $500+",
          description:
            "Ya sabes qué necesitas. Definimos alcance, precio y plazos para tu sistema inicial, captación, dashboard o automatización.",
          cta: "Empezar proyecto",
          perks: ["Propuesta por escrito", "Precio y plazos claros", "De la idea al lanzamiento"],
          featured: false,
        },
      ],
    },
    about: {
      label: "Founder-led studio",
      title: "Sobre mí",
      paragraph1:
        "Soy Angelica Roque, fundadora de AngieInTech e ingeniera de software en Miami. Ayudo a negocios de servicios a verse más profesionales, captar clientes y organizar su operación sin más caos manual.",
      paragraph2:
        "Maestría en Computer Science. Construyo webs, automatizaciones y sistemas que devuelven tiempo, claridad y control, contigo de cerca, desde la idea hasta el lanzamiento.",
      principles: ["Simple antes que complejo", "Control humano", "Hecho para tu operación"],
      experience: [
        "Maestría en Computer Science",
        "Webs, automatizaciones y sistemas para negocios",
        "Licenciatura en Digital Arts & Sciences + Computer Science",
        "Bilingüe: inglés y español",
        "Basada en Miami · clientes locales y remotos",
      ],
      cta: "Agendar cita",
    },
    ctaBanner: {
      label: "¿Lista para empezar?",
      title: "Tu negocio merece crecer con tecnología",
      titleHighlight: "que realmente funciona.",
      subtitle:
        "Empieza con una Auditoría de Sistemas y te muestro qué arreglar primero, o agenda tu primera llamada gratis de 20 min.",
      perks: ["Primera llamada gratis · 20 min", "Auditoría desde $150", "Sistemas desde $500"],
      cta: "Agendar auditoría",
    },
    footer: {
      tagline:
        "Sistemas con IA para negocios pequeños: auditoría desde $150, configuración inicial desde $500 y sistemas completos a medida.",
      navigation: "Navegación",
      services: "Servicios",
      legal: "Legal",
      connect: "Conecta conmigo",
      rights: "Todos los derechos reservados.",
      serviceLinks: [
        { label: "Auditoría", href: "/#services" },
        { label: "Sistema inicial", href: "/#services" },
        { label: "Experiencia del cliente", href: "/#services" },
        { label: "Operaciones", href: "/#services" },
        { label: "Automatización con IA", href: "/#services" },
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
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "About", href: "/about" },
        { label: "Book", href: "/booking" },
      ],
      mobile: {
        home: "Home",
        services: "Services",
        about: "About",
        book: "Book",
      },
      cta: "Book a call",
      openMenu: "Menu",
      closeMenu: "Close",
      talkCta: "Let's talk",
    },
    hero: {
      chip: "AngieInTech · Miami · Software Engineer",
      greeting: "Hello, I'm",
      name: "ANGELICA",
      title: "I consult with you and build systems with",
      titleHighlight: "AI and technology.",
      subtitle:
        "Software engineer with a Master's in Computer Science. I help small businesses turn messy manual work into websites, automations, dashboards, and AI-powered systems that save time, create organization, and support growth.",
      outcomes: [
        "First call free · 20 min",
        "Systems built for how you work",
        "From idea to launch",
      ],
      primaryCta: "Book your free first call",
      secondaryCta: "View services",
      freeCallNote: "First call free · 20 min",
      stats: [
        { label: "Software Engineer @ AmEx", detail: "Full-time role" },
        { label: "Real client projects", detail: "Healthcare & services" },
        { label: "English & Spanish", detail: "Bilingual support" },
        { label: "Based in Miami", detail: "Local & remote" },
      ],
      highlights: [
        { title: "Systems audit", label: "from $150" },
        { title: "Starter setup", label: "from $500" },
        { title: "AI automation", label: "from $2,500" },
      ],
    },
    marquee: [
      "AI Consultations",
      "Professional Websites",
      "Automation",
      "Custom Systems",
      "More Clients",
      "Less Manual Work",
      "Simple Technology",
      "Real Building",
      "Real Results",
    ],
    services: {
      label: "Services & pricing",
      title: "Simple systems to help your business run better.",
      subtitle:
        "I help small businesses replace messy manual work with clean digital systems that improve how they handle clients, operations, sales, and workflows.",
      pricingNote:
        "Every business is different. Pricing depends on the complexity of the workflow, tools needed, integrations, and level of customization. Start with a Systems Audit if you are not sure what your business needs yet.",
      freeCallNote: "First call free · 20 min",
      includesLabel: "Can include",
      buildsLabel: "Systems I build",
      auditFeaturedLabel: "Start here",
      premiumLabel: "Premium offer",
      customLabel: "Custom build",
      audit: {
        id: "audit" as const,
        price: "Starting at $150",
        title: "Business Systems Audit",
        description:
          "I review your current workflow and show you where your business is losing time, leads, or clarity, and what to fix first.",
        includes: [
          "Workflow review",
          "System recommendations",
          "Tool suggestions",
          "Automation ideas",
          "Process mapping",
          "Simple action plan",
          "Priority roadmap",
        ],
        cta: "Book a Systems Audit",
      },
      offers: [
        {
          id: "starter" as const,
          price: "Starting at $500",
          title: "Starter System Setup",
          description:
            "A simple setup to help your business look more organized and make one part of your process easier to manage.",
          includes: [
            "Contact form",
            "Booking link setup",
            "Basic lead tracker",
            "Simple automation",
            "Email response setup",
            "Basic website or landing page updates",
          ],
          cta: "Start Small",
        },
        {
          id: "intake" as const,
          price: "Starting at $750",
          title: "Client Experience Systems",
          description:
            "I build systems that organize the client journey from first message to booked client, so fewer leads get lost.",
          includes: [
            "Client forms",
            "Booking flows",
            "Lead trackers",
            "Auto-replies",
            "Follow-up reminders",
            "Client onboarding",
            "CRM-style organization",
            "Client communication workflows",
          ],
          cta: "Build My Client System",
        },
        {
          id: "dashboard" as const,
          price: "Starting at $1,500",
          title: "Business Operations Systems",
          description:
            "I build dashboards, internal tools, and workflows that make the business easier to manage without jumping between multiple apps.",
          includes: [
            "Custom dashboards",
            "Admin panels",
            "Project trackers",
            "Task workflows",
            "Revenue tracking",
            "Client databases",
            "Reporting tools",
            "Tool integrations",
            "Internal workflows",
          ],
          cta: "Create My Operations System",
        },
        {
          id: "proposals" as const,
          tier: "premium" as const,
          price: "Starting at $2,500",
          title: "AI-Powered Sales & Workflow Automation",
          description:
            "I build AI-powered systems that help automate repetitive work while keeping the business owner in control of the final result.",
          includes: [
            "Proposal generators",
            "Quote systems",
            "AI-assisted replies",
            "Product or service recommendation flows",
            "Document generation",
            "Sales follow-ups",
            "Customer support workflows",
            "Payment flows",
            "Approval workflows",
          ],
          cta: "Automate My Workflow",
        },
        {
          id: "custom" as const,
          tier: "custom" as const,
          price: "Custom pricing",
          title: "Custom AI Software / Internal Tool",
          description:
            "For businesses that need a custom internal tool, AI system, dashboard, portal, or software build designed around their specific process.",
          includes: [
            "Custom AI tools",
            "Internal business software",
            "Client portals",
            "Admin dashboards",
            "AI agents",
            "Document processing systems",
            "Custom integrations",
            "MVP builds",
          ],
          cta: "Request a Custom Quote",
        },
      ],
      howItWorks: {
        title: "How it works",
        steps: [
          {
            title: "Audit your workflow",
            description:
              "We look at how your business currently handles leads, clients, follow-ups, proposals, and daily tasks.",
          },
          {
            title: "Design the system",
            description: "I map out the best system for your business.",
          },
          {
            title: "Build + connect",
            description:
              "I create the forms, dashboards, automations, and website pieces needed.",
          },
          {
            title: "Launch + refine",
            description:
              "We test everything and make sure it fits how you actually work.",
          },
        ],
      },
      finalCta: {
        title: "Not sure what your business needs?",
        text: "Start with a Business Systems Audit. I'll review your current process, show you where you're losing time or leads, and recommend the best system to build first.",
        cta: "Book a Systems Audit",
      },
    },
    booking: {
      label: "Book",
      title: "Book your call.",
      subtitle: "Start with a free 20-minute first call, or book an audit or build project if you already know what you need.",
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
          label: "First call",
          price: "20 min · No cost",
          description:
            "Tell me about your business. We'll find where you're losing time or leads, what system fits, and what the next step is. No pressure.",
          cta: "Book free call",
          perks: ["No commitment", "20 minutes", "Reply within 24 hours"],
          featured: true,
        },
        {
          id: "audit",
          badge: "Audit",
          label: "Business Systems Audit",
          price: "Starting at $150",
          description:
            "Deep workflow review with an action plan, tool recommendations, and automation ideas.",
          cta: "Book a Systems Audit",
          perks: ["Clear action plan", "Priority roadmap", "Concrete recommendations"],
          featured: false,
        },
        {
          id: "project",
          badge: "Build",
          label: "Ready to build a system",
          price: "from $500+",
          description:
            "You know what you need. We define scope, price, and timeline for your starter setup, intake, dashboard, or automation system.",
          cta: "Start project",
          perks: ["Written proposal", "Clear price and timeline", "From idea to launch"],
          featured: false,
        },
      ],
    },
    about: {
      label: "Founder-led studio",
      title: "About me",
      paragraph1:
        "I'm Angelica Roque, founder of AngieInTech and a software engineer in Miami. I help service businesses look more professional, capture clients, and run their operations with less manual chaos.",
      paragraph2:
        "Master's in Computer Science. I build websites, automations, and systems that give you back time, clarity, and control, working closely with you from idea to launch.",
      principles: ["Simple before complex", "Human in the loop", "Built for how you work"],
      experience: [
        "Master's in Computer Science",
        "Websites, automations, and systems for businesses",
        "BS in Digital Arts & Sciences + Computer Science",
        "Bilingual: English and Spanish",
        "Based in Miami · local and remote clients",
      ],
      cta: "Book a call",
    },
    ctaBanner: {
      label: "Ready to start?",
      title: "Your business deserves to grow with technology",
      titleHighlight: "that actually works.",
      subtitle:
        "Start with a Business Systems Audit and I'll show you what to fix first, or book your free 20-minute first call.",
      perks: ["First call free · 20 min", "Audit from $150", "Systems from $500"],
      cta: "Book a Systems Audit",
    },
    footer: {
      tagline:
        "AI systems for small businesses: audit from $150, starter setups from $500, and full custom builds.",
      navigation: "Navigation",
      services: "Services",
      legal: "Legal",
      connect: "Connect",
      rights: "All rights reserved.",
      serviceLinks: [
        { label: "Systems audit", href: "/#services" },
        { label: "Starter setup", href: "/#services" },
        { label: "Client experience", href: "/#services" },
        { label: "Operations", href: "/#services" },
        { label: "AI automation", href: "/#services" },
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
