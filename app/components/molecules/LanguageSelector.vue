<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const localeAbbreviations: Record<string, string> = {
  en: 'EN',
  es: 'ES',
  ca: 'CAT'
}

const availableLocales = computed(() => locales.value)
const currentLabel = computed(() => localeAbbreviations[locale.value] ?? locale.value.toUpperCase())

const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
}

function select(code: string) {
  setLocale(code as typeof locale.value)
  isOpen.value = false
}

function onClickOutside(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="root" class="relative inline-block text-left">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-full border border-brand-cream/30 py-1.5 pl-3 pr-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z" />
      </svg>
      {{ currentLabel }}
      <svg
        class="h-3 w-3 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <ul
        v-if="isOpen"
        role="listbox"
        class="absolute right-0 z-10 mt-2 min-w-32 overflow-hidden rounded-xl border border-brand-cream/20 bg-black py-1 shadow-lg"
      >
        <li v-for="loc in availableLocales" :key="loc.code" role="option" :aria-selected="loc.code === locale">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-4 py-2 text-sm text-brand-cream transition-colors hover:bg-accent hover:text-black"
            :class="{ 'text-accent': loc.code === locale }"
            @click="select(loc.code)"
          >
            {{ localeAbbreviations[loc.code] ?? loc.code.toUpperCase() }}
            <span v-if="loc.code === locale" aria-hidden="true">&check;</span>
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>
