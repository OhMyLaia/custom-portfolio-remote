<script setup lang="ts">
import { projectsByLocale } from '~/data/projects'

const { locale } = useI18n()

const projects = computed(() => projectsByLocale[locale.value] ?? projectsByLocale.en)

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
    <ProjectCard
      v-for="(entry, index) in (mounted ? projects : [])"
      :key="entry.company"
      :entry="entry"
      :style="{ transitionDelay: `${index * 120}ms` }"
    />
  </TransitionGroup>
</template>
