<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const localeAbbreviations: Record<string, string> = {
  en: 'EN',
  es: 'ES',
  ca: 'CAT'
}

const availableLocales = computed(() => locales.value)
</script>

<template>
  <div class="relative inline-flex items-center">
    <svg
      class="pointer-events-none absolute left-2.5 h-4 w-4 text-alice-blue/70"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z" />
    </svg>

    <select
      :value="locale"
      class="appearance-none rounded-full border border-alice-blue bg-transparent py-1.5 pl-8 pr-7 text-sm font-semibold text-alice-blue transition-colors hover:border-ocean-mist hover:text-ocean-mist focus:outline-none focus:border-ocean-mist"
      @change="setLocale(($event.target as HTMLSelectElement).value as typeof locale)"
    >
      <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code" class="text-brand-primary">
        {{ localeAbbreviations[loc.code] ?? loc.code.toUpperCase() }}
      </option>
    </select>

    <svg
      class="pointer-events-none absolute right-2.5 h-3 w-3 text-alice-blue/70"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
</template>
