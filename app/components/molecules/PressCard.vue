<script setup lang="ts">
const props = withDefaults(defineProps<{
  outlet: string
  url: string
  logoDomain: string
  images?: string[]
}>(), {
  images: () => []
})

const logoSrc = computed(() => `https://www.google.com/s2/favicons?domain=${props.logoDomain}&sz=128`)

const visibleImages = computed(() => props.images.slice(0, 4))
const extraCount = computed(() => Math.max(props.images.length - 4, 0))

const fanTransforms = [
  { rotate: -7, x: -12, y: -4 },
  { rotate: 6, x: 12, y: -2 },
  { rotate: -4, x: -8, y: 10 },
  { rotate: 8, x: 10, y: 8 }
]

function photoStyle(index: number) {
  const t = fanTransforms[index % fanTransforms.length]!
  return {
    transform: `translate(${t.x}%, ${t.y}%) rotate(${t.rotate}deg)`,
    zIndex: String(fanTransforms.length - index)
  }
}
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="group block overflow-hidden rounded-2xl bg-brand-cream/70 p-4 shadow-lg shadow-ink/10 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/20"
  >
    <div class="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15">
      <template v-if="visibleImages.length > 1">
        <img
          v-for="(image, index) in visibleImages"
          :key="image"
          :src="image"
          :alt="outlet"
          class="photo absolute left-[15%] top-[15%] h-[65%] w-[65%] rounded-lg object-cover shadow-md ring-4 ring-brand-cream transition-transform duration-500 group-hover:scale-[1.03]"
          :style="photoStyle(index)"
        />
        <span
          v-if="extraCount > 0"
          class="absolute bottom-2 right-2 z-10 rounded-full bg-ink px-2 py-0.5 text-xs font-semibold text-foreground"
        >
          +{{ extraCount }}
        </span>
      </template>

      <img
        v-else-if="visibleImages.length === 1"
        :src="visibleImages[0]"
        :alt="outlet"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div v-else class="absolute inset-0 flex items-center justify-center">
        <img :src="logoSrc" :alt="outlet" class="h-12 w-12 rounded-md opacity-70" />
      </div>
    </div>

    <div class="mt-4 flex items-center gap-2">
      <img :src="logoSrc" :alt="outlet" class="h-5 w-5 rounded" />
      <span class="font-semibold text-black">{{ outlet }}</span>
      <span
        class="ml-auto text-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        &#8599;
      </span>
    </div>
  </a>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .photo {
    transition: none;
  }
}
</style>
