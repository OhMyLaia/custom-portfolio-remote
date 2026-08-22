<script setup lang="ts">
const { t } = useI18n()
useSeoHead('press')
</script>

<template>
  <section id="press" class="flex flex-col gap-6 scroll-mt-24">
    <h1 class="text-2xl font-semibold text-black">{{ t('sections.press') }}</h1>
    <PressList />
  </section>
</template>
