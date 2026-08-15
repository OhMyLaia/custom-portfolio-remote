<script setup lang="ts">
import { pressByProfile } from '~/data/press'

const { t } = useI18n()
const profile = useProfile()

const mentions = computed(() => pressByProfile[profile.value?.id ?? 'laia'] ?? pressByProfile.laia ?? [])

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <p v-if="mounted && mentions.length === 0" class="text-black/60">{{ t('press.empty') }}</p>
  <TransitionGroup
    v-else
    tag="div"
    class="grid grid-cols-1 gap-6 sm:grid-cols-2"
    enter-active-class="transition duration-700 ease-out"
    enter-from-class="opacity-0 translate-x-12"
    enter-to-class="opacity-100 translate-x-0"
  >
    <PressCard
      v-for="(mention, index) in (mounted ? mentions : [])"
      :key="mention.outlet"
      :outlet="mention.outlet"
      :url="mention.url"
      :logo-domain="mention.logoDomain"
      :images="mention.images"
      :style="{ transitionDelay: `${index * 120}ms` }"
    />
  </TransitionGroup>
</template>
