import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://maximilianonaveillan.github.io',
  base: '/AvaiWebPage/',
  trailingSlash: 'ignore',
});
