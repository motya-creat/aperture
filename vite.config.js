import { defineConfig } from 'vite';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    ghPages({
      base: process.env.NODE_ENV === 'production' ? '/<aperture>/' : '/',
      repo: '<motya-creat>/<aperture>',
      branch: 'gh-pages',
    }),
  ],
});
