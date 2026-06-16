export const services = [
  {
    title: "Automatización de procesos",
    description:
      "Seguimiento, recordatorios, reportes. Tareas repetitivas que haces a mano hoy, corren solas mañana.",
    audience: "Pierdes horas en lo mismo cada semana",
  },
  {
    title: "Sistemas digitales conectados",
    description:
      "Web, formularios, pagos y seguimiento en un solo flujo. Sin saltar entre apps y hojas sueltas.",
    audience: "Todo está disperso y nada se habla entre sí",
  },
  {
    title: "Herramientas a tu medida",
    description:
      "Portales, dashboards o productos propios cuando las apps genéricas ya no encajan con tu operación.",
    audience: "Excel y herramientas genéricas ya no alcanzan",
  },
  {
    title: "IA práctica",
    description:
      "Clasificación, resúmenes y sugerencias para acelerar tu trabajo. Tú siempre revisas y decides.",
    audience: "Quieres trabajar más rápido sin perder control",
  },
] as const;

export const featuredServices = [
  {
    tag: "Presencia digital",
    title: "Páginas Web",
    headline: "Tu negocio trabaja aunque no estés.",
    description:
      "Sitio profesional que presenta tu oferta, captura leads y convierte visitas en clientes, las 24 horas, sin que tengas que perseguir a nadie.",
    outcome: "Más clientes sin esfuerzo extra",
    color: "blue" as const,
  },
  {
    tag: "Automatización",
    title: "Automatizaciones",
    headline: "Deja de hacer lo mismo una y otra vez.",
    description:
      "Conecto tu agenda, formularios, pagos y seguimiento para que el flujo de cliente funcione solo. Tú te enfocas en crecer.",
    outcome: "Horas libres para lo que importa",
    color: "purple" as const,
  },
  {
    tag: "Sistemas & IA",
    title: "Sistemas a tu medida",
    headline: "Infraestructura que escala contigo.",
    description:
      "Portales, dashboards y sistemas inteligentes para que tu equipo tome mejores decisiones, atienda más rápido y no dependa de hojas de Excel.",
    outcome: "Operación organizada que escala",
    color: "teal" as const,
  },
] as const;

export const clientWork = [
  {
    name: "Inara Health",
    url: "https://www.inarahealth.org/",
    image: "/images/inara-health.png",
    description:
      "Agencia de terapia ABA en Miami. Construí su base digital completa, identidad de marca, sitio web y presencia que ayuda a las familias a encontrarlos y confiar.",
    services: ["Sitio web", "Branding", "Google", "Redes sociales"],
  },
  {
    name: "Reflection Health Group",
    url: "https://reflection-healthgroup.com/",
    image: "/images/reflection-health.png",
    description:
      "Proveedor de terapia ABA pediátrica en Miami-Dade y Broward. Sitio bilingüe con captura de leads, visibilidad en Google y marca cohesiva.",
    services: ["Sitio web", "Branding", "Google", "Redes sociales"],
  },
] as const;

export const personalProjects = [
  {
    name: "OSS Network",
    image: "/images/oss-network.png",
    description:
      "Plataforma móvil para atletas y academias de Brazilian Jiu-Jitsu, competencias, analíticas, reportes y comunidad. Disponible en App Store.",
    techTags: ["Flutter", "Mobile", "Analytics", "Supabase"],
    status: "En vivo",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/oss-network-flutter/id6756801934",
      },
      {
        label: "Ver en BuilderHub",
        url: "https://joinbuilderhub.vercel.app/projects/oss-network",
      },
    ],
  },
  {
    name: "BuilderHub",
    image: "/images/builderhub.png",
    description:
      "Plataforma de descubrimiento y colaboración donde builders, founders e ingenieros comparten proyectos y encuentran colaboradores.",
    techTags: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    status: "En progreso",
    links: [
      {
        label: "Visitar BuilderHub",
        url: "https://joinbuilderhub.vercel.app",
      },
    ],
  },
] as const;

