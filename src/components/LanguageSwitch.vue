<script setup lang="ts">
import { locale, localeNames, localeUrl, type Locale } from '@/i18n'

const locales: Locale[] = ['en', 'zh']
</script>

<template>
  <div class="flex items-center gap-2 text-[0.95rem] font-medium" role="group" aria-label="Language">
    <template v-for="(l, i) in locales" :key="l">
      <span v-if="i > 0" class="h-3.5 w-px bg-ink/20" aria-hidden="true" />
      <a
        v-if="l !== locale"
        :href="localeUrl(l)"
        :lang="l === 'zh' ? 'zh-Hant' : 'en'"
        class="text-ink/70 transition-colors hover:text-ink"
      >
        {{ localeNames[l] }}
      </a>
      <span v-else class="text-ink" aria-current="true">{{ localeNames[l] }}</span>
    </template>
  </div>
</template>
