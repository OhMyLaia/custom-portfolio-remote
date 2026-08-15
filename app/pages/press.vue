<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="press" class="flex flex-col gap-6 scroll-mt-24">
    <h2 class="text-2xl font-semibold text-black">{{ t('sections.press') }}</h2>
    <PressList />
  </section>
</template>
