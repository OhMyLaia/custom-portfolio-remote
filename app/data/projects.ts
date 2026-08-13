import type { ExperienceEntry } from '~/data/experience'

export const projectsByLocale: Record<string, ExperienceEntry[]> = {
  en: [
    {
      dateRange: '2024 — Present',
      title: 'CTO / Co-founder',
      company: 'Siya App',
      companyUrl: 'https://siya-frontend-woad.vercel.app/',
      description:
        'Architected and built the core platform end-to-end, from backend (MVC) to frontend, including wireframes, mockups, and a custom REST API. Integrated data from public APIs to populate the database.',
      tags: ['React', 'TypeScript', 'Figma', 'Supabase', 'PostgreSQL', 'Node', 'Express', 'Sequelize', 'Zod']
    }
  ],
  es: [
    {
      dateRange: '2024 — Actualidad',
      title: 'CTO / Co-fundadora',
      company: 'Siya App',
      companyUrl: 'https://siya-frontend-woad.vercel.app/',
      description:
        'Arquitectura y desarrollo de la plataforma central desde backend (MVC) hasta frontend, incluyendo wireframes, mockups y una API REST personalizada. Integración de datos desde APIs públicas para alimentar la base de datos.',
      tags: ['React', 'TypeScript', 'Figma', 'Supabase', 'PostgreSQL', 'Node', 'Express', 'Sequelize', 'Zod']
    }
  ],
  ca: [
    {
      dateRange: '2024 — Actualitat',
      title: 'CTO / Cofundadora',
      company: 'Siya App',
      companyUrl: 'https://siya-frontend-woad.vercel.app/',
      description:
        "Arquitectura i desenvolupament de la plataforma central des del backend (MVC) fins al frontend, incloent wireframes, mockups i una API REST personalitzada. Integració de dades des d'APIs públiques per alimentar la base de dades.",
      tags: ['React', 'TypeScript', 'Figma', 'Supabase', 'PostgreSQL', 'Node', 'Express', 'Sequelize', 'Zod']
    }
  ]
}
