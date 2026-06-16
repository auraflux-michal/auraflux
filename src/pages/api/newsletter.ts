import type { APIRoute } from 'astro';
import { subscribeToMailerlite } from '../../lib/mailerlite';
import { isValidEmail } from '../../lib/validate';
import { MAILERLITE_API_KEY, MAILERLITE_GROUP_ID } from 'astro:env/server';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: 'Nieprawidłowe dane formularza.' }, { status: 400 });
  }

  const email = body.email;
  if (!isValidEmail(email)) {
    return Response.json({ ok: false, message: 'Podaj poprawny adres e-mail.' }, { status: 400 });
  }

  const apiKey = MAILERLITE_API_KEY;
  const groupId = MAILERLITE_GROUP_ID;

  if (!apiKey) {
    console.error('[newsletter] MAILERLITE_API_KEY not configured — skipping subscribe call');
    return Response.json({ ok: true });
  }

  try {
    await subscribeToMailerlite(apiKey, { email, groupId });
  } catch (err) {
    console.error('[newsletter] Mailerlite subscribe failed:', err);
  }

  return Response.json({ ok: true });
};
