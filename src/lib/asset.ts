/**
 * Resolves a path under /public against Vite's configured base URL.
 *
 * GitHub Pages serves this as a project site (rolfo85.github.io/petsy/),
 * not from the domain root, so hardcoded "/images/foo.jpg"-style paths
 * would 404 once deployed. Route every public-asset reference through
 * this instead of writing the leading slash directly in a template.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}
