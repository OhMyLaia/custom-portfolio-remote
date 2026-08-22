<script setup lang="ts">
const { t } = useI18n()
useSeoHead('experience')
</script>

<template>
  <section class="flex flex-col gap-6">
    <h1 class="text-2xl font-semibold text-black">{{ t('sections.experience') }}</h1>
    <ExperienceList />
  </section>
</template>
