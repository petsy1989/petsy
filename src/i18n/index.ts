/**
 * Tiny i18n module — no router dependency.
 *
 * Locale is derived from the URL path: anything under `/zh` is Chinese,
 * everything else is English (the default). Switching languages is a
 * full page navigation to the equivalent path with the other prefix.
 */

import { computed, ref } from 'vue'
import en, { type Content } from './locales/en'
import zh from './locales/zh'

export type Locale = 'en' | 'zh'

const locales: Record<Locale, Content> = { en, zh }

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const path = window.location.pathname
  return path === '/zh' || path.startsWith('/zh/') ? 'zh' : 'en'
}

export const locale = ref<Locale>(detectLocale())

/** Reactive content for the active locale. */
export const content = computed<Content>(() => locales[locale.value])

/** Strips the /zh prefix (if present) from a path. */
function stripPrefix(path: string): string {
  if (path === '/zh') return '/'
  if (path.startsWith('/zh/')) return path.slice(3)
  return path
}

/** Builds the URL for the current page in the given locale. */
export function localeUrl(target: Locale, path?: string): string {
  const current = path ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  const bare = stripPrefix(current)
  return target === 'zh' ? `/zh${bare === '/' ? '/' : bare}` : bare
}

/** Prefixes an internal path (e.g. /intake-form/) with the active locale. */
export function localizePath(path: string): string {
  return locale.value === 'zh' ? `/zh${path}` : path
}

/** Sets <html lang> and the document title for the active locale. */
export function applyDocumentLocale(): void {
  document.documentElement.lang = locale.value === 'zh' ? 'zh-Hant' : 'en'
}
