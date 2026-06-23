import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Using relative base paths makes the build output works on any subpath or domain (like GitHub Pages)
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        spot: resolve(__dirname, 'spot.html')
      }
    }
  }
});
