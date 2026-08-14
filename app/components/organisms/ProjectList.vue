<script setup lang="ts">
import { projectsByProfile } from '~/data/projects'

const { locale, t } = useI18n()
const profile = useProfile()

const projects = computed(() => {
  const byLocale = projectsByProfile[profile.value?.id ?? 'laia'] ?? projectsByProfile.laia!
  return byLocale[locale.value] ?? byLocale.en! ?? []
})

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <p v-if="mounted && projects.length === 0" class="text-black/60">{{ t('projects.empty') }}</p>
  <TransitionGroup
    v-else
    tag="div"
    class="flex flex-col gap-6 sm:gap-3"
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
