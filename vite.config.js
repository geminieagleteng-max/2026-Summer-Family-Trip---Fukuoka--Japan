import { defineConfig } from 'vite';

export default defineConfig({
  // Using relative base paths makes the build output works on any subpath or domain (like GitHub Pages)
  base: './',
  build: {
    outDir: 'dist'
  }
});
