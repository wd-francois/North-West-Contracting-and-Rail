// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://norwestcontractingandrail.com.au',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // CSS is ~8 KB gzipped; inlining removes the render-blocking request
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
  // Keep old WordPress URLs working
  redirects: {
    '/contracting/': '/civil-contracting/',
    '/careers/': '/contact-us/',
    '/employee-portal-login/': '/',
    '/home-main/': '/',
  },
});
