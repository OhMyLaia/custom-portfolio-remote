const paths = ['/', '/about', '/projects', '/experience', '/press', '/contact']

export default defineEventHandler((event) => {
  const { origin } = getRequestURL(event)
  setHeader(event, 'Content-Type', 'application/xml')

  const urls = paths
    .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
