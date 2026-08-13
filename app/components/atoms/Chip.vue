<script setup lang="ts">
type ChipColor = 'surface' | 'accent' | 'ink' | 'foreground'

const props = withDefaults(defineProps<{ label: string; color?: ChipColor }>(), {
  color: 'surface'
})

const colorClasses: Record<ChipColor, string> = {
  surface: 'bg-surface text-foreground',
  accent: 'bg-accent text-black',
  ink: 'bg-ink text-foreground',
  foreground: 'bg-foreground text-black'
}
</script>

<template>
  <span class="rounded-full px-3 py-1 text-sm" :class="colorClasses[props.color]">
    {{ label }}
  </span>
</template>
