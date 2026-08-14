<script setup lang="ts">
const profile = useProfile()
const { t } = useI18n()

const navLinks = computed(() => [
  { href: '#about', label: t('nav.about') },
  { href: '/projects', label: t('nav.projects') },
  { href: '/experience', label: t('nav.experience') },
  { href: '#press', label: t('nav.press') },
  { href: '/contact', label: t('nav.contact') }
])

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-black text-foreground md:p-6">
    <div class="px-4">
      <div class="flex items-center justify-between py-4">
        <a :href="`/#${profile?.id}`" class="font-bold hover:opacity-80 transition-opacity">{{ profile?.name }}</a>

        <!-- Classic navbar: md and up -->
        <nav class="hidden md:flex items-center gap-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-foreground py-2 px-3 hover:bg-foreground hover:text-black transition-colors"
          >
            {{ link.label }}
          </a>
          <LanguageSelector />
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
            class="block h-0.5 w-6 bg-foreground transition-transform"
            :class="isOpen ? 'translate-y-2 rotate-45' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-foreground transition-opacity"
            :class="isOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="block h-0.5 w-6 bg-foreground transition-transform"
            :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
          />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition-[grid-template-rows] duration-300 ease-out overflow-hidden"
        leave-active-class="transition-[grid-template-rows] duration-200 ease-in overflow-hidden"
        enter-from-class="grid-rows-[0fr]"
        enter-to-class="grid-rows-[1fr]"
        leave-from-class="grid-rows-[1fr]"
        leave-to-class="grid-rows-[0fr]"
      >
        <nav v-if="isOpen" class="md:hidden grid">
          <div class="flex flex-col gap-3 pb-4 min-h-0">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-foreground hover:text-foreground transition-colors"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
            <LanguageSelector class="self-start" />
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
