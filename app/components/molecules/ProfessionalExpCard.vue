<script setup lang="ts">
import type { ExperienceEntry } from '~/data/experience'

withDefaults(defineProps<{ entry?: ExperienceEntry }>(), {
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
  <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 rounded-lg border border-brand-primary/10 bg-brand-primary/5 p-6">
    <span class="text-sm text-brand-text/50 whitespace-nowrap">{{ entry.dateRange }}</span>
    <div>
      <component
        :is="entry.companyUrl ? 'a' : 'span'"
        :href="entry.companyUrl"
        :target="entry.companyUrl ? '_blank' : undefined"
        :rel="entry.companyUrl ? 'noopener' : undefined"
        class="inline-flex items-center gap-1 font-semibold text-brand-accent"
        :class="{ 'hover:underline': entry.companyUrl }"
      >
        {{ entry.title }} &middot; {{ entry.company }}
        <span v-if="entry.companyUrl" aria-hidden="true">&#8599;</span>
      </component>

      <ul v-if="entry.previousRoles?.length" class="mt-1 text-brand-text/50">
        <li v-for="role in entry.previousRoles" :key="role">{{ role }}</li>
      </ul>

      <p class="mt-3 text-brand-text/80">{{ entry.description }}</p>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="tag in entry.tags" :key="tag">
          <Chip :label="tag" />
        </li>
      </ul>
    </div>
  </div>
</template>
