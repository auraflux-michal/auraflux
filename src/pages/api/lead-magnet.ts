import type { APIRoute } from 'astro';
import { subscribeToMailerlite } from '../../lib/mailerlite';
import { isValidEmail, isNonEmptyString } from '../../lib/validate';
import { MAILERLITE_API_KEY, MAILERLITE_GROUP_ID } from 'astro:env/server';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: 'Nieprawidłowe dane formularza.' }, { status: 400 });
  }

  const name = body.name;
  const email = body.email;
  if (!isNonEmptyString(name) || !isValidEmail(email)) {
    return Response.json({ ok: false, message: 'Podaj imię i poprawny adres e-mail.' }, { status: 400 });
  }

  const apiKey = MAILERLITE_API_KEY;
  const groupId = MAILERLITE_GROUP_ID;

  if (!apiKey) {
    console.error('[lead-magnet] MAILERLITE_API_KEY not configured — skipping subscribe call');
    return Response.json({ ok: true });
  }

  try {
    // Subscribing triggers a Mailerlite automation that emails the PDF guide.
    await subscribeToMailerlite(apiKey, { email, name, groupId });
  } catch (err) {
    console.error('[lead-magnet] Mailerlite subscribe failed:', err);
  }

  return Response.json({ ok: true });
};
