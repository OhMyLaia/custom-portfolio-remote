export interface ProjectItem {
  title: string
  description: string
  image?: string
  url?: string
  tags?: string[]
}

export interface SkillItem {
  name: string
  level?: string
}

export interface ProfileColors {
  primary: string
  secondary: string
  accent: string
  cream: string
  text: string
}

export interface ProfileSocial {
  github?: string
  linkedin?: string
  twitter?: string
  instagram?: string
}

export interface ProfileCv {
  es?: string
  en?: string
}

export interface ProfileSeo {
  fullName: string
  alternateNames?: string[]
  image?: string
  jobTitle: Record<string, string>
}

export interface Profile {
  id: string
  name: string
  logo?: string
  favicon?: string
  tagline: string
  bio: string
  projects: ProjectItem[]
  skills: SkillItem[]
  colors: ProfileColors
  contactEmail: string
  social: ProfileSocial
  cv?: ProfileCv
  seo: ProfileSeo
}
