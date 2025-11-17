import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/aperture/', 
  plugins: [
    ghPages()
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});