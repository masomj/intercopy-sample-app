import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Set VITE_BASE to your GitHub Pages repo path, e.g. /intercopy-sample-app/
// Defaults to / for local dev and custom domains
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  plugins: [vue()],
  base,
})
