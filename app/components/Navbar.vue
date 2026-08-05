<script setup lang="ts">
const profile = useProfile()

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
]

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-brand-bg/10 bg-brand-primary text-brand-bg">
    <div class="px-4">
      <div class="flex items-center justify-between py-4">
        <span class="font-bold">{{ profile?.name }}</span>

        <!-- Classic navbar: md and up -->
        <nav class="hidden md:flex gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-brand-bg/80 hover:text-brand-bg transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Burger button: below md -->
        <button
          type="button"
          class="md:hidden inline-flex flex-col justify-center gap-1.5 w-8 h-8"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation menu"
          @click="isOpen = !isOpen"
        >
          <span
            class="block h-0.5 w-6 bg-brand-bg transition-transform"
            :class="isOpen ? 'translate-y-2 rotate-45' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-brand-bg transition-opacity"
            :class="isOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="block h-0.5 w-6 bg-brand-bg transition-transform"
            :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
          />
        </button>
      </div>

      <!-- Mobile menu -->
      <nav v-if="isOpen" class="md:hidden flex flex-col gap-3 pb-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-brand-bg/80 hover:text-brand-bg transition-colors"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
