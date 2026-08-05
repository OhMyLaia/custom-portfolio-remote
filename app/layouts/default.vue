<script setup lang="ts">
const profile = useProfile()

const socialLinks = computed(() => {
  const social = profile.value?.social ?? {}
  return Object.entries(social).filter(([, url]) => !!url) as [string, string][]
})
</script>

<template>
  <div class="max-w-2xl mx-auto px-4">
    <header class="flex items-center justify-between py-4">
      <span class="font-bold">{{ profile?.name }}</span>
      <nav class="flex gap-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main class="flex flex-col gap-10 py-6">
      <slot />
    </main>

    <footer class="flex items-center justify-between py-6 text-sm">
      <span>&copy; {{ new Date().getFullYear() }} {{ profile?.name }}</span>
      <div class="flex gap-3">
        <a v-for="[network, url] in socialLinks" :key="network" :href="url" target="_blank" rel="noopener">{{ network }}</a>
      </div>
    </footer>
  </div>
</template>
