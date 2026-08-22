import type { Profile } from '~~/shared/types/profile'

export const laia: Profile = {
  id: 'laia',
  name: 'Laia',
  logo: '/images/laia/laia-logo.svg',
  tagline: '',
  bio: '',
  projects: [],
  skills: [],
  colors: {
    primary: '#4D243D',
    secondary: '#068D9D',
    accent: '#068D9D',
    cream: '#FBF6EF',
    text: '#4D243D'
  },
  contactEmail: 'hello@ohmylaia.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/laia-martinez-lerma/',
    github: 'https://github.com/OhMyLaia'
  },
  cv: {
    es: '/cv/laia-martinez-lerma-cv-es.pdf',
    en: '/cv/laia-martinez-lerma-cv-en.pdf'
  },
  seo: {
    fullName: 'Laia Martínez Lerma',
    alternateNames: ['Laia Martinez Lerma', 'ohmylaia', 'laiamlerma'],
    image: '/images/laia/laia-working.jpeg',
    jobTitle: {
      en: 'Tech Lead & Full-Stack Developer',
      es: 'Tech Lead y Desarrolladora Full-Stack',
      ca: 'Tech Lead i Desenvolupadora Full-Stack'
    }
  }
}
