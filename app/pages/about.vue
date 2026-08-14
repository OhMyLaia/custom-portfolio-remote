<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="flex flex-col gap-6 lg:flex-1 lg:min-h-0">
    <h2 class="text-2xl font-semibold text-black">{{ t('sections.about') }}</h2>
    <AboutGrid />
  </section>
</template>
