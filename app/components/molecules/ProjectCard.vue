<script setup lang="ts">
import type { ExperienceEntry } from '~/data/experience'

const props = withDefaults(defineProps<{ entry?: ExperienceEntry }>(), {
  entry: () => ({
    dateRange: '2018 — 2024',
    title: 'Lead Engineer',
    company: 'Upstatement',
    companyUrl: 'https://upstatement.com',
    previousRoles: ['Senior Engineer', 'Engineer'],
    description:
      'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
    tags: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'React Native', 'WordPress', 'Contentful', 'Node.js', 'PHP']
  })
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-[8rem_1fr] sm:h-64 bg-brand-text/90 rounded-2xl shadow-xl shadow-black/15 sm:rounded-none sm:shadow-none md:rounded-lg overflow-hidden">
    <div class="h-40 sm:h-auto bg-ink">
      <img v-if="entry.image" :src="entry.image" :alt="entry.company" class="card-image h-full w-full object-cover" />
    </div>
    <div class="p-6 overflow-y-auto">
      <component
        :is="entry.companyUrl ? 'a' : 'span'"
        :href="entry.companyUrl"
        :target="entry.companyUrl ? '_blank' : undefined"
        :rel="entry.companyUrl ? 'noopener' : undefined"
        class="inline-flex items-center gap-1 text-brand-cream"
        :class="{ 'underline': entry.companyUrl }"
      >
        {{ entry.title }} &middot; {{ entry.company }}
        <span v-if="entry.companyUrl" aria-hidden="true">&#8599;</span>
      </component>

      <p class="mt-1 text-sm text-foreground/60">{{ entry.dateRange }}</p>

      <ul v-if="entry.previousRoles?.length" class="mt-1">
        <li v-for="role in entry.previousRoles" :key="role">{{ role }}</li>
      </ul>

      <p class="mt-3 text-foreground">{{ entry.description }}</p>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="tag in entry.tags" :key="tag">
          <Chip :label="tag"
          color="foreground"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card-image {
  object-position: top;
}

@media (min-width: 640px) {
  .card-image {
    object-position: v-bind('props.entry.imagePosition ?? "center"');
  }
}
</style>
