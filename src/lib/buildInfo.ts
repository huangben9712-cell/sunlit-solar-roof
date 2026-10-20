/**
 * Build provenance.
 *
 * Production has historically drifted from this repository because nobody could
 * tell which source tree a deployment came from. Every build now embeds the
 * commit it was built from, so `curl https://www.sunlitsolarroof.com/build-info.json`
 * answers "what is actually live?" in one request.
 *
 * The values are supplied by CI as PUBLIC_BUILD_* variables; a local build
 * reports "local".
 */

const commit = (
  import.meta.env.PUBLIC_BUILD_COMMIT ??
  process.env.CF_PAGES_COMMIT_SHA ??
  'local'
).trim();
const branch = (
  import.meta.env.PUBLIC_BUILD_BRANCH ??
  process.env.CF_PAGES_BRANCH ??
  'local'
).trim();

export const buildInfo = {
  commit: commit.slice(0, 12),
  branch,
  builtAt: new Date().toISOString(),
} as const;
