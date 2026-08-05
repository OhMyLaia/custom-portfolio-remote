<script setup lang="ts">
const profile = useProfile()

const socialLinks = computed(() => {
  const social = profile.value?.social ?? {}
  return Object.entries(social).filter(([, url]) => !!url) as [string, string][]
})
</script>

<template>
  <div>
    <header>
      <span>{{ profile?.name }}</span>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <span>&copy; {{ new Date().getFullYear() }} {{ profile?.name }}</span>
      <a v-for="[network, url] in socialLinks" :key="network" :href="url" target="_blank" rel="noopener">{{ network }}</a>
    </footer>
  </div>
</template>
