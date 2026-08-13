<script setup lang="ts">
import { experienceByLocale } from '~/data/experience'

const { locale } = useI18n()

const experience = computed(() => experienceByLocale[locale.value] ?? experienceByLocale.en)

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <TransitionGroup
    tag="div"
    class="flex flex-col gap-3"
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
  >
    <ProfessionalExpCard
      v-for="(entry, index) in (mounted ? experience : [])"
      :key="entry.company"
      :entry="entry"
      :style="{ transitionDelay: `${index * 120}ms` }"
    />
  </TransitionGroup>
</template>
