<script setup lang="ts">
const profile = useProfile()

useHead({
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
  <div class="min-h-screen bg-alice-blue text-alice-blue">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
