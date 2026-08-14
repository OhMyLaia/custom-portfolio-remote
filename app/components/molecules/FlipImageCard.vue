<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  text: string
  image?: string
}>(), {
  image: undefined
})

const isActive = ref(false)

function toggle() {
  isActive.value = !isActive.value
}
</script>

<template>
  <div
    class="flip-card-outer relative aspect-[4/5] cursor-pointer"
    tabindex="0"
    role="button"
    :aria-expanded="isActive"
    :aria-label="title"
    @click="toggle"
    @keydown.enter.prevent="toggle"
    @keydown.space.prevent="toggle"
  >
    <div class="flip-card-inner absolute inset-0" :class="{ 'is-active': isActive }">
      <div class="flip-card-face flip-card-front absolute inset-0 overflow-hidden bg-brand-primary">
        <img
          v-if="image"
          :src="image"
          :alt="title"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div
          v-else
          class="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary/60 to-brand-text"
          aria-hidden="true"
        />
      </div>

      <div class="flip-card-face flip-card-back absolute inset-0 flex items-center overflow-y-auto bg-brand-text p-4 sm:p-5">
        <p class="text-sm leading-relaxed text-foreground">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card-outer {
  perspective: 1000px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.is-active {
  transform: rotateY(180deg);
}

.flip-card-face {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .flip-card-inner {
    transition: none;
  }
}
</style>
