import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
          bg: 'var(--color-brand-bg)',
          text: 'var(--color-brand-text)'
        }
      }
    }
  }
}
