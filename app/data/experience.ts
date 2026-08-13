export interface ExperienceEntry {
  dateRange: string
  title: string
  company: string
  companyUrl?: string
  previousRoles?: string[]
  description: string
  tags: string[]
  image?: string
}

const vlTags = ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Vercel', 'Railway', 'GitHub Actions', 'Playwright', 'Jest', 'Capacitor', 'Firebase']
const abroadenTags = ['Vue.js', 'JavaScript', 'Pinia', 'Tailwind', 'REST API', 'Playwright']
const cibernariumTags = ['React.js', 'TypeScript', 'Zod', 'Tailwind', 'API', 'Vitest']

export const experienceByLocale: Record<string, ExperienceEntry[]> = {
  en: [
    {
      dateRange: '2025 — Present',
      title: 'Tech Lead',
      company: 'Vuélvete Local',
      companyUrl: 'https://vuelvetelocal.com',
      image: '/images/laia/vl-card.png',
      description:
        'Full-scale web and mobile architectural redesign spanning a modular MVC backend, frontend, i18n, marketplace, search engine, and scraping. Led large-scale data migration and polymorphic modeling while maintaining legacy and production environments in parallel.',
      tags: vlTags
    },
    {
      dateRange: '2025',
      title: 'Fullstack Developer',
      company: 'Abroaden.co',
      companyUrl: 'https://abroaden.co/',
      image: '/images/laia/abroaden-card.png',
      description:
        'Resolved critical bugs across the platform, significantly improving system stability and user experience. Designed, built, and deployed end-to-end core features, including user profile management and dynamic state management.',
      tags: abroadenTags
    },
    {
      dateRange: '2025',
      title: 'Frontend Developer',
      company: 'Cibernàrium',
      companyUrl: 'https://ita-wiki-frontend-production.up.railway.app/',
      image: '/images/laia/cibernarium-card.png',
      description:
        'Translated Figma designs into high-fidelity, responsive layouts and UI components. Built interactive data visualizations and complex forms in close collaboration with the backend team.',
      tags: cibernariumTags
    }
  ],
  es: [
    {
      dateRange: '2025 — Presente',
      title: 'Tech Lead',
      company: 'Vuélvete Local',
      companyUrl: 'https://vuelvetelocal.com',
      image: '/images/laia/vl-card.png',
      description:
        'Rediseño integral de la arquitectura web y mobile: backend MVC modular, frontend, i18n, marketplace, motor de búsqueda y scraping. Migración masiva de datos, modelado polimórfico y mantenimiento simultáneo de los entornos legacy y producción.',
      tags: vlTags
    },
    {
      dateRange: '2025',
      title: 'Fullstack Developer',
      company: 'Abroaden.co',
      companyUrl: 'https://abroaden.co/',
      image: '/images/laia/abroaden-card.png',
      description:
        'Corrección de bugs en la plataforma, mejorando la estabilidad y experiencia de usuario. Desarrollo e implementación de nuevas funcionalidades —actualización de perfiles y gestión de estados— desde el diseño hasta el despliegue.',
      tags: abroadenTags
    },
    {
      dateRange: '2025',
      title: 'Frontend Developer',
      company: 'Cibernàrium',
      companyUrl: 'https://ita-wiki-frontend-production.up.railway.app/',
      image: '/images/laia/cibernarium-card.png',
      description:
        'Maquetación y creación de layouts fieles a los diseños de Figma. Visualización de datos y formularios, trabajando en estrecha colaboración con el equipo de backend.',
      tags: cibernariumTags
    }
  ],
  ca: [
    {
      dateRange: '2025 — Present',
      title: 'Tech Lead',
      company: 'Vuélvete Local',
      companyUrl: 'https://vuelvetelocal.com',
      image: '/images/laia/vl-card.png',
      description:
        "Redisseny integral de l'arquitectura web i mobile: backend MVC modular, frontend, i18n, marketplace, motor de cerca i scraping. Migració massiva de dades, modelatge polimòrfic i manteniment simultani dels entorns legacy i producció.",
      tags: vlTags
    },
    {
      dateRange: '2025',
      title: 'Fullstack Developer',
      company: 'Abroaden.co',
      companyUrl: 'https://abroaden.co/',
      image: '/images/laia/abroaden-card.png',
      description:
        "Correcció de bugs a la plataforma, millorant l'estabilitat i l'experiència d'usuari. Desenvolupament i implementació de noves funcionalitats —actualització de perfils i gestió d'estats— des del disseny fins al desplegament.",
      tags: abroadenTags
    },
    {
      dateRange: '2025',
      title: 'Frontend Developer',
      company: 'Cibernàrium',
      companyUrl: 'https://ita-wiki-frontend-production.up.railway.app/',
      image: '/images/laia/cibernarium-card.png',
      description:
        'Maquetació i creació de layouts fidels als dissenys de Figma. Visualització de dades i formularis, treballant en estreta col·laboració amb l\'equip de backend.',
      tags: cibernariumTags
    }
  ]
}
