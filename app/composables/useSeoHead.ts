export type SeoPage = 'home' | 'about' | 'projects' | 'experience' | 'press' | 'contact'

export function useSeoHead(page: SeoPage) {
  const profile = useProfile()
  const { t, locale, localeProperties } = useI18n()
  const route = useRoute()
  const absoluteUrl = useAbsoluteUrl()

  const name = computed(() => profile.value?.seo?.fullName || profile.value?.name || '')
  const jobTitle = computed(() => profile.value?.seo?.jobTitle?.[locale.value] || '')

  const title = computed(() => t(`seo.${page}.title`, { name: name.value, jobTitle: jobTitle.value }))
  const description = computed(() => t(`seo.${page}.description`, { name: name.value, jobTitle: jobTitle.value }))
  const canonical = computed(() => absoluteUrl(route.path))
  const image = computed(() => {
    const path = profile.value?.seo?.image
    return path ? absoluteUrl(path) : undefined
  })
  const ogLocale = computed(() => (localeProperties.value?.language || locale.value).replace('-', '_'))

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogType: 'website',
    ogLocale,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    robots: 'index, follow'
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }]
  })
}
