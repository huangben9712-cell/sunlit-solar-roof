import type { APIRoute } from 'astro';
import { buildInfo } from '../lib/buildInfo';

export const prerender = true;

/**
 * GET /build-info.json — which commit is this deployment built from?
 * Used after every deployment to prove production matches a known commit.
 */
export const GET: APIRoute = () =>
  new Response(`${JSON.stringify(buildInfo, null, 2)}\n`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