export const consultationOffers = {
  label: "Consultoría",
  title: "¿No sabes por dónde empezar? Empieza aquí.",
  subtitle: "Sesiones cortas, sin compromiso de proyecto. Te digo qué conviene y qué no.",
  note: "Primera cita de 20 min gratis. Después eliges si quieres una sesión de pago o un proyecto.",
  sessions: [
    {
      name: "Consulta express",
      price: "$75",
      duration: "30 minutos",
      description:
        "Una duda concreta: ¿qué conviene automatizar? ¿qué herramienta usar? ¿por dónde empiezo?",
      includes: [
        "Videollamada de 30 minutos",
        "Respuestas directas a tus preguntas",
        "Recomendación honesta si no necesitas un proyecto grande",
      ],
      highlighted: false,
    },
    {
      name: "Sesión de estrategia",
      price: "$150",
      duration: "60 minutos",
      description:
        "Revisamos qué te quita más tiempo hoy y qué conviene automatizar primero.",
      includes: [
        "Videollamada de 60 minutos",
        "Mapa de tu operación actual: dónde se pierde tiempo y dinero",
        "Lista priorizada: qué hacer primero, segundo y tercero",
        "Estimado de inversión si decides implementar",
      ],
      highlighted: true,
    },
    {
      name: "Diagnóstico digital",
      price: "$450–$650",
      duration: "3–5 días",
      description:
        "Auditoría escrita de tu operación digital: qué funciona, qué duele y qué mejorar primero.",
      includes: [
        "Revisión de todos tus canales de contacto",
        "Documento con problemas encontrados y soluciones",
        "Plan de 30/60/90 días en lenguaje sencillo",
        "Propuesta con precio fijo si quieres que yo lo implemente",
      ],
      highlighted: false,
    },
  ],
} as const;

export const discoveryOffer = {
  name: "Diagnóstico digital",
  price: "$450–$650",
  timeline: "3–5 días",
  hours: "3–5 hrs de trabajo",
  description:
    "Recomendado antes de proyectos grandes. Sabes exactamente qué se va a hacer, cuánto cuesta y en cuánto tiempo, antes de pagar el proyecto completo.",
  deliverables: [
    "Revisión de cómo opera tu negocio hoy: web, herramientas, flujos y puntos de fricción",
    "Dónde se pierden clientes, tiempo y dinero",
    "Qué automatizar primero y por qué",
    "Plan para 30, 60 y 90 días",
    "Propuesta de implementación con precio y fechas claras",
  ],
  why: "Así no pagas un proyecto a ciegas y yo no construyo lo incorrecto.",
} as const;

