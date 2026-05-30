import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// base: './' makes asset paths relative so the build works on GitHub Pages
// project sites (served from /<repo-name>/) without hardcoding the repo name.
export default defineConfig({
  base: './',
  plugins: [vue()],
})
