import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
          cream: 'var(--color-brand-cream)',
          text: 'var(--color-brand-text)'
        },
        'ocean-mist': 'var(--color-ocean-mist)',
        'coffee-bean': 'var(--color-coffee-bean)',
        'alice-blue': 'var(--color-alice-blue)',
        'dark-teal': 'var(--color-dark-teal)'
      }
    }
  }
}
