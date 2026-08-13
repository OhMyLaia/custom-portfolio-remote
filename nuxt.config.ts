// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    resendApiKey: '',
    resendFromEmail: 'onboarding@resend.dev'
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'ca', language: 'ca-ES', name: 'Català', file: 'ca.json' }
    ],
    defaultLocale: 'es',
    strategy: 'no_prefix',
    langDir: 'locales'
  }
})
