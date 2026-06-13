export const services = [
  {
    title: "Website Builds",
    description:
      "Clean, professional websites for small businesses and personal brands — mobile-friendly, fast, and built to convert visitors into leads.",
    audience: "For businesses that need a credible online home.",
  },
  {
    title: "AI Automations",
    description:
      "Workflows that handle repetitive tasks — lead follow-ups, intake routing, data processing — so you can focus on your clients.",
    audience: "For teams drowning in manual admin work.",
  },
  {
    title: "MVP Development",
    description:
      "Turn your product idea into a working first version you can test with real users — scoped, focused, and launch-ready.",
    audience: "For founders validating before going all-in.",
  },
  {
    title: "Digital Presence Setup",
    description:
      "Branding direction, Google Business Profile, website, and social media foundation — everything a business needs to show up online.",
    audience: "For businesses starting from scratch or rebranding.",
  },
] as const;

export const clientWork = [
  {
    name: "Inara Health",
    url: "https://www.inarahealth.org/",
    image: "/images/inara-health.png",
    description:
      "ABA therapy agency in Miami. I built their full digital foundation — from brand identity to a live website that helps families find and trust their services.",
    services: [
      "Website",
      "Branding",
      "Google presence",
      "Social media setup",
    ],
  },
  {
    name: "Reflection Health Group",
    url: "https://reflection-healthgroup.com/",
    image: "/images/reflection-health.png",
    description:
      "Pediatric ABA therapy provider serving Miami-Dade and Broward. Bilingual site with lead capture, Google visibility, and cohesive brand across platforms.",
    services: [
      "Website",
      "Branding",
      "Google presence",
      "Social media setup",
    ],
  },
] as const;

export const personalProjects = [
  {
    name: "OSS Network",
    image: "/images/oss-network.png",
    description:
      "A mobile platform for Brazilian Jiu-Jitsu athletes and academies — competition tracking, athlete analytics, academy dashboards, and community features. Live on the App Store.",
    techTags: ["Flutter", "Mobile", "Analytics", "Supabase"],
    status: "Live",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/oss-network-flutter/id6756801934",
      },
      {
        label: "View on BuilderHub",
        url: "https://joinbuilderhub.vercel.app/projects/oss-network",
      },
    ],
  },
  {
    name: "BuilderHub",
    image: "/images/builderhub.png",
    description:
      "A project discovery and collaboration platform where builders, founders, and engineers share what they're building, find collaborators, and launch ideas together.",
    techTags: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    status: "In Progress",
    links: [
      {
        label: "Visit BuilderHub",
        url: "https://joinbuilderhub.vercel.app",
      },
    ],
  },
] as const;

export const packages = [
  {
    name: "Starter Website",
    price: "$500",
    description:
      "For small businesses that need a clean, professional online presence.",
    features: [
      "One-page website",
      "Mobile-friendly design",
      "Contact form",
      "Basic SEO setup",
    ],
    highlighted: false,
  },
  {
    name: "Business Presence",
    price: "$1,500",
    description:
      "For businesses that need a complete digital foundation — not just a website.",
    features: [
      "Website",
      "Branding direction",
      "Google Business Profile guidance/setup",
      "Social media profile setup",
      "Lead capture/contact flow",
    ],
    highlighted: true,
  },
  {
    name: "Custom Build",
    price: "$3,000+",
    description:
      "For founders and businesses that need a custom system or product.",
    features: [
      "MVP",
      "AI automation",
      "Internal tool",
      "Dashboard",
      "Custom workflow or integration",
    ],
    highlighted: false,
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We talk through your goals, audience, and what's getting in the way — so I build the right thing first.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I map out scope, features, timeline, and design direction before writing code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop your website, automation, or tool with regular check-ins along the way.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy, test everything, and make sure you're confident using what we built.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "After launch, I help you iterate based on real feedback and usage.",
  },
] as const;

export const credibilityItems = [
  "Software Engineer @ American Express",
  "Real Client Websites",
  "Branding + Google Presence",
  "English & Spanish",
] as const;

export const offerPaths = [
  {
    label: "Starter Website",
    price: "from $500",
    description: "Clean one-page site to get online fast",
    href: "#packages",
  },
  {
    label: "Business Presence",
    price: "from $1,500",
    description: "Website + branding + Google + social setup",
    href: "#packages",
    featured: true,
  },
  {
    label: "Custom Build",
    price: "from $3,000+",
    description: "MVPs, automations, dashboards & tools",
    href: "#packages",
  },
] as const;

export const whoIHelp = [
  {
    title: "Service businesses",
    description:
      "Beauty, wellness, fitness, and local providers who need a professional site, lead capture, and less manual work.",
    examples: "Salons, coaches, therapists, consultants",
  },
  {
    title: "Founders & creators",
    description:
      "People with a product idea or growing audience who need an MVP, landing page, or backend system to launch.",
    examples: "First-time founders, creators launching offers",
  },
  {
    title: "Small teams",
    description:
      "Businesses outgrowing spreadsheets and DMs who need a simple dashboard, workflow, or internal tool.",
    examples: "Ops-heavy small businesses, growing startups",
  },
] as const;

export const experienceDetails = [
  "Software Engineer at American Express",
  "Internal tools, dashboards, automation workflows, and database systems",
  "B.S. Digital Arts & Sciences, Computer Science minor",
  "Bilingual: English and Spanish",
  "Branding, websites, Google presence, and social media for real businesses",
] as const;
