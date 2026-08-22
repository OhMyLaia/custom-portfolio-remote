<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  text: string
  image?: string
  peekOnMount?: boolean
}>(), {
  image: undefined,
  peekOnMount: false
})

const isActive = ref(false)

function toggle() {
  isActive.value = !isActive.value
}

onMounted(() => {
  if (!props.peekOnMount) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  setTimeout(() => {
    isActive.value = true
    setTimeout(() => {
      isActive.value = false
    }, 900)
  }, 600)
})
</script>

<template>
  <div
    class="flip-card-outer relative aspect-[4/5] lg:aspect-auto lg:h-full cursor-pointer"
    tabindex="0"
    role="button"
    :aria-expanded="isActive"
    :aria-label="title"
    @click="toggle"
    @keydown.enter.prevent="toggle"
    @keydown.space.prevent="toggle"
  >
    <div class="flip-card-inner absolute inset-0" :class="{ 'is-active': isActive }">
      <div class="flip-card-face flip-card-front absolute inset-0 overflow-hidden bg-foreground">
        <NuxtImg
          v-if="image"
          :src="image"
          :alt="title"
          width="480"
          height="600"
          sizes="100vw sm:50vw lg:20vw"
          quality="75"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="flip-card-face flip-card-back absolute inset-0 flex items-center overflow-y-auto bg-black p-4 lg:p-5">
        <p class="text-sm lg:text-base leading-relaxed text-foreground">
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

.flip-card-face {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Mobile & tablet: flip is click/tap-toggled */
@media (max-width: 1023.98px) {
  .flip-card-inner.is-active {
    transform: rotateY(180deg);
  }
}

/* Desktop: flip on hover (and keyboard focus) instead of click */
@media (min-width: 1024px) {
  .flip-card-outer:hover .flip-card-inner,
  .flip-card-outer:focus-visible .flip-card-inner {
    transform: rotateY(180deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .flip-card-inner {
    transition: none;
  }
}
</style>
