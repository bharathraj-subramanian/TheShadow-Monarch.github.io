// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL must match the deployed address (Cloudflare Pages project name or custom domain).
// It feeds canonical links, the sitemap, robots.txt and the social image URL.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://bharathraj-subramanian.pages.dev',
  trailingSlash: 'always',
});
