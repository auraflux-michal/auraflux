const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Verifies a Cloudflare Turnstile token server-side. Must run before any
 * other processing in a form endpoint — see skills.md Role 4.
 */
export async function verifyTurnstile(token: string | undefined, secretKey: string | undefined, remoteIp?: string): Promise<boolean> {
  if (!secretKey) {
    // Turnstile not configured yet in this environment — fail closed in
    // production, but allow local/dev testing without a secret.
    return import.meta.env.DEV;
  }
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret: secretKey, response: token });
    if (remoteIp) body.set('remoteip', remoteIp);

    const res = await fetch(VERIFY_URL, { method: 'POST', body });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error('[turnstile] verification request failed:', err);
    return false;
  }
}
