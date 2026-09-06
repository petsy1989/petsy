import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // Served as a GitHub Pages project site at rolfo85.github.io/petsy/,
  // not from the domain root.
  base: '/petsy/',
  plugins: [vue(), tailwindcss()],
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
