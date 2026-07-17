import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const SITE_URL = 'https://portfolio-rogerk2rk.vercel.app'

const htmlFilesIn = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) return entry === 'assets' ? [] : htmlFilesIn(full)
    return entry.endsWith('.html') ? [full] : []
  })

// dist/index.html -> /   |   dist/blog.html -> /blog   |   dist/blog/x.html -> /blog/x
const toRoute = (file) => {
  const path = file.replace(/^dist/, '').replace(/\.html$/, '')
  return path === '/index' ? '/' : path
}

// Le sitemap est dérivé des pages réellement présentes dans dist/ : il ne peut
// donc pas se désynchroniser quand un article est ajouté ou supprimé.
const buildSitemap = () => {
  const entries = htmlFilesIn('dist')
    .filter((f) => !f.endsWith('404.html'))
    .map((file) => {
      const route = toRoute(file)
      // La date de publication est déjà dans le HTML de l'article : on la relit
      // plutôt que de la redéclarer ici.
      const published = readFileSync(file, 'utf8').match(
        /property="article:published_time" content="([^"]+)"/
      )
      return {
        loc: `${SITE_URL}${route}`,
        lastmod: published?.[1],
        priority: route === '/' ? '1.0' : route.startsWith('/blog/') ? '0.6' : '0.8',
      }
    })
    .sort((a, b) => a.loc.localeCompare(b.loc))

  const urls = entries
    .map(({ loc, lastmod, priority }) =>
      [
        '  <url>',
        `    <loc>${loc}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n')

  writeFileSync(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  )
  console.log(`[sitemap] ${entries.length} URLs -> dist/sitemap.xml`)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    onFinished: buildSitemap,
  },
})
