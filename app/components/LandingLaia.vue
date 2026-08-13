<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <img src="/images/laia/hero.png" alt="Laia" class="w-full md:max-w-lg my-4 scale-110" />
    <p class="max-w-sm text-brand-text/70">
      {{ t('home.description') }}
    </p>
  </div>
</template>
