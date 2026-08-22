export default defineEventHandler((event) => {
  const { origin } = getRequestURL(event)
  setHeader(event, 'Content-Type', 'text/plain')
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
})
