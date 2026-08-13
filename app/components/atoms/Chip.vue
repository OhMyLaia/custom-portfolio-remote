<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="rounded-full bg-brand-accent px-3 py-1 text-sm text-white">
    {{ label }}
  </span>
</template>
