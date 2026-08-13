<script setup lang="ts">
const profile = useProfile()
const { t, locale, locales, setLocale } = useI18n()

const navLinks = computed(() => [
  { href: '#about', label: t('nav.about') },
  { href: '#projects', label: t('nav.projects') },
  { href: '#skills', label: t('nav.skills') },
  { href: '#contact', label: t('nav.contact') }
])

const availableLocales = computed(() => locales.value)

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-brand-cream/10 bg-brand-primary text-brand-cream">
    <div class="px-4">
      <div class="flex items-center justify-between py-4">
        <span class="font-bold">{{ profile?.name }}</span>

        <!-- Classic navbar: md and up -->
        <nav class="hidden md:flex items-center gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-brand-cream/80 hover:text-brand-cream transition-colors"
          >
            {{ link.label }}
          </a>
          <select
            :value="locale"
            class="bg-transparent border border-brand-cream/40 rounded px-2 py-1 text-sm text-brand-cream"
            @change="setLocale(($event.target as HTMLSelectElement).value as typeof locale)"
          >
            <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code" class="text-brand-primary">
              {{ loc.name }}
            </option>
          </select>
        </nav>

        <!-- Burger button: below md -->
        <button
          type="button"
          class="md:hidden inline-flex flex-col justify-center gap-1.5 w-8 h-8"
          :aria-expanded="isOpen"
          :aria-label="t('nav_toggle')"
          @click="isOpen = !isOpen"
        >
          <span
            class="block h-0.5 w-6 bg-brand-cream transition-transform"
            :class="isOpen ? 'translate-y-2 rotate-45' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-brand-cream transition-opacity"
            :class="isOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="block h-0.5 w-6 bg-brand-cream transition-transform"
            :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
          />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-[grid-template-rows] duration-300 ease-out"
        leave-active-class="transition-[grid-template-rows] duration-200 ease-in"
        enter-from-class="grid-rows-[0fr]"
        enter-to-class="grid-rows-[1fr]"
        leave-from-class="grid-rows-[1fr]"
        leave-to-class="grid-rows-[0fr]"
      >
        <nav v-if="isOpen" class="md:hidden grid overflow-hidden">
          <div class="flex flex-col gap-3 pb-4 min-h-0">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-brand-cream/80 hover:text-brand-cream transition-colors"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
            <select
              :value="locale"
              class="bg-transparent border border-brand-cream/40 rounded px-2 py-1 text-sm text-brand-cream self-start"
              @change="setLocale(($event.target as HTMLSelectElement).value as typeof locale)"
            >
              <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code" class="text-brand-primary">
                {{ loc.name }}
              </option>
            </select>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
