import type { Locale } from "@/lib/i18n/types";

const es = {
    nav: {
      links: [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/#services" },
        { label: "FAQ", href: "/#faq" },
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
      chip: "Angélica Roque · Miami · Ingeniera de software",
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
        { label: "Ingeniera de software @ AmEx", detail: "Trabajo a tiempo completo" },
        { label: "Proyectos con clientes reales", detail: "Salud y servicios" },
        { label: "Inglés y español", detail: "Atención bilingüe" },
        { label: "Basada en Miami", detail: "Clientes locales y remotos" },
      ],
      highlights: [
        { title: "Auditoría de sistemas", label: "Empieza con una llamada" },
        { title: "Sistemas a medida", label: "Hechos para tu negocio" },
        { title: "Automatización con IA", label: "Sin caos manual" },
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
      label: "Servicios",
      title: "Sistemas simples para que tu negocio funcione mejor.",
      subtitle:
        "Ayudo a negocios pequeños a reemplazar el trabajo manual caótico con sistemas digitales claros que mejoran cómo manejas clientes, operaciones, ventas y flujos de trabajo.",
      pricingNote:
        "Cada negocio es diferente. La mejor forma de empezar es una llamada gratis de 20 min: revisamos tu flujo, vemos qué tiene sentido y te doy un plan claro. Sin presión.",
      freeCallNote: "Primera llamada gratis · 20 min",
      includesLabel: "Puede incluir",
      buildsLabel: "Sistemas que construyo",
      auditFeaturedLabel: "Empieza aquí",
      premiumLabel: "Oferta premium",
      customLabel: "A medida",
      audit: {
        id: "audit" as const,
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
        cta: "Reservar llamada gratis",
      },
      offers: [
        {
          id: "starter" as const,
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
          cta: "Hablemos primero",
        },
        {
          id: "intake" as const,
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
          cta: "Hablemos primero",
        },
        {
          id: "dashboard" as const,
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
          cta: "Hablemos primero",
        },
        {
          id: "proposals" as const,
          tier: "premium" as const,
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
          cta: "Hablemos primero",
        },
        {
          id: "custom" as const,
          tier: "custom" as const,
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
          cta: "Hablemos primero",
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
        title: "¿Lista para empezar?",
        text: "Reserva una llamada gratis de 20 min. Revisamos tu flujo, vemos qué tiene sentido para tu negocio y te digo el siguiente paso. Sin presión.",
        cta: "Reservar llamada gratis",
      },
    },
    booking: {
      label: "Agenda",
      title: "Reserva tu llamada gratis.",
      subtitle:
        "20 minutos, sin costo y sin compromiso. Cuéntame tu negocio y sales con claridad sobre qué arreglar primero.",
      region: "Negocios en Miami, EEUU y LATAM",
      mostPopular: "Empieza aquí",
      showCalendar: "Ver todos los horarios disponibles",
      hideCalendar: "Ocultar calendario",
      calendarTitle: "Elige el horario que te quede mejor",
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
            "Cuéntame tu negocio. Vemos dónde pierdes tiempo o leads, qué sistema encaja y cuál es el siguiente paso. Si avanzamos, hablamos de alcance y opciones en la llamada.",
          cta: "Reservar llamada gratis",
          perks: ["Sin compromiso", "20 minutos", "Respuesta en 24h"],
          featured: true,
        },
      ],
    },
    about: {
      label: "Founder-led studio",
      title: "Sobre mí",
      paragraph1:
        "Soy Angélica Roque, ingeniera de software en Miami. Ayudo a negocios de servicios a verse más profesionales, captar clientes y organizar su operación sin más caos manual.",
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
        "Reserva una llamada gratis de 20 min. Revisamos tu flujo y te digo qué arreglar primero, sin presión.",
      perks: ["Primera llamada gratis · 20 min", "Sin compromiso", "Sales con un plan claro"],
      cta: "Reservar llamada gratis",
    },
    faq: {
      label: "Preguntas frecuentes",
      title: "Lo que suele preguntar la gente antes de empezar.",
      subtitle:
        "Respuestas claras, sin jerga. Si tu duda no está aquí, escríbeme o agenda la llamada gratis.",
      stillCurious: "¿Sigues con dudas?",
      stillCuriousText:
        "La forma más rápida de saber si encajamos es una llamada de 20 min. Sin compromiso.",
      cta: "Reservar llamada gratis",
      items: [
        {
          id: "free-call",
          question: "¿Qué pasa en la llamada gratis de 20 minutos?",
          answer:
            "Me cuentas cómo funciona tu negocio hoy: cómo llegan los clientes, qué haces manual y qué te quita tiempo. Te hago preguntas simples, identificamos el cuello de botella y te digo qué tendría más sentido arreglar primero. Sales con claridad, aunque no trabajemos juntas.",
        },
        {
          id: "technical",
          question: "¿Necesito saber de tecnología?",
          answer:
            "No. Mi trabajo es traducir lo que necesitas a sistemas simples que puedas usar. Te explico todo en lenguaje normal y te dejo con herramientas que entiendes, no con algo que solo yo sé manejar.",
        },
        {
          id: "business-types",
          question: "¿Con qué tipo de negocios trabajas?",
          answer:
            "Principalmente negocios de servicios pequeños: consultores, coaches, salud, belleza, agencias, estudios creativos y negocios locales que quieren verse más profesionales y dejar de perder leads en el caos manual.",
        },
        {
          id: "timeline",
          question: "¿Cuánto tarda un proyecto?",
          answer:
            "Depende del alcance. Un sistema inicial puede estar listo en unas semanas. Proyectos más grandes con dashboards, automatizaciones o IA pueden tomar uno o dos meses. En la llamada te doy un estimado honesto según tu situación.",
        },
        {
          id: "language",
          question: "¿Trabajas en inglés y español?",
          answer:
            "Sí, bilingüe. Podemos hacer la llamada, los mensajes y la documentación en el idioma que te sea más cómodo.",
        },
        {
          id: "tools",
          question: "¿Qué herramientas usas?",
          answer:
            "Elijo lo que encaje con tu negocio y presupuesto: formularios, CRMs ligeros, Cal.com, Notion, Airtable, automatizaciones con Zapier o Make, webs en Next.js, y APIs de IA cuando tiene sentido. No te vendo herramientas que no vas a usar.",
        },
        {
          id: "communication",
          question: "¿Cómo nos comunicamos durante el proyecto?",
          answer:
            "Por email, WhatsApp o Instagram, lo que prefieras. Te mando avances claros, pido feedback en puntos clave y no desapareces en un agujero negro de desarrollo.",
        },
        {
          id: "not-sure",
          question: "¿Y si no sé qué necesito todavía?",
          answer:
            "Perfecto, es lo más común. Por eso existe la llamada gratis. Muchos clientes llegan diciendo solo \"algo no fluye\" y salen con un plan concreto de qué arreglar primero.",
        },
      ],
    },
    footer: {
      tagline:
        "Sistemas con IA para negocios pequeños. Empieza con una llamada gratis de 20 min y vemos qué encaja con tu negocio.",
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
    chatWidget: {
      agentName: "Angélica Roque",
      online: "En línea",
      greeting: "¡Hola! 🌟",
      prompt: "¿En qué te puedo ayudar?",
      cta: "Escribir por Instagram",
      open: "Abrir chat",
      close: "Cerrar chat",
    },
} as const;

const en = {
    nav: {
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "FAQ", href: "/#faq" },
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
      chip: "Angélica Roque · Miami · Ingeniera de software",
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
        { title: "Systems audit", label: "Start with a call" },
        { title: "Custom systems", label: "Built for your business" },
        { title: "AI automation", label: "Less manual chaos" },
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
      label: "Services",
      title: "Simple systems to help your business run better.",
      subtitle:
        "I help small businesses replace messy manual work with clean digital systems that improve how they handle clients, operations, sales, and workflows.",
      pricingNote:
        "Every business is different. The best way to start is a free 20-minute call: we review your workflow, see what makes sense, and I give you a clear plan. No pressure.",
      freeCallNote: "First call free · 20 min",
      includesLabel: "Can include",
      buildsLabel: "Systems I build",
      auditFeaturedLabel: "Start here",
      premiumLabel: "Premium offer",
      customLabel: "Custom build",
      audit: {
        id: "audit" as const,
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
        cta: "Book free call",
      },
      offers: [
        {
          id: "starter" as const,
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
          cta: "Let's talk first",
        },
        {
          id: "intake" as const,
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
          cta: "Let's talk first",
        },
        {
          id: "dashboard" as const,
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
          cta: "Let's talk first",
        },
        {
          id: "proposals" as const,
          tier: "premium" as const,
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
          cta: "Let's talk first",
        },
        {
          id: "custom" as const,
          tier: "custom" as const,
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
          cta: "Let's talk first",
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
        title: "Ready to get started?",
        text: "Book a free 20-minute call. We'll review your workflow, see what makes sense for your business, and I'll tell you the next step. No pressure.",
        cta: "Book free call",
      },
    },
    booking: {
      label: "Book",
      title: "Book your free call.",
      subtitle:
        "20 minutes, no cost, no commitment. Tell me about your business and leave with clarity on what to fix first.",
      region: "Businesses in Miami, US & LATAM",
      mostPopular: "Start here",
      showCalendar: "View all available times",
      hideCalendar: "Hide calendar",
      calendarTitle: "Pick a time that works for you",
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
            "Tell me about your business. We'll find where you're losing time or leads, what system fits, and what the next step is. If we move forward, we talk scope and options on the call.",
          cta: "Book free call",
          perks: ["No commitment", "20 minutes", "Reply within 24 hours"],
          featured: true,
        },
      ],
    },
    about: {
      label: "Founder-led studio",
      title: "About me",
      paragraph1:
        "I'm Angélica Roque, a software engineer in Miami. I help service businesses look more professional, capture clients, and run their operations with less manual chaos.",
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
        "Book a free 20-minute call. We'll review your workflow and I'll tell you what to fix first, no pressure.",
      perks: ["First call free · 20 min", "No commitment", "Leave with a clear plan"],
      cta: "Book free call",
    },
    faq: {
      label: "FAQ",
      title: "What people usually ask before we start.",
      subtitle:
        "Clear answers, no jargon. If your question is not here, message me or book the free call.",
      stillCurious: "Still have questions?",
      stillCuriousText:
        "The fastest way to see if we are a fit is a 20-minute call. No commitment.",
      cta: "Book free call",
      items: [
        {
          id: "free-call",
          question: "What happens on the free 20-minute call?",
          answer:
            "You walk me through how your business runs today: how clients find you, what you do manually, and what eats your time. I ask simple questions, we spot the bottleneck, and I tell you what makes sense to fix first. You leave with clarity, even if we do not work together.",
        },
        {
          id: "technical",
          question: "Do I need to be technical?",
          answer:
            "No. My job is to turn what you need into simple systems you can actually use. I explain everything in plain language and leave you with tools you understand, not something only I know how to run.",
        },
        {
          id: "business-types",
          question: "What kinds of businesses do you work with?",
          answer:
            "Mostly small service businesses: consultants, coaches, health and wellness, beauty, agencies, creative studios, and local businesses that want to look more professional and stop losing leads to manual chaos.",
        },
        {
          id: "timeline",
          question: "How long does a project take?",
          answer:
            "It depends on scope. A starter system can be ready in a few weeks. Bigger builds with dashboards, automations, or AI may take one or two months. On the call I give you an honest estimate for your situation.",
        },
        {
          id: "language",
          question: "Do you work in English and Spanish?",
          answer:
            "Yes, fully bilingual. We can do the call, messages, and documentation in whichever language is more comfortable for you.",
        },
        {
          id: "tools",
          question: "What tools do you use?",
          answer:
            "Whatever fits your business and budget: forms, light CRMs, Cal.com, Notion, Airtable, automations with Zapier or Make, websites in Next.js, and AI APIs when it actually helps. I do not push tools you will not use.",
        },
        {
          id: "communication",
          question: "How do we communicate during a project?",
          answer:
            "Email, WhatsApp, or Instagram, your choice. I send clear updates, ask for feedback at key points, and you will not disappear into a black hole of development.",
        },
        {
          id: "not-sure",
          question: "What if I am not sure what I need yet?",
          answer:
            "That is the most common starting point. That is why the free call exists. Many clients arrive saying only \"something is not flowing\" and leave with a concrete plan for what to fix first.",
        },
      ],
    },
    footer: {
      tagline:
        "AI systems for small businesses. Start with a free 20-minute call and we'll see what fits your business.",
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
    chatWidget: {
      agentName: "Angélica Roque",
      online: "Online",
      greeting: "Hi there! 🌟",
      prompt: "How can I help you?",
      cta: "Message on Instagram",
      open: "Open chat",
      close: "Close chat",
    },
} as const;

export type SiteTranslations = (typeof translations)[Locale];

export const translations = {
  es,
  en,
} as const;
