<script setup lang="ts">
const { t } = useI18n()
const profile = useProfile()
</script>

<template>
  <section class="relative flex flex-col gap-8 py-4">
    <svg
      class="pointer-events-none absolute -top-10 -left-16 -z-10 w-56 h-56 text-brand-secondary/20 md:w-72 md:h-72"
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M28.7,-44.1C43.5,-35.1,66.2,-37.8,75.6,-30.6C84.9,-23.4,80.9,-6.2,76.4,9.5C71.8,25.1,66.7,39.2,57.8,50.8C48.9,62.3,36.2,71.3,23.4,71.2C10.6,71,-2.4,61.7,-13.5,54.5C-24.6,47.4,-33.9,42.4,-38.8,34.7C-43.7,27.1,-44.3,16.8,-50.4,4.5C-56.4,-7.8,-68,-22.1,-68,-34.9C-68.1,-47.7,-56.6,-59,-43.4,-68.7C-30.1,-78.5,-15.1,-86.6,-4.1,-80.3C6.9,-73.9,13.8,-53.1,28.7,-44.1Z"
        transform="translate(100 100)"
      />
    </svg>

    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{{ t('contact.kicker') }}</p>
      <h2 class="text-3xl md:text-5xl text-black">{{ t('sections.contact') }}</h2>
    </div>

    <ContactForm />

    <p class="max-w-2xl border-l-4 border-accent pl-4 whitespace-pre-line italic text-black/70 text-pretty">
      {{ t('contact.note') }}
    </p>

    <div v-if="profile?.cv?.es || profile?.cv?.en" class="flex flex-wrap gap-3">
      <a
        v-if="profile?.cv?.es"
        :href="profile.cv.es"
        download
        class="inline-flex items-center gap-2 border border-black/20 text-black/80 px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors hover:border-accent hover:text-accent"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        {{ t('contact.downloadCvEs') }}
      </a>
      <a
        v-if="profile?.cv?.en"
        :href="profile.cv.en"
        download
        class="inline-flex items-center gap-2 border border-black/20 text-black/80 px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors hover:border-accent hover:text-accent"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        {{ t('contact.downloadCvEn') }}
      </a>
    </div>
  </section>
</template>
