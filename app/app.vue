<script setup lang="ts">
const profile = useProfile()
const { locale } = useI18n()
const absoluteUrl = useAbsoluteUrl()

const personJsonLd = computed(() => {
  const seo = profile.value?.seo
  if (!seo?.fullName) return null
  const sameAs = [
    profile.value?.social?.linkedin,
    profile.value?.social?.github,
    profile.value?.social?.twitter,
    profile.value?.social?.instagram
  ].filter(Boolean)
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seo.fullName,
    alternateName: seo.alternateNames,
    url: absoluteUrl(),
    image: seo.image ? absoluteUrl(seo.image) : undefined,
    jobTitle: seo.jobTitle?.[locale.value],
    email: profile.value?.contactEmail ? `mailto:${profile.value.contactEmail}` : undefined,
    sameAs: sameAs.length ? sameAs : undefined
  })
})

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  },
  style: [
    {
      innerHTML: computed(() => {
        const colors = profile.value?.colors
        if (!colors) return ''
        return `:root {
  --color-brand-primary: ${colors.primary};
  --color-brand-secondary: ${colors.secondary};
  --color-brand-accent: ${colors.accent};
  --color-brand-cream: ${colors.cream};
  --color-brand-text: ${colors.text};
}`
      })
    }
  ],
  script: computed(() =>
    personJsonLd.value
      ? [{ type: 'application/ld+json', innerHTML: personJsonLd.value }]
      : []
  )
})
</script>

<template>
  <div class="bg-foreground text-foreground min-h-screen overflow-hidden">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
