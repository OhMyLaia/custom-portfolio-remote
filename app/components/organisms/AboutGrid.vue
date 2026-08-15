<script setup lang="ts">
import { aboutByProfile } from '~/data/about'

const { locale, t } = useI18n()
const profile = useProfile()

const chapters = computed(() => {
  const byLocale = aboutByProfile[profile.value?.id ?? 'laia'] ?? aboutByProfile.laia!
  return byLocale[locale.value] ?? byLocale.en! ?? []
})
</script>

<template>
  <p v-if="chapters.length === 0" class="text-black/60">{{ t('about.empty') }}</p>
  <div v-else class="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-2 lg:flex lg:flex-1 lg:flex-col lg:min-h-0">
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex-1 lg:min-h-0 lg:grid-cols-5 lg:grid-rows-2">
      <FlipImageCard
        v-for="(chapter, index) in chapters"
        :key="chapter.title"
        :title="chapter.title"
        :text="chapter.text"
        :image="chapter.image"
        :peek-on-mount="index === 0"
      />
    </div>
  </div>
</template>
