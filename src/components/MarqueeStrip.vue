<script setup lang="ts">
import { computed } from 'vue'
import { content } from '@/i18n'

// Rendered twice back-to-back so the -50% translate loops seamlessly.
const loop = computed(() => [...content.value.marquee, ...content.value.marquee])
</script>

<template>
  <div class="overflow-hidden bg-forest py-4 text-cream select-none" aria-hidden="true">
    <div class="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
      <template v-for="(word, i) in loop" :key="`${word}-${i}`">
        <span class="font-display text-xl tracking-tight sm:text-2xl">{{ word }}</span>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" class="shrink-0 opacity-70">
          <ellipse cx="10" cy="13" rx="4.2" ry="3.4" fill="var(--color-butter)" />
          <ellipse cx="4.4" cy="8.4" rx="1.9" ry="2.5" fill="var(--color-butter)" />
          <ellipse cx="15.6" cy="8.4" rx="1.9" ry="2.5" fill="var(--color-butter)" />
          <ellipse cx="8" cy="4.6" rx="1.8" ry="2.4" fill="var(--color-butter)" />
          <ellipse cx="12" cy="4.6" rx="1.8" ry="2.4" fill="var(--color-butter)" />
        </svg>
      </template>
    </div>
  </div>
</template>
