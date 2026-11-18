import { defineMiddleware } from 'astro:middleware';

// Staging password gate (HTTP Basic Auth).
// This Vercel project is the staging site (auraflux-chi.vercel.app), so the gate
// is on for every Vercel deployment. Local dev stays open.
// Override the default password with the STAGING_PASSWORD env var.
const DEFAULT_PASSWORD = 'aura-dbf4567f';

export const onRequest = defineMiddleware(async (context, next) => {
  const isStaging = !!process.env.VERCEL || !!process.env.STAGING_PASSWORD;
  if (!isStaging) return next();
  const password = process.env.STAGING_PASSWORD || DEFAULT_PASSWORD;

  const header = context.request.headers.get('authorization') ?? '';
  if (header.startsWith('Basic ')) {
    const decoded = atob(header.slice(6));
    const pass = decoded.slice(decoded.indexOf(':') + 1);
    if (pass === password) return next();
  }

  return new Response('Wymagane hasło', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="auraflux staging", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  });
});
