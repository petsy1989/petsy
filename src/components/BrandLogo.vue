<script setup lang="ts">
/**
 * Petsy brand lockup — dog-mark "P" + wordmark + "DOG CARE".
 *
 * Rendered as <img> rather than inline SVG on purpose: the artwork carries
 * its own gradients and a clipPath, and inlining it twice (header + footer)
 * would duplicate those element IDs on the page, which breaks the fills.
 * Source file: public/petsy-logo.svg
 */
import { asset } from '@/lib/asset'

withDefaults(
  defineProps<{
    /** Rendered height in px. Width follows the artwork's 256:98 ratio. */
    height?: number
  }>(),
  { height: 38 },
)
</script>

<template>
  <img
    :src="asset('/petsy-logo.svg')"
    alt="Petsy — dog care"
    :style="{ height: `${height}px` }"
    class="block w-auto"
  />
</template>
