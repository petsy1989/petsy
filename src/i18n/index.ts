/**
 * Tiny i18n module — no router dependency.
 *
 * Locale is derived from the URL path: `/zh` is Traditional Chinese,
 * `/zh-CN` is Simplified Chinese, everything else is English (the
 * default). Switching languages is a full page navigation to the
 * equivalent path with the other prefix.
 */

import { computed, ref } from 'vue'
import en, { type Content } from './locales/en'
import zh from './locales/zh'
import zhCN from './locales/zh-cn'

export type Locale = 'en' | 'zh' | 'zh-CN'

const locales: Record<Locale, Content> = { en, zh, 'zh-CN': zhCN }

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  zh: '繁體',
  'zh-CN': '简体',
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const path = window.location.pathname
  if (path === '/zh-CN' || path.startsWith('/zh-CN/')) return 'zh-CN'
  if (path === '/zh' || path.startsWith('/zh/')) return 'zh'
  return 'en'
}

export const locale = ref<Locale>(detectLocale())

/** Reactive content for the active locale. */
export const content = computed<Content>(() => locales[locale.value])

/** Strips any locale prefix (/zh, /zh-CN) from a path. */
function stripPrefix(path: string): string {
  if (path === '/zh-CN') return '/'
  if (path === '/zh') return '/'
  if (path.startsWith('/zh-CN/')) return path.slice(6)
  if (path.startsWith('/zh/')) return path.slice(3)
  return path
}

/** URL prefix for the given locale (empty for English). */
export function localePrefix(target: Locale): string {
  if (target === 'zh') return '/zh'
  if (target === 'zh-CN') return '/zh-CN'
  return ''
}

/** Builds the URL for the current page in the given locale. */
export function localeUrl(target: Locale, path?: string): string {
  const current = path ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  const bare = stripPrefix(current)
  return `${localePrefix(target)}${bare === '/' ? '/' : bare}`
}

/** Prefixes an internal path (e.g. /intake-form/) with the active locale. */
export function localizePath(path: string): string {
  return `${localePrefix(locale.value)}${path}`
}

/** Sets <html lang> and the document title for the active locale. */
export function applyDocumentLocale(): void {
  document.documentElement.lang =
    locale.value === 'zh' ? 'zh-Hant' : locale.value === 'zh-CN' ? 'zh-Hans' : 'en'
}
