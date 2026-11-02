import type { Locale } from "@/lib/i18n/types";

const es = {
    nav: {
      links: [
        { label: "Servicios", href: "/#services" },
        { label: "Casos", href: "/casos/contratista-estructura" },
        { label: "Cómo trabajo", href: "/#how-it-works" },
        { label: "Sobre mí", href: "/#about" },
      ],
      mobile: {
        home: "Inicio",
        services: "Servicios",
        about: "Sobre mí",
        book: "Agenda",
      },
      cta: "Hablemos",
      openMenu: "Menú",
      closeMenu: "Cerrar",
      talkCta: "Hablemos",
    },
    hero: {
      eyebrow: "Software / IA / Automatización",
      titleLines: ["Construyo", "sistemas con", "IA y tecnología."],
      description:
        "Conecto tus herramientas y automatizo el trabajo repetitivo para que tu negocio funcione con más claridad y menos tareas manuales.",
      primaryCta: "Ver servicios",
      secondaryCta: "Hablemos",
      flowLabels: ["Información", "Inteligencia", "Acciones"],
      flowCaption: "La información entra al sistema, se procesa y se convierte en acciones automatizadas.",
    },
    marquee: [
      "Página web desde $200+",
      "Automatización desde $300+",
      "SaaS desde $2,000+",
      "Consultoría $100/hora",
      "$100–$200 la hora",
      "5+ años en American Express",
      "Primera hora con $50 de descuento",
      "Precios claros",
      "Sin límites a negociar",
    ],
    services: {
      label: "Servicios",
      title: "Lo que hago y cuánto cuesta.",
      pricingNote:
        "Son precios de entrada. Las horas y el precio final dependen de tu proyecto, y siempre se puede negociar.",
      buildsLabel: "Sistemas que construyo",
      detailsCta: "Ver detalles",
      priceFromLabel: "Desde",
      auditCategoryLabel: "¿No sabes por dónde empezar?",
      firstMeeting: {
        label: "Primer meeting · 1 hora",
        regularPrice: "$100",
        price: "$50",
        savings: "Ahorras $50",
      },
      audit: {
        id: "audit" as const,
        price: "$100 / hora",
        title: "Consultoría de ingeniería y automatizaciones",
        description:
          "Me cuentas tu negocio y tu meta. Te digo qué te conviene mejorar, automatizar o construir, y cuánto costaría.",
        includes: ["Revisión de tu negocio", "Recomendación clara", "Precio y próximos pasos"],
        cta: "Agendar reunión",
      },
      offers: [
        {
          id: "website" as const,
          price: "$200",
          note: "Presencia digital",
          title: "Sitio web profesional",
          summary: "Que te encuentren en Google y te contacten fácil.",
        },
        {
          id: "automation" as const,
          price: "$300",
          note: "Eficiencia operativa",
          title: "Automatización de procesos",
          summary: "Las tareas repetitivas se hacen solas y ganas horas cada semana.",
        },
        {
          id: "saas" as const,
          price: "$2,000",
          note: "Producto a la medida",
          title: "Plataforma SaaS",
          summary: "Tu propio software para operar o vender, hecho a tu medida.",
          priceHint: "32+ horas · $100–$200 / hora",
        },
      ],
    },
    howItWorks: {
      label: "Cómo trabajo",
      title: "Primero entiendo tu negocio. Después construimos.",
      steps: [
        {
          title: "Entender",
          description: "Primer meeting de 1 hora. Hablamos de tu operación, tus herramientas y el problema que quieres resolver.",
          tag: "$50 de descuento",
        },
        {
          title: "Diseñar",
          description: "Definimos el alcance, las horas, el precio y cómo sabremos que la solución funciona.",
        },
        {
          title: "Implementar",
          description: "Construyo y probamos el sistema con el proceso real antes de usarlo en el día a día.",
        },
        {
          title: "Acompañar",
          description: "Documentamos el uso y acordamos el acompañamiento que necesita tu equipo.",
        },
      ],
      cta: "Agendar primer meeting",
    },
    caseTeaser: {
      label: "Caso real · Construcción",
      title: "Ponga su constructora al día, antes que su competencia.",
      body: "En Thales Builders la información pasaba de un sistema a otro a mano. Mapeamos cómo se mueve el trabajo y automatizamos la facturación de costos, validada al centavo.",
      stats: [
        { value: "1 de 26", label: "traspasos era automático" },
        { value: "255", label: "datos capturados en 5 semanas" },
        { value: "$554K", label: "validados al centavo" },
      ],
      cta: "Ver el caso",
    },
    serviceDetails: {
      back: "Todos los servicios",
      idealForLabel: "Ideal si…",
      includesLabel: "Qué recibes",
      examplesLabel: "Ejemplos de lo que se puede hacer",
      otherServicesLabel: "Otros servicios",
      ctaTitle: "¿Hablamos de tu proyecto?",
      ctaText:
        "Primer meeting de 1 hora con $50 de descuento. Sales con un plan, las horas y el precio.",
      cta: "Agendar reunión",
      items: {
        audit: {
          note: "¿No sabes por dónde empezar?",
          title: "Consultoría de ingeniería y automatizaciones",
          priceLabel: "Tarifa",
          price: "$100 / hora",
          priceHint: "Primer meeting de 1 hora: $50",
          intro:
            "Para dueños de negocio que saben que algo tiene que mejorar, pero no saben qué ni por dónde empezar. Revisamos juntos cómo trabajas hoy y te digo, en palabras simples, qué te conviene hacer.",
          idealFor: [
            "Sientes que pierdes tiempo en tareas repetitivas",
            "Quieres modernizar tu negocio pero no sabes qué herramienta usar",
            "Te cotizaron algo y quieres una segunda opinión",
          ],
          includes: [
            "Revisión de cómo funciona tu negocio hoy",
            "Recomendaciones claras, sin lenguaje técnico",
            "Prioridades: qué hacer primero y qué puede esperar",
            "Horas y precio estimados si quieres que lo construya",
          ],
          examples: [
            "Un salón que quiere dejar de agendar citas por WhatsApp",
            "Una tienda que no sabe si necesita página web o solo Instagram",
            "Una empresa de servicios que quiere organizar a sus clientes",
          ],
        },
        website: {
          note: "Presencia digital",
          title: "Sitio web profesional",
          priceLabel: "Desde",
          price: "$200",
          priceHint: "El precio sube según páginas y funciones",
          intro:
            "Un sitio rápido y bien diseñado que explica lo que haces, genera confianza y convierte visitas en clientes.",
          idealFor: [
            "Tu negocio no tiene página o la que tiene se ve vieja",
            "Tus clientes te buscan en Google y no te encuentran",
            "Quieres recibir contactos o citas sin depender solo de redes",
          ],
          includes: [
            "Diseño alineado a tu marca",
            "Contacto, WhatsApp o reservas integradas",
            "Se ve bien en el celular",
            "Configuración básica para aparecer en Google",
            "Publicación en tu dominio",
          ],
          examples: [
            "Página de un estudio de belleza con reservas",
            "Sitio de un contratista con fotos de sus trabajos",
            "Página de una consultora con formulario de contacto",
          ],
        },
        automation: {
          note: "Eficiencia operativa",
          title: "Automatización de procesos",
          priceLabel: "Desde",
          price: "$300",
          priceHint: "El precio depende de cuántas herramientas se conectan",
          intro:
            "Conecto las herramientas que ya usas para que las tareas repetitivas se hagan solas y sin errores, mientras tú te enfocas en tu negocio.",
          idealFor: [
            "Copias datos a mano de un lugar a otro",
            "Se te olvidan seguimientos con clientes",
            "Tu equipo pierde horas en tareas que siempre son iguales",
          ],
          includes: [
            "Revisión del proceso a automatizar",
            "Flujos en Make, Zapier o n8n",
            "Conexión entre formularios, correo, CRM y pagos",
            "Pruebas y ajustes hasta que funcione bien",
            "Explicación simple de cómo funciona",
          ],
          examples: [
            "Cada cliente nuevo recibe un correo de bienvenida automático",
            "Las citas se guardan solas en tu calendario y en una hoja de cálculo",
            "Recordatorios automáticos de pago",
          ],
        },
        saas: {
          note: "Producto a la medida",
          title: "Plataforma SaaS",
          priceLabel: "Desde",
          price: "$2,000",
          priceHint: "Mínimo 32 horas · $100–$200 / hora",
          intro:
            "Tu propio software, de la idea al lanzamiento. Para negocios que necesitan una herramienta que no existe o que quieren vender su propio producto digital.",
          idealFor: [
            "Tienes una idea de app o plataforma para vender",
            "Las herramientas del mercado no se ajustan a cómo trabajas",
            "Quieres un sistema propio para tus clientes o tu equipo",
          ],
          includes: [
            "Plan del producto y arquitectura",
            "Usuarios, inicio de sesión y pagos",
            "Panel para administrar tu negocio",
            "Lanzamiento en internet",
            "Soporte inicial después del lanzamiento",
            "Y más",
          ],
          examples: [
            "Portal donde tus clientes reservan y pagan",
            "Plataforma de membresías o cursos",
            "Sistema interno para manejar pedidos o inventario",
          ],
        },
      },
    },
    booking: {
      label: "Agenda",
      title: "Reserva el primer meeting.",
      subtitle:
        "1 hora. Te descuento $50 en ese primer meeting. Vemos el proyecto, las horas y el precio.",
      region: "Miami · local y remoto",
      mostPopular: "Empieza aquí",
      showCalendar: "Ver horarios",
      hideCalendar: "Ocultar calendario",
      calendarTitle: "Elige un horario",
      openCalendar: "Abrir en nueva pestaña",
      footer: "Primer meeting de 1 hora con $50 de descuento · se puede negociar",
      whatsapp: "¿Prefieres WhatsApp?",
      options: [
        {
          id: "free",
          badge: "$50 off",
          label: "Primer meeting",
          price: "1 hora · $50 de descuento",
          description:
            "Me cuentas qué quieres construir. Te digo las horas, el precio de entrada y el siguiente paso. El precio final se negocia según el proyecto.",
          cta: "Agendar reunión",
          perks: ["1 hora", "$50 de descuento", "Se puede negociar"],
          featured: true,
        },
      ],
    },
    about: {
      label: "Sobre mí",
      title: "Soy Angélica. Tu negocio es el punto de partida.",
      photoAlt: "Retrato de Angélica Roque, ingeniera de software.",
      paragraph1:
        "Soy ingeniera de software. Trabajé más de 5 años en American Express, #3 de su industria financiera. Hoy trabajo con dueños de negocios que quieren ordenar sus procesos, conectar sus herramientas y usar la IA con un propósito claro.",
      paragraph2:
        "Mi trabajo es convertir un problema de operación en una solución que puedas entender y usar. Estoy en Miami y trabajo también de forma remota, en español e inglés.",
      experience: [
        "Más de 5 años en American Express",
        "Páginas, automatizaciones y SaaS",
        "Precios claros y negociables",
        "Miami · español e inglés",
      ],
      cta: "Agendar reunión",
    },
    ctaBanner: {
      label: "Hablemos",
      title: "¿Qué parte de tu negocio quieres simplificar?",
      subtitle:
        "Cuéntame qué se repite, qué se atasca y qué te gustaría mejorar. El primer meeting es de 1 hora y tiene $50 de descuento.",
      cta: "Agendar una llamada",
      emailLabel: "O escríbeme a",
    },
    faq: {
      label: "Preguntas",
      title: "Precios, horas y el primer meeting.",
      subtitle: "Lo esencial, en corto.",
      stillCurious: "¿Quieres el número para tu proyecto?",
      stillCuriousText: "En el primer meeting de 1 hora te descuento $50 y vemos alcance, horas y precio.",
      cta: "Agendar reunión",
      items: [
        {
          id: "prices",
          question: "¿Los precios son fijos?",
          answer:
            "Son precios de entrada. Las horas y el precio cambian según el proyecto que quieras construir. Se puede negociar.",
        },
        {
          id: "website",
          question: "¿Qué es la página desde $200+?",
          answer:
            "Una página para tu negocio: quién eres, qué ofreces y cómo te contactan. El precio sube si hace falta más páginas, reservas o diseño a medida.",
        },
        {
          id: "automation",
          question: "¿Qué es la automatización desde $300?",
          answer:
            "Un flujo tipo Make.com que conecta las herramientas que ya usas, para que formularios, avisos y seguimientos dejen de hacerse a mano.",
        },
        {
          id: "saas",
          question: "¿Por qué el SaaS empieza en $2,000?",
          answer:
            "Un SaaS completo es un software propio. Toma mínimo 32 horas. La tarifa de proyecto es $100 a $200 la hora, según lo que haya que construir. $2,000 es el punto de entrada.",
        },
        {
          id: "consult",
          question: "¿Qué cubre la consultoría de $100 la hora?",
          answer:
            "Ingeniería y automatizaciones, y cómo poner tu negocio al día: qué actualizar, qué dejar quieto y qué construir primero.",
        },
        {
          id: "meeting",
          question: "¿Qué pasa en el primer meeting?",
          answer:
            "Es 1 hora. Te descuento $50. Me cuentas el proyecto y sales con horas, precio de entrada y siguiente paso.",
        },
      ],
    },
    footer: {
      tagline:
        "Páginas desde $200+, automatizaciones desde $300 y SaaS desde $2,000. Ingeniera con más de 5 años en American Express.",
      navigation: "Navegación",
      services: "Precios",
      legal: "Legal",
      connect: "Conecta conmigo",
      rights: "Todos los derechos reservados.",
      serviceLinks: [
        { label: "Página web desde $200+", href: "/#services" },
        { label: "Automatización desde $300", href: "/#services" },
        { label: "SaaS desde $2,000", href: "/#services" },
        { label: "Consultoría $100/hora", href: "/#services" },
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
        { label: "Services", href: "/#services" },
        { label: "Cases", href: "/en/cases/structural-contractor" },
        { label: "How I work", href: "/#how-it-works" },
        { label: "About", href: "/#about" },
      ],
      mobile: {
        home: "Home",
        services: "Services",
        about: "About",
        book: "Book",
      },
      cta: "Let's talk",
      openMenu: "Menu",
      closeMenu: "Close",
      talkCta: "Let's talk",
    },
    hero: {
      eyebrow: "Software / AI / Automation",
      titleLines: ["I build", "systems with", "AI and technology."],
      description:
        "I connect your tools and automate repetitive work so your business runs with more clarity and fewer manual tasks.",
      primaryCta: "See services",
      secondaryCta: "Let's talk",
      flowLabels: ["Information", "Intelligence", "Actions"],
      flowCaption: "Information enters the system, gets processed and becomes automated actions.",
    },
    marquee: [
      "Website from $200+",
      "Automation from $300",
      "SaaS from $2,000",
      "Consulting $100/hour",
      "$100–$200 per hour",
      "5+ years at American Express",
      "First hour: $50 off",
      "Clear prices",
      "Open to negotiate",
    ],
    services: {
      label: "Services",
      title: "What I do and what it costs.",
      pricingNote:
        "These are starting prices. Final hours and price depend on your project, and they're always open to negotiation.",
      buildsLabel: "Systems I build",
      detailsCta: "See details",
      priceFromLabel: "From",
      auditCategoryLabel: "Not sure where to start?",
      firstMeeting: {
        label: "First meeting · 1 hour",
        regularPrice: "$100",
        price: "$50",
        savings: "Save $50",
      },
      audit: {
        id: "audit" as const,
        price: "$100 / hour",
        title: "Engineering & automation consulting",
        description:
          "Tell me about your business and your goal. I'll tell you what to improve, automate, or build, and what it would cost.",
        includes: ["Business review", "Clear recommendation", "Price and next steps"],
        cta: "Book a meeting",
      },
      offers: [
        {
          id: "website" as const,
          price: "$200",
          note: "Digital presence",
          title: "Professional website",
          summary: "Get found on Google and make it easy for clients to reach you.",
        },
        {
          id: "automation" as const,
          price: "$300",
          note: "Operational efficiency",
          title: "Process automation",
          summary: "Repetitive tasks run on their own and you win back hours every week.",
        },
        {
          id: "saas" as const,
          price: "$2,000",
          note: "Custom product",
          title: "SaaS platform",
          summary: "Your own software to run or sell, built around your business.",
          priceHint: "32+ hours · $100–$200 / hour",
        },
      ],
    },
    howItWorks: {
      label: "How I work",
      title: "First I understand your business. Then we build.",
      steps: [
        {
          title: "Understand",
          description: "First 1-hour meeting. We talk about your operation, your tools and the problem you want to solve.",
          tag: "$50 off",
        },
        {
          title: "Design",
          description: "We define the scope, the hours, the price and how we'll know the solution works.",
        },
        {
          title: "Build",
          description: "I build it and we test the system with the real process before it goes into daily use.",
        },
        {
          title: "Support",
          description: "We document how to use it and agree on the support your team needs.",
        },
      ],
      cta: "Book first meeting",
    },
    caseTeaser: {
      label: "Real case · Construction",
      title: "Get your construction company up to speed, before your competitors do.",
      body: "At Thales Builders, information moved between systems by hand. We mapped how work really flows and automated job-cost billing, validated to the cent.",
      stats: [
        { value: "1 of 26", label: "handoffs was automatic" },
        { value: "255", label: "facts captured in 5 weeks" },
        { value: "$554K", label: "validated to the cent" },
      ],
      cta: "See the case",
    },
    serviceDetails: {
      back: "All services",
      idealForLabel: "Ideal if…",
      includesLabel: "What you get",
      examplesLabel: "Examples of what's possible",
      otherServicesLabel: "Other services",
      ctaTitle: "Shall we talk about your project?",
      ctaText:
        "First 1-hour meeting with $50 off. You leave with a plan, the hours, and the price.",
      cta: "Book a meeting",
      items: {
        audit: {
          note: "Not sure where to start?",
          title: "Engineering & automation consulting",
          priceLabel: "Rate",
          price: "$100 / hour",
          priceHint: "First 1-hour meeting: $50",
          intro:
            "For business owners who know something needs to improve but aren't sure what or where to start. We review how you work today and I tell you, in plain words, what makes sense to do.",
          idealFor: [
            "You feel you lose time on repetitive tasks",
            "You want to modernize but don't know which tools to use",
            "You got a quote and want a second opinion",
          ],
          includes: [
            "A review of how your business runs today",
            "Clear recommendations, no tech jargon",
            "Priorities: what to do first and what can wait",
            "Estimated hours and price if you want me to build it",
          ],
          examples: [
            "A salon that wants to stop booking appointments over WhatsApp",
            "A shop unsure whether it needs a website or just Instagram",
            "A service company that wants to organize its clients",
          ],
        },
        website: {
          note: "Digital presence",
          title: "Professional website",
          priceLabel: "From",
          price: "$200",
          priceHint: "Price goes up with pages and features",
          intro:
            "A fast, well-designed site that explains what you do, builds trust, and turns visitors into clients.",
          idealFor: [
            "Your business has no site, or the one you have looks outdated",
            "Clients search for you on Google and can't find you",
            "You want inquiries or bookings without relying only on social media",
          ],
          includes: [
            "Design aligned with your brand",
            "Built-in contact, WhatsApp, or booking",
            "Looks great on mobile",
            "Basic setup to show up on Google",
            "Published on your domain",
          ],
          examples: [
            "A beauty studio page with booking",
            "A contractor site with photos of past work",
            "A consultant page with a contact form",
          ],
        },
        automation: {
          note: "Operational efficiency",
          title: "Process automation",
          priceLabel: "From",
          price: "$300",
          priceHint: "Price depends on how many tools are connected",
          intro:
            "I connect the tools you already use so repetitive tasks run on their own, without errors, while you focus on your business.",
          idealFor: [
            "You copy data by hand from one place to another",
            "Client follow-ups slip through the cracks",
            "Your team loses hours on tasks that are always the same",
          ],
          includes: [
            "A review of the process to automate",
            "Workflows in Make, Zapier, or n8n",
            "Connections between forms, email, CRM, and payments",
            "Testing and tweaks until it works well",
            "A simple explanation of how it works",
          ],
          examples: [
            "Every new client gets an automatic welcome email",
            "Appointments save themselves to your calendar and a spreadsheet",
            "Automatic payment reminders",
          ],
        },
        saas: {
          note: "Custom product",
          title: "SaaS platform",
          priceLabel: "From",
          price: "$2,000",
          priceHint: "Minimum 32 hours · $100–$200 / hour",
          intro:
            "Your own software, from idea to launch. For businesses that need a tool that doesn't exist yet or want to sell their own digital product.",
          idealFor: [
            "You have an app or platform idea to sell",
            "Off-the-shelf tools don't fit how you work",
            "You want your own system for clients or your team",
          ],
          includes: [
            "Product plan and architecture",
            "Users, sign-in, and payments",
            "A dashboard to run your business",
            "Launch on the web",
            "Initial support after launch",
            "And more",
          ],
          examples: [
            "A portal where clients book and pay",
            "A membership or course platform",
            "An internal system for orders or inventory",
          ],
        },
      },
    },
    booking: {
      label: "Book",
      title: "Book the first meeting.",
      subtitle:
        "1 hour. $50 off that first meeting. We look at the project, the hours, and the price.",
      region: "Miami · local and remote",
      mostPopular: "Start here",
      showCalendar: "View times",
      hideCalendar: "Hide calendar",
      calendarTitle: "Pick a time",
      openCalendar: "Open in new tab",
      footer: "First 1-hour meeting is $50 off · open to negotiate",
      whatsapp: "Prefer WhatsApp?",
      options: [
        {
          id: "free",
          badge: "$50 off",
          label: "First meeting",
          price: "1 hour · $50 off",
          description:
            "Tell me what you want to build. I tell you the hours, the starting price, and the next step. The final price is negotiated for the project.",
          cta: "Book a meeting",
          perks: ["1 hour", "$50 off", "Open to negotiate"],
          featured: true,
        },
      ],
    },
    about: {
      label: "About me",
      title: "I'm Angélica. Your business is the starting point.",
      photoAlt: "Portrait of Angélica Roque, software engineer.",
      paragraph1:
        "I'm a software engineer. I spent 5+ years at American Express, ranked #3 in its financial industry. Today I work with business owners who want to organize their processes, connect their tools and use AI with a clear purpose.",
      paragraph2:
        "My job is to turn an operations problem into a solution you can understand and use. I'm based in Miami and also work remotely, in Spanish and English.",
      experience: [
        "5+ years at American Express",
        "Websites, automations, and SaaS",
        "Clear, negotiable prices",
        "Miami · Spanish and English",
      ],
      cta: "Book a meeting",
    },
    ctaBanner: {
      label: "Let's talk",
      title: "Which part of your business do you want to simplify?",
      subtitle:
        "Tell me what repeats, what gets stuck and what you'd like to improve. The first meeting is 1 hour and $50 off.",
      cta: "Book a call",
      emailLabel: "Or email me at",
    },
    faq: {
      label: "Questions",
      title: "Prices, hours, and the first meeting.",
      subtitle: "The essentials, kept short.",
      stillCurious: "Want the number for your project?",
      stillCuriousText: "The first 1-hour meeting is $50 off. We cover scope, hours, and price.",
      cta: "Book a meeting",
      items: [
        {
          id: "prices",
          question: "Are the prices fixed?",
          answer:
            "They are starting prices. Hours and price change with the project you want to build. Open to negotiate.",
        },
        {
          id: "website",
          question: "What is the website from $200+?",
          answer:
            "A page for your business: who you are, what you offer, and how people contact you. The price goes up if you need more pages, booking, or custom design.",
        },
        {
          id: "automation",
          question: "What is the automation from $300?",
          answer:
            "A Make.com-style flow that connects the tools you already use, so forms, alerts, and follow-ups stop being manual.",
        },
        {
          id: "saas",
          question: "Why does SaaS start at $2,000?",
          answer:
            "A complete SaaS is your own software. It takes a minimum of 32 hours. Project rate is $100 to $200 per hour, depending on what needs to be built. $2,000 is the starting point.",
        },
        {
          id: "consult",
          question: "What does $100/hour consulting cover?",
          answer:
            "Engineering and automations, and how to bring your business up to date: what to update, what to leave alone, and what to build first.",
        },
        {
          id: "meeting",
          question: "What happens in the first meeting?",
          answer:
            "It is 1 hour. You get $50 off. You tell me the project and leave with hours, a starting price, and the next step.",
        },
      ],
    },
    footer: {
      tagline:
        "Websites from $200+, automations from $300, and SaaS from $2,000. Engineer with 5+ years at American Express.",
      navigation: "Navigation",
      services: "Prices",
      legal: "Legal",
      connect: "Connect",
      rights: "All rights reserved.",
      serviceLinks: [
        { label: "Website from $200+", href: "/#services" },
        { label: "Automation from $300", href: "/#services" },
        { label: "SaaS from $2,000", href: "/#services" },
        { label: "Consulting $100/hour", href: "/#services" },
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
