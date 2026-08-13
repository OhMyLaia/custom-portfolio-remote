import type { Config } from 'tailwindcss'

function withOpacity(variable: string) {
  return ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue === undefined
      ? `var(${variable})`
      : `color-mix(in srgb, var(${variable}) calc(${opacityValue} * 100%), transparent)`
}

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          primary: withOpacity('--color-brand-primary'),
          secondary: withOpacity('--color-brand-secondary'),
          accent: withOpacity('--color-brand-accent'),
          cream: withOpacity('--color-brand-cream'),
          text: withOpacity('--color-brand-text')
        },
        'ocean-mist': withOpacity('--color-ocean-mist'),
        'coffee-bean': withOpacity('--color-coffee-bean'),
        'alice-blue': withOpacity('--color-alice-blue'),
        'dark-teal': withOpacity('--color-dark-teal')
      }
    }
  }
}
