import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

function withOpacity(variable: string) {
  return ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue === undefined
      ? `var(${variable})`
      : `color-mix(in srgb, var(${variable}) calc(${opacityValue} * 100%), transparent)`
}

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          primary: withOpacity('--color-brand-primary'),
          secondary: withOpacity('--color-brand-secondary'),
          accent: withOpacity('--color-brand-accent'),
          cream: withOpacity('--color-brand-cream'),
          text: withOpacity('--color-brand-text')
        },
        accent: withOpacity('--color-accent'),
        ink: withOpacity('--color-ink'),
        foreground: withOpacity('--color-foreground'),
        surface: withOpacity('--color-surface')
      }
    }
  }
}
