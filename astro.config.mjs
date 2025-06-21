import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import swup from '@swup/astro';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://m3ripple.js.org',
  base: '/',
  trailingSlash: 'always',
  integrations: [react(), mdx(), swup({ theme: false, globalInstance: true })],
});
