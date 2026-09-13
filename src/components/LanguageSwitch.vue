<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { locale, localeNames, localeUrl, type Locale } from '@/i18n'

const locales: Locale[] = ['en', 'zh', 'zh-CN']

const langAttrs: Record<Locale, Record<string, string>> = {
  en: { lang: 'en' },
  zh: { lang: 'zh-Hant' },
  'zh-CN': { lang: 'zh-Hans' },
}

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const otherLocales = computed(() => locales.filter((l) => l !== locale.value))

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) close()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class="relative" data-language-switch>
    <button
      type="button"
      class="flex items-center gap-1.5 text-[0.95rem] font-medium text-ink/70 transition-colors hover:text-ink"
      aria-haspopup="listbox"
      :aria-expanded="open"
      aria-label="Choose language"
      @click="toggle"
    >
      <span v-bind="langAttrs[locale]" class="text-ink">{{ localeNames[locale] }}</span>
      <svg
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
        aria-hidden="true"
        class="transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
      >
        <path
          d="M1 1l3.5 3.5L8 1"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-if="open"
        class="absolute left-0 top-full z-10 mt-2 rounded-xl border border-ink/8 bg-cream py-1 shadow-lg shadow-ink/5"
        role="listbox"
        aria-label="Language"
      >
        <li v-for="l in otherLocales" :key="l">
          <a
            :href="localeUrl(l)"
            v-bind="langAttrs[l]"
            class="block whitespace-nowrap px-4 py-2 text-[0.95rem] font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
            role="option"
            aria-selected="false"
          >
            {{ localeNames[l] }}
          </a>
        </li>
      </ul>
    </Transition>
  </div>
</template>