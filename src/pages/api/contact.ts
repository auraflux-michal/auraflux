import type { APIRoute } from 'astro';
import { verifyTurnstile } from '../../lib/turnstile';
import { sendEmail } from '../../lib/resend';
import { logLeadToNotion } from '../../lib/notion';
import { isValidEmail, isNonEmptyString } from '../../lib/validate';
import { TURNSTILE_SECRET_KEY, RESEND_API_KEY, NOTION_API_KEY, NOTION_DATABASE_ID, CONTACT_TO_EMAIL } from 'astro:env/server';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: 'Nieprawidłowe dane formularza.' }, { status: 400 });
  }

  const turnstileToken = typeof body['cf-turnstile-response'] === 'string' ? (body['cf-turnstile-response'] as string) : undefined;
  const verified = await verifyTurnstile(turnstileToken, TURNSTILE_SECRET_KEY, clientAddress);
  if (!verified) {
    return Response.json({ ok: false, message: 'Weryfikacja bezpieczeństwa nie powiodła się. Odśwież stronę i spróbuj ponownie.' }, { status: 403 });
  }

  const name = body.name;
  const email = body.email;
  const message = body.message;

  if (!isNonEmptyString(name) || !isValidEmail(email) || !isNonEmptyString(message, 5000)) {
    return Response.json({ ok: false, message: 'Wypełnij wszystkie pola poprawnymi danymi.' }, { status: 400 });
  }

  const resendKey = RESEND_API_KEY;
  const notionKey = NOTION_API_KEY;
  const notionDb = NOTION_DATABASE_ID;
  const toEmail = CONTACT_TO_EMAIL || 'czesc@auraflux.pl';

  const results = await Promise.allSettled([
    resendKey
      ? sendEmail(resendKey, {
          to: toEmail,
          from: 'auraflux <kontakt@auraflux.pl>',
          subject: `Nowe zapytanie od ${name}`,
          html: `<p><b>Imię:</b> ${escapeHtml(name)}</p><p><b>E-mail:</b> ${escapeHtml(email)}</p><p><b>Wiadomość:</b></p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
        })
      : Promise.reject(new Error('RESEND_API_KEY not configured')),
    notionKey && notionDb
      ? logLeadToNotion(notionKey, notionDb, { name, email, message, source: 'contact-form' })
      : Promise.reject(new Error('NOTION_API_KEY/NOTION_DATABASE_ID not configured')),
  ]);

  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      console.error(`[contact] integration ${i === 0 ? 'Resend' : 'Notion'} failed:`, r.reason);
    }
  });

  // We never surface third-party failures as a 500 — the lead is still
  // acknowledged to the user even if a downstream integration is degraded.
  return Response.json({ ok: true });
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
