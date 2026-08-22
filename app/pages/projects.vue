<script setup lang="ts">
const { t } = useI18n()
useSeoHead('projects')
</script>

<template>
  <section class="flex flex-col gap-6">
    <h1 class="text-2xl font-semibold text-black">{{ t('sections.projects') }}</h1>
    <ProjectList />
  </section>
</template>
