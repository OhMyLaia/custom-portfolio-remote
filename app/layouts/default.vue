<script setup lang="ts">
const profile = useProfile()

const socialLinks = computed(() => {
  const social = profile.value?.social ?? {}
  return Object.entries(social).filter(([, url]) => !!url) as [string, string][]
})
</script>

<template>
  <div class="lg:flex lg:flex-col lg:min-h-dvh">
    <Navbar />

    <main class="max-w-3xl mx-auto px-4 flex flex-col gap-10 pb-6 pt-0 md:pt-6 lg:flex-1 lg:min-h-0">
      <slot />
    </main>

    <footer class="max-w-3xl mx-auto px-4 flex items-center justify-between py-6 text-sm">
      <span>&copy; {{ new Date().getFullYear() }} {{ profile?.name }}</span>
      <div class="flex gap-3">
        <a v-for="[network, url] in socialLinks" :key="network" :href="url" target="_blank" rel="noopener">{{ network }}</a>
      </div>
    </footer>
  </div>
</template>
