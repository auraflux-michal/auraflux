// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: process.env.SANITY_PROJECT_ID || 'placeholder',
      dataset: process.env.SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
      // Content is fetched via GROQ directly in component frontmatter.
      // Studio is not embedded here — auraflux uses a standalone Sanity Studio.
    }),
  ],
  env: {
    schema: {
      SANITY_PROJECT_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      SANITY_DATASET: envField.string({ context: 'server', access: 'secret', optional: true }),
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      MAILERLITE_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      MAILERLITE_GROUP_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      NOTION_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      NOTION_DATABASE_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
