import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://avai.cl',
  base: '/',
  trailingSlash: 'ignore',
});
