import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://artkuchnie.pl',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
