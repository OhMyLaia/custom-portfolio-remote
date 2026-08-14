import type { ExperienceEntry } from '~/data/experience'

const laiaProjects: Record<string, ExperienceEntry[]> = {
  en: [
    {
      dateRange: '2024 — Present',
      title: 'CTO / Co-founder',
      company: 'Siya App',
      companyUrl: 'https://siya-frontend-woad.vercel.app/',
      image: '/images/laia/siya-card.svg',
      description:
        'Architected and built the core platform end-to-end, from backend (MVC) to frontend, including wireframes, mockups, and a custom REST API. Integrated data from public APIs to populate the database.',
      tags: ['React', 'TypeScript', 'Figma', 'Supabase', 'PostgreSQL', 'Node', 'Express', 'Sequelize', 'Zod']
    },
    {
      dateRange: '2019 — 2020',
      title: 'Illustrator',
      company: 'TRANSITAR — Diputació de Barcelona',
      companyUrl: 'https://www.diba.cat/es/web/transitar/visita-virtual/condicions-entorn',
      image: '/images/laia/transitar-card.jpg',
      description:
        "Illustrated 'Les condicions de l'entorn', a room within TRANSITAR, an itinerant group exhibition on life orientation exploring how family, environment, and circumstance shape personal trajectories.",
      tags: ['Illustration', 'Editorial Illustration', 'Adobe Illustrator']
    }
  ],
  es: [
    {
      dateRange: '2024 — Actualidad',
      title: 'CTO / Co-fundadora',
      company: 'Siya App',
      companyUrl: 'https://siya-frontend-woad.vercel.app/',
      image: '/images/laia/siya-card.svg',
      description:
        'Arquitectura y desarrollo de la plataforma central desde backend (MVC) hasta frontend, incluyendo wireframes, mockups y una API REST personalizada. Integración de datos desde APIs públicas para alimentar la base de datos.',
      tags: ['React', 'TypeScript', 'Figma', 'Supabase', 'PostgreSQL', 'Node', 'Express', 'Sequelize', 'Zod']
    },
    {
      dateRange: '2019 — 2020',
      title: 'Ilustradora',
      company: 'TRANSITAR — Diputació de Barcelona',
      companyUrl: 'https://www.diba.cat/es/web/transitar/visita-virtual/condicions-entorn',
      image: '/images/laia/transitar-card.jpg',
      description:
        "Ilustración de 'Les condicions de l'entorn', una sala de TRANSITAR, una exposición itinerante y colectiva sobre orientación vital que explora cómo la familia, el entorno y las circunstancias moldean la trayectoria personal.",
      tags: ['Ilustración', 'Ilustración editorial', 'Adobe Illustrator']
    }
  ],
  ca: [
    {
      dateRange: '2024 — Actualitat',
      title: 'CTO / Cofundadora',
      company: 'Siya App',
      companyUrl: 'https://siya-frontend-woad.vercel.app/',
      image: '/images/laia/siya-card.svg',
      description:
        "Arquitectura i desenvolupament de la plataforma central des del backend (MVC) fins al frontend, incloent wireframes, mockups i una API REST personalitzada. Integració de dades des d'APIs públiques per alimentar la base de dades.",
      tags: ['React', 'TypeScript', 'Figma', 'Supabase', 'PostgreSQL', 'Node', 'Express', 'Sequelize', 'Zod']
    },
    {
      dateRange: '2019 — 2020',
      title: 'Il·lustradora',
      company: 'TRANSITAR — Diputació de Barcelona',
      companyUrl: 'https://www.diba.cat/es/web/transitar/visita-virtual/condicions-entorn',
      image: '/images/laia/transitar-card.jpg',
      description:
        "Il·lustració de 'Les condicions de l'entorn', una sala de TRANSITAR, una exposició itinerant i col·lectiva sobre orientació vital que explora com la família, l'entorn i les circumstàncies modelen la trajectòria personal.",
      tags: ['Il·lustració', 'Il·lustració editorial', 'Adobe Illustrator']
    }
  ]
}

export const projectsByProfile: Record<string, Record<string, ExperienceEntry[]>> = {
  laia: laiaProjects,
  gabo: { en: [], es: [], ca: [] }
}
