import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Harutyun-Mkhitaryan.github.io',
  base: '/Mariam-Art-3d-scroll',
  integrations: [tailwind()]
});
