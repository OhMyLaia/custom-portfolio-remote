<script setup lang="ts">
const profile = useProfile()
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  },
  style: [
    {
      innerHTML: computed(() => {
        const colors = profile.value?.colors
        if (!colors) return ''
        return `:root {
  --color-brand-primary: ${colors.primary};
  --color-brand-secondary: ${colors.secondary};
  --color-brand-accent: ${colors.accent};
  --color-brand-cream: ${colors.cream};
  --color-brand-text: ${colors.text};
}`
      })
    }
  ]
})
</script>

<template>
  <div class="bg-foreground text-foreground min-h-screen overflow-hidden">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
