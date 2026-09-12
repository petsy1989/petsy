import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

export default defineConfig({
  // Served from the custom domain root (petsy.care).
  base: '/',
  plugins: [
    vue(),
    tailwindcss(),
    {
      // Dev-server support for the /zh locale prefix: rewrite /zh/* to the
      // underlying page so Vite serves the same HTML.
      name: 'locale-prefix-rewrite',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url?.startsWith('/zh/')) {
            req.url = req.url.slice(3)
          } else if (req.url === '/zh') {
            req.url = '/'
          }
          next()
        })
      },
    },
    {
      // Static-host support for the /zh prefix: emit /zh/index.html and
      // /zh/intake-form/index.html copies so GitHub Pages (or any static
      // host) resolves them without rewrite rules.
      name: 'locale-prefix-pages',
      closeBundle() {
        const dist = fileURLToPath(new URL('./dist', import.meta.url))
        const copies: [string, string][] = [
          ['index.html', 'zh/index.html'],
          ['intake-form/index.html', 'zh/intake-form/index.html'],
        ]
        for (const [from, to] of copies) {
          const src = join(dist, from)
          const dest = join(dist, to)
          mkdirSync(dirname(dest), { recursive: true })
          copyFileSync(src, dest)
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        'intake-form': fileURLToPath(new URL('./intake-form/index.html', import.meta.url)),
      },
    },
  },
})
