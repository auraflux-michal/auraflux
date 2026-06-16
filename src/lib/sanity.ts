import { createClient, type ClientConfig } from '@sanity/client';
import { SANITY_PROJECT_ID, SANITY_DATASET } from 'astro:env/server';

const config: ClientConfig = {
  projectId: SANITY_PROJECT_ID || 'placeholder',
  dataset: SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
};

export const sanityClient = createClient(config);

const isSanityConfigured = Boolean(SANITY_PROJECT_ID && SANITY_PROJECT_ID !== 'placeholder');

/**
 * Fetches a GROQ query from Sanity, falling back to static content when the
 * CMS isn't configured yet (no SANITY_PROJECT_ID) or the request fails.
 * Pages call this directly in their frontmatter per the GROQ-in-component
 * convention — there is no local content layer for production data.
 */
export async function safeFetch<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const result = await sanityClient.fetch<T>(query, params);
    return result ?? fallback;
  } catch (err) {
    console.error('[sanity] GROQ fetch failed, using fallback content:', err);
    return fallback;
  }
}