export const packages = [
  {
    name: "Operación Automatizada",
    tier: "Starter",
    price: "$1,800",
    priceRange: "– $2,800",
    timeline: "4–6 semanas",
    audience: "Para negocios que quieren empezar a automatizar",
    bestFor: "Ordena tu operación sin rehacer todo",
    problem:
      "Hacemos lo mismo una y otra vez a mano: seguimiento, recordatorios, captura de datos. Siempre se nos escapa algo.",
    description:
      "Automatizo los flujos que más te quitan tiempo: captura de clientes, agenda, seguimiento y reportes automáticos.",
    features: [
      "Formularios y flujos de ingreso de clientes automatizados",
      "Agenda en línea con recordatorios y confirmaciones",
      "Hoja de seguimiento: quién entró, quién avanzó, quién pagó",
      "Automatizaciones en los canales donde ya operas (web, email, redes)",
      "Plantillas y respuestas para preguntas frecuentes",
      "Resumen semanal: qué entró, qué se cerró, qué falta",
      "Capacitación de 60 min + guía escrita para tu equipo",
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
    timeline: "6–10 semanas",
    audience: "Para negocios listos para escalar con sistemas",
    bestFor: "Web profesional + operación conectada de punta a punta",
    problem:
      "Tenemos clientes, pero web, cobros, seguimiento y herramientas no están conectados.",
    description:
      "Web profesional, Google optimizado y toda la operación conectada: desde el primer contacto hasta el cliente pagado.",
    features: [
      "Página web profesional (nueva o mejora seria de la actual)",
      "Perfil de Google optimizado + pedir reseñas después del servicio",
      "Formulario de ingreso del cliente (datos, preferencias, plazos)",
      "Links de pago conectados a tu seguimiento de clientes",
      "Alertas al equipo cuando entra un cliente nuevo o cambia un estado",
      "Plantillas reutilizables para propuestas y paquetes",
      "Automatizaciones de bienvenida y seguimiento post-venta",
      "Español e inglés en formularios y comunicaciones clave",
      "1 mes de ajustes después del lanzamiento (sin funciones nuevas)",
    ],
    includes: "Web + 3 canales + un solo sistema de seguimiento",
    highlighted: true,
  },
  {
    name: "Sistema a Tu Medida",
    tier: "Enterprise",
    price: "desde $6,000",
    priceRange: "",
    timeline: "10–14 semanas",
    audience: "Para negocios que necesitan una solución propia a medida",
    bestFor: "Cuando Excel y apps sueltas ya no alcanzan",
    problem:
      "Ya probamos apps sueltas y Excel, necesitamos algo hecho para cómo trabajamos.",
    description:
      "Herramienta o sistema completamente personalizado, construido para tu operación exacta.",
    features: [
      "Portal donde el cliente ve su proyecto, archivos y aprobaciones",
      "Panel interno con números, clientes y entregas",
      "Conexión entre agenda, pagos, email y seguimiento de clientes",
      "Primera versión de producto o app para probar con usuarios reales",
      "Ayuda inteligente con reglas claras, tú siempre revisas",
      "Entrega por etapas con documentación y plan técnico",
    ],
    includes: "Alcance definido en el diagnóstico, precio según lo que necesites",
    highlighted: false,
  },
] as const;

export const operationsRetainer = {
  name: "Acompañamiento mensual",
  price: "$500",
  priceRange: "– $900",
  priceSuffix: "/mes",
  capacity: "Máx. 2 negocios · unas 8 hrs/mes",
  audience:
    "Después del Paquete 1 o 2, para ir mejorando sin contratar una agencia",
  description:
    "Reviso que las automatizaciones sigan funcionando, optimizo flujos y agrego mejoras incrementales.",
  features: [
    "Revisión y mejora de automatizaciones existentes",
    "Nuevos flujos para campañas o procesos que surjan",
    "Ajustes de formularios, seguimiento y reportes",
    "Resumen mensual: qué funciona, qué duele, qué mejorar",
    "Prioridad en mi agenda (no disponible 24/7)",
  ],
  excludes:
    "Proyectos grandes nuevos, se cotizan aparte",
} as const;

export const packageEngagementNote =
  "Trabajo con pocos clientes a la vez para dar foco real. Las herramientas mensuales van a tu nombre y suelen costar ~$15–30/mes.";

export const painMatrix = {
  label: "Alcance",
  title: "Qué problema resuelve cada paquete",
  subtitle: "Comparación por tipo de dolor operativo.",
  areas: [
    { name: "Automatizar tareas repetitivas", tier1: true, tier2: true, tier3: true },
    { name: "Captación y seguimiento de clientes", tier1: true, tier2: true, tier3: true },
    { name: "Presencia web y Google", tier1: false, tier2: true, tier3: true },
    { name: "Agenda y recordatorios", tier1: true, tier2: true, tier3: true },
    { name: "Reportes y visibilidad semanal", tier1: true, tier2: true, tier3: true },
    { name: "Onboarding post-venta", tier1: false, tier2: true, tier3: true },
    { name: "Cobros y pagos integrados", tier1: false, tier2: true, tier3: true },
    { name: "Pedir reseñas en Google", tier1: false, tier2: true, tier3: true },
    { name: "Portal, app o sistema propio", tier1: false, tier2: false, tier3: true },
  ],
  tierLabels: ["Paquete 1", "Paquete 2", "Paquete 3"],
} as const;

export const policies = {
  label: "Políticas",
  title: "Cómo trabajamos juntos",
  subtitle: "Reglas claras para cuidar tu proyecto y mi tiempo.",
  items: [
    {
      title: "Citas por agenda",
      description: "Usamos Cal.com, no llamadas sorpresa a cualquier hora.",
    },
    {
      title: "Tiempo de respuesta",
      description: "24–48 horas hábiles por email o WhatsApp.",
    },
    {
      title: "Cambios extra",
      description: "Si pides algo fuera del acuerdo inicial, se cotiza aparte ($75–125/hr).",
    },
    {
      title: "Inicio del proyecto",
      description: "Empiezo cuando se paga el 50% del depósito acordado.",
    },
    {
      title: "Herramientas mensuales",
      description: "Las cuentas de herramientas (agenda, automatizaciones) van a tu nombre, tú las controlas.",
    },
  ],
} as const;

export const processSteps = [
  {
    number: "01",
    title: "Charla gratis",
    description: "20 min para entender tu negocio y ver si hay fit.",
  },
  {
    number: "02",
    title: "Plan con precio",
    description: "Qué se hace, cuánto cuesta y en cuántas semanas.",
  },
  {
    number: "03",
    title: "Construcción",
    description: "Web, automatizaciones y seguimiento — con avances regulares.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Probamos todo y te enseño a usarlo con guías para tu equipo.",
  },
  {
    number: "05",
    title: "Ajustes",
    description: "Corrijo detalles post-lanzamiento. Opcional: acompañamiento mensual.",
  },
] as const;

export const credibilityItems = [
  "Ingeniera @ American Express",
  "Automatización e IA para negocios",
  "Bilingüe EN / ES",
] as const;

export const offerPaths = [
  {
    label: "Consulta",
    price: "desde $75",
    description: "30–60 min · sin proyecto",
    href: "#consultation",
  },
  {
    label: "Operación Automatizada",
    price: "$1.8k–$2.8k",
    description: "Flujos y tareas que corren solas",
    href: "#packages",
  },
  {
    label: "Negocio Digital",
    price: "$3.2k–$5k",
    description: "Web + sistemas conectados",
    href: "#packages",
    featured: true,
  },
] as const;

export const bookingOptions = [
  {
    id: "free",
    label: "Llamada gratis · 20 min",
    price: "Gratis",
    description: "Cuéntame el problema y te digo qué puedo hacer por tu negocio.",
    detail:
      "Sin presión, sin compromiso. Platicamos, veo cómo funciona tu operación y te digo un camino claro. La mayoría empieza aquí.",
    badge: "Recomendado",
    calUrl: null as string | null, // usa el embed principal
  },
  {
    id: "consult",
    label: "Sesión de estrategia",
    price: "desde $75",
    description: "Una sesión enfocada en priorizar qué mejorar primero.",
    detail:
      "30 min ($75) o 60 min ($150). Sales con un plan priorizado, pasos concretos y estimado de inversión si decides avanzar.",
    badge: "Sin proyecto",
    calUrl: "https://cal.com/angelica-roque-bznohb" as string | null,
  },
  {
    id: "project",
    label: "Quiero un proyecto",
    price: "desde $1,800",
    description: "Listo para construir: web, automatización o sistema a medida.",
    detail:
      "Empezamos con la llamada gratis para entender alcance. Luego propuesta por escrito: qué incluye, cuánto cuesta y en cuánto tiempo.",
    badge: "Implementación",
    calUrl: "https://cal.com/angelica-roque-bznohb" as string | null,
  },
] as const;

export const bookingSteps = [
  {
    number: 1,
    title: "Elige",
    description: "Gratis, consulta o proyecto.",
  },
  {
    number: 2,
    title: "Revisa",
    description: "Qué incluye y qué conviene.",
  },
  {
    number: 3,
    title: "Agenda",
    description: "Escoge fecha y hora.",
  },
] as const;

export const whoIHelp = [
  {
    title: "Negocios de servicios",
    description:
      "Salud, belleza, coaching, consultoría — quien pierde tiempo en tareas manuales y necesita orden.",
    examples: "Clínicas, decoradoras, coaches, terapeutas",
  },
  {
    title: "Emprendedores",
    description:
      "Quien tiene idea o audiencia y necesita sistemas, web o herramientas para operar sin caos.",
    examples: "Primer negocio, creadores con servicio propio",
  },
  {
    title: "Equipos pequeños",
    description:
      "Negocios que ya no alcanzan con Excel y procesos manuales y necesitan algo más organizado.",
    examples: "Negocios locales en crecimiento",
  },
] as const;

export const experienceDetails = [
  "Ingeniera de software en American Express",
  "Automatizaciones, reportes y herramientas internas",
  "Licenciatura en Digital Arts & Sciences + Computer Science",
  "Bilingüe: inglés y español",
  "Webs, sistemas y flujos para negocios en Miami",
] as const;

export const ctaPerks = [
  {
    text: "Cuéntame qué te quita tiempo y te digo por dónde empezar",
  },
  {
    text: "Primera cita de 20 min gratis, sin presión",
  },
  {
    text: "Sales con claridad, trabajemos o no",
  },
] as const;

export const clientWorkHighlights = [
  { value: "Sitio web", label: "Diseño y desarrollo" },
  { value: "Branding", label: "Identidad visual" },
  { value: "Google + Redes", label: "Presencia en línea" },
] as const;

export const ui = {
  mostPopular: "Más popular",
  includes: "Incluye",
  notIncluded: "No incluye",
  ongoing: "Mensual",
  from: "desde",
  deliverables: "Qué recibes",
  whyDiscovery: "Por qué vale la pena",
  effort: "Nota sobre el trabajo",
  freeIntro: "Primera cita 20 min · gratis",
} as const;
